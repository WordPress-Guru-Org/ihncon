<?php

// Register action/filter callbacks

add_action( 'after_setup_theme', 'avantage_register_menus' );
add_action( 'wp_enqueue_scripts', 'avantage_enqueue_scripts_styles' );
add_action( 'tgmpa_register', 'avantage_register_plugins' );
add_action( 'wp_enqueue_scripts', 'avantage_load_fonts' );
add_action( 'admin_init', 'avantage_theme_add_editor_styles' );
add_action( 'admin_enqueue_scripts', 'avantage_load_fonts' );
add_action( 'admin_enqueue_scripts', 'avantage_load_admin_style' );

add_action( 'widgets_init', 'avantage_widget_area' );

add_filter( 'bt_bb_color_scheme_arr', 'avantage_color_schemes' );

add_filter( 'body_class', 'avantage_body_class' );

add_filter( 'tiny_mce_before_init', 'avantage_editor_dynamic_styles' );

add_theme_support( 'customize-selective-refresh-widgets' );

// Default values

// callbacks

/**
 * Register navigation menus
 */
if ( ! function_exists( 'avantage_register_menus' ) ) {
	function avantage_register_menus() {
		register_nav_menus( array (
			'primary' => esc_html__( 'Primary Menu', 'avantage' ),
			'footer'  => esc_html__( 'Footer Menu', 'avantage' )
		));
	}
}

/**
 * Enqueue scripts and styles
 */
if ( ! function_exists( 'avantage_enqueue_scripts_styles' ) ) {
	function avantage_enqueue_scripts_styles() {
		
		BoldThemesFramework::$crush_vars_def = array( 'accentColor', 'alternateColor', 'bodyFont', 'buttonFont', 'menuFont', 'headingFont', 'headingSuperTitleFont', 'headingSubTitleFont', 'logoHeight' );
		
		// Custom accent color and font style
		$boldthemes_add_override_css = false;		
		
		$accent_color = boldthemes_get_option( 'accent_color' );
		$alternate_color = boldthemes_get_option( 'alternate_color' );
		$body_font = urldecode( boldthemes_get_option( 'body_font' ) );
		$menu_font = urldecode( boldthemes_get_option( 'menu_font' ) );
		$heading_font = urldecode( boldthemes_get_option( 'heading_font' ) );
		$heading_supertitle_font = urldecode( boldthemes_get_option( 'heading_supertitle_font' ) );
		$heading_subtitle_font = urldecode( boldthemes_get_option( 'heading_subtitle_font' ) );
		$button_font = urldecode( boldthemes_get_option( 'button_font' ) );
		$logo_height = urldecode( boldthemes_get_option( 'logo_height' ) );

		if ( $accent_color != '' ) {
			BoldThemesFramework::$crush_vars['accentColor'] = $accent_color;
			if ( $accent_color != BoldThemes_Customize_Default::$data['accent_color'] ) {
				$boldthemes_add_override_css = true;
			}
		}

		if ( $alternate_color != '' ) {
			BoldThemesFramework::$crush_vars['alternateColor'] = $alternate_color;
			if ( $alternate_color != BoldThemes_Customize_Default::$data['alternate_color'] ) {
				$boldthemes_add_override_css = true;
			}
		}
		if ( $body_font != '' ) {
			if ( $body_font == 'no_change' ) {
				$body_font = BoldThemes_Customize_Default::$data['body_font'];
			}
			BoldThemesFramework::$crush_vars['bodyFont'] = $body_font;
			if ( $body_font != BoldThemes_Customize_Default::$data['body_font'] ) {
				$boldthemes_add_override_css = true;
			}
		}

		if ( $menu_font != '' ) {
			if ( $menu_font == 'no_change' ) {
				$menu_font = BoldThemes_Customize_Default::$data['menu_font'];
			}
			BoldThemesFramework::$crush_vars['menuFont'] = $menu_font;
			if ( $menu_font != BoldThemes_Customize_Default::$data['menu_font'] ) {
				$boldthemes_add_override_css = true;
			}
		}

		if ( $heading_font != '' ) {
			if ( $heading_font == 'no_change' ) {
				$heading_font = BoldThemes_Customize_Default::$data['heading_font'];
			}
			BoldThemesFramework::$crush_vars['headingFont'] = $heading_font;
			if ( $heading_font != BoldThemes_Customize_Default::$data['heading_font'] ) {
				$boldthemes_add_override_css = true;
			}
		}

		if ( $heading_supertitle_font != '' ) {
			if ( $heading_supertitle_font == 'no_change' ) {
				$heading_supertitle_font = BoldThemes_Customize_Default::$data['heading_supertitle_font'];
			}
			BoldThemesFramework::$crush_vars['headingSuperTitleFont'] = $heading_supertitle_font;
			if ( $heading_supertitle_font != BoldThemes_Customize_Default::$data['heading_supertitle_font'] ) {
				$boldthemes_add_override_css = true;
			}
		}

		if ( $heading_subtitle_font != '' ) {
			if ( $heading_subtitle_font == 'no_change' ) {
				$heading_subtitle_font = BoldThemes_Customize_Default::$data['heading_subtitle_font'];
			}
			BoldThemesFramework::$crush_vars['headingSubTitleFont'] = $heading_subtitle_font;
			if ( $heading_subtitle_font != BoldThemes_Customize_Default::$data['heading_subtitle_font'] ) {
				$boldthemes_add_override_css = true;
			}
		}

		if ( $button_font != '' ) {
			if ( $button_font == 'no_change' ) {
				$button_font = BoldThemes_Customize_Default::$data['button_font'];
			}
			BoldThemesFramework::$crush_vars['buttonFont'] = $button_font;
			if ( $button_font != BoldThemes_Customize_Default::$data['button_font'] ) {
				$boldthemes_add_override_css = true;
			}
		}
		
		if ( $logo_height != '' ) {
			BoldThemesFramework::$crush_vars['logoHeight'] = $logo_height;
			if ( $logo_height != BoldThemes_Customize_Default::$data['logo_height'] ) {
				$boldthemes_add_override_css = true;
			}
		}

		// Create override file without local settings

		if ( function_exists( 'boldthemes_csscrush_file' ) ) {
			boldthemes_csscrush_file( get_theme_file_path( 'style.crush.css' ), array( 'source_map' => true, 'minify' => false, 'output_file' => 'style', 'formatter' => 'block', 'boilerplate' => false, 'vars' => BoldThemesFramework::$crush_vars, 'plugins' => array( 'loop', 'ease' ) ) );
		}

		// custom theme css
		wp_enqueue_style( 'avantage-style', get_parent_theme_file_uri( 'style.css' ), array(), false, 'screen' );
		wp_enqueue_style( 'avantage-print', get_parent_theme_file_uri( 'print.css' ), array(), false, 'print' );

		// external js
		wp_enqueue_script( 'fancySelect', get_parent_theme_file_uri( 'framework/js/fancySelect.js' ), array( 'jquery' ), '', true );

		// custom theme js
		wp_enqueue_script( 'avantage-header', get_parent_theme_file_uri( 'framework/js/header.misc.js' ), array( 'jquery' ), '', true );
		wp_enqueue_script( 'avantage-misc', get_parent_theme_file_uri( 'framework/js/misc.js' ), array( 'jquery' ), '', true );
		
		wp_add_inline_script( 'avantage-header', boldthemes_set_global_uri(), 'before' );
		
		if ( file_exists( get_parent_theme_file_path( 'css-override.php' ) ) && $boldthemes_add_override_css ) {
			require_once( get_parent_theme_file_path( 'css-override.php' ) );
			wp_add_inline_style( 'avantage-style', $css_override );
		}
		
		if ( file_exists( get_parent_theme_file_path( 'icons.php' ) ) ) {
			require_once( get_parent_theme_file_path( 'icons.php' ) );
			wp_add_inline_style( 'avantage-style', $icons );
		}

		if ( boldthemes_get_option( 'custom_js' ) != '' ) {
			wp_add_inline_script( 'avantage-misc', boldthemes_get_option( 'custom_js' ) );
		}	
		
	}
}

