<?php

class bt_bb_masonry_portfolio_tiles extends BT_BB_Element {

	function __construct() {
		parent::__construct();
		add_action( 'wp_ajax_bt_bb_get_tiles_portfolio', array( __CLASS__, 'bt_bb_get_tiles_portfolio_callback' ) );
		add_action( 'wp_ajax_nopriv_bt_bb_get_tiles_portfolio', array( __CLASS__, 'bt_bb_get_tiles_portfolio_callback' ) );
	}

	static function bt_bb_get_tiles_portfolio_callback() {	
                check_ajax_referer( 'bt-bb-masonry-portfolio-tiles-nonce', 'bt-nonce' );
		bt_bb_masonry_portfolio_tiles::dump_grid( intval( $_POST['number'] ), $_POST['category'], $_POST['show'], sanitize_text_field( $_POST['format'] ) );
		die();
	}

	static function dump_grid( $number, $category, $show, $format ) {

		$show = unserialize( urldecode( $show ) );

		$output = '';
		$output .= '<div class="bt_bb_grid_sizer"></div>';

		$cat_slug_arr = array();
		if ( $category != '' ) {
			$cat_slug_arr = explode( ',', $category );
			$masonry_tiles_portfolios = bt_bb_get_posts( $number, 0, $cat_slug_arr, 'portfolio' );	
		}else{
			$masonry_tiles_portfolios = bt_bb_get_posts( $number, 0, '', 'portfolio' );	
		}

		$format_arr = array();
		if ( $format != '' ) {
			$format_arr = explode( ',', $format );
		}	
		
		$n = 0;
		foreach( $masonry_tiles_portfolios as $item ) {
			
			$id = get_post_thumbnail_id( $item['ID'] );
			$img = wp_get_attachment_image_src( $id, 'boldthemes_large_square' );

			if ( isset( $format_arr[ $n ] ) ) {
				switch ( $format_arr[ $n ] ){
					case '11': 
						$img = wp_get_attachment_image_src( $id, 'boldthemes_large_square' );
						break;
					case '21': 
						$img = wp_get_attachment_image_src( $id, 'boldthemes_large_rectangle' );
						break;
					case '12': 
						$img = wp_get_attachment_image_src( $id, 'boldthemes_large_vertical_rectangle' );
						break;
					case '22': 
						$img = wp_get_attachment_image_src( $id, 'boldthemes_large_square' );
						break;
					default: 
						$img = wp_get_attachment_image_src( $id, 'boldthemes_large_square' );
						break;
				}
			}

			$img_src = '';
			if ( $img ) {
				$img_src = $img[0];
			}

			$hw = 0;
			if ( $img_src != '' ) {
				$hw = $img[2] / $img[1];
			}

			$img_full = wp_get_attachment_image_src( $id, 'full' );
			
			$img_src_full = '';
			if ( $img_full ) {
				$img_src_full = $img_full[0];
			}
			
			$tile_format = 'bt_bb_tile_format11';
			
			if ( isset( $format_arr[ $n ] ) ) {
				$tile_format = 'bt_bb_tile_format';
				if ( $format_arr[ $n ] == '21' || $format_arr[ $n ] == '12' || $format_arr[ $n ] == '22' ) {
					$tile_format .= '_' . $format_arr[ $n ];
				} else {
					$tile_format .= '11';
				}
			}

			$output .= '<div class="bt_bb_grid_item ' . $tile_format . '" data-hw="' .  esc_attr( $hw ) . '" data-src="' . esc_attr( $img_src ) . '" data-src-full="' . esc_attr( $img_src_full ) . '" data-title="' . esc_attr( $item['title'] ) . '">
							<div class="bt_bb_grid_item_inner" data-hw="' . esc_attr( $hw ) . '" >
								<div class="bt_bb_grid_item_post_thumbnail">
									<a href="' . esc_url_raw( $item['permalink'] ) . '" title="' . esc_attr( $item['title'] ) . '">
										<img class="bt_bb_grid_item_inner_image" src="' . esc_url_raw( $img_src ) . '"/>
									</a>
								</div>
								<div class="bt_bb_grid_item_inner_content"><div class="triangle-starter"><div class="triangle-plus"></div></div>';

								$output .= '<h5 class="bt_bb_grid_item_post_title">' . $item['title'] . '</h5>';
								

								if ( $show['excerpt'] ) {
									$output .= '<div class="bt_bb_grid_item_post_excerpt">' . $item['excerpt'] . '</div>';
								}

					$output .= '</div>';
							if ( $show['title'] ) {
									$output .= '<div class="bt_bb_grid_item_post_title_init"><h5>' . $item['title'] . '</h5></div>';
							}
				$output .= '</div>
			</div>';
			$n++;
		}

		echo '<div><div class="bt_bb_masonry_post_image_content">' . $output . '</div></div>';
                wp_die(); 
	}

