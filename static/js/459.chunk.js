(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[459,608],{1117:function(e,a,o){"use strict";o.r(a);var t=o(806);a.default=t.default},806:function(e,a,o){"use strict";o.r(a);var t={lessThanXSeconds:{one:"malpli ol sekundo",other:"malpli ol {{count}} sekundoj"},xSeconds:{one:"1 sekundo",other:"{{count}} sekundoj"},halfAMinute:"duonminuto",lessThanXMinutes:{one:"malpli ol minuto",other:"malpli ol {{count}} minutoj"},xMinutes:{one:"1 minuto",other:"{{count}} minutoj"},aboutXHours:{one:"proksimume 1 horo",other:"proksimume {{count}} horoj"},xHours:{one:"1 horo",other:"{{count}} horoj"},xDays:{one:"1 tago",other:"{{count}} tagoj"},aboutXMonths:{one:"proksimume 1 monato",other:"proksimume {{count}} monatoj"},xWeeks:{one:"1 semajno",other:"{{count}} semajnoj"},aboutXWeeks:{one:"proksimume 1 semajno",other:"proksimume {{count}} semajnoj"},xMonths:{one:"1 monato",other:"{{count}} monatoj"},aboutXYears:{one:"proksimume 1 jaro",other:"proksimume {{count}} jaroj"},xYears:{one:"1 jaro",other:"{{count}} jaroj"},overXYears:{one:"pli ol 1 jaro",other:"pli ol {{count}} jaroj"},almostXYears:{one:"preska\u016d 1 jaro",other:"preska\u016d {{count}} jaroj"}};var n=o(109),r={date:Object(n.a)({formats:{full:"EEEE, do 'de' MMMM y",long:"y-MMMM-dd",medium:"y-MMM-dd",short:"yyyy-MM-dd"},defaultWidth:"full"}),time:Object(n.a)({formats:{full:"Ho 'horo kaj' m:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(n.a)({formats:{any:"{{date}} {{time}}"},defaultWidth:"any"})},i={lastWeek:"'pasinta' eeee 'je' p",yesterday:"'hiera\u016d je' p",today:"'hodia\u016d je' p",tomorrow:"'morga\u016d je' p",nextWeek:"eeee 'je' p",other:"P"};var m=o(81);var d={ordinalNumber:function(e){return Number(e)+"-a"},era:Object(m.a)({values:{narrow:["aK","pK"],abbreviated:["a.K.E.","p.K.E."],wide:["anta\u016d Komuna Erao","Komuna Erao"]},defaultWidth:"wide"}),quarter:Object(m.a)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1-a kvaronjaro","2-a kvaronjaro","3-a kvaronjaro","4-a kvaronjaro"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(m.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan","feb","mar","apr","maj","jun","jul","a\u016dg","sep","okt","nov","dec"],wide:["januaro","februaro","marto","aprilo","majo","junio","julio","a\u016dgusto","septembro","oktobro","novembro","decembro"]},defaultWidth:"wide"}),day:Object(m.a)({values:{narrow:["D","L","M","M","\u0134","V","S"],short:["di","lu","ma","me","\u0135a","ve","sa"],abbreviated:["dim","lun","mar","mer","\u0135a\u016d","ven","sab"],wide:["diman\u0109o","lundo","mardo","merkredo","\u0135a\u016ddo","vendredo","sabato"]},defaultWidth:"wide"}),dayPeriod:Object(m.a)({values:{narrow:{am:"a",pm:"p",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},abbreviated:{am:"a.t.m.",pm:"p.t.m.",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},wide:{am:"anta\u016dtagmeze",pm:"posttagmeze",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"}},defaultWidth:"wide"})},u=o(181),s=o(82),l={code:"eo",formatDistance:function(e,a,o){var n;return o=o||{},n="string"===typeof t[e]?t[e]:1===a?t[e].one:t[e].other.replace("{{count}}",a),o.addSuffix?o.comparison>0?"post "+n:"anta\u016d "+n:n},formatLong:r,formatRelative:function(e,a,o,t){return i[e]},localize:d,match:{ordinalNumber:Object(u.a)({matchPattern:/^(\d+)(-?a)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(s.a)({matchPatterns:{narrow:/^([ap]k)/i,abbreviated:/^([ap]\.?\s?k\.?\s?e\.?)/i,wide:/^((anta\u01d4 |post )?komuna erao)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^a/i,/^[kp]/i]},defaultParseWidth:"any"}),quarter:Object(s.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^k[1234]/i,wide:/^[1234](-?a)? kvaronjaro/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(s.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|a(\u016d|ux|uh|u)g|sep|okt|nov|dec)/i,wide:/^(januaro|februaro|marto|aprilo|majo|junio|julio|a(\u016d|ux|uh|u)gusto|septembro|oktobro|novembro|decembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^a(u|\u016d)/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(s.a)({matchPatterns:{narrow:/^[dlm\u0135jvs]/i,short:/^(di|lu|ma|me|(\u0135|jx|jh|j)a|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|(\u0135|jx|jh|j)a(\u016d|ux|uh|u)|ven|sab)/i,wide:/^(diman(\u0109|cx|ch|c)o|lundo|mardo|merkredo|(\u0135|jx|jh|j)a(\u016d|ux|uh|u)do|vendredo|sabato)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^(j|\u0135)/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^(j|\u0135)/i,/^v/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:Object(s.a)({matchPatterns:{narrow:/^([ap]|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,abbreviated:/^([ap][.\s]?t[.\s]?m[.\s]?|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,wide:/^(anta(\u016d|ux)tagmez|posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo]/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^noktom/i,noon:/^t/i,morning:/^m/i,afternoon:/^posttagmeze/i,evening:/^v/i,night:/^n/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=l}}]);