!function(){"use strict";var t,e,a,o=window.location,p=window.document,l=p.getElementById("plausible"),s=l.getAttribute("data-api")||(t=l.src.split("/"),e=t[0],a=t[2],e+"//"+a+"/api/event");function i(t,e){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(t){}var a={};a.n=t,a.u=e&&e.u?e.u:o.href,a.d=l.getAttribute("data-domain"),a.r=p.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props);var i=l.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),r=a.p||{};i.forEach(function(t){var e=t.replace("event-",""),a=l.getAttribute(t);r[e]=r[e]||a}),a.p=r,a.h=1;var n=new XMLHttpRequest;n.open("POST",s,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(a)),n.onreadystatechange=function(){4===n.readyState&&e&&e.callback&&e.callback()}}}var r=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],n=l.getAttribute("file-types"),c=l.getAttribute("add-file-types"),u=n&&n.split(",")||c&&c.split(",").concat(r)||r;function d(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,i="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;var r,n=e&&e.href&&e.href.split("?")[0];n&&(r=n.split(".").pop(),u.some(function(t){return t===r}))&&((a||i)&&plausible("File Download",{props:{url:n}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!i||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}p.addEventListener("click",d),p.addEventListener("auxclick",d);var w=window.plausible&&window.plausible.q||[];window.plausible=i;for(var f=0;f<w.length;f++)i.apply(this,w[f])}();