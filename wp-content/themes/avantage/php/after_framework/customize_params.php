<?php
if ( ! function_exists( 'boldthemes_customize_heading_style' ) ) {
	function boldthemes_customize_heading_style( $wp_customize ) {
		
		$wp_customize->add_setting( BoldThemesFramework::$pfx . '_theme_options[heading_style]', array(
			'default'           => BoldThemes_Customize_Default::$data['heading_style'],
			'type'              => 'option',
			'capability'        => 'edit_theme_options',
			'sanitize_callback' => 'sanitize_text_field'
		));
		$wp_customize->add_control( 'heading_style', array(
			'label'     => esc_html__( 'Heading Style', 'avantage' ),
			'section'   => BoldThemesFramework::$pfx . '_typography_section',
			'settings'  => BoldThemesFramework::$pfx . '_theme_options[heading_style]',
			'priority'  => 100,
			'type'      => 'select',
			'choices'   => array(
			'default' => esc_html__( 'Default', 'avantage' ),
			'compact' => esc_html__( 'Compact (small line height + bold)', 'avantage' )
			)
		));
	}
}
add_action( 'customize_register', 'boldthemes_customize_heading_style' );

// BUTTONS FONT

if ( ! function_exists( 'boldthemes_customize_button_font' ) ) {
	function boldthemes_customize_button_font( $wp_customize ) {
		
		$wp_customize->add_setting( BoldThemesFramework::$pfx . '_theme_options[button_font]', array(
			'default'           => urlencode( BoldThemes_Customize_Default::$data['button_font'] ),
			'type'              => 'option',
			'capability'        => 'edit_theme_options',
			'sanitize_callback' => 'boldthemes_sanitize_select'
		));
		$wp_customize->add_control( 'button_font', array(
			'label'     => esc_html__( 'Button Font', 'avantage' ),
			'section'   => BoldThemesFramework::$pfx . '_typo_section',
			'settings'  => BoldThemesFramework::$pfx . '_theme_options[button_font]',
			'priority'  => 99,
			'type'      => 'select',
			'choices'   => BoldThemesFramework::$customize_fonts
		));
	}
}
add_action( 'customize_register', 'boldthemes_customize_button_font' );
add_action( 'boldthemes_customize_register', 'boldthemes_customize_button_font' );

// SHOP SALE TAG DESIGN
if ( ! function_exists( 'boldthemes_customize_shop_sale_tag_design' ) ) {
	function boldthemes_customize_shop_sale_tag_design( $wp_customize ) {
		
		$wp_customize->add_setting( BoldThemesFramework::$pfx . '_theme_options[shop_sale_tag_design]', array(
			'default'           => BoldThemes_Customize_Default::$data['shop_sale_tag_design'],
			'type'              => 'option',
			'capability'        => 'edit_theme_options',
			'sanitize_callback' => 'boldthemes_sanitize_select'
		));
		$wp_customize->add_control( 'shop_sale_tag_design', array(
			'label'     => esc_html__( 'Shop Sale Tag Design', 'avantage' ),
			'section'   => BoldThemesFramework::$pfx . '_shop_section',
			'settings'  => BoldThemesFramework::$pfx . '_theme_options[shop_sale_tag_design]',
			'priority'  => 98,
			'description' => esc_html__( 'Choose a design for shop sale tag.', 'avantage' ),
			'type'      => 'select',
			'choices'   => array(
			'triangle' => esc_html__( 'Triangular', 'avantage' ),
			'rounded' => esc_html__( 'Rounded', 'avantage' ),
			'round' => esc_html__( 'Round', 'avantage' ),
			'slanted_right' => esc_html__( 'Slanted Right', 'avantage' ),
			'slanted_left' => esc_html__( 'Slanted Left', 'avantage' ),
			'square' => esc_html__( 'Square', 'avantage' )
			)
		));	
	}
}
add_action( 'customize_register', 'boldthemes_customize_shop_sale_tag_design' );
add_action( 'boldthemes_customize_register', 'boldthemes_customize_shop_sale_tag_design' );

// CUSTOM 404 IMAGE
if ( ! function_exists( 'boldthemes_customize_image_404' ) ) {
	function boldthemes_customize_image_404( $wp_customize ) {
		
		$wp_customize->add_setting( BoldThemesFramework::$pfx . '_theme_options[image_404]', array(
			'default'           => BoldThemes_Customize_Default::$data['image_404'],
			'type'              => 'option',
			'capability'        => 'edit_theme_options',
			'sanitize_callback' => 'boldthemes_sanitize_image'
		));
		$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'image_404', array(
			'label'    => esc_html__( 'Custom Error 404 Page Image', 'avantage' ),
			'section'  => BoldThemesFramework::$pfx . '_general_section',
			'settings' => BoldThemesFramework::$pfx . '_theme_options[image_404]',
			'priority' => 121,
			'context'  => BoldThemesFramework::$pfx . '_image_404'
		)));
	}
}
add_action( 'customize_register', 'boldthemes_customize_image_404' );
add_action( 'boldthemes_customize_register', 'boldthemes_customize_image_404' );

// Show logo and logo widgets
if ( ! function_exists( 'boldthemes_customize_show_logo_and_logo_widgets' ) ) {
	function boldthemes_customize_show_logo_and_logo_widgets( $wp_customize ) {
		
		$wp_customize->add_setting( BoldThemesFramework::$pfx . '_theme_options[show_logo_and_logo_widgets]', array(
			'default'           => BoldThemes_Customize_Default::$data['show_logo_and_logo_widgets'],
			'type'              => 'option',
			'capability'        => 'edit_theme_options',
			'sanitize_callback' => 'boldthemes_sanitize_checkbox'
		));
		$wp_customize->add_control( 'show_logo_and_logo_widgets', array(
			'label'    => esc_html__( 'Show logo and logo widgets on sticky header when menu is below logo', 'avantage' ),
			'section'  => BoldThemesFramework::$pfx . '_header_footer_section',
			'settings' => BoldThemesFramework::$pfx . '_theme_options[show_logo_and_logo_widgets]',
			'priority' => 61,
			'type'     => 'checkbox'
		));	
	}
}
add_action( 'customize_register', 'boldthemes_customize_show_logo_and_logo_widgets' );
add_action( 'boldthemes_customize_register', 'boldthemes_customize_show_logo_and_logo_widgets' );