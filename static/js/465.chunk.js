(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[465,614],{1133:function(e,i,a){"use strict";a.r(i);var t=a(813);i.default=t.default},813:function(e,i,a){"use strict";a.r(i);var t={lessThanXSeconds:{one:"moins d\u2019une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d\u2019une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d\u2019un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu\u2019un an",other:"presque {{count}} ans"}};var n=a(110),r={date:Object(n.a)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:Object(n.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(n.a)({formats:{full:"{{date}} '\xe0' {{time}}",long:"{{date}} '\xe0' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"eeee 'la semaine derni\xe8re \xe0' p",yesterday:"'hier \xe0' p",today:"'aujourd\u2019hui \xe0' p",tomorrow:"'demain \xe0' p'",nextWeek:"eeee 'la semaine prochaine \xe0' p",other:"P"};var m=a(82);var d={ordinalNumber:function(e,i){var a=Number(e),t=String((i||{}).unit);return 0===a?a:a+("year"===t||"hour"===t||"week"===t?1===a?"\xe8re":"\xe8me":1===a?"er":"\xe8me")},era:Object(m.a)({values:{narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant J\xe9sus-Christ","apr\xe8s J\xe9sus-Christ"]},defaultWidth:"wide"}),quarter:Object(m.a)({values:{narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2\xe8me trim.","3\xe8me trim.","4\xe8me trim."],wide:["1er trimestre","2\xe8me trimestre","3\xe8me trimestre","4\xe8me trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(m.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","f\xe9vr.","mars","avr.","mai","juin","juil.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],wide:["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"]},defaultWidth:"wide"}),day:Object(m.a)({values:{narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},defaultWidth:"wide"}),dayPeriod:Object(m.a)({values:{narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"apr\xe8s-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l\u2019apr\xe8s-midi",evening:"du soir",night:"du matin"}},defaultWidth:"wide"})},s=a(180),u=a(83),l={code:"fr-CH",formatDistance:function(e,i,a){var n;return a=a||{},n="string"===typeof t[e]?t[e]:1===i?t[e].one:t[e].other.replace("{{count}}",i),a.addSuffix?a.comparison>0?"dans "+n:"il y a "+n:n},formatLong:r,formatRelative:function(e,i,a,t){return o[e]},localize:d,match:{ordinalNumber:Object(s.a)({matchPattern:/^(\d+)(i\xe8me|\xe8re|\xe8me|er|e)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(u.a)({matchPatterns:{narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant J\xe9sus-Christ|apr\xe8s J\xe9sus-Christ)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^av/i,/^ap/i]},defaultParseWidth:"any"}),quarter:Object(u.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](er|\xe8me|e)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(u.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(janv|f\xe9vr|mars|avr|mai|juin|juill|juil|ao\xfbt|sept|oct|nov|d\xe9c)\.?/i,wide:/^(janvier|f\xe9vrier|mars|avril|mai|juin|juillet|ao\xfbt|septembre|octobre|novembre|d\xe9cembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(u.a)({matchPatterns:{narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Object(u.a)({matchPatterns:{narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'apr\xe8s[-\s]midi|du soir|de la nuit)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};i.default=l}}]);