(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[202,227],{191:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):d;n=e.formattingValues[i]||e.formattingValues[d]}else{var u=e.defaultWidth,o=r.width?String(r.width):e.defaultWidth;n=e.values[o]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},431:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(191))&&n.__esModule?n:{default:n};var d={ordinalNumber:function(e){return Number(e)+"."},era:(0,r.default)({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["f\xf8r Kristus","etter Kristus"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["S","M","T","O","T","F","L"],short:["s\xf8","ma","ti","on","to","fr","l\xf8"],abbreviated:["s\xf8n","man","tir","ons","tor","fre","l\xf8r"],wide:["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 etterm.",evening:"p\xe5 kvelden",night:"p\xe5 natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 etterm.",evening:"p\xe5 kvelden",night:"p\xe5 natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"p\xe5 morgenen",afternoon:"p\xe5 ettermiddagen",evening:"p\xe5 kvelden",night:"p\xe5 natten"}},defaultWidth:"wide"})};t.default=d,e.exports=t.default}}]);