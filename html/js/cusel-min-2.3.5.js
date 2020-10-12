/* -------------------------------------

	cusel version 2.3.5
	last update: 28.06.11
	смена обычного селект на стильный
	autor: Evgen Ryzhkov
	www.xiper.net
----------------------------------------	
*/
function cuSel(params){jQuery(params.changedEl).each(function(num)
{var chEl=jQuery(this),chElWid=chEl.outerWidth(),chElClass=chEl.prop("class"),chElId=chEl.prop("id"),chElName=chEl.prop("name"),defaultVal=chEl.val(),activeOpt=chEl.find("option[value='"+defaultVal+"']").eq(0),defaultText=activeOpt.text(),disabledSel=chEl.prop("disabled"),scrollArrows=params.scrollArrows,chElOnChange=chEl.prop("onchange"),chElTab=chEl.prop("tabindex"),chElMultiple=chEl.prop("multiple");if(!chElId||chElMultiple)return false;if(!disabledSel)
{classDisCuselText="",classDisCusel="";}
else
{classDisCuselText="classDisCuselLabel";classDisCusel="classDisCusel";}
if(scrollArrows)
{classDisCusel+=" cuselScrollArrows";}
activeOpt.addClass("cuselActive");var optionStr=chEl.html(),spanStr=optionStr.replace(/option/ig,"span").replace(/value=/ig,"val=");if(jQuery.browser.msie&&parseInt(jQuery.browser.version)<9)
{var pattern=/(val=)(.*?)(>)/g;spanStr=spanStr.replace(pattern,"jQuery1'jQuery2'jQuery3");}
if(params.checkZIndex)
{num=jQuery(".cusel").length;}
var cuselFrame='<div class="cusel '+chElClass+' '+classDisCusel+'"'+' id=cuselFrame-'+chElId+' style="width:'+chElWid+'px"'+' tabindex="'+chElTab+'"'+'>'+'<div class="cuselFrameRight"></div>'+'<div class="cuselText">'+defaultText+'</div>'+'<div class="cusel-scroll-wrap"><div class="cusel-scroll-pane" id="cusel-scroll-'+chElId+'">'+
spanStr+'</div></div>'+'<input type="hidden" id="'+chElId+'" name="'+chElName+'" value="'+defaultVal+'" />'+'</div>';chEl.replaceWith(cuselFrame);if(chElOnChange)jQuery("#"+chElId).bind('change',chElOnChange);var newSel=jQuery("#cuselFrame-"+chElId),arrSpan=newSel.find("span"),defaultHeight;if(!arrSpan.eq(0).text())
{defaultHeight=arrSpan.eq(1).outerHeight();arrSpan.eq(0).css("height",arrSpan.eq(1).height());}
else
{defaultHeight=arrSpan.eq(0).outerHeight();}
if(arrSpan.length>params.visRows)
{newSel.find(".cusel-scroll-wrap").eq(0).css({height:defaultHeight*params.visRows+"px",display:"none",visibility:"visible"}).children(".cusel-scroll-pane").css("height",defaultHeight*params.visRows+"px");}
else
{newSel.find(".cusel-scroll-wrap").eq(0).css({display:"none",visibility:"visible"});}
var arrAddTags=jQuery("#cusel-scroll-"+chElId).find("span[addTags]"),lenAddTags=arrAddTags.length;for(i=0;i<lenAddTags;i++)arrAddTags.eq(i).append(arrAddTags.eq(i).attr("addTags")).removeAttr("addTags");cuselEvents();});function cuselEvents(){jQuery("html").unbind("click");jQuery("html").click(function(e)
{var clicked=jQuery(e.target),clickedId=clicked.attr("id"),clickedClass=clicked.prop("class");if((clickedClass.indexOf("cuselText")!=-1||clickedClass.indexOf("cuselFrameRight")!=-1)&&clicked.parent().prop("class").indexOf("classDisCusel")==-1)
{var cuselWrap=clicked.parent().find(".cusel-scroll-wrap").eq(0);if(cuselWrap.css("display")=="none")
{jQuery(".cusel-scroll-wrap").css("display","none");cuselWrap.css("display","block");var cuselArrows=false;if(clicked.parents(".cusel").prop("class").indexOf("cuselScrollArrows")!=-1)cuselArrows=true;if(!cuselWrap.find(".jScrollPaneContainer").eq(0).is("div"))
{cuselWrap.find("div").eq(0).jScrollPaneCusel({showArrows:cuselArrows});}}
else
{cuselWrap.css("display","none");}}
else if(clickedClass.indexOf("cusel")!=-1&&clickedClass.indexOf("classDisCusel")==-1&&clicked.is("div"))
{var cuselWrap=clicked.find(".cusel-scroll-wrap").eq(0);if(cuselWrap.css("display")=="none")
{jQuery(".cusel-scroll-wrap").css("display","none");cuselWrap.css("display","block");var cuselArrows=false;if(clicked.prop("class").indexOf("cuselScrollArrows")!=-1)cuselArrows=true;if(!cuselWrap.find(".jScrollPaneContainer").eq(0).is("div"))
{cuselWrap.find("div").eq(0).jScrollPaneCusel({showArrows:cuselArrows});}}
else
{cuselWrap.css("display","none");}}
else if(clicked.is(".cusel-scroll-wrap span")&&clickedClass.indexOf("cuselActive")==-1)
{var clickedVal;(clicked.attr("val")==undefined)?clickedVal=clicked.text():clickedVal=clicked.attr("val");clicked.parents(".cusel-scroll-wrap").find(".cuselActive").eq(0).removeClass("cuselActive").end().parents(".cusel-scroll-wrap").next().val(clickedVal).end().prev().text(clicked.text()).end().css("display","none");clicked.addClass("cuselActive");if(clickedClass.indexOf("cuselActive")==-1)clicked.parents(".cusel").find(".cusel-scroll-wrap").eq(0).next("input").change();}
else if(clicked.parents(".cusel-scroll-wrap").is("div"))
{return;}
else
{jQuery(".cusel-scroll-wrap").css("display","none");}});jQuery(".cusel").unbind("keydown");jQuery(".cusel").keydown(function(event)
{var key,keyChar;if(window.event)key=window.event.keyCode;else if(event)key=event.which;if(key==null||key==0||key==9)return true;if(jQuery(this).prop("class").indexOf("classDisCusel")!=-1)return false;if(key==40)
{var cuselOptHover=jQuery(this).find(".cuselOptHover").eq(0);if(!cuselOptHover.is("span"))var cuselActive=jQuery(this).find(".cuselActive").eq(0);else var cuselActive=cuselOptHover;var cuselActiveNext=cuselActive.next();if(cuselActiveNext.is("span"))
{jQuery(this).find(".cuselText").eq(0).text(cuselActiveNext.text());cuselActive.removeClass("cuselOptHover");cuselActiveNext.addClass("cuselOptHover");var scrollWrap=jQuery(this).find(".cusel-scroll-pane").eq(0);if(scrollWrap.parent().find(".jScrollPaneTrack").eq(0).is("div"))
{var idScrollWrap=scrollWrap.prop("id"),hOption=scrollWrap.find("span").eq(0).outerHeight();jQuery("#"+idScrollWrap)[0].scrollBy(hOption);}
return false;}
else return false;}
if(key==38)
{var cuselOptHover=jQuery(this).find(".cuselOptHover").eq(0);if(!cuselOptHover.is("span"))var cuselActive=jQuery(this).find(".cuselActive").eq(0);else var cuselActive=cuselOptHover;cuselActivePrev=cuselActive.prev();if(cuselActivePrev.is("span"))
{jQuery(this).find(".cuselText").eq(0).text(cuselActivePrev.text());cuselActive.removeClass("cuselOptHover");cuselActivePrev.addClass("cuselOptHover");var scrollWrap=jQuery(this).find(".cusel-scroll-pane").eq(0);if(scrollWrap.parent().find(".jScrollPaneTrack").eq(0).is("div"))
{var idScrollWrap=scrollWrap.prop("id"),hOption=-parseInt(scrollWrap.find("span").eq(0).outerHeight());jQuery("#"+idScrollWrap)[0].scrollBy(hOption);}
return false;}
else return false;}
if(key==27)
{var cuselActiveText=jQuery(this).find(".cuselActive").eq(0).text();jQuery(this).find(".cusel-scroll-wrap").eq(0).css("display","none").end().find(".cuselOptHover").eq(0).removeClass("cuselOptHover");jQuery(this).find(".cuselText").eq(0).text(cuselActiveText);}
if(key==13)
{var cuselHover=jQuery(this).find(".cuselOptHover").eq(0);if(cuselHover.is("span"))
{jQuery(this).find(".cuselActive").removeClass("cuselActive");var cuselHoverVal=cuselHover.attr("val");cuselHover.addClass("cuselActive");}
else var cuselHoverVal=jQuery(this).find(".cuselActive").attr("val");jQuery(this).find(".cusel-scroll-wrap").eq(0).css("display","none").end().find(".cuselOptHover").eq(0).removeClass("cuselOptHover");jQuery(this).find("input").eq(0).val(cuselHoverVal).change();}
if(jQuery.browser.opera)return false;});var arr=[];jQuery(".cusel").keypress(function(event)
{var key,keyChar;if(window.event)key=window.event.keyCode;else if(event)key=event.which;if(key==null||key==0||key==9)return true;if(jQuery(this).prop("class").indexOf("classDisCusel")!=-1)return false;var o=this;arr.push(event);clearTimeout(jQuery.data(this,'timer'));var wait=setTimeout(function(){handlingEvent()},500);jQuery(this).data('timer',wait);function handlingEvent()
{var charKey=[];for(var iK in arr)
{if(window.event)charKey[iK]=arr[iK].keyCode;else if(arr[iK])charKey[iK]=arr[iK].which;charKey[iK]=String.fromCharCode(charKey[iK]).toUpperCase();}
var arrOption=jQuery(o).find("span"),colArrOption=arrOption.length,i,letter;for(i=0;i<colArrOption;i++)
{var match=true;for(var iter in arr)
{letter=arrOption.eq(i).text().charAt(iter).toUpperCase();if(letter!=charKey[iter])
{match=false;}}
if(match)
{jQuery(o).find(".cuselOptHover").removeClass("cuselOptHover").end().find("span").eq(i).addClass("cuselOptHover").end().end().find(".cuselText").eq(0).text(arrOption.eq(i).text());var scrollWrap=jQuery(o).find(".cusel-scroll-pane").eq(0);if(scrollWrap.parent().find(".jScrollPaneTrack").eq(0).is("div"))
{var idScrollWrap=scrollWrap.prop("id"),hOption=scrollWrap.find("span").eq(0).outerHeight()-0.2;jQuery("#"+idScrollWrap)[0].scrollTo(hOption*i);}
arr=arr.splice;arr=[];break;return true;}}
arr=arr.splice;arr=[];}
if(jQuery.browser.opera&&window.event.keyCode!=9)return false;});}
var arrCusel=jQuery(".cusel"),colCusel=arrCusel.length-1,i;for(i=0;i<=colCusel;i++)
{arrCusel.eq(i).css("z-index",colCusel-i);}
jQuery(".cusel").focus(function()
{jQuery(this).addClass("cuselFocus");});jQuery(".cusel").blur(function()
{jQuery(this).removeClass("cuselFocus");});jQuery(".cusel").hover(function()
{jQuery(this).addClass("cuselFocus");},function()
{jQuery(this).removeClass("cuselFocus");});}
function cuSelRefresh(params)
{var arrRefreshEl=params.refreshEl.split(","),lenArr=arrRefreshEl.length,i;for(i=0;i<lenArr;i++)
{var refreshScroll=jQuery(arrRefreshEl[i]).parents(".cusel").find(".cusel-scroll-wrap").eq(0);refreshScroll.find(".cusel-scroll-pane").jScrollPaneRemoveCusel();refreshScroll.css({visibility:"hidden",display:"block"});var arrSpan=refreshScroll.find("span"),defaultHeight=arrSpan.eq(0).outerHeight();if(arrSpan.length>params.visRows)
{refreshScroll.css({height:defaultHeight*params.visRows+"px",display:"none",visibility:"visible"}).children(".cusel-scroll-pane").css("height",defaultHeight*params.visRows+"px");}
else
{refreshScroll.css({display:"none",visibility:"visible"});}}}
(function(jQuery){jQuery.jScrollPaneCusel={active:[]};jQuery.fn.jScrollPaneCusel=function(settings)
{settings=jQuery.extend({},jQuery.fn.jScrollPaneCusel.defaults,settings);var rf=function(){return false;};return this.each(function()
{var jQuerythis=jQuery(this);var cuselWid=this.parentNode.offsetWidth;jQuerythis.css('overflow','hidden');var paneEle=this;if(jQuery(this).parent().is('.jScrollPaneContainer')){var currentScrollPosition=settings.maintainPosition?jQuerythis.position().top:0;var jQueryc=jQuery(this).parent();var paneWidth=cuselWid;var paneHeight=jQueryc.outerHeight();var trackHeight=paneHeight;jQuery('>.jScrollPaneTrack, >.jScrollArrowUp, >.jScrollArrowDown',jQueryc).remove();jQuerythis.css({'top':0});}else{var currentScrollPosition=0;this.originalPadding=jQuerythis.css('paddingTop')+' '+jQuerythis.css('paddingRight')+' '+jQuerythis.css('paddingBottom')+' '+jQuerythis.css('paddingLeft');this.originalSidePaddingTotal=(parseInt(jQuerythis.css('paddingLeft'))||0)+(parseInt(jQuerythis.css('paddingRight'))||0);var paneWidth=cuselWid;var paneHeight=jQuerythis.innerHeight();var trackHeight=paneHeight;jQuerythis.wrap("<div class='jScrollPaneContainer'></div>").parent().css({'height':paneHeight+'px','width':paneWidth+'px'});if(!window.navigator.userProfile)
{var borderWid=parseInt(jQuery(this).parent().css("border-left-width"))+parseInt(jQuery(this).parent().css("border-right-width"));paneWidth-=borderWid;jQuery(this).css("width",paneWidth+"px").parent().css("width",paneWidth+"px");}
jQuery(document).bind('emchange',function(e,cur,prev)
{jQuerythis.jScrollPaneCusel(settings);});}
if(settings.reinitialiseOnImageLoad){var jQueryimagesToLoad=jQuery.data(paneEle,'jScrollPaneImagesToLoad')||jQuery('img',jQuerythis);var loadedImages=[];if(jQueryimagesToLoad.length){jQueryimagesToLoad.each(function(i,val){jQuery(this).bind('load',function(){if(jQuery.inArray(i,loadedImages)==-1){loadedImages.push(val);jQueryimagesToLoad=jQuery.grep(jQueryimagesToLoad,function(n,i){return n!=val;});jQuery.data(paneEle,'jScrollPaneImagesToLoad',jQueryimagesToLoad);settings.reinitialiseOnImageLoad=false;jQuerythis.jScrollPaneCusel(settings);}}).each(function(i,val){if(this.complete||this.complete===undefined){this.src=this.src;}});});};}
var p=this.originalSidePaddingTotal;var cssToApply={'height':'auto','width':paneWidth-settings.scrollbarWidth-settings.scrollbarMargin-p+'px'}
if(settings.scrollbarOnLeft){cssToApply.paddingLeft=settings.scrollbarMargin+settings.scrollbarWidth+'px';}else{cssToApply.paddingRight=settings.scrollbarMargin+'px';}
jQuerythis.css(cssToApply);var contentHeight=jQuerythis.outerHeight();var percentInView=paneHeight/contentHeight;if(percentInView<.99){var jQuerycontainer=jQuerythis.parent();jQuerycontainer.append(jQuery('<div class="jScrollPaneTrack"></div>').css({'width':settings.scrollbarWidth+'px'}).append(jQuery('<div class="jScrollPaneDrag"></div>').css({'width':settings.scrollbarWidth+'px'}).append(jQuery('<div class="jScrollPaneDragTop"></div>').css({'width':settings.scrollbarWidth+'px'}),jQuery('<div class="jScrollPaneDragBottom"></div>').css({'width':settings.scrollbarWidth+'px'}))));var jQuerytrack=jQuery('>.jScrollPaneTrack',jQuerycontainer);var jQuerydrag=jQuery('>.jScrollPaneTrack .jScrollPaneDrag',jQuerycontainer);if(settings.showArrows){var currentArrowButton;var currentArrowDirection;var currentArrowInterval;var currentArrowInc;var whileArrowButtonDown=function()
{if(currentArrowInc>4||currentArrowInc%4==0){positionDrag(dragPosition+currentArrowDirection*mouseWheelMultiplier);}
currentArrowInc++;};var onArrowMouseUp=function(event)
{jQuery('html').unbind('mouseup',onArrowMouseUp);currentArrowButton.removeClass('jScrollActiveArrowButton');clearInterval(currentArrowInterval);};var onArrowMouseDown=function(){jQuery('html').bind('mouseup',onArrowMouseUp);currentArrowButton.addClass('jScrollActiveArrowButton');currentArrowInc=0;whileArrowButtonDown();currentArrowInterval=setInterval(whileArrowButtonDown,100);};jQuerycontainer.append(jQuery('<div></div>').attr({'class':'jScrollArrowUp'}).css({'width':settings.scrollbarWidth+'px'}).bind('mousedown',function()
{currentArrowButton=jQuery(this);currentArrowDirection=-1;onArrowMouseDown();this.blur();return false;}).bind('click',rf),jQuery('<div></div>').attr({'class':'jScrollArrowDown'}).css({'width':settings.scrollbarWidth+'px'}).bind('mousedown',function()
{currentArrowButton=jQuery(this);currentArrowDirection=1;onArrowMouseDown();this.blur();return false;}).bind('click',rf));var jQueryupArrow=jQuery('>.jScrollArrowUp',jQuerycontainer);var jQuerydownArrow=jQuery('>.jScrollArrowDown',jQuerycontainer);if(settings.arrowSize){trackHeight=paneHeight-settings.arrowSize-settings.arrowSize;jQuerytrack.css({'height':trackHeight+'px',top:settings.arrowSize+'px'})}else{var topArrowHeight=jQueryupArrow.height();settings.arrowSize=topArrowHeight;trackHeight=paneHeight-topArrowHeight-jQuerydownArrow.height();jQuerytrack.css({'height':trackHeight+'px',top:topArrowHeight+'px'})}}
var jQuerypane=jQuery(this).css({'position':'absolute','overflow':'visible'});var currentOffset;var maxY;var mouseWheelMultiplier;var dragPosition=0;var dragMiddle=percentInView*paneHeight/2;var getPos=function(event,c){var p=c=='X'?'Left':'Top';return event['page'+c]||(event['client'+c]+(document.documentElement['scroll'+p]||document.body['scroll'+p]))||0;};var ignoreNativeDrag=function(){return false;};var initDrag=function()
{ceaseAnimation();currentOffset=jQuerydrag.offset(false);currentOffset.top-=dragPosition;maxY=trackHeight-jQuerydrag[0].offsetHeight;mouseWheelMultiplier=2*settings.wheelSpeed*maxY/contentHeight;};var onStartDrag=function(event)
{initDrag();dragMiddle=getPos(event,'Y')-dragPosition-currentOffset.top;jQuery('html').bind('mouseup',onStopDrag).bind('mousemove',updateScroll);if(jQuery.browser.msie){jQuery('html').bind('dragstart',ignoreNativeDrag).bind('selectstart',ignoreNativeDrag);}
return false;};var onStopDrag=function()
{jQuery('html').unbind('mouseup',onStopDrag).unbind('mousemove',updateScroll);dragMiddle=percentInView*paneHeight/2;if(jQuery.browser.msie){jQuery('html').unbind('dragstart',ignoreNativeDrag).unbind('selectstart',ignoreNativeDrag);}};var positionDrag=function(destY)
{destY=destY<0?0:(destY>maxY?maxY:destY);dragPosition=destY;jQuerydrag.css({'top':destY+'px'});var p=destY/maxY;jQuerypane.css({'top':((paneHeight-contentHeight)*p)+'px'});jQuerythis.trigger('scroll');if(settings.showArrows){jQueryupArrow[destY==0?'addClass':'removeClass']('disabled');jQuerydownArrow[destY==maxY?'addClass':'removeClass']('disabled');}};var updateScroll=function(e)
{positionDrag(getPos(e,'Y')-currentOffset.top-dragMiddle);};var dragH=Math.max(Math.min(percentInView*(paneHeight-settings.arrowSize*2),settings.dragMaxHeight),settings.dragMinHeight);jQuerydrag.css({'height':dragH+'px'}).bind('mousedown',onStartDrag);var trackScrollInterval;var trackScrollInc;var trackScrollMousePos;var doTrackScroll=function()
{if(trackScrollInc>8||trackScrollInc%4==0){positionDrag((dragPosition-((dragPosition-trackScrollMousePos)/2)));}
trackScrollInc++;};var onStopTrackClick=function()
{clearInterval(trackScrollInterval);jQuery('html').unbind('mouseup',onStopTrackClick).unbind('mousemove',onTrackMouseMove);};var onTrackMouseMove=function(event)
{trackScrollMousePos=getPos(event,'Y')-currentOffset.top-dragMiddle;};var onTrackClick=function(event)
{initDrag();onTrackMouseMove(event);trackScrollInc=0;jQuery('html').bind('mouseup',onStopTrackClick).bind('mousemove',onTrackMouseMove);trackScrollInterval=setInterval(doTrackScroll,100);doTrackScroll();};jQuerytrack.bind('mousedown',onTrackClick);jQuerycontainer.bind('mousewheel',function(event,delta){initDrag();ceaseAnimation();var d=dragPosition;positionDrag(dragPosition-delta*mouseWheelMultiplier);var dragOccured=d!=dragPosition;return false;});var _animateToPosition;var _animateToInterval;function animateToPosition()
{var diff=(_animateToPosition-dragPosition)/settings.animateStep;if(diff>1||diff<-1){positionDrag(dragPosition+diff);}else{positionDrag(_animateToPosition);ceaseAnimation();}}
var ceaseAnimation=function()
{if(_animateToInterval){clearInterval(_animateToInterval);delete _animateToPosition;}};var scrollTo=function(pos,preventAni)
{if(typeof pos=="string"){jQuerye=jQuery(pos,jQuerythis);if(!jQuerye.length)return;pos=jQuerye.offset().top-jQuerythis.offset().top;}
jQuerycontainer.scrollTop(0);ceaseAnimation();var destDragPosition=-pos/(paneHeight-contentHeight)*maxY;if(preventAni||!settings.animateTo){positionDrag(destDragPosition);}else{_animateToPosition=destDragPosition;_animateToInterval=setInterval(animateToPosition,settings.animateInterval);}};jQuerythis[0].scrollTo=scrollTo;jQuerythis[0].scrollBy=function(delta)
{var currentPos=-parseInt(jQuerypane.css('top'))||0;scrollTo(currentPos+delta);};initDrag();scrollTo(-currentScrollPosition,true);jQuery('*',this).bind('focus',function(event)
{var jQuerye=jQuery(this);var eleTop=0;while(jQuerye[0]!=jQuerythis[0]){eleTop+=jQuerye.position().top;jQuerye=jQuerye.offsetParent();}
var viewportTop=-parseInt(jQuerypane.css('top'))||0;var maxVisibleEleTop=viewportTop+paneHeight;var eleInView=eleTop>viewportTop&&eleTop<maxVisibleEleTop;if(!eleInView){var destPos=eleTop-settings.scrollbarMargin;if(eleTop>viewportTop){destPos+=jQuery(this).height()+15+settings.scrollbarMargin-paneHeight;}
scrollTo(destPos);}})
if(location.hash){scrollTo(location.hash);}
jQuery(document).bind('click',function(e)
{jQuerytarget=jQuery(e.target);if(jQuerytarget.is('a')){var h=jQuerytarget.attr('href');if(h.substr(0,1)=='#'){scrollTo(h);}}});jQuery.jScrollPaneCusel.active.push(jQuerythis[0]);}else{jQuerythis.css({'height':paneHeight+'px','width':paneWidth-this.originalSidePaddingTotal+'px','padding':this.originalPadding});jQuerythis.parent().unbind('mousewheel');}})};jQuery.fn.jScrollPaneRemoveCusel=function()
{jQuery(this).each(function()
{jQuerythis=jQuery(this);var jQueryc=jQuerythis.parent();if(jQueryc.is('.jScrollPaneContainer')){jQuerythis.css({'top':'','height':'','width':'','padding':'','overflow':'','position':''});jQuerythis.attr('style',jQuerythis.data('originalStyleTag'));jQueryc.after(jQuerythis).remove();}});}
jQuery.fn.jScrollPaneCusel.defaults={scrollbarWidth:10,scrollbarMargin:5,wheelSpeed:18,showArrows:false,arrowSize:0,animateTo:false,dragMinHeight:1,dragMaxHeight:99999,animateInterval:100,animateStep:3,maintainPosition:true,scrollbarOnLeft:false,reinitialiseOnImageLoad:false};jQuery(window).bind('unload',function(){var els=jQuery.jScrollPaneCusel.active;for(var i=0;i<els.length;i++){els[i].scrollTo=els[i].scrollBy=null;}});})(jQuery);(function(jQuery){jQuery.event.special.mousewheel={setup:function(){var handler=jQuery.event.special.mousewheel.handler;if(jQuery.browser.mozilla)
jQuery(this).bind('mousemove.mousewheel',function(event){jQuery.data(this,'mwcursorposdata',{pageX:event.pageX,pageY:event.pageY,clientX:event.clientX,clientY:event.clientY});});if(this.addEventListener)
this.addEventListener((jQuery.browser.mozilla?'DOMMouseScroll':'mousewheel'),handler,false);else
this.onmousewheel=handler;},teardown:function(){var handler=jQuery.event.special.mousewheel.handler;jQuery(this).unbind('mousemove.mousewheel');if(this.removeEventListener)
this.removeEventListener((jQuery.browser.mozilla?'DOMMouseScroll':'mousewheel'),handler,false);else
this.onmousewheel=function(){};jQuery.removeData(this,'mwcursorposdata');},handler:function(event){var args=Array.prototype.slice.call(arguments,1);event=jQuery.event.fix(event||window.event);jQuery.extend(event,jQuery.data(this,'mwcursorposdata')||{});var delta=0,returnValue=true;if(event.wheelDelta)delta=event.wheelDelta/120;if(event.detail)delta=-event.detail/3;event.data=event.data||{};event.type="mousewheel";args.unshift(delta);args.unshift(event);return jQuery.event.handle.apply(this,args);}};jQuery.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel");},unmousewheel:function(fn){return this.unbind("mousewheel",fn);}});})(jQuery);