<?php

class bt_bb_splitted_headline extends BT_BB_Element {
	
	function  bb_exist(){
            if ( file_exists( WP_PLUGIN_DIR . '/bold-page-builder/bold-builder.php' ) ) { return true; }
            return false;
        }

	function handle_shortcode( $atts, $content ) {
		extract( shortcode_atts( apply_filters( 'bt_bb_extract_atts_' . $this->shortcode, array(
			'line_thick'         	=> '',
			'line_width'         	=> '',
			'line_orientation'      => '',
			'line_color'         	=> '',
			'color_scheme'  		=> '',
			'headline1'      		=> '',
			'html_tag1'      		=> '',
			'color1'         		=> '',
			'size1'     			=> '',
			'font_weight1'   		=> '',
			'font1'          		=> '',
			'font_subset1'   		=> '',	
			'headline2'      		=> '',			
			'html_tag2'      		=> '',
			'color2'         		=> '',
			'size2'     			=> '',
			'font_weight2'   		=> '',
			'font2'          		=> '',
			'font_subset2'   		=> ''			
		) ), $atts, $this->shortcode ) );
		
		$headline1 = html_entity_decode( $headline1, ENT_QUOTES, 'UTF-8' );
		$headline2 = html_entity_decode( $headline2, ENT_QUOTES, 'UTF-8' );
		
		if ( ( $font1 != '' && $font1 != 'inherit' ) || ( $font2 != '' && $font2 != 'inherit' ) ) {
			require_once( WP_PLUGIN_DIR   . '/bold-page-builder/content_elements_misc/misc.php' );
			
			if ( $font1 != '' && $font1 != 'inherit' ) {
				bt_bb_enqueue_google_font( $font1, $font_subset1 );
			}

			if ( $font2 != '' && $font2 != 'inherit' ) {
				bt_bb_enqueue_google_font( $font2, $font_subset2 );
			}
		}

		$class  = array( $this->shortcode );
		$class1 = array( $this->shortcode . '_first' );
		$class2 = array( $this->shortcode . '_second' );
		
		$id_attr = '';
		if ( $el_id != '' ) {
			$id_attr = ' ' . 'id="' . esc_attr( $el_id ) . '"';
		}
		
		if ( $el_class != '' ) {
			$class[] = $el_class;
		}

		$color_scheme_id = NULL;
		if ( is_numeric ( $color_scheme ) ) {
			$color_scheme_id = $color_scheme;
		} else if ( $color_scheme != '' ) {
			$color_scheme_id = bt_bb_get_color_scheme_id( $color_scheme );
		}
		$color_scheme_colors = bt_bb_get_color_scheme_colors_by_id( $color_scheme_id - 1 );
		if ( $color_scheme_colors ) $el_style .= '; --splitted-headline-primary-color:' . $color_scheme_colors[0] . '; --splitted-headline-secondary-color:' . $color_scheme_colors[1] . ';';
		if ( $color_scheme != '' ) $class[] = $this->prefix . 'color_scheme_' .  $color_scheme_id;
		
		if ( $line_orientation != '' ) {
			$class[] = $this->prefix . 'line_orientation_' . $line_orientation ;
		}	

		$style_attr = '';
		if ( $el_style != '' ) {
			$style_attr = ' ' . 'style="' . esc_attr( $el_style ) . '"';
		}
		
		/* style headline 1 */
		$html_tag_style1 = "";
		$html_tag_style_arr1 = array();		
		if ( $color1 != '' ) {
			$html_tag_style_arr1[] = 'color:' . $color1 . '';
		}
		if ( $font1 != '' && $font1 != 'inherit' ) {
			$html_tag_style_arr1[] = 'font-family:\'' . urldecode( $font1 ) . '\'';
		}
		if ( count( $html_tag_style_arr1 ) > 0 ) {
			$html_tag_style1 = ' style="' . implode( '; ', $html_tag_style_arr1 ) . ';"';
		}
		
		/* class headline 1 */
		if ( $size1 != '' ) {
			$class1[] = $this->prefix . 'size' . '_' . $size1;
		}
		if ( $font_weight1 != '' ) {
			$class1[] = $this->prefix . 'font_weight_' . $font_weight1 ;
		}
		
		/* style headline 2 */
		$html_tag_style2 = "";
		$html_tag_style_arr2 = array();
		if ( $color2 != '' ) {
			$html_tag_style_arr2[] = 'color:' . $color2 . '';
		}
		if ( $font2 != '' && $font2 != 'inherit' ) {
			$html_tag_style_arr2[] = 'font-family:\'' . urldecode( $font2 ) . '\'';
		}
		if ( count( $html_tag_style_arr2 ) > 0 ) {
			$html_tag_style2 = ' style="' . implode( '; ', $html_tag_style_arr2 ) . ';"';
		}
		
		/* class headline 2 */
		if ( $size2 != '' ) {
			$class2[] = $this->prefix . 'size' . '_' . $size2;
		}
		if ( $font_weight2 != '' ) {
			$class2[] = $this->prefix . 'font_weight_' . $font_weight2 ;
		}
		
		/* class line */		
		$class_line = array( $this->shortcode . "_line" );
		if ( $line_thick != '' ) {
			$class_line[] = $this->prefix . 'line_thick_' . $line_thick ;
		}
		
		
		/* style line */
		$el_style_line = "";
		if ( $line_color != '' ) {
			$el_style_line = 'color:' . $line_color . ';background-color:' . $line_color . ';';
		}
		if ( $line_width != '' ) {			
			$el_style_line .= 'height:' . $line_width . ';margin-top: calc(-' . $line_width . ' * .14);margin-bottom: calc(-' . $line_width . ' * .14);';
		}
		
		$style_attr_line = '';
		if ( $el_style_line != '' ) {
			$style_attr_line = ' ' . 'style="' . esc_attr( $el_style_line ) . '"';
		}
				
		/* -- element --  */
		$el_data_line = "";
		if ( $line_width != '' ) {			
			$el_data_line .= ' data-line-width="' . $line_width . '"';
		}
		
		$class = apply_filters( $this->shortcode . '_class', $class, $atts );
		
		if ( $headline1 != '' ) {
			$headline1 = '<span class="' . esc_attr( $this->shortcode ) . '_content"><span>' . $headline1 . '</span></span>';			
		}
		$headline1 = nl2br( $headline1 );
		
		if ( $headline2 != '' ) {
			$headline2 = '<span class="' . esc_attr( $this->shortcode ) . '_content"><span>' . $headline2 . '</span></span>';			
		}		
		$headline2 = nl2br( $headline2 );

		$output = '<header' . $id_attr . ' class="' . implode( ' ', $class ) . '"' . $style_attr . $el_data_line . '>';
		if ( $headline1 != ''  ) $output .= '<' . $html_tag1 . ' class="' . implode( ' ', $class1 ) . '"'. $html_tag_style1  . '>' . $headline1 . '</' . $html_tag1 . '>';
		$output .= '<div  class="' . implode( ' ', $class_line ) . '"' . $style_attr_line . '></div>';
		if ( $headline2 != ''  ) $output .= '<' . $html_tag2 . ' class="' . implode( ' ', $class2 ) . '"' . $html_tag_style2 . '>' . $headline2 . '</' . $html_tag2 . '>';
		$output .= '</header>';
		
		$output = apply_filters( 'bt_bb_general_output', $output, $atts );
		$output = apply_filters( $this->shortcode . '_output', $output, $atts );

		return $output;		
	}
	
