<?php

class bt_bb_price_list extends BT_BB_Element {

	function handle_shortcode( $atts, $content ) {
		extract( shortcode_atts( apply_filters( 'bt_bb_extract_atts', array(
			'icon'         => '',
			'title'        => '',
			'subtitle'     => '',
			'currency'     => '',
			'price'        => '',			
			'items'        => '',
			'color_scheme' => '',
			'align'        => '',
			'size'         => '',
			'style'        => '',
			'shape'        => '',
			'colored_icon'         			=> 'no_icon',
			'colored_icon_color_scheme' 	=> '',
			'vertical_position'        => '',
			'background_color'        => ''
		) ), $atts, $this->shortcode ) );

		$class = array( $this->shortcode );
		
		$icon_class = array( 'bt_bb_icon' );

		if ( $el_class != '' ) {
			$class[] = $el_class;
		}

		$id_attr = '';
		if ( $el_id != '' ) {
			$id_attr = ' ' . 'id="' . esc_attr( $el_id ) . '"';
		}

		if ( $background_color != '' ) {
			$el_style = $el_style . ';' . 'background-color:' . $background_color . ';';
		}
	
		$color_scheme_id = NULL;
		if ( is_numeric ( $color_scheme ) ) {
			$color_scheme_id = $color_scheme;
		} else if ( $color_scheme != '' ) {
			$color_scheme_id = bt_bb_get_color_scheme_id( $color_scheme );
		}
		$color_scheme_colors = bt_bb_get_color_scheme_colors_by_id( $color_scheme_id - 1 );
		if ( $color_scheme_colors ) $el_style .= '; --price-list-primary-color:' . $color_scheme_colors[0] . '; --price-list-secondary-color:' . $color_scheme_colors[1] . ';';
		if ( $color_scheme != '' ) $class[] = $this->prefix . 'color_scheme_' .  $color_scheme_id;
		

		if ( $align != '' ) {
			$icon_class[] = $this->prefix . 'align' . '_' . $align;
		}
		
		if ( $style != '' ) {
			$icon_class[] = $this->prefix . 'style' . '_' . $style;
		}

		if ( $size != '' ) {
			$icon_class[] = $this->prefix . 'size' . '_' . $size;
		}

		if ( $shape != '' ) {
			$icon_class[] = $this->prefix . 'shape' . '_' . $shape;
		}

		if ( $vertical_position != '' ) {
			$icon_class[] = $this->prefix . 'vertical_position' . '_' . $vertical_position;
		}
		
		$style_attr = '';
		if ( $el_style != '' ) {
			$style_attr = ' ' . 'style="' . esc_attr( $el_style ) . '"';
		}
		

		$class = apply_filters( $this->shortcode . '_class', $class, $atts );
		
		$output = '';
		
		if ( ( strpos($icon, "&#x;") === FALSE && $icon != "" ) || ( $colored_icon != 'no_icon' && $colored_icon != '' ) )
		{
			$icon_shortcode = do_shortcode( '[bt_bb_icon icon="' . esc_attr( $icon  ) . '" size="' . esc_attr( $size ) . '" style="' . esc_attr( $style ) . '" shape="' . esc_attr( $shape ) . '" vertical_position="' . esc_attr( $vertical_position ) . '" colored_icon="'.esc_attr( $colored_icon ).'"  colored_icon_color_scheme="'.esc_attr( $colored_icon_color_scheme ).'" ignore_fe_editor="true"]' );
			$output .= $icon_shortcode;
		}
		
		$output .= '<div class="' . esc_attr( $this->shortcode . '_title_subtitle_price' ) . '">';
		$output .= '<div class="' . esc_attr( $this->shortcode . '_title_wrap' ) . '">';
		$output .= '<div class="' . esc_attr( $this->shortcode . '_price' ) . '"><span class="' . esc_attr( $this->shortcode . '_currency' ) . '">' . $currency . '</span><span class="' . esc_attr( $this->shortcode . '_amount' ) . '">' . $price . '</span></div>';
		$output .= '<div class="' . esc_attr( $this->shortcode . '_title_subtitle' ) . '">';
		$output .= '<div class="' . esc_attr( $this->shortcode . '_subtitle' ) . '">' . $subtitle . '</div>';
		$output .= '<div class="' . esc_attr( $this->shortcode . '_title' ) . '">' . $title . '</div>';
		$output .= '</div>';
		$output .= '</div>';
		$output .= '</div>';

		$items_arr = preg_split( '/$\R?^/m', $items );

		$items = '<ul>';
			foreach ( $items_arr as $item ) {
				$items .= '<li>' . $item . '</li>';
			}
		$items .= '</ul>';
		
		$output .= $items;

		$output = '<div' . $id_attr . ' class="' . implode( ' ', $class ) . '"' . $style_attr . '>' . $output . '</div>';

		
		$output = apply_filters( 'bt_bb_general_output', $output, $atts );
		$output = apply_filters( $this->shortcode . '_output', $output, $atts );
		
		return $output;
	}

