(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[405,42,117,186,226,227,228,229,287,288],{228:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=t||{},r=a.width?String(a.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}},e.exports=t.default},229:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,d=n.width?String(n.width):i;r=e.formattingValues[d]||e.formattingValues[i]}else{var u=e.defaultWidth,l=n.width?String(n.width):e.defaultWidth;r=e.values[l]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},230:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r=String(t),n=a||{},i=n.width,d=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(d);if(!u)return null;var l,s=u[0],o=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(o)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(o,(function(e){return e.test(s)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(o,(function(e){return e.test(s)})),l=e.valueCallback?e.valueCallback(l):l,{value:l=n.valueCallback?n.valueCallback(l):l,rest:r.slice(s.length)}}},e.exports=t.default},231:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r=String(t),n=a||{},i=r.match(e.matchPattern);if(!i)return null;var d=i[0],u=r.match(e.parsePattern);if(!u)return null;var l=e.valueCallback?e.valueCallback(u[0]):u[0];return{value:l=n.valueCallback?n.valueCallback(l):l,rest:r.slice(d.length)}}},e.exports=t.default},387:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){a=a||{};var d,u=e.match(/about|over|almost|lessthan/i),l=e.replace(u,"");d=function(e,t,a,r){var d=t?i[a][r]:n[a];if("halfaminute"===a)return d;return e+d}(t,a.addSuffix,l.toLowerCase(),a.comparison),u&&(d=r[u[0].toLowerCase()]+" "+d);return d};var r={about:"k\xf6r\xfclbel\xfcl",over:"t\xf6bb mint",almost:"majdnem",lessthan:"kevesebb mint"},n={xseconds:" m\xe1sodperc",halfaminute:"f\xe9l perc",xminutes:" perc",xhours:" \xf3ra",xdays:" nap",xweeks:" h\xe9t",xmonths:" h\xf3nap",xyears:" \xe9v"},i={xseconds:{"-1":" m\xe1sodperccel ezel\u0151tt",1:" m\xe1sodperc m\xfalva",0:" m\xe1sodperce"},halfaminute:{"-1":"f\xe9l perccel ezel\u0151tt",1:"f\xe9l perc m\xfalva",0:"f\xe9l perce"},xminutes:{"-1":" perccel ezel\u0151tt",1:" perc m\xfalva",0:" perce"},xhours:{"-1":" \xf3r\xe1val ezel\u0151tt",1:" \xf3ra m\xfalva",0:" \xf3r\xe1ja"},xdays:{"-1":" nappal ezel\u0151tt",1:" nap m\xfalva",0:" napja"},xweeks:{"-1":" h\xe9ttel ezel\u0151tt",1:" h\xe9t m\xfalva",0:" hete"},xmonths:{"-1":" h\xf3nappal ezel\u0151tt",1:" h\xf3nap m\xfalva",0:" h\xf3napja"},xyears:{"-1":" \xe9vvel ezel\u0151tt",1:" \xe9v m\xfalva",0:" \xe9ve"}};e.exports=t.default},388:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(228))&&r.__esModule?r:{default:r};var i={date:(0,n.default)({formats:{full:"y. MMMM d., EEEE",long:"y. MMMM d.",medium:"y. MMM d.",short:"y. MM. dd."},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},389:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,r){var n=i[e];if("function"===typeof n)return n(t,a,r);return n};var r=["vas\xe1rnap","h\xe9tf\u0151n","kedden","szerd\xe1n","cs\xfct\xf6rt\xf6k\xf6n","p\xe9nteken","szombaton"];function n(e){return function(t,a,n){var i=t.getUTCDay();return(e?"":"'m\xfalt' ")+"'"+r[i]+"' p'-kor'"}}var i={lastWeek:n(!1),yesterday:"'tegnap' p'-kor'",today:"'ma' p'-kor'",tomorrow:"'holnap' p'-kor'",nextWeek:n(!0),other:"P"};e.exports=t.default},390:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(229))&&r.__esModule?r:{default:r};var i={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,n.default)({values:{narrow:["ie.","isz."],abbreviated:["i. e.","i. sz."],wide:["Krisztus el\u0151tt","id\u0151sz\xe1m\xedt\xe1sunk szerint"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. n.\xe9v","2. n.\xe9v","3. n.\xe9v","4. n.\xe9v"],wide:["1. negyed\xe9v","2. negyed\xe9v","3. negyed\xe9v","4. negyed\xe9v"]},defaultWidth:"wide",formattingValues:{narrow:["I.","II.","III.","IV."],abbreviated:["I. n.\xe9v","II. n.\xe9v","III. n.\xe9v","IV. n.\xe9v"],wide:["I. negyed\xe9v","II. negyed\xe9v","III. negyed\xe9v","IV. negyed\xe9v"]},argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:{narrow:["J","F","M","\xc1","M","J","J","A","Sz","O","N","D"],abbreviated:["jan.","febr.","m\xe1rc.","\xe1pr.","m\xe1j.","j\xfan.","j\xfal.","aug.","szept.","okt.","nov.","dec."],wide:["janu\xe1r","febru\xe1r","m\xe1rcius","\xe1prilis","m\xe1jus","j\xfanius","j\xfalius","augusztus","szeptember","okt\xf3ber","november","december"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["V","H","K","Sz","Cs","P","Sz"],short:["V","H","K","Sze","Cs","P","Szo"],abbreviated:["V","H","K","Sze","Cs","P","Szo"],wide:["vas\xe1rnap","h\xe9tf\u0151","kedd","szerda","cs\xfct\xf6rt\xf6k","p\xe9ntek","szombat"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"de.",pm:"du.",midnight:"\xe9jf\xe9l",noon:"d\xe9l",morning:"reggel",afternoon:"du.",evening:"este",night:"\xe9jjel"},abbreviated:{am:"de.",pm:"du.",midnight:"\xe9jf\xe9l",noon:"d\xe9l",morning:"reggel",afternoon:"du.",evening:"este",night:"\xe9jjel"},wide:{am:"de.",pm:"du.",midnight:"\xe9jf\xe9l",noon:"d\xe9l",morning:"reggel",afternoon:"d\xe9lut\xe1n",evening:"este",night:"\xe9jjel"}},defaultWidth:"wide",defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},391:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a(231)),n=i(a(230));function i(e){return e&&e.__esModule?e:{default:e}}var d={ordinalNumber:(0,r.default)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(ie\.|isz\.)/i,abbreviated:/^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,wide:/^(Krisztus el\u0151tt|id\u0151sz\xe1m\xedt\xe1sunk el\u0151tt|id\u0151sz\xe1m\xedt\xe1sunk szerint|i\. sz\.)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/ie/i,/isz/i],abbreviated:[/^(i\.?\s?e\.?|b\s?ce)/i,/^(i\.?\s?sz\.?|c\s?e)/i],any:[/el\u0151tt/i,/(szerint|i. sz.)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]\.?/i,abbreviated:/^[1234]?\.?\s?n\.\xe9v/i,wide:/^([1234]|I|II|III|IV)?\.?\s?negyed\xe9v/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1|I$/i,/2|II$/i,/3|III/i,/4|IV/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfma\xe1sond]|sz/i,abbreviated:/^(jan\.?|febr\.?|m\xe1rc\.?|\xe1pr\.?|m\xe1j\.?|j\xfan\.?|j\xfal\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,wide:/^(janu\xe1r|febru\xe1r|m\xe1rcius|\xe1prilis|m\xe1jus|j\xfanius|j\xfalius|augusztus|szeptember|okt\xf3ber|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a|\xe1/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s|sz/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^m\xe1r/i,/^\xe1p/i,/^m\xe1j/i,/^j\xfan/i,/^j\xfal/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^([vhkpc]|sz|cs|sz)/i,short:/^([vhkp]|sze|cs|szo)/i,abbreviated:/^([vhkp]|sze|cs|szo)/i,wide:/^(vas\xe1rnap|h\xe9tf\u0151|kedd|szerda|cs\xfct\xf6rt\xf6k|p\xe9ntek|szombat)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^v/i,/^h/i,/^k/i,/^sz/i,/^c/i,/^p/i,/^sz/i],any:[/^v/i,/^h/i,/^k/i,/^sze/i,/^c/i,/^p/i,/^szo/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{any:/^((de|du)\.?|\xe9jf\xe9l|d\xe9lut\xe1n|d\xe9l|reggel|este|\xe9jjel)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^de\.?/i,pm:/^du\.?/i,midnight:/^\xe9jf/i,noon:/^d\xe9/i,morning:/reg/i,afternoon:/^d\xe9lu\.?/i,evening:/es/i,night:/\xe9jj/i}},defaultParseWidth:"any"})};t.default=d,e.exports=t.default},902:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(387)),n=l(a(388)),i=l(a(389)),d=l(a(390)),u=l(a(391));function l(e){return e&&e.__esModule?e:{default:e}}var s={code:"hu",formatDistance:r.default,formatLong:n.default,formatRelative:i.default,localize:d.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=s,e.exports=t.default}}]);