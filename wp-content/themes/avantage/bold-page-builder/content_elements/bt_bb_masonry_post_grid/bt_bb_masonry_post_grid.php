<?php

class bt_bb_masonry_post_grid extends BT_BB_Element {

	function __construct() {
		parent::__construct();
		add_action( 'wp_ajax_bt_bb_get_grid', array( __CLASS__, 'bt_bb_get_grid_callback' ) );
		add_action( 'wp_ajax_nopriv_bt_bb_get_grid', array( __CLASS__, 'bt_bb_get_grid_callback' ) );
	}

	static function bt_bb_get_grid_callback() {
        check_ajax_referer( 'bt-bb-masonry-post-grid-nonce', 'bt-nonce' );
		bt_bb_masonry_post_grid::dump_grid( intval( $_POST['number'] ), intval( $_POST['offset'] ), $_POST['category'], $_POST['show'], $_POST['date_design'], $_POST['target'] );
		die();
	}
	
	static function dump_grid( $number, $offset, $category, $show, $date_design, $target ) {

		$show = unserialize( urldecode( $show ) );
		$prefix         = 'bt_bb_';
		$shortcode      = 'bt_bb_grid';
		$class = array();

		if ( $target == '' ) {
			$target = '_self';
		}

		$date_design_format         = '';
		$date_design_format_day     = '';
		$date_design_format_month   = '';
		if ( $date_design != '' ) {
			$class[] = $prefix . 'date_design' . '_' . $date_design;
                        switch ( $date_design ){
                            case 'triangle':
                                $date_design_format         = 'j M';
                                $date_design_format_day     = 'j';
                                $date_design_format_month   = 'M';
                                break;
                            case 'rounded':
                                $date_design_format         = 'j M';
                                $date_design_format_day     = 'j';
                                $date_design_format_month   = 'M';
                                break;
                            default:
                                $date_design_format         = '';
                                $date_design_format_day     = '';
                                $date_design_format_month   = '';
                                break;                            
                        }
		}

		$posts = bt_bb_get_posts( $number, $offset, $category );

		foreach( $posts as $item ) {
			$post_thumbnail_id = get_post_thumbnail_id( $item['ID'] ); 
			$img = wp_get_attachment_image_src( $post_thumbnail_id, 'boldthemes_large_square' );
			$img_src = $img[0];
			$hw = 0;
			if ( $img_src != '' ) {
				$hw = $img[2] / $img[1];
			}
			$alt = get_post_meta( $post_thumbnail_id, '_wp_attachment_image_alt', true );
			$alt = $alt != '' ? $alt : $item['title'];
                                $output = '<div class="bt_bb_grid_item_post_thumbnail"><a href="' . esc_url_raw( $item['permalink'] ) . '" title="' . esc_attr( $item['title'] ) . '"></a></div>';
				$output .= '<div class="bt_bb_grid_item_post_content">';

                                if ( $show['category'] ) {
                                        $output .= '<div class="bt_bb_grid_item_category">';
                                                $output .= $item['category_list'];
                                        $output .= '</div>';
                                }

                                if ( $show['date'] || $show['author'] || $show['comments'] ) {

                                        $meta_output = '<div class="bt_bb_grid_item_meta">';

                                                if ( $show['date'] ) {
                                                    $meta_output .= '<span class="' . esc_attr( $shortcode ) . '_item_date">';
                                                        if ( $date_design_format_day != '' && $date_design_format_month != '' ){
                                                                $meta_output .= '<span class="' . esc_attr( $shortcode ) . '_item_date ' . esc_attr( $shortcode ) . '_item_date_day">';
                                                                    $meta_output .= get_the_date( $date_design_format_day, $item['ID'] );
                                                                $meta_output .= '</span>';
                                                                $meta_output .= '<span class="' . esc_attr( $shortcode ) . '_item_date ' . esc_attr( $shortcode ) . '_item_date_month">';
                                                                    $meta_output .= get_the_date( $date_design_format_month, $item['ID'] );
                                                                $meta_output .= '</span>';
                                                        }else{
                                                                $meta_output .= get_the_date( $date_design_format, $item['ID'] );
                                                        }                                                                        
                                                    $meta_output .= '</span>';
                                                }

                                                if ( $show['author'] ) {
                                                        $meta_output .= '<span class="bt_bb_grid_item_item_author">';
                                                                $meta_output .= $item['author'];
                                                        $meta_output .= '</span>';
                                                }

                                                if ( $show['comments'] && $item['comments'] != '' ) {
                                                        $meta_output .= '<span class="bt_bb_grid_item_item_comments">';
                                                                $meta_output .= $item['comments'];
                                                        $meta_output .= '</span>';
                                                }  

                                        $meta_output .= '</div>';

                                        $output .= $meta_output;

                                }

                                $output .= '<h5 class="bt_bb_grid_item_post_title"><a href="' . esc_url_raw( $item['permalink'] ) . '" title="' . esc_attr( $item['title'] ) . '">' . $item['title'] . '</a></h5>';

                                if ( $show['excerpt'] ) {
                                        $output .= '<div class="bt_bb_grid_item_post_excerpt">' . $item['excerpt'] . '</div>';
                                }

                                if ( $show['share'] ) {
                                        $output .= '<div class="bt_bb_grid_item_post_share">' . $item['share'] . '</div>';
                                }

                                if ( $show['read_more'] ) {
                                        $output .= '<div class="bt_bb_grid_item_item_read_more">';
                                                $output .= '<a href="' . esc_url_raw( $item['permalink'] ) . '" target="' . esc_attr( $target ) . '">' . esc_html__( 'Read more', 'avantage' ) . '</a>';
                                        $output .= '</div>';
                                }

                                $output .= '</div></div>';			
                                
                      echo '<div class="bt_bb_grid_item" data-hw="' . esc_attr( $hw ) . '" data-src="' . esc_url_raw( $img_src ) . '" data-alt="' . esc_attr( $alt ) . '"><div class="bt_bb_grid_item_inner">' . $output . '</div>';
	
		}
                wp_die(); 
	}

