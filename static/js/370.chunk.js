(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[370,9,77,152,221,226,227,228,229,350],{1582:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},1596:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){(0,i.default)(2,arguments);var u=(0,a.default)(e,n),r=(0,a.default)(t,n);return u.getTime()===r.getTime()};var a=u(n(1606)),i=u(n(1582));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,u.default)(1,arguments);var n=t||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,l=null==o?0:(0,a.default)(o),s=null==n.weekStartsOn?l:(0,a.default)(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=(0,i.default)(e),c=d.getUTCDay(),f=(c<s?7:0)+c-s;return d.setUTCDate(d.getUTCDate()-f),d.setUTCHours(0,0,0,0),d};var a=r(n(1607)),i=r(n(1608)),u=r(n(1582));function r(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1607:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},1608:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,i.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var a,i=(a=n(1582))&&a.__esModule?a:{default:a};e.exports=t.default},190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,r=i.width?String(i.width):u;a=e.formattingValues[r]||e.formattingValues[u]}else{var o=e.defaultWidth,l=i.width?String(i.width):e.defaultWidth;a=e.values[l]||e.values[o]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a=String(t),i=n||{},u=i.width,r=u&&e.matchPatterns[u]||e.matchPatterns[e.defaultMatchWidth],o=a.match(r);if(!o)return null;var l,s=o[0],d=u&&e.parsePatterns[u]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(d,(function(e){return e.test(s)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(d,(function(e){return e.test(s)})),l=e.valueCallback?e.valueCallback(l):l,{value:l=i.valueCallback?i.valueCallback(l):l,rest:a.slice(s.length)}}},e.exports=t.default},193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a=String(t),i=n||{},u=a.match(e.matchPattern);if(!u)return null;var r=u[0],o=a.match(e.parsePattern);if(!o)return null;var l=e.valueCallback?e.valueCallback(o[0]):o[0];return{value:l=i.valueCallback?i.valueCallback(l):l,rest:a.slice(r.length)}}},e.exports=t.default},523:function(e,t,n){"use strict";function a(e,t){if(void 0!==e.one&&1===t)return e.one;var n=t%10,a=t%100;return 1===n&&11!==a?e.singularNominative.replace("{{count}}",t):n>=2&&n<=4&&(a<10||a>20)?e.singularGenitive.replace("{{count}}",t):e.pluralGenitive.replace("{{count}}",t)}function i(e){return function(t,n){return n.addSuffix?n.comparison>0?e.future?a(e.future,t):"\u0437\u0430 "+a(e.regular,t):e.past?a(e.past,t):a(e.regular,t)+" \u0442\u043e\u043c\u0443":a(e.regular,t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return n=n||{},u[e](t,n)};var u={lessThanXSeconds:i({regular:{one:"\u043c\u0435\u043d\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434\u0438",singularNominative:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438",singularGenitive:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434",pluralGenitive:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},future:{one:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularNominative:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438",pluralGenitive:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),xSeconds:i({regular:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0430",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},past:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0442\u043e\u043c\u0443",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438 \u0442\u043e\u043c\u0443",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u0442\u043e\u043c\u0443"},future:{singularNominative:"\u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438",pluralGenitive:"\u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),halfAMinute:function(e,t){return t.addSuffix?t.comparison>0?"\u0437\u0430 \u043f\u0456\u0432\u0445\u0432\u0438\u043b\u0438\u043d\u0438":"\u043f\u0456\u0432\u0445\u0432\u0438\u043b\u0438\u043d\u0438 \u0442\u043e\u043c\u0443":"\u043f\u0456\u0432\u0445\u0432\u0438\u043b\u0438\u043d\u0438"},lessThanXMinutes:i({regular:{one:"\u043c\u0435\u043d\u0448\u0435 \u0445\u0432\u0438\u043b\u0438\u043d\u0438",singularNominative:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0438",singularGenitive:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d",pluralGenitive:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d"},future:{one:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 \u0445\u0432\u0438\u043b\u0438\u043d\u0443",singularNominative:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0443",singularGenitive:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0438",pluralGenitive:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d"}}),xMinutes:i({regular:{singularNominative:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0430",singularGenitive:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0438",pluralGenitive:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d"},past:{singularNominative:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0443 \u0442\u043e\u043c\u0443",singularGenitive:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0438 \u0442\u043e\u043c\u0443",pluralGenitive:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d \u0442\u043e\u043c\u0443"},future:{singularNominative:"\u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0443",singularGenitive:"\u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0438",pluralGenitive:"\u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d"}}),aboutXHours:i({regular:{singularNominative:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0438",singularGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d",pluralGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0433\u043e\u0434\u0438\u043d\u0443",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0433\u043e\u0434\u0438\u043d\u0438",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0433\u043e\u0434\u0438\u043d"}}),xHours:i({regular:{singularNominative:"{{count}} \u0433\u043e\u0434\u0438\u043d\u0443",singularGenitive:"{{count}} \u0433\u043e\u0434\u0438\u043d\u0438",pluralGenitive:"{{count}} \u0433\u043e\u0434\u0438\u043d"}}),xDays:i({regular:{singularNominative:"{{count}} \u0434\u0435\u043d\u044c",singularGenitive:"{{count}} \u0434\u043d\u044f",pluralGenitive:"{{count}} \u0434\u043d\u0456\u0432"}}),aboutXWeeks:i({regular:{singularNominative:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0442\u0438\u0436\u043d\u044f",singularGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0442\u0438\u0436\u043d\u0456\u0432",pluralGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0442\u0438\u0436\u043d\u0456\u0432"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0442\u0438\u0436\u0434\u0435\u043d\u044c",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0442\u0438\u0436\u043d\u0456",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0442\u0438\u0436\u043d\u0456"}}),xWeeks:i({regular:{singularNominative:"{{count}} \u0442\u0438\u0436\u0434\u0435\u043d\u044c",singularGenitive:"{{count}} \u0442\u0438\u0436\u043d\u044f",pluralGenitive:"{{count}} \u0442\u0438\u0436\u043d\u0456"}}),aboutXMonths:i({regular:{singularNominative:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u043c\u0456\u0441\u044f\u0446\u044f",singularGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u043c\u0456\u0441\u044f\u0446\u0456\u0432",pluralGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u043c\u0456\u0441\u044f\u0446\u0456\u0432"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u043c\u0456\u0441\u044f\u0446\u044c",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u043c\u0456\u0441\u044f\u0446\u044f",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u043c\u0456\u0441\u044f\u0446\u0456\u0432"}}),xMonths:i({regular:{singularNominative:"{{count}} \u043c\u0456\u0441\u044f\u0446\u044c",singularGenitive:"{{count}} \u043c\u0456\u0441\u044f\u0446\u044f",pluralGenitive:"{{count}} \u043c\u0456\u0441\u044f\u0446\u0456\u0432"}}),aboutXYears:i({regular:{singularNominative:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0440\u043e\u043a\u0443",singularGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0440\u043e\u043a\u0456\u0432",pluralGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0440\u043e\u043a\u0456\u0432"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0440\u0456\u043a",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0440\u043e\u043a\u0438",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0440\u043e\u043a\u0456\u0432"}}),xYears:i({regular:{singularNominative:"{{count}} \u0440\u0456\u043a",singularGenitive:"{{count}} \u0440\u043e\u043a\u0438",pluralGenitive:"{{count}} \u0440\u043e\u043a\u0456\u0432"}}),overXYears:i({regular:{singularNominative:"\u0431\u0456\u043b\u044c\u0448\u0435 {{count}} \u0440\u043e\u043a\u0443",singularGenitive:"\u0431\u0456\u043b\u044c\u0448\u0435 {{count}} \u0440\u043e\u043a\u0456\u0432",pluralGenitive:"\u0431\u0456\u043b\u044c\u0448\u0435 {{count}} \u0440\u043e\u043a\u0456\u0432"},future:{singularNominative:"\u0431\u0456\u043b\u044c\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0440\u0456\u043a",singularGenitive:"\u0431\u0456\u043b\u044c\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0440\u043e\u043a\u0438",pluralGenitive:"\u0431\u0456\u043b\u044c\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0440\u043e\u043a\u0456\u0432"}}),almostXYears:i({regular:{singularNominative:"\u043c\u0430\u0439\u0436\u0435 {{count}} \u0440\u0456\u043a",singularGenitive:"\u043c\u0430\u0439\u0436\u0435 {{count}} \u0440\u043e\u043a\u0438",pluralGenitive:"\u043c\u0430\u0439\u0436\u0435 {{count}} \u0440\u043e\u043a\u0456\u0432"},future:{singularNominative:"\u043c\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u0456\u043a",singularGenitive:"\u043c\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043e\u043a\u0438",pluralGenitive:"\u043c\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043e\u043a\u0456\u0432"}})};e.exports=t.default},524:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(190))&&a.__esModule?a:{default:a};var u={date:(0,i.default)({formats:{full:"EEEE, do MMMM y '\u0440.'",long:"do MMMM y '\u0440.'",medium:"d MMM y '\u0440.'",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} '\u043e' {{time}}",long:"{{date}} '\u043e' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=u,e.exports=t.default},525:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,a){var i=o[e];if("function"===typeof i)return i(t,n,a);return i};var a,i=(a=n(1596))&&a.__esModule?a:{default:a};var u=["\u043d\u0435\u0434\u0456\u043b\u044e","\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a","\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a","\u0441\u0435\u0440\u0435\u0434\u0443","\u0447\u0435\u0442\u0432\u0435\u0440","\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e","\u0441\u0443\u0431\u043e\u0442\u0443"];function r(e){return"'\u0443 "+u[e]+" \u043e' p"}var o={lastWeek:function(e,t,n){var a=e.getUTCDay();return(0,i.default)(e,t,n)?r(a):function(e){var t=u[e];switch(e){case 0:case 3:case 5:case 6:return"'\u0443 \u043c\u0438\u043d\u0443\u043b\u0443 "+t+" \u043e' p";case 1:case 2:case 4:return"'\u0443 \u043c\u0438\u043d\u0443\u043b\u0438\u0439 "+t+" \u043e' p"}}(a)},yesterday:"'\u0432\u0447\u043e\u0440\u0430 \u043e' p",today:"'\u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456 \u043e' p",tomorrow:"'\u0437\u0430\u0432\u0442\u0440\u0430 \u043e' p",nextWeek:function(e,t,n){var a=e.getUTCDay();return(0,i.default)(e,t,n)?r(a):function(e){var t=u[e];switch(e){case 0:case 3:case 5:case 6:return"'\u0443 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443 "+t+" \u043e' p";case 1:case 2:case 4:return"'\u0443 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 "+t+" \u043e' p"}}(a)},other:"P"};e.exports=t.default},526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(191))&&a.__esModule?a:{default:a};var u={ordinalNumber:function(e,t){var n=String((t||{}).unit);return e+("date"===n?3===e||23===e?"-\u0454":"-\u0435":"minute"===n||"second"===n||"hour"===n?"-\u0430":"-\u0439")},era:(0,i.default)({values:{narrow:["\u0434\u043e \u043d.\u0435.","\u043d.\u0435."],abbreviated:["\u0434\u043e \u043d. \u0435.","\u043d. \u0435."],wide:["\u0434\u043e \u043d\u0430\u0448\u043e\u0457 \u0435\u0440\u0438","\u043d\u0430\u0448\u043e\u0457 \u0435\u0440\u0438"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u0439 \u043a\u0432.","2-\u0439 \u043a\u0432.","3-\u0439 \u043a\u0432.","4-\u0439 \u043a\u0432."],wide:["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["\u0421","\u041b","\u0411","\u041a","\u0422","\u0427","\u041b","\u0421","\u0412","\u0416","\u041b","\u0413"],abbreviated:["\u0441\u0456\u0447.","\u043b\u044e\u0442.","\u0431\u0435\u0440\u0435\u0437.","\u043a\u0432\u0456\u0442.","\u0442\u0440\u0430\u0432.","\u0447\u0435\u0440\u0432.","\u043b\u0438\u043f.","\u0441\u0435\u0440\u043f.","\u0432\u0435\u0440\u0435\u0441.","\u0436\u043e\u0432\u0442.","\u043b\u0438\u0441\u0442\u043e\u043f.","\u0433\u0440\u0443\u0434."],wide:["\u0441\u0456\u0447\u0435\u043d\u044c","\u043b\u044e\u0442\u0438\u0439","\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c","\u043a\u0432\u0456\u0442\u0435\u043d\u044c","\u0442\u0440\u0430\u0432\u0435\u043d\u044c","\u0447\u0435\u0440\u0432\u0435\u043d\u044c","\u043b\u0438\u043f\u0435\u043d\u044c","\u0441\u0435\u0440\u043f\u0435\u043d\u044c","\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c","\u0436\u043e\u0432\u0442\u0435\u043d\u044c","\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434","\u0433\u0440\u0443\u0434\u0435\u043d\u044c"]},defaultWidth:"wide",formattingValues:{narrow:["\u0421","\u041b","\u0411","\u041a","\u0422","\u0427","\u041b","\u0421","\u0412","\u0416","\u041b","\u0413"],abbreviated:["\u0441\u0456\u0447.","\u043b\u044e\u0442.","\u0431\u0435\u0440\u0435\u0437.","\u043a\u0432\u0456\u0442.","\u0442\u0440\u0430\u0432.","\u0447\u0435\u0440\u0432.","\u043b\u0438\u043f.","\u0441\u0435\u0440\u043f.","\u0432\u0435\u0440\u0435\u0441.","\u0436\u043e\u0432\u0442.","\u043b\u0438\u0441\u0442\u043e\u043f.","\u0433\u0440\u0443\u0434."],wide:["\u0441\u0456\u0447\u043d\u044f","\u043b\u044e\u0442\u043e\u0433\u043e","\u0431\u0435\u0440\u0435\u0437\u043d\u044f","\u043a\u0432\u0456\u0442\u043d\u044f","\u0442\u0440\u0430\u0432\u043d\u044f","\u0447\u0435\u0440\u0432\u043d\u044f","\u043b\u0438\u043f\u043d\u044f","\u0441\u0435\u0440\u043f\u043d\u044f","\u0432\u0435\u0440\u0435\u0441\u043d\u044f","\u0436\u043e\u0432\u0442\u043d\u044f","\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430","\u0433\u0440\u0443\u0434\u043d\u044f"]},defaultFormattingWidth:"wide"}),day:(0,i.default)({values:{narrow:["\u041d","\u041f","\u0412","\u0421","\u0427","\u041f","\u0421"],short:["\u043d\u0434","\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431"],abbreviated:["\u043d\u0435\u0434","\u043f\u043e\u043d","\u0432\u0456\u0432","\u0441\u0435\u0440","\u0447\u0442\u0432","\u043f\u0442\u043d","\u0441\u0443\u0431"],wide:["\u043d\u0435\u0434\u0456\u043b\u044f","\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a","\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a","\u0441\u0435\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440","\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f","\u0441\u0443\u0431\u043e\u0442\u0430"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u0456\u0432\u043d.",noon:"\u043f\u043e\u043b.",morning:"\u0440\u0430\u043d\u043e\u043a",afternoon:"\u0434\u0435\u043d\u044c",evening:"\u0432\u0435\u0447.",night:"\u043d\u0456\u0447"},abbreviated:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u0456\u0432\u043d.",noon:"\u043f\u043e\u043b.",morning:"\u0440\u0430\u043d\u043e\u043a",afternoon:"\u0434\u0435\u043d\u044c",evening:"\u0432\u0435\u0447.",night:"\u043d\u0456\u0447"},wide:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u0456\u0432\u043d\u0456\u0447",noon:"\u043f\u043e\u043b\u0443\u0434\u0435\u043d\u044c",morning:"\u0440\u0430\u043d\u043e\u043a",afternoon:"\u0434\u0435\u043d\u044c",evening:"\u0432\u0435\u0447\u0456\u0440",night:"\u043d\u0456\u0447"}},defaultWidth:"any",formattingValues:{narrow:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u0456\u0432\u043d.",noon:"\u043f\u043e\u043b.",morning:"\u0440\u0430\u043d\u043a\u0443",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u0456"},abbreviated:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u0456\u0432\u043d.",noon:"\u043f\u043e\u043b.",morning:"\u0440\u0430\u043d\u043a\u0443",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u0456"},wide:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u0456\u0432\u043d\u0456\u0447",noon:"\u043f\u043e\u043b\u0443\u0434\u0435\u043d\u044c",morning:"\u0440\u0430\u043d\u043a\u0443",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u0456"}},defaultFormattingWidth:"wide"})};t.default=u,e.exports=t.default},527:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(193)),i=u(n(192));function u(e){return e&&e.__esModule?e:{default:e}}var r={ordinalNumber:(0,a.default)({matchPattern:/^(\d+)(-?(\u0435|\u0439|\u0454|\u0430|\u044f))?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^((\u0434\u043e )?\u043d\.?\s?\u0435\.?)/i,abbreviated:/^((\u0434\u043e )?\u043d\.?\s?\u0435\.?)/i,wide:/^(\u0434\u043e \u043d\u0430\u0448\u043e\u0457 \u0435\u0440\u0438|\u043d\u0430\u0448\u043e\u0457 \u0435\u0440\u0438|\u043d\u0430\u0448\u0430 \u0435\u0440\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0434/i,/^\u043d/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[\u0438\u0456]?\u0439?)? \u043a\u0432.?/i,wide:/^[1234](-?[\u0438\u0456]?\u0439?)? \u043a\u0432\u0430\u0440\u0442\u0430\u043b/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[\u0441\u043b\u0431\u043a\u0442\u0447\u0432\u0436\u0433]/i,abbreviated:/^(\u0441\u0456\u0447|\u043b\u044e\u0442|\u0431\u0435\u0440|\u0431\u0435\u0440\u0435\u0437|\u043a\u0432\u0456|\u0442\u0440\u0430\u0432?|\u0447\u0435\u0440|\u043b\u0438\u043f|\u0441\u0435\u0440|\u0432\u0435\u0440|\u0436\u043e\u0432|\u043b\u0438\u0441(\u0442\u043e\u043f)?|\u0433\u0440\u0443\u0434)\.?/i,wide:/^(\u0441\u0456\u0447\u0435\u043d\u044c|\u0441\u0456\u0447\u043d\u044f|\u043b\u044e\u0442\u0438\u0439|\u043b\u044e\u0442\u043e\u0433\u043e|\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c|\u0431\u0435\u0440\u0435\u0437\u043d\u044f|\u043a\u0432\u0456\u0442\u0435\u043d\u044c|\u043a\u0432\u0456\u0442\u043d\u044f|\u0442\u0440\u0430\u0432\u0435\u043d\u044c|\u0442\u0440\u0430\u0432\u043d\u044f|\u043b\u0438\u043f\u0435\u043d\u044c|\u043b\u0438\u043f\u043d\u044f|\u0441\u0435\u0440\u043f\u0435\u043d\u044c|\u0441\u0435\u0440\u043f\u043d\u044f|\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c|\u0432\u0435\u0440\u0435\u0441\u043d\u044f|\u0436\u043e\u0432\u0442\u0435\u043d\u044c|\u0436\u043e\u0432\u0442\u043d\u044f|\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430?|\u0433\u0440\u0443\u0434\u0435\u043d\u044c|\u0433\u0440\u0443\u0434\u043d\u044f)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0441/i,/^\u043b/i,/^\u0431/i,/^\u043a/i,/^\u0442/i,/^\u0447/i,/^\u043b/i,/^\u0441/i,/^\u0432/i,/^\u0436/i,/^\u043b/i,/^\u0433/i],any:[/^\u0441\u0456/i,/^\u043b\u044e/i,/^\u0431/i,/^\u043a/i,/^\u0442/i,/^\u0447/i,/^\u043b\u0438\u043f/i,/^\u0441\u0435/i,/^\u0432/i,/^\u0436/i,/^\u043b\u0438\u0441/i,/^\u0433/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[\u043d\u043f\u0432\u0441\u0447]/i,short:/^(\u043d\u0434|\u043f\u043d|\u0432\u0442|\u0441\u0440|\u0447\u0442|\u043f\u0442|\u0441\u0431)\.?/i,abbreviated:/^(\u043d\u0435\u0434|\u043f\u043e\u043d|\u0432\u0456\u0432|\u0441\u0435\u0440|\u0447\u0435?\u0442\u0432|\u043f\u0442\u043d?|\u0441\u0443\u0431)\.?/i,wide:/^(\u043d\u0435\u0434\u0456\u043b[\u044f\u0456]|\u043f\u043e\u043d\u0435\u0434\u0456\u043b[\u043e\u043a][\u043a\u0430]|\u0432\u0456\u0432\u0442\u043e\u0440[\u043e\u043a][\u043a\u0430]|\u0441\u0435\u0440\u0435\u0434[\u0430\u0438]|\u0447\u0435\u0442\u0432\u0435\u0440(\u0433\u0430)?|\u043f\W*?\u044f\u0442\u043d\u0438\u0446[\u044f\u0456]|\u0441\u0443\u0431\u043e\u0442[\u0430\u0438])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u043d/i,/^\u043f/i,/^\u0432/i,/^\u0441/i,/^\u0447/i,/^\u043f/i,/^\u0441/i],any:[/^\u043d/i,/^\u043f[\u043e\u043d]/i,/^\u0432/i,/^\u0441[\u0435\u0440]/i,/^\u0447/i,/^\u043f\W*?[\u044f\u0442]/i,/^\u0441[\u0443\u0431]/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^([\u0434\u043f]\u043f|\u043f\u0456\u0432\u043d\.?|\u043f\u043e\u043b\.?|\u0440\u0430\u043d\u043e\u043a|\u0440\u0430\u043d\u043a\u0443|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\.?|\u043d\u0456\u0447|\u043d\u043e\u0447\u0456)/i,abbreviated:/^([\u0434\u043f]\u043f|\u043f\u0456\u0432\u043d\.?|\u043f\u043e\u043b\.?|\u0440\u0430\u043d\u043e\u043a|\u0440\u0430\u043d\u043a\u0443|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\.?|\u043d\u0456\u0447|\u043d\u043e\u0447\u0456)/i,wide:/^([\u0434\u043f]\u043f|\u043f\u0456\u0432\u043d\u0456\u0447|\u043f\u043e\u043b\u0443\u0434\u0435\u043d\u044c|\u0440\u0430\u043d\u043e\u043a|\u0440\u0430\u043d\u043a\u0443|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\u0456\u0440|\u0432\u0435\u0447\u043e\u0440\u0430|\u043d\u0456\u0447|\u043d\u043e\u0447\u0456)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^\u0434\u043f/i,pm:/^\u043f\u043f/i,midnight:/^\u043f\u0456\u0432\u043d/i,noon:/^\u043f\u043e\u043b/i,morning:/^\u0440/i,afternoon:/^\u0434[\u0435\u043d]/i,evening:/^\u0432/i,night:/^\u043d/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},879:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(523)),i=l(n(524)),u=l(n(525)),r=l(n(526)),o=l(n(527));function l(e){return e&&e.__esModule?e:{default:e}}var s={code:"uk",formatDistance:a.default,formatLong:i.default,formatRelative:u.default,localize:r.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=s,e.exports=t.default}}]);