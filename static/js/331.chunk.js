(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[331],{623:function(u,t,e){"use strict";function o(u,t,e){var o=function(u,t){return 1===t?u.one:t>=2&&t<=4?u.twoFour:u.other}(u,t);return(o[e]||o).replace("{{count}}",t)}function r(u){var t="";return"almost"===u&&(t="takmer"),"about"===u&&(t="pribli\u017ene"),t.length>0?t+" ":""}function n(u){var t="";return"lessThan"===u&&(t="menej ne\u017e"),"over"===u&&(t="viac ne\u017e"),t.length>0?t+" ":""}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(u,t,e){e=e||{};var c=function(u){return["lessThan","about","over","almost"].filter((function(t){return!!u.match(new RegExp("^"+t))}))[0]}(u)||"",i=(m=u.substring(c.length),m.charAt(0).toLowerCase()+m.slice(1)),s=a[i];var m;if(!e.addSuffix)return r(c)+n(c)+o(s,t,"regular");return e.comparison>0?r(c)+"o "+n(c)+o(s,t,"future"):r(c)+"pred "+n(c)+o(s,t,"past")};var a={xSeconds:{one:{regular:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{regular:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{regular:"{{count}} sek\xfand",past:"{{count}} sekundami",future:"{{count}} sek\xfand"}},halfAMinute:{other:{regular:"pol min\xfaty",past:"pol min\xfatou",future:"pol min\xfaty"}},xMinutes:{one:{regular:"min\xfata",past:"min\xfatou",future:"min\xfatu"},twoFour:{regular:"{{count}} min\xfaty",past:"{{count}} min\xfatami",future:"{{count}} min\xfaty"},other:{regular:"{{count}} min\xfat",past:"{{count}} min\xfatami",future:"{{count}} min\xfat"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hod\xedn",past:"{{count}} hodinami",future:"{{count}} hod\xedn"}},xDays:{one:{regular:"de\u0148",past:"d\u0148om",future:"de\u0148"},twoFour:{regular:"{{count}} dni",past:"{{count}} d\u0148ami",future:"{{count}} dni"},other:{regular:"{{count}} dn\xed",past:"{{count}} d\u0148ami",future:"{{count}} dn\xed"}},xWeeks:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xMonths:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{regular:"rok",past:"rokom",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{regular:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}};u.exports=t.default}}]);