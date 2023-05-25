/*! jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],a=1;a<=3;a++){if(+n[a]>+o[a])return 1;if(+n[a]<+o[a])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.4.0";var t=Object.create(null),o=(s.migrateDisablePatches=function(){for(var e=0;e<arguments.length;e++)t[arguments[e]]=!0},s.migrateEnablePatches=function(){for(var e=0;e<arguments.length;e++)delete t[arguments[e]]},s.migrateIsPatchEnabled=function(e){return!t[e]},n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion)),{});function i(e,t){var r=n.console;!s.migrateIsPatchEnabled(e)||s.migrateDeduplicateWarnings&&o[t]||(o[t]=!0,s.migrateWarnings.push(t+" ["+e+"]"),r&&r.warn&&!s.migrateMute&&(r.warn("JQMIGRATE: "+t),s.migrateTrace&&r.trace&&r.trace()))}function r(e,t,r,n,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return i(n,o),r},set:function(e){i(n,o),r=e}})}function a(e,t,r,n,o){var a=e[t];e[t]=function(){return o&&i(n,o),(s.migrateIsPatchEnabled(n)?r:a||s.noop).apply(this,arguments)}}function u(e,t,r,n,o){if(!o)throw new Error("No warning message provided");a(e,t,r,n,o)}function d(e,t,r,n){a(e,t,r,n)}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){o={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&i("quirks","jQuery is not compatible with Quirks Mode");var c,l,p,f={},m=s.fn.init,y=s.find,h=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,g=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,v=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(c in d(s.fn,"init",function(e){var t=Array.prototype.slice.call(arguments);return s.migrateIsPatchEnabled("selector-empty-id")&&"string"==typeof e&&"#"===e&&(i("selector-empty-id","jQuery( '#' ) is not a valid selector"),t[0]=[]),m.apply(this,t)},"selector-empty-id"),s.fn.init.prototype=s.fn,d(s,"find",function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&h.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(g,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),i("selector-hash","Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){i("selector-hash","Attribute selector with '#' was not fixed: "+r[0])}}return y.apply(this,r)},"selector-hash"),y)Object.prototype.hasOwnProperty.call(y,c)&&(s.find[c]=y[c]);u(s.fn,"size",function(){return this.length},"size","jQuery.fn.size() is deprecated and removed; use the .length property"),u(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse"),u(s,"holdReady",s.holdReady,"holdReady","jQuery.holdReady is deprecated"),u(s,"unique",s.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort"),r(s.expr,"filters",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),r(s.expr,":",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&u(s,"trim",function(e){return null==e?"":(e+"").replace(v,"")},"trim","jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(u(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"nodeName","jQuery.nodeName is deprecated"),u(s,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(u(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"isNumeric","jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()}),u(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[Object.prototype.toString.call(e)]||"object":typeof e},"type","jQuery.type is deprecated"),u(s,"isFunction",function(e){return"function"==typeof e},"isFunction","jQuery.isFunction() is deprecated"),u(s,"isWindow",function(e){return null!=e&&e===e.window},"isWindow","jQuery.isWindow() is deprecated")),s.ajax&&(l=s.ajax,p=/(=)\?(?=&|$)|\?\?/,d(s,"ajax",function(){var e=l.apply(this,arguments);return e.promise&&(u(e,"success",e.done,"jqXHR-methods","jQXHR.success is deprecated and removed"),u(e,"error",e.fail,"jqXHR-methods","jQXHR.error is deprecated and removed"),u(e,"complete",e.always,"jqXHR-methods","jQXHR.complete is deprecated and removed")),e},"jqXHR-methods"),e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(p.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&p.test(e.data))&&i("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated")}));var j=s.fn.removeAttr,b=s.fn.toggleClass,w=/\S+/g;function Q(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}d(s.fn,"removeAttr",function(e){var r=this;return s.each(e.match(w),function(e,t){s.expr.match.bool.test(t)&&(i("removeAttr-bool","jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),j.apply(this,arguments)},"removeAttr-bool"),d(s.fn,"toggleClass",function(t){return void 0!==t&&"boolean"!=typeof t?b.apply(this,arguments):(i("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))},"toggleClass-bool");var x,A=!1,R=/^[a-z]/,T=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return A=!0,e=r.apply(this,arguments),A=!1,e})}),d(s,"swap",function(e,t,r,n){var o,a={};for(o in A||i("swap","jQuery.swap() is undocumented and deprecated"),t)a[o]=e.style[o],e.style[o]=t[o];for(o in r=r.apply(e,n||[]),t)e.style[o]=a[o];return r},"swap"),e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return i("cssProps","jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),e("4.0.0")&&"undefined"!=typeof Proxy&&(s.cssNumber=new Proxy({animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},{get:function(){return i("css-number","jQuery.cssNumber is deprecated"),Reflect.get.apply(this,arguments)},set:function(){return i("css-number","jQuery.cssNumber is deprecated"),Reflect.set.apply(this,arguments)}})),x=s.fn.css,d(s.fn,"css",function(e,t){var r,n=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(n,e,t)}),this):("number"==typeof t&&(t=Q(e),r=t,R.test(r)&&T.test(r[0].toUpperCase()+r.slice(1))||s.cssNumber[t]||i("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),x.apply(this,arguments))},"css-number");function C(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}var S,N,P,k,H,E,M,q=s.data,D=(d(s,"data",function(e,t,r){var n,o,a;if(t&&"object"==typeof t&&2===arguments.length){for(a in n=s.hasData(e)&&q.call(this,e),o={},t)a!==Q(a)?(i("data-camelCase","jQuery.data() always sets/gets camelCased names: "+a),n[a]=t[a]):o[a]=t[a];return q.call(this,e,o),t}return t&&"string"==typeof t&&t!==Q(t)&&(n=s.hasData(e)&&q.call(this,e))&&t in n?(i("data-camelCase","jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):q.apply(this,arguments)},"data-camelCase"),s.fx&&(P=s.Tween.prototype.run,k=function(e){return e},d(s.Tween.prototype,"run",function(){1<s.easing[this.easing].length&&(i("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=k),P.apply(this,arguments)},"easing-one-arg"),S=s.fx.interval,N="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||i("fx-interval",N),s.migrateIsPatchEnabled("fx-interval")&&void 0===S?13:S},set:function(e){i("fx-interval",N),S=e}})),s.fn.load),F=s.event.add,W=s.event.fix,O=(s.event.props=[],s.event.fixHooks={},r(s.event.props,"concat",s.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed"),d(s.event,"fix",function(e){var t=e.type,r=this.fixHooks[t],n=s.event.props;if(n.length){i("event-old-patch","jQuery.event.props are deprecated and removed: "+n.join());while(n.length)s.event.addProp(n.pop())}if(r&&!r._migrated_&&(r._migrated_=!0,i("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+t),(n=r.props)&&n.length))while(n.length)s.event.addProp(n.pop());return t=W.call(this,e),r&&r.filter?r.filter(t,e):t},"event-old-patch"),d(s.event,"add",function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&i("load-after-event","jQuery(window).on('load'...) called after load event occurred"),F.apply(this,arguments)},"load-after-event"),s.each(["load","unload","error"],function(e,t){d(s.fn,t,function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?D.apply(this,e):(i("shorthand-removed-v3","jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))},"shorthand-removed-v3")}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){u(s.fn,r,function(e,t){return 0<arguments.length?this.on(r,null,e,t):this.trigger(r)},"shorthand-deprecated-v3","jQuery.fn."+r+"() event shorthand is deprecated")}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&i("ready-event","'ready' event is deprecated")}},u(s.fn,"bind",function(e,t,r){return this.on(e,null,t,r)},"pre-on-methods","jQuery.fn.bind() is deprecated"),u(s.fn,"unbind",function(e,t){return this.off(e,null,t)},"pre-on-methods","jQuery.fn.unbind() is deprecated"),u(s.fn,"delegate",function(e,t,r,n){return this.on(t,e,r,n)},"pre-on-methods","jQuery.fn.delegate() is deprecated"),u(s.fn,"undelegate",function(e,t,r){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},"pre-on-methods","jQuery.fn.undelegate() is deprecated"),u(s.fn,"hover",function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},"pre-on-methods","jQuery.fn.hover() is deprecated"),/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi),_=(s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.migrateEnablePatches("self-closed-tags")},d(s,"htmlPrefilter",function(e){var t,r;return(r=(t=e).replace(O,"<$1></$2>"))!==t&&C(t)!==C(r)&&i("self-closed-tags","HTML tags must be properly nested and closed: "+t),e.replace(O,"<$1></$2>")},"self-closed-tags"),s.migrateDisablePatches("self-closed-tags"),s.fn.offset);return d(s.fn,"offset",function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(i("offset-valid-elem","jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},"offset-valid-elem"),s.ajax&&(H=s.param,d(s,"param",function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(i("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),H.call(this,e,t)},"param-ajax-traditional")),u(s.fn,"andSelf",s.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),s.Deferred&&(E=s.Deferred,M=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],d(s,"Deferred",function(e){var a=E(),i=a.promise();function t(){var o=arguments;return s.Deferred(function(n){s.each(M,function(e,t){var r="function"==typeof o[e]&&o[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===i?n.promise():this,r?[e]:arguments)})}),o=null}).promise()}return u(a,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),u(i,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),e&&e.call(a,a),a},"deferred-pipe"),s.Deferred.exceptionHook=E.exceptionHook),s});
;
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
;
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});;
(function($){"use strict";window.bt_bb_animate_elements=function(){var $elems=$('.animate:not(.animated)');$elems.each(function(){var $elm=$(this);if(isOnScreen($elm)){$elm.addClass('animated');if($elm.hasClass('bt_bb_counter')){bt_bb_animate_counter($elm)}
if(typeof window.local_bt_bb_animate_elements=='function'){local_bt_bb_animate_elements($elm)}}});bt_bb_lazy_load_images();$('.slick-slider .slick-slide:not(.slick-active) .animate').removeClass('animated')}
window.bt_bb_lazy_load_images=function(){var $elems=$('img.btLazyLoadImage:not(.btLazyLoaded)');$elems.each(function(){var $elm=$(this);if(isOnScreen($elm,-200)){$elm.addClass('btLazyLoaded');$elm.attr('src',$elm.data('image_src'))}});var $elems=$('image.btLazyLoadImage:not(.btLazyLoaded)');$elems.each(function(){var $elm=$(this);if(isOnScreen($elm,-200)){$elm.addClass('btLazyLoaded');$elm.attr('xlink:href',$elm.data('image_src'))}});var $elems=$('.btLazyLoadBackground:not(.btLazyLoaded)');$elems.each(function(){var $elm=$(this);if(isOnScreen($elm,-200)){$elm.addClass('btLazyLoaded');$elm.css('background-image','url('+$elm.data('background_image_src')+')')}})}
function iOSversion(){if(/iP(hone|od|ad)/.test(navigator.platform)){var v=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);return[parseInt(v[1],10),parseInt(v[2],10),parseInt(v[3]||0,10)]}else{return!1}}
var ver=iOSversion();function isOnScreen(elem,top_offset){if(ver&&ver[0]==13)return!0;top_offset=(top_offset===undefined)?75:top_offset;var element=elem.get(0);if(element==undefined)return!1;var bounds=element.getBoundingClientRect();var output=bounds.top+top_offset<window.innerHeight&&bounds.bottom>0;return output}
function bt_bb_animate_counter($elm){var number_length=$elm.data('digit-length');for(var i=parseInt(number_length);i>0;i--){var digit=parseInt($elm.children('.p'+i).data('digit'));if(digit==0)digit=10;if(isNaN(digit))digit=10;for(var j=0;j<=digit;j++){$elm.children('.p'+i).css('transform','translateY(-'+digit*$elm.outerHeight()+'px)')}
$elm.addClass('animated')}
return!1}
window.bt_bb_requestAnimFrame=function(){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60)})}();function bt_clamp_number(val,min,max){return val>max?max:val<min?min:val}
var is_edge=navigator.userAgent.indexOf('Edge')>-1;var is_chrome=navigator.userAgent.indexOf('Chrome')>-1;var is_safari=navigator.userAgent.indexOf('Safari')>-1;var is_firefox=navigator.userAgent.indexOf('Firefox')>-1;if(is_chrome&&is_safari)window.is_safari=!1;var chrome_version=!1;window.bt_bb_raf_loop=function(){var win_w=window.innerWidth;var win_h=window.innerHeight;const SPEED_DELTA=0.0001;$('html.bt_bb_backgroud_fixed_supported .bt_bb_parallax').each(function(){if($('html').attr('data-bt_bb_screen_resolution')!=='xl'){$(this)[0].style.backgroundPosition='center center';return!1}else{var bounds=$(this).hasClass('bt_bb_background_image_holder')?this.parentElement.getBoundingClientRect():this.getBoundingClientRect();if(bounds.top<win_h&&bounds.bottom>0){var speed=parseFloat($(this).attr('data-parallax'))+SPEED_DELTA;if(speed==2+SPEED_DELTA){$(this)[0].style.backgroundAttachment='fixed'}else{var offset=parseFloat($(this).attr('data-parallax-offset'));var ypos=offset-bounds.top*speed/2;ypos=(ypos>-0.5&&ypos<0.5)?0:ypos;$(this)[0].style.backgroundPositionY=ypos+'px'}
if($(this).hasClass('bt_bb_background_image_holder')){var bounds_mid=(bounds.top+bounds.bottom)/2;var scroll_distance=(bounds_mid-win_h/2)/(win_h);scroll_distance=bt_clamp_number(scroll_distance,0,1);var ZOOM_START=parseFloat($(this).attr('data-parallax-zoom-start'));var ZOOM_END=parseFloat($(this).attr('data-parallax-zoom-end'));if(ZOOM_START>=1&&ZOOM_END>=1&&(ZOOM_START!=1||ZOOM_END!=1)){var zoom=ZOOM_START+(ZOOM_END-ZOOM_START)*(1-scroll_distance);$(this)[0].style.transform=' scale('+zoom+')'}
var BLUR_START=parseFloat($(this).attr('data-parallax-blur-start'));var BLUR_END=parseFloat($(this).attr('data-parallax-blur-end'));if(BLUR_START>=0&&BLUR_END>=0&&(BLUR_START!=0||BLUR_END!=0)){var blur=BLUR_START+(BLUR_END-BLUR_START)*(1-scroll_distance);$(this)[0].style.filter=' blur('+blur+'px)'}
var OPACITY_START=parseFloat($(this).attr('data-parallax-opacity-start'));var OPACITY_END=parseFloat($(this).attr('data-parallax-opacity-end'));if(OPACITY_START>=0&&OPACITY_END>=0&&(OPACITY_START!=1||OPACITY_END!=1)){var opacity=OPACITY_START+(OPACITY_END-OPACITY_START)*(1-scroll_distance);$(this)[0].style.opacity=opacity}}}}});window.bt_bb_raf_lock=!1}
window.bt_detect_touch=function(){if(typeof window!=='undefined'){var bt_has_touch=Boolean('ontouchstart' in window||window.navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0||window.DocumentTouch&&document instanceof DocumentTouch);if(bt_has_touch)$('html').addClass('bt_bb_touch');}}
window.bt_bb_get_screen_resolution=function(){var width=Math.max(document.documentElement.clientWidth,window.innerWidth||0);var res='xl';if(width<=1200)res='lg';if(width<=992)res='md';if(width<=768)res='sm';if(width<=480)res='xs';$('html').attr('data-bt_bb_screen_resolution',res);$('[data-bt-override-class]').each(function(){var override_classes=$(this).data('bt-override-class');for(var prefix in override_classes){if(override_classes[prefix][res]!==undefined){var new_class=prefix+override_classes[prefix][res]}else{var new_class=prefix+override_classes[prefix].xl}
$(this).removeClass(override_classes[prefix].current_class);$(this).addClass(new_class);override_classes[prefix].current_class=new_class;$(this).data('override_classes',override_classes)}})}
window.bt_bb_check_ios_fixed_background_support=function(){return(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream)||(/MacIntel/.test(navigator.platform)&&$('html').hasClass('bt_bb_touch'))}
window.bt_bb_check_fixed_background=function(){var el=document.createElement('div');try{if(!('backgroundAttachment' in el.style)||bt_bb_check_ios_fixed_background_support()){$('html').removeClass('bt_bb_backgroud_fixed_supported');return!1}
el.style.backgroundAttachment='fixed';if(('fixed'===el.style.backgroundAttachment)){$('html').addClass('bt_bb_backgroud_fixed_supported');return!0}}catch(e){$('html').removeClass('bt_bb_backgroud_fixed_supported');return!1}}
window.bt_bb_countdown=function(elem,selector,i,arr,arr_prev){if(arr[i]!==arr_prev[i]||elem.find(selector).children().eq(0).html()==''){elem.find(selector).children().addClass('countdown_anim');elem.find(selector).children().eq(0).html(arr[i]);elem.find(selector).children().eq(1).html(arr_prev[i]);setTimeout(function(){elem.find(selector).children().eq(1).html(elem.find(selector).children().eq(0).html());elem.find(selector).children().removeClass('countdown_anim')},300)}}
window.bt_bb_countdown_output=function(elem){var s=elem.data('init-seconds');if(elem.data('init-target-seconds')){var now_utc_seconds=Math.floor(new Date().getTime()/1000);var s=elem.data('init-target-seconds')-now_utc_seconds;if(s<0){s=0}}
var delta=s;var days=Math.floor(delta/86400);delta-=days*86400;var hours=Math.floor(delta/3600)%24;delta-=hours*3600;var minutes=Math.floor(delta/60)%60;delta-=minutes*60;var seconds=delta;if(hours<10){hours='0'+hours}
if(minutes<10){minutes='0'+minutes}
if(seconds<10){seconds='0'+seconds}
var seconds_arr_prev=seconds.toString().split('');var minutes_arr_prev=minutes.toString().split('');var hours_arr_prev=hours.toString().split('');s=s-1;if(s<0){s=0}
var delta=s;var days=Math.floor(delta/86400);delta-=days*86400;var hours=Math.floor(delta/3600)%24;delta-=hours*3600;var minutes=Math.floor(delta/60)%60;delta-=minutes*60;var seconds=delta;if(hours<10){hours='0'+hours}
if(minutes<10){minutes='0'+minutes}
if(seconds<10){seconds='0'+seconds}
var seconds_arr=seconds.toString().split('');var minutes_arr=minutes.toString().split('');var hours_arr=hours.toString().split('');for(var i=0;i<=1;i++){bt_bb_countdown(elem,'.seconds .n'+i,i,seconds_arr,seconds_arr_prev);bt_bb_countdown(elem,'.minutes .n'+i,i,minutes_arr,minutes_arr_prev);bt_bb_countdown(elem,'.hours .n'+i,i,hours_arr,hours_arr_prev)}
var days_prev=0;if(days!=days_prev){var days_arr=days.toString().split('');var days_html='';for(var i=0;i<days_arr.length;i++){days_html+='<span>'+days_arr[i]+'</span>'}
elem.find('.days').html(days_html+'<span class="days_text"><span>'+elem.find('.days').data('text')+'</span></span>')}
days_prev=days;elem.data('init-seconds',s)}
function bt_bb_fix_slider_heights(){$('.bt_bb_content_slider.bt_bb_height_keep-height .slick-slider').each(function(index){$(this).find('.slick-slide').height('auto');var slickTrack=$(this).find('.slick-track');var slickTrackHeight=$(slickTrack).height();$(this).find('.slick-slide').css('height',slickTrackHeight+'px')})}
function bt_bb_init_elements(){$('.bt_bb_section .bt_bb_row').each(function(index){var data_structure=[];$(this).data('structure',"0");$(this).find('.bt_bb_column').each(function(index){data_structure.push($(this).data('width'))});$(this).attr('data-structure',data_structure.join("-"))});$('.bt_bb_row_inner').each(function(index){var data_structure=[];$(this).data('structure',"0");$(this).find('.bt_bb_column_inner').each(function(index){data_structure.push($(this).data('width'))});$(this).attr('data-structure',data_structure.join("-"))});$('.slick-slider').slick();$('.slick-slider .slick-prev, .slick-slider .slick-next, .slick-slider .slick-dots li').click(function(){$(this).closest('.slick-slider').slick('slickPause')});$('.bt_bb_slider.bt_bb_use_lightbox .slick-slider .bt_bb_slider_item').click(function(){$(this).closest('.slick-slider').slick('slickPause')});$('.bt_bb_slider.bt_bb_use_lightbox').each(function(){$(this).magnificPopup({delegate:'.bt_bb_slider_item:not(.slick-cloned)',type:'image',gallery:{enabled:!0},callbacks:{elementParse:function(item){item.src=item.el.data('src-full')}},closeBtnInside:!1,fixedContentPos:!1})});$('.bt_bb_masonry_image_grid').not('.bt_bb_no_lightbox').each(function(){$(this).magnificPopup({delegate:'.bt_bb_grid_item',type:'image',gallery:{enabled:!0},callbacks:{elementParse:function(item){item.src=item.el.data('src-full')}},closeBtnInside:!1,fixedContentPos:!1})});$('.bt_bb_css_image_grid').not('.bt_bb_no_lightbox').each(function(){$(this).magnificPopup({delegate:'.bt_bb_css_image_grid_item',type:'image',gallery:{enabled:!0},callbacks:{elementParse:function(item){item.src=item.el.data('src-full')}},closeBtnInside:!1,fixedContentPos:!1})});$(document).on('click','.bt_bb_image.bt_bb_use_lightbox a',function(){var url=$(this).attr('href').trim();if(url!=""&&url!="#"&&url!="#lightbox"){var contentType=url.toLowerCase().includes('.jpg')||url.toLowerCase().includes('.jpeg')||url.toLowerCase().includes('.png')?'image':'iframe';$.magnificPopup.open({type:contentType,items:{src:url,title:$(this).attr('title'),},closeBtnInside:!1})}else{var url=$(this).find('img').attr('data-full_image_src');$.magnificPopup.open({type:'image',items:{src:url,title:$(this).attr('title'),},closeBtnInside:!1,fixedContentPos:!1});return!1}
return!1});$(document).on('click','.bt_bb_button.bt_bb_use_lightbox a, .bt_bb_icon.bt_bb_use_lightbox a, .bt_bb_service.bt_bb_use_lightbox a',function(){var url=$(this).attr('href');var contentType=url.toLowerCase().includes('.jpg')||url.toLowerCase().includes('.jpeg')||url.toLowerCase().includes('.png')?'image':'iframe';$.magnificPopup.open({type:contentType,items:{src:url,title:$(this).attr('title'),},closeBtnInside:!1});return!1});$('.bt_bb_content_slider.bt_bb_height_keep-height .slick-slider').on('setPosition',function(){bt_bb_fix_slider_heights();$(this).find('*[aria-hidden=true] a, *[aria-hidden=true] button').attr('tabindex',-1);$(this).find('*[aria-hidden=false] a, *[aria-hidden=false] button').removeAttr('tabindex')});$(window).on('resize',function(e){bt_bb_fix_slider_heights();bt_bb_get_screen_resolution()});$('.slick-slider').on('beforeChange',function(event,slick,currentSlide,nextSlide){$(this).find('.slick-slide .animated').removeClass('animated');$(this).find('.slick-slide[data-slick-index='+nextSlide+'] .animate').addClass('animated')});$('.bt_bb_tabs .bt_bb_tabs_header li').click(function(){$(this).siblings().removeClass('on');$(this).addClass('on');$(this).closest('.bt_bb_tabs').children('.bt_bb_tabs_tabs').children('.bt_bb_tab_item').removeClass('on');$(this).closest('.bt_bb_tabs').children('.bt_bb_tabs_tabs').children('.bt_bb_tab_item').eq($(this).index()).addClass('on')});$('.bt_bb_tabs').each(function(){$(this).find('li').first().click()});bt_detect_touch();bt_bb_get_screen_resolution();bt_bb_check_fixed_background();if($('html.bt_bb_backgroud_fixed_supported .bt_bb_parallax').length>0){window.bt_bb_raf_lock=!1;$(window).on('mousewheel',function(e){});$(window).on('scroll',function(){if(!window.bt_bb_raf_lock){window.bt_bb_raf_lock=!0;bt_bb_requestAnimFrame(bt_bb_raf_loop)}});bt_bb_requestAnimFrame(bt_bb_raf_loop);$(window).on("load",function(){bt_bb_requestAnimFrame(bt_bb_raf_loop)})}
$('.btCountdownHolder').each(function(){var cd=$(this);var s=cd.data('init-seconds');bt_bb_countdown_output(cd);setInterval(function(){bt_bb_countdown_output(cd)},1000)})}
window.bt_bb_gmap_init_static_new=function(map_id){var mapElement_jQuery=jQuery('#'+map_id);if(mapElement_jQuery.data('init-finished')==!0)return!1;var zoom=(typeof mapElement_jQuery.data('zoom')!=='undefined')?mapElement_jQuery.data('zoom'):8;var custom_style=(typeof mapElement_jQuery.data('custom-style')!=='undefined')?mapElement_jQuery.data('custom-style'):'';var api_key=(typeof mapElement_jQuery.data('api-key')!=='undefined')?mapElement_jQuery.data('api-key'):'';var height=(typeof mapElement_jQuery.data('height')!=='undefined')?mapElement_jQuery.data('height'):0;bt_bb_gmap_init_static(map_id,zoom,custom_style,height,api_key);mapElement_jQuery.data('init-finished',!0)}
window.bt_bb_gmap_init_new=function(map_id){var mapElement_jQuery=jQuery('#'+map_id);if(mapElement_jQuery.data('init-finished')==!0)return!1;var zoom=(typeof mapElement_jQuery.data('zoom')!=='undefined')?mapElement_jQuery.data('zoom'):8;var custom_style=(typeof mapElement_jQuery.data('custom-style')!=='undefined')?mapElement_jQuery.data('custom-style'):'';bt_bb_gmap_init(map_id,zoom,custom_style);mapElement_jQuery.data('init-finished',!0)}
document.addEventListener("readystatechange",function(){if((document.readyState==="interactive"||document.readyState==="complete")){if(typeof(bt_bb_gmap_init_new)!==typeof(Function)){return!1}
$(".bt_bb_google_maps_map").each(function(index){if($(this).data('map-type')!='static'){bt_bb_gmap_init_new($(this).attr('id'))}else{bt_bb_gmap_init_static_new($(this).attr('id'))}})}},!1);window.bt_bb_gmap_init_static=function(map_id,zoom,custom_style,height,api_key){if(parseInt(height)<=0)height=400;var container=jQuery('#'+map_id).parent();var locations=container.find('.bt_bb_map_location');var center_map=container.data('center');if(center_map=='no'){center_map=!1}else{center_map=!0}
var lat_sum=0;var lng_sum=0;var markerStr='';var n=0;var colors=['blue','green','red','purple','yellow','gray','orange','white','black','brown']
locations.each(function(){var lat=jQuery(this).data('lat');var lng=jQuery(this).data('lng');var iconStr=jQuery(this).data('icon')!=""?'scale:2%7Cicon:'+jQuery(this).data('icon'):'size:mid%7Ccolor:'+colors[n];lat_sum+=parseFloat(lat);lng_sum+=parseFloat(lng);markerStr+='&markers='+iconStr+'%7C'+lat+','+lng;var centerLatLng=[lat,lng];n++});if(center_map){var centerLatLng=[lat_sum/n,lng_sum/n]}
var img_src='<img src="https://maps.googleapis.com/maps/api/staticmap?center='+centerLatLng.toString()+'&zoom='+zoom+markerStr+'&size=640x'+height+'&scale=2&style='+atob(custom_style)+'&key='+api_key+'">';container.find('.bt_bb_google_maps_map.bt_bb_map_map').append(img_src).on('click',function(){$('.bt_bb_map_location_show').removeClass('bt_bb_map_location_show').nextOrFirst().addClass('bt_bb_map_location_show')});locations.eq(0).addClass('bt_bb_map_location_show');jQuery('#'+map_id).data('init-finished',!0)}
$.fn.nextOrFirst=function(selector){var next=this.next(selector);return(next.length)?next:this.prevAll(selector).last()};window.bt_bb_gmap_init=function(map_id,zoom,custom_style){var myLatLng=new google.maps.LatLng(0,0);var mapOptions={zoom:zoom,center:myLatLng,scrollwheel:!1,scaleControl:!0,zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL,position:google.maps.ControlPosition.RIGHT_CENTER},streetViewControl:!0,mapTypeControl:!0}
var mapElement=document.getElementById(map_id);if(mapElement){var map=new google.maps.Map(mapElement,mapOptions);if(custom_style!=''){var style_array=[];if(custom_style!=''){style_array=JSON.parse(atob(custom_style))}
var customMapType=new google.maps.StyledMapType(style_array,{name:'Custom Style'});var customMapTypeId='custom_style';map.mapTypes.set(customMapTypeId,customMapType);map.setMapTypeId(customMapTypeId)}
var n=0;var container=jQuery('#'+map_id).parent();var locations=container.find('.bt_bb_map_location');var center_map=container.data('center');if(center_map=='no'){center_map=!1}else{center_map=!0}
var lat_sum=0;var lng_sum=0;locations.each(function(){var lat=jQuery(this).data('lat');var lng=jQuery(this).data('lng');var icon=jQuery(this).data('icon');lat_sum+=parseFloat(lat);lng_sum+=parseFloat(lng);var myLatLng=new google.maps.LatLng(lat,lng);var marker=new google.maps.Marker({position:myLatLng,map:map,icon:icon,count:n});if(!center_map&&n==0){map.setCenter(myLatLng)}
locations.eq(0).addClass('bt_bb_map_location_show');marker.addListener('click',function(){var reload=!0;if(locations.eq(this.count).hasClass('bt_bb_map_location_show')&&!container.hasClass('bt_bb_map_no_overlay'))reload=!1;container.removeClass('bt_bb_map_no_overlay');locations.removeClass('bt_bb_map_location_show');if(reload)locations.eq(this.count).addClass('bt_bb_map_location_show');});n++});if(center_map){var centerLatLng=new google.maps.LatLng(lat_sum/n,lng_sum/n);map.setCenter(centerLatLng)}}
jQuery('#'+map_id).data('init-finished',!0)}
var map=null;window.bt_bb_leaflet_init=function(map_id,zoom,max_zoom,predefined_style,scroll_wheel,custom_style,zoom_control){onImagesLoaded($('#'+map_id).parent(),function(){bt_bb_leaflet_init_late(map_id,zoom,max_zoom,predefined_style,scroll_wheel,custom_style,zoom_control)})}
window.bt_bb_leaflet_init_late=function(map_id,zoom,max_zoom,predefined_style,custom_style,scroll_wheel,zoom_control){var lat_center=0;var lng_center=0;var container=jQuery('#'+map_id).parent();var locations=container.find('.bt_bb_leaflet_map_location');var center_map=container.data('center');if(center_map=='no'){center_map=!1}else{center_map=!0}
var markerClusters=L.markerClusterGroup();var lat_sum=0;var lng_sum=0;var n=0;locations.each(function(){var lat=jQuery(this).data('lat');var lng=jQuery(this).data('lng');var icon=jQuery(this).data('icon');lat_sum+=parseFloat(lat);lng_sum+=parseFloat(lng);if(n==0){lat_center=lat;lng_center=lng}
locations.eq(0).addClass('bt_bb_map_location_show');locations.eq(0).addClass('bt_bb_map_location_show');var myIcon=L.icon({iconUrl:icon,iconRetinaUrl:icon,iconSize:[45,58],iconAnchor:[22,58],popupAnchor:[0,-14]});var m=L.marker([lat,lng],{icon:myIcon,id:n,lat:lat,lng:lng}).on("click",markerOnClick);markerClusters.addLayer(m);n++});if(center_map){lat_center=lat_sum/n;lng_center=lng_sum/n}
map=L.map(document.getElementById(map_id)).setView([lat_center,lng_center],zoom);var tiles_arr=[];if(parseInt(predefined_style)>0){tiles_arr=tiles_arr.concat(map_leaflet_source_arr[predefined_style])}
if(custom_style!=''){custom_style=atob(custom_style);var tmp_arr=custom_style.split('\n');$.each(tmp_arr,function(index,tmp){tiles_arr=tiles_arr.concat([tmp.split(',')])})}
$.each(tiles_arr,function(index,tile){L.tileLayer(tile[0],{attribution:tile[1],maxZoom:max_zoom,subdomains:['a','b','c']}).addTo(map)});map.addLayer(markerClusters);if(scroll_wheel==''){map.scrollWheelZoom.disable()}
map.removeControl(map.zoomControl);if(zoom_control){L.control.zoom({position:'topright'}).addTo(map)}
function markerOnClick(e){var attributes=e.target.options;var id=attributes.id;var reload=!0;if(locations.eq(id).hasClass('bt_bb_leaflet_map_location_show')&&!container.hasClass('bt_bb_leaflet_map_no_overlay'))reload=!1;container.removeClass('bt_bb_leaflet_map_no_overlay');locations.removeClass('bt_bb_leaflet_map_location_show');if(reload)locations.eq(id).addClass('bt_bb_leaflet_map_location_show');if(locations.eq(id).hasClass('bt_bb_map_location_show')&&!container.hasClass('bt_bb_map_no_overlay'))reload=!1;container.removeClass('bt_bb_map_no_overlay');locations.removeClass('bt_bb_map_location_show');if(reload)locations.eq(id).addClass('bt_bb_map_location_show');}}
function onImagesLoaded(container,event){var images=container.find('.bt_bb_leaflet_map_content img');var loaded=images.length;if(loaded>0){for(var i=0;i<images.length;i++){if(images[i].complete){loaded--;if(loaded==0){event()}}else{images[i].addEventListener('load',function(){loaded--;if(loaded==0){event()}})}}}else{event()}}
var bt_bb_init_finished=!1;document.addEventListener('readystatechange',function(){if(!bt_bb_init_finished&&(document.readyState==='interactive'||document.readyState==='complete')){bt_bb_init_elements();if(!$('body').hasClass('bodyPreloader')){bt_bb_animate_elements()}else{setTimeout(function(){bt_bb_animate_elements()},5000)}
$(window).on('scroll',function(){bt_bb_animate_elements()});$(window).on('resize',function(e){setTimeout(function(){var $elems=$('.bt_bb_counter.animated');$elems.each(function(){var $elm=$(this);$elm.removeClass('animated');bt_bb_animate_counter($elm)})},1000)});bt_bb_init_finished=!0}},!1)}(jQuery));
var msBeautify=msBeautify||{};(function($){msBeautify={version:{msDropdown:'3.2'},author:"Marghoob Suleman",counter:20,debug:function(v){if(v!==!1){$(".ddOutOfVision").css({height:'auto',position:'relative'})}else{$(".ddOutOfVision").css({height:'0px',position:'relative'})}},oldDiv:'',create:function(id,settings,type){type=type||"dropdown";var data;switch(type.toLowerCase()){case "dropdown":case "select":data=$(id).msDropdown(settings).data("dd");break}
return data}};$.msDropDown={};$.msDropdown={};$.extend(!0,$.msDropDown,msBeautify);$.extend(!0,$.msDropdown,msBeautify);if($.fn.prop===undefined){$.fn.prop=$.fn.attr}
if($.fn.on===undefined){$.fn.on=$.fn.bind;$.fn.off=$.fn.unbind}
if(typeof $.expr.createPseudo==='function'){$.expr[':'].Contains=$.expr.createPseudo(function(arg){return function(elem){return $(elem).text().toUpperCase().indexOf(arg.toUpperCase())>=0}})}else{$.expr[':'].Contains=function(a,i,m){return $(a).text().toUpperCase().indexOf(m[3].toUpperCase())>=0}}
function dd(element,settings){var _settings=$.extend(!0,{byJson:{data:null,selectedIndex:0,name:null,size:0,multiple:!1,width:250},mainCSS:'dd',height:120,visibleRows:7,rowHeight:0,showIcon:!0,zIndex:9999,useSprite:!1,animStyle:'',event:'click',openDirection:'auto',jsonTitle:!1,style:'',disabledOpacity:0.7,disabledOptionEvents:!0,childWidth:0,enableCheckbox:!1,checkboxNameSuffix:'_mscheck',append:'',prepend:'',on:{create:null,open:null,close:null,add:null,remove:null,change:null,blur:null,click:null,dblclick:null,mousemove:null,mouseover:null,mouseout:null,focus:null,mousedown:null,mouseup:null}},settings);var _this=this;var _holderId={postElementHolder:'_msddHolder',postID:'_msdd',postTitleID:'_title',postTitleTextID:'_titleText',postChildID:'_child'};var _styles={dd:_settings.mainCSS,ddTitle:'ddTitle',arrow:'arrow arrowoff',ddChild:'ddChild',ddTitleText:'ddTitleText',disabled:'disabled',enabled:'enabled',ddOutOfVision:'ddOutOfVision',borderTop:'borderTop',noBorderTop:'noBorderTop',selected:'selected',divider:'divider',optgroup:"optgroup",optgroupTitle:"optgroupTitle",description:"description",label:"ddlabel",hover:'hover',disabledAll:'disabledAll'};var _styles_i={li:'_msddli_',borderRadiusTp:'borderRadiusTp',ddChildMore:'border shadow',fnone:"fnone"};var _isList=!1,_isMultiple=!1,_isDisabled=!1,_cacheElement={},_element,_orginial,_isOpen=!1;var DOWN_ARROW=40,UP_ARROW=38,LEFT_ARROW=37,RIGHT_ARROW=39,ESCAPE=27,ENTER=13,ALPHABETS_START=47,SHIFT=16,CONTROL=17;var _shiftHolded=!1,_controlHolded=!1,_lastTarget=null,_forcedTrigger=!1,_oldSelected,_isCreated=!1;var _doc=document;var _checkDataSetting=function(){_settings.mainCSS=$("#"+_element).data("maincss")||_settings.mainCSS;_settings.visibleRows=$("#"+_element).data("visiblerows")||_settings.visibleRows;if($("#"+_element).data("showicon")==!1){_settings.showIcon=$("#"+_element).data("showicon")};_settings.useSprite=$("#"+_element).data("usesprite")||_settings.useSprite;_settings.animStyle=$("#"+_element).data("animstyle")||_settings.animStyle;_settings.event=$("#"+_element).data("event")||_settings.event;_settings.openDirection=$("#"+_element).data("opendirection")||_settings.openDirection;_settings.jsonTitle=$("#"+_element).data("jsontitle")||_settings.jsonTitle;_settings.disabledOpacity=$("#"+_element).data("disabledopacity")||_settings.disabledOpacity;_settings.childWidth=$("#"+_element).data("childwidth")||_settings.childWidth;_settings.enableCheckbox=$("#"+_element).data("enablecheckbox")||_settings.enableCheckbox;_settings.checkboxNameSuffix=$("#"+_element).data("checkboxnamesuffix")||_settings.checkboxNameSuffix;_settings.append=$("#"+_element).data("append")||_settings.append;_settings.prepend=$("#"+_element).data("prepend")||_settings.prepend};var getElement=function(ele){if(_cacheElement[ele]===undefined){_cacheElement[ele]=_doc.getElementById(ele)}
return _cacheElement[ele]};var _getIndex=function(opt){var childid=_getPostID("postChildID");return $("#"+childid+" li."+_styles_i.li).index(opt)};var _createByJson=function(){if(_settings.byJson.data){var validData=["description","image","title"];try{if(!element.id){element.id="dropdown"+msBeautify.counter};_settings.byJson.data=eval(_settings.byJson.data);var id="msdropdown"+(msBeautify.counter++);var obj={};obj.id=id;obj.name=_settings.byJson.name||element.id;if(_settings.byJson.size>0){obj.size=_settings.byJson.size};obj.multiple=_settings.byJson.multiple;var oSelect=_createElement("select",obj);for(var i=0;i<_settings.byJson.data.length;i++){var current=_settings.byJson.data[i];var opt=new Option(current.text,current.value);for(var p in current){if(p.toLowerCase()!='text'){var key=($.inArray(p.toLowerCase(),validData)!=-1)?"data-":"";opt.setAttribute(key+p,current[p])}};oSelect.options[i]=opt};getElement(element.id).appendChild(oSelect);oSelect.selectedIndex=_settings.byJson.selectedIndex;$(oSelect).css({width:_settings.byJson.width+'px'});element=oSelect}catch(e){throw "There is an error in json data."}}};var _construct=function(){_createByJson();if(!element.id){element.id="msdrpdd"+(msBeautify.counter++)};_element=element.id;_this._element=_element;_checkDataSetting();_isDisabled=getElement(_element).disabled;var useCheckbox=_settings.enableCheckbox;if(Boolean(useCheckbox)===!0){getElement(_element).multiple=!0;_settings.enableCheckbox=!0};_isList=(getElement(_element).size>1||getElement(_element).multiple==!0)?!0:!1;if(_isList){_isMultiple=getElement(_element).multiple};_mergeAllProp();_createLayout();_updateProp("uiData",_getDataAndUI());_updateProp("selectedOptions",$("#"+_element+" option:selected"));var childid=_getPostID("postChildID");_oldSelected=$("#"+childid+" li."+_styles.selected)};var _getPostID=function(id){return _element+_holderId[id]};var _getInternalStyle=function(ele){var s=(ele.style===undefined)?"":ele.style.cssText;return s};var _parseOption=function(opt){var imagePath='',title='',description='',value=-1,text='',className='',imagecss='';if(opt!==undefined){var attrTitle=opt.title||"";if(attrTitle!=""){var reg=/^\{.*\}$/;var isJson=reg.test(attrTitle);if(isJson&&_settings.jsonTitle){var obj=eval("["+attrTitle+"]")};title=(isJson&&_settings.jsonTitle)?obj[0].title:title;description=(isJson&&_settings.jsonTitle)?obj[0].description:description;imagePath=(isJson&&_settings.jsonTitle)?obj[0].image:attrTitle;imagecss=(isJson&&_settings.jsonTitle)?obj[0].imagecss:imagecss};text=opt.text||'';value=opt.value||'';className=opt.className||"";title=$(opt).prop("data-title")||$(opt).data("title")||(title||"");description=$(opt).prop("data-description")||$(opt).data("description")||(description||"");imagePath=$(opt).prop("data-image")||$(opt).data("image")||(imagePath||"");imagecss=$(opt).prop("data-imagecss")||$(opt).data("imagecss")||(imagecss||"")};var o={image:imagePath,title:title,description:description,value:value,text:text,className:className,imagecss:imagecss};return o};var _createElement=function(nm,attr,html){var tag=_doc.createElement(nm);if(attr){for(var i in attr){switch(i){case "style":tag.style.cssText=attr[i];break;default:tag[i]=attr[i];break}}};if(html){tag.innerHTML=html};return tag};var _hideOriginal=function(){var hidid=_getPostID("postElementHolder");if($("#"+hidid).length==0){var obj={style:'height: 0px;overflow: hidden;position: relative;',className:_styles.ddOutOfVision};obj.id=hidid;var oDiv=_createElement("div",obj);$("#"+_element).after(oDiv);$("#"+_element).appendTo($("#"+hidid))}else{$("#"+hidid).css({height:0,overflow:'hidden',position:'relative'})}};var _createWrapper=function(){var obj={className:_styles.dd+" ddcommon borderRadius"};var styles=_getInternalStyle(getElement(_element));var w=$("#"+_element).outerWidth();if(styles.length>0){obj.style=obj.style+""+styles};obj.id=_getPostID("postID");var oDiv=_createElement("div",obj);return oDiv};var _createTitle=function(){var selectedOption;if(getElement(_element).selectedIndex>=0){selectedOption=getElement(_element).options[getElement(_element).selectedIndex]}else{selectedOption={value:'',text:''}}
var spriteClass="",selectedClass="";var useSprite=$("#"+_element).data("usesprite");if(useSprite){_settings.useSprite=useSprite};if(_settings.useSprite!=!1){spriteClass=" "+_settings.useSprite;selectedClass=" "+selectedOption.className};var oTitle=_createElement("div",{className:_styles.ddTitle+spriteClass+" "+_styles_i.borderRadiusTp});var oDivider=_createElement("span",{className:_styles.divider});var oArrow=_createElement("span",{className:_styles.arrow});var titleid=_getPostID("postTitleID");var oTitleText=_createElement("span",{className:_styles.ddTitleText+selectedClass,id:titleid});var parsed=_parseOption(selectedOption);var arrowPath=parsed.image;var sText=parsed.text||"";if(arrowPath!=""&&_settings.showIcon){var oIcon=_createElement("img");var oIconParent=_createElement("span",{className:"ddImage"});oIcon.src=arrowPath;if(parsed.imagecss!=""){oIcon.className=parsed.imagecss+" "}};var oTitleText_in=_createElement("span",{className:_styles.label},sText);oTitle.appendChild(oDivider);oTitle.appendChild(oArrow);if(oIcon){oIconParent.appendChild(oIcon);oTitleText.appendChild(oIconParent)};oTitleText.appendChild(oTitleText_in);oTitle.appendChild(oTitleText);var oDescription=_createElement("span",{className:_styles.description},parsed.description);oTitleText_in.appendChild(oDescription);return oTitle};var _createFilterBox=function(){var tid=_getPostID("postTitleTextID");var sText=_createElement("input",{id:tid,type:'text',value:'',autocomplete:'off',className:'text shadow borderRadius',style:'display: none'});return sText};var _createChild=function(opt){var obj={};var styles=_getInternalStyle(opt);if(styles.length>0){obj.style=styles};var css=(opt.disabled)?_styles.disabled:_styles.enabled;css=(opt.selected)?(css+" "+_styles.selected):css;css=css+" "+_styles_i.li;obj.className=css;if(_settings.useSprite!=!1){obj.className=css+" "+opt.className};var li=_createElement("li",obj);var parsed=_parseOption(opt);if(parsed.title!=""){li.title=parsed.title};var arrowPath=parsed.image;if(arrowPath!=""&&_settings.showIcon){var oIcon=_createElement("img");oIcon.src=arrowPath;var oIconParent=_createElement("span",{className:"ddImage"});if(parsed.imagecss!=""){oIcon.className=parsed.imagecss+" "}};if(parsed.description!=""){var oDescription=_createElement("span",{className:_styles.description},parsed.description)};var sText=opt.text||"";var oTitleText=_createElement("span",{className:_styles.label},sText);if(_settings.enableCheckbox===!0){var chkbox=_createElement("input",{type:'checkbox',name:_element+_settings.checkboxNameSuffix+'[]',value:opt.value||""});li.appendChild(chkbox);if(_settings.enableCheckbox===!0){chkbox.checked=(opt.selected)?!0:!1}};if(oIcon){oIconParent.appendChild(oIcon);li.appendChild(oIconParent)};li.appendChild(oTitleText);if(oDescription){oTitleText.appendChild(oDescription)}else{if(oIcon){oIcon.className=oIcon.className+_styles_i.fnone}};var oClear=_createElement("div",{className:'clear'});li.appendChild(oClear);return li};var _createChildren=function(){var childid=_getPostID("postChildID");var obj={className:_styles.ddChild+" ddchild_ "+_styles_i.ddChildMore,id:childid};if(_isList==!1){obj.style="z-index: "+_settings.zIndex}else{obj.style="z-index:1"};var childWidth=$("#"+_element).data("childwidth")||_settings.childWidth;if(childWidth){obj.style=(obj.style||"")+";width:"+childWidth};var oDiv=_createElement("div",obj);var ul=_createElement("ul");if(_settings.useSprite!=!1){ul.className=_settings.useSprite};var allOptions=getElement(_element).children;for(var i=0;i<allOptions.length;i++){var current=allOptions[i];var li;if(current.nodeName.toLowerCase()=="optgroup"){li=_createElement("li",{className:_styles.optgroup});var span=_createElement("span",{className:_styles.optgroupTitle},current.label);li.appendChild(span);var optChildren=current.children;var optul=_createElement("ul");for(var j=0;j<optChildren.length;j++){var opt_li=_createChild(optChildren[j]);optul.appendChild(opt_li)};li.appendChild(optul)}else{li=_createChild(current)};ul.appendChild(li)};oDiv.appendChild(ul);return oDiv};var _childHeight=function(val){var childid=_getPostID("postChildID");if(val){if(val==-1){$("#"+childid).css({height:"auto",overflow:"auto"})}else{$("#"+childid).css("height",val+"px")};return!1};var iHeight;if(getElement(_element).options.length>_settings.visibleRows){var margin=parseInt($("#"+childid+" li:first").css("padding-bottom"))+parseInt($("#"+childid+" li:first").css("padding-top"));if(_settings.rowHeight===0){$("#"+childid).css({visibility:'hidden',display:'block'});_settings.rowHeight=Math.round($("#"+childid+" li:first").height());$("#"+childid).css({visibility:'visible'});if(!_isList||_settings.enableCheckbox===!0){$("#"+childid).css({display:'none'})}};iHeight=((_settings.rowHeight+margin)*_settings.visibleRows)}else if(_isList){iHeight=$("#"+_element).height()};return iHeight};var _applyChildEvents=function(){var childid=_getPostID("postChildID");$("#"+childid).on("click",function(e){if(_isDisabled===!0)return!1;e.preventDefault();e.stopPropagation();if(_isList){_bind_on_events()}});$("#"+childid+" li."+_styles.enabled).on("click",function(e){if(e.target.nodeName.toLowerCase()!=="input"){_close(this)}});$("#"+childid+" li."+_styles.enabled).on("mousedown",function(e){if(_isDisabled===!0)return!1;_oldSelected=$("#"+childid+" li."+_styles.selected);_lastTarget=this;e.preventDefault();e.stopPropagation();if(_settings.enableCheckbox===!0){if(e.target.nodeName.toLowerCase()==="input"){_controlHolded=!0}};if(_isList===!0){if(_isMultiple){if(_shiftHolded===!0){$(this).addClass(_styles.selected);var selected=$("#"+childid+" li."+_styles.selected);var lastIndex=_getIndex(this);if(selected.length>1){var items=$("#"+childid+" li."+_styles_i.li);var ind1=_getIndex(selected[0]);var ind2=_getIndex(selected[1]);if(lastIndex>ind2){ind1=(lastIndex);ind2=ind2+1};for(var i=Math.min(ind1,ind2);i<=Math.max(ind1,ind2);i++){var current=items[i];if($(current).hasClass(_styles.enabled)){$(current).addClass(_styles.selected)}}}}else if(_controlHolded===!0){$(this).toggleClass(_styles.selected);if(_settings.enableCheckbox===!0){var checkbox=this.childNodes[0];checkbox.checked=!checkbox.checked}}else{$("#"+childid+" li."+_styles.selected).removeClass(_styles.selected);$("#"+childid+" input:checkbox").prop("checked",!1);$(this).addClass(_styles.selected);if(_settings.enableCheckbox===!0){this.childNodes[0].checked=!0}}}else{$("#"+childid+" li."+_styles.selected).removeClass(_styles.selected);$(this).addClass(_styles.selected)}}else{$("#"+childid+" li."+_styles.selected).removeClass(_styles.selected);$(this).addClass(_styles.selected)}});$("#"+childid+" li."+_styles.enabled).on("mouseenter",function(e){if(_isDisabled===!0)return!1;e.preventDefault();e.stopPropagation();if(_lastTarget!=null){if(_isMultiple){$(this).addClass(_styles.selected);if(_settings.enableCheckbox===!0){this.childNodes[0].checked=!0}}}});$("#"+childid+" li."+_styles.enabled).on("mouseover",function(e){if(_isDisabled===!0)return!1;$(this).addClass(_styles.hover)});$("#"+childid+" li."+_styles.enabled).on("mouseout",function(e){if(_isDisabled===!0)return!1;$("#"+childid+" li."+_styles.hover).removeClass(_styles.hover)});$("#"+childid+" li."+_styles.enabled).on("mouseup",function(e){if(_isDisabled===!0)return!1;e.preventDefault();e.stopPropagation();if(_settings.enableCheckbox===!0){_controlHolded=!1};var selected=$("#"+childid+" li."+_styles.selected).length;_forcedTrigger=(_oldSelected.length!=selected||selected==0)?!0:!1;_fireAfterItemClicked();_unbind_on_events();_bind_on_events();_lastTarget=null});if(_settings.disabledOptionEvents==!1){$("#"+childid+" li."+_styles_i.li).on("click",function(e){if(_isDisabled===!0)return!1;fireOptionEventIfExist(this,"click")});$("#"+childid+" li."+_styles_i.li).on("mouseenter",function(e){if(_isDisabled===!0)return!1;fireOptionEventIfExist(this,"mouseenter")});$("#"+childid+" li."+_styles_i.li).on("mouseover",function(e){if(_isDisabled===!0)return!1;fireOptionEventIfExist(this,"mouseover")});$("#"+childid+" li."+_styles_i.li).on("mouseout",function(e){if(_isDisabled===!0)return!1;fireOptionEventIfExist(this,"mouseout")});$("#"+childid+" li."+_styles_i.li).on("mousedown",function(e){if(_isDisabled===!0)return!1;fireOptionEventIfExist(this,"mousedown")});$("#"+childid+" li."+_styles_i.li).on("mouseup",function(e){if(_isDisabled===!0)return!1;fireOptionEventIfExist(this,"mouseup")})}};var _removeChildEvents=function(){var childid=_getPostID("postChildID");$("#"+childid).off("click");$("#"+childid+" li."+_styles.enabled).off("mouseenter");$("#"+childid+" li."+_styles.enabled).off("click");$("#"+childid+" li."+_styles.enabled).off("mouseover");$("#"+childid+" li."+_styles.enabled).off("mouseout");$("#"+childid+" li."+_styles.enabled).off("mousedown");$("#"+childid+" li."+_styles.enabled).off("mouseup")};var _applyEvents=function(){var id=_getPostID("postID");var childid=_getPostID("postChildID");$("#"+id).on(_settings.event,function(e){if(_isDisabled===!0)return!1;fireEventIfExist("click");e.preventDefault();e.stopPropagation();_open(e)});_applyChildEvents();$("#"+id).on("dblclick",on_dblclick);$("#"+id).on("mousemove",on_mousemove);$("#"+id).on("mouseenter",on_mouseover);$("#"+id).on("mouseleave",on_mouseout);$("#"+id).on("mousedown",on_mousedown);$("#"+id).on("mouseup",on_mouseup)};var _fixedForList=function(){var id=_getPostID("postID");var childid=_getPostID("postChildID");if(_isList===!0&&_settings.enableCheckbox===!1){$("#"+id+" ."+_styles.ddTitle).hide();$("#"+childid).css({display:'block',position:'relative'})}else{if(_settings.enableCheckbox===!1){_isMultiple=!1};$("#"+id+" ."+_styles.ddTitle).show();$("#"+childid).css({display:'none',position:'relative'});var first=$("#"+childid+" li."+_styles.selected)[0];$("#"+childid+" li."+_styles.selected).removeClass(_styles.selected);var index=_getIndex($(first).addClass(_styles.selected));_setValue(index)};_childHeight(_childHeight())};var _fixedForDisabled=function(){var id=_getPostID("postID");var opc=(_isDisabled==!0)?_settings.disabledOpacity:1;if(_isDisabled===!0){$("#"+id).addClass(_styles.disabledAll)}else{$("#"+id).removeClass(_styles.disabledAll)}};var _fixedSomeUI=function(){var tid=_getPostID("postTitleTextID");$("#"+tid).on("keyup",_applyFilters);_fixedForList();_fixedForDisabled()};var _createLayout=function(){var oDiv=_createWrapper();var oTitle=_createTitle();oDiv.appendChild(oTitle);var oFilterBox=_createFilterBox();oDiv.appendChild(oFilterBox);var oChildren=_createChildren();oDiv.appendChild(oChildren);$("#"+_element).after(oDiv);_hideOriginal();_fixedSomeUI();_applyEvents();var childid=_getPostID("postChildID");if(_settings.append!=''){$("#"+childid).append(_settings.append)};if(_settings.prepend!=''){$("#"+childid).prepend(_settings.prepend)};if(typeof _settings.on.create=="function"){_settings.on.create.apply(_this,arguments)}};var _selectMutipleOptions=function(bySelected){var childid=_getPostID("postChildID");var selected=bySelected||$("#"+childid+" li."+_styles.selected);for(var i=0;i<selected.length;i++){var ind=_getIndex(selected[i]);getElement(_element).options[ind].selected="selected"};_setValue(selected)};var _fireAfterItemClicked=function(){var childid=_getPostID("postChildID");var selected=$("#"+childid+" li."+_styles.selected);if(_isMultiple&&(_shiftHolded||_controlHolded)||_forcedTrigger){getElement(_element).selectedIndex=-1};var index;if(selected.length==0){index=-1}else if(selected.length>1){_selectMutipleOptions(selected)}else{index=_getIndex($("#"+childid+" li."+_styles.selected))};if((getElement(_element).selectedIndex!=index||_forcedTrigger)&&selected.length<=1){_forcedTrigger=!1;var evt=has_handler("change");getElement(_element).selectedIndex=index;_setValue(index);if(typeof _settings.on.change=="function"){var d=_getDataAndUI();_settings.on.change(d.data,d.ui)};$("#"+_element).trigger("change")}};var _setValue=function(index,byvalue){if(index!==undefined){var selectedIndex,value,selectedText;if(index==-1){selectedIndex=-1;value="";selectedText="";_updateTitleUI(-1)}else{if(typeof index!="object"){var opt=getElement(_element).options[index];getElement(_element).selectedIndex=index;selectedIndex=index;value=_parseOption(opt);selectedText=(index>=0)?getElement(_element).options[index].text:"";_updateTitleUI(undefined,value);value=value.value}else{selectedIndex=(byvalue&&byvalue.index)||getElement(_element).selectedIndex;value=(byvalue&&byvalue.value)||getElement(_element).value;selectedText=(byvalue&&byvalue.text)||getElement(_element).options[getElement(_element).selectedIndex].text||"";_updateTitleUI(selectedIndex)}};_updateProp("selectedIndex",selectedIndex);_updateProp("value",value);_updateProp("selectedText",selectedText);_updateProp("children",getElement(_element).children);_updateProp("uiData",_getDataAndUI());_updateProp("selectedOptions",$("#"+_element+" option:selected"))}};var has_handler=function(name){var evt={byElement:!1,byJQuery:!1,hasEvent:!1};var obj=$("#"+_element);try{if(obj.prop("on"+name)!==null){evt.hasEvent=!0;evt.byElement=!0}}catch(e){}
var evs;if(typeof $._data=="function"){evs=$._data(obj[0],"events")}else{evs=obj.data("events")};if(evs&&evs[name]){evt.hasEvent=!0;evt.byJQuery=!0};return evt};var _bind_on_events=function(){_unbind_on_events();$("body").on("click",_close);$(document).on("keydown",on_keydown);$(document).on("keyup",on_keyup)};var _unbind_on_events=function(){$("body").off("click",_close);$(document).off("keydown",on_keydown);$(document).off("keyup",on_keyup)};var _applyFilters=function(){var childid=_getPostID("postChildID");var tid=_getPostID("postTitleTextID");var sText=getElement(tid).value;if(sText.length==0){$("#"+childid+" li:hidden").show();_childHeight(_childHeight())}else{$("#"+childid+" li").hide();$("#"+childid+" li:Contains('"+sText+"')").show();if($("#"+childid+" li:visible").length<=_settings.visibleRows){_childHeight(-1)}}};var _showFilterBox=function(){var tid=_getPostID("postTitleTextID");if($("#"+tid+":hidden").length>0&&_controlHolded==!1){$("#"+tid+":hidden").show().val("");getElement(tid).focus()}};var _hideFilterBox=function(){var tid=_getPostID("postTitleTextID");if($("#"+tid+":visible").length>0){$("#"+tid+":visible").hide();getElement(tid).blur()}};var on_keydown=function(evt){var tid=_getPostID("postTitleTextID");var childid=_getPostID("postChildID");switch(evt.keyCode){case DOWN_ARROW:case RIGHT_ARROW:evt.preventDefault();evt.stopPropagation();_next();break;case UP_ARROW:case LEFT_ARROW:evt.preventDefault();evt.stopPropagation();_previous();break;case ESCAPE:case ENTER:evt.preventDefault();evt.stopPropagation();_close();var selected=$("#"+childid+" li."+_styles.selected).length;_forcedTrigger=(_oldSelected.length!=selected||selected==0)?!0:!1;_fireAfterItemClicked();_unbind_on_events();_lastTarget=null;break;case SHIFT:_shiftHolded=!0;break;case CONTROL:_controlHolded=!0;break;default:if(evt.keyCode>=ALPHABETS_START&&_isList===!1){};break};if(_isDisabled===!0)return!1;fireEventIfExist("keydown")};var on_keyup=function(evt){switch(evt.keyCode){case SHIFT:_shiftHolded=!1;break;case CONTROL:_controlHolded=!1;break};if(_isDisabled===!0)return!1;fireEventIfExist("keyup")};var on_dblclick=function(evt){if(_isDisabled===!0)return!1;fireEventIfExist("dblclick")};var on_mousemove=function(evt){if(_isDisabled===!0)return!1;fireEventIfExist("mousemove")};var on_mouseover=function(evt){if(_isDisabled===!0)return!1;evt.preventDefault();fireEventIfExist("mouseover")};var on_mouseout=function(evt){if(_isDisabled===!0)return!1;evt.preventDefault();fireEventIfExist("mouseout")};var on_mousedown=function(evt){if(_isDisabled===!0)return!1;fireEventIfExist("mousedown")};var on_mouseup=function(evt){if(_isDisabled===!0)return!1;fireEventIfExist("mouseup")};var option_has_handler=function(opt,name){var evt={byElement:!1,byJQuery:!1,hasEvent:!1};if($(opt).prop("on"+name)!=undefined){evt.hasEvent=!0;evt.byElement=!0};var evs=$(opt).data("events");if(evs&&evs[name]){evt.hasEvent=!0;evt.byJQuery=!0};return evt};var fireOptionEventIfExist=function(li,evt_n){if(_settings.disabledOptionEvents==!1){var opt=getElement(_element).options[_getIndex(li)];if(option_has_handler(opt,evt_n).hasEvent===!0){if(option_has_handler(opt,evt_n).byElement===!0){opt["on"+evt_n]()};if(option_has_handler(opt,evt_n).byJQuery===!0){switch(evt_n){case "keydown":case "keyup":break;default:$(opt).trigger(evt_n);break}};return!1}}};var fireEventIfExist=function(evt_n){if(typeof _settings.on[evt_n]=="function"){_settings.on[evt_n].apply(this,arguments)};if(has_handler(evt_n).hasEvent===!0){if(has_handler(evt_n).byElement===!0){getElement(_element)["on"+evt_n]()};if(has_handler(evt_n).byJQuery===!0){switch(evt_n){case "keydown":case "keyup":break;default:$("#"+_element).trigger(evt_n);break}};return!1}};var _scrollToIfNeeded=function(opt){var childid=_getPostID("postChildID");opt=(opt!==undefined)?opt:$("#"+childid+" li."+_styles.selected);if(opt.length>0){var pos=parseInt(($(opt).position().top));var ch=parseInt($("#"+childid).height());if(pos>ch){var top=pos+$("#"+childid).scrollTop()-(ch/2);$("#"+childid)}}};var _next=function(){var childid=_getPostID("postChildID");var items=$("#"+childid+" li:visible."+_styles_i.li);var selected=$("#"+childid+" li:visible."+_styles.selected);selected=(selected.length==0)?items[0]:selected;var index=$("#"+childid+" li:visible."+_styles_i.li).index(selected);if((index<items.length-1)){index=getNext(index);if(index<items.length){if(!_shiftHolded||!_isList||!_isMultiple){$("#"+childid+" ."+_styles.selected).removeClass(_styles.selected)};$(items[index]).addClass(_styles.selected);_updateTitleUI(index);if(_isList==!0){_fireAfterItemClicked()};_scrollToIfNeeded($(items[index]))};if(!_isList){_adjustOpen()}};function getNext(ind){ind=ind+1;if(ind>items.length){return ind};if($(items[ind]).hasClass(_styles.enabled)===!0){return ind};return ind=getNext(ind)}};var _previous=function(){var childid=_getPostID("postChildID");var selected=$("#"+childid+" li:visible."+_styles.selected);var items=$("#"+childid+" li:visible."+_styles_i.li);var index=$("#"+childid+" li:visible."+_styles_i.li).index(selected[0]);if(index>=0){index=getPrev(index);if(index>=0){if(!_shiftHolded||!_isList||!_isMultiple){$("#"+childid+" ."+_styles.selected).removeClass(_styles.selected)};$(items[index]).addClass(_styles.selected);_updateTitleUI(index);if(_isList==!0){_fireAfterItemClicked()};if(parseInt(($(items[index]).position().top+$(items[index]).height()))<=0){var top=($("#"+childid).scrollTop()-$("#"+childid).height())-$(items[index]).height();$("#"+childid)}};if(!_isList){_adjustOpen()}};function getPrev(ind){ind=ind-1;if(ind<0){return ind};if($(items[ind]).hasClass(_styles.enabled)===!0){return ind};return ind=getPrev(ind)}};var _adjustOpen=function(){var id=_getPostID("postID");var childid=_getPostID("postChildID");var pos=$("#"+id).offset();var mH=$("#"+id).height();var wH=$(window).height();var st=$(window).scrollTop();var cH=$("#"+childid).height();var top=$("#"+id).height();var contBottom=$("#"+id).closest('.btQuoteBooking').offset().top+$("#"+id).closest('.btQuoteBooking').height();if(contBottom<Math.floor(cH+mH+pos.top)||_settings.openDirection.toLowerCase()=='alwaysup'){top=cH;$("#"+childid).css({top:"-"+top+"px",display:'block',zIndex:_settings.zIndex});$("#"+id).removeClass("borderRadius borderRadiusTp").addClass("borderRadiusBtm");var top=$("#"+childid).offset().top;if(top<-10){$("#"+childid).css({top:(parseInt($("#"+childid).css("top"))-top+20+st)+"px",zIndex:_settings.zIndex});$("#"+id).removeClass("borderRadiusBtm borderRadiusTp").addClass("borderRadius")}}else{$("#"+childid).css({top:top+"px",zIndex:_settings.zIndex});$("#"+id).removeClass("borderRadius borderRadiusBtm").addClass("borderRadiusTp")}};var _open=function(e){if(_isDisabled===!0)return!1;var id=_getPostID("postID");var childid=_getPostID("postChildID");if(!_isOpen){_isOpen=!0;if(msBeautify.oldDiv!=''){$("#"+msBeautify.oldDiv).css({display:"none"})};msBeautify.oldDiv=childid;$("#"+childid+" li:hidden").show();_adjustOpen();var animStyle=_settings.animStyle;if(animStyle==""||animStyle=="none"){$("#"+childid).css({display:"block"});_scrollToIfNeeded();if(typeof _settings.on.open=="function"){var d=_getDataAndUI();_settings.on.open(d.data,d.ui)}}else{$("#"+childid)[animStyle]("fast",function(){_scrollToIfNeeded();if(typeof _settings.on.open=="function"){var d=_getDataAndUI();_settings.on.open(d.data,d.ui)}})};_bind_on_events()}else{if(_settings.event!=='mouseover'){_close()}}};var _close=function(e){_isOpen=!1;var id=_getPostID("postID");var childid=_getPostID("postChildID");if(_isList===!1||_settings.enableCheckbox===!0){$("#"+childid).css({display:"none"});$("#"+id).removeClass("borderRadiusTp borderRadiusBtm").addClass("borderRadius")};_unbind_on_events();if(typeof _settings.on.close=="function"){var d=_getDataAndUI();_settings.on.close(d.data,d.ui)};_hideFilterBox();_childHeight(_childHeight());$("#"+childid).css({zIndex:1})};var _mergeAllProp=function(){_orginial=$.extend(!0,{},getElement(_element));for(var i in _orginial){if(typeof _orginial[i]!="function"){_this[i]=_orginial[i]}};_this.selectedText=(_orginial.selectedIndex>=0)?_orginial.options[_orginial.selectedIndex].text:"";_this.version=msBeautify.version.msDropdown;_this.author=msBeautify.author};var _getDataAndUIByOption=function(opt){if(opt!=null&&typeof opt!="undefined"){var childid=_getPostID("postChildID");var data=_parseOption(opt);var ui=$("#"+childid+" li."+_styles_i.li+":eq("+(opt.index)+")");return{data:data,ui:ui,option:opt,index:opt.index}};return null};var _getDataAndUI=function(){var childid=_getPostID("postChildID");var ele=getElement(_element);var data,ui,option,index;if(ele.selectedIndex==-1){data=null;ui=null;option=null;index=-1}else{ui=$("#"+childid+" li."+_styles.selected);if(ui.length>1){var d=[],op=[],ind=[];for(var i=0;i<ui.length;i++){var pd=_getIndex(ui[i]);d.push(pd);op.push(ele.options[pd])};data=d;option=op;index=d}else{option=ele.options[ele.selectedIndex];data=_parseOption(option);index=ele.selectedIndex}};return{data:data,ui:ui,index:index,option:option}};var _updateTitleUI=function(index,byvalue){var titleid=_getPostID("postTitleID");var value={};if(index==-1){value.text="&nbsp;";value.className="";value.description="";value.image=""}else if(typeof index!="undefined"){var opt=getElement(_element).options[index];value=_parseOption(opt)}else{value=byvalue};$("#"+titleid).find("."+_styles.label).html(value.text);var textnode=document.createTextNode(value.description);var desc=_createElement("span",{className:_styles.description});desc.appendChild(textnode);$("#"+titleid).find("."+_styles.description).remove();$("#"+titleid).find("."+_styles.label).append(desc);getElement(titleid).className=_styles.ddTitleText+" "+value.className;$("#"+titleid).removeClass('btNotSelected');$("#"+titleid).closest('.btContactField').removeClass('btNotSelected');if(value.value==''){$("#"+titleid).addClass('btNotSelected');$("#"+titleid).closest('.btContactField').addClass('btNotSelected')}
if(value.description!=""){$("#"+titleid).find("."+_styles.description).html(value.description).show()}else{$("#"+titleid).find("."+_styles.description).html("").hide()};var img=$("#"+titleid).find("img");if(img.length>0){$(img).parent().remove()};if(value.image!=""&&_settings.showIcon){img=_createElement("img",{src:value.image});var imgParent=_createElement("span",{className:"ddImage"});imgParent.appendChild(img);$("#"+titleid).prepend(imgParent);if(value.imagecss!=""){img.className=value.imagecss+" "};if(value.description==""){img.className=img.className+_styles_i.fnone}}};var _updateProp=function(p,v){_this[p]=v};var _updateUI=function(a,opt,i){var childid=_getPostID("postChildID");var wasSelected=!1;switch(a){case "add":var li=_createChild(opt||getElement(_element).options[i]);var index;if(arguments.length==3){index=i}else{index=$("#"+childid+" li."+_styles_i.li).length-1};if(index<0||!index){$("#"+childid+" ul").append(li)}else{var at=$("#"+childid+" li."+_styles_i.li)[index];$(at).before(li)};_removeChildEvents();_applyChildEvents();if(_settings.on.add!=null){_settings.on.add.apply(this,arguments)};break;case "remove":wasSelected=$($("#"+childid+" li."+_styles_i.li)[i]).hasClass(_styles.selected);$("#"+childid+" li."+_styles_i.li+":eq("+i+")").remove();var items=$("#"+childid+" li."+_styles.enabled);if(wasSelected==!0){if(items.length>0){$(items[0]).addClass(_styles.selected);var ind=$("#"+childid+" li."+_styles_i.li).index(items[0]);_setValue(ind)}};if(items.length==0){_setValue(-1)};if($("#"+childid+" li."+_styles_i.li).length<_settings.visibleRows&&!_isList){_childHeight(-1)};if(_settings.on.remove!=null){_settings.on.remove.apply(this,arguments)};break}};this.act=function(){var action=arguments[0];Array.prototype.shift.call(arguments);switch(action){case "add":_this.add.apply(this,arguments);break;case "remove":_this.remove.apply(this,arguments);break;default:try{getElement(_element)[action].apply(getElement(_element),arguments)}catch(e){};break}};this.add=function(){var text,value,title,image,description;var obj=arguments[0];if(typeof obj=="string"){text=obj;value=text;opt=new Option(text,value)}else{text=obj.text||'';value=obj.value||text;title=obj.title||'';image=obj.image||'';description=obj.description||'';opt=new Option(text,value);$(opt).data("description",description);$(opt).data("image",image);$(opt).data("title",title)};arguments[0]=opt;getElement(_element).add.apply(getElement(_element),arguments);_updateProp("children",getElement(_element)["children"]);_updateProp("length",getElement(_element).length);_updateUI("add",opt,arguments[1])};this.remove=function(i){getElement(_element).remove(i);_updateProp("children",getElement(_element)["children"]);_updateProp("length",getElement(_element).length);_updateUI("remove",undefined,i)};this.set=function(prop,val){if(typeof prop=="undefined"||typeof val=="undefined")return!1;prop=prop.toString();try{_updateProp(prop,val)}catch(e){};switch(prop){case "size":getElement(_element)[prop]=val;if(val==0){getElement(_element).multiple=!1};_isList=(getElement(_element).size>1||getElement(_element).multiple==!0)?!0:!1;_fixedForList();break;case "multiple":getElement(_element)[prop]=val;_isList=(getElement(_element).size>1||getElement(_element).multiple==!0)?!0:!1;_isMultiple=getElement(_element).multiple;_fixedForList();_updateProp(prop,val);break;case "disabled":getElement(_element)[prop]=val;_isDisabled=val;_fixedForDisabled();break;case "selectedIndex":case "value":getElement(_element)[prop]=val;var childid=_getPostID("postChildID");$("#"+childid+" li."+_styles_i.li).removeClass(_styles.selected);$($("#"+childid+" li."+_styles_i.li)[getElement(_element).selectedIndex]).addClass(_styles.selected);_setValue(getElement(_element).selectedIndex);break;case "length":var childid=_getPostID("postChildID");if(val<getElement(_element).length){getElement(_element)[prop]=val;if(val==0){$("#"+childid+" li."+_styles_i.li).remove();_setValue(-1)}else{$("#"+childid+" li."+_styles_i.li+":gt("+(val-1)+")").remove();if($("#"+childid+" li."+_styles.selected).length==0){$("#"+childid+" li."+_styles.enabled+":eq(0)").addClass(_styles.selected)}};_updateProp(prop,val);_updateProp("children",getElement(_element)["children"])};break;case "id":break;default:try{getElement(_element)[prop]=val;_updateProp(prop,val)}catch(e){};break}};this.get=function(prop){return _this[prop]||getElement(_element)[prop]};this.visible=function(val){var id=_getPostID("postID");if(val===!0){$("#"+id).show()}else if(val===!1){$("#"+id).hide()}else{return($("#"+id).css("display")=="none")?!1:!0}};this.debug=function(v){msBeautify.debug(v)};this.close=function(){_close()};this.open=function(){_open()};this.showRows=function(r){if(typeof r=="undefined"||r==0){return!1};_settings.visibleRows=r;_childHeight(_childHeight())};this.visibleRows=this.showRows;this.on=function(type,fn){$("#"+_element).on(type,fn)};this.off=function(type,fn){$("#"+_element).off(type,fn)};this.addMyEvent=this.on;this.getData=function(){return _getDataAndUI()};this.namedItem=function(){var opt=getElement(_element).namedItem.apply(getElement(_element),arguments);return _getDataAndUIByOption(opt)};this.item=function(){var opt=getElement(_element).item.apply(getElement(_element),arguments);return _getDataAndUIByOption(opt)};this.setIndexByValue=function(val){this.set("value",val)};this.destory=function(){var hidid=_getPostID("postElementHolder");var id=_getPostID("postID");$("#"+id+", #"+id+" *").off();$("#"+id).remove();$("#"+_element).parent().replaceWith($("#"+_element));$("#"+_element).data("dd",null)};_construct()};$.fn.extend({msDropDown:function(settings){return this.each(function(){if(!$(this).data('dd')){var mydropdown=new dd(this,settings);$(this).data('dd',mydropdown)}})}});$.fn.msDropdown=$.fn.msDropDown})(jQuery);
'use strict';(function($){var total;var is_rtl=!1;var rtl_direction=1;window.bt_cc_subtotal=';var setSubtotal = function( id, val, ignore_format ) {'+'if ( arguments.length < 2 || ! jQuery( "#btSubtotalId"+id ) ) return;'+'var c = jQuery( "#btSubtotalId" + id ).closest( ".btQuoteBooking" );'+'if ( ignore_format !== true ) val = bt_cc_currency_format( c, val );'+'var currency = c.data( "currency" );'+'var currency_after = c.data( "currency_after" );'+'var currency_space = c.data( "currency_space" );'+'var hide_total = c.data( "hide_total" );'+'if ( currency != "" && ignore_format !== true ) {'+'if ( currency_after == "yes" ) {'+'if ( currency_space == "yes" ) {'+'val = val + " " + currency;'+'} else {'+'val = val + currency;'+'}'+'} else {'+'if ( currency_space == "yes" ) {'+'val = currency + " " + val;'+'} else {'+'val = currency + val;'+'}'+'}'+'}'+'jQuery( "#btSubtotalId" + id ).data( "val", val );'+'if ( hide_total == "yes" ) {'+'jQuery( "#btSubtotalId" + id ).hide();'+'return;'+'}'+'jQuery( "#btSubtotalId" + id ).find( ".btQuoteSubtotalCalc" ).html( val );'+'};';window.bt_parse_float=function(x){var r=parseFloat(x);if(isNaN(r))r=0;return r}
$.fn.bt_cc_lock=function(){$(this).addClass('btCCLock');return $(this)}
$.fn.bt_cc_unlock=function(){$(this).removeClass('btCCLock');return $(this)}
window.bt_cc_set_slider_value=function(elem,value,calc){if(elem.slider('instance')){elem.slider('value',value);elem.find('.btQuoteSliderValue').html(value);if(calc){bt_quote_total(elem.closest('.btQuoteBooking'));bt_paypal_items(elem.closest('.btQuoteBooking'))}}}
window.bt_cc_get_slider_value=function(elem){if(elem.slider('instance')){var val=bt_parse_float(elem.find('.btQuoteSliderValue').html())}else{var val=bt_parse_float(elem.data('initial-value'))}
return val}
$.fn.bt_cc_set_value=function(value){if(value!==null&&value!=='undefined'&&value!==undefined){var initial_value=value}else{var initial_value=$(this).find('.btQuoteElement').data('initial-value')}
if($(this).find('.btQuoteItemInput > .btQuoteSelect').length>0){var oDropdown=$(this).find('.btQuoteSelect').data("dd");if(oDropdown!==undefined){bt_cc_init_dropdown(oDropdown,"#"+$(this).attr('id'),initial_value)}}else if($(this).find('.btQuoteItemInput > .btQuoteSlider').length>0){if($(this).find('.btQuoteItemInput > .btQuoteSlider').slider('instance')){bt_cc_set_slider_value($(this).find('.btQuoteItemInput > .btQuoteSlider'),initial_value)}else{setTimeout(bt_cc_set_slider_value,2000,$(this).find('.btQuoteItemInput > .btQuoteSlider'),initial_value,!0)}}else if($(this).find('.btQuoteItemInput > .btQuoteText').length>0){$(this).find('.btQuoteText').val(initial_value)}else if($(this).find('.btQuoteItemInput > .btQuoteSwitch').length>0){if(($(this).find('.btQuoteSwitch').data('on')==initial_value&&!$(this).find('.btQuoteSwitch').hasClass('on'))||($(this).find('.btQuoteSwitch').data('off')==initial_value&&$(this).find('.btQuoteSwitch').hasClass('on'))){$(this).find('.btQuoteSwitch').trigger('click')}}
bt_cc_eval_conditions(initial_value,$(this).find('.btQuoteElement').data('condition'));bt_quote_total($(this).closest('.btQuoteBooking'));bt_paypal_items($(this).closest('.btQuoteBooking'));return $(this)}
window.bt_cc_eval_conditions=function(val,conditions){if(conditions==''||conditions==undefined)return!1;if(val=='')val=0;if(conditions.indexOf(';')==-1){conditions=atob(conditions);var bt_cc_conditions=conditions.split(/\r?\n/)}else{var bt_cc_conditions=conditions.split("#bt_cc_nl#")}
$.each(bt_cc_conditions,function(index,value){if(bt_cc_conditions[index]!=undefined){var bt_cc_single_condition=bt_cc_conditions[index].split(";");var eval_action=bt_cc_single_condition[2];if(bt_cc_single_condition[3]=='lock'){eval_action+='.bt_cc_lock()'}else if(bt_cc_single_condition[3]=='unlock'){eval_action+='.bt_cc_unlock()'}
if(bt_cc_single_condition[0]!=''){var eval_code='if ( '+val+decodeURIComponent(bt_cc_single_condition[0])+' ) { $(\'#'+bt_cc_single_condition[1]+'\').'+eval_action+'; }';eval(eval_code)}}});return!1}
window.bt_paypal_items=function(c){$(c).each(function(){if($(this).find('.btPayPalButton').length>0){var form=$(this).find('.btPayPalButton').next();form.find('.btPayPalItem').remove();var x=0;$(this).find('.btQuoteBookingForm').find('.btQuoteItem').not('.btQuoteMBlock .btQuoteItem').not('.btQuoteGBlock .btQuoteItem').each(function(){var unit_price=0;var val=0;var selected_name='';$(this).find('.btQuoteText').each(function(){unit_price=bt_parse_float($(this).data('price'));val=bt_parse_float($(this).val())});$(this).find('.btQuoteSelect').find('._msddli_.selected').each(function(){unit_price=bt_parse_float($(this).data('value'));val=1;selected_name=$(this).find('.ddlabel')[0].innerHTML;if($(this).is(':first-child')){selected_name=''}});var is_slider=!1;$(this).find('.btQuoteSlider').each(function(){unit_price=bt_parse_float($(this).data('price'));val=bt_cc_get_slider_value($(this));is_slider=!0});$(this).find('.btQuoteSwitch').each(function(){if($(this).hasClass('on')){unit_price=bt_parse_float($(this).data('on'))}else{unit_price=bt_parse_float($(this).data('off'))}
val=1});var label=$(this).find('label').html();if(is_slider){label=label+': '+val}
if(selected_name!=''){selected_name=selected_name.replace('<span class="description">','/');selected_name=selected_name.replace('</span>','');if(label.endsWith('?')||label.endsWith(':')){label=label+' '+selected_name}else{label=label+': '+selected_name}}
val=val*unit_price;if(label!==undefined&&val>0){x++;val=val.toFixed(2);form.append('<input type="hidden" name="item_name_'+x+'" value="'+label+'" class="btPayPalItem"><input type="hidden" name="amount_'+x+'" value="'+val+'" class="btPayPalItem">')}});$(this).find('.btQuoteBookingForm').find('.btQuoteMBlock').each(function(){var m_total=1;var m_first=!0;var m_val=0;var selected_name='';var label='';$(this).find('.btQuoteItem').each(function(){$(this).find('.btQuoteText').each(function(){var unit_price=bt_parse_float($(this).data('price'));var val=bt_parse_float($(this).val());val=val*unit_price;if(m_first){m_val=val;label=$(this).closest('.btQuoteItem').find('label').html()}else{m_total*=val}
m_first=!1});$(this).find('.btQuoteSelect').find('._msddli_.selected').each(function(){var val=bt_parse_float($(this).data('value'));if(m_first){m_val=val;label=$(this).closest('.btQuoteItem').find('label').html();selected_name=$(this).find('.ddlabel')[0].innerHTML;selected_name=selected_name.substring(0,selected_name.indexOf('<span'));if($(this).is(':first-child')){selected_name=''}
if(selected_name!='')label=label+': '+selected_name}else{m_total*=val}
m_first=!1});$(this).find('.btQuoteSlider').each(function(){var unit_price=bt_parse_float($(this).data('price'));var val=bt_cc_get_slider_value($(this));val=val*unit_price;if(m_first){m_val=val;label=$(this).closest('.btQuoteItem').find('label').html()}else{m_total*=val}
m_first=!1});$(this).find('.btQuoteSwitch').each(function(){if($(this).hasClass('on')){var val=bt_parse_float($(this).data('on'))}else{var val=bt_parse_float($(this).data('off'))}
if(m_first){m_val=val;label=$(this).closest('.btQuoteItem').find('label').html()}else{m_total*=val}
m_first=!1})});if(m_total>0&&m_val>0){x++;m_val=m_val.toFixed(2);form.append('<input type="hidden" name="item_name_'+x+'" value="'+label+'" class="btPayPalItem"><input type="hidden" name="amount_'+x+'" value="'+m_val+'" class="btPayPalItem"><input type="hidden" name="quantity_'+x+'" value="'+m_total+'" class="btPayPalItem">')}});$(this).find('.btQuoteBookingForm').find('.btQuoteGBlock').each(function(){var eval_code=$(this).data('eval');var paypal_label=$(this).data('paypal_label');var group_array=[];$(this).find('.btQuoteItem').each(function(){var val;$(this).find('.btQuoteText').each(function(){var unit_price=bt_parse_float($(this).data('price'));val=bt_parse_float($(this).val());val=val*unit_price});$(this).find('.btQuoteSelect').find('._msddli_.selected').each(function(){val=bt_parse_float($(this).data('value'))});$(this).find('.btQuoteSlider').each(function(){var unit_price=bt_parse_float($(this).data('price'));val=bt_cc_get_slider_value($(this));val=val*unit_price});$(this).find('.btQuoteSwitch').each(function(){if($(this).hasClass('on')){val=bt_parse_float($(this).data('on'))}else{val=bt_parse_float($(this).data('off'))}});group_array.push(val)});var patt=/\$\d+/igm;var match=eval_code.match(patt);if(match===null){eval_code=atob(eval_code);match=eval_code.match(patt)}
if(match===null){return}
for(var i=0;i<match.length;i++){eval_code=eval_code.replace(match[i],group_array[i])}
eval_code=window.bt_cc_subtotal+eval_code;var g_total=eval('(function() {'+decodeURIComponent(eval_code)+'}())');if(paypal_label!=''&&g_total>0){x++;g_total=g_total.toFixed(2);form.append('<input type="hidden" name="item_name_'+x+'" value="'+paypal_label+'" class="btPayPalItem"><input type="hidden" name="amount_'+x+'" value="'+g_total+'" class="btPayPalItem"><input type="hidden" name="quantity_'+x+'" value="1" class="btPayPalItem">')}})}})}
window.bt_cc_currency_format=function(c,n){var regex=/(\d)(?=(\d{3})+\.)/g;var regex_replace='$1,';Number.prototype.toNumberFormat=function(t,r,e){r=r||".",e=e||"";var o=this.toFixed(t).split(".");return o[0]=o[0].replace(/\B(?=(\d{3})+(?!\d))/g,e),o.join(r)};var format=c.data('total_format');var decimals=c.data('total_decimals');if(format=='currency_1'||format=='currency_2'||format=='currency_3'){var ts=',';var ds='.';if(format=='currency_2'){var ts='.';var ds=','}
if(format=='currency_3'){var ts=' ';var ds=','}
n=n.toNumberFormat(decimals,ds,ts)}else if(format=='decimal_1'||format=='decimal_2'){var ds='.';var ts='';if(format=='decimal_2'){var ds=','}
n=n.toNumberFormat(decimals,ds,ts)}else if(format=='rounded'){n=Math.round(n)}
return n}
window.bt_quote_total=function(c){var c=$(c);total=0;c.find('.btQuoteText').not('.btQuoteMBlock .btQuoteText').not('.btQuoteGBlock .btQuoteText').each(function(){var unit_price=bt_parse_float($(this).data('price'));var val=bt_parse_float($(this).val());val=val*unit_price;total+=val});c.find('.btQuoteSelect').not('.btQuoteMBlock .btQuoteSelect').not('.btQuoteGBlock .btQuoteSelect').find('._msddli_.selected').each(function(){var val=bt_parse_float($(this).data('value'));total+=val});c.find('.btQuoteSlider').not('.btQuoteMBlock .btQuoteSlider').not('.btQuoteGBlock .btQuoteSlider').each(function(){var unit_price=bt_parse_float($(this).data('price'));var offset=bt_parse_float($(this).data('offset'));var val=bt_cc_get_slider_value($(this));val=val*unit_price;total+=val;if(!$(this).closest('.btQuoteBooking').find('.btPayPalButton').length>0){total+=offset}});c.find('.btQuoteSwitch').not('.btQuoteMBlock .btQuoteSwitch').not('.btQuoteGBlock .btQuoteSwitch').each(function(){if($(this).hasClass('on')){total+=bt_parse_float($(this).data('on'))}else{total+=bt_parse_float($(this).data('off'))}});c.find('.btQuoteMBlock').each(function(){var m_total=0;var m_first=!0;$(this).find('.btQuoteText').each(function(){var unit_price=bt_parse_float($(this).data('price'));var val=bt_parse_float($(this).val());val=val*unit_price;if(m_first){m_total=val}else{m_total*=val}
m_first=!1});$(this).find('.btQuoteSelect').find('._msddli_.selected').each(function(){var val=bt_parse_float($(this).data('value'));if(m_first){m_total=val}else{m_total*=val}
m_first=!1});$(this).find('.btQuoteSlider').each(function(){var unit_price=bt_parse_float($(this).data('price'));var offset=bt_parse_float($(this).data('offset'));var val=bt_cc_get_slider_value($(this));val=val*unit_price;if(m_first){m_total=val}else{m_total*=val}
m_total+=offset;m_first=!1});$(this).find('.btQuoteSwitch').each(function(){if($(this).hasClass('on')){var val=bt_parse_float($(this).data('on'))}else{var val=bt_parse_float($(this).data('off'))}
if(m_first){m_total=val}else{m_total*=val}
m_first=!1});total+=m_total});c.find('.btQuoteGBlock').each(function(){var eval_code=$(this).data('eval');var group_array=[];$(this).find('.btQuoteItem .btQuoteItemInput').each(function(){var val=0;$(this).find('.btQuoteText').each(function(){var unit_price=bt_parse_float($(this).data('price'));val=bt_parse_float($(this).val());val=val*unit_price});$(this).find('.btQuoteSelect').find('._msddli_.selected').each(function(){val=bt_parse_float($(this).data('value'))});$(this).find('.btQuoteSlider').each(function(){var unit_price=bt_parse_float($(this).data('price'));var offset=bt_parse_float($(this).data('offset'));val=bt_cc_get_slider_value($(this));val=val*unit_price});$(this).find('.btQuoteSwitch').each(function(){if($(this).hasClass('on')){val=bt_parse_float($(this).data('on'))}else{val=bt_parse_float($(this).data('off'))}});group_array.push(val)});var patt=/\$\d+/igm;var match=eval_code.match(patt);if(match===null){eval_code=atob(eval_code);match=eval_code.match(patt)}
if(match===null){return}
for(var i=0;i<match.length;i++){eval_code=eval_code.replace(match[i],group_array[i])}
eval_code=window.bt_cc_subtotal+eval_code;var g_total=eval('(function() {'+decodeURIComponent(eval_code)+'}())');total+=g_total});total=bt_cc_currency_format(c,total);c.find('.btQuoteTotalCalc').html(total);c.data('total',total)}
window.bt_cc_init_dropdown=function(elem,id,index){elem.set("selectedIndex",index);var ui2=$(id).find('._msddli_.selected');var val=elem.getData().data.value;ui2.data('value',val);bt_cc_eval_conditions(val,ui2.closest('.btQuoteSelect').data('condition'));bt_quote_total(ui2.closest('.btQuoteBooking'));bt_paypal_items(ui2.closest('.btQuoteBooking'))}
window.bt_cc_init=function(){$(".btQuoteBooking").each(function(index){var c=$(this);setTimeout(function(){c.css('opacity','1')},200);c.find('.btContactDate').datepicker({prevText:window.bt_cc_translate.prev,nextText:window.bt_cc_translate.next,dateFormat:c.data('date_format'),dayNamesMin:[window.bt_cc_translate.su,window.bt_cc_translate.mo,window.bt_cc_translate.tu,window.bt_cc_translate.we,window.bt_cc_translate.th,window.bt_cc_translate.fr,window.bt_cc_translate.sa],monthNames:[window.bt_cc_translate.january,window.bt_cc_translate.february,window.bt_cc_translate.march,window.bt_cc_translate.april,window.bt_cc_translate.may,window.bt_cc_translate.june,window.bt_cc_translate.july,window.bt_cc_translate.august,window.bt_cc_translate.september,window.bt_cc_translate.october,window.bt_cc_translate.november,window.bt_cc_translate.december],beforeShow:function(input,inst){$('.ui-datepicker').addClass('btDatePicker')}});c.find('.btQuoteSlider').each(function(){$(this).slider({min:!window.is_rtl?$(this).data('min'):-$(this).data('max'),max:!window.is_rtl?$(this).data('max'):-$(this).data('min'),step:$(this).data('step'),value:!window.is_rtl?$(this).data('value'):-$(this).data('value'),change:function(event,ui){$(this).find('.btQuoteSliderValue').html(window.rtl_direction*$(this).slider('value'));bt_cc_eval_conditions(window.rtl_direction*$(this).slider('value'),$(this).data('condition'))}});bt_cc_eval_conditions(window.rtl_direction*$(this).data('value'),$(this).data('condition'))});c.find('.ui-slider-handle').each(function(){$(this).append($(this).closest('.btQuoteItemInput').find($('.btQuoteSliderValue')))});c.find('.btQuoteSlider').each(function(){var this_slider=$(this);$(this).slider({slide:function(event,ui){var val=window.rtl_direction*ui.value;this_slider.slider('value',val);this_slider.find('.btQuoteSliderValue').html(val);bt_quote_total(c);bt_paypal_items(c)}})});c.find('.btQuoteSwitch').on('click',function(){if($(this).hasClass('on')){$(this).removeClass('on');bt_cc_eval_conditions($(this).data('off'),$(this).data('condition'))}else{$(this).addClass('on');bt_cc_eval_conditions($(this).data('on'),$(this).data('condition'))}
bt_quote_total(c);bt_paypal_items(c)});c.find('.btQuoteSwitch').each(function(){if($(this).hasClass('on')){bt_cc_eval_conditions($(this).data('on'),$(this).data('condition'))}else{bt_cc_eval_conditions($(this).data('off'),$(this).data('condition'))}});c.find('.btPayPalButton').on('click',function(){$(this).next().submit()});c.find('.btQuoteText').each(function(){bt_cc_eval_conditions($(this).val(),$(this).data('condition'))});c.find('.btQuoteText').keyup(function(){bt_quote_total(c);bt_paypal_items(c);bt_cc_eval_conditions($(this).val(),$(this).data('condition'))});c.find('.btContactNext').on('click',function(){$('html, body').delay(1000).animate({scrollTop:($(this).closest('.btQuoteBooking').find('.btTotalQuoteContactGroup').offset().top-30)},400);var contact_group=$(this).closest('.btQuoteBooking').find('.btTotalQuoteContactGroup');$(this).closest('.btQuoteBooking').find('.btTotalQuoteContactGroup').addClass('btActive');$(this).closest('.btQuoteBooking').find('.btQuoteBookingForm').removeClass('btActive')});c.find('.btContactSubmit').on('click',function(){c.find('.btContactFieldError').removeClass('btContactFieldError');var val=!0;c.find('.btContactField').each(function(){if($(this).parent().hasClass('btContactFieldMandatory')&&(($(this).val()==''&&!$(this).hasClass('btContactTime'))||($(this).hasClass('btContactTime')&&$(this).hasClass('btNotSelected')))){$(this).parent().addClass('btContactFieldError');val=!1}});if(!val){c.find('.btSubmitMessage').hide().html(c.data('message_mandatory')).fadeIn();return!1}
var quote='';var back=0;var bt_is_odd=function(n){return(n%2)==1}
c.find('.btQuoteItem, .btQuoteSubtotal').each(function(){back++;var item_val=0;var selected_name='';var is_text=!1;var text_val;$(this).find('.btQuoteText').each(function(){var unit_price=bt_parse_float($(this).data('price'));text_val=bt_parse_float($(this).val());item_val=text_val*unit_price;is_text=!0});$(this).find('.btQuoteSelect').find('._msddli_.selected').each(function(){selected_name=$(this).find('.ddlabel')[0].innerHTML;if($(this).is(':first-child')){selected_name=''}
item_val=bt_parse_float($(this).data('value'))});var is_slider=!1;var slider_val;$(this).find('.btQuoteSlider').each(function(){var unit_price=bt_parse_float($(this).data('price'));slider_val=bt_cc_get_slider_value($(this));item_val=slider_val*unit_price;is_slider=!0});$(this).find('.btQuoteSwitch').each(function(){if($(this).hasClass('on')){item_val=bt_parse_float($(this).data('on'))}else{item_val=bt_parse_float($(this).data('off'))}});var label=$(this).find('label').html();if(is_slider){label=label+': '+slider_val}
if(is_text){label=label+': '+text_val}
if(selected_name!=''){selected_name=selected_name.replace('<span class="description">','/');selected_name=selected_name.replace('</span>','');label=label+': '+selected_name}
var background='';if(bt_is_odd(back))background=' '+'style="background:#eee;"';item_val=bt_cc_currency_format(c,item_val);if($(this).hasClass('btQuoteSubtotal')){label=$(this).data('label');item_val=$(this).data('val')}
if(label!==undefined&&label!==null){quote+=encodeURI('<tr'+background+'>\r\n<td style="padding:.5em;">'+label+'</td>\r\n<td style="text-align:right;padding:.5em;">'+item_val+'</td>\r\n</tr>')+"\r\n"}});var recaptcha_response='';if(c.data('rec_secret_key')!=''){var recaptcha_response=grecaptcha.getResponse(c.find('.g-rec').data('widget_id'));grecaptcha.reset(c.find('.g-rec').data('widget_id'))}
var email_confirmation='no';if(c.find('.bt_cc_email_confirmation').length){if(c.find('.bt_cc_email_confirmation').prop('checked')){email_confirmation='yes'}}else{email_confirmation='yes'}
var email_gdpr='no';if(c.find('.bt_cc_email_gdpr').length){if(c.find('.bt_cc_email_gdpr').prop('checked')){email_gdpr='yes'}}else{email_gdpr='yes'}
if(email_gdpr=='no'){c.find('.btSubmitMessage').html(c.data('email_gdpr_not_text'));return!1}
var data={'action':'bt_cc','recaptcha_response':recaptcha_response,'recaptcha_secret':c.data('rec_secret_key'),'admin_email':c.data('admin_email'),'email_client':c.data('email_client'),'email_rtl':c.data('email_rtl'),'currency':c.data('currency'),'currency_after':c.data('currency_after'),'currency_space':c.data('currency_space'),'email_confirmation':email_confirmation,'url_confirmation':c.data('url_confirmation'),'subject':c.data('subject'),'email_header':c.data('email_header'),'email_footer':c.data('email_footer'),'quote':quote,'total':c.data('total'),'total_text':c.data('total_text'),'name':c.find('.btContactName').val(),'email':c.find('.btContactEmail').val(),'phone':c.find('.btContactPhone').val(),'address':c.find('.btContactAddress').val(),'date':c.find('.btContactDate').val(),'time':c.find('.btContactTime option:selected').val(),'date_text':c.data('date_text'),'time_text':c.data('time_text'),'message':c.find('.btContactMessage').val(),'bt_cc_nonce':c.data('bt_cc_nonce'),'email_gdpr':c.data('email_gdpr'),'email_gdpr_text':c.data('email_gdpr_text'),'email_gdpr_not_text':c.data('email_gdpr_not_text')};c.find('.btSubmitMessage').hide().html(c.data('message_please_wait')).fadeIn();$.ajax({type:'POST',url:c.data('url_ajax'),data:data,async:!0,success:function(response){response=$.trim(response);if(response=='ok'){if(c.data('url_confirmation')==''||c.data('url_confirmation')==null){c.find('.btSubmitMessage').hide().html(c.data('message_success')).fadeIn()}else{window.location=c.data('url_confirmation')}}else{c.find('.btSubmitMessage').hide().html(c.data('message_error')).fadeIn()}},error:function(xhr,status,error){c.find('.btSubmitMessage').hide().html(c.data('message_error')).fadeIn()}});return!1});c.find('.wpcf7-submit').on('click',function(){var val=!0;var quote='';c.find('.btQuoteItem, .btQuoteSubtotal').each(function(){var item_val=0;var selected_name='';var text_val;var is_text=!1;$(this).find('.btQuoteText').each(function(){var unit_price=bt_parse_float($(this).data('price'));text_val=bt_parse_float($(this).val());item_val=text_val*unit_price;is_text=!0});$(this).find('.btQuoteSelect').find('._msddli_.selected').each(function(){selected_name=$(this).find('.ddlabel')[0].innerHTML;if($(this).is(':first-child')){selected_name=''}
item_val=bt_parse_float($(this).data('value'))});var is_slider=!1;var slider_val;$(this).find('.btQuoteSlider').each(function(){var unit_price=bt_parse_float($(this).data('price'));slider_val=bt_cc_get_slider_value($(this));item_val=slider_val*unit_price;is_slider=!0});$(this).find('.btQuoteSwitch').each(function(){if($(this).hasClass('on')){item_val=bt_parse_float($(this).data('on'))}else{item_val=bt_parse_float($(this).data('off'))}});var label=$(this).find('label').html();if(is_slider){label=label+' ('+slider_val+') '}
if(is_text){label=label+' ('+text_val+') '}
if(selected_name!=''){selected_name=selected_name.replace('<span class="description">','/');selected_name=selected_name.replace('</span>','');label=label+' ('+selected_name+') '}
item_val=bt_cc_currency_format(c,item_val);if($(this).hasClass('btQuoteSubtotal')){label=$(this).data('label');item_val=$(this).data('val')}
if(label!==undefined&&label!==null){quote+=label+': '+item_val+"\r\n"}});var currency_text='';var currency_space='';if(c.data('currency_space')=='yes'){currency_space=' '}
if(c.data('currency')!=''){if(c.data('currency_after')=='yes'){currency_text=c.data('total')+currency_space+c.data('currency')}else{currency_text=c.data('currency')+currency_space+c.data('total')}}else{currency_text=c.data('total')}
quote+=c.data('total_text')+': '+currency_text+"\r\n";c.find('input[name=bt-cc-data]').val(quote)});var total=0;total=total.toFixed(2);bt_quote_total(c);bt_paypal_items(c)})}
var bt_cc_init_finished=!1;document.addEventListener('readystatechange',function(){if(!bt_cc_init_finished&&(document.readyState==='interactive'||document.readyState==='complete')){window.is_rtl=$('body').hasClass('rtl');window.rtl_direction=!window.is_rtl?1:-1;bt_cc_init();bt_cc_init_finished=!0}})})(jQuery);var BTCaptchaCallback=function(){jQuery('.g-rec').each(function(){var widget_id=grecaptcha.render(jQuery(this).attr('id'),{'sitekey':jQuery(this).data('sk')});jQuery(this).data('widget_id',widget_id)})};jQuery("select[name='action'],select[name='action2']").find("option[value='trash']").each(function(){this.value='delete';jQuery(this).text(window.bt_bb_text.delete)});jQuery("a.add-new-h2").remove();
window.bt_cc_translate = [];window.bt_cc_translate['prev'] = 'Prev';window.bt_cc_translate['next'] = 'Next';window.bt_cc_translate['su'] = 'Su';window.bt_cc_translate['mo'] = 'Mo';window.bt_cc_translate['tu'] = 'Tu';window.bt_cc_translate['we'] = 'We';window.bt_cc_translate['th'] = 'Th';window.bt_cc_translate['fr'] = 'Fr';window.bt_cc_translate['sa'] = 'Sa';window.bt_cc_translate['january'] = 'January';window.bt_cc_translate['february'] = 'February';window.bt_cc_translate['march'] = 'March';window.bt_cc_translate['april'] = 'April';window.bt_cc_translate['may'] = 'May';window.bt_cc_translate['june'] = 'June';window.bt_cc_translate['july'] = 'July';window.bt_cc_translate['august'] = 'August';window.bt_cc_translate['september'] = 'September';window.bt_cc_translate['october'] = 'October';window.bt_cc_translate['november'] = 'November';window.bt_cc_translate['december'] = 'December';;
// wait for ready event
			// jQuery( document ).ready(function() {
				
				// Select the node that will be observed for mutations
				const targetNode = document.documentElement;

				// Options for the observer (which mutations to observe)
				const config = { attributes: false, childList: true, subtree: false };
				
				var bold_timeline_item_button_done = false;
				var css_override_item_done = false;
				var css_override_group_done = false;
				var css_override_container_done = false;

				// Callback function to execute when mutations are observed
				const callback = function( mutationsList, observer ) {
					var i;
					//for ( i = 0; i < mutationsList.length; i++ ) {
						//if ( mutationsList[ i ].type === 'childList' ) {
							if ( typeof jQuery !== 'undefined' && jQuery( '.bold_timeline_item_button' ).length > 0 && ! bold_timeline_item_button_done ) {
								bold_timeline_item_button_done = true;
								jQuery( '.bold_timeline_item_button' ).each( function() {
									var css_override = jQuery( this ).data( 'css-override' );
									if ( css_override != '' ) {
										var id = jQuery( this ).attr( 'id' );
										css_override = css_override.replace( /(\.bold_timeline_item_button)([\.\{\s])/g, '.bold_timeline_item_button#' + id + '$2' );
										var head = document.getElementsByTagName( 'head' )[0];
										var style = document.createElement( 'style' );
										style.appendChild( document.createTextNode( css_override ) );
										head.appendChild( style );
									}
								});
							}
							if ( typeof jQuery !== 'undefined' && jQuery( '.bold_timeline_item' ).length > 0 && ! css_override_item_done ) {
								css_override_item_done = true;
								jQuery( '.bold_timeline_item' ).each( function() {
									var css_override = jQuery( this ).data( 'css-override' );
									if ( css_override != '' ) {
										var id = jQuery( this ).attr( 'id' );
										css_override = css_override.replace( /(\.bold_timeline_item)([\.\{\s])/g, '.bold_timeline_item#' + id + '$2' );
										var head = document.getElementsByTagName( 'head' )[0];
										var style = document.createElement( 'style' );
										style.appendChild( document.createTextNode( css_override ) );
										head.appendChild( style );
									}
								});
							}
							if ( typeof jQuery !== 'undefined' && jQuery( '.bold_timeline_group' ).length > 0 && ! css_override_group_done ) {
								css_override_group_done = true;
								jQuery( '.bold_timeline_group' ).each( function() {
									var css_override = jQuery( this ).data( 'css-override' );
									if ( css_override != '' ) {
										var id = jQuery( this ).attr( 'id' );
										css_override = css_override.replace( /(\.bold_timeline_group)([\.\{\s])/g, '.bold_timeline_group#' + id + '$2' );
										var head = document.getElementsByTagName( 'head' )[0];
										var style = document.createElement( 'style' );
										style.appendChild( document.createTextNode( css_override ) );
										head.appendChild( style );
									}
								});
							}
							if ( typeof jQuery !== 'undefined' && jQuery( '.bold_timeline_container' ).length > 0 && ! css_override_container_done ) {
								css_override_container_done = true;
								jQuery( '.bold_timeline_container' ).each( function() {
									var css_override = jQuery( this ).data( 'css-override' );
									if ( css_override != '' ) {
										var id = jQuery( this ).attr( 'id' );
										css_override = css_override.replace( /(\.bold_timeline_container)([\.\{\s])/g, '#' + id + '$2' );
										var head = document.getElementsByTagName( 'head' )[0];
										var style = document.createElement( 'style' );
										style.appendChild( document.createTextNode( css_override ) );
										head.appendChild( style );
									}
								});
							}
						//}
					//}
				};
			//}); // ready event

			// Create an observer instance linked to the callback function
			const observer = new MutationObserver( callback );

			// Start observing the target node for configured mutations
			observer.observe(targetNode, config);

			// Later, you can stop observing
			document.addEventListener( 'DOMContentLoaded', function() { observer.disconnect(); }, false );;
window.bt_bb_preview = false;
window.bt_bb_custom_elements = false;;
!function(){"use strict";var t={d:function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){if(this.formData={},this.tree={},!(t instanceof FormData))return this;this.formData=t;const e=()=>{const t=new Map;return t.largestIndex=0,t.set=function(e,n){""===e?e=t.largestIndex++:/^[0-9]+$/.test(e)&&(e=parseInt(e),t.largestIndex<=e&&(t.largestIndex=e+1)),Map.prototype.set.call(t,e,n)},t};this.tree=e();const n=/^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;for(const[t,i]of this.formData){const s=t.match(n);if(s)if(""===s.groups.array)this.tree.set(s.groups.name,i);else{const t=[...s.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi)].map((([t,e])=>e));t.unshift(s.groups.name);const n=t.pop();t.reduce(((t,n)=>{if(/^[0-9]+$/.test(n)&&(n=parseInt(n)),t.get(n)instanceof Map)return t.get(n);const i=e();return t.set(n,i),i}),this.tree).set(n,i)}}}t.r(e),t.d(e,{date:function(){return f},email:function(){return r},enumeration:function(){return m},file:function(){return d},maxdate:function(){return b},maxfilesize:function(){return z},maxitems:function(){return h},maxlength:function(){return v},maxnumber:function(){return x},mindate:function(){return y},minfilesize:function(){return A},minitems:function(){return u},minlength:function(){return g},minnumber:function(){return w},number:function(){return c},required:function(){return o},requiredfile:function(){return a},tel:function(){return l},url:function(){return p}}),n.prototype.entries=function(){return this.tree.entries()},n.prototype.get=function(t){return this.tree.get(t)},n.prototype.getAll=function(t){if(!this.has(t))return[];const e=t=>{const n=[];if(t instanceof Map)for(const[i,s]of t)n.push(...e(s));else""!==t&&n.push(t);return n};return e(this.get(t))},n.prototype.has=function(t){return this.tree.has(t)},n.prototype.keys=function(){return this.tree.keys()},n.prototype.values=function(){return this.tree.values()};var i=n;function s({rule:t,field:e,error:n,...i}){this.rule=t,this.field=e,this.error=n,this.properties=i}const o=function(t){if(0===t.getAll(this.field).length)throw new s(this)},a=function(t){if(0===t.getAll(this.field).length)throw new s(this)},r=function(t){if(!t.getAll(this.field).every((t=>{if((t=t.trim()).length<6)return!1;if(-1===t.indexOf("@",1))return!1;if(t.indexOf("@")!==t.lastIndexOf("@"))return!1;const[e,n]=t.split("@",2);if(!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e))return!1;if(/\.{2,}/.test(n))return!1;if(/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(n))return!1;const i=n.split(".");if(i.length<2)return!1;for(const t of i){if(/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(t))return!1;if(!/^[a-z0-9-]+$/i.test(t))return!1}return!0})))throw new s(this)},p=function(t){const e=t.getAll(this.field);if(!e.every((t=>{if(""===(t=t.trim()))return!1;try{return(t=>-1!==["http","https","ftp","ftps","mailto","news","irc","irc6","ircs","gopher","nntp","feed","telnet","mms","rtsp","sms","svn","tel","fax","xmpp","webcal","urn"].indexOf(t))(new URL(t).protocol.replace(/:$/,""))}catch{return!1}})))throw new s(this)},l=function(t){if(!t.getAll(this.field).every((t=>(t=(t=t.trim()).replaceAll(/[()/.*#\s-]+/g,""),/^[+]?[0-9]+$/.test(t)))))throw new s(this)},c=function(t){if(!t.getAll(this.field).every((t=>(t=t.trim(),!!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)||!!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)))))throw new s(this)},f=function(t){if(!t.getAll(this.field).every((t=>/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t.trim()))))throw new s(this)},d=function(t){if(!t.getAll(this.field).every((t=>t instanceof File&&this.accept?.some((e=>/^\.[a-z0-9]+$/i.test(e)?t.name.toLowerCase().endsWith(e.toLowerCase()):(t=>{const e=[],n=t.match(/^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i);if(n){const t=n.groups.toplevel.toLowerCase(),i=n.groups.sub.toLowerCase();for(const[s,o]of(()=>{const t=new Map;return t.set("jpg|jpeg|jpe","image/jpeg"),t.set("gif","image/gif"),t.set("png","image/png"),t.set("bmp","image/bmp"),t.set("tiff|tif","image/tiff"),t.set("webp","image/webp"),t.set("ico","image/x-icon"),t.set("heic","image/heic"),t.set("asf|asx","video/x-ms-asf"),t.set("wmv","video/x-ms-wmv"),t.set("wmx","video/x-ms-wmx"),t.set("wm","video/x-ms-wm"),t.set("avi","video/avi"),t.set("divx","video/divx"),t.set("flv","video/x-flv"),t.set("mov|qt","video/quicktime"),t.set("mpeg|mpg|mpe","video/mpeg"),t.set("mp4|m4v","video/mp4"),t.set("ogv","video/ogg"),t.set("webm","video/webm"),t.set("mkv","video/x-matroska"),t.set("3gp|3gpp","video/3gpp"),t.set("3g2|3gp2","video/3gpp2"),t.set("txt|asc|c|cc|h|srt","text/plain"),t.set("csv","text/csv"),t.set("tsv","text/tab-separated-values"),t.set("ics","text/calendar"),t.set("rtx","text/richtext"),t.set("css","text/css"),t.set("htm|html","text/html"),t.set("vtt","text/vtt"),t.set("dfxp","application/ttaf+xml"),t.set("mp3|m4a|m4b","audio/mpeg"),t.set("aac","audio/aac"),t.set("ra|ram","audio/x-realaudio"),t.set("wav","audio/wav"),t.set("ogg|oga","audio/ogg"),t.set("flac","audio/flac"),t.set("mid|midi","audio/midi"),t.set("wma","audio/x-ms-wma"),t.set("wax","audio/x-ms-wax"),t.set("mka","audio/x-matroska"),t.set("rtf","application/rtf"),t.set("js","application/javascript"),t.set("pdf","application/pdf"),t.set("swf","application/x-shockwave-flash"),t.set("class","application/java"),t.set("tar","application/x-tar"),t.set("zip","application/zip"),t.set("gz|gzip","application/x-gzip"),t.set("rar","application/rar"),t.set("7z","application/x-7z-compressed"),t.set("exe","application/x-msdownload"),t.set("psd","application/octet-stream"),t.set("xcf","application/octet-stream"),t.set("doc","application/msword"),t.set("pot|pps|ppt","application/vnd.ms-powerpoint"),t.set("wri","application/vnd.ms-write"),t.set("xla|xls|xlt|xlw","application/vnd.ms-excel"),t.set("mdb","application/vnd.ms-access"),t.set("mpp","application/vnd.ms-project"),t.set("docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"),t.set("docm","application/vnd.ms-word.document.macroEnabled.12"),t.set("dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"),t.set("dotm","application/vnd.ms-word.template.macroEnabled.12"),t.set("xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),t.set("xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"),t.set("xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"),t.set("xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"),t.set("xltm","application/vnd.ms-excel.template.macroEnabled.12"),t.set("xlam","application/vnd.ms-excel.addin.macroEnabled.12"),t.set("pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"),t.set("pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"),t.set("ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"),t.set("ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"),t.set("potx","application/vnd.openxmlformats-officedocument.presentationml.template"),t.set("potm","application/vnd.ms-powerpoint.template.macroEnabled.12"),t.set("ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"),t.set("sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"),t.set("sldm","application/vnd.ms-powerpoint.slide.macroEnabled.12"),t.set("onetoc|onetoc2|onetmp|onepkg","application/onenote"),t.set("oxps","application/oxps"),t.set("xps","application/vnd.ms-xpsdocument"),t.set("odt","application/vnd.oasis.opendocument.text"),t.set("odp","application/vnd.oasis.opendocument.presentation"),t.set("ods","application/vnd.oasis.opendocument.spreadsheet"),t.set("odg","application/vnd.oasis.opendocument.graphics"),t.set("odc","application/vnd.oasis.opendocument.chart"),t.set("odb","application/vnd.oasis.opendocument.database"),t.set("odf","application/vnd.oasis.opendocument.formula"),t.set("wp|wpd","application/wordperfect"),t.set("key","application/vnd.apple.keynote"),t.set("numbers","application/vnd.apple.numbers"),t.set("pages","application/vnd.apple.pages"),t})())("*"===i&&o.startsWith(t+"/")||o===n[0])&&e.push(...s.split("|"))}return e})(e).some((e=>(e="."+e.trim(),t.name.toLowerCase().endsWith(e.toLowerCase())))))))))throw new s(this)},m=function(t){if(!t.getAll(this.field).every((t=>this.accept?.some((e=>t===String(e))))))throw new s(this)},u=function(t){if(t.getAll(this.field).length<parseInt(this.threshold))throw new s(this)},h=function(t){const e=t.getAll(this.field);if(parseInt(this.threshold)<e.length)throw new s(this)},g=function(t){const e=t.getAll(this.field);let n=0;if(e.forEach((t=>{"string"==typeof t&&(n+=t.length)})),0!==n&&n<parseInt(this.threshold))throw new s(this)},v=function(t){const e=t.getAll(this.field);let n=0;if(e.forEach((t=>{"string"==typeof t&&(n+=t.length)})),parseInt(this.threshold)<n)throw new s(this)},w=function(t){if(!t.getAll(this.field).every((t=>!(parseFloat(t)<parseFloat(this.threshold)))))throw new s(this)},x=function(t){if(!t.getAll(this.field).every((t=>!(parseFloat(this.threshold)<parseFloat(t)))))throw new s(this)},y=function(t){if(!t.getAll(this.field).every((t=>(t=t.trim(),!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&t<this.threshold)))))throw new s(this)},b=function(t){if(!t.getAll(this.field).every((t=>(t=t.trim(),!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&this.threshold<t)))))throw new s(this)},A=function(t){const e=t.getAll(this.field);let n=0;if(e.forEach((t=>{t instanceof File&&(n+=t.size)})),n<parseInt(this.threshold))throw new s(this)},z=function(t){const e=t.getAll(this.field);let n=0;if(e.forEach((t=>{t instanceof File&&(n+=t.size)})),parseInt(this.threshold)<n)throw new s(this)};var $;window.swv={validators:e,validate:(t,n,o={})=>{const a=(t.rules??[]).filter((({rule:t,...n})=>"function"==typeof e[t]&&("function"!=typeof e[t].matches||e[t].matches(n,o))));if(!a.length)return new Map;const r=new i(n),p=a.reduce(((t,n)=>{const{rule:i,...o}=n;if(t.get(o.field)?.error)return t;try{e[i].call({rule:i,...o},r)}catch(e){if(e instanceof s)return t.set(o.field,e)}return t}),new Map);for(const t of r.keys())p.has(t)||p.set(t,{validInputs:r.getAll(t)});return p},...null!==($=window.swv)&&void 0!==$?$:{}}}();
!function(){"use strict";const e=e=>Math.abs(parseInt(e,10)),t=(e,t)=>{const a=new Map([["init","init"],["validation_failed","invalid"],["acceptance_missing","unaccepted"],["spam","spam"],["aborted","aborted"],["mail_sent","sent"],["mail_failed","failed"],["submitting","submitting"],["resetting","resetting"],["validating","validating"],["payment_required","payment-required"]]);a.has(t)&&(t=a.get(t)),Array.from(a.values()).includes(t)||(t=`custom-${t=(t=t.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);const n=e.getAttribute("data-status");return e.wpcf7.status=t,e.setAttribute("data-status",t),e.classList.add(t),n&&n!==t&&e.classList.remove(n),t},a=(e,t,a)=>{const n=new CustomEvent(`wpcf7${t}`,{bubbles:!0,detail:a});"string"==typeof e&&(e=document.querySelector(e)),e.dispatchEvent(n)},n=e=>{const{root:t,namespace:a="contact-form-7/v1"}=wpcf7.api;return r.reduceRight(((e,t)=>a=>t(a,e)),(e=>{let n,r,{url:o,path:c,endpoint:s,headers:i,body:l,data:d,...p}=e;"string"==typeof s&&(n=a.replace(/^\/|\/$/g,""),r=s.replace(/^\//,""),c=r?n+"/"+r:n),"string"==typeof c&&(-1!==t.indexOf("?")&&(c=c.replace("?","&")),c=c.replace(/^\//,""),o=t+c),i={Accept:"application/json, */*;q=0.1",...i},delete i["X-WP-Nonce"],d&&(l=JSON.stringify(d),i["Content-Type"]="application/json");const u={code:"fetch_error",message:"You are probably offline."},f={code:"invalid_json",message:"The response is not a valid JSON response."};return window.fetch(o||c||window.location.href,{...p,headers:i,body:l}).then((e=>Promise.resolve(e).then((e=>{if(e.status>=200&&e.status<300)return e;throw e})).then((e=>{if(204===e.status)return null;if(e&&e.json)return e.json().catch((()=>{throw f}));throw f}))),(()=>{throw u}))}))(e)},r=[];function o(e){var a,n;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{target:o,scope:l=e,...d}=r;if(void 0===(null===(a=e.wpcf7)||void 0===a?void 0:a.schema))return;const p={...e.wpcf7.schema};if(void 0!==o){if(!e.contains(o))return;if(!o.closest(".wpcf7-form-control-wrap[data-name]"))return;if(o.closest(".novalidate"))return}const u=new FormData,f=[];for(const e of l.querySelectorAll(".wpcf7-form-control-wrap"))if(!e.closest(".novalidate")&&(e.querySelectorAll(":where( input, textarea, select ):enabled").forEach((e=>{if(e.name)switch(e.type){case"button":case"image":case"reset":case"submit":break;case"checkbox":case"radio":e.checked&&u.append(e.name,e.value);break;case"select-multiple":for(const t of e.selectedOptions)u.append(e.name,t.value);break;case"file":for(const t of e.files)u.append(e.name,t);break;default:u.append(e.name,e.value)}})),e.dataset.name&&(f.push(e.dataset.name),e.setAttribute("data-under-validation","1"),e.contains(o))))break;p.rules=(null!==(n=p.rules)&&void 0!==n?n:[]).filter((e=>{let{field:t}=e;return f.includes(t)}));const m=e.getAttribute("data-status");Promise.resolve(t(e,"validating")).then((t=>{if(void 0!==swv){const t=swv.validate(p,u,r);for(const[a,{error:n,validInputs:r}]of t)s(e,a),void 0!==n&&c(e,a,n,{scope:l}),i(e,a,null!=r?r:[])}})).finally((()=>{t(e,m),e.querySelectorAll(".wpcf7-form-control-wrap[data-under-validation]").forEach((e=>{e.removeAttribute("data-under-validation")}))}))}n.use=e=>{r.unshift(e)};const c=(e,t,a,n)=>{var r;const{scope:o=e,...c}=null!=n?n:{},s=`${null===(r=e.wpcf7)||void 0===r?void 0:r.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi,""),i=e.querySelector(`.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`);(()=>{const t=document.createElement("li");t.setAttribute("id",s),i&&i.id?t.insertAdjacentHTML("beforeend",`<a href="#${i.id}">${a}</a>`):t.insertAdjacentText("beforeend",a),e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(t)})(),o.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((t=>{if("validating"===e.getAttribute("data-status")&&!t.dataset.underValidation)return;const n=document.createElement("span");n.classList.add("wpcf7-not-valid-tip"),n.setAttribute("aria-hidden","true"),n.insertAdjacentText("beforeend",a),t.appendChild(n),t.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","true")})),t.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.classList.add("wpcf7-not-valid"),e.setAttribute("aria-describedby",s),"function"==typeof e.setCustomValidity&&e.setCustomValidity(a),e.closest(".use-floating-validation-tip")&&(e.addEventListener("focus",(e=>{n.setAttribute("style","display: none")})),n.addEventListener("click",(e=>{n.setAttribute("style","display: none")})))}))}))},s=(e,t)=>{var a,n;const r=`${null===(a=e.wpcf7)||void 0===a?void 0:a.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi,"");null===(n=e.wpcf7.parent.querySelector(`.screen-reader-response ul li#${r}`))||void 0===n||n.remove(),e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e=>{var t;null===(t=e.querySelector(".wpcf7-not-valid-tip"))||void 0===t||t.remove(),e.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","false")})),e.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.removeAttribute("aria-describedby"),e.classList.remove("wpcf7-not-valid"),"function"==typeof e.setCustomValidity&&e.setCustomValidity("")}))}))},i=(e,t,a)=>{e.querySelectorAll(`[data-reflection-of="${t}"]`).forEach((e=>{if("output"===e.tagName.toLowerCase()){const t=e;0===a.length&&a.push(t.dataset.default),a.slice(0,1).forEach((e=>{e instanceof File&&(e=e.name),t.textContent=e}))}else e.querySelectorAll("output").forEach((e=>{e.hasAttribute("data-default")?0===a.length?e.removeAttribute("hidden"):e.setAttribute("hidden","hidden"):e.remove()})),a.forEach((a=>{a instanceof File&&(a=a.name);const n=document.createElement("output");n.setAttribute("name",t),n.textContent=a,e.appendChild(n)}))}))};function l(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(wpcf7.blocked)return d(e),void t(e,"submitting");const o=new FormData(e);r.submitter&&r.submitter.name&&o.append(r.submitter.name,r.submitter.value);const s={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(o,(e=>{const t=e[0],a=e[1];return!t.match(/^_/)&&{name:t,value:a}})).filter((e=>!1!==e)),formData:o};n({endpoint:`contact-forms/${e.wpcf7.id}/feedback`,method:"POST",body:o,wpcf7:{endpoint:"feedback",form:e,detail:s}}).then((n=>{const r=t(e,n.status);return s.status=n.status,s.apiResponse=n,["invalid","unaccepted","spam","aborted"].includes(r)?a(e,r,s):["sent","failed"].includes(r)&&a(e,`mail${r}`,s),a(e,"submit",s),n})).then((t=>{t.posted_data_hash&&(e.querySelector('input[name="_wpcf7_posted_data_hash"]').value=t.posted_data_hash),"mail_sent"===t.status&&(e.reset(),e.wpcf7.resetOnMailSent=!0),t.invalid_fields&&t.invalid_fields.forEach((t=>{c(e,t.field,t.message)})),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend",t.message),e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=t.message}))})).catch((e=>console.error(e)))}n.use(((e,n)=>{if(e.wpcf7&&"feedback"===e.wpcf7.endpoint){const{form:n,detail:r}=e.wpcf7;d(n),a(n,"beforesubmit",r),t(n,"submitting")}return n(e)}));const d=e=>{e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t=>{t.dataset.name&&s(e,t.dataset.name)})),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText="",e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=""}))};function p(e){const r=new FormData(e),o={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(r,(e=>{const t=e[0],a=e[1];return!t.match(/^_/)&&{name:t,value:a}})).filter((e=>!1!==e)),formData:r};n({endpoint:`contact-forms/${e.wpcf7.id}/refill`,method:"GET",wpcf7:{endpoint:"refill",form:e,detail:o}}).then((n=>{e.wpcf7.resetOnMailSent?(delete e.wpcf7.resetOnMailSent,t(e,"mail_sent")):t(e,"init"),o.apiResponse=n,a(e,"reset",o)})).catch((e=>console.error(e)))}n.use(((e,a)=>{if(e.wpcf7&&"refill"===e.wpcf7.endpoint){const{form:a,detail:n}=e.wpcf7;d(a),t(a,"resetting")}return a(e)}));const u=(e,t)=>{for(const a in t){const n=t[a];e.querySelectorAll(`input[name="${a}"]`).forEach((e=>{e.value=""})),e.querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":","")}`).forEach((e=>{e.setAttribute("src",n)}));const r=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);r&&e.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`).forEach((e=>{e.value=r[1]}))}},f=(e,t)=>{for(const a in t){const n=t[a][0],r=t[a][1];e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${a}"]`).forEach((e=>{e.querySelector(`input[name="${a}"]`).value="",e.querySelector(".wpcf7-quiz-label").textContent=n,e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value=r}))}};function m(t){const a=new FormData(t);t.wpcf7={id:e(a.get("_wpcf7")),status:t.getAttribute("data-status"),pluginVersion:a.get("_wpcf7_version"),locale:a.get("_wpcf7_locale"),unitTag:a.get("_wpcf7_unit_tag"),containerPost:e(a.get("_wpcf7_container_post")),parent:t.closest(".wpcf7"),schema:void 0},t.querySelectorAll(".has-spinner").forEach((e=>{e.insertAdjacentHTML("afterend",'<span class="wpcf7-spinner"></span>')})),(e=>{e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t=>{t.addEventListener("change",(t=>{const a=t.target.getAttribute("name");e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach((e=>{e!==t.target&&(e.checked=!1)}))}))}))})(t),(e=>{e.querySelectorAll(".has-free-text").forEach((t=>{const a=t.querySelector("input.wpcf7-free-text"),n=t.querySelector('input[type="checkbox"], input[type="radio"]');a.disabled=!n.checked,e.addEventListener("change",(e=>{a.disabled=!n.checked,e.target===n&&n.checked&&a.focus()}))}))})(t),(e=>{e.querySelectorAll(".wpcf7-validates-as-url").forEach((e=>{e.addEventListener("change",(t=>{let a=e.value.trim();a&&!a.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==a.indexOf(".")&&(a=a.replace(/^\/+/,""),a="http://"+a),e.value=a}))}))})(t),(e=>{if(!e.querySelector(".wpcf7-acceptance")||e.classList.contains("wpcf7-acceptance-as-validation"))return;const t=()=>{let t=!0;e.querySelectorAll(".wpcf7-acceptance").forEach((e=>{if(!t||e.classList.contains("optional"))return;const a=e.querySelector('input[type="checkbox"]');(e.classList.contains("invert")&&a.checked||!e.classList.contains("invert")&&!a.checked)&&(t=!1)})),e.querySelectorAll(".wpcf7-submit").forEach((e=>{e.disabled=!t}))};t(),e.addEventListener("change",(e=>{t()})),e.addEventListener("wpcf7reset",(e=>{t()}))})(t),(t=>{const a=(t,a)=>{const n=e(t.getAttribute("data-starting-value")),r=e(t.getAttribute("data-maximum-value")),o=e(t.getAttribute("data-minimum-value")),c=t.classList.contains("down")?n-a.value.length:a.value.length;t.setAttribute("data-current-value",c),t.innerText=c,r&&r<a.value.length?t.classList.add("too-long"):t.classList.remove("too-long"),o&&a.value.length<o?t.classList.add("too-short"):t.classList.remove("too-short")},n=e=>{e={init:!1,...e},t.querySelectorAll(".wpcf7-character-count").forEach((n=>{const r=n.getAttribute("data-target-name"),o=t.querySelector(`[name="${r}"]`);o&&(o.value=o.defaultValue,a(n,o),e.init&&o.addEventListener("keyup",(e=>{a(n,o)})))}))};n({init:!0}),t.addEventListener("wpcf7reset",(e=>{n()}))})(t),window.addEventListener("load",(e=>{wpcf7.cached&&t.reset()})),t.addEventListener("reset",(e=>{wpcf7.reset(t)})),t.addEventListener("submit",(e=>{wpcf7.submit(t,{submitter:e.submitter}),e.preventDefault()})),t.addEventListener("wpcf7submit",(e=>{e.detail.apiResponse.captcha&&u(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&f(t,e.detail.apiResponse.quiz)})),t.addEventListener("wpcf7reset",(e=>{e.detail.apiResponse.captcha&&u(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&f(t,e.detail.apiResponse.quiz)})),n({endpoint:`contact-forms/${t.wpcf7.id}/feedback/schema`,method:"GET"}).then((e=>{t.wpcf7.schema=e})),t.addEventListener("change",(e=>{e.target.closest(".wpcf7-form-control")&&wpcf7.validate(t,{target:e.target})}))}document.addEventListener("DOMContentLoaded",(e=>{var t;"undefined"!=typeof wpcf7?void 0!==wpcf7.api?"function"==typeof window.fetch?"function"==typeof window.FormData?"function"==typeof NodeList.prototype.forEach?"function"==typeof String.prototype.replaceAll?(wpcf7={init:m,submit:l,reset:p,validate:o,...null!==(t=wpcf7)&&void 0!==t?t:{}},document.querySelectorAll(".wpcf7 > form").forEach((e=>{wpcf7.init(e),e.closest(".wpcf7").classList.replace("no-js","js")}))):console.error("Your browser does not support String.replaceAll()."):console.error("Your browser does not support NodeList.forEach()."):console.error("Your browser does not support window.FormData()."):console.error("Your browser does not support window.fetch()."):console.error("wpcf7.api is not defined."):console.error("wpcf7 is not defined.")}))}();
/*! lazysizes - v5.3.1 */
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:1,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});;
'use strict';(function(){var $;$=window.jQuery||window.Zepto||window.$;$.fn.fancySelect=function(opts){var isiOS,settings,clicked=!1;if(opts==null){opts={}}
settings=$.extend({forceiOS:!1,includeBlank:!1,optionTemplate:function(optionEl){return optionEl.text()},triggerTemplate:function(optionEl){return optionEl.text()}},opts);isiOS=!!navigator.userAgent.match(/iP(hone|od|ad)/i);return this.each(function(){var copyOptionsToList,disabled,options,sel,trigger,updateTriggerText,wrapper;sel=$(this);if(sel.hasClass('fancified')||sel[0].tagName!=='SELECT'){return}
sel.addClass('fancified');sel.css({width:1,height:1,display:'none',position:'absolute',top:0,left:0,opacity:0});sel.wrap('<div class="fancy-select">');wrapper=sel.parent();if(sel.data('class')){wrapper.addClass(sel.data('class'))}
wrapper.append('<div class="trigger">');wrapper.append('<ul class="options">');trigger=wrapper.find('.trigger');options=wrapper.find('.options');disabled=sel.prop('disabled');if(disabled){wrapper.addClass('disabled')}
updateTriggerText=function(){var triggerHtml;triggerHtml=settings.triggerTemplate(sel.find(':selected'));return trigger.html(triggerHtml)};sel.on('blur.fs',function(){if(trigger.hasClass('open')){return setTimeout(function(){return trigger.trigger('close.fs')},120)}});trigger.on('close.fs',function(){trigger.removeClass('open');return options.removeClass('open')});trigger.on('close',function(){var parent=sel.parent();if(!parent.is(':hover')||(parent.is(':hover')&&clicked)){clicked=!1;trigger.removeClass('open');return options.removeClass('open')}});sel.parent().on('mouseout',function(){sel.trigger('focus')});trigger.on('click.fs',function(){var offParent,parent;if(!disabled){trigger.toggleClass('open');if(trigger.hasClass('open')){parent=trigger.parent();offParent=parent.offsetParent();if((parent.offset().top+parent.outerHeight()+options.outerHeight()+20)>$(window).height()+$(window).scrollTop()){options.addClass('overflowing')}else{options.removeClass('overflowing')}}
options.toggleClass('open');if(!isiOS){return sel.focus()}}});sel.on('enable',function(){sel.prop('disabled',!1);wrapper.removeClass('disabled');disabled=!1;return copyOptionsToList()});sel.on('disable',function(){sel.prop('disabled',!0);wrapper.addClass('disabled');return disabled=!0});sel.on('change.fs',function(e){if(e.originalEvent&&e.originalEvent.isTrusted){return e.stopPropagation()}else{return updateTriggerText()}});sel.on('keydown',function(e){var hovered,newHovered,w;w=e.which;hovered=options.find('.hover');hovered.removeClass('hover');if(!options.hasClass('open')){if(w===13||w===32||w===38||w===40){e.preventDefault();return trigger.trigger('click.fs')}}else{if(w===38){e.preventDefault();if(hovered.length&&hovered.index()>0){hovered.prev().addClass('hover')}else{options.find('li:last-child').addClass('hover')}}else if(w===40){e.preventDefault();if(hovered.length&&hovered.index()<options.find('li').length-1){hovered.next().addClass('hover')}else{options.find('li:first-child').addClass('hover')}}else if(w===27){e.preventDefault();trigger.trigger('click.fs')}else if(w===13||w===32){e.preventDefault();hovered.trigger('click.fs')}else if(w===9){if(trigger.hasClass('open')){trigger.trigger('close.fs')}}
newHovered=options.find('.hover');if(newHovered.length){options.scrollTop(0);return options.scrollTop(newHovered.position().top-12)}}});options.on('click.fs','li',function(e){var clicked;clicked=$(this);sel.val(clicked.data('raw-value'));if(!isiOS){sel.trigger('blur.fs').trigger('focus.fs')}
options.find('.selected').removeClass('selected');clicked.addClass('selected');trigger.addClass('selected');return sel.val(clicked.data('raw-value')).trigger('change.fs').trigger('blur.fs').trigger('focus.fs')});options.on('mouseenter.fs','li',function(){var hovered,nowHovered;nowHovered=$(this);hovered=options.find('.hover');hovered.removeClass('hover');return nowHovered.addClass('hover')});options.on('mouseleave.fs','li',function(){return options.find('.hover').removeClass('hover')});copyOptionsToList=function(){var selOpts;updateTriggerText();selOpts=sel.find('option');return sel.find('option').each(function(i,opt){var optHtml;opt=$(opt);if(!opt.prop('disabled')&&(opt.val()||settings.includeBlank)){optHtml=settings.optionTemplate(opt);if(opt.prop('selected')){return options.append("<li data-raw-value=\""+(opt.val())+"\" class=\"selected\">"+optHtml+"</li>")}else{return options.append("<li data-raw-value=\""+(opt.val())+"\">"+optHtml+"</li>")}}})};sel.on('update.fs',function(){wrapper.find('.options').empty();return copyOptionsToList()});return copyOptionsToList()})}}).call(this);
window.BoldThemesURI = "http://127.0.0.2/wp-content/themes/avantage"; window.BoldThemesAJAXURL = "http://127.0.0.2/wp-admin/admin-ajax.php";window.boldthemes_text = [];window.boldthemes_text.previous = 'previous';window.boldthemes_text.next = 'next';;
'use strict';var bt_initHeader;(function($){var hasCentralMenu,verticalMenuEnabled,belowMenu,btStickyEnabled,responsiveMenuPosition,fullScreenMenuEnabled;function initial_header_setup(){var isTouchDevice=('ontouchstart' in window)||(navigator.MaxTouchPoints>0)||(navigator.msMaxTouchPoints>0);if(isTouchDevice){$('html').addClass('touch');$('html').removeClass('no-touch')}else{$('html').addClass('no-touch');$('html').removeClass('touch')}
hasCentralMenu=$('body').hasClass('btMenuCenterEnabled');verticalMenuEnabled=$('body').hasClass('btMenuVerticalLeftEnabled')||$('body').hasClass('btMenuVerticalRightEnabled');fullScreenMenuEnabled=$('body').hasClass('btMenuFullScreenCenter');if($('body').hasClass('rtl')){responsiveMenuPosition='Right'}else{responsiveMenuPosition='Left'}
belowMenu=$('body').hasClass('btBelowMenu');btStickyEnabled=$('body').hasClass('btStickyEnabled');if(typeof window.btStickyOffset=='undefined')window.btStickyOffset=250;if(typeof window.responsiveResolution=='undefined')window.responsiveResolution='1200'}
function final_header_setup(){$('li.btMenuWideDropdown').addClass(function(){return'btMenuWideDropdownCols-'+$(this).children('ul').children('li').length});$('li.btMenuWideDropdown').each(function(){var maxChildItems=0;$(this).find('> ul > li > ul').each(function(index){if($(this).children().length>maxChildItems){maxChildItems=$(this).children().length}});$(this).find('> ul > li > ul').each(function(index){var bt_menu_base_length=$(this).children().length;if(bt_menu_base_length<maxChildItems){for(var i=0;i<maxChildItems-bt_menu_base_length;i++){$(this).append('<li class="btEmptyParentElement"><a class="btEmptyElement">&nbsp;</a></li>')}}})});$('.btHorizontalMenuTrigger, .bt-horizontal-menu-trigger').on('click',function(){$('body').toggleClass('btShowMenu');return!1});$('.bt-fullscreen-menu-trigger').on('click',function(){$('body').toggleClass('bt-show-fullscreen-menu');return!1});$('.btVerticalMenuTrigger, .bt-vertical-menu-trigger').on('click',function(){$('body').toggleClass('btMenuVerticalOn');return!1})}
function top_tools_search(){$('.mainHeader .btSearchInner').prependTo('body').addClass('btFromTopBox');$('.mainHeader .widget_search').addClass('btIconWidget');$('.mainHeader .btSearch, .btFromTopBox .btSearchInnerClose').on('click',function(){$('body').toggleClass('btTopToolsSearchOpen');if($('body').hasClass('btTopToolsSearchOpen')){if($('.btSearchInnerContent form input:text:visible:first').length)boldthemes_requestTimeout(add_focus_to_serach,500);}
return!1})}
function add_focus_to_serach(){$('.btSearchInnerContent form input:text:visible:first').focus()}
function divide_menu(){if($('.btTextLogo').length){var logoWidth=$('.mainHeader .logo').width()}else{if($('.mainHeader .logo .btMainLogo').data('hw')){var logoWidth=$('.mainHeader .logo').height()*$('.mainHeader .logo .btMainLogo').data('hw')}else{var logoWidth=$('.mainHeader .logo').height()*3}}
$('.menuPort nav').addClass('leftNav');$('.menuPort').append('<nav class="rightNav"><ul></ul></nav>');var halfItems=Math.ceil($('.menuPort nav.leftNav ul>li:not(li li)').length*.5);$('.menuPort nav.rightNav > ul').append($('.menuPort nav.leftNav > ul > li').slice(halfItems));$('.menuPort nav.leftNav > ul > li').slice(halfItems).remove();$('.mainHeader .logo').css('transform','translateX('+Math.round(-logoWidth*.5)+'px)');$('.mainHeader .logo').css('width',logoWidth+'px');$('.menuPort nav.leftNav').attr('style','--margin:'+Math.round(logoWidth*.5)+'px;margin-right:'+Math.round(logoWidth*.5)+'px;');$('.menuPort nav.rightNav').attr('style','--margin:'+Math.round(logoWidth*.5)+'px;margin-left:'+Math.round(logoWidth*.5)+'px;')}
function boldthemes_activate_sticky(){var fromTop=$(window).scrollTop();if(fromTop>window.btStickyOffset&&!$('body').hasClass('btStickyHeaderActive')){$('body').addClass('btStickyHeaderActive');boldthemes_requestTimeout(boldthemes_activate_sticky_open,500)}else if(fromTop<=window.btStickyOffset&&$('body').hasClass('btStickyHeaderActive')&&!$('body').hasClass('btStickyHeaderClosed')){$('body').addClass('btStickyHeaderClosed');boldthemes_requestTimeout(boldthemes_activate_sticky_close,500)}}
function boldthemes_activate_sticky_open(){$('body').addClass('btStickyHeaderOpen')}
function boldthemes_activate_sticky_close(){$('body').removeClass('btStickyHeaderActive btStickyHeaderOpen btStickyHeaderClosed')}
window.boldthemes_requestTimeout=function(fn,delay){if(!window.requestAnimationFrame&&!window.webkitRequestAnimationFrame&&!(window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame)&&!window.oRequestAnimationFrame&&!window.msRequestAnimationFrame)
return window.setTimeout(fn,delay);var start=new Date().getTime(),handle=new Object();function loop(){var current=new Date().getTime(),delta=current-start;delta>=delay?fn.call():handle.value=boldthemes_requestAnimFrame(loop)};handle.value=boldthemes_requestAnimFrame(loop);return handle};window.boldthemes_requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback,element){window.setTimeout(callback,1000/60)}})();function responsive_menu_handler(){if(!fullScreenMenuEnabled){if(!verticalMenuEnabled){$(window).on("resize",function(event){if(window.innerWidth<window.responsiveResolution){$('body').addClass('btMenuVertical'+responsiveMenuPosition+' btMenuVertical').removeClass('btMenuHorizontal')}else{$('body').removeClass('btMenuVertical btMenuVertical'+responsiveMenuPosition+' btMenuVerticalOn').addClass('btMenuHorizontal')}
boldthemes_calculate_content_padding()})}}}
function init_menu(){initial_header_setup();if(!fullScreenMenuEnabled){if(verticalMenuEnabled){if($('body').hasClass('btMenuVerticalLeftEnabled'))$('body').addClass('btMenuVerticalLeft btMenuVertical');if($('body').hasClass('btMenuVerticalRightEnabled'))$('body').addClass('btMenuVerticalRight btMenuVertical');}else{if($('body').hasClass('btMenuRightEnabled'))$('body').addClass('btMenuRight btMenuHorizontal');if($('body').hasClass('btMenuLeftEnabled'))$('body').addClass('btMenuLeft btMenuHorizontal');if($('body').hasClass('btMenuCenterBelowEnabled'))$('body').addClass('btMenuCenterBelow btMenuHorizontal');if($('body').hasClass('btMenuCenterEnabled'))$('body').addClass('btMenuCenter btMenuHorizontal');if(window.innerWidth<window.responsiveResolution){$('body').addClass('btMenuVertical'+responsiveMenuPosition+' btMenuVertical').removeClass('btMenuHorizontal')}else{$('body').removeClass('btMenuVertical btMenuVertical'+responsiveMenuPosition+' btMenuVerticalOn').addClass('btMenuHorizontal')}}}
if(!belowMenu){boldthemes_calculate_content_padding()}
setTimeout(function(){$('body').addClass('btMenuInitFinished')},100);if(btStickyEnabled){setTimeout(function(){$(window).scroll(function(){boldthemes_activate_sticky()})},1000)}
if(hasCentralMenu)divide_menu();$('.menuPort ul ul').parent().prepend('<div class="subToggler"></div>');$('.menuPort ul li').on('mouseenter mouseleave',function(e){if($('body').hasClass('btMenuVertical')||$('body').hasClass('btMenuFullScreenCenter')||$('html').hasClass('touch')){return!1}
e.preventDefault();$(this).siblings().removeClass('on');$(this).toggleClass('on')});$('.menuPort ul.menu').on('mouseenter mouseleave',function(e){if($('body').hasClass('btMenuVertical')||$('body').hasClass('btMenuFullScreenCenter')||$('html').hasClass('touch')){return!1}
$(this).toggleClass('hover')});$('div.subToggler').on('click',function(e){var parent_item=$(this).parent();parent_item.siblings().removeClass('on');parent_item.siblings().find('li').removeClass('on');parent_item.siblings().find('ul').hide();parent_item.toggleClass('on');if(parent_item.parent().hasClass('menu'))parent_item.parent().toggleClass('hover');if($('body').hasClass('btMenuVertical')){parent_item.find('ul').first().slideToggle(200)}
return!1});final_header_setup()}
function boldthemes_calculate_content_padding(){if(!belowMenu){if($(window).width()<window.responsiveResolution||verticalMenuEnabled||fullScreenMenuEnabled){$('.btContentWrap, .bt-content-wrap').css('padding-top',$('.btVerticalHeaderTop, .bt-vertical-header-top').height()+'px')}else if(!$('body').hasClass('btStickyHeaderActive')){$('.btContentWrap, .bt-content-wrap').css('padding-top',$('.mainHeader').height()+'px')}}}
function reinit_menu(){top_tools_search();setTimeout(function(){init_menu()},100);boldthemes_calculate_content_padding()}
$(window).on('load',function(){boldthemes_calculate_content_padding()});bt_initHeader=reinit_menu;top_tools_search();init_menu();responsive_menu_handler()})(jQuery);
'use strict';var bt_initTheme;function bt_refresh_cart(){jQuery('.btCartWidgetIcon').off('click').on('click',function(e){jQuery(this).parent().parent().toggleClass('on');jQuery('body').toggleClass('btCartDropdownOn')});jQuery('.verticalMenuCartToggler').off('click').on('click',function(){jQuery(this).closest('.widget_shopping_cart_content').removeClass('on');jQuery('body').removeClass('.btCartDropdownOn')})}(function($){function initFancySelect(){if(typeof $.fn.fancySelect==='function'){$('.no-touch .btSidebar select, .no-touch #btSettingsPanelContent select, .no-touch .wpcf7-form select:not([multiple]):not(.skipFancy)').fancySelect()}}
function initDateInputCheck(){$('.wpcf7-form .wpcf7-date').change(function(i,obj){if($(this).val()!=''){$(this).addClass('bt-date-input-has-value')}else{$(this).removeClass('bt-date-input-has-value')}})}
function loadInitActions(){if(!$('body').hasClass('btRemovePreloader')){$('body').addClass('btRemovePreloader');if(typeof bt_bb_animate_elements==='function'){bt_bb_animate_elements()}}
setTimeout(function(){$(window).trigger('btload');window.boldthemes_loaded=!0},500);$(window).trigger('resize')}
function initFooter(){$('#boldSiteFooterWidgetsRow').attr('data-width',$('#boldSiteFooterWidgetsRow').children().length).children().addClass('bt_bb_column')}
function initModernizrAndDetectBrowser(){var doc=document.documentElement;doc.setAttribute('data-useragent',navigator.userAgent);if(!String.prototype.startsWith){String.prototype.startsWith=function(searchString,position){position=position||0;return this.lastIndexOf(searchString,position)===position}}
if(!String.prototype.endsWith){String.prototype.endsWith=function(searchString,position){var subjectString=this.toString();if(position===undefined||position>subjectString.length){position=subjectString.length}
position-=searchString.length;var lastIndex=subjectString.indexOf(searchString,position);return lastIndex!==-1&&lastIndex===position}}}
function initPreloader(){$('body.bodyPreloader .mainHeader .menu').off('click').on('click','a',function(){var href=$(this).attr('href');if(href!==undefined&&!href.startsWith('#')&&!href.startsWith('mailto')&&!href.startsWith('callto')&&!$(this).hasClass('lightbox')&&!$(this).hasClass('add_to_cart_button')&&$(this).attr('target')!='_blank'){$('body').removeClass('btRemovePreloader');setTimeout(function(){window.location=href},750);return!1}})}
function initRefreshCart(){$('.cart-contents').each(function(){bt_refresh_cart()});var cart_node=jQuery('.widget_shopping_cart')[0];if(cart_node!==undefined){var config={attributes:!0,childList:!0,subtree:!0};var callback=function(mutationsList,observer){for(var index=0;index<mutationsList.length;index){var mutation=mutationsList[index];if(mutation.type=='childList'){jQuery('.btCartWidgetIcon').off('click').on('click',function(e){jQuery(this).parent().parent().toggleClass('on');jQuery('body').toggleClass('btCartDropdownOn')});jQuery('.verticalMenuCartToggler').off('click').on('click',function(e){jQuery(this).closest('.widget_shopping_cart_content').removeClass('on');jQuery('body').removeClass('.btCartDropdownOn')})}
index++}};var observer=new MutationObserver(callback);observer.observe(cart_node,config)}}
function shopEqualHeights(){if($('ul.products li.product .btWooShopLoopItemInner').length>1){var maxHeight=Math.max.apply(null,$('ul.products li.product .btWooShopLoopItemInner').map(function(){return $(this).outerHeight()}).get());$('ul.products li.product .btWooShopLoopItemInner').css('min-height',maxHeight+'px')}}
function initTheme(){initFancySelect();initDateInput();initFooter();initModernizrAndDetectBrowser();initPreloader();initRefreshCart();loadInitActions()}
$(window).on('load',function(){loadInitActions()});$(document).ready(function(){initRefreshCart()});$(window).resize(function(){if($('ul.products li.product .btWooShopLoopItemInner').length>1){$("ul.products li.product .btWooShopLoopItemInner").css('min-height','auto');shopEqualHeights()}});function boldthemes_onCatChange(){if(boldthemes_dropdown.options[boldthemes_dropdown.selectedIndex].value>0){var home_url=document.querySelector(".logo a").href;if(boldthemes_dropdown!==null)location.href=home_url+'?cat='+boldthemes_dropdown.options[boldthemes_dropdown.selectedIndex].value}}
var boldthemes_dropdown=document.querySelector(".widget_categories #cat");if(boldthemes_dropdown!==null){boldthemes_dropdown.onchange=boldthemes_onCatChange}
initFancySelect();initDateInputCheck();initFooter();initModernizrAndDetectBrowser();initPreloader();shopEqualHeights();bt_initTheme=initTheme})(jQuery);
(function( $ ) {
	"use strict";
	function bt_bb_video_background() {
		$( '.bt_bb_section.video' ).each(function() {
			var video = $( this ).find( '.mbYTP_wrapper video' );
			var w = $( this ).outerWidth();
			var h = $( this ).outerHeight();
			if ( w / h > 16 / 9 ) {
				video.css( 'width', '105%' );
				video.css( 'height', '' );
			} else {
				video.css( 'width', '' );
				video.css( 'height', '105%' );
			}
		});
	}

	window.bt_bb_video_callback = function( v ) {
		$( v ).parent().addClass( 'video_on' );
	}

	$( document ).ready( function () {
		bt_bb_video_background();
	});

	$( window ).on( 'resize', function( e ) {		
		bt_bb_video_background();		
	});
	
	$( document ).ready( function ( e ) {		
		$( 'a[href*="#"]:not([href="#"]):not([href*="#tab-"])' ).not( '.menu-scroll-down' ).on( 'click', function() { // .menu-scroll-down - 2017 theme, #tab- woocommerce tabs
			if ( location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname ) {
				var target = $( this.hash );
				target = target.length ? target : $( '[name=' + this.hash.slice(1) +']' );
				if ( target.length ) {
					$( 'html, body' ).animate({
						scrollTop: target.offset().top + parseFloat( window.bt_bb_scroll_nav_offset ? window.bt_bb_scroll_nav_offset : 0 )
					}, 1000 );
					if ( $( 'body' ).hasClass( 'btMenuVerticalOn' ) ) $( '.bt-vertical-menu-trigger, .btVerticalMenuTrigger' ).trigger( 'click' );
					if ( $( 'body' ).hasClass( 'bt-header-responsive-active' ) ) $( '.site-header-responsive-trigger' ).trigger( 'click' );
					return false;
				}
			}
		});		
	});	
})( jQuery );;
// ProgressBar.js 1.0.1
// https://kimmobrunfeldt.github.io/progressbar.js
// License: MIT

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ProgressBar = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* shifty - v1.5.2 - 2016-02-10 - http://jeremyckahn.github.io/shifty */
;(function () {
  var root = this || Function('return this')();

/**
 * Shifty Core
 * By Jeremy Kahn - jeremyckahn@gmail.com
 */

var Tweenable = (function () {

  'use strict';

  // Aliases that get defined later in this function
  var formula;

  // CONSTANTS
  var DEFAULT_SCHEDULE_FUNCTION;
  var DEFAULT_EASING = 'linear';
  var DEFAULT_DURATION = 500;
  var UPDATE_TIME = 1000 / 60;

  var _now = Date.now
       ? Date.now
       : function () {return +new Date();};

  var now = typeof SHIFTY_DEBUG_NOW !== 'undefined' ? SHIFTY_DEBUG_NOW : _now;

  if (typeof window !== 'undefined') {
    // requestAnimationFrame() shim by Paul Irish (modified for Shifty)
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    DEFAULT_SCHEDULE_FUNCTION = window.requestAnimationFrame
       || window.webkitRequestAnimationFrame
       || window.oRequestAnimationFrame
       || window.msRequestAnimationFrame
       || (window.mozCancelRequestAnimationFrame
       && window.mozRequestAnimationFrame)
       || setTimeout;
  } else {
    DEFAULT_SCHEDULE_FUNCTION = setTimeout;
  }

  function noop () {
    // NOOP!
  }

  /**
   * Handy shortcut for doing a for-in loop. This is not a "normal" each
   * function, it is optimized for Shifty.  The iterator function only receives
   * the property name, not the value.
   * @param {Object} obj
   * @param {Function(string)} fn
   * @private
   */
  function each (obj, fn) {
    var key;
    for (key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        fn(key);
      }
    }
  }

  /**
   * Perform a shallow copy of Object properties.
   * @param {Object} targetObject The object to copy into
   * @param {Object} srcObject The object to copy from
   * @return {Object} A reference to the augmented `targetObj` Object
   * @private
   */
  function shallowCopy (targetObj, srcObj) {
    each(srcObj, function (prop) {
      targetObj[prop] = srcObj[prop];
    });

    return targetObj;
  }

  /**
   * Copies each property from src onto target, but only if the property to
   * copy to target is undefined.
   * @param {Object} target Missing properties in this Object are filled in
   * @param {Object} src
   * @private
   */
  function defaults (target, src) {
    each(src, function (prop) {
      if (typeof target[prop] === 'undefined') {
        target[prop] = src[prop];
      }
    });
  }

  /**
   * Calculates the interpolated tween values of an Object for a given
   * timestamp.
   * @param {Number} forPosition The position to compute the state for.
   * @param {Object} currentState Current state properties.
   * @param {Object} originalState: The original state properties the Object is
   * tweening from.
   * @param {Object} targetState: The destination state properties the Object
   * is tweening to.
   * @param {number} duration: The length of the tween in milliseconds.
   * @param {number} timestamp: The UNIX epoch time at which the tween began.
   * @param {Object} easing: This Object's keys must correspond to the keys in
   * targetState.
   * @private
   */
  function tweenProps (forPosition, currentState, originalState, targetState,
    duration, timestamp, easing) {
    var normalizedPosition =
        forPosition < timestamp ? 0 : (forPosition - timestamp) / duration;


    var prop;
    var easingObjectProp;
    var easingFn;
    for (prop in currentState) {
      if (currentState.hasOwnProperty(prop)) {
        easingObjectProp = easing[prop];
        easingFn = typeof easingObjectProp === 'function'
          ? easingObjectProp
          : formula[easingObjectProp];

        currentState[prop] = tweenProp(
          originalState[prop],
          targetState[prop],
          easingFn,
          normalizedPosition
        );
      }
    }

    return currentState;
  }

  /**
   * Tweens a single property.
   * @param {number} start The value that the tween started from.
   * @param {number} end The value that the tween should end at.
   * @param {Function} easingFunc The easing curve to apply to the tween.
   * @param {number} position The normalized position (between 0.0 and 1.0) to
   * calculate the midpoint of 'start' and 'end' against.
   * @return {number} The tweened value.
   * @private
   */
  function tweenProp (start, end, easingFunc, position) {
    return start + (end - start) * easingFunc(position);
  }

  /**
   * Applies a filter to Tweenable instance.
   * @param {Tweenable} tweenable The `Tweenable` instance to call the filter
   * upon.
   * @param {String} filterName The name of the filter to apply.
   * @private
   */
  function applyFilter (tweenable, filterName) {
    var filters = Tweenable.prototype.filter;
    var args = tweenable._filterArgs;

    each(filters, function (name) {
      if (typeof filters[name][filterName] !== 'undefined') {
        filters[name][filterName].apply(tweenable, args);
      }
    });
  }

  var timeoutHandler_endTime;
  var timeoutHandler_currentTime;
  var timeoutHandler_isEnded;
  var timeoutHandler_offset;
  /**
   * Handles the update logic for one step of a tween.
   * @param {Tweenable} tweenable
   * @param {number} timestamp
   * @param {number} delay
   * @param {number} duration
   * @param {Object} currentState
   * @param {Object} originalState
   * @param {Object} targetState
   * @param {Object} easing
   * @param {Function(Object, *, number)} step
   * @param {Function(Function,number)}} schedule
   * @param {number=} opt_currentTimeOverride Needed for accurate timestamp in
   * Tweenable#seek.
   * @private
   */
  function timeoutHandler (tweenable, timestamp, delay, duration, currentState,
    originalState, targetState, easing, step, schedule,
    opt_currentTimeOverride) {

    timeoutHandler_endTime = timestamp + delay + duration;

    timeoutHandler_currentTime =
    Math.min(opt_currentTimeOverride || now(), timeoutHandler_endTime);

    timeoutHandler_isEnded =
      timeoutHandler_currentTime >= timeoutHandler_endTime;

    timeoutHandler_offset = duration - (
      timeoutHandler_endTime - timeoutHandler_currentTime);

    if (tweenable.isPlaying()) {
      if (timeoutHandler_isEnded) {
        step(targetState, tweenable._attachment, timeoutHandler_offset);
        tweenable.stop(true);
      } else {
        tweenable._scheduleId =
          schedule(tweenable._timeoutHandler, UPDATE_TIME);

        applyFilter(tweenable, 'beforeTween');

        // If the animation has not yet reached the start point (e.g., there was
        // delay that has not yet completed), just interpolate the starting
        // position of the tween.
        if (timeoutHandler_currentTime < (timestamp + delay)) {
          tweenProps(1, currentState, originalState, targetState, 1, 1, easing);
        } else {
          tweenProps(timeoutHandler_currentTime, currentState, originalState,
            targetState, duration, timestamp + delay, easing);
        }

        applyFilter(tweenable, 'afterTween');

        step(currentState, tweenable._attachment, timeoutHandler_offset);
      }
    }
  }


  /**
   * Creates a usable easing Object from a string, a function or another easing
   * Object.  If `easing` is an Object, then this function clones it and fills
   * in the missing properties with `"linear"`.
   * @param {Object.<string|Function>} fromTweenParams
   * @param {Object|string|Function} easing
   * @return {Object.<string|Function>}
   * @private
   */
  function composeEasingObject (fromTweenParams, easing) {
    var composedEasing = {};
    var typeofEasing = typeof easing;

    if (typeofEasing === 'string' || typeofEasing === 'function') {
      each(fromTweenParams, function (prop) {
        composedEasing[prop] = easing;
      });
    } else {
      each(fromTweenParams, function (prop) {
        if (!composedEasing[prop]) {
          composedEasing[prop] = easing[prop] || DEFAULT_EASING;
        }
      });
    }

    return composedEasing;
  }

  /**
   * Tweenable constructor.
   * @class Tweenable
   * @param {Object=} opt_initialState The values that the initial tween should
   * start at if a `from` object is not provided to `{{#crossLink
   * "Tweenable/tween:method"}}{{/crossLink}}` or `{{#crossLink
   * "Tweenable/setConfig:method"}}{{/crossLink}}`.
   * @param {Object=} opt_config Configuration object to be passed to
   * `{{#crossLink "Tweenable/setConfig:method"}}{{/crossLink}}`.
   * @module Tweenable
   * @constructor
   */
  function Tweenable (opt_initialState, opt_config) {
    this._currentState = opt_initialState || {};
    this._configured = false;
    this._scheduleFunction = DEFAULT_SCHEDULE_FUNCTION;

    // To prevent unnecessary calls to setConfig do not set default
    // configuration here.  Only set default configuration immediately before
    // tweening if none has been set.
    if (typeof opt_config !== 'undefined') {
      this.setConfig(opt_config);
    }
  }

  /**
   * Configure and start a tween.
   * @method tween
   * @param {Object=} opt_config Configuration object to be passed to
   * `{{#crossLink "Tweenable/setConfig:method"}}{{/crossLink}}`.
   * @chainable
   */
  Tweenable.prototype.tween = function (opt_config) {
    if (this._isTweening) {
      return this;
    }

    // Only set default config if no configuration has been set previously and
    // none is provided now.
    if (opt_config !== undefined || !this._configured) {
      this.setConfig(opt_config);
    }

    this._timestamp = now();
    this._start(this.get(), this._attachment);
    return this.resume();
  };

  /**
   * Configure a tween that will start at some point in the future.
   *
   * @method setConfig
   * @param {Object} config The following values are valid:
   * - __from__ (_Object=_): Starting position.  If omitted, `{{#crossLink
   *   "Tweenable/get:method"}}get(){{/crossLink}}` is used.
   * - __to__ (_Object=_): Ending position.
   * - __duration__ (_number=_): How many milliseconds to animate for.
   * - __delay__ (_delay=_): How many milliseconds to wait before starting the
   *   tween.
   * - __start__ (_Function(Object, *)_): Function to execute when the tween
   *   begins.  Receives the state of the tween as the first parameter and
   *   `attachment` as the second parameter.
   * - __step__ (_Function(Object, *, number)_): Function to execute on every
   *   tick.  Receives `{{#crossLink
   *   "Tweenable/get:method"}}get(){{/crossLink}}` as the first parameter,
   *   `attachment` as the second parameter, and the time elapsed since the
   *   start of the tween as the third. This function is not called on the
   *   final step of the animation, but `finish` is.
   * - __finish__ (_Function(Object, *)_): Function to execute upon tween
   *   completion.  Receives the state of the tween as the first parameter and
   *   `attachment` as the second parameter.
   * - __easing__ (_Object.<string|Function>|string|Function=_): Easing curve
   *   name(s) or function(s) to use for the tween.
   * - __attachment__ (_*_): Cached value that is passed to the
   *   `step`/`start`/`finish` methods.
   * @chainable
   */
  Tweenable.prototype.setConfig = function (config) {
    config = config || {};
    this._configured = true;

    // Attach something to this Tweenable instance (e.g.: a DOM element, an
    // object, a string, etc.);
    this._attachment = config.attachment;

    // Init the internal state
    this._pausedAtTime = null;
    this._scheduleId = null;
    this._delay = config.delay || 0;
    this._start = config.start || noop;
    this._step = config.step || noop;
    this._finish = config.finish || noop;
    this._duration = config.duration || DEFAULT_DURATION;
    this._currentState = shallowCopy({}, config.from) || this.get();
    this._originalState = this.get();
    this._targetState = shallowCopy({}, config.to) || this.get();

    var self = this;
    this._timeoutHandler = function () {
      timeoutHandler(self,
        self._timestamp,
        self._delay,
        self._duration,
        self._currentState,
        self._originalState,
        self._targetState,
        self._easing,
        self._step,
        self._scheduleFunction
      );
    };

    // Aliases used below
    var currentState = this._currentState;
    var targetState = this._targetState;

    // Ensure that there is always something to tween to.
    defaults(targetState, currentState);

    this._easing = composeEasingObject(
      currentState, config.easing || DEFAULT_EASING);

    this._filterArgs =
      [currentState, this._originalState, targetState, this._easing];

    applyFilter(this, 'tweenCreated');
    return this;
  };

  /**
   * @method get
   * @return {Object} The current state.
   */
  Tweenable.prototype.get = function () {
    return shallowCopy({}, this._currentState);
  };

  /**
   * @method set
   * @param {Object} state The current state.
   */
  Tweenable.prototype.set = function (state) {
    this._currentState = state;
  };

  /**
   * Pause a tween.  Paused tweens can be resumed from the point at which they
   * were paused.  This is different from `{{#crossLink
   * "Tweenable/stop:method"}}{{/crossLink}}`, as that method
   * causes a tween to start over when it is resumed.
   * @method pause
   * @chainable
   */
  Tweenable.prototype.pause = function () {
    this._pausedAtTime = now();
    this._isPaused = true;
    return this;
  };

  /**
   * Resume a paused tween.
   * @method resume
   * @chainable
   */
  Tweenable.prototype.resume = function () {
    if (this._isPaused) {
      this._timestamp += now() - this._pausedAtTime;
    }

    this._isPaused = false;
    this._isTweening = true;

    this._timeoutHandler();

    return this;
  };

  /**
   * Move the state of the animation to a specific point in the tween's
   * timeline.  If the animation is not running, this will cause the `step`
   * handlers to be called.
   * @method seek
   * @param {millisecond} millisecond The millisecond of the animation to seek
   * to.  This must not be less than `0`.
   * @chainable
   */
  Tweenable.prototype.seek = function (millisecond) {
    millisecond = Math.max(millisecond, 0);
    var currentTime = now();

    if ((this._timestamp + millisecond) === 0) {
      return this;
    }

    this._timestamp = currentTime - millisecond;

    if (!this.isPlaying()) {
      this._isTweening = true;
      this._isPaused = false;

      // If the animation is not running, call timeoutHandler to make sure that
      // any step handlers are run.
      timeoutHandler(this,
        this._timestamp,
        this._delay,
        this._duration,
        this._currentState,
        this._originalState,
        this._targetState,
        this._easing,
        this._step,
        this._scheduleFunction,
        currentTime
      );

      this.pause();
    }

    return this;
  };

  /**
   * Stops and cancels a tween.
   * @param {boolean=} gotoEnd If `false` or omitted, the tween just stops at
   * its current state, and the `finish` handler is not invoked.  If `true`,
   * the tweened object's values are instantly set to the target values, and
   * `finish` is invoked.
   * @method stop
   * @chainable
   */
  Tweenable.prototype.stop = function (gotoEnd) {
    this._isTweening = false;
    this._isPaused = false;
    this._timeoutHandler = noop;

    (root.cancelAnimationFrame            ||
    root.webkitCancelAnimationFrame     ||
    root.oCancelAnimationFrame          ||
    root.msCancelAnimationFrame         ||
    root.mozCancelRequestAnimationFrame ||
    root.clearTimeout)(this._scheduleId);

    if (gotoEnd) {
      applyFilter(this, 'beforeTween');
      tweenProps(
        1,
        this._currentState,
        this._originalState,
        this._targetState,
        1,
        0,
        this._easing
      );
      applyFilter(this, 'afterTween');
      applyFilter(this, 'afterTweenEnd');
      this._finish.call(this, this._currentState, this._attachment);
    }

    return this;
  };

  /**
   * @method isPlaying
   * @return {boolean} Whether or not a tween is running.
   */
  Tweenable.prototype.isPlaying = function () {
    return this._isTweening && !this._isPaused;
  };

  /**
   * Set a custom schedule function.
   *
   * If a custom function is not set,
   * [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame)
   * is used if available, otherwise
   * [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/Window.setTimeout)
   * is used.
   * @method setScheduleFunction
   * @param {Function(Function,number)} scheduleFunction The function to be
   * used to schedule the next frame to be rendered.
   */
  Tweenable.prototype.setScheduleFunction = function (scheduleFunction) {
    this._scheduleFunction = scheduleFunction;
  };

  /**
   * `delete` all "own" properties.  Call this when the `Tweenable` instance
   * is no longer needed to free memory.
   * @method dispose
   */
  Tweenable.prototype.dispose = function () {
    var prop;
    for (prop in this) {
      if (this.hasOwnProperty(prop)) {
        delete this[prop];
      }
    }
  };

  /**
   * Filters are used for transforming the properties of a tween at various
   * points in a Tweenable's life cycle.  See the README for more info on this.
   * @private
   */
  Tweenable.prototype.filter = {};

  /**
   * This object contains all of the tweens available to Shifty.  It is
   * extensible - simply attach properties to the `Tweenable.prototype.formula`
   * Object following the same format as `linear`.
   *
   * `pos` should be a normalized `number` (between 0 and 1).
   * @property formula
   * @type {Object(function)}
   */
  Tweenable.prototype.formula = {
    linear: function (pos) {
      return pos;
    }
  };

  formula = Tweenable.prototype.formula;

  shallowCopy(Tweenable, {
    'now': now
    ,'each': each
    ,'tweenProps': tweenProps
    ,'tweenProp': tweenProp
    ,'applyFilter': applyFilter
    ,'shallowCopy': shallowCopy
    ,'defaults': defaults
    ,'composeEasingObject': composeEasingObject
  });

  // `root` is provided in the intro/outro files.

  // A hook used for unit testing.
  if (typeof SHIFTY_DEBUG_NOW === 'function') {
    root.timeoutHandler = timeoutHandler;
  }

  // Bootstrap Tweenable appropriately for the environment.
  if (typeof exports === 'object') {
    // CommonJS
    module.exports = Tweenable;
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(function () {return Tweenable;});
  } else if (typeof root.Tweenable === 'undefined') {
    // Browser: Make `Tweenable` globally accessible.
    root.Tweenable = Tweenable;
  }

  return Tweenable;

} ());

/*!
 * All equations are adapted from Thomas Fuchs'
 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
 *
 * Based on Easing Equations (c) 2003 [Robert
 * Penner](http://www.robertpenner.com/), all rights reserved. This work is
 * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
 */

/*!
 *  TERMS OF USE - EASING EQUATIONS
 *  Open source under the BSD License.
 *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
 */

;(function () {

  Tweenable.shallowCopy(Tweenable.prototype.formula, {
    easeInQuad: function (pos) {
      return Math.pow(pos, 2);
    },

    easeOutQuad: function (pos) {
      return -(Math.pow((pos - 1), 2) - 1);
    },

    easeInOutQuad: function (pos) {
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,2);}
      return -0.5 * ((pos -= 2) * pos - 2);
    },

    easeInCubic: function (pos) {
      return Math.pow(pos, 3);
    },

    easeOutCubic: function (pos) {
      return (Math.pow((pos - 1), 3) + 1);
    },

    easeInOutCubic: function (pos) {
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,3);}
      return 0.5 * (Math.pow((pos - 2),3) + 2);
    },

    easeInQuart: function (pos) {
      return Math.pow(pos, 4);
    },

    easeOutQuart: function (pos) {
      return -(Math.pow((pos - 1), 4) - 1);
    },

    easeInOutQuart: function (pos) {
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,4);}
      return -0.5 * ((pos -= 2) * Math.pow(pos,3) - 2);
    },

    easeInQuint: function (pos) {
      return Math.pow(pos, 5);
    },

    easeOutQuint: function (pos) {
      return (Math.pow((pos - 1), 5) + 1);
    },

    easeInOutQuint: function (pos) {
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,5);}
      return 0.5 * (Math.pow((pos - 2),5) + 2);
    },

    easeInSine: function (pos) {
      return -Math.cos(pos * (Math.PI / 2)) + 1;
    },

    easeOutSine: function (pos) {
      return Math.sin(pos * (Math.PI / 2));
    },

    easeInOutSine: function (pos) {
      return (-0.5 * (Math.cos(Math.PI * pos) - 1));
    },

    easeInExpo: function (pos) {
      return (pos === 0) ? 0 : Math.pow(2, 10 * (pos - 1));
    },

    easeOutExpo: function (pos) {
      return (pos === 1) ? 1 : -Math.pow(2, -10 * pos) + 1;
    },

    easeInOutExpo: function (pos) {
      if (pos === 0) {return 0;}
      if (pos === 1) {return 1;}
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(2,10 * (pos - 1));}
      return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
    },

    easeInCirc: function (pos) {
      return -(Math.sqrt(1 - (pos * pos)) - 1);
    },

    easeOutCirc: function (pos) {
      return Math.sqrt(1 - Math.pow((pos - 1), 2));
    },

    easeInOutCirc: function (pos) {
      if ((pos /= 0.5) < 1) {return -0.5 * (Math.sqrt(1 - pos * pos) - 1);}
      return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
    },

    easeOutBounce: function (pos) {
      if ((pos) < (1 / 2.75)) {
        return (7.5625 * pos * pos);
      } else if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
      } else if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
      } else {
        return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
      }
    },

    easeInBack: function (pos) {
      var s = 1.70158;
      return (pos) * pos * ((s + 1) * pos - s);
    },

    easeOutBack: function (pos) {
      var s = 1.70158;
      return (pos = pos - 1) * pos * ((s + 1) * pos + s) + 1;
    },

    easeInOutBack: function (pos) {
      var s = 1.70158;
      if ((pos /= 0.5) < 1) {
        return 0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s));
      }
      return 0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
    },

    elastic: function (pos) {
      // jshint maxlen:90
      return -1 * Math.pow(4,-8 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
    },

    swingFromTo: function (pos) {
      var s = 1.70158;
      return ((pos /= 0.5) < 1) ?
          0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s)) :
          0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
    },

    swingFrom: function (pos) {
      var s = 1.70158;
      return pos * pos * ((s + 1) * pos - s);
    },

    swingTo: function (pos) {
      var s = 1.70158;
      return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
    },

    bounce: function (pos) {
      if (pos < (1 / 2.75)) {
        return (7.5625 * pos * pos);
      } else if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
      } else if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
      } else {
        return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
      }
    },

    bouncePast: function (pos) {
      if (pos < (1 / 2.75)) {
        return (7.5625 * pos * pos);
      } else if (pos < (2 / 2.75)) {
        return 2 - (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
      } else if (pos < (2.5 / 2.75)) {
        return 2 - (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
      } else {
        return 2 - (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
      }
    },

    easeFromTo: function (pos) {
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,4);}
      return -0.5 * ((pos -= 2) * Math.pow(pos,3) - 2);
    },

    easeFrom: function (pos) {
      return Math.pow(pos,4);
    },

    easeTo: function (pos) {
      return Math.pow(pos,0.25);
    }
  });

}());