/**
 * Register the required plugins for this theme
 */
if ( ! function_exists( 'avantage_register_plugins' ) ) {
	function avantage_register_plugins() {

		$plugins = array(
	 
			array(
				'name'               => esc_html__( 'Avantage', 'avantage' ), // The plugin name.
				'slug'               => 'avantage', // The plugin slug (typically the folder name).
				'source'             => get_parent_theme_file_path( 'plugins/avantage.zip' ), // The plugin source.
				'required'           => true, // If false, the plugin is only 'recommended' instead of required.
				'version'            => '2.3.5', ///!do not change this comment! E.g. 1.0.0. If set, the active plugin must be this version or higher.
				'force_activation'   => false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch.
				'force_deactivation' => false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins.
				'external_url'       => '', // If set, overrides default API URL and points to an external URL.
			),
			array(
				'name'               => esc_html__( 'Cost Calculator', 'avantage' ), // The plugin name.
				'slug'               => 'bt' . '_cost_calculator', // The plugin slug (typically the folder name).
				'source'             => get_parent_theme_file_path( 'plugins/' . 'bt' . '_cost_calculator.zip' ), // The plugin source.
				'required'           => true, // If false, the plugin is only 'recommended' instead of required.
				'version'            => '2.2.3', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
				'force_activation'   => false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch.
				'force_deactivation' => false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins.
				'external_url'       => '', // If set, overrides default API URL and points to an external URL.
			),
			array(
				'name'               => esc_html__( 'Bold Timeline', 'avantage' ), // The plugin name.
				'slug'               => 'bold-timeline', // The plugin slug (typically the folder name).
				'source'             => get_parent_theme_file_path( 'plugins/' . 'bold-timeline.zip' ), // The plugin source.
				'required'           => true, // If false, the plugin is only 'recommended' instead of required.
				'version'            => '1.1.5', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
				'force_activation'   => false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch.
				'force_deactivation' => false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins.
				'external_url'       => '', // If set, overrides default API URL and points to an external URL.
			),
			array(
				'name'               => esc_html__( 'Bold Builder', 'avantage' ), // The plugin name.
				'slug'               => 'bold-page-builder', // The plugin slug (typically the folder name).
				'required'           => true, // If false, the plugin is only 'recommended' instead of required.
				'version'            => '3.1.4',
				'force_activation'   => false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch.
				'force_deactivation' => false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins.
			),
			array(
				'name'               => esc_html__( 'BoldThemes WordPress Importer', 'avantage' ), // The plugin name.
				'slug'               => 'bt' . '_wordpress_importer', // The plugin slug (typically the folder name).
				'source'             => get_parent_theme_file_path( 'plugins/' . 'bt' . '_wordpress_importer.zip' ), // The plugin source.
				'required'           => true, // If false, the plugin is only 'recommended' instead of required.
				'version'            => '1.0.6', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
				'force_activation'   => false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch.
				'force_deactivation' => false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins.
				'external_url'       => '', // If set, overrides default API URL and points to an external URL.
			),
			array(
				'name'               => esc_html__( 'Meta Box', 'avantage' ), // The plugin name.
				'slug'               => 'meta-box', // The plugin slug (typically the folder name).
				'required'           => true, // If false, the plugin is only 'recommended' instead of required.
				'force_activation'   => false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch.
				'force_deactivation' => false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins.
			),
			array(
				'name'               => esc_html__( 'Contact Form 7', 'avantage' ), // The plugin name.
				'slug'               => 'contact-form-7', // The plugin slug (typically the folder name).
				'required'           => true, // If false, the plugin is only 'recommended' instead of required.
				'force_activation'   => false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch.
				'force_deactivation' => false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins.
			),
			array(
				'name'               => esc_html__( 'Lightweight Sidebar Manager', 'avantage' ), // The plugin name.
				'slug'               => 'sidebar-manager', // The plugin slug (typically the folder name).
				'required'           => true, // If false, the plugin is only 'recommended' instead of required.
				'force_activation'   => false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch.
				'force_deactivation' => false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins.
			)
		);
	 
		$config = array(
			'default_path' => '',                      // Default absolute path to pre-packaged plugins.
			'menu'         => 'tgmpa-install-plugins', // Menu slug.
			'has_notices'  => true,                    // Show admin notices or not.
			'dismissable'  => false,                    // If false, a user cannot dismiss the nag message.
			'dismiss_msg'  => '',                      // If 'dismissable' is false, this message will be output at top of nag.
			'is_automatic' => false,                   // Automatically activate plugins after installation or not.
			'message'      => '',                      // Message to output right before the plugins table.
			'strings'      => array(
				'page_title'                      => esc_html__( 'Install Required Plugins', 'avantage' ),
				'menu_title'                      => esc_html__( 'Install Plugins', 'avantage' ),
				'installing'                      => esc_html__( 'Installing Plugin: %s', 'avantage' ), // %s = plugin name.
				'oops'                            => esc_html__( 'Something went wrong with the plugin API.', 'avantage' ),
				'notice_can_install_required'     => _n_noop( 'This theme requires the following plugin: %1$s.', 'This theme requires the following plugins: %1$s.', 'avantage' ), // %1$s = plugin name(s).
				'notice_can_install_recommended'  => _n_noop( 'This theme recommends the following plugin: %1$s.', 'This theme recommends the following plugins: %1$s.', 'avantage' ), // %1$s = plugin name(s).
				'notice_cannot_install'           => _n_noop( 'Sorry, but you do not have the correct permissions to install the %s plugin. Contact the administrator of this site for help on getting the plugin installed.', 'Sorry, but you do not have the correct permissions to install the %s plugins. Contact the administrator of this site for help on getting the plugins installed.', 'avantage' ), // %1$s = plugin name(s).
				'notice_can_activate_required'    => _n_noop( 'The following required plugin is currently inactive: %1$s.', 'The following required plugins are currently inactive: %1$s.', 'avantage' ), // %1$s = plugin name(s).
				'notice_can_activate_recommended' => _n_noop( 'The following recommended plugin is currently inactive: %1$s.', 'The following recommended plugins are currently inactive: %1$s.', 'avantage' ), // %1$s = plugin name(s).
				'notice_cannot_activate'          => _n_noop( 'Sorry, but you do not have the correct permissions to activate the %s plugin. Contact the administrator of this site for help on getting the plugin activated.', 'Sorry, but you do not have the correct permissions to activate the %s plugins. Contact the administrator of this site for help on getting the plugins activated.', 'avantage' ), // %1$s = plugin name(s).
				'notice_ask_to_update'            => _n_noop( 'The following plugin needs to be updated to its latest version to ensure maximum compatibility with this theme: %1$s.', 'The following plugins need to be updated to their latest version to ensure maximum compatibility with this theme: %1$s.', 'avantage' ), // %1$s = plugin name(s).
				'notice_cannot_update'            => _n_noop( 'Sorry, but you do not have the correct permissions to update the %s plugin. Contact the administrator of this site for help on getting the plugin updated.', 'Sorry, but you do not have the correct permissions to update the %s plugins. Contact the administrator of this site for help on getting the plugins updated.', 'avantage' ), // %1$s = plugin name(s).
				'install_link'                    => _n_noop( 'Begin installing plugin', 'Begin installing plugins', 'avantage' ),
				'activate_link'                   => _n_noop( 'Begin activating plugin', 'Begin activating plugins', 'avantage' ),
				'return'                          => esc_html__( 'Return to Required Plugins Installer', 'avantage' ),
				'plugin_activated'                => esc_html__( 'Plugin activated successfully.', 'avantage' ),
				'complete'                        => esc_html__( 'All plugins installed and activated successfully. %s', 'avantage' ), // %s = dashboard link.
				'nag_type'                        => 'updated' // Determines admin notice type - can only be 'updated', 'update-nag' or 'error'.
			)
		);
	 
		tgmpa( $plugins, $config );
	 
	}
}

