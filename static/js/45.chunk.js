(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[45,228,229],{229:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return function(a,e){var r=String(a),i=e||{},n=i.width,u=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],d=r.match(u);if(!d)return null;var l,s=d[0],f=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(f)?function(t,a){for(var e=0;e<t.length;e++)if(a(t[e]))return e}(f,(function(t){return t.test(s)})):function(t,a){for(var e in t)if(t.hasOwnProperty(e)&&a(t[e]))return e}(f,(function(t){return t.test(s)})),l=t.valueCallback?t.valueCallback(l):l,{value:l=i.valueCallback?i.valueCallback(l):l,rest:r.slice(s.length)}}},t.exports=a.default},230:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return function(a,e){var r=String(a),i=e||{},n=r.match(t.matchPattern);if(!n)return null;var u=n[0],d=r.match(t.parsePattern);if(!d)return null;var l=t.valueCallback?t.valueCallback(d[0]):d[0];return{value:l=i.valueCallback?i.valueCallback(l):l,rest:r.slice(u.length)}}},t.exports=a.default},406:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(e(230)),i=n(e(229));function n(t){return t&&t.__esModule?t:{default:t}}var u={ordinalNumber:(0,r.default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(f\.Kr\.|e\.Kr\.)/i,abbreviated:/^(f\.Kr\.|e\.Kr\.)/i,wide:/^(fyrir Krist|eftir Krist)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(f\.Kr\.|e\.Kr\.)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234] fj\xf3r\xf0ungur/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jfm\xe1s\xf3nd]/i,abbreviated:/^(jan\.|feb\.|mars\.|apr\xedl\.|ma\xed|j\xfan\xed|j\xfal\xed|\xe1gust|sep\.|oct\.|nov\.|dec\.)/i,wide:/^(januar|februar|mars|apr\xedl|ma\xed|j\xfan\xed|j\xfal\xed|\xe1gust|september|okt\xf3ber|n\xf3vember|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^\xe1/i,/^s/i,/^\xf3/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^ma\xed/i,/^j\xfan/i,/^j\xfal/i,/^\xe1u/i,/^s/i,/^\xf3/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|m\xe1|\xfer|mi|fi|f\xf6|la)/i,abbreviated:/^(sun|m\xe1n|\xferi|mi\xf0|fim|f\xf6s|lau)\.?/i,wide:/^(sunnudagur|m\xe1nudagur|\xferi\xf0judagur|mi\xf0vikudagur|fimmtudagur|f\xf6studagur|laugardagur)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^\xfe/i,/^m/i,/^f/i,/^f/i,/^l/i],any:[/^su/i,/^m\xe1/i,/^\xfer/i,/^mi/i,/^fi/i,/^f\xf6/i,/^la/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(f|e|s\xed\xf0degis|(\xe1|a\xf0|um) (morgni|kv\xf6ld|n\xf3tt|mi\xf0n\xe6tti))/i,any:/^(fyrir h\xe1degi|eftir h\xe1degi|[ef]\.?h\.?|s\xed\xf0degis|morgunn|(\xe1|a\xf0|um) (morgni|kv\xf6ld|n\xf3tt|mi\xf0n\xe6tti))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^f/i,pm:/^e/i,midnight:/^mi/i,noon:/^h\xe1/i,morning:/morgunn/i,afternoon:/s\xed\xf0degi/i,evening:/kv\xf6ld/i,night:/n\xf3tt/i}},defaultParseWidth:"any"})};a.default=u,t.exports=a.default}}]);