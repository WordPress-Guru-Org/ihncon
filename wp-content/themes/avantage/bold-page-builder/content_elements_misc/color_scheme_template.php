<?php

$custom_css = "

	/* Icons
	--------------------------------------- */
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon a { color: {$color_scheme[1]}; }
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon:hover a { color: {$color_scheme[2]}; }
	
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_outline .bt_bb_icon_holder:before {
		background-color: transparent;
		box-shadow: 0 0 0 2px {$color_scheme[1]} inset;
		color: {$color_scheme[1]};
	}	
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_outline:hover a.bt_bb_icon_holder:before {
		background-color: {$color_scheme[1]};
		box-shadow: 0 0 0 1em {$color_scheme[1]} inset;
		color: {$color_scheme[2]};
	}	
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_filled .bt_bb_icon_holder:before {
		box-shadow: 0 0 0 1em {$color_scheme[2]} inset;
		color: {$color_scheme[1]};
	}	
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_filled:hover a.bt_bb_icon_holder:before {
		box-shadow: 0 0 0 2px {$color_scheme[2]} inset;
		background-color: {$color_scheme[1]};
		color: {$color_scheme[2]};
	}	
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_borderless .bt_bb_icon_holder:before {
		color: {$color_scheme[1]};
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_borderless:hover a.bt_bb_icon_holder:before,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_borderless:hover a:hover,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_borderless:hover a.bt_bb_icon_holder > span {
		color: {$color_scheme[2]};
	}

	/* Colored Icon
	--------------------------------------- */
	.bt_bb_colored_icon_color_scheme_{$scheme_id}.bt_bb_icon .bt_bb_icon_colored_icon svg .cls-2 {
		fill: {$color_scheme[1]};
	}
	.bt_bb_colored_icon_color_scheme_{$scheme_id}.bt_bb_icon .bt_bb_icon_colored_icon svg .cls-1 {
		fill: {$color_scheme[2]};
	}


	/* Slanted icons
	--------------------------------------- */
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_outline.bt_bb_shape_slanted_right .bt_bb_icon_holder,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_outline.bt_bb_shape_slanted_left .bt_bb_icon_holder {
		background-color: transparent;
		box-shadow: 0 0 0 2px {$color_scheme[1]} inset !important;
		color: {$color_scheme[1]};
	}	
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_outline.bt_bb_shape_slanted_right:hover a.bt_bb_icon_holder,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_outline.bt_bb_shape_slanted_left:hover a.bt_bb_icon_holder {
		background-color: {$color_scheme[1]};
		box-shadow: 0 0 0 5em {$color_scheme[1]} inset !important;
		color: {$color_scheme[2]};
	}	
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_filled.bt_bb_shape_slanted_right .bt_bb_icon_holder,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_filled.bt_bb_shape_slanted_left .bt_bb_icon_holder {
		box-shadow: 0 0 0 5em {$color_scheme[2]} inset !important;
		color: {$color_scheme[1]};
	}	
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_filled.bt_bb_shape_slanted_right:hover a.bt_bb_icon_holder,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_filled.bt_bb_shape_slanted_left:hover a.bt_bb_icon_holder {
		box-shadow: 0 0 0 2px {$color_scheme[2]} inset !important;
		background-color: {$color_scheme[1]};
		color: {$color_scheme[2]};
	}	

	/* Buttons
	--------------------------------------- */
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_button.bt_bb_style_outline {
		border: 0;
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_button.bt_bb_style_outline a {
		box-shadow: 0 0 0 2px {$color_scheme[1]} inset, 0 4px 0 0 rgba(24,24,24,.15) inset;
		background-color: transparent;
		color: {$color_scheme[1]};
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_button.bt_bb_style_outline:hover a,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_button.bt_bb_style_outline:hover a:hover {
		box-shadow: 0 0 0 2px {$color_scheme[1]} inset, 0 5px 0 0 rgba(24,24,24,.15) inset, 0 3px 10px rgba(0,0,0,0.3);
		background-color: transparent;
		color: {$color_scheme[1]};
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_button.bt_bb_style_filled {
		border: 0;
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_button.bt_bb_style_filled a {
		background-color: {$color_scheme[2]};
		color: {$color_scheme[1]};		
		box-shadow: 0 -2px 0 0 rgba(24,24,24,.15) inset;
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_button.bt_bb_style_filled:hover a,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_button.bt_bb_style_filled a:hover {
		background-color: {$color_scheme[2]};
		color: {$color_scheme[1]};		
		box-shadow: 0 -3px 0 0 rgba(24,24,24,.15) inset, 0 3px 10px rgba(0,0,0,0.3);
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_button.bt_bb_style_clean a,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_borderless a {
		color: {$color_scheme[1]};
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_button.bt_bb_style_clean:hover a,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_button.bt_bb_style_clean a:hover,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_icon.bt_bb_style_borderless:hover a {
		color: {$color_scheme[2]};
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_button.bt_bb_style_lined a {
		color: {$color_scheme[1]};		
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_button.bt_bb_style_lined a:after {
		background: {$color_scheme[2]};		
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_button.bt_bb_style_lined a:hover {
		color: {$color_scheme[2]};		
	}

	/* Services
	--------------------------------------- */
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_style_outline.bt_bb_service .bt_bb_icon_holder,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_style_outline.bt_bb_service:hover .bt_bb_icon_holder {
		box-shadow: 0 0 0 2px {$color_scheme[1]} inset;
		color: {$color_scheme[1]};
		background-color: transparent;
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_style_outline.bt_bb_service:hover a.bt_bb_icon_holder:hover {
		box-shadow: 0 0 0 1em {$color_scheme[1]} inset;
		background-color: {$color_scheme[1]};
		color: {$color_scheme[2]} !important;
	}	
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_style_filled.bt_bb_service .bt_bb_icon_holder,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_style_filled.bt_bb_service:hover .bt_bb_icon_holder {
		box-shadow: 0 0 0 1em {$color_scheme[2]} inset;
		color: {$color_scheme[1]};
		background-color: transparent;
	}	
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_style_filled.bt_bb_service:hover a.bt_bb_icon_holder:hover	{
		box-shadow: 0 0 0 2px {$color_scheme[2]} inset;
		background-color: transparent;
		color: {$color_scheme[2]} !important;
	}	
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_style_borderless.bt_bb_service .bt_bb_icon_holder,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_style_borderless.bt_bb_service:hover .bt_bb_icon_holder {
		color: {$color_scheme[1]};
	}	
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_style_borderless.bt_bb_service:hover a.bt_bb_icon_holder:hover {
		color: {$color_scheme[2]};
	}
	
	/* Headline
	--------------------------------------- */
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_headline {
		color: {$color_scheme[1]};
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_headline .bt_bb_headline_superheadline {
		color: {$color_scheme[1]};
	}

	/* Price List
	--------------------------------------- */
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_price_list {
		color: {$color_scheme[1]};
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_price_list .bt_bb_price_list_price,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_price_list ul li:before {
		color: {$color_scheme[2]};
	}
	
	/* Icons in Price List
	--------------------------------------- */
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_price_list .bt_bb_icon.bt_bb_style_outline .bt_bb_icon_holder:before {
		box-shadow: 0 0 0 2px {$color_scheme[2]} inset;
		color: {$color_scheme[2]};
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_price_list .bt_bb_icon.bt_bb_style_filled .bt_bb_icon_holder:before {
		box-shadow: 0 0 0 2em {$color_scheme[2]} inset;
		color: #FFF;
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_price_list .bt_bb_icon.bt_bb_style_borderless .bt_bb_icon_holder:before {
		color: {$color_scheme[2]};
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_price_list .bt_bb_icon.bt_bb_style_outline.bt_bb_shape_slanted_left .bt_bb_icon_holder,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_price_list .bt_bb_icon.bt_bb_style_outline.bt_bb_shape_slanted_right .bt_bb_icon_holder {
		box-shadow: 0 0 0 2px {$color_scheme[2]} inset !important;
		color: {$color_scheme[2]};
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_price_list .bt_bb_icon.bt_bb_style_outline.bt_bb_shape_slanted_left .bt_bb_icon_holder:before,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_price_list .bt_bb_icon.bt_bb_style_outline.bt_bb_shape_slanted_right .bt_bb_icon_holder:before {
		color: currentColor;
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_price_list .bt_bb_icon.bt_bb_style_filled.bt_bb_shape_slanted_left .bt_bb_icon_holder,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_price_list .bt_bb_icon.bt_bb_style_filled.bt_bb_shape_slanted_right .bt_bb_icon_holder {
		box-shadow: 0 0 0 4.5em {$color_scheme[2]} inset !important;
		color: #FFF;
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_price_list .bt_bb_icon.bt_bb_style_filled.bt_bb_shape_slanted_left .bt_bb_icon_holder:before,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_price_list .bt_bb_icon.bt_bb_style_filled.bt_bb_shape_slanted_right .bt_bb_icon_holder:before {
		color: currentColor;
	}
	
	/* Section
	--------------------------------------- */
	.bt_bb_section.bt_bb_color_scheme_{$scheme_id} {
		color: {$color_scheme[1]};
		background-color: {$color_scheme[2]};
	}
	
	/* Latest posts
	--------------------------------------- */
	.bt_bb_color_scheme_{$scheme_id} .bt_bb_latest_posts .bt_bb_latest_posts_item .bt_bb_latest_posts_title_excerpt_holder:before {
		background-color: {$color_scheme[2]} !important;
	}
	
	/* Post & Portfolio grid
	--------------------------------------- */
	.bt_bb_color_scheme_{$scheme_id} .bt_bb_masonry_post_grid .bt_bb_grid_item_post_content:before,
	.bt_bb_color_scheme_{$scheme_id} .bt_bb_masonry_portfolio_grid .bt_bb_grid_item_post_content:before	{
		background-color: {$color_scheme[2]} !important;
	}
	
	/* Google map
	--------------------------------------- */
	.bt_bb_color_scheme_{$scheme_id} .bt_bb_google_maps.bt_bb_google_maps_with_content .bt_bb_google_maps_content .bt_bb_google_maps_content_wrapper .bt_bb_google_maps_location {
		background-color: {$color_scheme[2]};
		color: {$color_scheme[1]};
	}

	/* Working hours line
	--------------------------------------- */
	.bt_bb_color_scheme_{$scheme_id} .btWorkingHours .bt_bb_working_hours_inner_row:after {
		border-color: {$color_scheme[1]} !important;
	}
	
	/* Simple accordion
	--------------------------------------- */
	.bt_bb_color_scheme_{$scheme_id} .bt_bb_accordion.bt_bb_style_simple .bt_bb_accordion_item .bt_bb_accordion_item_title:after,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_accordion.bt_bb_style_simple .bt_bb_accordion_item .bt_bb_accordion_item_title:after {
		background-color: {$color_scheme[1]};
	}
	.bt_bb_color_scheme_{$scheme_id} .bt_bb_accordion.bt_bb_style_simple .bt_bb_accordion_item.on .bt_bb_accordion_item_title:after,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_accordion.bt_bb_style_simple .bt_bb_accordion_item.on .bt_bb_accordion_item_title:after {
		background-color: {$color_scheme[2]};
	}	

	/* Progress bar
	--------------------------------------- */
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_progress_bar.bt_bb_style_line .bt_bb_progress_bar_inner {
		color: currentColor;
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_progress_bar.bt_bb_style_line .bt_bb_progress_bar_inner .bt_bb_progress_bar_percent {
		color: {$color_scheme[1]};
	}
	
	/* Splitted headline
	--------------------------------------- */
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_splitted_headline .bt_bb_splitted_headline_first,
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_splitted_headline .bt_bb_splitted_headline_second {
		color: {$color_scheme[1]};
	}
	.bt_bb_color_scheme_{$scheme_id}.bt_bb_splitted_headline .bt_bb_splitted_headline_line {
		background-color: {$color_scheme[2]};
	}

	/* Service - Colored Icon
	-------------------- */

	.bt_bb_colored_icon_color_scheme_{$scheme_id}.bt_bb_service .bt_bb_service_colored_icon svg .cls-2 {
		fill: {$color_scheme[1]};
	}
	.bt_bb_colored_icon_color_scheme_{$scheme_id}.bt_bb_service .bt_bb_service_colored_icon svg .cls-1 {
		fill: {$color_scheme[2]};
	}
";