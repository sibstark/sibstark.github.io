(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[887],{2193:function(e,n,t){"use strict";t.r(n);var a=t(23),r=t(258),i=t(0),o=t.n(i),c=t(2107),l=t(2226),m=t(2232),s=t(2207),d=t(17),u=t(139),f=t(192),b=t(75),p=t(39),g=t(12),v=t.n(g),E=t(2221),h=t(8),y=t(9),j=t(10),O=t(921);function k(){var e=Object(j.a)(["\n  "," {\n    margin-bottom: 0;\n    "," {\n      &:last-child {\n        "," {\n          border-bottom: 0;\n        }\n      }\n    }\n  }\n"]);return k=function(){return e},e}function N(){var e=Object(j.a)(["\n  margin: 0;\n  margin-left: 0.25rem;\n  padding-left: 1rem;\n  li {\n    list-style-type: disc;\n    padding-bottom: 0.5rem;\n    margin-bottom: 0.5rem;\n    border-bottom: 1px solid #ffffff;\n    &:last-child {\n      margin-bottom: 0;\n      border-bottom: 0;\n      padding-bottom: 0;\n    }\n  }\n"]);return N=function(){return e},e}function x(){var e=Object(j.a)(["\n  padding: 0.75rem;\n  border-radius: ",";\n  margin-bottom: 0.5rem;\n  background-color: #f0f0f7;\n"]);return x=function(){return e},e}function I(){var e=Object(j.a)(["\n  display: block;\n"]);return I=function(){return e},e}function D(){var e=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.375rem 0.5rem;\n  background-color: #f0f0f7;\n  margin-bottom: 0.5rem;\n  border-radius: ",";\n  user-select: none;\n  cursor: pointer;\n\n  .info-icon {\n    margin-right: 0.5rem;\n  }\n  .styled-icon {\n    background-color: #ffffff;\n    border-radius: 50%;\n    width: 28px;\n    height: 28px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #dddddd;\n    .icon {\n      font-size: 0.65rem;\n    }\n  }\n"]);return D=function(){return e},e}var M=y.e.div(D(),(function(e){return e.theme.radius})),w=y.e.div(I()),H=y.e.div(x(),(function(e){return e.theme.radius})),B=y.e.ul(N()),C=y.e.div(k(),w,O.a,M),S=function(e){var n=e.polices,t=e.info,a=e.payInfo,i=e.tarifInfo,c=Object(d.c)(r.b).t;return o.a.createElement(l.a,{triggerBefore:!0,isOpened:!!n,trigger:o.a.createElement(M,null,o.a.createElement("span",null,o.a.createElement(u.a,{icon:"info-circle",className:"info-icon"}),c(a?"Payment terms":"Cancellation conditions")),o.a.createElement("span",{className:"styled-icon"},o.a.createElement(u.a,{icon:"chevron-down",className:"icon flipping-icon-vertical"})))},o.a.createElement(H,null,o.a.createElement("div",null,null===i||void 0===i?void 0:i.map((function(e){var a;return"Hotel"===e.type&&o.a.createElement(P,{key:e.id,tarif:null===e||void 0===e||null===(a=e.tariffInfo)||void 0===a?void 0:a.isNonRefundable,info:t,polices:n})})),null===a||void 0===a?void 0:a.map((function(e){return o.a.createElement("div",{key:e.date},c("Payment until")," ",v()(e.date).format("DD MMMM YYYY HH:MM")," - ",e.percent,"%")})))))},P=function(e){var n=e.info,t=e.polices,a=e.tarif,i=Object(d.c)(r.b).t;return o.a.createElement("div",null,t&&o.a.createElement(o.a.Fragment,null,a&&o.a.createElement("span",{className:"text-danger m-b-10"},i("Tariff is non refundable")),o.a.createElement(B,null,t.map((function(e,n){return o.a.createElement("li",{key:"policy_".concat(n),className:"".concat(a&&"text-red")},"".concat(i("date_from")," ").concat(v()(e.dateFrom).format("HH:mm DD MMM")," = "),0===e.amount&&""!==e.comment&&o.a.createElement("span",null,e.comment),e.amount>0&&o.a.createElement("span",null,e.amount,o.a.createElement(m.a,{currencyCode:e.currencyCode}),e.comment&&o.a.createElement("div",null,e.comment)))})))),n&&o.a.createElement("div",null,a&&o.a.createElement("span",{className:"text-danger m-b-10"},i("Tariff is non refundable")),n.map((function(e,n){return o.a.createElement("div",{key:n,className:"".concat(a&&"text-red")},o.a.createElement("pre",{style:{width:"100%",whiteSpace:"pre-wrap",marginBottom:0,lineHeight:1.3,fontSize:"0.875rem"}},e.description))}))))};n.default=Object(p.connect)((function(e){return{tarifInfo:e.basketData.shoppingCart.services,tourDescription:e.basketData.tour&&e.basketData.tour.description,tourDateBegin:e.basketData.tour&&e.basketData.tour.dateBegin,cancelationInfo:e.basketCancellation.data,paymentInfo:e.basketPaymentInfo.data}}),(function(e){return{actions:Object(b.bindActionCreators)(h.basketActions,e)}}))((function(e){var n=Object.assign({},e),t=Object(d.c)(r.b).t,m=n.tourDescription,b=n.cancelationInfo,p=n.tarifInfo,g=n.paymentInfo,v=Object(i.useState)([]),h=Object(a.a)(v,2),j=h[0],O=h[1],k=Object(i.useState)([]),N=Object(a.a)(k,2),x=N[0],I=N[1],D=Object(i.useState)([]),P=Object(a.a)(D,2),z=P[0],_=P[1],Y=Object(i.useContext)(y.a);return Object(i.useEffect)((function(){O((null===b||void 0===b?void 0:b.items)&&b.items)}),[b]),Object(i.useEffect)((function(){I((null===g||void 0===g?void 0:g.schedule)&&g.schedule)}),[g]),Object(i.useEffect)((function(){var e;_((null===b||void 0===b||null===(e=b.cancellationPolicies)||void 0===e?void 0:e.length)>0&&b.cancellationPolicies)}),[null===b||void 0===b?void 0:b.cancellationPolicies]),o.a.createElement(c.a,{className:"dashboard",title:t("Booking conditions")},o.a.createElement(C,null,o.a.createElement(w,null,o.a.createElement("div",null,o.a.createElement(l.a,{isOpened:!((null===z||void 0===z?void 0:z.length)>0),triggerBefore:!0,trigger:o.a.createElement(M,null,o.a.createElement("span",null,o.a.createElement(u.a,{icon:"info-circle",className:"info-icon"}),t("Booking terms and conditions")),o.a.createElement("span",{className:"styled-icon"},o.a.createElement(u.a,{icon:"chevron-down",className:"icon flipping-icon-vertical"})))},o.a.createElement(H,{className:"css-html-reset"},o.a.createElement(f.Scrollbars,{autoHeight:!0,autoHeightMax:300},o.a.createElement(B,null,o.a.createElement("li",null,o.a.createElement("a",{href:Y.name===E.b.bomo?"".concat(Object(s.a)(),"/greece/article/terms-and-conditions"):"".concat(Object(s.a)(),"/greece/article/booking_conditions"),className:"link",target:"blank"},t("General terms and conditions")," ",o.a.createElement(u.a,{icon:"external-link-square"}))),m&&o.a.createElement(E.a,{themes:E.b.mouzenidis},o.a.createElement("li",null,o.a.createElement("div",{dangerouslySetInnerHTML:{__html:m}}))))))),(null===p||void 0===p?void 0:p.length)>0&&((null===z||void 0===z?void 0:z.length)>0||(null===j||void 0===j?void 0:j.length)>0)&&o.a.createElement(S,{tarifInfo:p,info:j,polices:z}),(null===x||void 0===x?void 0:x.length)>0&&o.a.createElement(S,{payInfo:x})))))}))}}]);