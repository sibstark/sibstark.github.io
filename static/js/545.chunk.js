(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[545],{1063:function(t,a,e){"use strict";function i(t){return t.replace(/sekuntia?/,"sekunnin")}function n(t){return t.replace(/minuuttia?/,"minuutin")}function u(t){return t.replace(/tuntia?/,"tunnin")}function r(t){return t.replace(/(viikko|viikkoa)/,"viikon")}function l(t){return t.replace(/(kuukausi|kuukautta)/,"kuukauden")}function o(t){return t.replace(/(vuosi|vuotta)/,"vuoden")}e.r(a);var s={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:i},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:i},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(t){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:n},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:n},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:u},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:u},xDays:{one:"p\xe4iv\xe4",other:"{{count}} p\xe4iv\xe4\xe4",futureTense:function(t){return t.replace(/p\xe4iv\xe4\xe4?/,"p\xe4iv\xe4n")}},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:r},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:r},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:l},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:l},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:o},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:o},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:o},almostXYears:{one:"l\xe4hes vuosi",other:"l\xe4hes {{count}} vuotta",futureTense:o}};var k=e(2240),d={date:Object(k.a)({formats:{full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},defaultWidth:"full"}),time:Object(k.a)({formats:{full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},defaultWidth:"full"}),dateTime:Object(k.a)({formats:{full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},m={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'t\xe4n\xe4\xe4n klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"};var c=e(2241),h={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kes\xe4","hein\xe4","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kes\xe4kuu","hein\xe4kuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},f={narrow:h.narrow,abbreviated:h.abbreviated,wide:h.wide.map((function(t){return t+"ta"}))},v={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},p={narrow:v.narrow,short:v.short,abbreviated:v.abbreviated,wide:v.wide.map((function(t){return t+"na"}))};var b={ordinalNumber:function(t){return Number(t)+"."},era:Object(c.a)({values:{narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","j\xe4lkeen ajanlaskun alun"]},defaultWidth:"wide"}),quarter:Object(c.a)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Object(c.a)({values:h,formattingValues:f,defaultWidth:"wide"}),day:Object(c.a)({values:v,formattingValues:p,defaultWidth:"wide"}),dayPeriod:Object(c.a)({values:{narrow:{am:"ap",pm:"ip",midnight:"keskiy\xf6",noon:"keskip\xe4iv\xe4",morning:"ap",afternoon:"ip",evening:"illalla",night:"y\xf6ll\xe4"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiy\xf6",noon:"keskip\xe4iv\xe4",morning:"ap",afternoon:"ip",evening:"illalla",night:"y\xf6ll\xe4"},wide:{am:"ap",pm:"ip",midnight:"keskiy\xf6ll\xe4",noon:"keskip\xe4iv\xe4ll\xe4",morning:"aamup\xe4iv\xe4ll\xe4",afternoon:"iltap\xe4iv\xe4ll\xe4",evening:"illalla",night:"y\xf6ll\xe4"}},defaultWidth:"wide"})},w=e(2242),y=e(2243),g={code:"fi",formatDistance:function(t,a,e){e=e||{};var i=s[t],n=1===a?i.one:i.other.replace("{{count}}",a);return e.addSuffix?e.comparison>0?i.futureTense(n)+" kuluttua":n+" sitten":n},formatLong:d,formatRelative:function(t,a,e,i){return m[t]},localize:b,match:{ordinalNumber:Object(w.a)({matchPattern:/^(\d+)(\.)/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:Object(y.a)({matchPatterns:{narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|j\xe4lkeen ajanlaskun alun)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^e/i,/^j/i]},defaultParseWidth:"any"}),quarter:Object(y.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Object(y.a)({matchPatterns:{narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kes\xe4|hein\xe4|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kes\xe4kuu|hein\xe4kuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},defaultParseWidth:"any"}),day:Object(y.a)({matchPatterns:{narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:Object(y.a)({matchPatterns:{narrow:/^(ap|ip|keskiy\xf6|keskip\xe4iv\xe4|aamup\xe4iv\xe4ll\xe4|iltap\xe4iv\xe4ll\xe4|illalla|y\xf6ll\xe4)/i,any:/^(ap|ip|keskiy\xf6ll\xe4|keskip\xe4iv\xe4ll\xe4|aamup\xe4iv\xe4ll\xe4|iltap\xe4iv\xe4ll\xe4|illalla|y\xf6ll\xe4)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiy\xf6/i,noon:/^keskip\xe4iv\xe4/i,morning:/aamup\xe4iv\xe4ll\xe4/i,afternoon:/iltap\xe4iv\xe4ll\xe4/i,evening:/illalla/i,night:/y\xf6ll\xe4/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=g},2240:function(t,a,e){"use strict";function i(t){return function(a){var e=a||{},i=e.width?String(e.width):t.defaultWidth;return t.formats[i]||t.formats[t.defaultWidth]}}e.d(a,"a",(function(){return i}))},2241:function(t,a,e){"use strict";function i(t){return function(a,e){var i,n=e||{};if("formatting"===(n.context?String(n.context):"standalone")&&t.formattingValues){var u=t.defaultFormattingWidth||t.defaultWidth,r=n.width?String(n.width):u;i=t.formattingValues[r]||t.formattingValues[u]}else{var l=t.defaultWidth,o=n.width?String(n.width):t.defaultWidth;i=t.values[o]||t.values[l]}return i[t.argumentCallback?t.argumentCallback(a):a]}}e.d(a,"a",(function(){return i}))},2242:function(t,a,e){"use strict";function i(t){return function(a,e){var i=String(a),n=e||{},u=i.match(t.matchPattern);if(!u)return null;var r=u[0],l=i.match(t.parsePattern);if(!l)return null;var o=t.valueCallback?t.valueCallback(l[0]):l[0];return{value:o=n.valueCallback?n.valueCallback(o):o,rest:i.slice(r.length)}}}e.d(a,"a",(function(){return i}))},2243:function(t,a,e){"use strict";function i(t){return function(a,e){var i=String(a),n=e||{},u=n.width,r=u&&t.matchPatterns[u]||t.matchPatterns[t.defaultMatchWidth],l=i.match(r);if(!l)return null;var o,s=l[0],k=u&&t.parsePatterns[u]||t.parsePatterns[t.defaultParseWidth];return o="[object Array]"===Object.prototype.toString.call(k)?function(t,a){for(var e=0;e<t.length;e++)if(a(t[e]))return e}(k,(function(t){return t.test(s)})):function(t,a){for(var e in t)if(t.hasOwnProperty(e)&&a(t[e]))return e}(k,(function(t){return t.test(s)})),o=t.valueCallback?t.valueCallback(o):o,{value:o=n.valueCallback?n.valueCallback(o):o,rest:i.slice(s.length)}}}e.d(a,"a",(function(){return i}))}}]);