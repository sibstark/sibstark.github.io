(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[323],{486:function(o,t,n){"use strict";function e(o,t,n){n=n||"regular";var e=function(o,t){if(1===t)return o.one;var n=t%100;if(n<=20&&n>10)return o.other;var e=n%10;return e>=2&&e<=4?o.twoFour:o.other}(o,t);return(e[n]||e).replace("{{count}}",t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(o,t,n){var r=u[o];if(!(n=n||{}).addSuffix)return e(r,t);return n.comparison>0?"za "+e(r,t,"future"):e(r,t,"past")+" temu"};var u={lessThanXSeconds:{one:{regular:"mniej ni\u017c sekunda",past:"mniej ni\u017c sekund\u0119",future:"mniej ni\u017c sekund\u0119"},twoFour:"mniej ni\u017c {{count}} sekundy",other:"mniej ni\u017c {{count}} sekund"},xSeconds:{one:{regular:"sekunda",past:"sekund\u0119",future:"sekund\u0119"},twoFour:"{{count}} sekundy",other:"{{count}} sekund"},halfAMinute:{one:"p\xf3\u0142 minuty",twoFour:"p\xf3\u0142 minuty",other:"p\xf3\u0142 minuty"},lessThanXMinutes:{one:{regular:"mniej ni\u017c minuta",past:"mniej ni\u017c minut\u0119",future:"mniej ni\u017c minut\u0119"},twoFour:"mniej ni\u017c {{count}} minuty",other:"mniej ni\u017c {{count}} minut"},xMinutes:{one:{regular:"minuta",past:"minut\u0119",future:"minut\u0119"},twoFour:"{{count}} minuty",other:"{{count}} minut"},aboutXHours:{one:{regular:"oko\u0142o godzina",past:"oko\u0142o godziny",future:"oko\u0142o godzin\u0119"},twoFour:"oko\u0142o {{count}} godziny",other:"oko\u0142o {{count}} godzin"},xHours:{one:{regular:"godzina",past:"godzin\u0119",future:"godzin\u0119"},twoFour:"{{count}} godziny",other:"{{count}} godzin"},xDays:{one:{regular:"dzie\u0144",past:"dzie\u0144",future:"1 dzie\u0144"},twoFour:"{{count}} dni",other:"{{count}} dni"},aboutXWeeks:{one:"oko\u0142o tygodnia",twoFour:"oko\u0142o {{count}} tygodni",other:"oko\u0142o {{count}} tygodni"},xWeeks:{one:"tydzie\u0144",twoFour:"{{count}} tygodnie",other:"{{count}} tygodni"},aboutXMonths:{one:"oko\u0142o miesi\u0105c",twoFour:"oko\u0142o {{count}} miesi\u0105ce",other:"oko\u0142o {{count}} miesi\u0119cy"},xMonths:{one:"miesi\u0105c",twoFour:"{{count}} miesi\u0105ce",other:"{{count}} miesi\u0119cy"},aboutXYears:{one:"oko\u0142o rok",twoFour:"oko\u0142o {{count}} lata",other:"oko\u0142o {{count}} lat"},xYears:{one:"rok",twoFour:"{{count}} lata",other:"{{count}} lat"},overXYears:{one:"ponad rok",twoFour:"ponad {{count}} lata",other:"ponad {{count}} lat"},almostXYears:{one:"prawie rok",twoFour:"prawie {{count}} lata",other:"prawie {{count}} lat"}};o.exports=t.default}}]);