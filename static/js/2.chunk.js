(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[2],{1699:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},1707:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){(0,a.default)(2,arguments);var u=(0,n.default)(e,r),o=(0,n.default)(t,r);return u.getTime()===o.getTime()};var n=u(r(1713)),a=u(r(1699));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1713:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,u.default)(1,arguments);var r=t||{},o=r.locale,l=o&&o.options&&o.options.weekStartsOn,s=null==l?0:(0,n.default)(l),i=null==r.weekStartsOn?s:(0,n.default)(r.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=(0,a.default)(e),d=f.getUTCDay(),c=(d<i?7:0)+d-i;return f.setUTCDate(f.getUTCDate()-c),f.setUTCHours(0,0,0,0),f};var n=o(r(1714)),a=o(r(1715)),u=o(r(1699));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1714:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},1715:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,a.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var n,a=(n=r(1699))&&n.__esModule?n:{default:n};e.exports=t.default},409:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n){var a=l[e];if("function"===typeof a)return a(t,r,n);return a};var n,a=(n=r(1707))&&n.__esModule?n:{default:n};var u=["domenica","luned\xec","marted\xec","mercoled\xec","gioved\xec","venerd\xec","sabato"];function o(e){return"'"+u[e]+" alle' p"}var l={lastWeek:function(e,t,r){var n=e.getUTCDay();return(0,a.default)(e,t,r)?o(n):function(e){switch(e){case 0:return"'domenica scorsa alle' p";default:return"'"+u[e]+" scorso alle' p"}}(n)},yesterday:"'ieri alle' p",today:"'oggi alle' p",tomorrow:"'domani alle' p",nextWeek:function(e,t,r){var n=e.getUTCDay();return(0,a.default)(e,t,r)?o(n):function(e){switch(e){case 0:return"'domenica prossima alle' p";default:return"'"+u[e]+" prossimo alle' p"}}(n)},other:"P"};e.exports=t.default}}]);