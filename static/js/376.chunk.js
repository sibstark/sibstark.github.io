(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[376,18,86,161,226,227,228,229,238,239],{228:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=a||{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}},e.exports=a.default},229:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n,i=t||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,u=i.width?String(i.width):r;n=e.formattingValues[u]||e.formattingValues[r]}else{var d=e.defaultWidth,o=i.width?String(i.width):e.defaultWidth;n=e.values[o]||e.values[d]}return n[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},230:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n=String(a),i=t||{},r=i.width,u=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],d=n.match(u);if(!d)return null;var o,l=d[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth];return o="[object Array]"===Object.prototype.toString.call(s)?function(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}(s,(function(e){return e.test(l)})):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}(s,(function(e){return e.test(l)})),o=e.valueCallback?e.valueCallback(o):o,{value:o=i.valueCallback?i.valueCallback(o):o,rest:n.slice(l.length)}}},e.exports=a.default},231:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n=String(a),i=t||{},r=n.match(e.matchPattern);if(!r)return null;var u=r[0],d=n.match(e.parsePattern);if(!d)return null;var o=e.valueCallback?e.valueCallback(d[0]):d[0];return{value:o=i.valueCallback?i.valueCallback(o):o,rest:n.slice(u.length)}}},e.exports=a.default},265:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,t){var i;t=t||{},i="string"===typeof n[e]?n[e]:1===a?n[e].one:n[e].other.replace("{{count}}",a);if(t.addSuffix)return t.comparison>0?i+" \u0259vv\u0259l":i+" sonra";return i};var n={lessThanXSeconds:{one:"bir saniy\u0259d\u0259n az",other:"{{count}} bir saniy\u0259d\u0259n az"},xSeconds:{one:"1 saniy\u0259",other:"{{count}} saniy\u0259"},halfAMinute:"yar\u0131m d\u0259qiq\u0259",lessThanXMinutes:{one:"bir d\u0259qiq\u0259d\u0259n az",other:"{{count}} bir d\u0259qiq\u0259d\u0259n az"},xMinutes:{one:"bir d\u0259qiq\u0259",other:"{{count}} d\u0259qiq\u0259"},aboutXHours:{one:"t\u0259xmin\u0259n 1 saat",other:"t\u0259xmin\u0259n {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 g\xfcn",other:"{{count}} g\xfcn"},aboutXWeeks:{one:"t\u0259xmin\u0259n 1 h\u0259ft\u0259",other:"t\u0259xmin\u0259n {{count}} h\u0259ft\u0259"},xWeeks:{one:"1 h\u0259ft\u0259",other:"{{count}} h\u0259ft\u0259"},aboutXMonths:{one:"t\u0259xmin\u0259n 1 ay",other:"t\u0259xmin\u0259n {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"t\u0259xmin\u0259n 1 il",other:"t\u0259xmin\u0259n {{count}} il"},xYears:{one:"1 il",other:"{{count}} il"},overXYears:{one:"1 ild\u0259n \xe7ox",other:"{{count}} ild\u0259n \xe7ox"},almostXYears:{one:"dem\u0259k olar ki 1 il",other:"dem\u0259k olar ki {{count}} il"}};e.exports=a.default},266:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,i=(n=t(228))&&n.__esModule?n:{default:n};var r={date:(0,i.default)({formats:{full:"EEEE, do MMMM y 'il'",long:"do MMMM y 'il'",medium:"d MMM y 'il'",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} {{time}} - 'd\u0259'",long:"{{date}} {{time}} - 'd\u0259'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=r,e.exports=a.default},267:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,t,i){return n[e]};var n={lastWeek:"'sonuncu' eeee p -'d\u0259'",yesterday:"'d\xfcn\u0259n' p -'d\u0259'",today:"'bug\xfcn' p -'d\u0259'",tomorrow:"'sabah' p -'d\u0259'",nextWeek:"eeee p -'d\u0259'",other:"P"};e.exports=a.default},268:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,i=(n=t(229))&&n.__esModule?n:{default:n};var r={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-\xfcnc\xfc",4:"-\xfcnc\xfc",100:"-\xfcnc\xfc",6:"-nc\u0131",9:"-uncu",10:"-uncu",30:"-uncu",60:"-\u0131nc\u0131",90:"-\u0131nc\u0131"};var u={ordinalNumber:function(e,a){var t=Number(e);return t+function(e){if(0===e)return e+"-\u0131nc\u0131";var a=e%10;return r[a]||r[e%100-a]||r[e>=100?100:null]}(t)},era:(0,i.default)({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Hz. \u0130sa'dan \xf6nc\u0259","Anno Domini"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ci kvartal","2ci kvartal","3c\xfc kvartal","4c\xfc kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["Y","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","\u0130yun","\u0130yul","Avq","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","\u0130yun","\u0130yul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["B.","B.e","\xc7.a","\xc7.","C.a","C.","\u015e."],short:["B.","B.e","\xc7.a","\xc7.","C.a","C.","\u015e."],abbreviated:["Baz","Baz.e","\xc7\u0259r.a","\xc7\u0259r","C\xfcm.a","C\xfcm","\u015e\u0259"],wide:["Bazar","Bazar ert\u0259si","\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131","\xc7\u0259r\u015f\u0259nb\u0259","C\xfcm\u0259 ax\u015fam\u0131","C\xfcm\u0259","\u015e\u0259nb\u0259"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"am",pm:"pm",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"},abbreviated:{am:"AM",pm:"PM",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"},wide:{am:"a.m.",pm:"p.m.",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"},abbreviated:{am:"AM",pm:"PM",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"},wide:{am:"a.m.",pm:"p.m.",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"}},defaultFormattingWidth:"wide"})};a.default=u,e.exports=a.default},269:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(231)),i=r(t(230));function r(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(-?(ci|inci|nci|uncu|\xfcnc\xfc|nc\u0131))?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(b|a)$/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i,wide:/^(Hz. \u0130sa'dan \xf6nc\u0259|\xfcmumi eradan \u0259vv\u0259l|anno domini|\xfcmumi d\xf6vr)$/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b$/i,/^(a|c)$/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]$/i,abbreviated:/^K[1234]$/i,wide:/^[1234](ci)? kvartal$/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[(?-i)yfmaisond]$/i,abbreviated:/^(Yan|Fev|Mar|Apr|May|\u0130yun|\u0130yul|Avq|Sen|Okt|Noy|Dek)$/i,wide:/^(Yanvar|Fevral|Mart|Aprel|May|\u0130yun|\u0130yul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^[(?-i)y]$/i,/^[(?-i)f]$/i,/^[(?-i)m]$/i,/^[(?-i)a]$/i,/^[(?-i)m]$/i,/^[(?-i)i]$/i,/^[(?-i)i]$/i,/^[(?-i)a]$/i,/^[(?-i)s]$/i,/^[(?-i)o]$/i,/^[(?-i)n]$/i,/^[(?-i)d]$/i],abbreviated:[/^Yan$/i,/^Fev$/i,/^Mar$/i,/^Apr$/i,/^May$/i,/^\u0130yun$/i,/^\u0130yul$/i,/^Avg$/i,/^Sen$/i,/^Okt$/i,/^Noy$/i,/^Dek$/i],wide:[/^Yanvar$/i,/^Fevral$/i,/^Mart$/i,/^Aprel$/i,/^May$/i,/^\u0130yun$/i,/^\u0130yul$/i,/^Avgust$/i,/^Sentyabr$/i,/^Oktyabr$/i,/^Noyabr$/i,/^Dekabr$/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^(B\.|B\.e|\xc7\.a|\xc7\.|C\.a|C\.|\u015e\.)$/i,short:/^(B\.|B\.e|\xc7\.a|\xc7\.|C\.a|C\.|\u015e\.)$/i,abbreviated:/^(Baz\.e|\xc7\u0259r|\xc7\u0259r\.a|C\xfcm|C\xfcm\.a|\u015e\u0259)$/i,wide:/^(Bazar|Bazar ert\u0259si|\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131|\xc7\u0259r\u015f\u0259nb\u0259|C\xfcm\u0259 ax\u015fam\u0131|C\xfcm\u0259|\u015e\u0259nb\u0259)$/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^B\.$/i,/^B\.e$/i,/^\xc7\.a$/i,/^\xc7\.$/i,/^C\.a$/i,/^C\.$/i,/^\u015e\.$/i],abbreviated:[/^Baz\.e$/i,/^\xc7\u0259r$/i,/^\xc7\u0259r\.a$/i,/^C\xfcm$/i,/^C\xfcm\.a$/i,/^\u015e\u0259$/i],wide:[/^Bazar$/i,/^Bazar ert\u0259si$/i,/^\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131$/i,/^\xc7\u0259r\u015f\u0259nb\u0259$/i,/^C\xfcm\u0259 ax\u015fam\u0131$/i,/^C\xfcm\u0259$/i,/^\u015e\u0259nb\u0259$/i],any:[/^B\.$/i,/^B\.e$/i,/^\xc7\.a$/i,/^\xc7\.$/i,/^C\.a$/i,/^C\.$/i,/^\u015e\.$/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|gec\u0259yar\u0131|g\xfcn|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam|gec\u0259)$/i,any:/^(am|pm|a\.m\.|p\.m\.|AM|PM|gec\u0259yar\u0131|g\xfcn|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam|gec\u0259)$/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a$/i,pm:/^p$/i,midnight:/^gec\u0259yar\u0131$/i,noon:/^g\xfcn$/i,morning:/s\u0259h\u0259r$/i,afternoon:/g\xfcnd\xfcz$/i,evening:/ax\u015fam$/i,night:/gec\u0259$/i}},defaultParseWidth:"any"})};a.default=u,e.exports=a.default},873:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(t(265)),i=o(t(266)),r=o(t(267)),u=o(t(268)),d=o(t(269));function o(e){return e&&e.__esModule?e:{default:e}}var l={code:"az",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:u.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};a.default=l,e.exports=a.default}}]);