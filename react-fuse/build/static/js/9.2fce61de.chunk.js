(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[9],{895:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r),l=a(292),o=(a(428),i.a.forwardRef((function(e,t){var a=i.a.cloneElement(e.children,{style:Object(n.a)(Object(n.a)({},e.children.style),{},{visibility:"hidden"})});return i.a.createElement(l.VelocityComponent,Object.assign({ref:t},e),a)})));o.defaultProps={animation:"transition.fadeIn",runOnMount:!0,targetQuerySelector:null,interruptBehavior:"stop",visibility:"visible",duration:300,delay:50,easing:[.4,0,.2,1],display:null,setRef:void 0};var c=i.a.memo(o);a.d(t,"a",(function(){return c}))},897:function(e,t){var a="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,i="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,l){if(t===l)return!0;if(t&&l&&"object"==typeof t&&"object"==typeof l){if(t.constructor!==l.constructor)return!1;var o,c,s,u;if(Array.isArray(t)){if((o=t.length)!=l.length)return!1;for(c=o;0!==c--;)if(!e(t[c],l[c]))return!1;return!0}if(n&&t instanceof Map&&l instanceof Map){if(t.size!==l.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!l.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!e(c.value[1],l.get(c.value[0])))return!1;return!0}if(r&&t instanceof Set&&l instanceof Set){if(t.size!==l.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!l.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(l)){if((o=t.length)!=l.length)return!1;for(c=o;0!==c--;)if(t[c]!==l[c])return!1;return!0}if(t.constructor===RegExp)return t.source===l.source&&t.flags===l.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===l.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===l.toString();if((o=(s=Object.keys(t)).length)!==Object.keys(l).length)return!1;for(c=o;0!==c--;)if(!Object.prototype.hasOwnProperty.call(l,s[c]))return!1;if(a&&t instanceof Element)return!1;for(c=o;0!==c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!e(t[s[c]],l[s[c]]))return!1;return!0}return t!==t&&l!==l}(e,t)}catch(l){if((l.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw l}}},899:function(e,t,a){"use strict";var n=a(69),r=a(153),i=a(874),l=a(11),o=a(0),c=a.n(o),s=a(877),u=a(9);var d=function(e){var t=Object(u.c)((function(e){return e.fuse.settings.mainThemeDark}));return c.a.createElement("div",{className:e.classes.header},e.header&&c.a.createElement(s.a,{theme:t},e.header))},m=a(39),p=a(894),f=a(892);var h=function(e){var t=Object(u.c)((function(e){return e.fuse.settings.mainThemeDark})),a=e.classes;return c.a.createElement(c.a.Fragment,null,e.header&&c.a.createElement(s.a,{theme:t},c.a.createElement("div",{className:Object(l.a)(a.sidebarHeader,e.variant)},e.header)),e.content&&c.a.createElement(r.a,{className:a.sidebarContent,enable:e.innerScroll},e.content))};var b=c.a.forwardRef((function(e,t){var a=Object(o.useState)(!1),n=Object(m.a)(a,2),r=n[0],i=n[1],s=e.classes;Object(o.useImperativeHandle)(t,(function(){return{toggleSidebar:u}}));var u=function(){i(!r)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{lgUp:"permanent"===e.variant},c.a.createElement(p.a,{variant:"temporary",anchor:e.position,open:r,onClose:function(e){return u()},classes:{root:Object(l.a)(s.sidebarWrapper,e.variant),paper:Object(l.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},c.a.createElement(h,e))),"permanent"===e.variant&&c.a.createElement(f.a,{mdDown:!0},c.a.createElement(p.a,{variant:"permanent",className:Object(l.a)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(l.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},c.a.createElement(h,e))))})),g=Object(i.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),v=c.a.forwardRef((function(e,t){var a=Object(o.useRef)(null),n=Object(o.useRef)(null),i=Object(o.useRef)(null),s=g(e),u=e.rightSidebarHeader||e.rightSidebarContent,m=e.leftSidebarHeader||e.leftSidebarContent;return c.a.useImperativeHandle(t,(function(){return{rootRef:i,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),c.a.createElement("div",{className:Object(l.a)(s.root,e.innerScroll&&s.innerScroll),ref:i},c.a.createElement("div",{className:s.topBg}),c.a.createElement("div",{className:"flex container w-full"},m&&c.a.createElement(b,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:a,rootRef:i}),c.a.createElement("div",{className:Object(l.a)(s.contentWrapper,m&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",u&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},c.a.createElement(d,{header:e.header,classes:s}),c.a.createElement("div",{className:Object(l.a)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&c.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&c.a.createElement(r.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),u&&c.a.createElement(b,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:n,rootRef:i})))}));v.defaultProps={};var x=c.a.memo(v);a.d(t,"a",(function(){return x}))},906:function(e,t,a){"use strict";var n=a(69),r=a(3),i=a(185),l=a(967),o=a(872),c=a(225),s=a(874),u=a(298),d=a(888),m=a(180),p=a(11),f=a(0),h=a.n(f),b=a(919),g=a(915),v=Object(s.a)((function(e){return{root:{"& .fuse-chip-select__input":{color:e.palette.text.primary},"&.standard":{"& $placeholder":{},"& $valueContainer":{paddingTop:4}},"&.filled":{"& $placeholder":{left:12},"& $valueContainer":{paddingTop:24,paddingLeft:12},"& $chip":{border:"1px solid rgba(0, 0, 0, 0.12)"}},"&.outlined":{"& $placeholder":{left:12},"& $valueContainer":{paddingLeft:12,paddingTop:12}}},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",paddingBottom:4,paddingTop:12,minHeight:40},chip:{margin:"4px 4px 4px 0"},chipFocused:{backgroundColor:Object(u.emphasize)("light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],.08)},noOptionsMessage:{padding:"".concat(e.spacing(),"px ").concat(e.spacing(2),"px")},singleValue:{fontSize:16},placeholder:{position:"absolute",left:0,fontSize:16,margin:0},paper:{position:"absolute",zIndex:2,marginTop:e.spacing(),left:0,right:0},divider:{height:e.spacing(2)}}}));function x(e){var t=e.inputRef,a=Object(i.a)(e,["inputRef"]);return h.a.createElement("div",Object.assign({ref:t},a))}var E={Control:function(e){var t=v();return h.a.createElement(d.a,Object.assign({fullWidth:!0,className:Object(p.a)(t.root,e.selectProps.textFieldProps.variant),required:e.selectProps.required,InputProps:{inputComponent:x,inputProps:Object(r.a)({className:t.input,inputRef:e.innerRef,children:e.children},e.innerProps)}},e.selectProps.textFieldProps))},Menu:function(e){var t=v();return h.a.createElement(c.a,Object.assign({square:!0,className:t.paper},e.innerProps),e.children)},MultiValue:function(e){var t=v();return h.a.createElement(l.a,{tabIndex:-1,label:e.children,className:Object(p.a)(t.chip,Object(n.a)({},t.chipFocused,e.isFocused),e.data.class),onDelete:function(t){e.removeProps.onClick(),e.removeProps.onMouseDown(t)}})},NoOptionsMessage:function(e){var t=v();return h.a.createElement(m.a,Object.assign({color:"textSecondary",className:t.noOptionsMessage},e.innerProps),e.children)},Option:function(e){return h.a.createElement(o.a,Object.assign({buttonRef:e.innerRef,selected:e.isFocused,component:"div",style:{fontWeight:e.isSelected?600:400}},e.innerProps),e.children)},Placeholder:function(e){var t=v();return h.a.createElement(m.a,Object.assign({color:"textSecondary",className:t.placeholder},e.innerProps),e.children)},SingleValue:function(e){var t=v();return h.a.createElement(m.a,Object.assign({className:t.singleValue},e.innerProps),e.children)},ValueContainer:function(e){var t=v();return h.a.createElement("div",{className:t.valueContainer},e.children)}};var O=h.a.memo((function(e){var t=function(t){null===t&&(t=[]),e.onChange&&e.onChange(t)};return"fixed"===e.variant?h.a.createElement(b.a,Object.assign({classNamePrefix:"fuse-chip-select"},e,{components:E,onChange:t})):h.a.createElement(g.a,Object.assign({classNamePrefix:"fuse-chip-select"},e,{components:E,onChange:t}))}));a.d(t,"a",(function(){return O}))},964:function(e,t,a){"use strict";a.r(t);var n=a(33),r=a(69),i=a(3),l=a(39),o=a(0),c=a.n(o),s=a(9),u=a(897),d=a.n(u),m=a(12),p=a(295),f=a(899),h=a(130),b=a(27),g=a(17),v=a(18),x=a(8),E=a(59),O=a(906),j=a(871),y=a(869),w=a(888),S=a(11),C=Object(o.memo)((function(e){var t=e.form,a=e.handleChange,n=e.handleChipChange,r=e.handleUploadChange,i=e.setFeaturedImage,l=e.classes,o=e.loadingImage;return c.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl"},c.a.createElement("div",null,c.a.createElement(w.a,{className:"mt-8 mb-16",error:""===t.name,required:!0,label:"Name",autoFocus:!0,id:"name",name:"name",value:t.name,onChange:a,variant:"outlined",fullWidth:!0}),c.a.createElement(w.a,{className:"mt-8 mb-16",id:"description",name:"description",onChange:a,label:"Description",type:"text",value:t.description,multiline:!0,rows:5,variant:"outlined",fullWidth:!0}),c.a.createElement(O.a,{className:"mt-8 mb-24",value:t.categories.map((function(e){return{value:e,label:e}})),onChange:function(e){return n(e,"categories")},placeholder:"Select multiple categories",textFieldProps:{label:"Categories",InputLabelProps:{shrink:!0},variant:"outlined"},isMulti:!0}),c.a.createElement(O.a,{className:"mt-8 mb-16",value:t.tags.map((function(e){return{value:e,label:e}})),onChange:function(e){return n(e,"tags")},placeholder:"Select multiple tags",textFieldProps:{label:"Tags",InputLabelProps:{shrink:!0},variant:"outlined"},isMulti:!0})),c.a.createElement("div",null,c.a.createElement("div",{className:"flex justify-center sm:justify-start flex-wrap -mx-8"},c.a.createElement("label",{htmlFor:"button-file",className:Object(S.a)(l.productImageUpload,"flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5")},c.a.createElement("input",{accept:"image/*",className:"hidden",id:"button-file",type:"file",onChange:r}),c.a.createElement(j.a,{fontSize:"large",color:"action"},"cloud_upload")),t.images.map((function(e){return c.a.createElement("div",{onClick:function(){return i(e.id)},onKeyDown:function(){return i(e.id)},role:"button",tabIndex:0,className:Object(S.a)(l.productImageItem,"flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5",e.id===t.featuredImageId&&"featured"),key:e.id},c.a.createElement(j.a,{className:l.productImageFeaturedStar},"star"),c.a.createElement("img",{className:"max-w-none w-auto h-full",src:e.url,alt:"product"}))})),o&&c.a.createElement("div",{className:"flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5"},c.a.createElement(p.a,null)))),c.a.createElement("div",null,c.a.createElement(w.a,{className:"mt-8 mb-16",label:"Tax Excluded Price",id:"priceTaxExcl",name:"priceTaxExcl",value:t.priceTaxExcl,onChange:a,InputProps:{startAdornment:c.a.createElement(y.a,{position:"start"},"$")},type:"number",variant:"outlined",autoFocus:!0,fullWidth:!0}),c.a.createElement(w.a,{className:"mt-8 mb-16",label:"Tax Included Price",id:"priceTaxIncl",name:"priceTaxIncl",value:t.priceTaxIncl,onChange:a,InputProps:{startAdornment:c.a.createElement(y.a,{position:"start"},"$")},type:"number",variant:"outlined",fullWidth:!0}),c.a.createElement(w.a,{className:"mt-8 mb-16",label:"Tax Rate",id:"taxRate",name:"taxRate",value:t.taxRate,onChange:a,InputProps:{startAdornment:c.a.createElement(y.a,{position:"start"},"$")},type:"number",variant:"outlined",fullWidth:!0}),c.a.createElement(w.a,{className:"mt-8 mb-16",label:"Compared Price",id:"comparedPrice",name:"comparedPrice",value:t.comparedPrice,onChange:a,InputProps:{startAdornment:c.a.createElement(y.a,{position:"start"},"$")},type:"number",variant:"outlined",fullWidth:!0,helperText:"Add a compare price to show next to the real price"})),c.a.createElement("div",null,c.a.createElement(w.a,{className:"mt-8 mb-16",required:!0,label:"SKU",autoFocus:!0,id:"sku",name:"sku",value:t.sku,onChange:a,variant:"outlined",fullWidth:!0}),c.a.createElement(w.a,{className:"mt-8 mb-16",label:"Quantity",id:"quantity",name:"quantity",value:t.quantity,onChange:a,variant:"outlined",type:"number",fullWidth:!0})),c.a.createElement("div",null,c.a.createElement("div",{className:"flex -mx-4"},c.a.createElement(w.a,{className:"mt-8 mb-16 mx-4",label:"Width",autoFocus:!0,id:"width",name:"width",value:t.width,onChange:a,variant:"outlined",fullWidth:!0}),c.a.createElement(w.a,{className:"mt-8 mb-16 mx-4",label:"Height",id:"height",name:"height",value:t.height,onChange:a,variant:"outlined",fullWidth:!0}),c.a.createElement(w.a,{className:"mt-8 mb-16 mx-4",label:"Depth",id:"depth",name:"depth",value:t.depth,onChange:a,variant:"outlined",fullWidth:!0})),c.a.createElement(w.a,{className:"mt-8 mb-16",label:"Weight",id:"weight",name:"weight",value:t.weight,onChange:a,variant:"outlined",fullWidth:!0}),c.a.createElement(w.a,{className:"mt-8 mb-16",label:"Extra Shipping Fee",id:"extraShippingFee",name:"extraShippingFee",value:t.extraShippingFee,onChange:a,variant:"outlined",InputProps:{startAdornment:c.a.createElement(y.a,{position:"start"},"$")},fullWidth:!0})))}),(function(e,t){return d()(e.form,t.form)})),N=a(43),I=a(366),k=a.n(I),P=a(895),R=a(890),T=a(180),W=Object(o.memo)((function(e){var t=e.form,a=e.productData,n=e.productId,r=Object(s.b)();return c.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},c.a.createElement("div",{className:"flex flex-col items-start max-w-full"},c.a.createElement(P.a,{animation:"transition.slideRightIn",delay:300},c.a.createElement(T.a,{className:"normal-case flex items-center sm:mb-12",component:N.a,role:"button",to:v.c.products,color:"inherit"},c.a.createElement(j.a,{className:"text-20"},"arrow_back"),c.a.createElement("span",{className:"mx-4"},"Products"))),c.a.createElement("div",{className:"flex items-center max-w-full"},c.a.createElement(P.a,{animation:"transition.expandIn",delay:300},t.images&&t.images.length>0&&t.featuredImageId?c.a.createElement("img",{className:"w-32 sm:w-48 rounded",src:t.images.find((function(e){return e.id===t.featuredImageId})).url,alt:t.name}):c.a.createElement("img",{className:"w-32 sm:w-48 rounded",src:"assets/images/ecommerce/product-image-placeholder.png",alt:t.name})),c.a.createElement("div",{className:"flex flex-col min-w-0 mx-8 sm:mc-16"},c.a.createElement(P.a,{animation:"transition.slideLeftIn",delay:300},c.a.createElement(T.a,{className:"text-16 sm:text-20 truncate"},t&&t.name?t.name:"New Product")),c.a.createElement(P.a,{animation:"transition.slideLeftIn",delay:300},c.a.createElement(T.a,{variant:"caption"},"Product Detail"))))),c.a.createElement(P.a,{animation:"transition.slideRightIn",delay:300},c.a.createElement(R.a,{className:"whitespace-no-wrap normal-case",variant:"contained",color:"secondary",disabled:!(t.name.length>0&&!k.a.isEqual(a.data,t)),onClick:function(){r("new"===n?m.F(t):m.M(n,t))}},"Save")))}),(function(e,t){var a=Object(E.e)(e,"productId"),n=Object(E.e)(t,"productId");return d()(a,n)}));t.default=Object(o.memo)((function(e){var t=Object(s.b)(),a=Object(s.c)((function(e){return e.product.product})),u=Object(x.b)(e),d=Object(h.b)(null),O=d.form,j=d.handleChange,y=d.setForm,w=Object(o.useState)(!1),S=Object(l.a)(w,2),N=S[0],I=S[1],k=e.match.params.productId;Object(o.useEffect)((function(){t("new"===k?m.B():m.t(k))}),[k]),Object(o.useEffect)((function(){(a.data&&!O||a.data&&O&&a.data.id!==O.id)&&y(a.data)}),[O,a.data,y]),Object(o.useEffect)((function(){a.type!==m.k&&a.type!==m.p||e.history.push({pathname:v.c.products})}),[a]);var P=Object(o.useCallback)((function(e,t){y(Object(i.a)(Object(i.a)({},O),{},Object(r.a)({},t,e.map((function(e){return e.value})))))}),[O,y]),R=Object(o.useCallback)((function(e){y(Object(i.a)(Object(i.a)({},O),{},{featuredImageId:e}))}),[O,y]);return!a.data||a.data&&k!==a.data.id&&"new"!==k?c.a.createElement(p.a,null):c.a.createElement(f.a,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:O&&c.a.createElement(W,{form:O,productData:a,productId:k}),content:O&&c.a.createElement(C,{form:O,handleChange:j,handleChipChange:P,handleUploadChange:function(e){var t=e.target.files[0];t&&g.a.storage.ref("".concat(E.a.PRODUCTS,"/").concat(t.name)).put(t).on("state_changed",(function(e){I(!0)}),(function(e){I(!1)}),(function(){g.a.storage.ref(E.a.PRODUCTS).child(t.name).getDownloadURL().then((function(e){I(!1),y(Object(i.a)(Object(i.a)({},O),{},{images:[{id:b.a.generateGUID(),url:e,type:"image"}].concat(Object(n.a)(O.images))}))}))}))},setFeaturedImage:R,classes:u,loadingImage:N}),innerScroll:!0})}),d.a)}}]);