(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[573],{1573:function(a,e,i){"use strict";function t(a){return function(e){var i=e||{},t=i.width?String(i.width):a.defaultWidth;return a.formats[t]||a.formats[a.defaultWidth]}}i.d(e,"a",(function(){return t}))},1574:function(a,e,i){"use strict";function t(a){return function(e,i){var t,n=i||{};if("formatting"===(n.context?String(n.context):"standalone")&&a.formattingValues){var r=a.defaultFormattingWidth||a.defaultWidth,o=n.width?String(n.width):r;t=a.formattingValues[o]||a.formattingValues[r]}else{var u=a.defaultWidth,m=n.width?String(n.width):a.defaultWidth;t=a.values[m]||a.values[u]}return t[a.argumentCallback?a.argumentCallback(e):e]}}i.d(e,"a",(function(){return t}))},1575:function(a,e,i){"use strict";function t(a){return function(e,i){var t=String(e),n=i||{},r=t.match(a.matchPattern);if(!r)return null;var o=r[0],u=t.match(a.parsePattern);if(!u)return null;var m=a.valueCallback?a.valueCallback(u[0]):u[0];return{value:m=n.valueCallback?n.valueCallback(m):m,rest:t.slice(o.length)}}}i.d(e,"a",(function(){return t}))},1576:function(a,e,i){"use strict";function t(a){return function(e,i){var t=String(e),n=i||{},r=n.width,o=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],u=t.match(o);if(!u)return null;var m,d=u[0],s=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth];return m="[object Array]"===Object.prototype.toString.call(s)?function(a,e){for(var i=0;i<a.length;i++)if(e(a[i]))return i}(s,(function(a){return a.test(d)})):function(a,e){for(var i in a)if(a.hasOwnProperty(i)&&e(a[i]))return i}(s,(function(a){return a.test(d)})),m=a.valueCallback?a.valueCallback(m):m,{value:m=n.valueCallback?n.valueCallback(m):m,rest:t.slice(d.length)}}}i.d(e,"a",(function(){return t}))},786:function(a,e,i){"use strict";i.r(e);var t={lessThanXSeconds:{one:"mai pu\u021bin de o secund\u0103",other:"mai pu\u021bin de {{count}} secunde"},xSeconds:{one:"1 secund\u0103",other:"{{count}} secunde"},halfAMinute:"jum\u0103tate de minut",lessThanXMinutes:{one:"mai pu\u021bin de un minut",other:"mai pu\u021bin de {{count}} minute"},xMinutes:{one:"1 minut",other:"{{count}} minute"},aboutXHours:{one:"circa 1 or\u0103",other:"circa {{count}} ore"},xHours:{one:"1 or\u0103",other:"{{count}} ore"},xDays:{one:"1 zi",other:"{{count}} zile"},aboutXWeeks:{one:"circa o s\u0103pt\u0103m\xe2n\u0103",other:"circa {{count}} s\u0103pt\u0103m\xe2ni"},xWeeks:{one:"1 s\u0103pt\u0103m\xe2n\u0103",other:"{{count}} s\u0103pt\u0103m\xe2ni"},aboutXMonths:{one:"circa 1 lun\u0103",other:"circa {{count}} luni"},xMonths:{one:"1 lun\u0103",other:"{{count}} luni"},aboutXYears:{one:"circa 1 an",other:"circa {{count}} ani"},xYears:{one:"1 an",other:"{{count}} ani"},overXYears:{one:"peste 1 an",other:"peste {{count}} ani"},almostXYears:{one:"aproape 1 an",other:"aproape {{count}} ani"}};var n=i(1573),r={date:Object(n.a)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:Object(n.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(n.a)({formats:{full:"{{date}} 'la' {{time}}",long:"{{date}} 'la' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"eeee 'trecut\u0103 la' p",yesterday:"'ieri la' p",today:"'ast\u0103zi la' p",tomorrow:"'m\xe2ine la' p",nextWeek:"eeee 'viitoare la' p",other:"P"};var u=i(1574);var m={ordinalNumber:function(a){var e=Number(a);return String(e)},era:Object(u.a)({values:{narrow:["\xce","D"],abbreviated:["\xce.d.C.","D.C."],wide:["\xcenainte de Cristos","Dup\u0103 Cristos"]},defaultWidth:"wide"}),quarter:Object(u.a)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["primul trimestru","al doilea trimestru","al treilea trimestru","al patrulea trimestru"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:Object(u.a)({values:{narrow:["I","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],wide:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"]},defaultWidth:"wide"}),day:Object(u.a)({values:{narrow:["d","l","m","m","j","v","s"],short:["du","lu","ma","mi","jo","vi","s\xe2"],abbreviated:["dum","lun","mar","mie","joi","vin","s\xe2m"],wide:["duminic\u0103","luni","mar\u021bi","miercuri","joi","vineri","s\xe2mb\u0103t\u0103"]},defaultWidth:"wide"}),dayPeriod:Object(u.a)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"ami",morning:"dim",afternoon:"da",evening:"s",night:"n"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"}},defaultFormattingWidth:"wide"})},d=i(1575),s=i(1576),l={code:"ro",formatDistance:function(a,e,i){var n;return i=i||{},n="string"===typeof t[a]?t[a]:1===e?t[a].one:t[a].other.replace("{{count}}",e),i.addSuffix?i.comparison>0?"\xeen "+n:n+" \xeen urm\u0103":n},formatLong:r,formatRelative:function(a,e,i,t){return o[a]},localize:m,match:{ordinalNumber:Object(d.a)({matchPattern:/^(\d+)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:Object(s.a)({matchPatterns:{narrow:/^(\xce|D)/i,abbreviated:/^(\xce\.?\s?d\.?\s?C\.?|\xce\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,wide:/^(\xcenainte de Cristos|\xcenaintea erei noastre|Dup\u0103 Cristos|Era noastr\u0103)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\xceC/i,/^DC/i],wide:[/^(\xcenainte de Cristos|\xcenaintea erei noastre)/i,/^(Dup\u0103 Cristos|Era noastr\u0103)/i]},defaultParseWidth:"any"}),quarter:Object(s.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^trimestrul [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:Object(s.a)({matchPatterns:{narrow:/^[ifmaasond]/i,abbreviated:/^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,wide:/^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^i/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ia/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^iun/i,/^iul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(s.a)({matchPatterns:{narrow:/^[dlmjvs]/i,short:/^(d|l|ma|mi|j|v|s)/i,abbreviated:/^(dum|lun|mar|mie|jo|vi|s\xe2)/i,wide:/^(duminica|luni|mar\u0163i|miercuri|joi|vineri|s\xe2mb\u0103t\u0103)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^mi/i,/^j/i,/^v/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:Object(s.a)({matchPatterns:{narrow:/^(a|p|mn|a|(diminea\u0163a|dup\u0103-amiaza|seara|noaptea))/i,any:/^([ap]\.?\s?m\.?|miezul nop\u021bii|amiaza|(diminea\u0163a|dup\u0103-amiaza|seara|noaptea))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/amiaza/i,morning:/diminea\u0163a/i,afternoon:/dup\u0103-amiaza/i,evening:/seara/i,night:/noaptea/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=l}}]);