(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[528],{1044:function(e,a,t){"use strict";t.r(a);var n={lessThanXSeconds:{one:"minder as 'n sekonde",other:"minder as {{count}} sekondes"},xSeconds:{one:"1 sekonde",other:"{{count}} sekondes"},halfAMinute:"'n halwe minuut",lessThanXMinutes:{one:"minder as 'n minuut",other:"minder as {{count}} minute"},xMinutes:{one:"'n minuut",other:"{{count}} minute"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} ure"},xHours:{one:"1 uur",other:"{{count}} ure"},xDays:{one:"1 dag",other:"{{count}} dae"},aboutXWeeks:{one:"ongeveer 1 week",other:"ongeveer {{count}} weke"},xWeeks:{one:"1 week",other:"{{count}} weke"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maande"},xMonths:{one:"1 maand",other:"{{count}} maande"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer as 1 jaar",other:"meer as {{count}} jaar"},almostXYears:{one:"byna 1 jaar",other:"byna {{count}} jaar"}};var r=t(2240),i={date:Object(r.a)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"yyyy/MM/dd"},defaultWidth:"full"}),time:Object(r.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(r.a)({formats:{full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'verlede' eeee 'om' p",yesterday:"'gister om' p",today:"'vandag om' p",tomorrow:"'m\xf4re om' p",nextWeek:"eeee 'om' p",other:"P"};var o=t(2241);var u={ordinalNumber:function(e){var a=Number(e),t=a%100;if(t<20)switch(t){case 1:case 8:return a+"ste";default:return a+"de"}return a+"ste"},era:Object(o.a)({values:{narrow:["vC","nC"],abbreviated:["vC","nC"],wide:["voor Christus","na Christus"]},defaultWidth:"wide"}),quarter:Object(o.a)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ste kwartaal","2de kwartaal","3de kwartaal","4de kwartaal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(o.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],wide:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"]},defaultWidth:"wide"}),day:Object(o.a)({values:{narrow:["S","M","D","W","D","V","S"],short:["So","Ma","Di","Wo","Do","Vr","Sa"],abbreviated:["Son","Maa","Din","Woe","Don","Vry","Sat"],wide:["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"]},defaultWidth:"wide"}),dayPeriod:Object(o.a)({values:{narrow:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"},abbreviated:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"},wide:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"}},defaultWidth:"wide",formattingValues:{narrow:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"},abbreviated:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"},wide:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"}},defaultFormattingWidth:"wide"})},m=t(2242),s=t(2243),l={code:"af",formatDistance:function(e,a,t){var r;return t=t||{},r="string"===typeof n[e]?n[e]:1===a?n[e].one:n[e].other.replace("{{count}}",a),t.addSuffix?t.comparison>0?"oor "+r:r+" gelede":r},formatLong:i,formatRelative:function(e){return d[e]},localize:u,match:{ordinalNumber:Object(m.a)({matchPattern:/^(\d+)(ste|de)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(s.a)({matchPatterns:{narrow:/^([vn]\.? ?C\.?)/,abbreviated:/^([vn]\. ?C\.?)/,wide:/^((voor|na) Christus)/},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/,/^n/]},defaultParseWidth:"any"}),quarter:Object(s.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234](st|d)e kwartaal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(s.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(Jan|Feb|Mrt|Apr|Mei|Jun|Jul|Aug|Sep|Okt|Nov|Dec)\.?/i,wide:/^(Januarie|Februarie|Maart|April|Mei|Junie|Julie|Augustus|September|Oktober|November|Desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^J/i,/^F/i,/^M/i,/^A/i,/^M/i,/^J/i,/^J/i,/^A/i,/^S/i,/^O/i,/^N/i,/^D/i],any:[/^Jan/i,/^Feb/i,/^Mrt/i,/^Apr/i,/^Mei/i,/^Jun/i,/^Jul/i,/^Aug/i,/^Sep/i,/^Okt/i,/^Nov/i,/^Dec/i]},defaultParseWidth:"any"}),day:Object(s.a)({matchPatterns:{narrow:/^[smdwv]/i,short:/^(So|Ma|Di|Wo|Do|Vr|Sa)/i,abbreviated:/^(Son|Maa|Din|Woe|Don|Vry|Sat)/i,wide:/^(Sondag|Maandag|Dinsdag|Woensdag|Donderdag|Vrydag|Saterdag)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^S/i,/^M/i,/^D/i,/^W/i,/^D/i,/^V/i,/^S/i],any:[/^So/i,/^Ma/i,/^Di/i,/^Wo/i,/^Do/i,/^Vr/i,/^Sa/i]},defaultParseWidth:"any"}),dayPeriod:Object(s.a)({matchPatterns:{any:/^(vm|nm|middernag|(?:uur )?die (oggend|middag|aand))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^vm/i,pm:/^nm/i,midnight:/^middernag/i,noon:/^middaguur/i,morning:/oggend/i,afternoon:/middag/i,evening:/laat middag/i,night:/aand/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};a.default=l},2240:function(e,a,t){"use strict";function n(e){return function(a){var t=a||{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}t.d(a,"a",(function(){return n}))},2241:function(e,a,t){"use strict";function n(e){return function(a,t){var n,r=t||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,d=r.width?String(r.width):i;n=e.formattingValues[d]||e.formattingValues[i]}else{var o=e.defaultWidth,u=r.width?String(r.width):e.defaultWidth;n=e.values[u]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(a):a]}}t.d(a,"a",(function(){return n}))},2242:function(e,a,t){"use strict";function n(e){return function(a,t){var n=String(a),r=t||{},i=n.match(e.matchPattern);if(!i)return null;var d=i[0],o=n.match(e.parsePattern);if(!o)return null;var u=e.valueCallback?e.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(d.length)}}}t.d(a,"a",(function(){return n}))},2243:function(e,a,t){"use strict";function n(e){return function(a,t){var n=String(a),r=t||{},i=r.width,d=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],o=n.match(d);if(!o)return null;var u,m=o[0],s=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(s)?function(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}(s,(function(e){return e.test(m)})):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}(s,(function(e){return e.test(m)})),u=e.valueCallback?e.valueCallback(u):u,{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(m.length)}}}t.d(a,"a",(function(){return n}))}}]);