(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[601],{805:function(e,t,n){"use strict";n.r(t);var a={lessThanXSeconds:{standalone:{one:"weniger als eine Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als einer Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"eine Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"einer Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als eine Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als einer Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"eine Minute",other:"{{count}} Minuten"},withPreposition:{one:"einer Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa eine Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa einer Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"eine Stunde",other:"{{count}} Stunden"},withPreposition:{one:"einer Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"ein Tag",other:"{{count}} Tage"},withPreposition:{one:"einem Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa ein Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa einem Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"ein Woche",other:"{{count}} Wochen"},withPreposition:{one:"einem Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa ein Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa einem Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"ein Monat",other:"{{count}} Monate"},withPreposition:{one:"einem Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa ein Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa einem Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"ein Jahr",other:"{{count}} Jahre"},withPreposition:{one:"einem Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als ein Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als einem Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast ein Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast einem Jahr",other:"fast {{count}} Jahren"}}};var i=n(110),o={date:Object(i.a)({formats:{full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM. y",short:"dd.MM.y"},defaultWidth:"full"}),time:Object(i.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(i.a)({formats:{full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},r={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"};var h=n(82);var s={ordinalNumber:function(e,t){return Number(e)+"."},era:Object(h.a)({values:{narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},defaultWidth:"wide"}),quarter:Object(h.a)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(h.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},defaultWidth:"wide"}),day:Object(h.a)({values:{narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},defaultWidth:"wide"}),dayPeriod:Object(h.a)({values:{narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},defaultWidth:"wide",formattingValues:{narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},defaultFormattingWidth:"wide"})},d=n(180),u=n(83),m={code:"de",formatDistance:function(e,t,n){var i,o=(n=n||{}).addSuffix?a[e].withPreposition:a[e].standalone;return i="string"===typeof o?o:1===t?o.one:o.other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+i:"vor "+i:i},formatLong:o,formatRelative:function(e,t,n,a){return r[e]},localize:s,match:{ordinalNumber:Object(d.a)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(u.a)({matchPatterns:{narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/i,/^n/i]},defaultParseWidth:"any"}),quarter:Object(u.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(u.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|m\xe4r|apr|mai|jun|jul|aug|sep|okt|nov|dez)/i,wide:/^(januar|februar|m\xe4rz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^m\xe4r/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(u.a)({matchPatterns:{narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Object(u.a)({matchPatterns:{narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=m}}]);