(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[467,616],{1137:function(e,a,t){"use strict";t.r(a);var o=t(815);a.default=o.default},815:function(e,a,t){"use strict";t.r(a);var o={lessThanXSeconds:{one:"menos dun segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos dun minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"arredor dunha hora",other:"arredor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 d\xeda",other:"{{count}} d\xedas"},aboutXWeeks:{one:"arredor dunha semana",other:"arredor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"arredor de 1 mes",other:"arredor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"arredor dun ano",other:"arredor de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"m\xe1is dun ano",other:"m\xe1is de {{count}} anos"},almostXYears:{one:"case un ano",other:"case {{count}} anos"}};var n=t(110),i={date:Object(n.a)({formats:{full:"EEEE, d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:Object(n.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(n.a)({formats:{full:"{{date}} '\xe1s' {{time}}",long:"{{date}} '\xe1s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},r={lastWeek:"'o' eeee 'pasado \xe1' LT",yesterday:"'onte \xe1' p",today:"'hoxe \xe1' p",tomorrow:"'ma\xf1\xe1 \xe1' p",nextWeek:"eeee '\xe1' p",other:"P"},d={lastWeek:"'o' eeee 'pasado \xe1s' p",yesterday:"'onte \xe1s' p",today:"'hoxe \xe1s' p",tomorrow:"'ma\xf1\xe1 \xe1s' p",nextWeek:"eeee '\xe1s' p",other:"P"};var s=t(82);var m={ordinalNumber:function(e){return Number(e)+"\xba"},era:Object(s.a)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despois de cristo"]},defaultWidth:"wide"}),quarter:Object(s.a)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(s.a)({values:{narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["xan","feb","mar","abr","mai","xun","xul","ago","set","out","nov","dec"],wide:["xaneiro","febreiro","marzo","abril","maio","xu\xf1o","xullo","agosto","setembro","outubro","novembro","decembro"]},defaultWidth:"wide"}),day:Object(s.a)({values:{narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","me","xo","ve","sa"],abbreviated:["dom","lun","mar","mer","xov","ven","sab"],wide:["domingo","luns","martes","m\xe9rcores","xoves","venres","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:Object(s.a)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"ma\xf1\xe1",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediod\xeda",morning:"ma\xf1\xe1",afternoon:"tarde",evening:"tardi\xf1a",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediod\xeda",morning:"ma\xf1\xe1",afternoon:"tarde",evening:"tardi\xf1a",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da ma\xf1\xe1",afternoon:"da tarde",evening:"da tardi\xf1a",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediod\xeda",morning:"da ma\xf1\xe1",afternoon:"da tarde",evening:"da tardi\xf1a",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediod\xeda",morning:"da ma\xf1\xe1",afternoon:"da tarde",evening:"da tardi\xf1a",night:"da noite"}},defaultFormattingWidth:"wide"})},u=t(180),c=t(83),h={code:"gl",formatDistance:function(e,a,t){var n;return t=t||{},n="string"===typeof o[e]?o[e]:1===a?o[e].one:o[e].other.replace("{{count}}",a),t.addSuffix?t.comparison>0?"en "+n:"hai "+n:n},formatLong:i,formatRelative:function(e,a,t,o){return 1!==a.getUTCHours()?d[e]:r[e]},localize:m,match:{ordinalNumber:Object(u.a)({matchPattern:/^(\d+)(\xba)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(c.a)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era com[u\xfa]n|despois de cristo|era com[u\xfa]n)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era com[u\xfa]n)/i,/^(despois de cristo|era com[u\xfa]n)/i]},defaultParseWidth:"any"}),quarter:Object(c.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(c.a)({matchPatterns:{narrow:/^[xfmasond]/i,abbreviated:/^(xan|feb|mar|abr|mai|xun|xul|ago|set|out|nov|dec)/i,wide:/^(xaneiro|febreiro|marzo|abril|maio|xu\xf1o|xullo|agosto|setembro|outubro|novembro|decembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^x/i,/^f/i,/^m/i,/^a/i,/^m/i,/^x/i,/^x/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^xan/i,/^feb/i,/^mar/i,/^abr/i,/^mai/i,/^xun/i,/^xul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dec/i]},defaultParseWidth:"any"}),day:Object(c.a)({matchPatterns:{narrow:/^[dlmxvs]/i,short:/^(do|lu|ma|me|xo|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|xov|ven|sab)/i,wide:/^(domingo|luns|martes|m[e\xe9]rcores|xoves|venres|s[\xe1a]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^x/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^me/i,/^xo/i,/^ve/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Object(c.a)({matchPatterns:{narrow:/^(a|p|mn|md|(da|[a\xe1]s) (ma\xf1[a\xe1]|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|medianoite|mediod[i\xed]a|(da|[a\xe1]s) (ma\xf1[a\xe1]|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/ma\xf1[a\xe1]/i,afternoon:/tarde/i,evening:/tardi\xf1a/i,night:/noite/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};a.default=h}}]);