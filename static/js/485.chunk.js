(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[485,634],{1174:function(e,t,a){"use strict";a.r(t);var n=a(833);t.default=n.default},833:function(e,t,a){"use strict";a.r(t);var n={lessThanXSeconds:{one:"\u043f\u043e\u043c\u0430\u043b\u043a\u0443 \u043e\u0434 \u0441\u0435\u043a\u0443\u043d\u0434\u0430",other:"\u043f\u043e\u043c\u0430\u043b\u043a\u0443 \u043e\u0434 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},xSeconds:{one:"1 \u0441\u0435\u043a\u0443\u043d\u0434\u0430",other:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},halfAMinute:"\u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0430 \u043c\u0438\u043d\u0443\u0442\u0430",lessThanXMinutes:{one:"\u043f\u043e\u043c\u0430\u043b\u043a\u0443 \u043e\u0434 \u043c\u0438\u043d\u0443\u0442\u0430",other:"\u043f\u043e\u043c\u0430\u043b\u043a\u0443 \u043e\u0434 {{count}} \u043c\u0438\u043d\u0443\u0442\u0438"},xMinutes:{one:"1 \u043c\u0438\u043d\u0443\u0442\u0430",other:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0438"},aboutXHours:{one:"\u043e\u043a\u043e\u043b\u0443 1 \u0447\u0430\u0441",other:"\u043e\u043a\u043e\u043b\u0443 {{count}} \u0447\u0430\u0441\u0430"},xHours:{one:"1 \u0447\u0430\u0441",other:"{{count}} \u0447\u0430\u0441\u0430"},xDays:{one:"1 \u0434\u0435\u043d",other:"{{count}} \u0434\u0435\u043d\u0430"},aboutXWeeks:{one:"\u043e\u043a\u043e\u043b\u0443 1 \u043d\u0435\u0434\u0435\u043b\u0430",other:"\u043e\u043a\u043e\u043b\u0443 {{count}} \u043c\u0435\u0441\u0435\u0446\u0438"},xWeeks:{one:"1 \u043d\u0435\u0434\u0435\u043b\u0430",other:"{{count}} \u043d\u0435\u0434\u0435\u043b\u0438"},aboutXMonths:{one:"\u043e\u043a\u043e\u043b\u0443 1 \u043c\u0435\u0441\u0435\u0446",other:"\u043e\u043a\u043e\u043b\u0443 {{count}} \u043d\u0435\u0434\u0435\u043b\u0438"},xMonths:{one:"1 \u043c\u0435\u0441\u0435\u0446",other:"{{count}} \u043c\u0435\u0441\u0435\u0446\u0438"},aboutXYears:{one:"\u043e\u043a\u043e\u043b\u0443 1 \u0433\u043e\u0434\u0438\u043d\u0430",other:"\u043e\u043a\u043e\u043b\u0443 {{count}} \u0433\u043e\u0434\u0438\u043d\u0438"},xYears:{one:"1 \u0433\u043e\u0434\u0438\u043d\u0430",other:"{{count}} \u0433\u043e\u0434\u0438\u043d\u0438"},overXYears:{one:"\u043f\u043e\u0432\u0435\u045c\u0435 \u043e\u0434 1 \u0433\u043e\u0434\u0438\u043d\u0430",other:"\u043f\u043e\u0432\u0435\u045c\u0435 \u043e\u0434 {{count}} \u0433\u043e\u0434\u0438\u043d\u0438"},almostXYears:{one:"\u0431\u0435\u0437\u043c\u0430\u043b\u043a\u0443 1 \u0433\u043e\u0434\u0438\u043d\u0430",other:"\u0431\u0435\u0437\u043c\u0430\u043b\u043a\u0443 {{count}} \u0433\u043e\u0434\u0438\u043d\u0438"}};var r=a(110),i={date:Object(r.a)({formats:{full:"EEEE, dd MMMM yyyy",long:"dd MMMM yyyy",medium:"dd MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:Object(r.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:Object(r.a)({formats:{any:"{{date}} {{time}}"},defaultWidth:"any"})},o=a(231),s=["\u043d\u0435\u0434\u0435\u043b\u0430","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a","\u043f\u0435\u0442\u043e\u043a","\u0441\u0430\u0431\u043e\u0442\u0430"];function d(e){var t=s[e];switch(e){case 0:case 3:case 6:return"'\u043e\u0432\u0430 "+t+" \u0432o' p";case 1:case 2:case 4:case 5:return"'\u043e\u0432\u043e\u0458 "+t+" \u0432o' p"}}var u={lastWeek:function(e,t,a){var n=e.getUTCDay();return Object(o.a)(e,t,a)?d(n):function(e){var t=s[e];switch(e){case 0:case 3:case 6:return"'\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430 "+t+" \u0432\u043e' p";case 1:case 2:case 4:case 5:return"'\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442 "+t+" \u0432\u043e' p"}}(n)},yesterday:"'\u0432\u0447\u0435\u0440\u0430 \u0432\u043e' p",today:"'\u0434\u0435\u043d\u0435\u0441 \u0432\u043e' p",tomorrow:"'\u0443\u0442\u0440\u0435 \u0432\u043e' p",nextWeek:function(e,t,a){var n=e.getUTCDay();return Object(o.a)(e,t,a)?d(n):function(e){var t=s[e];switch(e){case 0:case 3:case 6:return"'\u0441\u043b\u0435\u0434\u043d\u0430\u0442\u0430 "+t+" \u0432o' p";case 1:case 2:case 4:case 5:return"'\u0441\u043b\u0435\u0434\u043d\u0438\u043e\u0442 "+t+" \u0432o' p"}}(n)},other:"P"};var c=a(82);var h={ordinalNumber:function(e){var t=Number(e),a=t%100;if(a>20||a<10)switch(a%10){case 1:return t+"-\u0432\u0438";case 2:return t+"-\u0440\u0438";case 7:case 8:return t+"-\u043c\u0438"}return t+"-\u0442\u0438"},era:Object(c.a)({values:{narrow:["\u043f\u0440.\u043d.\u0435.","\u043d.\u0435."],abbreviated:["\u043f\u0440\u0435\u0434 \u043d. \u0435.","\u043d. \u0435."],wide:["\u043f\u0440\u0435\u0434 \u043d\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430","\u043d\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430"]},defaultWidth:"wide"}),quarter:Object(c.a)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u0432\u0438 \u043a\u0432.","2-\u0440\u0438 \u043a\u0432.","3-\u0442\u0438 \u043a\u0432.","4-\u0442\u0438 \u043a\u0432."],wide:["1-\u0432\u0438 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2-\u0440\u0438 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3-\u0442\u0438 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4-\u0442\u0438 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(c.a)({values:{abbreviated:["\u0458\u0430\u043d","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0458","\u0458\u0443\u043d","\u0458\u0443\u043b","\u0430\u0432\u0433","\u0441\u0435\u043f\u0442","\u043e\u043a\u0442","\u043d\u043e\u0435\u043c","\u0434\u0435\u043a"],wide:["\u0458\u0430\u043d\u0443\u0430\u0440\u0438","\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0438\u043b","\u043c\u0430\u0458","\u0458\u0443\u043d\u0438","\u0458\u0443\u043b\u0438","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438","\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438","\u043d\u043e\u0435\u043c\u0432\u0440\u0438","\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438"]},defaultWidth:"wide"}),day:Object(c.a)({values:{narrow:["\u041d","\u041f","\u0412","\u0421","\u0427","\u041f","\u0421"],short:["\u043d\u0435","\u043f\u043e","\u0432\u0442","\u0441\u0440","\u0447\u0435","\u043f\u0435","\u0441\u0430"],abbreviated:["\u043d\u0435\u0434","\u043f\u043e\u043d","\u0432\u0442\u043e","\u0441\u0440\u0435","\u0447\u0435\u0442","\u043f\u0435\u0442","\u0441\u0430\u0431"],wide:["\u043d\u0435\u0434\u0435\u043b\u0430","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a","\u043f\u0435\u0442\u043e\u043a","\u0441\u0430\u0431\u043e\u0442\u0430"]},defaultWidth:"wide"}),dayPeriod:Object(c.a)({values:{wide:{am:"\u043f\u0440\u0435\u0442\u043f\u043b\u0430\u0434\u043d\u0435",pm:"\u043f\u043e\u043f\u043b\u0430\u0434\u043d\u0435",midnight:"\u043f\u043e\u043b\u043d\u043e\u045c",noon:"\u043d\u0430\u043f\u043b\u0430\u0434\u043d\u0435",morning:"\u043d\u0430\u0443\u0442\u0440\u043e",afternoon:"\u043f\u043e\u043f\u043b\u0430\u0434\u043d\u0435",evening:"\u043d\u0430\u0432\u0435\u0447\u0435\u0440",night:"\u043d\u043e\u045c\u0435"}},defaultWidth:"wide"})},l=a(83),f=a(180),m={code:"mk",formatDistance:function(e,t,a){var r;return a=a||{},r="string"===typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"\u0437\u0430 "+r:"\u043f\u0440\u0435\u0434 "+r:r},formatLong:i,formatRelative:function(e,t,a,n){var r=u[e];return"function"===typeof r?r(t,a,n):r},localize:h,match:{ordinalNumber:Object(f.a)({matchPattern:/^(\d+)(-?[\u0432\u0440\u043c\u0442][\u0438])?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(l.a)({matchPatterns:{narrow:/^((\u043f\u0440)?\u043d\.?\s?\u0435\.?)/i,abbreviated:/^((\u043f\u0440)?\u043d\.?\s?\u0435\.?)/i,wide:/^(\u043f\u0440\u0435\u0434 \u043d\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430|\u043d\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u043f/i,/^\u043d/i]},defaultParseWidth:"any"}),quarter:Object(l.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[\u0432\u0440\u0442]?\u0438?)? \u043a\u0432.?/i,wide:/^[1234](-?[\u0432\u0440\u0442]?\u0438?)? \u043a\u0432\u0430\u0440\u0442\u0430\u043b/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(l.a)({matchPatterns:{abbreviated:/^(\u0458\u0430\u043d|\u0444\u0435\u0432|\u043c\u0430\u0440|\u0430\u043f\u0440|\u043c\u0430\u0458|\u0458\u0443\u043d|\u0458\u0443\u043b|\u0430\u0432\u0433|\u0441\u0435\u043f|\u043e\u043a\u0442|\u043d\u043e\u0435\u043c|\u0434\u0435\u043a)/i,wide:/^(\u0458\u0430\u043d\u0443\u0430\u0440\u0438|\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438|\u043c\u0430\u0440\u0442|\u0430\u043f\u0440\u0438\u043b|\u043c\u0430\u0458|\u0458\u0443\u043d\u0438|\u0458\u0443\u043b\u0438|\u0430\u0432\u0433\u0443\u0441\u0442|\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438|\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438|\u043d\u043e\u0435\u043c\u0432\u0440\u0438|\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0458\u0430/i,/^\u0424/i,/^\u043c\u0430\u0440/i,/^\u0430\u043f/i,/^\u043c\u0430\u0458/i,/^\u0458\u0443\u043d/i,/^\u0458\u0443\u043b/i,/^\u0430\u0432/i,/^\u0441\u0435/i,/^\u043e\u043a\u0442/i,/^\u043d\u043e/i,/^\u0434\u0435/i]},defaultParseWidth:"any"}),day:Object(l.a)({matchPatterns:{narrow:/^[\u043d\u043f\u0432\u0441\u0447]/i,short:/^(\u043d\u0435|\u043f\u043e|\u0432\u0442|\u0441\u0440|\u0447\u0435|\u043f\u0435|\u0441\u0430)/i,abbreviated:/^(\u043d\u0435\u0434|\u043f\u043e\u043d|\u0432\u0442\u043e|\u0441\u0440\u0435|\u0447\u0435\u0442|\u043f\u0435\u0442|\u0441\u0430\u0431)/i,wide:/^(\u043d\u0435\u0434\u0435\u043b\u0430|\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a|\u0432\u0442\u043e\u0440\u043d\u0438\u043a|\u0441\u0440\u0435\u0434\u0430|\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a|\u043f\u0435\u0442\u043e\u043a|\u0441\u0430\u0431\u043e\u0442\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u043d/i,/^\u043f/i,/^\u0432/i,/^\u0441/i,/^\u0447/i,/^\u043f/i,/^\u0441/i],any:[/^\u043d[\u0435\u0434]/i,/^\u043f[\u043e\u043d]/i,/^\u0432\u0442/i,/^\u0441\u0440/i,/^\u0447[\u0435\u0442]/i,/^\u043f[\u0435\u0442]/i,/^\u0441[\u0430\u0431]/i]},defaultParseWidth:"any"}),dayPeriod:Object(l.a)({matchPatterns:{any:/^(\u043f\u0440\u0435\u0442\u043f|\u043f\u043e\u043f\u043b|\u043f\u043e\u043b\u043d\u043e\u045c|\u0443\u0442\u0440\u043e|\u043f\u043b\u0430\u0434\u043d\u0435|\u0432\u0435\u0447\u0435\u0440|\u043d\u043e\u045c)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/\u043f\u0440\u0435\u0442\u043f\u043b\u0430\u0434\u043d\u0435/i,pm:/\u043f\u043e\u043f\u043b\u0430\u0434\u043d\u0435/i,midnight:/\u043f\u043e\u043b\u043d\u043e\u045c/i,noon:/\u043d\u0430\u043f\u043b\u0430\u0434\u043d\u0435/i,morning:/\u043d\u0430\u0443\u0442\u0440\u043e/i,afternoon:/\u043f\u043e\u043f\u043b\u0430\u0434\u043d\u0435/i,evening:/\u043d\u0430\u0432\u0435\u0447\u0435\u0440/i,night:/\u043d\u043e\u045c\u0435/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=m}}]);