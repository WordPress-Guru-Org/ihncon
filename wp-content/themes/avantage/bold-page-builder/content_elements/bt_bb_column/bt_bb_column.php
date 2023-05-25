<?php

class bt_bb_column extends BT_BB_Element {

	function handle_shortcode( $atts, $content ) {

		extract( shortcode_atts( apply_filters( 'bt_bb_extract_atts_' . $this->shortcode, array(
			'width'    		   	=> '',
			'width_lg'               => '',
			'width_md'               => '',
			'width_sm'               => '',
			'width_xs'               => '',
			'align'   		   	=> 'left',
			'vertical_align'   		=> 'top',
			'animation'		   	=> '',
			'padding'          		=> 'normal',
			'order'                  => '',
			'background_image'      	=> '',
			'lazy_load'  			=> 'no',
			'inner_background_image'        => '',
			'background_color' 		=> '',
			'inner_background_color' 	=> '',
			'opacity'	       		=> '',
			'background_position'           => '',
			'background_size'               => '',
			'inner_background_position'     => '',
			'inner_background_size'         => '',
			'highlight'                     => 'no',
			'align_to_edge_column'            => 'no'
		) ), $atts, $this->shortcode ) );

		$class = array( $this->shortcode );
		$data_override_class = array();
		
		$class[] = $this->get_responsive_class( $width, 'xl' );
		
		if ( $width_xs != '' ) {
			$class[] = $this->get_responsive_class( $width_xs, 'xs' );
		}
		if ( $width_sm != '' ) {
			$class[] = $this->get_responsive_class( $width_sm, 'sm' );
		}
		if ( $width_md != '' ) {
			$class[] = $this->get_responsive_class( $width_md, 'md' );
		}
		if ( $width_lg != '' ) {
			$class[] = $this->get_responsive_class( $width_lg, 'lg' );
		}

		if ( $el_class != '' ) {
			$class[] = $el_class;
		}
		
		$id_attr = '';
		if ( $el_id != '' ) {
			$id_attr = 'id="' . esc_attr( $el_id ) . '"';
		}

		if ( method_exists( get_parent_class( $this ), 'responsive_data_override_class' ) ) {
			$this->responsive_data_override_class(
				$class, $data_override_class,
				array(
					'prefix' => $this->prefix,
					'param' => 'align',
					'value' => $align
				)
			);
		} else {
			if ( $align != '' ) {
				$class[] = $this->prefix . 'align' . '_' . $align;
			}
		}
		
		if ( $vertical_align != '' ) {
			$class[] = $this->prefix . 'vertical_align' . '_' . $vertical_align;
		}
		
		if ( $animation != 'no_animation' && $animation != '' ) {
			$class[] = $this->prefix . 'animation' . '_' . $animation;
			$class[] = 'animate';
		}

		

		if ( method_exists( get_parent_class( $this ), 'responsive_data_override_class' ) ) {
			$this->responsive_data_override_class(
				$class, $data_override_class,
				array(
					'prefix' => $this->prefix,
					'param' => 'padding',
					'value' => $padding
				)
			);
		} else {
			if ( $padding != '' ) {
				$class[] = $this->prefix . 'padding' . '_' . $padding;
			}
		}
		
		if ( method_exists( get_parent_class( $this ), 'responsive_override_class' ) ) {
			$this->responsive_override_class(
				$class,
				array(
					'prefix' => $this->prefix,
					'ignore' => '0',
					'param'  => 'order',
					'value'  => $order
				)
			);
		}

		if ( $background_color != '' ) {
			if ( strpos( $background_color, '#' ) !== false ) {
				$background_color = bt_bb_column::hex2rgb( $background_color );
				if ( $opacity == '' ) {
					$opacity = 1;
				}
				$el_style .= 'background-color:rgba(' . $background_color[0] . ', ' . $background_color[1] . ', ' . $background_color[2] . ', ' . $opacity . ');';
			} else {
				$el_style .= 'background-color:' . $background_color . ';';
			}
		}
		
		$el_inner_style = '';
		
		if ( $inner_background_color != '' ) {
			if ( strpos( $inner_background_color, '#' ) !== false ) {
				$inner_background_color = bt_bb_column::hex2rgb( $inner_background_color );
				if ( $opacity == '' ) {
					$opacity = 1;
				}
				$el_inner_style .= 'background-color:rgba(' . $inner_background_color[0] . ', ' . $inner_background_color[1] . ', ' . $inner_background_color[2] . ', ' . $opacity . ');';
			} else {
				$el_inner_style .= 'background-color:' . $inner_background_color . ';';
			}
		}
		
		$inner_class = array( $this->shortcode . '_content' );
		$background_data_attr = '';
		$inner_background_data_attr = '';
		
		if ( $background_image != '' ) {                    
			$background_image = wp_get_attachment_image_src( $background_image, 'full' );
                        
			$background_image_url = $background_image ? $background_image[0] : '';
			if ( $lazy_load == 'yes' ) {
				$blank_image_src = BT_BB_Root::$path . 'img/blank.gif';
				$el_style .= 'background-image:url(\'' . $blank_image_src . '\');';
				$background_data_attr .= ' data-background_image_src=\'' . $background_image_url . '\'';
				$class[] = 'btLazyLoadBackground';
			} else {
				$el_style .= 'background-image:url(\'' . $background_image_url . '\');';				
			}
                        
                        if ( $background_position != '' ) {
                                $el_style .= 'background-position:' . $background_position . ';';
                        }
                        if ( $background_size != '' ) {
                                $el_style .= 'background-size:' . $background_size . ';';
                        }
				
			$class[] = 'bt_bb_column_background_image';
		}
		
		if ( $inner_background_image != '' ) {
			$inner_background_image = wp_get_attachment_image_src( $inner_background_image, 'full' );
			$inner_background_image_url = $inner_background_image[0];
			if ( $lazy_load == 'yes' ) {
				$blank_image_src = BT_BB_Root::$path . 'img/blank.gif';
				$el_inner_style .= 'background-image:url(\'' . $blank_image_src . '\');';
				$inner_background_data_attr .= ' data-background_image_src="' . esc_attr( $inner_background_image_url ) . '"';
				$inner_class[] = 'btLazyLoadBackground';
			} else {
				$el_inner_style .= 'background-image:url(\'' . esc_attr( $inner_background_image_url ) . '\');';				
			}
			$class[] = 'bt_bb_column_inner_background_image';
                        
                        if ( $inner_background_position != '' ) {
                                $el_inner_style .= 'background-position:' . esc_attr( $inner_background_position ) . ';';
                        }
                        if ( $inner_background_size != '' ) {
                                $el_inner_style .= 'background-size:' . esc_attr( $inner_background_size ) . ';';
                        }
		}
		
		if ( $align_to_edge_column == 'left' ) {
			$class[] = $this->prefix . 'mobile_align_to_left_edge';
		}

		if ( $align_to_edge_column == 'right' ) {
			$class[] = $this->prefix . 'mobile_align_to_right_edge';
		}

		if ( $align_to_edge_column == 'both' ) {
			$class[] = $this->prefix . 'mobile_align_to_both_edges';
		}

		if ( $el_inner_style != '' ) {
			$el_inner_style = ' style="' . esc_attr( $el_inner_style ) . '"';
		}
                
		
		$style_attr = '';
		if ( $el_style != '' ) {
			$style_attr = 'style="' . esc_attr( $el_style ) . '"';
		}
                
                if ( $highlight == 'yes' ) {
                        $class[] =  $this->prefix . 'highlight';
                }
		
		$class = apply_filters( $this->shortcode . '_class', $class, $atts );

		$output = '<div ' . $id_attr . ' class="' . implode( ' ', $class ) . '" ' . $style_attr . $background_data_attr . ' data-width="' . esc_attr( $this->get_width2( $width ) ) . '" data-bt-override-class="' . htmlspecialchars( json_encode( $data_override_class, JSON_FORCE_OBJECT ), ENT_QUOTES, 'UTF-8' ) . '">';
			$output .= '<div class="' . esc_attr( implode( ' ', $inner_class ) ) . '"' . $el_inner_style . $inner_background_data_attr . '>';
				$output .= do_shortcode( $content );
			$output .= '</div>';
		$output .= '</div>';
		
		$output = apply_filters( 'bt_bb_general_output', $output, $atts );
		$output = apply_filters( $this->shortcode . '_output', $output, $atts );

		return $output;

	}
	
