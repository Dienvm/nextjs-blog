(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[10],{1048:function(e,a,t){"use strict";var n=t(3),r=t(0),i=t.n(r),l=t(328),o=(t(481),i.a.forwardRef((function(e,a){var t=i.a.cloneElement(e.children,{style:Object(n.a)(Object(n.a)({},e.children.style),{},{visibility:"hidden"})});return i.a.createElement(l.VelocityComponent,Object.assign({ref:a},e),t)})));o.defaultProps={animation:"transition.fadeIn",runOnMount:!0,targetQuerySelector:null,interruptBehavior:"stop",visibility:"visible",duration:300,delay:50,easing:[.4,0,.2,1],display:null,setRef:void 0};var c=i.a.memo(o);t.d(a,"a",(function(){return c}))},1051:function(e,a,t){"use strict";var n=t(85),r=t(167),i=t(979),l=t(11),o=t(0),c=t.n(o),s=t(1030),d=t(9);var m=function(e){var a=Object(d.c)((function(e){return e.fuse.settings.mainThemeDark}));return c.a.createElement("div",{className:e.classes.header},e.header&&c.a.createElement(s.a,{theme:a},e.header))},u=t(45),p=t(1047),f=t(1045);var h=function(e){var a=Object(d.c)((function(e){return e.fuse.settings.mainThemeDark})),t=e.classes;return c.a.createElement(c.a.Fragment,null,e.header&&c.a.createElement(s.a,{theme:a},c.a.createElement("div",{className:Object(l.a)(t.sidebarHeader,e.variant)},e.header)),e.content&&c.a.createElement(r.a,{className:t.sidebarContent,enable:e.innerScroll},e.content))};var b=c.a.forwardRef((function(e,a){var t=Object(o.useState)(!1),n=Object(u.a)(t,2),r=n[0],i=n[1],s=e.classes;Object(o.useImperativeHandle)(a,(function(){return{toggleSidebar:d}}));var d=function(){i(!r)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{lgUp:"permanent"===e.variant},c.a.createElement(p.a,{variant:"temporary",anchor:e.position,open:r,onClose:function(e){return d()},classes:{root:Object(l.a)(s.sidebarWrapper,e.variant),paper:Object(l.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},c.a.createElement(h,e))),"permanent"===e.variant&&c.a.createElement(f.a,{mdDown:!0},c.a.createElement(p.a,{variant:"permanent",className:Object(l.a)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(l.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},c.a.createElement(h,e))))})),g=Object(i.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),v=c.a.forwardRef((function(e,a){var t=Object(o.useRef)(null),n=Object(o.useRef)(null),i=Object(o.useRef)(null),s=g(e),d=e.rightSidebarHeader||e.rightSidebarContent,u=e.leftSidebarHeader||e.leftSidebarContent;return c.a.useImperativeHandle(a,(function(){return{rootRef:i,toggleLeftSidebar:function(){t.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),c.a.createElement("div",{className:Object(l.a)(s.root,e.innerScroll&&s.innerScroll),ref:i},c.a.createElement("div",{className:s.topBg}),c.a.createElement("div",{className:"flex container w-full"},u&&c.a.createElement(b,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:t,rootRef:i}),c.a.createElement("div",{className:Object(l.a)(s.contentWrapper,u&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",d&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},c.a.createElement(m,{header:e.header,classes:s}),c.a.createElement("div",{className:Object(l.a)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&c.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&c.a.createElement(r.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),d&&c.a.createElement(b,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:n,rootRef:i})))}));v.defaultProps={};var x=c.a.memo(v);t.d(a,"a",(function(){return x}))},1056:function(e,a,t){"use strict";var n=t(59),r=t(60),i=t(96),l=t(95),o=t(201),c=t(0),s=t.n(c);a.a=function(e,a){return function(t){return function(c){Object(i.a)(m,c);var d=Object(l.a)(m);function m(t){var r;return Object(n.a)(this,m),r=d.call(this,t),Object(o.b)(e,a),r}return Object(r.a)(m,[{key:"render",value:function(){return s.a.createElement(t,this.props)}}]),m}(s.a.PureComponent)}}},1058:function(e,a,t){"use strict";var n=t(85),r=t(3),i=t(202),l=t(1114),o=t(1026),c=t(249),s=t(979),d=t(334),m=t(1041),u=t(197),p=t(11),f=t(0),h=t.n(f),b=t(1069),g=t(1065),v=Object(s.a)((function(e){return{root:{"& .fuse-chip-select__input":{color:e.palette.text.primary},"&.standard":{"& $placeholder":{},"& $valueContainer":{paddingTop:4}},"&.filled":{"& $placeholder":{left:12},"& $valueContainer":{paddingTop:24,paddingLeft:12},"& $chip":{border:"1px solid rgba(0, 0, 0, 0.12)"}},"&.outlined":{"& $placeholder":{left:12},"& $valueContainer":{paddingLeft:12,paddingTop:12}}},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",paddingBottom:4,paddingTop:12,minHeight:40},chip:{margin:"4px 4px 4px 0"},chipFocused:{backgroundColor:Object(d.emphasize)("light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],.08)},noOptionsMessage:{padding:"".concat(e.spacing(),"px ").concat(e.spacing(2),"px")},singleValue:{fontSize:16},placeholder:{position:"absolute",left:0,fontSize:16,margin:0},paper:{position:"absolute",zIndex:2,marginTop:e.spacing(),left:0,right:0},divider:{height:e.spacing(2)}}}));function x(e){var a=e.inputRef,t=Object(i.a)(e,["inputRef"]);return h.a.createElement("div",Object.assign({ref:a},t))}var E={Control:function(e){var a=v();return h.a.createElement(m.a,Object.assign({fullWidth:!0,className:Object(p.a)(a.root,e.selectProps.textFieldProps.variant),required:e.selectProps.required,InputProps:{inputComponent:x,inputProps:Object(r.a)({className:a.input,inputRef:e.innerRef,children:e.children},e.innerProps)}},e.selectProps.textFieldProps))},Menu:function(e){var a=v();return h.a.createElement(c.a,Object.assign({square:!0,className:a.paper},e.innerProps),e.children)},MultiValue:function(e){var a=v();return h.a.createElement(l.a,{tabIndex:-1,label:e.children,className:Object(p.a)(a.chip,Object(n.a)({},a.chipFocused,e.isFocused),e.data.class),onDelete:function(a){e.removeProps.onClick(),e.removeProps.onMouseDown(a)}})},NoOptionsMessage:function(e){var a=v();return h.a.createElement(u.a,Object.assign({color:"textSecondary",className:a.noOptionsMessage},e.innerProps),e.children)},Option:function(e){return h.a.createElement(o.a,Object.assign({buttonRef:e.innerRef,selected:e.isFocused,component:"div",style:{fontWeight:e.isSelected?600:400}},e.innerProps),e.children)},Placeholder:function(e){var a=v();return h.a.createElement(u.a,Object.assign({color:"textSecondary",className:a.placeholder},e.innerProps),e.children)},SingleValue:function(e){var a=v();return h.a.createElement(u.a,Object.assign({className:a.singleValue},e.innerProps),e.children)},ValueContainer:function(e){var a=v();return h.a.createElement("div",{className:a.valueContainer},e.children)}};var j=h.a.memo((function(e){var a=function(a){null===a&&(a=[]),e.onChange&&e.onChange(a)};return"fixed"===e.variant?h.a.createElement(b.a,Object.assign({classNamePrefix:"fuse-chip-select"},e,{components:E,onChange:a})):h.a.createElement(g.a,Object.assign({classNamePrefix:"fuse-chip-select"},e,{components:E,onChange:a}))}));t.d(a,"a",(function(){return j}))},1111:function(e,a,t){"use strict";t.r(a);var n=t(39),r=t(85),i=t(3),l=t(45),o=t(0),c=t.n(o),s=t(9),d=t(12),m=t(316),u=t(331),p=t(1051),f=t(140),h=t(28),b=t(1056),g=t(17),v=t(6),x=t(329),E=t(1058),j=t(1025),O=t(1023),w=t(1041),C=t(11),y=function(e){var a=e.form,t=e.handleChange,n=e.handleChipChange,r=e.handleUploadChange,i=e.setFeaturedImage,l=e.classes,o=e.loadingImage;return c.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl"},c.a.createElement("div",null,c.a.createElement(w.a,{className:"mt-8 mb-16",error:""===a.name,required:!0,label:"Name",autoFocus:!0,id:"name",name:"name",value:a.name,onChange:t,variant:"outlined",fullWidth:!0}),c.a.createElement(w.a,{className:"mt-8 mb-16",id:"description",name:"description",onChange:t,label:"Description",type:"text",value:a.description,multiline:!0,rows:5,variant:"outlined",fullWidth:!0}),c.a.createElement(E.a,{className:"mt-8 mb-24",value:a.categories.map((function(e){return{value:e,label:e}})),onChange:function(e){return n(e,"categories")},placeholder:"Select multiple categories",textFieldProps:{label:"Categories",InputLabelProps:{shrink:!0},variant:"outlined"},isMulti:!0}),c.a.createElement(E.a,{className:"mt-8 mb-16",value:a.tags.map((function(e){return{value:e,label:e}})),onChange:function(e){return n(e,"tags")},placeholder:"Select multiple tags",textFieldProps:{label:"Tags",InputLabelProps:{shrink:!0},variant:"outlined"},isMulti:!0})),c.a.createElement("div",null,c.a.createElement("div",{className:"flex justify-center sm:justify-start flex-wrap -mx-8"},c.a.createElement("label",{htmlFor:"button-file",className:Object(C.a)(l.productImageUpload,"flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5")},c.a.createElement("input",{accept:"image/*",className:"hidden",id:"button-file",type:"file",onChange:r}),c.a.createElement(j.a,{fontSize:"large",color:"action"},"cloud_upload")),a.images.map((function(e){return c.a.createElement("div",{onClick:function(){return i(e.id)},onKeyDown:function(){return i(e.id)},role:"button",tabIndex:0,className:Object(C.a)(l.productImageItem,"flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5",e.id===a.featuredImageId&&"featured"),key:e.id},c.a.createElement(j.a,{className:l.productImageFeaturedStar},"star"),c.a.createElement("img",{className:"max-w-none w-auto h-full",src:e.url,alt:"product"}))})),o&&c.a.createElement("div",{className:"flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5"},c.a.createElement(u.a,null)))),c.a.createElement("div",null,c.a.createElement(w.a,{className:"mt-8 mb-16",label:"Tax Excluded Price",id:"priceTaxExcl",name:"priceTaxExcl",value:a.priceTaxExcl,onChange:t,InputProps:{startAdornment:c.a.createElement(O.a,{position:"start"},"$")},type:"number",variant:"outlined",autoFocus:!0,fullWidth:!0}),c.a.createElement(w.a,{className:"mt-8 mb-16",label:"Tax Included Price",id:"priceTaxIncl",name:"priceTaxIncl",value:a.priceTaxIncl,onChange:t,InputProps:{startAdornment:c.a.createElement(O.a,{position:"start"},"$")},type:"number",variant:"outlined",fullWidth:!0}),c.a.createElement(w.a,{className:"mt-8 mb-16",label:"Tax Rate",id:"taxRate",name:"taxRate",value:a.taxRate,onChange:t,InputProps:{startAdornment:c.a.createElement(O.a,{position:"start"},"$")},type:"number",variant:"outlined",fullWidth:!0}),c.a.createElement(w.a,{className:"mt-8 mb-16",label:"Compared Price",id:"comparedPrice",name:"comparedPrice",value:a.comparedPrice,onChange:t,InputProps:{startAdornment:c.a.createElement(O.a,{position:"start"},"$")},type:"number",variant:"outlined",fullWidth:!0,helperText:"Add a compare price to show next to the real price"})),c.a.createElement("div",null,c.a.createElement(w.a,{className:"mt-8 mb-16",required:!0,label:"SKU",autoFocus:!0,id:"sku",name:"sku",value:a.sku,onChange:t,variant:"outlined",fullWidth:!0}),c.a.createElement(w.a,{className:"mt-8 mb-16",label:"Quantity",id:"quantity",name:"quantity",value:a.quantity,onChange:t,variant:"outlined",type:"number",fullWidth:!0})),c.a.createElement("div",null,c.a.createElement("div",{className:"flex -mx-4"},c.a.createElement(w.a,{className:"mt-8 mb-16 mx-4",label:"Width",autoFocus:!0,id:"width",name:"width",value:a.width,onChange:t,variant:"outlined",fullWidth:!0}),c.a.createElement(w.a,{className:"mt-8 mb-16 mx-4",label:"Height",id:"height",name:"height",value:a.height,onChange:t,variant:"outlined",fullWidth:!0}),c.a.createElement(w.a,{className:"mt-8 mb-16 mx-4",label:"Depth",id:"depth",name:"depth",value:a.depth,onChange:t,variant:"outlined",fullWidth:!0})),c.a.createElement(w.a,{className:"mt-8 mb-16",label:"Weight",id:"weight",name:"weight",value:a.weight,onChange:t,variant:"outlined",fullWidth:!0}),c.a.createElement(w.a,{className:"mt-8 mb-16",label:"Extra Shipping Fee",id:"extraShippingFee",name:"extraShippingFee",value:a.extraShippingFee,onChange:t,variant:"outlined",InputProps:{startAdornment:c.a.createElement(O.a,{position:"start"},"$")},fullWidth:!0})))},N=t(43),S=t(1048),I=t(1043),k=t(197),P=t(416),R=t.n(P),T=function(e){var a=e.form,t=e.productData,n=e.productId,r=Object(s.b)();return c.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},c.a.createElement("div",{className:"flex flex-col items-start max-w-full"},c.a.createElement(S.a,{animation:"transition.slideRightIn",delay:300},c.a.createElement(k.a,{className:"normal-case flex items-center sm:mb-12",component:N.a,role:"button",to:v.c.products,color:"inherit"},c.a.createElement(j.a,{className:"text-20"},"arrow_back"),c.a.createElement("span",{className:"mx-4"},"Products"))),c.a.createElement("div",{className:"flex items-center max-w-full"},c.a.createElement(S.a,{animation:"transition.expandIn",delay:300},a.images&&a.images.length>0&&a.featuredImageId?c.a.createElement("img",{className:"w-32 sm:w-48 rounded",src:a.images.find((function(e){return e.id===a.featuredImageId})).url,alt:a.name}):c.a.createElement("img",{className:"w-32 sm:w-48 rounded",src:"assets/images/ecommerce/product-image-placeholder.png",alt:a.name})),c.a.createElement("div",{className:"flex flex-col min-w-0 mx-8 sm:mc-16"},c.a.createElement(S.a,{animation:"transition.slideLeftIn",delay:300},c.a.createElement(k.a,{className:"text-16 sm:text-20 truncate"},a&&a.name?a.name:"New Product")),c.a.createElement(S.a,{animation:"transition.slideLeftIn",delay:300},c.a.createElement(k.a,{variant:"caption"},"Product Detail"))))),c.a.createElement(S.a,{animation:"transition.slideRightIn",delay:300},c.a.createElement(I.a,{className:"whitespace-no-wrap normal-case",variant:"contained",color:"secondary",disabled:!(a&&a.name.length>0&&R.a.isEqual(t.data,a)),onClick:function(){r("new"===n?d.F(a):d.M(n,a))}},"Save")))};a.default=Object(b.a)("ProductForm",m.a)((function(e){var a=Object(s.b)(),t=Object(s.c)((function(e){return e.product.product})),m=Object(x.c)(e),b=Object(f.b)(null),E=b.form,j=b.handleChange,O=b.setForm,w=Object(o.useState)(!1),C=Object(l.a)(w,2),N=C[0],S=C[1],I=e.match.params.productId;Object(o.useEffect)((function(){a("new"===I?d.B():d.t(I))}),[a,I]),Object(o.useEffect)((function(){(t.data&&!E||t.data&&E&&t.data.id!==E.id)&&O(t.data)}),[E,t.data,O]),Object(o.useEffect)((function(){t.type!==d.k&&t.type!==d.p||e.history.push({pathname:v.c.products})}),[t,e.history]);var k=Object(o.useCallback)((function(e,a){O(Object(i.a)(Object(i.a)({},E),{},Object(r.a)({},a,e.map((function(e){return e.value})))))}),[O,E]),P=Object(o.useCallback)((function(e){O(Object(i.a)(Object(i.a)({},E),{},{featuredImageId:e}))}),[O,E]);return!t.data||t.data&&I!==t.data.id&&"new"!==I?c.a.createElement(u.a,null):c.a.createElement(p.a,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:E&&c.a.createElement(T,{form:E,productData:t,productId:I}),content:E&&c.a.createElement(y,{form:E,handleChange:j,handleChipChange:k,handleUploadChange:function(e){var a=e.target.files[0];a&&g.a.storage.ref("products/".concat(a.name)).put(a).on("state_changed",(function(e){S(!0)}),(function(e){S(!1)}),(function(){g.a.storage.ref("products").child(a.name).getDownloadURL().then((function(e){S(!1),O(Object(i.a)(Object(i.a)({},E),{},{images:[{id:h.a.generateGUID(),url:e,type:"image"}].concat(Object(n.a)(E.images))}))}))}))},setFeaturedImage:P,classes:m,loadingImage:N}),innerScroll:!0})}))}}]);