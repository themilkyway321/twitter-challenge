(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[114],{1092:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tweet",function(){return n(429)}])},7726:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}function u(e){var t=(0,r.useState)({loading:!1,data:void 0,error:void 0}),n=t[0],o=t[1];return[function(t){o((function(e){return i({},e,{loading:!0})})),fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json().catch((function(){}))})).then((function(e){return o((function(t){return i({},t,{data:e,loading:!1})}))})).catch((function(e){return o((function(t){return i({},t,{error:e,loading:!1})}))}))},i({},n)]}},429:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),o=n(1163),i=n(7294),u=n(7536),a=n(7726);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(){var e=(0,o.useRouter)(),t=(0,u.cI)(),n=t.register,c=t.handleSubmit,l=s((0,a.Z)("/api/tweet"),2),d=l[0],h=l[1],b=h.loading,p=h.data;return(0,i.useEffect)((function(){(null===p||void 0===p?void 0:p.ok)&&e.push("/tweet/".concat(p.tweet.id))}),[p,e]),(0,r.jsx)("form",{onSubmit:c((function(e){b||d(e)})),children:(0,r.jsxs)("div",{children:[(0,r.jsx)("input",f({},n("description",{required:!0}),{type:"text",placeholder:"What is happening?!"})),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"w-full cursor-pointer text-gray-600 hover:text-orange-500 hover:border-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md",children:[(0,r.jsx)("svg",{className:"h-12 w-12",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:(0,r.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),(0,r.jsx)("input",{type:"file",className:"hidden"})]})}),(0,r.jsx)("button",{children:"Tweet"})]})})}}},function(e){e.O(0,[998,774,888,179],(function(){return t=1092,e(e.s=t);var t}));var t=e.O();_N_E=t}]);