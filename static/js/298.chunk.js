(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[298],{528:function(t,u,e){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(t,u,e){var o;e=e||{},o="string"===typeof n[t]?n[t]:e.addSuffix&&e.comparison>0?n[t].future.replace("{{count}}",u):e.addSuffix&&e.comparison<=0?n[t].past.replace("{{count}}",u):n[t].present.replace("{{count}}",u);return o};var n={lessThanXSeconds:{past:"{{count}} \u10ec\u10d0\u10db\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8 \u10ee\u10dc\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10d0\u10db\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8",future:"{{count}} \u10ec\u10d0\u10db\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10e8\u10d8"},xSeconds:{past:"{{count}} \u10ec\u10d0\u10db\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10d0\u10db\u10d8",future:"{{count}} \u10ec\u10d0\u10db\u10e8\u10d8"},halfAMinute:{past:"\u10dc\u10d0\u10ee\u10d4\u10d5\u10d0\u10e0\u10d8 \u10ec\u10e3\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10dc\u10d0\u10ee\u10d4\u10d5\u10d0\u10e0\u10d8 \u10ec\u10e3\u10d7\u10d8",future:"\u10dc\u10d0\u10ee\u10d4\u10d5\u10d0\u10e0\u10d8 \u10ec\u10e3\u10d7\u10e8\u10d8"},lessThanXMinutes:{past:"{{count}} \u10ec\u10e3\u10d7\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8 \u10ee\u10dc\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10e3\u10d7\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8",future:"{{count}} \u10ec\u10e3\u10d7\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10e8\u10d8"},xMinutes:{past:"{{count}} \u10ec\u10e3\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10e3\u10d7\u10d8",future:"{{count}} \u10ec\u10e3\u10d7\u10e8\u10d8"},aboutXHours:{past:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10e1\u10d0\u10d0\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10e1\u10d0\u10d0\u10d7\u10d8",future:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10e1\u10d0\u10d0\u10d7\u10e8\u10d8"},xHours:{past:"{{count}} \u10e1\u10d0\u10d0\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10e1\u10d0\u10d0\u10d7\u10d8",future:"{{count}} \u10e1\u10d0\u10d0\u10d7\u10e8\u10d8"},xDays:{past:"{{count}} \u10d3\u10e6\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10d3\u10e6\u10d4",future:"{{count}} \u10d3\u10e6\u10d4\u10e8\u10d8"},aboutXWeeks:{past:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d9\u10d5\u10d8\u10e0\u10d0\u10e1 \u10ec\u10d8\u10dc",present:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d9\u10d5\u10d8\u10e0\u10d0",future:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d9\u10d5\u10d8\u10e0\u10d0\u10e8\u10d8"},xWeeks:{past:"{{count}} \u10d9\u10d5\u10d8\u10e0\u10d0\u10e1 \u10d9\u10d5\u10d8\u10e0\u10d0",present:"{{count}} \u10d9\u10d5\u10d8\u10e0\u10d0",future:"{{count}} \u10d9\u10d5\u10d8\u10e0\u10d0\u10e8\u10d8"},aboutXMonths:{past:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d7\u10d5\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d7\u10d5\u10d4",future:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d7\u10d5\u10d4\u10e8\u10d8"},xMonths:{past:"{{count}} \u10d7\u10d5\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10d7\u10d5\u10d4",future:"{{count}} \u10d7\u10d5\u10d4\u10e8\u10d8"},aboutXYears:{past:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10ec\u10d4\u10da\u10d8",future:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10ec\u10d4\u10da\u10e8\u10d8"},xYears:{past:"{{count}} \u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10d4\u10da\u10d8",future:"{{count}} \u10ec\u10d4\u10da\u10e8\u10d8"},overXYears:{past:"{{count}} \u10ec\u10d4\u10da\u10d6\u10d4 \u10db\u10d4\u10e2\u10d8 \u10ee\u10dc\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10d4\u10da\u10d6\u10d4 \u10db\u10d4\u10e2\u10d8",future:"{{count}} \u10ec\u10d4\u10da\u10d6\u10d4 \u10db\u10d4\u10e2\u10d8 \u10ee\u10dc\u10d8\u10e1 \u10e8\u10d4\u10db\u10d3\u10d4\u10d2"},almostXYears:{past:"\u10d7\u10d8\u10d7\u10e5\u10db\u10d8\u10e1 {{count}} \u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10d7\u10d8\u10d7\u10e5\u10db\u10d8\u10e1 {{count}} \u10ec\u10d4\u10da\u10d8",future:"\u10d7\u10d8\u10d7\u10e5\u10db\u10d8\u10e1 {{count}} \u10ec\u10d4\u10da\u10e8\u10d8"}};t.exports=u.default}}]);