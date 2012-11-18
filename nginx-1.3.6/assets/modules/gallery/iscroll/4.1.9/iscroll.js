define("gallery/iscroll/4.1.9/iscroll",[],function(a,b,c){(function(){var a=Math,c=function(a){return a>>0},d=/webkit/i.test(navigator.appVersion)?"webkit":/firefox/i.test(navigator.userAgent)?"Moz":/trident/i.test(navigator.userAgent)?"ms":"opera"in window?"O":"",e=/android/gi.test(navigator.appVersion),f=/iphone|ipad/gi.test(navigator.appVersion),g=/playbook/gi.test(navigator.appVersion),h=/hp-tablet/gi.test(navigator.appVersion),i="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,j="ontouchstart"in window&&!h,k=d+"Transform"in document.documentElement.style,l=f||g,m=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){return setTimeout(a,1)}}(),n=function(){return window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),o="onorientationchange"in window?"orientationchange":"resize",p=j?"touchstart":"mousedown",q=j?"touchmove":"mousemove",r=j?"touchend":"mouseup",s=j?"touchcancel":"mouseup",t=d=="Moz"?"DOMMouseScroll":"mousewheel",u="translate"+(i?"3d(":"("),v=i?",0)":")",w=function(a,b){var c=this,g=document,h;c.wrapper=typeof a=="object"?a:g.getElementById(a),c.wrapper.style.overflow="hidden",c.scroller=c.wrapper.children[0],c.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:e,hideScrollbar:f,fadeScrollbar:f&&i,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(a){a.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(h in b)c.options[h]=b[h];c.x=c.options.x,c.y=c.options.y,c.options.useTransform=k?c.options.useTransform:!1,c.options.hScrollbar=c.options.hScroll&&c.options.hScrollbar,c.options.vScrollbar=c.options.vScroll&&c.options.vScrollbar,c.options.zoom=c.options.useTransform&&c.options.zoom,c.options.useTransition=l&&c.options.useTransition,c.options.zoom&&e&&(u="translate(",v=")"),c.scroller.style[d+"TransitionProperty"]=c.options.useTransform?"-"+d.toLowerCase()+"-transform":"top left",c.scroller.style[d+"TransitionDuration"]="0",c.scroller.style[d+"TransformOrigin"]="0 0",c.options.useTransition&&(c.scroller.style[d+"TransitionTimingFunction"]="cubic-bezier(0.33,0.66,0.66,1)"),c.options.useTransform?c.scroller.style[d+"Transform"]=u+c.x+"px,"+c.y+"px"+v:c.scroller.style.cssText+=";position:absolute;top:"+c.y+"px;left:"+c.x+"px",c.options.useTransition&&(c.options.fixedScrollbar=!0),c.refresh(),c._bind(o,window),c._bind(p),j||(c._bind("mouseout",c.wrapper),c.options.wheelAction!="none"&&c._bind(t)),c.options.checkDOMChanges&&(c.checkDOMTime=setInterval(function(){c._checkDOMChanges()},500))};w.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(a){var b=this;switch(a.type){case p:if(!j&&a.button!==0)return;b._start(a);break;case q:b._move(a);break;case r:case s:b._end(a);break;case o:b._resize();break;case t:b._wheel(a);break;case"mouseout":b._mouseout(a);break;case"webkitTransitionEnd":b._transitionEnd(a)}},_checkDOMChanges:function(){if(this.moved||this.zoomed||this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale)return;this.refresh()},_scrollbar:function(b){var e=this,f=document,g;if(!e[b+"Scrollbar"]){e[b+"ScrollbarWrapper"]&&(k&&(e[b+"ScrollbarIndicator"].style[d+"Transform"]=""),e[b+"ScrollbarWrapper"].parentNode.removeChild(e[b+"ScrollbarWrapper"]),e[b+"ScrollbarWrapper"]=null,e[b+"ScrollbarIndicator"]=null);return}e[b+"ScrollbarWrapper"]||(g=f.createElement("div"),e.options.scrollbarClass?g.className=e.options.scrollbarClass+b.toUpperCase():g.style.cssText="position:absolute;z-index:100;"+(b=="h"?"height:7px;bottom:1px;left:2px;right:"+(e.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(e.hScrollbar?"7":"2")+"px;top:2px;right:1px"),g.style.cssText+=";pointer-events:none;-"+d+"-transition-property:opacity;-"+d+"-transition-duration:"+(e.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(e.options.hideScrollbar?"0":"1"),e.wrapper.appendChild(g),e[b+"ScrollbarWrapper"]=g,g=f.createElement("div"),e.options.scrollbarClass||(g.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-"+d+"-background-clip:padding-box;-"+d+"-box-sizing:border-box;"+(b=="h"?"height:100%":"width:100%")+";-"+d+"-border-radius:3px;border-radius:3px"),g.style.cssText+=";pointer-events:none;-"+d+"-transition-property:-"+d+"-transform;-"+d+"-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-"+d+"-transition-duration:0;-"+d+"-transform:"+u+"0,0"+v,e.options.useTransition&&(g.style.cssText+=";-"+d+"-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),e[b+"ScrollbarWrapper"].appendChild(g),e[b+"ScrollbarIndicator"]=g),b=="h"?(e.hScrollbarSize=e.hScrollbarWrapper.clientWidth,e.hScrollbarIndicatorSize=a.max(c(e.hScrollbarSize*e.hScrollbarSize/e.scrollerW),8),e.hScrollbarIndicator.style.width=e.hScrollbarIndicatorSize+"px",e.hScrollbarMaxScroll=e.hScrollbarSize-e.hScrollbarIndicatorSize,e.hScrollbarProp=e.hScrollbarMaxScroll/e.maxScrollX):(e.vScrollbarSize=e.vScrollbarWrapper.clientHeight,e.vScrollbarIndicatorSize=a.max(c(e.vScrollbarSize*e.vScrollbarSize/e.scrollerH),8),e.vScrollbarIndicator.style.height=e.vScrollbarIndicatorSize+"px",e.vScrollbarMaxScroll=e.vScrollbarSize-e.vScrollbarIndicatorSize,e.vScrollbarProp=e.vScrollbarMaxScroll/e.maxScrollY),e._scrollbarPos(b,!0)},_resize:function(){var a=this;setTimeout(function(){a.refresh()},e?200:0)},_pos:function(a,b){a=this.hScroll?a:0,b=this.vScroll?b:0,this.options.useTransform?this.scroller.style[d+"Transform"]=u+a+"px,"+b+"px"+v+" scale("+this.scale+")":(a=c(a),b=c(b),this.scroller.style.left=a+"px",this.scroller.style.top=b+"px"),this.x=a,this.y=b,this._scrollbarPos("h"),this._scrollbarPos("v")},_scrollbarPos:function(a,b){var e=this,f=a=="h"?e.x:e.y,g;if(!e[a+"Scrollbar"])return;f=e[a+"ScrollbarProp"]*f,f<0?(e.options.fixedScrollbar||(g=e[a+"ScrollbarIndicatorSize"]+c(f*3),g<8&&(g=8),e[a+"ScrollbarIndicator"].style[a=="h"?"width":"height"]=g+"px"),f=0):f>e[a+"ScrollbarMaxScroll"]&&(e.options.fixedScrollbar?f=e[a+"ScrollbarMaxScroll"]:(g=e[a+"ScrollbarIndicatorSize"]-c((f-e[a+"ScrollbarMaxScroll"])*3),g<8&&(g=8),e[a+"ScrollbarIndicator"].style[a=="h"?"width":"height"]=g+"px",f=e[a+"ScrollbarMaxScroll"]+(e[a+"ScrollbarIndicatorSize"]-g))),e[a+"ScrollbarWrapper"].style[d+"TransitionDelay"]="0",e[a+"ScrollbarWrapper"].style.opacity=b&&e.options.hideScrollbar?"0":"1",e[a+"ScrollbarIndicator"].style[d+"Transform"]=u+(a=="h"?f+"px,0":"0,"+f+"px")+v},_start:function(b){var c=this,e=j?b.touches[0]:b,f,g,h,i,k;if(!c.enabled)return;c.options.onBeforeScrollStart&&c.options.onBeforeScrollStart.call(c,b),(c.options.useTransition||c.options.zoom)&&c._transitionTime(0),c.moved=!1,c.animating=!1,c.zoomed=!1,c.distX=0,c.distY=0,c.absDistX=0,c.absDistY=0,c.dirX=0,c.dirY=0,c.options.zoom&&j&&b.touches.length>1&&(i=a.abs(b.touches[0].pageX-b.touches[1].pageX),k=a.abs(b.touches[0].pageY-b.touches[1].pageY),c.touchesDistStart=a.sqrt(i*i+k*k),c.originX=a.abs(b.touches[0].pageX+b.touches[1].pageX-c.wrapperOffsetLeft*2)/2-c.x,c.originY=a.abs(b.touches[0].pageY+b.touches[1].pageY-c.wrapperOffsetTop*2)/2-c.y,c.options.onZoomStart&&c.options.onZoomStart.call(c,b));if(c.options.momentum){c.options.useTransform?(f=getComputedStyle(c.scroller,null)[d+"Transform"].replace(/[^0-9-.,]/g,"").split(","),g=f[4]*1,h=f[5]*1):(g=getComputedStyle(c.scroller,null).left.replace(/[^0-9-]/g,"")*1,h=getComputedStyle(c.scroller,null).top.replace(/[^0-9-]/g,"")*1);if(g!=c.x||h!=c.y)c.options.useTransition?c._unbind("webkitTransitionEnd"):n(c.aniTime),c.steps=[],c._pos(g,h)}c.absStartX=c.x,c.absStartY=c.y,c.startX=c.x,c.startY=c.y,c.pointX=e.pageX,c.pointY=e.pageY,c.startTime=b.timeStamp||Date.now(),c.options.onScrollStart&&c.options.onScrollStart.call(c,b),c._bind(q),c._bind(r),c._bind(s)},_move:function(b){var c=this,e=j?b.touches[0]:b,f=e.pageX-c.pointX,g=e.pageY-c.pointY,h=c.x+f,i=c.y+g,k,l,m,n=b.timeStamp||Date.now();c.options.onBeforeScrollMove&&c.options.onBeforeScrollMove.call(c,b);if(c.options.zoom&&j&&b.touches.length>1){k=a.abs(b.touches[0].pageX-b.touches[1].pageX),l=a.abs(b.touches[0].pageY-b.touches[1].pageY),c.touchesDist=a.sqrt(k*k+l*l),c.zoomed=!0,m=1/c.touchesDistStart*c.touchesDist*this.scale,m<c.options.zoomMin?m=.5*c.options.zoomMin*Math.pow(2,m/c.options.zoomMin):m>c.options.zoomMax&&(m=2*c.options.zoomMax*Math.pow(.5,c.options.zoomMax/m)),c.lastScale=m/this.scale,h=this.originX-this.originX*c.lastScale+this.x,i=this.originY-this.originY*c.lastScale+this.y,this.scroller.style[d+"Transform"]=u+h+"px,"+i+"px"+v+" scale("+m+")",c.options.onZoom&&c.options.onZoom.call(c,b);return}c.pointX=e.pageX,c.pointY=e.pageY;if(h>0||h<c.maxScrollX)h=c.options.bounce?c.x+f/2:h>=0||c.maxScrollX>=0?0:c.maxScrollX;if(i>c.minScrollY||i<c.maxScrollY)i=c.options.bounce?c.y+g/2:i>=c.minScrollY||c.maxScrollY>=0?c.minScrollY:c.maxScrollY;c.distX+=f,c.distY+=g,c.absDistX=a.abs(c.distX),c.absDistY=a.abs(c.distY);if(c.absDistX<6&&c.absDistY<6)return;c.options.lockDirection&&(c.absDistX>c.absDistY+5?(i=c.y,g=0):c.absDistY>c.absDistX+5&&(h=c.x,f=0)),c.moved=!0,c._pos(h,i),c.dirX=f>0?-1:f<0?1:0,c.dirY=g>0?-1:g<0?1:0,n-c.startTime>300&&(c.startTime=n,c.startX=c.x,c.startY=c.y),c.options.onScrollMove&&c.options.onScrollMove.call(c,b)},_end:function(b){if(j&&b.touches.length!=0)return;var e=this,f=j?b.changedTouches[0]:b,g,h,i={dist:0,time:0},k={dist:0,time:0},l=(b.timeStamp||Date.now())-e.startTime,m=e.x,n=e.y,o,p,t,w,x;e._unbind(q),e._unbind(r),e._unbind(s),e.options.onBeforeScrollEnd&&e.options.onBeforeScrollEnd.call(e,b);if(e.zoomed){x=e.scale*e.lastScale,x=Math.max(e.options.zoomMin,x),x=Math.min(e.options.zoomMax,x),e.lastScale=x/e.scale,e.scale=x,e.x=e.originX-e.originX*e.lastScale+e.x,e.y=e.originY-e.originY*e.lastScale+e.y,e.scroller.style[d+"TransitionDuration"]="200ms",e.scroller.style[d+"Transform"]=u+e.x+"px,"+e.y+"px"+v+" scale("+e.scale+")",e.zoomed=!1,e.refresh(),e.options.onZoomEnd&&e.options.onZoomEnd.call(e,b);return}if(!e.moved){j&&(e.doubleTapTimer&&e.options.zoom?(clearTimeout(e.doubleTapTimer),e.doubleTapTimer=null,e.options.onZoomStart&&e.options.onZoomStart.call(e,b),e.zoom(e.pointX,e.pointY,e.scale==1?e.options.doubleTapZoom:1),e.options.onZoomEnd&&setTimeout(function(){e.options.onZoomEnd.call(e,b)},200)):e.doubleTapTimer=setTimeout(function(){e.doubleTapTimer=null,g=f.target;while(g.nodeType!=1)g=g.parentNode;g.tagName!="SELECT"&&g.tagName!="INPUT"&&g.tagName!="TEXTAREA"&&(h=document.createEvent("MouseEvents"),h.initMouseEvent("click",!0,!0,b.view,1,f.screenX,f.screenY,f.clientX,f.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,0,null),h._fake=!0,g.dispatchEvent(h))},e.options.zoom?250:0)),e._resetPos(200),e.options.onTouchEnd&&e.options.onTouchEnd.call(e,b);return}if(l<300&&e.options.momentum){i=m?e._momentum(m-e.startX,l,-e.x,e.scrollerW-e.wrapperW+e.x,e.options.bounce?e.wrapperW:0):i,k=n?e._momentum(n-e.startY,l,-e.y,e.maxScrollY<0?e.scrollerH-e.wrapperH+e.y-e.minScrollY:0,e.options.bounce?e.wrapperH:0):k,m=e.x+i.dist,n=e.y+k.dist;if(e.x>0&&m>0||e.x<e.maxScrollX&&m<e.maxScrollX)i={dist:0,time:0};if(e.y>e.minScrollY&&n>e.minScrollY||e.y<e.maxScrollY&&n<e.maxScrollY)k={dist:0,time:0}}if(i.dist||k.dist){t=a.max(a.max(i.time,k.time),10),e.options.snap&&(o=m-e.absStartX,p=n-e.absStartY,a.abs(o)<e.options.snapThreshold&&a.abs(p)<e.options.snapThreshold?e.scrollTo(e.absStartX,e.absStartY,200):(w=e._snap(m,n),m=w.x,n=w.y,t=a.max(w.time,t))),e.scrollTo(c(m),c(n),t),e.options.onTouchEnd&&e.options.onTouchEnd.call(e,b);return}if(e.options.snap){o=m-e.absStartX,p=n-e.absStartY,a.abs(o)<e.options.snapThreshold&&a.abs(p)<e.options.snapThreshold?e.scrollTo(e.absStartX,e.absStartY,200):(w=e._snap(e.x,e.y),(w.x!=e.x||w.y!=e.y)&&e.scrollTo(w.x,w.y,w.time)),e.options.onTouchEnd&&e.options.onTouchEnd.call(e,b);return}e._resetPos(200),e.options.onTouchEnd&&e.options.onTouchEnd.call(e,b)},_resetPos:function(a){var b=this,c=b.x>=0?0:b.x<b.maxScrollX?b.maxScrollX:b.x,e=b.y>=b.minScrollY||b.maxScrollY>0?b.minScrollY:b.y<b.maxScrollY?b.maxScrollY:b.y;if(c==b.x&&e==b.y){b.moved&&(b.moved=!1,b.options.onScrollEnd&&b.options.onScrollEnd.call(b)),b.hScrollbar&&b.options.hideScrollbar&&(d=="webkit"&&(b.hScrollbarWrapper.style[d+"TransitionDelay"]="300ms"),b.hScrollbarWrapper.style.opacity="0"),b.vScrollbar&&b.options.hideScrollbar&&(d=="webkit"&&(b.vScrollbarWrapper.style[d+"TransitionDelay"]="300ms"),b.vScrollbarWrapper.style.opacity="0");return}b.scrollTo(c,e,a||0)},_wheel:function(a){var b=this,c,d,e,f,g;if("wheelDeltaX"in a)c=a.wheelDeltaX/12,d=a.wheelDeltaY/12;else if("wheelDelta"in a)c=d=a.wheelDelta/12;else{if(!("detail"in a))return;c=d=-a.detail*3}if(b.options.wheelAction=="zoom"){g=b.scale*Math.pow(2,1/3*(d?d/Math.abs(d):0)),g<b.options.zoomMin&&(g=b.options.zoomMin),g>b.options.zoomMax&&(g=b.options.zoomMax),g!=b.scale&&(!b.wheelZoomCount&&b.options.onZoomStart&&b.options.onZoomStart.call(b,a),b.wheelZoomCount++,b.zoom(a.pageX,a.pageY,g,400),setTimeout(function(){b.wheelZoomCount--,!b.wheelZoomCount&&b.options.onZoomEnd&&b.options.onZoomEnd.call(b,a)},400));return}e=b.x+c,f=b.y+d,e>0?e=0:e<b.maxScrollX&&(e=b.maxScrollX),f>b.minScrollY?f=b.minScrollY:f<b.maxScrollY&&(f=b.maxScrollY),b.scrollTo(e,f,0)},_mouseout:function(a){var b=a.relatedTarget;if(!b){this._end(a);return}while(b=b.parentNode)if(b==this.wrapper)return;this._end(a)},_transitionEnd:function(a){var b=this;if(a.target!=b.scroller)return;b._unbind("webkitTransitionEnd"),b._startAni()},_startAni:function(){var b=this,c=b.x,d=b.y,e=Date.now(),f,g,h;if(b.animating)return;if(!b.steps.length){b._resetPos(400);return}f=b.steps.shift(),f.x==c&&f.y==d&&(f.time=0),b.animating=!0,b.moved=!0;if(b.options.useTransition){b._transitionTime(f.time),b._pos(f.x,f.y),b.animating=!1,f.time?b._bind("webkitTransitionEnd"):b._resetPos(0);return}h=function(){var i=Date.now(),j,k;if(i>=e+f.time){b._pos(f.x,f.y),b.animating=!1,b.options.onAnimationEnd&&b.options.onAnimationEnd.call(b),b._startAni();return}i=(i-e)/f.time-1,g=a.sqrt(1-i*i),j=(f.x-c)*g+c,k=(f.y-d)*g+d,b._pos(j,k),b.animating&&(b.aniTime=m(h))},h()},_transitionTime:function(a){a+="ms",this.scroller.style[d+"TransitionDuration"]=a,this.hScrollbar&&(this.hScrollbarIndicator.style[d+"TransitionDuration"]=a),this.vScrollbar&&(this.vScrollbarIndicator.style[d+"TransitionDuration"]=a)},_momentum:function(b,d,e,f,g){var h=6e-4,i=a.abs(b)/d,j=i*i/(2*h),k=0,l=0;return b>0&&j>e?(l=g/(6/(j/i*h)),e+=l,i=i*e/j,j=e):b<0&&j>f&&(l=g/(6/(j/i*h)),f+=l,i=i*f/j,j=f),j*=b<0?-1:1,k=i/h,{dist:j,time:c(k)}},_offset:function(a){var b=-a.offsetLeft,c=-a.offsetTop;while(a=a.offsetParent)b-=a.offsetLeft,c-=a.offsetTop;return a!=this.wrapper&&(b*=this.scale,c*=this.scale),{left:b,top:c}},_snap:function(b,d){var e=this,f,g,h,i,j,k;h=e.pagesX.length-1;for(f=0,g=e.pagesX.length;f<g;f++)if(b>=e.pagesX[f]){h=f;break}h==e.currPageX&&h>0&&e.dirX<0&&h--,b=e.pagesX[h],j=a.abs(b-e.pagesX[e.currPageX]),j=j?a.abs(e.x-b)/j*500:0,e.currPageX=h,h=e.pagesY.length-1;for(f=0;f<h;f++)if(d>=e.pagesY[f]){h=f;break}return h==e.currPageY&&h>0&&e.dirY<0&&h--,d=e.pagesY[h],k=a.abs(d-e.pagesY[e.currPageY]),k=k?a.abs(e.y-d)/k*500:0,e.currPageY=h,i=c(a.max(j,k))||200,{x:b,y:d,time:i}},_bind:function(a,b,c){(b||this.scroller).addEventListener(a,this,!!c)},_unbind:function(a,b,c){(b||this.scroller).removeEventListener(a,this,!!c)},destroy:function(){var a=this;a.scroller.style[d+"Transform"]="",a.hScrollbar=!1,a.vScrollbar=!1,a._scrollbar("h"),a._scrollbar("v"),a._unbind(o,window),a._unbind(p),a._unbind(q),a._unbind(r),a._unbind(s),a.options.hasTouch||(a._unbind("mouseout",a.wrapper),a._unbind(t)),a.options.useTransition&&a._unbind("webkitTransitionEnd"),a.options.checkDOMChanges&&clearInterval(a.checkDOMTime),a.options.onDestroy&&a.options.onDestroy.call(a)},refresh:function(){var a=this,b,e,f,g,h=0,i=0;a.scale<a.options.zoomMin&&(a.scale=a.options.zoomMin),a.wrapperW=a.wrapper.clientWidth||1,a.wrapperH=a.wrapper.clientHeight||1,a.minScrollY=-a.options.topOffset||0,a.scrollerW=c(a.scroller.offsetWidth*a.scale),a.scrollerH=c((a.scroller.offsetHeight+a.minScrollY)*a.scale),a.maxScrollX=a.wrapperW-a.scrollerW,a.maxScrollY=a.wrapperH-a.scrollerH+a.minScrollY,a.dirX=0,a.dirY=0,a.options.onRefresh&&a.options.onRefresh.call(a),a.hScroll=a.options.hScroll&&a.maxScrollX<0,a.vScroll=a.options.vScroll&&(!a.options.bounceLock&&!a.hScroll||a.scrollerH>a.wrapperH),a.hScrollbar=a.hScroll&&a.options.hScrollbar,a.vScrollbar=a.vScroll&&a.options.vScrollbar&&a.scrollerH>a.wrapperH,b=a._offset(a.wrapper),a.wrapperOffsetLeft=-b.left,a.wrapperOffsetTop=-b.top;if(typeof a.options.snap=="string"){a.pagesX=[],a.pagesY=[],g=a.scroller.querySelectorAll(a.options.snap);for(e=0,f=g.length;e<f;e++)h=a._offset(g[e]),h.left+=a.wrapperOffsetLeft,h.top+=a.wrapperOffsetTop,a.pagesX[e]=h.left<a.maxScrollX?a.maxScrollX:h.left*a.scale,a.pagesY[e]=h.top<a.maxScrollY?a.maxScrollY:h.top*a.scale}else if(a.options.snap){a.pagesX=[];while(h>=a.maxScrollX)a.pagesX[i]=h,h-=a.wrapperW,i++;a.maxScrollX%a.wrapperW&&(a.pagesX[a.pagesX.length]=a.maxScrollX-a.pagesX[a.pagesX.length-1]+a.pagesX[a.pagesX.length-1]),h=0,i=0,a.pagesY=[];while(h>=a.maxScrollY)a.pagesY[i]=h,h-=a.wrapperH,i++;a.maxScrollY%a.wrapperH&&(a.pagesY[a.pagesY.length]=a.maxScrollY-a.pagesY[a.pagesY.length-1]+a.pagesY[a.pagesY.length-1])}a._scrollbar("h"),a._scrollbar("v"),a.zoomed||(a.scroller.style[d+"TransitionDuration"]="0",a._resetPos(200))},scrollTo:function(a,b,c,d){var e=this,f=a,g,h;e.stop(),f.length||(f=[{x:a,y:b,time:c,relative:d}]);for(g=0,h=f.length;g<h;g++)f[g].relative&&(f[g].x=e.x-f[g].x,f[g].y=e.y-f[g].y),e.steps.push({x:f[g].x,y:f[g].y,time:f[g].time||0});e._startAni()},scrollToElement:function(b,c){var d=this,e;b=b.nodeType?b:d.scroller.querySelector(b);if(!b)return;e=d._offset(b),e.left+=d.wrapperOffsetLeft,e.top+=d.wrapperOffsetTop,e.left=e.left>0?0:e.left<d.maxScrollX?d.maxScrollX:e.left,e.top=e.top>d.minScrollY?d.minScrollY:e.top<d.maxScrollY?d.maxScrollY:e.top,c=c===undefined?a.max(a.abs(e.left)*2,a.abs(e.top)*2):c,d.scrollTo(e.left,e.top,c)},scrollToPage:function(a,b,c){var d=this,e,f;c=c===undefined?400:c,d.options.onScrollStart&&d.options.onScrollStart.call(d),d.options.snap?(a=a=="next"?d.currPageX+1:a=="prev"?d.currPageX-1:a,b=b=="next"?d.currPageY+1:b=="prev"?d.currPageY-1:b,a=a<0?0:a>d.pagesX.length-1?d.pagesX.length-1:a,b=b<0?0:b>d.pagesY.length-1?d.pagesY.length-1:b,d.currPageX=a,d.currPageY=b,e=d.pagesX[a],f=d.pagesY[b]):(e=-d.wrapperW*a,f=-d.wrapperH*b,e<d.maxScrollX&&(e=d.maxScrollX),f<d.maxScrollY&&(f=d.maxScrollY)),d.scrollTo(e,f,c)},disable:function(){this.stop(),this._resetPos(0),this.enabled=!1,this._unbind(q),this._unbind(r),this._unbind(s)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind("webkitTransitionEnd"):n(this.aniTime),this.steps=[],this.moved=!1,this.animating=!1},zoom:function(a,b,c,e){var f=this,g=c/f.scale;if(!f.options.useTransform)return;f.zoomed=!0,e=e===undefined?200:e,a=a-f.wrapperOffsetLeft-f.x,b=b-f.wrapperOffsetTop-f.y,f.x=a-a*g+f.x,f.y=b-b*g+f.y,f.scale=c,f.refresh(),f.x=f.x>0?0:f.x<f.maxScrollX?f.maxScrollX:f.x,f.y=f.y>f.minScrollY?f.minScrollY:f.y<f.maxScrollY?f.maxScrollY:f.y,f.scroller.style[d+"TransitionDuration"]=e+"ms",f.scroller.style[d+"Transform"]=u+f.x+"px,"+f.y+"px"+v+" scale("+c+")",f.zoomed=!1},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}},typeof b!="undefined"?b.iScroll=w:window.iScroll=w})(),c.exports=b.iScroll});