/**
 * Loads custom Google Fonts
 */
if ( ! function_exists( 'avantage_load_fonts' ) ) {
	function avantage_load_fonts() {
		$body_font = boldthemes_custom_font( urldecode( boldthemes_get_option( 'body_font' ) ) );
		$heading_font = boldthemes_custom_font( urldecode( boldthemes_get_option( 'heading_font' ) ) );
		$menu_font = boldthemes_custom_font( urldecode( boldthemes_get_option( 'menu_font' ) ) );
		$heading_subtitle_font = boldthemes_custom_font( urldecode( boldthemes_get_option( 'heading_subtitle_font' ) ) );
		$heading_supertitle_font = boldthemes_custom_font( urldecode( boldthemes_get_option( 'heading_supertitle_font' ) ) );
		$button_font = boldthemes_custom_font( urldecode( boldthemes_get_option( 'button_font' ) ) );
		
		$font_families = array();
		
		if ( $body_font != '' ) {
			if ( $body_font == 'no_change' ) {
				$body_font = BoldThemes_Customize_Default::$data['body_font'];
			}
			$font_families[] = $body_font . ':100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic';
		} else {
			/*
			Translators: If there are characters in your language that are not supported
			by chosen font(s), translate this to 'off'. Do not translate into your own language.
			 */
			if ( 'off' !== _x( 'on', 'Lato font: on or off', 'avantage' ) ) {
				$font_families[] = 'Lato' . ':100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic';
			}
		}
		
		if ( $heading_font != '' ) {
			if ( $heading_font == 'no_change' ) {
				$heading_font = BoldThemes_Customize_Default::$data['heading_font'];
			}
			$font_families[] = $heading_font . ':100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic';
		} else {
			/*
			Translators: If there are characters in your language that are not supported
			by chosen font(s), translate this to 'off'. Do not translate into your own language.
			 */
			if ( 'off' !== _x( 'on', 'Lato font: on or off', 'avantage' ) ) {
				$font_families[] = 'Lato' . ':100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic';
			}
		}
		
		if ( $menu_font != '' ) {
			if ( $menu_font == 'no_change' ) {
				$menu_font = BoldThemes_Customize_Default::$data['menu_font'];
			}
			$font_families[] = $menu_font . ':100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic';
		} else {
			/*
			Translators: If there are characters in your language that are not supported
			by chosen font(s), translate this to 'off'. Do not translate into your own language.
			 */
			if ( 'off' !== _x( 'on', 'Lato font: on or off', 'avantage' ) ) {
				$font_families[] = 'Lato' . ':100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic';
			}
		}

		if ( $heading_subtitle_font != '' ) {
			if ( $heading_subtitle_font == 'no_change' ) {
				$heading_subtitle_font = BoldThemes_Customize_Default::$data['heading_subtitle_font'];
			}
			$font_families[] = $heading_subtitle_font . ':100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic';
		} else {
			/*
			Translators: If there are characters in your language that are not supported
			by chosen font(s), translate this to 'off'. Do not translate into your own language.
			 */
			if ( 'off' !== _x( 'on', 'Lato font: on or off', 'avantage' ) ) {
				$font_families[] = 'Lato' . ':100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic';
			}
		}

		if ( $heading_supertitle_font != '' ) {
			if ( $heading_supertitle_font == 'no_change' ) {
				$heading_supertitle_font = BoldThemes_Customize_Default::$data['heading_supertitle_font'];
			}
			$font_families[] = $heading_supertitle_font . ':100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic';
		} else {
			/*
			Translators: If there are characters in your language that are not supported
			by chosen font(s), translate this to 'off'. Do not translate into your own language.
			 */
			if ( 'off' !== _x( 'on', 'Lato font: on or off', 'avantage' ) ) {
				$font_families[] = 'Lato' . ':100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic';
			}
		}
		
		if ( $button_font != '' ) {
			if ( $button_font == 'no_change' ) {
				$button_font = BoldThemes_Customize_Default::$data['button_font'];
			}
			$font_families[] = $button_font . ':100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic';
		} else {
			/*
			Translators: If there are characters in your language that are not supported
			by chosen font(s), translate this to 'off'. Do not translate into your own language.
			 */
			if ( 'off' !== _x( 'on', 'Lato font: on or off', 'avantage' ) ) {
				$font_families[] = 'Lato' . ':100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic';
			}
		}

		if ( count( $font_families ) > 0 ) {
			$query_args = array(
				'family' => urlencode( implode( '|', $font_families ) ),
				'subset' => urlencode( 'latin,latin-ext' ),
			);
			$font_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css' );
			wp_enqueue_style( 'avantage-fonts', $font_url, array(), '1.0.0' );
			add_editor_style( $font_url );
		}
	}
}

