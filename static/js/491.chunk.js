(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[491,640],{1186:function(e,t,a){"use strict";a.r(t);var r=a(839);t.default=r.default},839:function(e,t,a){"use strict";a.r(t);var r={lessThanXSeconds:{singular:"mindre enn eitt sekund",plural:"mindre enn {{count}} sekund"},xSeconds:{singular:"eitt sekund",plural:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{singular:"mindre enn eitt minutt",plural:"mindre enn {{count}} minutt"},xMinutes:{singular:"eitt minutt",plural:"{{count}} minutt"},aboutXHours:{singular:"omtrent ein time",plural:"omtrent {{count}} timar"},xHours:{singular:"ein time",plural:"{{count}} timar"},xDays:{singular:"ein dag",plural:"{{count}} dagar"},aboutXWeeks:{singular:"omtrent ei veke",plural:"omtrent {{count}} veker"},xWeeks:{singular:"ei veke",plural:"{{count}} veker"},aboutXMonths:{singular:"omtrent ein m\xe5nad",plural:"omtrent {{count}} m\xe5nader"},xMonths:{singular:"ein m\xe5nad",plural:"{{count}} m\xe5nader"},aboutXYears:{singular:"omtrent eitt \xe5r",plural:"omtrent {{count}} \xe5r"},xYears:{singular:"eitt \xe5r",plural:"{{count}} \xe5r"},overXYears:{singular:"over eitt \xe5r",plural:"over {{count}} \xe5r"},almostXYears:{singular:"nesten eitt \xe5r",plural:"nesten {{count}} \xe5r"}},n=["null","ein","to","tre","fire","fem","seks","sju","\xe5tte","ni","ti","elleve","tolv"];var i=a(109),d={date:Object(i.a)({formats:{full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:Object(i.a)({formats:{full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(i.a)({formats:{full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},u={lastWeek:"'f\xf8rre' eeee 'kl.' p",yesterday:"'i g\xe5r kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"};var o=a(82);var l={ordinalNumber:function(e){return Number(e)+"."},era:Object(o.a)({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["f\xf8r Kristus","etter Kristus"]},defaultWidth:"wide"}),quarter:Object(o.a)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(o.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},defaultWidth:"wide"}),day:Object(o.a)({values:{narrow:["S","M","T","O","T","F","L"],short:["su","m\xe5","ty","on","to","fr","lau"],abbreviated:["sun","m\xe5n","tys","ons","tor","fre","laur"],wide:["sundag","m\xe5ndag","tysdag","onsdag","torsdag","fredag","laurdag"]},defaultWidth:"wide"}),dayPeriod:Object(o.a)({values:{narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 etterm.",evening:"p\xe5 kvelden",night:"p\xe5 natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 etterm.",evening:"p\xe5 kvelden",night:"p\xe5 natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"p\xe5 morgonen",afternoon:"p\xe5 ettermiddagen",evening:"p\xe5 kvelden",night:"p\xe5 natta"}},defaultWidth:"wide"})},m=a(181),s=a(83),g={code:"nn",formatDistance:function(e,t,a){a=a||{onlyNumeric:!1};var i,d=r[e];return i="string"===typeof d?d:0===t||t>1?a.onlyNumeric?d.plural.replace("{{count}}",t):d.plural.replace("{{count}}",t<13?n[t]:t):d.singular,a.addSuffix?a.comparison>0?"om "+i:i+" sidan":i},formatLong:d,formatRelative:function(e,t,a,r){return u[e]},localize:l,match:{ordinalNumber:Object(m.a)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(s.a)({matchPatterns:{narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(f\xf8r Kristus|f\xf8r v\xe5r tid|etter Kristus|v\xe5r tid)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^f/i,/^e/i]},defaultParseWidth:"any"}),quarter:Object(s.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(s.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(s.a)({matchPatterns:{narrow:/^[smtofl]/i,short:/^(su|m\xe5|ty|on|to|fr|la)/i,abbreviated:/^(sun|m\xe5n|tys|ons|tor|fre|laur)/i,wide:/^(sundag|m\xe5ndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:Object(s.a)({matchPatterns:{narrow:/^(midnatt|middag|(p\xe5) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(p\xe5) (morgonen|ettermiddagen|kvelden|natta))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=g}}]);