// jshint maxlen:100
/**
 * The Bezier magic in this file is adapted/copied almost wholesale from
 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/cubic-bezier.js),
 * which was adapted from Apple code (which probably came from
 * [here](http://opensource.apple.com/source/WebCore/WebCore-955.66/platform/graphics/UnitBezier.h)).
 * Special thanks to Apple and Thomas Fuchs for much of this code.
 */

/**
 *  Copyright (c) 2006 Apple Computer, Inc. All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *
 *  1. Redistributions of source code must retain the above copyright notice,
 *  this list of conditions and the following disclaimer.
 *
 *  2. Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation
 *  and/or other materials provided with the distribution.
 *
 *  3. Neither the name of the copyright holder(s) nor the names of any
 *  contributors may be used to endorse or promote products derived from
 *  this software without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 *  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 *  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 *  ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 *  LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 *  CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 *  SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 *  INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 *  CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
;(function () {
  // port of webkit cubic bezier handling by http://www.netzgesta.de/dev/
  function cubicBezierAtTime(t,p1x,p1y,p2x,p2y,duration) {
    var ax = 0,bx = 0,cx = 0,ay = 0,by = 0,cy = 0;
    function sampleCurveX(t) {
      return ((ax * t + bx) * t + cx) * t;
    }
    function sampleCurveY(t) {
      return ((ay * t + by) * t + cy) * t;
    }
    function sampleCurveDerivativeX(t) {
      return (3.0 * ax * t + 2.0 * bx) * t + cx;
    }
    function solveEpsilon(duration) {
      return 1.0 / (200.0 * duration);
    }
    function solve(x,epsilon) {
      return sampleCurveY(solveCurveX(x, epsilon));
    }
    function fabs(n) {
      if (n >= 0) {
        return n;
      } else {
        return 0 - n;
      }
    }
    function solveCurveX(x, epsilon) {
      var t0,t1,t2,x2,d2,i;
      for (t2 = x, i = 0; i < 8; i++) {
        x2 = sampleCurveX(t2) - x;
        if (fabs(x2) < epsilon) {
          return t2;
        }
        d2 = sampleCurveDerivativeX(t2);
        if (fabs(d2) < 1e-6) {
          break;
        }
        t2 = t2 - x2 / d2;
      }
      t0 = 0.0;
      t1 = 1.0;
      t2 = x;
      if (t2 < t0) {
        return t0;
      }
      if (t2 > t1) {
        return t1;
      }
      while (t0 < t1) {
        x2 = sampleCurveX(t2);
        if (fabs(x2 - x) < epsilon) {
          return t2;
        }
        if (x > x2) {
          t0 = t2;
        }else {
          t1 = t2;
        }
        t2 = (t1 - t0) * 0.5 + t0;
      }
      return t2; // Failure.
    }
    cx = 3.0 * p1x;
    bx = 3.0 * (p2x - p1x) - cx;
    ax = 1.0 - cx - bx;
    cy = 3.0 * p1y;
    by = 3.0 * (p2y - p1y) - cy;
    ay = 1.0 - cy - by;
    return solve(t, solveEpsilon(duration));
  }
  /**
   *  getCubicBezierTransition(x1, y1, x2, y2) -> Function
   *
   *  Generates a transition easing function that is compatible
   *  with WebKit's CSS transitions `-webkit-transition-timing-function`
   *  CSS property.
   *
   *  The W3C has more information about CSS3 transition timing functions:
   *  http://www.w3.org/TR/css3-transitions/#transition-timing-function_tag
   *
   *  @param {number} x1
   *  @param {number} y1
   *  @param {number} x2
   *  @param {number} y2
   *  @return {function}
   *  @private
   */
  function getCubicBezierTransition (x1, y1, x2, y2) {
    return function (pos) {
      return cubicBezierAtTime(pos,x1,y1,x2,y2,1);
    };
  }
  // End ported code

  /**
   * Create a Bezier easing function and attach it to `{{#crossLink
   * "Tweenable/formula:property"}}Tweenable#formula{{/crossLink}}`.  This
   * function gives you total control over the easing curve.  Matthew Lein's
   * [Ceaser](http://matthewlein.com/ceaser/) is a useful tool for visualizing
   * the curves you can make with this function.
   * @method setBezierFunction
   * @param {string} name The name of the easing curve.  Overwrites the old
   * easing function on `{{#crossLink
   * "Tweenable/formula:property"}}Tweenable#formula{{/crossLink}}` if it
   * exists.
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @return {function} The easing function that was attached to
   * Tweenable.prototype.formula.
   */
  Tweenable.setBezierFunction = function (name, x1, y1, x2, y2) {
    var cubicBezierTransition = getCubicBezierTransition(x1, y1, x2, y2);
    cubicBezierTransition.displayName = name;
    cubicBezierTransition.x1 = x1;
    cubicBezierTransition.y1 = y1;
    cubicBezierTransition.x2 = x2;
    cubicBezierTransition.y2 = y2;

    return Tweenable.prototype.formula[name] = cubicBezierTransition;
  };


  /**
   * `delete` an easing function from `{{#crossLink
   * "Tweenable/formula:property"}}Tweenable#formula{{/crossLink}}`.  Be
   * careful with this method, as it `delete`s whatever easing formula matches
   * `name` (which means you can delete standard Shifty easing functions).
   * @method unsetBezierFunction
   * @param {string} name The name of the easing function to delete.
   * @return {function}
   */
  Tweenable.unsetBezierFunction = function (name) {
    delete Tweenable.prototype.formula[name];
  };

})();

