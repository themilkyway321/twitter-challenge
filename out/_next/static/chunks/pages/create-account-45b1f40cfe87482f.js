(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[398],{8937:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-account",function(){return n(8071)}])},8071:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(4051),c=n.n(r),o=n(5893),a=n(1664),s=n.n(a),l=n(1163),i=n(7294),u=n(7536);function f(e,t,n,r,c,o,a){try{var s=e[o](a),l=s.value}catch(i){return void n(i)}s.done?t(l):Promise.resolve(l).then(r,c)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}function p(){var e=(0,u.cI)(),t=e.register,n=e.handleSubmit,r=(0,l.useRouter)(),a=(0,i.useState)(!1),d=a[0],p=a[1],m=function(){var e,t=(e=c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=9;break}return p(!0),e.next=4,fetch("/api/users/create-account",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:200===(n=e.sent).status&&alert("Account already exists! Please log in!"),201===n.status&&alert("Account created! Please log in!"),405!==n.status&&r.push("/login"),p(!1);case 9:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,c){var o=e.apply(t,n);function a(e){f(o,r,c,a,s,"next",e)}function s(e){f(o,r,c,a,s,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,o.jsxs)("div",{className:"w-full flex my-auto h-[100vh] gap-10",children:[(0,o.jsx)("div",{className:"my-auto",children:(0,o.jsx)("img",{className:"",src:"https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png",alt:""})}),(0,o.jsxs)("div",{className:"mt-48",children:[(0,o.jsxs)("h1",{className:"py-10 text-[52px] font-extrabold flex items-center gap-4",children:[" ",(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"90px",height:"90px",children:(0,o.jsx)("path",{fill:"#03A9F4",d:"M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"})}),"Happening now."]}),(0,o.jsx)("h2",{className:"text-center text-4xl font-bold mt-10",children:" Join Twitter today."}),(0,o.jsxs)("form",{onSubmit:n(m),className:"mt-10 flex flex-col gap-3 mx-auto px-10 w-[80%]",children:[(0,o.jsx)("input",x({},t("name",{required:!0}),{type:"text",placeholder:"Name",className:"border-2 w-full p-3 rounded-lg focus:outline-none focus:border-[#119ffb]"})),(0,o.jsx)("input",x({},t("email",{required:!0}),{type:"email",placeholder:"Email",className:"border-2 w-full p-3 rounded-lg focus:outline-none focus:border-[#119ffb]"})),(0,o.jsx)("button",{className:"bg-[#119ffb] mx-auto px-20 py-2 rounded-3xl text-white font-bold my-4 hover:bg-blue-500",children:"Create Account"})]}),(0,o.jsxs)("div",{className:"mt-20 text-center flex-col mx-auto",children:[(0,o.jsx)("h3",{className:"text-2xl font-medium",children:"Already have an account?"}),(0,o.jsx)(s(),{href:"/login",children:(0,o.jsx)("p",{className:"cursor-pointer mx-auto mt-5 w-[250px] py-1.5 rounded-3xl border-2 text-[#119ffb] font-semibold text-md hover:bg-blue-100 transition-all",children:"Sign in"})})]})]})]})}}},function(e){e.O(0,[998,664,774,888,179],(function(){return t=8937,e(e.s=t);var t}));var t=e.O();_N_E=t}]);