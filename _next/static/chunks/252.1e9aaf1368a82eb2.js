"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{4252:function(t,e,n){n.r(e),n.d(e,{default:function(){return Ot}});var r,i=n(9499),o=n(7294),s=n(1163),a=n(8457),c=n(3725),l=n(5933),h=n(1383),u=n(4730),f=n(3918),d=n(1664),p=n(9876),g=n(6417),v=n(3894),b=n(5893);function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}!function(t){t.TOGGLE="TOGGLE",t.CLOSE="CLOSE"}(r||(r={}));var m={isOpen:!1},j=(0,o.createContext)({state:m,dispatch:function(){return null}});function O(t,e){switch(e.type){case"TOGGLE":return y(y({},t),{},{isOpen:!t.isOpen});case"CLOSE":return y(y({},t),{},{isOpen:!1});default:return t}}var w,P=function(t){var e=t.children,n=(0,o.useReducer)(O,m),r=n[0],i=n[1];return(0,b.jsx)(j.Provider,{value:{state:r,dispatch:i},children:e})},Z=n(8159),z=n(8719),k=n(8716),D=f.ZP.div(w||(w=(0,h.Z)(["\n  --bar-height: 3px;\n  position: relative;\n\n  height: var(--bar-height);\n  min-height: var(--bar-height);\n  background-color: ",';\n\n  &,\n  &:before,\n  &:after {\n    border-radius: 100rem;\n    will-change: transform, opacity;\n    transition: transform 240ms ease-in-out, opacity 240ms ease-in-out;\n  }\n\n  &:before,\n  &:after {\n    content: "";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 100%;\n    height: var(--bar-height);\n    min-height: var(--bar-height);\n    background-color: ',";\n  }\n\n  &:before {\n    transform: translate(-50%, calc(-4 * var(--bar-height)));\n  }\n\n  &:after {\n    transform: translate(-50%, calc(3 * var(--bar-height)));\n  }\n\n  ","\n"])),(function(t){return t.$color}),(function(t){return t.$color}),(function(t){return t.$active?"\n        transform: rotate(-45deg);\n\n        &:before {\n            transform: translate(-50%,-50%) rotate(-90deg);\n        }\n\n        &:after {\n            opacity: 0;\n        }\n      ":""})),C=function(t){var e=t.color,n=void 0===e?"#000":e,r=t.size,i=void 0===r?"36px":r,o=t.active,s=void 0!==o&&o;return(0,b.jsx)(D,{$color:n,$size:i,$active:s})};z.Ts&&(C.displayName="HamburgerIcon");var M,S,E=(0,o.memo)(C),R=n(5233),N=n(6682),T=n(4693),A=n(2642),I=n(5946);function W(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function F(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?W(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var L=(0,f.ZP)(R.Z)(M||(M=(0,h.Z)(["\n  position: relative;\n  top: -3px;\n  width: 80px;\n  height: 80px;\n\n  @media (max-width: 768px) {\n    width: 64px;\n    height: 64px;\n  }\n"]))),H=f.ZP.span(S||(S=(0,h.Z)(['\n  font-size: 56px;\n  font-family: "Pattanakarn-Regular";\n\n  @media (max-width: 768px) {\n    font-size: 32px;\n  }\n']))),V=function(t){var e=(0,a.ff)("gray.800","white");return(0,b.jsxs)(c.kC,F(F({color:e,display:"flex",alignItems:"center",position:"relative",left:"-14px"},t),{},{children:[(0,b.jsx)(L,{width:72,height:72,globeConfig:{radius:3,rings:8,slices:12,globeRenderOffsetPercentage:new N.D4(.5,.5)}}),(0,b.jsx)(d.default,{href:"/",passHref:!0,children:(0,b.jsxs)(T.m$.a,{title:"Mercury Home Page",children:[(0,b.jsx)(H,{children:"SBX"}),(0,b.jsx)(A.TX,{children:I.Z.name})]})})]}))},X=n(4847),q=n(8536);function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?G(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var $=function(t){var e=(0,a.If)(),n=e.colorMode,r=e.toggleColorMode;return(0,b.jsx)(v.zx,B(B({flexShrink:0,variant:"ghost",size:"md",onClick:r},t),{},{children:"light"===n?(0,b.jsx)(q.n,{size:"12px"}):(0,b.jsx)(X.v,{size:"12px"})}))},_=(0,o.memo)($),Y=n(4678),U=function(t){var e,n,r=t.title,i=Z.xE.length&&Z.xE.filter((function(t){return t.title===r}));if(!i.length)return(0,b.jsx)(b.Fragment,{});var o=(null===(e=i[0])||void 0===e?void 0:e.badge)||"New",s=(null===(n=i[0])||void 0===n?void 0:n.colorScheme)||"green";return(0,b.jsx)(b.Fragment,{children:i.length>0&&(0,b.jsx)(Y.Vp,{size:"sm",borderRadius:"full",variant:"solid",colorScheme:s,children:o})})};U.displayName="MenuItemTag";var K=(0,o.memo)(U),Q=n(5214),J=n(7375),tt=n(4737),et=n(5901);function nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var rt=function(){var t=(0,s.useRouter)(),e=(0,o.useContext)(j),n=e.state,a=e.dispatch,l=(0,o.useCallback)((function(){a({type:r.TOGGLE})}),[a]),h=(0,o.useCallback)((function(){a({type:r.CLOSE})}),[a]);return(0,o.useEffect)((function(){return t.events.on("routeChangeStart",h),function(){t.events.off("routeChangeStart",h)}}),[t]),(0,b.jsxs)(Q.dy,{isOpen:n.isOpen,onClose:l,placement:"right",children:[(0,b.jsx)(Q.P1,{}),(0,b.jsxs)(Q.sc,{children:[(0,b.jsx)(Q.cC,{}),(0,b.jsx)(Q.Ng,{children:(0,b.jsx)(c.Kq,{mt:10,w:"full",spacing:2,children:Z.DH.map((function(t,e){return(0,b.jsx)(it,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?nt(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t),e)}))})})]})]})};z.Ts&&(rt.displayName="MobileNavbar");var it=(0,o.memo)((function(t){var e=t.title,n=t.subitems,r=t.href;return(0,b.jsx)(b.Fragment,{children:n?(0,b.jsx)(ot,{href:r,title:e,subitems:n}):(0,b.jsx)(d.default,{href:r,passHref:!0,children:(0,b.jsx)(v.zx,{justifyContent:"start",isFullWidth:!0,variant:"ghost",children:e})})})}));z.Ts&&(it.displayName="MobileNavItem");var ot=function(t){var e=t.title,n=t.subitems,r=(0,J.qY)(),i=r.isOpen,o=r.onToggle;return(0,b.jsxs)(c.Kq,{align:"start",w:"full",spacing:2,onClick:o,children:[(0,b.jsx)(v.zx,{isFullWidth:!0,isActive:i,variant:"ghost",children:(0,b.jsxs)(c.kC,{as:"p",w:"full",justify:"space-between",align:"center",children:[e,(0,b.jsx)(tt.JO,{as:p.v4,transition:"all .25s ease-in-out",transform:i?"rotate(180deg)":"",w:6,h:6})]})}),(0,b.jsx)(et.UO,{in:i,animateOpacity:!0,style:{width:"100%",marginTop:"0!important"},children:(0,b.jsx)(c.Kq,{ml:2,pl:4,borderLeft:1,borderStyle:"solid",borderColor:(0,a.ff)("gray.200","gray.600"),align:"start",w:"full",children:i&&n.map((function(t,e){return(0,b.jsx)(at,{title:t.title,href:t.href,subitems:t.subitems},e)}))})})]})};z.Ts&&(ot.displayName="MobileNavSubitems");var st=(0,o.memo)((function(){return(0,b.jsx)(c.xu,{w:"full",children:(0,b.jsx)(c.iz,{})})}));z.Ts&&(st.displayName="MobileNavItemDivider");var at=(0,o.memo)((function(t){var e=t.title,n=t.href;return(0,b.jsx)(b.Fragment,{children:"---"==e?(0,b.jsx)(st,{}):(0,b.jsx)(b.Fragment,{children:n?(0,b.jsx)(d.default,{href:n,passHref:!0,children:(0,b.jsx)(c.rU,{rounded:"lg",_hover:{bg:(0,a.ff)("gray.100","whiteAlpha.200"),textDecoration:"none"},w:"full",py:2,px:4,children:(0,b.jsxs)(c.kC,{as:"span",align:"center",children:[(0,b.jsx)(c.xv,{mr:"auto",as:"span",children:e}),(0,b.jsx)(K,{title:e})]})})}):(0,b.jsxs)(c.kC,{w:"full",py:2,px:4,children:[(0,b.jsx)(c.xv,{mr:"auto",as:"span",children:e}),(0,b.jsx)(K,{title:e})]})})})}));z.Ts&&(at.displayName="MobileNavItemSubitem");var ct,lt=(0,o.memo)(rt),ht=["isDark","justifyContent","items","startItems","endItems","children"];function ut(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ft(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ut(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ut(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var dt=function(t){var e=t.isDark,n=t.justifyContent,r=void 0===n?"space-between":n,i=t.items,o=t.startItems,s=t.endItems,a=t.children,l=(0,u.Z)(t,ht),h=e?"whiteAlpha.900":"currentColor";return(0,b.jsx)(P,{children:(0,b.jsxs)(c.xu,ft(ft({py:5,sx:(0,k.Z)()},l),{},{children:[(0,b.jsxs)(c.kC,{w:"100%",alignItems:"center",justifyContent:r,children:[o||(0,b.jsx)(V,{color:h}),(0,b.jsx)(c.Ug,{ml:"auto",as:"nav",spacing:[0,0,1,1],display:{base:"none",md:"flex"},children:(0,b.jsx)(pt,{isDark:e,items:i||Z.DH})}),s||(0,b.jsxs)(c.Ug,{children:[(0,b.jsx)(_,{}),(0,b.jsx)(bt,{})]})]}),a||(0,b.jsx)(lt,{})]}))})};z.Ts&&(dt.displayName="NavbarDefault");var pt=(0,o.memo)((function(t){var e=t.isDark,n=t.items,r={color:e?"whiteAlpha.900":"inherit",_hover:{bg:e?(0,a.ff)("whiteAlpha.300","whiteAlpha.200"):(0,a.ff)("blackAlpha.100","whiteAlpha.200")},_active:{bg:e?(0,a.ff)("whiteAlpha.500","whiteAlpha.300"):(0,a.ff)("blackAlpha.200","whiteAlpha.300")}};return(0,b.jsx)(b.Fragment,{children:n.map((function(t,e){return null!==t&&void 0!==t&&t.subitems?(0,b.jsxs)(g.v2,{id:t.title,isLazy:!0,children:[(0,b.jsx)(g.j2,ft(ft({variant:"ghost",as:v.zx,rightIcon:(0,b.jsx)(p.v4,{}),fontSize:"xl"},r),{},{children:t.title})),(0,b.jsx)(g.qy,{overflowX:"auto",maxHeight:"75vh",zIndex:"dropdown",sx:(0,k.Z)(),children:t.subitems.map((function(t,e){return"---"==t.title?(0,b.jsx)(g.R,{},"".concat(t.title,"-").concat(e)):(0,b.jsx)(gt,ft({},t),"".concat(t.title,"-").concat(e))}))})]},e):(0,b.jsx)(d.default,{href:t.href,passHref:!0,children:(0,b.jsxs)(v.zx,ft(ft({variant:"ghost",fontSize:"xl"},r),{},{children:[t.title,(0,b.jsx)(K,{title:t.title})]}))},e)}))})}));z.Ts&&(pt.displayName="AllMenu");var gt=function(t){var e=t.title,n=t.href;return(0,b.jsx)(b.Fragment,{children:n?(0,b.jsx)(d.default,{href:n,passHref:!0,children:(0,b.jsxs)(g.sN,{justifyContent:"space-between",children:[e,(0,b.jsx)(K,{title:e})]})}):(0,b.jsxs)(c.kC,{py:"0.4rem",px:"0.8rem",justifyContent:"space-between",children:[e,(0,b.jsx)(K,{title:e})]})})};z.Ts&&(gt.displayName="MenuSubItem");var vt=f.ZP.button(ct||(ct=(0,h.Z)(["\n  --size: 80px;\n  width: var(--size);\n  height: var(--size);\n  min-width: var(--size);\n  min-height: var(--size);\n\n  position: fixed;\n  bottom: 5rem;\n  right: 2rem;\n\n  padding: 10px;\n  background: #000;\n  color: #fff;\n  border-radius: 100rem;\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);\n\n  @media (max-width: 768px) {\n    --size: 48px;\n    bottom: 5rem;\n    right: 1rem;\n  }\n"]))),bt=(0,o.memo)((function(){var t=(0,a.If)().colorMode,e=(0,o.useContext)(j),n=e.state,i=e.dispatch,s=(0,o.useCallback)((function(){i({type:r.TOGGLE})}),[i]);return(0,b.jsx)(vt,{onClick:s,$dark:"dark"===t,children:(0,b.jsx)(E,{active:n.isOpen,color:"#fff"})})}));z.Ts&&(bt.displayName="MobileNavButton");var xt=(0,o.memo)(dt);function yt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function mt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?yt(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var jt=function(t){var e=t.isDark,n=void 0!==e&&e,r=t.isSticky,i=void 0!==r&&r,h=(0,o.useContext)(l.RC),u=(h.state,h.dispatch),f=(0,a.If)().colorMode,d=(0,s.useRouter)().query.modal,p=i?{zIndex:"sticky",w:"full",pos:"fixed",bg:"transparent",background:"light"===f?"var(--chakra-colors-white)":"var(--chakra-colors-gray-800)",transitionProperty:"background-color",transitionDuration:"var(--chakra-transition-duration-normal)"}:{};return(0,o.useEffect)((function(){"account"===d&&u({type:l.w_.OPEN})}),[d]),(0,b.jsx)(c.xu,mt(mt({py:1},p),{},{children:(0,b.jsx)(c.W2,{"data-testid":"container",maxW:"container.xl",children:(0,b.jsx)(xt,{isDark:n})})}))},Ot=(0,o.memo)(jt)},5946:function(t,e){e.Z={name:"SBX",company:"SBX",slogan:"SBX",description:"",address:"",purchase:"https://creativemarket.com/themebiotic"}},8716:function(t,e,n){var r=n(8457),i=n(4693);e.Z=function(){var t=(0,r.ff)("blackAlpha.400","whiteAlpha.400"),e=(0,i.dQ)("colors","blackAlpha.400"),n=(0,i.dQ)("colors","whiteAlpha.400"),o=(0,r.ff)(e,n);return{"&:hover::-webkit-scrollbar":{height:"8px",width:"8px"},"::-webkit-scrollbar":{height:"2px",width:"2px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{backgroundColor:t,borderRadius:"20px"},"&":{scrollbarColor:"".concat(o," ").concat("transparent"),scrollbarWidth:"thin"}}}},5233:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(1383),i=n(7294),o=n(3918),s=n(6682),a=function(){return n.e(840).then(n.t.bind(n,840,23))};var c,l=n(5893),h=o.ZP.canvas(c||(c=(0,r.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  /* z-index: -1; */\n  /* cursor: pointer; */\n  cursor: grab;\n  /* border: 2px dashed red; */\n"]))),u=function(t){var e=t.className,n=t.width,r=t.height,o=t.globeConfig,c=(0,i.useRef)(null);return(0,i.useEffect)((function(){var t=c.current;if(t){var e=n||t.getBoundingClientRect().width,i=r||t.getBoundingClientRect().height;t.width=e,t.height=i,function(t){var e,n,r,i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=t.getContext("2d");if(!c)return-1;var l=0,h=0,u=+(t.getAttribute("width")||640),f=+(t.getAttribute("height")||480),d=new s.D4(u/2,f/2),p=u;null!==(e=o.globeRenderOffsetPercentage)&&void 0!==e&&e.x&&(p*=o.globeRenderOffsetPercentage.x||1),null!==(n=o.globeRenderOffset)&&void 0!==n&&n.x&&(p+=o.globeRenderOffset.x||0);var g=f;null!==o&&void 0!==o&&null!==(r=o.globeRenderOffsetPercentage)&&void 0!==r&&r.y&&(g*=o.globeRenderOffsetPercentage.y||1),null!==(i=o.globeRenderOffset)&&void 0!==i&&i.y&&(g+=(null===o||void 0===o?void 0:o.globeRenderOffset.y)||0);var v=new s.TH(c,new s.D4(p,g),u,f,o.radius,o.rings,o.slices),b=0,x=0;a().then((function(e){var n=e.default||e,r=new n.Manager(t),i=new n.Swipe;r.add(i),r.on("swipe",(function(t){v.rotation.y+=t.deltaX}))}));var y=function(){x=0,document.addEventListener("scroll",(function(){var t=x-window.pageYOffset;v.rotation.y=t}))},m=function(){window.addEventListener("resize",(function(){setTimeout((function(){u=t.getBoundingClientRect().width,f=t.getBoundingClientRect().height,t.setAttribute("width",""+u),t.setAttribute("height",""+f),d=new s.D4(u/2,f/2),v.setPosition(d)}),400)}))},j=function(){l=(b-h)/1e3,l=Math.min(l,.1),h=b,Math.round(1/l)},O=function(){v.update(),j()},w=function(){c.clearRect(0,0,t.width,t.height),v.draw()},P=function t(){b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,O(),w(),window.requestAnimationFrame(t)};m(),y(),P()}(t,o)}}),[n,r,o]),(0,l.jsx)(h,{id:"bg-interactive-display",ref:c,width:"500",height:"500",className:e})}},6682:function(t,e,n){n.d(e,{TH:function(){return g},D4:function(){return p}});var r=n(2777),i=n(9499),o=n(7361),s=n.n(o),a=n(6968),c=n.n(a),l=Math.PI/2;function h(t,e){var n=t.y;t.y=n*Math.cos(e)+t.z*Math.sin(e)*-1,t.z=n*Math.sin(e)+t.z*Math.cos(e)}function u(t,e){var n=t.x;t.x=n*Math.cos(e)+t.z*Math.sin(e)*-1,t.z=n*Math.sin(e)+t.z*Math.cos(e)}function f(t,e){var n=t.x;t.x=n*Math.cos(e)+t.y*Math.sin(e)*-1,t.y=n*Math.sin(e)+t.y*Math.cos(e)}function d(t,e,n,r,i){return i*t/(e-r)+n}var p=function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;(0,r.Z)(this,t),(0,i.Z)(this,"x",0),(0,i.Z)(this,"y",0),(0,i.Z)(this,"z",0),(0,i.Z)(this,"normalized",(function(){var n=e.x*e.x+e.y*e.y+e.z*e.z||1;return new t(e.x/n,e.y/n,e.z/n)})),(0,i.Z)(this,"add",(function(t){return e.x+=t.x,e.y+=t.y,e.z+=t.z,e})),(0,i.Z)(this,"addSingleValue",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e.x+=t,e.y+=t,e.z+=t,e})),(0,i.Z)(this,"multiply",(function(t){return e.x*=t,e.y*=t,e.z*=t,e})),(0,i.Z)(this,"subtract",(function(t){return e.x-=t.x,e.y-=t.y,e.z-=t.z,e})),(0,i.Z)(this,"subtractSingleValue",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e.x-=t,e.y-=t,e.z-=t,e})),(0,i.Z)(this,"divideSingleValue",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e.x/=t,e.y/=t,e.z/=t,e})),(0,i.Z)(this,"clone",(function(){return new t(e.x,e.y,e.z)})),(0,i.Z)(this,"copyFrom",(function(t){return e.x=t.x,e.y=t.y,e.z=t.z,e})),(0,i.Z)(this,"distanceFrom",(function(t){return Math.sqrt(Math.abs(t.x-e.x)+Math.abs(t.y-e.y)+Math.abs(t.z-e.z))})),(0,i.Z)(this,"isEqual",(function(t){return e.x===t.x&&e.y===t.y&&e.z===t.z})),this.x=n,this.y=o,this.z=s},g=function t(e,n,o,a){var g=this,v=arguments.length>4&&void 0!==arguments[4]?arguments[4]:20,b=arguments.length>5&&void 0!==arguments[5]?arguments[5]:16,x=arguments.length>6&&void 0!==arguments[6]?arguments[6]:32;(0,r.Z)(this,t),(0,i.Z)(this,"vertices",[]),(0,i.Z)(this,"vertices2D",[]),(0,i.Z)(this,"radius",20),(0,i.Z)(this,"rings",16),(0,i.Z)(this,"slices",32),(0,i.Z)(this,"numberOfVertices",0),(0,i.Z)(this,"context",void 0),(0,i.Z)(this,"position",new p),(0,i.Z)(this,"rotation",new p),(0,i.Z)(this,"width",void 0),(0,i.Z)(this,"height",void 0),(0,i.Z)(this,"lastX",-1),(0,i.Z)(this,"lastY",-1),(0,i.Z)(this,"distance",900),(0,i.Z)(this,"show",!0),(0,i.Z)(this,"lineWidth",2),(0,i.Z)(this,"calculateVertices",(function(){for(var t=2*Math.PI/g.slices,e=Math.PI/g.rings,n=0;n<g.rings+1;++n)for(var r=l-n*e,i=Math.cos(r),o=Math.sin(r),s=0;s<g.slices+1;++s){g.vertices2D[g.numberOfVertices]=new p;var a=s*t,c=Math.cos(a),h=Math.sin(a),u=g.vertices[g.numberOfVertices]=new p;u.x=g.radius*c*i,u.y=g.radius*o,u.z=g.radius*h*i,g.numberOfVertices++}})),(0,i.Z)(this,"setPosition",(function(t){g.position.isEqual(t)||(g.position=t)})),(0,i.Z)(this,"strokeSegment",(function(t,e){var n=g.vertices2D[t];if(n){var r=n.x,i=n.y;if(-1==g.lastX&&-1==g.lastY)return g.lastX=r,void(g.lastY=i);r>=0&&r<g.width&&i>=0&&i<g.height&&(n.z<0?g.context.strokeStyle=e||"#1201ff63":g.context.strokeStyle=e||"#1201FF",g.context.beginPath(),g.context.moveTo(g.lastX,g.lastY),g.context.lineTo(r,i),g.context.stroke(),g.context.closePath(),g.lastX=r,g.lastY=i)}})),(0,i.Z)(this,"drawLines",(function(){for(var t=0;t<g.numberOfVertices;t++)g.strokeSegment(t);for(var e=0;e<g.slices+1;e++)for(var n=0;n<g.rings+1;n++)g.strokeSegment(e+n*(g.slices+1),undefined)})),(0,i.Z)(this,"drawVertices",(function(){g.vertices2D.forEach((function(t){t.z,g.context.strokeStyle="#ff0000",g.context.beginPath(),g.context.arc(t.x,t.y,6,0,2*Math.PI),g.context.stroke()}))})),(0,i.Z)(this,"applyRotation",(function(){g.vertices.forEach((function(t){h(t,g.rotation.x),u(t,g.rotation.y),f(t,g.rotation.z)}))})),(0,i.Z)(this,"applyOpacityUpdate",(function(){g.show?(g.lineWidth+=.1,g.lineWidth=Math.min(g.lineWidth,2)):(g.lineWidth-=.1,g.lineWidth=Math.max(g.lineWidth,0),g.lineWidth<.1&&(g.lineWidth=0))})),(0,i.Z)(this,"applyRotationFriction",(function(){["x","y","z"].forEach((function(t){var e=s()(g.rotation,t,0),n=e;if(e){var r=.5*n;Math.abs(r)<10&&(r*=.2),e>5||e<-5?n-=r:n=0,c()(g.rotation,t,n)}}))})),(0,i.Z)(this,"update",(function(){g.applyOpacityUpdate(),g.applyRotationFriction(),g.applyRotation(),g.vertices.forEach((function(t,e){g.vertices2D[e].x=d(t.x,t.z,g.position.x,100,g.distance),g.vertices2D[e].y=d(t.y,t.z,g.position.y,100,g.distance),g.vertices2D[e].z=t.z}))})),(0,i.Z)(this,"draw",(function(){g.lineWidth<.1||(g.context.lineWidth=g.lineWidth,g.drawLines()),g.context.lineWidth=1})),this.context=e,this.position=n,this.radius=v,this.rings=b,this.slices=x,this.width=o,this.height=a,this.calculateVertices()}}}]);