;(function () {

  function getInterpolatedValues (
    from, current, targetState, position, easing, delay) {
    return Tweenable.tweenProps(
      position, current, from, targetState, 1, delay, easing);
  }

  // Fake a Tweenable and patch some internals.  This approach allows us to
  // skip uneccessary processing and object recreation, cutting down on garbage
  // collection pauses.
  var mockTweenable = new Tweenable();
  mockTweenable._filterArgs = [];

  /**
   * Compute the midpoint of two Objects.  This method effectively calculates a
   * specific frame of animation that `{{#crossLink
   * "Tweenable/tween:method"}}{{/crossLink}}` does many times over the course
   * of a full tween.
   *
   *     var interpolatedValues = Tweenable.interpolate({
   *       width: '100px',
   *       opacity: 0,
   *       color: '#fff'
   *     }, {
   *       width: '200px',
   *       opacity: 1,
   *       color: '#000'
   *     }, 0.5);
   *
   *     console.log(interpolatedValues);
   *     // {opacity: 0.5, width: "150px", color: "rgb(127,127,127)"}
   *
   * @static
   * @method interpolate
   * @param {Object} from The starting values to tween from.
   * @param {Object} targetState The ending values to tween to.
   * @param {number} position The normalized position value (between `0.0` and
   * `1.0`) to interpolate the values between `from` and `to` for.  `from`
   * represents `0` and `to` represents `1`.
   * @param {Object.<string|Function>|string|Function} easing The easing
   * curve(s) to calculate the midpoint against.  You can reference any easing
   * function attached to `Tweenable.prototype.formula`, or provide the easing
   * function(s) directly.  If omitted, this defaults to "linear".
   * @param {number=} opt_delay Optional delay to pad the beginning of the
   * interpolated tween with.  This increases the range of `position` from (`0`
   * through `1`) to (`0` through `1 + opt_delay`).  So, a delay of `0.5` would
   * increase all valid values of `position` to numbers between `0` and `1.5`.
   * @return {Object}
   */
  Tweenable.interpolate = function (
    from, targetState, position, easing, opt_delay) {

    var current = Tweenable.shallowCopy({}, from);
    var delay = opt_delay || 0;
    var easingObject = Tweenable.composeEasingObject(
      from, easing || 'linear');

    mockTweenable.set({});

    // Alias and reuse the _filterArgs array instead of recreating it.
    var filterArgs = mockTweenable._filterArgs;
    filterArgs.length = 0;
    filterArgs[0] = current;
    filterArgs[1] = from;
    filterArgs[2] = targetState;
    filterArgs[3] = easingObject;

    // Any defined value transformation must be applied
    Tweenable.applyFilter(mockTweenable, 'tweenCreated');
    Tweenable.applyFilter(mockTweenable, 'beforeTween');

    var interpolatedValues = getInterpolatedValues(
      from, current, targetState, position, easingObject, delay);

    // Transform values back into their original format
    Tweenable.applyFilter(mockTweenable, 'afterTween');

    return interpolatedValues;
  };

}());