	function handle_shortcode( $atts, $content ) {
		extract( shortcode_atts( apply_filters( 'bt_bb_extract_atts_' . $this->shortcode, array(
			'look'			  => '',
                        'date_design'	  => '',
			'number'          => '',
			'auto_loading'    => '',
			'columns'         => '',
			'gap'             => '',
			'category'        => '',
			'category_filter' => '',
                        'target'          => '',
			'show_dash'       => '',
			'show_category'   => '',
			'show_date'       => '',
			'show_author'     => '',
			'show_comments'   => '',
			'show_excerpt'    => '',
                        'show_read_more'  => '',
			'show_share'      => ''
		) ), $atts, $this->shortcode ) );

		wp_enqueue_script( 'jquery-masonry' );
                
                wp_enqueue_script( 
			'bt_bb_post_grid',
			get_template_directory_uri() . '/bold-page-builder/content_elements/bt_bb_masonry_post_grid/bt_bb_post_grid.js',
			array( 'jquery' )
		);
		
		wp_localize_script( 'bt_bb_post_grid', 'ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );

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

        if ( $date_design != '' ) {
			$class[] = $this->prefix . 'date_design' . '_' . $date_design;
		}
                
        if ( $show_dash != '' ) {
			$class[] = $this->prefix . 'show_dash' . '_' . $show_dash;
		}

		if ( $show_read_more != '' ) {
			$class[] = $this->prefix . 'show_read_more' . '_' . $show_read_more;
		}
		
		if ( $number > 1000 || $number == '' ) {
			$number = 1000;
		} else if ( $number < 1 ) {
			$number = 1;
		}

		$show = array( 'category' => false, 'date' => false, 'author' => false, 'comments' => false, 'excerpt' => false, 'share' => false, 'read_more' => false );
		if ( $show_category == 'show_category' ) {
			$show['category'] = true;
		}
		if ( $show_date == 'show_date' ) {
			$show['date'] = true;
		}
		if ( $show_author == 'show_author' ) {
			$show['author'] = true;
		}
		if ( $show_comments == 'show_comments' ) {
			$show['comments'] = true;
		}
		if ( $show_excerpt == 'show_excerpt' ) {
			$show['excerpt'] = true;
		}
		if ( $show_share == 'show_share' ) {
			$show['share'] = true;
		}
		 if ( $show_read_more != '' ) {
			$show['read_more'] = true;
		}

		$output = '';
		
		if ( $category_filter == 'yes' ) {
			$cat_arr = get_categories();
			
			$cats = array();
			if ( $category != '' ) {
				$cat_slug_arr = explode( ',', $category );
				$cat_id_arr = get_terms( array( 'category' ), array( 'fields' => 'ids' ), array( 'slug' => $cat_slug_arr ) );
				foreach ( $cat_arr as $cat ) {
					if ( in_array( $cat->slug, $cat_slug_arr ) || in_array( $cat->parent, $cat_id_arr ) ) {
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
				$output .= '<span class="bt_bb_masonry_post_grid_filter_item bt_bb_post_grid_filter_item active" data-category="' . esc_attr( join( ',', $cat_arr ) ) . '">' . esc_html__( 'All', 'avantage' ) . '</span>';
				foreach ( $cats as $cat ) {
					$output .= '<span class="bt_bb_masonry_post_grid_filter_item bt_bb_post_grid_filter_item" data-category="' . esc_attr( $cat->slug ) . '">' . $cat->name . '</span>';
				}
			$output .= '</div>';
		}
		
		$class = apply_filters( $this->shortcode . '_class', $class, $atts );

		$output .= '<div class="bt_bb_masonry_post_post_grid_content bt_bb_masonry_post_grid_content bt_bb_grid_hide" data-bt-nonce="' . esc_attr( wp_create_nonce( 'bt-bb-masonry-post-grid-nonce' ) ) . '" data-number="' . esc_attr( $number ) . '" data-category="' . esc_attr( $category ) . '" data-show="' . esc_attr( urlencode( serialize( $show ) ) ) . '" data-auto-loading="' . esc_attr( $auto_loading ) . '" data-date-design="' . esc_attr( $date_design ) . '"  data-target="' . esc_attr( $target ) . '"><div class="bt_bb_grid_sizer"></div></div>';

		$output .= '<div class="bt_bb_post_grid_loader"><span class="box1"></span><span class="box2"></span><span class="box3"></span><span class="box4"></span><span class="box5"></span></div>';

		$output = '<div' . $id_attr . ' class="' . esc_attr( implode( ' ', $class ) ) . '"' . $style_attr . ' data-columns="' . esc_attr( $columns ) . '">' . $output . '</div>';

		$output = apply_filters( 'bt_bb_general_output', $output, $atts );
		$output = apply_filters( $this->shortcode . '_output', $output, $atts );

		return $output;

	}

	function map_shortcode() {

		bt_bb_map( $this->shortcode, array( 'name' => esc_html__( 'Masonry Post Grid', 'avantage' ), 'description' => esc_html__( 'Masonry grid with posts', 'avantage' ), 'icon' => $this->prefix_backend . 'icon' . '_' . $this->shortcode,
			'params' => array(
				array( 'param_name' => 'look', 'type' => 'dropdown', 'heading' => esc_html__( 'Look and feel', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Design', 'avantage' ),
					'value' => array(
						esc_html__('Image above content', 'avantage' ) => 'image_above',
						esc_html__('Image underneath content', 'avantage' ) => 'image_below'
					)
				),
                array( 'param_name' => 'date_design', 'type' => 'dropdown', 'heading' => esc_html__( 'Design of date element', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Design', 'avantage' ),
					'value' => array(
						esc_html__('Standard', 'avantage' ) => '',
						esc_html__('Within a triangle', 'avantage' ) => 'triangle',
						esc_html__('Rounded', 'avantage' ) => 'rounded'
					)
				),    
				array( 'param_name' => 'number', 'type' => 'textfield', 'heading' => esc_html__( 'Number of items', 'avantage' ), 'description' => esc_html__( 'Enter number of items or leave empty to show all (up to 1000)', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'auto_loading', 'type' => 'checkbox', 'value' => array( esc_html__( 'Yes', 'avantage' ) => 'auto_loading' ), 'heading' => esc_html__( 'Load more items on scroll', 'avantage' ), 'preview' => true
				),
				array( 'param_name' => 'columns', 'type' => 'dropdown', 'heading' => esc_html__( 'Columns', 'avantage' ), 'preview' => true,
					'value' => array(
						esc_html__( '1', 'avantage' ) => '1',
						esc_html__( '2', 'avantage' ) => '2',
						esc_html__( '3', 'avantage' ) => '3',
						esc_html__( '4', 'avantage' ) => '4',
						esc_html__( '5', 'avantage' ) => '5',
						esc_html__( '6', 'avantage' ) => '6'
					)
				),
				array( 'param_name' => 'gap', 'type' => 'dropdown', 'heading' => esc_html__( 'Gap', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Design', 'avantage' ),
					'value' => array(
						esc_html__( 'No gap', 'avantage' ) => 'no_gap',
						esc_html__( 'Small', 'avantage' ) => 'small',
						esc_html__( 'Normal', 'avantage' ) => 'normal',
						esc_html__( 'Large', 'avantage' ) => 'large'
					)
				),
				array( 'param_name' => 'category', 'type' => 'textfield', 'heading' => esc_html__( 'Category', 'avantage' ), 'description' => esc_html__( 'Enter category slug or leave empty to show all', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'category_filter', 'type' => 'dropdown', 'heading' => esc_html__( 'Category filter', 'avantage' ),
					'value' => array(
						esc_html__( 'No', 'avantage' ) => 'no',
						esc_html__( 'Yes', 'avantage' ) => 'yes'
					)
				),
                                array( 'param_name' => 'target', 'type' => 'dropdown', 'heading' => esc_html__( 'Target', 'avantage' ),
					'value' => array(
						esc_html__('Self (open in same tab)', 'avantage' ) => '_self',
						esc_html__('Blank (open in new tab)', 'avantage' ) => '_blank',
					)
				),
                array( 'param_name' => 'show_dash', 'type' => 'checkbox', 'value' => array( esc_html__( 'Yes', 'avantage' ) => 'true' ), 'heading' => esc_html__( 'Show dash within category', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Design', 'avantage' ),
				),
				array( 'param_name' => 'show_category', 'type' => 'checkbox', 'value' => array( esc_html__( 'Yes', 'avantage' ) => 'show_category' ), 'heading' => esc_html__( 'Show category', 'avantage' ), 'preview' => true
				),
				array( 'param_name' => 'show_date', 'type' => 'checkbox', 'value' => array( esc_html__( 'Yes', 'avantage' ) => 'show_date' ), 'heading' => esc_html__( 'Show date', 'avantage' ), 'preview' => true
				),
				array( 'param_name' => 'show_author', 'type' => 'checkbox', 'value' => array( esc_html__( 'Yes', 'avantage' ) => 'show_author' ), 'heading' => esc_html__( 'Show author', 'avantage' ), 'preview' => true
				),
				array( 'param_name' => 'show_comments', 'type' => 'checkbox', 'value' => array( esc_html__( 'Yes', 'avantage' ) => 'show_comments' ), 'heading' => esc_html__( 'Show number of comments', 'avantage' ), 'preview' => true
				),
				array( 'param_name' => 'show_excerpt', 'type' => 'checkbox', 'value' => array( esc_html__( 'Yes', 'avantage' ) => 'show_excerpt' ), 'heading' => esc_html__( 'Show excerpt', 'avantage' ), 'preview' => true
				),
                                array( 'param_name' => 'show_read_more', 'type' => 'checkbox', 'value' => array( esc_html__( 'Yes', 'avantage' ) => 'show_share' ), 'heading' => esc_html__( 'Show read more', 'avantage' ), 'preview' => true 
				),
				array( 'param_name' => 'show_share', 'type' => 'checkbox', 'value' => array( esc_html__( 'Yes', 'avantage' ) => 'show_share' ), 'heading' => esc_html__( 'Show share icons', 'avantage' ), 'preview' => true 
				)
			)
		) );
	} 
}