if ( ! function_exists( 'avantage_load_admin_style' ) ) {
	function avantage_load_admin_style() {
		if ( function_exists( 'boldthemes_csscrush_file' ) ) {
			boldthemes_csscrush_file( get_theme_file_path( 'admin-style.crush.css' ), array( 'source_map' => true, 'minify' => false, 'output_file' => 'admin-style', 'formatter' => 'block', 'boilerplate' => false, 'vars' => BoldThemesFramework::$crush_vars, 'plugins' => array( 'loop', 'ease' ) ) );
		}
		wp_enqueue_style( 'avantage-admin-style', get_parent_theme_file_uri( 'admin-style.css' ) );
		require_once( get_parent_theme_file_path( 'admin-style.php' ) );
		wp_add_inline_style( 'avantage-admin-style', $admin_style );
	}
}

/**
 * TinyMCE style
 */
if ( ! function_exists( 'avantage_theme_add_editor_styles' ) ) {
	function avantage_theme_add_editor_styles() {
	    add_editor_style( 'admin-style.css' );
	}
}

/**
 * Add FontAwesome to TinyMCE editor
 */
if ( ! function_exists( 'avantage_editor_dynamic_styles' ) ) {
	function avantage_editor_dynamic_styles( $mceInit ) {
	    $styles = '@font-face{font-family:\"FontAwesome\";src:url(\"' . get_parent_theme_file_uri( 'fonts/FontAwesome/FontAwesome.woff' ) . '\") format(\"woff\"),url(\"' . get_parent_theme_file_uri( 'fonts/FontAwesome/FontAwesome.ttf' ) . '\") format(\"truetype\");}';
	    if ( isset( $mceInit['content_style'] ) ) {
	        $mceInit['content_style'] .= ' ' . ( $styles ) . ' ';
	    } else {
	        $mceInit['content_style'] = $styles . ' ';
	    }
	    return $mceInit;
	}
}

/**
 * Add class to body
 *
 * @return string 
 */
if ( ! function_exists( 'avantage_body_class' ) ) {
	function avantage_body_class( $extra_class ) {
		if ( boldthemes_get_option( 'heading_style' ) ) {
			$extra_class[] =  'btHeadingStyle_' . boldthemes_get_option( 'heading_style' );
		}
		return $extra_class;
	}
}

/**
 * Shop sidebar
 */
if ( ! function_exists( 'avantage_widget_area' ) ) {
	function avantage_widget_area() {
		if ( class_exists( 'woocommerce' ) ) {
			register_sidebar( array (
				'name' 			=> esc_html__( 'Shop Sidebar', 'avantage' ),
				'id' 			=> 'bt_shop_sidebar',
				'description'   => 'WooCommerce sidebar',
				'before_widget' => '<div class="btBox %2$s">',
				'after_widget' 	=> '</div>',
				'before_title' 	=> '<h4><span>',
				'after_title' 	=> '</span></h4>',
			));
		}
	}
}

/**
 * SVG Icon array
 */
