<?php
BoldThemes_Customize_Default::$data['body_font'] = 'Roboto';
BoldThemes_Customize_Default::$data['heading_supertitle_font'] = 'Roboto Condensed';
BoldThemes_Customize_Default::$data['heading_font'] = 'Sarabun';
BoldThemes_Customize_Default::$data['heading_subtitle_font'] = 'Roboto';
BoldThemes_Customize_Default::$data['menu_font'] = 'Sarabun';
BoldThemes_Customize_Default::$data['button_font'] = 'Sarabun';

BoldThemes_Customize_Default::$data['accent_color'] = '#e94d65';
BoldThemes_Customize_Default::$data['alternate_color'] = '#1b4962';
BoldThemes_Customize_Default::$data['logo_height'] = '140';
BoldThemes_Customize_Default::$data['box_menu_content'] = false;

BoldThemes_Customize_Default::$data['template_skin'] = false;
BoldThemes_Customize_Default::$data['heading_style'] = 'default';

// GENERAL
BoldThemes_Customize_Default::$data['shop_sale_tag_design'] = 'triangle';
BoldThemes_Customize_Default::$data['image_404'] = get_template_directory_uri() . '/gfx/404.jpg'; 

// HEADING STYLE
BoldThemes_Customize_Default::$data['heading_style'] = 'default';
BoldThemes_Customize_Default::$data['show_logo_and_logo_widgets'] = false;

require_once( get_template_directory() . '/php/after_framework/functions.php' );
require_once( get_template_directory() . '/php/after_framework/customize_params.php' );
