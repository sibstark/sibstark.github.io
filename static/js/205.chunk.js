(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[205,227],{229:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):d;n=e.formattingValues[i]||e.formattingValues[d]}else{var u=e.defaultWidth,o=r.width?String(r.width):e.defaultWidth;n=e.values[o]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},485:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(229))&&n.__esModule?n:{default:n};var d={ordinalNumber:function(e){return Number(e)+"."},era:(0,r.default)({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["f\xf8r Kristus","etter Kristus"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["S","M","T","O","T","F","L"],short:["su","m\xe5","ty","on","to","fr","lau"],abbreviated:["sun","m\xe5n","tys","ons","tor","fre","laur"],wide:["sundag","m\xe5ndag","tysdag","onsdag","torsdag","fredag","laurdag"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 etterm.",evening:"p\xe5 kvelden",night:"p\xe5 natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 etterm.",evening:"p\xe5 kvelden",night:"p\xe5 natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"p\xe5 morgonen",afternoon:"p\xe5 ettermiddagen",evening:"p\xe5 kvelden",night:"p\xe5 natta"}},defaultWidth:"wide"})};t.default=d,e.exports=t.default}}]);