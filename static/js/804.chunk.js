(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[804],{2014:function(e,a,t){},2070:function(e,a,t){"use strict";t.r(a),t.d(a,"Tour",(function(){return b}));var n=t(1567),l=t(178),c=t(2075),r=t(2276),m=t(2289),s=t(13),u=t.n(s),o=t(4),i=t.n(o),d=t(180),E=t(1808),p=t(1692),N=t(1572),b=(t(2014),function(){var e=Object(p.a)((function(e){return e.basketData.tour})),a=Object(d.d)(l.c).t,t=Object(N.h)();if(!e)return null;var s=e.adultCount&&a("adult_count",{count:e.adultCount}),b=e.childCount&&a("child_count",{count:e.childCount}),h=e.infantCount&&a("infant_count",{count:e.infantCount});return i.a.createElement(E.a,{query:"(max-width: 991px)"},(function(l){return l?i.a.createElement("div",{className:"basket-mobile-block"},i.a.createElement("div",{className:"basket-mobile-block-title"},a("Tour")),i.a.createElement("ul",{className:"basket-data-list"},i.a.createElement("li",null,i.a.createElement("span",{className:"name"},a("Destination")),i.a.createElement("span",{className:"value"},e.departureCity&&e.departureCity.name," -"," ",e.country&&e.country.name)),i.a.createElement("li",null,i.a.createElement("span",{className:"name"},a("Date")),i.a.createElement("span",{className:"value"},u()(e.dateBegin).format(t.localeDateFormat),e.dateBegin!==e.dateEnd&&" - ".concat(u()(e.dateEnd).format(t.localeDateFormat)))),i.a.createElement("li",null,i.a.createElement("span",{className:"name"},a("Nights")),i.a.createElement("span",{className:"value"},a("night_count",{count:e.nights}))),i.a.createElement("li",null,i.a.createElement("span",{className:"name"},a("Tourists")),i.a.createElement("span",{className:"value"},s||b||h?i.a.createElement("span",null,"".concat(s||""," ").concat(b?", "+b:""," ").concat(h?", "+h:"").trim()):null)))):i.a.createElement(c.a,{className:"dashboard"},i.a.createElement("div",{className:"basket-tour-data"},i.a.createElement("div",null,e.departureCity&&i.a.createElement("span",{className:"m-r-10"},e.departureCity.name),i.a.createElement(n.a,{className:"m-r-10 small grey",icon:"chevron-right"}),e.country&&i.a.createElement("span",{className:"m-r-5"},e.country.name),i.a.createElement("span",{className:"m-r-5"},"/"),i.a.createElement("span",{className:"m-r-5"},u()(e.dateBegin).format(t.localeDateFormat),e.dateBegin!==e.dateEnd&&" - ".concat(u()(e.dateEnd).format(t.localeDateFormat)," (").concat(a("night_count",{count:e.nights}),")")),s||b||h?i.a.createElement(o.Fragment,null,i.a.createElement("span",{className:"m-r-5"},"/"),i.a.createElement("span",null,"".concat(s||""," ").concat(b?", "+b:""," ").concat(h?", "+h:"").trim())):null),i.a.createElement(r.a,{title:e.name},i.a.createElement("span",null,i.a.createElement(m.a,{color:"grey",size:"sm"},e.tourType&&e.tourType.name)))))}))})}}]);