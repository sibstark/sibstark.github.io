(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[449,61,136,205,226,227,228,229,321,322],{190:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=e||{},r=a.width?String(a.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}},t.exports=e.default},191:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var r,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,u=n.width?String(n.width):i;r=t.formattingValues[u]||t.formattingValues[i]}else{var l=t.defaultWidth,d=n.width?String(n.width):t.defaultWidth;r=t.values[d]||t.values[l]}return r[t.argumentCallback?t.argumentCallback(e):e]}},t.exports=e.default},192:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var r=String(e),n=a||{},i=n.width,u=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],l=r.match(u);if(!l)return null;var d,o=l[0],s=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(s)?function(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}(s,(function(t){return t.test(o)})):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}(s,(function(t){return t.test(o)})),d=t.valueCallback?t.valueCallback(d):d,{value:d=n.valueCallback?n.valueCallback(d):d,rest:r.slice(o.length)}}},t.exports=e.default},193:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var r=String(e),n=a||{},i=r.match(t.matchPattern);if(!i)return null;var u=i[0],l=r.match(t.parsePattern);if(!l)return null;var d=t.valueCallback?t.valueCallback(l[0]):l[0];return{value:d=n.valueCallback?n.valueCallback(d):d,rest:r.slice(u.length)}}},t.exports=e.default},443:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,a){a=a||{onlyNumeric:!1};var i,u=r[t];i="string"===typeof u?u:0===e||e>1?a.onlyNumeric?u.plural.replace("{{count}}",e):u.plural.replace("{{count}}",e<13?n[e]:e):u.singular;if(a.addSuffix)return a.comparison>0?"om "+i:i+" sidan";return i};var r={lessThanXSeconds:{singular:"mindre enn eitt sekund",plural:"mindre enn {{count}} sekund"},xSeconds:{singular:"eitt sekund",plural:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{singular:"mindre enn eitt minutt",plural:"mindre enn {{count}} minutt"},xMinutes:{singular:"eitt minutt",plural:"{{count}} minutt"},aboutXHours:{singular:"omtrent ein time",plural:"omtrent {{count}} timar"},xHours:{singular:"ein time",plural:"{{count}} timar"},xDays:{singular:"ein dag",plural:"{{count}} dagar"},aboutXWeeks:{singular:"omtrent ei veke",plural:"omtrent {{count}} veker"},xWeeks:{singular:"ei veke",plural:"{{count}} veker"},aboutXMonths:{singular:"omtrent ein m\xe5nad",plural:"omtrent {{count}} m\xe5nader"},xMonths:{singular:"ein m\xe5nad",plural:"{{count}} m\xe5nader"},aboutXYears:{singular:"omtrent eitt \xe5r",plural:"omtrent {{count}} \xe5r"},xYears:{singular:"eitt \xe5r",plural:"{{count}} \xe5r"},overXYears:{singular:"over eitt \xe5r",plural:"over {{count}} \xe5r"},almostXYears:{singular:"nesten eitt \xe5r",plural:"nesten {{count}} \xe5r"}},n=["null","ein","to","tre","fire","fem","seks","sju","\xe5tte","ni","ti","elleve","tolv"];t.exports=e.default},444:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,n=(r=a(190))&&r.__esModule?r:{default:r};var i={date:(0,n.default)({formats:{full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};e.default=i,t.exports=e.default},445:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,a,n){return r[t]};var r={lastWeek:"'f\xf8rre' eeee 'kl.' p",yesterday:"'i g\xe5r kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"};t.exports=e.default},446:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,n=(r=a(191))&&r.__esModule?r:{default:r};var i={ordinalNumber:function(t){return Number(t)+"."},era:(0,n.default)({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["f\xf8r Kristus","etter Kristus"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:(0,n.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["S","M","T","O","T","F","L"],short:["su","m\xe5","ty","on","to","fr","lau"],abbreviated:["sun","m\xe5n","tys","ons","tor","fre","laur"],wide:["sundag","m\xe5ndag","tysdag","onsdag","torsdag","fredag","laurdag"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 etterm.",evening:"p\xe5 kvelden",night:"p\xe5 natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 etterm.",evening:"p\xe5 kvelden",night:"p\xe5 natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"p\xe5 morgonen",afternoon:"p\xe5 ettermiddagen",evening:"p\xe5 kvelden",night:"p\xe5 natta"}},defaultWidth:"wide"})};e.default=i,t.exports=e.default},447:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(a(193)),n=i(a(192));function i(t){return t&&t.__esModule?t:{default:t}}var u={ordinalNumber:(0,r.default)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(f\xf8r Kristus|f\xf8r v\xe5r tid|etter Kristus|v\xe5r tid)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^f/i,/^e/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[smtofl]/i,short:/^(su|m\xe5|ty|on|to|fr|la)/i,abbreviated:/^(sun|m\xe5n|tys|ons|tor|fre|laur)/i,wide:/^(sundag|m\xe5ndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(midnatt|middag|(p\xe5) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(p\xe5) (morgonen|ettermiddagen|kvelden|natta))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},defaultParseWidth:"any"})};e.default=u,t.exports=e.default},863:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=d(a(443)),n=d(a(444)),i=d(a(445)),u=d(a(446)),l=d(a(447));function d(t){return t&&t.__esModule?t:{default:t}}var o={code:"nn",formatDistance:r.default,formatLong:n.default,formatRelative:i.default,localize:u.default,match:l.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};e.default=o,t.exports=e.default}}]);