(self.webpackChunkportafolio_personal=self.webpackChunkportafolio_personal||[]).push([[351],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],a[s[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},5414:function(e,t,r){"use strict";r.d(t,{q:function(){return me}});var n,o,i,a,c=r(5697),l=r.n(c),s=r(4839),u=r.n(s),p=r(2993),f=r.n(p),d=r(7294),h=r(6494),m=r.n(h),x="bodyAttributes",y="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",E="href",T="http-equiv",k="innerHTML",O="itemprop",C="name",S="property",A="rel",j="src",M="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",P="defer",_="encodeSpecialCharacters",N="onChangeClientState",z="titleTemplate",B=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),R=[g.NOSCRIPT,g.SCRIPT,g.STYLE],D="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,g.TITLE),r=Q(e,z);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,I);return t||n||void 0},Z=function(e){return Q(e,N)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||r===A&&"canonical"===e[r].toLowerCase()||l===A&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==k&&c!==w&&c!==O||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=m()({},n[c],o[c]);n[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,p=e.title,f=e.titleAttributes;le(g.BODY,n),le(g.HTML,o),ce(p,f);var d={baseTag:se(g.BASE,r),linkTags:se(g.LINK,i),metaTags:se(g.META,a),noscriptTags:se(g.NOSCRIPT,c),scriptTags:se(g.SCRIPT,s),styleTags:se(g.STYLE,u)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=d[e].oldTags)})),t&&t(),l(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(g.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(D),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var p=i.length-1;p>=0;p--)r.removeAttribute(i[p]);o.length===i.length?r.removeAttribute(D):r.getAttribute(D)!==a.join(",")&&r.setAttribute(D,a.join(","))}},se=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===k)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(D,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[D]=!0,o=pe(r,n),[d.createElement(g.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=ue(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case x:case y:return{toComponent:function(){return pe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[D]=!0,n);return Object.keys(t).forEach((function(e){var r=L[e]||e;if(r===k||r===w){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),d.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===k||e===w)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+W(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,p=void 0===u?"":u,f=e.titleAttributes;return{base:fe(g.BASE,t,n),bodyAttributes:fe(x,r,n),htmlAttributes:fe(y,o,n),link:fe(g.LINK,i,n),meta:fe(g.META,a,n),noscript:fe(g.NOSCRIPT,c,n),script:fe(g.SCRIPT,l,n),style:fe(g.STYLE,s,n),title:fe(g.TITLE,{title:p,titleAttributes:f},n)}},he=u()((function(e){return{baseTag:$([E,M],e),bodyAttributes:G(x,e),defer:Q(e,P),encode:Q(e,_),htmlAttributes:G(y,e),linkTags:J(g.LINK,[A,E],e),metaTags:J(g.META,[C,v,T,S,O],e),noscriptTags:J(g.NOSCRIPT,[k],e),onChangeClientState:Z(e),scriptTags:J(g.SCRIPT,[j,k],e),styleTags:J(g.STYLE,[w],e),title:K(e),titleAttributes:G(b,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),me=(o=he,a=i=function(e){function t(){return q(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Y({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case g.TITLE:return Y({},o,((t={})[n.type]=a,t.titleAttributes=Y({},i),t));case g.BODY:return Y({},o,{bodyAttributes:Y({},i)});case g.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((r={})[n.type]=Y({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Y({},t);return Object.keys(e).forEach((function(t){var n;r=Y({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(U(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=Y({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.createElement(o,n)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),p.canUseDOM?t(l):r&&(l=r(l))}var p=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(p,"canUseDOM",c),p}}},1159:function(e,t,r){"use strict";r.d(t,{Z:function(){return C}});var n=r(7294),o=r(6715),i=o.default.svg.withConfig({displayName:"linkedin__Svg",componentId:"sc-wza19l-0"})([""]),a=function(e){return n.createElement(i,Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 5 1036 990"},e),n.createElement("path",{d:"M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"}))},c=o.default.svg.withConfig({displayName:"twitter__Svg",componentId:"sc-1mlyqay-0"})([""]),l=function(e){return n.createElement(c,Object.assign({clipRule:"evenodd",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2,viewBox:"-89.009 -46.884 479.862 403.894",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M57.574 355.236c185.669 0 287.205-153.876 287.205-287.312 0-4.37-.09-8.72-.286-13.052a205.304 205.304 0 0 0 50.352-52.29c-18.087 8.044-37.55 13.458-57.968 15.899 20.84-12.501 36.84-32.278 44.389-55.852a202.42 202.42 0 0 1-64.098 24.511c-18.42-19.628-44.644-31.904-73.682-31.904-55.744 0-100.948 45.222-100.948 100.965 0 7.925.887 15.631 2.619 23.025C61.262 75.003-13.13 34.821-62.917-26.278a100.739 100.739 0 0 0-13.668 50.754c0 35.034 17.82 65.961 44.92 84.055a100.172 100.172 0 0 1-45.716-12.63c-.015.424-.015.837-.015 1.29 0 48.903 34.794 89.734 80.982 98.986a101.036 101.036 0 0 1-26.617 3.553c-6.493 0-12.821-.639-18.971-1.82 12.85 40.122 50.115 69.319 94.296 70.135-34.55 27.089-78.07 43.224-125.371 43.224a204.9 204.9 0 0 1-24.078-1.399c44.674 28.645 97.72 45.359 154.734 45.359",fillRule:"nonzero"}))},s=r(8034),u=function(e){return n.createElement("svg",Object.assign({className:"github",viewBox:"0 0 20.1 13",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{style:{fillRule:"evenodd",strokeWidth:0,fillOpacity:1},d:"M.134.954v11.323l6.792-5.67ZM19.096.13H.888l9.14 7.565ZM19.89.954v11.293l-6.78-5.634Z"}),n.createElement("path",{style:{fillRule:"evenodd",strokeWidth:0,fillOpacity:1},d:"M19.413 13.336H.578l7.207-5.97L10.012 9.2l2.193-1.85Z"}))},p=o.default.svg.withConfig({displayName:"telefono__Svg",componentId:"sc-1xifc1n-0"})([""]),f=function(e){return n.createElement(p,Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 997 1280"},e),n.createElement("path",{d:"M304.5 1.8c-2.7 1-23 12.2-45 24.8-22 12.7-50.6 29.1-63.5 36.4-30.1 17.1-35 21.9-38.2 37.4-2.3 10.6-1.5 12.4 27.3 61.5 48 82 146.4 245.3 150.5 250 5.4 5.9 13.2 10.6 21.3 12.7 11.3 2.8 11.7 2.7 65-27.9 26.2-15.1 55.3-31.8 64.8-37.1 23.6-13.4 29.8-20.4 32.5-37 2.1-12.9 1.2-15.1-21.1-52.1C393.6 97.6 342.7 13.9 340.1 10.8c-7.3-8.7-24.5-13.1-35.6-9zM119.3 136c-53 15.2-89.2 53.7-106.9 113.9-28.5 96.7-6.6 249 60.1 418.1 67.5 171 169.6 333.4 281 446.9 95.4 97.1 186.4 150.6 277.5 163.2 12.7 1.8 50.8 1.8 62.5.1 21.8-3.3 41.2-8.5 60.4-16.1 8.6-3.5 17.7-7.6 18.9-8.6.5-.4-87.2-153.1-97.5-169.5-10.5-16.8-31.1-50.4-63-103-17-27.9-14-25.7-29.3-21.9-12.8 3.1-39.4 3.4-54.5.5-33.1-6.1-71.1-25.1-105-52.3-13.9-11.1-39.7-36.3-52.7-51.3-19.7-22.8-39.7-50.6-56.3-78.5-10.1-17-15.1-27-21.8-44-16.8-42.6-27.2-81.9-32.3-122-2.5-19.8-2.3-54 .5-72.2 5.3-35.3 17.8-64.7 37.7-89 3-3.6 5.2-6.8 5-7.2-.2-.3-5.6-9.5-12-20.4-16.8-28.6-41.4-73.2-81.6-147.7-49.2-91.4-77.6-142-79.5-141.9-.5 0-5.6 1.3-11.2 2.9zM769 811.4c-1.9.8-23.7 13-48.5 27.3-24.7 14.3-53.3 30.6-63.5 36.3-19.9 11.3-26.8 16.9-30.8 25.1-5.1 10.5-4.8 21.5.7 31.3 70.1 124.4 167.9 292.7 173.4 298.4 1.8 1.8 6.1 4.8 9.7 6.5 5.9 2.9 7.3 3.2 16 3.2h9.6l15.9-9.2c8.8-5 38.5-22 66-37.7 27.5-15.8 51.2-29.9 52.8-31.4 4.1-3.8 7.6-9.5 9.8-16 2.2-6.3 2.6-19.9.7-25.3-.6-1.9-10-18.5-20.8-36.9-10.9-18.4-40.3-68.8-65.5-112-65.6-112.5-85.4-146-88.7-150.2-1.8-2.3-5.5-5-9.6-7-5.7-2.8-7.8-3.3-15.2-3.5-5.3-.2-9.8.3-12 1.1z"}))},d=o.default.footer.withConfig({displayName:"footer__Ffooter",componentId:"sc-r54yyk-0"})(["height:100px;transition:0.5s box-shadow;.oscuro &{box-shadow:0px -8px 6px 0 #040404;}.claro &{box-shadow:0px -8px 6px 0 #0002;}"]),h=o.default.div.withConfig({displayName:"footer__Isquierda",componentId:"sc-r54yyk-1"})(["position:fixed;height:350px;width:80px;bottom:calc(50% - 175px);left:2%;display:flex;flex-direction:column;justify-content:space-around;align-items:center;a:active{.claro &{transition:none;box-shadow:4px 4px 6px 0 #0002,-4px -4px 6px #fff,3px 3px 5px 0 #0002 inset,-2px -2px 5px #fff inset;}.oscuro &{transition:none;box-shadow:4px 4px 6px 0 #040404,-4px -4px 6px #363636,3px 3px 5px 0 #040404 inset,-2px -2px 5px #363636 inset;}}a{transition:0.2s transform,0.2s box-shadow;width:60px;height:60px;border-radius:50%;display:flex;justify-content:center;align-items:center;.claro &{border:2px solid #ffffff4d;box-shadow:4px 4px 5px 0 #0002,-4px -4px 5px #fff;}.oscuro &{border:2px solid #0000004d;box-shadow:4px 4px 6px 0 #040404,-4px -4px 6px #363636;}svg{height:30px;width:30px;fill:blue;transition:.5s fill;path{border-radius:0;}}.claro & svg{fill:#000;}.oscuro & svg{fill:#fff;}}a:hover{transform:scale(1.1);svg{transition:none;fill:#f00;filter:drop-shadow(0px 0px 20px #f00);}}@media (max-width:600px){padding-top:10px;height:60px;width:100%;position:static;display:flex;flex-wrap:wrap;justify-content:center;a{width:50px;height:50px;svg{margin:0 15px;}}}"]),m=o.default.section.withConfig({displayName:"footer__Section",componentId:"sc-r54yyk-2"})(["height:100px;display:flex;justify-content:center;align-items:center;.oscuro &{background-color:#171717;transition:.5s background-color;}.claro &{background-color:#E6E6E6;transition:.5s background-color;}.oscuro & h4{text-align:center;color:#dde4ff;}.claro & h4{text-align:center;color:#000;}"]),x=function(){return n.createElement(d,null,n.createElement(h,null,n.createElement("a",{title:"Linkedin",href:"https://www.linkedin.com/in/ronny-minda-a44261214/",target:"_blank",rel:"noopener noreferrer"},n.createElement(a,null)),n.createElement("a",{title:"Correo",href:"mailto:ronny.michael.minda.vera@gmail.com",target:"_blank",rel:"noopener noreferrer"},n.createElement(u,null)),n.createElement("a",{title:"GitHub",href:"https://github.com/ronny-minda",target:"_blank",rel:"noopener noreferrer"},n.createElement(s.Z,null)),n.createElement("a",{title:"Twitter",href:"https://twitter.com/MichaelMinda7",target:"_blank",rel:"noopener noreferrer"},n.createElement(l,null)),n.createElement("a",{title:"Telefono",href:"tel:0993105654",target:"_blank",rel:"noopener noreferrer"},n.createElement(f,null))),n.createElement(m,null,n.createElement("h4",null,"© Sitio construido por Ronny Minda ",(new Date).getFullYear())))},y=r(1597),b=o.default.svg.withConfig({displayName:"logo__Svg",componentId:"sc-94aec0-0"})(["cursor:pointer;g{path{fill:#c93939;transition:.5s;}}&:hover{path{fill:#f00;filter:drop-shadow(0px 0px 5px #ff8989);}}"]),g=function(e){return n.createElement(b,Object.assign({width:372.661,height:"31.9mm",viewBox:"0 0 98.6 31.9",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("g",{style:{display:"inline"}},n.createElement("path",{style:{display:"inline",fillOpacity:1,strokeWidth:0,strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:4,strokeDasharray:"none",strokeOpacity:1},d:"m75.757 31.163 20.826-11.917L77.851 8.47V4.906l18.695 10.818v-2.646L75.548.954v8.85l15.845 9.148-13.342 7.703v-2.688l7.867-4.542-2.695-1.556-7.715 4.454z"}),n.createElement("path",{style:{display:"inline",mixBlendMode:"normal",fillOpacity:1,strokeWidth:0,strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:4,strokeDasharray:"none",strokeOpacity:1},d:"M47.485 26.768 27.243 6.526v5.325l15.054 15.053z"}),n.createElement("path",{style:{display:"inline",fillOpacity:1,strokeWidth:0,strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:4,strokeDasharray:"none",strokeOpacity:1},d:"M36.836 26.796 27.25 17.21v5.136l4.513 4.513zM27.243 6.59H41.09s6.605 1.594 6.465 6.884c-.14 5.29-5.884 7.48-5.884 7.48l-3.758-3.758h3.037s2.799-.56 2.91-3.246c.113-2.687-2.966-3.89-2.966-3.89H30.776ZM53.596 26.939V10.7l7.239 8.617L71.29 6.68h-3.447l-6.932 8.272-6.97-8.272h-3.562v20.298z"}),n.createElement("path",{style:{display:"inline",fillOpacity:1,strokeWidth:0,strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:4,strokeDasharray:"none",strokeOpacity:1},d:"M71.29 26.9V9.13L60.835 21.807l-5.937-6.97v4.327l5.937 6.97 7.315-8.885-.039 9.69zM22.86 1.072 2.032 12.99l18.732 10.775v3.565L2.07 16.512v2.645L23.07 31.281v-8.85L7.223 13.284 20.565 5.58v2.688L12.7 12.81l2.695 1.556 7.714-4.454z"})))},v=o.default.header.withConfig({displayName:"header__HHeader",componentId:"sc-31ozxh-0"})([".oscuro &{background-color:#171717;box-shadow:0px 8px 6px 0 #040404;div{}nav{li{border:2px solid #0000004d;box-shadow:4px 4px 6px 0 #040404,-4px -4px 6px #363636;a{color:#fff;}}li:active{border:2px solid #0000004d;transition:none;box-shadow:4px 4px 6px 0 #040404,-4px -4px 6px #363636,3px 3px 5px 0 #040404 inset,-2px -2px 5px #363636 inset;a{color:#fff;}}}}.claro &{background-color:#efeeee;box-shadow:0px 8px 6px 0 #0002;div{}nav{li{border:2px solid #ffffff4d;box-shadow:4px 4px 5px 0 #0002,-4px -4px 5px #fff;a{color:#000;}}li:active{border:2px solid #ffffff4d;transition:none;box-shadow:4px 4px 6px 0 #0002,-4px -4px 6px #fff,3px 3px 5px 0 #0002 inset,-2px -2px 5px #fff inset;a{color:#000;}}}}transition:.5s background-color,.5s box-shadow;backdrop-filter:blur(20px);display:flex;align-items:center;justify-content:space-around;width:100%;svg{margin:0px;height:65px;width:150px;}nav{display:flex;li{list-style:none;transition:0.1s ease-out transform,.5s ease-out border,.5s ease-out box-shadow,.5s ease-out background-color;margin:0 10px;padding:5px 10px;border-radius:5px;a{text-decoration:none;color:#fff;height:100%;width:100%;}}li:hover{transform:scale(1.01);}}"]),w=function(){return n.createElement(v,null,n.createElement(y.Link,{to:"/"},n.createElement(g,null)),n.createElement("nav",null,n.createElement("li",null,n.createElement(y.Link,{to:"/#FRONTEND"},"FRONTEND")),n.createElement("li",null,n.createElement(y.Link,{to:"/#BACKEND"},"BACKEND"))))},E=function(e){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 312.812 312.812",style:{enableBackground:"new 0 0 312.812 312.812"},xmlSpace:"preserve"},e),n.createElement("path",{d:"M305.2 178.159c-3.2-.8-6.4 0-9.2 2-10.4 8.8-22.4 16-35.6 20.8-12.4 4.8-26 7.2-40.4 7.2-32.4 0-62-13.2-83.2-34.4-21.2-21.2-34.4-50.8-34.4-83.2 0-13.6 2.4-26.8 6.4-38.8 4.4-12.8 10.8-24.4 19.2-34.4 3.6-4.4 2.8-10.8-1.6-14.4-2.8-2-6-2.8-9.2-2-34 9.2-63.6 29.6-84.8 56.8-20.4 26.8-32.4 60-32.4 96 0 43.6 17.6 83.2 46.4 112s68 46.4 112 46.4c36.8 0 70.8-12.8 98-34 27.6-21.6 47.6-52.4 56-87.6 1.6-5.6-1.6-11.2-7.2-12.4z"}))},T=function(e){return n.createElement("svg",Object.assign({viewBox:"0 0 312.812 312.812",style:{enableBackground:"new 0 0 312.812 312.812"},xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M156.523 78.424c-42.995 0-77.973 34.985-77.973 77.98 0 42.995 34.978 77.98 77.973 77.98 42.988 0 77.973-34.978 77.973-77.98s-34.985-77.98-77.973-77.98zM156.523 55.503c-8.403 0-15.214-6.81-15.214-15.207v-24.34c0-8.404 6.81-15.215 15.214-15.215 8.403 0 15.214 6.81 15.214 15.214v24.341c0 8.397-6.818 15.207-15.214 15.207zM156.523 257.284c-8.403 0-15.214 6.811-15.214 15.214v24.335c0 8.41 6.81 15.22 15.214 15.22 8.403 0 15.214-6.81 15.214-15.22v-24.335c0-8.403-6.818-15.214-15.214-15.214zM227.857 85.056c-5.935-5.942-5.935-15.572 0-21.515l17.213-17.213c5.936-5.935 15.573-5.935 21.515 0 5.942 5.942 5.942 15.58 0 21.515l-17.213 17.213c-5.935 5.942-15.566 5.942-21.515 0zM85.181 227.746c-5.942-5.95-15.572-5.95-21.514 0l-17.213 17.206c-5.936 5.935-5.943 15.58 0 21.515 5.942 5.935 15.579 5.935 21.514 0l17.213-17.22c5.943-5.936 5.943-15.573 0-21.501zM257.41 156.397c0-8.403 6.81-15.214 15.214-15.214h24.341c8.403 0 15.214 6.811 15.214 15.214 0 8.404-6.81 15.208-15.214 15.208h-24.341c-8.403 0-15.214-6.804-15.214-15.208zM55.629 156.397c0-8.403-6.811-15.214-15.214-15.214H16.08c-8.404 0-15.215 6.811-15.215 15.214 0 8.404 6.811 15.208 15.215 15.208h24.34c8.397 0 15.208-6.804 15.208-15.208zM227.857 227.746c5.942-5.936 15.58-5.936 21.515 0l17.213 17.213c5.942 5.928 5.942 15.572 0 21.508-5.942 5.935-15.572 5.935-21.515 0l-17.213-17.214c-5.942-5.942-5.942-15.572 0-21.507zM85.181 85.056c5.943-5.942 5.943-15.572 0-21.515L67.968 46.335c-5.942-5.942-15.572-5.942-21.514 0-5.943 5.935-5.943 15.572 0 21.508l17.213 17.213c5.942 5.95 15.572 5.95 21.514 0z"}))},k=(0,o.createGlobalStyle)(["*{box-sizing:border-box;margin:0;padding:0;font-family:'Poppins',sans-serif;scroll-behavior:smooth;}*,*:before,*::after{box-sizing:inherit;}body{width:100%;}body::-webkit-scrollbar{width:12px;}.oscuro{background-color:#171717;&::-webkit-scrollbar-track{background-color:#2E2E2E;}&::-webkit-scrollbar-thumb{background-color:#171717;border-radius:10px;}}.claro{background-color:#E6E6E6;&::-webkit-scrollbar-track{background-color:#CBCBCB;}&::-webkit-scrollbar-thumb{background-color:#E6E6E6;border-radius:10px;}}.logoty{position:fixed;z-index:0;top:0;left:0;height:100px;width:100px;}"]),O=o.default.div.withConfig({displayName:"layout__Div",componentId:"sc-14ho7np-0"})(["position:fixed;z-index:999999;bottom:10px;right:10px;border-radius:50%;height:80px;width:80px;transition:.5s background-color;display:flex;justify-content:center;align-items:center;.claro &{background-color:#fff;svg{height:70%;width:70%;fill:#000;}svg:hover{fill:#f00;filter:drop-shadow(0px 0px 5px #f00);}}.oscuro &{background-color:#0E0E0E;svg{height:70%;width:70%;fill:#fff;}svg:hover{fill:#f00;filter:drop-shadow(0px 0px 5px #f00);}}.claro &:active{transition:none;box-shadow:3px 3px 5px 0 #0002 inset,-2px -2px 5px #fff inset;background-color:#E6E6E6;}.oscuro &:active{transition:none;box-shadow:3px 3px 5px 0 #040404 inset,-2px -2px 5px #363636 inset;background-color:#171717;}"]),C=function(e){var t=e.children;(0,n.useEffect)((function(){localStorage.getItem("tema")||localStorage.setItem("tema","claro")}),[]);var r=(0,n.useState)(""),o=r[0],i=r[1];(0,n.useEffect)((function(){var e=localStorage.getItem("tema");i(e)}),[o]);return(0,n.useEffect)((function(){var e=document.body;e.setAttribute("class",o),setTimeout((function(){e.setAttribute("style","transition: .5s background-color;")}),1)}),[o]),n.createElement(n.Fragment,null,n.createElement(n.StrictMode,null,n.createElement(k,null),n.createElement("div",null,n.createElement(w,null),n.createElement("main",null,t," "),n.createElement(x,null),n.createElement(O,{onClick:function(){"oscuro"===o?(i("claro"),localStorage.setItem("tema","claro")):(i("oscuro"),localStorage.setItem("tema","oscuro"))}},"claro"===o?n.createElement(T,null):n.createElement(E,null)))))}},8034:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){return n.createElement("svg",Object.assign({viewBox:"0 0 20.1 19.6",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M8.924.158c-4.6.5-8.3 4.2-8.8 8.7-.5 4.7 2.2 8.9 6.3 10.5.3.1.6-.1.6-.5v-1.6s-.4.1-.9.1c-1.4 0-2-1.2-2.1-1.9-.1-.4-.3-.7-.6-1-.3-.1-.4-.1-.4-.2 0-.2.3-.2.4-.2.6 0 1.1.7 1.3 1 .5.8 1.1 1 1.4 1 .4 0 .7-.1.9-.2.1-.7.4-1.4 1-1.8-2.3-.5-4-1.8-4-4 0-1.1.5-2.2 1.2-3-.1-.2-.2-.7-.2-1.4 0-.4 0-1 .3-1.6 0 0 1.4 0 2.8 1.3.5-.2 1.2-.3 1.9-.3s1.4.1 2 .3c1.3-1.3 2.8-1.3 2.8-1.3.2.6.2 1.2.2 1.6 0 .8-.1 1.2-.2 1.4.7.8 1.2 1.8 1.2 3 0 2.2-1.7 3.5-4 4 .6.5 1 1.4 1 2.3v2.6c0 .3.3.6.7.5 3.7-1.5 6.3-5.1 6.3-9.3 0-6-5.1-10.7-11.1-10z"}))}}}]);
//# sourceMappingURL=commons-d0d9b36c058c9f2ad99e.js.map