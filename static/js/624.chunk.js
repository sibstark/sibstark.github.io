(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[624],{822:function(e,t,n){"use strict";n.r(t);var i={lessThanXSeconds:{one:"minna en 1 sek\xfanda",other:"minna en {{count}} sek\xfandur"},xSeconds:{one:"1 sek\xfanda",other:"{{count}} sek\xfandur"},halfAMinute:"h\xe1lf m\xedn\xfata",lessThanXMinutes:{one:"minna en 1 m\xedn\xfata",other:"minna en {{count}} m\xedn\xfatur"},xMinutes:{one:"1 m\xedn\xfata",other:"{{count}} m\xedn\xfatur"},aboutXHours:{one:"u.\xfe.b. 1 klukkustund",other:"u.\xfe.b. {{count}} klukkustundir"},xHours:{one:"1 klukkustund",other:"{{count}} klukkustundir"},xDays:{one:"1 dagur",other:"{{count}} dagar"},aboutXWeeks:{one:"um viku",other:"um {{count}} vikur"},xWeeks:{one:"1 viku",other:"{{count}} vikur"},aboutXMonths:{one:"u.\xfe.b. 1 m\xe1nu\xf0ur",other:"u.\xfe.b. {{count}} m\xe1nu\xf0ir"},xMonths:{one:"1 m\xe1nu\xf0ur",other:"{{count}} m\xe1nu\xf0ir"},aboutXYears:{one:"u.\xfe.b. 1 \xe1r",other:"u.\xfe.b. {{count}} \xe1r"},xYears:{one:"1 \xe1r",other:"{{count}} \xe1r"},overXYears:{one:"meira en 1 \xe1r",other:"meira en {{count}} \xe1r"},almostXYears:{one:"n\xe6stum 1 \xe1r",other:"n\xe6stum {{count}} \xe1r"}};var r=n(109),a={date:Object(r.a)({formats:{full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"d.MM.y"},defaultWidth:"full"}),time:Object(r.a)({formats:{full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(r.a)({formats:{full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},u={lastWeek:"'s\xed\xf0asta' dddd 'kl.' p",yesterday:"'\xed g\xe6r kl.' p",today:"'\xed dag kl.' p",tomorrow:"'\xe1 morgun kl.' p",nextWeek:"dddd 'kl.' p",other:"L"};var d=n(81);var o={ordinalNumber:function(e,t){return Number(e)+"."},era:Object(d.a)({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["fyrir Krist","eftir Krist"]},defaultWidth:"wide"}),quarter:Object(d.a)({values:{narrow:["1","2","3","4"],abbreviated:["1F","2F","3F","4F"],wide:["1. fj\xf3r\xf0ungur","2. fj\xf3r\xf0ungur","3. fj\xf3r\xf0ungur","4. fj\xf3r\xf0ungur"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(d.a)({values:{narrow:["J","F","M","A","M","J","J","\xc1","S","\xd3","N","D"],abbreviated:["jan.","feb.","mars","apr\xedl","ma\xed","j\xfan\xed","j\xfal\xed","\xe1g\xfast","sept.","okt.","n\xf3v.","des."],wide:["jan\xfaar","febr\xfaar","mars","apr\xedl","ma\xed","j\xfan\xed","j\xfal\xed","\xe1g\xfast","september","okt\xf3ber","n\xf3vember","desember"]},defaultWidth:"wide"}),day:Object(d.a)({values:{narrow:["S","M","\xde","M","F","F","L"],short:["Su","M\xe1","\xder","Mi","Fi","F\xf6","La"],abbreviated:["sun.","m\xe1n.","\xferi.","mi\xf0.","fim.","f\xf6s.","lau"],wide:["sunnudagur","m\xe1nudagur","\xferi\xf0judagur","mi\xf0vikudagur","fimmtudagur","f\xf6studagur","laugardagur"]},defaultWidth:"wide"}),dayPeriod:Object(d.a)({values:{narrow:{am:"f",pm:"e",midnight:"mi\xf0n\xe6tti",noon:"h\xe1degi",morning:"morgunn",afternoon:"s\xed\xf0degi",evening:"kv\xf6ld",night:"n\xf3tt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"mi\xf0n\xe6tti",noon:"h\xe1degi",morning:"morgunn",afternoon:"s\xed\xf0degi",evening:"kv\xf6ld",night:"n\xf3tt"},wide:{am:"fyrir h\xe1degi",pm:"eftir h\xe1degi",midnight:"mi\xf0n\xe6tti",noon:"h\xe1degi",morning:"morgunn",afternoon:"s\xed\xf0degi",evening:"kv\xf6ld",night:"n\xf3tt"}},defaultWidth:"wide",formattingValues:{narrow:{am:"f",pm:"e",midnight:"\xe1 mi\xf0n\xe6tti",noon:"\xe1 h\xe1degi",morning:"a\xf0 morgni",afternoon:"s\xed\xf0degis",evening:"um kv\xf6ld",night:"um n\xf3tt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"\xe1 mi\xf0n\xe6tti",noon:"\xe1 h\xe1degi",morning:"a\xf0 morgni",afternoon:"s\xed\xf0degis",evening:"um kv\xf6ld",night:"um n\xf3tt"},wide:{am:"fyrir h\xe1degi",pm:"eftir h\xe1degi",midnight:"\xe1 mi\xf0n\xe6tti",noon:"\xe1 h\xe1degi",morning:"a\xf0 morgni",afternoon:"s\xed\xf0degis",evening:"um kv\xf6ld",night:"um n\xf3tt"}},defaultFormattingWidth:"wide"})},m=n(181),s=n(82),f={code:"is",formatDistance:function(e,t,n){var r;return n=n||{},r="string"===typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"\xed "+r:r+" s\xed\xf0an":r},formatLong:a,formatRelative:function(e,t,n,i){return u[e]},localize:o,match:{ordinalNumber:Object(m.a)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(s.a)({matchPatterns:{narrow:/^(f\.Kr\.|e\.Kr\.)/i,abbreviated:/^(f\.Kr\.|e\.Kr\.)/i,wide:/^(fyrir Krist|eftir Krist)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(f\.Kr\.|e\.Kr\.)/i]},defaultParseWidth:"any"}),quarter:Object(s.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234] fj\xf3r\xf0ungur/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(s.a)({matchPatterns:{narrow:/^[jfm\xe1s\xf3nd]/i,abbreviated:/^(jan\.|feb\.|mars\.|apr\xedl\.|ma\xed|j\xfan\xed|j\xfal\xed|\xe1gust|sep\.|oct\.|nov\.|dec\.)/i,wide:/^(januar|februar|mars|apr\xedl|ma\xed|j\xfan\xed|j\xfal\xed|\xe1gust|september|okt\xf3ber|n\xf3vember|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^\xe1/i,/^s/i,/^\xf3/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^ma\xed/i,/^j\xfan/i,/^j\xfal/i,/^\xe1u/i,/^s/i,/^\xf3/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(s.a)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|m\xe1|\xfer|mi|fi|f\xf6|la)/i,abbreviated:/^(sun|m\xe1n|\xferi|mi\xf0|fim|f\xf6s|lau)\.?/i,wide:/^(sunnudagur|m\xe1nudagur|\xferi\xf0judagur|mi\xf0vikudagur|fimmtudagur|f\xf6studagur|laugardagur)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^\xfe/i,/^m/i,/^f/i,/^f/i,/^l/i],any:[/^su/i,/^m\xe1/i,/^\xfer/i,/^mi/i,/^fi/i,/^f\xf6/i,/^la/i]},defaultParseWidth:"any"}),dayPeriod:Object(s.a)({matchPatterns:{narrow:/^(f|e|s\xed\xf0degis|(\xe1|a\xf0|um) (morgni|kv\xf6ld|n\xf3tt|mi\xf0n\xe6tti))/i,any:/^(fyrir h\xe1degi|eftir h\xe1degi|[ef]\.?h\.?|s\xed\xf0degis|morgunn|(\xe1|a\xf0|um) (morgni|kv\xf6ld|n\xf3tt|mi\xf0n\xe6tti))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^f/i,pm:/^e/i,midnight:/^mi/i,noon:/^h\xe1/i,morning:/morgunn/i,afternoon:/s\xed\xf0degi/i,evening:/kv\xf6ld/i,night:/n\xf3tt/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=f}}]);