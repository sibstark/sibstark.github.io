(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[350],{673:function(n,i,u){"use strict";function e(n,i){if(void 0!==n.one&&1===i)return n.one;var u=i%10,e=i%100;return 1===u&&11!==e?n.singularNominative.replace("{{count}}",i):u>=2&&u<=4&&(e<10||e>20)?n.singularGenitive.replace("{{count}}",i):n.pluralGenitive.replace("{{count}}",i)}function t(n){return function(i,u){return u.addSuffix?u.comparison>0?n.future?e(n.future,i):"\u0437\u0430 "+e(n.regular,i):n.past?e(n.past,i):e(n.regular,i)+" \u0442\u043e\u043c\u0443":e(n.regular,i)}}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(n,i,u){return u=u||{},r[n](i,u)};var r={lessThanXSeconds:t({regular:{one:"\u043c\u0435\u043d\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434\u0438",singularNominative:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438",singularGenitive:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434",pluralGenitive:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},future:{one:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularNominative:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438",pluralGenitive:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),xSeconds:t({regular:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0430",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},past:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0442\u043e\u043c\u0443",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438 \u0442\u043e\u043c\u0443",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u0442\u043e\u043c\u0443"},future:{singularNominative:"\u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438",pluralGenitive:"\u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),halfAMinute:function(n,i){return i.addSuffix?i.comparison>0?"\u0437\u0430 \u043f\u0456\u0432\u0445\u0432\u0438\u043b\u0438\u043d\u0438":"\u043f\u0456\u0432\u0445\u0432\u0438\u043b\u0438\u043d\u0438 \u0442\u043e\u043c\u0443":"\u043f\u0456\u0432\u0445\u0432\u0438\u043b\u0438\u043d\u0438"},lessThanXMinutes:t({regular:{one:"\u043c\u0435\u043d\u0448\u0435 \u0445\u0432\u0438\u043b\u0438\u043d\u0438",singularNominative:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0438",singularGenitive:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d",pluralGenitive:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d"},future:{one:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 \u0445\u0432\u0438\u043b\u0438\u043d\u0443",singularNominative:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0443",singularGenitive:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0438",pluralGenitive:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d"}}),xMinutes:t({regular:{singularNominative:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0430",singularGenitive:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0438",pluralGenitive:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d"},past:{singularNominative:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0443 \u0442\u043e\u043c\u0443",singularGenitive:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0438 \u0442\u043e\u043c\u0443",pluralGenitive:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d \u0442\u043e\u043c\u0443"},future:{singularNominative:"\u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0443",singularGenitive:"\u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0438",pluralGenitive:"\u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d"}}),aboutXHours:t({regular:{singularNominative:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0438",singularGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d",pluralGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0433\u043e\u0434\u0438\u043d\u0443",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0433\u043e\u0434\u0438\u043d\u0438",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0433\u043e\u0434\u0438\u043d"}}),xHours:t({regular:{singularNominative:"{{count}} \u0433\u043e\u0434\u0438\u043d\u0443",singularGenitive:"{{count}} \u0433\u043e\u0434\u0438\u043d\u0438",pluralGenitive:"{{count}} \u0433\u043e\u0434\u0438\u043d"}}),xDays:t({regular:{singularNominative:"{{count}} \u0434\u0435\u043d\u044c",singularGenitive:"{{count}} \u0434\u043d\u044f",pluralGenitive:"{{count}} \u0434\u043d\u0456\u0432"}}),aboutXWeeks:t({regular:{singularNominative:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0442\u0438\u0436\u043d\u044f",singularGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0442\u0438\u0436\u043d\u0456\u0432",pluralGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0442\u0438\u0436\u043d\u0456\u0432"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0442\u0438\u0436\u0434\u0435\u043d\u044c",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0442\u0438\u0436\u043d\u0456",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0442\u0438\u0436\u043d\u0456"}}),xWeeks:t({regular:{singularNominative:"{{count}} \u0442\u0438\u0436\u0434\u0435\u043d\u044c",singularGenitive:"{{count}} \u0442\u0438\u0436\u043d\u044f",pluralGenitive:"{{count}} \u0442\u0438\u0436\u043d\u0456"}}),aboutXMonths:t({regular:{singularNominative:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u043c\u0456\u0441\u044f\u0446\u044f",singularGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u043c\u0456\u0441\u044f\u0446\u0456\u0432",pluralGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u043c\u0456\u0441\u044f\u0446\u0456\u0432"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u043c\u0456\u0441\u044f\u0446\u044c",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u043c\u0456\u0441\u044f\u0446\u044f",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u043c\u0456\u0441\u044f\u0446\u0456\u0432"}}),xMonths:t({regular:{singularNominative:"{{count}} \u043c\u0456\u0441\u044f\u0446\u044c",singularGenitive:"{{count}} \u043c\u0456\u0441\u044f\u0446\u044f",pluralGenitive:"{{count}} \u043c\u0456\u0441\u044f\u0446\u0456\u0432"}}),aboutXYears:t({regular:{singularNominative:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0440\u043e\u043a\u0443",singularGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0440\u043e\u043a\u0456\u0432",pluralGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0440\u043e\u043a\u0456\u0432"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0440\u0456\u043a",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0440\u043e\u043a\u0438",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0440\u043e\u043a\u0456\u0432"}}),xYears:t({regular:{singularNominative:"{{count}} \u0440\u0456\u043a",singularGenitive:"{{count}} \u0440\u043e\u043a\u0438",pluralGenitive:"{{count}} \u0440\u043e\u043a\u0456\u0432"}}),overXYears:t({regular:{singularNominative:"\u0431\u0456\u043b\u044c\u0448\u0435 {{count}} \u0440\u043e\u043a\u0443",singularGenitive:"\u0431\u0456\u043b\u044c\u0448\u0435 {{count}} \u0440\u043e\u043a\u0456\u0432",pluralGenitive:"\u0431\u0456\u043b\u044c\u0448\u0435 {{count}} \u0440\u043e\u043a\u0456\u0432"},future:{singularNominative:"\u0431\u0456\u043b\u044c\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0440\u0456\u043a",singularGenitive:"\u0431\u0456\u043b\u044c\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0440\u043e\u043a\u0438",pluralGenitive:"\u0431\u0456\u043b\u044c\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0440\u043e\u043a\u0456\u0432"}}),almostXYears:t({regular:{singularNominative:"\u043c\u0430\u0439\u0436\u0435 {{count}} \u0440\u0456\u043a",singularGenitive:"\u043c\u0430\u0439\u0436\u0435 {{count}} \u0440\u043e\u043a\u0438",pluralGenitive:"\u043c\u0430\u0439\u0436\u0435 {{count}} \u0440\u043e\u043a\u0456\u0432"},future:{singularNominative:"\u043c\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u0456\u043a",singularGenitive:"\u043c\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043e\u043a\u0438",pluralGenitive:"\u043c\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043e\u043a\u0456\u0432"}})};n.exports=i.default}}]);