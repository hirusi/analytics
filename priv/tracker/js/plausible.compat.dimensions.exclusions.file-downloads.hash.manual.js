!function(){"use strict";var e,t,a,l=window.location,p=window.document,s=p.getElementById("plausible"),c=s.getAttribute("data-api")||(e=s.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event"),u=s&&s.getAttribute("data-exclude").split(",");function d(e){console.warn("Ignoring Event: "+e)}function r(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(l.hostname)||"file:"===l.protocol)return d("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return d("localStorage flag")}catch(e){}if(u)for(var a=0;a<u.length;a++)if("pageview"===e&&l.pathname.match(new RegExp("^"+u[a].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return d("exclusion rule");var r={};r.n=e,r.u=t&&t.u?t.u:l.href,r.d=s.getAttribute("data-domain"),r.r=p.referrer||null,r.w=window.innerWidth,t&&t.meta&&(r.m=JSON.stringify(t.meta)),t&&t.props&&(r.p=t.props);var i=s.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),n=r.p||{};i.forEach(function(e){var t=e.replace("event-",""),a=s.getAttribute(e);n[t]=n[t]||a}),r.p=n,r.h=1;var o=new XMLHttpRequest;o.open("POST",c,!0),o.setRequestHeader("Content-Type","text/plain"),o.send(JSON.stringify(r)),o.onreadystatechange=function(){4===o.readyState&&t&&t.callback&&t.callback()}}}var i=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],n=s.getAttribute("file-types"),o=s.getAttribute("add-file-types"),f=n&&n.split(",")||o&&o.split(",").concat(i)||i;function g(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,r="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;var i,n=t&&t.href&&t.href.split("?")[0];n&&(i=n.split(".").pop(),f.some(function(e){return e===i}))&&((a||r)&&plausible("File Download",{props:{url:n}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!r||(setTimeout(function(){l.href=t.href},150),e.preventDefault()))}p.addEventListener("click",g),p.addEventListener("auxclick",g);var w=window.plausible&&window.plausible.q||[];window.plausible=r;for(var v=0;v<w.length;v++)r.apply(this,w[v])}();