	function handle_shortcode( $atts, $content ) {
		extract( shortcode_atts( apply_filters( 'bt_bb_extract_atts', array(
			'look'	          => '',
			'number'          => '',
			'columns'         => '',
			'format'		  => '',
			'gap'             => '',
			'category'        => '',
			'category_filter' => '',			
			'show_excerpt'    => '',
			'show_title'	  => ''
		) ), $atts, $this->shortcode ) );

		wp_enqueue_script( 'jquery-masonry' );

		wp_enqueue_script( 
			'bt_bb_portfolio_tiles',
			get_template_directory_uri() . '/bold-page-builder/content_elements/bt_bb_masonry_portfolio_tiles/bt_bb_portfolio_tiles.js',
			array( 'jquery' )
		);
		
		wp_localize_script( 'bt_bb_portfolio_tiles', 'ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );

		wp_enqueue_style( 
			'bt_bb_portfolio_tiles', 
			get_template_directory_uri() . '/bold-page-builder/content_elements_misc/css/bt_bb_masonry_portfolio_tiles.css', 
			array(), 
			false, 
			'screen' 
		);

		$class = array( $this->shortcode, 'bt_bb_grid_container' );

		if ( $el_class != '' ) {
			$class[] = $el_class;
		}	

		$id_attr = '';
		if ( $el_id != '' ) {
			$id_attr = ' ' . 'id="' . esc_attr( $el_id ) . '"';
		}

		$style_attr = '';
		if ( $el_style != '' ) {
			$style_attr = ' ' . 'style="' . esc_attr( $el_style ) . '"';
		}

		if ( $columns != '' ) {
			$class[] = $this->prefix . 'columns' . '_' . $columns;
		}
		
		if ( $gap != '' ) {
			$class[] = $this->prefix . 'gap' . '_' . $gap;
		}
		
		if ( $look != '' ) {
			$class[] = $this->prefix . 'look' . '_' . $look;
		}
		
		if ( $number > 1000 || $number == '' ) {
			$number = 1000;
		} else if ( $number < 1 ) {
			$number = 1;
		}

		$show = array( 'excerpt' => false, 'title' => false );
		if ( $show_excerpt == 'show_excerpt' ) {
			$show['excerpt'] = true;
		}
		if ( $show_title == 'show_title' ) {
			$show['title'] = true;
		}

		$output = '';
		
		if ( $category_filter == 'yes' ) {
			$cat_arr = get_terms( 'portfolio_category' );
			$cats = array();
			if ( $category != '' ) {
				$cat_slug_arr = explode( ',', $category );
				foreach ( $cat_arr as $cat ) {
					if ( in_array( $cat->slug, $cat_slug_arr ) ) {
						$cats[] = $cat;
					}
				}
			} else {
				$cats = $cat_arr;
			}
			$output .= '<div class="bt_bb_post_grid_filter">';
				$cat_arr = array();
				foreach ( $cats as $cat ) {
					$cat_arr[] = isset( $cat->slug ) ? $cat->slug : '';
				}
				$output .= '<span class="bt_bb_masonry_portfolio_tiles_filter_item bt_bb_post_grid_filter_item active" data-category-portfolio="' . esc_attr( join( ',', $cat_arr ) ) . '" data-format-portfolio="' . esc_attr( $format ) . '" data-post-type="portfolio">' . esc_html__( 'All', 'avantage' ) . '</span>';
				foreach ( $cats as $cat ) {
					$cat_slug = isset( $cat->slug ) ? $cat->slug : "";
					$cat_name = isset( $cat->name ) ? $cat->name : "";
					$output .= '<span class="bt_bb_masonry_portfolio_tiles_filter_item bt_bb_post_grid_filter_item" data-category-portfolio="' . esc_attr( $cat_slug ) . '"  data-format-portfolio="' . esc_attr( $format ) . '" data-post-type="portfolio">' . $cat_name . '</span>';
                                    
				}
			$output .= '</div>';
		}

		$class = apply_filters( $this->shortcode . '_class', $class, $atts );
                
		$output .= '<div class="bt_bb_masonry_portfolio_tiles_content bt_bb_masonry_post_grid_content bt_bb_grid_hide" data-bt-nonce="' . esc_attr( wp_create_nonce( 'bt-bb-masonry-portfolio-tiles-nonce' ) ) . '" data-number-portfolio="' . esc_attr( $number ) . '" data-format-portfolio="' . esc_attr( $format ) . '" data-category-portfolio="' . esc_attr( $category ) . '"  data-post-type="portfolio" data-show-portfolio="' . urlencode( serialize( $show ) ) . '"><div class="bt_bb_grid_sizer"></div></div>';

		$output .= '<div class="bt_bb_post_grid_loader"><span class="box1"></span><span class="box2"></span><span class="box3"></span><span class="box4"></span><span class="box5"></span></div>';
                
                $output = '<div' . $id_attr . ' class="' . implode( ' ', $class ) . '"' . $style_attr . ' data-columns="' . esc_attr( $columns ) . '">' . $output . '</div>';

		
		$output = apply_filters( 'bt_bb_general_output', $output, $atts );
		$output = apply_filters( $this->shortcode . '_output', $output, $atts );

		return $output;
	}

	function map_shortcode() {

		bt_bb_map( $this->shortcode, array( 'name' => esc_html__( 'Masonry Portfolio Tiles', 'avantage' ), 'description' => esc_html__( 'Masonry tiles with portfolio', 'avantage' ), 'icon' => $this->prefix_backend . 'icon' . '_' . $this->shortcode,
			'params' => array(
				array( 'param_name' => 'look', 'type' => 'dropdown', 'heading' => esc_html__( 'Look and feel', 'avantage' ), 'preview' => true,
					'value' => array(
						esc_html__('Triangular', 'avantage' ) => 'triangular',
						esc_html__('Triangle focus element', 'avantage' ) => 'triangle',
						esc_html__('Circle focus element', 'avantage' ) => 'circle',
						esc_html__('Gradient background', 'avantage' ) => 'gradient_bgn',
						esc_html__('Solid background', 'avantage' ) => 'solid_bgn'
					)
				),
				array( 'param_name' => 'number', 'type' => 'textfield', 'heading' => esc_html__( 'Number of items', 'avantage' ), 'description' => esc_html__( 'Enter number of items or leave empty to show all (up to 1000)', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'columns', 'type' => 'dropdown', 'heading' => esc_html__( 'Columns', 'avantage' ), 'preview' => true,
					'value' => array(
						esc_html__('1', 'avantage' ) => '1',
						esc_html__('2', 'avantage' ) => '2',
						esc_html__('3', 'avantage' ) => '3',
						esc_html__('4', 'avantage' ) => '4',
						esc_html__('5', 'avantage' ) => '5',
						esc_html__('6', 'avantage' ) => '6'
					)
				),
				array( 'param_name' => 'gap', 'type' => 'dropdown', 'heading' => esc_html__( 'Gap', 'avantage' ),
					'value' => array(
						esc_html__('No gap', 'avantage' ) => 'no_gap',
						esc_html__('Small', 'avantage' ) => 'small',
						esc_html__('Normal', 'avantage' ) => 'normal',
						esc_html__('Large', 'avantage' ) => 'large'
					)
				),
				array( 'param_name' => 'category', 'type' => 'textfield', 'heading' => esc_html__( 'Category', 'avantage' ), 'description' => esc_html__( 'Enter category slug or leave empty to show all', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'category_filter', 'type' => 'dropdown', 'heading' => esc_html__( 'Category filter', 'avantage' ),
					'value' => array(
						esc_html__('No', 'avantage' ) => 'no',
						esc_html__('Yes', 'avantage' ) => 'yes'
					)
				),
				array( 'param_name' => 'format', 'type' => 'textfield', 'preview' => true, 'heading' => esc_html__( 'Tiles format', 'avantage' ), 'description' => esc_html__( 'e.g. 11, 21, 12, 22', 'avantage' ), 'preview' => true
				),				
				array( 'param_name' => 'show_title', 'type' => 'checkbox', 'value' => array( esc_html__( 'Yes', 'avantage' ) => 'show_title' ), 'heading' => esc_html__( 'Show title', 'avantage' ), 'preview' => true
				),
				array( 'param_name' => 'show_excerpt', 'type' => 'checkbox', 'value' => array( esc_html__( 'Yes', 'avantage' ) => 'show_excerpt' ), 'heading' => esc_html__( 'Show excerpt', 'avantage' ), 'preview' => true
				),
			)
		) );
	} 
}