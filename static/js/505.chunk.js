(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[505,654],{1217:function(e,t,a){"use strict";a.r(t);var n=a(853);t.default=n.default},853:function(e,t,a){"use strict";a.r(t);var n={lessThanXSeconds:{one:"\u0628\u0649\u0631 \u0633\u0649\u0643\u06c7\u0646\u062a \u0626\u0649\u0686\u0649\u062f\u06d5",other:"\u0633\u0649\u0643\u06c7\u0646\u062a \u0626\u0649\u0686\u0649\u062f\u06d5 {{count}}"},xSeconds:{one:"\u0628\u0649\u0631 \u0633\u0649\u0643\u06c7\u0646\u062a",other:"\u0633\u0649\u0643\u06c7\u0646\u062a {{count}}"},halfAMinute:"\u064a\u0649\u0631\u0649\u0645 \u0645\u0649\u0646\u06c7\u062a",lessThanXMinutes:{one:"\u0628\u0649\u0631 \u0645\u0649\u0646\u06c7\u062a \u0626\u0649\u0686\u0649\u062f\u06d5",other:"\u0645\u0649\u0646\u06c7\u062a \u0626\u0649\u0686\u0649\u062f\u06d5 {{count}}"},xMinutes:{one:"\u0628\u0649\u0631 \u0645\u0649\u0646\u06c7\u062a",other:"\u0645\u0649\u0646\u06c7\u062a {{count}}"},aboutXHours:{one:"\u062a\u06d5\u062e\u0645\u0649\u0646\u06d5\u0646 \u0628\u0649\u0631 \u0633\u0627\u0626\u06d5\u062a",other:"\u0633\u0627\u0626\u06d5\u062a {{count}} \u062a\u06d5\u062e\u0645\u0649\u0646\u06d5\u0646"},xHours:{one:"\u0628\u0649\u0631 \u0633\u0627\u0626\u06d5\u062a",other:"\u0633\u0627\u0626\u06d5\u062a {{count}}"},xDays:{one:"\u0628\u0649\u0631 \u0643\u06c8\u0646",other:"\u0643\u06c8\u0646 {{count}}"},aboutXWeeks:{one:"\u062a\u06d5\u062e\u0645\u0649\u0646\u06d5\u0646 \u0628\u0649\u0631\u06be\u06d5\u067e\u062a\u06d5",other:"\u06be\u06d5\u067e\u062a\u06d5 {{count}} \u062a\u06d5\u062e\u0645\u0649\u0646\u06d5\u0646"},xWeeks:{one:"\u0628\u0649\u0631\u06be\u06d5\u067e\u062a\u06d5",other:"\u06be\u06d5\u067e\u062a\u06d5 {{count}}"},aboutXMonths:{one:"\u062a\u06d5\u062e\u0645\u0649\u0646\u06d5\u0646 \u0628\u0649\u0631 \u0626\u0627\u064a",other:"\u0626\u0627\u064a {{count}} \u062a\u06d5\u062e\u0645\u0649\u0646\u06d5\u0646"},xMonths:{one:"\u0628\u0649\u0631 \u0626\u0627\u064a",other:"\u0626\u0627\u064a {{count}}"},aboutXYears:{one:"\u062a\u06d5\u062e\u0645\u0649\u0646\u06d5\u0646 \u0628\u0649\u0631 \u064a\u0649\u0644",other:"\u064a\u0649\u0644 {{count}} \u062a\u06d5\u062e\u0645\u0649\u0646\u06d5\u0646"},xYears:{one:"\u0628\u0649\u0631 \u064a\u0649\u0644",other:"\u064a\u0649\u0644 {{count}}"},overXYears:{one:"\u0628\u0649\u0631 \u064a\u0649\u0644\u062f\u0649\u0646 \u0626\u0627\u0631\u062a\u06c7\u0642",other:"\u064a\u0649\u0644\u062f\u0649\u0646 \u0626\u0627\u0631\u062a\u06c7\u0642 {{count}}"},almostXYears:{one:"\u0626\u0627\u0633\u0627\u0633\u06d5\u0646 \u0628\u0649\u0631 \u064a\u0649\u0644",other:"\u064a\u0649\u0644 {{count}} \u0626\u0627\u0633\u0627\u0633\u06d5\u0646"}};var i=a(110),o={date:Object(i.a)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Object(i.a)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Object(i.a)({formats:{full:"{{date}} '\u062f\u06d5' {{time}}",long:"{{date}} '\u062f\u06d5' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},r={lastWeek:"'\u0626\u200d\u06c6\u062a\u0643\u06d5\u0646' eeee '\u062f\u06d5' p",yesterday:"'\u062a\u06c8\u0646\u06c8\u06af\u06c8\u0646 \u062f\u06d5' p",today:"'\u0628\u06c8\u06af\u06c8\u0646 \u062f\u06d5' p",tomorrow:"'\u0626\u06d5\u062a\u06d5 \u062f\u06d5' p",nextWeek:"eeee '\u062f\u06d5' p",other:"P"};var d=a(82);var u={ordinalNumber:function(e,t){return String(e)},era:Object(d.a)({values:{narrow:["\u0628","\u0643"],abbreviated:["\u0628","\u0643"],wide:["\u0645\u0649\u064a\u0644\u0627\u062f\u0649\u062f\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646","\u0645\u0649\u064a\u0644\u0627\u062f\u0649\u062f\u0649\u0646 \u0643\u0649\u064a\u0649\u0646"]},defaultWidth:"wide"}),quarter:Object(d.a)({values:{narrow:["1","2","3","4"],abbreviated:["1","2","3","4"],wide:["\u0628\u0649\u0631\u0649\u0646\u062c\u0649 \u0686\u0627\u0631\u06d5\u0643","\u0626\u0649\u0643\u0643\u0649\u0646\u062c\u0649 \u0686\u0627\u0631\u06d5\u0643","\u0626\u06c8\u0686\u0649\u0646\u062c\u0649 \u0686\u0627\u0631\u06d5\u0643","\u062a\u06c6\u062a\u0649\u0646\u062c\u0649 \u0686\u0627\u0631\u06d5\u0643"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(d.a)({values:{narrow:["\u064a","\u0641","\u0645","\u0627","\u0645","\u0649","\u0649","\u0627","\u0633","\u06c6","\u0646","\u062f"],abbreviated:["\u064a\u0627\u0646\u06cb\u0627\u0631","\u0641\u06d0\u06cb\u0649\u0631\u0627\u0644","\u0645\u0627\u0631\u062a","\u0626\u0627\u067e\u0631\u0649\u0644","\u0645\u0627\u064a","\u0626\u0649\u064a\u06c7\u0646","\u0626\u0649\u064a\u0648\u0644","\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a","\u0633\u0649\u0646\u062a\u06d5\u0628\u0649\u0631","\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631","\u0646\u0648\u064a\u0627\u0628\u0649\u0631","\u062f\u0649\u0643\u0627\u0628\u0649\u0631"],wide:["\u064a\u0627\u0646\u06cb\u0627\u0631","\u0641\u06d0\u06cb\u0649\u0631\u0627\u0644","\u0645\u0627\u0631\u062a","\u0626\u0627\u067e\u0631\u0649\u0644","\u0645\u0627\u064a","\u0626\u0649\u064a\u06c7\u0646","\u0626\u0649\u064a\u0648\u0644","\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a","\u0633\u0649\u0646\u062a\u06d5\u0628\u0649\u0631","\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631","\u0646\u0648\u064a\u0627\u0628\u0649\u0631","\u062f\u0649\u0643\u0627\u0628\u0649\u0631"]},defaultWidth:"wide"}),day:Object(d.a)({values:{narrow:["\u064a","\u062f","\u0633","\u0686","\u067e","\u062c","\u0634"],short:["\u064a","\u062f","\u0633","\u0686","\u067e","\u062c","\u0634"],abbreviated:["\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5","\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5","\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5","\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5","\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5","\u062c\u06c8\u0645\u06d5","\u0634\u06d5\u0646\u0628\u06d5"],wide:["\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5","\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5","\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5","\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5","\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5","\u062c\u06c8\u0645\u06d5","\u0634\u06d5\u0646\u0628\u06d5"]},defaultWidth:"wide"}),dayPeriod:Object(d.a)({values:{narrow:{am:"\u0626\u06d5",pm:"\u0686",midnight:"\u0643",noon:"\u0686",morning:"\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646",afternoon:"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646",evening:"\u0626\u0627\u062e\u0634\u0649\u0645",night:"\u0643\u0649\u0686\u06d5"},abbreviated:{am:"\u0626\u06d5",pm:"\u0686",midnight:"\u0643",noon:"\u0686",morning:"\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646",afternoon:"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646",evening:"\u0626\u0627\u062e\u0634\u0649\u0645",night:"\u0643\u0649\u0686\u06d5"},wide:{am:"\u0626\u06d5",pm:"\u0686",midnight:"\u0643",noon:"\u0686",morning:"\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646",afternoon:"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646",evening:"\u0626\u0627\u062e\u0634\u0649\u0645",night:"\u0643\u0649\u0686\u06d5"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u0626\u06d5",pm:"\u0686",midnight:"\u0643",noon:"\u0686",morning:"\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646\u062f\u06d5",afternoon:"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646",evening:"\u0626\u0627\u062e\u0634\u0627\u0645\u062f\u0627",night:"\u0643\u0649\u0686\u0649\u062f\u06d5"},abbreviated:{am:"\u0626\u06d5",pm:"\u0686",midnight:"\u0643",noon:"\u0686",morning:"\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646\u062f\u06d5",afternoon:"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646",evening:"\u0626\u0627\u062e\u0634\u0627\u0645\u062f\u0627",night:"\u0643\u0649\u0686\u0649\u062f\u06d5"},wide:{am:"\u0626\u06d5",pm:"\u0686",midnight:"\u0643",noon:"\u0686",morning:"\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646\u062f\u06d5",afternoon:"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646",evening:"\u0626\u0627\u062e\u0634\u0627\u0645\u062f\u0627",night:"\u0643\u0649\u0686\u0649\u062f\u06d5"}},defaultFormattingWidth:"wide"})},h=a(180),s=a(83),m={code:"ug",formatDistance:function(e,t,a){var i;return a=a||{},i="string"===typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?i:i+" \u0628\u0648\u0644\u062f\u0649":i},formatLong:o,formatRelative:function(e,t,a,n){return r[e]},localize:u,match:{ordinalNumber:Object(h.a)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(s.a)({matchPatterns:{narrow:/^(\u0628|\u0643)/i,wide:/^(\u0645\u0649\u064a\u0644\u0627\u062f\u0649\u062f\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0645\u0649\u064a\u0644\u0627\u062f\u0649\u062f\u0649\u0646 \u0643\u0649\u064a\u0649\u0646)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0628\u06c7\u0631\u06c7\u0646/i,/^\u0643\u0649\u064a\u0649\u0646/i]},defaultParseWidth:"any"}),quarter:Object(s.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u0686[1234]/i,wide:/^\u0686\u0627\u0631\u06d5\u0643 [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(s.a)({matchPatterns:{narrow:/^[\u064a\u0641\u0645\u0626\u0627\u0645\u0626\u200d\u0626\u0627\u0633\u06c6\u0646\u062f]/i,abbreviated:/^(\u064a\u0627\u0646\u06cb\u0627\u0631|\u0641\u06d0\u06cb\u0649\u0631\u0627\u0644|\u0645\u0627\u0631\u062a|\u0626\u0627\u067e\u0631\u0649\u0644|\u0645\u0627\u064a|\u0626\u0649\u064a\u06c7\u0646|\u0626\u0649\u064a\u0648\u0644|\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a|\u0633\u0649\u0646\u062a\u06d5\u0628\u0649\u0631|\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631|\u0646\u0648\u064a\u0627\u0628\u0649\u0631|\u062f\u0649\u0643\u0627\u0628\u0649\u0631)/i,wide:/^(\u064a\u0627\u0646\u06cb\u0627\u0631|\u0641\u06d0\u06cb\u0649\u0631\u0627\u0644|\u0645\u0627\u0631\u062a|\u0626\u0627\u067e\u0631\u0649\u0644|\u0645\u0627\u064a|\u0626\u0649\u064a\u06c7\u0646|\u0626\u0649\u064a\u0648\u0644|\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a|\u0633\u0649\u0646\u062a\u06d5\u0628\u0649\u0631|\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631|\u0646\u0648\u064a\u0627\u0628\u0649\u0631|\u062f\u0649\u0643\u0627\u0628\u0649\u0631)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u064a/i,/^\u0641/i,/^\u0645/i,/^\u0627/i,/^\u0645/i,/^\u0649\u200d/i,/^\u0649\u200d/i,/^\u0627\u200d/i,/^\u0633/i,/^\u06c6/i,/^\u0646/i,/^\u062f/i],any:[/^\u064a\u0627\u0646/i,/^\u0641\u06d0\u06cb/i,/^\u0645\u0627\u0631/i,/^\u0626\u0627\u067e/i,/^\u0645\u0627\u064a/i,/^\u0626\u0649\u064a\u06c7\u0646/i,/^\u0626\u0649\u064a\u0648\u0644/i,/^\u0626\u0627\u06cb/i,/^\u0633\u0649\u0646/i,/^\u0626\u06c6\u0643/i,/^\u0646\u0648\u064a/i,/^\u062f\u0649\u0643/i]},defaultParseWidth:"any"}),day:Object(s.a)({matchPatterns:{narrow:/^[\u062f\u0633\u0686\u067e\u062c\u0634\u064a]/i,short:/^(\u064a\u06d5|\u062f\u06c8|\u0633\u06d5|\u0686\u0627|\u067e\u06d5|\u062c\u06c8|\u0634\u06d5)/i,abbreviated:/^(\u064a\u06d5|\u062f\u06c8|\u0633\u06d5|\u0686\u0627|\u067e\u06d5|\u062c\u06c8|\u0634\u06d5)/i,wide:/^(\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5|\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5|\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5|\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5|\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5|\u062c\u06c8\u0645\u06d5|\u0634\u06d5\u0646\u0628\u06d5)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u064a/i,/^\u062f/i,/^\u0633/i,/^\u0686/i,/^\u067e/i,/^\u062c/i,/^\u0634/i],any:[/^\u064a/i,/^\u062f/i,/^\u0633/i,/^\u0686/i,/^\u067e/i,/^\u062c/i,/^\u0634/i]},defaultParseWidth:"any"}),dayPeriod:Object(s.a)({matchPatterns:{narrow:/^(\u0626\u06d5|\u0686|\u0643|\u0686|(\u062f\u06d5|\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646) ( \u0626\u06d5\u200d|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646|\u0626\u0627\u062e\u0634\u0649\u0645|\u0643\u0649\u0686\u06d5))/i,any:/^(\u0626\u06d5|\u0686|\u0643|\u0686|(\u062f\u06d5|\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646) ( \u0626\u06d5\u200d|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646|\u0626\u0627\u062e\u0634\u0649\u0645|\u0643\u0649\u0686\u06d5))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u0626\u06d5/i,pm:/^\u0686/i,midnight:/^\u0643/i,noon:/^\u0686/i,morning:/\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646/i,afternoon:/\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646/i,evening:/\u0626\u0627\u062e\u0634\u0649\u0645/i,night:/\u0643\u0649\u0686\u06d5/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=m}}]);