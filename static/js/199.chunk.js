(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[199,227],{229:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var d,i=a||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,u=i.width?String(i.width):r;d=e.formattingValues[u]||e.formattingValues[r]}else{var n=e.defaultWidth,l=i.width?String(i.width):e.defaultWidth;d=e.values[l]||e.values[n]}return d[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},455:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d,i=(d=a(229))&&d.__esModule?d:{default:d};var r={ordinalNumber:function(e){var t=Number(e),a=t%100;if(a>20||a<10)switch(a%10){case 1:return t+"-\u0432\u0438";case 2:return t+"-\u0440\u0438";case 7:case 8:return t+"-\u043c\u0438"}return t+"-\u0442\u0438"},era:(0,i.default)({values:{narrow:["\u043f\u0440.\u043d.\u0435.","\u043d.\u0435."],abbreviated:["\u043f\u0440\u0435\u0434 \u043d. \u0435.","\u043d. \u0435."],wide:["\u043f\u0440\u0435\u0434 \u043d\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430","\u043d\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u0432\u0438 \u043a\u0432.","2-\u0440\u0438 \u043a\u0432.","3-\u0442\u0438 \u043a\u0432.","4-\u0442\u0438 \u043a\u0432."],wide:["1-\u0432\u0438 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2-\u0440\u0438 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3-\u0442\u0438 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4-\u0442\u0438 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{abbreviated:["\u0458\u0430\u043d","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0458","\u0458\u0443\u043d","\u0458\u0443\u043b","\u0430\u0432\u0433","\u0441\u0435\u043f\u0442","\u043e\u043a\u0442","\u043d\u043e\u0435\u043c","\u0434\u0435\u043a"],wide:["\u0458\u0430\u043d\u0443\u0430\u0440\u0438","\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0438\u043b","\u043c\u0430\u0458","\u0458\u0443\u043d\u0438","\u0458\u0443\u043b\u0438","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438","\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438","\u043d\u043e\u0435\u043c\u0432\u0440\u0438","\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["\u041d","\u041f","\u0412","\u0421","\u0427","\u041f","\u0421"],short:["\u043d\u0435","\u043f\u043e","\u0432\u0442","\u0441\u0440","\u0447\u0435","\u043f\u0435","\u0441\u0430"],abbreviated:["\u043d\u0435\u0434","\u043f\u043e\u043d","\u0432\u0442\u043e","\u0441\u0440\u0435","\u0447\u0435\u0442","\u043f\u0435\u0442","\u0441\u0430\u0431"],wide:["\u043d\u0435\u0434\u0435\u043b\u0430","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a","\u043f\u0435\u0442\u043e\u043a","\u0441\u0430\u0431\u043e\u0442\u0430"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{wide:{am:"\u043f\u0440\u0435\u0442\u043f\u043b\u0430\u0434\u043d\u0435",pm:"\u043f\u043e\u043f\u043b\u0430\u0434\u043d\u0435",midnight:"\u043f\u043e\u043b\u043d\u043e\u045c",noon:"\u043d\u0430\u043f\u043b\u0430\u0434\u043d\u0435",morning:"\u043d\u0430\u0443\u0442\u0440\u043e",afternoon:"\u043f\u043e\u043f\u043b\u0430\u0434\u043d\u0435",evening:"\u043d\u0430\u0432\u0435\u0447\u0435\u0440",night:"\u043d\u043e\u045c\u0435"}},defaultWidth:"wide"})};t.default=r,e.exports=t.default}}]);