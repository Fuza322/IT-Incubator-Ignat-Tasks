(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={menuWrapper:"hw5_menuWrapper__L4Trf",burgerMenu:"hw5_burgerMenu__3u8qH",containerMenuLinks:"hw5_containerMenuLinks__1lVWI",activeMenu:"hw5_activeMenu__2uvt2",menuLinks:"hw5_menuLinks__3iVxu",active:"hw5_active__2bRm8"}},,function(e,a,t){e.exports={divMessageContainer:"Message_divMessageContainer__1rbKn",divImageMessageSize:"Message_divImageMessageSize__38u9X",imageMessageSize:"Message_imageMessageSize__15E7G",divMessageInfo:"Message_divMessageInfo__4CBr5",divMessageUserName:"Message_divMessageUserName__pOO3G",divMessageText:"Message_divMessageText__28vrZ"}},,function(e,a,t){e.exports={spanStyle:"HW6_spanStyle__orxBl",inputSize:"HW6_inputSize__1vcBi",buttonSize:"HW6_buttonSize__pUlCQ"}},function(e,a,t){e.exports={buttonSize:"Affairs_buttonSize__3_Pk-"}},,,,function(e,a,t){e.exports={buttonContainer:"HW8_buttonContainer__3u0Yq",buttonSize:"HW8_buttonSize__2Z7aU"}},function(e,a,t){},,,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1XBqa",errorInput:"SuperInputText_errorInput__1z5eT",error:"SuperInputText_error__2sRKL"}},function(e,a,t){e.exports={error:"Greeting_error__2TXRW",inputSize:"Greeting_inputSize__MLH8q",buttonSize:"Greeting_buttonSize__2gZdD",errorMessage:"Greeting_errorMessage__1mIf2"}},function(e,a,t){e.exports={labelStyle:"SuperCheckbox_labelStyle__3VMiR",checkbox:"SuperCheckbox_checkbox__3XwKc",spanClassName:"SuperCheckbox_spanClassName__2Zx-_"}},function(e,a,t){e.exports={column:"HW4_column__8Gn2U",inputSize:"HW4_inputSize__C_qMY",buttonSize:"HW4_buttonSize__2LUXJ"}},,,function(e,a,t){e.exports={default:"SuperButton_default__3MJ5e",red:"SuperButton_red__yfB_f"}},function(e,a,t){e.exports={buttonSize:"Clock_buttonSize__3fVf2"}},,,,,,,function(e,a,t){e.exports={buttonSize:"Affair_buttonSize__3ugG6"}},function(e,a,t){e.exports={App:"App_App__2Yw0x"}},function(e,a,t){e.exports=t(50)},,,,,,,,,function(e,a,t){},,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(1),o=t(7),s=t(2),u=t(8),m=t.n(u);function d(e){return r.a.createElement("div",{className:m.a.divMessageContainer},r.a.createElement("div",{className:m.a.divImageMessageSize},r.a.createElement("img",{className:m.a.imageMessageSize,src:e.avatar,alt:"User's avatar"})),r.a.createElement("div",{className:m.a.divMessageInfo},r.a.createElement("div",{className:m.a.divMessageUserName},e.name),r.a.createElement("div",{className:m.a.divMessageText},e.message)),r.a.createElement("div",null,e.time))}var v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",E="User_Name",p="some_text",f="22:00";function _(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1:",r.a.createElement(d,{avatar:v,name:E,message:p,time:f}))}var b=t(3),g=t(27),h=t.n(g),N=function(e){var a=e.red,t=e.className,n=Object(b.a)(e,["red","className"]),l="".concat(a?h.a.red:h.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},S=t(35),C=t.n(S);function k(e){return r.a.createElement("div",null,"".concat(e.affair.name," ").concat(e.affair.priority),r.a.createElement(N,{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:C.a.buttonSize},"X"))}var w=t(11),O=t.n(w);function j(e){var a=e.data.map((function(a){return r.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t=function(){e.setFilter("High")};return r.a.createElement("div",null,a,r.a.createElement(N,{onClick:function(){e.setFilter("All")},className:O.a.buttonSize},"All"),r.a.createElement(N,{onClick:t,className:O.a.buttonSize},"High"),r.a.createElement(N,{onClick:t,className:O.a.buttonSize},"High"),r.a.createElement(N,{onClick:function(){e.setFilter("Middle")},className:O.a.buttonSize},"Middle"),r.a.createElement(N,{onClick:function(){e.setFilter("Low")},className:O.a.buttonSize},"Low"))}var y=[{_id:1,name:"React",priority:"High"},{_id:2,name:"anime",priority:"Low"},{_id:3,name:"games",priority:"Low"},{_id:4,name:"work",priority:"High"},{_id:5,name:"html & css",priority:"Middle"},{_id:6,name:"porn",priority:"Low"}];function M(){var e=Object(n.useState)(y),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("All"),o=Object(i.a)(c,2),s=o[0],u=o[1],m=function(e,a){return"All"===a?e:"High"===a?e.filter((function(e){return"High"===e.priority})):"Low"===a?e.filter((function(e){return"Low"===e.priority})):"Middle"===a?e.filter((function(e){return"Middle"===e.priority})):e}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2:",r.a.createElement(j,{data:m,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}))}var z=t(20),x=t(52),I=t(21),B=t.n(I),L=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,i=e.className,o=e.spanClassName,s=Object(b.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(B.a.error," ").concat(o||""),m="".concat(c?B.a.errorInput:B.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:"".concat(m," ").concat(i)},s)),c?r.a.createElement("span",{className:u},c):null)},T=t(22),H=t.n(T),W=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,i=l?"Error!!!":"";return r.a.createElement("div",null,r.a.createElement(L,{value:a,onChangeText:t,onEnter:n,className:H.a.inputSize}),r.a.createElement(N,{onClick:n,className:H.a.buttonSize},"add"),r.a.createElement("span",null,"Total Users: ",c),r.a.createElement("span",{className:H.a.errorMessage},i))},A=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(!1),m=Object(i.a)(u,2),d=m[0],v=m[1],E=a.length;return r.a.createElement(W,{name:o,setNameCallback:s,addUser:function(){""===o?v(!0):(v(!1),t(o),s(""),alert("Hello  ".concat(o,"!")))},error:d,totalUsers:E})};function U(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3:",r.a.createElement(A,{users:t,addUserCallback:function(e){var a={_id:Object(x.a)(),name:e};l([].concat(Object(z.a)(t),[a]))}}))}var F=t(23),G=t.n(F),J=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(b.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),i="".concat(G.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:G.a.labelStyle},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:i},c)),l&&r.a.createElement("span",{className:G.a.spanClassName},l))},P=t(24),q=t.n(P);function D(){var e,a=Object(n.useState)(""),t=Object(i.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],m=s[1];e=!l;var d=l?"":"error",v=function(){d?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(l)};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4:",r.a.createElement("div",{className:q.a.column},r.a.createElement(L,{value:l,onChangeText:c,onEnter:v,error:d,className:q.a.inputSize}),r.a.createElement("br",null),r.a.createElement(N,{red:e,onClick:v,className:q.a.buttonSize},"delete "),r.a.createElement("br",null),r.a.createElement(J,{checked:u,onChangeChecked:m},"Some text "),r.a.createElement("br",null),r.a.createElement(J,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null))}t(16);function X(){return r.a.createElement("div",{className:"size"},r.a.createElement(_,null),r.a.createElement(M,null),r.a.createElement(U,null),r.a.createElement(D,null))}var K=t(14),Y=t(31),R=t(33),Z={loading:!1},V=function(e){return{type:"LOADING-HW10",loading:e}},Q=Object(Y.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOADING-HW10":return Object(R.a)(Object(R.a)({},e),{},{loading:a.loading});default:return e}}}),$=Object(Y.b)(Q),ee=$;window.store=$;var ae=t(10),te=t.n(ae),ne=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(b.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],m=s[1],d=l||{},v=d.children,E=d.onDoubleClick,p=d.className,f=Object(b.a)(d,["children","onDoubleClick","className"]),_="".concat(te.a.spanStyle," ").concat(p);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(L,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),E&&E(e)},className:_},f),v||c.value))};function re(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function le(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}function ce(){var e=Object(n.useState)(le("editable-span-value","")),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6:",r.a.createElement("div",null,r.a.createElement(ne,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."},className:te.a.inputSize})),r.a.createElement(N,{onClick:function(){re("editable-span-value",t)},className:te.a.buttonSize},"save"),r.a.createElement(N,{onClick:function(){var e=le("editable-span-value",t);l(e)},className:te.a.buttonSize},"restore"))}re("test",{x:"A",y:1}),le("test",{x:"",y:0});var ie=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(b.a)(e,["options","onChange","onChangeOption"]),l=a?a.map((function(e,a){return r.a.createElement("option",{key:a},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e.currentTarget.value)}},n),l)},oe=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(b.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e.currentTarget.value)}),i=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{type:"radio",name:a,value:e,checked:n===e,onChange:c}),e)})):[];return r.a.createElement(r.a.Fragment,null,i)},se=["x","y","z"];function ue(){var e=Object(n.useState)(se[0]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7:",r.a.createElement("div",null,r.a.createElement(ie,{options:se,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(oe,{name:"radio",options:se,value:t,onChangeOption:l})))}var me=function(e,a){switch(a.type){case"sort":var t=Object(z.a)(e);return"up"===a.payload?(t.sort((function(e,a){switch(e.name>a.name){case!0:return 1;case!1:return-1;default:return 0}})),t):"down"===a.payload?(t.sort((function(e,a){switch(e.name>a.name){case!0:return-1;case!1:return 1;default:return 0}})),t):e;case"check":return e.filter((function(e){return e.age>=18}));default:return e}},de=t(15),ve=t.n(de),Ee=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];function pe(){var e=Object(n.useState)(Ee),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},e.name,", ",e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8:",c,r.a.createElement("div",{className:ve.a.buttonContainer},r.a.createElement("div",null,r.a.createElement(N,{onClick:function(){return l(me(Ee,{type:"sort",payload:"up"}))},className:ve.a.buttonSize},"sort up")),r.a.createElement("div",null,r.a.createElement(N,{onClick:function(){return l(me(Ee,{type:"sort",payload:"down"}))},className:ve.a.buttonSize},"sort down")),r.a.createElement("div",null,r.a.createElement(N,{onClick:function(){return l(me(Ee,{type:"check",payload:18}))},className:ve.a.buttonSize},"check 18"))))}var fe=t(25),_e=t.n(fe),be=t(28),ge=t.n(be);function he(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(_e()().format("LTS")),o=Object(i.a)(c,2),s=o[0],u=o[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),v=d[0],E=d[1],p=function(){clearInterval(t)},f=s,_=_e()().format("MMM Do YY");return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}},f),v&&r.a.createElement("div",null,_),r.a.createElement(N,{onClick:function(){p();var e=window.setInterval((function(){u(_e()().format("LTS"))}),1e3);l(e)},className:ge.a.buttonSize},"start"),r.a.createElement(N,{onClick:p,className:ge.a.buttonSize},"stop"))}function Ne(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9:",r.a.createElement(he,null))}t(46);function Se(){var e=Object(K.b)(),a=Object(K.c)((function(e){return e.loading.loading}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10:",r.a.createElement("div",{className:"HW10"},a?r.a.createElement("div",{className:"windows8-wrapper"},r.a.createElement("div",{className:"windows8"},r.a.createElement("div",{className:"wBall",id:"wBall_1"},r.a.createElement("div",{className:"wInnerBall"})),r.a.createElement("div",{className:"wBall",id:"wBall_2"},r.a.createElement("div",{className:"wInnerBall"})),r.a.createElement("div",{className:"wBall",id:"wBall_3"},r.a.createElement("div",{className:"wInnerBall"})),r.a.createElement("div",{className:"wBall",id:"wBall_4"},r.a.createElement("div",{className:"wInnerBall"})),r.a.createElement("div",{className:"wBall",id:"wBall_5"},r.a.createElement("div",{className:"wInnerBall"})))):r.a.createElement("div",null,r.a.createElement(N,{onClick:function(){e(V(!0)),setTimeout((function(){return e(V(!1))}),5e3)},className:"buttonSize"},"set loading..."))))}function Ce(){return r.a.createElement("div",{className:"size"},r.a.createElement(ce,null),r.a.createElement(ue,null),r.a.createElement(pe,null),r.a.createElement(Ne,null),r.a.createElement(K.a,{store:ee},r.a.createElement(Se,null)))}function ke(){return r.a.createElement("div",{className:"size"},r.a.createElement("div",{className:"title"},"Junior+ Page"))}function we(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"mainBox"},r.a.createElement("div",{className:"err"},"404"),r.a.createElement("div",{className:"msg"},"Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?")))}var Oe="/pre-junior",je="/junior",ye="/junior-plus";function Me(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,render:function(){return r.a.createElement(s.a,{to:Oe})}}),r.a.createElement(s.b,{path:Oe,exact:!0,render:function(){return r.a.createElement(X,null)}}),r.a.createElement(s.b,{path:je,exact:!0,render:function(){return r.a.createElement(Ce,null)}}),r.a.createElement(s.b,{path:ye,exact:!0,render:function(){return r.a.createElement(ke,null)}}),r.a.createElement(s.b,{path:"/404",render:function(){return r.a.createElement(we,null)}}),r.a.createElement(s.a,{from:"*",to:"/404"})))}var ze=t(6),xe=t.n(ze);function Ie(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:xe.a.menuWrapper},r.a.createElement("div",{className:xe.a.burgerMenu,onClick:function(){l(!t)}},"\u2630"),r.a.createElement("div",{className:"".concat(xe.a.containerMenuLinks," ").concat(t&&xe.a.activeMenu)},r.a.createElement(o.b,{to:Oe,activeClassName:xe.a.active,className:xe.a.menuLinks},"PreJunior"),r.a.createElement(o.b,{to:je,activeClassName:xe.a.active,className:xe.a.menuLinks},"Junior"),r.a.createElement(o.b,{to:ye,activeClassName:xe.a.active,className:xe.a.menuLinks},"Junior+")))}function Be(){return r.a.createElement("div",null,r.a.createElement(Ie,null),r.a.createElement(Me,null))}var Le=t(36),Te=t.n(Le);var He=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:Te.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Be,null)))};t(49);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(He,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[37,1,2]]]);
//# sourceMappingURL=main.20d07ebf.chunk.js.map