<?php

class bt_bb_latest_posts extends BT_BB_Element {

	function handle_shortcode( $atts, $content ) {
		extract( shortcode_atts( apply_filters( 'bt_bb_extract_atts_' . $this->shortcode, array(
			'look'			=> '',
			'date_design'		=> '',
			'rows'            	=> '',
			'columns'         	=> '',
			'gap'             	=> '',
			'category'        	=> '',
			'target'          	=> '',
			'image_shape'     	=> '',
			'show_dash'             => '',
			'show_category'   	=> '',
			'show_date'       	=> '',
			'show_author'     	=> '',
			'show_comments'   	=> '',
			'show_excerpt'    	=> '',
			'show_read_more'    => '',
			'lazy_load'  		=> 'no'
		) ), $atts, $this->shortcode ) );
		
		$class = array( $this->shortcode );
		
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

		$date_design_format         = '';
		$date_design_format_day     = '';
		$date_design_format_month   = '';
		if ( $date_design != '' ) {
			$class[] = $this->prefix . 'date_design' . '_' . $date_design;
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
		
		if ( $show_dash != '' ) {
			$class[] = $this->prefix . 'show_dash' . '_' . $show_dash;
		}
		
		if ( $image_shape != '' ) {
			$class[] = $this->prefix . 'image_shape' . '_' . $image_shape;
		}
		
		$class = apply_filters( $this->shortcode . '_class', $class, $atts );
		
		$number = $rows * $columns;
		
		$posts = bt_bb_get_posts( $number, 0, $category );
		
		$output = '';

		foreach( $posts as $post_item ) {

			$output .= '<div class="' . esc_attr( $this->shortcode ) . '_item">';
				$post_thumbnail_id = get_post_thumbnail_id( $post_item['ID'] );

				if ( $post_thumbnail_id != '' ) {
					$img = wp_get_attachment_image_src( $post_thumbnail_id, $size = 'boldthemes_medium_square' );
					$img_src = BT_BB_Root::$path . 'img/blank.gif';
					$data_img = '';
					if ( $lazy_load == 'yes' ) {
						$img_class = 'btLazyLoadImage';
						if ( $img ) {
							$data_img = ' data-image_src="' . esc_attr( $img[0] ) . '';
						}
					} else {
						if ( $img ) {
							$img_src = $img[0];
						}
						$img_class = '';
					}
					$output .= '<div class="' . esc_attr( $this->shortcode ) . '_item_image"><a href="' . esc_url_raw( $post_item['permalink'] ) . '" target="' . esc_attr( $target ) . '"><img src="' . esc_url_raw( $img_src ) . '" alt="' . esc_attr( $post_item['title'] ) . '" title="' . esc_attr( $post_item['title'] ) . '" class="' . esc_attr( $img_class ) . '" ' . $data_img .  '"></a></div>';
				}

				$output .= '<div class="' . esc_attr( $this->shortcode ) . '_item_content">';
				
					if ( $show_category == 'show_category' ) {
						$output .= '<div class="' . esc_attr( $this->shortcode ) . '_item_category">';
							$output .= $post_item['category_list'];
						$output .= '</div>';
					}

					if ( $show_date == 'show_date' || $show_author == 'show_author' || $show_author == 'show_comments' ) {
				
						$meta_output = '<div class="' . esc_attr( $this->shortcode ) . '_item_meta">';

							if ( $show_date == 'show_date' ) {
								$meta_output .= '<span class="' . esc_attr( $this->shortcode ) . '_item_date">';
                                                                    if ( $date_design_format_day != '' && $date_design_format_month != '' ){
                                                                            $meta_output .= '<span class="' . esc_attr( $this->shortcode ) . '_item_date ' . esc_attr( $this->shortcode ) . '_item_date_day">';
                                                                                $meta_output .= get_the_date( $date_design_format_day, $post_item['ID'] );
                                                                            $meta_output .= '</span>';
                                                                            $meta_output .= '<span class="' . esc_attr( $this->shortcode ) . '_item_date ' . esc_attr( $this->shortcode ) . '_item_date_month">';
                                                                                $meta_output .= get_the_date( $date_design_format_month, $post_item['ID'] );
                                                                            $meta_output .= '</span>';
                                                                    }else{
                                                                            $meta_output .= get_the_date( $date_design_format, $post_item['ID'] );
                                                                    }                                                                        
								$meta_output .= '</span>';
							}

							if ( $show_author == 'show_author' ) {
								$meta_output .= '<span class="' . esc_attr( $this->shortcode ) . '_item_author">';
									$meta_output .= $post_item['author'];
								$meta_output .= '</span>';
							}

							if ( $show_comments == 'show_comments' && $post_item['comments'] != '' ) {
								$meta_output .= '<span class="' . esc_attr( $this->shortcode ) . '_item_comments">';
									$meta_output .= $post_item['comments'];
								$meta_output .= '</span>';
							}
				
						$meta_output .= '</div>';
		
						$output .= $meta_output;
		
					}

					$output .= '<h5 class="' . esc_attr( $this->shortcode ) . '_item_title">';
						$output .= '<a href="' . esc_url_raw( $post_item['permalink'] ) . '" target="' . esc_attr( $target ) . '">' . $post_item['title'] . '</a>';
					$output .= '</h5>';
					
					if ( $show_excerpt == 'show_excerpt' ) {
						$output .= '<div class="' . esc_attr( $this->shortcode ) . '_item_excerpt">';
							$output .= $post_item['excerpt'];
						$output .= '</div>';
					}

					if ( $show_read_more == 'show_read_more' ) {
						$output .= '<div class="' . esc_attr( $this->shortcode ) . '_item_read_more">';
							$output .= '<a href="' . esc_url_raw( $post_item['permalink'] ) . '" target="' . esc_attr( $target ) . '">' . esc_html__( 'Read more', 'avantage' ) . '</a>';
						$output .= '</div>';
					}
					
				$output .= '</div>';
				
			$output .= '</div>';
		}

		$output = '<div' . $id_attr . ' class="' . esc_attr( implode( ' ', $class ) ) . '"' . $style_attr . '>' . $output . '</div>';
		
		$output = apply_filters( 'bt_bb_general_output', $output, $atts );
		$output = apply_filters( $this->shortcode . '_output', $output, $atts );

		return $output;

	}

	function map_shortcode() {

		bt_bb_map( $this->shortcode, array( 'name' => esc_html__( 'Latest Posts', 'avantage' ), 'description' => esc_html__( 'List of latest posts', 'avantage' ), 'icon' => $this->prefix_backend . 'icon' . '_' . $this->shortcode,
			'params' => array(
				array( 'param_name' => 'look', 'type' => 'dropdown', 'heading' => esc_html__( 'Look and feel', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Design', 'avantage' ),
					'value' => array(
						esc_html__('Standard without images', 'avantage' ) => 'standard',
						esc_html__('Standard with first highlighted', 'avantage' ) => 'standard_highlighted',
						esc_html__('All highlighted', 'avantage' ) => 'highlighted',
						esc_html__('Clean with image', 'avantage' ) => 'clean'
					)
				),
				array( 'param_name' => 'date_design', 'type' => 'dropdown', 'heading' => esc_html__( 'Design of date element', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Design', 'avantage' ),
					'value' => array(
						esc_html__('Standard', 'avantage' ) => '',
						esc_html__('Within a triangle', 'avantage' ) => 'triangle',
						esc_html__('Rounded', 'avantage' ) => 'rounded'
					)
				),
				array( 'param_name' => 'rows', 'type' => 'textfield', 'value' => '1', 'heading' => esc_html__( 'Rows', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'columns', 'type' => 'dropdown', 'value' => '3', 'heading' => esc_html__( 'Columns', 'avantage' ), 'preview' => true,
					'value' => array(
						esc_html__('1', 'avantage' ) => '1',
						esc_html__('2', 'avantage' ) => '2',
						esc_html__('3', 'avantage' ) => '3',
						esc_html__('4', 'avantage' ) => '4',
						esc_html__('6', 'avantage' ) => '6'
					)
				),
				array( 'param_name' => 'gap', 'type' => 'dropdown', 'heading' => esc_html__( 'Gap', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Design', 'avantage' ),
					'value' => array(
						esc_html__('Normal', 'avantage' ) => 'normal',
						esc_html__('No gap', 'avantage' ) => 'no_gap',
						esc_html__('Small', 'avantage' ) => 'small',
						esc_html__('Large', 'avantage' ) => 'large'
					)
				),				
				array( 'param_name' => 'category', 'type' => 'textfield', 'heading' => esc_html__( 'Category', 'avantage' ), 'description' => esc_html__( 'Enter category slug or leave empty to show all', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'target', 'type' => 'dropdown', 'heading' => esc_html__( 'Target', 'avantage' ),
					'value' => array(
						esc_html__('Self (open in same tab)', 'avantage' ) => '_self',
						esc_html__('Blank (open in new tab)', 'avantage' ) => '_blank',
					)
				),
				array( 'param_name' => 'image_shape', 'type' => 'dropdown', 'heading' => esc_html__( 'Image shape', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
					'value' => array(
						esc_html__('Square', 'avantage' ) => 'square',
						esc_html__('Rounded', 'avantage' ) => 'rounded',
						esc_html__('Round', 'avantage' ) => 'round',
						esc_html__('Slanted left', 'avantage' ) => 'slanted_left',
						esc_html__('Slanted right', 'avantage' ) => 'slanted_right'
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
				array( 'param_name' => 'show_read_more', 'type' => 'checkbox', 'value' => array( esc_html__( 'Yes', 'avantage' ) => 'show_read_more' ), 'heading' => esc_html__( 'Show read more link', 'avantage' ), 'preview' => true
				),
				array( 'param_name' => 'lazy_load', 'type' => 'dropdown', 'default' => 'yes', 'heading' => esc_html__( 'Lazy load images', 'avantage' ),
					'value' => array(
						esc_html__( 'No', 'avantage' ) => 'no',
						esc_html__( 'Yes', 'avantage' ) => 'yes'
					)
				)
			)
		) );
	} 
}