/**
 * This module adds string interpolation support to Shifty.
 *
 * The Token extension allows Shifty to tween numbers inside of strings.  Among
 * other things, this allows you to animate CSS properties.  For example, you
 * can do this:
 *
 *     var tweenable = new Tweenable();
 *     tweenable.tween({
 *       from: { transform: 'translateX(45px)' },
 *       to: { transform: 'translateX(90xp)' }
 *     });
 *
 * `translateX(45)` will be tweened to `translateX(90)`.  To demonstrate:
 *
 *     var tweenable = new Tweenable();
 *     tweenable.tween({
 *       from: { transform: 'translateX(45px)' },
 *       to: { transform: 'translateX(90px)' },
 *       step: function (state) {
 *         console.log(state.transform);
 *       }
 *     });
 *
 * The above snippet will log something like this in the console:
 *
 *     translateX(60.3px)
 *     ...
 *     translateX(76.05px)
 *     ...
 *     translateX(90px)
 *
 * Another use for this is animating colors:
 *
 *     var tweenable = new Tweenable();
 *     tweenable.tween({
 *       from: { color: 'rgb(0,255,0)' },
 *       to: { color: 'rgb(255,0,255)' },
 *       step: function (state) {
 *         console.log(state.color);
 *       }
 *     });
 *
 * The above snippet will log something like this:
 *
 *     rgb(84,170,84)
 *     ...
 *     rgb(170,84,170)
 *     ...
 *     rgb(255,0,255)
 *
 * This extension also supports hexadecimal colors, in both long (`#ff00ff`)
 * and short (`#f0f`) forms.  Be aware that hexadecimal input values will be
 * converted into the equivalent RGB output values.  This is done to optimize
 * for performance.
 *
 *     var tweenable = new Tweenable();
 *     tweenable.tween({
 *       from: { color: '#0f0' },
 *       to: { color: '#f0f' },
 *       step: function (state) {
 *         console.log(state.color);
 *       }
 *     });
 *
 * This snippet will generate the same output as the one before it because
 * equivalent values were supplied (just in hexadecimal form rather than RGB):
 *
 *     rgb(84,170,84)
 *     ...
 *     rgb(170,84,170)
 *     ...
 *     rgb(255,0,255)
 *
 * ## Easing support
 *
 * Easing works somewhat differently in the Token extension.  This is because
 * some CSS properties have multiple values in them, and you might need to
 * tween each value along its own easing curve.  A basic example:
 *
 *     var tweenable = new Tweenable();
 *     tweenable.tween({
 *       from: { transform: 'translateX(0px) translateY(0px)' },
 *       to: { transform:   'translateX(100px) translateY(100px)' },
 *       easing: { transform: 'easeInQuad' },
 *       step: function (state) {
 *         console.log(state.transform);
 *       }
 *     });
 *
 * The above snippet will create values like this:
 *
 *     translateX(11.56px) translateY(11.56px)
 *     ...
 *     translateX(46.24px) translateY(46.24px)
 *     ...
 *     translateX(100px) translateY(100px)
 *
 * In this case, the values for `translateX` and `translateY` are always the
 * same for each step of the tween, because they have the same start and end
 * points and both use the same easing curve.  We can also tween `translateX`
 * and `translateY` along independent curves:
 *
 *     var tweenable = new Tweenable();
 *     tweenable.tween({
 *       from: { transform: 'translateX(0px) translateY(0px)' },
 *       to: { transform:   'translateX(100px) translateY(100px)' },
 *       easing: { transform: 'easeInQuad bounce' },
 *       step: function (state) {
 *         console.log(state.transform);
 *       }
 *     });
 *
 * The above snippet will create values like this:
 *
 *     translateX(10.89px) translateY(82.35px)
 *     ...
 *     translateX(44.89px) translateY(86.73px)
 *     ...
 *     translateX(100px) translateY(100px)
 *
 * `translateX` and `translateY` are not in sync anymore, because `easeInQuad`
 * was specified for `translateX` and `bounce` for `translateY`.  Mixing and
 * matching easing curves can make for some interesting motion in your
 * animations.
 *
 * The order of the space-separated easing curves correspond the token values
 * they apply to.  If there are more token values than easing curves listed,
 * the last easing curve listed is used.
 * @submodule Tweenable.token
 */

