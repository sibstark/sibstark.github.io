(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[444,593],{1085:function(a,n,e){"use strict";e.r(n);var i=e(796);n.default=i.default},796:function(a,n,e){"use strict";e.r(n);var i={lessThanXSeconds:{one:"bir saniy\u0259d\u0259n az",other:"{{count}} bir saniy\u0259d\u0259n az"},xSeconds:{one:"1 saniy\u0259",other:"{{count}} saniy\u0259"},halfAMinute:"yar\u0131m d\u0259qiq\u0259",lessThanXMinutes:{one:"bir d\u0259qiq\u0259d\u0259n az",other:"{{count}} bir d\u0259qiq\u0259d\u0259n az"},xMinutes:{one:"bir d\u0259qiq\u0259",other:"{{count}} d\u0259qiq\u0259"},aboutXHours:{one:"t\u0259xmin\u0259n 1 saat",other:"t\u0259xmin\u0259n {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 g\xfcn",other:"{{count}} g\xfcn"},aboutXWeeks:{one:"t\u0259xmin\u0259n 1 h\u0259ft\u0259",other:"t\u0259xmin\u0259n {{count}} h\u0259ft\u0259"},xWeeks:{one:"1 h\u0259ft\u0259",other:"{{count}} h\u0259ft\u0259"},aboutXMonths:{one:"t\u0259xmin\u0259n 1 ay",other:"t\u0259xmin\u0259n {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"t\u0259xmin\u0259n 1 il",other:"t\u0259xmin\u0259n {{count}} il"},xYears:{one:"1 il",other:"{{count}} il"},overXYears:{one:"1 ild\u0259n \xe7ox",other:"{{count}} ild\u0259n \xe7ox"},almostXYears:{one:"dem\u0259k olar ki 1 il",other:"dem\u0259k olar ki {{count}} il"}};var t=e(109),r={date:Object(t.a)({formats:{full:"EEEE, do MMMM y 'il'",long:"do MMMM y 'il'",medium:"d MMM y 'il'",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:Object(t.a)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:Object(t.a)({formats:{full:"{{date}} {{time}} - 'd\u0259'",long:"{{date}} {{time}} - 'd\u0259'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'sonuncu' eeee p -'d\u0259'",yesterday:"'d\xfcn\u0259n' p -'d\u0259'",today:"'bug\xfcn' p -'d\u0259'",tomorrow:"'sabah' p -'d\u0259'",nextWeek:"eeee p -'d\u0259'",other:"P"};var d=e(81),m={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-\xfcnc\xfc",4:"-\xfcnc\xfc",100:"-\xfcnc\xfc",6:"-nc\u0131",9:"-uncu",10:"-uncu",30:"-uncu",60:"-\u0131nc\u0131",90:"-\u0131nc\u0131"};var u={ordinalNumber:function(a,n){var e=Number(a);return e+function(a){if(0===a)return a+"-\u0131nc\u0131";var n=a%10;return m[n]||m[a%100-n]||m[a>=100?100:null]}(e)},era:Object(d.a)({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Hz. \u0130sa'dan \xf6nc\u0259","Anno Domini"]},defaultWidth:"wide"}),quarter:Object(d.a)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ci kvartal","2ci kvartal","3c\xfc kvartal","4c\xfc kvartal"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:Object(d.a)({values:{narrow:["Y","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","\u0130yun","\u0130yul","Avq","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","\u0130yun","\u0130yul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]},defaultWidth:"wide"}),day:Object(d.a)({values:{narrow:["B.","B.e","\xc7.a","\xc7.","C.a","C.","\u015e."],short:["B.","B.e","\xc7.a","\xc7.","C.a","C.","\u015e."],abbreviated:["Baz","Baz.e","\xc7\u0259r.a","\xc7\u0259r","C\xfcm.a","C\xfcm","\u015e\u0259"],wide:["Bazar","Bazar ert\u0259si","\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131","\xc7\u0259r\u015f\u0259nb\u0259","C\xfcm\u0259 ax\u015fam\u0131","C\xfcm\u0259","\u015e\u0259nb\u0259"]},defaultWidth:"wide"}),dayPeriod:Object(d.a)({values:{narrow:{am:"am",pm:"pm",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"},abbreviated:{am:"AM",pm:"PM",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"},wide:{am:"a.m.",pm:"p.m.",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"},abbreviated:{am:"AM",pm:"PM",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"},wide:{am:"a.m.",pm:"p.m.",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"}},defaultFormattingWidth:"wide"})},c=e(181),s=e(82),l={code:"az",formatDistance:function(a,n,e){var t;return e=e||{},t="string"===typeof i[a]?i[a]:1===n?i[a].one:i[a].other.replace("{{count}}",n),e.addSuffix?e.comparison>0?t+" \u0259vv\u0259l":t+" sonra":t},formatLong:r,formatRelative:function(a,n,e,i){return o[a]},localize:u,match:{ordinalNumber:Object(c.a)({matchPattern:/^(\d+)(-?(ci|inci|nci|uncu|\xfcnc\xfc|nc\u0131))?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:Object(s.a)({matchPatterns:{narrow:/^(b|a)$/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i,wide:/^(Hz. \u0130sa'dan \xf6nc\u0259|\xfcmumi eradan \u0259vv\u0259l|anno domini|\xfcmumi d\xf6vr)$/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b$/i,/^(a|c)$/i]},defaultParseWidth:"any"}),quarter:Object(s.a)({matchPatterns:{narrow:/^[1234]$/i,abbreviated:/^K[1234]$/i,wide:/^[1234](ci)? kvartal$/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:Object(s.a)({matchPatterns:{narrow:/^[(?-i)yfmaisond]$/i,abbreviated:/^(Yan|Fev|Mar|Apr|May|\u0130yun|\u0130yul|Avq|Sen|Okt|Noy|Dek)$/i,wide:/^(Yanvar|Fevral|Mart|Aprel|May|\u0130yun|\u0130yul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^[(?-i)y]$/i,/^[(?-i)f]$/i,/^[(?-i)m]$/i,/^[(?-i)a]$/i,/^[(?-i)m]$/i,/^[(?-i)i]$/i,/^[(?-i)i]$/i,/^[(?-i)a]$/i,/^[(?-i)s]$/i,/^[(?-i)o]$/i,/^[(?-i)n]$/i,/^[(?-i)d]$/i],abbreviated:[/^Yan$/i,/^Fev$/i,/^Mar$/i,/^Apr$/i,/^May$/i,/^\u0130yun$/i,/^\u0130yul$/i,/^Avg$/i,/^Sen$/i,/^Okt$/i,/^Noy$/i,/^Dek$/i],wide:[/^Yanvar$/i,/^Fevral$/i,/^Mart$/i,/^Aprel$/i,/^May$/i,/^\u0130yun$/i,/^\u0130yul$/i,/^Avgust$/i,/^Sentyabr$/i,/^Oktyabr$/i,/^Noyabr$/i,/^Dekabr$/i]},defaultParseWidth:"any"}),day:Object(s.a)({matchPatterns:{narrow:/^(B\.|B\.e|\xc7\.a|\xc7\.|C\.a|C\.|\u015e\.)$/i,short:/^(B\.|B\.e|\xc7\.a|\xc7\.|C\.a|C\.|\u015e\.)$/i,abbreviated:/^(Baz\.e|\xc7\u0259r|\xc7\u0259r\.a|C\xfcm|C\xfcm\.a|\u015e\u0259)$/i,wide:/^(Bazar|Bazar ert\u0259si|\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131|\xc7\u0259r\u015f\u0259nb\u0259|C\xfcm\u0259 ax\u015fam\u0131|C\xfcm\u0259|\u015e\u0259nb\u0259)$/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^B\.$/i,/^B\.e$/i,/^\xc7\.a$/i,/^\xc7\.$/i,/^C\.a$/i,/^C\.$/i,/^\u015e\.$/i],abbreviated:[/^Baz\.e$/i,/^\xc7\u0259r$/i,/^\xc7\u0259r\.a$/i,/^C\xfcm$/i,/^C\xfcm\.a$/i,/^\u015e\u0259$/i],wide:[/^Bazar$/i,/^Bazar ert\u0259si$/i,/^\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131$/i,/^\xc7\u0259r\u015f\u0259nb\u0259$/i,/^C\xfcm\u0259 ax\u015fam\u0131$/i,/^C\xfcm\u0259$/i,/^\u015e\u0259nb\u0259$/i],any:[/^B\.$/i,/^B\.e$/i,/^\xc7\.a$/i,/^\xc7\.$/i,/^C\.a$/i,/^C\.$/i,/^\u015e\.$/i]},defaultParseWidth:"any"}),dayPeriod:Object(s.a)({matchPatterns:{narrow:/^(a|p|gec\u0259yar\u0131|g\xfcn|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam|gec\u0259)$/i,any:/^(am|pm|a\.m\.|p\.m\.|AM|PM|gec\u0259yar\u0131|g\xfcn|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam|gec\u0259)$/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a$/i,pm:/^p$/i,midnight:/^gec\u0259yar\u0131$/i,noon:/^g\xfcn$/i,morning:/s\u0259h\u0259r$/i,afternoon:/g\xfcnd\xfcz$/i,evening:/ax\u015fam$/i,night:/gec\u0259$/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};n.default=l}}]);