(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,,,,function(e,a,t){e.exports={menuWrapper:"hw5_menuWrapper__L4Trf",burgerMenu:"hw5_burgerMenu__3u8qH",containerMenuLinks:"hw5_containerMenuLinks__1lVWI",activeMenu:"hw5_activeMenu__2uvt2",menuLinks:"hw5_menuLinks__3iVxu",active:"hw5_active__2bRm8"}},,,,,,,function(e,a,t){e.exports={divMessageContainer:"Message_divMessageContainer__1rbKn",divImageMessageSize:"Message_divImageMessageSize__38u9X",imageMessageSize:"Message_imageMessageSize__15E7G",divMessageInfo:"Message_divMessageInfo__4CBr5",divMessageUserName:"Message_divMessageUserName__pOO3G",divMessageText:"Message_divMessageText__28vrZ"}},,function(e,a,t){e.exports={spanStyle:"HW6_spanStyle__orxBl",inputSize:"HW6_inputSize__1vcBi",buttonSize:"HW6_buttonSize__pUlCQ"}},,function(e,a,t){e.exports={buttonSize:"Affairs_buttonSize__3_Pk-"}},,function(e,a,t){e.exports={buttonContainer:"HW8_buttonContainer__3u0Yq",buttonSize:"HW8_buttonSize__2Z7aU"}},function(e,a,t){},,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1XBqa",errorInput:"SuperInputText_errorInput__1z5eT",error:"SuperInputText_error__2sRKL"}},function(e,a,t){e.exports={error:"Greeting_error__2TXRW",inputSize:"Greeting_inputSize__MLH8q",buttonSize:"Greeting_buttonSize__2gZdD",errorMessage:"Greeting_errorMessage__1mIf2"}},function(e,a,t){e.exports={labelStyle:"SuperCheckbox_labelStyle__3VMiR",checkbox:"SuperCheckbox_checkbox__3XwKc",spanClassName:"SuperCheckbox_spanClassName__2Zx-_"}},function(e,a,t){e.exports={column:"HW4_column__8Gn2U",inputSize:"HW4_inputSize__C_qMY",buttonSize:"HW4_buttonSize__2LUXJ"}},,function(e,a,t){e.exports={default:"SuperButton_default__3MJ5e",red:"SuperButton_red__yfB_f"}},function(e,a,t){e.exports={buttonSize:"Clock_buttonSize__3fVf2"}},function(e,a,t){e.exports={dark:"HW12_dark__2R4k3","dark-text":"HW12_dark-text__33A57",red:"HW12_red__hgpu4","red-text":"HW12_red-text__xzRSb",some:"HW12_some__1IeRl","some-text":"HW12_some-text__3nLSS"}},function(e,a,t){e.exports={wrapperHW13:"HW13_wrapperHW13__od2Vj",checkboxStyle:"HW13_checkboxStyle__QdBjJ"}},,,,,,,,,,,,,function(e,a,t){e.exports={buttonSize:"Affair_buttonSize__3ugG6"}},function(e,a,t){e.exports={range:"SuperRange_range__3lHo8"}},function(e,a,t){e.exports={sliderHW11Style:"SuperDoubleRange_sliderHW11Style__1mGJz"}},function(e,a,t){e.exports={superDoubleRangeContainer:"HW11_superDoubleRangeContainer__1Rz8S"}},,function(e,a,t){e.exports={App:"App_App__2Yw0x"}},,,function(e,a,t){e.exports=t(89)},,,,,,,,,function(e,a,t){},,,,,,,,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(2),i=t(17),u=t(3),s=t(18),m=t.n(s);function d(e){return r.a.createElement("div",{className:m.a.divMessageContainer},r.a.createElement("div",{className:m.a.divImageMessageSize},r.a.createElement("img",{className:m.a.imageMessageSize,src:e.avatar,alt:"User's avatar"})),r.a.createElement("div",{className:m.a.divMessageInfo},r.a.createElement("div",{className:m.a.divMessageUserName},e.name),r.a.createElement("div",{className:m.a.divMessageText},e.message)),r.a.createElement("div",null,e.time))}var p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",E="User_Name",v="some_text",f="22:00";function _(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1:",r.a.createElement(d,{avatar:p,name:E,message:v,time:f}))}var b=t(6),g=t(34),h=t.n(g),N=function(e){var a=e.red,t=e.className,n=Object(b.a)(e,["red","className"]),l="".concat(a?h.a.red:h.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},S=t(50),C=t.n(S);function k(e){return r.a.createElement("div",null,"".concat(e.affair.name," ").concat(e.affair.priority),r.a.createElement(N,{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:C.a.buttonSize},"X"))}var O=t(22),w=t.n(O);function j(e){var a=e.data.map((function(a){return r.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t=function(){e.setFilter("High")};return r.a.createElement("div",null,a,r.a.createElement(N,{onClick:function(){e.setFilter("All")},className:w.a.buttonSize},"All"),r.a.createElement(N,{onClick:t,className:w.a.buttonSize},"High"),r.a.createElement(N,{onClick:t,className:w.a.buttonSize},"High"),r.a.createElement(N,{onClick:function(){e.setFilter("Middle")},className:w.a.buttonSize},"Middle"),r.a.createElement(N,{onClick:function(){e.setFilter("Low")},className:w.a.buttonSize},"Low"))}var x=[{_id:1,name:"React",priority:"High"},{_id:2,name:"anime",priority:"Low"},{_id:3,name:"games",priority:"Low"},{_id:4,name:"work",priority:"High"},{_id:5,name:"html & css",priority:"Middle"},{_id:6,name:"porn",priority:"Low"}];function y(){var e=Object(n.useState)(x),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("All"),i=Object(o.a)(c,2),u=i[0],s=i[1],m=function(e,a){return"All"===a?e:"High"===a?e.filter((function(e){return"High"===e.priority})):"Low"===a?e.filter((function(e){return"Low"===e.priority})):"Middle"===a?e.filter((function(e){return"Middle"===e.priority})):e}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2:",r.a.createElement(j,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}))}var M=t(28),z=t(102),H=t(29),W=t.n(H),I=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,u=Object(b.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(W.a.error," ").concat(i||""),m="".concat(c?W.a.errorInput:W.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:"".concat(m," ").concat(o)},u)),c?r.a.createElement("span",{className:s},c):null)},B=t(30),T=t.n(B),L=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?"Error!!!":"";return r.a.createElement("div",null,r.a.createElement(I,{value:a,onChangeText:t,onEnter:n,className:T.a.inputSize}),r.a.createElement(N,{onClick:n,className:T.a.buttonSize},"add"),r.a.createElement("span",null,"Total Users: ",c),r.a.createElement("span",{className:T.a.errorMessage},o))},A=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(o.a)(l,2),i=c[0],u=c[1],s=Object(n.useState)(!1),m=Object(o.a)(s,2),d=m[0],p=m[1],E=a.length;return r.a.createElement(L,{name:i,setNameCallback:u,addUser:function(){""===i?p(!0):(p(!1),t(i),u(""),alert("Hello  ".concat(i,"!")))},error:d,totalUsers:E})};function R(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3:",r.a.createElement(A,{users:t,addUserCallback:function(e){var a={_id:Object(z.a)(),name:e};l([].concat(Object(M.a)(t),[a]))}}))}var U=t(31),G=t.n(U),F=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(b.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(G.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:G.a.labelStyle},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:G.a.spanClassName},l))},D=t(32),J=t.n(D);function q(){var e,a=Object(n.useState)(""),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(!1),u=Object(o.a)(i,2),s=u[0],m=u[1];e=!l;var d=l?"":"error",p=function(){d?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(l)};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4:",r.a.createElement("div",{className:J.a.column},r.a.createElement(I,{value:l,onChangeText:c,onEnter:p,error:d,className:J.a.inputSize}),r.a.createElement("br",null),r.a.createElement(N,{red:e,onClick:p,className:J.a.buttonSize},"delete"),r.a.createElement("br",null),r.a.createElement(F,{checked:s,onChangeChecked:m},"Some text"),r.a.createElement("br",null),r.a.createElement(F,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null))}t(25);function P(){return r.a.createElement("div",{className:"size"},r.a.createElement(_,null),r.a.createElement(y,null),r.a.createElement(R,null),r.a.createElement(q,null))}var X=t(20),K=t.n(X),Y=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(b.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),i=Object(n.useState)(!1),u=Object(o.a)(i,2),s=u[0],m=u[1],d=l||{},p=d.children,E=d.onDoubleClick,v=d.className,f=Object(b.a)(d,["children","onDoubleClick","className"]),_="".concat(K.a.spanStyle," ").concat(v);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(I,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),E&&E(e)},className:_},f),p||c.value))};function V(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function Z(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}function Q(){var e=Object(n.useState)(Z("editable-span-value","")),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6:",r.a.createElement("div",null,r.a.createElement(Y,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."},className:K.a.inputSize})),r.a.createElement(N,{onClick:function(){V("editable-span-value",t)},className:K.a.buttonSize},"save"),r.a.createElement(N,{onClick:function(){var e=Z("editable-span-value",t);l(e)},className:K.a.buttonSize},"restore"))}V("test",{x:"A",y:1}),Z("test",{x:"",y:0});var $=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(b.a)(e,["options","onChange","onChangeOption"]),l=a?a.map((function(e,a){return r.a.createElement("option",{key:a},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e.currentTarget.value)}},n),l)},ee=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(b.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e.currentTarget.value)}),o=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{type:"radio",name:a,value:e,checked:n===e,onChange:c}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},ae=["x","y","z"];function te(){var e=Object(n.useState)(ae[0]),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7:",r.a.createElement("div",null,r.a.createElement($,{options:ae,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ee,{name:"radio",options:ae,value:t,onChangeOption:l})))}var ne=function(e,a){switch(a.type){case"sort":var t=Object(M.a)(e);return"up"===a.payload?(t.sort((function(e,a){switch(e.name>a.name){case!0:return 1;case!1:return-1;default:return 0}})),t):"down"===a.payload?(t.sort((function(e,a){switch(e.name>a.name){case!0:return-1;case!1:return 1;default:return 0}})),t):e;case"check":return e.filter((function(e){return e.age>=18}));default:return e}},re=t(24),le=t.n(re),ce=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];function oe(){var e=Object(n.useState)(ce),a=Object(o.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},e.name,", ",e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8:",c,r.a.createElement("div",{className:le.a.buttonContainer},r.a.createElement("div",null,r.a.createElement(N,{onClick:function(){return l(ne(ce,{type:"sort",payload:"up"}))},className:le.a.buttonSize},"sort up")),r.a.createElement("div",null,r.a.createElement(N,{onClick:function(){return l(ne(ce,{type:"sort",payload:"down"}))},className:le.a.buttonSize},"sort down")),r.a.createElement("div",null,r.a.createElement(N,{onClick:function(){return l(ne(ce,{type:"check",payload:18}))},className:le.a.buttonSize},"check 18"))))}var ie=t(33),ue=t.n(ie),se=t(35),me=t.n(se);function de(){var e=Object(n.useState)(0),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(ue()().format("LTS")),i=Object(o.a)(c,2),u=i[0],s=i[1],m=Object(n.useState)(!1),d=Object(o.a)(m,2),p=d[0],E=d[1],v=function(){clearInterval(t)},f=u,_=ue()().format("MMM Do YY");return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}},f),p&&r.a.createElement("div",null,_),r.a.createElement(N,{onClick:function(){v();var e=window.setInterval((function(){s(ue()().format("LTS"))}),1e3);l(e)},className:me.a.buttonSize},"start"),r.a.createElement(N,{onClick:v,className:me.a.buttonSize},"stop"))}function pe(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9:",r.a.createElement(de,null))}var Ee=t(14),ve=t(21),fe={loading:!1},_e=function(e){return{type:"LOADING-HW10",loading:e}};t(67);function be(){var e=Object(Ee.b)(),a=Object(Ee.c)((function(e){return e.loading.loading}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10:",r.a.createElement("div",{className:"HW10"},a?r.a.createElement("div",{className:"windows8-wrapper"},r.a.createElement("div",{className:"windows8"},r.a.createElement("div",{className:"wBall",id:"wBall_1"},r.a.createElement("div",{className:"wInnerBall"})),r.a.createElement("div",{className:"wBall",id:"wBall_2"},r.a.createElement("div",{className:"wInnerBall"})),r.a.createElement("div",{className:"wBall",id:"wBall_3"},r.a.createElement("div",{className:"wInnerBall"})),r.a.createElement("div",{className:"wBall",id:"wBall_4"},r.a.createElement("div",{className:"wInnerBall"})),r.a.createElement("div",{className:"wBall",id:"wBall_5"},r.a.createElement("div",{className:"wInnerBall"})))):r.a.createElement("div",null,r.a.createElement(N,{onClick:function(){e(_e(!0)),setTimeout((function(){return e(_e(!1))}),5e3)},className:"buttonSize"},"set loading..."))))}var ge=t(51),he=t.n(ge),Ne=function(e){e.type;var a=e.onChange,t=e.onChangeRange,n=e.value,l=e.className,c=Object(b.a)(e,["type","onChange","onChangeRange","value","className"]),o="".concat(he.a.range," ").concat(l||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",value:n,onChange:function(e){a&&a(e),t&&t(+e.currentTarget.value)},className:o},c)))},Se=t(101),Ce=t(52),ke=t.n(Ce),Oe=function(e){var a=e.value,t=e.onChangeRange;return r.a.createElement("div",{className:ke.a.sliderHW11Style},r.a.createElement(Se.a,{value:a,onChange:function(e,a){t&&t(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider"}))},we=t(53),je=t.n(we);function xe(){var e=Object(n.useState)(0),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(100),i=Object(o.a)(c,2),u=i[0],s=i[1],m=[t,u];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11:",r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(Ne,{value:t,onChangeRange:l})),r.a.createElement("div",{className:je.a.superDoubleRangeContainer},r.a.createElement("span",null,t),r.a.createElement(Oe,{value:m,onChangeRange:function(e){"object"===typeof e&&(l(e[0]),s(e[1]))}}),r.a.createElement("span",null,u)),r.a.createElement("hr",null))}function ye(){return r.a.createElement("div",{className:"size"},r.a.createElement(Q,null),r.a.createElement(te,null),r.a.createElement(oe,null),r.a.createElement(pe,null),r.a.createElement(be,null),r.a.createElement(xe,null))}var Me={theme:"some"},ze=t(36),He=t.n(ze),We=["dark","red","some"];function Ie(){var e=Object(Ee.b)(),a=Object(Ee.c)((function(e){return e.theme.theme}));return r.a.createElement("div",{className:He.a[a],style:{height:"120px"}},r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("span",{className:He.a[a+"-text"]},"homeworks 12:")),r.a.createElement($,{options:We,value:a,onChangeOption:function(a){e(function(e){return{type:"CHANGE-THEME-HW12",theme:e}}(a))}}))}var Be=t(54),Te=t.n(Be),Le=function(e){return Te.a.post("https://neko-cafe-back.herokuapp.com/auth/test",{success:e})},Ae=t(37),Re=t.n(Ae);function Ue(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("no result"),i=Object(o.a)(c,2),u=i[0],s=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:Re.a.wrapperHW13},r.a.createElement(F,{checked:t,onChangeChecked:l,className:Re.a.checkboxStyle},"Checkbox for request"),r.a.createElement("button",{onClick:function(){return function(e){Le(e).then((function(e){s(e.data.errorText)})).catch((function(e){s(e.response.data.errorText)}))}(t)}},"Request"),"Result: ",u),r.a.createElement("hr",null))}function Ge(){return r.a.createElement("div",{className:"size"},r.a.createElement(Ie,null),r.a.createElement(Ue,null))}function Fe(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"mainBox"},r.a.createElement("div",{className:"err"},"404"),r.a.createElement("div",{className:"msg"},"Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?")))}var De="/pre-junior",Je="/junior",qe="/junior-plus";function Pe(){return r.a.createElement("div",null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,render:function(){return r.a.createElement(u.a,{to:De})}}),r.a.createElement(u.b,{path:De,exact:!0,render:function(){return r.a.createElement(P,null)}}),r.a.createElement(u.b,{path:Je,exact:!0,render:function(){return r.a.createElement(ye,null)}}),r.a.createElement(u.b,{path:qe,exact:!0,render:function(){return r.a.createElement(Ge,null)}}),r.a.createElement(u.b,{path:"/404",render:function(){return r.a.createElement(Fe,null)}}),r.a.createElement(u.a,{from:"*",to:"/404"})))}var Xe=t(11),Ke=t.n(Xe);function Ye(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:Ke.a.menuWrapper},r.a.createElement("div",{className:Ke.a.burgerMenu,onClick:function(){l(!t)}},"\u2630"),r.a.createElement("div",{className:"".concat(Ke.a.containerMenuLinks," ").concat(t&&Ke.a.activeMenu)},r.a.createElement(i.b,{to:De,activeClassName:Ke.a.active,className:Ke.a.menuLinks},"PreJunior"),r.a.createElement(i.b,{to:Je,activeClassName:Ke.a.active,className:Ke.a.menuLinks},"Junior"),r.a.createElement(i.b,{to:qe,activeClassName:Ke.a.active,className:Ke.a.menuLinks},"Junior+")))}function Ve(){return r.a.createElement("div",null,r.a.createElement(Ye,null),r.a.createElement(Pe,null))}var Ze=t(55),Qe=t.n(Ze),$e=t(40),ea=Object($e.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOADING-HW10":return Object(ve.a)(Object(ve.a)({},e),{},{loading:a.loading});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE-THEME-HW12":return Object(ve.a)(Object(ve.a)({},e),{},{theme:a.theme});default:return e}}}),aa=Object($e.b)(ea),ta=aa;window.store=aa;var na=function(){return r.a.createElement(Ee.a,{store:ta},r.a.createElement(i.a,null,r.a.createElement("div",{className:Qe.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Ve,null))))};t(88);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(na,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[58,1,2]]]);
//# sourceMappingURL=main.19823f5f.chunk.js.map