/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+o[i]<+n[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.3.2",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;s.migrateDeduplicateWarnings&&r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a,c,d={},l=s.fn.init,p=s.find,f=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,y=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),l.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&f.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(y,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return p.apply(this,r)},p)Object.prototype.hasOwnProperty.call(p,i)&&(s.find[i]=p[i]);o(s.fn,"size",function(){return this.length},"jQuery.fn.size() is deprecated and removed; use the .length property"),o(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"jQuery.parseJSON is deprecated; use JSON.parse"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&o(s,"trim",function(e){return null==e?"":(e+"").replace(m,"")},"jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(o(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"jQuery.nodeName is deprecated"),o(s,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(o(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()}),o(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[Object.prototype.toString.call(e)]||"object":typeof e},"jQuery.type is deprecated"),o(s,"isFunction",function(e){return"function"==typeof e},"jQuery.isFunction() is deprecated"),o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated")),s.ajax&&(a=s.ajax,c=/(=)\?(?=&|$)|\?\?/,s.ajax=function(){var e=a.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e},e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(c.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&c.test(e.data))&&u("JSON-to-JSONP auto-promotion is deprecated")}));var g=s.fn.removeAttr,h=s.fn.toggleClass,v=/\S+/g;function j(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}s.fn.removeAttr=function(e){var r=this;return s.each(e.match(v),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),g.apply(this,arguments)};var Q,b=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?h.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))}),w=/^[a-z]/,x=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return b=!0,e=r.apply(this,arguments),b=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in b||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o},e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("JQMIGRATE: jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),s.cssNumber||(s.cssNumber={}),Q=s.fn.css,s.fn.css=function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=j(e),n=r,w.test(n)&&x.test(n[0].toUpperCase()+n.slice(1))||s.cssNumber[r]||u('Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))};var A,k,S,M,N=s.data;s.data=function(e,t,r){var n,o,i;if(t&&"object"==typeof t&&2===arguments.length){for(i in n=s.hasData(e)&&N.call(this,e),o={},t)i!==j(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return N.call(this,e,o),t}return t&&"string"==typeof t&&t!==j(t)&&(n=s.hasData(e)&&N.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):N.apply(this,arguments)},s.fx&&(S=s.Tween.prototype.run,M=function(e){return e},s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=M),S.apply(this,arguments)},A=s.fx.interval||13,k="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(k),A},set:function(e){u(k),A=e}}));var R=s.fn.load,H=s.event.add,C=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=C.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),H.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?R.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}function P(e){var t=e.replace(O,"<$1></$2>");t!==e&&T(e)!==T(t)&&u("HTML tags must be properly nested and closed: "+e)}var O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,q=s.htmlPrefilter;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.htmlPrefilter=function(e){return P(e),e.replace(O,"<$1></$2>")}},s.htmlPrefilter=function(e){return P(e),q(e)};var D,_=s.fn.offset;s.fn.offset=function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(u("jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},s.ajax&&(D=s.param,s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)});var E,F,J=s.fn.andSelf||s.fn.addBack;return s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),J.apply(this,arguments)},s.Deferred&&(E=s.Deferred,F=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],s.Deferred=function(e){var i=E(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(F,function(e,t){var r="function"==typeof o[e]&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=E.exceptionHook),s});
;
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
;
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});;
(function(a){"use strict";var d,j,g,i,p,k,b,e;window.bt_bb_animate_elements=function(){var b=a('.animate:not(.animated)');b.each(function(){var b=a(this);c(b)&&(b.addClass('animated'),b.hasClass('bt_bb_counter')&&h(b),typeof window.local_bt_bb_animate_elements=='function'&&local_bt_bb_animate_elements(b))}),bt_bb_lazy_load_images(),a('.slick-slider .slick-slide:not(.slick-active) .animate').removeClass('animated')},window.bt_bb_lazy_load_images=function(){var b=a('img.btLazyLoadImage:not(.btLazyLoaded)');b.each(function(){var b=a(this);c(b,-200)&&(b.addClass('btLazyLoaded'),b.attr('src',b.data('image_src')))}),b=a('image.btLazyLoadImage:not(.btLazyLoaded)'),b.each(function(){var b=a(this);c(b,-200)&&(b.addClass('btLazyLoaded'),b.attr('xlink:href',b.data('image_src')))}),b=a('.btLazyLoadBackground:not(.btLazyLoaded)'),b.each(function(){var b=a(this);c(b,-200)&&(b.addClass('btLazyLoaded'),b.css('background-image','url('+b.data('background_image_src')+')'))})};function n(){if(/iP(hone|od|ad)/.test(navigator.platform)){var a=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3]||0,10)]}return!1}d=n();function c(f,a){var b,c,e;return!!(d&&d[0]==13)||(!(a=a===void 0?75:a,b=f.get(0),b==void 0)&&(c=b.getBoundingClientRect(),e=c.top+a<window.innerHeight&&c.bottom>0,e))}function h(b){for(var e=b.data('digit-length'),c=parseInt(e),a,d;c>0;c--){a=parseInt(b.children('.p'+c).data('digit')),a==0&&(a=10),isNaN(a)&&(a=10);for(d=0;d<=a;d++)b.children('.p'+c).css('transform','translateY(-'+a*b.outerHeight()+'px)');b.addClass('animated')}return!1}window.bt_bb_requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}();function l(a,b,c){return a>c?c:a<b?b:a}j=navigator.userAgent.indexOf('Edge')>-1,g=navigator.userAgent.indexOf('Chrome')>-1,i=navigator.userAgent.indexOf('Safari')>-1,p=navigator.userAgent.indexOf('Firefox')>-1,g&&i&&(window.is_safari=!1),k=!1,window.bt_bb_raf_loop=function(){var d=window.innerWidth,b=window.innerHeight;const c=1e-4;a('html.bt_bb_backgroud_fixed_supported .bt_bb_parallax').each(function(){var d,n,r,e,p,f,i,m,o,g,j,q,h,k,s;if(a('html').attr('data-bt_bb_screen_resolution')!=='xl')return a(this)[0].style.backgroundPosition='center center',!1;d=a(this).hasClass('bt_bb_background_image_holder')?this.parentElement.getBoundingClientRect():this.getBoundingClientRect(),d.top<b&&d.bottom>0&&(n=parseFloat(a(this).attr('data-parallax'))+c,n==2+c?a(this)[0].style.backgroundAttachment='fixed':(r=parseFloat(a(this).attr('data-parallax-offset')),e=r-d.top*n/2,e=e>-.5&&e<.5?0:e,a(this)[0].style.backgroundPositionY=e+'px'),a(this).hasClass('bt_bb_background_image_holder')&&(p=(d.top+d.bottom)/2,f=(p-b/2)/b,f=l(f,0,1),i=parseFloat(a(this).attr('data-parallax-zoom-start')),m=parseFloat(a(this).attr('data-parallax-zoom-end')),i>=1&&m>=1&&(i!=1||m!=1)&&(o=i+(m-i)*(1-f),a(this)[0].style.transform=' scale('+o+')'),g=parseFloat(a(this).attr('data-parallax-blur-start')),j=parseFloat(a(this).attr('data-parallax-blur-end')),g>=0&&j>=0&&(g!=0||j!=0)&&(q=g+(j-g)*(1-f),a(this)[0].style.filter=' blur('+q+'px)'),h=parseFloat(a(this).attr('data-parallax-opacity-start')),k=parseFloat(a(this).attr('data-parallax-opacity-end')),h>=0&&k>=0&&(h!=1||k!=1)&&(s=h+(k-h)*(1-f),a(this)[0].style.opacity=s)))}),window.bt_bb_raf_lock=!1},window.bt_detect_touch=function(){if(typeof window!='undefined'){var b=Boolean('ontouchstart'in window||window.navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0||window.DocumentTouch&&document instanceof DocumentTouch);b&&a('html').addClass('bt_bb_touch')}},window.bt_bb_get_screen_resolution=function(){var c=Math.max(document.documentElement.clientWidth,window.innerWidth||0),b='xl';c<=1200&&(b='lg'),c<=992&&(b='md'),c<=768&&(b='sm'),c<=480&&(b='xs'),a('html').attr('data-bt_bb_screen_resolution',b),a('[data-bt-override-class]').each(function(){var c=a(this).data('bt-override-class'),d,e;for(d in c)c[d][b]!==void 0?(e=d+c[d][b]):(e=d+c[d].xl),a(this).removeClass(c[d].current_class),a(this).addClass(e),c[d].current_class=e,a(this).data('override_classes',c)})},window.bt_bb_check_ios_fixed_background_support=function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||/MacIntel/.test(navigator.platform)&&a('html').hasClass('bt_bb_touch')},window.bt_bb_check_fixed_background=function(){var b=document.createElement('div');try{if(!('backgroundAttachment'in b.style)||bt_bb_check_ios_fixed_background_support())return a('html').removeClass('bt_bb_backgroud_fixed_supported'),!1;if(b.style.backgroundAttachment='fixed','fixed'===b.style.backgroundAttachment)return a('html').addClass('bt_bb_backgroud_fixed_supported'),!0}catch(b){return a('html').removeClass('bt_bb_backgroud_fixed_supported'),!1}},window.bt_bb_countdown=function(a,b,c,d,e){(d[c]!==e[c]||a.find(b).children().eq(0).html()=='')&&(a.find(b).children().addClass('countdown_anim'),a.find(b).children().eq(0).html(d[c]),a.find(b).children().eq(1).html(e[c]),setTimeout(function(){a.find(b).children().eq(1).html(a.find(b).children().eq(0).html()),a.find(b).children().removeClass('countdown_anim')},300))},window.bt_bb_countdown_output=function(g){var e=g.data('init-seconds'),q,a,h,c,d,f,p,r,o,l,m,n,b,j,i,k;g.data('init-target-seconds')&&(q=Math.floor((new Date).getTime()/1e3),e=g.data('init-target-seconds')-q,e<0&&(e=0)),a=e,h=Math.floor(a/86400),a-=h*86400,c=Math.floor(a/3600)%24,a-=c*3600,d=Math.floor(a/60)%60,a-=d*60,f=a,c<10&&(c='0'+c),d<10&&(d='0'+d),f<10&&(f='0'+f),p=f.toString().split(''),r=d.toString().split(''),o=c.toString().split(''),e=e-1,e<0&&(e=0),a=e,h=Math.floor(a/86400),a-=h*86400,c=Math.floor(a/3600)%24,a-=c*3600,d=Math.floor(a/60)%60,a-=d*60,f=a,c<10&&(c='0'+c),d<10&&(d='0'+d),f<10&&(f='0'+f),l=f.toString().split(''),m=d.toString().split(''),n=c.toString().split('');for(b=0;b<=1;b++)bt_bb_countdown(g,'.seconds .n'+b,b,l,p),bt_bb_countdown(g,'.minutes .n'+b,b,m,r),bt_bb_countdown(g,'.hours .n'+b,b,n,o);if(j=0,h!=j){i=h.toString().split(''),k='';for(b=0;b<i.length;b++)k+='<span>'+i[b]+'</span>';g.find('.days').html(k+'<span class="days_text"><span>'+g.find('.days').data('text')+'</span></span>')}j=h,g.data('init-seconds',e)};function f(){a('.bt_bb_content_slider.bt_bb_height_keep-height .slick-slider').each(function(d){var b,c;a(this).find('.slick-slide').height('auto'),b=a(this).find('.slick-track'),c=a(b).height(),a(this).find('.slick-slide').css('height',c+'px')})}function m(){a('.bt_bb_section .bt_bb_row').each(function(c){var b=[];a(this).data('structure',"0"),a(this).find('.bt_bb_column').each(function(c){b.push(a(this).data('width'))}),a(this).attr('data-structure',b.join("-"))}),a('.bt_bb_row_inner').each(function(c){var b=[];a(this).data('structure',"0"),a(this).find('.bt_bb_column_inner').each(function(c){b.push(a(this).data('width'))}),a(this).attr('data-structure',b.join("-"))}),a('.slick-slider').slick(),a('.slick-slider .slick-prev, .slick-slider .slick-next, .slick-slider .slick-dots li').click(function(){a(this).closest('.slick-slider').slick('slickPause')}),a('.bt_bb_slider.bt_bb_use_lightbox .slick-slider .bt_bb_slider_item').click(function(){a(this).closest('.slick-slider').slick('slickPause')}),a('.bt_bb_slider.bt_bb_use_lightbox').each(function(){a(this).magnificPopup({delegate:'.bt_bb_slider_item:not(.slick-cloned)',type:'image',gallery:{enabled:!0},callbacks:{elementParse:function(a){a.src=a.el.data('src-full')}},closeBtnInside:!1,fixedContentPos:!1})}),a('.bt_bb_masonry_image_grid').not('.bt_bb_no_lightbox').each(function(){a(this).magnificPopup({delegate:'.bt_bb_grid_item',type:'image',gallery:{enabled:!0},callbacks:{elementParse:function(a){a.src=a.el.data('src-full')}},closeBtnInside:!1,fixedContentPos:!1})}),a('.bt_bb_css_image_grid').not('.bt_bb_no_lightbox').each(function(){a(this).magnificPopup({delegate:'.bt_bb_css_image_grid_item',type:'image',gallery:{enabled:!0},callbacks:{elementParse:function(a){a.src=a.el.data('src-full')}},closeBtnInside:!1,fixedContentPos:!1})}),a(document).on('click','.bt_bb_image.bt_bb_use_lightbox a',function(){var b=a(this).attr('href').trim(),c;if(b!=""&&b!="#"&&b!="#lightbox")c=b.toLowerCase().includes('.jpg')||b.toLowerCase().includes('.jpeg')||b.toLowerCase().includes('.png')?'image':'iframe',a.magnificPopup.open({type:c,items:{src:b,title:a(this).attr('title')},closeBtnInside:!1});else return b=a(this).find('img').attr('data-full_image_src'),a.magnificPopup.open({type:'image',items:{src:b,title:a(this).attr('title')},closeBtnInside:!1,fixedContentPos:!1}),!1;return!1}),a(document).on('click','.bt_bb_button.bt_bb_use_lightbox a, .bt_bb_icon.bt_bb_use_lightbox a, .bt_bb_service.bt_bb_use_lightbox a',function(){var b=a(this).attr('href'),c=b.toLowerCase().includes('.jpg')||b.toLowerCase().includes('.jpeg')||b.toLowerCase().includes('.png')?'image':'iframe';return a.magnificPopup.open({type:c,items:{src:b,title:a(this).attr('title')},closeBtnInside:!1}),!1}),a('.bt_bb_content_slider.bt_bb_height_keep-height .slick-slider').on('setPosition',function(){f(),a(this).find('*[aria-hidden=true] a, *[aria-hidden=true] button').attr('tabindex',-1),a(this).find('*[aria-hidden=false] a, *[aria-hidden=false] button').removeAttr('tabindex')}),a(window).on('resize',function(a){f(),bt_bb_get_screen_resolution()}),a('.slick-slider').on('beforeChange',function(c,d,e,b){a(this).find('.slick-slide .animated').removeClass('animated'),a(this).find('.slick-slide[data-slick-index='+b+'] .animate').addClass('animated')}),a('.bt_bb_tabs .bt_bb_tabs_header li').click(function(){a(this).siblings().removeClass('on'),a(this).addClass('on'),a(this).closest('.bt_bb_tabs').children('.bt_bb_tabs_tabs').children('.bt_bb_tab_item').removeClass('on'),a(this).closest('.bt_bb_tabs').children('.bt_bb_tabs_tabs').children('.bt_bb_tab_item').eq(a(this).index()).addClass('on')}),a('.bt_bb_tabs').each(function(){a(this).find('li').first().click()}),bt_detect_touch(),bt_bb_get_screen_resolution(),bt_bb_check_fixed_background(),a('html.bt_bb_backgroud_fixed_supported .bt_bb_parallax').length>0&&(window.bt_bb_raf_lock=!1,a(window).on('mousewheel',function(a){}),a(window).on('scroll',function(){window.bt_bb_raf_lock||(window.bt_bb_raf_lock=!0,bt_bb_requestAnimFrame(bt_bb_raf_loop))}),bt_bb_requestAnimFrame(bt_bb_raf_loop),a(window).on("load",function(){bt_bb_requestAnimFrame(bt_bb_raf_loop)})),a('.btCountdownHolder').each(function(){var b=a(this),c=b.data('init-seconds');bt_bb_countdown_output(b),setInterval(function(){bt_bb_countdown_output(b)},1e3)})}window.bt_bb_gmap_init_static_new=function(b){var a=jQuery('#'+b),c,d,e,f;if(a.data('init-finished')==!0)return!1;c=typeof a.data('zoom')!='undefined'?a.data('zoom'):8,d=typeof a.data('custom-style')!='undefined'?a.data('custom-style'):'',e=typeof a.data('api-key')!='undefined'?a.data('api-key'):'',f=typeof a.data('height')!='undefined'?a.data('height'):0,bt_bb_gmap_init_static(b,c,d,f,e),a.data('init-finished',!0)},window.bt_bb_gmap_init_new=function(b){var a=jQuery('#'+b),c,d;if(a.data('init-finished')==!0)return!1;c=typeof a.data('zoom')!='undefined'?a.data('zoom'):8,d=typeof a.data('custom-style')!='undefined'?a.data('custom-style'):'',bt_bb_gmap_init(b,c,d),a.data('init-finished',!0)},document.addEventListener("readystatechange",function(){if(document.readyState==="interactive"||document.readyState==="complete"){if(typeof bt_bb_gmap_init_new!==typeof Function)return!1;a(".bt_bb_google_maps_map").each(function(b){a(this).data('map-type')!='static'?bt_bb_gmap_init_new(a(this).attr('id')):bt_bb_gmap_init_static_new(a(this).attr('id'))})}},!1),window.bt_bb_gmap_init_static=function(j,p,o,g,n){var d,h,b,e,f,i,c,k,l,m;parseInt(g)<=0&&(g=400),d=jQuery('#'+j).parent(),h=d.find('.bt_bb_map_location'),b=d.data('center'),b=='no'?b=!1:b=!0,e=0,f=0,i='',c=0,k=['blue','green','red','purple','yellow','gray','orange','white','black','brown'],h.each(function(){var a=jQuery(this).data('lat'),b=jQuery(this).data('lng'),d=jQuery(this).data('icon')!=""?'scale:2%7Cicon:'+jQuery(this).data('icon'):'size:mid%7Ccolor:'+k[c],g;e+=parseFloat(a),f+=parseFloat(b),i+='&markers='+d+'%7C'+a+','+b,g=[a,b],c++}),b&&(l=[e/c,f/c]),m='<img src="https://maps.googleapis.com/maps/api/staticmap?center='+l.toString()+'&zoom='+p+i+'&size=640x'+g+'&scale=2&style='+atob(o)+'&key='+n+'">',d.find('.bt_bb_google_maps_map.bt_bb_map_map').append(m).on('click',function(){a('.bt_bb_map_location_show').removeClass('bt_bb_map_location_show').nextOrFirst().addClass('bt_bb_map_location_show')}),h.eq(0).addClass('bt_bb_map_location_show'),jQuery('#'+j).data('init-finished',!0)},a.fn.nextOrFirst=function(a){var b=this.next(a);return b.length?b:this.prevAll(a).last()},window.bt_bb_gmap_init=function(g,p,f){var o=new google.maps.LatLng(0,0),n={zoom:p,center:o,scrollwheel:!1,scaleControl:!0,zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL,position:google.maps.ControlPosition.RIGHT_CENTER},streetViewControl:!0,mapTypeControl:!0},l=document.getElementById(g),c,j,m,k,d,e,a,b,i,h,q;l&&(c=new google.maps.Map(l,n),f!=''&&(j=[],f!=''&&(j=JSON.parse(atob(f))),m=new google.maps.StyledMapType(j,{name:'Custom Style'}),k='custom_style',c.mapTypes.set(k,m),c.setMapTypeId(k)),d=0,e=jQuery('#'+g).parent(),a=e.find('.bt_bb_map_location'),b=e.data('center'),b=='no'?b=!1:b=!0,i=0,h=0,a.each(function(){var f=jQuery(this).data('lat'),g=jQuery(this).data('lng'),k=jQuery(this).data('icon'),j,l;i+=parseFloat(f),h+=parseFloat(g),j=new google.maps.LatLng(f,g),l=new google.maps.Marker({position:j,map:c,icon:k,count:d}),!b&&d==0&&c.setCenter(j),a.eq(0).addClass('bt_bb_map_location_show'),l.addListener('click',function(){var b=!0;a.eq(this.count).hasClass('bt_bb_map_location_show')&&!e.hasClass('bt_bb_map_no_overlay')&&(b=!1),e.removeClass('bt_bb_map_no_overlay'),a.removeClass('bt_bb_map_location_show'),b&&a.eq(this.count).addClass('bt_bb_map_location_show')}),d++}),b&&(q=new google.maps.LatLng(i/d,h/d),c.setCenter(q))),jQuery('#'+g).data('init-finished',!0)},b=null,window.bt_bb_leaflet_init=function(b,c,d,e,f,g,h){o(a('#'+b).parent(),function(){bt_bb_leaflet_init_late(b,c,d,e,f,g,h)})},window.bt_bb_leaflet_init_late=function(o,s,r,m,h,q,p){var i=0,j=0,d=jQuery('#'+o).parent(),c=d.find('.bt_bb_leaflet_map_location'),g=d.data('center'),k,l,n,f,e,t;g=='no'?g=!1:g=!0,k=L.markerClusterGroup(),l=0,n=0,f=0,c.each(function(){var a=jQuery(this).data('lat'),b=jQuery(this).data('lng'),d=jQuery(this).data('icon'),e,g;l+=parseFloat(a),n+=parseFloat(b),f==0&&(i=a,j=b),c.eq(0).addClass('bt_bb_map_location_show'),c.eq(0).addClass('bt_bb_map_location_show'),e=L.icon({iconUrl:d,iconRetinaUrl:d,iconSize:[45,58],iconAnchor:[22,58],popupAnchor:[0,-14]}),g=L.marker([a,b],{icon:e,id:f,lat:a,lng:b}).on("click",u),k.addLayer(g),f++}),g&&(i=l/f,j=n/f),b=L.map(document.getElementById(o)).setView([i,j],s),e=[],parseInt(m)>0&&(e=e.concat(map_leaflet_source_arr[m])),h!=''&&(h=atob(h),t=h.split('\n'),a.each(t,function(b,a){e=e.concat([a.split(',')])})),a.each(e,function(c,a){L.tileLayer(a[0],{attribution:a[1],maxZoom:r,subdomains:['a','b','c']}).addTo(b)}),b.addLayer(k),q==''&&b.scrollWheelZoom.disable(),b.removeControl(b.zoomControl),p&&L.control.zoom({position:'topright'}).addTo(b);function u(e){var f=e.target.options,a=f.id,b=!0;c.eq(a).hasClass('bt_bb_leaflet_map_location_show')&&!d.hasClass('bt_bb_leaflet_map_no_overlay')&&(b=!1),d.removeClass('bt_bb_leaflet_map_no_overlay'),c.removeClass('bt_bb_leaflet_map_location_show'),b&&c.eq(a).addClass('bt_bb_leaflet_map_location_show'),c.eq(a).hasClass('bt_bb_map_location_show')&&!d.hasClass('bt_bb_map_no_overlay')&&(b=!1),d.removeClass('bt_bb_map_no_overlay'),c.removeClass('bt_bb_map_location_show'),b&&c.eq(a).addClass('bt_bb_map_location_show')}};function o(e,d){var b=e.find('.bt_bb_leaflet_map_content img'),a=b.length,c;if(a>0)for(c=0;c<b.length;c++)b[c].complete?(a--,a==0&&d()):b[c].addEventListener('load',function(){a--,a==0&&d()});else d()}e=!1,document.addEventListener('readystatechange',function(){!e&&(document.readyState==='interactive'||document.readyState==='complete')&&(m(),a('body').hasClass('bodyPreloader')?setTimeout(function(){bt_bb_animate_elements()},5e3):bt_bb_animate_elements(),a(window).on('scroll',function(){bt_bb_animate_elements()}),a(window).on('resize',function(b){setTimeout(function(){var b=a('.bt_bb_counter.animated');b.each(function(){var b=a(this);b.removeClass('animated'),h(b)})},1e3)}),e=!0)},!1)})(jQuery);
var msBeautify=msBeautify||{};(function(a){msBeautify={version:{msDropdown:'3.2'},author:"Marghoob Suleman",counter:20,debug:function(b){b!==!1?a(".ddOutOfVision").css({height:'auto',position:'relative'}):a(".ddOutOfVision").css({height:'0px',position:'relative'})},oldDiv:'',create:function(d,e,b){b=b||"dropdown";var c;switch(b.toLowerCase()){case"dropdown":case"select":c=a(d).msDropdown(e).data("dd");break}return c}},a.msDropDown={},a.msDropdown={},a.extend(!0,a.msDropDown,msBeautify),a.extend(!0,a.msDropdown,msBeautify),a.fn.prop===void 0&&(a.fn.prop=a.fn.attr),a.fn.on===void 0&&(a.fn.on=a.fn.bind,a.fn.off=a.fn.unbind),typeof a.expr.createPseudo=='function'?a.expr[':'].Contains=a.expr.createPseudo(function(b){return function(c){return a(c).text().toUpperCase().indexOf(b.toUpperCase())>=0}}):a.expr[':'].Contains=function(b,d,c){return a(b).text().toUpperCase().indexOf(c[3].toUpperCase())>=0};function b(q,aD){var b=a.extend(!0,{byJson:{data:null,selectedIndex:0,name:null,size:0,multiple:!1,width:250},mainCSS:'dd',height:120,visibleRows:7,rowHeight:0,showIcon:!0,zIndex:9999,useSprite:!1,animStyle:'',event:'click',openDirection:'auto',jsonTitle:!1,style:'',disabledOpacity:.7,disabledOptionEvents:!0,childWidth:0,enableCheckbox:!1,checkboxNameSuffix:'_mscheck',append:'',prepend:'',on:{create:null,open:null,close:null,add:null,remove:null,change:null,blur:null,click:null,dblclick:null,mousemove:null,mouseover:null,mouseout:null,focus:null,mousedown:null,mouseup:null}},aD),m=this,aC={postElementHolder:'_msddHolder',postID:'_msdd',postTitleID:'_title',postTitleTextID:'_titleText',postChildID:'_child'},d={dd:b.mainCSS,ddTitle:'ddTitle',arrow:'arrow arrowoff',ddChild:'ddChild',ddTitleText:'ddTitleText',disabled:'disabled',enabled:'enabled',ddOutOfVision:'ddOutOfVision',borderTop:'borderTop',noBorderTop:'noBorderTop',selected:'selected',divider:'divider',optgroup:"optgroup",optgroupTitle:"optgroupTitle",description:"description",label:"ddlabel",hover:'hover',disabledAll:'disabledAll'},g={li:'_msddli_',borderRadiusTp:'borderRadiusTp',ddChildMore:'border shadow',fnone:"fnone"},j=!1,o=!1,i=!1,H={},L=!1,aA=40,az=38,ay=37,aw=39,av=27,au=13,at=47,Y=16,P=17,v=!1,t=!1,B=null,z=!1,aG=!1,T=document,ar=function(){b.mainCSS=a("#"+c).data("maincss")||b.mainCSS,b.visibleRows=a("#"+c).data("visiblerows")||b.visibleRows,a("#"+c).data("showicon")==!1&&(b.showIcon=a("#"+c).data("showicon")),b.useSprite=a("#"+c).data("usesprite")||b.useSprite,b.animStyle=a("#"+c).data("animstyle")||b.animStyle,b.event=a("#"+c).data("event")||b.event,b.openDirection=a("#"+c).data("opendirection")||b.openDirection,b.jsonTitle=a("#"+c).data("jsontitle")||b.jsonTitle,b.disabledOpacity=a("#"+c).data("disabledopacity")||b.disabledOpacity,b.childWidth=a("#"+c).data("childwidth")||b.childWidth,b.enableCheckbox=a("#"+c).data("enablecheckbox")||b.enableCheckbox,b.checkboxNameSuffix=a("#"+c).data("checkboxnamesuffix")||b.checkboxNameSuffix,b.append=a("#"+c).data("append")||b.append,b.prepend=a("#"+c).data("prepend")||b.prepend},e=function(a){return H[a]===void 0&&(H[a]=T.getElementById(a)),H[a]},p=function(b){var c=f("postChildID");return a("#"+c+" li."+g.li).index(b)},ak=function(){var k,l,c,d,g,i,j,f,m;if(b.byJson.data){k=["description","image","title"];try{q.id||(q.id="dropdown"+msBeautify.counter),b.byJson.data=eval(b.byJson.data),l="msdropdown"+msBeautify.counter++,c={},c.id=l,c.name=b.byJson.name||q.id,b.byJson.size>0&&(c.size=b.byJson.size),c.multiple=b.byJson.multiple,d=h("select",c);for(g=0;g<b.byJson.data.length;g++){i=b.byJson.data[g],j=new Option(i.text,i.value);for(f in i)f.toLowerCase()!='text'&&(m=a.inArray(f.toLowerCase(),k)!=-1?"data-":"",j.setAttribute(m+f,i[f]));d.options[g]=j}e(q.id).appendChild(d),d.selectedIndex=b.byJson.selectedIndex,a(d).css({width:b.byJson.width+'px'}),q=d}catch(a){throw"There is an error in json data."}}},aj=function(){var g,h;ak(),q.id||(q.id="msdrpdd"+msBeautify.counter++),c=q.id,m._element=c,ar(),i=e(c).disabled,g=b.enableCheckbox,Boolean(g)===!0&&(e(c).multiple=!0,b.enableCheckbox=!0),j=!!(e(c).size>1||e(c).multiple==!0),j&&(o=e(c).multiple),aB(),$(),k("uiData",r()),k("selectedOptions",a("#"+c+" option:selected")),h=f("postChildID"),D=a("#"+h+" li."+d.selected)},f=function(a){return c+aC[a]},O=function(a){var b=a.style===void 0?"":a.style.cssText;return b},w=function(c){var j='',e='',f='',m=-1,l='',k='',d='',i,n,g,h,o;return c!==void 0&&(i=c.title||"",i!=""&&(n=/^\{.*\}$/,g=n.test(i),g&&b.jsonTitle&&(h=eval("["+i+"]")),e=g&&b.jsonTitle?h[0].title:e,f=g&&b.jsonTitle?h[0].description:f,j=g&&b.jsonTitle?h[0].image:i,d=g&&b.jsonTitle?h[0].imagecss:d),l=c.text||'',m=c.value||'',k=c.className||"",e=a(c).prop("data-title")||a(c).data("title")||e||"",f=a(c).prop("data-description")||a(c).data("description")||f||"",j=a(c).prop("data-image")||a(c).data("image")||j||"",d=a(c).prop("data-imagecss")||a(c).data("imagecss")||d||""),o={image:j,title:e,description:f,value:m,text:l,className:k,imagecss:d},o},h=function(e,a,d){var b=T.createElement(e),c;if(a)for(c in a)switch(c){case"style":b.style.cssText=a[c];break;default:b[c]=a[c];break}return d&&(b.innerHTML=d),b},ah=function(){var b=f("postElementHolder"),e,g;a("#"+b).length==0?(e={style:'height: 0px;overflow: hidden;position: relative;',className:d.ddOutOfVision},e.id=b,g=h("div",e),a("#"+c).after(g),a("#"+c).appendTo(a("#"+b))):a("#"+b).css({height:0,overflow:'hidden',position:'relative'})},af=function(){var b={className:d.dd+" ddcommon borderRadius"},g=O(e(c)),j=a("#"+c).outerWidth(),i;return g.length>0&&(b.style=b.style+""+g),b.id=f("postID"),i=h("div",b),i},ae=function(){var l,n,q,p,j,t,v,x,m,i,r,u,k,o,s,y;return e(c).selectedIndex>=0?l=e(c).options[e(c).selectedIndex]:l={value:'',text:''},n="",q="",p=a("#"+c).data("usesprite"),p&&(b.useSprite=p),b.useSprite!=!1&&(n=" "+b.useSprite,q=" "+l.className),j=h("div",{className:d.ddTitle+n+" "+g.borderRadiusTp}),t=h("span",{className:d.divider}),v=h("span",{className:d.arrow}),x=f("postTitleID"),m=h("span",{className:d.ddTitleText+q,id:x}),i=w(l),r=i.image,u=i.text||"",r!=""&&b.showIcon&&(k=h("img"),o=h("span",{className:"ddImage"}),k.src=r,i.imagecss!=""&&(k.className=i.imagecss+" ")),s=h("span",{className:d.label},u),j.appendChild(t),j.appendChild(v),k&&(o.appendChild(k),m.appendChild(o)),m.appendChild(s),j.appendChild(m),y=h("span",{className:d.description},i.description),s.appendChild(y),j},Z=function(){var a=f("postTitleTextID"),b=h("input",{id:a,type:'text',value:'',autocomplete:'off',className:'text shadow borderRadius',style:'display: none'});return b},N=function(a){var k={},l=O(a),e,j,f,m,i,n,o,r,p,q,s;return l.length>0&&(k.style=l),e=a.disabled?d.disabled:d.enabled,e=a.selected?e+" "+d.selected:e,e=e+" "+g.li,k.className=e,b.useSprite!=!1&&(k.className=e+" "+a.className),j=h("li",k),f=w(a),f.title!=""&&(j.title=f.title),m=f.image,m!=""&&b.showIcon&&(i=h("img"),i.src=m,n=h("span",{className:"ddImage"}),f.imagecss!=""&&(i.className=f.imagecss+" ")),f.description!=""&&(o=h("span",{className:d.description},f.description)),r=a.text||"",p=h("span",{className:d.label},r),b.enableCheckbox===!0&&(q=h("input",{type:'checkbox',name:c+b.checkboxNameSuffix+'[]',value:a.value||""}),j.appendChild(q),b.enableCheckbox===!0&&(q.checked=!!a.selected)),i&&(n.appendChild(i),j.appendChild(n)),j.appendChild(p),o?p.appendChild(o):i&&(i.className=i.className+g.fnone),s=h("div",{className:'clear'}),j.appendChild(s),j},ad=function(){var u=f("postChildID"),i={className:d.ddChild+" ddchild_ "+g.ddChildMore,id:u},r,s,o,p,m,l,k,v,t,q,n,w;j==!1?i.style="z-index: "+b.zIndex:i.style="z-index:1",r=a("#"+c).data("childwidth")||b.childWidth,r&&(i.style=(i.style||"")+";width:"+r),s=h("div",i),o=h("ul"),b.useSprite!=!1&&(o.className=b.useSprite),p=e(c).children;for(m=0;m<p.length;m++){if(l=p[m],l.nodeName.toLowerCase()=="optgroup"){k=h("li",{className:d.optgroup}),v=h("span",{className:d.optgroupTitle},l.label),k.appendChild(v),t=l.children,q=h("ul");for(n=0;n<t.length;n++)w=N(t[n]),q.appendChild(w);k.appendChild(q)}else k=N(l);o.appendChild(k)}return s.appendChild(o),s},l=function(g){var d=f("postChildID"),h,i;return g?(g==-1?a("#"+d).css({height:"auto",overflow:"auto"}):a("#"+d).css("height",g+"px"),!1):(e(c).options.length>b.visibleRows?(i=parseInt(a("#"+d+" li:first").css("padding-bottom"))+parseInt(a("#"+d+" li:first").css("padding-top")),b.rowHeight===0&&(a("#"+d).css({visibility:'hidden',display:'block'}),b.rowHeight=Math.round(a("#"+d+" li:first").height()),a("#"+d).css({visibility:'visible'}),(!j||b.enableCheckbox===!0)&&a("#"+d).css({display:'none'})),h=(b.rowHeight+i)*b.visibleRows):j&&(h=a("#"+c).height()),h)},V=function(){var c=f("postChildID");a("#"+c).on("click",function(a){if(i===!0)return!1;a.preventDefault(),a.stopPropagation(),j&&I()}),a("#"+c+" li."+d.enabled).on("click",function(a){a.target.nodeName.toLowerCase()!=="input"&&x(this)}),a("#"+c+" li."+d.enabled).on("mousedown",function(m){var h,l,r,k,e,f,n,q;if(i===!0)return!1;if(D=a("#"+c+" li."+d.selected),B=this,m.preventDefault(),m.stopPropagation(),b.enableCheckbox===!0&&m.target.nodeName.toLowerCase()==="input"&&(t=!0),j===!0)if(o)if(v===!0){if(a(this).addClass(d.selected),h=a("#"+c+" li."+d.selected),l=p(this),h.length>1){r=a("#"+c+" li."+g.li),k=p(h[0]),e=p(h[1]),l>e&&(k=l,e=e+1);for(f=Math.min(k,e);f<=Math.max(k,e);f++)n=r[f],a(n).hasClass(d.enabled)&&a(n).addClass(d.selected)}}else t===!0?(a(this).toggleClass(d.selected),b.enableCheckbox===!0&&(q=this.childNodes[0],q.checked=!q.checked)):(a("#"+c+" li."+d.selected).removeClass(d.selected),a("#"+c+" input:checkbox").prop("checked",!1),a(this).addClass(d.selected),b.enableCheckbox===!0&&(this.childNodes[0].checked=!0));else a("#"+c+" li."+d.selected).removeClass(d.selected),a(this).addClass(d.selected);else a("#"+c+" li."+d.selected).removeClass(d.selected),a(this).addClass(d.selected)}),a("#"+c+" li."+d.enabled).on("mouseenter",function(c){if(i===!0)return!1;c.preventDefault(),c.stopPropagation(),B!=null&&o&&(a(this).addClass(d.selected),b.enableCheckbox===!0&&(this.childNodes[0].checked=!0))}),a("#"+c+" li."+d.enabled).on("mouseover",function(b){if(i===!0)return!1;a(this).addClass(d.hover)}),a("#"+c+" li."+d.enabled).on("mouseout",function(b){if(i===!0)return!1;a("#"+c+" li."+d.hover).removeClass(d.hover)}),a("#"+c+" li."+d.enabled).on("mouseup",function(e){if(i===!0)return!1;e.preventDefault(),e.stopPropagation(),b.enableCheckbox===!0&&(t=!1);var f=a("#"+c+" li."+d.selected).length;z=!!(D.length!=f||f==0),C(),F(),I(),B=null}),b.disabledOptionEvents==!1&&(a("#"+c+" li."+g.li).on("click",function(a){if(i===!0)return!1;y(this,"click")}),a("#"+c+" li."+g.li).on("mouseenter",function(a){if(i===!0)return!1;y(this,"mouseenter")}),a("#"+c+" li."+g.li).on("mouseover",function(a){if(i===!0)return!1;y(this,"mouseover")}),a("#"+c+" li."+g.li).on("mouseout",function(a){if(i===!0)return!1;y(this,"mouseout")}),a("#"+c+" li."+g.li).on("mousedown",function(a){if(i===!0)return!1;y(this,"mousedown")}),a("#"+c+" li."+g.li).on("mouseup",function(a){if(i===!0)return!1;y(this,"mouseup")}))},ac=function(){var b=f("postChildID");a("#"+b).off("click"),a("#"+b+" li."+d.enabled).off("mouseenter"),a("#"+b+" li."+d.enabled).off("click"),a("#"+b+" li."+d.enabled).off("mouseover"),a("#"+b+" li."+d.enabled).off("mouseout"),a("#"+b+" li."+d.enabled).off("mousedown"),a("#"+b+" li."+d.enabled).off("mouseup")},ab=function(){var c=f("postID"),d=f("postChildID");a("#"+c).on(b.event,function(a){if(i===!0)return!1;n("click"),a.preventDefault(),a.stopPropagation(),S(a)}),V(),a("#"+c).on("dblclick",al),a("#"+c).on("mousemove",am),a("#"+c).on("mouseenter",an),a("#"+c).on("mouseleave",ao),a("#"+c).on("mousedown",ap),a("#"+c).on("mouseup",aq)},G=function(){var e=f("postID"),c=f("postChildID"),g,h;j===!0&&b.enableCheckbox===!1?(a("#"+e+" ."+d.ddTitle).hide(),a("#"+c).css({display:'block',position:'relative'})):(b.enableCheckbox===!1&&(o=!1),a("#"+e+" ."+d.ddTitle).show(),a("#"+c).css({display:'none',position:'relative'}),g=a("#"+c+" li."+d.selected)[0],a("#"+c+" li."+d.selected).removeClass(d.selected),h=p(a(g).addClass(d.selected)),s(h)),l(l())},U=function(){var c=f("postID"),e=i==!0?b.disabledOpacity:1;i===!0?a("#"+c).addClass(d.disabledAll):a("#"+c).removeClass(d.disabledAll)},_=function(){var b=f("postTitleTextID");a("#"+b).on("keyup",ag),G(),U()},$=function(){var d=af(),g=ae(),h,i,e;d.appendChild(g),h=Z(),d.appendChild(h),i=ad(),d.appendChild(i),a("#"+c).after(d),ah(),_(),ab(),e=f("postChildID"),b.append!=''&&a("#"+e).append(b.append),b.prepend!=''&&a("#"+e).prepend(b.prepend),typeof b.on.create=="function"&&b.on.create.apply(m,arguments)},aa=function(h){for(var i=f("postChildID"),b=h||a("#"+i+" li."+d.selected),g=0,j;g<b.length;g++)j=p(b[g]),e(c).options[j].selected="selected";s(b)},C=function(){var i=f("postChildID"),h=a("#"+i+" li."+d.selected),g,k,j;(o&&(v||t)||z)&&(e(c).selectedIndex=-1),h.length==0?g=-1:h.length>1?aa(h):g=p(a("#"+i+" li."+d.selected)),(e(c).selectedIndex!=g||z)&&h.length<=1&&(z=!1,k=E("change"),e(c).selectedIndex=g,s(g),typeof b.on.change=="function"&&(j=r(),b.on.change(j.data,j.ui)),a("#"+c).trigger("change"))},s=function(b,f){var g,d,h,i;b!==void 0&&(b==-1?(g=-1,d="",h="",A(-1)):typeof b!="object"?(i=e(c).options[b],e(c).selectedIndex=b,g=b,d=w(i),h=b>=0?e(c).options[b].text:"",A(void 0,d),d=d.value):(g=f&&f.index||e(c).selectedIndex,d=f&&f.value||e(c).value,h=f&&f.text||e(c).options[e(c).selectedIndex].text||"",A(g)),k("selectedIndex",g),k("value",d),k("selectedText",h),k("children",e(c).children),k("uiData",r()),k("selectedOptions",a("#"+c+" option:selected")))},E=function(f){var b={byElement:!1,byJQuery:!1,hasEvent:!1},e=a("#"+c),d;try{e.prop("on"+f)!==null&&(b.hasEvent=!0,b.byElement=!0)}catch(a){}return typeof a._data=="function"?d=a._data(e[0],"events"):d=e.data("events"),d&&d[f]&&(b.hasEvent=!0,b.byJQuery=!0),b},I=function(){F(),a("body").on("click",x),a(document).on("keydown",Q),a(document).on("keyup",R)},F=function(){a("body").off("click",x),a(document).off("keydown",Q),a(document).off("keyup",R)},ag=function(){var c=f("postChildID"),g=f("postTitleTextID"),d=e(g).value;d.length==0?(a("#"+c+" li:hidden").show(),l(l())):(a("#"+c+" li").hide(),a("#"+c+" li:Contains('"+d+"')").show(),a("#"+c+" li:visible").length<=b.visibleRows&&l(-1))},aF=function(){var b=f("postTitleTextID");a("#"+b+":hidden").length>0&&t==!1&&(a("#"+b+":hidden").show().val(""),e(b).focus())},ai=function(){var b=f("postTitleTextID");a("#"+b+":visible").length>0&&(a("#"+b+":visible").hide(),e(b).blur())},Q=function(b){var g=f("postTitleTextID"),e=f("postChildID"),c;switch(b.keyCode){case aA:case aw:b.preventDefault(),b.stopPropagation(),aE();break;case az:case ay:b.preventDefault(),b.stopPropagation(),ax();break;case av:case au:b.preventDefault(),b.stopPropagation(),x(),c=a("#"+e+" li."+d.selected).length,z=!!(D.length!=c||c==0),C(),F(),B=null;break;case Y:v=!0;break;case P:t=!0;break;default:b.keyCode>=at&&j===!1;break}if(i===!0)return!1;n("keydown")},R=function(a){switch(a.keyCode){case Y:v=!1;break;case P:t=!1;break}if(i===!0)return!1;n("keyup")},al=function(a){if(i===!0)return!1;n("dblclick")},am=function(a){if(i===!0)return!1;n("mousemove")},an=function(a){if(i===!0)return!1;a.preventDefault(),n("mouseover")},ao=function(a){if(i===!0)return!1;a.preventDefault(),n("mouseout")},ap=function(a){if(i===!0)return!1;n("mousedown")},aq=function(a){if(i===!0)return!1;n("mouseup")},J=function(c,d){var b={byElement:!1,byJQuery:!1,hasEvent:!1},e;return a(c).prop("on"+d)!=void 0&&(b.hasEvent=!0,b.byElement=!0),e=a(c).data("events"),e&&e[d]&&(b.hasEvent=!0,b.byJQuery=!0),b},y=function(g,d){if(b.disabledOptionEvents==!1){var f=e(c).options[p(g)];if(J(f,d).hasEvent===!0){if(J(f,d).byElement===!0&&f["on"+d](),J(f,d).byJQuery===!0)switch(d){case"keydown":case"keyup":break;default:a(f).trigger(d);break}return!1}}},n=function(d){if(typeof b.on[d]=="function"&&b.on[d].apply(this,arguments),E(d).hasEvent===!0){if(E(d).byElement===!0&&e(c)["on"+d](),E(d).byJQuery===!0)switch(d){case"keydown":case"keyup":break;default:a("#"+c).trigger(d);break}return!1}},M=function(b){var c=f("postChildID"),e,g,h;b=b!==void 0?b:a("#"+c+" li."+d.selected),b.length>0&&(e=parseInt(a(b).position().top),g=parseInt(a("#"+c).height()),e>g&&(h=e+a("#"+c).scrollTop()-g/2,a("#"+c)))},aE=function(){var e=f("postChildID"),b=a("#"+e+" li:visible."+g.li),h=a("#"+e+" li:visible."+d.selected),c;h=h.length==0?b[0]:h,c=a("#"+e+" li:visible."+g.li).index(h),c<b.length-1&&(c=i(c),c<b.length&&((!v||!j||!o)&&a("#"+e+" ."+d.selected).removeClass(d.selected),a(b[c]).addClass(d.selected),A(c),j==!0&&C(),M(a(b[c]))),j||K());function i(c){return c=c+1,c>b.length?c:a(b[c]).hasClass(d.enabled)===!0?c:c=i(c)}},ax=function(){var c=f("postChildID"),i=a("#"+c+" li:visible."+d.selected),e=a("#"+c+" li:visible."+g.li),b=a("#"+c+" li:visible."+g.li).index(i[0]),k;b>=0&&(b=h(b),b>=0&&((!v||!j||!o)&&a("#"+c+" ."+d.selected).removeClass(d.selected),a(e[b]).addClass(d.selected),A(b),j==!0&&C(),parseInt(a(e[b]).position().top+a(e[b]).height())<=0&&(k=a("#"+c).scrollTop()-a("#"+c).height()-a(e[b]).height(),a("#"+c))),j||K());function h(b){return b=b-1,b<0?b:a(e[b]).hasClass(d.enabled)===!0?b:b=h(b)}},K=function(){var c=f("postID"),d=f("postChildID"),h=a("#"+c).offset(),i=a("#"+c).height(),l=a(window).height(),j=a(window).scrollTop(),g=a("#"+d).height(),e=a("#"+c).height(),k=a("#"+c).closest('.btQuoteBooking').offset().top+a("#"+c).closest('.btQuoteBooking').height();k<Math.floor(g+i+h.top)||b.openDirection.toLowerCase()=='alwaysup'?(e=g,a("#"+d).css({top:"-"+e+"px",display:'block',zIndex:b.zIndex}),a("#"+c).removeClass("borderRadius borderRadiusTp").addClass("borderRadiusBtm"),e=a("#"+d).offset().top,e<-10&&(a("#"+d).css({top:parseInt(a("#"+d).css("top"))-e+20+j+"px",zIndex:b.zIndex}),a("#"+c).removeClass("borderRadiusBtm borderRadiusTp").addClass("borderRadius"))):(a("#"+d).css({top:e+"px",zIndex:b.zIndex}),a("#"+c).removeClass("borderRadius borderRadiusBtm").addClass("borderRadiusTp"))},S=function(h){var g,c,d,e;if(i===!0)return!1;g=f("postID"),c=f("postChildID"),L?b.event!=='mouseover'&&x():(L=!0,msBeautify.oldDiv!=''&&a("#"+msBeautify.oldDiv).css({display:"none"}),msBeautify.oldDiv=c,a("#"+c+" li:hidden").show(),K(),d=b.animStyle,d==""||d=="none"?(a("#"+c).css({display:"block"}),M(),typeof b.on.open=="function"&&(e=r(),b.on.open(e.data,e.ui))):a("#"+c)[d]("fast",function(){if(M(),typeof b.on.open=="function"){var a=r();b.on.open(a.data,a.ui)}}),I())},x=function(g){var e,c,d;L=!1,e=f("postID"),c=f("postChildID"),(j===!1||b.enableCheckbox===!0)&&(a("#"+c).css({display:"none"}),a("#"+e).removeClass("borderRadiusTp borderRadiusBtm").addClass("borderRadius")),F(),typeof b.on.close=="function"&&(d=r(),b.on.close(d.data,d.ui)),ai(),l(l()),a("#"+c).css({zIndex:1})},aB=function(){u=a.extend(!0,{},e(c));for(var b in u)typeof u[b]!="function"&&(m[b]=u[b]);m.selectedText=u.selectedIndex>=0?u.options[u.selectedIndex].text:"",m.version=msBeautify.version.msDropdown,m.author=msBeautify.author},W=function(b){var c,d,e;return b!=null&&typeof b!="undefined"?(c=f("postChildID"),d=w(b),e=a("#"+c+" li."+g.li+":eq("+b.index+")"),{data:d,ui:e,option:b,index:b.index}):null},r=function(){var o=f("postChildID"),g=e(c),i,b,h,j,k,m,q,l,n;if(g.selectedIndex==-1)i=null,b=null,h=null,j=-1;else if(b=a("#"+o+" li."+d.selected),b.length>1){k=[],m=[],q=[];for(l=0;l<b.length;l++)n=p(b[l]),k.push(n),m.push(g.options[n]);i=k,h=m,j=k}else h=g.options[g.selectedIndex],i=w(h),j=g.selectedIndex;return{data:i,ui:b,index:j,option:h}},A=function(l,q){var j=f("postTitleID"),i={},o,p,m,k,n;l==-1?(i.text="&nbsp;",i.className="",i.description="",i.image=""):typeof l!="undefined"?(o=e(c).options[l],i=w(o)):i=q,a("#"+j).find("."+d.label).html(i.text),p=document.createTextNode(i.description),m=h("span",{className:d.description}),m.appendChild(p),a("#"+j).find("."+d.description).remove(),a("#"+j).find("."+d.label).append(m),e(j).className=d.ddTitleText+" "+i.className,a("#"+j).removeClass('btNotSelected'),a("#"+j).closest('.btContactField').removeClass('btNotSelected'),i.value==''&&(a("#"+j).addClass('btNotSelected'),a("#"+j).closest('.btContactField').addClass('btNotSelected')),i.description!=""?a("#"+j).find("."+d.description).html(i.description).show():a("#"+j).find("."+d.description).html("").hide(),k=a("#"+j).find("img"),k.length>0&&a(k).parent().remove(),i.image!=""&&b.showIcon&&(k=h("img",{src:i.image}),n=h("span",{className:"ddImage"}),n.appendChild(k),a("#"+j).prepend(n),i.imagecss!=""&&(k.className=i.imagecss+" "),i.description==""&&(k.className=k.className+g.fnone))},k=function(a,b){m[a]=b},X=function(q,p,k){var h=f("postChildID"),n=!1,o,i,r,m,t;switch(q){case"add":o=N(p||e(c).options[k]),arguments.length==3?i=k:i=a("#"+h+" li."+g.li).length-1,i<0||!i?a("#"+h+" ul").append(o):(r=a("#"+h+" li."+g.li)[i],a(r).before(o)),ac(),V(),b.on.add!=null&&b.on.add.apply(this,arguments);break;case"remove":n=a(a("#"+h+" li."+g.li)[k]).hasClass(d.selected),a("#"+h+" li."+g.li+":eq("+k+")").remove(),m=a("#"+h+" li."+d.enabled),n==!0&&m.length>0&&(a(m[0]).addClass(d.selected),t=a("#"+h+" li."+g.li).index(m[0]),s(t)),m.length==0&&s(-1),a("#"+h+" li."+g.li).length<b.visibleRows&&!j&&l(-1),b.on.remove!=null&&b.on.remove.apply(this,arguments);break}},c,u,D;this.act=function(){var a=arguments[0];switch(Array.prototype.shift.call(arguments),a){case"add":m.add.apply(this,arguments);break;case"remove":m.remove.apply(this,arguments);break;default:try{e(c)[a].apply(e(c),arguments)}catch(a){}break}},this.add=function(){var b=arguments[0],f,g,h,i,d;typeof b=="string"?(d=b,f=d,opt=new Option(d,f)):(d=b.text||'',f=b.value||d,g=b.title||'',h=b.image||'',i=b.description||'',opt=new Option(d,f),a(opt).data("description",i),a(opt).data("image",h),a(opt).data("title",g)),arguments[0]=opt,e(c).add.apply(e(c),arguments),k("children",e(c).children),k("length",e(c).length),X("add",opt,arguments[1])},this.remove=function(a){e(c).remove(a),k("children",e(c).children),k("length",e(c).length),X("remove",void 0,a)},this.set=function(h,b){var l;if(typeof h=="undefined"||typeof b=="undefined")return!1;h=h.toString();try{k(h,b)}catch(a){}switch(h){case"size":e(c)[h]=b,b==0&&(e(c).multiple=!1),j=!!(e(c).size>1||e(c).multiple==!0),G();break;case"multiple":e(c)[h]=b,j=!!(e(c).size>1||e(c).multiple==!0),o=e(c).multiple,G(),k(h,b);break;case"disabled":e(c)[h]=b,i=b,U();break;case"selectedIndex":case"value":e(c)[h]=b,l=f("postChildID"),a("#"+l+" li."+g.li).removeClass(d.selected),a(a("#"+l+" li."+g.li)[e(c).selectedIndex]).addClass(d.selected),s(e(c).selectedIndex);break;case"length":l=f("postChildID"),b<e(c).length&&(e(c)[h]=b,b==0?(a("#"+l+" li."+g.li).remove(),s(-1)):(a("#"+l+" li."+g.li+":gt("+(b-1)+")").remove(),a("#"+l+" li."+d.selected).length==0&&a("#"+l+" li."+d.enabled+":eq(0)").addClass(d.selected)),k(h,b),k("children",e(c).children));break;case"id":break;default:try{e(c)[h]=b,k(h,b)}catch(a){}break}},this.get=function(a){return m[a]||e(c)[a]},this.visible=function(c){var b=f("postID");if(c===!0)a("#"+b).show();else if(c===!1)a("#"+b).hide();else return!(a("#"+b).css("display")=="none")},this.debug=function(a){msBeautify.debug(a)},this.close=function(){x()},this.open=function(){S()},this.showRows=function(a){if(typeof a=="undefined"||a==0)return!1;b.visibleRows=a,l(l())},this.visibleRows=this.showRows,this.on=function(b,d){a("#"+c).on(b,d)},this.off=function(b,d){a("#"+c).off(b,d)},this.addMyEvent=this.on,this.getData=function(){return r()},this.namedItem=function(){var a=e(c).namedItem.apply(e(c),arguments);return W(a)},this.item=function(){var a=e(c).item.apply(e(c),arguments);return W(a)},this.setIndexByValue=function(a){this.set("value",a)},this.destory=function(){var d=f("postElementHolder"),b=f("postID");a("#"+b+", #"+b+" *").off(),a("#"+b).remove(),a("#"+c).parent().replaceWith(a("#"+c)),a("#"+c).data("dd",null)},aj()}a.fn.extend({msDropDown:function(c){return this.each(function(){if(!a(this).data('dd')){var d=new b(this,c);a(this).data('dd',d)}})}}),a.fn.msDropdown=a.fn.msDropDown})(jQuery);
'use strict';(function(a){var d=!1,e=1,b,c;window.bt_cc_subtotal=';var setSubtotal = function( id, val, ignore_format ) {if ( arguments.length < 2 || ! jQuery( "#btSubtotalId"+id ) ) return;var c = jQuery( "#btSubtotalId" + id ).closest( ".btQuoteBooking" );if ( ignore_format !== true ) val = bt_cc_currency_format( c, val );var currency = c.data( "currency" );var currency_after = c.data( "currency_after" );var currency_space = c.data( "currency_space" );var hide_total = c.data( "hide_total" );if ( currency != "" && ignore_format !== true ) {if ( currency_after == "yes" ) {if ( currency_space == "yes" ) {val = val + " " + currency;} else {val = val + currency;}} else {if ( currency_space == "yes" ) {val = currency + " " + val;} else {val = currency + val;}}}jQuery( "#btSubtotalId" + id ).data( "val", val );if ( hide_total == "yes" ) {jQuery( "#btSubtotalId" + id ).hide();return;}jQuery( "#btSubtotalId" + id ).find( ".btQuoteSubtotalCalc" ).html( val );};',window.bt_parse_float=function(b){var a=parseFloat(b);return isNaN(a)&&(a=0),a},a.fn.bt_cc_lock=function(){return a(this).addClass('btCCLock'),a(this)},a.fn.bt_cc_unlock=function(){return a(this).removeClass('btCCLock'),a(this)},window.bt_cc_set_slider_value=function(a,b,c){a.slider('instance')&&(a.slider('value',b),a.find('.btQuoteSliderValue').html(b),c&&(bt_quote_total(a.closest('.btQuoteBooking')),bt_paypal_items(a.closest('.btQuoteBooking'))))},window.bt_cc_get_slider_value=function(a){var b;return a.slider('instance')?(b=bt_parse_float(a.find('.btQuoteSliderValue').html())):(b=bt_parse_float(a.data('initial-value'))),b},a.fn.bt_cc_set_value=function(c){var b,d;return c!==null&&c!=='undefined'&&c!==void 0?(b=c):(b=a(this).find('.btQuoteElement').data('initial-value')),a(this).find('.btQuoteItemInput > .btQuoteSelect').length>0?(d=a(this).find('.btQuoteSelect').data("dd"),d!==void 0&&bt_cc_init_dropdown(d,"#"+a(this).attr('id'),b)):a(this).find('.btQuoteItemInput > .btQuoteSlider').length>0?a(this).find('.btQuoteItemInput > .btQuoteSlider').slider('instance')?bt_cc_set_slider_value(a(this).find('.btQuoteItemInput > .btQuoteSlider'),b):setTimeout(bt_cc_set_slider_value,2e3,a(this).find('.btQuoteItemInput > .btQuoteSlider'),b,!0):a(this).find('.btQuoteItemInput > .btQuoteText').length>0?a(this).find('.btQuoteText').val(b):a(this).find('.btQuoteItemInput > .btQuoteSwitch').length>0&&(a(this).find('.btQuoteSwitch').data('on')==b&&!a(this).find('.btQuoteSwitch').hasClass('on')||a(this).find('.btQuoteSwitch').data('off')==b&&a(this).find('.btQuoteSwitch').hasClass('on'))&&a(this).find('.btQuoteSwitch').trigger('click'),bt_cc_eval_conditions(b,a(this).find('.btQuoteElement').data('condition')),bt_quote_total(a(this).closest('.btQuoteBooking')),bt_paypal_items(a(this).closest('.btQuoteBooking')),a(this)},window.bt_cc_eval_conditions=function(d,b){var c;return!(b==''||b==void 0)&&(d==''&&(d=0),b.indexOf(';')==-1?(b=atob(b),c=b.split(/\r?\n/)):(c=b.split("#bt_cc_nl#")),a.each(c,function(e,g){var a,b,f;c[e]!=void 0&&(a=c[e].split(";"),b=a[2],a[3]=='lock'?b+='.bt_cc_lock()':a[3]=='unlock'&&(b+='.bt_cc_unlock()'),a[0]!=''&&(f='if ( '+d+decodeURIComponent(a[0])+" ) { $('#"+a[1]+"')."+b+'; }',eval(f)))}),!1)},window.bt_paypal_items=function(b){a(b).each(function(){var c,b;a(this).find('.btPayPalButton').length>0&&(c=a(this).find('.btPayPalButton').next(),c.find('.btPayPalItem').remove(),b=0,a(this).find('.btQuoteBookingForm').find('.btQuoteItem').not('.btQuoteMBlock .btQuoteItem').not('.btQuoteGBlock .btQuoteItem').each(function(){var g=0,d=0,f='',h,e;a(this).find('.btQuoteText').each(function(){g=bt_parse_float(a(this).data('price')),d=bt_parse_float(a(this).val())}),a(this).find('.btQuoteSelect').find('._msddli_.selected').each(function(){g=bt_parse_float(a(this).data('value')),d=1,f=a(this).find('.ddlabel')[0].innerHTML,a(this).is(':first-child')&&(f='')}),h=!1,a(this).find('.btQuoteSlider').each(function(){g=bt_parse_float(a(this).data('price')),d=bt_cc_get_slider_value(a(this)),h=!0}),a(this).find('.btQuoteSwitch').each(function(){a(this).hasClass('on')?g=bt_parse_float(a(this).data('on')):g=bt_parse_float(a(this).data('off')),d=1}),e=a(this).find('label').html(),h&&(e=e+': '+d),f!=''&&(f=f.replace('<span class="description">','/'),f=f.replace('</span>',''),e.endsWith('?')||e.endsWith(':')?e=e+' '+f:e=e+': '+f),d=d*g,e!==void 0&&d>0&&(b++,d=d.toFixed(2),c.append('<input type="hidden" name="item_name_'+b+'" value="'+e+'" class="btPayPalItem"><input type="hidden" name="amount_'+b+'" value="'+d+'" class="btPayPalItem">'))}),a(this).find('.btQuoteBookingForm').find('.btQuoteMBlock').each(function(){var h=1,d=!0,e=0,f='',g='';a(this).find('.btQuoteItem').each(function(){a(this).find('.btQuoteText').each(function(){var c=bt_parse_float(a(this).data('price')),b=bt_parse_float(a(this).val());b=b*c,d?(e=b,g=a(this).closest('.btQuoteItem').find('label').html()):h*=b,d=!1}),a(this).find('.btQuoteSelect').find('._msddli_.selected').each(function(){var b=bt_parse_float(a(this).data('value'));d?(e=b,g=a(this).closest('.btQuoteItem').find('label').html(),f=a(this).find('.ddlabel')[0].innerHTML,f=f.substring(0,f.indexOf('<span')),a(this).is(':first-child')&&(f=''),f!=''&&(g=g+': '+f)):h*=b,d=!1}),a(this).find('.btQuoteSlider').each(function(){var c=bt_parse_float(a(this).data('price')),b=bt_cc_get_slider_value(a(this));b=b*c,d?(e=b,g=a(this).closest('.btQuoteItem').find('label').html()):h*=b,d=!1}),a(this).find('.btQuoteSwitch').each(function(){var b;a(this).hasClass('on')?(b=bt_parse_float(a(this).data('on'))):(b=bt_parse_float(a(this).data('off'))),d?(e=b,g=a(this).closest('.btQuoteItem').find('label').html()):h*=b,d=!1})}),h>0&&e>0&&(b++,e=e.toFixed(2),c.append('<input type="hidden" name="item_name_'+b+'" value="'+g+'" class="btPayPalItem"><input type="hidden" name="amount_'+b+'" value="'+e+'" class="btPayPalItem"><input type="hidden" name="quantity_'+b+'" value="'+h+'" class="btPayPalItem">'))}),a(this).find('.btQuoteBookingForm').find('.btQuoteGBlock').each(function(){var d=a(this).data('eval'),h=a(this).data('paypal_label'),i=[],j,e,f,g;if(a(this).find('.btQuoteItem').each(function(){var b;a(this).find('.btQuoteText').each(function(){var c=bt_parse_float(a(this).data('price'));b=bt_parse_float(a(this).val()),b=b*c}),a(this).find('.btQuoteSelect').find('._msddli_.selected').each(function(){b=bt_parse_float(a(this).data('value'))}),a(this).find('.btQuoteSlider').each(function(){var c=bt_parse_float(a(this).data('price'));b=bt_cc_get_slider_value(a(this)),b=b*c}),a(this).find('.btQuoteSwitch').each(function(){a(this).hasClass('on')?b=bt_parse_float(a(this).data('on')):b=bt_parse_float(a(this).data('off'))}),i.push(b)}),j=/\$\d+/igm,e=d.match(j),e===null&&(d=atob(d),e=d.match(j)),e===null)return;for(f=0;f<e.length;f++)d=d.replace(e[f],i[f]);d=window.bt_cc_subtotal+d,g=eval('(function() {'+decodeURIComponent(d)+'}())'),h!=''&&g>0&&(b++,g=g.toFixed(2),c.append('<input type="hidden" name="item_name_'+b+'" value="'+h+'" class="btPayPalItem"><input type="hidden" name="amount_'+b+'" value="'+g+'" class="btPayPalItem"><input type="hidden" name="quantity_'+b+'" value="1" class="btPayPalItem">'))}))})},window.bt_cc_currency_format=function(f,b){var g=/(\d)(?=(\d{3})+\.)/g,h='$1,',a,e,d,c;return Number.prototype.toNumberFormat=function(d,a,b){a=a||".",b=b||"";var c=this.toFixed(d).split(".");return c[0]=c[0].replace(/\B(?=(\d{3})+(?!\d))/g,b),c.join(a)},a=f.data('total_format'),e=f.data('total_decimals'),a=='currency_1'||a=='currency_2'||a=='currency_3'?(d=',',c='.',a=='currency_2'&&(d='.',c=','),a=='currency_3'&&(d=' ',c=','),b=b.toNumberFormat(e,c,d)):a=='decimal_1'||a=='decimal_2'?(c='.',d='',a=='decimal_2'&&(c=','),b=b.toNumberFormat(e,c,d)):a=='rounded'&&(b=Math.round(b)),b},window.bt_quote_total=function(c){var c=a(c);b=0,c.find('.btQuoteText').not('.btQuoteMBlock .btQuoteText').not('.btQuoteGBlock .btQuoteText').each(function(){var d=bt_parse_float(a(this).data('price')),c=bt_parse_float(a(this).val());c=c*d,b+=c}),c.find('.btQuoteSelect').not('.btQuoteMBlock .btQuoteSelect').not('.btQuoteGBlock .btQuoteSelect').find('._msddli_.selected').each(function(){var c=bt_parse_float(a(this).data('value'));b+=c}),c.find('.btQuoteSlider').not('.btQuoteMBlock .btQuoteSlider').not('.btQuoteGBlock .btQuoteSlider').each(function(){var d=bt_parse_float(a(this).data('price')),e=bt_parse_float(a(this).data('offset')),c=bt_cc_get_slider_value(a(this));c=c*d,b+=c,!a(this).closest('.btQuoteBooking').find('.btPayPalButton').length>0&&(b+=e)}),c.find('.btQuoteSwitch').not('.btQuoteMBlock .btQuoteSwitch').not('.btQuoteGBlock .btQuoteSwitch').each(function(){a(this).hasClass('on')?b+=bt_parse_float(a(this).data('on')):b+=bt_parse_float(a(this).data('off'))}),c.find('.btQuoteMBlock').each(function(){var c=0,d=!0;a(this).find('.btQuoteText').each(function(){var e=bt_parse_float(a(this).data('price')),b=bt_parse_float(a(this).val());b=b*e,d?c=b:c*=b,d=!1}),a(this).find('.btQuoteSelect').find('._msddli_.selected').each(function(){var b=bt_parse_float(a(this).data('value'));d?c=b:c*=b,d=!1}),a(this).find('.btQuoteSlider').each(function(){var e=bt_parse_float(a(this).data('price')),f=bt_parse_float(a(this).data('offset')),b=bt_cc_get_slider_value(a(this));b=b*e,d?c=b:c*=b,c+=f,d=!1}),a(this).find('.btQuoteSwitch').each(function(){var b;a(this).hasClass('on')?(b=bt_parse_float(a(this).data('on'))):(b=bt_parse_float(a(this).data('off'))),d?c=b:c*=b,d=!1}),b+=c}),c.find('.btQuoteGBlock').each(function(){var c=a(this).data('eval'),f=[],g,d,e,h;if(a(this).find('.btQuoteItem .btQuoteItemInput').each(function(){var b=0;a(this).find('.btQuoteText').each(function(){var c=bt_parse_float(a(this).data('price'));b=bt_parse_float(a(this).val()),b=b*c}),a(this).find('.btQuoteSelect').find('._msddli_.selected').each(function(){b=bt_parse_float(a(this).data('value'))}),a(this).find('.btQuoteSlider').each(function(){var c=bt_parse_float(a(this).data('price')),d=bt_parse_float(a(this).data('offset'));b=bt_cc_get_slider_value(a(this)),b=b*c}),a(this).find('.btQuoteSwitch').each(function(){a(this).hasClass('on')?b=bt_parse_float(a(this).data('on')):b=bt_parse_float(a(this).data('off'))}),f.push(b)}),g=/\$\d+/igm,d=c.match(g),d===null&&(c=atob(c),d=c.match(g)),d===null)return;for(e=0;e<d.length;e++)c=c.replace(d[e],f[e]);c=window.bt_cc_subtotal+c,h=eval('(function() {'+decodeURIComponent(c)+'}())'),b+=h}),b=bt_cc_currency_format(c,b),c.find('.btQuoteTotalCalc').html(b),c.data('total',b)},window.bt_cc_init_dropdown=function(d,e,f){var b,c;d.set("selectedIndex",f),b=a(e).find('._msddli_.selected'),c=d.getData().data.value,b.data('value',c),bt_cc_eval_conditions(c,b.closest('.btQuoteSelect').data('condition')),bt_quote_total(b.closest('.btQuoteBooking')),bt_paypal_items(b.closest('.btQuoteBooking'))},window.bt_cc_init=function(){a(".btQuoteBooking").each(function(d){var b=a(this),c;setTimeout(function(){b.css('opacity','1')},200),b.find('.btContactDate').datepicker({prevText:window.bt_cc_translate.prev,nextText:window.bt_cc_translate.next,dateFormat:b.data('date_format'),dayNamesMin:[window.bt_cc_translate.su,window.bt_cc_translate.mo,window.bt_cc_translate.tu,window.bt_cc_translate.we,window.bt_cc_translate.th,window.bt_cc_translate.fr,window.bt_cc_translate.sa],monthNames:[window.bt_cc_translate.january,window.bt_cc_translate.february,window.bt_cc_translate.march,window.bt_cc_translate.april,window.bt_cc_translate.may,window.bt_cc_translate.june,window.bt_cc_translate.july,window.bt_cc_translate.august,window.bt_cc_translate.september,window.bt_cc_translate.october,window.bt_cc_translate.november,window.bt_cc_translate.december],beforeShow:function(b,c){a('.ui-datepicker').addClass('btDatePicker')}}),b.find('.btQuoteSlider').each(function(){a(this).slider({min:window.is_rtl?-a(this).data('max'):a(this).data('min'),max:window.is_rtl?-a(this).data('min'):a(this).data('max'),step:a(this).data('step'),value:window.is_rtl?-a(this).data('value'):a(this).data('value'),change:function(b,c){a(this).find('.btQuoteSliderValue').html(window.rtl_direction*a(this).slider('value')),bt_cc_eval_conditions(window.rtl_direction*a(this).slider('value'),a(this).data('condition'))}}),bt_cc_eval_conditions(window.rtl_direction*a(this).data('value'),a(this).data('condition'))}),b.find('.ui-slider-handle').each(function(){a(this).append(a(this).closest('.btQuoteItemInput').find(a('.btQuoteSliderValue')))}),b.find('.btQuoteSlider').each(function(){var c=a(this);a(this).slider({slide:function(e,d){var a=window.rtl_direction*d.value;c.slider('value',a),c.find('.btQuoteSliderValue').html(a),bt_quote_total(b),bt_paypal_items(b)}})}),b.find('.btQuoteSwitch').on('click',function(){a(this).hasClass('on')?(a(this).removeClass('on'),bt_cc_eval_conditions(a(this).data('off'),a(this).data('condition'))):(a(this).addClass('on'),bt_cc_eval_conditions(a(this).data('on'),a(this).data('condition'))),bt_quote_total(b),bt_paypal_items(b)}),b.find('.btQuoteSwitch').each(function(){a(this).hasClass('on')?bt_cc_eval_conditions(a(this).data('on'),a(this).data('condition')):bt_cc_eval_conditions(a(this).data('off'),a(this).data('condition'))}),b.find('.btPayPalButton').on('click',function(){a(this).next().submit()}),b.find('.btQuoteText').each(function(){bt_cc_eval_conditions(a(this).val(),a(this).data('condition'))}),b.find('.btQuoteText').keyup(function(){bt_quote_total(b),bt_paypal_items(b),bt_cc_eval_conditions(a(this).val(),a(this).data('condition'))}),b.find('.btContactNext').on('click',function(){a('html, body').delay(1e3).animate({scrollTop:a(this).closest('.btQuoteBooking').find('.btTotalQuoteContactGroup').offset().top-30},400);var b=a(this).closest('.btQuoteBooking').find('.btTotalQuoteContactGroup');a(this).closest('.btQuoteBooking').find('.btTotalQuoteContactGroup').addClass('btActive'),a(this).closest('.btQuoteBooking').find('.btQuoteBookingForm').removeClass('btActive')}),b.find('.btContactSubmit').on('click',function(){var h,e,f,i,g,d,c,j;return b.find('.btContactFieldError').removeClass('btContactFieldError'),h=!0,b.find('.btContactField').each(function(){a(this).parent().hasClass('btContactFieldMandatory')&&(a(this).val()==''&&!a(this).hasClass('btContactTime')||a(this).hasClass('btContactTime')&&a(this).hasClass('btNotSelected'))&&(a(this).parent().addClass('btContactFieldError'),h=!1)}),!h?(b.find('.btSubmitMessage').hide().html(b.data('message_mandatory')).fadeIn(),!1):(e='',f=0,i=function(a){return a%2==1},b.find('.btQuoteItem, .btQuoteSubtotal').each(function(){var d,g,k,h,l,j,c,m;f++,d=0,g='',k=!1,a(this).find('.btQuoteText').each(function(){var b=bt_parse_float(a(this).data('price'));h=bt_parse_float(a(this).val()),d=h*b,k=!0}),a(this).find('.btQuoteSelect').find('._msddli_.selected').each(function(){g=a(this).find('.ddlabel')[0].innerHTML,a(this).is(':first-child')&&(g=''),d=bt_parse_float(a(this).data('value'))}),l=!1,a(this).find('.btQuoteSlider').each(function(){var b=bt_parse_float(a(this).data('price'));j=bt_cc_get_slider_value(a(this)),d=j*b,l=!0}),a(this).find('.btQuoteSwitch').each(function(){a(this).hasClass('on')?d=bt_parse_float(a(this).data('on')):d=bt_parse_float(a(this).data('off'))}),c=a(this).find('label').html(),l&&(c=c+': '+j),k&&(c=c+': '+h),g!=''&&(g=g.replace('<span class="description">','/'),g=g.replace('</span>',''),c=c+': '+g),m='',i(f)&&(m=' style="background:#eee;"'),d=bt_cc_currency_format(b,d),a(this).hasClass('btQuoteSubtotal')&&(c=a(this).data('label'),d=a(this).data('val')),c!==void 0&&c!==null&&(e+=encodeURI('<tr'+m+'>\r\n<td style="padding:.5em;">'+c+'</td>\r\n<td style="text-align:right;padding:.5em;">'+d+'</td>\r\n</tr>')+"\r\n")}),g='',b.data('rec_secret_key')!=''&&(g=grecaptcha.getResponse(b.find('.g-rec').data('widget_id')),grecaptcha.reset(b.find('.g-rec').data('widget_id'))),d='no',b.find('.bt_cc_email_confirmation').length?b.find('.bt_cc_email_confirmation').prop('checked')&&(d='yes'):d='yes',c='no',b.find('.bt_cc_email_gdpr').length?b.find('.bt_cc_email_gdpr').prop('checked')&&(c='yes'):c='yes',c=='no')?(b.find('.btSubmitMessage').html(b.data('email_gdpr_not_text')),!1):(j={action:'bt_cc',recaptcha_response:g,recaptcha_secret:b.data('rec_secret_key'),admin_email:b.data('admin_email'),email_client:b.data('email_client'),email_rtl:b.data('email_rtl'),currency:b.data('currency'),currency_after:b.data('currency_after'),currency_space:b.data('currency_space'),email_confirmation:d,url_confirmation:b.data('url_confirmation'),subject:b.data('subject'),email_header:b.data('email_header'),email_footer:b.data('email_footer'),quote:e,total:b.data('total'),total_text:b.data('total_text'),name:b.find('.btContactName').val(),email:b.find('.btContactEmail').val(),phone:b.find('.btContactPhone').val(),address:b.find('.btContactAddress').val(),date:b.find('.btContactDate').val(),time:b.find('.btContactTime option:selected').val(),date_text:b.data('date_text'),time_text:b.data('time_text'),message:b.find('.btContactMessage').val(),bt_cc_nonce:b.data('bt_cc_nonce'),email_gdpr:b.data('email_gdpr'),email_gdpr_text:b.data('email_gdpr_text'),email_gdpr_not_text:b.data('email_gdpr_not_text')},b.find('.btSubmitMessage').hide().html(b.data('message_please_wait')).fadeIn(),a.ajax({type:'POST',url:b.data('url_ajax'),data:j,async:!0,success:function(c){c=a.trim(c),c=='ok'?b.data('url_confirmation')==''||b.data('url_confirmation')==null?b.find('.btSubmitMessage').hide().html(b.data('message_success')).fadeIn():window.location=b.data('url_confirmation'):b.find('.btSubmitMessage').hide().html(b.data('message_error')).fadeIn()},error:function(a,c,d){b.find('.btSubmitMessage').hide().html(b.data('message_error')).fadeIn()}}),!1)}),b.find('.wpcf7-submit').on('click',function(){var f=!0,d='',c,e;b.find('.btQuoteItem, .btQuoteSubtotal').each(function(){var e=0,f='',i=!1,g,j,h,c;a(this).find('.btQuoteText').each(function(){var b=bt_parse_float(a(this).data('price'));g=bt_parse_float(a(this).val()),e=g*b,i=!0}),a(this).find('.btQuoteSelect').find('._msddli_.selected').each(function(){f=a(this).find('.ddlabel')[0].innerHTML,a(this).is(':first-child')&&(f=''),e=bt_parse_float(a(this).data('value'))}),j=!1,a(this).find('.btQuoteSlider').each(function(){var b=bt_parse_float(a(this).data('price'));h=bt_cc_get_slider_value(a(this)),e=h*b,j=!0}),a(this).find('.btQuoteSwitch').each(function(){a(this).hasClass('on')?e=bt_parse_float(a(this).data('on')):e=bt_parse_float(a(this).data('off'))}),c=a(this).find('label').html(),j&&(c=c+' ('+h+') '),i&&(c=c+' ('+g+') '),f!=''&&(f=f.replace('<span class="description">','/'),f=f.replace('</span>',''),c=c+' ('+f+') '),e=bt_cc_currency_format(b,e),a(this).hasClass('btQuoteSubtotal')&&(c=a(this).data('label'),e=a(this).data('val')),c!==void 0&&c!==null&&(d+=c+': '+e+"\r\n")}),c='',e='',b.data('currency_space')=='yes'&&(e=' '),b.data('currency')!=''?b.data('currency_after')=='yes'?c=b.data('total')+e+b.data('currency'):c=b.data('currency')+e+b.data('total'):c=b.data('total'),d+=b.data('total_text')+': '+c+"\r\n",b.find('input[name=bt-cc-data]').val(d)}),c=0,c=c.toFixed(2),bt_quote_total(b),bt_paypal_items(b)})},c=!1,document.addEventListener('readystatechange',function(){!c&&(document.readyState==='interactive'||document.readyState==='complete')&&(window.is_rtl=a('body').hasClass('rtl'),window.rtl_direction=window.is_rtl?-1:1,bt_cc_init(),c=!0)})})(jQuery);var BTCaptchaCallback=function(){jQuery('.g-rec').each(function(){var a=grecaptcha.render(jQuery(this).attr('id'),{sitekey:jQuery(this).data('sk')});jQuery(this).data('widget_id',a)})};jQuery("select[name='action'],select[name='action2']").find("option[value='trash']").each(function(){this.value='delete',jQuery(this).text(window.bt_bb_text.delete)}),jQuery("a.add-new-h2").remove();
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
!function(){"use strict";var d={d:function(c,b){for(var a in b)d.o(b,a)&&!d.o(c,a)&&Object.defineProperty(c,a,{enumerable:!0,get:b[a]})},o:function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},r:function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},b={},m,e;function c(a){if(this.formData={},this.tree={},!(a instanceof FormData))return this;this.formData=a;const b=()=>{const a=new Map;return a.largestIndex=0,a.set=function(b,c){""===b?b=a.largestIndex++:/^[0-9]+$/.test(b)&&(b=parseInt(b),a.largestIndex<=b&&(a.largestIndex=b+1)),Map.prototype.set.call(a,b,c)},a};this.tree=b();const c=/^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;for(const[e,d]of this.formData){const a=e.match(c);if(a)if(""===a.groups.array)this.tree.set(a.groups.name,d);else{const c=[...a.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi)].map(([b,a])=>a);c.unshift(a.groups.name);const e=c.pop();c.reduce((c,a)=>{if(/^[0-9]+$/.test(a)&&(a=parseInt(a)),c.get(a)instanceof Map)return c.get(a);const d=b();return c.set(a,d),d},this.tree).set(e,d)}}}d.r(b),d.d(b,{date:function(){return l},email:function(){return h},enumeration:function(){return n},file:function(){return y},maxdate:function(){return v},maxfilesize:function(){return x},maxitems:function(){return p},maxlength:function(){return r},maxnumber:function(){return t},mindate:function(){return u},minfilesize:function(){return w},minitems:function(){return o},minlength:function(){return q},minnumber:function(){return s},number:function(){return k},required:function(){return f},requiredfile:function(){return g},tel:function(){return j},url:function(){return i}}),c.prototype.entries=function(){return this.tree.entries()},c.prototype.get=function(a){return this.tree.get(a)},c.prototype.getAll=function(a){if(!this.has(a))return[];const b=a=>{const c=[];if(a instanceof Map)for(const[e,d]of a)c.push(...b(d));else""!==a&&c.push(a);return c};return b(this.get(a))},c.prototype.has=function(a){return this.tree.has(a)},c.prototype.keys=function(){return this.tree.keys()},c.prototype.values=function(){return this.tree.values()},m=c;function a({rule:a,field:b,error:c,...d}){this.rule=a,this.field=b,this.error=c,this.properties=d}const f=function(b){if(0===b.getAll(this.field).length)throw new a(this)},g=function(b){if(0===b.getAll(this.field).length)throw new a(this)},h=function(b){if(!b.getAll(this.field).every(a=>{if((a=a.trim()).length<6)return!1;if(-1===a.indexOf("@",1))return!1;if(a.indexOf("@")!==a.lastIndexOf("@"))return!1;const[d,b]=a.split("@",2);if(!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(d))return!1;if(/\.{2,}/.test(b))return!1;if(/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(b))return!1;const c=b.split(".");if(c.length<2)return!1;for(const a of c){if(/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(a))return!1;if(!/^[a-z0-9-]+$/i.test(a))return!1}return!0}))throw new a(this)},i=function(b){const c=b.getAll(this.field);if(!c.every(a=>{if(""===(a=a.trim()))return!1;try{return(a=>-1!==["http","https","ftp","ftps","mailto","news","irc","irc6","ircs","gopher","nntp","feed","telnet","mms","rtsp","sms","svn","tel","fax","xmpp","webcal","urn"].indexOf(a))(new URL(a).protocol.replace(/:$/,""))}catch{return!1}}))throw new a(this)},j=function(b){if(!b.getAll(this.field).every(a=>(a=(a=a.trim()).replaceAll(/[()/.*#\s-]+/g,""),/^[+]?[0-9]+$/.test(a))))throw new a(this)},k=function(b){if(!b.getAll(this.field).every(a=>(a=a.trim(),!!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(a)||!!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(a))))throw new a(this)},l=function(b){if(!b.getAll(this.field).every(a=>/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(a.trim())))throw new a(this)},y=function(b){if(!b.getAll(this.field).every(a=>a instanceof File&&this.accept?.some(b=>/^\.[a-z0-9]+$/i.test(b)?a.name.toLowerCase().endsWith(b.toLowerCase()):(c=>{const b=[],a=c.match(/^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i);if(a){const c=a.groups.toplevel.toLowerCase(),d=a.groups.sub.toLowerCase();for(const[f,e]of(()=>{const a=new Map;return a.set("jpg|jpeg|jpe","image/jpeg"),a.set("gif","image/gif"),a.set("png","image/png"),a.set("bmp","image/bmp"),a.set("tiff|tif","image/tiff"),a.set("webp","image/webp"),a.set("ico","image/x-icon"),a.set("heic","image/heic"),a.set("asf|asx","video/x-ms-asf"),a.set("wmv","video/x-ms-wmv"),a.set("wmx","video/x-ms-wmx"),a.set("wm","video/x-ms-wm"),a.set("avi","video/avi"),a.set("divx","video/divx"),a.set("flv","video/x-flv"),a.set("mov|qt","video/quicktime"),a.set("mpeg|mpg|mpe","video/mpeg"),a.set("mp4|m4v","video/mp4"),a.set("ogv","video/ogg"),a.set("webm","video/webm"),a.set("mkv","video/x-matroska"),a.set("3gp|3gpp","video/3gpp"),a.set("3g2|3gp2","video/3gpp2"),a.set("txt|asc|c|cc|h|srt","text/plain"),a.set("csv","text/csv"),a.set("tsv","text/tab-separated-values"),a.set("ics","text/calendar"),a.set("rtx","text/richtext"),a.set("css","text/css"),a.set("htm|html","text/html"),a.set("vtt","text/vtt"),a.set("dfxp","application/ttaf+xml"),a.set("mp3|m4a|m4b","audio/mpeg"),a.set("aac","audio/aac"),a.set("ra|ram","audio/x-realaudio"),a.set("wav","audio/wav"),a.set("ogg|oga","audio/ogg"),a.set("flac","audio/flac"),a.set("mid|midi","audio/midi"),a.set("wma","audio/x-ms-wma"),a.set("wax","audio/x-ms-wax"),a.set("mka","audio/x-matroska"),a.set("rtf","application/rtf"),a.set("js","application/javascript"),a.set("pdf","application/pdf"),a.set("swf","application/x-shockwave-flash"),a.set("class","application/java"),a.set("tar","application/x-tar"),a.set("zip","application/zip"),a.set("gz|gzip","application/x-gzip"),a.set("rar","application/rar"),a.set("7z","application/x-7z-compressed"),a.set("exe","application/x-msdownload"),a.set("psd","application/octet-stream"),a.set("xcf","application/octet-stream"),a.set("doc","application/msword"),a.set("pot|pps|ppt","application/vnd.ms-powerpoint"),a.set("wri","application/vnd.ms-write"),a.set("xla|xls|xlt|xlw","application/vnd.ms-excel"),a.set("mdb","application/vnd.ms-access"),a.set("mpp","application/vnd.ms-project"),a.set("docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"),a.set("docm","application/vnd.ms-word.document.macroEnabled.12"),a.set("dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"),a.set("dotm","application/vnd.ms-word.template.macroEnabled.12"),a.set("xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),a.set("xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"),a.set("xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"),a.set("xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"),a.set("xltm","application/vnd.ms-excel.template.macroEnabled.12"),a.set("xlam","application/vnd.ms-excel.addin.macroEnabled.12"),a.set("pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"),a.set("pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"),a.set("ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"),a.set("ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"),a.set("potx","application/vnd.openxmlformats-officedocument.presentationml.template"),a.set("potm","application/vnd.ms-powerpoint.template.macroEnabled.12"),a.set("ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"),a.set("sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"),a.set("sldm","application/vnd.ms-powerpoint.slide.macroEnabled.12"),a.set("onetoc|onetoc2|onetmp|onepkg","application/onenote"),a.set("oxps","application/oxps"),a.set("xps","application/vnd.ms-xpsdocument"),a.set("odt","application/vnd.oasis.opendocument.text"),a.set("odp","application/vnd.oasis.opendocument.presentation"),a.set("ods","application/vnd.oasis.opendocument.spreadsheet"),a.set("odg","application/vnd.oasis.opendocument.graphics"),a.set("odc","application/vnd.oasis.opendocument.chart"),a.set("odb","application/vnd.oasis.opendocument.database"),a.set("odf","application/vnd.oasis.opendocument.formula"),a.set("wp|wpd","application/wordperfect"),a.set("key","application/vnd.apple.keynote"),a.set("numbers","application/vnd.apple.numbers"),a.set("pages","application/vnd.apple.pages"),a})())("*"===d&&e.startsWith(c+"/")||e===a[0])&&b.push(...f.split("|"))}return b})(b).some(b=>(b="."+b.trim(),a.name.toLowerCase().endsWith(b.toLowerCase()))))))throw new a(this)},n=function(b){if(!b.getAll(this.field).every(a=>this.accept?.some(b=>a===String(b))))throw new a(this)},o=function(b){if(b.getAll(this.field).length<parseInt(this.threshold))throw new a(this)},p=function(b){const c=b.getAll(this.field);if(parseInt(this.threshold)<c.length)throw new a(this)},q=function(c){const d=c.getAll(this.field);let b=0;if(d.forEach(a=>{"string"==typeof a&&(b+=a.length)}),0!==b&&b<parseInt(this.threshold))throw new a(this)},r=function(c){const d=c.getAll(this.field);let b=0;if(d.forEach(a=>{"string"==typeof a&&(b+=a.length)}),parseInt(this.threshold)<b)throw new a(this)},s=function(b){if(!b.getAll(this.field).every(a=>!(parseFloat(a)<parseFloat(this.threshold))))throw new a(this)},t=function(b){if(!b.getAll(this.field).every(a=>!(parseFloat(this.threshold)<parseFloat(a))))throw new a(this)},u=function(b){if(!b.getAll(this.field).every(a=>(a=a.trim(),!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(a)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&a<this.threshold))))throw new a(this)},v=function(b){if(!b.getAll(this.field).every(a=>(a=a.trim(),!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(a)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&this.threshold<a))))throw new a(this)},w=function(c){const d=c.getAll(this.field);let b=0;if(d.forEach(a=>{a instanceof File&&(b+=a.size)}),b<parseInt(this.threshold))throw new a(this)},x=function(c){const d=c.getAll(this.field);let b=0;if(d.forEach(a=>{a instanceof File&&(b+=a.size)}),parseInt(this.threshold)<b)throw new a(this)};window.swv={validators:b,validate:(f,g,h={})=>{const e=(f.rules??[]).filter(({rule:a,...c})=>"function"==typeof b[a]&&("function"!=typeof b[a].matches||b[a].matches(c,h)));if(!e.length)return new Map;const c=new m(g),d=e.reduce((d,g)=>{const{rule:f,...e}=g;if(d.get(e.field)?.error)return d;try{b[f].call({rule:f,...e},c)}catch(b){if(b instanceof a)return d.set(e.field,b)}return d},new Map);for(const a of c.keys())d.has(a)||d.set(a,{validInputs:c.getAll(a)});return d},...null!==(e=window.swv)&&void 0!==e?e:{}}}();
!function(){"use strict";const d=a=>Math.abs(parseInt(a,10)),a=(b,a)=>{const c=new Map([["init","init"],["validation_failed","invalid"],["acceptance_missing","unaccepted"],["spam","spam"],["aborted","aborted"],["mail_sent","sent"],["mail_failed","failed"],["submitting","submitting"],["resetting","resetting"],["validating","validating"],["payment_required","payment-required"]]);c.has(a)&&(a=c.get(a)),Array.from(c.values()).includes(a)||(a=`custom-${a=(a=a.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);const d=b.getAttribute("data-status");return b.wpcf7.status=a,b.setAttribute("data-status",a),b.classList.add(a),d&&d!==a&&b.classList.remove(d),a},c=(a,b,c)=>{const d=new CustomEvent(`wpcf7${b}`,{bubbles:!0,detail:c});"string"==typeof a&&(a=document.querySelector(a)),a.dispatchEvent(d)},b=b=>{const{root:a,namespace:c="contact-form-7/v1"}=wpcf7.api;return f.reduceRight((a,b)=>c=>b(c,a),l=>{let e,f,{url:g,path:b,endpoint:h,headers:d,body:i,data:j,...m}=l;"string"==typeof h&&(e=c.replace(/^\/|\/$/g,""),f=h.replace(/^\//,""),b=f?e+"/"+f:e),"string"==typeof b&&(-1!==a.indexOf("?")&&(b=b.replace("?","&")),b=b.replace(/^\//,""),g=a+b),d={Accept:"application/json, */*;q=0.1",...d},delete d["X-WP-Nonce"],j&&(i=JSON.stringify(j),d["Content-Type"]="application/json");const n={code:"fetch_error",message:"You are probably offline."},k={code:"invalid_json",message:"The response is not a valid JSON response."};return window.fetch(g||b||window.location.href,{...m,headers:d,body:i}).then(a=>Promise.resolve(a).then(a=>{if(a.status>=200&&a.status<300)return a;throw a}).then(a=>{if(204===a.status)return null;if(a&&a.json)return a.json().catch(()=>{throw k});throw k}),()=>{throw n})})(b)},f=[];function n(b){var e,g;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{target:d,scope:k=b,...o}=i;if(void 0===(null===(e=b.wpcf7)||void 0===e?void 0:e.schema))return;const f={...b.wpcf7.schema};if(void 0!==d){if(!b.contains(d))return;if(!d.closest(".wpcf7-form-control-wrap[data-name]"))return;if(d.closest(".novalidate"))return}const c=new FormData,l=[];for(const a of k.querySelectorAll(".wpcf7-form-control-wrap"))if(!a.closest(".novalidate")&&(a.querySelectorAll(":where( input, textarea, select ):enabled").forEach(a=>{if(a.name)switch(a.type){case"button":case"image":case"reset":case"submit":break;case"checkbox":case"radio":a.checked&&c.append(a.name,a.value);break;case"select-multiple":for(const b of a.selectedOptions)c.append(a.name,b.value);break;case"file":for(const b of a.files)c.append(a.name,b);break;default:c.append(a.name,a.value)}}),a.dataset.name&&(l.push(a.dataset.name),a.setAttribute("data-under-validation","1"),a.contains(d))))break;f.rules=(null!==(g=f.rules)&&void 0!==g?g:[]).filter(a=>{let{field:b}=a;return l.includes(b)});const n=b.getAttribute("data-status");Promise.resolve(a(b,"validating")).then(a=>{if(void 0!==swv){const a=swv.validate(f,c,i);for(const[c,{error:d,validInputs:e}]of a)j(b,c),void 0!==d&&h(b,c,d,{scope:k}),m(b,c,null!=e?e:[])}}).finally(()=>{a(b,n),b.querySelectorAll(".wpcf7-form-control-wrap[data-under-validation]").forEach(a=>{a.removeAttribute("data-under-validation")})})}b.use=a=>{f.unshift(a)};const h=(a,c,b,f)=>{var d;const{scope:h=a,...i}=null!=f?f:{},g=`${null===(d=a.wpcf7)||void 0===d?void 0:d.unitTag}-ve-${c}`.replaceAll(/[^0-9a-z_-]+/gi,""),e=a.querySelector(`.wpcf7-form-control-wrap[data-name="${c}"] .wpcf7-form-control`);(()=>{const c=document.createElement("li");c.setAttribute("id",g),e&&e.id?c.insertAdjacentHTML("beforeend",`<a href="#${e.id}">${b}</a>`):c.insertAdjacentText("beforeend",b),a.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(c)})(),h.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${c}"]`).forEach(d=>{if("validating"===a.getAttribute("data-status")&&!d.dataset.underValidation)return;const c=document.createElement("span");c.classList.add("wpcf7-not-valid-tip"),c.setAttribute("aria-hidden","true"),c.insertAdjacentText("beforeend",b),d.appendChild(c),d.querySelectorAll("[aria-invalid]").forEach(a=>{a.setAttribute("aria-invalid","true")}),d.querySelectorAll(".wpcf7-form-control").forEach(a=>{a.classList.add("wpcf7-not-valid"),a.setAttribute("aria-describedby",g),"function"==typeof a.setCustomValidity&&a.setCustomValidity(b),a.closest(".use-floating-validation-tip")&&(a.addEventListener("focus",a=>{c.setAttribute("style","display: none")}),c.addEventListener("click",a=>{c.setAttribute("style","display: none")}))})})},j=(a,d)=>{var b,c;const e=`${null===(b=a.wpcf7)||void 0===b?void 0:b.unitTag}-ve-${d}`.replaceAll(/[^0-9a-z_-]+/gi,"");null===(c=a.wpcf7.parent.querySelector(`.screen-reader-response ul li#${e}`))||void 0===c||c.remove(),a.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${d}"]`).forEach(a=>{var b;null===(b=a.querySelector(".wpcf7-not-valid-tip"))||void 0===b||b.remove(),a.querySelectorAll("[aria-invalid]").forEach(a=>{a.setAttribute("aria-invalid","false")}),a.querySelectorAll(".wpcf7-form-control").forEach(a=>{a.removeAttribute("aria-describedby"),a.classList.remove("wpcf7-not-valid"),"function"==typeof a.setCustomValidity&&a.setCustomValidity("")})})},m=(c,b,a)=>{c.querySelectorAll(`[data-reflection-of="${b}"]`).forEach(c=>{if("output"===c.tagName.toLowerCase()){const b=c;0===a.length&&a.push(b.dataset.default),a.slice(0,1).forEach(a=>{a instanceof File&&(a=a.name),b.textContent=a})}else c.querySelectorAll("output").forEach(b=>{b.hasAttribute("data-default")?0===a.length?b.removeAttribute("hidden"):b.setAttribute("hidden","hidden"):b.remove()}),a.forEach(a=>{a instanceof File&&(a=a.name);const d=document.createElement("output");d.setAttribute("name",b),d.textContent=a,c.appendChild(d)})})};function k(d){let g=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(wpcf7.blocked)return e(d),void a(d,"submitting");const i=new FormData(d);g.submitter&&g.submitter.name&&i.append(g.submitter.name,g.submitter.value);const f={contactFormId:d.wpcf7.id,pluginVersion:d.wpcf7.pluginVersion,contactFormLocale:d.wpcf7.locale,unitTag:d.wpcf7.unitTag,containerPostId:d.wpcf7.containerPost,status:d.wpcf7.status,inputs:Array.from(i,a=>{const b=a[0],c=a[1];return!b.match(/^_/)&&{name:b,value:c}}).filter(a=>!1!==a),formData:i};b({endpoint:`contact-forms/${d.wpcf7.id}/feedback`,method:"POST",body:i,wpcf7:{endpoint:"feedback",form:d,detail:f}}).then(b=>{const e=a(d,b.status);return f.status=b.status,f.apiResponse=b,["invalid","unaccepted","spam","aborted"].includes(e)?c(d,e,f):["sent","failed"].includes(e)&&c(d,`mail${e}`,f),c(d,"submit",f),b}).then(a=>{a.posted_data_hash&&(d.querySelector('input[name="_wpcf7_posted_data_hash"]').value=a.posted_data_hash),"mail_sent"===a.status&&(d.reset(),d.wpcf7.resetOnMailSent=!0),a.invalid_fields&&a.invalid_fields.forEach(a=>{h(d,a.field,a.message)}),d.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend",a.message),d.querySelectorAll(".wpcf7-response-output").forEach(b=>{b.innerText=a.message})}).catch(a=>console.error(a))}b.use((b,d)=>{if(b.wpcf7&&"feedback"===b.wpcf7.endpoint){const{form:d,detail:f}=b.wpcf7;e(d),c(d,"beforesubmit",f),a(d,"submitting")}return d(b)});const e=a=>{a.querySelectorAll(".wpcf7-form-control-wrap").forEach(b=>{b.dataset.name&&j(a,b.dataset.name)}),a.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText="",a.querySelectorAll(".wpcf7-response-output").forEach(a=>{a.innerText=""})};function l(d){const f=new FormData(d),e={contactFormId:d.wpcf7.id,pluginVersion:d.wpcf7.pluginVersion,contactFormLocale:d.wpcf7.locale,unitTag:d.wpcf7.unitTag,containerPostId:d.wpcf7.containerPost,status:d.wpcf7.status,inputs:Array.from(f,a=>{const b=a[0],c=a[1];return!b.match(/^_/)&&{name:b,value:c}}).filter(a=>!1!==a),formData:f};b({endpoint:`contact-forms/${d.wpcf7.id}/refill`,method:"GET",wpcf7:{endpoint:"refill",form:d,detail:e}}).then(b=>{d.wpcf7.resetOnMailSent?(delete d.wpcf7.resetOnMailSent,a(d,"mail_sent")):a(d,"init"),e.apiResponse=b,c(d,"reset",e)}).catch(a=>console.error(a))}b.use((b,c)=>{if(b.wpcf7&&"refill"===b.wpcf7.endpoint){const{form:c,detail:d}=b.wpcf7;e(c),a(c,"resetting")}return c(b)});const i=(a,b)=>{for(const c in b){const d=b[c];a.querySelectorAll(`input[name="${c}"]`).forEach(a=>{a.value=""}),a.querySelectorAll(`img.wpcf7-captcha-${c.replaceAll(":","")}`).forEach(a=>{a.setAttribute("src",d)});const e=/([0-9]+)\.(png|gif|jpeg)$/.exec(d);e&&a.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${c}"]`).forEach(a=>{a.value=e[1]})}},g=(b,a)=>{for(const c in a){const d=a[c][0],e=a[c][1];b.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${c}"]`).forEach(a=>{a.querySelector(`input[name="${c}"]`).value="",a.querySelector(".wpcf7-quiz-label").textContent=d,a.querySelector(`input[name="_wpcf7_quiz_answer_${c}"]`).value=e})}};function o(a){const c=new FormData(a);a.wpcf7={id:d(c.get("_wpcf7")),status:a.getAttribute("data-status"),pluginVersion:c.get("_wpcf7_version"),locale:c.get("_wpcf7_locale"),unitTag:c.get("_wpcf7_unit_tag"),containerPost:d(c.get("_wpcf7_container_post")),parent:a.closest(".wpcf7"),schema:void 0},a.querySelectorAll(".has-spinner").forEach(a=>{a.insertAdjacentHTML("afterend",'<span class="wpcf7-spinner"></span>')}),(a=>{a.querySelectorAll(".wpcf7-exclusive-checkbox").forEach(b=>{b.addEventListener("change",b=>{const c=b.target.getAttribute("name");a.querySelectorAll(`input[type="checkbox"][name="${c}"]`).forEach(a=>{a!==b.target&&(a.checked=!1)})})})})(a),(a=>{a.querySelectorAll(".has-free-text").forEach(d=>{const c=d.querySelector("input.wpcf7-free-text"),b=d.querySelector('input[type="checkbox"], input[type="radio"]');c.disabled=!b.checked,a.addEventListener("change",a=>{c.disabled=!b.checked,a.target===b&&b.checked&&c.focus()})})})(a),(a=>{a.querySelectorAll(".wpcf7-validates-as-url").forEach(a=>{a.addEventListener("change",c=>{let b=a.value.trim();b&&!b.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==b.indexOf(".")&&(b=b.replace(/^\/+/,""),b="http://"+b),a.value=b})})})(a),(a=>{if(!a.querySelector(".wpcf7-acceptance")||a.classList.contains("wpcf7-acceptance-as-validation"))return;const b=()=>{let b=!0;a.querySelectorAll(".wpcf7-acceptance").forEach(a=>{if(!b||a.classList.contains("optional"))return;const c=a.querySelector('input[type="checkbox"]');(a.classList.contains("invert")&&c.checked||!a.classList.contains("invert")&&!c.checked)&&(b=!1)}),a.querySelectorAll(".wpcf7-submit").forEach(a=>{a.disabled=!b})};b(),a.addEventListener("change",a=>{b()}),a.addEventListener("wpcf7reset",a=>{b()})})(a),(a=>{const b=(a,b)=>{const g=d(a.getAttribute("data-starting-value")),c=d(a.getAttribute("data-maximum-value")),e=d(a.getAttribute("data-minimum-value")),f=a.classList.contains("down")?g-b.value.length:b.value.length;a.setAttribute("data-current-value",f),a.innerText=f,c&&c<b.value.length?a.classList.add("too-long"):a.classList.remove("too-long"),e&&b.value.length<e?a.classList.add("too-short"):a.classList.remove("too-short")},c=c=>{c={init:!1,...c},a.querySelectorAll(".wpcf7-character-count").forEach(e=>{const f=e.getAttribute("data-target-name"),d=a.querySelector(`[name="${f}"]`);d&&(d.value=d.defaultValue,b(e,d),c.init&&d.addEventListener("keyup",a=>{b(e,d)}))})};c({init:!0}),a.addEventListener("wpcf7reset",a=>{c()})})(a),window.addEventListener("load",b=>{wpcf7.cached&&a.reset()}),a.addEventListener("reset",b=>{wpcf7.reset(a)}),a.addEventListener("submit",b=>{wpcf7.submit(a,{submitter:b.submitter}),b.preventDefault()}),a.addEventListener("wpcf7submit",b=>{b.detail.apiResponse.captcha&&i(a,b.detail.apiResponse.captcha),b.detail.apiResponse.quiz&&g(a,b.detail.apiResponse.quiz)}),a.addEventListener("wpcf7reset",b=>{b.detail.apiResponse.captcha&&i(a,b.detail.apiResponse.captcha),b.detail.apiResponse.quiz&&g(a,b.detail.apiResponse.quiz)}),b({endpoint:`contact-forms/${a.wpcf7.id}/feedback/schema`,method:"GET"}).then(b=>{a.wpcf7.schema=b}),a.addEventListener("change",b=>{b.target.closest(".wpcf7-form-control")&&wpcf7.validate(a,{target:b.target})})}document.addEventListener("DOMContentLoaded",b=>{var a;"undefined"!=typeof wpcf7?void 0!==wpcf7.api?"function"==typeof window.fetch?"function"==typeof window.FormData?"function"==typeof NodeList.prototype.forEach?"function"==typeof String.prototype.replaceAll?(wpcf7={init:o,submit:k,reset:l,validate:n,...null!==(a=wpcf7)&&void 0!==a?a:{}},document.querySelectorAll(".wpcf7 > form").forEach(a=>{wpcf7.init(a),a.closest(".wpcf7").classList.replace("no-js","js")})):console.error("Your browser does not support String.replaceAll()."):console.error("Your browser does not support NodeList.forEach()."):console.error("Your browser does not support window.FormData()."):console.error("Your browser does not support window.fetch()."):console.error("wpcf7.api is not defined."):console.error("wpcf7 is not defined.")})}();
'use strict';(function(){var a;a=window.jQuery||window.Zepto||window.$,a.fn.fancySelect=function(c){var d,b,e=!1;return c==null&&(c={}),b=a.extend({forceiOS:!1,includeBlank:!1,optionTemplate:function(a){return a.text()},triggerTemplate:function(a){return a.text()}},c),d=!!navigator.userAgent.match(/iP(hone|od|ad)/i),this.each(function(){var j,i,f,c,g,k,h;if(c=a(this),c.hasClass('fancified')||c[0].tagName!=='SELECT')return;return c.addClass('fancified'),c.css({width:1,height:1,display:'none',position:'absolute',top:0,left:0,opacity:0}),c.wrap('<div class="fancy-select">'),h=c.parent(),c.data('class')&&h.addClass(c.data('class')),h.append('<div class="trigger">'),h.append('<ul class="options">'),g=h.find('.trigger'),f=h.find('.options'),i=c.prop('disabled'),i&&h.addClass('disabled'),k=function(){var a;return a=b.triggerTemplate(c.find(':selected')),g.html(a)},c.on('blur.fs',function(){if(g.hasClass('open'))return setTimeout(function(){return g.trigger('close.fs')},120)}),g.on('close.fs',function(){return g.removeClass('open'),f.removeClass('open')}),g.on('close',function(){var a=c.parent();if(!a.is(':hover')||a.is(':hover')&&e)return e=!1,g.removeClass('open'),f.removeClass('open')}),c.parent().on('mouseout',function(){c.trigger('focus')}),g.on('click.fs',function(){var e,b;if(!i)if(g.toggleClass('open'),g.hasClass('open')&&(b=g.parent(),e=b.offsetParent(),b.offset().top+b.outerHeight()+f.outerHeight()+20>a(window).height()+a(window).scrollTop()?f.addClass('overflowing'):f.removeClass('overflowing')),f.toggleClass('open'),!d)return c.focus()}),c.on('enable',function(){return c.prop('disabled',!1),h.removeClass('disabled'),i=!1,j()}),c.on('disable',function(){return c.prop('disabled',!0),h.addClass('disabled'),i=!0}),c.on('change.fs',function(a){return a.originalEvent&&a.originalEvent.isTrusted?a.stopPropagation():k()}),c.on('keydown',function(c){var b,d,a;if(a=c.which,b=f.find('.hover'),b.removeClass('hover'),f.hasClass('open')){if(a===38?(c.preventDefault(),b.length&&b.index()>0?b.prev().addClass('hover'):f.find('li:last-child').addClass('hover')):a===40?(c.preventDefault(),b.length&&b.index()<f.find('li').length-1?b.next().addClass('hover'):f.find('li:first-child').addClass('hover')):a===27?(c.preventDefault(),g.trigger('click.fs')):a===13||a===32?(c.preventDefault(),b.trigger('click.fs')):a===9&&g.hasClass('open')&&g.trigger('close.fs'),d=f.find('.hover'),d.length)return f.scrollTop(0),f.scrollTop(d.position().top-12)}else if(a===13||a===32||a===38||a===40)return c.preventDefault(),g.trigger('click.fs')}),f.on('click.fs','li',function(e){var b;return b=a(this),c.val(b.data('raw-value')),d||c.trigger('blur.fs').trigger('focus.fs'),f.find('.selected').removeClass('selected'),b.addClass('selected'),g.addClass('selected'),c.val(b.data('raw-value')).trigger('change.fs').trigger('blur.fs').trigger('focus.fs')}),f.on('mouseenter.fs','li',function(){var b,c;return c=a(this),b=f.find('.hover'),b.removeClass('hover'),c.addClass('hover')}),f.on('mouseleave.fs','li',function(){return f.find('.hover').removeClass('hover')}),j=function(){var d;return k(),d=c.find('option'),c.find('option').each(function(e,c){var d;if(c=a(c),!c.prop('disabled')&&(c.val()||b.includeBlank))return d=b.optionTemplate(c),c.prop('selected')?f.append('<li data-raw-value="'+c.val()+'" class="selected">'+d+"</li>"):f.append('<li data-raw-value="'+c.val()+'">'+d+"</li>")})},c.on('update.fs',function(){return h.find('.options').empty(),j()}),j()})}}).call(this);
window.BoldThemesURI = "https://ihncon.com/wp-content/themes/avantage"; window.BoldThemesAJAXURL = "https://ihncon.com/wp-admin/admin-ajax.php";window.boldthemes_text = [];window.boldthemes_text.previous = 'previous';window.boldthemes_text.next = 'next';;
'use strict';var bt_initHeader;(function(a){var h,d,f,g,b,e;function r(){var c='ontouchstart'in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0;c?(a('html').addClass('touch'),a('html').removeClass('no-touch')):(a('html').addClass('no-touch'),a('html').removeClass('touch')),h=a('body').hasClass('btMenuCenterEnabled'),d=a('body').hasClass('btMenuVerticalLeftEnabled')||a('body').hasClass('btMenuVerticalRightEnabled'),e=a('body').hasClass('btMenuFullScreenCenter'),a('body').hasClass('rtl')?b='Right':b='Left',f=a('body').hasClass('btBelowMenu'),g=a('body').hasClass('btStickyEnabled'),typeof window.btStickyOffset=='undefined'&&(window.btStickyOffset=250),typeof window.responsiveResolution=='undefined'&&(window.responsiveResolution='1200')}function q(){a('li.btMenuWideDropdown').addClass(function(){return'btMenuWideDropdownCols-'+a(this).children('ul').children('li').length}),a('li.btMenuWideDropdown').each(function(){var b=0;a(this).find('> ul > li > ul').each(function(c){a(this).children().length>b&&(b=a(this).children().length)}),a(this).find('> ul > li > ul').each(function(e){var c=a(this).children().length,d;if(c<b)for(d=0;d<b-c;d++)a(this).append('<li class="btEmptyParentElement"><a class="btEmptyElement">&nbsp;</a></li>')})}),a('.btHorizontalMenuTrigger, .bt-horizontal-menu-trigger').on('click',function(){return a('body').toggleClass('btShowMenu'),!1}),a('.bt-fullscreen-menu-trigger').on('click',function(){return a('body').toggleClass('bt-show-fullscreen-menu'),!1}),a('.btVerticalMenuTrigger, .bt-vertical-menu-trigger').on('click',function(){return a('body').toggleClass('btMenuVerticalOn'),!1})}function j(){a('.mainHeader .btSearchInner').prependTo('body').addClass('btFromTopBox'),a('.mainHeader .widget_search').addClass('btIconWidget'),a('.mainHeader .btSearch, .btFromTopBox .btSearchInnerClose').on('click',function(){return a('body').toggleClass('btTopToolsSearchOpen'),a('body').hasClass('btTopToolsSearchOpen')&&a('.btSearchInnerContent form input:text:visible:first').length&&boldthemes_requestTimeout(k,500),!1})}function k(){a('.btSearchInnerContent form input:text:visible:first').focus()}function l(){var b,c;a('.btTextLogo').length?(b=a('.mainHeader .logo').width()):a('.mainHeader .logo .btMainLogo').data('hw')?(b=a('.mainHeader .logo').height()*a('.mainHeader .logo .btMainLogo').data('hw')):(b=a('.mainHeader .logo').height()*3),a('.menuPort nav').addClass('leftNav'),a('.menuPort').append('<nav class="rightNav"><ul></ul></nav>'),c=Math.ceil(a('.menuPort nav.leftNav ul>li:not(li li)').length*.5),a('.menuPort nav.rightNav > ul').append(a('.menuPort nav.leftNav > ul > li').slice(c)),a('.menuPort nav.leftNav > ul > li').slice(c).remove(),a('.mainHeader .logo').css('transform','translateX('+Math.round(-b*.5)+'px)'),a('.mainHeader .logo').css('width',b+'px'),a('.menuPort nav.leftNav').attr('style','--margin:'+Math.round(b*.5)+'px;margin-right:'+Math.round(b*.5)+'px;'),a('.menuPort nav.rightNav').attr('style','--margin:'+Math.round(b*.5)+'px;margin-left:'+Math.round(b*.5)+'px;')}function m(){var b=a(window).scrollTop();b>window.btStickyOffset&&!a('body').hasClass('btStickyHeaderActive')?(a('body').addClass('btStickyHeaderActive'),boldthemes_requestTimeout(n,500)):b<=window.btStickyOffset&&a('body').hasClass('btStickyHeaderActive')&&!a('body').hasClass('btStickyHeaderClosed')&&(a('body').addClass('btStickyHeaderClosed'),boldthemes_requestTimeout(o,500))}function n(){a('body').addClass('btStickyHeaderOpen')}function o(){a('body').removeClass('btStickyHeaderActive btStickyHeaderOpen btStickyHeaderClosed')}window.boldthemes_requestTimeout=function(b,c){if(!window.requestAnimationFrame&&!window.webkitRequestAnimationFrame&&!(window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame)&&!window.oRequestAnimationFrame&&!window.msRequestAnimationFrame)return window.setTimeout(b,c);var e=(new Date).getTime(),a=new Object;function d(){var f=(new Date).getTime(),g=f-e;g>=c?b.call():a.value=boldthemes_requestAnimFrame(d)}return a.value=boldthemes_requestAnimFrame(d),a},window.boldthemes_requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a,b){window.setTimeout(a,1e3/60)}}();function p(){e||d||a(window).on("resize",function(d){window.innerWidth<window.responsiveResolution?a('body').addClass('btMenuVertical'+b+' btMenuVertical').removeClass('btMenuHorizontal'):a('body').removeClass('btMenuVertical btMenuVertical'+b+' btMenuVerticalOn').addClass('btMenuHorizontal'),c()})}function i(){r(),e||(d?(a('body').hasClass('btMenuVerticalLeftEnabled')&&a('body').addClass('btMenuVerticalLeft btMenuVertical'),a('body').hasClass('btMenuVerticalRightEnabled')&&a('body').addClass('btMenuVerticalRight btMenuVertical')):(a('body').hasClass('btMenuRightEnabled')&&a('body').addClass('btMenuRight btMenuHorizontal'),a('body').hasClass('btMenuLeftEnabled')&&a('body').addClass('btMenuLeft btMenuHorizontal'),a('body').hasClass('btMenuCenterBelowEnabled')&&a('body').addClass('btMenuCenterBelow btMenuHorizontal'),a('body').hasClass('btMenuCenterEnabled')&&a('body').addClass('btMenuCenter btMenuHorizontal'),window.innerWidth<window.responsiveResolution?a('body').addClass('btMenuVertical'+b+' btMenuVertical').removeClass('btMenuHorizontal'):a('body').removeClass('btMenuVertical btMenuVertical'+b+' btMenuVerticalOn').addClass('btMenuHorizontal'))),f||c(),setTimeout(function(){a('body').addClass('btMenuInitFinished')},100),g&&setTimeout(function(){a(window).scroll(function(){m()})},1e3),h&&l(),a('.menuPort ul ul').parent().prepend('<div class="subToggler"></div>'),a('.menuPort ul li').on('mouseenter mouseleave',function(b){if(a('body').hasClass('btMenuVertical')||a('body').hasClass('btMenuFullScreenCenter')||a('html').hasClass('touch'))return!1;b.preventDefault(),a(this).siblings().removeClass('on'),a(this).toggleClass('on')}),a('.menuPort ul.menu').on('mouseenter mouseleave',function(b){if(a('body').hasClass('btMenuVertical')||a('body').hasClass('btMenuFullScreenCenter')||a('html').hasClass('touch'))return!1;a(this).toggleClass('hover')}),a('div.subToggler').on('click',function(c){var b=a(this).parent();return b.siblings().removeClass('on'),b.siblings().find('li').removeClass('on'),b.siblings().find('ul').hide(),b.toggleClass('on'),b.parent().hasClass('menu')&&b.parent().toggleClass('hover'),a('body').hasClass('btMenuVertical')&&b.find('ul').first().slideToggle(200),!1}),q()}function c(){f||(a(window).width()<window.responsiveResolution||d||e?a('.btContentWrap, .bt-content-wrap').css('padding-top',a('.btVerticalHeaderTop, .bt-vertical-header-top').height()+'px'):a('body').hasClass('btStickyHeaderActive')||a('.btContentWrap, .bt-content-wrap').css('padding-top',a('.mainHeader').height()+'px'))}function s(){j(),setTimeout(function(){i()},100),c()}a(window).on('load',function(){c()}),bt_initHeader=s,j(),i(),p()})(jQuery);
'use strict';var bt_initTheme;function bt_refresh_cart(){jQuery('.btCartWidgetIcon').off('click').on('click',function(a){jQuery(this).parent().parent().toggleClass('on'),jQuery('body').toggleClass('btCartDropdownOn')}),jQuery('.verticalMenuCartToggler').off('click').on('click',function(){jQuery(this).closest('.widget_shopping_cart_content').removeClass('on'),jQuery('body').removeClass('.btCartDropdownOn')})}(function(a){function c(){typeof a.fn.fancySelect=='function'&&a('.no-touch .btSidebar select, .no-touch #btSettingsPanelContent select, .no-touch .wpcf7-form select:not([multiple]):not(.skipFancy)').fancySelect()}function j(){a('.wpcf7-form .wpcf7-date').change(function(b,c){a(this).val()!=''?a(this).addClass('bt-date-input-has-value'):a(this).removeClass('bt-date-input-has-value')})}function e(){a('body').hasClass('btRemovePreloader')||(a('body').addClass('btRemovePreloader'),typeof bt_bb_animate_elements=='function'&&bt_bb_animate_elements()),setTimeout(function(){a(window).trigger('btload'),window.boldthemes_loaded=!0},500),a(window).trigger('resize')}function f(){a('#boldSiteFooterWidgetsRow').attr('data-width',a('#boldSiteFooterWidgetsRow').children().length).children().addClass('bt_bb_column')}function i(){var a=document.documentElement;a.setAttribute('data-useragent',navigator.userAgent),String.prototype.startsWith||(String.prototype.startsWith=function(b,a){return a=a||0,this.lastIndexOf(b,a)===a}),String.prototype.endsWith||(String.prototype.endsWith=function(c,a){var b=this.toString(),d;return(a===void 0||a>b.length)&&(a=b.length),a-=c.length,d=b.indexOf(c,a),d!==-1&&d===a})}function g(){a('body.bodyPreloader .mainHeader .menu').off('click').on('click','a',function(){var b=a(this).attr('href');if(b!==void 0&&!b.startsWith('#')&&!b.startsWith('mailto')&&!b.startsWith('callto')&&!a(this).hasClass('lightbox')&&!a(this).hasClass('add_to_cart_button')&&a(this).attr('target')!='_blank')return a('body').removeClass('btRemovePreloader'),setTimeout(function(){window.location=b},750),!1})}function h(){var b,c,d,e;a('.cart-contents').each(function(){bt_refresh_cart()}),b=jQuery('.widget_shopping_cart')[0],b!==void 0&&(c={attributes:!0,childList:!0,subtree:!0},d=function(b,d){for(var a=0,c;a<b.length;a)c=b[a],c.type=='childList'&&(jQuery('.btCartWidgetIcon').off('click').on('click',function(a){jQuery(this).parent().parent().toggleClass('on'),jQuery('body').toggleClass('btCartDropdownOn')}),jQuery('.verticalMenuCartToggler').off('click').on('click',function(a){jQuery(this).closest('.widget_shopping_cart_content').removeClass('on'),jQuery('body').removeClass('.btCartDropdownOn')})),a++},e=new MutationObserver(d),e.observe(b,c))}function d(){if(a('ul.products li.product .btWooShopLoopItemInner').length>1){var b=Math.max.apply(null,a('ul.products li.product .btWooShopLoopItemInner').map(function(){return a(this).outerHeight()}).get());a('ul.products li.product .btWooShopLoopItemInner').css('min-height',b+'px')}}function k(){c(),initDateInput(),f(),i(),g(),h(),e()}a(window).on('load',function(){e()}),a(document).ready(function(){h()}),a(window).resize(function(){a('ul.products li.product .btWooShopLoopItemInner').length>1&&(a("ul.products li.product .btWooShopLoopItemInner").css('min-height','auto'),d())});function l(){if(b.options[b.selectedIndex].value>0){var a=document.querySelector(".logo a").href;b!==null&&(location.href=a+'?cat='+b.options[b.selectedIndex].value)}}var b=document.querySelector(".widget_categories #cat");b!==null&&(b.onchange=l),c(),j(),f(),i(),g(),d(),bt_initTheme=k})(jQuery);
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