if ( ! function_exists( 'bt_bb_get_svg_icons_param_array' ) ) {
	function bt_bb_get_svg_icons_param_array() {
	    return array(
			esc_html__( 'No icon', 'avantage' ) 					=> 'no_icon',
			
			/* Analytics And Ivestment */
			esc_html__( 'Analytics (Analytics and Investment)', 'avantage' ) 	=> 'analytics-and-investment/analytics',
			esc_html__( 'Analytics-1 (Analytics and Investment)', 'avantage' ) 	=> 'analytics-and-investment/analytics-1',
			esc_html__( 'Analytics-2 (Analytics and Investment)', 'avantage' ) 	=> 'analytics-and-investment/analytics-2',
			esc_html__( 'Balance (Analytics and Investment)', 'avantage' ) 		=> 'analytics-and-investment/balance',
			esc_html__( 'Brain (Analytics and Investment)', 'avantage' ) 		=> 'analytics-and-investment/brain',
			esc_html__( 'Briefcase (Analytics and Investment)', 'avantage' ) 	=> 'analytics-and-investment/briefcase',
			esc_html__( 'Calculator (Analytics and Investment)', 'avantage' ) 	=> 'analytics-and-investment/calculator',
			esc_html__( 'Coin (Analytics and Investment)', 'avantage' )	 		=> 'analytics-and-investment/coin',
			esc_html__( 'Contract (Analytics and Investment)', 'avantage' ) 		=> 'analytics-and-investment/contract',
			esc_html__( 'Flask (Analytics and Investment)', 'avantage' ) 		=> 'analytics-and-investment/flask',
			esc_html__( 'Hourglass (Analytics and Investment)', 'avantage' ) 	=> 'analytics-and-investment/hourglass',
			esc_html__( 'Investment (Analytics and Investment)', 'avantage' )	=> 'analytics-and-investment/investment',
			esc_html__( 'Invoice (Analytics and Investment)', 'avantage' ) 		=> 'analytics-and-investment/invoice',
			esc_html__( 'Light-bulb (Analytics and Investment)', 'avantage' )	=> 'analytics-and-investment/light-bulb',
			esc_html__( 'Microscope (Analytics and Investment)', 'avantage' )	=> 'analytics-and-investment/microscope',
			esc_html__( 'Money (Analytics and Investment)', 'avantage' ) 		=> 'analytics-and-investment/money',
			esc_html__( 'Money-1 (Analytics and Investment)', 'avantage' ) 		=> 'analytics-and-investment/money-1',
			esc_html__( 'Money-bag (Analytics and Investment)', 'avantage' ) 	=> 'analytics-and-investment/money-bag',
			esc_html__( 'Pie-chart (Analytics and Investment)', 'avantage' ) 	=> 'analytics-and-investment/pie-chart',
			esc_html__( 'Profits (Analytics and Investment)', 'avantage' ) 		=> 'analytics-and-investment/profits',
			esc_html__( 'Shield (Analytics and Investment)', 'avantage' ) 		=> 'analytics-and-investment/shield',
			esc_html__( 'Stopwatch (Analytics and Investment)', 'avantage' ) 	=> 'analytics-and-investment/stopwatch',
			esc_html__( 'Strategy (Analytics and Investment)', 'avantage' ) 		=> 'analytics-and-investment/strategy',
			esc_html__( 'Tablet (Analytics and Investment)', 'avantage' ) 		=> 'analytics-and-investment/tablet',
			esc_html__( 'Visibility (Analytics and Investment)', 'avantage' )	=> 'analytics-and-investment/visibility',

			/* Business */
			esc_html__( 'Agenda (Business)', 'avantage' ) 			=> 'business/agenda',
			esc_html__( 'Analytics (Business)', 'avantage' ) 		=> 'business/analytics',
			esc_html__( 'Businessman (Business)', 'avantage' ) 		=> 'business/agenda',
			esc_html__( 'Agenda (Business)', 'avantage' ) 			=> 'business/businessman',
			esc_html__( 'Business-travel (Business)', 'avantage' )	=> 'business/business-travel',
			esc_html__( 'Calculator (Business)', 'avantage' ) 		=> 'business/agenda',
			esc_html__( 'Calendar (Business)', 'avantage' ) 			=> 'business/calendar',
			esc_html__( 'Clipboard (Business)', 'avantage' ) 		=> 'business/clipboard',
			esc_html__( 'Conference (Business)', 'avantage' ) 		=> 'business/conference',
			esc_html__( 'Connection (Business)', 'avantage' ) 		=> 'business/connection',
			esc_html__( 'Delivery-truck (Business)', 'avantage' ) 	=> 'business/delivery-truck',
			esc_html__( 'Email (Business)', 'avantage' ) 			=> 'business/email',
			esc_html__( 'Employee (Business)', 'avantage' ) 			=> 'business/employee',
			esc_html__( 'Folder (Business)', 'avantage' ) 			=> 'business/folder',
			esc_html__( 'Goal (Business)', 'avantage' ) 				=> 'business/goal',
			esc_html__( 'Goal-1 (Business)', 'avantage' ) 			=> 'business/goal-1',
			esc_html__( 'Growth (Business)', 'avantage' ) 			=> 'business/growth',
			esc_html__( 'Laptop (Business)', 'avantage' ) 			=> 'business/laptop',
			esc_html__( 'Marketing (Business)', 'avantage' ) 		=> 'business/marketing',
			esc_html__( 'Office-block (Business)', 'avantage' ) 		=> 'business/office-block',
			esc_html__( 'Piggy-bank (Business)', 'avantage' ) 		=> 'business/piggy-bank',
			esc_html__( 'Portfolio (Business)', 'avantage' ) 		=> 'business/portfolio',
			esc_html__( 'Shop (Business)', 'avantage' ) 				=> 'business/shop',
			esc_html__( 'Smartphone (Business)', 'avantage' ) 		=> 'business/smartphone',
			esc_html__( 'Smartphone-1 (Business)', 'avantage' ) 		=> 'business/smartphone-1',
			esc_html__( 'Social-media (Business)', 'avantage' ) 		=> 'business/social-media',
			esc_html__( 'Speed (Business)', 'avantage' ) 			=> 'business/speed',
			esc_html__( 'Startup (Business)', 'avantage' ) 			=> 'business/startup',
			esc_html__( 'Strategy (Business)', 'avantage' ) 			=> 'business/strategy',
			esc_html__( 'Tactics (Business)', 'avantage' ) 			=> 'business/tactics',
			esc_html__( 'Website (Business)', 'avantage' ) 			=> 'business/website',

			/* Business And Finance */
			esc_html__( 'Balance (Business And Finance)', 'avantage' ) 		=> 'business-and-finance/balance',
			esc_html__( 'Briefcase (Business And Finance)', 'avantage' ) 	=> 'business-and-finance/briefcase',
			esc_html__( 'Calculator (Business And Finance)', 'avantage' ) 	=> 'business-and-finance/calculator',
			esc_html__( 'Coins (Business And Finance)', 'avantage' ) 		=> 'business-and-finance/coins',
			esc_html__( 'Compass (Business And Finance)', 'avantage' ) 		=> 'business-and-finance/compass',
			esc_html__( 'Contract (Business And Finance)', 'avantage' ) 		=> 'business-and-finance/contract',
			esc_html__( 'Diamond (Business And Finance)', 'avantage' ) 		=> 'business-and-finance/diamond',
			esc_html__( 'Flask (Business And Finance)', 'avantage' ) 		=> 'business-and-finance/flask',
			esc_html__( 'Growth (Business And Finance)', 'avantage' ) 		=> 'business-and-finance/growth',
			esc_html__( 'Handshake (Business And Finance)', 'avantage' ) 	=> 'business-and-finance/handshake',
			esc_html__( 'Hourglass (Business And Finance)', 'avantage' ) 	=> 'business-and-finance/hourglass',
			esc_html__( 'Invoice (Business And Finance)', 'avantage' ) 		=> 'business-and-finance/invoice',
			esc_html__( 'Key (Business And Finance)', 'avantage' ) 			=> 'business-and-finance/key',
			esc_html__( 'Light-bulb (Business And Finance)', 'avantage' ) 	=> 'business-and-finance/light-bulb',
			esc_html__( 'Money (Business And Finance)', 'avantage' ) 		=> 'business-and-finance/money',
			esc_html__( 'Networking (Business And Finance)', 'avantage' ) 	=> 'business-and-finance/networking',
			esc_html__( 'Networking-1 (Business And Finance)', 'avantage' ) 	=> 'business-and-finance/networking-1',
			esc_html__( 'Notepad (Business And Finance)', 'avantage' ) 		=> 'business-and-finance/notepad',
			esc_html__( 'Phone-call (Business And Finance)', 'avantage' ) 	=> 'business-and-finance/phone-call',
			esc_html__( 'Pie-chart (Business And Finance)', 'avantage' ) 	=> 'business-and-finance/pie-chart',
			esc_html__( 'Presentation (Business And Finance)', 'avantage' ) 	=> 'business-and-finance/presentation',
			esc_html__( 'Route (Business And Finance)', 'avantage' ) 		=> 'business-and-finance/route',
			esc_html__( 'Speedometer (Business And Finance)', 'avantage' ) 	=> 'business-and-finance/speedometer',
			esc_html__( 'Target (Business And Finance)', 'avantage' ) 		=> 'business-and-finance/target',
			esc_html__( 'Trophy (Business And Finance)', 'avantage' ) 		=> 'business-and-finance/trophy',

			/* Business Collection */
			esc_html__( 'Add (Business Collection)', 'avantage' ) 			=> 'business-collection/add',
			esc_html__( 'Bar-chart (Business Collection)', 'avantage' ) 		=> 'business-collection/bar-chart',
			esc_html__( 'Binoculars (Business Collection)', 'avantage' ) 	=> 'business-collection/binoculars',
			esc_html__( 'Browser (Business Collection)', 'avantage' ) 		=> 'business-collection/browser',
			esc_html__( 'Bug (Business Collection)', 'avantage' ) 			=> 'business-collection/bug',
			esc_html__( 'Chat (Business Collection)', 'avantage' ) 			=> 'business-collection/chat',
			esc_html__( 'Chat-1 (Business Collection)', 'avantage' ) 		=> 'business-collection/chat-1',
			esc_html__( 'Chat-2 (Business Collection)', 'avantage' ) 		=> 'business-collection/chat-2',
			esc_html__( 'Cloud-computing (Business Collection)', 'avantage' )=> 'business-collection/cloud-computing',
			esc_html__( 'Cloud-computing-1 (Business Collection)', 'avantage' ) 		=> 'business-collection/cloud-computing-1',
			esc_html__( 'Compass (Business Collection)', 'avantage' ) 		=> 'business-collection/compass',
			esc_html__( 'Compass-1 (Business Collection)', 'avantage' ) 		=> 'business-collection/compass-1',
			esc_html__( 'Computer (Business Collection)', 'avantage' ) 		=> 'business-collection/computer',
			esc_html__( 'Computer-1 (Business Collection)', 'avantage' ) 	=> 'business-collection/computer-1',
			esc_html__( 'Connection (Business Collection)', 'avantage' ) 	=> 'business-collection/connection',
			esc_html__( 'Connection-1 (Business Collection)', 'avantage' ) 	=> 'business-collection/connection-1',
			esc_html__( 'Desk (Business Collection)', 'avantage' ) 			=> 'business-collection/desk',
			esc_html__( 'Directions (Business Collection)', 'avantage' ) 	=> 'business-collection/directions',
			esc_html__( 'Dislike (Business Collection)', 'avantage' ) 		=> 'business-collection/dislike',
			esc_html__( 'Dollar-symbol (Business Collection)', 'avantage' ) 	=> 'business-collection/dollar-symbol',
			esc_html__( 'Dollar-symbol-1 (Business Collection)', 'avantage' )=> 'business-collection/dollar-symbol-1',
			esc_html__( 'Email (Business Collection)', 'avantage' ) 			=> 'business-collection/email',
			esc_html__( 'Group (Business Collection)', 'avantage' ) 			=> 'business-collection/group',
			esc_html__( 'Group-1 (Business Collection)', 'avantage' ) 		=> 'business-collection/group-1',
			esc_html__( 'Group-2 (Business Collection)', 'avantage' ) 		=> 'business-collection/group-2',
			esc_html__( 'Handshake (Business Collection)', 'avantage' ) 		=> 'business-collection/handshake',
			esc_html__( 'Head (Business Collection)', 'avantage' ) 			=> 'business-collection/head',
			esc_html__( 'Hierarchical-structure (Business Collection)', 'avantage' )	=> 'business-collection/hierarchical-structure',
			esc_html__( 'Invoice (Business Collection)', 'avantage' ) 		=> 'business-collection/invoice',
			esc_html__( 'Laptop (Business Collection)', 'avantage' ) 		=> 'business-collection/laptop',
			esc_html__( 'Laptop-1 (Business Collection)', 'avantage' ) 		=> 'business-collection/laptop-1',
			esc_html__( 'Laptop-2 (Business Collection)', 'avantage' ) 		=> 'business-collection/laptop-2',
			esc_html__( 'Like (Business Collection)', 'avantage' ) 			=> 'business-collection/like',
			esc_html__( 'Like-1 (Business Collection)', 'avantage' ) 		=> 'business-collection/like-1',
			esc_html__( 'Like-2 (Business Collection)', 'avantage' ) 		=> 'business-collection/like-2',
			esc_html__( 'Like-3 (Business Collection)', 'avantage' ) 		=> 'business-collection/like-3',
			esc_html__( 'Like-4 (Business Collection)', 'avantage' ) 		=> 'business-collection/like-4',
			esc_html__( 'Like-5 (Business Collection)', 'avantage' ) 		=> 'business-collection/like-5',
			esc_html__( 'List (Business Collection)', 'avantage' ) 			=> 'business-collection/list',
			esc_html__( 'List-1 (Business Collection)', 'avantage' ) 		=> 'business-collection/list-1',
			esc_html__( 'Money (Business Collection)', 'avantage' ) 			=> 'business-collection/money',
			esc_html__( 'Money-1 (Business Collection)', 'avantage' ) 		=> 'business-collection/money-1',
			esc_html__( 'Mouse (Business Collection)', 'avantage' ) 			=> 'business-collection/mouse',
			esc_html__( 'Mouse-2 (Business Collection)', 'avantage' ) 		=> 'business-collection/mouse-1',
			esc_html__( 'Mouse-2 (Business Collection)', 'avantage' ) 		=> 'business-collection/mouse-2',
			esc_html__( 'Network (Business Collection)', 'avantage' ) 		=> 'business-collection/network',
			esc_html__( 'Network-1 (Business Collection)', 'avantage' ) 		=> 'business-collection/network-1',
			esc_html__( 'Networking (Business Collection)', 'avantage' ) 	=> 'business-collection/networking',
			esc_html__( 'Networking-1 (Business Collection)', 'avantage' ) 	=> 'business-collection/networking-1',
			esc_html__( 'Networking-2 (Business Collection)', 'avantage' ) 	=> 'business-collection/networking-2',
			esc_html__( 'Networking-3 (Business Collection)', 'avantage' ) 	=> 'business-collection/networking-3',
			esc_html__( 'Networking-4 (Business Collection)', 'avantage' ) 	=> 'business-collection/networking-4',
			esc_html__( 'Networking-5 (Business Collection)', 'avantage' ) 	=> 'business-collection/networking-5',
			esc_html__( 'Padlock (Business Collection)', 'avantage' ) 		=> 'business-collection/padlock',
			esc_html__( 'Padlock-1 (Business Collection)', 'avantage' ) 		=> 'business-collection/padlock-1',
			esc_html__( 'Pencil (Business Collection)', 'avantage' ) 		=> 'business-collection/pencil',
			esc_html__( 'People (Business Collection)', 'avantage' ) 		=> 'business-collection/people',
			esc_html__( 'Pie-chart (Business Collection)', 'avantage' ) 		=> 'business-collection/pie-chart',
			esc_html__( 'Pie-chart-1 (Business Collection)', 'avantage' ) 	=> 'business-collection/pie-chart-1',
			esc_html__( 'Piggy-Bank (Business Collection)', 'avantage' ) 	=> 'business-collection/piggy-bank',
			esc_html__( 'Piggy-Bank-1 (Business Collection)', 'avantage' ) 	=> 'business-collection/piggy-bank-1',
			esc_html__( 'Placeholder (Business Collection)', 'avantage' ) 	=> 'business-collection/placeholder',
			esc_html__( 'Printer (Business Collection)', 'avantage' ) 		=> 'business-collection/printer',
			esc_html__( 'Route (Business Collection)', 'avantage' ) 			=> 'business-collection/route',
			esc_html__( 'Search (Business Collection)', 'avantage' ) 		=> 'business-collection/search',
			esc_html__( 'Security (Business Collection)', 'avantage' ) 		=> 'business-collection/security',
			esc_html__( 'Server (Business Collection)', 'avantage' ) 		=> 'business-collection/server',
			esc_html__( 'Settings (Business Collection)', 'avantage' ) 		=> 'business-collection/settings',
			esc_html__( 'Settings-1 (Business Collection)', 'avantage' ) 	=> 'business-collection/settings-1',
			esc_html__( 'Settings-2 (Business Collection)', 'avantage' ) 	=> 'business-collection/settings-2',
			esc_html__( 'Sharing (Business Collection)', 'avantage' ) 		=> 'business-collection/sharing',
			esc_html__( 'Shopping-Bag (Business Collection)', 'avantage' )	=> 'business-collection/shopping-bag',
			esc_html__( 'Smartphone (Business Collection)', 'avantage' ) 	=> 'business-collection/smartphone',
			esc_html__( 'Smartphone-1 (Business Collection)', 'avantage' )	=> 'business-collection/smartphone-1',
			esc_html__( 'Startup (Business Collection)', 'avantage' ) 		=> 'business-collection/startup',
			esc_html__( 'Strategy (Business Collection)', 'avantage' ) 		=> 'business-collection/strategy',
			esc_html__( 'Teamwork (Business Collection)', 'avantage' ) 		=> 'business-collection/teamwork',
			esc_html__( 'Transfer (Business Collection)', 'avantage' ) 		=> 'business-collection/transfer',
			esc_html__( 'Transfer-1 (Business Collection)', 'avantage' ) 	=> 'business-collection/transfer-1',
			esc_html__( 'Transfer-2 (Business Collection)', 'avantage' ) 	=> 'business-collection/transfer-2',
			esc_html__( 'User (Business Collection)', 'avantage' ) 			=> 'business-collection/user',
			esc_html__( 'User-1 (Business Collection)', 'avantage' ) 		=> 'business-collection/user-1',
			esc_html__( 'User-2 (Business Collection)', 'avantage' ) 		=> 'business-collection/user-2',
			esc_html__( 'User-3 (Business Collection)', 'avantage' ) 		=> 'business-collection/user-3',
			esc_html__( 'User-4 (Business Collection)', 'avantage' ) 		=> 'business-collection/user-4',
			esc_html__( 'User-5 (Business Collection)', 'avantage' ) 		=> 'business-collection/user-5',
			esc_html__( 'User-6 (Business Collection)', 'avantage' ) 		=> 'business-collection/user-6',
			esc_html__( 'User-7 (Business Collection)', 'avantage' ) 		=> 'business-collection/user-7',
			esc_html__( 'User-8 (Business Collection)', 'avantage' ) 		=> 'business-collection/user-8',
			esc_html__( 'User-9 (Business Collection)', 'avantage' ) 		=> 'business-collection/user-9',
			esc_html__( 'User-10 (Business Collection)', 'avantage' ) 		=> 'business-collection/user-10',
			esc_html__( 'User-11 (Business Collection)', 'avantage' ) 		=> 'business-collection/user-11',
			esc_html__( 'User-12 (Business Collection)', 'avantage' ) 		=> 'business-collection/user-12',
			esc_html__( 'User-13 (Business Collection)', 'avantage' ) 		=> 'business-collection/user-13',
			esc_html__( 'User-14 (Business Collection)', 'avantage' ) 		=> 'business-collection/user-14',
			esc_html__( 'Worldwide (Business Collection)', 'avantage' ) 		=> 'business-collection/worldwide',
			esc_html__( 'Worldwide-1 (Business Collection)', 'avantage' ) 	=> 'business-collection/worldwide-1',
			esc_html__( 'Worldwide-2 (Business Collection)', 'avantage' ) 	=> 'business-collection/worldwide-2',
			esc_html__( 'Wrench (Business Collection)', 'avantage' ) 		=> 'business-collection/wrench',
			esc_html__( 'Wristwatch (Business Collection)', 'avantage' ) 	=> 'business-collection/wristwatch',

			/* Corporate Business */
			esc_html__( 'Analytics (Corporate Business)', 'avantage' ) 		=> 'corporate-business/analytics',
			esc_html__( 'Balance (Corporate Business)', 'avantage' ) 		=> 'corporate-business/balance',
			esc_html__( 'Browser (Corporate Business)', 'avantage' ) 		=> 'corporate-business/browser',
			esc_html__( 'Calculator (Corporate Business)', 'avantage' ) 		=> 'corporate-business/calculator',
			esc_html__( 'Calendar (Corporate Business)', 'avantage' ) 		=> 'corporate-business/calendar',
			esc_html__( 'Cityscape (Corporate Business)', 'avantage' ) 		=> 'corporate-business/cityscape',
			esc_html__( 'Computer (Corporate Business)', 'avantage' ) 		=> 'corporate-business/computer',
			esc_html__( 'Conference (Corporate Business)', 'avantage' ) 		=> 'corporate-business/conference',
			esc_html__( 'Goal (Corporate Business)', 'avantage' ) 			=> 'corporate-business/goal',
			esc_html__( 'Group (Corporate Business)', 'avantage' ) 			=> 'corporate-business/group',
			esc_html__( 'Growth (Corporate Business)', 'avantage' ) 			=> 'corporate-business/growth',
			esc_html__( 'Headphones (Corporate Business)', 'avantage' ) 		=> 'corporate-business/headphones',
			esc_html__( 'Hierarchical-structure (Corporate Business)', 'avantage' ) 		=> 'corporate-business/hierarchical-structure',
			esc_html__( 'Idea (Corporate Business)', 'avantage' ) 			=> 'corporate-business/idea',
			esc_html__( 'List (Corporate Business)', 'avantage' ) 			=> 'corporate-business/list',
			esc_html__( 'Networking (Corporate Business)', 'avantage' ) 		=> 'corporate-business/networking',
			esc_html__( 'Notepad (Corporate Business)', 'avantage' ) 		=> 'corporate-business/notepad',
			esc_html__( 'Office-chair (Corporate Business)', 'avantage' )	=> 'corporate-business/office-chair',
			esc_html__( 'Presentation (Corporate Business)', 'avantage' )	=> 'corporate-business/presentation',
			esc_html__( 'Search (Corporate Business)', 'avantage' ) 			=> 'corporate-business/search',
			esc_html__( 'Sprout (Corporate Business)', 'avantage' ) 			=> 'corporate-business/sprout',
			esc_html__( 'Strategy (Corporate Business)', 'avantage' ) 		=> 'corporate-business/strategy',
			esc_html__( 'Target (Corporate Business)', 'avantage' ) 			=> 'corporate-business/target',
			esc_html__( 'Tie (Corporate Business)', 'avantage' ) 			=> 'corporate-business/tie',
			esc_html__( 'Worldwide (Corporate Business)', 'avantage' ) 		=> 'corporate-business/worldwide',

			/* Office And Business */
			esc_html__( 'Agenda (Office And Business)', 'avantage' ) 		=> 'office-and-business/agenda',
			esc_html__( 'Archive (Office And Business)', 'avantage' ) 		=> 'office-and-business/archive',
			esc_html__( 'Briefcase (Office And Business)', 'avantage' ) 		=> 'office-and-business/briefcase',
			esc_html__( 'Cabinet (Office And Business)', 'avantage' ) 		=> 'office-and-business/cabinet',
			esc_html__( 'Cactus (Office And Business)', 'avantage' ) 		=> 'office-and-business/cactus',
			esc_html__( 'Calendar (Office And Business)', 'avantage' ) 		=> 'office-and-business/calendar',
			esc_html__( 'Contract (Office And Business)', 'avantage' ) 		=> 'office-and-business/contract',
			esc_html__( 'Documents (Office And Business)', 'avantage' ) 		=> 'office-and-business/documents',
			esc_html__( 'Email (Office And Business)', 'avantage' ) 			=> 'office-and-business/email',
			esc_html__( 'Folder (Office And Business)', 'avantage' ) 		=> 'office-and-business/folder',
			esc_html__( 'Id-card (Office And Business)', 'avantage' ) 		=> 'office-and-business/id-card',
			esc_html__( 'Idea (Office And Business)', 'avantage' ) 			=> 'office-and-business/idea',
			esc_html__( 'Lamp (Office And Business)', 'avantage' ) 			=> 'office-and-business/lamp',
			esc_html__( 'Laptop (Office And Business)', 'avantage' ) 		=> 'office-and-business/laptop',
			esc_html__( 'Mouse (Office And Business)', 'avantage' ) 			=> 'office-and-business/mouse',
			esc_html__( 'Office-chair (Office And Business)', 'avantage' ) 	=> 'office-and-business/office-chair',
			esc_html__( 'Paper-shredder (Office And Business)', 'avantage' )	=> 'office-and-business/paper-shredder',
			esc_html__( 'Presentation (Office And Business)', 'avantage' ) 	=> 'office-and-business/presentation',
			esc_html__( 'Push-pin (Office And Business)', 'avantage' ) 		=> 'office-and-business/push-pin',
			esc_html__( 'Ruler (Office And Business)', 'avantage' ) 			=> 'office-and-business/ruler',
			esc_html__( 'Skyscraper (Office And Business)', 'avantage' ) 	=> 'office-and-business/skyscraper',
			esc_html__( 'Speedometer (Office And Business)', 'avantage' ) 	=> 'office-and-business/speedometer',
			esc_html__( 'Tea-cup (Office And Business)', 'avantage' ) 		=> 'office-and-business/tea-cup',
			esc_html__( 'Telephone (Office And Business)', 'avantage' ) 		=> 'office-and-business/telephone',
			esc_html__( 'Tie (Office And Business)', 'avantage' ) 			=> 'office-and-business/tie',

			/* Startup And New Business */
			esc_html__( 'Analytics (Startup And New Business)', 'avantage' ) 	=> 'startup-and-new-business/analytics',
			esc_html__( 'Analytics-1 (Startup And New Business)', 'avantage' ) 	=> 'startup-and-new-business/analytics-1',
			esc_html__( 'Binoculars (Startup And New Business)', 'avantage' ) 	=> 'startup-and-new-business/binoculars',
			esc_html__( 'Browser (Startup And New Business)', 'avantage' ) 		=> 'startup-and-new-business/browser',
			esc_html__( 'Coding (Startup And New Business)', 'avantage' ) 		=> 'startup-and-new-business/coding',
			esc_html__( 'Creativity (Startup And New Business)', 'avantage' ) 	=> 'startup-and-new-business/creativity',
			esc_html__( 'Cut (Startup And New Business)', 'avantage' ) 			=> 'startup-and-new-business/cut',
			esc_html__( 'File (Startup And New Business)', 'avantage' ) 			=> 'startup-and-new-business/file',
			esc_html__( 'Flask (Startup And New Business)', 'avantage' ) 		=> 'startup-and-new-business/flask',
			esc_html__( 'Goal (Startup And New Business)', 'avantage' ) 			=> 'startup-and-new-business/goal',
			esc_html__( 'Graphic-design (Startup And New Business)', 'avantage' )=> 'startup-and-new-business/graphic-design',
			esc_html__( 'Growth (Startup And New Business)', 'avantage' ) 		=> 'startup-and-new-business/growth',
			esc_html__( 'Idea (Startup And New Business)', 'avantage' ) 			=> 'startup-and-new-business/idea',
			esc_html__( 'Ipo (Startup And New Business)', 'avantage' ) 			=> 'startup-and-new-business/ipo',
			esc_html__( 'Megaphone (Startup And New Business)', 'avantage' ) 	=> 'startup-and-new-business/megaphone',
			esc_html__( 'Money (Startup And New Business)', 'avantage' ) 		=> 'startup-and-new-business/money',
			esc_html__( 'Move (Startup And New Business)', 'avantage' ) 			=> 'startup-and-new-business/move',
			esc_html__( 'Open-box (Startup And New Business)', 'avantage' ) 		=> 'startup-and-new-business/open-box',
			esc_html__( 'Panel (Startup And New Business)', 'avantage' ) 		=> 'startup-and-new-business/panel',
			esc_html__( 'Pie-chart (Startup And New Business)', 'avantage' ) 	=> 'startup-and-new-business/pie-chart',
			esc_html__( 'Startup (Startup And New Business)', 'avantage' ) 		=> 'startup-and-new-business/startup',
			esc_html__( 'Stationery (Startup And New Business)', 'avantage' )	=> 'startup-and-new-business/stationery',
			esc_html__( 'Target (Startup And New Business)', 'avantage' ) 		=> 'startup-and-new-business/target',
			esc_html__( 'Trophy (Startup And New Business)', 'avantage' ) 		=> 'startup-and-new-business/trophy',
			esc_html__( 'Visibility (Startup And New Business)', 'avantage' )	=> 'startup-and-new-business/visibility'
		);
	}
}

/* Get icon HTML */

if ( ! function_exists( 'bt_bb_get_svg_icon_html' ) ) {
	function bt_bb_get_svg_icon_html( $icon ) {				
		ob_start();
		require( dirname(__FILE__) . '/bold-page-builder/content_elements_misc/svg/' . $icon . '.svg' );		
		return ob_get_clean();							
	}	
}

require_once( get_parent_theme_file_path( 'php/before_framework.php' ) );

require_once( get_parent_theme_file_path( 'framework/framework.php' ) );

require_once( get_parent_theme_file_path( 'php/config.php' ) );

require_once( get_parent_theme_file_path( 'php/after_framework.php' ) );