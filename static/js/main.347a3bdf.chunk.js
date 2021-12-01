(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{81:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(26),s=a.n(c),n=a(15),o=a(6),i=a(1),j=Object(r.createContext)(null);function l(e){var t=Object(r.useState)(null),a=Object(o.a)(t,2),c=a[0],s=a[1],n={login:function(e){s(e)},logged:!!c,logout:function(){s(null)},user:c};return Object(i.jsx)(j.Provider,{value:n,children:e.children})}var d=a(93),b=a(87),x=a(95),h=a(92);function O(){return Object(r.useContext)(j)}var u={indexPage:"/overx/",aboutPage:"/overx/about",accountPage:"/overx/account",singInPage:"/overx/singin",singUpPage:"/overx/singup",userPage:"/overx/admin/user",uploadPage:"/overx/admin/upload",notFoundPage:"*"};function m(){var e,t=O();return Object(i.jsx)(d.a,{bg:"dark",expand:"lg",variant:"dark",children:Object(i.jsxs)(b.a,{fluid:!0,children:[Object(i.jsx)(d.a.Brand,{as:n.c,to:u.indexPage,children:"OverX"}),Object(i.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(i.jsxs)(d.a.Collapse,{id:"responsive-navbar-nav",children:[Object(i.jsxs)(x.a,{style:{marginRight:"auto"},children:[Object(i.jsx)(x.a.Link,{as:n.c,to:u.aboutPage,children:"About"}),t.logged&&"admin"===(null===t||void 0===t||null===(e=t.user)||void 0===e?void 0:e.role)?Object(i.jsxs)(h.a,{title:"admin",id:"collasible-nav-dropdown",children:[Object(i.jsx)(h.a.Item,{as:n.c,to:u.userPage,children:"users"}),Object(i.jsx)(h.a.Item,{as:n.c,to:u.uploadPage,children:"uploads"})]}):""]}),Object(i.jsx)(x.a,{children:t.logged?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(x.a.Link,{as:n.c,to:u.accountPage,children:"account"}),Object(i.jsx)(x.a.Link,{className:"text-danger",onClick:function(){return t.logout()},children:"Log out"})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(x.a.Link,{as:n.c,to:u.singInPage,children:"SingIn"}),Object(i.jsx)(x.a.Link,{as:n.c,to:u.singUpPage,children:"SingUp"})]})})]})]})})}function p(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(m,{}),e.children]})}var g=a(10),v=a(96);function y(){return Object(i.jsx)(b.a,{children:Object(i.jsx)(v.a,{bg:"dark",className:"mt-4",children:Object(i.jsxs)(v.a.Body,{children:[Object(i.jsx)("h2",{className:"text-center",children:"About OverX"}),Object(i.jsx)("hr",{}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"What is?"}),Object(i.jsx)("p",{children:"OverX is an application designed to share image posts among other formats which can contain the content they want."})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Legal note"}),Object(i.jsx)("p",{children:"The company is not responsible for the content of these posts, which can be reported if their content is out of the law. The company is the one who puts the database servers and profits from the advertisements that are present on the platform"})]})]})]})})})}var f=a(7),N=a(2),w=a(94),C=a(89),P=a(90),k=a(67),F=a(65),R=a(88),I=a(66);function S(){var e,t=O(),a=Object(r.useState)(null),c=Object(o.a)(a,2),s=c[0],n=c[1];function j(e){n(Object(N.a)(Object(N.a)({},s),{},Object(f.a)({},e.target.name,e.target.value)))}return Object(i.jsx)(b.a,{className:"mt-4",children:Object(i.jsx)(R.a,{children:Object(i.jsxs)(I.a,{xs:12,children:[Object(i.jsx)(v.a,{bg:"dark",children:Object(i.jsxs)(v.a.Body,{className:"text-center",children:[Object(i.jsx)("img",{src:"/overx/profile-img.png",alt:"profile-img",style:{borderRadius:200,height:200,width:200}}),Object(i.jsx)("hr",{}),Object(i.jsx)("h3",{className:"text-primary",children:null===t||void 0===t?void 0:t.user.userName}),Object(i.jsx)("hr",{})]})}),Object(i.jsx)(v.a,{bg:"dark",className:"mt-4",children:Object(i.jsx)(v.a.Body,{children:Object(i.jsxs)(v.a.Body,{children:[Object(i.jsx)("h2",{className:"text-center",children:"Information"}),Object(i.jsx)("hr",{}),Object(i.jsx)("b",{children:"Email: "}),Object(i.jsx)("span",{children:null===t||void 0===t?void 0:t.user.email}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("b",{children:"Description: "}),Object(i.jsx)("span",{children:(null===t||void 0===t||null===(e=t.user)||void 0===e?void 0:e.userDescription)?"description":Object(i.jsxs)("span",{children:["you haven't description, do you wont create your description? ",Object(i.jsx)("span",{className:"text-primary",children:"press me"})]})}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("b",{children:"Total number of Views: "}),Object(i.jsx)("span",{children:"6"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("b",{children:"Total number of Viewers: "}),Object(i.jsx)("span",{children:"34"})]})})}),Object(i.jsx)(v.a,{bg:"dark",className:"mt-4",children:Object(i.jsxs)(v.a.Body,{children:[Object(i.jsxs)(w.a,{encType:"multipart/form-data",children:[Object(i.jsx)("h4",{className:"text-center",children:"Create Post"}),Object(i.jsx)("hr",{}),Object(i.jsx)(k.a,{name:"postName",onChange:j,placeholder:"postName",type:"text",className:"text-white",style:{backgroundColor:"rgba(0,0,0,0.3)",borderRadius:50,borderColor:"transparent"}}),Object(i.jsx)(k.a,{name:"postDescription",onChange:j,type:"text",placeholder:"postDescription",style:{backgroundColor:"rgba(0,0,0,0.3)",borderRadius:50,borderColor:"transparent"},className:"mt-1 text-white"}),Object(i.jsx)(k.a,{name:"postFile",onChange:j,placeholder:"postFile",type:"file",style:{backgroundColor:"rgba(0,0,0,0.3)",borderRadius:50,borderColor:"transparent"},className:"mt-1 text-white"}),Object(i.jsx)(F.a,{variant:"primary",onClick:function(){console.log(s)},className:"form-control mt-2",style:{borderRadius:50},children:"create new Post"})]}),Object(i.jsx)("hr",{}),Object(i.jsxs)(C.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(i.jsxs)("thead",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Type"}),Object(i.jsx)("th",{children:"description"}),Object(i.jsx)("th",{children:"N\xbaLikes"}),Object(i.jsx)("th",{children:"Options"})]}),Object(i.jsx)("tbody",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"Frist upload"}),Object(i.jsx)("td",{children:"Frist upload"}),Object(i.jsx)("td",{children:"asome description"}),Object(i.jsx)("td",{children:"5"}),Object(i.jsx)("td",{children:Object(i.jsxs)(P.a,{children:[Object(i.jsx)(F.a,{variant:"warning",children:"Edit"}),Object(i.jsx)(F.a,{variant:"danger",children:"delete"})]})})]})})]})]})})]})})})}function B(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"UploadsPage"})})}function U(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"UsersPage"})})}var L=a(91);function T(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){c(window.innerWidth),console.log(a)}),[a]),Object(i.jsx)(b.a,{className:"mt-4",children:Object(i.jsxs)(v.a,{style:{backgroundColor:"rgba(0,0,0,0.2)",borderColor:"transparent"},className:"p-4",children:[a>376?Object(i.jsx)(v.a.Img,{src:"/overx/banner.gif",alt:"banner"}):Object(i.jsx)("h2",{className:"text-center",children:"OverX"}),Object(i.jsx)(w.a,{children:Object(i.jsxs)(L.a,{style:{backgroundColor:"rgba(0,0,0,0.3",borderRadius:50},className:"p-1 mt-2",children:[Object(i.jsx)(k.a,{name:"search",type:"text",className:"text-white",autoFocus:!0,placeholder:"Search",style:{backgroundColor:"rgba(0,0,0,0)",borderRadius:50,borderColor:"transparent"},"aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(i.jsx)(F.a,{variant:"success",id:"button-addon2",style:{borderRadius:50},children:"search"})]})})]})})}function E(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Not found page"})})}var D=a(53);function W(){var e=O(),t=Object(r.useState)(null),a=Object(o.a)(t,2),c=a[0],s=a[1];function j(e){s(Object(N.a)(Object(N.a)({},c),{},Object(f.a)({},e.target.name,e.target.value)))}return Object(i.jsx)(b.a,{children:Object(i.jsx)(R.a,{children:Object(i.jsx)(I.a,{xs:12,className:"text-center",children:Object(i.jsxs)(w.a,{className:"mt-4",children:[Object(i.jsxs)(v.a,{style:{maxWidth:"360px",margin:"auto",backgroundColor:"rgba(0,0,0,0.5)"},children:[Object(i.jsxs)(v.a.Body,{children:[Object(i.jsx)("h3",{className:"text-primary text-center",children:"Sing In"}),Object(i.jsx)("hr",{}),Object(i.jsxs)(D.a,{className:"mt-4",children:[Object(i.jsx)("label",{htmlFor:"email",children:"Email"}),Object(i.jsx)(k.a,{id:"email",name:"email",type:"email",autoFocus:!0,placeholder:"email@example.com",style:{backgroundColor:"rgba(0,0,0,0.3)",borderRadius:50,borderColor:"transparent"},className:"mt-1 text-center text-white",onChange:j})]}),Object(i.jsxs)(D.a,{className:"mt-4",children:[Object(i.jsx)("label",{htmlFor:"password",children:"Password"}),Object(i.jsx)(k.a,{name:"password",type:"password",placeholder:"your password",style:{backgroundColor:"rgba(0,0,0,0.3)",borderRadius:50,borderColor:"transparent"},className:"mt-1 text-center text-white",onChange:j})]})]}),Object(i.jsx)(F.a,{variant:"primary",onClick:function(){e.login(c)},children:"login"})]}),Object(i.jsxs)("p",{className:"mt-4",children:["if you haven't account: ",Object(i.jsx)(n.b,{to:u.singUpPage,children:"Sing Up"})]})]})})})})}function X(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],s=O();function j(e){c(Object(N.a)(Object(N.a)({},a),{},Object(f.a)({},e.target.name,e.target.value)))}return Object(i.jsx)(b.a,{className:"mt-4",children:Object(i.jsx)(R.a,{children:Object(i.jsxs)(I.a,{xs:12,children:[Object(i.jsxs)(v.a,{style:{maxWidth:"360px",margin:"auto",backgroundColor:"rgba(0,0,0,0.5)"},children:[Object(i.jsxs)(v.a.Body,{children:[Object(i.jsx)("h3",{className:"text-center text-primary",children:"Sing Up"}),Object(i.jsx)("hr",{}),Object(i.jsxs)(w.a,{children:[Object(i.jsxs)(D.a,{className:"text-center",children:[Object(i.jsx)("label",{htmlFor:"userName",children:"Name"}),Object(i.jsx)(k.a,{id:"userName",name:"userName",type:"text",autoFocus:!0,placeholder:"pepito07",style:{backgroundColor:"rgba(0,0,0,0.3)",borderRadius:50,borderColor:"transparent"},className:"mt-1 text-center text-white",onChange:function(e){return j(e)}})]}),Object(i.jsxs)(D.a,{className:"text-center",children:[Object(i.jsx)("label",{htmlFor:"email",children:"Email"}),Object(i.jsx)(k.a,{id:"email",name:"email",type:"email",placeholder:"pepito07@gmail.com",style:{backgroundColor:"rgba(0,0,0,0.3)",borderRadius:50,borderColor:"transparent"},className:"mt-1 text-center text-white",onChange:function(e){return j(e)}})]}),Object(i.jsxs)(D.a,{className:"text-center",children:[Object(i.jsx)("label",{htmlFor:"password",children:"Password"}),Object(i.jsx)(k.a,{id:"password",name:"password",type:"password",placeholder:"password hyper secure",style:{backgroundColor:"rgba(0,0,0,0.3)",borderRadius:50,borderColor:"transparent"},className:"mt-1 text-center text-white",onChange:function(e){return j(e)}})]}),Object(i.jsxs)(D.a,{className:"text-center",children:[Object(i.jsx)("label",{htmlFor:"rePassword",children:"Repete Password"}),Object(i.jsx)(k.a,{id:"rePassword",name:"rePassword",type:"password",placeholder:"password hype secure",style:{backgroundColor:"rgba(0,0,0,0.3)",borderRadius:50,borderColor:"transparent"},className:"mt-1 text-center text-white",onChange:function(e){return j(e)}})]})]})]}),Object(i.jsx)(F.a,{variant:"success",onClick:function(){s.login(a)},children:"create account"})]}),Object(i.jsxs)("p",{className:"mt-4 text-center",children:["if you haven account: ",Object(i.jsx)(n.b,{to:u.singInPage,children:"Sing In"})]})]})})})}function A(e){return O().logged?Object(i.jsx)(g.b,Object(N.a)({},e)):Object(i.jsx)(g.a,{to:u.singInPage})}function J(e){return O().logged?Object(i.jsx)(g.a,{to:u.indexPage}):Object(i.jsx)(g.b,Object(N.a)({},e))}function V(){return Object(i.jsxs)(g.d,{children:[Object(i.jsx)(A,{exact:!0,path:u.indexPage,component:T}),Object(i.jsx)(g.b,{exact:!0,path:u.aboutPage,component:y}),Object(i.jsx)(A,{exact:!0,path:u.accountPage,component:S}),Object(i.jsx)(J,{exact:!0,path:u.singInPage,component:W}),Object(i.jsx)(J,{exact:!0,path:u.singUpPage,component:X}),Object(i.jsx)(A,{exact:!0,path:u.userPage,component:U}),Object(i.jsx)(A,{exact:!0,path:u.uploadPage,component:B}),Object(i.jsx)(g.b,{path:u.notFoundPage,component:E})]})}var q=function(){return Object(i.jsx)(l,{children:Object(i.jsx)(n.a,{children:Object(i.jsx)(p,{children:Object(i.jsx)(V,{})})})})};a(80);s.a.render(Object(i.jsx)(q,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.347a3bdf.chunk.js.map