(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[503,652],{1213:function(e,t,a){"use strict";a.r(t);var i=a(851);t.default=i.default},851:function(e,t,a){"use strict";a.r(t);var i={lessThanXSeconds:{one:"\u0e19\u0e49\u0e2d\u0e22\u0e01\u0e27\u0e48\u0e32 1 \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",other:"\u0e19\u0e49\u0e2d\u0e22\u0e01\u0e27\u0e48\u0e32 {{count}} \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35"},xSeconds:{one:"1 \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",other:"{{count}} \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35"},halfAMinute:"\u0e04\u0e23\u0e36\u0e48\u0e07\u0e19\u0e32\u0e17\u0e35",lessThanXMinutes:{one:"\u0e19\u0e49\u0e2d\u0e22\u0e01\u0e27\u0e48\u0e32 1 \u0e19\u0e32\u0e17\u0e35",other:"\u0e19\u0e49\u0e2d\u0e22\u0e01\u0e27\u0e48\u0e32 {{count}} \u0e19\u0e32\u0e17\u0e35"},xMinutes:{one:"1 \u0e19\u0e32\u0e17\u0e35",other:"{{count}} \u0e19\u0e32\u0e17\u0e35"},aboutXHours:{one:"\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",other:"\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 {{count}} \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07"},xHours:{one:"1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",other:"{{count}} \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07"},xDays:{one:"1 \u0e27\u0e31\u0e19",other:"{{count}} \u0e27\u0e31\u0e19"},aboutXWeeks:{one:"\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 1 \u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c",other:"\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 {{count}} \u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c"},xWeeks:{one:"1 \u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c",other:"{{count}} \u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c"},aboutXMonths:{one:"\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 1 \u0e40\u0e14\u0e37\u0e2d\u0e19",other:"\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 {{count}} \u0e40\u0e14\u0e37\u0e2d\u0e19"},xMonths:{one:"1 \u0e40\u0e14\u0e37\u0e2d\u0e19",other:"{{count}} \u0e40\u0e14\u0e37\u0e2d\u0e19"},aboutXYears:{one:"\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 1 \u0e1b\u0e35",other:"\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 {{count}} \u0e1b\u0e35"},xYears:{one:"1 \u0e1b\u0e35",other:"{{count}} \u0e1b\u0e35"},overXYears:{one:"\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32 1 \u0e1b\u0e35",other:"\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32 {{count}} \u0e1b\u0e35"},almostXYears:{one:"\u0e40\u0e01\u0e37\u0e2d\u0e1a 1 \u0e1b\u0e35",other:"\u0e40\u0e01\u0e37\u0e2d\u0e1a {{count}} \u0e1b\u0e35"}};var n=a(109),o={date:Object(n.a)({formats:{full:"\u0e27\u0e31\u0e19EEEE\u0e17\u0e35\u0e48 do MMMM y",long:"do MMMM y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:Object(n.a)({formats:{full:"H:mm:ss \u0e19. zzzz",long:"H:mm:ss \u0e19. z",medium:"H:mm:ss \u0e19.",short:"H:mm \u0e19."},defaultWidth:"medium"}),dateTime:Object(n.a)({formats:{full:"{{date}} '\u0e40\u0e27\u0e25\u0e32' {{time}}",long:"{{date}} '\u0e40\u0e27\u0e25\u0e32' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},r={lastWeek:"eeee'\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27\u0e40\u0e27\u0e25\u0e32' p",yesterday:"'\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49\u0e40\u0e27\u0e25\u0e32' p",today:"'\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e40\u0e27\u0e25\u0e32' p",tomorrow:"'\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49\u0e40\u0e27\u0e25\u0e32' p",nextWeek:"eeee '\u0e40\u0e27\u0e25\u0e32' p",other:"P"};var d=a(81);var u={ordinalNumber:function(e){return Number(e)},era:Object(d.a)({values:{narrow:["B","\u0e04\u0e28"],abbreviated:["BC","\u0e04.\u0e28."],wide:["\u0e1b\u0e35\u0e01\u0e48\u0e2d\u0e19\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e01\u0e32\u0e25","\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e4c\u0e28\u0e31\u0e01\u0e23\u0e32\u0e0a"]},defaultWidth:"wide"}),quarter:Object(d.a)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a\u0e41\u0e23\u0e01","\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a\u0e17\u0e35\u0e48\u0e2a\u0e2d\u0e07","\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21","\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a\u0e17\u0e35\u0e48\u0e2a\u0e35\u0e48"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(d.a)({values:{narrow:["\u0e21.\u0e04.","\u0e01.\u0e1e.","\u0e21\u0e35.\u0e04.","\u0e40\u0e21.\u0e22.","\u0e1e.\u0e04.","\u0e21\u0e34.\u0e22.","\u0e01.\u0e04.","\u0e2a.\u0e04.","\u0e01.\u0e22.","\u0e15.\u0e04.","\u0e1e.\u0e22.","\u0e18.\u0e04."],abbreviated:["\u0e21.\u0e04.","\u0e01.\u0e1e.","\u0e21\u0e35.\u0e04.","\u0e40\u0e21.\u0e22.","\u0e1e.\u0e04.","\u0e21\u0e34.\u0e22.","\u0e01.\u0e04.","\u0e2a.\u0e04.","\u0e01.\u0e22.","\u0e15.\u0e04.","\u0e1e.\u0e22.","\u0e18.\u0e04."],wide:["\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21","\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c","\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21","\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19","\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21","\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19","\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21","\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21","\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19","\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21","\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19","\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"]},defaultWidth:"wide"}),day:Object(d.a)({values:{narrow:["\u0e2d\u0e32.","\u0e08.","\u0e2d.","\u0e1e.","\u0e1e\u0e24.","\u0e28.","\u0e2a."],short:["\u0e2d\u0e32.","\u0e08.","\u0e2d.","\u0e1e.","\u0e1e\u0e24.","\u0e28.","\u0e2a."],abbreviated:["\u0e2d\u0e32.","\u0e08.","\u0e2d.","\u0e1e.","\u0e1e\u0e24.","\u0e28.","\u0e2a."],wide:["\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c","\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c","\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23","\u0e1e\u0e38\u0e18","\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35","\u0e28\u0e38\u0e01\u0e23\u0e4c","\u0e40\u0e2a\u0e32\u0e23\u0e4c"]},defaultWidth:"wide"}),dayPeriod:Object(d.a)({values:{narrow:{am:"\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",pm:"\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",midnight:"\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07\u0e04\u0e37\u0e19",noon:"\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",morning:"\u0e40\u0e0a\u0e49\u0e32",afternoon:"\u0e1a\u0e48\u0e32\u0e22",evening:"\u0e40\u0e22\u0e47\u0e19",night:"\u0e01\u0e25\u0e32\u0e07\u0e04\u0e37\u0e19"},abbreviated:{am:"\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",pm:"\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",midnight:"\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07\u0e04\u0e37\u0e19",noon:"\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",morning:"\u0e40\u0e0a\u0e49\u0e32",afternoon:"\u0e1a\u0e48\u0e32\u0e22",evening:"\u0e40\u0e22\u0e47\u0e19",night:"\u0e01\u0e25\u0e32\u0e07\u0e04\u0e37\u0e19"},wide:{am:"\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",pm:"\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",midnight:"\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07\u0e04\u0e37\u0e19",noon:"\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",morning:"\u0e40\u0e0a\u0e49\u0e32",afternoon:"\u0e1a\u0e48\u0e32\u0e22",evening:"\u0e40\u0e22\u0e47\u0e19",night:"\u0e01\u0e25\u0e32\u0e07\u0e04\u0e37\u0e19"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",pm:"\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",midnight:"\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07\u0e04\u0e37\u0e19",noon:"\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",morning:"\u0e15\u0e2d\u0e19\u0e40\u0e0a\u0e49\u0e32",afternoon:"\u0e15\u0e2d\u0e19\u0e01\u0e25\u0e32\u0e07\u0e27\u0e31\u0e19",evening:"\u0e15\u0e2d\u0e19\u0e40\u0e22\u0e47\u0e19",night:"\u0e15\u0e2d\u0e19\u0e01\u0e25\u0e32\u0e07\u0e04\u0e37\u0e19"},abbreviated:{am:"\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",pm:"\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",midnight:"\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07\u0e04\u0e37\u0e19",noon:"\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",morning:"\u0e15\u0e2d\u0e19\u0e40\u0e0a\u0e49\u0e32",afternoon:"\u0e15\u0e2d\u0e19\u0e01\u0e25\u0e32\u0e07\u0e27\u0e31\u0e19",evening:"\u0e15\u0e2d\u0e19\u0e40\u0e22\u0e47\u0e19",night:"\u0e15\u0e2d\u0e19\u0e01\u0e25\u0e32\u0e07\u0e04\u0e37\u0e19"},wide:{am:"\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",pm:"\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",midnight:"\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07\u0e04\u0e37\u0e19",noon:"\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",morning:"\u0e15\u0e2d\u0e19\u0e40\u0e0a\u0e49\u0e32",afternoon:"\u0e15\u0e2d\u0e19\u0e01\u0e25\u0e32\u0e07\u0e27\u0e31\u0e19",evening:"\u0e15\u0e2d\u0e19\u0e40\u0e22\u0e47\u0e19",night:"\u0e15\u0e2d\u0e19\u0e01\u0e25\u0e32\u0e07\u0e04\u0e37\u0e19"}},defaultFormattingWidth:"wide"})},s=a(181),h=a(82),m={code:"th",formatDistance:function(e,t,a){var n;return a=a||{},n="string"===typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"halfAMinute"===e?"\u0e43\u0e19"+n:"\u0e43\u0e19 "+n:n+"\u0e17\u0e35\u0e48\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32":n},formatLong:o,formatRelative:function(e,t,a,i){return r[e]},localize:u,match:{ordinalNumber:Object(s.a)({matchPattern:/^\d+/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(h.a)({matchPatterns:{narrow:/^([bB]|[aA]|\u0e04\u0e28)/i,abbreviated:/^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|\u0e04\.?\u0e28\.?)/i,wide:/^(\u0e01\u0e48\u0e2d\u0e19\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e01\u0e32\u0e25|\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e4c\u0e28\u0e31\u0e01\u0e23\u0e32\u0e0a|\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e01\u0e32\u0e25)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^[bB]/i,/^(^[aA]|\u0e04\.?\u0e28\.?|\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e01\u0e32\u0e25|\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e4c\u0e28\u0e31\u0e01\u0e23\u0e32\u0e0a|)/i]},defaultParseWidth:"any"}),quarter:Object(h.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a(\u0e17\u0e35\u0e48)? ?[1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|\u0e41\u0e23\u0e01|\u0e2b\u0e19\u0e36\u0e48\u0e07)/i,/(2|\u0e2a\u0e2d\u0e07)/i,/(3|\u0e2a\u0e32\u0e21)/i,/(4|\u0e2a\u0e35\u0e48)/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(h.a)({matchPatterns:{narrow:/^(\u0e21\.?\u0e04\.?|\u0e01\.?\u0e1e\.?|\u0e21\u0e35\.?\u0e04\.?|\u0e40\u0e21\.?\u0e22\.?|\u0e1e\.?\u0e04\.?|\u0e21\u0e34\.?\u0e22\.?|\u0e01\.?\u0e04\.?|\u0e2a\.?\u0e04\.?|\u0e01\.?\u0e22\.?|\u0e15\.?\u0e04\.?|\u0e1e\.?\u0e22\.?|\u0e18\.?\u0e04\.?)/i,abbreviated:/^(\u0e21\.?\u0e04\.?|\u0e01\.?\u0e1e\.?|\u0e21\u0e35\.?\u0e04\.?|\u0e40\u0e21\.?\u0e22\.?|\u0e1e\.?\u0e04\.?|\u0e21\u0e34\.?\u0e22\.?|\u0e01\.?\u0e04\.?|\u0e2a\.?\u0e04\.?|\u0e01\.?\u0e22\.?|\u0e15\.?\u0e04\.?|\u0e1e\.?\u0e22\.?|\u0e18\.?\u0e04\.?')/i,wide:/^(\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21|\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c|\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21|\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19|\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21|\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19|\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21|\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21|\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19|\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21|\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19|\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21)/i},defaultMatchWidth:"wide",parsePatterns:{wide:[/^\u0e21\u0e01/i,/^\u0e01\u0e38\u0e21/i,/^\u0e21\u0e35/i,/^\u0e40\u0e21/i,/^\u0e1e\u0e24\u0e29/i,/^\u0e21\u0e34/i,/^\u0e01\u0e23\u0e01/i,/^\u0e2a/i,/^\u0e01\u0e31\u0e19/i,/^\u0e15/i,/^\u0e1e\u0e24\u0e28/i,/^\u0e18/i],any:[/^\u0e21\.?\u0e04\.?/i,/^\u0e01\.?\u0e1e\.?/i,/^\u0e21\u0e35\.?\u0e04\.?/i,/^\u0e40\u0e21\.?\u0e22\.?/i,/^\u0e1e\.?\u0e04\.?/i,/^\u0e21\u0e34\.?\u0e22\.?/i,/^\u0e01\.?\u0e04\.?/i,/^\u0e2a\.?\u0e04\.?/i,/^\u0e01\.?\u0e22\.?/i,/^\u0e15\.?\u0e04\.?/i,/^\u0e1e\.?\u0e22\.?/i,/^\u0e18\.?\u0e04\.?/i]},defaultParseWidth:"any"}),day:Object(h.a)({matchPatterns:{narrow:/^(\u0e2d\u0e32\.?|\u0e08\.?|\u0e2d\.?|\u0e1e\u0e24\.?|\u0e1e\.?|\u0e28\.?|\u0e2a\.?)/i,short:/^(\u0e2d\u0e32\.?|\u0e08\.?|\u0e2d\.?|\u0e1e\u0e24\.?|\u0e1e\.?|\u0e28\.?|\u0e2a\.?)/i,abbreviated:/^(\u0e2d\u0e32\.?|\u0e08\.?|\u0e2d\.?|\u0e1e\u0e24\.?|\u0e1e\.?|\u0e28\.?|\u0e2a\.?)/i,wide:/^(\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c|\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c|\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23|\u0e1e\u0e38\u0e18|\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35|\u0e28\u0e38\u0e01\u0e23\u0e4c|\u0e40\u0e2a\u0e32\u0e23\u0e4c)/i},defaultMatchWidth:"wide",parsePatterns:{wide:[/^\u0e2d\u0e32/i,/^\u0e08\u0e31/i,/^\u0e2d\u0e31/i,/^\u0e1e\u0e38\u0e18/i,/^\u0e1e\u0e24/i,/^\u0e28/i,/^\u0e40\u0e2a/i],any:[/^\u0e2d\u0e32/i,/^\u0e08/i,/^\u0e2d/i,/^\u0e1e(?!\u0e24)/i,/^\u0e1e\u0e24/i,/^\u0e28/i,/^\u0e2a/i]},defaultParseWidth:"any"}),dayPeriod:Object(h.a)({matchPatterns:{any:/^(\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07\u0e04\u0e37\u0e19|\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|(\u0e15\u0e2d\u0e19.*?)?.*(\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e40\u0e0a\u0e49\u0e32|\u0e1a\u0e48\u0e32\u0e22|\u0e40\u0e22\u0e47\u0e19|\u0e01\u0e25\u0e32\u0e07\u0e04\u0e37\u0e19))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/i,pm:/^\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/i,midnight:/^\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07\u0e04\u0e37\u0e19/i,noon:/^\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/i,morning:/\u0e40\u0e0a\u0e49\u0e32/i,afternoon:/\u0e1a\u0e48\u0e32\u0e22/i,evening:/\u0e40\u0e22\u0e47\u0e19/i,night:/\u0e01\u0e25\u0e32\u0e07\u0e04\u0e37\u0e19/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=m}}]);