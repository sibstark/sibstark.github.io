(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[301],{538:function(t,u,e){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(t,u,e){var n;e=e||{},n="string"===typeof o[t]?o[t]:a(1===u?o[t].one:o[t].other,e);return n.replace("{{count}}",u)};var o={lessThanXSeconds:{one:{default:"1 \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd\u200c\u0c97\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6",future:"1 \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd\u200c\u0c97\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6",past:"1 \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd\u200c\u0c97\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6"},other:{default:"{{count}} \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd\u200c\u0c97\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6",future:"{{count}} \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd\u200c\u0c97\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6",past:"{{count}} \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd\u200c\u0c97\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6"}},xSeconds:{one:{default:"1 \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd",future:"1 \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd\u200c\u0ca8\u0cb2\u0ccd\u0cb2\u0cbf",past:"1 \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"{{count}} \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0cc1\u0c97\u0cb3\u0cc1",future:"{{count}} \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd\u200c\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"{{count}} \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},halfAMinute:{other:{default:"\u0c85\u0cb0\u0ccd\u0ca7 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",future:"\u0c85\u0cb0\u0ccd\u0ca7 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0c85\u0cb0\u0ccd\u0ca7 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0ca6 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},lessThanXMinutes:{one:{default:"1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c95\u0ccd\u0c95\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6",future:"1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c95\u0ccd\u0c95\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6",past:"1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c95\u0ccd\u0c95\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6"},other:{default:"{{count}} \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c95\u0ccd\u0c95\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6",future:"{{count}} \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c95\u0ccd\u0c95\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6",past:"{{count}} \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c95\u0ccd\u0c95\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6"}},xMinutes:{one:{default:"1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",future:"1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf",past:"1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0ca6 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"{{count}} \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c97\u0cb3\u0cc1",future:"{{count}} \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"{{count}} \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},aboutXHours:{one:{default:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0c97\u0c82\u0c9f\u0cc6",future:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0c97\u0c82\u0c9f\u0cc6\u0caf\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0c97\u0c82\u0c9f\u0cc6 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0c97\u0c82\u0c9f\u0cc6\u0c97\u0cb3\u0cc1",future:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0c97\u0c82\u0c9f\u0cc6\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0c97\u0c82\u0c9f\u0cc6\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},xHours:{one:{default:"1 \u0c97\u0c82\u0c9f\u0cc6",future:"1 \u0c97\u0c82\u0c9f\u0cc6\u0caf\u0cb2\u0ccd\u0cb2\u0cbf",past:"1 \u0c97\u0c82\u0c9f\u0cc6 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"{{count}} \u0c97\u0c82\u0c9f\u0cc6\u0c97\u0cb3\u0cc1",future:"{{count}} \u0c97\u0c82\u0c9f\u0cc6\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"{{count}} \u0c97\u0c82\u0c9f\u0cc6\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},xDays:{one:{default:"1 \u0ca6\u0cbf\u0ca8",future:"1 \u0ca6\u0cbf\u0ca8\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf",past:"1 \u0ca6\u0cbf\u0ca8\u0ca6 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"{{count}} \u0ca6\u0cbf\u0ca8\u0c97\u0cb3\u0cc1",future:"{{count}} \u0ca6\u0cbf\u0ca8\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"{{count}} \u0ca6\u0cbf\u0ca8\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},aboutXMonths:{one:{default:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",future:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",future:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},xMonths:{one:{default:"1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",future:"1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"{{count}} \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",future:"{{count}} \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"{{count}} \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},aboutXYears:{one:{default:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0cb5\u0cb0\u0ccd\u0cb7",future:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3\u0cc1",future:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},xYears:{one:{default:"1 \u0cb5\u0cb0\u0ccd\u0cb7",future:"1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf",past:"1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"{{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3\u0cc1",future:"{{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"{{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},overXYears:{one:{default:"1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6 \u0cae\u0cc7\u0cb2\u0cc6",future:"1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6 \u0cae\u0cc7\u0cb2\u0cc6",past:"1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6 \u0cae\u0cc7\u0cb2\u0cc6"},other:{default:"{{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3 \u0cae\u0cc7\u0cb2\u0cc6",future:"{{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3 \u0cae\u0cc7\u0cb2\u0cc6",past:"{{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3 \u0cae\u0cc7\u0cb2\u0cc6"}},almostXYears:{one:{default:"\u0cac\u0cb9\u0cc1\u0ca4\u0cc7\u0c95 1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf",future:"\u0cac\u0cb9\u0cc1\u0ca4\u0cc7\u0c95 1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0cac\u0cb9\u0cc1\u0ca4\u0cc7\u0c95 1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf"},other:{default:"\u0cac\u0cb9\u0cc1\u0ca4\u0cc7\u0c95 {{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",future:"\u0cac\u0cb9\u0cc1\u0ca4\u0cc7\u0c95 {{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0cac\u0cb9\u0cc1\u0ca4\u0cc7\u0c95 {{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf"}}};function a(t,u){return u.addSuffix?u.comparison>0?t.future:t.past:t.default}t.exports=u.default}}]);