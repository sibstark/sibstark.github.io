(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[471],{1571:function(e,t,a){"use strict";function i(e){return function(t){var a=t||{},i=a.width?String(a.width):e.defaultWidth;return e.formats[i]||e.formats[e.defaultWidth]}}a.d(t,"a",(function(){return i}))},1572:function(e,t,a){"use strict";function i(e){return function(t,a){var i,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,u=n.width?String(n.width):r;i=e.formattingValues[u]||e.formattingValues[r]}else{var o=e.defaultWidth,s=n.width?String(n.width):e.defaultWidth;i=e.values[s]||e.values[o]}return i[e.argumentCallback?e.argumentCallback(t):t]}}a.d(t,"a",(function(){return i}))},1573:function(e,t,a){"use strict";function i(e){return function(t,a){var i=String(t),n=a||{},r=i.match(e.matchPattern);if(!r)return null;var u=r[0],o=i.match(e.parsePattern);if(!o)return null;var s=e.valueCallback?e.valueCallback(o[0]):o[0];return{value:s=n.valueCallback?n.valueCallback(s):s,rest:i.slice(u.length)}}}a.d(t,"a",(function(){return i}))},1574:function(e,t,a){"use strict";function i(e){return function(t,a){var i=String(t),n=a||{},r=n.width,u=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=i.match(u);if(!o)return null;var s,d=o[0],m=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(m)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(m,(function(e){return e.test(d)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(m,(function(e){return e.test(d)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=n.valueCallback?n.valueCallback(s):s,rest:i.slice(d.length)}}}a.d(t,"a",(function(){return i}))},1714:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i={lessThanXSeconds:{one:"moins d\u2019une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d\u2019une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d\u2019un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu\u2019un an",other:"presque {{count}} ans"}};function n(e,t,a){var n;return a=a||{},n="string"===typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"dans "+n:"il y a "+n:n}},1715:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i={lastWeek:"eeee 'dernier \xe0' p",yesterday:"'hier \xe0' p",today:"'aujourd\u2019hui \xe0' p",tomorrow:"'demain \xe0' p'",nextWeek:"eeee 'prochain \xe0' p",other:"P"};function n(e,t,a,n){return i[e]}},1716:function(e,t,a){"use strict";var i=a(1572);var n={ordinalNumber:function(e,t){var a=Number(e),i=String((t||{}).unit);return 0===a?a:a+("year"===i||"hour"===i||"week"===i?1===a?"\xe8re":"\xe8me":1===a?"er":"\xe8me")},era:Object(i.a)({values:{narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant J\xe9sus-Christ","apr\xe8s J\xe9sus-Christ"]},defaultWidth:"wide"}),quarter:Object(i.a)({values:{narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2\xe8me trim.","3\xe8me trim.","4\xe8me trim."],wide:["1er trimestre","2\xe8me trimestre","3\xe8me trimestre","4\xe8me trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(i.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","f\xe9vr.","mars","avr.","mai","juin","juil.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],wide:["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"]},defaultWidth:"wide"}),day:Object(i.a)({values:{narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},defaultWidth:"wide"}),dayPeriod:Object(i.a)({values:{narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"apr\xe8s-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l\u2019apr\xe8s-midi",evening:"du soir",night:"du matin"}},defaultWidth:"wide"})};t.a=n},1717:function(e,t,a){"use strict";var i=a(1573),n=a(1574),r={ordinalNumber:Object(i.a)({matchPattern:/^(\d+)(i\xe8me|\xe8re|\xe8me|er|e)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(n.a)({matchPatterns:{narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant J\xe9sus-Christ|apr\xe8s J\xe9sus-Christ)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^av/i,/^ap/i]},defaultParseWidth:"any"}),quarter:Object(n.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](er|\xe8me|e)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(n.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(janv|f\xe9vr|mars|avr|mai|juin|juill|juil|ao\xfbt|sept|oct|nov|d\xe9c)\.?/i,wide:/^(janvier|f\xe9vrier|mars|avril|mai|juin|juillet|ao\xfbt|septembre|octobre|novembre|d\xe9cembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(n.a)({matchPatterns:{narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Object(n.a)({matchPatterns:{narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'apr\xe8s[-\s]midi|du soir|de la nuit)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},defaultParseWidth:"any"})};t.a=r},807:function(e,t,a){"use strict";a.r(t);var i=a(1714),n=a(1715),r=a(1716),u=a(1717),o=a(1571),s={date:Object(o.a)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"yy-MM-dd"},defaultWidth:"full"}),time:Object(o.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(o.a)({formats:{full:"{{date}} '\xe0' {{time}}",long:"{{date}} '\xe0' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={code:"fr-CA",formatDistance:i.a,formatLong:s,formatRelative:n.a,localize:r.a,match:u.a,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=d}}]);