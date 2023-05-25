<?php

class bt_bb_service extends BT_BB_Element {

	function handle_shortcode( $atts, $content ) {
		extract( shortcode_atts( apply_filters( 'bt_bb_extract_atts_' . $this->shortcode, array(
			'icon'         => '',
			'title'        => '',
			'text'         => '',			
			'url'          => '',
			'target'       => '',
			'color_scheme' => '',
			'style'        => '',
			'size'         => '',
			'shape'        => '',
			'colored_icon'         			=> 'no_icon',
			'colored_icon_color_scheme' 	=> '',
			'align'        => '',
			'font_weight'  => '',
			'vertical_align'        => '',
			'highlight'				=> '',
			'semitransparent_text'  => '',
			
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
		if ( $color_scheme_colors ) $el_style .= '; --service-primary-color:' . $color_scheme_colors[0] . '; --service-secondary-color:' . $color_scheme_colors[1] . ';';
		if ( $color_scheme != '' ) $class[] = $this->prefix . 'color_scheme_' .  $color_scheme_id;		

		$colored_icon_color_scheme_id = NULL;
		if ( is_numeric ( $colored_icon_color_scheme ) ) {
			$colored_icon_color_scheme_id = $colored_icon_color_scheme;
		} else if ( $colored_icon_color_scheme != '' ) {
			$colored_icon_color_scheme_id = bt_bb_get_color_scheme_id( $colored_icon_color_scheme );
		}
		$colored_icon_color_scheme_colors = bt_bb_get_color_scheme_colors_by_id( $colored_icon_color_scheme_id - 1 );
		if ( $colored_icon_color_scheme_colors ) $el_style .= '; --service-colored-icon-primary-color:' . $colored_icon_color_scheme_colors[0] . '; --service-colored-icon-secondary-color:' . $colored_icon_color_scheme_colors[1] . ';';
		if ( $colored_icon_color_scheme != '' ) $class[] = $this->prefix . 'colored_icon_color_scheme_' .  $colored_icon_color_scheme_id;

		if ( $style != '' ) {
			$class[] = $this->prefix . 'style' . '_' . $style;
		}		

		if ( $shape != '' ) {
			$class[] = $this->prefix . 'shape' . '_' . $shape;
		}

		$this->responsive_data_override_class(
			$class, $data_override_class,
			array(
				'prefix' => $this->prefix,
				'param' => 'size',
				'value' => $size
			)
		);
		
		$this->responsive_data_override_class(
			$class, $data_override_class,
			array(
				'prefix' => $this->prefix,
				'param' => 'align',
				'value' => $align
			)
		);
		
		if ( $font_weight != '' ) {
			$class[] = 'bt_bb_font_weight' . '_' . $font_weight;
		}	
		if ( $vertical_align != '' ) {
			$class[] = 'bt_bb_vertical_align' . '_' . $vertical_align;
		}
		if ( $highlight ) {
			$class[] = 'bt_bb_highlight_service_' . $highlight;
		}
		if ( $semitransparent_text ) {
			$class[] = 'bt_bb_semitransparent_text_' . $semitransparent_text;
		}
		
		$link = bt_bb_get_url( $url );
		
		if ( $link != '' ) {
			if ( $title != '' ) $title = '<a href="' . esc_url( $link ) . '" target="' . esc_attr( $target ) . '">' . $title . '</a>';
		} 

		$icon_title = wp_strip_all_tags($title);
		
		$icon_html = bt_bb_icon::get_html( $icon, '', $link, $icon_title, $target );

		$style_attr = '';
		if ( $el_style != '' ) {
			$style_attr = ' ' . 'style="' . esc_attr( $el_style ) . '"';
		}	

		$class = apply_filters( $this->shortcode . '_class', $class, $atts );
		$class_attr = implode( ' ', $class );
		
		if ( $el_class != '' ) {
			$class_attr = $class_attr . ' ' . $el_class;
		}

		//$output = $icon;
		
		// SERVICE
		$output = '<div' . $id_attr . ' class="' . esc_attr( $class_attr ) . '"' . $style_attr . ' data-bt-override-class="' . htmlspecialchars( json_encode( $data_override_class, JSON_FORCE_OBJECT ), ENT_QUOTES, 'UTF-8' ) . '">';

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

			// CONTENT
			$output .= '<div class="' . esc_attr( $this->shortcode ) . '_content">';
				if ( $title != '' ) $output .= '<div class="' . esc_attr( $this->shortcode ) . '_content_title">' . $title . '</div>';
				if ( $text != '' ) $output .= '<div class="' . esc_attr( $this->shortcode ) . '_content_text">' . nl2br( $text ) . '</div>';
			$output .= '</div>';
			
		$output .= '</div>';

		$output = apply_filters( 'bt_bb_general_output', $output, $atts );
		$output = apply_filters( $this->shortcode . '_output', $output, $atts );

		return $output;

	}

	function map_shortcode() {

		require_once( WP_PLUGIN_DIR   . '/bold-page-builder/content_elements_misc/misc.php' );
		$color_scheme_arr = bt_bb_get_color_scheme_param_array();
		$svg_icons_arr = bt_bb_get_svg_icons_param_array();

		bt_bb_map( $this->shortcode, array( 'name' => esc_html__( 'Service', 'avantage' ), 'description' => esc_html__( 'Icon with text', 'avantage' ), 'icon' => $this->prefix_backend . 'icon' . '_' . $this->shortcode,
			'params' => array(
				array( 'param_name' => 'icon', 'type' => 'iconpicker', 'heading' => esc_html__( 'Icon', 'avantage' ), 'group' => esc_html__( 'Icon', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'color_scheme', 'type' => 'dropdown', 'heading' => esc_html__( 'Icon Color scheme', 'avantage' ), 'value' => $color_scheme_arr, 'group' => esc_html__( 'Icon', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'style', 'type' => 'dropdown', 'heading' => esc_html__( 'Icon style', 'avantage' ), 'group' => esc_html__( 'Icon', 'avantage' ), 'preview' => true,
					'value' => array(
						esc_html__( 'Outline', 'avantage' ) => 'outline',
						esc_html__( 'Filled', 'avantage' ) => 'filled',
						esc_html__( 'Borderless', 'avantage' ) => 'borderless'
					)
				),
				array( 'param_name' => 'shape', 'type' => 'dropdown', 'heading' => esc_html__( 'Icon shape', 'avantage' ), 'group' => esc_html__( 'Icon', 'avantage' ),
					'value' => array(
						esc_html__('Circle', 'avantage' ) => 'circle',
						esc_html__('Square', 'avantage' ) => 'square',
						esc_html__('Rounded Square', 'avantage' ) => 'round',
						esc_html__('Slanted Right', 'avantage' ) => 'slanted_right',
						esc_html__('Slanted Left', 'avantage' ) => 'slanted_left'
					)
				),
				
				array( 'param_name' => 'colored_icon', 'type' => 'dropdown', 'default' => 'no_icon', 'group' => esc_html__( 'Icon', 'avantage' ), 'heading' => esc_html__( 'Colored Icon', 'avantage' ), 'description' => esc_html__( 'If colored icon is chosen from the list, regular icon will not be displayed', 'avantage' ), 'value' => $svg_icons_arr ),
				array( 'param_name' => 'colored_icon_color_scheme', 'type' => 'dropdown', 'heading' => esc_html__( 'Colored icon color scheme', 'avantage' ), 'value' => $color_scheme_arr, 'group' => esc_html__( 'Icon', 'avantage' ) ),
				
				array( 'param_name' => 'title', 'type' => 'textfield', 'heading' => esc_html__( 'Title', 'avantage' ), 'group' => esc_html__( 'Content', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'text', 'type' => 'textarea', 'heading' => esc_html__( 'Text', 'avantage' ), 'group' => esc_html__( 'Content', 'avantage' ) ),
				array( 'param_name' => 'url', 'type' => 'textfield', 'heading' => esc_html__( 'URL', 'avantage' ), 'description' => esc_html__( 'Enter full or local URL (eg. https://www.bold-themes.com or /pages/about-us) or post slug (eg. about-us)', 'avantage' ), 'group' => esc_html__( 'Content', 'avantage' ) ),
				array( 'param_name' => 'target', 'type' => 'dropdown', 'heading' => esc_html__( 'Target', 'avantage' ), 'group' => esc_html__( 'Content', 'avantage' ),
					'value' => array(
						esc_html__( 'Self (open in same tab)', 'avantage' ) => '_self',
						esc_html__( 'Blank (open in new tab)', 'avantage' ) => '_blank',
					)
				),
				array( 'param_name' => 'vertical_align', 'type' => 'dropdown', 'heading' => esc_html__( 'Icon vertical align', 'avantage' ), 'group' => esc_html__( 'Icon', 'avantage' ),
					'value' => array(
						esc_html__('Top', 'avantage' ) => 'top',
						esc_html__('Center', 'avantage' ) => 'center'
					)
				),
				array( 'param_name' => 'align', 'type' => 'dropdown', 'heading' => esc_html__( 'Icon alignment', 'avantage' ), 'group' => esc_html__( 'Icon', 'avantage' ),
					 'responsive_override' => true, 'value' => array(
						esc_html__( 'Inherit', 'avantage' ) => 'inherit',
						esc_html__( 'Left', 'avantage' ) => 'left',
						esc_html__( 'Right', 'avantage' ) => 'right'
					)
				),
				
				array( 'param_name' => 'size', 'type' => 'dropdown', 'heading' => esc_html__( 'Icon size', 'avantage' ), 'group' => esc_html__( 'Icon', 'avantage' ), 'preview' => true, 'responsive_override' => true,
					'value' => array(
						esc_html__( 'Small', 'avantage' ) => 'small',
						esc_html__( 'Extra small', 'avantage' ) => 'xsmall',
						esc_html__( 'Normal', 'avantage' ) => 'normal',
						esc_html__( 'Large', 'avantage' ) => 'large',
						esc_html__( 'Extra large', 'avantage' ) => 'xlarge'
					)
				),
				array( 'param_name' => 'font_weight', 'type' => 'dropdown', 'heading' => esc_html__( 'Font weight', 'avantage' ), 'group' => esc_html__( 'Content', 'avantage' ),
					'value' => array(
						esc_html__( 'Default', 'avantage' ) => '',
						esc_html__( 'Normal', 'avantage' ) => 'normal',
						esc_html__( 'Bold', 'avantage' ) => 'bold',
						esc_html__( 'Bolder', 'avantage' ) => 'bolder',
						esc_html__( 'Lighter', 'avantage' ) => 'lighter',
						esc_html__( 'Light', 'avantage' ) => 'light',
						esc_html__( 'Thin', 'avantage' ) => 'thin',
						esc_html__( 'Font weight 100', 'avantage' ) => '100',
						esc_html__( 'Font weight 200', 'avantage' ) => '200',
						esc_html__( 'Font weight 300', 'avantage' ) => '300',
						esc_html__( 'Font weight 400', 'avantage' ) => '400',
						esc_html__( 'Font weight 500', 'avantage' ) => '500',
						esc_html__( 'Font weight 600', 'avantage' ) => '600',
						esc_html__( 'Font weight 700', 'avantage' ) => '700',
						esc_html__( 'Font weight 800', 'avantage' ) => '800',
						esc_html__( 'Font weight 900', 'avantage' ) => '900',
					)
				),		
				array( 'param_name' => 'highlight', 'type' => 'checkbox', 'value' => array( esc_html__( 'Yes', 'avantage' ) => 'true' ), 'heading' => esc_html__( 'Highlight service', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Content', 'avantage' ),
				),
				array( 'param_name' => 'semitransparent_text', 'type' => 'checkbox', 'value' => array( esc_html__( 'Yes', 'avantage' ) => 'true' ), 'heading' => esc_html__( 'Semitransparent text', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Content', 'avantage' ),
				),
			)
		) );
	}
}