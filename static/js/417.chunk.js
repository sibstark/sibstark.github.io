(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[417,58,133,202,226,227,228,229,315,316],{228:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=t||{},r=a.width?String(a.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}},e.exports=t.default},229:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,u=n.width?String(n.width):i;r=e.formattingValues[u]||e.formattingValues[i]}else{var l=e.defaultWidth,d=n.width?String(n.width):e.defaultWidth;r=e.values[d]||e.values[l]}return r[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},230:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r=String(t),n=a||{},i=n.width,u=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],l=r.match(u);if(!l)return null;var d,o=l[0],s=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(s)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(s,(function(e){return e.test(o)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(s,(function(e){return e.test(o)})),d=e.valueCallback?e.valueCallback(d):d,{value:d=n.valueCallback?n.valueCallback(d):d,rest:r.slice(o.length)}}},e.exports=t.default},231:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r=String(t),n=a||{},i=r.match(e.matchPattern);if(!i)return null;var u=i[0],l=r.match(e.parsePattern);if(!l)return null;var d=e.valueCallback?e.valueCallback(l[0]):l[0];return{value:d=n.valueCallback?n.valueCallback(d):d,rest:r.slice(u.length)}}},e.exports=t.default},467:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){a=a||{onlyNumeric:!1};var i,u=r[e];i="string"===typeof u?u:0===t||t>1?a.onlyNumeric?u.plural.replace("{{count}}",t):u.plural.replace("{{count}}",t<13?n[t]:t):u.singular;if(a.addSuffix)return a.comparison>0?"om "+i:i+" siden";return i};var r={lessThanXSeconds:{singular:"mindre enn ett sekund",plural:"mindre enn {{count}} sekunder"},xSeconds:{singular:"ett sekund",plural:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{singular:"mindre enn ett minutt",plural:"mindre enn {{count}} minutter"},xMinutes:{singular:"ett minutt",plural:"{{count}} minutter"},aboutXHours:{singular:"omtrent en time",plural:"omtrent {{count}} timer"},xHours:{singular:"en time",plural:"{{count}} timer"},xDays:{singular:"en dag",plural:"{{count}} dager"},aboutXWeeks:{singular:"omtrent en uke",plural:"omtrent {{count}} uker"},xWeeks:{singular:"en uke",plural:"{{count}} uker"},aboutXMonths:{singular:"omtrent en m\xe5ned",plural:"omtrent {{count}} m\xe5neder"},xMonths:{singular:"en m\xe5ned",plural:"{{count}} m\xe5neder"},aboutXYears:{singular:"omtrent ett \xe5r",plural:"omtrent {{count}} \xe5r"},xYears:{singular:"ett \xe5r",plural:"{{count}} \xe5r"},overXYears:{singular:"over ett \xe5r",plural:"over {{count}} \xe5r"},almostXYears:{singular:"nesten ett \xe5r",plural:"nesten {{count}} \xe5r"}},n=["null","en","to","tre","fire","fem","seks","sju","\xe5tte","ni","ti","elleve","tolv"];e.exports=t.default},468:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(228))&&r.__esModule?r:{default:r};var i={date:(0,n.default)({formats:{full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},469:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){return r[e]};var r={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i g\xe5r kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"};e.exports=t.default},470:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(229))&&r.__esModule?r:{default:r};var i={ordinalNumber:function(e){return Number(e)+"."},era:(0,n.default)({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["f\xf8r Kristus","etter Kristus"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["S","M","T","O","T","F","L"],short:["s\xf8","ma","ti","on","to","fr","l\xf8"],abbreviated:["s\xf8n","man","tir","ons","tor","fre","l\xf8r"],wide:["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 etterm.",evening:"p\xe5 kvelden",night:"p\xe5 natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 etterm.",evening:"p\xe5 kvelden",night:"p\xe5 natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"p\xe5 morgenen",afternoon:"p\xe5 ettermiddagen",evening:"p\xe5 kvelden",night:"p\xe5 natten"}},defaultWidth:"wide"})};t.default=i,e.exports=t.default},471:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a(231)),n=i(a(230));function i(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,r.default)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(f\xf8r Kristus|f\xf8r v\xe5r tid|etter Kristus|v\xe5r tid)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^f/i,/^e/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[smtofl]/i,short:/^(s\xf8|ma|ti|on|to|fr|l\xf8)/i,abbreviated:/^(s\xf8n|man|tir|ons|tor|fre|l\xf8r)/i,wide:/^(s\xf8ndag|mandag|tirsdag|onsdag|torsdag|fredag|l\xf8rdag)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(midnatt|middag|(p\xe5) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(p\xe5) (morgenen|ettermiddagen|kvelden|natten))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},920:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(a(467)),n=d(a(468)),i=d(a(469)),u=d(a(470)),l=d(a(471));function d(e){return e&&e.__esModule?e:{default:e}}var o={code:"nb",formatDistance:r.default,formatLong:n.default,formatRelative:i.default,localize:u.default,match:l.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=o,e.exports=t.default}}]);