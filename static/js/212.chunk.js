(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[212,227],{228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var o,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):r;o=e.formattingValues[i]||e.formattingValues[r]}else{var d=e.defaultWidth,u=a.width?String(a.width):e.defaultWidth;o=e.values[u]||e.values[d]}return o[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},519:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(228))&&o.__esModule?o:{default:o};var r={ordinalNumber:function(e){var t=Number(e);return String(t).concat(".")},era:(0,a.default)({values:{narrow:["pr. n. \u0161t.","po n. \u0161t."],abbreviated:["pr. n. \u0161t.","po n. \u0161t."],wide:["pred na\u0161im \u0161tetjem","po na\u0161em \u0161tetju"]},defaultWidth:"wide"}),quarter:(0,a.default)({values:{narrow:["1","2","3","4"],abbreviated:["1. \u010det.","2. \u010det.","3. \u010det.","4. \u010det."],wide:["1. \u010detrtletje","2. \u010detrtletje","3. \u010detrtletje","4. \u010detrtletje"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan.","feb.","mar.","apr.","maj","jun.","jul.","avg.","sep.","okt.","nov.","dec."],wide:["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"]},defaultWidth:"wide"}),day:(0,a.default)({values:{narrow:["n","p","t","s","\u010d","p","s"],short:["ned.","pon.","tor.","sre.","\u010det.","pet.","sob."],abbreviated:["ned.","pon.","tor.","sre.","\u010det.","pet.","sob."],wide:["nedelja","ponedeljek","torek","sreda","\u010detrtek","petek","sobota"]},defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:{narrow:{am:"d",pm:"p",midnight:"24.00",noon:"12.00",morning:"j",afternoon:"p",evening:"v",night:"n"},abbreviated:{am:"dop.",pm:"pop.",midnight:"poln.",noon:"pold.",morning:"jut.",afternoon:"pop.",evening:"ve\u010d.",night:"no\u010d"},wide:{am:"dop.",pm:"pop.",midnight:"polno\u010d",noon:"poldne",morning:"jutro",afternoon:"popoldne",evening:"ve\u010der",night:"no\u010d"}},defaultWidth:"wide",formattingValues:{narrow:{am:"d",pm:"p",midnight:"24.00",noon:"12.00",morning:"zj",afternoon:"p",evening:"zv",night:"po"},abbreviated:{am:"dop.",pm:"pop.",midnight:"opoln.",noon:"opold.",morning:"zjut.",afternoon:"pop.",evening:"zve\u010d.",night:"pono\u010di"},wide:{am:"dop.",pm:"pop.",midnight:"opolno\u010di",noon:"opoldne",morning:"zjutraj",afternoon:"popoldan",evening:"zve\u010der",night:"pono\u010di"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default}}]);