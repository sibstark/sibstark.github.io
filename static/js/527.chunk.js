(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[527,583],{1161:function(a,t,n){"use strict";n.r(t);var e=n(797);t.default=e.default},1571:function(a,t,n){"use strict";function e(a){return function(t){var n=t||{},e=n.width?String(n.width):a.defaultWidth;return a.formats[e]||a.formats[a.defaultWidth]}}n.d(t,"a",(function(){return e}))},1572:function(a,t,n){"use strict";function e(a){return function(t,n){var e,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&a.formattingValues){var r=a.defaultFormattingWidth||a.defaultWidth,u=i.width?String(i.width):r;e=a.formattingValues[u]||a.formattingValues[r]}else{var o=a.defaultWidth,d=i.width?String(i.width):a.defaultWidth;e=a.values[d]||a.values[o]}return e[a.argumentCallback?a.argumentCallback(t):t]}}n.d(t,"a",(function(){return e}))},1573:function(a,t,n){"use strict";function e(a){return function(t,n){var e=String(t),i=n||{},r=e.match(a.matchPattern);if(!r)return null;var u=r[0],o=e.match(a.parsePattern);if(!o)return null;var d=a.valueCallback?a.valueCallback(o[0]):o[0];return{value:d=i.valueCallback?i.valueCallback(d):d,rest:e.slice(u.length)}}}n.d(t,"a",(function(){return e}))},1574:function(a,t,n){"use strict";function e(a){return function(t,n){var e=String(t),i=n||{},r=i.width,u=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],o=e.match(u);if(!o)return null;var d,h=o[0],s=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(s)?function(a,t){for(var n=0;n<a.length;n++)if(t(a[n]))return n}(s,(function(a){return a.test(h)})):function(a,t){for(var n in a)if(a.hasOwnProperty(n)&&t(a[n]))return n}(s,(function(a){return a.test(h)})),d=a.valueCallback?a.valueCallback(d):d,{value:d=i.valueCallback?i.valueCallback(d):d,rest:e.slice(h.length)}}}n.d(t,"a",(function(){return e}))},797:function(a,t,n){"use strict";n.r(t);var e={lessThanXSeconds:{one:"sekunddan kam",other:"{{count}} sekunddan kam"},xSeconds:{one:"1 sekund",other:"{{count}} sekund"},halfAMinute:"yarim minut",lessThanXMinutes:{one:"bir minutdan kam",other:"{{count}} minutdan kam"},xMinutes:{one:"1 minut",other:"{{count}} minut"},aboutXHours:{one:"tahminan 1 soat",other:"tahminan {{count}} soat"},xHours:{one:"1 soat",other:"{{count}} soat"},xDays:{one:"1 kun",other:"{{count}} kun"},aboutXWeeks:{one:"tahminan 1 hafta",other:"tahminan {{count}} hafta"},xWeeks:{one:"1 hafta",other:"{{count}} hafta"},aboutXMonths:{one:"tahminan 1 oy",other:"tahminan {{count}} oy"},xMonths:{one:"1 oy",other:"{{count}} oy"},aboutXYears:{one:"tahminan 1 yil",other:"tahminan {{count}} yil"},xYears:{one:"1 yil",other:"{{count}} yil"},overXYears:{one:"1 yildan ko'p",other:"{{count}} yildan ko'p"},almostXYears:{one:"deyarli 1 yil",other:"deyarli {{count}} yil"}};var i=n(1571),r={date:Object(i.a)({formats:{full:"EEEE, do MMMM, y",long:"do MMMM, y",medium:"d MMM, y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:Object(i.a)({formats:{full:"h:mm:ss zzzz",long:"h:mm:ss z",medium:"h:mm:ss",short:"h:mm"},defaultWidth:"full"}),dateTime:Object(i.a)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})},u={lastWeek:"'oldingi' eeee p 'da'",yesterday:"'kecha' p 'da'",today:"'bugun' p 'da'",tomorrow:"'ertaga' p 'da'",nextWeek:"eeee p 'da'",other:"P"};var o=n(1572);var d={ordinalNumber:function(a,t){return Number(a)},era:Object(o.a)({values:{narrow:["M.A","M."],abbreviated:["M.A","M."],wide:["Miloddan Avvalgi","Milodiy"]},defaultWidth:"wide"}),quarter:Object(o.a)({values:{narrow:["1","2","3","4"],abbreviated:["CH.1","CH.2","CH.3","CH.4"],wide:["1-chi chorak","2-chi chorak","3-chi chorak","4-chi chorak"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:Object(o.a)({values:{narrow:["Y","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","Iyun","Iyul","Avg","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"]},defaultWidth:"wide"}),day:Object(o.a)({values:{narrow:["Y","D","S","CH","P","J","SH"],short:["Ya","Du","Se","Cho","Pa","Ju","Sha"],abbreviated:["Yak","Dush","Sesh","Chor","Pay","Jum","Shan"],wide:["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]},defaultWidth:"wide"}),dayPeriod:Object(o.a)({values:{narrow:{am:"a",pm:"p",midnight:"y.t",noon:"p.",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},abbreviated:{am:"AM",pm:"PM",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},wide:{am:"a.m.",pm:"p.m.",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"y.t",noon:"p.",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},abbreviated:{am:"AM",pm:"PM",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},wide:{am:"a.m.",pm:"p.m.",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"}},defaultFormattingWidth:"wide"})},h=n(1573),s=n(1574),l={code:"uz",formatDistance:function(a,t,n){var i;return n=n||{},i="string"===typeof e[a]?e[a]:1===t?e[a].one:e[a].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?i+" dan keyin":i+" oldin":i},formatLong:r,formatRelative:function(a,t,n,e){return u[a]},localize:d,match:{ordinalNumber:Object(h.a)({matchPattern:/^(\d+)(chi)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:Object(s.a)({matchPatterns:{narrow:/^(m\.a|m\.)/i,abbreviated:/^(m\.a\.?\s?m\.?)/i,wide:/^(miloddan avval|miloddan keyin)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Object(s.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](chi)? chorak/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:Object(s.a)({matchPatterns:{narrow:/^[yfmasond]/i,abbreviated:/^(yan|fev|mar|apr|may|iyun|iyul|avg|sen|okt|noy|dek)/i,wide:/^(yanvar|fevral|mart|aprel|may|iyun|iyul|avgust|sentabr|oktabr|noyabr|dekabr)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^y/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ya/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^iyun/i,/^iyul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(s.a)({matchPatterns:{narrow:/^[ydschj]/i,short:/^(ya|du|se|cho|pa|ju|sha)/i,abbreviated:/^(yak|dush|sesh|chor|pay|jum|shan)/i,wide:/^(yakshanba|dushanba|seshanba|chorshanba|payshanba|juma|shanba)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^y/i,/^d/i,/^s/i,/^ch/i,/^p/i,/^j/i,/^sh/i],any:[/^ya/i,/^d/i,/^se/i,/^ch/i,/^p/i,/^j/i,/^sh/i]},defaultParseWidth:"any"}),dayPeriod:Object(s.a)({matchPatterns:{narrow:/^(a|p|y\.t|p| (ertalab|tushdan keyin|kechqurun|tun))/i,any:/^([ap]\.?\s?m\.?|yarim tun|peshin| (ertalab|tushdan keyin|kechqurun|tun))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^y\.t/i,noon:/^pe/i,morning:/ertalab/i,afternoon:/tushdan keyin/i,evening:/kechqurun/i,night:/tun/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=l}}]);