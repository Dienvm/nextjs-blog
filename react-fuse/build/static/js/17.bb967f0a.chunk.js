(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[17],{1051:function(e,t,r){"use strict";var a=r(85),o=r(167),n=r(979),i=r(11),l=r(0),s=r.n(l),p=r(1030),h=r(9);var c=function(e){var t=Object(h.c)((function(e){return e.fuse.settings.mainThemeDark}));return s.a.createElement("div",{className:e.classes.header},e.header&&s.a.createElement(p.a,{theme:t},e.header))},u=r(45),d=r(1047),m=r(1045);var f=function(e){var t=Object(h.c)((function(e){return e.fuse.settings.mainThemeDark})),r=e.classes;return s.a.createElement(s.a.Fragment,null,e.header&&s.a.createElement(p.a,{theme:t},s.a.createElement("div",{className:Object(i.a)(r.sidebarHeader,e.variant)},e.header)),e.content&&s.a.createElement(o.a,{className:r.sidebarContent,enable:e.innerScroll},e.content))};var g=s.a.forwardRef((function(e,t){var r=Object(l.useState)(!1),a=Object(u.a)(r,2),o=a[0],n=a[1],p=e.classes;Object(l.useImperativeHandle)(t,(function(){return{toggleSidebar:h}}));var h=function(){n(!o)};return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{lgUp:"permanent"===e.variant},s.a.createElement(d.a,{variant:"temporary",anchor:e.position,open:o,onClose:function(e){return h()},classes:{root:Object(i.a)(p.sidebarWrapper,e.variant),paper:Object(i.a)(p.sidebar,e.variant,"left"===e.position?p.leftSidebar:p.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:p.backdrop}},style:{position:"absolute"}},s.a.createElement(f,e))),"permanent"===e.variant&&s.a.createElement(m.a,{mdDown:!0},s.a.createElement(d.a,{variant:"permanent",className:Object(i.a)(p.sidebarWrapper,e.variant),open:o,classes:{paper:Object(i.a)(p.sidebar,e.variant,"left"===e.position?p.leftSidebar:p.rightSidebar)}},s.a.createElement(f,e))))})),b=Object(n.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(a.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(a.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(a.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(a.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(a.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),y=s.a.forwardRef((function(e,t){var r=Object(l.useRef)(null),a=Object(l.useRef)(null),n=Object(l.useRef)(null),p=b(e),h=e.rightSidebarHeader||e.rightSidebarContent,u=e.leftSidebarHeader||e.leftSidebarContent;return s.a.useImperativeHandle(t,(function(){return{rootRef:n,toggleLeftSidebar:function(){r.current.toggleSidebar()},toggleRightSidebar:function(){a.current.toggleSidebar()}}})),s.a.createElement("div",{className:Object(i.a)(p.root,e.innerScroll&&p.innerScroll),ref:n},s.a.createElement("div",{className:p.topBg}),s.a.createElement("div",{className:"flex container w-full"},u&&s.a.createElement(g,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:p,ref:r,rootRef:n}),s.a.createElement("div",{className:Object(i.a)(p.contentWrapper,u&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",h&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},s.a.createElement(c,{header:e.header,classes:p}),s.a.createElement("div",{className:Object(i.a)(p.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&s.a.createElement("div",{className:p.toolbar},e.contentToolbar),e.content&&s.a.createElement(o.a,{className:p.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),h&&s.a.createElement(g,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:p,ref:a,rootRef:n})))}));y.defaultProps={};var w=s.a.memo(y);r.d(t,"a",(function(){return w}))},1063:function(e,t,r){"use strict";var a=r(79),o=r(1),n=(r(2),r(1020));var i=function(e,t){return t?Object(n.a)(e,t,{clone:!1}):e};var l=function(e){var t=function(t){var r=e(t);return t.css?Object(o.a)({},i(r,e(Object(o.a)({theme:t.theme},t.css))),function(e,t){var r={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(r[a]=e[a])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(a.a)(e.filterProps)),t};var s=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=function(e){return t.reduce((function(t,r){var a=r(e);return a?i(t,a):t}),{})};return a.propTypes={},a.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),a},p=r(20),h=r(70),c={xs:0,sm:600,md:960,lg:1280,xl:1920},u={keys:["xs","sm","md","lg","xl"],up:function(e){return"@media (min-width:".concat(c[e],"px)")}};function d(e,t,r){if(Array.isArray(t)){var a=e.theme.breakpoints||u;return t.reduce((function(e,o,n){return e[a.up(a.keys[n])]=r(t[n]),e}),{})}if("object"===Object(h.a)(t)){var o=e.theme.breakpoints||u;return Object.keys(t).reduce((function(e,a){return e[o.up(a)]=r(t[a]),e}),{})}return r(t)}function m(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var f=function(e){var t=e.prop,r=e.cssProperty,a=void 0===r?e.prop:r,o=e.themeKey,n=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=m(e.theme,o)||{};return d(e,r,(function(e){var t;return"function"===typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=m(i,e)||e,n&&(t=n(t))),!1===a?t:Object(p.a)({},a,t)}))};return i.propTypes={},i.filterProps=[t],i};function g(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var b=s(f({prop:"border",themeKey:"borders",transform:g}),f({prop:"borderTop",themeKey:"borders",transform:g}),f({prop:"borderRight",themeKey:"borders",transform:g}),f({prop:"borderBottom",themeKey:"borders",transform:g}),f({prop:"borderLeft",themeKey:"borders",transform:g}),f({prop:"borderColor",themeKey:"palette"}),f({prop:"borderRadius",themeKey:"shape"})),y=s(f({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),f({prop:"display"}),f({prop:"overflow"}),f({prop:"textOverflow"}),f({prop:"visibility"}),f({prop:"whiteSpace"})),w=s(f({prop:"flexBasis"}),f({prop:"flexDirection"}),f({prop:"flexWrap"}),f({prop:"justifyContent"}),f({prop:"alignItems"}),f({prop:"alignContent"}),f({prop:"order"}),f({prop:"flex"}),f({prop:"flexGrow"}),f({prop:"flexShrink"}),f({prop:"alignSelf"}),f({prop:"justifyItems"}),f({prop:"justifySelf"})),v=s(f({prop:"gridGap"}),f({prop:"gridColumnGap"}),f({prop:"gridRowGap"}),f({prop:"gridColumn"}),f({prop:"gridRow"}),f({prop:"gridAutoFlow"}),f({prop:"gridAutoColumns"}),f({prop:"gridAutoRows"}),f({prop:"gridTemplateColumns"}),f({prop:"gridTemplateRows"}),f({prop:"gridTemplateAreas"}),f({prop:"gridArea"})),k=s(f({prop:"position"}),f({prop:"zIndex",themeKey:"zIndex"}),f({prop:"top"}),f({prop:"right"}),f({prop:"bottom"}),f({prop:"left"})),x=s(f({prop:"color",themeKey:"palette"}),f({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),E=f({prop:"boxShadow",themeKey:"shadows"});function S(e){return e<=1?"".concat(100*e,"%"):e}var O=f({prop:"width",transform:S}),j=f({prop:"maxWidth",transform:S}),H=f({prop:"minWidth",transform:S}),T=f({prop:"height",transform:S}),C=f({prop:"maxHeight",transform:S}),I=f({prop:"minHeight",transform:S}),N=(f({prop:"size",cssProperty:"width",transform:S}),f({prop:"size",cssProperty:"height",transform:S}),s(O,j,H,T,C,I,f({prop:"boxSizing"}))),R=r(125);var P={m:"margin",p:"padding"},A={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},K={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},B=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){if(e.length>2){if(!K[e])return[e];e=K[e]}var t=e.split(""),r=Object(R.a)(t,2),a=r[0],o=r[1],n=P[a],i=A[o]||"";return Array.isArray(i)?i.map((function(e){return n+e})):[n+i]})),D=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function z(e,t){return function(r){return e.reduce((function(e,a){return e[a]=function(e,t){if("string"===typeof t)return t;var r=e(Math.abs(t));return t>=0?r:"number"===typeof r?-r:"-".concat(r)}(t,r),e}),{})}}function W(e){var t=function(e){var t=e.spacing||8;return"number"===typeof t?function(e){return t*e}:Array.isArray(t)?function(e){return t[e]}:"function"===typeof t?t:function(){}}(e.theme);return Object.keys(e).map((function(r){if(-1===D.indexOf(r))return null;var a=z(B(r),t),o=e[r];return d(e,o,a)})).reduce(i,{})}W.propTypes={},W.filterProps=D;var G=W,L=s(f({prop:"fontFamily",themeKey:"typography"}),f({prop:"fontSize",themeKey:"typography"}),f({prop:"fontStyle",themeKey:"typography"}),f({prop:"fontWeight",themeKey:"typography"}),f({prop:"letterSpacing"}),f({prop:"lineHeight"}),f({prop:"textAlign"})),F=r(4),V=r(0),Y=r.n(V);function q(e){var t,r,a="";if("string"===typeof e||"number"===typeof e)a+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=q(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}var M=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=q(e))&&(a&&(a+=" "),a+=t);return a},X=r(107),J=r.n(X),U=r(987);function Q(e,t){var r={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(r[a]=e[a])})),r}var Z=r(139),$=function(e){var t=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.name,n=Object(F.a)(r,["name"]);var i,l=a,s="function"===typeof t?function(e){return{root:function(r){return t(Object(o.a)({theme:e},r))}}}:{root:t},p=Object(U.a)(s,Object(o.a)({Component:e,name:a||e.displayName,classNamePrefix:l},n));t.filterProps&&(i=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var h=Y.a.forwardRef((function(t,r){var a=t.children,n=t.className,l=t.clone,s=t.component,h=Object(F.a)(t,["children","className","clone","component"]),c=p(t),u=M(c.root,n),d=h;if(i&&(d=Q(d,i)),l)return Y.a.cloneElement(a,Object(o.a)({className:M(a.props.className,u)},d));if("function"===typeof a)return a(Object(o.a)({className:u},d));var m=s||e;return Y.a.createElement(m,Object(o.a)({ref:r,className:u},d),a)}));return J()(h,e),h}}(e);return function(e,r){return t(e,Object(o.a)({defaultTheme:Z.a},r))}},_=l(s(b,y,w,v,k,x,E,N,G,L)),ee=$("div")(_,{name:"MuiBox"});t.a=ee},1113:function(e,t,r){"use strict";r.r(t);var a=r(1051),o=r(0),n=r.n(o),i=r(1063),l=function(){return n.a.createElement("div",null,n.a.createElement("img",{src:"assets/images/demo-content/morain-lake.jpg",alt:"beach",style:{maxWidth:"640px",width:"100%"}}),n.a.createElement("h1",{className:"py-16"},"Early Sunrise"),n.a.createElement("h4",{className:"pb-12"},"Demo Content"),n.a.createElement("p",null,"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections."),n.a.createElement("blockquote",null,n.a.createElement("p",null,"The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me? \" he thought. It wasn't a dream."),n.a.createElement("footer",null,"John Doe")),n.a.createElement("p",null,"His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame."),n.a.createElement("p",null,"It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad."),n.a.createElement("p",null,'"How about if I sleep a little bit longer and forget all this nonsense", he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state couldn\'t get into that position. However hard he threw himself onto his right, he always rolled back to where he was.'),n.a.createElement("p",null,'He must have tried it a hundred times, shut his eyes so that he wouldn\'t have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before. "Oh, God", he thought, "what a strenuous career it is that I\'ve chosen!'),n.a.createElement("p",null,"Travelling day in and day out. Doing business like this takes much more effort than doing your own business at home, and on top of that there's the curse of travelling, worries about making train connections, bad and irregular food, contact with different people all the time so that you can never get to know anyone or become friendly with them."),n.a.createElement("p",null,"\"He felt a slight itch up on his belly; pushed himself slowly up on his back towards the headboard so that he could lift his head better; found where the itch was, and saw that it was covered with lots of little white spots which he didn't know what to make of; and when he tried to feel the place with one of his legs he drew it quickly back because as soon as he touched it he was overcome by a cold shudder. He slid back into his former position."),n.a.createElement("p",null,'"Getting up early all the time", he thought, "it makes you stupid. You\'ve got to get enough sleep. Other travelling salesmen live a life of luxury. For instance, whenever I go back to the guest house during the morning to copy out the contract, these gentlemen are always still sitting there eating their breakfasts. I ought to just try that with my boss; I\'d get kicked out on the spot. But who knows, maybe that would be the best thing for me...'),n.a.createElement("p",null,"His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame."),n.a.createElement("p",null,"It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad."),n.a.createElement("p",null,'"How about if I sleep a little bit longer and forget all this nonsense", he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state couldn\'t get into that position. However hard he threw himself onto his right, he always rolled back to where he was.'),n.a.createElement("p",null,'He must have tried it a hundred times, shut his eyes so that he wouldn\'t have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before. "Oh, God", he thought, "what a strenuous career it is that I\'ve chosen!'),n.a.createElement("p",null,"Travelling day in and day out. Doing business like this takes much more effort than doing your own business at home, and on top of that there's the curse of travelling, worries about making train connections, bad and irregular food, contact with different people all the time so that you can never get to know anyone or become friendly with them."),n.a.createElement("p",null,"\"He felt a slight itch up on his belly; pushed himself slowly up on his back towards the headboard so that he could lift his head better; found where the itch was, and saw that it was covered with lots of little white spots which he didn't know what to make of; and when he tried to feel the place with one of his legs he drew it quickly back because as soon as he touched it he was overcome by a cold shudder. He slid back into his former position."),n.a.createElement("p",null,'"Getting up early all the time", he thought, "it makes you stupid. You\'ve got to get enough sleep. Other travelling salesmen live a life of luxury. For instance, whenever I go back to the guest house during the morning to copy out the contract, these gentlemen are always still sitting there eating their breakfasts. I ought to just try that with my boss; I\'d get kicked out on the spot. But who knows, maybe that would be the best thing for me...'))};t.default=function(e){return n.a.createElement(a.a,{header:n.a.createElement(i.a,{className:"p-24"},n.a.createElement("h4",null,"TITLE")),content:n.a.createElement(i.a,{className:"p-24"},n.a.createElement("h4",null,"Content"),n.a.createElement("br",null),n.a.createElement(l,null))})}}}]);