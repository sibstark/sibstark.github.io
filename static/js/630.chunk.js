(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[630],{829:function(e,t,a){"use strict";a.r(t);var n={lessThanXSeconds:{one:"1\ucd08 \ubbf8\ub9cc",other:"{{count}}\ucd08 \ubbf8\ub9cc"},xSeconds:{one:"1\ucd08",other:"{{count}}\ucd08"},halfAMinute:"30\ucd08",lessThanXMinutes:{one:"1\ubd84 \ubbf8\ub9cc",other:"{{count}}\ubd84 \ubbf8\ub9cc"},xMinutes:{one:"1\ubd84",other:"{{count}}\ubd84"},aboutXHours:{one:"\uc57d 1\uc2dc\uac04",other:"\uc57d {{count}}\uc2dc\uac04"},xHours:{one:"1\uc2dc\uac04",other:"{{count}}\uc2dc\uac04"},xDays:{one:"1\uc77c",other:"{{count}}\uc77c"},aboutXWeeks:{one:"\uc57d 1\uc8fc",other:"\uc57d {{count}}\uc8fc"},xWeeks:{one:"1\uc8fc",other:"{{count}}\uc8fc"},aboutXMonths:{one:"\uc57d 1\uac1c\uc6d4",other:"\uc57d {{count}}\uac1c\uc6d4"},xMonths:{one:"1\uac1c\uc6d4",other:"{{count}}\uac1c\uc6d4"},aboutXYears:{one:"\uc57d 1\ub144",other:"\uc57d {{count}}\ub144"},xYears:{one:"1\ub144",other:"{{count}}\ub144"},overXYears:{one:"1\ub144 \uc774\uc0c1",other:"{{count}}\ub144 \uc774\uc0c1"},almostXYears:{one:"\uac70\uc758 1\ub144",other:"\uac70\uc758 {{count}}\ub144"}};var r=a(109),i={date:Object(r.a)({formats:{full:"y\ub144 M\uc6d4 d\uc77c EEEE",long:"y\ub144 M\uc6d4 d\uc77c",medium:"y.MM.dd",short:"y.MM.dd"},defaultWidth:"full"}),time:Object(r.a)({formats:{full:"a H\uc2dc mm\ubd84 ss\ucd08 zzzz",long:"a H:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(r.a)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},o={lastWeek:"'\uc9c0\ub09c' eeee p",yesterday:"'\uc5b4\uc81c' p",today:"'\uc624\ub298' p",tomorrow:"'\ub0b4\uc77c' p",nextWeek:"'\ub2e4\uc74c' eeee p",other:"P"};var d=a(82);var s={ordinalNumber:function(e,t){var a=Number(e);switch(String((t||{}).unit)){case"minute":case"second":return a;case"date":return a+"\uc77c";default:return a+"\ubc88\uc9f8"}},era:Object(d.a)({values:{narrow:["BC","AD"],abbreviated:["BC","AD"],wide:["\uae30\uc6d0\uc804","\uc11c\uae30"]},defaultWidth:"wide"}),quarter:Object(d.a)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1\ubd84\uae30","2\ubd84\uae30","3\ubd84\uae30","4\ubd84\uae30"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(d.a)({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1\uc6d4","2\uc6d4","3\uc6d4","4\uc6d4","5\uc6d4","6\uc6d4","7\uc6d4","8\uc6d4","9\uc6d4","10\uc6d4","11\uc6d4","12\uc6d4"],wide:["1\uc6d4","2\uc6d4","3\uc6d4","4\uc6d4","5\uc6d4","6\uc6d4","7\uc6d4","8\uc6d4","9\uc6d4","10\uc6d4","11\uc6d4","12\uc6d4"]},defaultWidth:"wide"}),day:Object(d.a)({values:{narrow:["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"],short:["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"],abbreviated:["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"],wide:["\uc77c\uc694\uc77c","\uc6d4\uc694\uc77c","\ud654\uc694\uc77c","\uc218\uc694\uc77c","\ubaa9\uc694\uc77c","\uae08\uc694\uc77c","\ud1a0\uc694\uc77c"]},defaultWidth:"wide"}),dayPeriod:Object(d.a)({values:{narrow:{am:"\uc624\uc804",pm:"\uc624\ud6c4",midnight:"\uc790\uc815",noon:"\uc815\uc624",morning:"\uc544\uce68",afternoon:"\uc624\ud6c4",evening:"\uc800\ub141",night:"\ubc24"},abbreviated:{am:"\uc624\uc804",pm:"\uc624\ud6c4",midnight:"\uc790\uc815",noon:"\uc815\uc624",morning:"\uc544\uce68",afternoon:"\uc624\ud6c4",evening:"\uc800\ub141",night:"\ubc24"},wide:{am:"\uc624\uc804",pm:"\uc624\ud6c4",midnight:"\uc790\uc815",noon:"\uc815\uc624",morning:"\uc544\uce68",afternoon:"\uc624\ud6c4",evening:"\uc800\ub141",night:"\ubc24"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\uc624\uc804",pm:"\uc624\ud6c4",midnight:"\uc790\uc815",noon:"\uc815\uc624",morning:"\uc544\uce68",afternoon:"\uc624\ud6c4",evening:"\uc800\ub141",night:"\ubc24"},abbreviated:{am:"\uc624\uc804",pm:"\uc624\ud6c4",midnight:"\uc790\uc815",noon:"\uc815\uc624",morning:"\uc544\uce68",afternoon:"\uc624\ud6c4",evening:"\uc800\ub141",night:"\ubc24"},wide:{am:"\uc624\uc804",pm:"\uc624\ud6c4",midnight:"\uc790\uc815",noon:"\uc815\uc624",morning:"\uc544\uce68",afternoon:"\uc624\ud6c4",evening:"\uc800\ub141",night:"\ubc24"}},defaultFormattingWidth:"wide"})},u=a(181),m=a(83),h={code:"ko",formatDistance:function(e,t,a){var r;return a=a||{},r="string"===typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?r+" \ud6c4":r+" \uc804":r},formatLong:i,formatRelative:function(e,t,a,n){return o[e]},localize:s,match:{ordinalNumber:Object(u.a)({matchPattern:/^(\d+)(\uc77c|\ubc88\uc9f8)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(m.a)({matchPatterns:{narrow:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(\uae30\uc6d0\uc804|\uc11c\uae30)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(bc|\uae30\uc6d0\uc804)/i,/^(ad|\uc11c\uae30)/i]},defaultParseWidth:"any"}),quarter:Object(m.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\uc0ac?\ubd84\uae30/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(m.a)({matchPatterns:{narrow:/^(1[012]|[123456789])/,abbreviated:/^(1[012]|[123456789])\uc6d4/i,wide:/^(1[012]|[123456789])\uc6d4/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^1\uc6d4?$/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},defaultParseWidth:"any"}),day:Object(m.a)({matchPatterns:{narrow:/^[\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0]/,short:/^[\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0]/,abbreviated:/^[\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0]/,wide:/^[\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0]\uc694\uc77c/},defaultMatchWidth:"wide",parsePatterns:{any:[/^\uc77c/,/^\uc6d4/,/^\ud654/,/^\uc218/,/^\ubaa9/,/^\uae08/,/^\ud1a0/]},defaultParseWidth:"any"}),dayPeriod:Object(m.a)({matchPatterns:{any:/^(am|pm|\uc624\uc804|\uc624\ud6c4|\uc790\uc815|\uc815\uc624|\uc544\uce68|\uc800\ub141|\ubc24)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^(am|\uc624\uc804)/i,pm:/^(pm|\uc624\ud6c4)/i,midnight:/^\uc790\uc815/i,noon:/^\uc815\uc624/i,morning:/^\uc544\uce68/i,afternoon:/^\uc624\ud6c4/i,evening:/^\uc800\ub141/i,night:/^\ubc24/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=h}}]);