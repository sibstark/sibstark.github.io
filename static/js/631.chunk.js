(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[631],{830:function(e,n,t){"use strict";t.r(n);var o={lessThanXSeconds:{standalone:{one:"manner w\xe9i eng Sekonn",other:"manner w\xe9i {{count}} Sekonnen"},withPreposition:{one:"manner w\xe9i enger Sekonn",other:"manner w\xe9i {{count}} Sekonnen"}},xSeconds:{standalone:{one:"eng Sekonn",other:"{{count}} Sekonnen"},withPreposition:{one:"enger Sekonn",other:"{{count}} Sekonnen"}},halfAMinute:{standalone:"eng hallef Minutt",withPreposition:"enger hallwer Minutt"},lessThanXMinutes:{standalone:{one:"manner w\xe9i eng Minutt",other:"manner w\xe9i {{count}} Minutten"},withPreposition:{one:"manner w\xe9i enger Minutt",other:"manner w\xe9i {{count}} Minutten"}},xMinutes:{standalone:{one:"eng Minutt",other:"{{count}} Minutten"},withPreposition:{one:"enger Minutt",other:"{{count}} Minutten"}},aboutXHours:{standalone:{one:"ongef\xe9ier eng Stonn",other:"ongef\xe9ier {{count}} Stonnen"},withPreposition:{one:"ongef\xe9ier enger Stonn",other:"ongef\xe9ier {{count}} Stonnen"}},xHours:{standalone:{one:"eng Stonn",other:"{{count}} Stonnen"},withPreposition:{one:"enger Stonn",other:"{{count}} Stonnen"}},xDays:{standalone:{one:"een Dag",other:"{{count}} Deeg"},withPreposition:{one:"engem Dag",other:"{{count}} Deeg"}},aboutXWeeks:{standalone:{one:"ongef\xe9ier eng Woch",other:"ongef\xe9ier {{count}} Wochen"},withPreposition:{one:"ongef\xe9ier enger Woche",other:"ongef\xe9ier {{count}} Wochen"}},xWeeks:{standalone:{one:"eng Woch",other:"{{count}} Wochen"},withPreposition:{one:"enger Woch",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"ongef\xe9ier ee Mount",other:"ongef\xe9ier {{count}} M\xe9int"},withPreposition:{one:"ongef\xe9ier engem Mount",other:"ongef\xe9ier {{count}} M\xe9int"}},xMonths:{standalone:{one:"ee Mount",other:"{{count}} M\xe9int"},withPreposition:{one:"engem Mount",other:"{{count}} M\xe9int"}},aboutXYears:{standalone:{one:"ongef\xe9ier ee Joer",other:"ongef\xe9ier {{count}} Joer"},withPreposition:{one:"ongef\xe9ier engem Joer",other:"ongef\xe9ier {{count}} Joer"}},xYears:{standalone:{one:"ee Joer",other:"{{count}} Joer"},withPreposition:{one:"engem Joer",other:"{{count}} Joer"}},overXYears:{standalone:{one:"m\xe9i w\xe9i ee Joer",other:"m\xe9i w\xe9i {{count}} Joer"},withPreposition:{one:"m\xe9i w\xe9i engem Joer",other:"m\xe9i w\xe9i {{count}} Joer"}},almostXYears:{standalone:{one:"bal ee Joer",other:"bal {{count}} Joer"},withPreposition:{one:"bal engem Joer",other:"bal {{count}} Joer"}}},i=["d","h","n","t","z"],r=["a,","e","i","o","u"],a=[0,1,2,3,8,9],s=[40,50,60,70];function u(e){var n=e.charAt(0).toLowerCase();if(-1!=r.indexOf(n)||-1!=i.indexOf(n))return!0;var t=e.split(" ")[0],o=parseInt(t);return!isNaN(o)&&-1!=a.indexOf(o%10)&&-1==s.indexOf(parseInt(t.substring(0,2)))}var m=t(109),d={date:Object(m.a)({formats:{full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.yy"},defaultWidth:"full"}),time:Object(m.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(m.a)({formats:{full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},h={lastWeek:function(e){var n=e.getUTCDay(),t="'l\xe4schte";return 2!==n&&4!==n||(t+="n"),t+="' eeee 'um' p"},yesterday:"'g\xebschter um' p",today:"'haut um' p",tomorrow:"'moien um' p",nextWeek:"eeee 'um' p",other:"P"};var c=t(81);var g={ordinalNumber:function(e,n){return Number(e)+"."},era:Object(c.a)({values:{narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["viru Christus","no Christus"]},defaultWidth:"wide"}),quarter:Object(c.a)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(c.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","M\xe4e","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","M\xe4erz","Abr\xebll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"]},defaultWidth:"wide"}),day:Object(c.a)({values:{narrow:["S","M","D","M","D","F","S"],short:["So","M\xe9","D\xeb","M\xeb","Do","Fr","Sa"],abbreviated:["So.","M\xe9.","D\xeb.","M\xeb.","Do.","Fr.","Sa."],wide:["Sonndeg","M\xe9indeg","D\xebnschdeg","M\xebttwoch","Donneschdeg","Freideg","Samschdeg"]},defaultWidth:"wide"}),dayPeriod:Object(c.a)({values:{narrow:{am:"mo.",pm:"nom\xeb.",midnight:"M\xebtternuecht",noon:"M\xebtteg",morning:"Moien",afternoon:"Nom\xebtteg",evening:"Owend",night:"Nuecht"},abbreviated:{am:"moies",pm:"nom\xebttes",midnight:"M\xebtternuecht",noon:"M\xebtteg",morning:"Moien",afternoon:"Nom\xebtteg",evening:"Owend",night:"Nuecht"},wide:{am:"moies",pm:"nom\xebttes",midnight:"M\xebtternuecht",noon:"M\xebtteg",morning:"Moien",afternoon:"Nom\xebtteg",evening:"Owend",night:"Nuecht"}},defaultWidth:"wide",formattingValues:{narrow:{am:"mo.",pm:"nom.",midnight:"M\xebtternuecht",noon:"m\xebttes",morning:"moies",afternoon:"nom\xebttes",evening:"owes",night:"nuets"},abbreviated:{am:"moies",pm:"nom\xebttes",midnight:"M\xebtternuecht",noon:"m\xebttes",morning:"moies",afternoon:"nom\xebttes",evening:"owes",night:"nuets"},wide:{am:"moies",pm:"nom\xebttes",midnight:"M\xebtternuecht",noon:"m\xebttes",morning:"moies",afternoon:"nom\xebttes",evening:"owes",night:"nuets"}},defaultFormattingWidth:"wide"})},l=t(181),f=t(82),w={code:"lb",formatDistance:function(e,n,t){var i,r=(t=t||{}).addSuffix?o[e].withPreposition:o[e].standalone;return i="string"===typeof r?r:1===n?r.one:r.other.replace("{{count}}",n),t.addSuffix?t.comparison>0?"a"+(u(i)?"n":"")+" "+i:"viru"+(u(i)?"n":"")+" "+i:i},formatLong:d,formatRelative:function(e,n,t,o){var i=h[e];return"function"===typeof i?i(n):i},localize:g,match:{ordinalNumber:Object(l.a)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(f.a)({matchPatterns:{narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(viru Christus|virun eiser Z\xe4itrechnung|no Christus|eiser Z\xe4itrechnung)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/i,/^n/i]},defaultParseWidth:"any"}),quarter:Object(f.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(f.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|m\xe4e|abr|mee|jun|jul|aug|sep|okt|nov|dez)/i,wide:/^(januar|februar|m\xe4erz|abr\xebll|mee|juni|juli|august|september|oktober|november|dezember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^m\xe4/i,/^ab/i,/^me/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(f.a)({matchPatterns:{narrow:/^[smdf]/i,short:/^(so|m\xe9|d\xeb|m\xeb|do|fr|sa)/i,abbreviated:/^(son?|m\xe9i?|d\xebn?|m\xebt?|don?|fre?|sam?)\.?/i,wide:/^(sonndeg|m\xe9indeg|d\xebnschdeg|m\xebttwoch|donneschdeg|freideg|samschdeg)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^so/i,/^m\xe9/i,/^d\xeb/i,/^m\xeb/i,/^do/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Object(f.a)({matchPatterns:{narrow:/^(mo\.?|nom\xeb\.?|M\xebtternuecht|m\xebttes|moies|nom\xebttes|owes|nuets)/i,abbreviated:/^(moi\.?|nom\xebt\.?|M\xebtternuecht|m\xebttes|moies|nom\xebttes|owes|nuets)/i,wide:/^(moies|nom\xebttes|M\xebtternuecht|m\xebttes|moies|nom\xebttes|owes|nuets)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^m/i,pm:/^n/i,midnight:/^M\xebtter/i,noon:/^m\xebttes/i,morning:/moies/i,afternoon:/nom\xebttes/i,evening:/owes/i,night:/nuets/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};n.default=w}}]);