	function get_responsive_class( $width, $size ) {
		
		$width = $this->get_width1( $width );

		$class = 'col-' . $size . '-' . $width;
		
		return $class;
	}
	
	function get_width1( $width ) {
		$array = explode( '/', $width );

		if ( empty( $array ) || $array[0] == 0 || $array[1] == 0 ) {
			$width = 12;
		} else {
			$top = $array[0];
			$bottom = $array[1];
			$width = 12 * $top / $bottom;
			if ( $width < 1 || $width > 12 ) {
				$width = 12;
			}
		}
		
		$width = str_replace( '.', '_', $width );
		
		return $width;
	}
	
	function get_width2( $width ) {
		$array = explode( '/', $width );

		if ( empty( $array ) || $array[0] == 0 || $array[1] == 0 ) {
			$width = 12;
		} else {
			$top = $array[0];
			$bottom = $array[1];
			$width = 12 * $top / $bottom;
			if ( $width < 1 || $width > 12 ) {
				$width = 12;
			}
		}
		
		return $width;
	}

	function map_shortcode() {
		bt_bb_map( $this->shortcode, array( 'name' => esc_html__( 'Column', 'avantage' ), 'description' => esc_html__( 'Column element', 'avantage' ), 'width_param' => 'width', 'container' => 'vertical', 'accept' => array( 'bt_bb_section' => false, 'bt_bb_row' => false, 'bt_bb_column' => false, 'bt_bb_column_inner' => false, 'bt_bb_tab_item' => false, 'bt_bb_accordion_item' => false, 'bt_bb_cost_calculator_item' => false, 'bt_cc_group' => false, 'bt_cc_multiply' => false, 'bt_cc_item' => false, 'bt_bb_content_slider_item' => false, 'bt_bb_google_maps_location' => false, '_content' => false ), 'accept_all' => true, 'toggle' => false, 'responsive_override' => true,
			'params' => array(
				array( 'param_name' => 'align', 'type' => 'dropdown', 'heading' => esc_html__( 'Align', 'avantage' ), 'preview' => true, 'responsive_override' => true,
					'value' => array(
						esc_html__( 'Left', 'avantage' ) => 'left',
						esc_html__( 'Right', 'avantage' ) => 'right',
						esc_html__( 'Center', 'avantage' ) => 'center'
					)
				),
				array( 'param_name' => 'vertical_align', 'type' => 'dropdown', 'heading' => esc_html__( 'Vertical align', 'avantage' ), 'preview' => true,
					'value' => array(
						esc_html__( 'Top', 'avantage' )     => 'top',
						esc_html__( 'Middle', 'avantage' )  => 'middle',
						esc_html__( 'Bottom', 'avantage' )  => 'bottom'
					)
				),
				array( 'param_name' => 'animation', 'type' => 'dropdown', 'heading' => esc_html__( 'Animation', 'avantage' ), 'preview' => true,
					'value' => array(
						esc_html__( 'No Animation', 'avantage' ) => 'no_animation',
						esc_html__( 'Fade In', 'avantage' ) => 'fade_in',
						esc_html__( 'Move Up', 'avantage' ) => 'move_up',
						esc_html__( 'Move Left', 'avantage' ) => 'move_left',
						esc_html__( 'Move Right', 'avantage' ) => 'move_right',
						esc_html__( 'Move Down', 'avantage' ) => 'move_down',
						esc_html__( 'Zoom in', 'avantage' ) => 'zoom_in',
						esc_html__( 'Zoom out', 'avantage' ) => 'zoom_out',
						esc_html__( 'Fade In / Move Up', 'avantage' ) => 'fade_in move_up',
						esc_html__( 'Fade In / Move Left', 'avantage' ) => 'fade_in move_left',
						esc_html__( 'Fade In / Move Right', 'avantage' ) => 'fade_in move_right',
						esc_html__( 'Fade In / Move Down', 'avantage' ) => 'fade_in move_down',
						esc_html__( 'Fade In / Zoom in', 'avantage' ) => 'fade_in zoom_in',
						esc_html__( 'Fade In / Zoom out', 'avantage' ) => 'fade_in zoom_out'
					)
				),				
				array( 'param_name' => 'padding', 'type' => 'dropdown', 'heading' => esc_html__( 'Padding', 'avantage' ), 'preview' => true, 'responsive_override' => true,
					'value' => array(
						esc_html__( 'Normal', 'avantage' ) => 'normal',
						esc_html__( 'Double', 'avantage' ) => 'double',
						esc_html__( 'Text Indent', 'avantage' ) => 'text_indent'				
					)
				),
				array( 'param_name' => 'order', 'type' => 'dropdown', 'heading' => esc_html__( 'Order', 'avantage' ), 'default' => '0', 'responsive_override' => true, 'description' => esc_html__( 'Columns are placed in the visual order according to selected order, lowest values first.', 'avantage' ),
					'value' => array(
						esc_html__( ' -5', 'avantage' ) => '-5',
						esc_html__( ' -4', 'avantage' ) => '-4',
						esc_html__( ' -3', 'avantage' ) => '-3',
						esc_html__( ' -2', 'avantage' ) => '-2',
						esc_html__( ' -1', 'avantage' ) => '-1',
						esc_html__( ' 0 (default)', 'avantage' ) => '0',
						esc_html__( ' 1', 'avantage' ) => '1',
						esc_html__( ' 2', 'avantage' ) => '2',
						esc_html__( ' 3', 'avantage' ) => '3',
						esc_html__( ' 4', 'avantage' ) => '4',
						esc_html__( ' 5', 'avantage' ) => '5'
					)
				),
				array( 'param_name' => 'background_image', 'type' => 'attach_image',  'preview' => true, 'heading' => esc_html__( 'Background image', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ) ),
				array( 'param_name' => 'inner_background_image', 'type' => 'attach_image',  'preview' => true, 'heading' => esc_html__( 'Inner background image', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ) ),
				array( 'param_name' => 'lazy_load', 'type' => 'dropdown', 'default' => 'yes', 'heading' => esc_html__( 'Lazy load background image', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
					'value' => array(
						esc_html__( 'No', 'avantage' ) => 'no',
						esc_html__( 'Yes', 'avantage' ) => 'yes'
					) ),
				array( 'param_name' => 'background_color', 'type' => 'colorpicker', 'heading' => esc_html__( 'Background color', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ) ),
				array( 'param_name' => 'inner_background_color', 'type' => 'colorpicker', 'heading' => esc_html__( 'Inner background color', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ) ),
				array( 'param_name' => 'opacity', 'type' => 'textfield', 'heading' => esc_html__( 'Background color opacity (deprecated)', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ) ),
				array( 'param_name' => 'background_position', 'type' => 'textfield', 'heading' => esc_html__( 'Background position in keywords (e.g. left, right, top, bottom, center) or in pixels / percentage', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ) ),
				array( 'param_name' => 'background_size', 'type' => 'textfield', 'heading' => esc_html__( 'Background size (e.g. auto, cover, contain, initial, inherit or size in pixels', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ) ),
				array( 'param_name' => 'inner_background_position', 'type' => 'textfield', 'heading' => esc_html__( 'Inner Background position in keywords (e.g. left, right, top, bottom, center) or in pixels / percentage', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ) ),
				array( 'param_name' => 'inner_background_size', 'type' => 'textfield', 'heading' => esc_html__( 'Inner Background size (e.g. auto, cover, contain, initial, inherit or size in pixels', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ) ),                                
				array( 'param_name' => 'highlight', 'type' => 'dropdown', 'default' => 'no', 'heading' => esc_html__( 'Show shadow on column', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
					'value' => array(
							esc_html__( 'No', 'avantage' ) => 'no',
							esc_html__( 'Yes', 'avantage' ) => 'yes'
					)
				),
				array( 'param_name' => 'align_to_edge_column', 'type' => 'dropdown', 'default' => 'no', 'heading' => esc_html__( 'Align column to screen edges on mobile screens - below 992px', 'avantage' ), 'group' => esc_html__( 'Responsive', 'avantage' ),
					'value' => array(
						esc_html__( 'No', 'avantage' ) => 'no',
						esc_html__( 'Align to left screen edge', 'avantage' ) => 'left',
						esc_html__( 'Align to right screen edge', 'avantage' ) => 'right',
						esc_html__( 'Align to both screen edges', 'avantage' ) => 'both'
					)
				),				
			)
		) );
	}
        
       
	static function hex2rgb( $hex ) {
		$hex = str_replace( '#', '', $hex );
		if ( strlen( $hex ) == 3 ) {
			$r = hexdec( substr( $hex, 0, 1 ) . substr( $hex, 0, 1 ) );
			$g = hexdec( substr( $hex, 1, 1 ) . substr( $hex, 1, 1 ) );
			$b = hexdec( substr( $hex, 2, 1 ) . substr( $hex, 2, 1 ) );
		} else {
			$r = hexdec( substr( $hex, 0, 2 ) );
			$g = hexdec( substr( $hex, 2, 2 ) );
			$b = hexdec( substr( $hex, 4, 2 ) );
		}
		$rgb = array( $r, $g, $b );
		return $rgb;
	}	

}