(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{108:function(e,t,n){"use strict";t.a=n.p+"static/media/oldrich-muller.f382a245.jpg"},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(47),a=n(3),c="ADD-MESSAGE",s={dialogs:[{id:1,name:"Stepan"},{id:2,name:"Iban"},{id:3,name:"Nastya"},{id:4,name:"Dima"},{id:5,name:"Max"},{id:6,name:"Aleona"}],massages:[{id:1,massage:"Hi"},{id:2,massage:"You good boy"},{id:3,massage:"Fokus."},{id:4,massage:"Venera ebat dura..."}]},i=function(e){return{type:c,newMesagwBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMesagwBody;return Object(a.a)(Object(a.a)({},e),{},{massages:[].concat(Object(r.a)(e.massages),[{id:5,massage:n}])});default:return e}}},14:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var r=n(133),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"77758c63-657b-4d55-8010-f262201c0125"}}),c={getUsers:function(e,t){return a.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.delete("/follow/".concat(e)).then((function(e){return e.data}))},unFollow:function(e){return a.post("/follow/".concat(e)).then((function(e){return e.data}))}},s={getProfile:function(e){return a.get("profile/"+e).then((function(e){return e}))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},o={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},167:function(e,t,n){},168:function(e,t,n){},17:function(e,t,n){e.exports={nav:"Navbar_nav__2BOi4",item:"Navbar_item__3PwUG",active:"Navbar_active__3Q2ak"}},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=n(66),i=n.n(s),o=(n(167),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,298)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))}),u=n(37),l=n(38),d=n(40),f=n(39),j=(n(168),n(17)),p=n.n(j),b=n(15),h=function(){return Object(r.jsxs)("nav",{className:p.a.nav,children:[Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)(b.b,{to:"/profile",activeClassName:p.a.active,children:"Profile"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)(b.b,{to:"/dialogs",activeClassName:p.a.active,children:"Messages"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)(b.b,{to:"/users",activeClassName:p.a.active,children:"Users"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)(b.b,{to:"/news",activeClassName:p.a.active,children:"News"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)(b.b,{to:"/music",activeClassName:p.a.active,children:"Music"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)(b.b,{to:"/settings",activeClassName:p.a.active,children:"Settings"})})]})},O=n(11),g=(n(173),function(){return Object(r.jsx)("div",{children:"Music"})}),m=(n(174),function(){return Object(r.jsx)("div",{children:"News"})}),v=(n(175),function(){return Object(r.jsx)("div",{children:"Settings"})}),x=n(19),w=n(9),C=n.n(w),P=n(13),S=n(47),y=n(3),_=n(14),N=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(y.a)(Object(y.a)({},e),r):e}))},I="FOLLOW",k="UNFOLLOW",E="SET-USERS",U="SET-CURRENT-PAGE",T="SET-TOTAL-USERS-COUNT",F="TOGGLE-IS-FETCHING",A="TOGGLE-FOLLOWING-IN-PROGRESS",L={users:[],pageSize:5,totalUserCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},z=function(e){return{type:U,currentPage:e}},M=function(e){return{type:F,isFetching:e}},D=function(e,t){return{type:A,followingProgress:e,userId:t}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(y.a)(Object(y.a)({},e),{},{users:N(e.users,t.userId,"id",{followed:!0})});case k:return Object(y.a)(Object(y.a)({},e),{},{users:N(e.users,t.userId,"id",{followed:!1})});case E:return Object(y.a)(Object(y.a)({},e),{},{users:t.users});case U:return Object(y.a)(Object(y.a)({},e),{},{currentPage:t.currentPage});case T:return Object(y.a)(Object(y.a)({},e),{},{totalUserCount:t.count});case F:return Object(y.a)(Object(y.a)({},e),{},{isFetching:t.isFetching});case A:return Object(y.a)(Object(y.a)({},e),{},{followingInProgress:t.followingProgress?[].concat(Object(S.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!=t.userId}))]});default:return e}},G=n(30),B=n(98),H=n(71),V=n.n(H),W=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,s=e.portionSize,i=void 0===s?30:s,o=Object(G.a)(e,["totalItemsCount","pageSize","currentPage","portionSize"]),u=Math.ceil(t/n),l=[],d=1;d<=u;d++)l.push(d);var f=Math.ceil(u/i),j=Object(a.useState)(1),p=Object(B.a)(j,2),b=p[0],h=p[1],O=(b-1)*i+1,g=b*i;return Object(r.jsxs)("div",{className:V.a.pugianator,children:[b>1&&Object(r.jsx)("button",{onClick:function(){h(b-1)},children:"PREV"}),l.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(r.jsx)("span",{className:V.a.pageNumber,children:Object(r.jsx)("span",{className:c===e&&V.a.selectedPage,onClick:function(){o.onPageChanged(e)},children:e},e)})})),f>b&&Object(r.jsx)("button",{onClick:function(){h(b+1)},children:"NEXT"})]})},X=n(35),Y=n.n(X),Q=n(108),q=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,c=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)(b.b,{to:"/profile/"+t.id,children:Object(r.jsx)("div",{className:Y.a.item,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:Q.a})})}),Object(r.jsx)("div",{className:Y.a.item,children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{className:Y.a.item,children:t.name}),Object(r.jsx)("div",{className:Y.a.item,children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{className:Y.a.item,children:"user.location.city"}),Object(r.jsx)("div",{className:Y.a.item,children:"user.location.country"})]})]})]})},J=function(e){var t=e.currentPage,n=e.onPageChanged,a=e.totalItemsCount,c=e.pageSize,s=Object(G.a)(e,["currentPage","onPageChanged","totalItemsCount","pageSize"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(W,{currentPage:t,onPageChanged:n,pageSize:c,totalItemsCount:a}),s.users.map((function(e){return Object(r.jsx)(q,{user:e,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow},e.id)}))]})},K=n(43),Z=n(10),$=n(134),ee=Object($.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),te=function(e){return e.usersPage.pageSize},ne=function(e){return e.usersPage.totalUserCount},re=function(e){return e.usersPage.currentPage},ae=function(e){return e.usersPage.isFetching},ce=function(e){return e.usersPage.followingInProgress},se=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(K.a,{}):null,Object(r.jsx)(J,{totalItemsCount:this.props.totalUserCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),ie=Object(Z.d)(Object(x.b)((function(e){return{users:ee(e),pageSize:te(e),totalUserCount:ne(e),currentPage:re(e),isFetching:ae(e),followingInProgress:ce(e)}}),{follow:function(e){return function(){var t=Object(P.a)(C.a.mark((function t(n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(D(!0,e)),t.next=3,_.d.unFollow(e);case 3:0===t.sent.resultCode&&n({type:I,userId:e}),n(D(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(P.a)(C.a.mark((function t(n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(D(!0,e)),t.next=3,_.d.follow(e);case 3:0===t.sent.resultCode&&n({type:k,userId:e}),n(D(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:z,setIsFetching:M,toggleFollowingProgress:D,getUsers:function(e,t){return function(){var n=Object(P.a)(C.a.mark((function n(r){var a;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(M(!0)),r(z(e)),n.next=4,_.d.getUsers(e,t);case 4:a=n.sent,r(M(!1)),r((s=a.items,{type:E,users:s})),r((c=a.totalCount,{type:T,count:c}));case 8:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(se),oe=n(72),ue=n.n(oe),le=function(e){return Object(r.jsxs)("header",{className:ue.a.header,children:[Object(r.jsx)("img",{src:"https://www.logo.wine/a/logo/Pornhub/Pornhub-Logo.wine.svg"}),Object(r.jsx)("div",{className:ue.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(r.jsx)(b.b,{to:"/login",activeClassName:ue.a.active,children:"Login"})})]})},de=n(31),fe="SET-USERS-DATA",je="GET-CAPTCHA-URL-SUCCESS",pe={email:null,id:null,login:null,isAuth:!1,isFetching:!0,captchaUrl:null},be=function(e,t,n,r){return{type:fe,data:{email:e,id:t,login:n,isAuth:r}}},he=function(e){return{type:je,payLoad:{captchaUrl:e}}},Oe=function(){return function(){var e=Object(P.a)(C.a.mark((function e(t){var n,r,a,c,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.email,c=r.id,s=r.login,t(be(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ge=function(){return function(){var e=Object(P.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.logout();case 2:0===e.sent.data.resultCode&&t(be(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me=function(){return function(){var e=Object(P.a)(C.a.mark((function e(t){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(he(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(y.a)(Object(y.a)({},e),t.data);case je:return Object(y.a)(Object(y.a)({},e),t.payLoad);default:return e}},xe=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(le,Object(y.a)({},this.props))}}]),n}(c.a.Component),we=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:ge})(xe),Ce=n(91),Pe=n(130),Se=n(42),ye=n(67),_e=n(55),Ne=n.n(_e),Ie=Object(Pe.a)({form:"login"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(Ce.a,{placeholder:"Email",name:"email",component:Se.b,validate:[ye.b]})}),Object(r.jsx)("div",{children:Object(r.jsx)(Ce.a,{placeholder:"Password",name:"password",type:"password",component:Se.b,validate:[ye.b]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Ce.a,{type:"checkbox",name:"rememberMe",component:Se.b}),"Remember me"]}),e.captchaUrl&&Object(r.jsx)("img",{src:e.captchaUrl}),e.captchaUrl&&Object(Se.a)("Simbols","captcha",[ye.b],Se.b,{}),e.error&&Object(r.jsx)("div",{className:Ne.a.formSummaryError,children:e.error}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),ke=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(){var a=Object(P.a)(C.a.mark((function a(c){var s,i;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_.a.login(e,t,n,r);case 2:0===(s=a.sent).data.resultCode?c(Oe()):(10===s.data.resultCode&&c(me()),i=s.data.messages.length>0?s.data.messages:"Some error",c(Object(de.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},logout:ge})((function(e){return e.isAuth?Object(r.jsx)(O.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"LOGIN"}),Object(r.jsx)(Ie,{captchaUrl:e.captchaUrl,onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)}})]})})),Ee="INITIALIZED-SUCCESS",Ue={initialized:!1},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:return Object(y.a)(Object(y.a)({},e),{},{initialized:!0});default:return e}},Fe=n(129),Ae={},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae;return e},ze=n(136),Me=n(97),De=n(131),Re=Object(Z.c)({profilePage:Me.d,massagesPage:Fe.b,sidebarPage:Le,usersPage:R,auth:ve,form:De.a,app:Te}),Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,Be=Object(Z.e)(Re,Ge(Object(Z.a)(ze.a)));window.__store__=Be;var He=Be,Ve=function(e){return function(t){return Object(r.jsx)(c.a.Suspense,{fallback:Object(r.jsx)(K.a,{}),children:Object(r.jsx)(e,Object(y.a)({},t))})}},We=c.a.lazy((function(){return n.e(3).then(n.bind(null,300))})),Xe=c.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),Ye=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(we,{}),Object(r.jsx)(h,{}),Object(r.jsxs)("div",{className:"app-wraper-content",children:[Object(r.jsx)(O.b,{path:"/dialogs",render:Ve(We)}),Object(r.jsx)(O.b,{path:"/profile/:userId?",render:Ve(Xe)}),Object(r.jsx)(O.b,{path:"/users",render:function(){return Object(r.jsx)(ie,{})}}),Object(r.jsx)(O.b,{path:"/news",render:function(){return Object(r.jsx)(m,{})}}),Object(r.jsx)(O.b,{path:"/music",render:function(){return Object(r.jsx)(g,{})}}),Object(r.jsx)(O.b,{path:"/settings",render:function(){return Object(r.jsx)(v,{})}}),Object(r.jsx)(O.b,{path:"/login",render:function(){return Object(r.jsx)(ke,{})}})]})]}):Object(r.jsx)(K.a,{})}}]),n}(a.Component),Qe=Object(Z.d)(O.f,Object(x.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Oe());Promise.all([t]).then((function(){return e({type:Ee})}))}}}))(Ye),qe=function(e){return Object(r.jsx)(b.a,{children:Object(r.jsx)(x.a,{store:He,children:Object(r.jsx)(Qe,{})})})};i.a.render(Object(r.jsx)(qe,{}),document.getElementById("root")),o()},35:function(e,t,n){e.exports={item:"Users_item__3xQi3"}},42:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var r=n(3),a=n(30),c=n(1),s=(n(0),n(55)),i=n.n(s),o=n(91),u=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,["input","meta","child"])),r=t.touched&&t.error;return Object(c.jsxs)("div",{className:i.a.formControl+" "+(r?i.a.error:""),children:[Object(c.jsx)("div",{children:n.children}),r&&Object(c.jsx)("span",{children:t.error})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(c.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(c.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(c.jsxs)("div",{children:[Object(c.jsx)(o.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},s))," ",i]})}},43:function(e,t,n){"use strict";var r=n(1),a=(n(0),n.p+"static/media/279.0e705601.gif");t.a=function(e){return Object(r.jsx)("img",{src:a})}},55:function(e,t,n){e.exports={formControl:"FormsControl_formControl__3qaLe",error:"FormsControl_error__pjH4W",formSummaryError:"FormsControl_formSummaryError__2MfU2"}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},71:function(e,t,n){e.exports={pugianator:"Paginator_pugianator__3Ik9j",pageNumber:"Paginator_pageNumber__2VApU",selectedPage:"Paginator_selectedPage__39XOz"}},72:function(e,t,n){e.exports={header:"Header_header__1Q5ya",loginBlock:"Header_loginBlock__1h1fN",active:"Header_active__35BYs"}},97:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return v})),n.d(t,"g",(function(){return x})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return C}));var r=n(9),a=n.n(r),c=n(13),s=n(47),i=n(3),o=n(14),u=n(31),l="ADD-POST",d="SET-USER-PROFILE",f="SET-STATUS",j="DELETE-POST",p="SAVE-PHOTO-SUCCESS",b={posts:[{id:1,massage:"Yooo",likesCount:12,commentCount:6},{id:2,massage:"Men, you...",likesCount:5,commentCount:2},{id:3,massage:"buetifull!",likesCount:2,commentCount:8},{id:4,massage:"Venera ebat dura...",likesCount:20,commentCount:13}],newPostText:"",profile:null,status:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[{id:5,massage:t.newPost,likesCount:0,commentCount:0}])});case d:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case f:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case p:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{data:{photos:t.photos}})});default:return e}},O=function(e){return{type:l,newPost:e}},g=function(e){return{type:f,status:e}},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n({type:d,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:p,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.id,t.next=3,o.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=9;break}n(m(c)),t.next=11;break;case 9:return n(Object(u.a)("edit_profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}},[[291,1,2]]]);
//# sourceMappingURL=main.a8211350.chunk.js.map