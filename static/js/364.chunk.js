(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[364,3,49,124,193,226,227,228,229,300],{1699:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},1707:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){(0,a.default)(2,arguments);var u=(0,i.default)(e,n),r=(0,i.default)(t,n);return u.getTime()===r.getTime()};var i=u(n(1713)),a=u(n(1699));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1713:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,u.default)(1,arguments);var n=t||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,l=null==o?0:(0,i.default)(o),s=null==n.weekStartsOn?l:(0,i.default)(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=(0,a.default)(e),c=d.getUTCDay(),f=(c<s?7:0)+c-s;return d.setUTCDate(d.getUTCDate()-f),d.setUTCHours(0,0,0,0),d};var i=r(n(1714)),a=r(n(1715)),u=r(n(1699));function r(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1714:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},1715:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,a.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var i,a=(i=n(1699))&&i.__esModule?i:{default:i};e.exports=t.default},228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var n=t||{},i=n.width?String(n.width):e.defaultWidth;return e.formats[i]||e.formats[e.defaultWidth]}},e.exports=t.default},229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var i,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,r=a.width?String(a.width):u;i=e.formattingValues[r]||e.formattingValues[u]}else{var o=e.defaultWidth,l=a.width?String(a.width):e.defaultWidth;i=e.values[l]||e.values[o]}return i[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var i=String(t),a=n||{},u=a.width,r=u&&e.matchPatterns[u]||e.matchPatterns[e.defaultMatchWidth],o=i.match(r);if(!o)return null;var l,s=o[0],d=u&&e.parsePatterns[u]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(d,(function(e){return e.test(s)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(d,(function(e){return e.test(s)})),l=e.valueCallback?e.valueCallback(l):l,{value:l=a.valueCallback?a.valueCallback(l):l,rest:i.slice(s.length)}}},e.exports=t.default},231:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var i=String(t),a=n||{},u=i.match(e.matchPattern);if(!u)return null;var r=u[0],o=i.match(e.parsePattern);if(!o)return null;var l=e.valueCallback?e.valueCallback(o[0]):o[0];return{value:l=a.valueCallback?a.valueCallback(l):l,rest:i.slice(r.length)}}},e.exports=t.default},422:function(e,t,n){"use strict";function i(e,t){if(void 0!==e.one&&1===t)return e.one;var n=t%10,i=t%100;return 1===n&&11!==i?e.singularNominative.replace("{{count}}",t):n>=2&&n<=4&&(i<10||i>20)?e.singularGenitive.replace("{{count}}",t):e.pluralGenitive.replace("{{count}}",t)}function a(e){return function(t,n){return n.addSuffix?n.comparison>0?e.future?i(e.future,t):i(e.regular,t)+" \u043a\u0435\u0439\u0456\u043d":e.past?i(e.past,t):i(e.regular,t)+" \u0431\u04b1\u0440\u044b\u043d":i(e.regular,t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return n=n||{},u[e](t,n)};var u={lessThanXSeconds:a({regular:{one:"1 \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u0430\u0437",singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u0430\u0437",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u0430\u0437",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u0430\u0437"},future:{one:"\u0431\u0456\u0440 \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),xSeconds:a({regular:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},past:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u0431\u04b1\u0440\u044b\u043d",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u0431\u04b1\u0440\u044b\u043d",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u0431\u04b1\u0440\u044b\u043d"},future:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),halfAMinute:function(e,t){return t.addSuffix?t.comparison>0?"\u0436\u0430\u0440\u0442\u044b \u043c\u0438\u043d\u0443\u0442 \u0456\u0448\u0456\u043d\u0434\u0435":"\u0436\u0430\u0440\u0442\u044b \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d":"\u0436\u0430\u0440\u0442\u044b \u043c\u0438\u043d\u0443\u0442"},lessThanXMinutes:a({regular:{one:"1 \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u0430\u0437",singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u0430\u0437",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u0430\u0437",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u0430\u0437"},future:{one:"\u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u043c ",singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u043c",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u043c",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u043c"}}),xMinutes:a({regular:{singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442"},past:{singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d"},future:{singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),aboutXHours:a({regular:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442"},future:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),xHours:a({regular:{singularNominative:"{{count}} \u0441\u0430\u0493\u0430\u0442",singularGenitive:"{{count}} \u0441\u0430\u0493\u0430\u0442",pluralGenitive:"{{count}} \u0441\u0430\u0493\u0430\u0442"}}),xDays:a({regular:{singularNominative:"{{count}} \u043a\u04af\u043d",singularGenitive:"{{count}} \u043a\u04af\u043d",pluralGenitive:"{{count}} \u043a\u04af\u043d"},future:{singularNominative:"{{count}} \u043a\u04af\u043d\u043d\u0435\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u043a\u04af\u043d\u043d\u0435\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u043a\u04af\u043d\u043d\u0435\u043d \u043a\u0435\u0439\u0456\u043d"}}),aboutXWeeks:{one:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d 1 \u0430\u043f\u0442\u0430",other:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u043f\u0442\u0430"},xWeeks:{one:"1 \u0430\u043f\u0442\u0430",other:"{{count}} \u0430\u043f\u0442\u0430"},aboutXMonths:a({regular:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439"},future:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),xMonths:a({regular:{singularNominative:"{{count}} \u0430\u0439",singularGenitive:"{{count}} \u0430\u0439",pluralGenitive:"{{count}} \u0430\u0439"}}),aboutXYears:a({regular:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b"},future:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),xYears:a({regular:{singularNominative:"{{count}} \u0436\u044b\u043b",singularGenitive:"{{count}} \u0436\u044b\u043b",pluralGenitive:"{{count}} \u0436\u044b\u043b"},future:{singularNominative:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),overXYears:a({regular:{singularNominative:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c",singularGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c",pluralGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c"},future:{singularNominative:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c",singularGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c",pluralGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c"}}),almostXYears:a({regular:{singularNominative:"{{count}} \u0436\u044b\u043b\u0493\u0430 \u0436\u0430\u049b\u044b\u043d",singularGenitive:"{{count}} \u0436\u044b\u043b\u0493\u0430 \u0436\u0430\u049b\u044b\u043d",pluralGenitive:"{{count}} \u0436\u044b\u043b\u0493\u0430 \u0436\u0430\u049b\u044b\u043d"},future:{singularNominative:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}})};e.exports=t.default},423:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=(i=n(228))&&i.__esModule?i:{default:i};var u={date:(0,a.default)({formats:{full:"EEEE, do MMMM y '\u0436.'",long:"do MMMM y '\u0436.'",medium:"d MMM y '\u0436.'",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:(0,a.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,a.default)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};t.default=u,e.exports=t.default},424:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,i){var a=o[e];if("function"===typeof a)return a(t,n,i);return a};var i,a=(i=n(1707))&&i.__esModule?i:{default:i};var u=["\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456\u0434\u0435","\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456\u0434\u0435","\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456\u0434\u0435","\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456\u0434\u0435","\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456\u0434\u0435","\u0436\u04b1\u043c\u0430\u0434\u0430","\u0441\u0435\u043d\u0431\u0456\u0434\u0435"];function r(e){return"'"+u[e]+" \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'"}var o={lastWeek:function(e,t,n){var i=e.getUTCDay();return(0,a.default)(e,t,n)?r(i):function(e){return"'\u04e9\u0442\u043a\u0435\u043d "+u[e]+" \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'"}(i)},yesterday:"'\u043a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'",today:"'\u0431\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'",tomorrow:"'\u0435\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'",nextWeek:function(e,t,n){var i=e.getUTCDay();return(0,a.default)(e,t,n)?r(i):function(e){return"'\u043a\u0435\u043b\u0435\u0441\u0456 "+u[e]+" \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'"}(i)},other:"P"};e.exports=t.default},425:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=(i=n(229))&&i.__esModule?i:{default:i};var u={ordinalNumber:function(e,t){return String((t||{}).unit),e+"-\u0448\u0456"},era:(0,a.default)({values:{narrow:["\u0431.\u0437.\u0434.","\u0431.\u0437."],abbreviated:["\u0431.\u0437.\u0434.","\u0431.\u0437."],wide:["\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437\u0493\u0430 \u0434\u0435\u0439\u0456\u043d","\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437"]},defaultWidth:"wide"}),quarter:(0,a.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u0448\u0456 \u0442\u043e\u049b.","2-\u0448\u0456 \u0442\u043e\u049b.","3-\u0448\u0456 \u0442\u043e\u049b.","4-\u0448\u0456 \u0442\u043e\u049b."],wide:["1-\u0448\u0456 \u0442\u043e\u049b\u0441\u0430\u043d","2-\u0448\u0456 \u0442\u043e\u049b\u0441\u0430\u043d","3-\u0448\u0456 \u0442\u043e\u049b\u0441\u0430\u043d","4-\u0448\u0456 \u0442\u043e\u049b\u0441\u0430\u043d"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:{narrow:["\u049a","\u0410","\u041d","\u0421","\u041c","\u041c","\u0428","\u0422","\u049a","\u049a","\u049a","\u0416"],abbreviated:["\u049b\u0430\u04a3","\u0430\u049b\u043f","\u043d\u0430\u0443","\u0441\u04d9\u0443","\u043c\u0430\u043c","\u043c\u0430\u0443","\u0448\u0456\u043b","\u0442\u0430\u043c","\u049b\u044b\u0440","\u049b\u0430\u0437","\u049b\u0430\u0440","\u0436\u0435\u043b"],wide:["\u049b\u0430\u04a3\u0442\u0430\u0440","\u0430\u049b\u043f\u0430\u043d","\u043d\u0430\u0443\u0440\u044b\u0437","\u0441\u04d9\u0443\u0456\u0440","\u043c\u0430\u043c\u044b\u0440","\u043c\u0430\u0443\u0441\u044b\u043c","\u0448\u0456\u043b\u0434\u0435","\u0442\u0430\u043c\u044b\u0437","\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a","\u049b\u0430\u0437\u0430\u043d","\u049b\u0430\u0440\u0430\u0448\u0430","\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d"]},defaultWidth:"wide",formattingValues:{narrow:["\u049a","\u0410","\u041d","\u0421","\u041c","\u041c","\u0428","\u0422","\u049a","\u049a","\u049a","\u0416"],abbreviated:["\u049b\u0430\u04a3","\u0430\u049b\u043f","\u043d\u0430\u0443","\u0441\u04d9\u0443","\u043c\u0430\u043c","\u043c\u0430\u0443","\u0448\u0456\u043b","\u0442\u0430\u043c","\u049b\u044b\u0440","\u049b\u0430\u0437","\u049b\u0430\u0440","\u0436\u0435\u043b"],wide:["\u049b\u0430\u04a3\u0442\u0430\u0440","\u0430\u049b\u043f\u0430\u043d","\u043d\u0430\u0443\u0440\u044b\u0437","\u0441\u04d9\u0443\u0456\u0440","\u043c\u0430\u043c\u044b\u0440","\u043c\u0430\u0443\u0441\u044b\u043c","\u0448\u0456\u043b\u0434\u0435","\u0442\u0430\u043c\u044b\u0437","\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a","\u049b\u0430\u0437\u0430\u043d","\u049b\u0430\u0440\u0430\u0448\u0430","\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d"]},defaultFormattingWidth:"wide"}),day:(0,a.default)({values:{narrow:["\u0416","\u0414","\u0421","\u0421","\u0411","\u0416","\u0421"],short:["\u0436\u0441","\u0434\u0441","\u0441\u0441","\u0441\u0440","\u0431\u0441","\u0436\u043c","\u0441\u0431"],abbreviated:["\u0436\u0441","\u0434\u0441","\u0441\u0441","\u0441\u0440","\u0431\u0441","\u0436\u043c","\u0441\u0431"],wide:["\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456","\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456","\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456","\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456","\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456","\u0436\u04b1\u043c\u0430","\u0441\u0435\u043d\u0431\u0456"]},defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:{narrow:{am:"\u0422\u0414",pm:"\u0422\u041a",midnight:"\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b",noon:"\u0442\u04af\u0441",morning:"\u0442\u0430\u04a3",afternoon:"\u043a\u04af\u043d\u0434\u0456\u0437",evening:"\u043a\u0435\u0448",night:"\u0442\u04af\u043d"},wide:{am:"\u0422\u0414",pm:"\u0422\u041a",midnight:"\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b",noon:"\u0442\u04af\u0441",morning:"\u0442\u0430\u04a3",afternoon:"\u043a\u04af\u043d\u0434\u0456\u0437",evening:"\u043a\u0435\u0448",night:"\u0442\u04af\u043d"}},defaultWidth:"any",formattingValues:{narrow:{am:"\u0422\u0414",pm:"\u0422\u041a",midnight:"\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430",noon:"\u0442\u04af\u0441",morning:"\u0442\u0430\u04a3",afternoon:"\u043a\u04af\u043d",evening:"\u043a\u0435\u0448",night:"\u0442\u04af\u043d"},wide:{am:"\u0422\u0414",pm:"\u0422\u041a",midnight:"\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430",noon:"\u0442\u04af\u0441\u0442\u0435",morning:"\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3",afternoon:"\u043a\u04af\u043d\u0434\u0456\u0437",evening:"\u043a\u0435\u0448\u0442\u0435",night:"\u0442\u04af\u043d\u0434\u0435"}},defaultFormattingWidth:"wide"})};t.default=u,e.exports=t.default},426:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(n(231)),a=u(n(230));function u(e){return e&&e.__esModule?e:{default:e}}var r={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)(-?(\u0448\u0456|\u0448\u044b))?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,a.default)({matchPatterns:{narrow:/^((\u0431 )?\u0437\.?\s?\u0434\.?)/i,abbreviated:/^((\u0431 )?\u0437\.?\s?\u0434\.?)/i,wide:/^(\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437\u0493\u0430 \u0434\u0435\u0439\u0456\u043d|\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437|\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437\u0434\u0430\u043d)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0431/i,/^\u0437/i]},defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?\u0448\u0456)? \u0442\u043e\u049b.?/i,wide:/^[1234](-?\u0448\u0456)? \u0442\u043e\u049b\u0441\u0430\u043d/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,a.default)({matchPatterns:{narrow:/^(\u049b|\u0430|\u043d|\u0441|\u043c|\u043c\u0430\u0443|\u0448|\u0442|\u049b\u044b\u0440|\u049b\u0430\u0437|\u049b\u0430\u0440|\u0436)/i,abbreviated:/^(\u049b\u0430\u04a3|\u0430\u049b\u043f|\u043d\u0430\u0443|\u0441\u04d9\u0443|\u043c\u0430\u043c|\u043c\u0430\u0443|\u0448\u0456\u043b|\u0442\u0430\u043c|\u049b\u044b\u0440|\u049b\u0430\u0437|\u049b\u0430\u0440|\u0436\u0435\u043b)/i,wide:/^(\u049b\u0430\u04a3\u0442\u0430\u0440|\u0430\u049b\u043f\u0430\u043d|\u043d\u0430\u0443\u0440\u044b\u0437|\u0441\u04d9\u0443\u0456\u0440|\u043c\u0430\u043c\u044b\u0440|\u043c\u0430\u0443\u0441\u044b\u043c|\u0448\u0456\u043b\u0434\u0435|\u0442\u0430\u043c\u044b\u0437|\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a|\u049b\u0430\u0437\u0430\u043d|\u049b\u0430\u0440\u0430\u0448\u0430|\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u049b/i,/^\u0430/i,/^\u043d/i,/^\u0441/i,/^\u043c/i,/^\u043c/i,/^\u0448/i,/^\u0442/i,/^\u049b/i,/^\u049b/i,/^\u049b/i,/^\u0436/i],abbreviated:[/^\u049b\u0430\u04a3/i,/^\u0430\u049b\u043f/i,/^\u043d\u0430\u0443/i,/^\u0441\u04d9\u0443/i,/^\u043c\u0430\u043c/i,/^\u043c\u0430\u0443/i,/^\u0448\u0456\u043b/i,/^\u0442\u0430\u043c/i,/^\u049b\u044b\u0440/i,/^\u049b\u0430\u0437/i,/^\u049b\u0430\u0440/i,/^\u0436\u0435\u043b/i],any:[/^\u049b/i,/^\u0430/i,/^\u043d/i,/^\u0441/i,/^\u043c/i,/^\u043c/i,/^\u0448/i,/^\u0442/i,/^\u049b/i,/^\u049b/i,/^\u049b/i,/^\u0436/i]},defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:{narrow:/^(\u0436|\u0434|\u0441|\u0441|\u0431|\u0436|\u0441)/i,short:/^(\u0436\u0441|\u0434\u0441|\u0441\u0441|\u0441\u0440|\u0431\u0441|\u0436\u043c|\u0441\u0431)/i,wide:/^(\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456|\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456|\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456|\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456|\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456|\u0436\u04b1\u043c\u0430|\u0441\u0435\u043d\u0431\u0456)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0436/i,/^\u0434/i,/^\u0441/i,/^\u0441/i,/^\u0431/i,/^\u0436/i,/^\u0441/i],short:[/^\u0436\u0441/i,/^\u0434\u0441/i,/^\u0441\u0441/i,/^\u0441\u0440/i,/^\u0431\u0441/i,/^\u0436\u043c/i,/^\u0441\u0431/i],any:[/^\u0436[\u0435\u043a]/i,/^\u0434[\u04af\u0439]/i,/^\u0441e[\u0439]/i,/^\u0441\u04d9[\u0440]/i,/^\u0431[\u0435\u0439]/i,/^\u0436[\u04b1\u043c]/i,/^\u0441\u0435[\u043d]/i]},defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:{narrow:/^\u0422\.?\s?[\u0414\u041a]\.?|\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430|((\u0442\u04af\u0441\u0442\u0435|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u0434\u0430|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u043c\u0435\u043d|\u0442\u0430\u04a3|\u043a\u04af\u043d\u0434\u0456\u0437|\u043a\u04af\u043d|\u043a\u0435\u0448\u0442\u0435|\u043a\u0435\u0448|\u0442\u04af\u043d\u0434\u0435|\u0442\u04af\u043d)\.?)/i,wide:/^\u0422\.?\s?[\u0414\u041a]\.?|\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430|((\u0442\u04af\u0441\u0442\u0435|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u0434\u0430|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u043c\u0435\u043d|\u0442\u0430\u04a3|\u043a\u04af\u043d\u0434\u0456\u0437|\u043a\u04af\u043d|\u043a\u0435\u0448\u0442\u0435|\u043a\u0435\u0448|\u0442\u04af\u043d\u0434\u0435|\u0442\u04af\u043d)\.?)/i,any:/^\u0422\.?\s?[\u0414\u041a]\.?|\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430|((\u0442\u04af\u0441\u0442\u0435|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u0434\u0430|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u043c\u0435\u043d|\u0442\u0430\u04a3|\u043a\u04af\u043d\u0434\u0456\u0437|\u043a\u04af\u043d|\u043a\u0435\u0448\u0442\u0435|\u043a\u0435\u0448|\u0442\u04af\u043d\u0434\u0435|\u0442\u04af\u043d)\.?)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^\u0422\u0414/i,pm:/^\u0422\u041a/i,midnight:/^\u0442\u04af\u043d \u043e\u0440\u0442\u0430/i,noon:/^\u043a\u04af\u043d\u0434\u0456\u0437/i,morning:/\u0442\u0430\u04a3/i,afternoon:/\u0442\u04af\u0441/i,evening:/\u043a\u0435\u0448/i,night:/\u0442\u04af\u043d/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},909:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(422)),a=l(n(423)),u=l(n(424)),r=l(n(425)),o=l(n(426));function l(e){return e&&e.__esModule?e:{default:e}}var s={code:"kk",formatDistance:i.default,formatLong:a.default,formatRelative:u.default,localize:r.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=s,e.exports=t.default}}]);