(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{5941:function(e,t,r){Promise.resolve().then(r.bind(r,9762))},9762:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return List}});var n=r(7437),s=r(2585),o=r(6468),i=r(4606),a=r(4033),l=r(5322),c=r(2265),u=r(2098),d=r.n(u),_=r(5273),f=r(6868);function List(){let{setters:e}=(0,c.useContext)(_.default),t=(0,a.useRouter)(),[r,u]=(0,c.useState)(""),[p,h]=(0,c.useState)([]);(0,c.useEffect)(()=>{let e=localStorage.getItem("token");e||null==t||t.push("/"),getAllJobs()},[t]);let getAllJobs=async()=>{try{let e=await fetch("".concat(l._,"/jobs"));if(!e.ok)return alert("Erro ao buscar servi\xe7os!");let t=await e.json();h(t)}catch(e){alert(e.message)}},m=p&&p.filter(e=>e.title.toLowerCase().includes(r.toLocaleLowerCase())),getJobById=async r=>{e.setJob(r),t.push("/detail")};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{leftIcon:(0,n.jsx)(o.RWZ,{onClick:()=>t.push("/registJob"),className:"icon"}),title:"Lista de Servi\xe7os",rightIcon:(0,n.jsx)(i.HHm,{onClick:()=>t.push("/profile"),className:"icon"})}),(0,n.jsxs)("div",{className:d().container,children:[(0,n.jsx)("input",{type:"search",onChange:e=>{u(e.target.value)},className:d().input,placeholder:"Nome do servi\xe7o"}),(0,n.jsx)("div",{className:d().cardContainer,children:m&&m.map(e=>(0,n.jsxs)("div",{className:d().card,children:[(0,n.jsx)("div",{className:d().title,children:e.title}),(0,n.jsxs)("div",{className:d().cardContent,children:[(0,n.jsx)("b",{children:"Descrip\xe7\xe3o: "}),e.description,(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("b",{children:"Contato: "}),(0,f.a)(String(e.phone)),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("b",{children:"Hor\xe1rio de atendimento: "}),e.period]}),(0,n.jsx)("button",{className:d().btn,onClick:()=>getJobById(e),children:"Entrar em contato"})]},e.id))})]})]})}},2585:function(e,t,r){"use strict";r.d(t,{Z:function(){return Header}});var n=r(7437),s=r(9884),o=r.n(s);function Header(e){let{leftIcon:t,title:r,rightIcon:s}=e;return(0,n.jsxs)("div",{className:o().head,children:[t,(0,n.jsx)("h1",{children:r}),s]})}},5322:function(e,t,r){"use strict";r.d(t,{_:function(){return n}});let n="https://loja-de-servicos-server.vercel.app"},5273:function(e,t,r){"use strict";r.r(t),r.d(t,{GlobalState:function(){return GlobalState}});var n=r(7437),s=r(2265);let o=(0,s.createContext)(null),GlobalState=e=>{let[t,r]=(0,s.useState)([]),[i,a]=(0,s.useState)({id:"",title:"",description:"",phone:"",period:"",provider:""});return(0,n.jsx)(o.Provider,{value:{states:{services:t,job:i},setters:{setJob:a,setServices:r}},children:e.children})};t.default=o},6868:function(e,t,r){"use strict";r.d(t,{a:function(){return convertPhone}});let convertPhone=e=>{let t=e.toString(),r=t.substring(0,2),n=t.substring(2,7),s=t.substring(7,11);return"(".concat(r,") ").concat(n,"-").concat(s)}},2098:function(e){e.exports={container:"list_container__oAgdC",button:"list_button__M9jBU",input:"list_input__LOiXe",title:"list_title__dPjD0",cardContainer:"list_cardContainer__BVj2Q",card:"list_card__OfToO",pulse:"list_pulse__HNGfF",btn:"list_btn__bhlYe"}},9884:function(e){e.exports={head:"Header_head__V4JD5"}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var n,o={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:u,props:o,_owner:a.current}}t.Fragment=o,t.jsx=q,t.jsxs=q},7437:function(e,t,r){"use strict";e.exports=r(622)},4033:function(e,t,r){e.exports=r(290)},1172:function(e,t,r){"use strict";r.d(t,{w_:function(){return GenIcon}});var n=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(s),__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},__rest=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)0>t.indexOf(n[s])&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};function GenIcon(e){return function(t){return n.createElement(IconBase,__assign({attr:__assign({},e.attr)},t),function Tree2Element(e){return e&&e.map(function(e,t){return n.createElement(e.tag,__assign({key:t},e.attr),Tree2Element(e.child))})}(e.child))}}function IconBase(e){var elem=function(t){var r,s=e.attr,o=e.size,i=e.title,a=__rest(e,["attr","size","title"]),l=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,a,{className:r,style:__assign(__assign({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==o?n.createElement(o.Consumer,null,function(e){return elem(e)}):elem(s)}}},function(e){e.O(0,[447,190,971,864,744],function(){return e(e.s=5941)}),_N_E=e.O()}]);