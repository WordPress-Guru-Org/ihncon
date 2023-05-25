<?php
if ( class_exists( 'BoldThemesFramework' ) && isset( BoldThemesFramework::$crush_vars ) ) {
	$boldthemes_crush_vars = apply_filters( 'boldthemes_crush_vars', BoldThemesFramework::$crush_vars );
}
if ( class_exists( 'BoldThemesFramework' ) && isset( BoldThemesFramework::$crush_vars_def ) ) {
	$boldthemes_crush_vars_def = BoldThemesFramework::$crush_vars_def;
}
if ( isset( $boldthemes_crush_vars['accentColor'] ) ) {
	$accentColor = $boldthemes_crush_vars['accentColor'];
} else {
	$accentColor = "#e94d65";
}
if ( isset( $boldthemes_crush_vars['alternateColor'] ) ) {
	$alternateColor = $boldthemes_crush_vars['alternateColor'];
} else {
	$alternateColor = "#1b4962";
}
if ( isset( $boldthemes_crush_vars['bodyFont'] ) ) {
	$bodyFont = $boldthemes_crush_vars['bodyFont'];
} else {
	$bodyFont = "Roboto";
}
if ( isset( $boldthemes_crush_vars['menuFont'] ) ) {
	$menuFont = $boldthemes_crush_vars['menuFont'];
} else {
	$menuFont = "Sarabun";
}
if ( isset( $boldthemes_crush_vars['headingFont'] ) ) {
	$headingFont = $boldthemes_crush_vars['headingFont'];
} else {
	$headingFont = "Sarabun";
}
if ( isset( $boldthemes_crush_vars['headingSuperTitleFont'] ) ) {
	$headingSuperTitleFont = $boldthemes_crush_vars['headingSuperTitleFont'];
} else {
	$headingSuperTitleFont = "Roboto Condensed";
}
if ( isset( $boldthemes_crush_vars['headingSubTitleFont'] ) ) {
	$headingSubTitleFont = $boldthemes_crush_vars['headingSubTitleFont'];
} else {
	$headingSubTitleFont = "Roboto";
}
if ( isset( $boldthemes_crush_vars['buttonFont'] ) ) {
	$buttonFont = $boldthemes_crush_vars['buttonFont'];
} else {
	$buttonFont = "Sarabun";
}
if ( isset( $boldthemes_crush_vars['logoHeight'] ) ) {
	$logoHeight = $boldthemes_crush_vars['logoHeight'];
} else {
	$logoHeight = "140";
}
$accentColorDark = CssCrush\fn__l_adjust( $accentColor." -15" );$accentColorVeryDark = CssCrush\fn__l_adjust( $accentColor." -35" );$accentColorVeryVeryDark = CssCrush\fn__l_adjust( $accentColor." -42" );$accentColorLight = CssCrush\fn__a_adjust( $accentColor." -30" );$alternateColorDark = CssCrush\fn__l_adjust( $alternateColor." -15" );$alternateColorVeryDark = CssCrush\fn__l_adjust( $alternateColor." -25" );$alternateColorLight = CssCrush\fn__a_adjust( $alternateColor." -40" );$css_override = sanitize_text_field("select,
input{font-family: \"{$bodyFont}\",Arial,Helvetica,sans-serif;}
input[type=\"file\"]::-webkit-file-upload-button{background: {$accentColor} !important;
    font-family: {$headingFont};}
input[type=\"file\"]::-webkit-file-upload-button:hover{-webkit-box-shadow: 0 -3px 0 0 rgba(24,24,24,.2) inset,0 0 0 2.5em {$accentColor} inset,0 2px 10px rgba(0,0,0,.2);
    box-shadow: 0 -3px 0 0 rgba(24,24,24,.2) inset,0 0 0 2.5em {$accentColor} inset,0 2px 10px rgba(0,0,0,.2);}
.fancy-select ul.options li:before{
    background: {$accentColor};}
.fancy-select ul.options li:hover{color: {$accentColor};}
.btContent a{color: {$accentColor};}
a:hover{
    color: {$accentColor};}
.btText a{color: {$accentColor};}
body{font-family: \"{$bodyFont}\",Arial,Helvetica,sans-serif;}
h1,
h2,
h3,
h4,
h5,
h6{font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.btContentHolder table thead th{
    background-color: {$accentColor};}
.btAccentDarkHeader .btPreloader .animation > div:first-child,
.btLightAccentHeader .btPreloader .animation > div:first-child,
.btTransparentLightHeader .btPreloader .animation > div:first-child{
    background-color: {$accentColor};}
.btPreloader .animation .preloaderLogo{height: {$logoHeight}px;}
.btLoader > div,
.btLoader > span{
    background: {$accentColor};}
.btErrorPage .bt_bb_column.bt_bb_align_center .bt_bb_headline.bt_bb_dash_top .bt_bb_headline_content:before{
    border-top: 2px solid {$accentColor};}
.btErrorPage .bt_bb_column.bt_bb_align_center .bt_bb_headline_subheadline a{
    background: {$accentColor};
    font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif;}
.mainHeader{
    font-family: \"{$menuFont}\",Arial,Helvetica,sans-serif;}
.mainHeader a:hover{color: {$accentColor};}
.menuPort{font-family: \"{$menuFont}\",Arial,Helvetica,sans-serif;}
.menuPort nav > ul > li > a{line-height: {$logoHeight}px;}
.btTextLogo{font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;
    line-height: {$logoHeight}px;}
.btLogoArea .logo img{height: {$logoHeight}px;}
.btTransparentDarkHeader .btHorizontalMenuTrigger:hover .bt_bb_icon:before,
.btTransparentLightHeader .btHorizontalMenuTrigger:hover .bt_bb_icon:before,
.btAccentLightHeader .btHorizontalMenuTrigger:hover .bt_bb_icon:before,
.btAccentDarkHeader .btHorizontalMenuTrigger:hover .bt_bb_icon:before,
.btLightDarkHeader .btHorizontalMenuTrigger:hover .bt_bb_icon:before,
.btHasAltLogo.btStickyHeaderActive .btHorizontalMenuTrigger:hover .bt_bb_icon:before,
.btAccentGradientHeader .btHorizontalMenuTrigger:hover .bt_bb_icon:before,
.btTransparentDarkHeader .btHorizontalMenuTrigger:hover .bt_bb_icon:after,
.btTransparentLightHeader .btHorizontalMenuTrigger:hover .bt_bb_icon:after,
.btAccentLightHeader .btHorizontalMenuTrigger:hover .bt_bb_icon:after,
.btAccentDarkHeader .btHorizontalMenuTrigger:hover .bt_bb_icon:after,
.btLightDarkHeader .btHorizontalMenuTrigger:hover .bt_bb_icon:after,
.btHasAltLogo.btStickyHeaderActive .btHorizontalMenuTrigger:hover .bt_bb_icon:after,
.btAccentGradientHeader .btHorizontalMenuTrigger:hover .bt_bb_icon:after{border-top-color: {$accentColor};}
.btTransparentDarkHeader .btHorizontalMenuTrigger:hover .bt_bb_icon .bt_bb_icon_holder:before,
.btTransparentLightHeader .btHorizontalMenuTrigger:hover .bt_bb_icon .bt_bb_icon_holder:before,
.btAccentLightHeader .btHorizontalMenuTrigger:hover .bt_bb_icon .bt_bb_icon_holder:before,
.btAccentDarkHeader .btHorizontalMenuTrigger:hover .bt_bb_icon .bt_bb_icon_holder:before,
.btLightDarkHeader .btHorizontalMenuTrigger:hover .bt_bb_icon .bt_bb_icon_holder:before,
.btHasAltLogo.btStickyHeaderActive .btHorizontalMenuTrigger:hover .bt_bb_icon .bt_bb_icon_holder:before,
.btAccentGradientHeader .btHorizontalMenuTrigger:hover .bt_bb_icon .bt_bb_icon_holder:before{border-top-color: {$accentColor};}
.btMenuHorizontal .menuPort nav > ul > li.current-menu-ancestor > a:after,
.btMenuHorizontal .menuPort nav > ul > li.current-menu-item > a:after{
    background-color: {$accentColor};}
.btMenuHorizontal .menuPort ul ul li a:hover{color: {$accentColor};}
.btMenuHorizontal .menuPort ul li.btMenuAlternateHoverDesign ul li a:after{
    background: {$accentColor};}
body.btMenuHorizontal .subToggler{
    line-height: {$logoHeight}px;}
.btMenuHorizontal .menuPort > nav > ul > li > ul > li{
    font-family: \"{$bodyFont}\",Arial,Helvetica,sans-serif;}
.btMenuHorizontal .menuPort > nav > ul > li > ul li a:before{
    background: {$accentColor};}
.btMenuHorizontal .menuPort > nav > ul > li.btMenuAlternateHoverDesign > ul li a:before{background: {$alternateColor};}
.btMenuHorizontal.btMenuCenter .logo{
    height: {$logoHeight}px;}
.btMenuHorizontal.btMenuCenter .logo .btTextLogo{
    height: {$logoHeight}px;}
html:not(.touch) body.btMenuHorizontal .menuPort > nav > ul > li.btMenuWideDropdown > ul > li > a{font-family: \"{$menuFont}\",Arial,Helvetica,sans-serif;}
.btMenuHorizontal .topBarInMenu{
    height: {$logoHeight}px;}
.btAccentLightHeader .btBelowLogoArea,
.btAccentLightHeader .topBar{background-color: {$accentColor};}
.btAccentDarkHeader .btBelowLogoArea,
.btAccentDarkHeader .topBar{background-color: {$accentColor};}
.btAccentDarkHeader:not(.btMenuBelowLogo) .topBarInMenu .btIconWidget:hover{color: {$accentColor};}
.btAccentTrasparentHeader .btBelowLogoArea,
.btAccentTrasparentHeader .topBar{background-color: {$accentColor};}
.btAccentTrasparentHeader .btBelowLogoArea a:hover,
.btAccentTrasparentHeader .topBar a:hover{color: {$alternateColor} !important;}
.btAccentTrasparentHeader .btMenuHorizontal .menuPort ul ul li a:hover{color: {$alternateColor};}
.btLightAccentHeader .btLogoArea,
.btLightAccentHeader .btVerticalHeaderTop{background-color: {$accentColor};}
.btLightAccentHeader.btMenuHorizontal.btBelowMenu .mainHeader .btLogoArea{background-color: {$accentColor};}
.btAccentGradientHeader .btBelowLogoArea,
.btAccentGradientHeader .topBar{background-color: {$accentColor};}
.btAccentGradientHeader.btMenuVertical .btVerticalMenuTrigger .bt_bb_icon{color: {$accentColor};}
.btAlternateGradientHeader .btBelowLogoArea,
.btAlternateGradientHeader .topBar{background-color: {$alternateColor};}
.btAlternateGradientHeader.btMenuBelowLogo .menuPort nav > ul > li > a:after{background-color: {$accentColor};}
.btAlternateGradientHeader.btMenuBelowLogo .topBarInMenu .btIconWidget.btAccentIconWidget .btIconWidgetIcon{color: {$accentColor};}
.btAlternateGradientHeader.btMenuBelowLogo .topBarInMenu .btIconWidget:hover{color: {$accentColor};}
.btAlternateGradientHeader.btMenuBelowLogo .topBarInMenu .widget_shopping_cart_content:hover .btCartWidgetIcon:hover{color: {$accentColor};}
.btAlternateGradientHeader .topBar .btIconWidget.btAccentIconWidget .btIconWidgetIcon{color: {$accentColor};}
.btAlternateGradientHeader .topBar .btIconWidget:hover{color: {$accentColor};}
.btAlternateGradientHeader .topBar .btIconWidget .widget_shopping_cart_content:hover .btCartWidgetIcon:hover{color: {$accentColor};}
.btAlternateGradientHeader .btBelowLogoArea .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetIcon span.cart-contents,
.btAlternateGradientHeader .topBar .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetIcon span.cart-contents{background: {$accentColor};}
.btAlternateGradientHeader.btMenuVertical .btVerticalMenuTrigger .bt_bb_icon{color: {$alternateColor};}
.btLightAlternateHeader .btLogoArea,
.btLightAlternateHeader .btVerticalHeaderTop{background-color: {$alternateColor};}
.btLightAlternateHeader:not(.btMenuBelowLogo) .topBarInMenu .btIconWidget.btAccentIconWidget .btIconWidgetIcon{color: {$accentColor};}
.btLightAlternateHeader:not(.btMenuBelowLogo) .topBarInMenu .btIconWidget:hover{color: {$accentColor};}
.btLightAlternateHeader:not(.btMenuBelowLogo) .topBarInMenu .widget_shopping_cart_content:hover .btCartWidgetIcon:hover{color: {$accentColor};}
.btLightAlternateHeader.btMenuBelowLogo .topBarInLogoArea .btIconWidget.btAccentIconWidget .btIconWidgetIcon{color: {$accentColor};}
.btLightAlternateHeader.btMenuBelowLogo .topBarInLogoArea .btIconWidget:hover{color: {$accentColor};}
.btLightAlternateHeader.btMenuBelowLogo .topBarInLogoArea .btIconWidget:hover .btIconWidgetText{color: {$accentColor};}
.btLightAlternateHeader.btMenuBelowLogo .topBarInLogoArea .widget_shopping_cart_content:hover .btCartWidgetIcon:hover{color: {$accentColor};}
.btLightAlternateHeader .mainHeader .btTextLogo:hover{color: {$accentColor};}
.btLightAlternateHeader.btMenuHorizontal.btBelowMenu .mainHeader .btLogoArea{background-color: {$alternateColor};}
.btStickyHeaderActive.btMenuHorizontal .mainHeader .btLogoArea .logo img{height: -webkit-calc({$logoHeight}px*0.5);
    height: -moz-calc({$logoHeight}px*0.5);
    height: calc({$logoHeight}px*0.5);}
.btStickyHeaderActive.btMenuHorizontal .mainHeader .btLogoArea .btTextLogo{
    line-height: -webkit-calc({$logoHeight}px*0.5);
    line-height: -moz-calc({$logoHeight}px*0.5);
    line-height: calc({$logoHeight}px*0.5);}
.btStickyHeaderActive.btMenuHorizontal .mainHeader .btLogoArea .menuPort nav > ul > li > a,
.btStickyHeaderActive.btMenuHorizontal .mainHeader .btLogoArea .menuPort nav > ul > li > .subToggler{line-height: -webkit-calc({$logoHeight}px*0.5);
    line-height: -moz-calc({$logoHeight}px*0.5);
    line-height: calc({$logoHeight}px*0.5);}
.btStickyHeaderActive.btMenuHorizontal .mainHeader .btLogoArea .topBarInMenu{height: -webkit-calc({$logoHeight}px*0.5);
    height: -moz-calc({$logoHeight}px*0.5);
    height: calc({$logoHeight}px*0.5);}
.btStickyHeaderActive.btMenuBelowLogo.btMenuBelowLogoShowArea.btMenuHorizontal .mainHeader .btLogoArea .topBarInLogoArea{height: -webkit-calc({$logoHeight}px*0.5);
    height: -moz-calc({$logoHeight}px*0.5);
    height: calc({$logoHeight}px*0.5);}
.btTransparentDarkHeader .btVerticalMenuTrigger:hover .bt_bb_icon:before,
.btTransparentLightHeader .btVerticalMenuTrigger:hover .bt_bb_icon:before,
.btAccentLightHeader .btVerticalMenuTrigger:hover .bt_bb_icon:before,
.btAccentDarkHeader .btVerticalMenuTrigger:hover .bt_bb_icon:before,
.btLightDarkHeader .btVerticalMenuTrigger:hover .bt_bb_icon:before,
.btHasAltLogo.btStickyHeaderActive .btVerticalMenuTrigger:hover .bt_bb_icon:before,
.btTransparentDarkHeader .btVerticalMenuTrigger:hover .bt_bb_icon:after,
.btTransparentLightHeader .btVerticalMenuTrigger:hover .bt_bb_icon:after,
.btAccentLightHeader .btVerticalMenuTrigger:hover .bt_bb_icon:after,
.btAccentDarkHeader .btVerticalMenuTrigger:hover .bt_bb_icon:after,
.btLightDarkHeader .btVerticalMenuTrigger:hover .bt_bb_icon:after,
.btHasAltLogo.btStickyHeaderActive .btVerticalMenuTrigger:hover .bt_bb_icon:after{border-top-color: {$accentColor};}
.btTransparentDarkHeader .btVerticalMenuTrigger:hover .bt_bb_icon .bt_bb_icon_holder:before,
.btTransparentLightHeader .btVerticalMenuTrigger:hover .bt_bb_icon .bt_bb_icon_holder:before,
.btAccentLightHeader .btVerticalMenuTrigger:hover .bt_bb_icon .bt_bb_icon_holder:before,
.btAccentDarkHeader .btVerticalMenuTrigger:hover .bt_bb_icon .bt_bb_icon_holder:before,
.btLightDarkHeader .btVerticalMenuTrigger:hover .bt_bb_icon .bt_bb_icon_holder:before,
.btHasAltLogo.btStickyHeaderActive .btVerticalMenuTrigger:hover .bt_bb_icon .bt_bb_icon_holder:before{border-top-color: {$accentColor};}
.btMenuVertical .mainHeader .btCloseVertical:before:hover{color: {$accentColor};}
.btMenuHorizontal .topBarInLogoArea{
    height: {$logoHeight}px;}
.btMenuHorizontal .topBarInLogoArea .topBarInLogoAreaCell{border: 0 solid {$accentColor};}
.btMenuVertical .mainHeader .btCloseVertical:before:hover{color: {$accentColor};}
.btMenuVertical .mainHeader nav > ul > li.current-menu-ancestor > a,
.btMenuVertical .mainHeader nav > ul > li.current-menu-item > a{background: {$accentColor};}
.btMenuVertical .mainHeader .topBarInLogoArea .btIconWidget.btWidgetWithText .btIconWidgetContent .btIconWidgetTitle,
.btMenuVertical .mainHeader .topBarInLogoArea .btIconWidget.btWidgetWithText .btIconWidgetContent .btIconWidgetText{
    font-family: \"{$menuFont}\",Arial,Helvetica,sans-serif;}
.btSiteFooter .bt_bb_custom_menu li.bt_bb_back_to_top:before{
    color: {$accentColor};}
.btSiteFooter .bt_bb_custom_menu li.bt_bb_back_to_top_alternate_arrow:before{color: {$alternateColor};}
.btSiteFooterCopyMenu{font-family: \"{$headingSuperTitleFont}\",Arial,Helvetica,sans-serif;}
.btDarkSkin .btSiteFooterCopyMenu{background: {$accentColor};}
.btSiteFooterCopyMenu .port > div .btFooterMenu ul li a:before{
    background: {$accentColor};}
.btDarkSkin .btSiteFooter .port:before,
.btLightSkin .btDarkSkin .btSiteFooter .port:before,
.btDarkSkin.btLightSkin .btDarkSkin .btSiteFooter .port:before{background-color: {$accentColor};}
.btContent .btArticleHeadline .bt_bb_headline a:hover{color: {$accentColor};}
.btHideHeadline .btPostSingleItemStandard .btArticleHeadline .bt_bb_headline .bt_bb_headline_content{color: {$alternateColor};}
.btPostSingleItemStandard .btArticleShareEtc > div.btReadMoreColumn .bt_bb_button a{
    background: {$accentColor};
    font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif !important;}
.btPostSingleItemStandard .btArticleShareEtc .btTags ul a:hover{background: {$accentColor};}
.btAboutAuthor{
    border: 2px solid {$accentColor};}
.btMediaBox.btQuote:before,
.btMediaBox.btLink:before{
    background-color: {$accentColor};}
.btMediaBox.btQuote p,
.btMediaBox.btLink p{
    font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.sticky.btArticleListItem .btArticleHeadline h1 .bt_bb_headline_content span a:after,
.sticky.btArticleListItem .btArticleHeadline h2 .bt_bb_headline_content span a:after,
.sticky.btArticleListItem .btArticleHeadline h3 .bt_bb_headline_content span a:after,
.sticky.btArticleListItem .btArticleHeadline h4 .bt_bb_headline_content span a:after,
.sticky.btArticleListItem .btArticleHeadline h5 .bt_bb_headline_content span a:after,
.sticky.btArticleListItem .btArticleHeadline h6 .bt_bb_headline_content span a:after,
.sticky.btArticleListItem .btArticleHeadline h7 .bt_bb_headline_content span a:after,
.sticky.btArticleListItem .btArticleHeadline h8 .bt_bb_headline_content span a:after{
    color: {$accentColor};}
.btPostSingleItemColumns .btTags ul a:hover{background: {$accentColor};}
.post-password-form p:first-child{font-family: {$headingFont},Arial,Helvetica,sans-serif;}
.post-password-form p:nth-child(2) input[type=\"submit\"]{
    background-color: {$accentColor};
    font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif;}
.post-password-form p:nth-child(2) input[type=\"submit\"]:hover{-webkit-box-shadow: 0 -3px 0 0 rgba(24,24,24,.2) inset,0 0 0 2.5em {$accentColor} inset,0 2px 10px rgba(0,0,0,.2);
    box-shadow: 0 -3px 0 0 rgba(24,24,24,.2) inset,0 0 0 2.5em {$accentColor} inset,0 2px 10px rgba(0,0,0,.2);}
.btPagination{font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.btPagination .paging a{
    font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.btPagination .paging a:hover{color: {$accentColor};}
.btPagination .paging a:after{
    background: {$accentColor};}
.btPrevNextNav .btPrevNext .btPrevNextImage:before{
    background: {$accentColor};}
.btPrevNextNav .btPrevNext .btPrevNextItem .btPrevNextTitle{font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.btPrevNextNav .btPrevNext .btPrevNextItem .btPrevNextDir{
    font-family: \"{$headingSuperTitleFont}\",Arial,Helvetica,sans-serif;}
.btPrevNextNav .btPrevNext:hover .btPrevNextTitle{color: {$accentColor};}
.btLinkPages{font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.btLinkPages ul{
    font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif;}
.btLinkPages ul a{
    background: {$accentColor};}
.btContent .btArticleAuthor a:hover,
.btContent .btArticleComments:hover{color: {$accentColor};}
.btArticleDate:before,
.btArticleAuthor:before,
.btArticleComments:before,
.btArticleCategories:before{
    color: {$accentColor};}
.btArticleComments:before{
    color: {$accentColor};}
.bt-comments-box ul.comments li.pingback p a:not(.comment-edit-link){font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.bt-comments-box ul.comments li.pingback p a:not(.comment-edit-link):hover{color: {$accentColor};}
.bt-comments-box ul.comments li.pingback p .edit-link{
    font-family: \"{$headingSuperTitleFont}\",Arial,Helvetica,sans-serif;}
.bt-comments-box ul.comments li.pingback p .edit-link a:before{
    color: {$accentColor};}
.bt-comments-box .vcard h1.author a:hover,
.bt-comments-box .vcard h2.author a:hover,
.bt-comments-box .vcard h3.author a:hover,
.bt-comments-box .vcard h4.author a:hover,
.bt-comments-box .vcard h5.author a:hover,
.bt-comments-box .vcard h6.author a:hover,
.bt-comments-box .vcard h7.author a:hover,
.bt-comments-box .vcard h8.author a:hover{color: {$accentColor};}
.bt-comments-box .vcard .posted{
    font-family: \"{$headingSuperTitleFont}\",Arial,Helvetica,sans-serif;}
.bt-comments-box .vcard .posted:before{
    color: {$accentColor};}
.bt-comments-box .commentTxt p.edit-link,
.bt-comments-box .commentTxt p.reply{
    font-family: \"{$headingSuperTitleFont}\",Arial,Helvetica,sans-serif;}
.bt-comments-box .commentTxt p.edit-link a:before,
.bt-comments-box .commentTxt p.reply a:before{
    color: {$accentColor};}
.bt-comments-box .comment-form input[type=\"checkbox\"]:before{
    background: {$accentColor};}
.bt-comments-box .comment-navigation{
    font-family: \"{$headingSuperTitleFont}\",Arial,Helvetica,sans-serif;}
.bt-comments-box .comment-navigation a:hover{color: {$accentColor};}
.bt-comments-box .comment-navigation a:before,
.bt-comments-box .comment-navigation a:after{
    color: {$accentColor};}
.comment-awaiting-moderation{color: {$accentColor};}
.comment-reply-title small{
    font-family: \"{$headingSuperTitleFont}\",Arial,Helvetica,sans-serif;}
.comment-reply-title small a#cancel-comment-reply-link:before{
    color: {$accentColor};}
.btCommentSubmit{
    background: {$accentColor};
    font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif;}
.btCommentSubmit:hover{-webkit-box-shadow: 0 -3px 0 0 rgba(24,24,24,.2) inset,0 0 0 2.5em {$accentColor} inset,0 2px 10px rgba(0,0,0,.2);
    box-shadow: 0 -3px 0 0 rgba(24,24,24,.2) inset,0 0 0 2.5em {$accentColor} inset,0 2px 10px rgba(0,0,0,.2);}
@media (max-width: 520px){.bt-comments-box ul.comments ul.children li.comment article:after{
    background: {$accentColor};}
}body:not(.btNoDashInSidebar) .btBox > h4:after,
body:not(.btNoDashInSidebar) .btCustomMenu > h4:after,
body:not(.btNoDashInSidebar) .btTopBox > h4:after{
    border-bottom: 2px solid {$accentColor};}
.btBox ul li a:before,
.btCustomMenu ul li a:before,
.btTopBox ul li a:before{
    background: {$accentColor};}
.btBox ul li a:hover,
.btCustomMenu ul li a:hover,
.btTopBox ul li a:hover{color: {$accentColor};}
.btBox ul li.current-menu-item > a,
.btCustomMenu ul li.current-menu-item > a,
.btTopBox ul li.current-menu-item > a{color: {$accentColor};}
.widget_calendar table caption{background: {$accentColor};
    background: {$accentColor};
    font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.widget_calendar table tbody tr td#today{color: {$accentColor};}
.widget_recent_comments{font-family: \"{$headingSuperTitleFont}\",Arial,Helvetica,sans-serif;}
.widget_recent_comments a{font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.widget_recent_comments .comment-author-link a{font-family: \"{$headingSuperTitleFont}\",Arial,Helvetica,sans-serif;}
.widget_recent_comments .comment-author-link a:after{
    color: {$accentColor};}
.widget_rss li a.rsswidget{font-family: \"{$headingFont}\";}
.widget_rss li .rss-date{font-family: {$headingSuperTitleFont},Arial,Helvetica,sans-serif;}
.widget_rss li .rss-date:before{
    color: {$accentColor};}
.widget_shopping_cart .total{
    font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif;}
.widget_shopping_cart .widget_shopping_cart_content .mini_cart_item .ppRemove a.remove{
    background-color: {$accentColor};}
.widget_shopping_cart .widget_shopping_cart_content .mini_cart_item .ppRemove a.remove:hover{background: {$alternateColor};}
.menuPort .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetIcon span.cart-contents,
.topTools .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetIcon span.cart-contents,
.topBarInLogoArea .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetIcon span.cart-contents{
    background-color: {$accentColor};
    font: normal 11px/19px \"{$buttonFont}\";}
.menuPort .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetInnerContent li.empty,
.topTools .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetInnerContent li.empty,
.topBarInLogoArea .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetInnerContent li.empty{
    font-family: \"{$bodyFont}\",Arial,Helvetica,sans-serif;}
.btMenuVertical .menuPort .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetInnerContent .verticalMenuCartToggler:hover:after,
.btMenuVertical .topTools .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetInnerContent .verticalMenuCartToggler:hover:after,
.btMenuVertical .topBarInLogoArea .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetInnerContent .verticalMenuCartToggler:hover:after{color: {$accentColor};}
.menuPort .widget_shopping_cart .widget_shopping_cart_content:hover .btCartWidgetIcon:hover,
.topTools .widget_shopping_cart .widget_shopping_cart_content:hover .btCartWidgetIcon:hover,
.topBarInLogoArea .widget_shopping_cart .widget_shopping_cart_content:hover .btCartWidgetIcon:hover{color: {$accentColor};}
.btMenuHorizontal .topBarInMenu .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetInnerContent{top: -webkit-calc(({$logoHeight}px - 16px)/4 + 16px);
    top: -moz-calc(({$logoHeight}px - 16px)/4 + 16px);
    top: calc(({$logoHeight}px - 16px)/4 + 16px);}
.widget_recent_reviews{font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.widget_price_filter .price_slider_wrapper .ui-slider .ui-slider-handle{
    background: {$accentColor};}
.widget_price_filter .price_slider_amount .price_label{
    font-family: {$headingFont},Arial,Helvetica,sans-serif;}
.btBox .tagcloud a,
.btTags ul a{
    background: {$accentColor};}
.topTools .btIconWidget:hover,
.topBarInMenu .btIconWidget:hover{color: {$accentColor};}
.topTools .btIconWidget.btAlternateIconWidget .btIconWidgetIcon,
.topBarInMenu .btIconWidget.btAlternateIconWidget .btIconWidgetIcon{color: {$alternateColor};}
.topTools .btIconWidget.btBodyFontTextTitle .btIconWidgetText,
.topTools .btIconWidget.btBodyFontTextTitle .btIconWidgetTitle,
.topBarInMenu .btIconWidget.btBodyFontTextTitle .btIconWidgetText,
.topBarInMenu .btIconWidget.btBodyFontTextTitle .btIconWidgetTitle{font-family: \"{$bodyFont}\",Arial,Helvetica,sans-serif;}
.btIconWidget.widget_bt_button_widget .bt_button_widget .bt_bb_button_text{
    font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif;}
.btIconWidget.widget_bt_button_widget .bt_button_widget.bt_button_widget_accent:before{background: {$accentColor};}
.btIconWidget.widget_bt_button_widget .bt_button_widget.bt_button_widget_alternate:before{background: {$alternateColor};}
.btSidebar .btIconWidget .btIconWidgetContent .btIconWidgetTitle,
footer .btIconWidget .btIconWidgetContent .btIconWidgetTitle,
.topBarInLogoArea .btIconWidget .btIconWidgetContent .btIconWidgetTitle{
    font-family: \"{$bodyFont}\",Arial,Helvetica,sans-serif;}
.btSidebar .btIconWidget.btIconAccentTitle .btIconWidgetContent .btIconWidgetText,
footer .btIconWidget.btIconAccentTitle .btIconWidgetContent .btIconWidgetText,
.topBarInLogoArea .btIconWidget.btIconAccentTitle .btIconWidgetContent .btIconWidgetText{color: {$accentColor};}
.btSidebar .btIconWidget.btIconAlternateTitle .btIconWidgetContent .btIconWidgetText,
footer .btIconWidget.btIconAlternateTitle .btIconWidgetContent .btIconWidgetText,
.topBarInLogoArea .btIconWidget.btIconAlternateTitle .btIconWidgetContent .btIconWidgetText{color: {$alternateColor};}
.btSidebar .btIconWidget.btAccentIconWidget .btIconWidgetIcon,
footer .btIconWidget.btAccentIconWidget .btIconWidgetIcon,
.topBarInLogoArea .btIconWidget.btAccentIconWidget .btIconWidgetIcon{color: {$accentColor};}
.btSidebar .btIconWidget.btAlternateIconWidget .btIconWidgetIcon,
footer .btIconWidget.btAlternateIconWidget .btIconWidgetIcon,
.topBarInLogoArea .btIconWidget.btAlternateIconWidget .btIconWidgetIcon{color: {$alternateColor};}
.btAccentIconWidget.btIconWidget .btIconWidgetIcon{color: {$accentColor};}
a.btAccentIconWidget.btIconWidget:hover{color: {$accentColor};}
.btSiteFooterWidgets .btSearch button:hover,
.btSiteFooterWidgets .btSearch input[type=submit]:hover,
.btSidebar .btSearch button:hover,
.btSidebar .btSearch input[type=submit]:hover,
.btSidebar .widget_product_search button:hover,
.btSidebar .widget_product_search input[type=submit]:hover{color: {$accentColor} !important;}
.btSoftRoundedButtons .btSiteFooterWidgets .btSearch button:hover,
.btSoftRoundedButtons .btSiteFooterWidgets .btSearch input[type=submit]:hover,
.btSoftRoundedButtons .btSidebar .btSearch button:hover,
.btSoftRoundedButtons .btSidebar .btSearch input[type=submit]:hover,
.btSoftRoundedButtons .btSidebar .widget_product_search button:hover,
.btSoftRoundedButtons .btSidebar .widget_product_search input[type=submit]:hover{background: {$accentColor} !important;}
.btHardRoundedButtons .btSiteFooterWidgets .btSearch button:hover,
.btHardRoundedButtons .btSiteFooterWidgets .btSearch input[type=submit]:hover,
.btHardRoundedButtons .btSidebar .btSearch button:hover,
.btHardRoundedButtons .btSidebar .btSearch input[type=submit]:hover,
.btHardRoundedButtons .btSidebar .widget_product_search button:hover,
.btHardRoundedButtons .btSidebar .widget_product_search input[type=submit]:hover{background: {$accentColor} !important;}
.btSearchInner.btFromTopBox .btSearchInnerClose .bt_bb_icon a.bt_bb_icon_holder{color: {$accentColor};}
.btSearchInner.btFromTopBox .btSearchInnerClose .bt_bb_icon:hover a.bt_bb_icon_holder{color: {$accentColorDark};}
.btSearchInner.btFromTopBox button:hover{
    color: {$accentColor};}
.btSoftRoundedButtons .btSearchInner.btFromTopBox button:hover{background: {$accentColor};}
.btHardRoundedButtons .btSearchInner.btFromTopBox button:hover{background: {$accentColor};}
.btMenuHorizontal .topBarInMenu .widget_bt_divider_widget > span{height: -webkit-calc({$logoHeight}px * .5);
    height: -moz-calc({$logoHeight}px * .5);
    height: calc({$logoHeight}px * .5);}
::selection{background: {$accentColor};}
.bt_bb_dash_top.bt_bb_headline .bt_bb_headline_superheadline:before,
.bt_bb_dash_top.bt_bb_headline .bt_bb_headline_superheadline:after,
.bt_bb_dash_top_bottom.bt_bb_headline .bt_bb_headline_superheadline:before,
.bt_bb_dash_top_bottom.bt_bb_headline .bt_bb_headline_superheadline:after{
    border-top: 2px solid {$accentColor};}
.bt_bb_dash_bottom.bt_bb_headline .bt_bb_headline_content:after,
.bt_bb_dash_top_bottom.bt_bb_headline .bt_bb_headline_content:after{
    border-color: {$accentColor};}
.bt_bb_section[class*=\"accent_solid\"]:before{background: {$accentColor};}
.bt_bb_section[class*=\"alternate_solid\"]:before{background: {$alternateColor};}
.bt_bb_headline .bt_bb_headline_superheadline{font-family: \"{$headingSuperTitleFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_headline.bt_bb_subheadline .bt_bb_headline_subheadline{font-family: \"{$headingSubTitleFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_headline b{
    color: {$accentColor};}
.bt_bb_headline u{
    color: {$alternateColor};}
.bt_bb_progress_bar .bt_bb_progress_bar_inner .bt_bb_progress_bar_percent{
    font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_icon .bt_bb_icon_colored_icon svg .cls-2{fill: {$accentColor};}
.bt_bb_button .bt_bb_button_text{font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_service .bt_bb_service_content .bt_bb_service_content_title{font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_service .bt_bb_service_content .bt_bb_service_content_title b{
    color: {$accentColor};}
.bt_bb_service .bt_bb_service_content .bt_bb_service_content_title u{
    color: {$alternateColor};}
.bt_bb_service:hover .bt_bb_service_content_title a:hover{color: {$accentColor};}
.bt_bb_service .bt_bb_service_colored_icon svg .cls-2{fill: {$accentColor};}
button.slick-arrow{
    background: {$accentColor};}
.bt_bb_arrows_style_accent_light button.slick-arrow{background: {$accentColor} !important;}
.bt_bb_arrows_style_accent_dark button.slick-arrow{background: {$accentColor} !important;}
.bt_bb_arrows_style_alternate_light button.slick-arrow{background: {$alternateColor} !important;}
.bt_bb_arrows_style_alternate_dark button.slick-arrow{background: {$alternateColor} !important;}
button.slick-arrow:hover{background: {$accentColor};}
.slick-dots li:after{
    background: {$accentColor};}
.bt_bb_dots_style_accent_dot .slick-dots li:after{background: {$accentColor};}
.bt_bb_dots_style_alternate_dot .slick-dots li:after{background: {$alternateColor};}
.bt_bb_custom_menu div ul a:hover{color: {$accentColor};}
.bt_bb_style_simple ul.bt_bb_tabs_header li.on{border-color: {$accentColor};}
.bt_bb_tabs ul.bt_bb_tabs_header{
    font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_style_simple.bt_bb_tabs ul.bt_bb_tabs_header li:after{
    background-color: {$accentColor};}
.bt_bb_accordion .bt_bb_accordion_item .bt_bb_accordion_item_title{
    font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_style_simple.bt_bb_accordion .bt_bb_accordion_item .bt_bb_accordion_item_title:before{
    background-color: {$accentColor} !important;}
.bt_bb_price_list .bt_bb_price_list_title_subtitle_price .bt_bb_price_list_price{
    font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_price_list .bt_bb_price_list_title_subtitle_price .bt_bb_price_list_title_subtitle .bt_bb_price_list_title{
    font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_price_list .bt_bb_price_list_title_subtitle_price .bt_bb_price_list_title_subtitle .bt_bb_price_list_subtitle{
    font-family: \"{$headingSuperTitleFont}\",Arial,Helvetica,sans-serif;}
.wpcf7-form .wpcf7-submit{
    background: {$accentColor} !important;
    font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif !important;}
.wpcf7-form .wpcf7-submit:hover{-webkit-box-shadow: 0 -3px 0 0 rgba(24,24,24,.2) inset,0 0 0 2.5em {$accentColor} inset,0 2px 10px rgba(0,0,0,.2);
    box-shadow: 0 -3px 0 0 rgba(24,24,24,.2) inset,0 0 0 2.5em {$accentColor} inset,0 2px 10px rgba(0,0,0,.2);}
.wpcf7-form .bt_bb_alternate_submit .wpcf7-submit{background: {$alternateColor} !important;}
div.wpcf7-validation-errors,
div.wpcf7-acceptance-missing,
div.wpcf7-response-output{border: 2px solid {$accentColor};}
.bt_bb_required:after{
    color: {$accentColor} !important;}
.required{color: {$accentColor} !important;}
button.mfp-close:hover{
    color: {$accentColor};}
button.mfp-arrow:hover{background: {$accentColor};}
.bt_bb_cost_calculator .bt_bb_cost_calculator_item input:not([type=\"checkbox\"]):focus,
.bt_bb_cost_calculator .bt_bb_cost_calculator_item input:not([type=\"radio\"]):focus,
.bt_bb_cost_calculator .bt_bb_cost_calculator_item input:not([type=\"submit\"]):focus,
.bt_bb_cost_calculator .bt_bb_cost_calculator_item .bt_bb_widget_select_selected:focus{-webkit-box-shadow: 0 3px 10px ,3px 0 0 0 {$accentColor} inset;
    box-shadow: 0 3px 10px ,3px 0 0 0 {$accentColor} inset;}
.bt_bb_cost_calculator .bt_bb_cost_calculator_total{background: {$accentColor};}
.bt_bb_cost_calculator .bt_bb_cost_calculator_total .bt_bb_cost_calculator_total_amount{font-family: {$headingFont},Arial,Helvetica,sans-serif;}
.bt_bb_widget_select_items > div[data-value]:before{
    background: {$accentColor};}
.on.bt_bb_widget_switch > div{background: {$accentColor};}
.bt_bb_progress_bar_advanced .progressbar-text{
    font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_counter_holder{font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.btCounterHolder{font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.btCounterHolder .btCountdownHolder span[class$=\"_text\"]{font-family: \"{$bodyFont}\",Arial,Helvetica,sans-serif;}
.btCountDownAccentNumbers.btCounterHolder .btCountdownHolder span[class^=\"n\"],
.btCountDownAccentNumbers.btCounterHolder .btCountdownHolder .days > span:first-child,
.btCountDownAccentNumbers.btCounterHolder .btCountdownHolder .days > span:nth-child(2),
.btCountDownAccentNumbers.btCounterHolder .btCountdownHolder .days > span:nth-child(3){color: {$accentColor};}
.btWorkingHours .bt_bb_working_hours_inner_row .bt_bb_working_hours_inner_wrapper .bt_bb_working_hours_inner_link a{background-color: {$accentColor};}
.btWorkingHours .bt_bb_working_hours_inner_row .bt_bb_working_hours_inner_wrapper .bt_bb_working_hours_inner_link a:hover{background: {$alternateColor};}
.bt_bb_masonry_image_grid .bt_bb_grid_item_inner > .bt_bb_grid_item_inner_image:after{
    background: {$accentColor};}
.bt_bb_post_grid_loader > div,
.bt_bb_post_grid_loader > span{
    background: {$accentColor};}
.bt_bb_post_grid_filter{
    font-family: \"{$menuFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_post_grid_filter .bt_bb_post_grid_filter_item:before{
    background-color: {$accentColor};}
.bt_bb_post_grid_filter .bt_bb_post_grid_filter_item:hover{color: {$accentColor};}
.bt_bb_masonry_post_tiles .bt_bb_grid_item .bt_bb_grid_item_inner .bt_bb_grid_item_inner_content .bt_bb_grid_item_post_title,
.bt_bb_masonry_portfolio_tiles .bt_bb_grid_item .bt_bb_grid_item_inner .bt_bb_grid_item_inner_content .bt_bb_grid_item_post_title{
    color: {$accentColor};}
.bt_bb_look_triangular.bt_bb_masonry_post_tiles .bt_bb_grid_item .bt_bb_grid_item_inner .bt_bb_grid_item_inner_content .triangle-starter:after,
.bt_bb_look_triangular.bt_bb_masonry_portfolio_tiles .bt_bb_grid_item .bt_bb_grid_item_inner .bt_bb_grid_item_inner_content .triangle-starter:after{
    border-color: transparent {$alternateColor} transparent transparent;}
.bt_bb_look_triangle.bt_bb_masonry_post_tiles .bt_bb_grid_item .bt_bb_grid_item_inner .bt_bb_grid_item_inner_content .triangle-starter:before,
.bt_bb_look_triangle.bt_bb_masonry_portfolio_tiles .bt_bb_grid_item .bt_bb_grid_item_inner .bt_bb_grid_item_inner_content .triangle-starter:before{
    background: {$accentColor};}
.bt_bb_look_circle.bt_bb_masonry_post_tiles .bt_bb_grid_item .bt_bb_grid_item_inner .bt_bb_grid_item_inner_content .triangle-starter:before,
.bt_bb_look_circle.bt_bb_masonry_portfolio_tiles .bt_bb_grid_item .bt_bb_grid_item_inner .bt_bb_grid_item_inner_content .triangle-starter:before{
    background: {$alternateColor};}
.bt_bb_latest_posts .bt_bb_latest_posts_item_content .bt_bb_latest_posts_item_category .post-categories{
    font-family: \"{$headingSuperTitleFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_latest_posts .bt_bb_latest_posts_item_content .bt_bb_latest_posts_item_meta > span:before{
    color: {$accentColor};}
.bt_bb_latest_posts .bt_bb_latest_posts_item_content .bt_bb_latest_posts_item_meta > span.bt_bb_latest_posts_item_author a:hover{color: {$accentColor};}
.bt_bb_latest_posts .bt_bb_latest_posts_item_content .bt_bb_latest_posts_item_title{font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_latest_posts .bt_bb_latest_posts_item_content .bt_bb_latest_posts_item_title a{color: {$accentColor};}
.bt_bb_latest_posts .bt_bb_latest_posts_item_content .bt_bb_latest_posts_item_read_more{font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_latest_posts .bt_bb_latest_posts_item_content .bt_bb_latest_posts_item_read_more a{
    color: {$accentColor};}
.bt_bb_latest_posts.bt_bb_look_standard_highlighted .bt_bb_latest_posts_item:first-of-type .bt_bb_latest_posts_item_content .bt_bb_latest_posts_item_category .post-categories:before{background: {$accentColor};}
.bt_bb_latest_posts.bt_bb_look_standard_highlighted .bt_bb_latest_posts_item:first-of-type .bt_bb_latest_posts_item_content .bt_bb_latest_posts_item_title a:hover{color: {$accentColor};}
.bt_bb_latest_posts.bt_bb_look_standard.bt_bb_date_design_rounded .bt_bb_latest_posts_item_content .bt_bb_latest_posts_item_meta > .bt_bb_latest_posts_item_date,
.bt_bb_latest_posts.bt_bb_look_standard_highlighted.bt_bb_date_design_rounded .bt_bb_latest_posts_item_content .bt_bb_latest_posts_item_meta > .bt_bb_latest_posts_item_date,
.bt_bb_latest_posts.bt_bb_look_highlighted.bt_bb_date_design_rounded .bt_bb_latest_posts_item_content .bt_bb_latest_posts_item_meta > .bt_bb_latest_posts_item_date{
    background: {$accentColor};}
.bt_bb_masonry_post_grid .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_category,
.bt_bb_masonry_post_grid .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_category,
.bt_bb_masonry_portfolio_grid .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_category,
.bt_bb_masonry_portfolio_grid .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_category{
    font-family: \"{$headingSuperTitleFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_masonry_post_grid .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_meta > span:before,
.bt_bb_masonry_post_grid .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_meta > span:before,
.bt_bb_masonry_portfolio_grid .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_meta > span:before,
.bt_bb_masonry_portfolio_grid .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_meta > span:before{
    color: {$accentColor};}
.bt_bb_masonry_post_grid .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_meta > span.bt_bb_grid_item_item_author a:hover,
.bt_bb_masonry_post_grid .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_meta > span.bt_bb_grid_item_item_author a:hover,
.bt_bb_masonry_portfolio_grid .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_meta > span.bt_bb_grid_item_item_author a:hover,
.bt_bb_masonry_portfolio_grid .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_meta > span.bt_bb_grid_item_item_author a:hover{color: {$accentColor};}
.bt_bb_masonry_post_grid .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_post_title,
.bt_bb_masonry_post_grid .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_post_title,
.bt_bb_masonry_portfolio_grid .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_post_title,
.bt_bb_masonry_portfolio_grid .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_post_title{font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_masonry_post_grid .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_post_title a,
.bt_bb_masonry_post_grid .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_post_title a,
.bt_bb_masonry_portfolio_grid .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_post_title a,
.bt_bb_masonry_portfolio_grid .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_post_title a{color: {$accentColor};}
.bt_bb_masonry_post_grid .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_post_share .bt_bb_icon .bt_bb_icon_holder:before,
.bt_bb_masonry_post_grid .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_post_share .bt_bb_icon .bt_bb_icon_holder:before,
.bt_bb_masonry_portfolio_grid .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_post_share .bt_bb_icon .bt_bb_icon_holder:before,
.bt_bb_masonry_portfolio_grid .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_post_share .bt_bb_icon .bt_bb_icon_holder:before{
    color: {$accentColor};}
.bt_bb_masonry_post_grid .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_item_read_more,
.bt_bb_masonry_post_grid .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_item_read_more,
.bt_bb_masonry_portfolio_grid .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_item_read_more,
.bt_bb_masonry_portfolio_grid .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_item_read_more{font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_masonry_post_grid .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_item_read_more a,
.bt_bb_masonry_post_grid .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_item_read_more a,
.bt_bb_masonry_portfolio_grid .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_item_read_more a,
.bt_bb_masonry_portfolio_grid .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_content .bt_bb_grid_item_item_read_more a{
    color: {$accentColor};}
.bt_bb_masonry_post_grid.bt_bb_date_design_rounded .bt_bb_grid_item_post_content .bt_bb_grid_item_meta > .bt_bb_grid_item_date,
.bt_bb_masonry_portfolio_grid.bt_bb_date_design_rounded .bt_bb_grid_item_post_content .bt_bb_grid_item_meta > .bt_bb_grid_item_date{
    background: {$accentColor};}
.bt_bb_masonry_post_grid.bt_bb_look_image_above .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_thumbnail a:after,
.bt_bb_masonry_post_grid.bt_bb_look_image_above .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_thumbnail a:after,
.bt_bb_masonry_portfolio_grid.bt_bb_look_image_above .bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_thumbnail a:after,
.bt_bb_masonry_portfolio_grid.bt_bb_look_image_above .bt_bb_masonry_portfolio_grid_content .bt_bb_grid_item .bt_bb_grid_item_post_thumbnail a:after{
    background: {$accentColor};}
.btNoSearchResults{border: 2px solid {$accentColor};}
.btNoSearchResults .bt_bb_headline h2{
    font-family: {$bodyFont},Arial,Helvetica,sans-serif;}
.btNoSearchResults #searchform input[type='submit']{
    background: {$accentColor};
    font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif;}
.btNoSearchResults .bt_bb_button:last-child a{-webkit-box-shadow: 0 0 0 2px {$accentColor} inset,0 4px 0 0 rgba(24,24,24,.2) inset;
    box-shadow: 0 0 0 2px {$accentColor} inset,0 4px 0 0 rgba(24,24,24,.2) inset;
    color: {$accentColor};}
.btNoSearchResults .bt_bb_button:last-child a:hover{-webkit-box-shadow: 0 0 0 2px {$accentColor} inset,0 5px 0 0 rgba(24,24,24,.2) inset,0 2px 10px rgba(0,0,0,.2) !important;
    box-shadow: 0 0 0 2px {$accentColor} inset,0 5px 0 0 rgba(24,24,24,.2) inset,0 2px 10px rgba(0,0,0,.2) !important;
    color: {$accentColor} !important;}
.bt_bb_service_image .bt_bb_service_image_content .bt_bb_service_image_content_title h3 b{
    color: {$accentColor};}
.bt_bb_service_image .bt_bb_service_image_content .bt_bb_service_image_content_title h3 u{
    color: {$alternateColor};}
.bt_bb_service_image .bt_bb_service_image_content_read_more{
    font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif;}
.bold_timeline_item_button{font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif;}
.bt_bb_star_bullet_list ul li:before,
.bt_bb_check_bullet_list ul li:before{
    color: {$accentColor};}
.products ul li.product .btWooShopLoopItemInner .bt_bb_image a:before,
ul.products li.product .btWooShopLoopItemInner .bt_bb_image a:before{
    background: {$accentColor};}
.products ul li.product .btWooShopLoopItemInner .bt_bb_headline .bt_bb_headline_content a:hover,
ul.products li.product .btWooShopLoopItemInner .bt_bb_headline .bt_bb_headline_content a:hover{color: {$accentColor};}
.products ul li.product .btWooShopLoopItemInner .bt_bb_headline .bt_bb_headline_subheadline .star-rating span:before,
ul.products li.product .btWooShopLoopItemInner .bt_bb_headline .bt_bb_headline_subheadline .star-rating span:before{color: {$accentColor};}
.products ul li.product .btWooShopLoopItemInner .added:after,
.products ul li.product .btWooShopLoopItemInner .loading:after,
ul.products li.product .btWooShopLoopItemInner .added:after,
ul.products li.product .btWooShopLoopItemInner .loading:after{
    background-color: {$alternateColor};}
.products ul li.product .btWooShopLoopItemInner .added_to_cart,
ul.products li.product .btWooShopLoopItemInner .added_to_cart{
    color: {$accentColor};
    font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif;}
.btShopSaleTagDesignRounded .products ul li.product .btWooShopLoopItemInner:hover .onsale,
.btShopSaleTagDesignRound .products ul li.product .btWooShopLoopItemInner:hover .onsale,
.btShopSaleTagDesignRounded ul.products li.product .btWooShopLoopItemInner:hover .onsale,
.btShopSaleTagDesignRound ul.products li.product .btWooShopLoopItemInner:hover .onsale{background: {$alternateColor};}
.btShopSaleTagDesignSlanted_right .products ul li.product .btWooShopLoopItemInner:hover .onsale:before,
.btShopSaleTagDesignSlanted_left .products ul li.product .btWooShopLoopItemInner:hover .onsale:before,
.btShopSaleTagDesignSlanted_right ul.products li.product .btWooShopLoopItemInner:hover .onsale:before,
.btShopSaleTagDesignSlanted_left ul.products li.product .btWooShopLoopItemInner:hover .onsale:before{background: {$alternateColor};}
.btShopSaleTagDesignRounded .products ul li.product .onsale,
.btShopSaleTagDesignRound .products ul li.product .onsale,
.btShopSaleTagDesignSquare .products ul li.product .onsale,
.btShopSaleTagDesignSlanted_right .products ul li.product .onsale,
.btShopSaleTagDesignSlanted_left .products ul li.product .onsale,
.btShopSaleTagDesignRounded ul.products li.product .onsale,
.btShopSaleTagDesignRound ul.products li.product .onsale,
.btShopSaleTagDesignSquare ul.products li.product .onsale,
.btShopSaleTagDesignSlanted_right ul.products li.product .onsale,
.btShopSaleTagDesignSlanted_left ul.products li.product .onsale{
    background: {$accentColor};}
.btShopSaleTagDesignSlanted_right .products ul li.product .onsale:before,
.btShopSaleTagDesignSlanted_left .products ul li.product .onsale:before,
.btShopSaleTagDesignSlanted_right ul.products li.product .onsale:before,
.btShopSaleTagDesignSlanted_left ul.products li.product .onsale:before{
    background: {$accentColor};}
.products ul li.product.product-category a:hover h2,
ul.products li.product.product-category a:hover h2{color: {$accentColor};}
nav.woocommerce-pagination ul{
    font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
nav.woocommerce-pagination ul li a.next:before,
nav.woocommerce-pagination ul li a.prev:before{
    background: {$accentColor};}
.btShopSaleTagDesignRounded div.product > .onsale,
.btShopSaleTagDesignRound div.product > .onsale,
.btShopSaleTagDesignSquare div.product > .onsale,
.btShopSaleTagDesignSlanted_right div.product > .onsale,
.btShopSaleTagDesignSlanted_left div.product > .onsale{
    background: {$accentColor};}
.btShopSaleTagDesignSlanted_right div.product > .onsale:before,
.btShopSaleTagDesignSlanted_left div.product > .onsale:before{
    background: {$accentColor};}
div.product div.images .woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image a:after{
    background: {$accentColor};}
div.product div.images .woocommerce-product-gallery__trigger:after{
    background: {$accentColor};}
div.product div.summary form.cart .group_table a{font-family: \"{$headingFont}\",Arial,Helvetica;}
div.product div.summary form.cart .group_table a:hover{color: {$accentColor};}
table.shop_table td.product-remove a.remove{
    background-color: {$accentColor};}
table.shop_table td.product-remove a.remove:hover{background: {$alternateColor};}
table.shop_table td.product-name{
    font-family: \"{$headingFont}\",Arial,Helvetica,sans-serif;}
table.shop_table td.product-name a:hover{color: {$accentColor};}
ul.wc_payment_methods li .about_paypal{
    color: {$accentColor};}
.woocommerce-MyAccount-navigation ul{
    font-family: \"{$menuFont}\",Arial,Helvetica,sans-serif;}
.woocommerce-MyAccount-navigation ul li a:after{
    background-color: {$accentColor};}
.woocommerce-MyAccount-navigation ul li a:hover{color: {$accentColor};}
.reset_variations{
    font-family: \"{$headingSuperTitleFont}\",Arial,Helvetica,sans-serif;}
.reset_variations:before{
    color: {$accentColor};}
form fieldset legend{
    font-family: {$headingFont},Arial,Helvetica,sans-serif;}
.woocommerce-info a:not(.button),
.woocommerce-message a:not(.button){color: {$accentColor};}
.woocommerce-info a.showcoupon:before,
.woocommerce-message a.showcoupon:before{
    color: {$accentColor};}
.woocommerce-info a.showcoupon:hover,
.woocommerce-message a.showcoupon:hover{color: {$accentColor};}
.woocommerce-message:before,
.woocommerce-info:before{
    background: {$accentColor};}
.woocommerce .btSidebar a.button,
.woocommerce .btContent a.button,
.woocommerce-page .btSidebar a.button,
.woocommerce-page .btContent a.button,
.woocommerce .btSidebar input[type=\"submit\"],
.woocommerce .btContent input[type=\"submit\"],
.woocommerce-page .btSidebar input[type=\"submit\"],
.woocommerce-page .btContent input[type=\"submit\"],
.woocommerce .btSidebar :not(.widget_product_search) button[type=\"submit\"],
.woocommerce .btContent :not(.widget_product_search) button[type=\"submit\"],
.woocommerce-page .btSidebar :not(.widget_product_search) button[type=\"submit\"],
.woocommerce-page .btContent :not(.widget_product_search) button[type=\"submit\"],
.woocommerce .btSidebar input.button,
.woocommerce .btContent input.button,
.woocommerce-page .btSidebar input.button,
.woocommerce-page .btContent input.button,
div.woocommerce a.button,
div.woocommerce input[type=\"submit\"],
div.woocommerce :not(.widget_product_search) button[type=\"submit\"],
div.woocommerce input.button{
    background: {$accentColor};
    font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif !important;}
.woocommerce .btSidebar a.button:hover,
.woocommerce .btContent a.button:hover,
.woocommerce-page .btSidebar a.button:hover,
.woocommerce-page .btContent a.button:hover,
.woocommerce .btSidebar input[type=\"submit\"]:hover,
.woocommerce .btContent input[type=\"submit\"]:hover,
.woocommerce-page .btSidebar input[type=\"submit\"]:hover,
.woocommerce-page .btContent input[type=\"submit\"]:hover,
.woocommerce .btSidebar :not(.widget_product_search) button[type=\"submit\"]:hover,
.woocommerce .btContent :not(.widget_product_search) button[type=\"submit\"]:hover,
.woocommerce-page .btSidebar :not(.widget_product_search) button[type=\"submit\"]:hover,
.woocommerce-page .btContent :not(.widget_product_search) button[type=\"submit\"]:hover,
.woocommerce .btSidebar input.button:hover,
.woocommerce .btContent input.button:hover,
.woocommerce-page .btSidebar input.button:hover,
.woocommerce-page .btContent input.button:hover,
div.woocommerce a.button:hover,
div.woocommerce input[type=\"submit\"]:hover,
div.woocommerce :not(.widget_product_search) button[type=\"submit\"]:hover,
div.woocommerce input.button:hover{-webkit-box-shadow: 0 -3px 0 0 rgba(24,24,24,.2) inset,0 0 0 2.5em {$accentColor} inset,0 2px 10px rgba(0,0,0,.2);
    box-shadow: 0 -3px 0 0 rgba(24,24,24,.2) inset,0 0 0 2.5em {$accentColor} inset,0 2px 10px rgba(0,0,0,.2);}
.woocommerce .btSidebar input.alt,
.woocommerce .btContent input.alt,
.woocommerce-page .btSidebar input.alt,
.woocommerce-page .btContent input.alt,
.woocommerce .btSidebar a.button.alt,
.woocommerce .btContent a.button.alt,
.woocommerce-page .btSidebar a.button.alt,
.woocommerce-page .btContent a.button.alt,
.woocommerce .btSidebar .button.alt,
.woocommerce .btContent .button.alt,
.woocommerce-page .btSidebar .button.alt,
.woocommerce-page .btContent .button.alt,
.woocommerce .btSidebar button.alt,
.woocommerce .btContent button.alt,
.woocommerce-page .btSidebar button.alt,
.woocommerce-page .btContent button.alt,
.woocommerce .btSidebar .shipping-calculator-button,
.woocommerce .btContent .shipping-calculator-button,
.woocommerce-page .btSidebar .shipping-calculator-button,
.woocommerce-page .btContent .shipping-calculator-button,
div.woocommerce input.alt,
div.woocommerce a.button.alt,
div.woocommerce .button.alt,
div.woocommerce button.alt,
div.woocommerce .shipping-calculator-button{
    -webkit-box-shadow: 0 0 0 2px {$accentColor} inset,0 4px 0 0 rgba(24,24,24,.2) inset;
    box-shadow: 0 0 0 2px {$accentColor} inset,0 4px 0 0 rgba(24,24,24,.2) inset;
    color: {$accentColor};
    font-family: \"{$buttonFont}\",Arial,Helvetica,sans-serif !important;}
.woocommerce .btSidebar input.alt:hover,
.woocommerce .btContent input.alt:hover,
.woocommerce-page .btSidebar input.alt:hover,
.woocommerce-page .btContent input.alt:hover,
.woocommerce .btSidebar a.button.alt:hover,
.woocommerce .btContent a.button.alt:hover,
.woocommerce-page .btSidebar a.button.alt:hover,
.woocommerce-page .btContent a.button.alt:hover,
.woocommerce .btSidebar .button.alt:hover,
.woocommerce .btContent .button.alt:hover,
.woocommerce-page .btSidebar .button.alt:hover,
.woocommerce-page .btContent .button.alt:hover,
.woocommerce .btSidebar button.alt:hover,
.woocommerce .btContent button.alt:hover,
.woocommerce-page .btSidebar button.alt:hover,
.woocommerce-page .btContent button.alt:hover,
.woocommerce .btSidebar .shipping-calculator-button:hover,
.woocommerce .btContent .shipping-calculator-button:hover,
.woocommerce-page .btSidebar .shipping-calculator-button:hover,
.woocommerce-page .btContent .shipping-calculator-button:hover,
div.woocommerce input.alt:hover,
div.woocommerce a.button.alt:hover,
div.woocommerce .button.alt:hover,
div.woocommerce button.alt:hover,
div.woocommerce .shipping-calculator-button:hover{-webkit-box-shadow: 0 0 0 2px {$accentColor} inset,0 5px 0 0 rgba(24,24,24,.2) inset,0 2px 10px rgba(0,0,0,.2);
    box-shadow: 0 0 0 2px {$accentColor} inset,0 5px 0 0 rgba(24,24,24,.2) inset,0 2px 10px rgba(0,0,0,.2);}
.woocommerce .btSidebar a.edit,
.woocommerce .btContent a.edit,
.woocommerce-page .btSidebar a.edit,
.woocommerce-page .btContent a.edit,
div.woocommerce a.edit{
    font-family: {$headingSuperTitleFont},Arial,Helvetica,sans-serif;}
.woocommerce .btSidebar a.edit:before,
.woocommerce .btContent a.edit:before,
.woocommerce-page .btSidebar a.edit:before,
.woocommerce-page .btContent a.edit:before,
div.woocommerce a.edit:before{
    color: {$accentColor};}
.widget_price_filter .price_slider_wrapper .ui-slider .ui-slider-handle{
    background: {$accentColor};}
.widget_price_filter .price_slider_amount .price_label{
    font-family: {$headingFont},Arial,Helvetica,sans-serif;}
.star-rating span:before{
    color: {$accentColor};}
p.stars a[class^=\"star-\"].active:after,
p.stars a[class^=\"star-\"]:hover:after{color: {$accentColor};}
.select2-container--default .select2-results__option--highlighted[aria-selected],
.select2-container--default .select2-results__option--highlighted[data-selected]{background-color: {$accentColor};}
button.pswp__button.pswp__button--arrow--left:hover,
button.pswp__button.pswp__button--arrow--right:hover{background: {$accentColor} !important;}
.woocommerce input[type=\"checkbox\"]:before{
    background: {$accentColor};}
.btQuoteBooking .btContactNext{
    background: {$accentColor};}
.btQuoteBooking .btQuoteSlider .ui-slider-handle{
    background: {$accentColor};}
.btQuoteBooking .btQuoteSwitch.on .btQuoteSwitchInner{background: {$accentColor};}
.btQuoteBooking .ddChild ul li:before{
    background: {$accentColor};}
.btQuoteBooking .ddChild ul li.hover{color: {$accentColor} !important;}
.btQuoteBooking .btQuoteBookingForm .btQuoteTotal{
    background: {$accentColor};}
.btQuoteBooking .btContactFieldMandatory.btContactFieldError input,
.btQuoteBooking .btContactFieldMandatory.btContactFieldError textarea{border: 1px solid {$accentColor};
    -webkit-box-shadow: 0 0 0 1px {$accentColor} inset;
    box-shadow: 0 0 0 1px {$accentColor} inset;}
.btLightSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError input:hover,
.btDarkSkin .btLightSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError input:hover,
.btLightSkin .btDarkSkin .btLightSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError input:hover,
.btLightSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError input:focus,
.btDarkSkin .btLightSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError input:focus,
.btLightSkin .btDarkSkin .btLightSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError input:focus,
.btLightSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError textarea:hover,
.btDarkSkin .btLightSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError textarea:hover,
.btLightSkin .btDarkSkin .btLightSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError textarea:hover,
.btLightSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError textarea:focus,
.btDarkSkin .btLightSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError textarea:focus,
.btLightSkin .btDarkSkin .btLightSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError textarea:focus{border: 1px solid {$accentColor};
    -webkit-box-shadow: 0 0 0 1px {$accentColor} inset,0 2px 10px 0 rgba(0,0,0,.12);
    box-shadow: 0 0 0 1px {$accentColor} inset,0 2px 10px 0 rgba(0,0,0,.12);}
.btDarkSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError input:hover,
.btLightSkin .btDarkSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError input:hover,
.btDarkSkin.btLightSkin .btDarkSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError input:hover,
.btDarkSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError input:focus,
.btLightSkin .btDarkSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError input:focus,
.btDarkSkin.btLightSkin .btDarkSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError input:focus,
.btDarkSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError textarea:hover,
.btLightSkin .btDarkSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError textarea:hover,
.btDarkSkin.btLightSkin .btDarkSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError textarea:hover,
.btDarkSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError textarea:focus,
.btLightSkin .btDarkSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError textarea:focus,
.btDarkSkin.btLightSkin .btDarkSkin .btQuoteBooking .btContactFieldMandatory.btContactFieldError textarea:focus{border: 1px solid {$accentColor};
    -webkit-box-shadow: 0 0 0 1px {$accentColor} inset,0 2px 10px 0 rgba(0,0,0,.12);
    box-shadow: 0 0 0 1px {$accentColor} inset,0 2px 10px 0 rgba(0,0,0,.12);}
.btQuoteBooking .btSubmitMessage{color: {$accentColor};}
.btQuoteBooking .btContactSubmit{
    background: {$accentColor};}
.btQuoteBooking .btDatePicker .ui-datepicker-header{background-color: {$accentColor};}
.btQuoteBooking .bt_cc_email_confirmation_container [type=\"checkbox\"]:not(:checked) + label:after,
.btQuoteBooking .bt_cc_email_confirmation_container [type=\"checkbox\"]:checked + label:after{
    background: {$accentColor};}
", array() );