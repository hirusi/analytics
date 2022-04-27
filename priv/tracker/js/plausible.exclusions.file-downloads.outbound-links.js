!function(){"use strict";var o=window.location,n=window.document,p=n.currentScript,l=p.getAttribute("data-api")||new URL(p.src).origin+"/api/event",s=p&&p.getAttribute("data-exclude").split(",");function c(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag")}catch(t){}if(s)for(var i=0;i<s.length;i++)if("pageview"===t&&o.pathname.match(new RegExp("^"+s[i].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return c("exclusion rule");var a={};a.n=t,a.u=o.href,a.d=p.getAttribute("data-domain"),a.r=n.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props);var r=new XMLHttpRequest;r.open("POST",l,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}}function e(t){for(var e=t.target,i="auxclick"===t.type&&2===t.which,a="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.host&&e.host!==o.host&&((i||a)&&plausible("Outbound Link: Click",{props:{url:e.href}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!a||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}n.addEventListener("click",e),n.addEventListener("auxclick",e);var i=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],a=p.getAttribute("file-types"),r=p.getAttribute("add-file-types"),u=a&&a.split(",")||r&&r.split(",").concat(i)||i;function d(t){for(var e=t.target,i="auxclick"===t.type&&2===t.which,a="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;var r,n=e&&e.href&&e.href.split("?")[0];n&&(r=n.split(".").pop(),u.some(function(t){return t===r}))&&((i||a)&&plausible("File Download",{props:{url:n}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!a||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}n.addEventListener("click",d),n.addEventListener("auxclick",d);var f=window.plausible&&window.plausible.q||[];window.plausible=t;for(var h,w=0;w<f.length;w++)t.apply(this,f[w]);function g(){h!==o.pathname&&(h=o.pathname,t("pageview"))}var v,m=window.history;m.pushState&&(v=m.pushState,m.pushState=function(){v.apply(this,arguments),g()},window.addEventListener("popstate",g)),"prerender"===n.visibilityState?n.addEventListener("visibilitychange",function(){h||"visible"!==n.visibilityState||g()}):g()}();