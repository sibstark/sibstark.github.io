(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[396],{1571:function(t,e,n){"use strict";function i(t){return function(e){var n=e||{},i=n.width?String(n.width):t.defaultWidth;return t.formats[i]||t.formats[t.defaultWidth]}}n.d(e,"a",(function(){return i}))},1572:function(t,e,n){"use strict";function i(t){return function(e,n){var i,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,r=a.width?String(a.width):o;i=t.formattingValues[r]||t.formattingValues[o]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;i=t.values[s]||t.values[u]}return i[t.argumentCallback?t.argumentCallback(e):e]}}n.d(e,"a",(function(){return i}))},1573:function(t,e,n){"use strict";function i(t){return function(e,n){var i=String(e),a=n||{},o=i.match(t.matchPattern);if(!o)return null;var r=o[0],u=i.match(t.parsePattern);if(!u)return null;var s=t.valueCallback?t.valueCallback(u[0]):u[0];return{value:s=a.valueCallback?a.valueCallback(s):s,rest:i.slice(r.length)}}}n.d(e,"a",(function(){return i}))},1574:function(t,e,n){"use strict";function i(t){return function(e,n){var i=String(e),a=n||{},o=a.width,r=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],u=i.match(r);if(!u)return null;var s,c=u[0],d=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,(function(t){return t.test(c)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,(function(t){return t.test(c)})),s=t.valueCallback?t.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:i.slice(c.length)}}}n.d(e,"a",(function(){return i}))},1575:function(t,e,n){"use strict";function i(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}n.d(e,"a",(function(){return i}))},1576:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var i=n(1575);function a(t){Object(i.a)(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"===typeof t||"[object Number]"===e?new Date(t):("string"!==typeof t&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},1578:function(t,e,n){"use strict";function i(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}n.d(e,"a",(function(){return i}))},1593:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(1578),a=n(1576),o=n(1575);function r(t,e){Object(o.a)(1,arguments);var n=e||{},r=n.locale,u=r&&r.options&&r.options.weekStartsOn,s=null==u?0:Object(i.a)(u),c=null==n.weekStartsOn?s:Object(i.a)(n.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=Object(a.default)(t),l=d.getUTCDay(),p=(l<c?7:0)+l-c;return d.setUTCDate(d.getUTCDate()-p),d.setUTCHours(0,0,0,0),d}},1595:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(1593),a=n(1575);function o(t,e,n){Object(a.a)(2,arguments);var o=Object(i.a)(t,n),r=Object(i.a)(e,n);return o.getTime()===r.getTime()}},782:function(t,e,n){"use strict";function i(t,e,n){n=n||"regular";var i=function(t,e){if(1===e)return t.one;var n=e%100;if(n<=20&&n>10)return t.other;var i=n%10;return i>=2&&i<=4?t.twoFour:t.other}(t,e);return(i[n]||i).replace("{{count}}",e)}n.r(e);var a={lessThanXSeconds:{one:{regular:"mniej ni\u017c sekunda",past:"mniej ni\u017c sekund\u0119",future:"mniej ni\u017c sekund\u0119"},twoFour:"mniej ni\u017c {{count}} sekundy",other:"mniej ni\u017c {{count}} sekund"},xSeconds:{one:{regular:"sekunda",past:"sekund\u0119",future:"sekund\u0119"},twoFour:"{{count}} sekundy",other:"{{count}} sekund"},halfAMinute:{one:"p\xf3\u0142 minuty",twoFour:"p\xf3\u0142 minuty",other:"p\xf3\u0142 minuty"},lessThanXMinutes:{one:{regular:"mniej ni\u017c minuta",past:"mniej ni\u017c minut\u0119",future:"mniej ni\u017c minut\u0119"},twoFour:"mniej ni\u017c {{count}} minuty",other:"mniej ni\u017c {{count}} minut"},xMinutes:{one:{regular:"minuta",past:"minut\u0119",future:"minut\u0119"},twoFour:"{{count}} minuty",other:"{{count}} minut"},aboutXHours:{one:{regular:"oko\u0142o godzina",past:"oko\u0142o godziny",future:"oko\u0142o godzin\u0119"},twoFour:"oko\u0142o {{count}} godziny",other:"oko\u0142o {{count}} godzin"},xHours:{one:{regular:"godzina",past:"godzin\u0119",future:"godzin\u0119"},twoFour:"{{count}} godziny",other:"{{count}} godzin"},xDays:{one:{regular:"dzie\u0144",past:"dzie\u0144",future:"1 dzie\u0144"},twoFour:"{{count}} dni",other:"{{count}} dni"},aboutXWeeks:{one:"oko\u0142o tygodnia",twoFour:"oko\u0142o {{count}} tygodni",other:"oko\u0142o {{count}} tygodni"},xWeeks:{one:"tydzie\u0144",twoFour:"{{count}} tygodnie",other:"{{count}} tygodni"},aboutXMonths:{one:"oko\u0142o miesi\u0105c",twoFour:"oko\u0142o {{count}} miesi\u0105ce",other:"oko\u0142o {{count}} miesi\u0119cy"},xMonths:{one:"miesi\u0105c",twoFour:"{{count}} miesi\u0105ce",other:"{{count}} miesi\u0119cy"},aboutXYears:{one:"oko\u0142o rok",twoFour:"oko\u0142o {{count}} lata",other:"oko\u0142o {{count}} lat"},xYears:{one:"rok",twoFour:"{{count}} lata",other:"{{count}} lat"},overXYears:{one:"ponad rok",twoFour:"ponad {{count}} lata",other:"ponad {{count}} lat"},almostXYears:{one:"prawie rok",twoFour:"prawie {{count}} lata",other:"prawie {{count}} lat"}};var o=n(1571),r={date:Object(o.a)({formats:{full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:Object(o.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(o.a)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u=n(1595),s={masculine:"ostatni",feminine:"ostatnia"},c={masculine:"ten",feminine:"ta"},d={masculine:"nast\u0119pny",feminine:"nast\u0119pna"},l={0:"feminine",1:"masculine",2:"masculine",3:"feminine",4:"masculine",5:"masculine",6:"feminine"};function p(t,e,n,i){var a=e.getUTCDay();return function(t,e,n,i){if(Object(u.a)(e,n,i))return c;if("lastWeek"===t)return s;if("nextWeek"===t)return d;throw new Error("Cannot determine adjectives for token ".concat(t))}(t,e,n,i)[l[a]]}function m(t,e,n,i){var a=p(t,e,n,i);return"'".concat(a,"' eeee 'o' p")}var w={lastWeek:m,yesterday:"'wczoraj o' p",today:"'dzisiaj o' p",tomorrow:"'jutro o' p",nextWeek:m,other:"P"};var f=n(1572);var h={ordinalNumber:function(t){var e=Number(t);return String(e)},era:Object(f.a)({values:{narrow:["p.n.e.","n.e."],abbreviated:["p.n.e.","n.e."],wide:["przed nasz\u0105 er\u0105","naszej ery"]},defaultWidth:"wide"}),quarter:Object(f.a)({values:{narrow:["1","2","3","4"],abbreviated:["I kw.","II kw.","III kw.","IV kw."],wide:["I kwarta\u0142","II kwarta\u0142","III kwarta\u0142","IV kwarta\u0142"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Object(f.a)({values:{narrow:["S","L","M","K","M","C","L","S","W","P","L","G"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017a","lis","gru"],wide:["stycze\u0144","luty","marzec","kwiecie\u0144","maj","czerwiec","lipiec","sierpie\u0144","wrzesie\u0144","pa\u017adziernik","listopad","grudzie\u0144"]},defaultWidth:"wide",formattingValues:{narrow:["s","l","m","k","m","c","l","s","w","p","l","g"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017a","lis","gru"],wide:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","wrze\u015bnia","pa\u017adziernika","listopada","grudnia"]},defaultFormattingWidth:"wide"}),day:Object(f.a)({values:{narrow:["N","P","W","\u015a","C","P","S"],short:["nie","pon","wto","\u015bro","czw","pi\u0105","sob"],abbreviated:["niedz.","pon.","wt.","\u015br.","czw.","pt.","sob."],wide:["niedziela","poniedzia\u0142ek","wtorek","\u015broda","czwartek","pi\u0105tek","sobota"]},defaultWidth:"wide",formattingValues:{narrow:["n","p","w","\u015b","c","p","s"],short:["nie","pon","wto","\u015bro","czw","pi\u0105","sob"],abbreviated:["niedz.","pon.","wt.","\u015br.","czw.","pt.","sob."],wide:["niedziela","poniedzia\u0142ek","wtorek","\u015broda","czwartek","pi\u0105tek","sobota"]},defaultFormattingWidth:"wide"}),dayPeriod:Object(f.a)({values:{narrow:{am:"a",pm:"p",midnight:"p\xf3\u0142n.",noon:"po\u0142",morning:"rano",afternoon:"popo\u0142.",evening:"wiecz.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"p\xf3\u0142noc",noon:"po\u0142udnie",morning:"rano",afternoon:"popo\u0142udnie",evening:"wiecz\xf3r",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"p\xf3\u0142noc",noon:"po\u0142udnie",morning:"rano",afternoon:"popo\u0142udnie",evening:"wiecz\xf3r",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"o p\xf3\u0142n.",noon:"w po\u0142.",morning:"rano",afternoon:"po po\u0142.",evening:"wiecz.",night:"w nocy"},abbreviated:{am:"AM",pm:"PM",midnight:"o p\xf3\u0142nocy",noon:"w po\u0142udnie",morning:"rano",afternoon:"po po\u0142udniu",evening:"wieczorem",night:"w nocy"},wide:{am:"AM",pm:"PM",midnight:"o p\xf3\u0142nocy",noon:"w po\u0142udnie",morning:"rano",afternoon:"po po\u0142udniu",evening:"wieczorem",night:"w nocy"}},defaultFormattingWidth:"wide"})},g=n(1573),k=n(1574),b={code:"pl",formatDistance:function(t,e,n){var o=a[t];return(n=n||{}).addSuffix?n.comparison>0?"za "+i(o,e,"future"):i(o,e,"past")+" temu":i(o,e)},formatLong:r,formatRelative:function(t,e,n,i){var a=w[t];return"function"===typeof a?a(t,e,n,i):a},localize:h,match:{ordinalNumber:Object(g.a)({matchPattern:/^(\d+)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:Object(k.a)({matchPatterns:{narrow:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,abbreviated:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,wide:/^(przed\s*nasz(\u0105|a)\s*er(\u0105|a)|naszej\s*ery)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^n/i]},defaultParseWidth:"any"}),quarter:Object(k.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^(I|II|III|IV)\s*kw\.?/i,wide:/^(I|II|III|IV)\s*kwarta(\u0142|l)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/1/i,/2/i,/3/i,/4/i],any:[/^I kw/i,/^II kw/i,/^III kw/i,/^IV kw/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Object(k.a)({matchPatterns:{narrow:/^[slmkcwpg]/i,abbreviated:/^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(\u017a|z)|lis|gru)/i,wide:/^(stycznia|stycze(\u0144|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(\u0144|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(\u0144|n)|wrze(\u015b|s)nia|wrzesie(\u0144|n)|pa(\u017a|z)dziernika|pa(\u017a|z)dziernik|listopada|listopad|grudnia|grudzie(\u0144|n))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^l/i,/^m/i,/^k/i,/^m/i,/^c/i,/^l/i,/^s/i,/^w/i,/^p/i,/^l/i,/^g/i],any:[/^st/i,/^lu/i,/^mar/i,/^k/i,/^maj/i,/^c/i,/^lip/i,/^si/i,/^w/i,/^p/i,/^lis/i,/^g/i]},defaultParseWidth:"any"}),day:Object(k.a)({matchPatterns:{narrow:/^[npw\u015bcs]/i,short:/^(nie|pon|wto|(\u015b|s)ro|czw|pi(\u0105|a)|sob)/i,abbreviated:/^(niedz|pon|wt|(\u015b|s)r|czw|pt|sob)\.?/i,wide:/^(niedziela|poniedzia(\u0142|l)ek|wtorek|(\u015b|s)roda|czwartek|pi(\u0105|a)tek|sobota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^w/i,/^\u015b/i,/^c/i,/^p/i,/^s/i],abbreviated:[/^n/i,/^po/i,/^w/i,/^(\u015b|s)r/i,/^c/i,/^pt/i,/^so/i],any:[/^n/i,/^po/i,/^w/i,/^(\u015b|s)r/i,/^c/i,/^pi/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:Object(k.a)({matchPatterns:{narrow:/^(^a$|^p$|p\xf3(\u0142|l)n\.?|o\s*p\xf3(\u0142|l)n\.?|po(\u0142|l)\.?|w\s*po(\u0142|l)\.?|po\s*po(\u0142|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,any:/^(am|pm|p\xf3(\u0142|l)noc|o\s*p\xf3(\u0142|l)nocy|po(\u0142|l)udnie|w\s*po(\u0142|l)udnie|popo(\u0142|l)udnie|po\s*po(\u0142|l)udniu|rano|wiecz\xf3r|wieczorem|noc|w\s*nocy)/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^a$/i,pm:/^p$/i,midnight:/p\xf3(\u0142|l)n/i,noon:/po(\u0142|l)/i,morning:/rano/i,afternoon:/po\s*po(\u0142|l)/i,evening:/wiecz/i,night:/noc/i},any:{am:/^am/i,pm:/^pm/i,midnight:/p\xf3(\u0142|l)n/i,noon:/po(\u0142|l)/i,morning:/rano/i,afternoon:/po\s*po(\u0142|l)/i,evening:/wiecz/i,night:/noc/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};e.default=b}}]);