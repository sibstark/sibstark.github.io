(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[178,227],{342:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,i){var a,r=i||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,d=r.width?String(r.width):n;a=e.formattingValues[d]||e.formattingValues[n]}else{var m=e.defaultWidth,u=r.width?String(r.width):e.defaultWidth;a=e.values[u]||e.values[m]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},467:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=i(342))&&a.__esModule?a:{default:a};var n={ordinalNumber:function(e,t){var i=Number(e),a=String((t||{}).unit);return 0===i?i:i+("year"===a||"hour"===a||"week"===a?1===i?"\xe8re":"\xe8me":1===i?"er":"\xe8me")},era:(0,r.default)({values:{narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant J\xe9sus-Christ","apr\xe8s J\xe9sus-Christ"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2\xe8me trim.","3\xe8me trim.","4\xe8me trim."],wide:["1er trimestre","2\xe8me trimestre","3\xe8me trimestre","4\xe8me trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","f\xe9vr.","mars","avr.","mai","juin","juil.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],wide:["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"apr\xe8s-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l\u2019apr\xe8s-midi",evening:"du soir",night:"du matin"}},defaultWidth:"wide"})};t.default=n,e.exports=t.default}}]);