(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[576],{1573:function(t,n,e){"use strict";function a(t){return function(n){var e=n||{},a=e.width?String(e.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}e.d(n,"a",(function(){return a}))},1574:function(t,n,e){"use strict";function a(t){return function(n,e){var a,i=e||{};if("formatting"===(i.context?String(i.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,r=i.width?String(i.width):o;a=t.formattingValues[r]||t.formattingValues[o]}else{var u=t.defaultWidth,d=i.width?String(i.width):t.defaultWidth;a=t.values[d]||t.values[u]}return a[t.argumentCallback?t.argumentCallback(n):n]}}e.d(n,"a",(function(){return a}))},1575:function(t,n,e){"use strict";function a(t){return function(n,e){var a=String(n),i=e||{},o=a.match(t.matchPattern);if(!o)return null;var r=o[0],u=a.match(t.parsePattern);if(!u)return null;var d=t.valueCallback?t.valueCallback(u[0]):u[0];return{value:d=i.valueCallback?i.valueCallback(d):d,rest:a.slice(r.length)}}}e.d(n,"a",(function(){return a}))},1576:function(t,n,e){"use strict";function a(t){return function(n,e){var a=String(n),i=e||{},o=i.width,r=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],u=a.match(r);if(!u)return null;var d,s=u[0],l=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(l)?function(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return e}(l,(function(t){return t.test(s)})):function(t,n){for(var e in t)if(t.hasOwnProperty(e)&&n(t[e]))return e}(l,(function(t){return t.test(s)})),d=t.valueCallback?t.valueCallback(d):d,{value:d=i.valueCallback?i.valueCallback(d):d,rest:a.slice(s.length)}}}e.d(n,"a",(function(){return a}))},789:function(t,n,e){"use strict";e.r(n);var a={lessThanXSeconds:{one:{standalone:"\u043c\u0430\u045a\u0435 \u043e\u0434 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0435",withPrepositionAgo:"\u043c\u0430\u045a\u0435 \u043e\u0434 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0435",withPrepositionIn:"\u043c\u0430\u045a\u0435 \u043e\u0434 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0443"},dual:"\u043c\u0430\u045a\u0435 \u043e\u0434 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0435",other:"\u043c\u0430\u045a\u0435 \u043e\u0434 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},xSeconds:{one:{standalone:"1 \u0441\u0435\u043a\u0443\u043d\u0434\u0430",withPrepositionAgo:"1 \u0441\u0435\u043a\u0443\u043d\u0434\u0435",withPrepositionIn:"1 \u0441\u0435\u043a\u0443\u043d\u0434\u0443"},dual:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0435",other:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},halfAMinute:"\u043f\u043e\u043b\u0430 \u043c\u0438\u043d\u0443\u0442\u0435",lessThanXMinutes:{one:{standalone:"\u043c\u0430\u045a\u0435 \u043e\u0434 1 \u043c\u0438\u043d\u0443\u0442\u0435",withPrepositionAgo:"\u043c\u0430\u045a\u0435 \u043e\u0434 1 \u043c\u0438\u043d\u0443\u0442\u0435",withPrepositionIn:"\u043c\u0430\u045a\u0435 \u043e\u0434 1 \u043c\u0438\u043d\u0443\u0442\u0443"},dual:"\u043c\u0430\u045a\u0435 \u043e\u0434 {{count}} \u043c\u0438\u043d\u0443\u0442\u0435",other:"\u043c\u0430\u045a\u0435 \u043e\u0434 {{count}} \u043c\u0438\u043d\u0443\u0442\u0430"},xMinutes:{one:{standalone:"1 \u043c\u0438\u043d\u0443\u0442\u0430",withPrepositionAgo:"1 \u043c\u0438\u043d\u0443\u0442\u0435",withPrepositionIn:"1 \u043c\u0438\u043d\u0443\u0442\u0443"},dual:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0435",other:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0430"},aboutXHours:{one:{standalone:"\u043e\u043a\u043e 1 \u0441\u0430\u0442",withPrepositionAgo:"\u043e\u043a\u043e 1 \u0441\u0430\u0442",withPrepositionIn:"\u043e\u043a\u043e 1 \u0441\u0430\u0442"},dual:"\u043e\u043a\u043e {{count}} \u0441\u0430\u0442\u0430",other:"\u043e\u043a\u043e {{count}} \u0441\u0430\u0442\u0438"},xHours:{one:{standalone:"1 \u0441\u0430\u0442",withPrepositionAgo:"1 \u0441\u0430\u0442",withPrepositionIn:"1 \u0441\u0430\u0442"},dual:"{{count}} \u0441\u0430\u0442\u0430",other:"{{count}} \u0441\u0430\u0442\u0438"},xDays:{one:{standalone:"1 \u0434\u0430\u043d",withPrepositionAgo:"1 \u0434\u0430\u043d",withPrepositionIn:"1 \u0434\u0430\u043d"},dual:"{{count}} \u0434\u0430\u043d\u0430",other:"{{count}} \u0434\u0430\u043d\u0430"},aboutXWeeks:{one:{standalone:"\u043e\u043a\u043e 1 \u043d\u0435\u0434\u0435\u0459\u0443",withPrepositionAgo:"\u043e\u043a\u043e 1 \u043d\u0435\u0434\u0435\u0459\u0443",withPrepositionIn:"\u043e\u043a\u043e 1 \u043d\u0435\u0434\u0435\u0459\u0443"},dual:"\u043e\u043a\u043e {{count}} \u043d\u0435\u0434\u0435\u0459\u0435",other:"\u043e\u043a\u043e {{count}} \u043d\u0435\u0434\u0435\u0459\u0435"},xWeeks:{one:{standalone:"1 \u043d\u0435\u0434\u0435\u0459\u0443",withPrepositionAgo:"1 \u043d\u0435\u0434\u0435\u0459\u0443",withPrepositionIn:"1 \u043d\u0435\u0434\u0435\u0459\u0443"},dual:"{{count}} \u043d\u0435\u0434\u0435\u0459\u0435",other:"{{count}} \u043d\u0435\u0434\u0435\u0459\u0435"},aboutXMonths:{one:{standalone:"\u043e\u043a\u043e 1 \u043c\u0435\u0441\u0435\u0446",withPrepositionAgo:"\u043e\u043a\u043e 1 \u043c\u0435\u0441\u0435\u0446",withPrepositionIn:"\u043e\u043a\u043e 1 \u043c\u0435\u0441\u0435\u0446"},dual:"\u043e\u043a\u043e {{count}} \u043c\u0435\u0441\u0435\u0446\u0430",other:"\u043e\u043a\u043e {{count}} \u043c\u0435\u0441\u0435\u0446\u0438"},xMonths:{one:{standalone:"1 \u043c\u0435\u0441\u0435\u0446",withPrepositionAgo:"1 \u043c\u0435\u0441\u0435\u0446",withPrepositionIn:"1 \u043c\u0435\u0441\u0435\u0446"},dual:"{{count}} \u043c\u0435\u0441\u0435\u0446\u0430",other:"{{count}} \u043c\u0435\u0441\u0435\u0446\u0438"},aboutXYears:{one:{standalone:"\u043e\u043a\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443",withPrepositionAgo:"\u043e\u043a\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443",withPrepositionIn:"\u043e\u043a\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443"},dual:"\u043e\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0435",other:"\u043e\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0430"},xYears:{one:{standalone:"1 \u0433\u043e\u0434\u0438\u043d\u0430",withPrepositionAgo:"1 \u0433\u043e\u0434\u0438\u043d\u0435",withPrepositionIn:"1 \u0433\u043e\u0434\u0438\u043d\u0443"},dual:"{{count}} \u0433\u043e\u0434\u0438\u043d\u0435",other:"{{count}} \u0433\u043e\u0434\u0438\u043d\u0430"},overXYears:{one:{standalone:"\u043f\u0440\u0435\u043a\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443",withPrepositionAgo:"\u043f\u0440\u0435\u043a\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443",withPrepositionIn:"\u043f\u0440\u0435\u043a\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443"},dual:"\u043f\u0440\u0435\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0435",other:"\u043f\u0440\u0435\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0430"},almostXYears:{one:{standalone:"\u0433\u043e\u0442\u043e\u0432\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443",withPrepositionAgo:"\u0433\u043e\u0442\u043e\u0432\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443",withPrepositionIn:"\u0433\u043e\u0442\u043e\u0432\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443"},dual:"\u0433\u043e\u0442\u043e\u0432\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0435",other:"\u0433\u043e\u0442\u043e\u0432\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0430"}};var i=e(1573),o={date:Object(i.a)({formats:{full:"EEEE, d. MMMM yyyy.",long:"d. MMMM yyyy.",medium:"d. MMM yy.",short:"dd. MM. yy."},defaultWidth:"full"}),time:Object(i.a)({formats:{full:"HH:mm:ss (zzzz)",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(i.a)({formats:{full:"{{date}} '\u0443' {{time}}",long:"{{date}} '\u0443' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},r={lastWeek:function(t){switch(t.getUTCDay()){case 0:return"'\u043f\u0440\u043e\u0448\u043b\u0435 \u043d\u0435\u0434\u0435\u0459\u0435 \u0443' p";case 3:return"'\u043f\u0440\u043e\u0448\u043b\u0435 \u0441\u0440\u0435\u0434\u0435 \u0443' p";case 6:return"'\u043f\u0440\u043e\u0448\u043b\u0435 \u0441\u0443\u0431\u043e\u0442\u0435 \u0443' p";default:return"'\u043f\u0440\u043e\u0448\u043b\u0438' EEEE '\u0443' p"}},yesterday:"'\u0458\u0443\u0447\u0435 \u0443' p",today:"'\u0434\u0430\u043d\u0430\u0441 \u0443' p",tomorrow:"'\u0441\u0443\u0442\u0440\u0430 \u0443' p",nextWeek:function(t){switch(t.getUTCDay()){case 0:return"'\u0441\u043b\u0435\u0434\u0435\u045b\u0435 \u043d\u0435\u0434\u0435\u0459\u0435 \u0443' p";case 3:return"'\u0441\u043b\u0435\u0434\u0435\u045b\u0443 \u0441\u0440\u0435\u0434\u0443 \u0443' p";case 6:return"'\u0441\u043b\u0435\u0434\u0435\u045b\u0443 \u0441\u0443\u0431\u043e\u0442\u0443 \u0443' p";default:return"'\u0441\u043b\u0435\u0434\u0435\u045b\u0438' EEEE '\u0443' p"}},other:"P"};var u=e(1574);var d={ordinalNumber:function(t){var n=Number(t);return String(n).concat(".")},era:Object(u.a)({values:{narrow:["\u043f\u0440.\u043d.\u0435.","\u0410\u0414"],abbreviated:["\u043f\u0440. \u0425\u0440.","\u043f\u043e. \u0425\u0440."],wide:["\u041f\u0440\u0435 \u0425\u0440\u0438\u0441\u0442\u0430","\u041f\u043e\u0441\u043b\u0435 \u0425\u0440\u0438\u0441\u0442\u0430"]},defaultWidth:"wide"}),quarter:Object(u.a)({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. \u043a\u0432.","2. \u043a\u0432.","3. \u043a\u0432.","4. \u043a\u0432."],wide:["1. \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2. \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3. \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4. \u043a\u0432\u0430\u0440\u0442\u0430\u043b"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Object(u.a)({values:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["\u0458\u0430\u043d","\u0444\u0435\u0431","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0458","\u0458\u0443\u043d","\u0458\u0443\u043b","\u0430\u0432\u0433","\u0441\u0435\u043f","\u043e\u043a\u0442","\u043d\u043e\u0432","\u0434\u0435\u0446"],wide:["\u0458\u0430\u043d\u0443\u0430\u0440","\u0444\u0435\u0431\u0440\u0443\u0430\u0440","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0438\u043b","\u043c\u0430\u0458","\u0458\u0443\u043d","\u0458\u0443\u043b","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440","\u043e\u043a\u0442\u043e\u0431\u0430\u0440","\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440","\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440"]},defaultWidth:"wide",formattingValues:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["\u0458\u0430\u043d","\u0444\u0435\u0431","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0458","\u0458\u0443\u043d","\u0458\u0443\u043b","\u0430\u0432\u0433","\u0441\u0435\u043f","\u043e\u043a\u0442","\u043d\u043e\u0432","\u0434\u0435\u0446"],wide:["\u0458\u0430\u043d\u0443\u0430\u0440","\u0444\u0435\u0431\u0440\u0443\u0430\u0440","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0438\u043b","\u043c\u0430\u0458","\u0458\u0443\u043d","\u0458\u0443\u043b","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440","\u043e\u043a\u0442\u043e\u0431\u0430\u0440","\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440","\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440"]},defaultFormattingWidth:"wide"}),day:Object(u.a)({values:{narrow:["\u041d","\u041f","\u0423","\u0421","\u0427","\u041f","\u0421"],short:["\u043d\u0435\u0434","\u043f\u043e\u043d","\u0443\u0442\u043e","\u0441\u0440\u0435","\u0447\u0435\u0442","\u043f\u0435\u0442","\u0441\u0443\u0431"],abbreviated:["\u043d\u0435\u0434","\u043f\u043e\u043d","\u0443\u0442\u043e","\u0441\u0440\u0435","\u0447\u0435\u0442","\u043f\u0435\u0442","\u0441\u0443\u0431"],wide:["\u043d\u0435\u0434\u0435\u0459\u0430","\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a","\u0443\u0442\u043e\u0440\u0430\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a","\u043f\u0435\u0442\u0430\u043a","\u0441\u0443\u0431\u043e\u0442\u0430"]},defaultWidth:"wide"}),dayPeriod:Object(u.a)({values:{narrow:{am:"AM",pm:"PM",midnight:"\u043f\u043e\u043d\u043e\u045b",noon:"\u043f\u043e\u0434\u043d\u0435",morning:"\u0443\u0458\u0443\u0442\u0440\u0443",afternoon:"\u043f\u043e\u043f\u043e\u0434\u043d\u0435",evening:"\u0443\u0432\u0435\u0447\u0435",night:"\u043d\u043e\u045b\u0443"},abbreviated:{am:"AM",pm:"PM",midnight:"\u043f\u043e\u043d\u043e\u045b",noon:"\u043f\u043e\u0434\u043d\u0435",morning:"\u0443\u0458\u0443\u0442\u0440\u0443",afternoon:"\u043f\u043e\u043f\u043e\u0434\u043d\u0435",evening:"\u0443\u0432\u0435\u0447\u0435",night:"\u043d\u043e\u045b\u0443"},wide:{am:"AM",pm:"PM",midnight:"\u043f\u043e\u043d\u043e\u045b",noon:"\u043f\u043e\u0434\u043d\u0435",morning:"\u0443\u0458\u0443\u0442\u0440\u0443",afternoon:"\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u043d\u0435",evening:"\u0443\u0432\u0435\u0447\u0435",night:"\u043d\u043e\u045b\u0443"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u0410\u041c",pm:"\u041f\u041c",midnight:"\u043f\u043e\u043d\u043e\u045b",noon:"\u043f\u043e\u0434\u043d\u0435",morning:"\u0443\u0458\u0443\u0442\u0440\u0443",afternoon:"\u043f\u043e\u043f\u043e\u0434\u043d\u0435",evening:"\u0443\u0432\u0435\u0447\u0435",night:"\u043d\u043e\u045b\u0443"},abbreviated:{am:"\u0410\u041c",pm:"\u041f\u041c",midnight:"\u043f\u043e\u043d\u043e\u045b",noon:"\u043f\u043e\u0434\u043d\u0435",morning:"\u0443\u0458\u0443\u0442\u0440\u0443",afternoon:"\u043f\u043e\u043f\u043e\u0434\u043d\u0435",evening:"\u0443\u0432\u0435\u0447\u0435",night:"\u043d\u043e\u045b\u0443"},wide:{am:"AM",pm:"PM",midnight:"\u043f\u043e\u043d\u043e\u045b",noon:"\u043f\u043e\u0434\u043d\u0435",morning:"\u0443\u0458\u0443\u0442\u0440\u0443",afternoon:"\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u043d\u0435",evening:"\u0443\u0432\u0435\u0447\u0435",night:"\u043d\u043e\u045b\u0443"}},defaultFormattingWidth:"wide"})},s=e(1576),l=e(1575),c={code:"sr",formatDistance:function(t,n,e){var i;return e=e||{},i="string"===typeof a[t]?a[t]:1===n?e.addSuffix?e.comparison>0?a[t].one.withPrepositionIn:a[t].one.withPrepositionAgo:a[t].one.standalone:n%10>1&&n%10<5&&"1"!==String(n).substr(-2,1)?a[t].dual.replace("{{count}}",n):a[t].other.replace("{{count}}",n),e.addSuffix?e.comparison>0?"\u0437\u0430 "+i:"\u043f\u0440\u0435 "+i:i},formatLong:o,formatRelative:function(t,n,e,a){var i=r[t];return"function"===typeof i?i(n):i},localize:d,match:{ordinalNumber:Object(l.a)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:Object(s.a)({matchPatterns:{narrow:/^(\u043f\u0440\.\u043d\.\u0435\.|\u0410\u0414)/i,abbreviated:/^(\u043f\u0440\.\s?\u0425\u0440\.|\u043f\u043e\.\s?\u0425\u0440\.)/i,wide:/^(\u041f\u0440\u0435 \u0425\u0440\u0438\u0441\u0442\u0430|\u043f\u0440\u0435 \u043d\u043e\u0432\u0435 \u0435\u0440\u0435|\u041f\u043e\u0441\u043b\u0435 \u0425\u0440\u0438\u0441\u0442\u0430|\u043d\u043e\u0432\u0430 \u0435\u0440\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u043f\u0440/i,/^(\u043f\u043e|\u043d\u043e\u0432\u0430)/i]},defaultParseWidth:"any"}),quarter:Object(s.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?\u043a\u0432\.?/i,wide:/^[1234]\. \u043a\u0432\u0430\u0440\u0442\u0430\u043b/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Object(s.a)({matchPatterns:{narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(\u0458\u0430\u043d|\u0444\u0435\u0431|\u043c\u0430\u0440|\u0430\u043f\u0440|\u043c\u0430\u0458|\u0458\u0443\u043d|\u0458\u0443\u043b|\u0430\u0432\u0433|\u0441\u0435\u043f|\u043e\u043a\u0442|\u043d\u043e\u0432|\u0434\u0435\u0446)/i,wide:/^((\u0458\u0430\u043d\u0443\u0430\u0440|\u0458\u0430\u043d\u0443\u0430\u0440\u0430)|(\u0444\u0435\u0431\u0440\u0443\u0430\u0440|\u0444\u0435\u0431\u0440\u0443\u0430\u0440\u0430)|(\u043c\u0430\u0440\u0442|\u043c\u0430\u0440\u0442\u0430)|(\u0430\u043f\u0440\u0438\u043b|\u0430\u043f\u0440\u0438\u043b\u0430)|(\u043c\u0458\u0430|\u043c\u0430\u0458\u0430)|(\u0458\u0443\u043d|\u0458\u0443\u043d\u0430)|(\u0458\u0443\u043b|\u0458\u0443\u043b\u0430)|(\u0430\u0432\u0433\u0443\u0441\u0442|\u0430\u0432\u0433\u0443\u0441\u0442\u0430)|(\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440|\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0440\u0430)|(\u043e\u043a\u0442\u043e\u0431\u0430\u0440|\u043e\u043a\u0442\u043e\u0431\u0440\u0430)|(\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440|\u043d\u043e\u0432\u0435\u043c\u0431\u0440\u0430)|(\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440|\u0434\u0435\u0446\u0435\u043c\u0431\u0440\u0430))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/(10|11|12|[123456789])/i],any:[/^\u0458\u0430/i,/^\u0444/i,/^\u043c\u0430\u0440/i,/^\u0430\u043f/i,/^\u043c\u0430\u0458/i,/^\u0458\u0443\u043d/i,/^\u0458\u0443\u043b/i,/^\u0430\u0432\u0433/i,/^\u0441/i,/^\u043e/i,/^\u043d/i,/^\u0434/i]},defaultParseWidth:"any"}),day:Object(s.a)({matchPatterns:{narrow:/^[\u043f\u0443\u0441\u0447\u043d]/i,short:/^(\u043d\u0435\u0434|\u043f\u043e\u043d|\u0443\u0442\u043e|\u0441\u0440\u0435|\u0447\u0435\u0442|\u043f\u0435\u0442|\u0441\u0443\u0431)/i,abbreviated:/^(\u043d\u0435\u0434|\u043f\u043e\u043d|\u0443\u0442\u043e|\u0441\u0440\u0435|\u0447\u0435\u0442|\u043f\u0435\u0442|\u0441\u0443\u0431)/i,wide:/^(\u043d\u0435\u0434\u0435\u0459\u0430|\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a|\u0443\u0442\u043e\u0440\u0430\u043a|\u0441\u0440\u0435\u0434\u0430|\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a|\u043f\u0435\u0442\u0430\u043a|\u0441\u0443\u0431\u043e\u0442\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u043f/i,/^\u0443/i,/^\u0441/i,/^\u0447/i,/^\u043d/i],any:[/^\u043d\u0435\u0434/i,/^\u043f\u043e\u043d/i,/^\u0443\u0442\u043e/i,/^\u0441\u0440\u0435/i,/^\u0447\u0435\u0442/i,/^\u043f\u0435\u0442/i,/^\u0441\u0443\u0431/i]},defaultParseWidth:"any"}),dayPeriod:Object(s.a)({matchPatterns:{any:/^(\u0430\u043c|\u043f\u043c|\u043f\u043e\u043d\u043e\u045b|(\u043f\u043e)?\u043f\u043e\u0434\u043d\u0435|\u0443\u0432\u0435\u0447\u0435|\u043d\u043e\u045b\u0443|\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u043d\u0435|\u0443\u0458\u0443\u0442\u0440\u0443)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^\u043f\u043e\u043d\u043e/i,noon:/^\u043f\u043e\u0434/i,morning:/\u0443\u0458\u0443\u0442\u0440\u0443/i,afternoon:/(\u043f\u043e\u0441\u043b\u0435\s|\u043f\u043e)+\u043f\u043e\u0434\u043d\u0435/i,evening:/(\u0443\u0432\u0435\u0447\u0435)/i,night:/(\u043d\u043e\u045b\u0443)/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};n.default=c}}]);