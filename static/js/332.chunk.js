(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[332],{518:function(o,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(o,t,n){var i=e,r="";(n=n||{}).addSuffix&&(n.comparison>0?(i=c,r+="\u010dez "):(i=u,r+="pred "));if("string"===typeof i[o])r+=i[o];else{var a=function(o){switch(o%100){case 1:return"one";case 2:return"two";case 3:case 4:return"few";default:return"other"}}(t);r+=i[o][a].replace("{{count}}",t)}return r};var e={lessThanXSeconds:{one:"manj kot {{count}} sekunda",two:"manj kot {{count}} sekundi",few:"manj kot {{count}} sekunde",other:"manj kot {{count}} sekund"},xSeconds:{one:"{{count}} sekunda",two:"{{count}} sekundi",few:"{{count}} sekunde",other:"{{count}} sekund"},halfAMinute:"pol minute",lessThanXMinutes:{one:"manj kot {{count}} minuta",two:"manj kot {{count}} minuti",few:"manj kot {{count}} minute",other:"manj kot {{count}} minut"},xMinutes:{one:"{{count}} minuta",two:"{{count}} minuti",few:"{{count}} minute",other:"{{count}} minut"},aboutXHours:{one:"pribli\u017eno {{count}} ura",two:"pribli\u017eno {{count}} uri",few:"pribli\u017eno {{count}} ure",other:"pribli\u017eno {{count}} ur"},xHours:{one:"{{count}} ura",two:"{{count}} uri",few:"{{count}} ure",other:"{{count}} ur"},xDays:{one:"{{count}} dan",two:"{{count}} dni",few:"{{count}} dni",other:"{{count}} dni"},aboutXWeeks:{one:"pribli\u017eno {{count}} teden",two:"pribli\u017eno {{count}} tedna",few:"pribli\u017eno {{count}} tedne",other:"pribli\u017eno {{count}} tednov"},xWeeks:{one:"{{count}} teden",two:"{{count}} tedna",few:"{{count}} tedne",other:"{{count}} tednov"},aboutXMonths:{one:"pribli\u017eno {{count}} mesec",two:"pribli\u017eno {{count}} meseca",few:"pribli\u017eno {{count}} mesece",other:"pribli\u017eno {{count}} mesecev"},xMonths:{one:"{{count}} mesec",two:"{{count}} meseca",few:"{{count}} meseci",other:"{{count}} mesecev"},aboutXYears:{one:"pribli\u017eno {{count}} leto",two:"pribli\u017eno {{count}} leti",few:"pribli\u017eno {{count}} leta",other:"pribli\u017eno {{count}} let"},xYears:{one:"{{count}} leto",two:"{{count}} leti",few:"{{count}} leta",other:"{{count}} let"},overXYears:{one:"ve\u010d kot {{count}} leto",two:"ve\u010d kot {{count}} leti",few:"ve\u010d kot {{count}} leta",other:"ve\u010d kot {{count}} let"},almostXYears:{one:"skoraj {{count}} leto",two:"skoraj {{count}} leti",few:"skoraj {{count}} leta",other:"skoraj {{count}} let"}},u={lessThanXSeconds:{one:"manj kot {{count}} sekundo",two:"manj kot {{count}} sekundama",few:"manj kot {{count}} sekundami",other:"manj kot {{count}} sekundami"},xSeconds:{one:"{{count}} sekundo",two:"{{count}} sekundama",few:"{{count}} sekundami",other:"{{count}} sekundami"},halfAMinute:"pol minute",lessThanXMinutes:{one:"manj kot {{count}} minuto",two:"manj kot {{count}} minutama",few:"manj kot {{count}} minutami",other:"manj kot {{count}} minutami"},xMinutes:{one:"{{count}} minuto",two:"{{count}} minutama",few:"{{count}} minutami",other:"{{count}} minutami"},aboutXHours:{one:"pribli\u017eno {{count}} uro",two:"pribli\u017eno {{count}} urama",few:"pribli\u017eno {{count}} urami",other:"pribli\u017eno {{count}} urami"},xHours:{one:"{{count}} uro",two:"{{count}} urama",few:"{{count}} urami",other:"{{count}} urami"},xDays:{one:"{{count}} dnem",two:"{{count}} dnevoma",few:"{{count}} dnevi",other:"{{count}} dnevi"},aboutXMonths:{one:"pribli\u017eno {{count}} mesecem",two:"pribli\u017eno {{count}} mesecema",few:"pribli\u017eno {{count}} meseci",other:"pribli\u017eno {{count}} meseci"},xMonths:{one:"{{count}} mesecem",two:"{{count}} mesecema",few:"{{count}} meseci",other:"{{count}} meseci"},aboutXYears:{one:"pribli\u017eno {{count}} letom",two:"pribli\u017eno {{count}} letoma",few:"pribli\u017eno {{count}} leti",other:"pribli\u017eno {{count}} leti"},xYears:{one:"{{count}} letom",two:"{{count}} letoma",few:"{{count}} leti",other:"{{count}} leti"},overXYears:{one:"ve\u010d kot {{count}} letom",two:"ve\u010d kot {{count}} letoma",few:"ve\u010d kot {{count}} leti",other:"ve\u010d kot {{count}} leti"},almostXYears:{one:"skoraj {{count}} letom",two:"skoraj {{count}} letoma",few:"skoraj {{count}} leti",other:"skoraj {{count}} leti"}},c={lessThanXSeconds:{one:"manj kot {{count}} sekundo",two:"manj kot {{count}} sekundi",few:"manj kot {{count}} sekunde",other:"manj kot {{count}} sekund"},xSeconds:{one:"{{count}} sekundo",two:"{{count}} sekundi",few:"{{count}} sekunde",other:"{{count}} sekund"},halfAMinute:"pol minute",lessThanXMinutes:{one:"manj kot {{count}} minuto",two:"manj kot {{count}} minuti",few:"manj kot {{count}} minute",other:"manj kot {{count}} minut"},xMinutes:{one:"{{count}} minuto",two:"{{count}} minuti",few:"{{count}} minute",other:"{{count}} minut"},aboutXHours:{one:"pribli\u017eno {{count}} uro",two:"pribli\u017eno {{count}} uri",few:"pribli\u017eno {{count}} ure",other:"pribli\u017eno {{count}} ur"},xHours:{one:"{{count}} uro",two:"{{count}} uri",few:"{{count}} ure",other:"{{count}} ur"},xDays:{one:"{{count}} dan",two:"{{count}} dni",few:"{{count}} dni",other:"{{count}} dni"},aboutXMonths:{one:"pribli\u017eno {{count}} mesec",two:"pribli\u017eno {{count}} meseca",few:"pribli\u017eno {{count}} mesece",other:"pribli\u017eno {{count}} mesecev"},xMonths:{one:"{{count}} mesec",two:"{{count}} meseca",few:"{{count}} mesece",other:"{{count}} mesecev"},aboutXYears:{one:"pribli\u017eno {{count}} leto",two:"pribli\u017eno {{count}} leti",few:"pribli\u017eno {{count}} leta",other:"pribli\u017eno {{count}} let"},xYears:{one:"{{count}} leto",two:"{{count}} leti",few:"{{count}} leta",other:"{{count}} let"},overXYears:{one:"ve\u010d kot {{count}} leto",two:"ve\u010d kot {{count}} leti",few:"ve\u010d kot {{count}} leta",other:"ve\u010d kot {{count}} let"},almostXYears:{one:"skoraj {{count}} leto",two:"skoraj {{count}} leti",few:"skoraj {{count}} leta",other:"skoraj {{count}} let"}};o.exports=t.default}}]);