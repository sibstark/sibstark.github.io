(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[282],{484:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(o,t,e){if(e=e||{},"xDays"===o&&e.addSuffix&&t<=2){return e.comparison>0?{1:"\u05de\u05d7\u05e8",2:"\u05de\u05d7\u05e8\u05ea\u05d9\u05d9\u05dd"}[t]:{1:"\u05d0\u05ea\u05de\u05d5\u05dc",2:"\u05e9\u05dc\u05e9\u05d5\u05dd"}[t]}var u;u="string"===typeof n[o]?n[o]:1===t?n[o].one:2===t?n[o].two:n[o].other.replace("{{count}}",t);if(e.addSuffix)return e.comparison>0?"\u05d1\u05e2\u05d5\u05d3 "+u:"\u05dc\u05e4\u05e0\u05d9 "+u;return u};var n={lessThanXSeconds:{one:"\u05e4\u05d7\u05d5\u05ea \u05de\u05e9\u05e0\u05d9\u05d9\u05d4",two:"\u05e4\u05d7\u05d5\u05ea \u05de\u05e9\u05ea\u05d9 \u05e9\u05e0\u05d9\u05d5\u05ea",other:"\u05e4\u05d7\u05d5\u05ea \u05de\u05be{{count}} \u05e9\u05e0\u05d9\u05d5\u05ea"},xSeconds:{one:"\u05e9\u05e0\u05d9\u05d9\u05d4",two:"\u05e9\u05ea\u05d9 \u05e9\u05e0\u05d9\u05d5\u05ea",other:"{{count}} \u05e9\u05e0\u05d9\u05d5\u05ea"},halfAMinute:"\u05d7\u05e6\u05d9 \u05d3\u05e7\u05d4",lessThanXMinutes:{one:"\u05e4\u05d7\u05d5\u05ea \u05de\u05d3\u05e7\u05d4",two:"\u05e4\u05d7\u05d5\u05ea \u05de\u05e9\u05ea\u05d9 \u05d3\u05e7\u05d5\u05ea",other:"\u05e4\u05d7\u05d5\u05ea \u05de\u05be{{count}} \u05d3\u05e7\u05d5\u05ea"},xMinutes:{one:"\u05d3\u05e7\u05d4",two:"\u05e9\u05ea\u05d9 \u05d3\u05e7\u05d5\u05ea",other:"{{count}} \u05d3\u05e7\u05d5\u05ea"},aboutXHours:{one:"\u05db\u05e9\u05e2\u05d4",two:"\u05db\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd",other:"\u05db\u05be{{count}} \u05e9\u05e2\u05d5\u05ea"},xHours:{one:"\u05e9\u05e2\u05d4",two:"\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd",other:"{{count}} \u05e9\u05e2\u05d5\u05ea"},xDays:{one:"\u05d9\u05d5\u05dd",two:"\u05d9\u05d5\u05de\u05d9\u05d9\u05dd",other:"{{count}} \u05d9\u05de\u05d9\u05dd"},aboutXWeeks:{one:"\u05db\u05e9\u05d1\u05d5\u05e2",two:"\u05db\u05e9\u05d1\u05d5\u05e2\u05d9\u05d9\u05dd",other:"\u05db\u05be{{count}} \u05e9\u05d1\u05d5\u05e2\u05d5\u05ea"},xWeeks:{one:"\u05e9\u05d1\u05d5\u05e2",two:"\u05e9\u05d1\u05d5\u05e2\u05d9\u05d9\u05dd",other:"{{count}} \u05e9\u05d1\u05d5\u05e2\u05d5\u05ea"},aboutXMonths:{one:"\u05db\u05d7\u05d5\u05d3\u05e9",two:"\u05db\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd",other:"\u05db\u05be{{count}} \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"},xMonths:{one:"\u05d7\u05d5\u05d3\u05e9",two:"\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd",other:"{{count}} \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"},aboutXYears:{one:"\u05db\u05e9\u05e0\u05d4",two:"\u05db\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd",other:"\u05db\u05be{{count}} \u05e9\u05e0\u05d9\u05dd"},xYears:{one:"\u05e9\u05e0\u05d4",two:"\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd",other:"{{count}} \u05e9\u05e0\u05d9\u05dd"},overXYears:{one:"\u05d9\u05d5\u05ea\u05e8 \u05de\u05e9\u05e0\u05d4",two:"\u05d9\u05d5\u05ea\u05e8 \u05de\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd",other:"\u05d9\u05d5\u05ea\u05e8 \u05de\u05be{{count}} \u05e9\u05e0\u05d9\u05dd"},almostXYears:{one:"\u05db\u05de\u05e2\u05d8 \u05e9\u05e0\u05d4",two:"\u05db\u05de\u05e2\u05d8 \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd",other:"\u05db\u05de\u05e2\u05d8 {{count}} \u05e9\u05e0\u05d9\u05dd"}};o.exports=t.default}}]);