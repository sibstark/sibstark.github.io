(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[211,227],{342:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var a,o=t||{};if("formatting"===(o.context?String(o.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=o.width?String(o.width):r;a=e.formattingValues[i]||e.formattingValues[r]}else{var d=e.defaultWidth,u=o.width?String(o.width):e.defaultWidth;a=e.values[u]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},626:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,o=(a=t(342))&&a.__esModule?a:{default:a};var r={ordinalNumber:function(e,n){return Number(e)+"."},era:(0,o.default)({values:{narrow:["pred Kr.","po Kr."],abbreviated:["pred Kr.","po Kr."],wide:["pred Kristom","po Kristovi"]}}),quarter:(0,o.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. \u0161tvr\u0165rok","2. \u0161tvr\u0165rok","3. \u0161tvr\u0165rok","4. \u0161tvr\u0165rok"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],wide:["janu\xe1r","febru\xe1r","marec","apr\xedl","m\xe1j","j\xfan","j\xfal","august","september","okt\xf3ber","november","december"]},defaultWidth:"wide",formattingValues:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],wide:["janu\xe1ra","febru\xe1ra","marca","apr\xedla","m\xe1ja","j\xfana","j\xfala","augusta","septembra","okt\xf3bra","novembra","decembra"]},defaultFormattingWidth:"wide"}),day:(0,o.default)({values:{narrow:["n","p","u","s","\u0161","p","s"],short:["ne","po","ut","st","\u0161t","pi","so"],abbreviated:["ne","po","ut","st","\u0161t","pi","so"],wide:["nede\u013ea","pondelok","utorok","streda","\u0161tvrtok","piatok","sobota"]},defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"r\xe1no",afternoon:"pop.",evening:"ve\u010d.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"r\xe1no",afternoon:"popol.",evening:"ve\u010der",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"polnoc",noon:"poludnie",morning:"r\xe1no",afternoon:"popoludnie",evening:"ve\u010der",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"o poln.",noon:"nap.",morning:"r\xe1no",afternoon:"pop.",evening:"ve\u010d.",night:"v n."},abbreviated:{am:"AM",pm:"PM",midnight:"o poln.",noon:"napol.",morning:"r\xe1no",afternoon:"popol.",evening:"ve\u010der",night:"v noci"},wide:{am:"AM",pm:"PM",midnight:"o polnoci",noon:"napoludnie",morning:"r\xe1no",afternoon:"popoludn\xed",evening:"ve\u010der",night:"v noci"}},defaultFormattingWidth:"wide"})};n.default=r,e.exports=n.default}}]);