	function map_shortcode() {
		
		require_once( WP_PLUGIN_DIR   . '/bold-page-builder/content_elements_misc/misc.php' );	
		$color_scheme_arr = bt_bb_get_color_scheme_param_array();
		$svg_icons_arr = bt_bb_get_svg_icons_param_array();
		
		bt_bb_map( $this->shortcode, array( 'name' => esc_html__( 'Price List', 'avantage' ), 'description' => esc_html__( 'List of items with total price', 'avantage' ), 'icon' => $this->prefix_backend . 'icon' . '_' . $this->shortcode,
			'params' => array(
				array( 'param_name' => 'icon', 'type' => 'iconpicker', 'heading' => esc_html__( 'Icon', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'colored_icon', 'type' => 'dropdown', 'default' => 'no_icon', 'group' => esc_html__( 'General', 'avantage' ), 'heading' => esc_html__( 'Colored Icon', 'avantage' ), 'description' => esc_html__( 'If colored icon is chosen from the list, regular icon will not be displayed', 'avantage' ), 'value' => $svg_icons_arr ),
				array( 'param_name' => 'subtitle', 'type' => 'textfield', 'heading' => esc_html__( 'Supertitle', 'avantage' ) ),
				array( 'param_name' => 'title', 'type' => 'textfield', 'heading' => esc_html__( 'Title', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'currency', 'type' => 'textfield', 'heading' => esc_html__( 'Currency', 'avantage' ) ),
				array( 'param_name' => 'price', 'type' => 'textfield', 'heading' => esc_html__( 'Price', 'avantage' ) ),				
				array( 'param_name' => 'items', 'type' => 'textarea', 'heading' => esc_html__( 'Items', 'avantage' ) ),
				
				array( 'param_name' => 'background_color', 'type' => 'colorpicker', 'heading' => esc_html__( 'Background color', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'color_scheme', 'type' => 'dropdown', 'heading' => esc_html__( 'Pricelist color scheme', 'avantage' ), 'value' => $color_scheme_arr, 'preview' => true, 'group' => esc_html__( 'Design', 'avantage' )  ),
				array( 'param_name' => 'colored_icon_color_scheme', 'type' => 'dropdown', 'heading' => esc_html__( 'Colored icon color scheme', 'avantage' ), 'value' => $color_scheme_arr, 'group' => esc_html__( 'Design', 'avantage' ) ),
				array( 'param_name' => 'size', 'type' => 'dropdown', 'heading' => esc_html__( 'Icon size', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Design', 'avantage' ),
					'value' => array(
						esc_html__('Small', 'avantage' ) => 'small',
						esc_html__('Extra small', 'avantage' ) => 'xsmall',
						esc_html__('Normal', 'avantage' ) => 'normal',
						esc_html__('Large', 'avantage' ) => 'large',
						esc_html__('Extra large', 'avantage' ) => 'xlarge',
						esc_html__('Huge', 'avantage' ) => 'huge'
					)
				),
				array( 'param_name' => 'style', 'type' => 'dropdown', 'heading' => esc_html__( 'Icon style', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Design', 'avantage' ),
					'value' => array(
						esc_html__('Outline', 'avantage' ) => 'outline',
						esc_html__('Filled', 'avantage' ) => 'filled',
						esc_html__('Borderless', 'avantage' ) => 'borderless'
					)
				),
				array( 'param_name' => 'shape', 'type' => 'dropdown', 'heading' => esc_html__( 'Icon shape', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
					'value' => array(
						esc_html__('Circle', 'avantage' ) => 'circle',
						esc_html__('Square', 'avantage' ) => 'square',
						esc_html__('Rounded Square', 'avantage' ) => 'round',
						esc_html__('Slanted Right', 'avantage' ) => 'slanted_right',
						esc_html__('Slanted Left', 'avantage' ) => 'slanted_left'
					)
				),
				array( 'param_name' => 'align', 'type' => 'dropdown', 'heading' => esc_html__( 'Icon alignment', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Design', 'avantage' ),
					'value' => array(
						esc_html__('Inherit', 'avantage' ) => 'inherit',
						esc_html__('Left', 'avantage' ) => 'left',
						esc_html__('Right', 'avantage' ) => 'right'
					)
				),
				array( 'param_name' => 'vertical_position', 'type' => 'dropdown', 'heading' => esc_html__( 'Vertical position', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
					'value' => array(
						esc_html__('Default', 'avantage' ) => '',
						esc_html__('Half above', 'avantage' ) => 'half_above',
						esc_html__('Full above', 'avantage' ) => 'full_above'
					)
				)
			)
		) );
	}
}