(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[180,227],{230:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,n){var i,t=n||{};if("formatting"===(t.context?String(t.context):"standalone")&&a.formattingValues){var r=a.defaultFormattingWidth||a.defaultWidth,d=t.width?String(t.width):r;i=a.formattingValues[d]||a.formattingValues[r]}else{var o=a.defaultWidth,h=t.width?String(t.width):a.defaultWidth;i=a.values[h]||a.values[o]}return i[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},362:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,t=(i=n(230))&&i.__esModule?i:{default:i};var r={ordinalNumber:function(a,e){var n=Number(a),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"d";case 2:return n+"na"}return 12===i?n+"na":n+"mh"},era:(0,t.default)({values:{narrow:["R","A"],abbreviated:["RC","AD"],wide:["ro Chr\xecosta","anno domini"]},defaultWidth:"wide"}),quarter:(0,t.default)({values:{narrow:["1","2","3","4"],abbreviated:["C1","C2","C3","C4"],wide:["a' chiad chairteal","an d\xe0rna cairteal","an treas cairteal","an ceathramh cairteal"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:(0,t.default)({values:{narrow:["F","G","M","G","C","\xd2","I","L","S","D","S","D"],abbreviated:["Faoi","Gear","M\xe0rt","Gibl","C\xe8it","\xd2gmh","Iuch","L\xf9n","Sult","D\xe0mh","Samh","D\xf9bh"],wide:["Am Faoilleach","An Gearran","Am M\xe0rt","An Giblean","An C\xe8itean","An t-\xd2gmhios","An t-Iuchar","An L\xf9nastal","An t-Sultain","An D\xe0mhair","An t-Samhain","An D\xf9bhlachd"]},defaultWidth:"wide"}),day:(0,t.default)({values:{narrow:["D","L","M","C","A","H","S"],short:["D\xf2","Lu","M\xe0","Ci","Ar","Ha","Sa"],abbreviated:["Did","Dil","Dim","Dic","Dia","Dih","Dis"],wide:["Did\xf2mhnaich","Diluain","Dim\xe0irt","Diciadain","Diardaoin","Dihaoine","Disathairne"]},defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:{narrow:{am:"m",pm:"f",midnight:"m.o.",noon:"m.l.",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"},abbreviated:{am:"M.",pm:"F.",midnight:"meadhan oidhche",noon:"meadhan l\xe0",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"},wide:{am:"m.",pm:"f.",midnight:"meadhan oidhche",noon:"meadhan l\xe0",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"}},defaultWidth:"wide",formattingValues:{narrow:{am:"m",pm:"f",midnight:"m.o.",noon:"m.l.",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"},abbreviated:{am:"M.",pm:"F.",midnight:"meadhan oidhche",noon:"meadhan l\xe0",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"},wide:{am:"m.",pm:"f.",midnight:"meadhan oidhche",noon:"meadhan l\xe0",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"}},defaultFormattingWidth:"wide"})};e.default=r,a.exports=e.default}}]);