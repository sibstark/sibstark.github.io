(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[206,227],{228:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,i){var a,t=i||{};if("formatting"===(t.context?String(t.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,r=t.width?String(t.width):o;a=e.formattingValues[r]||e.formattingValues[o]}else{var d=e.defaultWidth,u=t.width?String(t.width):e.defaultWidth;a=e.values[u]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},489:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,t=(a=i(228))&&a.__esModule?a:{default:a};var o={ordinalNumber:function(e){var n=Number(e);return String(n)},era:(0,t.default)({values:{narrow:["p.n.e.","n.e."],abbreviated:["p.n.e.","n.e."],wide:["przed nasz\u0105 er\u0105","naszej ery"]},defaultWidth:"wide"}),quarter:(0,t.default)({values:{narrow:["1","2","3","4"],abbreviated:["I kw.","II kw.","III kw.","IV kw."],wide:["I kwarta\u0142","II kwarta\u0142","III kwarta\u0142","IV kwarta\u0142"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,t.default)({values:{narrow:["S","L","M","K","M","C","L","S","W","P","L","G"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017a","lis","gru"],wide:["stycze\u0144","luty","marzec","kwiecie\u0144","maj","czerwiec","lipiec","sierpie\u0144","wrzesie\u0144","pa\u017adziernik","listopad","grudzie\u0144"]},defaultWidth:"wide",formattingValues:{narrow:["s","l","m","k","m","c","l","s","w","p","l","g"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017a","lis","gru"],wide:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","wrze\u015bnia","pa\u017adziernika","listopada","grudnia"]},defaultFormattingWidth:"wide"}),day:(0,t.default)({values:{narrow:["N","P","W","\u015a","C","P","S"],short:["nie","pon","wto","\u015bro","czw","pi\u0105","sob"],abbreviated:["niedz.","pon.","wt.","\u015br.","czw.","pt.","sob."],wide:["niedziela","poniedzia\u0142ek","wtorek","\u015broda","czwartek","pi\u0105tek","sobota"]},defaultWidth:"wide",formattingValues:{narrow:["n","p","w","\u015b","c","p","s"],short:["nie","pon","wto","\u015bro","czw","pi\u0105","sob"],abbreviated:["niedz.","pon.","wt.","\u015br.","czw.","pt.","sob."],wide:["niedziela","poniedzia\u0142ek","wtorek","\u015broda","czwartek","pi\u0105tek","sobota"]},defaultFormattingWidth:"wide"}),dayPeriod:(0,t.default)({values:{narrow:{am:"a",pm:"p",midnight:"p\xf3\u0142n.",noon:"po\u0142",morning:"rano",afternoon:"popo\u0142.",evening:"wiecz.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"p\xf3\u0142noc",noon:"po\u0142udnie",morning:"rano",afternoon:"popo\u0142udnie",evening:"wiecz\xf3r",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"p\xf3\u0142noc",noon:"po\u0142udnie",morning:"rano",afternoon:"popo\u0142udnie",evening:"wiecz\xf3r",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"o p\xf3\u0142n.",noon:"w po\u0142.",morning:"rano",afternoon:"po po\u0142.",evening:"wiecz.",night:"w nocy"},abbreviated:{am:"AM",pm:"PM",midnight:"o p\xf3\u0142nocy",noon:"w po\u0142udnie",morning:"rano",afternoon:"po po\u0142udniu",evening:"wieczorem",night:"w nocy"},wide:{am:"AM",pm:"PM",midnight:"o p\xf3\u0142nocy",noon:"w po\u0142udnie",morning:"rano",afternoon:"po po\u0142udniu",evening:"wieczorem",night:"w nocy"}},defaultFormattingWidth:"wide"})};n.default=o,e.exports=n.default}}]);