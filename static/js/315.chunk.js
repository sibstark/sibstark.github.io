(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[315],{467:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n,t){t=t||{onlyNumeric:!1};var l,a=r[e];l="string"===typeof a?a:0===n||n>1?t.onlyNumeric?a.plural.replace("{{count}}",n):a.plural.replace("{{count}}",n<13?u[n]:n):a.singular;if(t.addSuffix)return t.comparison>0?"om "+l:l+" siden";return l};var r={lessThanXSeconds:{singular:"mindre enn ett sekund",plural:"mindre enn {{count}} sekunder"},xSeconds:{singular:"ett sekund",plural:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{singular:"mindre enn ett minutt",plural:"mindre enn {{count}} minutter"},xMinutes:{singular:"ett minutt",plural:"{{count}} minutter"},aboutXHours:{singular:"omtrent en time",plural:"omtrent {{count}} timer"},xHours:{singular:"en time",plural:"{{count}} timer"},xDays:{singular:"en dag",plural:"{{count}} dager"},aboutXWeeks:{singular:"omtrent en uke",plural:"omtrent {{count}} uker"},xWeeks:{singular:"en uke",plural:"{{count}} uker"},aboutXMonths:{singular:"omtrent en m\xe5ned",plural:"omtrent {{count}} m\xe5neder"},xMonths:{singular:"en m\xe5ned",plural:"{{count}} m\xe5neder"},aboutXYears:{singular:"omtrent ett \xe5r",plural:"omtrent {{count}} \xe5r"},xYears:{singular:"ett \xe5r",plural:"{{count}} \xe5r"},overXYears:{singular:"over ett \xe5r",plural:"over {{count}} \xe5r"},almostXYears:{singular:"nesten ett \xe5r",plural:"nesten {{count}} \xe5r"}},u=["null","en","to","tre","fire","fem","seks","sju","\xe5tte","ni","ti","elleve","tolv"];e.exports=n.default}}]);