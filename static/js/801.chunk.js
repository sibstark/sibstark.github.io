(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[801],{1901:function(e,t,a){},1960:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(4),o=function(e,t,a,o){return Object(n.useMemo)((function(){var n="undefined"===typeof t?16:t,l="undefined"===typeof o?2:o,c="undefined"===typeof a?7:a,i="undefined"===typeof e?[]:e;return{adults:l>n?n:l,children:i.length>c?e.slice(0,c):i}}),[t,a])}},2018:function(e,t,a){},2071:function(e,t,a){"use strict";var n=a(73),o=a(4),l=a.n(o),c=a(243),i=a.n(c),r=(a(1893),a(1795)),s=a.n(r),m=a(1784),d=a(1894),u=l.a.forwardRef((function(e,t){var a=e.placeholder,o=void 0===a?"":a,c=(e.format,e.clearable),r=void 0!==c&&c,u=e.year,v=void 0!==u&&u,f=e.mask,h=void 0===f?null:f,b=e.value,E=e.label,p=e.disabled,g=void 0!==p&&p,y=e.minDate,N=e.maxDate,k=Object(n.a)(e,["placeholder","format","clearable","year","mask","value","label","disabled","minDate","maxDate"]);return l.a.createElement(d.a,null,E&&l.a.createElement(m.a,null,E),l.a.createElement(i.a,Object.assign({},k,{minDate:y,maxDate:N,disabled:g,placeholderText:o,isClearable:r,dateFormat:"dd.MM.yyyy",selected:b?new Date(b):void 0,onChange:function(e){k.onChange(e)},peekNextMonth:v,showMonthDropdown:v,showYearDropdown:v,dropdownMode:v?"select":void 0,customInput:h?l.a.createElement(s.a,{mask:h}):void 0,ref:t})))}));t.a=u},2074:function(e,t,a){"use strict";a.r(t),a.d(t,"Hotels",(function(){return te}));var n=a(2),o=a(23),l=a(2104),c=a(178),i=a(2075),r=a(182),s=a(4),m=a.n(s),d=a(180),u=a(1726),v=a.n(u),f=a(1690),h=a(1692),b=a(54),E=a(21),p=a(1567),g=a(2170),y=a(2290),N=a(2276),k=a(2284),C=a(13),O=a.n(C),A=a(1906),w=a(1691),S=function(e){var t=e.cancel,a=e.info,n=e.policies,o=Object(d.d)(c.c).t;return m.a.createElement(w.a,{size:"sm",modalTitle:o("Cancellation conditions"),onClose:t},n&&m.a.createElement("ul",{className:"bullets"},n.map((function(e,t){return m.a.createElement("li",{key:"policy_".concat(t)},"".concat(o("date_from")," ").concat(O()(e.dateFrom).format("HH:mm DD MMM")," = "),0===e.amount&&""!==e.comment&&m.a.createElement("span",null,e.comment),e.amount>0&&m.a.createElement("span",null,e.amount,m.a.createElement(k.a,{currencyCode:e.currencyCode}),e.comment&&m.a.createElement("div",null,e.comment)))}))),null===a||void 0===a?void 0:a.map((function(e,t){return m.a.createElement("div",{key:t,className:"m-b-20"},m.a.createElement("pre",{style:{width:"100%",whiteSpace:"pre-wrap"}},e.description))})))},j=a(151),x=function(e,t){var a=Object(d.d)(c.c).t;return Object(s.useMemo)((function(){if(!e)return(null===t||void 0===t?void 0:t.name)||"";if(null===t||void 0===t?void 0:t.hasFewPlaces)return 0===(null===t||void 0===t?void 0:t.restPlaces)?a("There are few places"):a("Rooms left ".concat(t.restPlaces));switch(null===t||void 0===t?void 0:t.visualStatus){case 0:return a("AvailableStatus");case 1:return a("RequestStatus");case 2:return a("NotAvailableStatus");default:return a("Undefined")}}),[e,t])},D=function(e){return Object(s.useMemo)((function(){if(null===e||void 0===e?void 0:e.hasFewPlaces)return"red";switch(null===e||void 0===e?void 0:e.visualStatus){case 0:return"green";case 1:return"yellow";case 2:return"orange";default:return"green"}}),[e])},M=function(e,t){return Object(s.useMemo)((function(){return Object(j.d)({dateFrom:O()(e.dateBegin).toDate(),dateTo:O()(e.dateBegin).toDate(),searchType:"None"!==t?o.filterConstants.SEARCH_TYPE.TOURS:o.filterConstants.SEARCH_TYPE.HOTELS})}),[e,t])},R=a(1572),I=(a(1901),function(e){var t,a,o,l,i,u,v,f,h,C,w,j,I,T,Y,B,F,H,P,_,z,W,q,L,J,K,U,G=e.hotel,Q=e.isBooking,V=void 0===Q||Q,X=e.getHotelRoomInfo,Z=e.cancellationInfo,$=e.cancellationPolicies,ee=e.hasLinks,te=e.transportType,ae=e.onRemove,ne=Object(d.d)(c.c).t,oe=Object(R.h)(),le=Object(s.useState)({showCancellation:!1,isRoomModalOpened:!1}),ce=Object(b.a)(le,2),ie=ce[0],re=ce[1],se=x(V,G.status),me=D(G.status),de=M(G,te);return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"basket-hotel"},m.a.createElement("div",{className:"basket-hotel-image"},ee?m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"/hotel/".concat(null===(t=G.subService)||void 0===t||null===(a=t.hotel)||void 0===a?void 0:a.url).concat(de)},G.subService.hotel.photo?m.a.createElement("img",{src:"".concat(E.c).concat(G.subService.hotel.photo,"?w=180&h=140&mode=crop"),alt:""}):m.a.createElement(g.a,null)):G.subService.hotel.photo?m.a.createElement("img",{src:"".concat(E.c).concat(G.subService.hotel.photo,"?w=180&h=140&mode=crop"),alt:""}):m.a.createElement(g.a,null)),m.a.createElement("div",{className:"basket-hotel-info"},m.a.createElement("div",{className:"basket-hotel-info-title"},ee?m.a.createElement("a",{href:"/hotel/".concat(null===(o=G.subService)||void 0===o||null===(l=o.hotel)||void 0===l?void 0:l.url).concat(de),target:"_blank",rel:"noopener noreferrer",className:"title"},m.a.createElement("span",{className:"m-r-5"},null===(i=G.subService)||void 0===i||null===(u=i.hotel)||void 0===u?void 0:u.name)):m.a.createElement("span",{className:"m-r-5"},null===(v=G.subService)||void 0===v||null===(f=v.hotel)||void 0===f?void 0:f.name),m.a.createElement(y.a,{rating:null===G||void 0===G||null===(h=G.subService)||void 0===h||null===(C=h.hotel)||void 0===C||null===(w=C.stars)||void 0===w?void 0:w.code,size:12}),G.subService.hotel&&m.a.createElement("div",{className:"basket-hotel-info-city"},m.a.createElement(N.a,{title:m.a.createElement("div",null,"".concat(null===(j=G.subService)||void 0===j||null===(I=j.hotel)||void 0===I||null===(T=I.city)||void 0===T?void 0:T.name," ").concat((null===(Y=G.subService)||void 0===Y||null===(B=Y.hotel)||void 0===B?void 0:B.town)||""," ").concat((null===(F=G.subService)||void 0===F||null===(H=F.hotel)||void 0===H||null===(P=H.town)||void 0===P?void 0:P.name)||""))},m.a.createElement("span",null,G.subService.hotel.town?G.subService.hotel.town.name:null===(_=G.subService)||void 0===_||null===(z=_.hotel)||void 0===z||null===(W=z.city)||void 0===W?void 0:W.name)))),m.a.createElement("div",{className:"basket-hotel-info-additionally"},m.a.createElement("span",{className:"basket-hotel-info-room"},m.a.createElement("span",{className:"small ".concat((null===G||void 0===G||null===(q=G.subService)||void 0===q||null===(L=q.hotel)||void 0===L?void 0:L.hasFullDescription)&&"link").trim(),onClick:function(){var e,t,a,o,l;(null===G||void 0===G||null===(e=G.subService)||void 0===e||null===(t=e.hotel)||void 0===t?void 0:t.hasFullDescription)&&(null===X||void 0===X||X(null===G||void 0===G||null===(a=G.subService)||void 0===a||null===(o=a.hotel)||void 0===o?void 0:o.id,null===(l=G.subService1)||void 0===l?void 0:l.id),re((function(e){return Object(n.a)({},e,{isRoomModalOpened:!0})})))}},null===G||void 0===G||null===(J=G.subService1)||void 0===J?void 0:J.name)),m.a.createElement("div",{className:"basket-hotel-info-meals"},m.a.createElement("span",{className:"small"},null===G||void 0===G||null===(K=G.subService2)||void 0===K?void 0:K.name)))),m.a.createElement("div",{className:"basket-hotel-tour-info"},m.a.createElement("div",{className:"text-right m-b-5"},(null===(U=G.attributes)||void 0===U?void 0:U.isOptional)&&m.a.createElement(N.a,{title:ne("Remove hotel")},m.a.createElement(r.c,{color:"danger",size:"sm",plain:!0,onClick:function(){null===ae||void 0===ae||ae(G.id)}},m.a.createElement("span",null,ne("Remove")),m.a.createElement("span",{className:"m-l-5"},m.a.createElement(p.a,{icon:"times"}))))),m.a.createElement("div",{className:"basket-hotel-tour-info-item small"},m.a.createElement("div",null,"".concat(O()(G.dateBegin).format(oe.localeDateFormat)," - ").concat(O()(G.dateEnd).format(oe.localeDateFormat)," (").concat(ne("night_count",{count:G.duration}),")"))),m.a.createElement("div",{className:"basket-hotel-tour-info-item small"},m.a.createElement("div",null,m.a.createElement("span",null,ne("Number of guests"))," ",G.touristCount),m.a.createElement("span",{className:me},se))),m.a.createElement("div",{className:"basket-hotel-cancellation"},ie.showCancellation&&m.a.createElement(S,{info:Z,policies:$,cancel:function(){re((function(e){return Object(n.a)({},e,{showCancellation:!1})}))}})),(null===G||void 0===G?void 0:G.tariffInfo)&&m.a.createElement("div",{className:"tariff-info"},m.a.createElement("div",{className:"m-t-10"},G.tariffInfo.rateComment),G.tariffInfo.taxes&&G.tariffInfo.taxes.length>0&&m.a.createElement("div",{className:"m-t-10"},m.a.createElement("span",null,ne("Taxes")),m.a.createElement("ul",null,G.tariffInfo.taxes.map((function(e){return m.a.createElement("li",{key:e.currencyCode},e.amount," ",m.a.createElement(k.a,{currencyCode:e.currencyCode}),e.included?"(".concat(ne("included"),")"):"(".concat(ne("not included"),")"))})))))),ie.isRoomModalOpened&&m.a.createElement(A.a,{onClose:function(){re((function(e){return Object(n.a)({},e,{isRoomModalOpened:!1})}))}}))}),T=(a(1972),function(e){var t,a,n,o,l,i,s,u,v,f,h,b,g=e.hotel,k=e.transportType,C=e.onRemove,A=Object(d.d)(c.c).t,w=M(g,k);return m.a.createElement("div",{className:"basket-mobile-block-image"},m.a.createElement("div",{className:"basket-mobile-block-title"},A("Hotel")),m.a.createElement("div",{className:"basket-mobile-block-image",style:{backgroundImage:"url(".concat(g.subService&&"".concat(E.c).concat(g.subService.hotel.photo,"?w=180&h=140&mode=crop")||"/userfiles/images/site-adaptive/noimage.png","?w=200&h=273&mode=crop)")}}),m.a.createElement("div",{className:"basket-mobile-block-info"},(null===(t=g.attributes)||void 0===t?void 0:t.isOptional)&&m.a.createElement(N.a,{title:A("Remove hotel")},m.a.createElement(r.c,{color:"danger",plain:!0,onClick:function(){null===C||void 0===C||C(g.id)}},m.a.createElement(p.a,{icon:"times"}))),m.a.createElement("div",null,m.a.createElement(y.a,{rating:null===g||void 0===g||null===(a=g.subService)||void 0===a||null===(n=a.hotel)||void 0===n||null===(o=n.stars)||void 0===o?void 0:o.code,size:12})),m.a.createElement("div",{className:"basket-mobile-block-info-title"},m.a.createElement("a",{href:"/hotel/".concat(null===(l=g.subService)||void 0===l||null===(i=l.hotel)||void 0===i?void 0:i.url).concat(w),target:"_blank",rel:"noopener noreferrer",className:"title"},null===(s=g.subService)||void 0===s||null===(u=s.hotel)||void 0===u?void 0:u.name," ")),m.a.createElement("div",{className:"basket-mobile-block-info-city"},g.subService.hotel.town?g.subService.hotel.town.name:null===(v=g.subService)||void 0===v||null===(f=v.hotel)||void 0===f||null===(h=f.city)||void 0===h?void 0:h.name)),m.a.createElement("div",{className:"basket-data-list-container"},m.a.createElement("ul",{className:"basket-data-list"},m.a.createElement("li",null,m.a.createElement("span",{className:"name"},A("Dates")),m.a.createElement("span",{className:"value"},"".concat(O()(g.dateBegin).format("DD.MM.YYYY")," - ").concat(O()(g.dateEnd).format("DD.MM.YYYY")))),m.a.createElement("li",null,m.a.createElement("span",{className:"name"},A("Nights")),m.a.createElement("span",{className:"value"},A("night_count",{count:g.duration}))),(null===g||void 0===g?void 0:g.subService1)&&m.a.createElement("li",null,m.a.createElement("span",{className:"name"},A("Room")),m.a.createElement("span",{className:"value"},g.subService1.name)),(null===g||void 0===g?void 0:g.subService2)&&m.a.createElement("li",null,m.a.createElement("span",{className:"name"},A("Meal")),m.a.createElement("span",{className:"value"},g.subService2.name)),(null===g||void 0===g||null===(b=g.tariffInfo)||void 0===b?void 0:b.isNonRefundable)&&m.a.createElement("li",null,m.a.createElement("span",{className:"name"},A("Tariff")),m.a.createElement("span",{className:"value"},A("Tariff is non refundable"))))))}),Y=a(33),B=a(2071),F=a(1784),H=a(27),P=a(20),_=a(2532),z=a(2079),W=a(2050),q=a(1960),L=(a(2018),function(e){var t=e.showMessage,a=e.adults,o=e.children,l=e.maxAdultsCount,i=e.maxChildrenCount,u=e.pluginBefore,v=e.pluginAfter,f=e.label,h=e.minAdultsCount,E=e.onChange,p=e.childrenAges,g=e.message,y=Object(d.d)(c.g).t,N=m.a.useRef(),k=Object(s.useState)({open:!1,showMessage:null!==t&&void 0!==t&&t,adults:0,children:[]}),C=Object(b.a)(k,2),O=C[0],A=C[1];Object(s.useEffect)((function(){A((function(e){return Object(n.a)({},e,{adults:a,children:o})}))}),[o,a]);var w=Object(q.a)(o,l,i,a);Object(s.useEffect)((function(){A((function(e){return Object(n.a)({},e,{adults:w.adults,children:w.children})})),E({adults:w.adults,children:w.children})}),[w]),Object(s.useEffect)((function(){var e,a,o;t&&(A((function(e){return Object(n.a)({},e,{showMessage:t})})),null===N||void 0===N||null===(e=N.current)||void 0===e||null===(a=e.triggerRef)||void 0===a||null===(o=a.current)||void 0===o||o.click())}),[t]);var S="undefined"!==typeof l?l:16,j="undefined"!==typeof i?i:7,x="undefined"!==typeof h?h:0;return m.a.createElement(_.a,{label:f||y("Tourists"),ref:N,className:"rooms-dropdown",onClose:function(){A((function(e){return E({children:e.children,adults:e.adults}),Object(n.a)({},e,{open:!1,showMessage:!1})}))},onOpen:function(){A((function(e){return Object(n.a)({},e,{open:!0})}))},trigger:m.a.createElement("div",{className:"tourists-value"},u&&m.a.createElement("span",{className:"rooms-plugin plugin-before"},u),m.a.createElement("span",null,m.a.createElement("span",null,"".concat(y("adultWithCount",{count:O.adults}),"  ").concat(O.children.length>0?", "+y("childWithCount",{count:O.children.length}):"").trim())),v&&m.a.createElement("span",{className:"rooms-plugin plugin-after"},v)),footer:function(e){var t=e.close;return m.a.createElement(r.c,{color:"success",onClick:t},y("Select"))}},m.a.createElement("div",{className:"tours-search-filter-tourists"},O.showMessage&&m.a.createElement("span",{className:"red"},g),m.a.createElement(J,{children:O.children,childrenAges:p,adults:O.adults,maxAdults:S,maxChildren:j,minAdults:x,onAdultsChange:function(e){A((function(t){return Object(n.a)({},t,{adults:e})}))},onChildrenChange:function(e){var t=Object(H.a)(O.children);if(t.length>e)t=Object(P.f)(t);else if(t.length<e){var a=p||[0],o=Object(b.a)(a,1)[0];t.push(o)}A((function(e){return Object(n.a)({},e,{children:t})}))},onChildAgeChanged:function(e){return function(t){A((function(a){return Object(n.a)({},a,{children:a.children.map((function(a,n){return n===e?t:a}))})}))}}})))}),J=function(e){var t=e.onAdultsChange,a=e.onChildrenChange,n=e.onChildAgeChanged,o=e.adults,l=e.children,i=e.maxAdults,r=e.maxChildren,s=e.childrenAges,u=e.minAdults,v=Object(d.d)(c.g).t,f=(null===s||void 0===s?void 0:s.map((function(e){return{label:v("childWithCountAges",{count:e}),value:e}})))||[];return m.a.createElement("div",{className:"tours-search-filter-room"},m.a.createElement("div",{className:"filter-room-item"},m.a.createElement("span",null,v("Adults")),m.a.createElement(z.a,{min:u,max:i,value:o,onChange:t})),m.a.createElement("div",{className:"filter-room-item"},m.a.createElement("span",null,v("Children")),m.a.createElement(z.a,{min:0,max:r,value:l.length,onChange:a})),l&&l.length>0&&l.map((function(e,t){return m.a.createElement("div",{className:"filter-room-item",key:e+"-"+t},m.a.createElement("span",null,v("Child age",{age:t+1})),m.a.createElement(W.b,{clearable:!1,options:f,labelKey:"label",valueKey:"value",onChange:n(t),value:e}))})))},K=a(2292),U=a(632),G=a(1715),Q=a(84),V=a(26);function X(){var e=Object(Y.a)(["\n  .styled-accommodation-search {\n    display: flex;\n    align-items: center;\n    background-color: #f0f0f7;\n    padding: 1rem;\n    .styled-accommodation-search-item {\n      padding-right: 1rem;\n      &:last-child {\n        padding-right: 0;\n      }\n      .tourists-value {\n        width: 100%;\n        padding: 0 0.75rem;\n        border: 1px solid #e1e1e1;\n        border-radius: 4px;\n        outline: 0;\n        line-height: 38px;\n        height: 38px;\n        transition: border-color 150ms, box-shadow 150ms;\n        background: #ffffff;\n        &:hover {\n          border-color: rgba(0, 184, 199, 0.5);\n        }\n      }\n    }\n  }\n  .styled-accommodation-results {\n    position: relative;\n    .styled-accommodation-item {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 0.5rem;\n      border-bottom: 1px solid #eee;\n      margin-bottom: 0.25rem;\n      &:last-child {\n        border-bottom: 0;\n      }\n    }\n    .styled-accommodation-item-header {\n      position: sticky;\n      top: 0;\n      background-color: #ffffff;\n      margin-bottom: 0;\n      margin: 1.5rem 0 0.5rem 0;\n      z-index: 1;\n    }\n    .styled-accommodation-item-room {\n      flex: 0 0 30%;\n      padding-right: 0.5rem;\n    }\n    .styled-accommodation-item-code {\n      flex: 0 0 15%;\n    }\n    .styled-accommodation-item-pansion {\n      flex: 0 0 15%;\n    }\n    .styled-accommodation-item-status {\n      flex: 0 0 15%;\n    }\n    .styled-accommodation-item-surcharge {\n      flex: 0 0 15%;\n    }\n    .styled-accommodation-item-add {\n      flex: 0 0 10%;\n      text-align: right;\n    }\n    "," {\n      padding-left: 0;\n      margin-bottom: 0.125rem;\n    }\n  }\n"]);return X=function(){return e},e}var Z=function(e){var t=e.isBooking,a=Object(d.d)(c.c).t,n=Object(s.useContext)(G.a),l=n.activeCurrency,i=n.extractPrice,u=Object(Q.useDispatch)(),v=Object(Q.useSelector)((function(e){return{showModal:e.basketAccommodation.showModal,accommodation:e.basketAccommodation.accommodation,filter:e.basketAccommodation.filter,tour:e.basketData.tour,fetching:e.basketAccommodation.fetching}}),Q.shallowEqual),f=v.showModal,h=v.accommodation,b=v.filter,E=v.tour,p=v.fetching,g=function(){u(o.basketAccommodationActions.closeAccommodationModal())},y=function(e){return function(){u(o.basketAccommodationActions.addAccommodation(e.guid)),g()}};return f?m.a.createElement(w.a,{modalTitle:a("Add accommodation"),scrollable:!0,onClose:g},m.a.createElement(ee,null,m.a.createElement("div",{className:"styled-accommodation-search"},m.a.createElement("div",{className:"styled-accommodation-search-item"},m.a.createElement(B.a,{label:a("Date from"),onChange:function(e){u(o.basketAccommodationActions.changeAccommodationFilter({dateFrom:O()(e).format("YYYY-MM-DD")}))},minDate:new Date(null===E||void 0===E?void 0:E.dateBegin),maxDate:new Date(null===E||void 0===E?void 0:E.dateEnd),format:"dd.MM.yyyy",value:b.dateFrom})),m.a.createElement("div",{className:"styled-accommodation-search-item"},m.a.createElement(B.a,{label:a("Date to"),onChange:function(e){u(o.basketAccommodationActions.changeAccommodationFilter({dateTo:O()(e).format("YYYY-MM-DD")}))},minDate:new Date(null===E||void 0===E?void 0:E.dateBegin),maxDate:new Date(null===E||void 0===E?void 0:E.dateEnd),format:"dd.MM.yyyy",value:b.dateTo})),m.a.createElement("div",{className:"styled-accommodation-search-item"},m.a.createElement(F.a,null,a("tourists_count")),m.a.createElement(L,{showMessage:!1,childrenAges:[0,1,2,3,4,5],onChange:function(e){u(o.basketAccommodationActions.changeAccommodationFilter({adults:e.adults,children:e.children}))},maxAdultsCount:b.maxAdultCount,maxChildrenCount:5,adults:b.adults||0,children:b.children,minAdultsCount:1})),m.a.createElement("div",{className:"styled-accommodation-search-item m-t-25"},m.a.createElement(r.c,{onClick:function(){u(o.basketAccommodationActions.fetchAccommodation())}},a("Search")))),m.a.createElement("div",{className:"styled-accommodation-results"},h&&h.length>0&&m.a.createElement("div",{className:"styled-accommodation-item styled-accommodation-item-header"},m.a.createElement("div",{className:"styled-accommodation-item-room"},m.a.createElement(F.a,null,a("Room"))),m.a.createElement("div",{className:"styled-accommodation-item-code"},m.a.createElement(F.a,null,a("Number of guests"))),m.a.createElement("div",{className:"styled-accommodation-item-pansion"},m.a.createElement(F.a,null,a("Pansion"))),m.a.createElement("div",{className:"styled-accommodation-item-status"},m.a.createElement(F.a,null,a("Availability"))),m.a.createElement("div",{className:"styled-accommodation-item-surcharge"},m.a.createElement(F.a,null,a("Surcharge"))),m.a.createElement("div",{className:"styled-accommodation-item-add"},m.a.createElement(F.a,{visible:!1},a("Select")))),null===h||void 0===h?void 0:h.map((function(e){var n,o,c,s,d,u,v;return m.a.createElement("div",{className:"styled-accommodation-item",key:e.guid},m.a.createElement("div",{className:"styled-accommodation-item-room bold"},"".concat(null===(n=e.room)||void 0===n||null===(o=n.roomType)||void 0===o?void 0:o.name," ").concat(null===(c=e.room)||void 0===c||null===(s=c.roomCategory)||void 0===s?void 0:s.name)),m.a.createElement("div",{className:"styled-accommodation-item-code"},null===(d=e.room)||void 0===d||null===(u=d.roomAccomodation)||void 0===u?void 0:u.name),m.a.createElement("div",{className:"styled-accommodation-item-pansion"},null===(v=e.meal)||void 0===v?void 0:v.name),m.a.createElement("div",{className:"styled-accommodation-item-status"},m.a.createElement($,{isBooking:t,accommodation:e})),m.a.createElement("div",{className:"styled-accommodation-item-surcharge"},m.a.createElement("span",{className:"bold"},Object(U.b)(i(e.addPrice,"sum"))," ",m.a.createElement(k.a,{currencyCode:null===l||void 0===l?void 0:l.code}))),m.a.createElement("div",{className:"styled-accommodation-item-add"},m.a.createElement(r.c,{size:"sm",color:"success",onClick:y(e)},a("Select room"))))})),p&&m.a.createElement(K.a,{style:{minWidth:360},description:a("Searching all available rooms")})))):null},$=function(e){var t=e.accommodation,a=e.isBooking,n=x(!!a,t.status),o=D(t.status);return m.a.createElement("span",{className:o},n)},ee=V.e.div(X(),F.a),te=function(e){var t=e.isBooking,a=void 0===t||t,s=Object(f.a)(Object(n.a)({},o.basketAccommodationActions,{},o.hotelsActions)).actions,u=Object(h.a)((function(e){return{hotels:Object(l.l)(e),cancellationInfo:e.basketCancellation.data,tour:e.basketData.tour,shoppingCart:e.basketData.shoppingCart,accommodation:e.basketAccommodation.accommodation}})),b=u.hotels,E=u.cancellationInfo,p=u.tour,g=u.shoppingCart,y=u.accommodation,N=Object(d.d)(c.c).t,k=function(){s.showAccommodationModal(),(null===y||void 0===y?void 0:y.length)||s.fetchAccommodation()},C=function(e){s.removeAccommodation(e)};return b.length?m.a.createElement(m.a.Fragment,null,m.a.createElement(v.a,{query:"(max-width: 991px)"},(function(e){var t;return e?b.map((function(e,t){var n;return m.a.createElement(T,{hasLinks:!0,cancellationInfo:null===E||void 0===E||null===(n=E.items)||void 0===n?void 0:n.filter((function(t){return t.serviceId===e.id})),cancellationPolicies:null===E||void 0===E?void 0:E.cancellationPolicies,key:t,hotel:e,isBooking:a,transportType:null===p||void 0===p?void 0:p.transportType,getHotelRoomInfo:s.getHotelRoomInfo,onRemove:C})})):m.a.createElement(i.a,{className:"dashboard",title:N("Accommodation"),actions:(null===g||void 0===g||null===(t=g.allowedActions)||void 0===t?void 0:t.editHotels)&&m.a.createElement(r.c,{size:"sm",color:"primary",onClick:k},N("Add accommodation"))},b.map((function(e,t){var n;return m.a.createElement(I,{cancellationInfo:null===E||void 0===E||null===(n=E.items)||void 0===n?void 0:n.filter((function(t){return t.serviceId===e.id})),key:t,hotel:e,isBooking:a,transportType:null===p||void 0===p?void 0:p.transportType,getHotelRoomInfo:s.getHotelRoomInfo,onRemove:C})})))})),m.a.createElement(Z,{isBooking:a})):null}},2079:function(e,t,a){"use strict";var n=a(4),o=a.n(n),l=a(1567),c=a(33),i=a(26),r=a(182),s=a(1764);function m(){var e=Object(c.a)(["\n  "," {\n    .input-container {\n      border-radius: 0;\n    }\n  }\n"]);return m=function(){return e},e}function d(){var e=Object(c.a)(["\n  display: flex;\n  .number-input-control {\n  }\n  "," {\n    &:first-child {\n      border-radius: ",";\n    }\n    &:last-child {\n      border-radius: ",";\n    }\n  }\n"]);return d=function(){return e},e}var u=i.e.div(d(),r.b,(function(e){return"".concat(e.theme.radius," 0 0 ").concat(e.theme.radius)}),(function(e){return"0 ".concat(e.theme.radius," ").concat(e.theme.radius," 0")})),v=i.e.div(m(),s.a),f=a(1784),h=a(2285);t.a=function(e){var t=e.label,a=e.readOnly,n=e.min,c=e.value,i=e.onChange,m=e.max,d=e.step,b=void 0===d?1:d;return o.a.createElement(v,null,t&&o.a.createElement(f.a,null,t),o.a.createElement(u,null,o.a.createElement(r.b,{color:"secondary",type:"button",onClick:function(){var e=+c;Number.isInteger(e)&&(void 0===n||e-b>=n)&&i(e-b)}},o.a.createElement(l.a,{icon:"minus"})),o.a.createElement(s.a,null,o.a.createElement(h.a,{readOnly:a,value:c,min:n,max:m,step:b,onChange:function(e){var t=e.target.value,a=Number.isInteger(+t)?+t:"";void 0!==n&&a<n?null===i||void 0===i||i(n):void 0!==m&&a>m?null===i||void 0===i||i(m):null===i||void 0===i||i(a)},onBlur:function(){var e="number"===typeof c?c:parseInt(c,10);isNaN(e)&&(null===i||void 0===i||i(n||0))}})),o.a.createElement(r.b,{color:"secondary",type:"button",onClick:function(){var e=+c;Number.isInteger(e)&&(void 0===m||e+b<=m)&&i(e+b)}},o.a.createElement(l.a,{icon:"plus"}))))}},2170:function(e,t,a){"use strict";var n=a(4),o=a.n(n),l=a(21);t.a=function(e){return o.a.createElement("img",{src:"".concat(l.c).concat(e.srcpath?e.srcpath:"/userfiles/images/site-adaptive/noimage.png","?w=").concat(e.width?e.width:300,"&h=").concat(e.height?e.height:300,"&mode=crop"),alt:"No photo"})}}}]);