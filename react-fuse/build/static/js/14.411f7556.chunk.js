(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[14],{1048:function(e,a,t){"use strict";var l=t(3),n=t(0),s=t.n(n),r=t(328),i=(t(481),s.a.forwardRef((function(e,a){var t=s.a.cloneElement(e.children,{style:Object(l.a)(Object(l.a)({},e.children.style),{},{visibility:"hidden"})});return s.a.createElement(r.VelocityComponent,Object.assign({ref:a},e),t)})));i.defaultProps={animation:"transition.fadeIn",runOnMount:!0,targetQuerySelector:null,interruptBehavior:"stop",visibility:"visible",duration:300,delay:50,easing:[.4,0,.2,1],display:null,setRef:void 0};var o=s.a.memo(i);t.d(a,"a",(function(){return o}))},1070:function(e,a,t){"use strict";var l=t(1),n=t(4),s=t(0),r=t.n(s),i=(t(2),t(7)),o=t(249),m=t(8),c=r.a.forwardRef((function(e,a){var t=e.classes,s=e.className,m=e.raised,c=void 0!==m&&m,d=Object(n.a)(e,["classes","className","raised"]);return r.a.createElement(o.a,Object(l.a)({className:Object(i.a)(t.root,s),elevation:c?8:1,ref:a},d))}));a.a=Object(m.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(c)},1071:function(e,a,t){"use strict";var l=t(1),n=t(4),s=t(0),r=t.n(s),i=(t(2),t(7)),o=t(8),m=r.a.forwardRef((function(e,a){var t=e.classes,s=e.className,o=e.component,m=void 0===o?"div":o,c=Object(n.a)(e,["classes","className","component"]);return r.a.createElement(m,Object(l.a)({className:Object(i.a)(t.root,s),ref:a},c))}));a.a=Object(o.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(m)},1103:function(e,a,t){"use strict";t.r(a);var l=t(1048),n=t(140),s=t(197),r=t(1070),i=t(1071),o=t(1041),m=t(1043),c=t(6),d=t(329),u=t(11),f=t(0),p=t.n(f),v=t(43);a.default=function(){var e=Object(d.c)(),a=Object(n.b)({name:"",email:"",password:"",passwordConfirm:""}),t=a.form,f=a.handleChange,b=a.resetForm;return p.a.createElement("div",{className:Object(u.a)(e.root,"flex flex-col flex-auto flex-shrink-0 p-24 md:flex-row md:p-0")},p.a.createElement("div",{className:"flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left"},p.a.createElement(l.a,{animation:"transition.expandIn"},p.a.createElement("img",{className:"w-128 mb-32",src:"assets/images/logos/fuse.svg",alt:"logo"})),p.a.createElement(l.a,{animation:"transition.slideUpIn",delay:300},p.a.createElement(s.a,{variant:"h3",color:"inherit",className:"font-light"},"Welcome to the FUSE!")),p.a.createElement(l.a,{delay:400},p.a.createElement(s.a,{variant:"subtitle1",color:"inherit",className:"max-w-512 mt-16"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis."))),p.a.createElement(l.a,{animation:{translateX:[0,"100%"]}},p.a.createElement(r.a,{className:"w-full max-w-400 mx-auto m-16 md:m-0",square:!0},p.a.createElement(i.a,{className:"flex flex-col items-center justify-center p-32 md:p-48 md:pt-128"},p.a.createElement(s.a,{variant:"h6",className:"md:w-full mb-32"},"RESET YOUR PASSWORD"),p.a.createElement("form",{name:"resetForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:function(e){e.preventDefault(),b()}},p.a.createElement(o.a,{className:"mb-16",label:"Email",autoFocus:!0,type:"email",name:"email",value:t.email,onChange:f,variant:"outlined",required:!0,fullWidth:!0}),p.a.createElement(o.a,{className:"mb-16",label:"Password",type:"password",name:"password",value:t.password,onChange:f,variant:"outlined",required:!0,fullWidth:!0}),p.a.createElement(o.a,{className:"mb-16",label:"Password (Confirm)",type:"password",name:"passwordConfirm",value:t.passwordConfirm,onChange:f,variant:"outlined",required:!0,fullWidth:!0}),p.a.createElement(m.a,{variant:"contained",color:"primary",className:"w-224 mx-auto mt-16","aria-label":"Reset",disabled:!(t.email.length>0&&c.b.test(t.email)&&t.password.length>0&&t.password.length>3&&t.password===t.passwordConfirm),type:"submit"},"RESET MY PASSWORD")),p.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},p.a.createElement(v.a,{className:"font-medium",to:"login"},"Go back to login"))))))}}}]);