// token function is defined above only so that dox-foundation sees it as
// documentation and renders it.  It is never used, and is optimized away at
// build time.

;(function (Tweenable) {

  /**
   * @typedef {{
   *   formatString: string
   *   chunkNames: Array.<string>
   * }}
   * @private
   */
  var formatManifest;

  // CONSTANTS

  var R_NUMBER_COMPONENT = /(\d|\-|\.)/;
  var R_FORMAT_CHUNKS = /([^\-0-9\.]+)/g;
  var R_UNFORMATTED_VALUES = /[0-9.\-]+/g;
  var R_RGB = new RegExp(
    'rgb\\(' + R_UNFORMATTED_VALUES.source +
    (/,\s*/.source) + R_UNFORMATTED_VALUES.source +
    (/,\s*/.source) + R_UNFORMATTED_VALUES.source + '\\)', 'g');
  var R_RGB_PREFIX = /^.*\(/;
  var R_HEX = /#([0-9]|[a-f]){3,6}/gi;
  var VALUE_PLACEHOLDER = 'VAL';

  // HELPERS

  /**
   * @param {Array.number} rawValues
   * @param {string} prefix
   *
   * @return {Array.<string>}
   * @private
   */
  function getFormatChunksFrom (rawValues, prefix) {
    var accumulator = [];

    var rawValuesLength = rawValues.length;
    var i;

    for (i = 0; i < rawValuesLength; i++) {
      accumulator.push('_' + prefix + '_' + i);
    }

    return accumulator;
  }

  /**
   * @param {string} formattedString
   *
   * @return {string}
   * @private
   */
  function getFormatStringFrom (formattedString) {
    var chunks = formattedString.match(R_FORMAT_CHUNKS);

    if (!chunks) {
      // chunks will be null if there were no tokens to parse in
      // formattedString (for example, if formattedString is '2').  Coerce
      // chunks to be useful here.
      chunks = ['', ''];

      // If there is only one chunk, assume that the string is a number
      // followed by a token...
      // NOTE: This may be an unwise assumption.
    } else if (chunks.length === 1 ||
      // ...or if the string starts with a number component (".", "-", or a
      // digit)...
    formattedString[0].match(R_NUMBER_COMPONENT)) {
      // ...prepend an empty string here to make sure that the formatted number
      // is properly replaced by VALUE_PLACEHOLDER
      chunks.unshift('');
    }

    return chunks.join(VALUE_PLACEHOLDER);
  }

  /**
   * Convert all hex color values within a string to an rgb string.
   *
   * @param {Object} stateObject
   *
   * @return {Object} The modified obj
   * @private
   */
  function sanitizeObjectForHexProps (stateObject) {
    Tweenable.each(stateObject, function (prop) {
      var currentProp = stateObject[prop];

      if (typeof currentProp === 'string' && currentProp.match(R_HEX)) {
        stateObject[prop] = sanitizeHexChunksToRGB(currentProp);
      }
    });
  }

  /**
   * @param {string} str
   *
   * @return {string}
   * @private
   */
  function  sanitizeHexChunksToRGB (str) {
    return filterStringChunks(R_HEX, str, convertHexToRGB);
  }

  /**
   * @param {string} hexString
   *
   * @return {string}
   * @private
   */
  function convertHexToRGB (hexString) {
    var rgbArr = hexToRGBArray(hexString);
    return 'rgb(' + rgbArr[0] + ',' + rgbArr[1] + ',' + rgbArr[2] + ')';
  }

  var hexToRGBArray_returnArray = [];
  /**
   * Convert a hexadecimal string to an array with three items, one each for
   * the red, blue, and green decimal values.
   *
   * @param {string} hex A hexadecimal string.
   *
   * @returns {Array.<number>} The converted Array of RGB values if `hex` is a
   * valid string, or an Array of three 0's.
   * @private
   */
  function hexToRGBArray (hex) {

    hex = hex.replace(/#/, '');

    // If the string is a shorthand three digit hex notation, normalize it to
    // the standard six digit notation
    if (hex.length === 3) {
      hex = hex.split('');
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    hexToRGBArray_returnArray[0] = hexToDec(hex.substr(0, 2));
    hexToRGBArray_returnArray[1] = hexToDec(hex.substr(2, 2));
    hexToRGBArray_returnArray[2] = hexToDec(hex.substr(4, 2));

    return hexToRGBArray_returnArray;
  }

  /**
   * Convert a base-16 number to base-10.
   *
   * @param {Number|String} hex The value to convert
   *
   * @returns {Number} The base-10 equivalent of `hex`.
   * @private
   */
  function hexToDec (hex) {
    return parseInt(hex, 16);
  }

  /**
   * Runs a filter operation on all chunks of a string that match a RegExp
   *
   * @param {RegExp} pattern
   * @param {string} unfilteredString
   * @param {function(string)} filter
   *
   * @return {string}
   * @private
   */
  function filterStringChunks (pattern, unfilteredString, filter) {
    var pattenMatches = unfilteredString.match(pattern);
    var filteredString = unfilteredString.replace(pattern, VALUE_PLACEHOLDER);

    if (pattenMatches) {
      var pattenMatchesLength = pattenMatches.length;
      var currentChunk;

      for (var i = 0; i < pattenMatchesLength; i++) {
        currentChunk = pattenMatches.shift();
        filteredString = filteredString.replace(
          VALUE_PLACEHOLDER, filter(currentChunk));
      }
    }

    return filteredString;
  }

  /**
   * Check for floating point values within rgb strings and rounds them.
   *
   * @param {string} formattedString
   *
   * @return {string}
   * @private
   */
  function sanitizeRGBChunks (formattedString) {
    return filterStringChunks(R_RGB, formattedString, sanitizeRGBChunk);
  }

  /**
   * @param {string} rgbChunk
   *
   * @return {string}
   * @private
   */
  function sanitizeRGBChunk (rgbChunk) {
    var numbers = rgbChunk.match(R_UNFORMATTED_VALUES);
    var numbersLength = numbers.length;
    var sanitizedString = rgbChunk.match(R_RGB_PREFIX)[0];

    for (var i = 0; i < numbersLength; i++) {
      sanitizedString += parseInt(numbers[i], 10) + ',';
    }

    sanitizedString = sanitizedString.slice(0, -1) + ')';

    return sanitizedString;
  }

  /**
   * @param {Object} stateObject
   *
   * @return {Object} An Object of formatManifests that correspond to
   * the string properties of stateObject
   * @private
   */
  function getFormatManifests (stateObject) {
    var manifestAccumulator = {};

    Tweenable.each(stateObject, function (prop) {
      var currentProp = stateObject[prop];

      if (typeof currentProp === 'string') {
        var rawValues = getValuesFrom(currentProp);

        manifestAccumulator[prop] = {
          'formatString': getFormatStringFrom(currentProp)
          ,'chunkNames': getFormatChunksFrom(rawValues, prop)
        };
      }
    });

    return manifestAccumulator;
  }

  /**
   * @param {Object} stateObject
   * @param {Object} formatManifests
   * @private
   */
  function expandFormattedProperties (stateObject, formatManifests) {
    Tweenable.each(formatManifests, function (prop) {
      var currentProp = stateObject[prop];
      var rawValues = getValuesFrom(currentProp);
      var rawValuesLength = rawValues.length;

      for (var i = 0; i < rawValuesLength; i++) {
        stateObject[formatManifests[prop].chunkNames[i]] = +rawValues[i];
      }

      delete stateObject[prop];
    });
  }

  /**
   * @param {Object} stateObject
   * @param {Object} formatManifests
   * @private
   */
  function collapseFormattedProperties (stateObject, formatManifests) {
    Tweenable.each(formatManifests, function (prop) {
      var currentProp = stateObject[prop];
      var formatChunks = extractPropertyChunks(
        stateObject, formatManifests[prop].chunkNames);
      var valuesList = getValuesList(
        formatChunks, formatManifests[prop].chunkNames);
      currentProp = getFormattedValues(
        formatManifests[prop].formatString, valuesList);
      stateObject[prop] = sanitizeRGBChunks(currentProp);
    });
  }

  /**
   * @param {Object} stateObject
   * @param {Array.<string>} chunkNames
   *
   * @return {Object} The extracted value chunks.
   * @private
   */
  function extractPropertyChunks (stateObject, chunkNames) {
    var extractedValues = {};
    var currentChunkName, chunkNamesLength = chunkNames.length;

    for (var i = 0; i < chunkNamesLength; i++) {
      currentChunkName = chunkNames[i];
      extractedValues[currentChunkName] = stateObject[currentChunkName];
      delete stateObject[currentChunkName];
    }

    return extractedValues;
  }

  var getValuesList_accumulator = [];
  /**
   * @param {Object} stateObject
   * @param {Array.<string>} chunkNames
   *
   * @return {Array.<number>}
   * @private
   */
  function getValuesList (stateObject, chunkNames) {
    getValuesList_accumulator.length = 0;
    var chunkNamesLength = chunkNames.length;

    for (var i = 0; i < chunkNamesLength; i++) {
      getValuesList_accumulator.push(stateObject[chunkNames[i]]);
    }

    return getValuesList_accumulator;
  }

  /**
   * @param {string} formatString
   * @param {Array.<number>} rawValues
   *
   * @return {string}
   * @private
   */
  function getFormattedValues (formatString, rawValues) {
    var formattedValueString = formatString;
    var rawValuesLength = rawValues.length;

    for (var i = 0; i < rawValuesLength; i++) {
      formattedValueString = formattedValueString.replace(
        VALUE_PLACEHOLDER, +rawValues[i].toFixed(4));
    }

    return formattedValueString;
  }

  /**
   * Note: It's the duty of the caller to convert the Array elements of the
   * return value into numbers.  This is a performance optimization.
   *
   * @param {string} formattedString
   *
   * @return {Array.<string>|null}
   * @private
   */
  function getValuesFrom (formattedString) {
    return formattedString.match(R_UNFORMATTED_VALUES);
  }

  /**
   * @param {Object} easingObject
   * @param {Object} tokenData
   * @private
   */
  function expandEasingObject (easingObject, tokenData) {
    Tweenable.each(tokenData, function (prop) {
      var currentProp = tokenData[prop];
      var chunkNames = currentProp.chunkNames;
      var chunkLength = chunkNames.length;

      var easing = easingObject[prop];
      var i;

      if (typeof easing === 'string') {
        var easingChunks = easing.split(' ');
        var lastEasingChunk = easingChunks[easingChunks.length - 1];

        for (i = 0; i < chunkLength; i++) {
          easingObject[chunkNames[i]] = easingChunks[i] || lastEasingChunk;
        }

      } else {
        for (i = 0; i < chunkLength; i++) {
          easingObject[chunkNames[i]] = easing;
        }
      }

      delete easingObject[prop];
    });
  }

  /**
   * @param {Object} easingObject
   * @param {Object} tokenData
   * @private
   */
  function collapseEasingObject (easingObject, tokenData) {
    Tweenable.each(tokenData, function (prop) {
      var currentProp = tokenData[prop];
      var chunkNames = currentProp.chunkNames;
      var chunkLength = chunkNames.length;

      var firstEasing = easingObject[chunkNames[0]];
      var typeofEasings = typeof firstEasing;

      if (typeofEasings === 'string') {
        var composedEasingString = '';

        for (var i = 0; i < chunkLength; i++) {
          composedEasingString += ' ' + easingObject[chunkNames[i]];
          delete easingObject[chunkNames[i]];
        }

        easingObject[prop] = composedEasingString.substr(1);
      } else {
        easingObject[prop] = firstEasing;
      }
    });
  }

  Tweenable.prototype.filter.token = {
    'tweenCreated': function (currentState, fromState, toState, easingObject) {
      sanitizeObjectForHexProps(currentState);
      sanitizeObjectForHexProps(fromState);
      sanitizeObjectForHexProps(toState);
      this._tokenData = getFormatManifests(currentState);
    },

    'beforeTween': function (currentState, fromState, toState, easingObject) {
      expandEasingObject(easingObject, this._tokenData);
      expandFormattedProperties(currentState, this._tokenData);
      expandFormattedProperties(fromState, this._tokenData);
      expandFormattedProperties(toState, this._tokenData);
    },

    'afterTween': function (currentState, fromState, toState, easingObject) {
      collapseFormattedProperties(currentState, this._tokenData);
      collapseFormattedProperties(fromState, this._tokenData);
      collapseFormattedProperties(toState, this._tokenData);
      collapseEasingObject(easingObject, this._tokenData);
    }
  };

} (Tweenable));

}).call(null);

},{}],2:[function(require,module,exports){
// Circle shaped progress bar

var Shape = require('./shape');
var utils = require('./utils');

var Circle = function Circle(container, options) {
    // Use two arcs to form a circle
    // See this answer http://stackoverflow.com/a/10477334/1446092
    this._pathTemplate =
        'M 50,50 m 0,-{radius}' +
        ' a {radius},{radius} 0 1 1 0,{2radius}' +
        ' a {radius},{radius} 0 1 1 0,-{2radius}';

    this.containerAspectRatio = 1;

    Shape.apply(this, arguments);
};

Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;

Circle.prototype._pathString = function _pathString(opts) {
    var widthOfWider = opts.strokeWidth;
    if (opts.trailWidth && opts.trailWidth > opts.strokeWidth) {
        widthOfWider = opts.trailWidth;
    }

    var r = 50 - widthOfWider / 2;

    return utils.render(this._pathTemplate, {
        radius: r,
        '2radius': r * 2
    });
};

Circle.prototype._trailString = function _trailString(opts) {
    return this._pathString(opts);
};

module.exports = Circle;

},{"./shape":7,"./utils":8}],3:[function(require,module,exports){
// Line shaped progress bar

var Shape = require('./shape');
var utils = require('./utils');

var Line = function Line(container, options) {
    this._pathTemplate = 'M 0,{center} L 100,{center}';
    Shape.apply(this, arguments);
};

Line.prototype = new Shape();
Line.prototype.constructor = Line;

Line.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute('viewBox', '0 0 100 ' + opts.strokeWidth);
    svg.setAttribute('preserveAspectRatio', 'none');
};

Line.prototype._pathString = function _pathString(opts) {
    return utils.render(this._pathTemplate, {
        center: opts.strokeWidth / 2
    });
};

Line.prototype._trailString = function _trailString(opts) {
    return this._pathString(opts);
};

module.exports = Line;

},{"./shape":7,"./utils":8}],4:[function(require,module,exports){
module.exports = {
    // Higher level API, different shaped progress bars
    Line: require('./line'),
    Circle: require('./circle'),
    SemiCircle: require('./semicircle'),

    // Lower level API to use any SVG path
    Path: require('./path'),

    // Base-class for creating new custom shapes
    // to be in line with the API of built-in shapes
    // Undocumented.
    Shape: require('./shape'),

    // Internal utils, undocumented.
    utils: require('./utils')
};

},{"./circle":2,"./line":3,"./path":5,"./semicircle":6,"./shape":7,"./utils":8}],5:[function(require,module,exports){
// Lower level API to animate any kind of svg path

var Tweenable = require('shifty');
var utils = require('./utils');

var EASING_ALIASES = {
    easeIn: 'easeInCubic',
    easeOut: 'easeOutCubic',
    easeInOut: 'easeInOutCubic'
};

var Path = function Path(path, opts) {
    // Throw a better error if not initialized with `new` keyword
    if (!(this instanceof Path)) {
        throw new Error('Constructor was called without new keyword');
    }

    // Default parameters for animation
    opts = utils.extend({
        duration: 800,
        easing: 'linear',
        from: {},
        to: {},
        step: function() {}
    }, opts);

    var element;
    if (utils.isString(path)) {
        element = document.querySelector(path);
    } else {
        element = path;
    }

    // Reveal .path as public attribute
    this.path = element;
    this._opts = opts;
    this._tweenable = null;

    // Set up the starting positions
    var length = this.path.getTotalLength();
    this.path.style.strokeDasharray = length + ' ' + length;
    this.set(0);
};

Path.prototype.value = function value() {
    var offset = this._getComputedDashOffset();
    var length = this.path.getTotalLength();

    var progress = 1 - offset / length;
    // Round number to prevent returning very small number like 1e-30, which
    // is practically 0
    return parseFloat(progress.toFixed(6), 10);
};

Path.prototype.set = function set(progress) {
    this.stop();

    this.path.style.strokeDashoffset = this._progressToOffset(progress);

    var step = this._opts.step;
    if (utils.isFunction(step)) {
        var easing = this._easing(this._opts.easing);
        var values = this._calculateTo(progress, easing);
        var reference = this._opts.shape || this;
        step(values, reference, this._opts.attachment);
    }
};

Path.prototype.stop = function stop() {
    this._stopTween();
    this.path.style.strokeDashoffset = this._getComputedDashOffset();
};

// Method introduced here:
// http://jakearchibald.com/2013/animated-line-drawing-svg/
Path.prototype.animate = function animate(progress, opts, cb) {
    opts = opts || {};

    if (utils.isFunction(opts)) {
        cb = opts;
        opts = {};
    }

    var passedOpts = utils.extend({}, opts);

    // Copy default opts to new object so defaults are not modified
    var defaultOpts = utils.extend({}, this._opts);
    opts = utils.extend(defaultOpts, opts);

    var shiftyEasing = this._easing(opts.easing);
    var values = this._resolveFromAndTo(progress, shiftyEasing, passedOpts);

    this.stop();

    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    this.path.getBoundingClientRect();

    var offset = this._getComputedDashOffset();
    var newOffset = this._progressToOffset(progress);

    var self = this;
    this._tweenable = new Tweenable();
    this._tweenable.tween({
        from: utils.extend({ offset: offset }, values.from),
        to: utils.extend({ offset: newOffset }, values.to),
        duration: opts.duration,
        easing: shiftyEasing,
        step: function(state) {
            self.path.style.strokeDashoffset = state.offset;
            var reference = opts.shape || self;
            opts.step(state, reference, opts.attachment);
        },
        finish: function(state) {
            if (utils.isFunction(cb)) {
                cb();
            }
        }
    });
};

Path.prototype._getComputedDashOffset = function _getComputedDashOffset() {
    var computedStyle = window.getComputedStyle(this.path, null);
    return parseFloat(computedStyle.getPropertyValue('stroke-dashoffset'), 10);
};

Path.prototype._progressToOffset = function _progressToOffset(progress) {
    var length = this.path.getTotalLength();
    return length - progress * length;
};

// Resolves from and to values for animation.
Path.prototype._resolveFromAndTo = function _resolveFromAndTo(progress, easing, opts) {
    if (opts.from && opts.to) {
        return {
            from: opts.from,
            to: opts.to
        };
    }

    return {
        from: this._calculateFrom(easing),
        to: this._calculateTo(progress, easing)
    };
};

// Calculate `from` values from options passed at initialization
Path.prototype._calculateFrom = function _calculateFrom(easing) {
    return Tweenable.interpolate(this._opts.from, this._opts.to, this.value(), easing);
};

// Calculate `to` values from options passed at initialization
Path.prototype._calculateTo = function _calculateTo(progress, easing) {
    return Tweenable.interpolate(this._opts.from, this._opts.to, progress, easing);
};

Path.prototype._stopTween = function _stopTween() {
    if (this._tweenable !== null) {
        this._tweenable.stop();
        this._tweenable = null;
    }
};

Path.prototype._easing = function _easing(easing) {
    if (EASING_ALIASES.hasOwnProperty(easing)) {
        return EASING_ALIASES[easing];
    }

    return easing;
};

module.exports = Path;

},{"./utils":8,"shifty":1}],6:[function(require,module,exports){
// Semi-SemiCircle shaped progress bar

var Shape = require('./shape');
var Circle = require('./circle');
var utils = require('./utils');

var SemiCircle = function SemiCircle(container, options) {
    // Use one arc to form a SemiCircle
    // See this answer http://stackoverflow.com/a/10477334/1446092
    this._pathTemplate =
        'M 50,50 m -{radius},0' +
        ' a {radius},{radius} 0 1 1 {2radius},0';

    this.containerAspectRatio = 2;

    Shape.apply(this, arguments);
};

SemiCircle.prototype = new Shape();
SemiCircle.prototype.constructor = SemiCircle;

SemiCircle.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute('viewBox', '0 0 100 50');
};

SemiCircle.prototype._initializeTextContainer = function _initializeTextContainer(
    opts,
    container,
    textContainer
) {
    if (opts.text.style) {
        // Reset top style
        textContainer.style.top = 'auto';
        textContainer.style.bottom = '0';

        if (opts.text.alignToBottom) {
            utils.setStyle(textContainer, 'transform', 'translate(-50%, 0)');
        } else {
            utils.setStyle(textContainer, 'transform', 'translate(-50%, 50%)');
        }
    }
};

// Share functionality with Circle, just have different path
SemiCircle.prototype._pathString = Circle.prototype._pathString;
SemiCircle.prototype._trailString = Circle.prototype._trailString;

module.exports = SemiCircle;

},{"./circle":2,"./shape":7,"./utils":8}],7:[function(require,module,exports){
// Base object for different progress bar shapes

var Path = require('./path');
var utils = require('./utils');

var DESTROYED_ERROR = 'Object is destroyed';

var Shape = function Shape(container, opts) {
    // Throw a better error if progress bars are not initialized with `new`
    // keyword
    if (!(this instanceof Shape)) {
        throw new Error('Constructor was called without new keyword');
    }

    // Prevent calling constructor without parameters so inheritance
    // works correctly. To understand, this is how Shape is inherited:
    //
    //   Line.prototype = new Shape();
    //
    // We just want to set the prototype for Line.
    if (arguments.length === 0) {
        return;
    }

    // Default parameters for progress bar creation
    this._opts = utils.extend({
        color: '#555',
        strokeWidth: 1.0,
        trailColor: null,
        trailWidth: null,
        fill: null,
        text: {
            style: {
                color: null,
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: 0,
                margin: 0,
                transform: {
                    prefix: true,
                    value: 'translate(-50%, -50%)'
                }
            },
            autoStyleContainer: true,
            alignToBottom: true,
            value: null,
            className: 'progressbar-text'
        },
        svgStyle: {
            display: 'block',
            width: '100%'
        },
        warnings: false
    }, opts, true);  // Use recursive extend

    // If user specifies e.g. svgStyle or text style, the whole object
    // should replace the defaults to make working with styles easier
    if (utils.isObject(opts) && opts.svgStyle !== undefined) {
        this._opts.svgStyle = opts.svgStyle;
    }
    if (utils.isObject(opts) && utils.isObject(opts.text) && opts.text.style !== undefined) {
        this._opts.text.style = opts.text.style;
    }

    var svgView = this._createSvgView(this._opts);

    var element;
    if (utils.isString(container)) {
        element = document.querySelector(container);
    } else {
        element = container;
    }

    if (!element) {
        throw new Error('Container does not exist: ' + container);
    }

    this._container = element;
    this._container.appendChild(svgView.svg);
    if (this._opts.warnings) {
        this._warnContainerAspectRatio(this._container);
    }

    if (this._opts.svgStyle) {
        utils.setStyles(svgView.svg, this._opts.svgStyle);
    }

    // Expose public attributes before Path initialization
    this.svg = svgView.svg;
    this.path = svgView.path;
    this.trail = svgView.trail;
    this.text = null;

    var newOpts = utils.extend({
        attachment: undefined,
        shape: this
    }, this._opts);
    this._progressPath = new Path(svgView.path, newOpts);

    if (utils.isObject(this._opts.text) && this._opts.text.value !== null) {
        this.setText(this._opts.text.value);
    }
};

Shape.prototype.animate = function animate(progress, opts, cb) {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    this._progressPath.animate(progress, opts, cb);
};

Shape.prototype.stop = function stop() {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    // Don't crash if stop is called inside step function
    if (this._progressPath === undefined) {
        return;
    }

    this._progressPath.stop();
};

Shape.prototype.destroy = function destroy() {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    this.stop();
    this.svg.parentNode.removeChild(this.svg);
    this.svg = null;
    this.path = null;
    this.trail = null;
    this._progressPath = null;

    if (this.text !== null) {
        this.text.parentNode.removeChild(this.text);
        this.text = null;
    }
};

Shape.prototype.set = function set(progress) {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    this._progressPath.set(progress);
};

Shape.prototype.value = function value() {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    if (this._progressPath === undefined) {
        return 0;
    }

    return this._progressPath.value();
};

Shape.prototype.setText = function setText(newText) {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    if (this.text === null) {
        // Create new text node
        this.text = this._createTextContainer(this._opts, this._container);
        this._container.appendChild(this.text);
    }

    // Remove previous text and add new
    if (utils.isObject(newText)) {
        utils.removeChildren(this.text);
        this.text.appendChild(newText);
    } else {
        this.text.innerHTML = newText;
    }
};

Shape.prototype._createSvgView = function _createSvgView(opts) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this._initializeSvg(svg, opts);

    var trailPath = null;
    // Each option listed in the if condition are 'triggers' for creating
    // the trail path
    if (opts.trailColor || opts.trailWidth) {
        trailPath = this._createTrail(opts);
        svg.appendChild(trailPath);
    }

    var path = this._createPath(opts);
    svg.appendChild(path);

    return {
        svg: svg,
        path: path,
        trail: trailPath
    };
};

Shape.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute('viewBox', '0 0 100 100');
};

