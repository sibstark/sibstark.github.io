(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[504,653],{1216:function(a,e,t){"use strict";t.r(e);var n=t(853);e.default=n.default},853:function(a,e,t){"use strict";t.r(e);var n={lessThanXSeconds:{one:"bir saniyeden az",other:"{{count}} saniyeden az"},xSeconds:{one:"1 saniye",other:"{{count}} saniye"},halfAMinute:"yar\u0131m dakika",lessThanXMinutes:{one:"bir dakikadan az",other:"{{count}} dakikadan az"},xMinutes:{one:"1 dakika",other:"{{count}} dakika"},aboutXHours:{one:"yakla\u015f\u0131k 1 saat",other:"yakla\u015f\u0131k {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 g\xfcn",other:"{{count}} g\xfcn"},aboutXWeeks:{one:"yakla\u015f\u0131k 1 hafta",other:"yakla\u015f\u0131k {{count}} hafta"},xWeeks:{one:"1 hafta",other:"{{count}} hafta"},aboutXMonths:{one:"yakla\u015f\u0131k 1 ay",other:"yakla\u015f\u0131k {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"yakla\u015f\u0131k 1 y\u0131l",other:"yakla\u015f\u0131k {{count}} y\u0131l"},xYears:{one:"1 y\u0131l",other:"{{count}} y\u0131l"},overXYears:{one:"1 y\u0131ldan fazla",other:"{{count}} y\u0131ldan fazla"},almostXYears:{one:"neredeyse 1 y\u0131l",other:"neredeyse {{count}} y\u0131l"}};var i=t(110),r={date:Object(i.a)({formats:{full:"d MMMM y EEEE",long:"d MMMM y",medium:"d MMM y",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:Object(i.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(i.a)({formats:{full:"{{date}} 'saat' {{time}}",long:"{{date}} 'saat' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'ge\xe7en hafta' eeee 'saat' p",yesterday:"'d\xfcn saat' p",today:"'bug\xfcn saat' p",tomorrow:"'yar\u0131n saat' p",nextWeek:"eeee 'saat' p",other:"P"};var s=t(82);var d={ordinalNumber:function(a,e){return Number(a)+"."},era:Object(s.a)({values:{abbreviated:["M\xd6","MS"],narrow:["M\xd6","MS"],wide:["Milattan \xd6nce","Milattan Sonra"]},defaultWidth:"wide"}),quarter:Object(s.a)({values:{narrow:["1","2","3","4"],abbreviated:["1\xc7","2\xc7","3\xc7","4\xc7"],wide:["\u0130lk \xe7eyrek","\u0130kinci \xc7eyrek","\xdc\xe7\xfcnc\xfc \xe7eyrek","Son \xe7eyrek"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:Object(s.a)({values:{narrow:["O","\u015e","M","N","M","H","T","A","E","E","K","A"],abbreviated:["Oca","\u015eub","Mar","Nis","May","Haz","Tem","A\u011fu","Eyl","Eki","Kas","Ara"],wide:["Ocak","\u015eubat","Mart","Nisan","May\u0131s","Haziran","Temmuz","A\u011fustos","Eyl\xfcl","Ekim","Kas\u0131m","Aral\u0131k"]},defaultWidth:"wide"}),day:Object(s.a)({values:{narrow:["P","P","S","\xc7","P","C","C"],short:["Pz","Pt","Sa","\xc7a","Pe","Cu","Ct"],abbreviated:["Paz","Pts","Sal","\xc7ar","Per","Cum","Cts"],wide:["Pazar","Pazartesi","Sal\u0131","\xc7ar\u015famba","Per\u015fembe","Cuma","Cumartesi"]},defaultWidth:"wide"}),dayPeriod:Object(s.a)({values:{narrow:{am:"\xf6\xf6",pm:"\xf6s",midnight:"gy",noon:"\xf6",morning:"sa",afternoon:"\xf6s",evening:"ak",night:"ge"},abbreviated:{am:"\xd6\xd6",pm:"\xd6S",midnight:"gece yar\u0131s\u0131",noon:"\xf6\u011fle",morning:"sabah",afternoon:"\xf6\u011fleden sonra",evening:"ak\u015fam",night:"gece"},wide:{am:"\xd6.\xd6.",pm:"\xd6.S.",midnight:"gece yar\u0131s\u0131",noon:"\xf6\u011fle",morning:"sabah",afternoon:"\xf6\u011fleden sonra",evening:"ak\u015fam",night:"gece"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\xf6\xf6",pm:"\xf6s",midnight:"gy",noon:"\xf6",morning:"sa",afternoon:"\xf6s",evening:"ak",night:"ge"},abbreviated:{am:"\xd6\xd6",pm:"\xd6S",midnight:"gece yar\u0131s\u0131",noon:"\xf6\u011flen",morning:"sabahleyin",afternoon:"\xf6\u011fleden sonra",evening:"ak\u015famleyin",night:"geceleyin"},wide:{am:"\xf6.\xf6.",pm:"\xf6.s.",midnight:"gece yar\u0131s\u0131",noon:"\xf6\u011flen",morning:"sabahleyin",afternoon:"\xf6\u011fleden sonra",evening:"ak\u015famleyin",night:"geceleyin"}},defaulFormattingWidth:"wide"})},m=t(182),l=t(83),u={code:"tr",formatDistance:function(a,e,t){var i;return t=t||{},i="string"===typeof n[a]?n[a]:1===e?n[a].one:n[a].other.replace("{{count}}",e),t.addSuffix?t.comparison>0?i+" sonra":i+" \xf6nce":i},formatLong:r,formatRelative:function(a,e,t,n){return o[a]},localize:d,match:{ordinalNumber:Object(m.a)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:Object(l.a)({matchPatterns:{narrow:/^(m\xf6|ms)/i,abbreviated:/^(m\xf6|ms)/i,wide:/^(milattan \xf6nce|milattan sonra)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(^m\xf6|^milattan \xf6nce)/i,/(^ms|^milattan sonra)/i]},defaultParseWidth:"any"}),quarter:Object(l.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\xe7/i,wide:/^((i|\u0130)lk|(i|\u0130)kinci|\xfc\xe7\xfcnc\xfc|son) \xe7eyrek/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i],abbreviated:[/1\xe7/i,/2\xe7/i,/3\xe7/i,/4\xe7/i],wide:[/^(i|\u0130)lk \xe7eyrek/i,/(i|\u0130)kinci \xe7eyrek/i,/\xfc\xe7\xfcnc\xfc \xe7eyrek/i,/son \xe7eyrek/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:Object(l.a)({matchPatterns:{narrow:/^[o\u015fmnhtaek]/i,abbreviated:/^(oca|\u015fub|mar|nis|may|haz|tem|a\u011fu|eyl|eki|kas|ara)/i,wide:/^(ocak|\u015fubat|mart|nisan|may\u0131s|haziran|temmuz|a\u011fustos|eyl\xfcl|ekim|kas\u0131m|aral\u0131k)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^o/i,/^\u015f/i,/^m/i,/^n/i,/^m/i,/^h/i,/^t/i,/^a/i,/^e/i,/^e/i,/^k/i,/^a/i],any:[/^o/i,/^\u015f/i,/^mar/i,/^n/i,/^may/i,/^h/i,/^t/i,/^a\u011f/i,/^ey/i,/^ek/i,/^k/i,/^ar/i]},defaultParseWidth:"any"}),day:Object(l.a)({matchPatterns:{narrow:/^[ps\xe7c]/i,short:/^(pz|pt|sa|\xe7a|pe|cu|ct)/i,abbreviated:/^(paz|pts|sal|\xe7ar|per|cum|cts)/i,wide:/^(pazar|pazartesi|sal\u0131|\xe7ar\u015famba|per\u015fembe|cuma|cumartesi)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^p/i,/^p/i,/^s/i,/^\xe7/i,/^p/i,/^c/i,/^c/i],any:[/^pz/i,/^pt/i,/^sa/i,/^\xe7a/i,/^pe/i,/^cu/i,/^ct/i],wide:[/^pazar/i,/^pazartesi/i,/^sal\u0131/i,/^\xe7ar\u015famba/i,/^per\u015fembe/i,/^cuma/i,/cumartesi/i]},defaultParseWidth:"any"}),dayPeriod:Object(l.a)({matchPatterns:{narrow:/^(\xf6\xf6|\xf6s|gy|\xf6|sa|\xf6s|ak|ge)/i,any:/^(\xf6\.?\s?[\xf6s]\.?|\xf6\u011fleden sonra|gece yar\u0131s\u0131|\xf6\u011fle|(sabah|\xf6\u011f|ak\u015fam|gece)(leyin))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\xf6\.?\xf6\.?/i,pm:/^\xf6\.?s\.?/i,midnight:/^(gy|gece yar\u0131s\u0131)/i,noon:/^\xf6\u011f/i,morning:/^sa/i,afternoon:/^\xf6\u011fleden sonra/i,evening:/^ak/i,night:/^ge/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=u}}]);