<?php

class bt_bb_service_image extends BT_BB_Element {
    
    function  bb_exist(){
        if ( file_exists( WP_PLUGIN_DIR . '/bold-page-builder/bold-builder.php' ) ) { return true; }
        return false;
    }
    
    function handle_shortcode( $atts, $content ) {
         if ( !$this->bb_exist() ) { return false; }
        
		extract( shortcode_atts( apply_filters( 'bt_bb_extract_atts_' . $this->shortcode, array(
			'image'        => '',
			'size'         => '',
			'lazy_load'    => 'no',
			'title'        => '',
			'text'         => '',
			'url'          => '',
			'target'       => '',
            'show_read_more' => 'yes',   
			'shape'        => ''
		) ), $atts, $this->shortcode ) );

		$class = array( $this->shortcode );

		if ( $el_class != '' ) {
			$class[] = $el_class;
		}

		$id_attr = '';
		if ( $el_id != '' ) {
			$id_attr = ' ' . 'id="' . esc_attr( $el_id ) . '"';
		}

		

		if ( $size != '' ) {
			$class[] = $this->prefix . 'size' . '_' . $size;
		}

		if ( $shape != '' ) {
			$class[] = $this->prefix . 'shape' . '_' . $shape;
		}		
                
        $alt = $title;
			
		if ( $image != '' && is_numeric( $image ) ) {
			$post_image = get_post( $image );
			if ( $post_image == '' ) return;
			
			if ( $alt == '' ) {
				$alt = get_post_meta($post_image->ID, '_wp_attachment_image_alt', true);
			}
			if ( $alt == '' ) {
				$alt = $post_image->post_excerpt;
			}
			if ( $title == '' ) {
				$title = $post_image->post_title;
			}
			
			$image = wp_get_attachment_image_src( $image, $size );
			$image = isset($image[0]) ? $image[0] : '';
			if ( $alt == '' ) {
				$alt = $image;
			}
		}
                
        $output = '';
                
       if ( ! empty( $image ) ) {
			if ( $lazy_load == 'yes' ) {
				$output_image = '<img src = "' . BT_BB_Root::$path . 'img/blank.gif" data-image_src="' . esc_url_raw( $image ) . '" alt="' . esc_attr( wp_strip_all_tags( $alt ) ) . '" class="btLazyLoadImage"/>';
			} else {
				$output_image = '<img src="' . esc_url_raw( $image ) . '" alt="' . esc_attr( wp_strip_all_tags( $alt ) ) . '"/>';
			}                        
		}                 
                
		$link = bt_bb_get_url( $url );
		$output_link = '';
		if ( ! empty( $link ) && $show_read_more == 'yes' ) {
			$output_link = '<a href="' . esc_url( $link ) . '"  target="' . esc_attr( $target ) . '">'.esc_html__( 'Read More', 'avantage' ).'</a>';
		} 

		$style_attr = '';                                
		if ( $el_style != '' ) {
			$style_attr = ' ' . 'style="' . esc_attr( $el_style ) . '"';
		}

		$class = apply_filters( $this->shortcode . '_class', $class, $atts );
                
		if ( $output_image != '' ) {
			if ( ! empty( $link ) ) {
				$output .= '<div class="' . esc_attr( $this->shortcode ) . '_content_image"><a href="' . esc_url( $link ) . '"  target="' . esc_attr( $target ) . '">'. $output_image .'</a></div>';
			}else{
				$output .= '<div class="' . esc_attr( $this->shortcode ) . '_content_image">' . $output_image . '</div>';
			}
		}
		$output .= '<div class="' . esc_attr( $this->shortcode ) . '_content">';
			$output .= '<div class="' . esc_attr( $this->shortcode ) . '_content_title"><h3>' . $title . '</h3></div>';
			$output .= '<div class="' . esc_attr( $this->shortcode ) . '_content_text">' . nl2br( $text ) . '</div>';
		$output .= '</div>';
                
		if ( $output_link != '' ) {
			$output .= '<div class="' . esc_attr( $this->shortcode ) . '_content_read_more">' . $output_link . '</div>';
		}

		$output = '<div' . $id_attr . ' class="' . esc_attr( implode( ' ', $class ) ) . '"' . $style_attr . '>' . $output . '</div>';
		
		$output = apply_filters( 'bt_bb_general_output', $output, $atts );
		$output = apply_filters( $this->shortcode . '_output', $output, $atts );

		return $output;

	}

	function map_shortcode() {
        if ( !$this->bb_exist() ) { return false; }
                
		require_once( WP_PLUGIN_DIR   . '/bold-page-builder/content_elements_misc/misc.php' );
		$color_scheme_arr = bt_bb_get_color_scheme_param_array();

		bt_bb_map( $this->shortcode, array( 'name' => esc_html__( 'Service with Image', 'avantage' ), 'description' => esc_html__( 'Service with image and text', 'avantage' ), 'icon' => $this->prefix_backend . 'icon' . '_' . $this->shortcode,
			'params' => array(
				array( 'param_name' => 'image', 'type' => 'attach_image', 'heading' => esc_html__( 'Image', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'size', 'type' => 'dropdown', 'heading' => esc_html__( 'Size', 'avantage' ), 'preview' => true,
					'value' => bt_bb_get_image_sizes()
				),
				array( 'param_name' => 'shape', 'type' => 'dropdown', 'heading' => esc_html__( 'Image shape', 'avantage' ),
					'value' => array(
						esc_html__( 'Square', 'avantage' ) => 'square',
						esc_html__( 'Soft Rounded', 'avantage' ) => 'soft_rounded',
						esc_html__( 'Hard Rounded', 'avantage' ) => 'hard_rounded',
						esc_html__( 'Slanted Right', 'avantage' ) => 'slanted_right',
						esc_html__( 'Slanted Left', 'avantage' ) => 'slanted_left'
					)
				),
				array( 'param_name' => 'lazy_load', 'type' => 'dropdown', 'default' => 'yes', 'heading' => esc_html__( 'Lazy load this image', 'avantage' ),
					'value' => array(
						esc_html__( 'No', 'avantage' ) => 'no',
						esc_html__( 'Yes', 'avantage' ) => 'yes'
					)
				),	
				array( 'param_name' => 'title', 'type' => 'textfield', 'heading' => esc_html__( 'Title', 'avantage' ), 'preview' => true ),
				array( 'param_name' => 'text', 'type' => 'textarea', 'heading' => esc_html__( 'Text', 'avantage' ) ),
				array( 'param_name' => 'url', 'type' => 'textfield', 'heading' => esc_html__( 'URL', 'avantage' ), 'group' => esc_html__( 'URL', 'avantage' ) ),
				array( 'param_name' => 'target', 'type' => 'dropdown', 'heading' => esc_html__( 'Target', 'avantage' ), 'group' => esc_html__( 'URL', 'avantage' ),
					'value' => array(
						esc_html__( 'Self (open in same tab)', 'avantage' ) => '_self',
						esc_html__( 'Blank (open in new tab)', 'avantage' ) => '_blank',
					)
				),
                 array( 'param_name' => 'show_read_more', 'type' => 'dropdown', 'heading' => esc_html__( 'Show Read More Link', 'avantage' ), 'group' => esc_html__( 'URL', 'avantage' ),
					'value' => array(
						esc_html__( 'No', 'avantage' ) => 'no',
						esc_html__( 'Yes', 'avantage' ) => 'yes'
					)
				)
			)
		) );
	}
    
}