Shape.prototype._createPath = function _createPath(opts) {
    var pathString = this._pathString(opts);
    return this._createPathElement(pathString, opts);
};

Shape.prototype._createTrail = function _createTrail(opts) {
    // Create path string with original passed options
    var pathString = this._trailString(opts);

    // Prevent modifying original
    var newOpts = utils.extend({}, opts);

    // Defaults for parameters which modify trail path
    if (!newOpts.trailColor) {
        newOpts.trailColor = '#eee';
    }
    if (!newOpts.trailWidth) {
        newOpts.trailWidth = newOpts.strokeWidth;
    }

    newOpts.color = newOpts.trailColor;
    newOpts.strokeWidth = newOpts.trailWidth;

    // When trail path is set, fill must be set for it instead of the
    // actual path to prevent trail stroke from clipping
    newOpts.fill = null;

    return this._createPathElement(pathString, newOpts);
};

Shape.prototype._createPathElement = function _createPathElement(pathString, opts) {
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathString);
    path.setAttribute('stroke', opts.color);
    path.setAttribute('stroke-width', opts.strokeWidth);

    if (opts.fill) {
        path.setAttribute('fill', opts.fill);
    } else {
        path.setAttribute('fill-opacity', '0');
    }

    return path;
};

Shape.prototype._createTextContainer = function _createTextContainer(opts, container) {
    var textContainer = document.createElement('div');
    textContainer.className = opts.text.className;

    var textStyle = opts.text.style;
    if (textStyle) {
        if (opts.text.autoStyleContainer) {
            container.style.position = 'relative';
        }

        utils.setStyles(textContainer, textStyle);
        // Default text color to progress bar's color
        if (!textStyle.color) {
            textContainer.style.color = opts.color;
        }
    }

    this._initializeTextContainer(opts, container, textContainer);
    return textContainer;
};

