(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[361,0,19,87,162,226,227,228,229,240],{1701:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},1709:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){(0,i.default)(2,arguments);var u=(0,a.default)(e,n),r=(0,a.default)(t,n);return u.getTime()===r.getTime()};var a=u(n(1715)),i=u(n(1701));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1715:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,u.default)(1,arguments);var n=t||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,l=null==o?0:(0,a.default)(o),s=null==n.weekStartsOn?l:(0,a.default)(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=(0,i.default)(e),c=d.getUTCDay(),f=(c<s?7:0)+c-s;return d.setUTCDate(d.getUTCDate()-f),d.setUTCHours(0,0,0,0),d};var a=r(n(1716)),i=r(n(1717)),u=r(n(1701));function r(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1716:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},1717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,i.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var a,i=(a=n(1701))&&a.__esModule?a:{default:a};e.exports=t.default},229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,r=i.width?String(i.width):u;a=e.formattingValues[r]||e.formattingValues[u]}else{var o=e.defaultWidth,l=i.width?String(i.width):e.defaultWidth;a=e.values[l]||e.values[o]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},231:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a=String(t),i=n||{},u=i.width,r=u&&e.matchPatterns[u]||e.matchPatterns[e.defaultMatchWidth],o=a.match(r);if(!o)return null;var l,s=o[0],d=u&&e.parsePatterns[u]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(d,(function(e){return e.test(s)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(d,(function(e){return e.test(s)})),l=e.valueCallback?e.valueCallback(l):l,{value:l=i.valueCallback?i.valueCallback(l):l,rest:a.slice(s.length)}}},e.exports=t.default},232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a=String(t),i=n||{},u=a.match(e.matchPattern);if(!u)return null;var r=u[0],o=a.match(e.parsePattern);if(!o)return null;var l=e.valueCallback?e.valueCallback(o[0]):o[0];return{value:l=i.valueCallback?i.valueCallback(l):l,rest:a.slice(r.length)}}},e.exports=t.default},271:function(e,t,n){"use strict";function a(e,t){if(void 0!==e.one&&1===t)return e.one;var n=t%10,a=t%100;return 1===n&&11!==a?e.singularNominative.replace("{{count}}",t):n>=2&&n<=4&&(a<10||a>20)?e.singularGenitive.replace("{{count}}",t):e.pluralGenitive.replace("{{count}}",t)}function i(e){return function(t,n){return n.addSuffix?n.comparison>0?e.future?a(e.future,t):"\u043f\u0440\u0430\u0437 "+a(e.regular,t):e.past?a(e.past,t):a(e.regular,t)+" \u0442\u0430\u043c\u0443":a(e.regular,t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return n=n||{},u[e](t,n)};var u={lessThanXSeconds:i({regular:{one:"\u043c\u0435\u043d\u0448 \u0437\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularNominative:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},future:{one:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularNominative:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),xSeconds:i({regular:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0430",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},past:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0442\u0430\u043c\u0443",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b \u0442\u0430\u043c\u0443",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u0442\u0430\u043c\u0443"},future:{singularNominative:"\u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),halfAMinute:function(e,t){return t.addSuffix?t.comparison>0?"\u043f\u0440\u0430\u0437 \u043f\u0430\u045e\u0445\u0432\u0456\u043b\u0456\u043d\u044b":"\u043f\u0430\u045e\u0445\u0432\u0456\u043b\u0456\u043d\u044b \u0442\u0430\u043c\u0443":"\u043f\u0430\u045e\u0445\u0432\u0456\u043b\u0456\u043d\u044b"},lessThanXMinutes:i({regular:{one:"\u043c\u0435\u043d\u0448 \u0437\u0430 \u0445\u0432\u0456\u043b\u0456\u043d\u0443",singularNominative:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u0443",singularGenitive:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u044b",pluralGenitive:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d"},future:{one:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 \u0445\u0432\u0456\u043b\u0456\u043d\u0443",singularNominative:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u0443",singularGenitive:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u044b",pluralGenitive:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d"}}),xMinutes:i({regular:{singularNominative:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u0430",singularGenitive:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u044b",pluralGenitive:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d"},past:{singularNominative:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u0443 \u0442\u0430\u043c\u0443",singularGenitive:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u044b \u0442\u0430\u043c\u0443",pluralGenitive:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d \u0442\u0430\u043c\u0443"},future:{singularNominative:"\u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u0443",singularGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u044b",pluralGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d"}}),aboutXHours:i({regular:{singularNominative:"\u043a\u0430\u043b\u044f {{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u044b",singularGenitive:"\u043a\u0430\u043b\u044f {{count}} \u0433\u0430\u0434\u0437\u0456\u043d",pluralGenitive:"\u043a\u0430\u043b\u044f {{count}} \u0433\u0430\u0434\u0437\u0456\u043d"},future:{singularNominative:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u0443",singularGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u044b",pluralGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d"}}),xHours:i({regular:{singularNominative:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u0430",singularGenitive:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u044b",pluralGenitive:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d"},past:{singularNominative:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u0443 \u0442\u0430\u043c\u0443",singularGenitive:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u044b \u0442\u0430\u043c\u0443",pluralGenitive:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d \u0442\u0430\u043c\u0443"},future:{singularNominative:"\u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u0443",singularGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u044b",pluralGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d"}}),xDays:i({regular:{singularNominative:"{{count}} \u0434\u0437\u0435\u043d\u044c",singularGenitive:"{{count}} \u0434\u043d\u0456",pluralGenitive:"{{count}} \u0434\u0437\u0451\u043d"}}),aboutXWeeks:i({regular:{singularNominative:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430",singularGenitive:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e",pluralGenitive:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"},future:{singularNominative:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u044b",pluralGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"}}),xWeeks:i({regular:{singularNominative:"{{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u044b",pluralGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"}}),aboutXMonths:i({regular:{singularNominative:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430",singularGenitive:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e",pluralGenitive:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"},future:{singularNominative:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u044b",pluralGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"}}),xMonths:i({regular:{singularNominative:"{{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u044b",pluralGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"}}),aboutXYears:i({regular:{singularNominative:"\u043a\u0430\u043b\u044f {{count}} \u0433\u043e\u0434\u0430",singularGenitive:"\u043a\u0430\u043b\u044f {{count}} \u0433\u0430\u0434\u043e\u045e",pluralGenitive:"\u043a\u0430\u043b\u044f {{count}} \u0433\u0430\u0434\u043e\u045e"},future:{singularNominative:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043e\u045e"}}),xYears:i({regular:{singularNominative:"{{count}} \u0433\u043e\u0434",singularGenitive:"{{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"{{count}} \u0433\u0430\u0434\u043e\u045e"}}),overXYears:i({regular:{singularNominative:"\u0431\u043e\u043b\u044c\u0448 \u0437\u0430 {{count}} \u0433\u043e\u0434",singularGenitive:"\u0431\u043e\u043b\u044c\u0448 \u0437\u0430 {{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"\u0431\u043e\u043b\u044c\u0448 \u0437\u0430 {{count}} \u0433\u0430\u0434\u043e\u045e"},future:{singularNominative:"\u0431\u043e\u043b\u044c\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u0431\u043e\u043b\u044c\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"\u0431\u043e\u043b\u044c\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043e\u045e"}}),almostXYears:i({regular:{singularNominative:"\u0430\u043c\u0430\u043b\u044c {{count}} \u0433\u043e\u0434",singularGenitive:"\u0430\u043c\u0430\u043b\u044c {{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"\u0430\u043c\u0430\u043b\u044c {{count}} \u0433\u0430\u0434\u043e\u045e"},future:{singularNominative:"\u0430\u043c\u0430\u043b\u044c \u043f\u0440\u0430\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u0430\u043c\u0430\u043b\u044c \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"\u0430\u043c\u0430\u043b\u044c \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043e\u045e"}})};e.exports=t.default},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(229))&&a.__esModule?a:{default:a};var u={date:(0,i.default)({formats:{full:"EEEE, d MMMM y '\u0433.'",long:"d MMMM y '\u0433.'",medium:"d MMM y '\u0433.'",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};t.default=u,e.exports=t.default},273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,a){var i=o[e];if("function"===typeof i)return i(t,n,a);return i};var a,i=(a=n(1709))&&a.__esModule?a:{default:a};var u=["\u043d\u044f\u0434\u0437\u0435\u043b\u044e","\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a","\u0430\u045e\u0442\u043e\u0440\u0430\u043a","\u0441\u0435\u0440\u0430\u0434\u0443","\u0447\u0430\u0446\u0432\u0435\u0440","\u043f\u044f\u0442\u043d\u0456\u0446\u0443","\u0441\u0443\u0431\u043e\u0442\u0443"];function r(e){return"'\u0443 "+u[e]+" \u0430' p"}var o={lastWeek:function(e,t,n){var a=e.getUTCDay();return(0,i.default)(e,t,n)?r(a):function(e){var t=u[e];switch(e){case 0:case 3:case 5:case 6:return"'\u0443 \u043c\u0456\u043d\u0443\u043b\u0443\u044e "+t+" \u0430' p";case 1:case 2:case 4:return"'\u0443 \u043c\u0456\u043d\u0443\u043b\u044b "+t+" \u0430' p"}}(a)},yesterday:"'\u0443\u0447\u043e\u0440\u0430 \u0430' p",today:"'\u0441\u0451\u043d\u043d\u044f \u0430' p",tomorrow:"'\u0437\u0430\u045e\u0442\u0440\u0430 \u0430' p",nextWeek:function(e,t,n){var a=e.getUTCDay();return(0,i.default)(e,t,n)?r(a):function(e){var t=u[e];switch(e){case 0:case 3:case 5:case 6:return"'\u0443 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e "+t+" \u0430' p";case 1:case 2:case 4:return"'\u0443 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u044b "+t+" \u0430' p"}}(a)},other:"P"};e.exports=t.default},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(230))&&a.__esModule?a:{default:a};var u={ordinalNumber:function(e,t){var n=String((t||{}).unit),a=Number(e);return a+("date"===n?"-\u0433\u0430":"hour"===n||"minute"===n||"second"===n?"-\u044f":a%10!==2&&a%10!==3||a%100===12||a%100===13?"-\u044b":"-\u0456")},era:(0,i.default)({values:{narrow:["\u0434\u0430 \u043d.\u044d.","\u043d.\u044d."],abbreviated:["\u0434\u0430 \u043d. \u044d.","\u043d. \u044d."],wide:["\u0434\u0430 \u043d\u0430\u0448\u0430\u0439 \u044d\u0440\u044b","\u043d\u0430\u0448\u0430\u0439 \u044d\u0440\u044b"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u044b \u043a\u0432.","2-\u0456 \u043a\u0432.","3-\u0456 \u043a\u0432.","4-\u044b \u043a\u0432."],wide:["1-\u044b \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2-\u0456 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3-\u0456 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4-\u044b \u043a\u0432\u0430\u0440\u0442\u0430\u043b"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["\u0421","\u041b","\u0421","\u041a","\u041c","\u0427","\u041b","\u0416","\u0412","\u041a","\u041b","\u0421"],abbreviated:["\u0441\u0442\u0443\u0434\u0437.","\u043b\u044e\u0442.","\u0441\u0430\u043a.","\u043a\u0440\u0430\u0441.","\u043c\u0430\u0439","\u0447\u044d\u0440\u0432.","\u043b\u0456\u043f.","\u0436\u043d.","\u0432\u0435\u0440.","\u043a\u0430\u0441\u0442\u0440.","\u043b\u0456\u0441\u0442.","\u0441\u043d\u0435\u0436."],wide:["\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c","\u043b\u044e\u0442\u044b","\u0441\u0430\u043a\u0430\u0432\u0456\u043a","\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a","\u043c\u0430\u0439","\u0447\u044d\u0440\u0432\u0435\u043d\u044c","\u043b\u0456\u043f\u0435\u043d\u044c","\u0436\u043d\u0456\u0432\u0435\u043d\u044c","\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c","\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a","\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434","\u0441\u043d\u0435\u0436\u0430\u043d\u044c"]},defaultWidth:"wide",formattingValues:{narrow:["\u0421","\u041b","\u0421","\u041a","\u041c","\u0427","\u041b","\u0416","\u0412","\u041a","\u041b","\u0421"],abbreviated:["\u0441\u0442\u0443\u0434\u0437.","\u043b\u044e\u0442.","\u0441\u0430\u043a.","\u043a\u0440\u0430\u0441.","\u043c\u0430\u044f","\u0447\u044d\u0440\u0432.","\u043b\u0456\u043f.","\u0436\u043d.","\u0432\u0435\u0440.","\u043a\u0430\u0441\u0442\u0440.","\u043b\u0456\u0441\u0442.","\u0441\u043d\u0435\u0436."],wide:["\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f","\u043b\u044e\u0442\u0430\u0433\u0430","\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430","\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430","\u043c\u0430\u044f","\u0447\u044d\u0440\u0432\u0435\u043d\u044f","\u043b\u0456\u043f\u0435\u043d\u044f","\u0436\u043d\u0456\u045e\u043d\u044f","\u0432\u0435\u0440\u0430\u0441\u043d\u044f","\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430","\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430","\u0441\u043d\u0435\u0436\u043d\u044f"]},defaultFormattingWidth:"wide"}),day:(0,i.default)({values:{narrow:["\u041d","\u041f","\u0410","\u0421","\u0427","\u041f","\u0421"],short:["\u043d\u0434","\u043f\u043d","\u0430\u045e","\u0441\u0440","\u0447\u0446","\u043f\u0442","\u0441\u0431"],abbreviated:["\u043d\u044f\u0434\u0437","\u043f\u0430\u043d","\u0430\u045e\u0442","\u0441\u0435\u0440","\u0447\u0430\u0446","\u043f\u044f\u0442","\u0441\u0443\u0431"],wide:["\u043d\u044f\u0434\u0437\u0435\u043b\u044f","\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a","\u0430\u045e\u0442\u043e\u0440\u0430\u043a","\u0441\u0435\u0440\u0430\u0434\u0430","\u0447\u0430\u0446\u0432\u0435\u0440","\u043f\u044f\u0442\u043d\u0456\u0446\u0430","\u0441\u0443\u0431\u043e\u0442\u0430"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u045e\u043d.",noon:"\u043f\u043e\u045e\u0434.",morning:"\u0440\u0430\u043d.",afternoon:"\u0434\u0437\u0435\u043d\u044c",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447"},abbreviated:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u045e\u043d.",noon:"\u043f\u043e\u045e\u0434.",morning:"\u0440\u0430\u043d.",afternoon:"\u0434\u0437\u0435\u043d\u044c",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447"},wide:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u045e\u043d\u0430\u0447",noon:"\u043f\u043e\u045e\u0434\u0437\u0435\u043d\u044c",morning:"\u0440\u0430\u043d\u0456\u0446\u0430",afternoon:"\u0434\u0437\u0435\u043d\u044c",evening:"\u0432\u0435\u0447\u0430\u0440",night:"\u043d\u043e\u0447"}},defaultWidth:"any",formattingValues:{narrow:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u045e\u043d.",noon:"\u043f\u043e\u045e\u0434.",morning:"\u0440\u0430\u043d.",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u044b"},abbreviated:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u045e\u043d.",noon:"\u043f\u043e\u045e\u0434.",morning:"\u0440\u0430\u043d.",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u044b"},wide:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u045e\u043d\u0430\u0447",noon:"\u043f\u043e\u045e\u0434\u0437\u0435\u043d\u044c",morning:"\u0440\u0430\u043d\u0456\u0446\u044b",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447\u0430\u0440\u0430",night:"\u043d\u043e\u0447\u044b"}},defaultFormattingWidth:"wide"})};t.default=u,e.exports=t.default},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(232)),i=u(n(231));function u(e){return e&&e.__esModule?e:{default:e}}var r={ordinalNumber:(0,a.default)({matchPattern:/^(\d+)(-?(\u0435|\u044f|\u0433\u0430|\u0456|\u044b|\u0430\u0435|\u0430\u044f|\u044f\u044f|\u0448\u044b|\u0433\u0456|\u0446\u0456|\u0442\u044b|\u043c\u044b))?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^((\u0434\u0430 )?\u043d\.?\s?\u044d\.?)/i,abbreviated:/^((\u0434\u0430 )?\u043d\.?\s?\u044d\.?)/i,wide:/^(\u0434\u0430 \u043d\u0430\u0448\u0430\u0439 \u044d\u0440\u044b|\u043d\u0430\u0448\u0430\u0439 \u044d\u0440\u044b|\u043d\u0430\u0448\u0430 \u044d\u0440\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0434/i,/^\u043d/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[\u044b\u0456]?)? \u043a\u0432.?/i,wide:/^[1234](-?[\u044b\u0456]?)? \u043a\u0432\u0430\u0440\u0442\u0430\u043b/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[\u0441\u043b\u043a\u043c\u0447\u0436\u0432]/i,abbreviated:/^(\u0441\u0442\u0443\u0434\u0437|\u043b\u044e\u0442|\u0441\u0430\u043a|\u043a\u0440\u0430\u0441|\u043c\u0430[\u0439\u044f]|\u0447\u044d\u0440\u0432|\u043b\u0456\u043f|\u0436\u043d|\u0432\u0435\u0440|\u043a\u0430\u0441\u0442\u0440|\u043b\u0456\u0441\u0442|\u0441\u043d\u0435\u0436)\.?/i,wide:/^(\u0441\u0442\u0443\u0434\u0437\u0435\u043d[\u044c\u044f]|\u043b\u044e\u0442(\u044b|\u0430\u0433\u0430)|\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430?|\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430?|\u043c\u0430[\u0439\u044f]|\u0447\u044d\u0440\u0432\u0435\u043d[\u044c\u044f]|\u043b\u0456\u043f\u0435\u043d[\u044c\u044f]|\u0436\u043d\u0456(\u0432\u0435\u043d\u044c|\u045e\u043d\u044f)|\u0432\u0435\u0440\u0430\u0441(\u0435\u043d\u044c|\u043d\u044f)|\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430?|\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430?|\u0441\u043d\u0435\u0436(\u0430\u043d\u044c|\u043d\u044f))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0441/i,/^\u043b/i,/^\u0441/i,/^\u043a/i,/^\u043c/i,/^\u0447/i,/^\u043b/i,/^\u0436/i,/^\u0432/i,/^\u043a/i,/^\u043b/i,/^\u0441/i],any:[/^\u0441\u0442/i,/^\u043b\u044e/i,/^\u0441\u0430/i,/^\u043a\u0440/i,/^\u043c\u0430/i,/^\u0447/i,/^\u043b\u0456\u043f/i,/^\u0436/i,/^\u0432/i,/^\u043a\u0430/i,/^\u043b\u0456\u0441/i,/^\u0441\u043d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[\u043d\u043f\u0430\u0441\u0447]/i,short:/^(\u043d\u0434|\u043d\u044f|\u043f\u043d|\u043f\u0430|\u0430\u045e|\u0430\u0442|\u0441\u0440|\u0441\u0435|\u0447\u0446|\u0447\u0430|\u043f\u0442|\u043f\u044f|\u0441\u0431|\u0441\u0443)\.?/i,abbreviated:/^(\u043d\u044f\u0434\u0437?|\u043d\u0434\u0437|\u043f\u043d\u0434|\u043f\u0430\u043d|\u0430\u045e\u0442|\u0441\u0440\u0434|\u0441\u0435\u0440|\u0447\u0446\u0432|\u0447\u0430\u0446|\u043f\u0442\u043d|\u043f\u044f\u0442|\u0441\u0443\u0431).?/i,wide:/^(\u043d\u044f\u0434\u0437\u0435\u043b[\u044f\u0456]|\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b(\u0430\u043a|\u043a\u0430)|\u0430\u045e\u0442\u043e\u0440(\u0430\u043a|\u043a\u0430)|\u0441\u0435\u0440\u0430\u0434[\u0430\u044b]|\u0447\u0430\u0446\u0432(\u0435\u0440|\u044f\u0440\u0433\u0430)|\u043f\u044f\u0442\u043d\u0456\u0446[\u0430\u044b]|\u0441\u0443\u0431\u043e\u0442[\u0430\u044b])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u043d/i,/^\u043f/i,/^\u0430/i,/^\u0441/i,/^\u0447/i,/^\u043f/i,/^\u0441/i],any:[/^\u043d/i,/^\u043f[\u0430\u043d]/i,/^\u0430/i,/^\u0441[\u0435\u0440]/i,/^\u0447/i,/^\u043f[\u044f\u0442]/i,/^\u0441[\u0443\u0431]/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^([\u0434\u043f]\u043f|\u043f\u043e\u045e\u043d\.?|\u043f\u043e\u045e\u0434\.?|\u0440\u0430\u043d\.?|\u0434\u0437\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\.?|\u043d\u043e\u0447\u044b?)/i,abbreviated:/^([\u0434\u043f]\u043f|\u043f\u043e\u045e\u043d\.?|\u043f\u043e\u045e\u0434\.?|\u0440\u0430\u043d\.?|\u0434\u0437\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\.?|\u043d\u043e\u0447\u044b?)/i,wide:/^([\u0434\u043f]\u043f|\u043f\u043e\u045e\u043d\u0430\u0447|\u043f\u043e\u045e\u0434\u0437\u0435\u043d\u044c|\u0440\u0430\u043d\u0456\u0446[\u0430\u044b]|\u0434\u0437\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430?|\u043d\u043e\u0447\u044b?)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^\u0434\u043f/i,pm:/^\u043f\u043f/i,midnight:/^\u043f\u043e\u045e\u043d/i,noon:/^\u043f\u043e\u045e\u0434/i,morning:/^\u0440/i,afternoon:/^\u0434[\u0437\u043d]/i,evening:/^\u0432/i,night:/^\u043d/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},876:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(271)),i=l(n(272)),u=l(n(273)),r=l(n(274)),o=l(n(275));function l(e){return e&&e.__esModule?e:{default:e}}var s={code:"be",formatDistance:a.default,formatLong:i.default,formatRelative:u.default,localize:r.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=s,e.exports=t.default}}]);