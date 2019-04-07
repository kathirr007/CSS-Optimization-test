var Zepto=function(){function s(t){return null==t?String(t):q[R.call(t)]||"object"}function o(t){return"function"==s(t)}function u(t){return null!=t&&t==t.window}function c(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(t){return"object"==s(t)}function a(t){return r(t)&&!u(t)&&t.__proto__==Object.prototype}function f(t){return t instanceof Array}function l(t){return"number"==typeof t.length}function i(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function e(t){return t in n?n[t]:n[t]=RegExp("(^|\\s)"+t+"(\\s|$)")}function h(t){return"children"in t?O.call(t.children):b.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function p(t,n){return n===g?b(t):b(t).filter(n)}function d(t,n,e,i){return o(n)?n.call(t,e,i):n}function v(t,n){var e=t.className,i=e&&e.baseVal!==g;if(n===g)return i?e.baseVal:e;i?e.baseVal=n:t.className=n}function m(n){var t;try{return n?"true"==n||"false"!=n&&("null"==n?null:isNaN(t=Number(n))?/^[\[\{]/.test(n)?b.parseJSON(n):n:t):n}catch(t){return n}}var g,y,b,w,E,x,N=[],O=N.slice,C=N.filter,T=window.document,P={},n={},A=T.defaultView.getComputedStyle,S={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},$=/^\s*<(\w+|!)[^>]*>/,j=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Z=/^(?:body|html)$/i,k="val css html text data width height offset".split(" "),t=T.createElement("table"),z=T.createElement("tr"),_={tr:T.createElement("tbody"),tbody:t,thead:t,tfoot:t,td:z,th:z,"*":T.createElement("div")},M=/complete|loaded|interactive/,D=/^\.([\w-]+)$/,L=/^#([\w-]*)$/,F=/^[\w-]+$/,q={},R=q.toString,V={},B=T.createElement("div");return V.matches=function(t,n){if(!t||1!==t.nodeType)return!1;var e,i=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;return i?i.call(t,n):((i=!(e=t.parentNode))&&(e=B).appendChild(t),e=~V.qsa(e,n).indexOf(t),i&&B.removeChild(t),e)},E=function(t){return t.replace(/-+(.)?/g,function(t,n){return n?n.toUpperCase():""})},x=function(e){return C.call(e,function(t,n){return e.indexOf(t)==n})},V.fragment=function(t,n,e){t.replace&&(t=t.replace(j,"<$1></$2>")),n===g&&(n=$.test(t)&&RegExp.$1),n in _||(n="*");var i,r=_[n];return r.innerHTML=""+t,t=b.each(O.call(r.childNodes),function(){r.removeChild(this)}),a(e)&&(i=b(t),b.each(e,function(t,n){-1<k.indexOf(t)?i[t](n):i.attr(t,n)})),t},V.Z=function(t,n){return(t=t||[]).__proto__=b.fn,t.selector=n||"",t},V.isZ=function(t){return t instanceof V.Z},V.init=function(t,n){if(t){if(o(t))return b(T).ready(t);if(V.isZ(t))return t;var e;if(f(t))e=C.call(t,function(t){return null!=t});else if(r(t))e=[a(t)?b.extend({},t):t],t=null;else if($.test(t))e=V.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==g)return b(n).find(t);e=V.qsa(T,t)}return V.Z(e,t)}return V.Z()},(b=function(t,n){return V.init(t,n)}).extend=function(n){var e,t=O.call(arguments,1);return"boolean"==typeof n&&(e=n,n=t.shift()),t.forEach(function(t){!function t(n,e,i){for(y in e)i&&(a(e[y])||f(e[y]))?(a(e[y])&&!a(n[y])&&(n[y]={}),f(e[y])&&!f(n[y])&&(n[y]=[]),t(n[y],e[y],i)):e[y]!==g&&(n[y]=e[y])}(n,t,e)}),n},V.qsa=function(t,n){var e;return c(t)&&L.test(n)?(e=t.getElementById(RegExp.$1))?[e]:[]:1!==t.nodeType&&9!==t.nodeType?[]:O.call(D.test(n)?t.getElementsByClassName(RegExp.$1):F.test(n)?t.getElementsByTagName(n):t.querySelectorAll(n))},b.contains=function(t,n){return t!==n&&t.contains(n)},b.type=s,b.isFunction=o,b.isWindow=u,b.isArray=f,b.isPlainObject=a,b.isEmptyObject=function(t){for(var n in t)return!1;return!0},b.inArray=function(t,n,e){return N.indexOf.call(n,t,e)},b.camelCase=E,b.trim=function(t){return t.trim()},b.uuid=0,b.support={},b.expr={},b.map=function(t,n){var e,i,r=[];if(l(t))for(i=0;i<t.length;i++)null!=(e=n(t[i],i))&&r.push(e);else for(i in t)null!=(e=n(t[i],i))&&r.push(e);return 0<r.length?b.fn.concat.apply([],r):r},b.each=function(t,n){var e;if(l(t))for(e=0;e<t.length&&!1!==n.call(t[e],e,t[e]);e++);else for(e in t)if(!1===n.call(t[e],e,t[e]))break;return t},b.grep=function(t,n){return C.call(t,n)},window.JSON&&(b.parseJSON=JSON.parse),b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,n){q["[object "+n+"]"]=n.toLowerCase()}),b.fn={forEach:N.forEach,reduce:N.reduce,push:N.push,sort:N.sort,indexOf:N.indexOf,concat:N.concat,map:function(e){return b(b.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return b(O.apply(this,arguments))},ready:function(t){return M.test(T.readyState)?t(b):T.addEventListener("DOMContentLoaded",function(){t(b)},!1),this},get:function(t){return t===g?O.call(this):this[0<=t?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(e){return N.every.call(this,function(t,n){return!1!==e.call(t,n,t)}),this},filter:function(n){return o(n)?this.not(this.not(n)):b(C.call(this,function(t){return V.matches(t,n)}))},add:function(t,n){return b(x(this.concat(b(t,n))))},is:function(t){return 0<this.length&&V.matches(this[0],t)},not:function(n){var e=[];if(o(n)&&n.call!==g)this.each(function(t){n.call(this,t)||e.push(this)});else{var i="string"==typeof n?this.filter(n):l(n)&&o(n.item)?O.call(n):b(n);this.forEach(function(t){i.indexOf(t)<0&&e.push(t)})}return b(e)},has:function(t){return this.filter(function(){return r(t)?b.contains(this,t):b(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:b(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:b(t)},find:function(t){var e=this;return"object"==typeof t?b(t).filter(function(){var n=this;return N.some.call(e,function(t){return b.contains(t,n)})}):1==this.length?b(V.qsa(this[0],t)):this.map(function(){return V.qsa(this,t)})},closest:function(t,n){var e=this[0],i=!1;for("object"==typeof t&&(i=b(t));e&&!(i?0<=i.indexOf(e):V.matches(e,t));)e=e!==n&&!c(e)&&e.parentNode;return b(e)},parents:function(t){for(var n=[],e=this;0<e.length;)e=b.map(e,function(t){if((t=t.parentNode)&&!c(t)&&n.indexOf(t)<0)return n.push(t),t});return p(n,t)},parent:function(t){return p(x(this.pluck("parentNode")),t)},children:function(t){return p(this.map(function(){return h(this)}),t)},contents:function(){return this.map(function(){return O.call(this.childNodes)})},siblings:function(t){return p(this.map(function(t,n){return C.call(h(n.parentNode),function(t){return t!==n})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(n){return b.map(this,function(t){return t[n]})},show:function(){return this.each(function(){if("none"==this.style.display&&(this.style.display=null),"none"==A(this,"").getPropertyValue("display")){var t,n,e=this.style,i=this.nodeName;P[i]||(t=T.createElement(i),T.body.appendChild(t),n=A(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),"none"==n&&(n="block"),P[i]=n),e.display=P[i]}})},replaceWith:function(t){return this.before(t).remove()},wrap:function(n){var e=o(n);if(this[0]&&!e)var i=b(n).get(0),r=i.parentNode||1<this.length;return this.each(function(t){b(this).wrapAll(e?n.call(this,t):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){b(this[0]).before(t=b(t));for(var n;(n=t.children()).length;)t=n.first();b(t).append(this)}return this},wrapInner:function(i){var r=o(i);return this.each(function(t){var n=b(this),e=n.contents();t=r?i.call(this,t):i,e.length?e.wrapAll(t):n.append(t)})},unwrap:function(){return this.parent().each(function(){b(this).replaceWith(b(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(n){return this.each(function(){var t=b(this);(n===g?"none"==t.css("display"):n)?t.show():t.hide()})},prev:function(t){return b(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return b(this.pluck("nextElementSibling")).filter(t||"*")},html:function(e){return e===g?0<this.length?this[0].innerHTML:null:this.each(function(t){var n=this.innerHTML;b(this).empty().append(d(this,e,t,n))})},text:function(t){return t===g?0<this.length?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(e,i){var t;return"string"==typeof e&&i===g?0==this.length||1!==this[0].nodeType?g:"value"==e&&"INPUT"==this[0].nodeName?this.val():!(t=this[0].getAttribute(e))&&e in this[0]?this[0][e]:t:this.each(function(t){if(1===this.nodeType)if(r(e))for(y in e){var n=e[t=y];null==n?this.removeAttribute(t):this.setAttribute(t,n)}else null==(t=d(this,i,t,this.getAttribute(e)))?this.removeAttribute(e):this.setAttribute(e,t)})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&this.removeAttribute(t)})},prop:function(n,e){return e===g?this[0]&&this[0][n]:this.each(function(t){this[n]=d(this,e,t,this[n])})},data:function(t,n){var e=this.attr("data-"+i(t),n);return null!==e?m(e):g},val:function(n){return n===g?this[0]&&(this[0].multiple?b(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(t){this.value=d(this,n,t,this.value)})},offset:function(i){if(i)return this.each(function(t){var n=b(this);t=d(this,i,t,n.offset());var e=n.offsetParent().offset();t={top:t.top-e.top,left:t.left-e.left},"static"==n.css("position")&&(t.position="relative"),n.css(t)});if(0==this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,n){if(arguments.length<2&&"string"==typeof t)return this[0]&&(this[0].style[E(t)]||A(this[0],"").getPropertyValue(t));var e="";if("string"==s(t))n||0===n?e=i(t)+":"+("number"!=typeof n||S[i(t)]?n:n+"px"):this.each(function(){this.style.removeProperty(i(t))});else for(y in t)t[y]||0===t[y]?e+=i(y)+":"+("number"!=typeof t[y]||S[i(y)]?t[y]:t[y]+"px")+";":this.each(function(){this.style.removeProperty(i(y))});return this.each(function(){this.style.cssText+=";"+e})},index:function(t){return t?this.indexOf(b(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return N.some.call(this,function(t){return this.test(v(t))},e(t))},addClass:function(e){return this.each(function(t){w=[];var n=v(this);d(this,e,t,n).split(/\s+/g).forEach(function(t){b(this).hasClass(t)||w.push(t)},this),w.length&&v(this,n+(n?" ":"")+w.join(" "))})},removeClass:function(n){return this.each(function(t){if(n===g)return v(this,"");w=v(this),d(this,n,t,w).split(/\s+/g).forEach(function(t){w=w.replace(e(t)," ")}),v(this,w.trim())})},toggleClass:function(e,i){return this.each(function(t){var n=b(this);d(this,e,t,v(this)).split(/\s+/g).forEach(function(t){(i===g?!n.hasClass(t):i)?n.addClass(t):n.removeClass(t)})})},scrollTop:function(){if(this.length)return"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY},position:function(){if(this.length){var t=this[0],n=this.offsetParent(),e=this.offset(),i=Z.test(n[0].nodeName)?{top:0,left:0}:n.offset();return e.top-=parseFloat(b(t).css("margin-top"))||0,e.left-=parseFloat(b(t).css("margin-left"))||0,i.top+=parseFloat(b(n[0]).css("border-top-width"))||0,i.left+=parseFloat(b(n[0]).css("border-left-width"))||0,{top:e.top-i.top,left:e.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||T.body;t&&!Z.test(t.nodeName)&&"static"==b(t).css("position");)t=t.offsetParent;return t})}},b.fn.detach=b.fn.remove,["width","height"].forEach(function(r){b.fn[r]=function(n){var t,e=this[0],i=r.replace(/./,function(t){return t[0].toUpperCase()});return n===g?u(e)?e["inner"+i]:c(e)?e.documentElement["offset"+i]:(t=this.offset())&&t[r]:this.each(function(t){(e=b(this)).css(r,d(this,n,t,e[r]()))})}}),["after","prepend","before","append"].forEach(function(n,o){var u=o%2;b.fn[n]=function(){var n,e,i=b.map(arguments,function(t){return"object"==(n=s(t))||"array"==n||null==t?t:V.fragment(t)}),r=1<this.length;return i.length<1?this:this.each(function(t,n){e=u?n:n.parentNode,n=0==o?n.nextSibling:1==o?n.firstChild:2==o?n:null,i.forEach(function(t){if(r)t=t.cloneNode(!0);else if(!e)return b(t).remove();!function t(n,e){for(var i in e(n),n.childNodes)t(n.childNodes[i],e)}(e.insertBefore(t,n),function(t){null!=t.nodeName&&"SCRIPT"===t.nodeName.toUpperCase()&&(!t.type||"text/javascript"===t.type)&&!t.src&&window.eval.call(window,t.innerHTML)})})})},b.fn[u?n+"To":"insert"+(o?"Before":"After")]=function(t){return b(t)[n](this),this}}),V.Z.prototype=b.fn,V.uniq=x,V.deserializeValue=m,b.zepto=V,b}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(o){String.prototype.trim===o&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===o&&(Array.prototype.reduce=function(t){if(null==this)throw new TypeError;var n,e=Object(this),i=e.length>>>0,r=0;if("function"!=typeof t)throw new TypeError;if(0==i&&1==arguments.length)throw new TypeError;if(2<=arguments.length)n=arguments[1];else for(;;){if(r in e){n=e[r++];break}if(++r>=i)throw new TypeError}for(;r<i;)r in e&&(n=t.call(o,n,e[r],r,e)),r++;return n})}(),function(a){function f(t){return t._zid||(t._zid=n++)}function u(t,n,e,i){if((n=l(n)).ns)var r=RegExp("(?:^| )"+n.ns.replace(" "," .* ?")+"(?: |$)");return(p[f(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||r.test(t.ns))&&(!e||f(t.fn)===f(e))&&(!i||t.sel==i)})}function l(t){return{e:(t=(""+t).split("."))[0],ns:t.slice(1).sort().join(" ")}}function h(t,n,e){"string"!=a.type(t)?a.each(t,e):t.split(/\s/).forEach(function(t){e(t,n)})}function s(r,t,n,o,u,s){var e=f(r),c=p[e]||(p[e]=[]);h(t,n,function(t,n){var e=l(t);e.fn=n,e.sel=o,e.e in d&&(n=function(t){var n=t.relatedTarget;if(!n||n!==this&&!a.contains(this,n))return e.fn.apply(this,arguments)}),e.del=u&&u(n,t);var i=e.del||n;e.proxy=function(t){var n=i.apply(r,[t].concat(t.data));return!1===n&&(t.preventDefault(),t.stopPropagation()),n},e.i=c.length,c.push(e),r.addEventListener(d[e.e]||e.e,e.proxy,e.del&&("focus"==e.e||"blur"==e.e)||!!s)})}function r(e,t,n,i,r){var o=f(e);h(t||"",n,function(t,n){u(e,t,n,i).forEach(function(t){delete p[o][t.i],e.removeEventListener(d[t.e]||t.e,t.proxy,t.del&&("focus"==t.e||"blur"==t.e)||!!r)})})}function c(e){var t,i={originalEvent:e};for(t in e)!g.test(t)&&void 0!==e[t]&&(i[t]=e[t]);return a.each(y,function(t,n){i[t]=function(){return this[n]=v,e[t].apply(e,arguments)},i[n]=m}),i}var p={},n=1,o={},d={mouseenter:"mouseover",mouseleave:"mouseout"};o.click=o.mousedown=o.mouseup=o.mousemove="MouseEvents",a.event={add:s,remove:r},a.proxy=function(t,n){if(a.isFunction(t)){var e=function(){return t.apply(n,arguments)};return e._zid=f(t),e}if("string"==typeof n)return a.proxy(t[n],t);throw new TypeError("expected function")},a.fn.bind=function(t,n){return this.each(function(){s(this,t,n)})},a.fn.unbind=function(t,n){return this.each(function(){r(this,t,n)})},a.fn.one=function(n,e){return this.each(function(t,i){s(this,n,e,null,function(n,e){return function(){var t=n.apply(i,arguments);return r(i,e,n),t}})})};var v=function(){return!0},m=function(){return!1},g=/^([A-Z]|layer[XY]$)/,y={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(o,n,e){return this.each(function(t,r){s(r,n,e,o,function(i){return function(t){var n,e=a(t.target).closest(o,r).get(0);if(e)return n=a.extend(c(t),{currentTarget:e,liveFired:r}),i.apply(e,[n].concat([].slice.call(arguments,1)))}})})},a.fn.undelegate=function(t,n,e){return this.each(function(){r(this,n,e,t)})},a.fn.live=function(t,n){return a(document.body).delegate(this.selector,t,n),this},a.fn.die=function(t,n){return a(document.body).undelegate(this.selector,t,n),this},a.fn.on=function(t,n,e){return!n||a.isFunction(n)?this.bind(t,n||e):this.delegate(n,t,e)},a.fn.off=function(t,n,e){return!n||a.isFunction(n)?this.unbind(t,n||e):this.undelegate(n,t,e)},a.fn.trigger=function(t,n){("string"==typeof t||a.isPlainObject(t))&&(t=a.Event(t));var e=t;if(!("defaultPrevented"in e)){e.defaultPrevented=!1;var i=e.preventDefault;e.preventDefault=function(){this.defaultPrevented=!0,i.call(this)}}return t.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(t)})},a.fn.triggerHandler=function(e,i){var r,o;return this.each(function(t,n){(r=c("string"==typeof e?a.Event(e):e)).data=i,r.target=n,a.each(u(n,e.type||e),function(t,n){if(o=n.proxy(r),r.isImmediatePropagationStopped())return!1})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n){a.fn[n]=function(t){return t?this.bind(n,t):this.trigger(n)}}),["focus","blur"].forEach(function(n){a.fn[n]=function(t){return t?this.bind(n,t):this.each(function(){try{this[n]()}catch(t){}}),this}}),a.Event=function(t,n){"string"!=typeof t&&(t=(n=t).type);var e=document.createEvent(o[t]||"Events"),i=!0;if(n)for(var r in n)"bubbles"==r?i=!!n[r]:e[r]=n[r];return e.initEvent(t,i,!0,null,null,null,null,null,null,null,null,null,null,null,null),e.isDefaultPrevented=function(){return this.defaultPrevented},e}}(Zepto),function(u){function r(t,n,e){var i,r=t[a]||(t[a]=++u.uuid);if(!(i=s[r])){i=s;var o={};u.each(t.attributes,function(t,n){0==n.name.indexOf("data-")&&(o[c(n.name.replace("data-",""))]=u.zepto.deserializeValue(n.value))}),i=i[r]=o}return t=i,void 0!==n&&(t[c(n)]=e),t}var s={},o=u.fn.data,c=u.camelCase,a=u.expando="Zepto"+ +new Date;u.fn.data=function(n,t){return void 0===t?u.isPlainObject(n)?this.each(function(t,e){u.each(n,function(t,n){r(e,t,n)})}):0==this.length?void 0:function(t,n){var e=(e=t[a])&&s[e];if(void 0===n)return e||r(t);if(e){if(n in e)return e[n];var i=c(n);if(i in e)return e[i]}return o.call(u(t),n)}(this[0],n):this.each(function(){r(this,n,t)})},u.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var t=this[a],n=t&&s[t];n&&u.each(e,function(){delete n[c(this)]})})}}(Zepto),function(e){e.fn.end=function(){return this.prevObject||e()},e.fn.andSelf=function(){return this.add(this.prevObject||e())},"filter add not eq first last find closest parents parent children siblings".split(" ").forEach(function(t){var n=e.fn[t];e.fn[t]=function(){var t=n.apply(this,arguments);return t.prevObject=this,t}})}(Zepto);