// Give custom shapes possibility to modify text element
Shape.prototype._initializeTextContainer = function(opts, container, element) {
    // By default, no-op
    // Custom shapes should respect API options, such as text.style
};

Shape.prototype._pathString = function _pathString(opts) {
    throw new Error('Override this function for each progress bar');
};

Shape.prototype._trailString = function _trailString(opts) {
    throw new Error('Override this function for each progress bar');
};

Shape.prototype._warnContainerAspectRatio = function _warnContainerAspectRatio(container) {
    if (!this.containerAspectRatio) {
        return;
    }

    var computedStyle = window.getComputedStyle(container, null);
    var width = parseFloat(computedStyle.getPropertyValue('width'), 10);
    var height = parseFloat(computedStyle.getPropertyValue('height'), 10);
    if (!utils.floatEquals(this.containerAspectRatio, width / height)) {
        console.warn(
            'Incorrect aspect ratio of container',
            '#' + container.id,
            'detected:',
            computedStyle.getPropertyValue('width') + '(width)',
            '/',
            computedStyle.getPropertyValue('height') + '(height)',
            '=',
            width / height
        );

        console.warn(
            'Aspect ratio of should be',
            this.containerAspectRatio
        );
    }
};

module.exports = Shape;

},{"./path":5,"./utils":8}],8:[function(require,module,exports){
// Utility functions

var PREFIXES = 'Webkit Moz O ms'.split(' ');
var FLOAT_COMPARISON_EPSILON = 0.001;

// Copy all attributes from source object to destination object.
// destination object is mutated.
function extend(destination, source, recursive) {
    destination = destination || {};
    source = source || {};
    recursive = recursive || false;

    for (var attrName in source) {
        if (source.hasOwnProperty(attrName)) {
            var destVal = destination[attrName];
            var sourceVal = source[attrName];
            if (recursive && isObject(destVal) && isObject(sourceVal)) {
                destination[attrName] = extend(destVal, sourceVal, recursive);
            } else {
                destination[attrName] = sourceVal;
            }
        }
    }

    return destination;
}

// Renders templates with given variables. Variables must be surrounded with
// braces without any spaces, e.g. {variable}
// All instances of variable placeholders will be replaced with given content
// Example:
// render('Hello, {message}!', {message: 'world'})
function render(template, vars) {
    var rendered = template;

    for (var key in vars) {
        if (vars.hasOwnProperty(key)) {
            var val = vars[key];
            var regExpString = '\\{' + key + '\\}';
            var regExp = new RegExp(regExpString, 'g');

            rendered = rendered.replace(regExp, val);
        }
    }

    return rendered;
}

function setStyle(element, style, value) {
    var elStyle = element.style;  // cache for performance

    for (var i = 0; i < PREFIXES.length; ++i) {
        var prefix = PREFIXES[i];
        elStyle[prefix + capitalize(style)] = value;
    }

    elStyle[style] = value;
}

function setStyles(element, styles) {
    forEachObject(styles, function(styleValue, styleName) {
        // Allow disabling some individual styles by setting them
        // to null or undefined
        if (styleValue === null || styleValue === undefined) {
            return;
        }

        // If style's value is {prefix: true, value: '50%'},
        // Set also browser prefixed styles
        if (isObject(styleValue) && styleValue.prefix === true) {
            setStyle(element, styleName, styleValue.value);
        } else {
            element.style[styleName] = styleValue;
        }
    });
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function isString(obj) {
    return typeof obj === 'string' || obj instanceof String;
}

function isFunction(obj) {
    return typeof obj === 'function';
}

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

// Returns true if `obj` is object as in {a: 1, b: 2}, not if it's function or
// array
function isObject(obj) {
    if (isArray(obj)) {
        return false;
    }

    var type = typeof obj;
    return type === 'object' && !!obj;
}

function forEachObject(object, callback) {
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            var val = object[key];
            callback(val, key);
        }
    }
}

function floatEquals(a, b) {
    return Math.abs(a - b) < FLOAT_COMPARISON_EPSILON;
}

// https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements
function removeChildren(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

module.exports = {
    extend: extend,
    render: render,
    setStyle: setStyle,
    setStyles: setStyles,
    capitalize: capitalize,
    isString: isString,
    isFunction: isFunction,
    isObject: isObject,
    forEachObject: forEachObject,
    floatEquals: floatEquals,
    removeChildren: removeChildren
};

},{}]},{},[4])(4)
});;

