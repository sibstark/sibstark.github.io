(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[514,570],{1092:function(a,e,t){"use strict";t.r(e);var n={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"aproximadamente 1 hora",other:"aproximadamente {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"aproximadamente 1 m\xeas",other:"aproximadamente {{count}} meses"},xWeeks:{one:"1 m\xeas",other:"{{count}} meses"},aboutXMonths:{one:"aproximadamente 1 m\xeas",other:"aproximadamente {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"aproximadamente 1 ano",other:"aproximadamente {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};var i=t(2240),r={date:Object(i.a)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y",short:"dd/MM/y"},defaultWidth:"full"}),time:Object(i.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(i.a)({formats:{full:"{{date}} '\xe0s' {{time}}",long:"{{date}} '\xe0s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'na \xfaltima' eeee '\xe0s' p",yesterday:"'ontem \xe0s' p",today:"'hoje \xe0s' p",tomorrow:"'amanh\xe3 \xe0s' p",nextWeek:"eeee '\xe0s' p",other:"P"};var d=t(2241);var s={ordinalNumber:function(a){return Number(a)+"\xba"},era:Object(d.a)({values:{narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["antes de Cristo","depois de Cristo"]},defaultWidth:"wide"}),quarter:Object(d.a)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:Object(d.a)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:Object(d.a)({values:{narrow:["d","s","t","q","q","s","s"],short:["dom","seg","ter","qua","qui","sex","s\xe1b"],abbreviated:["dom","seg","ter","qua","qui","sex","s\xe1b"],wide:["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:Object(d.a)({values:{narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"noite",night:"madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"noite",night:"madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"noite",night:"madrugada"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da noite",night:"da madrugada"}},defaultFormattingWidth:"wide"})},u=t(2242),m=t(2243),l={code:"pt",formatDistance:function(a,e,t){var i;return t=t||{},i="string"===typeof n[a]?n[a]:1===e?n[a].one:n[a].other.replace("{{count}}",e),t.addSuffix?t.comparison>0?"daqui a "+i:"h\xe1 "+i:i},formatLong:r,formatRelative:function(a,e,t,n){return o[a]},localize:s,match:{ordinalNumber:Object(u.a)({matchPattern:/^(\d+)(\xba|\xaa)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:Object(m.a)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era comum|depois de cristo|era comum)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era comum)/i,/^(depois de cristo|era comum)/i]},defaultParseWidth:"any"}),quarter:Object(m.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba|\xaa)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:Object(m.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|mar\xe7o|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ab/i,/^mai/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(m.a)({matchPatterns:{narrow:/^[dstq]/i,short:/^(dom|seg|ter|qua|qui|sex|s[\xe1a]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[\xe1a]b)/i,wide:/^(domingo|segunda-?\s?feira|ter\xe7a-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[\xe1a]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^s/i,/^t/i,/^q/i,/^q/i,/^s/i,/^s/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[\xe1a]/i]},defaultParseWidth:"any"}),dayPeriod:Object(m.a)({matchPatterns:{narrow:/^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[\xe3a]|tarde|noite|madrugada))/i,any:/^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[\xe3a]|tarde|noite|madrugada))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^meia/i,noon:/^meio/i,morning:/manh[\xe3a]/i,afternoon:/tarde/i,evening:/noite/i,night:/madrugada/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};e.default=l},1441:function(a,e,t){"use strict";t.r(e);var n=t(1092);e.default=n.default},2240:function(a,e,t){"use strict";function n(a){return function(e){var t=e||{},n=t.width?String(t.width):a.defaultWidth;return a.formats[n]||a.formats[a.defaultWidth]}}t.d(e,"a",(function(){return n}))},2241:function(a,e,t){"use strict";function n(a){return function(e,t){var n,i=t||{};if("formatting"===(i.context?String(i.context):"standalone")&&a.formattingValues){var r=a.defaultFormattingWidth||a.defaultWidth,o=i.width?String(i.width):r;n=a.formattingValues[o]||a.formattingValues[r]}else{var d=a.defaultWidth,s=i.width?String(i.width):a.defaultWidth;n=a.values[s]||a.values[d]}return n[a.argumentCallback?a.argumentCallback(e):e]}}t.d(e,"a",(function(){return n}))},2242:function(a,e,t){"use strict";function n(a){return function(e,t){var n=String(e),i=t||{},r=n.match(a.matchPattern);if(!r)return null;var o=r[0],d=n.match(a.parsePattern);if(!d)return null;var s=a.valueCallback?a.valueCallback(d[0]):d[0];return{value:s=i.valueCallback?i.valueCallback(s):s,rest:n.slice(o.length)}}}t.d(e,"a",(function(){return n}))},2243:function(a,e,t){"use strict";function n(a){return function(e,t){var n=String(e),i=t||{},r=i.width,o=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],d=n.match(o);if(!d)return null;var s,u=d[0],m=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(m)?function(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t}(m,(function(a){return a.test(u)})):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}(m,(function(a){return a.test(u)})),s=a.valueCallback?a.valueCallback(s):s,{value:s=i.valueCallback?i.valueCallback(s):s,rest:n.slice(u.length)}}}t.d(e,"a",(function(){return n}))}}]);