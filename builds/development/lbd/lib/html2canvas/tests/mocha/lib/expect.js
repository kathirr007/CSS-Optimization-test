!function(global,module){var exports=module.exports;module.exports=expect,expect.Assertion=Assertion,expect.version="0.3.1";var flags={not:["to","be","have","include","only"],to:["be","have","include","only","not"],only:["have"],have:["own"],be:["an"]};function expect(t){return new Assertion(t)}function Assertion(t,e,n){if(this.obj=t,this.flags={},null!=n)for(var r in this.flags[e]=!0,n.flags)n.flags.hasOwnProperty(r)&&(this.flags[r]=!0);var o=e?flags[e]:keys(flags),i=this;if(o){r=0;for(var s=o.length;r<s;r++)if(!this.flags[o[r]]){var u=o[r],f=new Assertion(this.obj,u,this);if("function"==typeof Assertion.prototype[u]){var a=this[u];for(var p in this[u]=function(){return a.apply(i,arguments)},Assertion.prototype)Assertion.prototype.hasOwnProperty(p)&&p!=u&&(this[u][p]=bind(f[p],f))}else this[u]=f}}}function bind(t,e){return function(){return t.apply(e,arguments)}}function every(t,e,n){for(var r=n||global,o=0,i=t.length;o<i;++o)if(!e.call(r,t[o],o,t))return!1;return!0}function indexOf(t,e,n){if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);if(void 0===t.length)return-1;var r=t.length;for(n=n<0?n+r<0?0:n+r:n||0;n<r&&t[n]!==e;n++);return r<=n?-1:n}Assertion.prototype.assert=function(t,e,n,r){var o;e=this.flags.not?n:e;if(!(this.flags.not?!t:t))throw o=new Error(e.call(this)),3<arguments.length&&(o.actual=this.obj,o.expected=r,o.showDiff=!0),o;this.and=new Assertion(this.obj)},Assertion.prototype.ok=function(){this.assert(!!this.obj,function(){return"expected "+i(this.obj)+" to be truthy"},function(){return"expected "+i(this.obj)+" to be falsy"})},Assertion.prototype.withArgs=function(){expect(this.obj).to.be.a("function");var t=this.obj,e=Array.prototype.slice.call(arguments);return expect(function(){t.apply(null,e)})},Assertion.prototype.throwError=Assertion.prototype.throwException=function(e){expect(this.obj).to.be.a("function");var n=!1,r=this.flags.not;try{this.obj()}catch(t){if(isRegExp(e)){var o="string"==typeof t?t:t.message;r?expect(o).to.not.match(e):expect(o).to.match(e)}else"function"==typeof e&&e(t);n=!0}isRegExp(e)&&r&&(this.flags.not=!1);var t=this.obj.name||"fn";this.assert(n,function(){return"expected "+t+" to throw an exception"},function(){return"expected "+t+" not to throw an exception"})},Assertion.prototype.empty=function(){var t;return t="object"!=typeof this.obj||null===this.obj||isArray(this.obj)?("string"!=typeof this.obj&&expect(this.obj).to.be.an("object"),expect(this.obj).to.have.property("length"),!this.obj.length):"number"==typeof this.obj.length?!this.obj.length:!keys(this.obj).length,this.assert(t,function(){return"expected "+i(this.obj)+" to be empty"},function(){return"expected "+i(this.obj)+" to not be empty"}),this},Assertion.prototype.be=Assertion.prototype.equal=function(t){return this.assert(t===this.obj,function(){return"expected "+i(this.obj)+" to equal "+i(t)},function(){return"expected "+i(this.obj)+" to not equal "+i(t)}),this},Assertion.prototype.eql=function(t){return this.assert(expect.eql(this.obj,t),function(){return"expected "+i(this.obj)+" to sort of equal "+i(t)},function(){return"expected "+i(this.obj)+" to sort of not equal "+i(t)},t),this},Assertion.prototype.within=function(t,e){var n=t+".."+e;return this.assert(this.obj>=t&&this.obj<=e,function(){return"expected "+i(this.obj)+" to be within "+n},function(){return"expected "+i(this.obj)+" to not be within "+n}),this},Assertion.prototype.a=Assertion.prototype.an=function(t){if("string"==typeof t){var e=/^[aeiou]/.test(t)?"n":"";this.assert("array"==t?isArray(this.obj):"regexp"==t?isRegExp(this.obj):"object"==t?"object"==typeof this.obj&&null!==this.obj:t==typeof this.obj,function(){return"expected "+i(this.obj)+" to be a"+e+" "+t},function(){return"expected "+i(this.obj)+" not to be a"+e+" "+t})}else{var n=t.name||"supplied constructor";this.assert(this.obj instanceof t,function(){return"expected "+i(this.obj)+" to be an instance of "+n},function(){return"expected "+i(this.obj)+" not to be an instance of "+n})}return this},Assertion.prototype.greaterThan=Assertion.prototype.above=function(t){return this.assert(this.obj>t,function(){return"expected "+i(this.obj)+" to be above "+t},function(){return"expected "+i(this.obj)+" to be below "+t}),this},Assertion.prototype.lessThan=Assertion.prototype.below=function(t){return this.assert(this.obj<t,function(){return"expected "+i(this.obj)+" to be below "+t},function(){return"expected "+i(this.obj)+" to be above "+t}),this},Assertion.prototype.match=function(t){return this.assert(t.exec(this.obj),function(){return"expected "+i(this.obj)+" to match "+t},function(){return"expected "+i(this.obj)+" not to match "+t}),this},Assertion.prototype.length=function(t){expect(this.obj).to.have.property("length");var e=this.obj.length;return this.assert(t==e,function(){return"expected "+i(this.obj)+" to have a length of "+t+" but got "+e},function(){return"expected "+i(this.obj)+" to not have a length of "+e}),this},Assertion.prototype.property=function(e,t){if(this.flags.own)return this.assert(Object.prototype.hasOwnProperty.call(this.obj,e),function(){return"expected "+i(this.obj)+" to have own property "+i(e)},function(){return"expected "+i(this.obj)+" to not have own property "+i(e)}),this;if(this.flags.not&&void 0!==t){if(void 0===this.obj[e])throw new Error(i(this.obj)+" has no property "+i(e))}else{var n;try{n=e in this.obj}catch(t){n=void 0!==this.obj[e]}this.assert(n,function(){return"expected "+i(this.obj)+" to have a property "+i(e)},function(){return"expected "+i(this.obj)+" to not have a property "+i(e)})}return void 0!==t&&this.assert(t===this.obj[e],function(){return"expected "+i(this.obj)+" to have a property "+i(e)+" of "+i(t)+", but got "+i(this.obj[e])},function(){return"expected "+i(this.obj)+" to not have a property "+i(e)+" of "+i(t)}),this.obj=this.obj[e],this},Assertion.prototype.string=Assertion.prototype.contain=function(t){return"string"==typeof this.obj?this.assert(~this.obj.indexOf(t),function(){return"expected "+i(this.obj)+" to contain "+i(t)},function(){return"expected "+i(this.obj)+" to not contain "+i(t)}):this.assert(~indexOf(this.obj,t),function(){return"expected "+i(this.obj)+" to contain "+i(t)},function(){return"expected "+i(this.obj)+" to not contain "+i(t)}),this},Assertion.prototype.key=Assertion.prototype.keys=function(t){var e,n=!0;if(!(t=isArray(t)?t:Array.prototype.slice.call(arguments)).length)throw new Error("keys required");var r=keys(this.obj),o=t.length;if(n=every(t,function(t){return~indexOf(r,t)}),!this.flags.not&&this.flags.only&&(n=n&&t.length==r.length),1<o){var s=(t=map(t,function(t){return i(t)})).pop();e=t.join(", ")+", and "+s}else e=i(t[0]);return e=(1<o?"keys ":"key ")+e,e=(this.flags.only?"only have ":"include ")+e,this.assert(n,function(){return"expected "+i(this.obj)+" to "+e},function(){return"expected "+i(this.obj)+" to not "+e}),this},Assertion.prototype.fail=function(t){var e=function(){return t||"explicit failure"};return this.assert(!1,e,e),this};var getOuterHTML=function(t){if("outerHTML"in t)return t.outerHTML;var e,n=document.createElementNS("http://www.w3.org/1999/xhtml","_"),r=new XMLSerializer;return document.xmlVersion?r.serializeToString(t):(n.appendChild(t.cloneNode(!1)),e=n.innerHTML.replace("><",">"+t.innerHTML+"<"),n.innerHTML="",e)},isDOMElement=function(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName};function i(t,p,e){var c=[];function h(t){return t}return function r(o,i){if(o&&"function"==typeof o.inspect&&o!==exports&&(!o.constructor||o.constructor.prototype!==o))return o.inspect(i);switch(typeof o){case"undefined":return h("undefined");case"string":return h("'"+json.stringify(o).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'");case"number":case"boolean":return h(""+o)}if(null===o)return h("null");if(isDOMElement(o))return getOuterHTML(o);var t,s,e,u=keys(o),n=p?Object.getOwnPropertyNames(o):u;if("function"==typeof o&&0===n.length)return isRegExp(o)?h(""+o):h("[Function"+(o.name?": "+o.name:"")+"]");if(isDate(o)&&0===n.length)return h(o.toUTCString());if(o instanceof Error)return h("["+o.toString()+"]");if(e=isArray(o)?(s="Array",["[","]"]):(s="Object",["{","}"]),"function"==typeof o){var f=o.name?": "+o.name:"";t=isRegExp(o)?" "+o:" [Function"+f+"]"}else t="";if(isDate(o)&&(t=" "+o.toUTCString()),0===n.length)return e[0]+t+e[1];if(i<0)return isRegExp(o)?h(""+o):h("[Object]");c.push(o);var a=map(n,function(t){var e,n;if(o.__lookupGetter__&&(o.__lookupGetter__(t)?n=o.__lookupSetter__(t)?h("[Getter/Setter]"):h("[Getter]"):o.__lookupSetter__(t)&&(n=h("[Setter]"))),indexOf(u,t)<0&&(e="["+t+"]"),n||(indexOf(c,o[t])<0?-1<(n=null===i?r(o[t]):r(o[t],i-1)).indexOf("\n")&&(n=isArray(o)?map(n.split("\n"),function(t){return"  "+t}).join("\n").substr(2):"\n"+map(n.split("\n"),function(t){return"   "+t}).join("\n")):n=h("[Circular]")),void 0===e){if("Array"===s&&t.match(/^\d+$/))return n;e=(e=json.stringify(""+t)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?h(e=e.substr(1,e.length-2)):h(e=e.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"))}return e+": "+n});c.pop();return a=50<reduce(a,function(t,e){return indexOf(e,"\n"),t+e.length+1},0)?e[0]+(""===t?"":t+"\n ")+" "+a.join(",\n  ")+" "+e[1]:e[0]+t+" "+a.join(", ")+" "+e[1]}(t,void 0===e?2:e)}function isArray(t){return"[object Array]"===Object.prototype.toString.call(t)}function isRegExp(t){var e;try{e=""+t}catch(t){return!1}return t instanceof RegExp||"function"==typeof t&&"RegExp"===t.constructor.name&&t.compile&&t.test&&t.exec&&e.match(/^\/.*\/[gim]{0,3}$/)}function isDate(t){return t instanceof Date}function keys(t){if(Object.keys)return Object.keys(t);var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}function map(t,e,n){if(Array.prototype.map)return Array.prototype.map.call(t,e,n);for(var r=new Array(t.length),o=0,i=t.length;o<i;o++)o in t&&(r[o]=e.call(n,t[o],o,t));return r}function reduce(t,e){if(Array.prototype.reduce)return Array.prototype.reduce.apply(t,Array.prototype.slice.call(arguments,1));var n=+this.length;if("function"!=typeof e)throw new TypeError;if(0==n&&1===arguments.length)throw new TypeError;var r=0;if(2<=arguments.length)var o=e;else for(;;){if(r in this){o=this[r++];break}if(++r>=n)throw new TypeError}for(;r<n;r++)r in this&&(o=e.call(null,o,this[r],r,this));return o}function isUndefinedOrNull(t){return null==t}function isArguments(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function regExpEquiv(t,e){return t.source===e.source&&t.global===e.global&&t.ignoreCase===e.ignoreCase&&t.multiline===e.multiline}function objEquiv(t,e){if(isUndefinedOrNull(t)||isUndefinedOrNull(e))return!1;if(t.prototype!==e.prototype)return!1;if(isArguments(t))return!!isArguments(e)&&(t=pSlice.call(t),e=pSlice.call(e),expect.eql(t,e));try{var n,r,o=keys(t),i=keys(e)}catch(t){return!1}if(o.length!=i.length)return!1;for(o.sort(),i.sort(),r=o.length-1;0<=r;r--)if(o[r]!=i[r])return!1;for(r=o.length-1;0<=r;r--)if(n=o[r],!expect.eql(t[n],e[n]))return!1;return!0}expect.stringify=i,expect.eql=function(t,e){if(t===e)return!0;if("undefined"!=typeof Buffer&&Buffer.isBuffer(t)&&Buffer.isBuffer(e)){if(t.length!=e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():"object"!=typeof t&&"object"!=typeof e?t==e:isRegExp(t)&&isRegExp(e)?regExpEquiv(t,e):objEquiv(t,e)};var json=function(){"use strict";if("object"==typeof JSON&&JSON.parse&&JSON.stringify)return{parse:nativeJSON.parse,stringify:nativeJSON.stringify};var JSON={};function f(t){return t<10?"0"+t:t}function date(t,e){return isFinite(t.valueOf())?t.getUTCFullYear()+"-"+f(t.getUTCMonth()+1)+"-"+f(t.getUTCDate())+"T"+f(t.getUTCHours())+":"+f(t.getUTCMinutes())+":"+f(t.getUTCSeconds())+"Z":null}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(t){return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var n,r,o,i,s,u=gap,f=e[t];switch(f instanceof Date&&(f=date(t)),"function"==typeof rep&&(f=rep.call(e,t,f)),typeof f){case"string":return quote(f);case"number":return isFinite(f)?String(f):"null";case"boolean":case"null":return String(f);case"object":if(!f)return"null";if(gap+=indent,s=[],"[object Array]"===Object.prototype.toString.apply(f)){for(i=f.length,n=0;n<i;n+=1)s[n]=str(n,f)||"null";return o=0===s.length?"[]":gap?"[\n"+gap+s.join(",\n"+gap)+"\n"+u+"]":"["+s.join(",")+"]",gap=u,o}if(rep&&"object"==typeof rep)for(i=rep.length,n=0;n<i;n+=1)"string"==typeof rep[n]&&(o=str(r=rep[n],f))&&s.push(quote(r)+(gap?": ":":")+o);else for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(o=str(r,f))&&s.push(quote(r)+(gap?": ":":")+o);return o=0===s.length?"{}":gap?"{\n"+gap+s.join(",\n"+gap)+"\n"+u+"}":"{"+s.join(",")+"}",gap=u,o}}return JSON.stringify=function(t,e,n){var r;if(indent=gap="","number"==typeof n)for(r=0;r<n;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if((rep=e)&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})},JSON.parse=function(text,reviver){var j;function walk(t,e){var n,r,o=t[e];if(o&&"object"==typeof o)for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(void 0!==(r=walk(o,n))?o[n]=r:delete o[n]);return reviver.call(t,e,o)}if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")},JSON}();"undefined"!=typeof window&&(window.expect=module.exports)}(this,"undefined"!=typeof module?module:{exports:{}});