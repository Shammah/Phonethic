(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{115:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return a?o.a.createElement(h,c(c({ref:t},l),{},{components:a})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),r=(a(0),a(115)),i={title:"Introduction",description:"Introduction and motivation to staking Ethereum on your phone",keywords:["ethereum","staking","validator","phone","mobile","android"]},c={id:"introduction",isDocsHomePage:!0,title:"Introduction",description:"Introduction and motivation to staking Ethereum on your phone",source:"@site/docs\\introduction.md",permalink:"/docs/",editUrl:"https://github.com/Shammah/Phonethic/blob/master/docs/introduction.md",sidebar:"sidebar",next:{title:"scrcpy",permalink:"/docs/scrcpy"}},s=[{value:"Why stake on a phone?",id:"why-stake-on-a-phone",children:[]},{value:"What devices can I stake on?",id:"what-devices-can-i-stake-on",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The transition of Ethereum from proof-of-work to proof-of-stake has excited a large amount of people. No longer do we need beefy machines that convert electricity into trust by the use of inefficiency itself. All that is now required is a fairly low-power device, not only putting an end to the power hungry consensus algorithms, but also increasing the network's security. The community has enthusiastically come up with plans and guides that allow participants of the network to stake with cheap and small setups. However, most paths still end up in having the staker purchase dedicated server hardware, of which the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.raspberrypi.org/"}),"Raspberry Pi")," is the most popular. What not might be obvious at first sight, however, is that a lot of folks have an old phone somewhere in their drawers gathering dust. Wouldn't it be nice if we could at least run a validator on this device?"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/introduction/1.png",alt:"Validating with Prysm on a phone"}))),Object(r.b)("h2",{id:"why-stake-on-a-phone"},"Why stake on a phone?"),Object(r.b)("p",null,"There are several benefits to using an (old) phone over purchasing a dedicated server device such as the Raspberry Pi:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"It already has a screen. In the case of a Raspberry you would have to purchase an additional display and possibly power supply."),Object(r.b)("li",{parentName:"ol"},"The phone already has a (virtual) keyboard, so there's no need to purchase an additional one to configure your server, or to swap the one you're currently using on a different computer."),Object(r.b)("li",{parentName:"ol"},"You don't need an additional power supply; you can simply plug it in your charger using a USB cable."),Object(r.b)("li",{parentName:"ol"},"You can easily hook it up to your computer when you need to control your phone. This can for example be easily done through ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/scrcpy"}),"scrcpy"),".")),Object(r.b)("p",null,"Now the device most likely won't have the processor power and memory space to run a beacon chain, but even running only a validator would be a welcoming advance as the staker would have full control over his or her hardware and validator keypairs. Validators can easily listen to a trusted (remote) beacon chain, which means there's less chance of both validators and the beacon chain going down in case of a hardware failure."),Object(r.b)("h2",{id:"what-devices-can-i-stake-on"},"What devices can I stake on?"),Object(r.b)("p",null,"For now the focus of this guide will be simply about getting Prysm running on an Android phone. Although there are other (more suitable) clients that may or may not natively support mobile phones, such as Nimbus, more client diversity would be a good thing. We don't want to end up in a situation where one client has a majority on the network, as a single bug in a single client could potentially damage the network severely. Some clients such as Prysm require a bit of work before they work on your phone, so a guide like this is needed to prevent such would-be monopoly situations from happening. So far I've only had my ",Object(r.b)("em",{parentName:"p"},"Samsung Galaxy S7")," to test on, and it's perfectly possible to run a validator on it without having to root the device."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"We will be doing everything as the ",Object(r.b)("em",{parentName:"p"},"root")," user. This is usually highly discouraged for security reasons, but for simplicity of this guide we will do this anyway."))),Object(r.b)("p",null,"In case you're wondering if your phone can run a validator, you may compare its specifications with those of the Samsung Galaxy S7:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Component"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Specs"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Operating System"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Android 8")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Chipset"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exynos 8890 Octa (14 nm)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CPU"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Octa-core (4x2.3 GHz Mongoose & 4x1.6 GHz Cortex-A53)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"GPU"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Mali-T880 MP12")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Memory (RAM)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"4GB")))))}p.isMDXComponent=!0}}]);