(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[448,597],{1093:function(e,a,t){"use strict";t.r(a);var i=t(801);a.default=i.default},801:function(e,a,t){"use strict";t.r(a);var i={lessThanXSeconds:{one:"menys d'un segon",eleven:"menys d'onze segons",other:"menys de {{count}} segons"},xSeconds:{one:"1 segon",other:"{{count}} segons"},halfAMinute:"mig minut",lessThanXMinutes:{one:"menys d'un minut",eleven:"menys d'onze minuts",other:"menys de {{count}} minuts"},xMinutes:{one:"1 minut",other:"{{count}} minuts"},aboutXHours:{one:"aproximadament una hora",other:"aproximadament {{count}} hores"},xHours:{one:"1 hora",other:"{{count}} hores"},xDays:{one:"1 dia",other:"{{count}} dies"},aboutXWeeks:{one:"aproximadament una setmana",other:"aproximadament {{count}} setmanes"},xWeeks:{one:"1 setmana",other:"{{count}} setmanes"},aboutXMonths:{one:"aproximadament un mes",other:"aproximadament {{count}} mesos"},xMonths:{one:"1 mes",other:"{{count}} mesos"},aboutXYears:{one:"aproximadament un any",other:"aproximadament {{count}} anys"},xYears:{one:"1 any",other:"{{count}} anys"},overXYears:{one:"m\xe9s d'un any",eleven:"m\xe9s d'onze anys",other:"m\xe9s de {{count}} anys"},almostXYears:{one:"gaireb\xe9 un any",other:"gaireb\xe9 {{count}} anys"}};var n=t(110),d={date:Object(n.a)({formats:{full:"EEEE, d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:Object(n.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(n.a)({formats:{full:"{{date}} 'a les' {{time}}",long:"{{date}} 'a les' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},r={lastWeek:"'el' eeee 'passat a la' LT",yesterday:"'ahir a la' p",today:"'avui a la' p",tomorrow:"'dem\xe0 a la' p",nextWeek:"eeee 'a la' p",other:"P"},s={lastWeek:"'el' eeee 'passat a les' p",yesterday:"'ahir a les' p",today:"'avui a les' p",tomorrow:"'dem\xe0 a les' p",nextWeek:"eeee 'a les' p",other:"P"};var m=t(82);var o={ordinalNumber:function(e,a){var t=Number(e),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"r";case 2:return t+"n";case 3:return t+"r";case 4:return t+"t"}return t+"\xe8"},era:Object(m.a)({values:{narrow:["aC","dC"],abbreviated:["a. de C.","d. de C."],wide:["abans de Crist","despr\xe9s de Crist"]},defaultWidth:"wide"}),quarter:Object(m.a)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1r trimestre","2n trimestre","3r trimestre","4t trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(m.a)({values:{narrow:["GN","FB","M\xc7","AB","MG","JN","JL","AG","ST","OC","NV","DS"],abbreviated:["gen.","febr.","mar\xe7","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."],wide:["gener","febrer","mar\xe7","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"]},defaultWidth:"wide"}),day:Object(m.a)({values:{narrow:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],short:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],abbreviated:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],wide:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"]},defaultWidth:"wide"}),dayPeriod:Object(m.a)({values:{narrow:{am:"am",pm:"pm",midnight:"mitjanit",noon:"migdia",morning:"mat\xed",afternoon:"tarda",evening:"vespre",night:"nit"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"mitjanit",noon:"migdia",morning:"mat\xed",afternoon:"tarda",evening:"vespre",night:"nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"mitjanit",noon:"migdia",morning:"mat\xed",afternoon:"tarda",evening:"vespre",night:"nit"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"de la mitjanit",noon:"del migdia",morning:"del mat\xed",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},abbreviated:{am:"AM",pm:"PM",midnight:"de la mitjanit",noon:"del migdia",morning:"del mat\xed",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"de la mitjanit",noon:"del migdia",morning:"del mat\xed",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"}},defaultFormattingWidth:"wide"})},u=t(83),l=t(181),b={code:"ca",formatDistance:function(e,a,t){var n;return t=t||{},n="string"===typeof i[e]?i[e]:1===a?i[e].one:11===a&&i[e].eleven?i[e].eleven:i[e].other.replace("{{count}}",a),t.addSuffix?t.comparison>0?"en "+n:"fa "+n:n},formatLong:d,formatRelative:function(e,a,t,i){return 1!==a.getUTCHours()?s[e]:r[e]},localize:o,match:{ordinalNumber:Object(l.a)({matchPattern:/^(\d+)(\xe8|r|n|r|t)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(u.a)({matchPatterns:{narrow:/^(aC|dC)/i,abbreviated:/^(a. de C.|d. de C.)/i,wide:/^(abans de Crist|despr[e\xe9]s de Crist)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^aC/i,/^dC/i],abbreviated:[/^(a. de C.)/i,/^(d. de C.)/i],wide:[/^(abans de Crist)/i,/^(despr[e\xe9]s de Crist)/i]},defaultParseWidth:"any"}),quarter:Object(u.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xe8|r|n|r|t)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(u.a)({matchPatterns:{narrow:/^(GN|FB|M\xc7|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i,abbreviated:/^(gen.|febr.|mar\xe7|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i,wide:/^(gener|febrer|mar\xe7|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^GN/i,/^FB/i,/^M\xc7/i,/^AB/i,/^MG/i,/^JN/i,/^JL/i,/^AG/i,/^ST/i,/^OC/i,/^NV/i,/^DS/i],abbreviated:[/^gen./i,/^febr./i,/^mar\xe7/i,/^abr./i,/^maig/i,/^juny/i,/^jul./i,/^ag./i,/^set./i,/^oct./i,/^nov./i,/^des./i],wide:[/^gener/i,/^febrer/i,/^mar\xe7/i,/^abril/i,/^maig/i,/^juny/i,/^juliol/i,/^agost/i,/^setembre/i,/^octubre/i,/^novembre/i,/^desembre/i]},defaultParseWidth:"any"}),day:Object(u.a)({matchPatterns:{narrow:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,short:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,abbreviated:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,wide:/^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],abbreviated:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],wide:[/^diumenge/i,/^dilluns/i,/^dimarts/i,/^dimecres/i,/^dijous/i,/^divendres/i,/^disssabte/i]},defaultParseWidth:"any"}),dayPeriod:Object(u.a)({matchPatterns:{narrow:/^(a|p|mn|md|(del|de la) (mat\xed|tarda|vespre|nit))/i,abbreviated:/^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (mat\xed|tarda|vespre|nit))/i,wide:/^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (mat\xed|tarda|vespre|nit))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mitjanit/i,noon:/^migdia/i,morning:/mat\xed/i,afternoon:/tarda/i,evening:/vespre/i,night:/nit/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=b}}]);