(function( $ ) {
	
	var bt_bb_advanced_progressbar_init_finished = false;
	
	document.addEventListener('readystatechange', function() { 
		if ( ! bt_bb_advanced_progressbar_init_finished && ( document.readyState === 'interactive' || document.readyState === 'complete' ) ) {
			$( document ).scroll(function() {
				bt_bb_animate_elements_adv_progressbar();
			});

			$( document ).ready(function () {
				bt_bb_animate_elements_adv_progressbar();
			});			
			bt_bb_advanced_progressbar_init_finished = true;		
		}

	}, false);

	function bt_bb_animate_elements_adv_progressbar( ) {
                var $elems_progress_bar_all = $( '.bt_bb_progress_bar_advanced' );
                $elems_progress_bar_all.each(function() {
			var $elm = $( this );
                        var parent_class = $elm.parent().prop('className'); 
                        if ( parent_class == 'bt_bb_content_slider_item_content content' ){
                            var parent_parent_slick_index = 1000;
                            if (typeof $elm.parent().parent().attr('data-slick-index') !== "undefined") {
                                parent_parent_slick_index = parent_parent_slick_index + $elm.parent().parent().data( 'slick-index' );
                            }
                            var container   = $elm.data( 'container' );            
                            var pbid        = $elm.data( 'container-pbid' ); 
                            var idid        = pbid + '0' +  parent_parent_slick_index;
                            
                            $elm.attr("data-container", 'container_' + idid);
                            $elm.attr("data-container-pbid", idid);                                    
                            var child = $elm.children(":first");
                            child.attr("id", 'container_' + idid); 
                        }                        
                });
	
		var $elems = $( '.bt_bb_progress_bar_advanced.animate-adv_progressbar:not(.animated-adv_progressbar)' );
		$elems.each(function() {
			var $elm = $( this );                        
			if ( $elm.isOnScreen_adv_progressbar() ) {
				$elm.addClass( 'animated-adv_progressbar' );
				bt_bb_animate_progress_advanced( $elm );
			}
		});
	}

	$.fn.isOnScreen_adv_progressbar = function(){
		var element = this.get(0);
		var bounds = element.getBoundingClientRect();
		return bounds.top + 75 < window.innerHeight && bounds.bottom > 0;
	}

	function bt_bb_animate_progress_advanced( elm ) {
		var container = elm.data( 'container' );                
		var pbid = elm.data( 'container-pbid' );
                
                var idid = pbid;
                var parent_class = elm.parent().prop('className');                 
                if ( parent_class == 'bt_bb_content_slider_item_content content' ){
                    var parent_parent_slick_index = 1000;
                    if (typeof elm.parent().parent().attr('data-slick-index') !== "undefined") {
                        parent_parent_slick_index = parent_parent_slick_index + elm.parent().parent().data( 'slick-index' );
                    }
                    idid = pbid + '0' +  parent_parent_slick_index;                
                }
                
		var container_type = elm.data( 'container-type' );
		var container_percentage = elm.data( 'container-percentage' );
		var container_text_color = elm.data( 'container-text-color' ); 
		var container_stroke_width = elm.data( 'container-stroke-width' );
		var container_trail_color = elm.data( 'container-trail-color' ); 
		var container_trail_width = elm.data( 'container-trail-width' ); 
		var container_easing = elm.data( 'container-easing' ); 
		var container_color_from = elm.data( 'container-color-from' ); 
		var container_depth_from = elm.data( 'container-depth-from' ); 
		var container_color_to = elm.data( 'container-color-to' ); 
		var container_depth_to = elm.data( 'container-depth-to' ); 
		var container_fill = elm.data( 'container-fill' ); 
		var container_text = elm.data( 'container-text' );
		var container_duration = elm.data( 'container-duration' );
		var container_icon = elm.data( 'container-icon' );
		
		if ( container_type == 'circle')
		{			
			bt_bb_progressbar_circle_init( 
				container,
				container_percentage, 
				container_text_color, 
				container_stroke_width, 
				container_trail_color, 
				container_trail_width, 
				container_easing, 
				container_color_from, 
				container_depth_from, 
				container_color_to, 
				container_depth_to, 
				container_fill, 
				container_text, 
				container_duration, 
				container_icon,
				idid);

		}else{
			bt_bb_progressbar_semicircle_init( 
				container,
				container_percentage, 
				container_text_color, 
				container_stroke_width, 
				container_trail_color, 
				container_trail_width, 
				container_easing, 
				container_color_from, 
				container_depth_from, 
				container_color_to, 
				container_depth_to, 
				container_fill, 
				container_text, 
				container_duration, 
				container_icon,
				idid);
		}

		return false;
	}


})( jQuery );

function bt_bb_progressbar_circle_init( container, container_percentage, container_text_color, container_stroke_width, 
	container_trail_color, container_trail_width, container_easing, container_color_from, container_depth_from, container_color_to, container_depth_to, container_fill, container_text, container_duration, container_icon, pbid ) {
	     
	if ( pbid > 0 )
	{
		container = "#container_" + pbid;
	}
	var display_icon = "";

	if (container_icon)
	{
		var icon_set	 = container_icon.substring( 0, container_icon.lastIndexOf("_") );
		var icon_icon	 = container_icon.substr(container_icon.lastIndexOf("_")+1);
		display_icon = "<span data-ico-" + icon_set + "=\"&#x" + icon_icon + ";\" class=\"bt_bb_icon_holder\"></span>";
	}
        
	var circle = new ProgressBar.Circle(container, {
	  color: container_text_color,
	  strokeWidth: container_stroke_width,
	  trailColor: container_trail_color,
	  trailWidth: container_trail_width,
	  easing: container_easing,
	  duration: container_duration,
	  text: {
		value: '', 
		autoStyleContainer: false,
		style: {
			color: container_text_color,
			transform: {
				prefix: true,
			}
		},
		autoStyleContainer: false
	  },
	  from: { color: container_color_from, width: container_depth_from },
	  to: { color: container_color_to, width: container_depth_to },
	  fill: container_fill,
	  step: function(state, circle) {
		circle.path.setAttribute('stroke', state.color);
		circle.path.setAttribute('stroke-width', state.width);

		var value = Math.round(circle.value() * 100);
		
		if ( !container_icon ) {

			circle.setText( value + '%' );		
		}
		
	  }
	});

	if ( container_icon && display_icon ) {
		circle.setText( display_icon );
	}

	circle.animate(container_percentage);

}

function bt_bb_progressbar_semicircle_init( container,container_percentage, container_text_color, container_stroke_width, 
	container_trail_color, container_trail_width, container_easing, container_color_from, container_depth_from, container_color_to, container_depth_to, container_fill, container_text, container_duration, container_icon, pbid  ) {
	
	if ( pbid > 0 )
	{
		container = "#container_" + pbid;
	}
	
	var display_icon = "";
	if ( container_icon )
	{				
		var icon_set        = container_icon.substring( 0, container_icon.lastIndexOf("_") );
		var icon_icon       = container_icon.substr(container_icon.lastIndexOf("_")+1);
		display_icon    = "<span data-ico-" + icon_set + "=\"&#x" + icon_icon + ";\" class=\"bt_bb_icon_holder\"></span>";
	}	
			
	var semicircle = new ProgressBar.SemiCircle(container, {
	  strokeWidth: container_stroke_width,
	  easing: container_easing,
	  duration: container_duration,
	  color: container_text_color,
	  trailColor: container_trail_color,
	  trailWidth: container_trail_width,
	  svgStyle: null,
	  text: {
		value: '', 
		autoStyleContainer: false,
		style: {
			color: container_text_color,
			transform: {
				prefix: true,
			}
		},
		alignToBottom: false
	  },
	  fill: container_fill,
	  from: { color: container_color_from, width: container_depth_from },
	  to: { color: container_color_to, width: container_depth_to },
	  step: function(state, semicircle) {
		semicircle.path.setAttribute('stroke', state.color);
		semicircle.path.setAttribute('stroke-width', state.width);

		var value = Math.round(semicircle.value() * 100);
                
		if ( !container_icon ) {
			semicircle.setText( value + '%' );				
		}
	  }
	});

	if ( container_icon && display_icon ) {
		semicircle.setText( display_icon );
	}

	semicircle.animate(container_percentage);    
}
;
/*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});;
/*! This file is auto-generated */
/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s=200==Math.round(t(o.width)),r.isBoxSizeOuter=s,i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,n,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),o&&!this.isTransitioning)return void this.layoutPosition();var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});;
/*!
 * Masonry v2 shim
 * to maintain backwards compatibility
 * as of Masonry v3.1.2
 *
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
!function(a){"use strict";var b=a.Masonry;b.prototype._remapV2Options=function(){this._remapOption("gutterWidth","gutter"),this._remapOption("isResizable","isResizeBound"),this._remapOption("isRTL","isOriginLeft",function(a){return!a});var a=this.options.isAnimated;if(void 0!==a&&(this.options.transitionDuration=a?this.options.transitionDuration:0),void 0===a||a){var b=this.options.animationOptions,c=b&&b.duration;c&&(this.options.transitionDuration="string"==typeof c?c:c+"ms")}},b.prototype._remapOption=function(a,b,c){var d=this.options[a];void 0!==d&&(this.options[b]=c?c(d):d)};var c=b.prototype._create;b.prototype._create=function(){var a=this;this._remapV2Options(),c.apply(this,arguments),setTimeout(function(){jQuery(a.element).addClass("masonry")},0)};var d=b.prototype.layout;b.prototype.layout=function(){this._remapV2Options(),d.apply(this,arguments)};var e=b.prototype.option;b.prototype.option=function(){e.apply(this,arguments),this._remapV2Options()};var f=b.prototype._itemize;b.prototype._itemize=function(a){var b=f.apply(this,arguments);return jQuery(a).addClass("masonry-brick"),b};var g=b.prototype.measureColumns;b.prototype.measureColumns=function(){var a=this.options.columnWidth;a&&"function"==typeof a&&(this.getContainerWidth(),this.columnWidth=a(this.containerWidth)),g.apply(this,arguments)},b.prototype.reload=function(){this.reloadItems.apply(this,arguments),this.layout.apply(this)};var h=b.prototype.destroy;b.prototype.destroy=function(){var a=this.getItemElements();jQuery(this.element).removeClass("masonry"),jQuery(a).removeClass("masonry-brick"),h.apply(this,arguments)}}(window);;
(function( $ ) {

	var bt_bb_portfolio_tiles_load_images = function( root ) {
		root.each(function() {
			var page_bottom = $( window ).scrollTop() + $( window ).height();
			$( this ).find( '.bt_bb_grid_item' ).each(function() {
				var this_top = $( this ).offset().top;
				if ( this_top < page_bottom + $( window ).height() ) {
					var img_src = $( this ).data( 'src' );
					if ( img_src !== '' && $( this ).find( '.bt_bb_grid_item_post_thumbnail a' ).html() == '' ) {
						$( this ).find( '.bt_bb_grid_item_post_thumbnail a' ).html( '<img src="' + img_src + '">' );
					}
				}
			});
		});
	}
	
	var bt_bb_portfolio_tiles_load_posts = function( root ) {
           
		root.addClass( 'bt_bb_grid_hide' );
		root.find( '.bt_bb_grid_item' ).remove();
		if ( root.hasClass( 'masonry' ) ) {
			root.masonry( 'destroy' );
		}
		
		root.parent().find( '.bt_bb_post_grid_loader' ).show();
		if ( root.data( 'post-type' ) == 'portfolio' ) {
			var action = 'bt_bb_get_tiles_portfolio';
		} else {
			var action = 'bt_bb_get_tiles_portfolio';
		}
		
		var data = {
			'action': action,
			'number': root.data( 'number-portfolio' ),
			'format': root.data( 'format-portfolio' ),
			'category': root.data( 'category-portfolio' ),
			'show': root.data( 'show-portfolio' ),
                        'bt-nonce': root.data( 'bt-nonce' )
		};
		
		$.ajax({
			type: 'POST',
			url: ajax_object.ajax_url,
			data: data,
			async: true,
			success: function( response ) {
				root.append( response );
				bt_bb_portfolio_tiles_resize( root );
				bt_bb_portfolio_tiles_load_images( root );
				root.masonry({
					columnWidth: '.bt_bb_grid_sizer',
					itemSelector: '.bt_bb_grid_item',
					gutter: 0,
					percentPosition: true
				});
				root.parent().find( '.bt_bb_post_grid_loader' ).hide();
				root.removeClass( 'bt_bb_grid_hide' );
				$( '.bt_bb_grid_container' ).css( 'height', 'auto' );
			},
                        error: function( response ) {
				root.parent().find( '.bt_bb_post_grid_loader' ).hide();
				root.removeClass( 'bt_bb_grid_hide' );				
			}
		});
	}

	$( document ).ready(function() {

		$( window ).on( 'scroll', function() {
			bt_bb_portfolio_tiles_load_images( $( '.bt_bb_masonry_post_grid_content' ) );
		});

		$( '.bt_bb_masonry_portfolio_tiles_content' ).each(function() {
			var grid_content = $( this );
			bt_bb_portfolio_tiles_load_posts( grid_content );
		});

		$( '.bt_bb_masonry_portfolio_tiles_filter_item' ).on( 'click', function() {
			var root = $( this ).closest( '.bt_bb_grid_container' );
			root.height( root.height() );
			$( this ).parent().find( '.bt_bb_masonry_portfolio_tiles_filter_item' ).removeClass( 'active' ); 
			$( this ).addClass( 'active' );			
			var grid_content = $( this ).closest( '.bt_bb_masonry_portfolio_tiles' ).find( '.bt_bb_masonry_portfolio_tiles_content' );
			grid_content.data( 'category-portfolio', $( this ).data( 'category-portfolio' ) );
			grid_content.data( 'format-portfolio', $( this ).data( 'format-portfolio' ) );
			grid_content.data( 'post-type', $( this ).data( 'post-type' ) );
			bt_bb_portfolio_tiles_load_posts( grid_content );
		});
		
	});


	$( window ).ready(function() {
		window.bt_bb_portfolio_tiles_resize = function() {
			$( '.bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_inner' ).each( function() {
				$( this ).css( 'height', '' );
				var h = Math.ceil( $( this ).width() * $( this ).data( 'hw' ) );
				$( this ).css( 'height', h );
			});
			$( '.bt_bb_masonry_post_grid_content .bt_bb_grid_item .bt_bb_grid_item_inner  .bt_bb_grid_item_inner_image' ).each( function() {
				$( this ).css( 'height', '' );
				var h = Math.ceil( $( this ).width() * $( this ).data( 'hw' ) );
				$( this ).css( 'height', h );
			});
			$( '.bt_bb_masonry_post_grid_content' ).each( function() {
				$( this ).width( 'initial' );
				var child_left_margin = parseInt( $( this ).find( '.bt_bb_masonry_post_image_content' ).css( 'margin-left' ) );
				var base_item_width =  ( $( this ).width() - child_left_margin ) / ( $( this ).data( 'columns' ) ) ;
				if ( Math.ceil( base_item_width ) != base_item_width ) {
					$( this ).width( $( this ).data( 'columns' ) * Math.ceil( base_item_width ) + child_left_margin );
				} 				
			});

		}		
	});


	$( window ).load(function() {

		bt_bb_portfolio_tiles_resize();
		
		$( '.bt_bb_masonry_post_image_content' ).masonry({
			columnWidth: '.bt_bb_grid_sizer',
			itemSelector: '.bt_bb_grid_item',
			gutter: 0,
			percentPosition: true
		});

		$( window ).on( 'resize', function() {
			bt_bb_portfolio_tiles_resize();
		});
		
		setTimeout(function() {
			$( '.bt_bb_masonry_post_image_content' ).masonry( 'layout' );
		}, 10 );
		
	});

})( jQuery );