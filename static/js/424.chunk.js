(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[424,68,143,212,226,227,228,229,332,333],{228:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var o=t||{},n=o.width?String(o.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}},e.exports=t.default},229:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,o){var n,a=o||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):u;n=e.formattingValues[i]||e.formattingValues[u]}else{var r=e.defaultWidth,l=a.width?String(a.width):e.defaultWidth;n=e.values[l]||e.values[r]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},230:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,o){var n=String(t),a=o||{},u=a.width,i=u&&e.matchPatterns[u]||e.matchPatterns[e.defaultMatchWidth],r=n.match(i);if(!r)return null;var l,c=r[0],d=u&&e.parsePatterns[u]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var o=0;o<e.length;o++)if(t(e[o]))return o}(d,(function(e){return e.test(c)})):function(e,t){for(var o in e)if(e.hasOwnProperty(o)&&t(e[o]))return o}(d,(function(e){return e.test(c)})),l=e.valueCallback?e.valueCallback(l):l,{value:l=a.valueCallback?a.valueCallback(l):l,rest:n.slice(c.length)}}},e.exports=t.default},231:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,o){var n=String(t),a=o||{},u=n.match(e.matchPattern);if(!u)return null;var i=u[0],r=n.match(e.parsePattern);if(!r)return null;var l=e.valueCallback?e.valueCallback(r[0]):r[0];return{value:l=a.valueCallback?a.valueCallback(l):l,rest:n.slice(i.length)}}},e.exports=t.default},517:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o){var i=n,r="";(o=o||{}).addSuffix&&(o.comparison>0?(i=u,r+="\u010dez "):(i=a,r+="pred "));if("string"===typeof i[e])r+=i[e];else{var l=function(e){switch(e%100){case 1:return"one";case 2:return"two";case 3:case 4:return"few";default:return"other"}}(t);r+=i[e][l].replace("{{count}}",t)}return r};var n={lessThanXSeconds:{one:"manj kot {{count}} sekunda",two:"manj kot {{count}} sekundi",few:"manj kot {{count}} sekunde",other:"manj kot {{count}} sekund"},xSeconds:{one:"{{count}} sekunda",two:"{{count}} sekundi",few:"{{count}} sekunde",other:"{{count}} sekund"},halfAMinute:"pol minute",lessThanXMinutes:{one:"manj kot {{count}} minuta",two:"manj kot {{count}} minuti",few:"manj kot {{count}} minute",other:"manj kot {{count}} minut"},xMinutes:{one:"{{count}} minuta",two:"{{count}} minuti",few:"{{count}} minute",other:"{{count}} minut"},aboutXHours:{one:"pribli\u017eno {{count}} ura",two:"pribli\u017eno {{count}} uri",few:"pribli\u017eno {{count}} ure",other:"pribli\u017eno {{count}} ur"},xHours:{one:"{{count}} ura",two:"{{count}} uri",few:"{{count}} ure",other:"{{count}} ur"},xDays:{one:"{{count}} dan",two:"{{count}} dni",few:"{{count}} dni",other:"{{count}} dni"},aboutXWeeks:{one:"pribli\u017eno {{count}} teden",two:"pribli\u017eno {{count}} tedna",few:"pribli\u017eno {{count}} tedne",other:"pribli\u017eno {{count}} tednov"},xWeeks:{one:"{{count}} teden",two:"{{count}} tedna",few:"{{count}} tedne",other:"{{count}} tednov"},aboutXMonths:{one:"pribli\u017eno {{count}} mesec",two:"pribli\u017eno {{count}} meseca",few:"pribli\u017eno {{count}} mesece",other:"pribli\u017eno {{count}} mesecev"},xMonths:{one:"{{count}} mesec",two:"{{count}} meseca",few:"{{count}} meseci",other:"{{count}} mesecev"},aboutXYears:{one:"pribli\u017eno {{count}} leto",two:"pribli\u017eno {{count}} leti",few:"pribli\u017eno {{count}} leta",other:"pribli\u017eno {{count}} let"},xYears:{one:"{{count}} leto",two:"{{count}} leti",few:"{{count}} leta",other:"{{count}} let"},overXYears:{one:"ve\u010d kot {{count}} leto",two:"ve\u010d kot {{count}} leti",few:"ve\u010d kot {{count}} leta",other:"ve\u010d kot {{count}} let"},almostXYears:{one:"skoraj {{count}} leto",two:"skoraj {{count}} leti",few:"skoraj {{count}} leta",other:"skoraj {{count}} let"}},a={lessThanXSeconds:{one:"manj kot {{count}} sekundo",two:"manj kot {{count}} sekundama",few:"manj kot {{count}} sekundami",other:"manj kot {{count}} sekundami"},xSeconds:{one:"{{count}} sekundo",two:"{{count}} sekundama",few:"{{count}} sekundami",other:"{{count}} sekundami"},halfAMinute:"pol minute",lessThanXMinutes:{one:"manj kot {{count}} minuto",two:"manj kot {{count}} minutama",few:"manj kot {{count}} minutami",other:"manj kot {{count}} minutami"},xMinutes:{one:"{{count}} minuto",two:"{{count}} minutama",few:"{{count}} minutami",other:"{{count}} minutami"},aboutXHours:{one:"pribli\u017eno {{count}} uro",two:"pribli\u017eno {{count}} urama",few:"pribli\u017eno {{count}} urami",other:"pribli\u017eno {{count}} urami"},xHours:{one:"{{count}} uro",two:"{{count}} urama",few:"{{count}} urami",other:"{{count}} urami"},xDays:{one:"{{count}} dnem",two:"{{count}} dnevoma",few:"{{count}} dnevi",other:"{{count}} dnevi"},aboutXMonths:{one:"pribli\u017eno {{count}} mesecem",two:"pribli\u017eno {{count}} mesecema",few:"pribli\u017eno {{count}} meseci",other:"pribli\u017eno {{count}} meseci"},xMonths:{one:"{{count}} mesecem",two:"{{count}} mesecema",few:"{{count}} meseci",other:"{{count}} meseci"},aboutXYears:{one:"pribli\u017eno {{count}} letom",two:"pribli\u017eno {{count}} letoma",few:"pribli\u017eno {{count}} leti",other:"pribli\u017eno {{count}} leti"},xYears:{one:"{{count}} letom",two:"{{count}} letoma",few:"{{count}} leti",other:"{{count}} leti"},overXYears:{one:"ve\u010d kot {{count}} letom",two:"ve\u010d kot {{count}} letoma",few:"ve\u010d kot {{count}} leti",other:"ve\u010d kot {{count}} leti"},almostXYears:{one:"skoraj {{count}} letom",two:"skoraj {{count}} letoma",few:"skoraj {{count}} leti",other:"skoraj {{count}} leti"}},u={lessThanXSeconds:{one:"manj kot {{count}} sekundo",two:"manj kot {{count}} sekundi",few:"manj kot {{count}} sekunde",other:"manj kot {{count}} sekund"},xSeconds:{one:"{{count}} sekundo",two:"{{count}} sekundi",few:"{{count}} sekunde",other:"{{count}} sekund"},halfAMinute:"pol minute",lessThanXMinutes:{one:"manj kot {{count}} minuto",two:"manj kot {{count}} minuti",few:"manj kot {{count}} minute",other:"manj kot {{count}} minut"},xMinutes:{one:"{{count}} minuto",two:"{{count}} minuti",few:"{{count}} minute",other:"{{count}} minut"},aboutXHours:{one:"pribli\u017eno {{count}} uro",two:"pribli\u017eno {{count}} uri",few:"pribli\u017eno {{count}} ure",other:"pribli\u017eno {{count}} ur"},xHours:{one:"{{count}} uro",two:"{{count}} uri",few:"{{count}} ure",other:"{{count}} ur"},xDays:{one:"{{count}} dan",two:"{{count}} dni",few:"{{count}} dni",other:"{{count}} dni"},aboutXMonths:{one:"pribli\u017eno {{count}} mesec",two:"pribli\u017eno {{count}} meseca",few:"pribli\u017eno {{count}} mesece",other:"pribli\u017eno {{count}} mesecev"},xMonths:{one:"{{count}} mesec",two:"{{count}} meseca",few:"{{count}} mesece",other:"{{count}} mesecev"},aboutXYears:{one:"pribli\u017eno {{count}} leto",two:"pribli\u017eno {{count}} leti",few:"pribli\u017eno {{count}} leta",other:"pribli\u017eno {{count}} let"},xYears:{one:"{{count}} leto",two:"{{count}} leti",few:"{{count}} leta",other:"{{count}} let"},overXYears:{one:"ve\u010d kot {{count}} leto",two:"ve\u010d kot {{count}} leti",few:"ve\u010d kot {{count}} leta",other:"ve\u010d kot {{count}} let"},almostXYears:{one:"skoraj {{count}} leto",two:"skoraj {{count}} leti",few:"skoraj {{count}} leta",other:"skoraj {{count}} let"}};e.exports=t.default},518:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=o(228))&&n.__esModule?n:{default:n};var u={date:(0,a.default)({formats:{full:"EEEE, dd. MMMM y",long:"dd. MMMM y",medium:"d. MMM y",short:"d. MM. yy"},defaultWidth:"full"}),time:(0,a.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,a.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=u,e.exports=t.default},519:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o,a){var u=n[e];if("function"===typeof u)return u(t);return u};var n={lastWeek:function(e){switch(e.getUTCDay()){case 0:return"'prej\u0161njo nedeljo ob' p";case 3:return"'prej\u0161njo sredo ob' p";case 6:return"'prej\u0161njo soboto ob' p";default:return"'prej\u0161nji' EEEE 'ob' p"}},yesterday:"'v\u010deraj ob' p",today:"'danes ob' p",tomorrow:"'jutri ob' p",nextWeek:function(e){switch(e.getUTCDay()){case 0:return"'naslednjo nedeljo ob' p";case 3:return"'naslednjo sredo ob' p";case 6:return"'naslednjo soboto ob' p";default:return"'naslednji' EEEE 'ob' p"}},other:"P"};e.exports=t.default},520:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=o(229))&&n.__esModule?n:{default:n};var u={ordinalNumber:function(e){var t=Number(e);return String(t).concat(".")},era:(0,a.default)({values:{narrow:["pr. n. \u0161t.","po n. \u0161t."],abbreviated:["pr. n. \u0161t.","po n. \u0161t."],wide:["pred na\u0161im \u0161tetjem","po na\u0161em \u0161tetju"]},defaultWidth:"wide"}),quarter:(0,a.default)({values:{narrow:["1","2","3","4"],abbreviated:["1. \u010det.","2. \u010det.","3. \u010det.","4. \u010det."],wide:["1. \u010detrtletje","2. \u010detrtletje","3. \u010detrtletje","4. \u010detrtletje"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan.","feb.","mar.","apr.","maj","jun.","jul.","avg.","sep.","okt.","nov.","dec."],wide:["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"]},defaultWidth:"wide"}),day:(0,a.default)({values:{narrow:["n","p","t","s","\u010d","p","s"],short:["ned.","pon.","tor.","sre.","\u010det.","pet.","sob."],abbreviated:["ned.","pon.","tor.","sre.","\u010det.","pet.","sob."],wide:["nedelja","ponedeljek","torek","sreda","\u010detrtek","petek","sobota"]},defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:{narrow:{am:"d",pm:"p",midnight:"24.00",noon:"12.00",morning:"j",afternoon:"p",evening:"v",night:"n"},abbreviated:{am:"dop.",pm:"pop.",midnight:"poln.",noon:"pold.",morning:"jut.",afternoon:"pop.",evening:"ve\u010d.",night:"no\u010d"},wide:{am:"dop.",pm:"pop.",midnight:"polno\u010d",noon:"poldne",morning:"jutro",afternoon:"popoldne",evening:"ve\u010der",night:"no\u010d"}},defaultWidth:"wide",formattingValues:{narrow:{am:"d",pm:"p",midnight:"24.00",noon:"12.00",morning:"zj",afternoon:"p",evening:"zv",night:"po"},abbreviated:{am:"dop.",pm:"pop.",midnight:"opoln.",noon:"opold.",morning:"zjut.",afternoon:"pop.",evening:"zve\u010d.",night:"pono\u010di"},wide:{am:"dop.",pm:"pop.",midnight:"opolno\u010di",noon:"opoldne",morning:"zjutraj",afternoon:"popoldan",evening:"zve\u010der",night:"pono\u010di"}},defaultFormattingWidth:"wide"})};t.default=u,e.exports=t.default},521:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o(230));function a(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,a(o(231)).default)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{abbreviated:/^(pr\. n\. \u0161t\.|po n\. \u0161t\.)/i,wide:/^(pred Kristusom|pred na[s\u0161]im [s\u0161]tetjem|po Kristusu|po na[s\u0161]em [s\u0161]tetju|na[s\u0161]ega [s\u0161]tetja)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|na[s\u0161]em)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?[\u010dc]et\.?/i,wide:/^[1234]\. [\u010dc]etrtletje/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan\.|feb\.|mar\.|apr\.|maj|jun\.|jul\.|avg\.|sep\.|okt\.|nov\.|dec\.)/i,wide:/^(januar|februar|marec|april|maj|junij|julij|avgust|september|oktober|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],abbreviated:[/^ja/i,/^fe/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i],wide:[/^ja/i,/^fe/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"wide"}),day:(0,n.default)({matchPatterns:{narrow:/^[npts\u010dc]/i,short:/^(ned\.|pon\.|tor\.|sre\.|[c\u010d]et\.|pet\.|sob\.)/i,abbreviated:/^(ned\.|pon\.|tor\.|sre\.|[c\u010d]et\.|pet\.|sob\.)/i,wide:/^(nedelja|ponedeljek|torek|sreda|[c\u010d]etrtek|petek|sobota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^t/i,/^s/i,/^[c\u010d]/i,/^p/i,/^s/i],any:[/^n/i,/^po/i,/^t/i,/^sr/i,/^[c\u010d]/i,/^pe/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(d|po?|z?v|n|z?j|24\.00|12\.00)/i,any:/^(dop\.|pop\.|o?poln(\.|o[c\u010d]i?)|o?pold(\.|ne)|z?ve[c\u010d](\.|er)|(po)?no[c\u010d]i?|popold(ne|an)|jut(\.|ro)|zjut(\.|raj))/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^d/i,pm:/^p/i,midnight:/^24/i,noon:/^12/i,morning:/^(z?j)/i,afternoon:/^p/i,evening:/^(z?v)/i,night:/^(n|po)/i},any:{am:/^dop\./i,pm:/^pop\./i,midnight:/^o?poln/i,noon:/^o?pold/i,morning:/j/i,afternoon:/^pop\./i,evening:/^z?ve/i,night:/(po)?no/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},930:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(o(517)),a=l(o(518)),u=l(o(519)),i=l(o(520)),r=l(o(521));function l(e){return e&&e.__esModule?e:{default:e}}var c={code:"sl",formatDistance:n.default,formatLong:a.default,formatRelative:u.default,localize:i.default,match:r.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=c,e.exports=t.default}}]);