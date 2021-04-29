!function i(s,a,u){function c(t,e){if(!a[t]){if(!s[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(l)return l(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=a[t]={exports:{}};s[t][0].call(o.exports,function(e){return c(s[t][1][e]||e)},o,o.exports,i,s,a,u)}return a[t].exports}for(var l="function"==typeof require&&require,e=0;e<u.length;e++)c(u[e]);return c}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n,o=(n=e("../../../node_modules/axios"))&&n.__esModule?n:{default:n};function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,(r=[{key:"init",value:function(){this.mainPluginDiv=document.querySelector(".js-wp-advanced-images-plugin"),this.deleteAllCachedImagesButton=document.querySelector(".js-wpaimp-delete-all-images-btn"),this.unsetDefaultImagesButton=document.querySelector(".js-wpaimp-image-sizes-unset-btn"),this.deleteAllCachedImages(),this.unsetDefaultImages()}},{key:"deleteAllCachedImages",value:function(){var t=this;this.deleteAllCachedImagesButton&&this.deleteAllCachedImagesButton.addEventListener("click",function(e){e.preventDefault();t.ajaxUpdate({action:"delete_all_cached_images"})})}},{key:"unsetDefaultImages",value:function(){var i=this;this.unsetDefaultImagesButton&&this.unsetDefaultImagesButton.addEventListener("click",function(e){e.preventDefault();var t=[],r=document.querySelectorAll("input[type=checkbox][name=unset_image_sizes]:checked");if(0<r.length)for(var n=0;n<r.length;n++)t.push(r[n].value);var o={action:"unset_default_images",data:t};i.ajaxUpdate(o)})}},{key:"ajaxUpdate",value:function(e){var t=0<arguments.length&&void 0!==e?e:{},r="",n="";this.mainPluginDiv&&(r=this.mainPluginDiv.getAttribute("data-api-url"),this.mainPluginDiv.getAttribute("data-nonce"),n=this.mainPluginDiv.getAttribute("data-url"));(0,o.default)({method:"post",url:r+"/"+n,data:t})}}])&&i(t.prototype,r),n&&i(t,n),e}();r.default=s},{"../../../node_modules/axios":3}],2:[function(e,t,r){"use strict";var n;(new(((n=e("./modules/DashboardMainController"))&&n.__esModule?n:{default:n}).default)).init()},{"./modules/DashboardMainController":1}],3:[function(e,t,r){"use strict";t.exports=e("./lib/axios")},{"./lib/axios":5}],4:[function(l,e,t){"use strict";var f=l("./../utils"),p=l("./../core/settle"),d=l("./../helpers/buildURL"),h=l("./../helpers/parseHeaders"),m=l("./../helpers/isURLSameOrigin"),g=l("../core/createError");e.exports=function(c){return new Promise(function(r,n){var o=c.data,i=c.headers;f.isFormData(o)&&delete i["Content-Type"];var e,t,s,a,u=new XMLHttpRequest;if(c.auth&&(e=c.auth.username||"",t=c.auth.password||"",i.Authorization="Basic "+btoa(e+":"+t)),u.open(c.method.toUpperCase(),d(c.url,c.params,c.paramsSerializer),!0),u.timeout=c.timeout,u.onreadystatechange=function(){var e,t;u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&(e="getAllResponseHeaders"in u?h(u.getAllResponseHeaders()):null,t={data:c.responseType&&"text"!==c.responseType?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:e,config:c,request:u},p(r,n,t),u=null)},u.onabort=function(){u&&(n(g("Request aborted",c,"ECONNABORTED",u)),u=null)},u.onerror=function(){n(g("Network Error",c,null,u)),u=null},u.ontimeout=function(){n(g("timeout of "+c.timeout+"ms exceeded",c,"ECONNABORTED",u)),u=null},f.isStandardBrowserEnv()&&(s=l("./../helpers/cookies"),(a=(c.withCredentials||m(c.url))&&c.xsrfCookieName?s.read(c.xsrfCookieName):void 0)&&(i[c.xsrfHeaderName]=a)),"setRequestHeader"in u&&f.forEach(i,function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete i[t]:u.setRequestHeader(t,e)}),c.withCredentials&&(u.withCredentials=!0),c.responseType)try{u.responseType=c.responseType}catch(e){if("json"!==c.responseType)throw e}"function"==typeof c.onDownloadProgress&&u.addEventListener("progress",c.onDownloadProgress),"function"==typeof c.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",c.onUploadProgress),c.cancelToken&&c.cancelToken.promise.then(function(e){u&&(u.abort(),n(e),u=null)}),void 0===o&&(o=null),u.send(o)})}},{"../core/createError":11,"./../core/settle":15,"./../helpers/buildURL":19,"./../helpers/cookies":21,"./../helpers/isURLSameOrigin":23,"./../helpers/parseHeaders":25,"./../utils":27}],5:[function(e,t,r){"use strict";var n=e("./utils"),o=e("./helpers/bind"),i=e("./core/Axios"),s=e("./core/mergeConfig");function a(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r}var u=a(e("./defaults"));u.Axios=i,u.create=function(e){return a(s(u.defaults,e))},u.Cancel=e("./cancel/Cancel"),u.CancelToken=e("./cancel/CancelToken"),u.isCancel=e("./cancel/isCancel"),u.all=function(e){return Promise.all(e)},u.spread=e("./helpers/spread"),t.exports=u,t.exports.default=u},{"./cancel/Cancel":6,"./cancel/CancelToken":7,"./cancel/isCancel":8,"./core/Axios":9,"./core/mergeConfig":14,"./defaults":17,"./helpers/bind":18,"./helpers/spread":26,"./utils":27}],6:[function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},{}],7:[function(e,t,r){"use strict";var n=e("./Cancel");function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},t.exports=o},{"./Cancel":6}],8:[function(e,t,r){"use strict";t.exports=function(e){return!(!e||!e.__CANCEL__)}},{}],9:[function(e,t,r){"use strict";var o=e("./../utils"),n=e("../helpers/buildURL"),i=e("./InterceptorManager"),s=e("./dispatchRequest"),a=e("./mergeConfig");function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e,t){"string"==typeof e?(e=t||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var r=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){r.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){r.push(e.fulfilled,e.rejected)});r.length;)n=n.then(r.shift(),r.shift());return n},u.prototype.getUri=function(e){return e=a(this.defaults,e),n(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(r){u.prototype[r]=function(e,t){return this.request(o.merge(t||{},{method:r,url:e}))}}),o.forEach(["post","put","patch"],function(n){u.prototype[n]=function(e,t,r){return this.request(o.merge(r||{},{method:n,url:e,data:t}))}}),t.exports=u},{"../helpers/buildURL":19,"./../utils":27,"./InterceptorManager":10,"./dispatchRequest":12,"./mergeConfig":14}],10:[function(e,t,r){"use strict";var n=e("./../utils");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(t){n.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=o},{"./../utils":27}],11:[function(e,t,r){"use strict";var s=e("./enhanceError");t.exports=function(e,t,r,n,o){var i=new Error(e);return s(i,t,r,n,o)}},{"./enhanceError":13}],12:[function(e,t,r){"use strict";var n=e("./../utils"),o=e("./transformData"),i=e("../cancel/isCancel"),s=e("../defaults"),a=e("./../helpers/isAbsoluteURL"),u=e("./../helpers/combineURLs");function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}t.exports=function(t){return c(t),t.baseURL&&!a(t.url)&&(t.url=u(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return c(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(c(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},{"../cancel/isCancel":8,"../defaults":17,"./../helpers/combineURLs":20,"./../helpers/isAbsoluteURL":22,"./../utils":27,"./transformData":16}],13:[function(e,t,r){"use strict";t.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},{}],14:[function(e,t,r){"use strict";var o=e("../utils");t.exports=function(t,r){r=r||{};var n={};return o.forEach(["url","method","params","data"],function(e){void 0!==r[e]&&(n[e]=r[e])}),o.forEach(["headers","auth","proxy"],function(e){o.isObject(r[e])?n[e]=o.deepMerge(t[e],r[e]):void 0!==r[e]?n[e]=r[e]:o.isObject(t[e])?n[e]=o.deepMerge(t[e]):void 0!==t[e]&&(n[e]=t[e])}),o.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(e){void 0!==r[e]?n[e]=r[e]:void 0!==t[e]&&(n[e]=t[e])}),n}},{"../utils":27}],15:[function(e,t,r){"use strict";var o=e("./createError");t.exports=function(e,t,r){var n=r.config.validateStatus;!n||n(r.status)?e(r):t(o("Request failed with status code "+r.status,r.config,null,r.request,r))}},{"./createError":11}],16:[function(e,t,r){"use strict";var n=e("./../utils");t.exports=function(t,r,e){return n.forEach(e,function(e){t=e(t,r)}),t}},{"./../utils":27}],17:[function(a,u,e){(function(e){"use strict";var r=a("./utils"),n=a("./helpers/normalizeHeaderName"),t={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,s={adapter:(void 0!==e&&"[object process]"===Object.prototype.toString.call(e)?i=a("./adapters/http"):"undefined"!=typeof XMLHttpRequest&&(i=a("./adapters/xhr")),i),transformRequest:[function(e,t){return n(t,"Accept"),n(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return 200<=e&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],function(e){s.headers[e]={}}),r.forEach(["post","put","patch"],function(e){s.headers[e]=r.merge(t)}),u.exports=s}).call(this,a("_process"))},{"./adapters/http":4,"./adapters/xhr":4,"./helpers/normalizeHeaderName":24,"./utils":27,_process:29}],18:[function(e,t,r){"use strict";t.exports=function(r,n){return function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];return r.apply(n,e)}}},{}],19:[function(e,t,r){"use strict";var s=e("./../utils");function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(e,t,r){if(!t)return e;var n,o,i=r?r(t):s.isURLSearchParams(t)?t.toString():(n=[],s.forEach(t,function(e,t){null!=e&&(s.isArray(e)?t+="[]":e=[e],s.forEach(e,function(e){s.isDate(e)?e=e.toISOString():s.isObject(e)&&(e=JSON.stringify(e)),n.push(a(t)+"="+a(e))}))}),n.join("&"));return i&&(-1!==(o=e.indexOf("#"))&&(e=e.slice(0,o)),e+=(-1===e.indexOf("?")?"?":"&")+i),e}},{"./../utils":27}],20:[function(e,t,r){"use strict";t.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},{}],21:[function(e,t,r){"use strict";var a=e("./../utils");t.exports=a.isStandardBrowserEnv()?{write:function(e,t,r,n,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),a.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),a.isString(n)&&s.push("path="+n),a.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},{"./../utils":27}],22:[function(e,t,r){"use strict";t.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},{}],23:[function(e,t,r){"use strict";var n,o,i,s=e("./../utils");function a(e){var t=e;return o&&(i.setAttribute("href",t),t=i.href),i.setAttribute("href",t),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}t.exports=s.isStandardBrowserEnv()?(o=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n=a(window.location.href),function(e){var t=s.isString(e)?a(e):e;return t.protocol===n.protocol&&t.host===n.host}):function(){return!0}},{"./../utils":27}],24:[function(e,t,r){"use strict";var o=e("../utils");t.exports=function(r,n){o.forEach(r,function(e,t){t!==n&&t.toUpperCase()===n.toUpperCase()&&(r[n]=e,delete r[t])})}},{"../utils":27}],25:[function(e,t,r){"use strict";var i=e("./../utils"),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(e){var t,r,n,o={};return e&&i.forEach(e.split("\n"),function(e){if(n=e.indexOf(":"),t=i.trim(e.substr(0,n)).toLowerCase(),r=i.trim(e.substr(n+1)),t){if(o[t]&&0<=s.indexOf(t))return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}}),o}},{"./../utils":27}],26:[function(e,t,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},{}],27:[function(e,t,r){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=e("./helpers/bind"),n=e("is-buffer"),s=Object.prototype.toString;function a(e){return"[object Array]"===s.call(e)}function u(e){return null!==e&&"object"===i(e)}function c(e){return"[object Function]"===s.call(e)}function l(e,t){if(null!=e)if("object"!==i(e)&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}t.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:n,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){var t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer;return t},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:c,isStream:function(e){return u(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function r(){var n={};function e(e,t){"object"===i(n[t])&&"object"===i(e)?n[t]=r(n[t],e):n[t]=e}for(var t=0,o=arguments.length;t<o;t++)l(arguments[t],e);return n},deepMerge:function r(){var n={};function e(e,t){"object"===i(n[t])&&"object"===i(e)?n[t]=r(n[t],e):"object"===i(e)?n[t]=r({},e):n[t]=e}for(var t=0,o=arguments.length;t<o;t++)l(arguments[t],e);return n},extend:function(r,e,n){return l(e,function(e,t){r[t]=n&&"function"==typeof e?o(e,n):e}),r},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},{"./helpers/bind":18,"is-buffer":28}],28:[function(e,t,r){"use strict";t.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},{}],29:[function(e,t,r){"use strict";var n,o,i=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var c,l=[],f=!1,p=-1;function d(){f&&c&&(f=!1,c.length?l=c.concat(l):p=-1,l.length&&h())}function h(){if(!f){var e=u(d);f=!0;for(var t=l.length;t;){for(c=l,l=[];++p<t;)c&&c[p].run();p=-1,t=l.length}c=null,f=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new m(e,t)),1!==l.length||f||u(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}]},{},[2]);