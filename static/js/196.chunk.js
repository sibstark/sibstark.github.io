(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[196,227],{228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,r=i.width?String(i.width):o;a=e.formattingValues[r]||e.formattingValues[o]}else{var u=e.defaultWidth,d=i.width?String(i.width):e.defaultWidth;a=e.values[d]||e.values[u]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},439:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(228))&&a.__esModule?a:{default:a};var o={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,i.default)({values:{narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["viru Christus","no Christus"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","M\xe4e","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","M\xe4erz","Abr\xebll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["S","M","D","M","D","F","S"],short:["So","M\xe9","D\xeb","M\xeb","Do","Fr","Sa"],abbreviated:["So.","M\xe9.","D\xeb.","M\xeb.","Do.","Fr.","Sa."],wide:["Sonndeg","M\xe9indeg","D\xebnschdeg","M\xebttwoch","Donneschdeg","Freideg","Samschdeg"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"mo.",pm:"nom\xeb.",midnight:"M\xebtternuecht",noon:"M\xebtteg",morning:"Moien",afternoon:"Nom\xebtteg",evening:"Owend",night:"Nuecht"},abbreviated:{am:"moies",pm:"nom\xebttes",midnight:"M\xebtternuecht",noon:"M\xebtteg",morning:"Moien",afternoon:"Nom\xebtteg",evening:"Owend",night:"Nuecht"},wide:{am:"moies",pm:"nom\xebttes",midnight:"M\xebtternuecht",noon:"M\xebtteg",morning:"Moien",afternoon:"Nom\xebtteg",evening:"Owend",night:"Nuecht"}},defaultWidth:"wide",formattingValues:{narrow:{am:"mo.",pm:"nom.",midnight:"M\xebtternuecht",noon:"m\xebttes",morning:"moies",afternoon:"nom\xebttes",evening:"owes",night:"nuets"},abbreviated:{am:"moies",pm:"nom\xebttes",midnight:"M\xebtternuecht",noon:"m\xebttes",morning:"moies",afternoon:"nom\xebttes",evening:"owes",night:"nuets"},wide:{am:"moies",pm:"nom\xebttes",midnight:"M\xebtternuecht",noon:"m\xebttes",morning:"moies",afternoon:"nom\xebttes",evening:"owes",night:"nuets"}},defaultFormattingWidth:"wide"})};t.default=o,e.exports=t.default}}]);