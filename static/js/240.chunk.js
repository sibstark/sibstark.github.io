(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[240],{269:function(n,i,u){"use strict";function e(n,i){if(void 0!==n.one&&1===i)return n.one;var u=i%10,e=i%100;return 1===u&&11!==e?n.singularNominative.replace("{{count}}",i):u>=2&&u<=4&&(e<10||e>20)?n.singularGenitive.replace("{{count}}",i):n.pluralGenitive.replace("{{count}}",i)}function t(n){return function(i,u){return u.addSuffix?u.comparison>0?n.future?e(n.future,i):"\u043f\u0440\u0430\u0437 "+e(n.regular,i):n.past?e(n.past,i):e(n.regular,i)+" \u0442\u0430\u043c\u0443":e(n.regular,i)}}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(n,i,u){return u=u||{},a[n](i,u)};var a={lessThanXSeconds:t({regular:{one:"\u043c\u0435\u043d\u0448 \u0437\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularNominative:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},future:{one:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularNominative:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),xSeconds:t({regular:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0430",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},past:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0442\u0430\u043c\u0443",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b \u0442\u0430\u043c\u0443",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u0442\u0430\u043c\u0443"},future:{singularNominative:"\u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),halfAMinute:function(n,i){return i.addSuffix?i.comparison>0?"\u043f\u0440\u0430\u0437 \u043f\u0430\u045e\u0445\u0432\u0456\u043b\u0456\u043d\u044b":"\u043f\u0430\u045e\u0445\u0432\u0456\u043b\u0456\u043d\u044b \u0442\u0430\u043c\u0443":"\u043f\u0430\u045e\u0445\u0432\u0456\u043b\u0456\u043d\u044b"},lessThanXMinutes:t({regular:{one:"\u043c\u0435\u043d\u0448 \u0437\u0430 \u0445\u0432\u0456\u043b\u0456\u043d\u0443",singularNominative:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u0443",singularGenitive:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u044b",pluralGenitive:"\u043c\u0435\u043d\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d"},future:{one:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 \u0445\u0432\u0456\u043b\u0456\u043d\u0443",singularNominative:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u0443",singularGenitive:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u044b",pluralGenitive:"\u043c\u0435\u043d\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d"}}),xMinutes:t({regular:{singularNominative:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u0430",singularGenitive:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u044b",pluralGenitive:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d"},past:{singularNominative:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u0443 \u0442\u0430\u043c\u0443",singularGenitive:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u044b \u0442\u0430\u043c\u0443",pluralGenitive:"{{count}} \u0445\u0432\u0456\u043b\u0456\u043d \u0442\u0430\u043c\u0443"},future:{singularNominative:"\u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u0443",singularGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d\u044b",pluralGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043b\u0456\u043d"}}),aboutXHours:t({regular:{singularNominative:"\u043a\u0430\u043b\u044f {{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u044b",singularGenitive:"\u043a\u0430\u043b\u044f {{count}} \u0433\u0430\u0434\u0437\u0456\u043d",pluralGenitive:"\u043a\u0430\u043b\u044f {{count}} \u0433\u0430\u0434\u0437\u0456\u043d"},future:{singularNominative:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u0443",singularGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u044b",pluralGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d"}}),xHours:t({regular:{singularNominative:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u0430",singularGenitive:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u044b",pluralGenitive:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d"},past:{singularNominative:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u0443 \u0442\u0430\u043c\u0443",singularGenitive:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u044b \u0442\u0430\u043c\u0443",pluralGenitive:"{{count}} \u0433\u0430\u0434\u0437\u0456\u043d \u0442\u0430\u043c\u0443"},future:{singularNominative:"\u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u0443",singularGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d\u044b",pluralGenitive:"\u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043d"}}),xDays:t({regular:{singularNominative:"{{count}} \u0434\u0437\u0435\u043d\u044c",singularGenitive:"{{count}} \u0434\u043d\u0456",pluralGenitive:"{{count}} \u0434\u0437\u0451\u043d"}}),aboutXWeeks:t({regular:{singularNominative:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430",singularGenitive:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e",pluralGenitive:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"},future:{singularNominative:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u044b",pluralGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"}}),xWeeks:t({regular:{singularNominative:"{{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u044b",pluralGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"}}),aboutXMonths:t({regular:{singularNominative:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430",singularGenitive:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e",pluralGenitive:"\u043a\u0430\u043b\u044f {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"},future:{singularNominative:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u044b",pluralGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"}}),xMonths:t({regular:{singularNominative:"{{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u044b",pluralGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u0430\u045e"}}),aboutXYears:t({regular:{singularNominative:"\u043a\u0430\u043b\u044f {{count}} \u0433\u043e\u0434\u0430",singularGenitive:"\u043a\u0430\u043b\u044f {{count}} \u0433\u0430\u0434\u043e\u045e",pluralGenitive:"\u043a\u0430\u043b\u044f {{count}} \u0433\u0430\u0434\u043e\u045e"},future:{singularNominative:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"\u043f\u0440\u044b\u0431\u043b\u0456\u0437\u043d\u0430 \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043e\u045e"}}),xYears:t({regular:{singularNominative:"{{count}} \u0433\u043e\u0434",singularGenitive:"{{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"{{count}} \u0433\u0430\u0434\u043e\u045e"}}),overXYears:t({regular:{singularNominative:"\u0431\u043e\u043b\u044c\u0448 \u0437\u0430 {{count}} \u0433\u043e\u0434",singularGenitive:"\u0431\u043e\u043b\u044c\u0448 \u0437\u0430 {{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"\u0431\u043e\u043b\u044c\u0448 \u0437\u0430 {{count}} \u0433\u0430\u0434\u043e\u045e"},future:{singularNominative:"\u0431\u043e\u043b\u044c\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u0431\u043e\u043b\u044c\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"\u0431\u043e\u043b\u044c\u0448, \u0447\u044b\u043c \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043e\u045e"}}),almostXYears:t({regular:{singularNominative:"\u0430\u043c\u0430\u043b\u044c {{count}} \u0433\u043e\u0434",singularGenitive:"\u0430\u043c\u0430\u043b\u044c {{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"\u0430\u043c\u0430\u043b\u044c {{count}} \u0433\u0430\u0434\u043e\u045e"},future:{singularNominative:"\u0430\u043c\u0430\u043b\u044c \u043f\u0440\u0430\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u0430\u043c\u0430\u043b\u044c \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044b",pluralGenitive:"\u0430\u043c\u0430\u043b\u044c \u043f\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043e\u045e"}})};n.exports=i.default}}]);