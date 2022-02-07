/*! For license information please see e50e9c162871c1d91fba5ce567a5656e16dc6783-aa929716ce4522d299db.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/eHF":function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function r(e,t){var n=t.distance,i=t.left,r=t.right,o=t.up,a=t.down,s=t.top,u=t.bottom,c=t.big,d=t.mirror,p=t.opposite,h=(n?n.toString():0)+((i?1:0)|(r?2:0)|(s||a?4:0)|(u||o?8:0)|(d?16:0)|(p?32:0)|(e?64:0)|(c?128:0));if(f.hasOwnProperty(h))return f[h];var m=i||r||o||a||s||u,v=void 0,y=void 0;if(m){if(!d!=!(e&&p)){var b=[r,i,u,s,a,o];i=b[0],r=b[1],s=b[2],u=b[3],o=b[4],a=b[5]}var w=n||(c?"2000px":"100%");v=i?"-"+w:r?w:"0",y=a||s?"-"+w:o||u?w:"0"}return f[h]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(m?" transform: translate3d("+v+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),f[h]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,o=(e.out,e.forever),a=e.timeout,s=e.duration,u=void 0===s?l.defaults.duration:s,d=e.delay,f=void 0===d?l.defaults.delay:d,p=e.count,h=void 0===p?l.defaults.count:p,m=i(e,["children","out","forever","timeout","duration","delay","count"]),v={make:r,duration:void 0===a?u:a,delay:f,forever:o,count:h,style:{animationFillMode:"both"},reverse:m.left};return t?(0,c.default)(m,v,v,n):v}Object.defineProperty(t,"__esModule",{value:!0});var a,s=n("17x9"),l=n("ar19"),u=n("eH+L"),c=(a=u)&&a.__esModule?a:{default:a},d={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},f={};o.propTypes=d,t.default=o,e.exports=t.default},"28nh":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n("q1tI"),u=(i=l)&&i.__esModule?i:{default:i},c=n("17x9"),d=n("ar19"),f=(0,c.shape)({make:c.func,duration:c.number.isRequired,delay:c.number.isRequired,forever:c.bool,count:c.number.isRequired,style:c.object.isRequired,reverse:c.bool}),p={collapse:c.bool,collapseEl:c.element,cascade:c.bool,wait:c.number,force:c.bool,disabled:c.bool,appear:c.bool,enter:c.bool,exit:c.bool,fraction:c.number,refProp:c.string,innerRef:c.func,onReveal:c.func,unmountOnExit:c.bool,mountOnEnter:c.bool,inEffect:f.isRequired,outEffect:(0,c.oneOfType)([f,(0,c.oneOf)([!1])]).isRequired,ssrReveal:c.bool,collapseOnly:c.bool,ssrFadeout:c.bool},h={transitionGroup:c.object},m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,d.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?a({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!d.observerMode&&this.props.collapse&&window.document.dispatchEvent(d.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,r=n.forever,o=n.count,a=n.delay,s=n.duration;if(!r){this.animationEndTimeout=window.setTimeout((function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))}),a+(s+(t?s:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),r=this.isOn?this.getDimensionValue():0,o=void 0,a=void 0;if(t.collapseOnly)o=n.duration/3,a=n.delay;else{var s=i>>2,l=s>>1;o=s,a=n.delay+(this.isOn?0:i-s-l),e.style.animationDuration=i-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:r,transition:"height "+o+"ms ease "+a+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,r=void 0;e.collapseOnly?r={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),r={hasAppeared:!0,hasExited:!1,collapse:void 0,style:a({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(r,e,n):r),t?(this.savedChild=u.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),d.ssr&&(0,d.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&d.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];d.globalHide||(0,d.hideAll)(),this&&this.el&&(e||(e=this.props),d.ssr&&(0,d.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):d.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||d.ssr&&!d.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):d.ssr&&(d.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return u.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):u.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=i.duration,s=i.reverse,l=n.length,c=2*o;this.props.collapse&&(c=parseInt(this.state.style.animationDuration,10),o=c/2);var f=s?l:0;return n.map((function(e){return"object"===(void 0===e?"undefined":r(e))&&e?u.default.cloneElement(e,{style:a({},e.props.style,t.state.style,{animationDuration:Math.round((0,d.cascade)(s?f--:f++,0,l,o,c))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===r(this.props.children)){var e=u.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:u.default.createElement("div",null,e)}return u.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,r=i.style,o=i.className,s=i.children,l=this.props.disabled?o:(this.props.outEffect?d.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,c=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(n=this.cascade(s),c=a({},r,{opacity:1})):c=this.props.disabled?r:a({},r,this.state.style);var f=a({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:c},this.props.refProp,this.saveRef)),p=u.default.cloneElement(t,f,e?n||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?u.default.cloneElement(this.props.collapseEl,{style:a({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):u.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,d.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),r=Math.min(n,window.innerHeight)*(d.globalHide?e.fraction:0);return i>r-window.innerHeight&&i<n-r}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){d.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!d.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(u.default.Component);m.propTypes=p,m.defaultProps={fraction:.2,refProp:"ref"},m.contextTypes=h,m.displayName="RevealBase",t.default=m,e.exports=t.default},"7vrA":function(e,t,n){"use strict";var i=n("wx14"),r=n("zLVn"),o=n("TSYQ"),a=n.n(o),s=n("q1tI"),l=n.n(s),u=n("vUet"),c=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.fluid,s=e.as,c=void 0===s?"div":s,d=e.className,f=Object(r.a)(e,["bsPrefix","fluid","as","className"]),p=Object(u.a)(n,"container"),h="string"==typeof o?"-"+o:"-fluid";return l.a.createElement(c,Object(i.a)({ref:t},f,{className:a()(d,o?""+p+h:p)}))}));c.displayName="Container",c.defaultProps={fluid:!1},t.a=c},"8+s/":function(e,t,n){"use strict";var i,r=n("q1tI"),o=(i=r)&&"object"==typeof i&&"default"in i?i.default:i;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(i){if("function"!=typeof i)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function c(){l=e(u.map((function(e){return e.props}))),d.canUseDOM?t(l):n&&(l=n(l))}var d=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.peek=function(){return l},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=r.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),c()},a.componentDidUpdate=function(){c()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),c()},a.render=function(){return o.createElement(i,this.props)},r}(r.PureComponent);return a(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(i)+")"),a(d,"canUseDOM",s),d}}},J9yo:function(e,t,n){},TSYQ:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)&&i.length){var a=r.apply(null,i);a&&e.push(a)}else if("object"===o)for(var s in i)n.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},ar19:function(e,t,n){"use strict";function i(e){try{return h.insertRule(e,h.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function r(){c||(t.globalHide=c=!0,window.removeEventListener("scroll",r,!0),i("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",r,!0),window.document.removeEventListener("visibilitychange",r))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,n,i,r){var o=Math.log(i),a=(Math.log(r)-o)/(n-t);return Math.exp(o+a*(e-t))},t.animation=function(e){if(!h)return"";var t="@keyframes "+(m+f)+"{"+e+"}",n=p[e];return n?""+m+n:(h.insertRule(t,h.cssRules.length),p[e]=f,""+m+f++)},t.hideAll=r,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var o=t.namespace="react-reveal",a=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},u=t.disableSsr=function(){return t.ssr=a=!1},c=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),d=(t.ie10=!1,t.collapseend=void 0),f=1,p={},h=!1,m=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=a=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),a&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=a=!1),a&&window.setTimeout(u,1500),s||(t.collapseend=d=document.createEvent("Event"),d.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(h=v.sheet,window.addEventListener("scroll",r,!0),window.addEventListener("orientationchange",r,!0),window.document.addEventListener("visibilitychange",r))}},bmMU:function(e,t){var n="undefined"!=typeof Element,i="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var s,l,u,c;if(Array.isArray(t)){if((s=t.length)!=a.length)return!1;for(l=s;0!=l--;)if(!e(t[l],a[l]))return!1;return!0}if(i&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(c=t.entries();!(l=c.next()).done;)if(!a.has(l.value[0]))return!1;for(c=t.entries();!(l=c.next()).done;)if(!e(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(c=t.entries();!(l=c.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((s=t.length)!=a.length)return!1;for(l=s;0!=l--;)if(t[l]!==a[l])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((s=(u=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(n&&t instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!e(t[u[l]],a[u[l]]))return!1;return!0}return t!=t&&a!=a}(e,t)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}}},"eH+L":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),o.default.Children.count(i)<2?o.default.createElement(a.default,r({},e,{inEffect:t,outEffect:n,children:i})):(i=o.default.Children.map(i,(function(i){return o.default.createElement(a.default,r({},e,{inEffect:t,outEffect:n,children:i}))})),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,i):o.default.createElement("span",null,i))};var o=i(n("q1tI")),a=i(n("28nh"));e.exports=t.default},jooN:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"g",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return c}));var i=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var i=63&n[e];t+=i<36?i.toString(36):i<62?(i-26).toString(36).toUpperCase():i<63?"_":"-"}return t},r={title:"Aaron Mauro | Assistant Professor of Digital Media",lang:"en",description:"Humanist | Developer | Educator"},o={title:"Hi, my name is",name:"Aaron Mauro.",subtitle:"I'm a Digital Humanist.",cta:"About me"},a={img:"profile1.jpg",paragraphOne:"I'm Assistant Professor of Digital Media at Brock University in the Centre for Digital Humanities. I teach on topics relating to digital culture, natural language processing, and app development.",paragraphTwo:"I've published articles on U.S. literature and culture, which have appeared in Modern Fiction Studies, Mosaic, and Symploke among others. I have also published on issues relating to digital humanities in both Digital Studies and Digital Humanities Quarterly.",paragraphThree:"My forthcoming book is called Hacking in the Humanities: Cybersecurity, Speculative Fiction and Navigating a Digital Future (Bloomsbury Publishing).",resume:"https://www.aaronmauro.com/aaron_mauro_cv.pdf"},s=[{id:i(),img:"cover_hack.jpg",title:"Hacking in the Humanities: Cybersecurity, Speculative Fiction and Navigating a Digital Future",info:"This book looks to speculative fiction, cyberpunk and the digital humanities to bring a human — and humanistic — perspective to the issue of cybersecurity. It argues that through these stories we are able to predict the future political, cultural, and social realities emerging from technological change.",info2:"Making the case for a security-minded humanities education, this book examines pressing issues of data security, privacy, social engineering and more, illustrating how the humanities offer the critical, technical, and ethical insights needed to oppose the normalization of surveillance, disinformation, and coercion. In doing so, Hacking in the Humanities argues for a wider notion of literacy, which includes the ability to write and fight the computer code that shapes our lives.",url:"https://www.bloomsbury.com/us/hacking-in-the-humanities-9781350231009/",repo:""},{id:i(),img:"cover_skc.jpg",title:"Social Knowledge Creation in the Humanities",info:"In the humanities, the field of “social knowledge creation” has helped define how social media platforms and other collaborative spaces have shaped humanistic critique in the twenty-first century.",info2:"The essays collected in this volume represent a humanistic ethics of generosity, compassion, and care. Social knowledge creation refreshingly returns to humanist values in the age of social media, emphasizing that people matter more than networks, facts matter more than opinion, and ideas matter more than influence. As a result, the speed and scale of digital culture has challenged humanists from many disciplines to more clearly define the values of education, collaboration, and new knowledge in pursuit of human justice and equality. In short, online culture has presented a new opportunity to define how and why the humanities matter in the age of social media.",url:"https://press.uchicago.edu/ucp/books/book/distributed/S/bo99702245.html",repo:""},{id:i(),img:"robo_poetics_cover_2.png",title:"Robo Poetics",info:"This document is a collaborative project by the students of IASC 1F01 in the fall of 2020. This course is the introductory course for the Interactive Arts and Science undergraduate major in the Centre for Digital Humanities at Brock University. Our program is a multidisciplinary program that seeks to prepare the next generation of digital media innovators and scholars",info2:'This iteration of the course sought to explore issues related to artificial intelligence (AI). We read several short stories about AI and used the perspective granted by speculative fiction to think deeply about current trends.By the conclusion of the semester, students were able to use the TensorFlow machine learning library to train a Recursive Neural Network to generate "AI poetry" based on student selected training data.',url:"https://github.com/aaronmauro/robopoetics/raw/main/robopoetics.epub",repo:"https://github.com/aaronmauro/robopoetics/"}],l={cta:"Email is great!",btn:"Let's talk",email:"amauro@brocku.ca"},u={networks:[{id:i(),name:"twitter",url:"https://twitter.com/onthename"},{id:i(),name:"linkedin",url:"https://www.linkedin.com/in/aaron-mauro-5b62b529/"},{id:i(),name:"github",url:"https://github.com/aaronmauro"}]},c={isEnabled:!1}},q4sD:function(e,t,n){},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));var i,r,o,a,s=n("17x9"),l=n.n(s),u=n("8+s/"),c=n.n(u),d=n("bmMU"),f=n.n(d),p=n("q1tI"),h=n.n(p),m=n("YVoz"),v=n.n(m),y="bodyAttributes",b="htmlAttributes",w="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(e){return g[e]})),"charset"),O="cssText",E="href",S="http-equiv",k="innerHTML",A="itemprop",C="name",j="property",R="rel",x="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",H="encodeSpecialCharacters",_="onChangeClientState",N="titleTemplate",D=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),q=[g.NOSCRIPT,g.SCRIPT,g.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Y=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=X(e,g.TITLE),n=X(e,N);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var i=X(e,L);return t||i||void 0},J=function(e){return X(e,_)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var i=Object.keys(n),r=0;r<i.length;r++){var o=i[r].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},$=function(e,t,n){var i={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ie("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var s=o[a],l=s.toLowerCase();-1===t.indexOf(l)||n===R&&"canonical"===e[n].toLowerCase()||l===R&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==k&&s!==O&&s!==A||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return i[n]||(i[n]={}),r[n]||(r[n]={}),!i[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),a=0;a<o.length;a++){var s=o[a],l=v()({},i[s],r[s]);i[s]=l}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var i=e[n];if(i.hasOwnProperty(t))return i[t]}return null},Z=(i=Date.now(),function(e){var t=Date.now();t-i>16?(i=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ie=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,oe=function(e,t){var n=e.baseTag,i=e.bodyAttributes,r=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,c=e.styleTags,d=e.title,f=e.titleAttributes;le(g.BODY,i),le(g.HTML,r),se(d,f);var p={baseTag:ue(g.BASE,n),linkTags:ue(g.LINK,o),metaTags:ue(g.META,a),noscriptTags:ue(g.NOSCRIPT,s),scriptTags:ue(g.SCRIPT,u),styleTags:ue(g.STYLE,c)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,i=t.oldTags;n.length&&(h[e]=n),i.length&&(m[e]=p[e].oldTags)})),t&&t(),l(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(g.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var i=n.getAttribute("data-react-helmet"),r=i?i.split(","):[],o=[].concat(r),a=Object.keys(t),s=0;s<a.length;s++){var l=a[s],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===r.indexOf(l)&&r.push(l);var c=o.indexOf(l);-1!==c&&o.splice(c,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);r.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(g.HEAD),i=n.querySelectorAll(e+"[data-react-helmet]"),r=Array.prototype.slice.call(i),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var i in t)if(t.hasOwnProperty(i))if(i===k)n.innerHTML=t.innerHTML;else if(i===O)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[i]?"":t[i];n.setAttribute(i,s)}n.setAttribute("data-react-helmet","true"),r.some((function(e,t){return a=t,n.isEqualNode(e)}))?r.splice(a,1):o.push(n)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:r,newTags:o}},ce=function(e){return Object.keys(e).reduce((function(t,n){var i=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+i:i}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(i={key:e})["data-react-helmet"]=!0,r=de(n,i),[h.a.createElement(g.TITLE,r,e)];var e,n,i,r},toString:function(){return function(e,t,n,i){var r=ce(n),o=ae(t);return r?"<"+e+' data-react-helmet="true" '+r+">"+K(o,i)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,i)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return de(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var i,r=((i={key:n})["data-react-helmet"]=!0,i);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===k||n===O){var i=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:i}}else r[n]=t[e]})),h.a.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,i){var r=Object.keys(i).filter((function(e){return!(e===k||e===O)})).reduce((function(e,t){var r=void 0===i[t]?t:t+'="'+K(i[t],n)+'"';return e?e+" "+r:r}),""),o=i.innerHTML||i.cssText||"",a=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+r+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,i=e.encode,r=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,c=e.title,d=void 0===c?"":c,f=e.titleAttributes;return{base:fe(g.BASE,t,i),bodyAttributes:fe(y,n,i),htmlAttributes:fe(b,r,i),link:fe(g.LINK,o,i),meta:fe(g.META,a,i),noscript:fe(g.NOSCRIPT,s,i),script:fe(g.SCRIPT,l,i),style:fe(g.STYLE,u,i),title:fe(g.TITLE,{title:d,titleAttributes:f},i)}},he=c()((function(e){return{baseTag:G([E,P],e),bodyAttributes:Q(y,e),defer:X(e,M),encode:X(e,H),htmlAttributes:Q(b,e),linkTags:$(g.LINK,[R,E],e),metaTags:$(g.META,[C,T,S,j,A],e),noscriptTags:$(g.NOSCRIPT,[k],e),onChangeClientState:J(e),scriptTags:$(g.SCRIPT,[x,k],e),styleTags:$(g.STYLE,[O],e),title:W(e),titleAttributes:Q(w,e)}}),(function(e){re&&ne(re),e.defer?re=te((function(){oe(e,(function(){re=null}))})):(oe(e),re=null)}),pe)((function(){return null})),me=(r=he,a=o=function(e){function t(){return z(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,i=e.arrayTypeChildren,r=e.newChildProps,o=e.nestedChildren;return B({},i,((t={})[n.type]=[].concat(i[n.type]||[],[B({},r,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,i=e.child,r=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(i.type){case g.TITLE:return B({},r,((t={})[i.type]=a,t.titleAttributes=B({},o),t));case g.BODY:return B({},r,{bodyAttributes:B({},o)});case g.HTML:return B({},r,{htmlAttributes:B({},o)})}return B({},r,((n={})[i.type]=B({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var i;n=B({},n,((i={})[t]=e[t],i))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,i={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,o=r.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(Y(r,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:i=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:i,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(i,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),i=B({},n);return t&&(i=this.mapChildrenToProps(t,i)),h.a.createElement(r,i)},U(t,null,[{key:"canUseDOM",set:function(e){r.canUseDOM=e}}]),t}(h.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=r.peek,o.rewind=function(){var e=r.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind}).call(this,n("yLpj"))},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("wx14");var i=n("q1tI"),r=n.n(i),o=r.a.createContext({});o.Consumer,o.Provider;function a(e,t){var n=Object(i.useContext)(o);return e||n[t]||t}},wx14:function(e,t,n){"use strict";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return i}))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"==typeof window&&(n=window)}e.exports=n},zLVn:function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-aa929716ce4522d299db.js.map