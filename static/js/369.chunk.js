(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[369,8,67,142,211,226,227,228,229,331],{1699:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},1707:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){(0,n.default)(2,arguments);var o=(0,r.default)(e,a),u=(0,r.default)(t,a);return o.getTime()===u.getTime()};var r=o(a(1713)),n=o(a(1699));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1713:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,o.default)(1,arguments);var a=t||{},u=a.locale,i=u&&u.options&&u.options.weekStartsOn,l=null==i?0:(0,r.default)(i),d=null==a.weekStartsOn?l:(0,r.default)(a.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=(0,n.default)(e),f=s.getUTCDay(),c=(f<d?7:0)+f-d;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s};var r=u(a(1714)),n=u(a(1715)),o=u(a(1699));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1714:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},1715:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var r,n=(r=a(1699))&&r.__esModule?r:{default:r};e.exports=t.default},228:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=t||{},r=a.width?String(a.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}},e.exports=t.default},229:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,u=n.width?String(n.width):o;r=e.formattingValues[u]||e.formattingValues[o]}else{var i=e.defaultWidth,l=n.width?String(n.width):e.defaultWidth;r=e.values[l]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},230:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r=String(t),n=a||{},o=n.width,u=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],i=r.match(u);if(!i)return null;var l,d=i[0],s=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(s)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(s,(function(e){return e.test(d)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(s,(function(e){return e.test(d)})),l=e.valueCallback?e.valueCallback(l):l,{value:l=n.valueCallback?n.valueCallback(l):l,rest:r.slice(d.length)}}},e.exports=t.default},231:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r=String(t),n=a||{},o=r.match(e.matchPattern);if(!o)return null;var u=o[0],i=r.match(e.parsePattern);if(!i)return null;var l=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:l=n.valueCallback?n.valueCallback(l):l,rest:r.slice(u.length)}}},e.exports=t.default},512:function(e,t,a){"use strict";function r(e,t,a){var r=function(e,t){return 1===t?e.one:t>=2&&t<=4?e.twoFour:e.other}(e,t);return(r[a]||r).replace("{{count}}",t)}function n(e){var t="";return"almost"===e&&(t="takmer"),"about"===e&&(t="pribli\u017ene"),t.length>0?t+" ":""}function o(e){var t="";return"lessThan"===e&&(t="menej ne\u017e"),"over"===e&&(t="viac ne\u017e"),t.length>0?t+" ":""}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){a=a||{};var i=function(e){return["lessThan","about","over","almost"].filter((function(t){return!!e.match(new RegExp("^"+t))}))[0]}(e)||"",l=(s=e.substring(i.length),s.charAt(0).toLowerCase()+s.slice(1)),d=u[l];var s;if(!a.addSuffix)return n(i)+o(i)+r(d,t,"regular");return a.comparison>0?n(i)+"o "+o(i)+r(d,t,"future"):n(i)+"pred "+o(i)+r(d,t,"past")};var u={xSeconds:{one:{regular:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{regular:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{regular:"{{count}} sek\xfand",past:"{{count}} sekundami",future:"{{count}} sek\xfand"}},halfAMinute:{other:{regular:"pol min\xfaty",past:"pol min\xfatou",future:"pol min\xfaty"}},xMinutes:{one:{regular:"min\xfata",past:"min\xfatou",future:"min\xfatu"},twoFour:{regular:"{{count}} min\xfaty",past:"{{count}} min\xfatami",future:"{{count}} min\xfaty"},other:{regular:"{{count}} min\xfat",past:"{{count}} min\xfatami",future:"{{count}} min\xfat"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hod\xedn",past:"{{count}} hodinami",future:"{{count}} hod\xedn"}},xDays:{one:{regular:"de\u0148",past:"d\u0148om",future:"de\u0148"},twoFour:{regular:"{{count}} dni",past:"{{count}} d\u0148ami",future:"{{count}} dni"},other:{regular:"{{count}} dn\xed",past:"{{count}} d\u0148ami",future:"{{count}} dn\xed"}},xWeeks:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xMonths:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{regular:"rok",past:"rokom",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{regular:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}};e.exports=t.default},513:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(228))&&r.__esModule?r:{default:r};var o={date:(0,n.default)({formats:{full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. M. y",short:"d. M. y"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}}, {{time}}",long:"{{date}}, {{time}}",medium:"{{date}}, {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=o,e.exports=t.default},514:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,r){var n=i[e];if("function"===typeof n)return n(t,a,r);return n};var r,n=(r=a(1707))&&r.__esModule?r:{default:r};var o=["nede\u013eu","pondelok","utorok","stredu","\u0161tvrtok","piatok","sobotu"];function u(e){return 4===e?"'vo' eeee 'o' p":"'v "+o[e]+" o' p"}var i={lastWeek:function(e,t,a){var r=e.getUTCDay();return(0,n.default)(e,t,a)?u(r):function(e){var t=o[e];switch(e){case 0:case 3:case 6:return"'minul\xfa "+t+" o' p";default:return"'minul\xfd' eeee 'o' p"}}(r)},yesterday:"'v\u010dera o' p",today:"'dnes o' p",tomorrow:"'zajtra o' p",nextWeek:function(e,t,a){var r=e.getUTCDay();return(0,n.default)(e,t,a)?u(r):function(e){var t=o[e];switch(e){case 0:case 4:case 6:return"'bud\xfacu' "+t+" 'o' p";default:return"'bud\xfaci' eeee 'o' p"}}(r)},other:"P"};e.exports=t.default},515:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(229))&&r.__esModule?r:{default:r};var o={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,n.default)({values:{narrow:["pred Kr.","po Kr."],abbreviated:["pred Kr.","po Kr."],wide:["pred Kristom","po Kristovi"]}}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. \u0161tvr\u0165rok","2. \u0161tvr\u0165rok","3. \u0161tvr\u0165rok","4. \u0161tvr\u0165rok"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],wide:["janu\xe1r","febru\xe1r","marec","apr\xedl","m\xe1j","j\xfan","j\xfal","august","september","okt\xf3ber","november","december"]},defaultWidth:"wide",formattingValues:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],wide:["janu\xe1ra","febru\xe1ra","marca","apr\xedla","m\xe1ja","j\xfana","j\xfala","augusta","septembra","okt\xf3bra","novembra","decembra"]},defaultFormattingWidth:"wide"}),day:(0,n.default)({values:{narrow:["n","p","u","s","\u0161","p","s"],short:["ne","po","ut","st","\u0161t","pi","so"],abbreviated:["ne","po","ut","st","\u0161t","pi","so"],wide:["nede\u013ea","pondelok","utorok","streda","\u0161tvrtok","piatok","sobota"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"r\xe1no",afternoon:"pop.",evening:"ve\u010d.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"r\xe1no",afternoon:"popol.",evening:"ve\u010der",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"polnoc",noon:"poludnie",morning:"r\xe1no",afternoon:"popoludnie",evening:"ve\u010der",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"o poln.",noon:"nap.",morning:"r\xe1no",afternoon:"pop.",evening:"ve\u010d.",night:"v n."},abbreviated:{am:"AM",pm:"PM",midnight:"o poln.",noon:"napol.",morning:"r\xe1no",afternoon:"popol.",evening:"ve\u010der",night:"v noci"},wide:{am:"AM",pm:"PM",midnight:"o polnoci",noon:"napoludnie",morning:"r\xe1no",afternoon:"popoludn\xed",evening:"ve\u010der",night:"v noci"}},defaultFormattingWidth:"wide"})};t.default=o,e.exports=t.default},516:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a(231)),n=o(a(230));function o(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,r.default)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(pred Kristom|pred na[\u0161s][\xedi]m letopo[\u010dc]tom|po Kristovi|n[\xe1a][\u0161s]ho letopo[\u010dc]tu)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|n)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\. [\u0161s]tvr[\u0165t]rok/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|m[\xe1a]j|j[\xfau]n|j[\xfau]l|aug|sep|okt|nov|dec)/i,wide:/^(janu[\xe1a]ra?|febru[\xe1a]ra?|(marec|marca)|apr[\xedi]la?|m[\xe1a]ja?|j[\xfau]na?|j[\xfau]la?|augusta?|(september|septembra)|(okt[\xf3o]ber|okt[\xf3o]bra)|(november|novembra)|(december|decembra))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^m[\xe1a]j/i,/^j[\xfau]n/i,/^j[\xfau]l/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[npus\u0161p]/i,short:/^(ne|po|ut|st|\u0161t|pi|so)/i,abbreviated:/^(ne|po|ut|st|\u0161t|pi|so)/i,wide:/^(nede[\u013el]a|pondelok|utorok|streda|[\u0161s]tvrtok|piatok|sobota])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^u/i,/^s/i,/^\u0161/i,/^p/i,/^s/i],any:[/^n/i,/^po/i,/^u/i,/^st/i,/^(\u0161t|stv)/i,/^pi/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[\xe1a]no|pop\.?|ve[\u010dc]\.?|(v n\.?|noc))/i,abbreviated:/^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[\xe1a]no|pop\.?|ve[\u010dc]er|(v )?noci?)/i,any:/^(am|pm|(o )?polnoci?|(na)?poludnie|r[\xe1a]no|popoludn(ie|\xed|i)|ve[\u010dc]er|(v )?noci?)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/poln/i,noon:/^(nap|(na)?pol(\.|u))/i,morning:/^r[\xe1a]no/i,afternoon:/^pop/i,evening:/^ve[\u010dc]/i,night:/^(noc|v n\.)/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},929:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(512)),n=l(a(513)),o=l(a(514)),u=l(a(515)),i=l(a(516));function l(e){return e&&e.__esModule?e:{default:e}}var d={code:"sk",formatDistance:r.default,formatLong:n.default,formatRelative:o.default,localize:u.default,match:i.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=d,e.exports=t.default}}]);