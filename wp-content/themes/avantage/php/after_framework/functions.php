<?php

// BUTTONS - shape

if ( function_exists( 'bt_bb_remove_params' ) ) {
	bt_bb_remove_params( 'bt_bb_button', 'style' );
	bt_bb_remove_params( 'bt_bb_button', 'shape' );
}
if ( function_exists( 'bt_bb_add_params' ) ) {
	bt_bb_add_params( 'bt_bb_button', array(		
		array( 'param_name' => 'style', 'type' => 'dropdown', 'heading' => esc_html__( 'Style', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
			'value' => array(
				esc_html__( 'Outline', 'bold-builder' ) => 'outline',
				esc_html__( 'Filled', 'bold-builder' ) => 'filled',
				esc_html__( 'Clean', 'bold-builder' ) => 'clean',
				esc_html__( 'Lined', 'bold-builder' ) => 'lined'
			)
		),
		array( 'param_name' => 'shape', 'type' => 'dropdown', 'heading' => esc_html__( 'Shape', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
			'value' => array(
				esc_html__('Inherit', 'avantage' ) => 'inherit',
				esc_html__('Square', 'avantage' ) => 'square',
				esc_html__('Rounded', 'avantage' ) => 'rounded',
				esc_html__('Round', 'avantage' ) => 'round',
				esc_html__('Slanted Right', 'avantage' ) => 'slanted_right',
				esc_html__('Slanted Left', 'avantage' ) => 'slanted_left',
				esc_html__( 'Lined', 'avantage' ) => 'lined'
			)
		),
	));
}


// CONTENT SLIDER - new: dots_style, arrows_style, arrows_position
// edited: show_dots, gap

if ( function_exists( 'bt_bb_remove_params' ) ) {
	bt_bb_remove_params( 'bt_bb_content_slider', 'arrows_size' );
	bt_bb_remove_params( 'bt_bb_content_slider', 'show_dots' );
	bt_bb_remove_params( 'bt_bb_content_slider', 'gap' );
}

if ( function_exists( 'bt_bb_add_params' ) ) {
	bt_bb_add_params( 'bt_bb_content_slider', array(
		array( 'param_name' => 'arrows_size', 'type' => 'dropdown', 'preview' => true, 'default' => 'normal', 'heading' => esc_html__( 'Navigation arrows size', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
			'value' => array(
				esc_html__('No arrows', 'avantage' ) => 'no_arrows',
				esc_html__('Small', 'avantage' ) => 'small',
				esc_html__('Normal', 'avantage' ) => 'normal',
				esc_html__('Large', 'avantage' ) => 'large'
			)
		),
		array( 'param_name' => 'arrows_style', 'type' => 'dropdown', 'preview' => true, 'default' => 'normal', 'heading' => esc_html__( 'Navigation arrows style', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
			'value' => array(
				esc_html__('Default', 'avantage' ) => '',
				esc_html__('Transparent background, light arrow', 'avantage' ) => 'transparent_light',
				esc_html__('Transparent background, dark arrow', 'avantage' ) => 'transparent_dark',
				esc_html__('Accent background, light arrow', 'avantage' ) => 'accent_light',
				esc_html__('Accent background, dark arrow', 'avantage' ) => 'accent_dark',
				esc_html__('Alternate background, light arrow', 'avantage' ) => 'alternate_light',
				esc_html__('Alternate background, dark arrow', 'avantage' ) => 'alternate_dark'
			)
		),
		array( 'param_name' => 'arrows_position', 'type' => 'dropdown', 'preview' => true, 'default' => 'normal', 'heading' => esc_html__( 'Navigation arrows position', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
			'value' => array(
				esc_html__('At sides', 'avantage' ) => '',
				esc_html__('From outside, at sides', 'avantage' ) => 'outside',
				esc_html__('Bottom left', 'avantage' ) => 'bottom_left',
				esc_html__('Bottom right', 'avantage' ) => 'bottom_right',
				esc_html__('Below', 'avantage' ) => 'below',
				esc_html__('Below left', 'avantage' ) => 'below_left',
				esc_html__('Below right', 'avantage' ) => 'below_right'
			)
		),
		array( 'param_name' => 'show_dots', 'type' => 'dropdown', 'heading' => esc_html__( 'Dots navigation', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
			'value' => array(
				esc_html__('Bottom', 'avantage' ) => 'bottom',
				esc_html__('Below slider', 'avantage' ) => 'below',
				esc_html__('Left', 'avantage' ) => 'left',
				esc_html__('Right', 'avantage' ) => 'right',
				esc_html__('Hide', 'avantage' ) => 'hide'
			)
		),
		array( 'param_name' => 'dots_style', 'type' => 'dropdown', 'heading' => esc_html__( 'Dots style', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
			'value' => array(
				esc_html__('Inherit', 'avantage' ) => '',
				esc_html__('Accent active dot', 'avantage' ) => 'accent_dot',
				esc_html__('Alternate active dot', 'avantage' ) => 'alternate_dot',
				esc_html__('Light active dot', 'avantage' ) => 'light_dot',
				esc_html__('Dark active dot', 'avantage' ) => 'dark_dot'
			)
		),
		array( 'param_name' => 'gap', 'type' => 'dropdown', 'heading' => esc_html__( 'Gap', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
			'value' => array(
				esc_html__('No gap', 'avantage' ) => 'no_gap',
				esc_html__('Small', 'avantage' ) => 'small',
				esc_html__('Normal', 'avantage' ) => 'normal',
				esc_html__('Large', 'avantage' ) => 'large',
				esc_html__('Extra Large', 'avantage' ) => 'extra_large',
				esc_html__('Huge', 'avantage' ) => 'huge'
			)
		),
	));
}

function avantage_bt_bb_content_slider_class( $class, $atts ) {
	if ( isset( $atts['dots_style'] ) && $atts['dots_style'] != '' ) {
		$class[] = 'bt_bb_dots_style_' . $atts['dots_style'];
	}
	if ( isset( $atts['arrows_style'] ) && $atts['arrows_style'] != '' ) {
		$class[] = 'bt_bb_arrows_style' . '_' . $atts['arrows_style'];
	}
	if ( isset( $atts['arrows_position'] ) && $atts['arrows_position'] != '' ) {
		$class[] = 'bt_bb_arrows_position' . '_' . $atts['arrows_position'];
	}
	return $class;
}
add_filter( 'bt_bb_content_slider_class', 'avantage_bt_bb_content_slider_class', 10, 2 );

// HEADLINE - font_weight, semitransparent_text

if ( function_exists( 'bt_bb_remove_params' ) ) {
	bt_bb_remove_params( 'bt_bb_headline', 'font_weight' );
}

if ( function_exists( 'bt_bb_add_params' ) ) {
	bt_bb_add_params( 'bt_bb_headline', array(
		array( 'param_name' => 'font_weight', 'type' => 'dropdown', 'heading' => esc_html__( 'Font weight', 'bold-builder' ), 'group' => esc_html__( 'Font', 'bold-builder' ),
			'value' => array(
				esc_html__( 'Default', 'bold-builder' ) => '',
				esc_html__( 'Normal', 'bold-builder' ) => 'normal',
				esc_html__( 'Bold', 'bold-builder' ) => 'bold',
				esc_html__( 'Bolder', 'bold-builder' ) => 'bolder',
				esc_html__( 'Lighter', 'bold-builder' ) => 'lighter',
				esc_html__( 'Light', 'bold-builder' ) => 'light',
				esc_html__( 'Thin', 'bold-builder' ) => 'thin',
				esc_html__( 'Font weight 100', 'bold-builder' ) => '100',
				esc_html__( 'Font weight 200', 'bold-builder' ) => '200',
				esc_html__( 'Font weight 300', 'bold-builder' ) => '300',
				esc_html__( 'Font weight 400', 'bold-builder' ) => '400',
				esc_html__( 'Font weight 500', 'bold-builder' ) => '500',
				esc_html__( 'Font weight 600', 'bold-builder' ) => '600',
				esc_html__( 'Font weight 700', 'bold-builder' ) => '700',
				esc_html__( 'Font weight 800', 'bold-builder' ) => '800',
				esc_html__( 'Font weight 900', 'bold-builder' ) => '900',
			)
		),
		array( 'param_name' => 'semitransparent_text', 'type' => 'checkbox', 'value' => array( esc_html__( 'Yes', 'avantage' ) => 'true' ), 'heading' => esc_html__( 'Semitransparent text', 'avantage' ), 'preview' => true, 'group' => esc_html__( 'Design', 'avantage' ),
		),
	));
}

function avantage_bt_bb_headline_class( $class, $atts ) {
	if ( isset( $atts['semitransparent_text'] ) && $atts['semitransparent_text'] != '' ) {
		$class[] = ' bt_bb_semitransparent_subheadline';
	}
	
	return $class;
}
add_filter( 'bt_bb_headline_class', 'avantage_bt_bb_headline_class', 10, 2 );

// IMAGE - new: fill_background_color

if ( function_exists( 'bt_bb_add_params' ) ) {
	bt_bb_add_params( 'bt_bb_image', array(		
		array( 'param_name' => 'fill_background_color', 'type' => 'dropdown', 'heading' => esc_html__( 'Fill background color', 'avantage' ),'group' => esc_html__( 'Content', 'avantage' ) ,
			'value' => array(
				esc_html__( 'Full', 'avantage' ) => 'full',
				esc_html__( 'Match content height', 'avantage' ) => 'match_content_height'
			)
		),
	));
}

function avantage_bt_bb_image_class( $class, $atts ) {
	if ( isset( $atts['fill_background_color'] ) && $atts['fill_background_color'] != '' ) {
		$class[] = 'bt_bb_fill_background_color' . '_' . $atts['fill_background_color'];
	}
	
	return $class;
}
add_filter( 'bt_bb_image_class', 'avantage_bt_bb_image_class', 10, 2 );

// IMAGE SLIDER - new: dots_style, arrows_size, arrows_style, arrows_position; 
// deleted: size, pause_on_hover, use_lightbox; changed: show_dots

if ( function_exists( 'bt_bb_remove_params' ) ) {
	bt_bb_remove_params( 'bt_bb_slider', 'size' );
	bt_bb_remove_params( 'bt_bb_slider', 'pause_on_hover' );
	bt_bb_remove_params( 'bt_bb_slider', 'use_lightbox' );
	bt_bb_remove_params( 'bt_bb_slider', 'show_dots' );
}

if ( function_exists( 'bt_bb_add_params' ) ) {
	bt_bb_add_params( 'bt_bb_slider', array(
		array( 'param_name' => 'show_dots', 'type' => 'dropdown', 'heading' => esc_html__( 'Dots navigation', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
			'value' => array(
				esc_html__('Bottom', 'avantage' ) => 'bottom',
				esc_html__('Below', 'avantage' ) => 'below',
				esc_html__('Left', 'avantage' ) => 'left',
				esc_html__('Right', 'avantage' ) => 'right',
				esc_html__('Hide', 'avantage' ) => 'hide'
			)
		),
		array( 'param_name' => 'dots_style', 'type' => 'dropdown', 'heading' => esc_html__( 'Dots style', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
			'value' => array(
				esc_html__('Inherit', 'avantage' ) => '',
				esc_html__('Accent active dot', 'avantage' ) => 'accent_dot',
				esc_html__('Alternate active dot', 'avantage' ) => 'alternate_dot',
				esc_html__('Light active dot', 'avantage' ) => 'light_dot',
				esc_html__('Dark active dot', 'avantage' ) => 'dark_dot'
			)
		),		
		array( 'param_name' => 'arrows_size', 'type' => 'dropdown', 'preview' => true, 'default' => 'normal', 'heading' => esc_html__( 'Navigation arrows size', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
			'value' => array(
				esc_html__('Small', 'avantage' ) => 'small',
				esc_html__('Normal', 'avantage' ) => 'normal',
				esc_html__('Large', 'avantage' ) => 'large'
			)
		),
		array( 'param_name' => 'arrows_style', 'type' => 'dropdown', 'preview' => true, 'default' => 'normal', 'heading' => esc_html__( 'Navigation arrows style', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
			'value' => array(
				esc_html__('Default', 'avantage' ) => '',
				esc_html__('Transparent background, light arrow', 'avantage' ) => 'transparent_light',
				esc_html__('Transparent background, dark arrow', 'avantage' ) => 'transparent_dark',
				esc_html__('Accent background, light arrow', 'avantage' ) => 'accent_light',
				esc_html__('Accent background, dark arrow', 'avantage' ) => 'accent_dark',
				esc_html__('Alternate background, light arrow', 'avantage' ) => 'alternate_light',
				esc_html__('Alternate background, dark arrow', 'avantage' ) => 'alternate_dark'
			)
		),
		array( 'param_name' => 'arrows_position', 'type' => 'dropdown', 'preview' => true, 'default' => 'normal', 'heading' => esc_html__( 'Navigation arrows position', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
			'value' => array(
				esc_html__('At sides', 'avantage' ) => '',
				esc_html__('From outside, at sides', 'avantage' ) => 'outside',
				esc_html__('Bottom left', 'avantage' ) => 'bottom_left',
				esc_html__('Bottom right', 'avantage' ) => 'bottom_right',
				esc_html__('Below', 'avantage' ) => 'below',
				esc_html__('Below left', 'avantage' ) => 'below_left',
				esc_html__('Below right', 'avantage' ) => 'below_right'
			)
		),				
	));
}

function avantage_bt_bb_slider_class( $class, $atts ) {
	if ( isset( $atts['dots_style'] ) && $atts['dots_style'] != '' ) {
		$class[] = 'bt_bb_dots_style_' . $atts['dots_style'];
	}
	if ( isset( $atts['arrows_size'] ) && $atts['arrows_size'] != '' ) {
		$class[] = 'bt_bb_arrows_size' . '_' . $atts['arrows_size'];
	}

	if ( isset( $atts['arrows_style'] ) && $atts['arrows_style'] != '' ) {
		$class[] = 'bt_bb_arrows_style' . '_' . $atts['arrows_style'];
	}

	if ( isset( $atts['arrows_position'] ) && $atts['arrows_position'] != '' ) {
		$class[] = 'bt_bb_arrows_position' . '_' . $atts['arrows_position'];
	}

	return $class;
}
add_filter( 'bt_bb_slider_class', 'avantage_bt_bb_slider_class', 10, 2 );

// CONTENT SLIDER ITEM - new: show_boxed_content

if ( function_exists( 'bt_bb_add_params' ) ) {
	bt_bb_add_params( 'bt_bb_content_slider_item', array(	
		array( 'param_name' => 'show_boxed_content', 'type' => 'dropdown', 'default' => 'no', 'heading' => esc_html__( 'Box column content - used to stretch or box column content, only applicable for one and two column layouts, for sliders in wide sections.', 'avantage' ),
			'value' => array(
				esc_html__( 'No', 'avantage' ) => 'no',
				esc_html__( 'Box both columns', 'avantage' ) => 'yes',
				esc_html__( 'Box left column', 'avantage' ) => 'left',
				esc_html__( 'Box right column', 'avantage' ) => 'right'
			)
		)
	));
}

function avantage_bt_bb_content_slider_item_class( $class, $atts ) {
	if ( isset( $atts['show_boxed_content'] ) && $atts['show_boxed_content'] != '' ) {
		if ( $atts['show_boxed_content'] == 'yes' ) {
				$class[] = 'bt_bb_show_boxed_content';
		}
		if ( $atts['show_boxed_content'] == 'left' ) {
				$class[] = 'bt_bb_show_left_boxed_content';
		}
		if ( $atts['show_boxed_content'] == 'right' ) {
				$class[] = 'bt_bb_show_right_boxed_content';
		}

	}
	return $class;
}
add_filter( 'bt_bb_content_slider_item_class', 'avantage_bt_bb_content_slider_item_class', 10, 2 );

// SECTION


if ( function_exists( 'bt_bb_remove_params' ) ) {
	bt_bb_remove_params( 'bt_bb_section', 'show_video_on_mobile' );
	bt_bb_remove_params( 'bt_bb_section', 'background_overlay' );
}

if ( function_exists( 'bt_bb_add_params' ) ) {
	bt_bb_add_params( 'bt_bb_section', array(		
		array( 'param_name' => 'background_overlay', 'type' => 'dropdown', 'heading' => esc_html__( 'Background overlay', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ), 
			'value' => array(
				esc_html__( 'No overlay', 'avantage' )    => '',
				esc_html__( 'Light stripes', 'avantage' ) => 'light_stripes',
				esc_html__( 'Dark stripes', 'avantage' )  => 'dark_stripes',
				esc_html__( 'Light solid', 'avantage' )	  => 'light_solid',
				esc_html__( 'Dark solid', 'avantage' )	  => 'dark_solid',
				esc_html__( 'Accent solid', 'avantage' )	  => 'accent_solid',
				esc_html__( 'Alternate solid', 'avantage' )	  => 'alternate_solid',
				esc_html__( 'Light gradient', 'avantage' )	  => 'light_gradient',
				esc_html__( 'Dark gradient', 'avantage' )	  => 'dark_gradient'
			)
		),
		array( 'param_name' => 'background_position', 'type' => 'textfield', 'heading' => esc_html__( 'Background position in keywords (e.g. left, right, top, bottom, center) or in pixels / percentage - ineffective if parallax is used', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ) ),
		array( 'param_name' => 'background_size', 'type' => 'textfield', 'heading' => esc_html__( 'Background size (e.g. auto, cover, contain, initial, inherit or size in pixels - ineffective if parallax is used', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ) ),			
		array( 'param_name' => 'show_boxed_content', 'type' => 'dropdown', 'default' => 'no', 'heading' => esc_html__( 'Box column content', 'avantage' ), 'description' => esc_html__( 'Used to stretch or box column content, only applicable for one and two column layouts', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
			'value' => array(
				esc_html__( 'No', 'avantage' ) => 'no',
				esc_html__( 'Box both columns', 'avantage' ) => 'yes',
				esc_html__( 'Box left column', 'avantage' ) => 'left',
				esc_html__( 'Box right column', 'avantage' ) => 'right'
			)
		),
		array( 'param_name' => 'allow_content_outside', 'type' => 'dropdown', 'heading' => esc_html__( 'Top & Bottom Coverage Images position', 'avantage' ), 'group' => esc_html__( 'Design', 'avantage' ),
			'value' => array(
				esc_html__( 'No (content to be underneath top and bottom covering image)', 'avantage' ) => 'no',
				esc_html__( 'Yes (content will cover both covering images)', 'avantage' ) => 'yes'
			)
		),		
	));
}

function avantage_bt_bb_section_class( $class, $atts ) {
	if ( isset( $atts['allow_content_outside'] ) && $atts['allow_content_outside'] == 'yes' ) {
		$class[] = 'bt_bb_section_allow_content_outside';
	}

	if ( isset( $atts['show_boxed_content'] ) ) {
			if ( $atts['show_boxed_content'] == 'yes' ) {
				$class[] = 'bt_bb_section' . '_show_boxed_content';
			}
			if ( $atts['show_boxed_content'] == 'left' ) {
				$class[] = 'bt_bb_section' . '_show_left_boxed_content';
			}
			if ( $atts['show_boxed_content'] == 'right' ) {
				$class[] = 'bt_bb_section' . '_show_right_boxed_content';
			}
	}

	return $class;
}

function avantage_bt_bb_section_style( $style, $atts ) {
	if ( isset( $atts['background_position'] ) && $atts['background_position'] != '' ) {	
		$background_position_style  = 'background-position:' . $atts['background_position'] . ';';
		if ( $background_position_style ) $style .= $background_position_style;
	}
	if ( isset( $atts['background_size'] ) && $atts['background_size'] != '' ) {	
		$background_size_style  = 'background-size:' . $atts['background_size'] . ';';
		if ( $background_size_style ) $style .= $background_size_style;
	}
	return $style;
}

add_filter( 'bt_bb_section_class', 'avantage_bt_bb_section_class', 10, 2 );
add_filter( 'bt_bb_section_style', 'avantage_bt_bb_section_style', 10, 2 );

function avantage_bt_bb_fe( $elements ) {

	$elements[ 'bt_bb_floating_element' ] = array(
		'edit_box_selector' => '',
		'params' => array(
			'background_image'	=> array( 'js_handler' => array( 'target_selector' => '', 'type' => 'background_image' ) ),
		),
	);
	$elements[ 'bt_bb_floating_image' ] = array(
		'edit_box_selector' => '',
		'params' => array(
			'image'				=>  array(),
		),
	);
	$elements[ 'bt_bb_service_image' ] = array(
		'edit_box_selector' => '',
		'params' => array(
			'image'				=> array(),
			'title'				=> array( 'js_handler' => array( 'target_selector' => '.bt_bb_service_image_content_title h3', 'type' => 'inner_html' ) ),
			'text'				=> array( 'js_handler' => array( 'target_selector' => '.bt_bb_service_image_content_text', 'type' => 'inner_html' ) ),
			'url'				=> array( 'js_handler' => array( 'target_selector' => 'a', 'type' => 'attr', 'attr' => 'href' ) ),
			'target' 			=> array( 'js_handler' => array( 'target_selector' => 'a', 'type' => 'attr', 'attr' => 'target' ) ),
            'show_read_more'	=> array(),  
			'shape'				=> array( 'js_handler' => array( 'target_selector' => '', 'type' => 'class' ) ),
		),
	);
	$elements[ 'bt_bb_splitted_headline' ] = array(
		'edit_box_selector' => '',
		'params' => array( 
			'line_thick'         	=> array(),
			'line_width'         	=> array(),
			'line_orientation'      => array(),
			'headline1'      		=> array( 'js_handler' => array( 'target_selector' => '.bt_bb_splitted_headline .bt_bb_splitted_headline_first  .bt_bb_splitted_headline_content span', 'type' => 'inner_html' ) ),
			'size1'     			=> array(),
			'headline2'      		=> array( 'js_handler' => array( 'target_selector' => '.bt_bb_splitted_headline .bt_bb_splitted_headline_second  .bt_bb_splitted_headline_content span', 'type' => 'inner_html' ) ),
			'size2'     			=> array(),		
		),
	);
	$elements[ 'bt_bb_working_hours' ] = array(
		'edit_box_selector' => '',
		'params' => array( 
			'wh_content'    => array(),
		),
	);
	$elements[ 'bt_bb_progress_bar_advanced' ] = array(
		'edit_box_selector' => '',
		'ajax_trigger_scroll' => true,
		'params' => array(
			'type'        				=> array(),
			'percentage'        		=> array(),
			'duration'     	   			=> array(),
			'easing'       	 			=> array(),
			'text'        				=> array( 'js_handler' => array( 'target_selector' => '.bt_bb_progress_bar_advanced_text', 'type' => 'inner_html' ) ),
			'icon'						=> array(),
			'url'						=> array( 'js_handler' => array( 'target_selector' => 'a', 'type' => 'attr', 'attr' => 'href' ) ),
			'target' 					=> array( 'js_handler' => array( 'target_selector' => 'a', 'type' => 'attr', 'attr' => 'target' ) ),
		),
	);

	return $elements;
}
add_filter( 'bt_bb_fe_elements', 'avantage_bt_bb_fe' );



