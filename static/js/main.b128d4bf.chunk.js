(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{106:function(e,t,n){"use strict";t.a=n.p+"static/media/oldrich-muller.f382a245.jpg"},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(45),a=n(5),c="ADD-MESSAGE",s={dialogs:[{id:1,name:"Stepan"},{id:2,name:"Iban"},{id:3,name:"Nastya"},{id:4,name:"Dima"},{id:5,name:"Max"},{id:6,name:"Aleona"}],massages:[{id:1,massage:"Hi"},{id:2,massage:"You podor"},{id:3,massage:"Fack? Men..."},{id:4,massage:"Venera ebat dura..."}]},i=function(e){return{type:c,newMesagwBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMesagwBody;return Object(a.a)(Object(a.a)({},e),{},{massages:[].concat(Object(r.a)(e.massages),[{id:5,massage:n}])});default:return e}}},15:function(e,t,n){e.exports={nav:"Navbar_nav__2BOi4",item:"Navbar_item__3PwUG",active:"Navbar_active__3Q2ak"}},167:function(e,t,n){},168:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(133),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"77758c63-657b-4d55-8010-f262201c0125"}}),c={getUsers:function(e,t){return a.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.delete("/follow/".concat(e)).then((function(e){return e.data}))},unFollow:function(e){return a.post("/follow/".concat(e)).then((function(e){return e.data}))}},s={getProfile:function(e){return a.get("profile/"+e).then((function(e){return e}))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("/auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("/auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("/auth/login")}}},291:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=n(65),i=n.n(s),o=(n(167),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,298)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))}),u=n(35),l=n(36),d=n(39),j=n(38),f=(n(168),n(15)),b=n.n(f),p=n(13),g=function(){return Object(r.jsxs)("nav",{className:b.a.nav,children:[Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/profile",activeClassName:b.a.active,children:"Profile"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/dialogs",activeClassName:b.a.active,children:"Messages"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/users",activeClassName:b.a.active,children:"Users"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/news",activeClassName:b.a.active,children:"News"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/music",activeClassName:b.a.active,children:"Music"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/settings",activeClassName:b.a.active,children:"Settings"})})]})},h=n(10),O=(n(173),function(){return Object(r.jsx)("div",{children:"Music"})}),m=(n(174),function(){return Object(r.jsx)("div",{children:"News"})}),v=(n(175),function(){return Object(r.jsx)("div",{children:"Settings"})}),x=n(17),w=n(11),P=n.n(w),C=n(20),S=n(45),y=n(5),_=n(21),N=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(y.a)(Object(y.a)({},e),r):e}))},I="FOLLOW",k="UNFOLLOW",E="SET-USERS",F="SET-CURRENT-PAGE",U="SET-TOTAL-USERS-COUNT",T="TOGGLE-IS-FETCHING",z="TOGGLE-FOLLOWING-IN-PROGRESS",A={users:[],pageSize:5,totalUserCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},L=function(e){return{type:F,currentPage:e}},M=function(e){return{type:T,isFetching:e}},D=function(e,t){return{type:z,followingProgress:e,userId:t}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(y.a)(Object(y.a)({},e),{},{users:N(e.users,t.userId,"id",{followed:!0})});case k:return Object(y.a)(Object(y.a)({},e),{},{users:N(e.users,t.userId,"id",{followed:!1})});case E:return Object(y.a)(Object(y.a)({},e),{},{users:t.users});case F:return Object(y.a)(Object(y.a)({},e),{},{currentPage:t.currentPage});case U:return Object(y.a)(Object(y.a)({},e),{},{totalUserCount:t.count});case T:return Object(y.a)(Object(y.a)({},e),{},{isFetching:t.isFetching});case z:return Object(y.a)(Object(y.a)({},e),{},{followingInProgress:t.followingProgress?[].concat(Object(S.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!=t.userId}))]});default:return e}},G=n(30),B=n(130),H=n(70),V=n.n(H),W=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,s=e.portionSize,i=void 0===s?30:s,o=Object(G.a)(e,["totalItemsCount","pageSize","currentPage","portionSize"]),u=Math.ceil(t/n),l=[],d=1;d<=u;d++)l.push(d);var j=Math.ceil(u/i),f=Object(a.useState)(1),b=Object(B.a)(f,2),p=b[0],g=b[1],h=(p-1)*i+1,O=p*i;return Object(r.jsxs)("div",{className:V.a.pugianator,children:[p>1&&Object(r.jsx)("button",{onClick:function(){g(p-1)},children:"PREV"}),l.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(r.jsx)("span",{className:V.a.pageNumber,children:Object(r.jsx)("span",{className:c===e&&V.a.selectedPage,onClick:function(){o.onPageChanged(e)},children:e},e)})})),j>p&&Object(r.jsx)("button",{onClick:function(){g(p+1)},children:"NEXT"})]})},X=n(34),Y=n.n(X),Q=n(106),q=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,c=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)(p.b,{to:"/profile/"+t.id,children:Object(r.jsx)("div",{className:Y.a.item,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:Q.a})})}),Object(r.jsx)("div",{className:Y.a.item,children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{className:Y.a.item,children:t.name}),Object(r.jsx)("div",{className:Y.a.item,children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{className:Y.a.item,children:"user.location.city"}),Object(r.jsx)("div",{className:Y.a.item,children:"user.location.country"})]})]})]})},J=function(e){var t=e.currentPage,n=e.onPageChanged,a=e.totalItemsCount,c=e.pageSize,s=Object(G.a)(e,["currentPage","onPageChanged","totalItemsCount","pageSize"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(W,{currentPage:t,onPageChanged:n,pageSize:c,totalItemsCount:a}),s.users.map((function(e){return Object(r.jsx)(q,{user:e,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow},e.id)}))]})},K=n(41),Z=n(9),$=n(134),ee=Object($.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),te=function(e){return e.usersPage.pageSize},ne=function(e){return e.usersPage.totalUserCount},re=function(e){return e.usersPage.currentPage},ae=function(e){return e.usersPage.isFetching},ce=function(e){return e.usersPage.followingInProgress},se=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(K.a,{}):null,Object(r.jsx)(J,{totalItemsCount:this.props.totalUserCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),ie=Object(Z.d)(Object(x.b)((function(e){return{users:ee(e),pageSize:te(e),totalUserCount:ne(e),currentPage:re(e),isFetching:ae(e),followingInProgress:ce(e)}}),{follow:function(e){return function(){var t=Object(C.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(D(!0,e)),t.next=3,_.c.unFollow(e);case 3:0===t.sent.resultCode&&n({type:I,userId:e}),n(D(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(C.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(D(!0,e)),t.next=3,_.c.follow(e);case 3:0===t.sent.resultCode&&n({type:k,userId:e}),n(D(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:L,setIsFetching:M,toggleFollowingProgress:D,getUsers:function(e,t){return function(){var n=Object(C.a)(P.a.mark((function n(r){var a;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(M(!0)),r(L(e)),n.next=4,_.c.getUsers(e,t);case 4:a=n.sent,r(M(!1)),r((s=a.items,{type:E,users:s})),r((c=a.totalCount,{type:U,count:c}));case 8:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(se),oe=n(71),ue=n.n(oe),le=function(e){return Object(r.jsxs)("header",{className:ue.a.header,children:[Object(r.jsx)("img",{src:"https://www.logo.wine/a/logo/Pornhub/Pornhub-Logo.wine.svg"}),Object(r.jsx)("div",{className:ue.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(r.jsx)(p.b,{to:"/login",activeClassName:ue.a.active,children:"Login"})})]})},de=n(56),je="SET-USERS-DATA",fe={email:null,id:null,login:null,isAuth:!1,isFetching:!0},be=function(e,t,n,r){return{type:je,data:{email:e,id:t,login:n,isAuth:r}}},pe=function(){return function(){var e=Object(C.a)(P.a.mark((function e(t){var n,r,a,c,s;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.email,c=r.id,s=r.login,t(be(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ge=function(){return function(){var e=Object(C.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.logout();case 2:0===e.sent.data.resultCode&&t(be(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:return Object(y.a)(Object(y.a)({},e),t.data);default:return e}},Oe=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(le,Object(y.a)({},this.props))}}]),n}(c.a.Component),me=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:ge})(Oe),ve=n(128),xe=n(129),we=n(66),Pe=n(76),Ce=n(53),Se=n.n(Ce),ye=Object(xe.a)({form:"login"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(ve.a,{placeholder:"Email",name:"email",component:we.a,validate:[Pe.b]})}),Object(r.jsx)("div",{children:Object(r.jsx)(ve.a,{placeholder:"Password",name:"password",type:"password",component:we.a,validate:[Pe.b]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(ve.a,{type:"checkbox",name:"rememberMe",component:we.a}),"Remember me"]}),e.error&&Object(r.jsx)("div",{className:Se.a.formSummaryError,children:e.error}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),_e=Object(x.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(C.a)(P.a.mark((function r(a){var c,s;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(pe()):(s=c.data.messages.length>0?c.data.messages:"Some error",a(Object(de.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},logout:ge})((function(e){return e.isAuth?Object(r.jsx)(h.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"LOGIN"}),Object(r.jsx)(ye,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ne="INITIALIZED-SUCCESS",Ie={initialized:!1},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(y.a)(Object(y.a)({},e),{},{initialized:!0});default:return e}},Ee=n(127),Fe={},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;return e},Te=n(136),ze=n(96),Ae=n(131),Le=Object(Z.c)({profilePage:ze.d,massagesPage:Ee.b,sidebarPage:Ue,usersPage:R,auth:he,form:Ae.a,app:ke}),Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,De=Object(Z.e)(Le,Me(Object(Z.a)(Te.a)));window.__store__=De;var Re=De,Ge=function(e){return function(t){return Object(r.jsx)(c.a.Suspense,{fallback:Object(r.jsx)(K.a,{}),children:Object(r.jsx)(e,Object(y.a)({},t))})}},Be=c.a.lazy((function(){return n.e(3).then(n.bind(null,300))})),He=c.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),Ve=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(me,{}),Object(r.jsx)(g,{}),Object(r.jsxs)("div",{className:"app-wraper-content",children:[Object(r.jsx)(h.b,{path:"/dialogs",render:Ge(Be)}),Object(r.jsx)(h.b,{path:"/profile/:userId?",render:Ge(He)}),Object(r.jsx)(h.b,{path:"/users",render:function(){return Object(r.jsx)(ie,{})}}),Object(r.jsx)(h.b,{path:"/news",render:function(){return Object(r.jsx)(m,{})}}),Object(r.jsx)(h.b,{path:"/music",render:function(){return Object(r.jsx)(O,{})}}),Object(r.jsx)(h.b,{path:"/settings",render:function(){return Object(r.jsx)(v,{})}}),Object(r.jsx)(h.b,{path:"/login",render:function(){return Object(r.jsx)(_e,{})}})]})]}):Object(r.jsx)(K.a,{})}}]),n}(a.Component),We=Object(Z.d)(h.f,Object(x.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(pe());Promise.all([t]).then((function(){return e({type:Ne})}))}}}))(Ve),Xe=function(e){return Object(r.jsx)(p.a,{children:Object(r.jsx)(x.a,{store:Re,children:Object(r.jsx)(We,{})})})};i.a.render(Object(r.jsx)(Xe,{}),document.getElementById("root")),o()},34:function(e,t,n){e.exports={item:"Users_item__3xQi3"}},41:function(e,t,n){"use strict";var r=n(1),a=(n(0),n.p+"static/media/279.0e705601.gif");t.a=function(e){return Object(r.jsx)("img",{src:a})}},53:function(e,t,n){e.exports={formControl:"FormsControl_formControl__3qaLe",error:"FormsControl_error__pjH4W",formSummaryError:"FormsControl_formSummaryError__2MfU2"}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(5),a=n(30),c=n(1),s=(n(0),n(53)),i=n.n(s),o=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,["input","meta","child"])),r=t.touched&&t.error;return Object(c.jsxs)("div",{className:i.a.formControl+" "+(r?i.a.error:""),children:[Object(c.jsx)("div",{children:n.children}),r&&Object(c.jsx)("span",{children:t.error})]})},u=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(c.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(c.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},70:function(e,t,n){e.exports={pugianator:"Paginator_pugianator__3Ik9j",pageNumber:"Paginator_pageNumber__2VApU",selectedPage:"Paginator_selectedPage__39XOz"}},71:function(e,t,n){e.exports={header:"Header_header__1Q5ya",loginBlock:"Header_loginBlock__1h1fN",active:"Header_active__35BYs"}},76:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},96:function(e,t,n){"use strict";n.d(t,"d",(function(){return b})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return O})),n.d(t,"e",(function(){return m}));var r=n(11),a=n.n(r),c=n(20),s=n(45),i=n(5),o=n(21),u="ADD-POST",l="SET-USER-PROFILE",d="SET-STATUS",j="DELETE-POST",f={posts:[{id:1,massage:"Yooo",likesCount:12,commentCount:6},{id:2,massage:"Men, you...",likesCount:5,commentCount:2},{id:3,massage:"Facking buetifull!",likesCount:2,commentCount:8},{id:4,massage:"Venera ebat dura...",likesCount:20,commentCount:13}],newPostText:"",profile:null,status:""},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[{id:5,massage:t.newPost,likesCount:0,commentCount:0}])});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}},p=function(e){return{type:u,newPost:e}},g=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n({type:l,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}},[[291,1,2]]]);
//# sourceMappingURL=main.b128d4bf.chunk.js.map