<?php

class bt_bb_icon extends BT_BB_Element {

	function handle_shortcode( $atts, $content ) {
		extract( shortcode_atts( apply_filters( 'bt_bb_extract_atts_' . $this->shortcode, array(
			'icon'         					=> '',
			'text'         					=> '',
			'url'          					=> '',
			'url_title'    					=> '',
			'target'       					=> '',
			'color_scheme' 					=> '',
			'style'        					=> '',
			'size'         					=> '',
			'shape'        					=> '',
			'colored_icon'         			=> 'no_icon',
			'colored_icon_color_scheme' 	=> '',
			'align'							=> '',
			'vertical_position'				=> ''
		) ), $atts, $this->shortcode ) );

		$class = array( $this->shortcode );

		if ( $el_class != '' ) {
			$class[] = $el_class;
		}

		$id_attr = '';
		if ( $el_id != '' ) {
			$id_attr = ' ' . 'id="' . esc_attr( $el_id ) . '"';
		}
		
		$color_scheme_id = NULL;
		if ( is_numeric ( $color_scheme ) ) {
			$color_scheme_id = $color_scheme;
		} else if ( $color_scheme != '' ) {
			$color_scheme_id = bt_bb_get_color_scheme_id( $color_scheme );
		}
		$color_scheme_colors = bt_bb_get_color_scheme_colors_by_id( $color_scheme_id - 1 );
		if ( $color_scheme_colors ) $el_style .= '; --icon-primary-color:' . $color_scheme_colors[0] . '; --icon-secondary-color:' . $color_scheme_colors[1] . ';';
		if ( $color_scheme != '' ) $class[] = $this->prefix . 'color_scheme_' .  $color_scheme_id;

		$colored_icon_color_scheme_id = NULL;
		if ( is_numeric ( $colored_icon_color_scheme ) ) {
			$colored_icon_color_scheme_id = $colored_icon_color_scheme;
		} else if ( $colored_icon_color_scheme != '' ) {
			$colored_icon_color_scheme_id = bt_bb_get_color_scheme_id( $colored_icon_color_scheme );
		}
		$colored_icon_color_scheme_colors = bt_bb_get_color_scheme_colors_by_id( $colored_icon_color_scheme_id - 1 );
		if ( $colored_icon_color_scheme_colors ) $el_style .= '; --icon-colored-icon-primary-color:' . $colored_icon_color_scheme_colors[0] . '; --icon-colored-icon-secondary-color:' . $colored_icon_color_scheme_colors[1] . ';';
		if ( $colored_icon_color_scheme != '' ) $class[] = $this->prefix . 'colored_icon_color_scheme_' .  $colored_icon_color_scheme_id;

		if ( $style != '' ) {
			$class[] = $this->prefix . 'style' . '_' . $style;
		}


		if ( method_exists( get_parent_class( $this ), 'responsive_data_override_class' ) ) {
			$this->responsive_data_override_class(
				$class, $data_override_class,
				array(
					'prefix' => $this->prefix,
					'param' => 'size',
					'value' => $size
				)
			);	
		} else {
			if ( $size != '' ) {
				$class[] = $this->prefix . 'size' . '_' . $size;
			}
		}

		if ( $shape != '' ) {
			$class[] = $this->prefix . 'shape' . '_' . $shape;
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
		
		if ( $vertical_position != '' ) {
			$class[] = $this->prefix . 'vertical_position' . '_' . $vertical_position;
		}

		
		$style_attr = '';
		if ( $el_style != '' ) {
			$style_attr = ' ' . 'style="' . esc_attr( $el_style ) . '"';
		}
		
		$class = apply_filters( $this->shortcode . '_class', $class, $atts );
		
		require_once( WP_PLUGIN_DIR   . '/bold-page-builder/content_elements_misc/misc.php' );
		$link = bt_bb_get_url( $url );

		$icon_html = $this->get_html( $icon, $text, $url, $url_title, $target );
		
		$output = '<div' . $id_attr . ' class="' . implode( ' ', $class ) . '"' . $style_attr . ' data-bt-override-class="' . htmlspecialchars( json_encode( $data_override_class, JSON_FORCE_OBJECT ), ENT_QUOTES, 'UTF-8' ) . '">'; 
				
			// ICON
			if ( $icon != '' && $colored_icon == '' || $colored_icon == 'no_icon'  ) {
				$output .= $icon_html;
			}
			
			// COLORED ICON
			if ( $colored_icon != '' && $colored_icon != 'no_icon' ) {
				$output .= '<div class="' . esc_attr( $this->shortcode . '_colored_icon' ) . '">';
					
					if ( $link != '' ) {
						$output .= '<a href="' . esc_url( $link ) . '" target="' . esc_attr( $target ) . '">';
							$output .= bt_bb_get_svg_icon_html( $colored_icon );
						$output .= '</a>';

					} else {
						$output .= '<span>';
							$output .= bt_bb_get_svg_icon_html( $colored_icon );
						$output .= '</span>';
					}

				$output .= '</div>';
			}
		
		$output .= '</div>';		
		
		$output = apply_filters( 'bt_bb_general_output', $output, $atts );
		$output = apply_filters( $this->shortcode . '_output', $output, $atts );

		return $output;

	}

	static function get_html( $icon, $text = '', $url = '', $url_title = '', $target = '' ) {

		$icon_set = substr( $icon, 0, -5 );
		$icon = substr( $icon, -4 );
		
		require_once( WP_PLUGIN_DIR   . '/bold-page-builder/content_elements_misc/misc.php' );
		$link = bt_bb_get_url( $url );

		if ( $text != '' ) {
			if ( $url_title == '' ) $url_title = strip_tags($text);
			$text = '<span>' . $text . '</span>';
		} 
		
		$url_title_attr = '';
		
		if ( $url_title != '' ) {
			$url_title_attr = ' title="' . esc_attr( $url_title ) . '"';
		}
		
		if ( $link == '' ) {
			$ico_tag = 'span' . ' ';
			$ico_tag_end = 'span';	
		} else {
			$target_attr = 'target="_self"';
			if ( $target != '' ) {
				$target_attr = ' ' . 'target="' . ( $target ) . '"';
			}
			$ico_tag = 'a href="' . esc_attr( $link ) . '"' . ' ' . $target_attr . ' ' . $url_title_attr . ' ';
			$ico_tag_end = 'a';
		}

		return '<' . $ico_tag . ' data-ico-' . esc_attr( $icon_set ) . '="&#x' . esc_attr( $icon ) . ';" class="bt_bb_icon_holder">' . $text . '</' . $ico_tag_end . '>';
	}

	function map_shortcode() {

		require_once( WP_PLUGIN_DIR   . '/bold-page-builder/content_elements_misc/misc.php' );
		$color_scheme_arr = bt_bb_get_color_scheme_param_array();
		$svg_icons_arr = bt_bb_get_svg_icons_param_array();

		bt_bb_map( $this->shortcode, array( 'name' => esc_html__( 'Icon', 'avantage' ), 'description' => esc_html__( 'Single icon with link', 'avantage' ), 'icon' => $this->prefix_backend . 'icon' . '_' . $this->shortcode,
			'params' => array(
				array( 'param_name' => 'icon', 'type' => 'iconpicker', 'heading' => esc_html__( 'Icon', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'colored_icon', 'type' => 'dropdown', 'default' => 'no_icon', 'group' => esc_html__( 'General', 'avantage' ), 'heading' => esc_html__( 'Colored Icon', 'avantage' ), 'description' => esc_html__( 'If colored icon is chosen from the list, regular icon will not be displayed', 'avantage' ), 'value' => $svg_icons_arr ),
				array( 'param_name' => 'text', 'type' => 'textfield', 'heading' => esc_html__( 'Text', 'avantage' ) ),
				array( 'param_name' => 'url', 'type' => 'textfield', 'heading' => esc_html__( 'URL', 'avantage' ), 'description' => esc_html__( 'Enter full or local URL (eg. https://www.bold-themes.com or /pages/about-us) or post slug (eg. about-us)', 'avantage' ) ),
				array( 'param_name' => 'url_title', 'type' => 'textfield', 'heading' => esc_html__( 'Mouse hover title', 'avantage' ) ),
				array( 'param_name' => 'target', 'type' => 'dropdown', 'heading' => esc_html__( 'Target', 'avantage' ),
					'value' => array(
						esc_html__( 'Self (open in same tab)', 'avantage' ) => '_self',
						esc_html__( 'Blank (open in new tab)', 'avantage' ) => '_blank',
					)
				),
				array( 'param_name' => 'align', 'type' => 'dropdown', 'heading' => esc_html__( 'Alignment', 'avantage' ), 'responsive_override' => true,
					'value' => array(
						esc_html__( 'Inherit', 'avantage' ) => 'inherit',
						esc_html__( 'Left', 'avantage' ) => 'left',
						esc_html__( 'Center', 'avantage' ) => 'center',
						esc_html__( 'Right', 'avantage' ) => 'right'
					)
				),
				array( 'param_name' => 'vertical_position', 'type' => 'dropdown', 'heading' => esc_html__( 'Vertical position', 'avantage' ),
					'value' => array(
						esc_html__( 'Default', 'avantage' ) => '',
						esc_html__( 'Half above', 'avantage' ) => 'half_above',
						esc_html__( 'Full above', 'avantage' ) => 'full_above'
					)
				),
				array( 'param_name' => 'size', 'type' => 'dropdown', 'default' => 'small', 'heading' => esc_html__( 'Size', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Design', 'avantage' ), 'responsive_override' => true,
					'value' => array(
						esc_html__( 'Extra small', 'avantage' ) => 'xsmall',
						esc_html__( 'Small', 'avantage' ) => 'small',
						esc_html__( 'Normal', 'avantage' ) => 'normal',
						esc_html__( 'Large', 'avantage' ) => 'large',
						esc_html__( 'Extra large', 'avantage' ) => 'xlarge',
						esc_html__( 'Huge', 'avantage' ) => 'huge'
					)
				),
				array( 'param_name' => 'style', 'type' => 'dropdown', 'heading' => esc_html__( 'Style', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Design', 'avantage' ),
					'value' => array(
						esc_html__( 'Outline', 'avantage' ) => 'outline',
						esc_html__( 'Filled', 'avantage' ) => 'filled',
						esc_html__( 'Borderless', 'avantage' ) => 'borderless'
					)
				),
				array( 'param_name' => 'shape', 'type' => 'dropdown', 'heading' => esc_html__( 'Shape', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
					'value' => array(
						esc_html__('Circle', 'avantage' ) => 'circle',
						esc_html__('Square', 'avantage' ) => 'square',
						esc_html__('Rounded Square', 'avantage' ) => 'round',
						esc_html__('Slanted Right', 'avantage' ) => 'slanted_right',
						esc_html__('Slanted Left', 'avantage' ) => 'slanted_left'
					)
				),
				array( 'param_name' => 'color_scheme', 'type' => 'dropdown', 'heading' => esc_html__( 'Color scheme', 'avantage' ), 'value' => $color_scheme_arr, 'preview' => true, 'group' => esc_html__( 'Design', 'avantage' ) ),
				array( 'param_name' => 'colored_icon_color_scheme', 'type' => 'dropdown', 'heading' => esc_html__( 'Colored icon color scheme', 'avantage' ), 'value' => $color_scheme_arr, 'group' => esc_html__( 'Design', 'avantage' ) ),
				
			)
		) );
	}
}