(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[464,613],{1127:function(e,a,t){"use strict";t.r(a);var i=t(811);a.default=i.default},811:function(e,a,t){"use strict";function i(e){return e.replace(/sekuntia?/,"sekunnin")}function n(e){return e.replace(/minuuttia?/,"minuutin")}function u(e){return e.replace(/tuntia?/,"tunnin")}function r(e){return e.replace(/(viikko|viikkoa)/,"viikon")}function o(e){return e.replace(/(kuukausi|kuukautta)/,"kuukauden")}function l(e){return e.replace(/(vuosi|vuotta)/,"vuoden")}t.r(a);var s={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:i},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:i},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(e){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:n},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:n},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:u},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:u},xDays:{one:"p\xe4iv\xe4",other:"{{count}} p\xe4iv\xe4\xe4",futureTense:function(e){return e.replace(/p\xe4iv\xe4\xe4?/,"p\xe4iv\xe4n")}},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:r},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:r},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:o},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:o},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:l},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:l},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:l},almostXYears:{one:"l\xe4hes vuosi",other:"l\xe4hes {{count}} vuotta",futureTense:l}};var k=t(109),d={date:Object(k.a)({formats:{full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},defaultWidth:"full"}),time:Object(k.a)({formats:{full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},defaultWidth:"full"}),dateTime:Object(k.a)({formats:{full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},m={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'t\xe4n\xe4\xe4n klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"};var h=t(81),c={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kes\xe4","hein\xe4","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kes\xe4kuu","hein\xe4kuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},p={narrow:c.narrow,abbreviated:c.abbreviated,wide:c.wide.map((function(e){return e+"ta"}))},f={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},v={narrow:f.narrow,short:f.short,abbreviated:f.abbreviated,wide:f.wide.map((function(e){return e+"na"}))};var b={ordinalNumber:function(e){return Number(e)+"."},era:Object(h.a)({values:{narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","j\xe4lkeen ajanlaskun alun"]},defaultWidth:"wide"}),quarter:Object(h.a)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(h.a)({values:c,formattingValues:p,defaultWidth:"wide"}),day:Object(h.a)({values:f,formattingValues:v,defaultWidth:"wide"}),dayPeriod:Object(h.a)({values:{narrow:{am:"ap",pm:"ip",midnight:"keskiy\xf6",noon:"keskip\xe4iv\xe4",morning:"ap",afternoon:"ip",evening:"illalla",night:"y\xf6ll\xe4"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiy\xf6",noon:"keskip\xe4iv\xe4",morning:"ap",afternoon:"ip",evening:"illalla",night:"y\xf6ll\xe4"},wide:{am:"ap",pm:"ip",midnight:"keskiy\xf6ll\xe4",noon:"keskip\xe4iv\xe4ll\xe4",morning:"aamup\xe4iv\xe4ll\xe4",afternoon:"iltap\xe4iv\xe4ll\xe4",evening:"illalla",night:"y\xf6ll\xe4"}},defaultWidth:"wide"})},y=t(181),w=t(82),j={code:"fi",formatDistance:function(e,a,t){t=t||{};var i=s[e],n=1===a?i.one:i.other.replace("{{count}}",a);return t.addSuffix?t.comparison>0?i.futureTense(n)+" kuluttua":n+" sitten":n},formatLong:d,formatRelative:function(e,a,t,i){return m[e]},localize:b,match:{ordinalNumber:Object(y.a)({matchPattern:/^(\d+)(\.)/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(w.a)({matchPatterns:{narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|j\xe4lkeen ajanlaskun alun)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^e/i,/^j/i]},defaultParseWidth:"any"}),quarter:Object(w.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(w.a)({matchPatterns:{narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kes\xe4|hein\xe4|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kes\xe4kuu|hein\xe4kuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},defaultParseWidth:"any"}),day:Object(w.a)({matchPatterns:{narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:Object(w.a)({matchPatterns:{narrow:/^(ap|ip|keskiy\xf6|keskip\xe4iv\xe4|aamup\xe4iv\xe4ll\xe4|iltap\xe4iv\xe4ll\xe4|illalla|y\xf6ll\xe4)/i,any:/^(ap|ip|keskiy\xf6ll\xe4|keskip\xe4iv\xe4ll\xe4|aamup\xe4iv\xe4ll\xe4|iltap\xe4iv\xe4ll\xe4|illalla|y\xf6ll\xe4)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiy\xf6/i,noon:/^keskip\xe4iv\xe4/i,morning:/aamup\xe4iv\xe4ll\xe4/i,afternoon:/iltap\xe4iv\xe4ll\xe4/i,evening:/illalla/i,night:/y\xf6ll\xe4/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=j}}]);