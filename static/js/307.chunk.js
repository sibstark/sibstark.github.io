(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[307],{441:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n,o){o=o||{};var a,i=e.match(/about|over|almost|lessthan/i),r=e.replace(i,"");a="string"===typeof s[e]?s[e]:1===n?s[e].one(n,o.addSuffix,r.toLowerCase()+"_one"):s[e].other(n,o.addSuffix,r.toLowerCase()+"_other");i&&(a=t[i[0].toLowerCase()]+" "+a);if(o.addSuffix)return o.comparison>0?"po "+a:"prie\u0161 "+a;return a};var s={lessThanXSeconds:{one:a,other:_},xSeconds:{one:a,other:_},halfAMinute:"pus\u0117 minut\u0117s",lessThanXMinutes:{one:i,other:_},xMinutes:{one:i,other:_},aboutXHours:{one:i,other:_},xHours:{one:i,other:_},xDays:{one:i,other:_},aboutWeeks:{one:i,other:_},xWeeks:{one:i,other:_},aboutXMonths:{one:i,other:_},xMonths:{one:i,other:_},aboutXYears:{one:i,other:_},xYears:{one:i,other:_},overXYears:{one:i,other:_},almostXYears:{one:i,other:_}},t={xseconds_other:"sekund\u0117_sekund\u017ei\u0173_sekundes",xminutes_one:"minut\u0117_minut\u0117s_minut\u0119",xminutes_other:"minut\u0117s_minu\u010di\u0173_minutes",xhours_one:"valanda_valandos_valand\u0105",xhours_other:"valandos_valand\u0173_valandas",xdays_one:"diena_dienos_dien\u0105",xdays_other:"dienos_dien\u0173_dienas",xweeks_one:"savait\u0117_savait\u0117s_savait\u0119",xweeks_other:"savait\u0117s_savai\u010di\u0173_savaites",xmonths_one:"m\u0117nuo_m\u0117nesio_m\u0117nes\u012f",xmonths_other:"m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",xyears_one:"metai_met\u0173_metus",xyears_other:"metai_met\u0173_metus",about:"apie",over:"daugiau nei",almost:"beveik",lessthan:"ma\u017eiau nei"};function a(e,n,o,s){return n?s?"keli\u0173 sekund\u017ei\u0173":"kelias sekundes":"kelios sekund\u0117s"}function i(e,n,o,s){return n?s?u(o)[1]:u(o)[2]:u(o)[0]}function r(e){return e%10===0||e>10&&e<20}function u(e){return t[e].split("_")}function _(e,n,o,s){var t=e+" ";return 1===e?t+i(0,n,o[0],s):n?s?t+u(o)[1]:t+(r(e)?u(o)[1]:u(o)[2]):t+(r(e)?u(o)[1]:u(o)[0])}e.exports=n.default}}]);