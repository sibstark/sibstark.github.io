(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[26,228,229],{343:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return function(a,e){var i=String(a),r=e||{},n=r.width,u=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],s=i.match(u);if(!s)return null;var d,l=s[0],o=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(o)?function(t,a){for(var e=0;e<t.length;e++)if(a(t[e]))return e}(o,(function(t){return t.test(l)})):function(t,a){for(var e in t)if(t.hasOwnProperty(e)&&a(t[e]))return e}(o,(function(t){return t.test(l)})),d=t.valueCallback?t.valueCallback(d):d,{value:d=r.valueCallback?r.valueCallback(d):d,rest:i.slice(l.length)}}},t.exports=a.default},344:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return function(a,e){var i=String(a),r=e||{},n=i.match(t.matchPattern);if(!n)return null;var u=n[0],s=i.match(t.parsePattern);if(!s)return null;var d=t.valueCallback?t.valueCallback(s[0]):s[0];return{value:d=r.valueCallback?r.valueCallback(d):d,rest:i.slice(u.length)}}},t.exports=a.default},419:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e(344)),r=n(e(343));function n(t){return t&&t.__esModule?t:{default:t}}var u={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/i,/^n/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|m\xe4r|apr|mai|jun|jul|aug|sep|okt|nov|dez)/i,wide:/^(januar|februar|m\xe4rz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^m\xe4r/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},defaultParseWidth:"any"})};a.default=u,t.exports=a.default}}]);