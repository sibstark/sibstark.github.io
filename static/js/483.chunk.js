(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[483,539],{1039:function(t,e,a){"use strict";a.r(e);var n=a(747);e.default=n.default},1573:function(t,e,a){"use strict";function n(t){return function(e){var a=e||{},n=a.width?String(a.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}a.d(e,"a",(function(){return n}))},1574:function(t,e,a){"use strict";function n(t){return function(e,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;n=t.formattingValues[o]||t.formattingValues[i]}else{var d=t.defaultWidth,u=r.width?String(r.width):t.defaultWidth;n=t.values[u]||t.values[d]}return n[t.argumentCallback?t.argumentCallback(e):e]}}a.d(e,"a",(function(){return n}))},1575:function(t,e,a){"use strict";function n(t){return function(e,a){var n=String(e),r=a||{},i=n.match(t.matchPattern);if(!i)return null;var o=i[0],d=n.match(t.parsePattern);if(!d)return null;var u=t.valueCallback?t.valueCallback(d[0]):d[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(o.length)}}}a.d(e,"a",(function(){return n}))},1576:function(t,e,a){"use strict";function n(t){return function(e,a){var n=String(e),r=a||{},i=r.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],d=n.match(o);if(!d)return null;var u,m=d[0],s=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(s)?function(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}(s,(function(t){return t.test(m)})):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}(s,(function(t){return t.test(m)})),u=t.valueCallback?t.valueCallback(u):u,{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(m.length)}}}a.d(e,"a",(function(){return n}))},747:function(t,e,a){"use strict";a.r(e);var n={lessThanXSeconds:{one:"mindre end \xe9t sekund",other:"mindre end {{count}} sekunder"},xSeconds:{one:"1 sekund",other:"{{count}} sekunder"},halfAMinute:"\xe9t halvt minut",lessThanXMinutes:{one:"mindre end \xe9t minut",other:"mindre end {{count}} minutter"},xMinutes:{one:"1 minut",other:"{{count}} minutter"},aboutXHours:{one:"cirka 1 time",other:"cirka {{count}} timer"},xHours:{one:"1 time",other:"{{count}} timer"},xDays:{one:"1 dag",other:"{{count}} dage"},aboutXWeeks:{one:"cirka 1 uge",other:"cirka {{count}} uger"},xWeeks:{one:"1 uge",other:"{{count}} uger"},aboutXMonths:{one:"cirka 1 m\xe5ned",other:"cirka {{count}} m\xe5neder"},xMonths:{one:"1 m\xe5ned",other:"{{count}} m\xe5neder"},aboutXYears:{one:"cirka 1 \xe5r",other:"cirka {{count}} \xe5r"},xYears:{one:"1 \xe5r",other:"{{count}} \xe5r"},overXYears:{one:"over 1 \xe5r",other:"over {{count}} \xe5r"},almostXYears:{one:"n\xe6sten 1 \xe5r",other:"n\xe6sten {{count}} \xe5r"}};var r=a(1573),i={date:Object(r.a)({formats:{full:"EEEE 'den' d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:Object(r.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(r.a)({formats:{full:"{{date}} 'kl'. {{time}}",long:"{{date}} 'kl'. {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},o={lastWeek:"'sidste' eeee 'kl.' p",yesterday:"'i g\xe5r kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"'p\xe5' eeee 'kl.' p",other:"P"};var d=a(1574);var u={ordinalNumber:function(t){return Number(t)+"."},era:Object(d.a)({values:{narrow:["fvt","vt"],abbreviated:["f.v.t.","v.t."],wide:["f\xf8r vesterlandsk tidsregning","vesterlandsk tidsregning"]},defaultWidth:"wide"}),quarter:Object(d.a)({values:{narrow:["1","2","3","4"],abbreviated:["1. kvt.","2. kvt.","3. kvt.","4. kvt."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Object(d.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]},defaultWidth:"wide"}),day:Object(d.a)({values:{narrow:["S","M","T","O","T","F","L"],short:["s\xf8","ma","ti","on","to","fr","l\xf8"],abbreviated:["s\xf8n.","man.","tir.","ons.","tor.","fre.","l\xf8r."],wide:["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"]},defaultWidth:"wide"}),dayPeriod:Object(d.a)({values:{narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"}},defaultFormattingWidth:"wide"})},m=a(1576),s=a(1575),l={code:"da",formatDistance:function(t,e,a){var r;return a=a||{},r="string"===typeof n[t]?n[t]:1===e?n[t].one:n[t].other.replace("{{count}}",e),a.addSuffix?a.comparison>0?"om "+r:r+" siden":r},formatLong:i,formatRelative:function(t,e,a,n){return o[t]},localize:u,match:{ordinalNumber:Object(s.a)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:Object(m.a)({matchPatterns:{narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|f\xf8r vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^f/i,/^(v|e)/i]},defaultParseWidth:"any"}),quarter:Object(m.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Object(m.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(m.a)({matchPatterns:{narrow:/^[smtofl]/i,short:/^(s\xf8n.|man.|tir.|ons.|tor.|fre.|l\xf8r.)/i,abbreviated:/^(s\xf8n|man|tir|ons|tor|fre|l\xf8r)/i,wide:/^(s\xf8ndag|mandag|tirsdag|onsdag|torsdag|fredag|l\xf8rdag)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:Object(m.a)({matchPatterns:{narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};e.default=l}}]);