	function map_shortcode() {
		
		if ( !$this->bb_exist() ) { return false; }		
		require( WP_PLUGIN_DIR   . '/bold-page-builder/content_elements_misc/fonts.php' );
		$color_scheme_arr = bt_bb_get_color_scheme_param_array();
		
		
		bt_bb_map( $this->shortcode, array( 'name' => esc_html__( 'Split Headline', 'avantage' ), 'description' => esc_html__( 'Headline with custom Google fonts', 'avantage' ), 'icon' => $this->prefix_backend . 'icon' . '_' . $this->shortcode, 'highlight' => true,
			'params' => array(
				array( 'param_name' => 'line_thick', 'type' => 'dropdown', 'heading' => esc_html__( 'Line thickness', 'avantage' ), 'preview' => true,
					'value' => array(
						esc_html__( '1px', 'avantage' ) => '1',
						esc_html__( '2px', 'avantage' ) => '2',
						esc_html__( '3px', 'avantage' ) => '3',
						esc_html__( '4px', 'avantage' ) => '4',
						esc_html__( '5px', 'avantage' ) => '5',
						esc_html__( '6px', 'avantage' ) => '6'
				) ),
				array( 'param_name' => 'line_width', 'type' => 'textfield', 'heading' => esc_html__( 'Line width', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'line_orientation', 'type' => 'dropdown', 'heading' => esc_html__( 'Line orientation', 'avantage' ),  'preview' => true,
					'value' => array(
						esc_html__( 'Rotated 45 degrees', 'avantage' ) => 'left',
						esc_html__( 'Rotated -45 degrees', 'avantage' ) => 'right'
				) ),
				array( 'param_name' => 'color_scheme', 'type' => 'dropdown', 'heading' => esc_html__( 'Color scheme', 'avantage' ), 'value' => $color_scheme_arr, 'preview' => true ),
				array( 'param_name' => 'line_color', 'type' => 'colorpicker', 'heading' => esc_html__( 'Line Color', 'avantage' ),  'preview' => true ),
				array( 'param_name' => 'headline1', 'type' => 'textarea', 'heading' => esc_html__( 'Headline', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Heading 1', 'avantage' ), 'preview_strong' => true ),
				array( 'param_name' => 'html_tag1', 'type' => 'dropdown', 'heading' => esc_html__( 'HTML tag', 'avantage' ), 'group' => esc_html__( 'Heading 1', 'avantage' ), 'preview' => true,
					'value' => array(
						esc_html__( 'h1', 'avantage' ) => 'h1',
						esc_html__( 'h2', 'avantage' ) => 'h2',
						esc_html__( 'h3', 'avantage' ) => 'h3',
						esc_html__( 'h4', 'avantage' ) => 'h4',
						esc_html__( 'h5', 'avantage' ) => 'h5',
						esc_html__( 'h6', 'avantage' ) => 'h6'
				) ),
				array( 'param_name' => 'color1', 'type' => 'colorpicker', 'heading' => esc_html__( 'Color', 'avantage' ), 'group' => esc_html__( 'Heading 1', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'size1', 'type' => 'dropdown', 'heading' => esc_html__( 'Size', 'avantage' ), 'description' => 'Predefined heading sizes, independent of html tag', 'group' => esc_html__( 'Heading 1', 'avantage' ),
					'value' => array(
						esc_html__( 'Inherit', 'avantage' ) => 'inherit',
						esc_html__( 'Extra Small', 'avantage' ) => 'extrasmall',
						esc_html__( 'Small', 'avantage' ) => 'small',
						esc_html__( 'Medium', 'avantage' ) => 'medium',
						esc_html__( 'Normal', 'avantage' ) => 'normal',
						esc_html__( 'Large', 'avantage' ) => 'large',
						esc_html__( 'Extra large', 'avantage' ) => 'extralarge',
						esc_html__( 'Huge', 'avantage' ) => 'huge'
					)
				),	
				array( 'param_name' => 'font_weight1', 'type' => 'dropdown', 'heading' => esc_html__( 'Font weight', 'avantage' ), 'group' => esc_html__( 'Heading 1', 'avantage' ),
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
				array( 'param_name' => 'font1', 'type' => 'dropdown', 'heading' => esc_html__( 'Font', 'avantage' ), 'group' => esc_html__( 'Heading 1', 'avantage' ), 'preview' => true,
					'value' => array( esc_html__( 'Inherit', 'avantage' ) => 'inherit' ) + $font_arr
				),
				array( 'param_name' => 'font_subset1', 'type' => 'textfield', 'heading' => esc_html__( 'Font subset', 'avantage' ), 'group' => esc_html__( 'Heading 1', 'avantage' ), 'value' => 'latin,latin-ext', 'description' => 'E.g. latin,latin-ext,cyrillic,cyrillic-ext' ),
				
				array( 'param_name' => 'headline2', 'type' => 'textarea', 'heading' => esc_html__( 'Headline', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Heading 2', 'avantage' ) ),
				array( 'param_name' => 'html_tag2', 'type' => 'dropdown', 'heading' => esc_html__( 'HTML tag', 'avantage' ), 'group' => esc_html__( 'Heading 2', 'avantage' ), 'preview' => true,
					'value' => array(
						esc_html__( 'h1', 'avantage' ) => 'h1',
						esc_html__( 'h2', 'avantage' ) => 'h2',
						esc_html__( 'h3', 'avantage' ) => 'h3',
						esc_html__( 'h4', 'avantage' ) => 'h4',
						esc_html__( 'h5', 'avantage' ) => 'h5',
						esc_html__( 'h6', 'avantage' ) => 'h6'
				) ),
				array( 'param_name' => 'color2', 'type' => 'colorpicker', 'heading' => esc_html__( 'Color', 'avantage' ), 'group' => esc_html__( 'Heading 2', 'avantage' ), 'preview' => true ),
				
				array( 'param_name' => 'size2', 'type' => 'dropdown', 'heading' => esc_html__( 'Size', 'avantage' ), 'description' => 'Predefined heading sizes, independent of html tag', 'group' => esc_html__( 'Heading 2', 'avantage' ),
					'value' => array(
						esc_html__( 'Inherit', 'avantage' ) => 'inherit',
						esc_html__( 'Extra Small', 'avantage' ) => 'extrasmall',
						esc_html__( 'Small', 'avantage' ) => 'small',
						esc_html__( 'Medium', 'avantage' ) => 'medium',
						esc_html__( 'Normal', 'avantage' ) => 'normal',
						esc_html__( 'Large', 'avantage' ) => 'large',
						esc_html__( 'Extra large', 'avantage' ) => 'extralarge',
						esc_html__( 'Huge', 'avantage' ) => 'huge'
					)
				),					
				array( 'param_name' => 'font_weight2', 'type' => 'dropdown', 'heading' => esc_html__( 'Font weight', 'avantage' ), 'group' => esc_html__( 'Heading 2', 'avantage' ),
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
				array( 'param_name' => 'font2', 'type' => 'dropdown', 'heading' => esc_html__( 'Font', 'avantage' ), 'group' => esc_html__( 'Heading 2', 'avantage' ), 'preview' => true,
					'value' => array( esc_html__( 'Inherit', 'avantage' ) => 'inherit' ) + $font_arr
				),
				array( 'param_name' => 'font_subset2', 'type' => 'textfield', 'heading' => esc_html__( 'Font subset', 'avantage' ), 'group' => esc_html__( 'Heading 2', 'avantage' ), 'value' => 'latin,latin-ext', 'description' => 'E.g. latin,latin-ext,cyrillic,cyrillic-ext' ),
				
				
			)
		) );
		
		
	}
	
}

