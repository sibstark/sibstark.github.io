(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[167,227],{229:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,a){var r,d=a||{};if("formatting"===(d.context?String(d.context):"standalone")&&e.formattingValues){var t=e.defaultFormattingWidth||e.defaultWidth,i=d.width?String(d.width):t;r=e.formattingValues[i]||e.formattingValues[t]}else{var o=e.defaultWidth,h=d.width?String(d.width):e.defaultWidth;r=e.values[h]||e.values[o]}return r[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},297:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r,d=(r=a(229))&&r.__esModule?r:{default:r};var t={ordinalNumber:function(e,n){var a=Number(e);if(a<20)switch(a){case 0:return a+"fed";case 1:return a+"af";case 2:return a+"ail";case 3:case 4:return a+"ydd";case 5:case 6:return a+"ed";case 7:case 8:case 9:case 10:case 12:case 15:case 18:return a+"fed";case 11:case 13:case 14:case 16:case 17:case 19:return a+"eg"}else if(a>=50&&a<=60||80===a||a>=100)return a+"fed";return a+"ain"},era:(0,d.default)({values:{narrow:["C","O"],abbreviated:["CC","OC"],wide:["Cyn Crist","Ar \xf4l Crist"]},defaultWidth:"wide"}),quarter:(0,d.default)({values:{narrow:["1","2","3","4"],abbreviated:["Ch1","Ch2","Ch3","Ch4"],wide:["Chwarter 1af","2ail chwarter","3ydd chwarter","4ydd chwarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,d.default)({values:{narrow:["I","Ch","Ma","E","Mi","Me","G","A","Md","H","T","Rh"],abbreviated:["Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag"],wide:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},defaultWidth:"wide"}),day:(0,d.default)({values:{narrow:["S","Ll","M","M","I","G","S"],short:["Su","Ll","Ma","Me","Ia","Gw","Sa"],abbreviated:["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],wide:["dydd Sul","dydd Llun","dydd Mawrth","dydd Mercher","dydd Iau","dydd Gwener","dydd Sadwrn"]},defaultWidth:"wide"}),dayPeriod:(0,d.default)({values:{narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"}},defaultWidth:"wide",formattingValues:{narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"}},defaultFormattingWidth:"wide"})};n.default=t,e.exports=n.default}}]);