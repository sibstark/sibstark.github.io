(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[176,227],{230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,r=i.width?String(i.width):d;a=e.formattingValues[r]||e.formattingValues[d]}else{var o=e.defaultWidth,u=i.width?String(i.width):e.defaultWidth;a=e.values[u]||e.values[o]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},345:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(230))&&a.__esModule?a:{default:a};var d={ordinalNumber:function(e){return String(e)},era:(0,i.default)({values:{narrow:["\u0642","\u0628"],abbreviated:["\u0642.\u0645.","\u0628.\u0645."],wide:["\u0642\u0628\u0644 \u0627\u0632 \u0645\u06cc\u0644\u0627\u062f","\u0628\u0639\u062f \u0627\u0632 \u0645\u06cc\u0644\u0627\u062f"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["\u0633\u200c\u06451","\u0633\u200c\u06452","\u0633\u200c\u06453","\u0633\u200c\u06454"],wide:["\u0633\u0647\u200c\u0645\u0627\u0647\u0647 1","\u0633\u0647\u200c\u0645\u0627\u0647\u0647 2","\u0633\u0647\u200c\u0645\u0627\u0647\u0647 3","\u0633\u0647\u200c\u0645\u0627\u0647\u0647 4"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["\u0698","\u0641","\u0645","\u0622","\u0645","\u062c","\u062c","\u0622","\u0633","\u0627","\u0646","\u062f"],abbreviated:["\u0698\u0627\u0646\u0640","\u0641\u0648\u0631","\u0645\u0627\u0631\u0633","\u0622\u067e\u0631","\u0645\u06cc","\u062c\u0648\u0646","\u062c\u0648\u0644\u0640","\u0622\u06af\u0648","\u0633\u067e\u062a\u0640","\u0627\u06a9\u062a\u0640","\u0646\u0648\u0627\u0645\u0640","\u062f\u0633\u0627\u0645\u0640"],wide:["\u0698\u0627\u0646\u0648\u06cc\u0647","\u0641\u0648\u0631\u06cc\u0647","\u0645\u0627\u0631\u0633","\u0622\u067e\u0631\u06cc\u0644","\u0645\u06cc","\u062c\u0648\u0646","\u062c\u0648\u0644\u0627\u06cc","\u0622\u06af\u0648\u0633\u062a","\u0633\u067e\u062a\u0627\u0645\u0628\u0631","\u0627\u06a9\u062a\u0628\u0631","\u0646\u0648\u0627\u0645\u0628\u0631","\u062f\u0633\u0627\u0645\u0628\u0631"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["\u06cc","\u062f","\u0633","\u0686","\u067e","\u062c","\u0634"],short:["1\u0634","2\u0634","3\u0634","4\u0634","5\u0634","\u062c","\u0634"],abbreviated:["\u06cc\u06a9\u0634\u0646\u0628\u0647","\u062f\u0648\u0634\u0646\u0628\u0647","\u0633\u0647\u200c\u0634\u0646\u0628\u0647","\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647","\u067e\u0646\u062c\u0634\u0646\u0628\u0647","\u062c\u0645\u0639\u0647","\u0634\u0646\u0628\u0647"],wide:["\u06cc\u06a9\u0634\u0646\u0628\u0647","\u062f\u0648\u0634\u0646\u0628\u0647","\u0633\u0647\u200c\u0634\u0646\u0628\u0647","\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647","\u067e\u0646\u062c\u0634\u0646\u0628\u0647","\u062c\u0645\u0639\u0647","\u0634\u0646\u0628\u0647"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"\u0642",pm:"\u0628",midnight:"\u0646",noon:"\u0638",morning:"\u0635",afternoon:"\u0628.\u0638.",evening:"\u0639",night:"\u0634"},abbreviated:{am:"\u0642.\u0638.",pm:"\u0628.\u0638.",midnight:"\u0646\u06cc\u0645\u0647\u200c\u0634\u0628",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u062d",afternoon:"\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631",evening:"\u0639\u0635\u0631",night:"\u0634\u0628"},wide:{am:"\u0642\u0628\u0644\u200c\u0627\u0632\u0638\u0647\u0631",pm:"\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631",midnight:"\u0646\u06cc\u0645\u0647\u200c\u0634\u0628",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u062d",afternoon:"\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631",evening:"\u0639\u0635\u0631",night:"\u0634\u0628"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u0642",pm:"\u0628",midnight:"\u0646",noon:"\u0638",morning:"\u0635",afternoon:"\u0628.\u0638.",evening:"\u0639",night:"\u0634"},abbreviated:{am:"\u0642.\u0638.",pm:"\u0628.\u0638.",midnight:"\u0646\u06cc\u0645\u0647\u200c\u0634\u0628",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u062d",afternoon:"\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631",evening:"\u0639\u0635\u0631",night:"\u0634\u0628"},wide:{am:"\u0642\u0628\u0644\u200c\u0627\u0632\u0638\u0647\u0631",pm:"\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631",midnight:"\u0646\u06cc\u0645\u0647\u200c\u0634\u0628",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u062d",afternoon:"\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631",evening:"\u0639\u0635\u0631",night:"\u0634\u0628"}},defaultFormattingWidth:"wide"})};t.default=d,e.exports=t.default}}]);