(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[602],{806:function(e,t,a){"use strict";a.r(t);var i={lessThanXSeconds:{one:"\u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc \u03ad\u03bd\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03bf",other:"\u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc {{count}} \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1"},xSeconds:{one:"1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03bf",other:"{{count}} \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1"},halfAMinute:"\u03bc\u03b9\u03c3\u03cc \u03bb\u03b5\u03c0\u03c4\u03cc",lessThanXMinutes:{one:"\u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc \u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",other:"\u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc {{count}} \u03bb\u03b5\u03c0\u03c4\u03ac"},xMinutes:{one:"1 \u03bb\u03b5\u03c0\u03c4\u03cc",other:"{{count}} \u03bb\u03b5\u03c0\u03c4\u03ac"},aboutXHours:{one:"\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 1 \u03ce\u03c1\u03b1",other:"\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 {{count}} \u03ce\u03c1\u03b5\u03c2"},xHours:{one:"1 \u03ce\u03c1\u03b1",other:"{{count}} \u03ce\u03c1\u03b5\u03c2"},xDays:{one:"1 \u03b7\u03bc\u03ad\u03c1\u03b1",other:"{{count}} \u03b7\u03bc\u03ad\u03c1\u03b5\u03c2"},aboutXWeeks:{one:"\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 1 \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1",other:"\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 {{count}} \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b5\u03c2"},xWeeks:{one:"1 \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1",other:"{{count}} \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b5\u03c2"},aboutXMonths:{one:"\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 1 \u03bc\u03ae\u03bd\u03b1\u03c2",other:"\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 {{count}} \u03bc\u03ae\u03bd\u03b5\u03c2"},xMonths:{one:"1 \u03bc\u03ae\u03bd\u03b1\u03c2",other:"{{count}} \u03bc\u03ae\u03bd\u03b5\u03c2"},aboutXYears:{one:"\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 1 \u03c7\u03c1\u03cc\u03bd\u03bf",other:"\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 {{count}} \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"},xYears:{one:"1 \u03c7\u03c1\u03cc\u03bd\u03bf",other:"{{count}} \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"},overXYears:{one:"\u03c0\u03ac\u03bd\u03c9 \u03b1\u03c0\u03cc 1 \u03c7\u03c1\u03cc\u03bd\u03bf",other:"\u03c0\u03ac\u03bd\u03c9 \u03b1\u03c0\u03cc {{count}} \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"},almostXYears:{one:"\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 1 \u03c7\u03c1\u03cc\u03bd\u03bf",other:"\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 {{count}} \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"}};var n=a(110),r={date:Object(n.a)({formats:{full:"EEEE, d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"d/M/yy"},defaultWidth:"full"}),time:Object(n.a)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Object(n.a)({formats:{full:"{{date}} - {{time}}",long:"{{date}} - {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:function(e){switch(e.getUTCDay()){case 6:return"'\u03c4\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf' eeee '\u03c3\u03c4\u03b9\u03c2' p";default:return"'\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7' eeee '\u03c3\u03c4\u03b9\u03c2' p"}},yesterday:"'\u03c7\u03b8\u03b5\u03c2 \u03c3\u03c4\u03b9\u03c2' p",today:"'\u03c3\u03ae\u03bc\u03b5\u03c1\u03b1 \u03c3\u03c4\u03b9\u03c2' p",tomorrow:"'\u03b1\u03cd\u03c1\u03b9\u03bf \u03c3\u03c4\u03b9\u03c2' p",nextWeek:"eeee '\u03c3\u03c4\u03b9\u03c2' p",other:"P"};var d=a(82);var u={ordinalNumber:function(e,t){var a=String((t||{}).unit);return e+("year"===a||"month"===a?"\u03bf\u03c2":"week"===a||"dayOfYear"===a||"day"===a||"hour"===a||"date"===a?"\u03b7":"\u03bf")},era:Object(d.a)({values:{narrow:["\u03c0\u03a7","\u03bc\u03a7"],abbreviated:["\u03c0.\u03a7.","\u03bc.\u03a7."],wide:["\u03c0\u03c1\u03bf \u03a7\u03c1\u03b9\u03c3\u03c4\u03bf\u03cd","\u03bc\u03b5\u03c4\u03ac \u03a7\u03c1\u03b9\u03c3\u03c4\u03cc\u03bd"]},defaultWidth:"wide"}),quarter:Object(d.a)({values:{narrow:["1","2","3","4"],abbreviated:["\u03a41","\u03a42","\u03a43","\u03a44"],wide:["1\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf","2\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf","3\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf","4\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(d.a)({values:{narrow:["\u0399","\u03a6","\u039c","\u0391","\u039c","\u0399","\u0399","\u0391","\u03a3","\u039f","\u039d","\u0394"],abbreviated:["\u0399\u03b1\u03bd","\u03a6\u03b5\u03b2","\u039c\u03ac\u03c1","\u0391\u03c0\u03c1","\u039c\u03ac\u03b9","\u0399\u03bf\u03cd\u03bd","\u0399\u03bf\u03cd\u03bb","\u0391\u03cd\u03b3","\u03a3\u03b5\u03c0","\u039f\u03ba\u03c4","\u039d\u03bf\u03ad","\u0394\u03b5\u03ba"],wide:["\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2","\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2","\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2","\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2","\u039c\u03ac\u03b9\u03bf\u03c2","\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2","\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2","\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2","\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2","\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2","\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2","\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2"]},defaultWidth:"wide",formattingValues:{narrow:["\u0399","\u03a6","\u039c","\u0391","\u039c","\u0399","\u0399","\u0391","\u03a3","\u039f","\u039d","\u0394"],abbreviated:["\u0399\u03b1\u03bd","\u03a6\u03b5\u03b2","\u039c\u03b1\u03c1","\u0391\u03c0\u03c1","\u039c\u03b1\u0390","\u0399\u03bf\u03c5\u03bd","\u0399\u03bf\u03c5\u03bb","\u0391\u03c5\u03b3","\u03a3\u03b5\u03c0","\u039f\u03ba\u03c4","\u039d\u03bf\u03b5","\u0394\u03b5\u03ba"],wide:["\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5","\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5","\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5","\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5","\u039c\u03b1\u0390\u03bf\u03c5","\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5","\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5","\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5","\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5","\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5","\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5","\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5"]},defaultFormattingWidth:"wide"}),day:Object(d.a)({values:{narrow:["\u039a","\u0394","T","\u03a4","\u03a0","\u03a0","\u03a3"],short:["\u039a\u03c5","\u0394\u03b5","\u03a4\u03c1","\u03a4\u03b5","\u03a0\u03ad","\u03a0\u03b1","\u03a3\u03ac"],abbreviated:["\u039a\u03c5\u03c1","\u0394\u03b5\u03c5","\u03a4\u03c1\u03af","\u03a4\u03b5\u03c4","\u03a0\u03ad\u03bc","\u03a0\u03b1\u03c1","\u03a3\u03ac\u03b2"],wide:["\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae","\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1","\u03a4\u03c1\u03af\u03c4\u03b7","\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7","\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7","\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae","\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf"]},defaultWidth:"wide"}),dayPeriod:Object(d.a)({values:{narrow:{am:"\u03c0\u03bc",pm:"\u03bc\u03bc",midnight:"\u03bc\u03b5\u03c3\u03ac\u03bd\u03c5\u03c7\u03c4\u03b1",noon:"\u03bc\u03b5\u03c3\u03b7\u03bc\u03ad\u03c1\u03b9",morning:"\u03c0\u03c1\u03c9\u03af",afternoon:"\u03b1\u03c0\u03cc\u03b3\u03b5\u03c5\u03bc\u03b1",evening:"\u03b2\u03c1\u03ac\u03b4\u03c5",night:"\u03bd\u03cd\u03c7\u03c4\u03b1"},abbreviated:{am:"\u03c0.\u03bc.",pm:"\u03bc.\u03bc.",midnight:"\u03bc\u03b5\u03c3\u03ac\u03bd\u03c5\u03c7\u03c4\u03b1",noon:"\u03bc\u03b5\u03c3\u03b7\u03bc\u03ad\u03c1\u03b9",morning:"\u03c0\u03c1\u03c9\u03af",afternoon:"\u03b1\u03c0\u03cc\u03b3\u03b5\u03c5\u03bc\u03b1",evening:"\u03b2\u03c1\u03ac\u03b4\u03c5",night:"\u03bd\u03cd\u03c7\u03c4\u03b1"},wide:{am:"\u03c0.\u03bc.",pm:"\u03bc.\u03bc.",midnight:"\u03bc\u03b5\u03c3\u03ac\u03bd\u03c5\u03c7\u03c4\u03b1",noon:"\u03bc\u03b5\u03c3\u03b7\u03bc\u03ad\u03c1\u03b9",morning:"\u03c0\u03c1\u03c9\u03af",afternoon:"\u03b1\u03c0\u03cc\u03b3\u03b5\u03c5\u03bc\u03b1",evening:"\u03b2\u03c1\u03ac\u03b4\u03c5",night:"\u03bd\u03cd\u03c7\u03c4\u03b1"}},defaultWidth:"wide"})},s=a(180),h=a(83),c={code:"el",formatDistance:function(e,t,a){var n;return a=a||{},n="string"===typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"\u03c3\u03b5 "+n:n+" \u03c0\u03c1\u03b9\u03bd":n},formatLong:r,formatRelative:function(e,t,a,i){var n=o[e];return"function"===typeof n?n(t,a,i):n},localize:u,match:{ordinalNumber:Object(s.a)({matchPattern:/^(\d+)(\u03bf\u03c2|\u03b7|\u03bf)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(h.a)({matchPatterns:{narrow:/^(\u03c0\u03a7|\u03bc\u03a7)/i,abbreviated:/^(\u03c0\.?\s?\u03c7\.?|\u03c0\.?\s?\u03ba\.?\s?\u03c7\.?|\u03bc\.?\s?\u03c7\.?|\u03ba\.?\s?\u03c7\.?)/i,wide:/^(\u03c0\u03c1\u03bf \u03a7\u03c1\u03b9\u03c3\u03c4\u03bf(\u03cd|\u03c5)|\u03c0\u03c1\u03b9\u03bd \u03b1\u03c0(\u03cc|\u03bf) \u03c4\u03b7\u03bd \u039a\u03bf\u03b9\u03bd(\u03ae|\u03b7) \u03a7\u03c1\u03bf\u03bd\u03bf\u03bb\u03bf\u03b3(\u03af|\u03b9)\u03b1|\u03bc\u03b5\u03c4(\u03ac|\u03b1) \u03a7\u03c1\u03b9\u03c3\u03c4(\u03cc|\u03bf)\u03bd|\u039a\u03bf\u03b9\u03bd(\u03ae|\u03b7) \u03a7\u03c1\u03bf\u03bd\u03bf\u03bb\u03bf\u03b3(\u03af|\u03b9)\u03b1)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u03c0/i,/^(\u03bc|\u03ba)/i]},defaultParseWidth:"any"}),quarter:Object(h.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u03c4[1234]/i,wide:/^[1234]\u03bf? \u03c4\u03c1(\u03af|\u03b9)\u03bc\u03b7\u03bd\u03bf/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(h.a)({matchPatterns:{narrow:/^[\u03b9\u03c6\u03bc\u03b1\u03bc\u03b9\u03b9\u03b1\u03c3\u03bf\u03bd\u03b4]/i,abbreviated:/^(\u03b9\u03b1\u03bd|\u03c6\u03b5\u03b2|\u03bc[\u03ac\u03b1]\u03c1|\u03b1\u03c0\u03c1|\u03bc[\u03ac\u03b1][\u03b9\u0390]|\u03b9\u03bf[\u03cd\u03c5]\u03bd|\u03b9\u03bf[\u03cd\u03c5]\u03bb|\u03b1[\u03cd\u03c5]\u03b3|\u03c3\u03b5\u03c0|\u03bf\u03ba\u03c4|\u03bd\u03bf[\u03ad\u03b5]|\u03b4\u03b5\u03ba)/i,wide:/^(\u03bc[\u03ac\u03b1][\u03b9\u0390]|\u03b1[\u03cd\u03c5]\u03b3\u03bf[\u03c5\u03cd]\u03c3\u03c4)(\u03bf\u03c2|\u03bf\u03c5)|(\u03b9\u03b1\u03bd\u03bf\u03c5[\u03ac\u03b1]\u03c1|\u03c6\u03b5\u03b2\u03c1\u03bf\u03c5[\u03ac\u03b1]\u03c1|\u03bc[\u03ac\u03b1]\u03c1\u03c4|\u03b1\u03c0\u03c1[\u03af\u03b9]\u03bb|\u03b9\u03bf[\u03cd\u03c5]\u03bd|\u03b9\u03bf[\u03cd\u03c5]\u03bb|\u03c3\u03b5\u03c0\u03c4[\u03ad\u03b5]\u03bc\u03b2\u03c1|\u03bf\u03ba\u03c4[\u03ce\u03c9]\u03b2\u03c1|\u03bd\u03bf[\u03ad\u03b5]\u03bc\u03b2\u03c1|\u03b4\u03b5\u03ba[\u03ad\u03b5]\u03bc\u03b2\u03c1)(\u03b9\u03bf\u03c2|\u03af\u03bf\u03c5)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u03b9/i,/^\u03c6/i,/^\u03bc/i,/^\u03b1/i,/^\u03bc/i,/^\u03b9/i,/^\u03b9/i,/^\u03b1/i,/^\u03c3/i,/^\u03bf/i,/^\u03bd/i,/^\u03b4/i],any:[/^\u03b9\u03b1/i,/^\u03c6/i,/^\u03bc[\u03ac\u03b1]\u03c1/i,/^\u03b1\u03c0/i,/^\u03bc[\u03ac\u03b1][\u03b9\u0390]/i,/^\u03b9\u03bf[\u03cd\u03c5]\u03bd/i,/^\u03b9\u03bf[\u03cd\u03c5]\u03bb/i,/^\u03b1[\u03cd\u03c5]/i,/^\u03c3/i,/^\u03bf/i,/^\u03bd/i,/^\u03b4/i]},defaultParseWidth:"any"}),day:Object(h.a)({matchPatterns:{narrow:/^[\u03ba\u03b4\u03c4\u03c0\u03c3]/i,short:/^(\u03ba\u03c5|\u03b4\u03b5|\u03c4\u03c1|\u03c4\u03b5|\u03c0[\u03b5\u03ad]|\u03c0[\u03b1\u03ac]|\u03c3[\u03b1\u03ac])/i,abbreviated:/^(\u03ba\u03c5\u03c1|\u03b4\u03b5\u03c5|\u03c4\u03c1\u03b9|\u03c4\u03b5\u03c4|\u03c0\u03b5\u03bc|\u03c0\u03b1\u03c1|\u03c3\u03b1\u03b2)/i,wide:/^(\u03ba\u03c5\u03c1\u03b9\u03b1\u03ba(\u03ae|\u03b7)|\u03b4\u03b5\u03c5\u03c4(\u03ad|\u03b5)\u03c1\u03b1|\u03c4\u03c1(\u03af|\u03b9)\u03c4\u03b7|\u03c4\u03b5\u03c4(\u03ac|\u03b1)\u03c1\u03c4\u03b7|\u03c0(\u03ad|\u03b5)\u03bc\u03c0\u03c4\u03b7|\u03c0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5(\u03ae|\u03b7)|\u03c3(\u03ac|\u03b1)\u03b2\u03b2\u03b1\u03c4\u03bf)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u03ba/i,/^\u03b4/i,/^\u03c4/i,/^\u03c4/i,/^\u03c0/i,/^\u03c0/i,/^\u03c3/i],any:[/^\u03ba/i,/^\u03b4/i,/^\u03c4\u03c1/i,/^\u03c4\u03b5/i,/^\u03c0[\u03b5\u03ad]/i,/^\u03c0[\u03b1\u03ac]/i,/^\u03c3/i]},defaultParseWidth:"any"}),dayPeriod:Object(h.a)({matchPatterns:{narrow:/^(\u03c0\u03bc|\u03bc\u03bc|\u03bc\u03b5\u03c3(\u03ac|\u03b1)\u03bd\u03c5\u03c7\u03c4\u03b1|\u03bc\u03b5\u03c3\u03b7\u03bc(\u03ad|\u03b5)\u03c1\u03b9|\u03c0\u03c1\u03c9(\u03af|\u03b9)|\u03b1\u03c0(\u03cc|\u03bf)\u03b3\u03b5\u03c5\u03bc\u03b1|\u03b2\u03c1(\u03ac|\u03b1)\u03b4\u03c5|\u03bd(\u03cd|\u03c5)\u03c7\u03c4\u03b1)/i,any:/^([\u03c0\u03bc]\.?\s?\u03bc\.?|\u03bc\u03b5\u03c3(\u03ac|\u03b1)\u03bd\u03c5\u03c7\u03c4\u03b1|\u03bc\u03b5\u03c3\u03b7\u03bc(\u03ad|\u03b5)\u03c1\u03b9|\u03c0\u03c1\u03c9(\u03af|\u03b9)|\u03b1\u03c0(\u03cc|\u03bf)\u03b3\u03b5\u03c5\u03bc\u03b1|\u03b2\u03c1(\u03ac|\u03b1)\u03b4\u03c5|\u03bd(\u03cd|\u03c5)\u03c7\u03c4\u03b1)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u03c0\u03bc|\u03c0\.\s?\u03bc\./i,pm:/^\u03bc\u03bc|\u03bc\.\s?\u03bc\./i,midnight:/^\u03bc\u03b5\u03c3\u03ac\u03bd/i,noon:/^\u03bc\u03b5\u03c3\u03b7\u03bc(\u03ad|\u03b5)/i,morning:/\u03c0\u03c1\u03c9(\u03af|\u03b9)/i,afternoon:/\u03b1\u03c0(\u03cc|\u03bf)\u03b3\u03b5\u03c5\u03bc\u03b1/i,evening:/\u03b2\u03c1(\u03ac|\u03b1)\u03b4\u03c5/i,night:/\u03bd(\u03cd|\u03c5)\u03c7\u03c4\u03b1/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=c}}]);