(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[6],{1698:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},1706:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){(0,a.default)(2,arguments);var u=(0,r.default)(e,n),o=(0,r.default)(t,n);return u.getTime()===o.getTime()};var r=u(n(1712)),a=u(n(1698));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1712:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,u.default)(1,arguments);var n=t||{},o=n.locale,i=o&&o.options&&o.options.weekStartsOn,s=null==i?0:(0,r.default)(i),f=null==n.weekStartsOn?s:(0,r.default)(n.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=(0,a.default)(e),c=l.getUTCDay(),d=(c<f?7:0)+c-f;return l.setUTCDate(l.getUTCDate()-d),l.setUTCHours(0,0,0,0),l};var r=o(n(1713)),a=o(n(1714)),u=o(n(1698));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1713:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},1714:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,a.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var r,a=(r=n(1698))&&r.__esModule?r:{default:r};e.exports=t.default},489:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){var a=c[e];if("function"===typeof a)return a(e,t,n,r);return a};var r,a=(r=n(1706))&&r.__esModule?r:{default:r};var u={masculine:"ostatni",feminine:"ostatnia"},o={masculine:"ten",feminine:"ta"},i={masculine:"nast\u0119pny",feminine:"nast\u0119pna"},s={0:"feminine",1:"masculine",2:"masculine",3:"feminine",4:"masculine",5:"masculine",6:"feminine"};function f(e,t,n,r){var f=t.getUTCDay();return function(e,t,n,r){if((0,a.default)(t,n,r))return o;if("lastWeek"===e)return u;if("nextWeek"===e)return i;throw new Error("Cannot determine adjectives for token ".concat(e))}(e,t,n,r)[s[f]]}function l(e,t,n,r){var a=f(e,t,n,r);return"'".concat(a,"' eeee 'o' p")}var c={lastWeek:l,yesterday:"'wczoraj o' p",today:"'dzisiaj o' p",tomorrow:"'jutro o' p",nextWeek:l,other:"P"};e.exports=t.default}}]);