(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[555],{1573:function(e,t,a){"use strict";function n(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}a.d(t,"a",(function(){return n}))},1574:function(e,t,a){"use strict";function n(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,s=r.width?String(r.width):i;n=e.formattingValues[s]||e.formattingValues[i]}else{var d=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;n=e.values[l]||e.values[d]}return n[e.argumentCallback?e.argumentCallback(t):t]}}a.d(t,"a",(function(){return n}))},1575:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),r=a||{},i=n.match(e.matchPattern);if(!i)return null;var s=i[0],d=n.match(e.parsePattern);if(!d)return null;var l=e.valueCallback?e.valueCallback(d[0]):d[0];return{value:l=r.valueCallback?r.valueCallback(l):l,rest:n.slice(s.length)}}}a.d(t,"a",(function(){return n}))},1576:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),r=a||{},i=r.width,s=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],d=n.match(s);if(!d)return null;var l,u=d[0],o=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(o)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(o,(function(e){return e.test(u)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(o,(function(e){return e.test(u)})),l=e.valueCallback?e.valueCallback(l):l,{value:l=r.valueCallback?r.valueCallback(l):l,rest:n.slice(u.length)}}}a.d(t,"a",(function(){return n}))},763:function(e,t,a){"use strict";a.r(t);var n={about:"k\xf6r\xfclbel\xfcl",over:"t\xf6bb mint",almost:"majdnem",lessthan:"kevesebb mint"},r={xseconds:" m\xe1sodperc",halfaminute:"f\xe9l perc",xminutes:" perc",xhours:" \xf3ra",xdays:" nap",xweeks:" h\xe9t",xmonths:" h\xf3nap",xyears:" \xe9v"},i={xseconds:{"-1":" m\xe1sodperccel ezel\u0151tt",1:" m\xe1sodperc m\xfalva",0:" m\xe1sodperce"},halfaminute:{"-1":"f\xe9l perccel ezel\u0151tt",1:"f\xe9l perc m\xfalva",0:"f\xe9l perce"},xminutes:{"-1":" perccel ezel\u0151tt",1:" perc m\xfalva",0:" perce"},xhours:{"-1":" \xf3r\xe1val ezel\u0151tt",1:" \xf3ra m\xfalva",0:" \xf3r\xe1ja"},xdays:{"-1":" nappal ezel\u0151tt",1:" nap m\xfalva",0:" napja"},xweeks:{"-1":" h\xe9ttel ezel\u0151tt",1:" h\xe9t m\xfalva",0:" hete"},xmonths:{"-1":" h\xf3nappal ezel\u0151tt",1:" h\xf3nap m\xfalva",0:" h\xf3napja"},xyears:{"-1":" \xe9vvel ezel\u0151tt",1:" \xe9v m\xfalva",0:" \xe9ve"}};var s=a(1573),d={date:Object(s.a)({formats:{full:"y. MMMM d., EEEE",long:"y. MMMM d.",medium:"y. MMM d.",short:"y. MM. dd."},defaultWidth:"full"}),time:Object(s.a)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:Object(s.a)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},l=["vas\xe1rnap","h\xe9tf\u0151n","kedden","szerd\xe1n","cs\xfct\xf6rt\xf6k\xf6n","p\xe9nteken","szombaton"];function u(e){return function(t,a,n){var r=t.getUTCDay();return(e?"":"'m\xfalt' ")+"'"+l[r]+"' p'-kor'"}}var o={lastWeek:u(!1),yesterday:"'tegnap' p'-kor'",today:"'ma' p'-kor'",tomorrow:"'holnap' p'-kor'",nextWeek:u(!0),other:"P"};var c=a(1574);var m={ordinalNumber:function(e,t){return Number(e)+"."},era:Object(c.a)({values:{narrow:["ie.","isz."],abbreviated:["i. e.","i. sz."],wide:["Krisztus el\u0151tt","id\u0151sz\xe1m\xedt\xe1sunk szerint"]},defaultWidth:"wide"}),quarter:Object(c.a)({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. n.\xe9v","2. n.\xe9v","3. n.\xe9v","4. n.\xe9v"],wide:["1. negyed\xe9v","2. negyed\xe9v","3. negyed\xe9v","4. negyed\xe9v"]},defaultWidth:"wide",formattingValues:{narrow:["I.","II.","III.","IV."],abbreviated:["I. n.\xe9v","II. n.\xe9v","III. n.\xe9v","IV. n.\xe9v"],wide:["I. negyed\xe9v","II. negyed\xe9v","III. negyed\xe9v","IV. negyed\xe9v"]},argumentCallback:function(e){return Number(e)-1}}),month:Object(c.a)({values:{narrow:["J","F","M","\xc1","M","J","J","A","Sz","O","N","D"],abbreviated:["jan.","febr.","m\xe1rc.","\xe1pr.","m\xe1j.","j\xfan.","j\xfal.","aug.","szept.","okt.","nov.","dec."],wide:["janu\xe1r","febru\xe1r","m\xe1rcius","\xe1prilis","m\xe1jus","j\xfanius","j\xfalius","augusztus","szeptember","okt\xf3ber","november","december"]},defaultWidth:"wide"}),day:Object(c.a)({values:{narrow:["V","H","K","Sz","Cs","P","Sz"],short:["V","H","K","Sze","Cs","P","Szo"],abbreviated:["V","H","K","Sze","Cs","P","Szo"],wide:["vas\xe1rnap","h\xe9tf\u0151","kedd","szerda","cs\xfct\xf6rt\xf6k","p\xe9ntek","szombat"]},defaultWidth:"wide"}),dayPeriod:Object(c.a)({values:{narrow:{am:"de.",pm:"du.",midnight:"\xe9jf\xe9l",noon:"d\xe9l",morning:"reggel",afternoon:"du.",evening:"este",night:"\xe9jjel"},abbreviated:{am:"de.",pm:"du.",midnight:"\xe9jf\xe9l",noon:"d\xe9l",morning:"reggel",afternoon:"du.",evening:"este",night:"\xe9jjel"},wide:{am:"de.",pm:"du.",midnight:"\xe9jf\xe9l",noon:"d\xe9l",morning:"reggel",afternoon:"d\xe9lut\xe1n",evening:"este",night:"\xe9jjel"}},defaultWidth:"wide",defaultFormattingWidth:"wide"})},f=a(1575),h=a(1576),v={code:"hu",formatDistance:function(e,t,a){a=a||{};var s,d=e.match(/about|over|almost|lessthan/i),l=e.replace(d,"");return s=function(e,t,a,n){var s=t?i[a][n]:r[a];return"halfaminute"===a?s:e+s}(t,a.addSuffix,l.toLowerCase(),a.comparison),d&&(s=n[d[0].toLowerCase()]+" "+s),s},formatLong:d,formatRelative:function(e,t,a,n){var r=o[e];return"function"===typeof r?r(t,a,n):r},localize:m,match:{ordinalNumber:Object(f.a)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(h.a)({matchPatterns:{narrow:/^(ie\.|isz\.)/i,abbreviated:/^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,wide:/^(Krisztus el\u0151tt|id\u0151sz\xe1m\xedt\xe1sunk el\u0151tt|id\u0151sz\xe1m\xedt\xe1sunk szerint|i\. sz\.)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/ie/i,/isz/i],abbreviated:[/^(i\.?\s?e\.?|b\s?ce)/i,/^(i\.?\s?sz\.?|c\s?e)/i],any:[/el\u0151tt/i,/(szerint|i. sz.)/i]},defaultParseWidth:"any"}),quarter:Object(h.a)({matchPatterns:{narrow:/^[1234]\.?/i,abbreviated:/^[1234]?\.?\s?n\.\xe9v/i,wide:/^([1234]|I|II|III|IV)?\.?\s?negyed\xe9v/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1|I$/i,/2|II$/i,/3|III/i,/4|IV/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(h.a)({matchPatterns:{narrow:/^[jfma\xe1sond]|sz/i,abbreviated:/^(jan\.?|febr\.?|m\xe1rc\.?|\xe1pr\.?|m\xe1j\.?|j\xfan\.?|j\xfal\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,wide:/^(janu\xe1r|febru\xe1r|m\xe1rcius|\xe1prilis|m\xe1jus|j\xfanius|j\xfalius|augusztus|szeptember|okt\xf3ber|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a|\xe1/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s|sz/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^m\xe1r/i,/^\xe1p/i,/^m\xe1j/i,/^j\xfan/i,/^j\xfal/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(h.a)({matchPatterns:{narrow:/^([vhkpc]|sz|cs|sz)/i,short:/^([vhkp]|sze|cs|szo)/i,abbreviated:/^([vhkp]|sze|cs|szo)/i,wide:/^(vas\xe1rnap|h\xe9tf\u0151|kedd|szerda|cs\xfct\xf6rt\xf6k|p\xe9ntek|szombat)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^v/i,/^h/i,/^k/i,/^sz/i,/^c/i,/^p/i,/^sz/i],any:[/^v/i,/^h/i,/^k/i,/^sze/i,/^c/i,/^p/i,/^szo/i]},defaultParseWidth:"any"}),dayPeriod:Object(h.a)({matchPatterns:{any:/^((de|du)\.?|\xe9jf\xe9l|d\xe9lut\xe1n|d\xe9l|reggel|este|\xe9jjel)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^de\.?/i,pm:/^du\.?/i,midnight:/^\xe9jf/i,noon:/^d\xe9/i,morning:/reg/i,afternoon:/^d\xe9lu\.?/i,evening:/es/i,night:/\xe9jj/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=v}}]);