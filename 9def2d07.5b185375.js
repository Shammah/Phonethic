(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{109:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var o=r(2),n=r(6),a=(r(0),r(115)),c={title:"scrcpy",description:"How to display and control your Android phone on your computer with USB",keywords:["android","usb","scrcpy","developer"]},p={id:"scrcpy",isDocsHomePage:!1,title:"scrcpy",description:"How to display and control your Android phone on your computer with USB",source:"@site/docs\\scrcpy.md",permalink:"/docs/scrcpy",editUrl:"https://github.com/Shammah/Phonethic/blob/master/docs/scrcpy.md",sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Termux",permalink:"/docs/termux"}},i=[{value:"Developer Mode",id:"developer-mode",children:[]},{value:"Downloading scrcpy",id:"downloading-scrcpy",children:[]}],l={rightToc:i};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Because working on a small device such as a phone can be quite cumbersome at times, it is highly recommended to operate your phone through your desktop computer or laptop instead. This way you'll have access to a bigger and better screen screen, and easier access with the comfort of your own mouse and keyboard."),Object(a.b)("h2",{id:"developer-mode"},"Developer Mode"),Object(a.b)("p",null,"In order to achieve this, we first have to enable the ",Object(a.b)("em",{parentName:"p"},"developer mode")," on our phone. This can be achieved by going to ",Object(a.b)("strong",{parentName:"p"},"Settings -> About Phone -> Software Information"),"."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/img/scrcpy/1.png",alt:"About phone"}))," ",Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/img/scrcpy/2.png",alt:"Software Information"}))),Object(a.b)("p",null,"Once arrived at this screen, you should then quickly and repeatedly press the ",Object(a.b)("strong",{parentName:"p"},"Build number")," label or button a couple of times. After a few taps you will get a small notification that ",Object(a.b)("em",{parentName:"p"},"developer mode")," is now activated."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/img/scrcpy/3.png",alt:"Build number"}))),Object(a.b)("p",null,"Now once you navigate back to the ",Object(a.b)("strong",{parentName:"p"},"Settings")," menu, you wil now see ",Object(a.b)("strong",{parentName:"p"},"Developer options")," button at the bottom of the menu. Open this menu and look for the ",Object(a.b)("strong",{parentName:"p"},"USB debugging")," toggle under the ",Object(a.b)("em",{parentName:"p"},"debugging")," header. Simply toggle this on and press OK."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/img/scrcpy/4.png",alt:"Developer options"}))," ",Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/img/scrcpy/5.png",alt:"Toggle"}))),Object(a.b)("h2",{id:"downloading-scrcpy"},"Downloading scrcpy"),Object(a.b)("p",null,"The next step is to download ",Object(a.b)("em",{parentName:"p"},"scrcpy")," on your desktop computer or laptop. This small program will allow you to stream your phone to your computer and control it by mouse and keyboard. You can download it from ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Genymobile/scrcpy/releases"}),"the official GitHub repository"),"."),Object(a.b)("p",null,"Connect your phone to your computer with an USB cable, extract your downloaded copy of scrcpy and launch it by starting ",Object(a.b)("inlineCode",{parentName:"p"},"scrcpy.exe"),". Allow the incoming request on your phone, and you should now be able to see and control your phone through your computer."))}u.isMDXComponent=!0},115:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||a;return r?n.a.createElement(m,p(p({ref:t},l),{},{components:r})):n.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var l=2;l<a;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);