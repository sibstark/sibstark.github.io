(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[649],{848:function(e,a,t){"use strict";t.r(a);var n={lessThanXSeconds:{singular:"mindre \xe4n en sekund",plural:"mindre \xe4n {{count}} sekunder"},xSeconds:{singular:"en sekund",plural:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{singular:"mindre \xe4n en minut",plural:"mindre \xe4n {{count}} minuter"},xMinutes:{singular:"en minut",plural:"{{count}} minuter"},aboutXHours:{singular:"ungef\xe4r en timme",plural:"ungef\xe4r {{count}} timmar"},xHours:{singular:"en timme",plural:"{{count}} timmar"},xDays:{singular:"en dag",plural:"{{count}} dagar"},aboutXWeeks:{singular:"ungef\xe4r en vecka",plural:"ungef\xe4r {{count}} vecka"},xWeeks:{singular:"en vecka",plural:"{{count}} vecka"},aboutXMonths:{singular:"ungef\xe4r en m\xe5nad",plural:"ungef\xe4r {{count}} m\xe5nader"},xMonths:{singular:"en m\xe5nad",plural:"{{count}} m\xe5nader"},aboutXYears:{singular:"ungef\xe4r ett \xe5r",plural:"ungef\xe4r {{count}} \xe5r"},xYears:{singular:"ett \xe5r",plural:"{{count}} \xe5r"},overXYears:{singular:"\xf6ver ett \xe5r",plural:"\xf6ver {{count}} \xe5r"},almostXYears:{singular:"n\xe4stan ett \xe5r",plural:"n\xe4stan {{count}} \xe5r"}},r=["noll","en","tv\xe5","tre","fyra","fem","sex","sju","\xe5tta","nio","tio","elva","tolv"];var i=t(110),d={date:Object(i.a)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"y-MM-dd"},defaultWidth:"full"}),time:Object(i.a)({formats:{full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(i.a)({formats:{full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},m={lastWeek:"'i' EEEE's kl.' p",yesterday:"'ig\xe5r kl.' p",today:"'idag kl.' p",tomorrow:"'imorgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"};var o=t(82);var u={ordinalNumber:function(e){var a=Number(e),t=a%100;if(t>20||t<10)switch(t%10){case 1:case 2:return a+":a"}return a+":e"},era:Object(o.a)({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["f\xf6re Kristus","efter Kristus"]},defaultWidth:"wide"}),quarter:Object(o.a)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1:a kvartalet","2:a kvartalet","3:e kvartalet","4:e kvartalet"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(o.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},defaultWidth:"wide"}),day:Object(o.a)({values:{narrow:["S","M","T","O","T","F","L"],short:["s\xf6","m\xe5","ti","on","to","fr","l\xf6"],abbreviated:["s\xf6n","m\xe5n","tis","ons","tor","fre","l\xf6r"],wide:["s\xf6ndag","m\xe5ndag","tisdag","onsdag","torsdag","fredag","l\xf6rdag"]},defaultWidth:"wide"}),dayPeriod:Object(o.a)({values:{narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"morg.",afternoon:"efterm.",evening:"kv\xe4ll",night:"natt"},abbreviated:{am:"f.m.",pm:"e.m.",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"efterm.",evening:"kv\xe4ll",night:"natt"},wide:{am:"f\xf6rmiddag",pm:"eftermiddag",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"eftermiddag",evening:"kv\xe4ll",night:"natt"}},defaultWidth:"wide",formattingValues:{narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 efterm.",evening:"p\xe5 kv\xe4llen",night:"p\xe5 natten"},abbreviated:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 efterm.",evening:"p\xe5 kv\xe4llen",night:"p\xe5 natten"},wide:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"p\xe5 morgonen",afternoon:"p\xe5 eftermiddagen",evening:"p\xe5 kv\xe4llen",night:"p\xe5 natten"}},defaultFormattingWidth:"wide"})},l=t(180),s=t(83),f={code:"sv",formatDistance:function(e,a,t){t=t||{onlyNumeric:!1};var i,d=n[e];return i="string"===typeof d?d:0===a||a>1?t.onlyNumeric?d.plural.replace("{{count}}",a):d.plural.replace("{{count}}",a<13?r[a]:a):d.singular,t.addSuffix?t.comparison>0?"om "+i:i+" sedan":i},formatLong:d,formatRelative:function(e,a,t,n){return m[e]},localize:u,match:{ordinalNumber:Object(l.a)({matchPattern:/^(\d+)(:a|:e)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(s.a)({matchPatterns:{narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(f\xf6re Kristus|f\xf6re v\xe5r tid|efter Kristus|v\xe5r tid)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^f/i,/^[ev]/i]},defaultParseWidth:"any"}),quarter:Object(s.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(s.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(s.a)({matchPatterns:{narrow:/^[smtofl]/i,short:/^(s\xf6|m\xe5|ti|on|to|fr|l\xf6)/i,abbreviated:/^(s\xf6n|m\xe5n|tis|ons|tor|fre|l\xf6r)/i,wide:/^(s\xf6ndag|m\xe5ndag|tisdag|onsdag|torsdag|fredag|l\xf6rdag)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:Object(s.a)({matchPatterns:{any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(p\xe5) (morgonen|eftermiddagen|kv\xe4llen|natten))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kv\xe4ll/i,night:/natt/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=f}}]);