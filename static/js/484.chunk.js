(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[484,633],{1172:function(e,t,a){"use strict";a.r(t);var i=a(832);t.default=i.default},832:function(e,t,a){"use strict";function i(e){return function(t,a){if(1===t)return a.addSuffix?e.one[0].replace("{{time}}",e.one[2]):e.one[0].replace("{{time}}",e.one[1]);var i=t%10===1&&t%100!==11;return a.addSuffix?e.other[0].replace("{{time}}",i?e.other[3]:e.other[4]).replace("{{count}}",t):e.other[0].replace("{{time}}",i?e.other[1]:e.other[2]).replace("{{count}}",t)}}a.r(t);var n={lessThanXSeconds:i({one:["maz\u0101k par {{time}}","sekundi","sekundi"],other:["maz\u0101k nek\u0101 {{count}} {{time}}","sekunde","sekundes","sekundes","sekund\u0113m"]}),xSeconds:i({one:["1 {{time}}","sekunde","sekundes"],other:["{{count}} {{time}}","sekunde","sekundes","sekundes","sekund\u0113m"]}),halfAMinute:function(e,t){return t.addSuffix?"pusmin\u016btes":"pusmin\u016bte"},lessThanXMinutes:i({one:["maz\u0101k par {{time}}","min\u016bti","min\u016bti"],other:["maz\u0101k nek\u0101 {{count}} {{time}}","min\u016bte","min\u016btes","min\u016btes","min\u016bt\u0113m"]}),xMinutes:i({one:["1 {{time}}","min\u016bte","min\u016btes"],other:["{{count}} {{time}}","min\u016bte","min\u016btes","min\u016btes","min\u016bt\u0113m"]}),aboutXHours:i({one:["apm\u0113ram 1 {{time}}","stunda","stundas"],other:["apm\u0113ram {{count}} {{time}}","stunda","stundas","stundas","stund\u0101m"]}),xHours:i({one:["1 {{time}}","stunda","stundas"],other:["{{count}} {{time}}","stunda","stundas","stundas","stund\u0101m"]}),xDays:i({one:["1 {{time}}","diena","dienas"],other:["{{count}} {{time}}","diena","dienas","dienas","dien\u0101m"]}),aboutXWeeks:i({one:["apm\u0113ram 1 {{time}}","ned\u0113\u013ca","ned\u0113\u013cas"],other:["apm\u0113ram {{count}} {{time}}","ned\u0113\u013ca","ned\u0113\u013cu","ned\u0113\u013cas","ned\u0113\u013c\u0101m"]}),xWeeks:i({one:["1 {{time}}","ned\u0113\u013ca","ned\u0113\u013cas"],other:["{{count}} {{time}}","ned\u0113\u013ca","ned\u0113\u013cu","ned\u0113\u013cas","ned\u0113\u013c\u0101m"]}),aboutXMonths:i({one:["apm\u0113ram 1 {{time}}","m\u0113nesis","m\u0113ne\u0161a"],other:["apm\u0113ram {{count}} {{time}}","m\u0113nesis","m\u0113ne\u0161i","m\u0113ne\u0161a","m\u0113ne\u0161iem"]}),xMonths:i({one:["1 {{time}}","m\u0113nesis","m\u0113ne\u0161a"],other:["{{count}} {{time}}","m\u0113nesis","m\u0113ne\u0161i","m\u0113ne\u0161a","m\u0113ne\u0161iem"]}),aboutXYears:i({one:["apm\u0113ram 1 {{time}}","gads","gada"],other:["apm\u0113ram {{count}} {{time}}","gads","gadi","gada","gadiem"]}),xYears:i({one:["1 {{time}}","gads","gada"],other:["{{count}} {{time}}","gads","gadi","gada","gadiem"]}),overXYears:i({one:["ilg\u0101k par 1 {{time}}","gadu","gadu"],other:["vair\u0101k nek\u0101 {{count}} {{time}}","gads","gadi","gada","gadiem"]}),almostXYears:i({one:["gandr\u012bz 1 {{time}}","gads","gada"],other:["vair\u0101k nek\u0101 {{count}} {{time}}","gads","gadi","gada","gadiem"]})};var r=a(109),s={date:Object(r.a)({formats:{full:"y. 'gada' M. MMMM., EEEE",long:"y. 'gada' M. MMMM",medium:"dd.MM.y.",short:"dd.MM.y."},defaultWidth:"full"}),time:Object(r.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(r.a)({formats:{full:"{{date}} 'plkst.' {{time}}",long:"{{date}} 'plkst.' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d=a(231),m=["sv\u0113tdien\u0101","pirmdien\u0101","otrdien\u0101","tre\u0161dien\u0101","ceturtdien\u0101","piektdien\u0101","sestdien\u0101"],o={lastWeek:function(e,t,a){return Object(d.a)(e,t,a)?"eeee 'plkst.' p":"'Pag\u0101ju\u0161\u0101 "+m[e.getUTCDay()]+" plkst.' p"},yesterday:"'Vakar plkst.' p",today:"'\u0160odien plkst.' p",tomorrow:"'R\u012bt plkst.' p",nextWeek:function(e,t,a){return Object(d.a)(e,t,a)?"eeee 'plkst.' p":"'N\u0101kamaj\u0101 "+m[e.getUTCDay()]+" plkst.' p"},other:"P"};var u=a(82);var p={ordinalNumber:function(e,t){return e+"."},era:Object(u.a)({values:{narrow:["p.m.\u0113","m.\u0113"],abbreviated:["p. m. \u0113.","m. \u0113."],wide:["pirms m\u016bsu \u0113ras","m\u016bsu \u0113r\u0101"]},defaultWidth:"wide"}),quarter:Object(u.a)({values:{narrow:["1","2","3","4"],abbreviated:["1. cet.","2. cet.","3. cet.","4. cet."],wide:["pirmais ceturksnis","otrais ceturksnis","tre\u0161ais ceturksnis","ceturtais ceturksnis"]},defaultWidth:"wide",formattingValues:{narrow:["1","2","3","4"],abbreviated:["1. cet.","2. cet.","3. cet.","4. cet."],wide:["pirmaj\u0101 ceturksn\u012b","otraj\u0101 ceturksn\u012b","tre\u0161aj\u0101 ceturksn\u012b","ceturtaj\u0101 ceturksn\u012b"]},defaultFormattingWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(u.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","febr.","marts","apr.","maijs","j\u016bn.","j\u016bl.","aug.","sept.","okt.","nov.","dec."],wide:["janv\u0101ris","febru\u0101ris","marts","apr\u012blis","maijs","j\u016bnijs","j\u016blijs","augusts","septembris","oktobris","novembris","decembris"]},defaultWidth:"wide",formattingValues:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","febr.","mart\u0101","apr.","maijs","j\u016bn.","j\u016bl.","aug.","sept.","okt.","nov.","dec."],wide:["janv\u0101r\u012b","febru\u0101r\u012b","mart\u0101","apr\u012bl\u012b","maij\u0101","j\u016bnij\u0101","j\u016blij\u0101","august\u0101","septembr\u012b","oktobr\u012b","novembr\u012b","decembr\u012b"]},defaultFormattingWidth:"wide"}),day:Object(u.a)({values:{narrow:["S","P","O","T","C","P","S"],short:["Sv","P","O","T","C","Pk","S"],abbreviated:["sv\u0113td.","pirmd.","otrd.","tre\u0161d.","ceturtd.","piektd.","sestd."],wide:["sv\u0113tdiena","pirmdiena","otrdiena","tre\u0161diena","ceturtdiena","piektdiena","sestdiena"]},defaultWidth:"wide",formattingValues:{narrow:["S","P","O","T","C","P","S"],short:["Sv","P","O","T","C","Pk","S"],abbreviated:["sv\u0113td.","pirmd.","otrd.","tre\u0161d.","ceturtd.","piektd.","sestd."],wide:["sv\u0113tdien\u0101","pirmdien\u0101","otrdien\u0101","tre\u0161dien\u0101","ceturtdien\u0101","piektdien\u0101","sestdien\u0101"]},defaultFormattingWidth:"wide"}),dayPeriod:Object(u.a)({values:{narrow:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"r\u012bts",afternoon:"diena",evening:"vakars",night:"nakts"},abbreviated:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"r\u012bts",afternoon:"p\u0113cpusd.",evening:"vakars",night:"nakts"},wide:{am:"am",pm:"pm",midnight:"pusnakts",noon:"pusdienlaiks",morning:"r\u012bts",afternoon:"p\u0113cpusdiena",evening:"vakars",night:"nakts"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"r\u012bt\u0101",afternoon:"dien\u0101",evening:"vakar\u0101",night:"nakt\u012b"},abbreviated:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"r\u012bt\u0101",afternoon:"p\u0113cpusd.",evening:"vakar\u0101",night:"nakt\u012b"},wide:{am:"am",pm:"pm",midnight:"pusnakt\u012b",noon:"pusdienlaik\u0101",morning:"r\u012bt\u0101",afternoon:"p\u0113cpusdien\u0101",evening:"vakar\u0101",night:"nakt\u012b"}},defaultFormattingWidth:"wide"})},c=a(181),l=a(83),k={code:"lv",formatDistance:function(e,t,a){a=a||{};var i=n[e](t,a);return a.addSuffix?a.comparison>0?"p\u0113c "+i:"pirms "+i:i},formatLong:s,formatRelative:function(e,t,a,i){var n=o[e];return"function"===typeof n?n(t,a,i):n},localize:p,match:{ordinalNumber:Object(c.a)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(l.a)({matchPatterns:{narrow:/^(p\.m\.\u0113|m\.\u0113)/i,abbreviated:/^(p\. m\. \u0113\.|m\. \u0113\.)/i,wide:/^(pirms m\u016bsu \u0113ras|m\u016bsu \u0113r\u0101)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^m/i]},defaultParseWidth:"any"}),quarter:Object(l.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](\. cet\.)/i,wide:/^(pirma(is|j\u0101)|otra(is|j\u0101)|tre\u0161a(is|j\u0101)|ceturta(is|j\u0101)) ceturksn(is|\u012b)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^1/i,/^2/i,/^3/i,/^4/i],abbreviated:[/^1/i,/^2/i,/^3/i,/^4/i],wide:[/^p/i,/^o/i,/^t/i,/^c/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(l.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(janv\.|febr\.|marts|apr\.|maijs|j\u016bn\.|j\u016bl\.|aug\.|sept\.|okt\.|nov\.|dec\.)/i,wide:/^(janv\u0101r(is|\u012b)|febru\u0101r(is|\u012b)|mart[s\u0101]|apr\u012bl(is|\u012b)|maij[s\u0101]|j\u016bnij[s\u0101]|j\u016blij[s\u0101]|august[s\u0101]|septembr(is|\u012b)|oktobr(is|\u012b)|novembr(is|\u012b)|decembr(is|\u012b))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^j\u016bn/i,/^j\u016bl/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(l.a)({matchPatterns:{narrow:/^[spotc]/i,short:/^(sv|pi|o|t|c|pk|s)/i,abbreviated:/^(sv\u0113td\.|pirmd\.|otrd.\|tre\u0161d\.|ceturtd\.|piektd\.|sestd\.)/i,wide:/^(sv\u0113tdien(a|\u0101)|pirmdien(a|\u0101)|otrdien(a|\u0101)|tre\u0161dien(a|\u0101)|ceturtdien(a|\u0101)|piektdien(a|\u0101)|sestdien(a|\u0101))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^p/i,/^o/i,/^t/i,/^c/i,/^p/i,/^s/i],any:[/^sv/i,/^pi/i,/^o/i,/^t/i,/^c/i,/^p/i,/^se/i]},defaultParseWidth:"any"}),dayPeriod:Object(l.a)({matchPatterns:{narrow:/^(am|pm|pusn\.|pusd\.|r\u012bt(s|\u0101)|dien(a|\u0101)|vakar(s|\u0101)|nakt(s|\u012b))/,abbreviated:/^(am|pm|pusn\.|pusd\.|r\u012bt(s|\u0101)|p\u0113cpusd\.|vakar(s|\u0101)|nakt(s|\u012b))/,wide:/^(am|pm|pusnakt(s|\u012b)|pusdienlaik(s|\u0101)|r\u012bt(s|\u0101)|p\u0113cpusdien(a|\u0101)|vakar(s|\u0101)|nakt(s|\u012b))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/^pusn/i,noon:/^pusd/i,morning:/^r/i,afternoon:/^(d|p\u0113c)/i,evening:/^v/i,night:/^n/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=k}}]);