(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[223,227],{342:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return function(n,e){var a,i=e||{};if("formatting"===(i.context?String(i.context):"standalone")&&t.formattingValues){var h=t.defaultFormattingWidth||t.defaultWidth,r=i.width?String(i.width):h;a=t.formattingValues[r]||t.formattingValues[h]}else{var g=t.defaultWidth,u=i.width?String(i.width):t.defaultWidth;a=t.values[u]||t.values[g]}return a[t.argumentCallback?t.argumentCallback(n):n]}},t.exports=n.default},686:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,i=(a=e(342))&&a.__esModule?a:{default:a};var h={ordinalNumber:function(t,n){var e=String((n||{}).unit),a=parseInt(t,10);if("quarter"===e)switch(a){case 1:return"I";case 2:return"II";case 3:return"III";case 4:return"IV"}else if("day"===e)switch(a){case 1:return"th\u1ee9 2";case 2:return"th\u1ee9 3";case 3:return"th\u1ee9 4";case 4:return"th\u1ee9 5";case 5:return"th\u1ee9 6";case 6:return"th\u1ee9 7";case 7:return"ch\u1ee7 nh\u1eadt"}else{if("week"===e)return 1===a?"th\u1ee9 nh\u1ea5t":"th\u1ee9 "+a;if("dayOfYear"===e)return 1===a?"\u0111\u1ea7u ti\xean":"th\u1ee9 "+a}return a},era:(0,i.default)({values:{narrow:["TCN","SCN"],abbreviated:["tr\u01b0\u1edbc CN","sau CN"],wide:["tr\u01b0\u1edbc C\xf4ng Nguy\xean","sau C\xf4ng Nguy\xean"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["Qu\xfd 1","Qu\xfd 2","Qu\xfd 3","Qu\xfd 4"]},defaultWidth:"wide",formattingValues:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["qu\xfd I","qu\xfd II","qu\xfd III","qu\xfd IV"]},defaultFormattingWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:(0,i.default)({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["Thg 1","Thg 2","Thg 3","Thg 4","Thg 5","Thg 6","Thg 7","Thg 8","Thg 9","Thg 10","Thg 11","Thg 12"],wide:["Th\xe1ng M\u1ed9t","Th\xe1ng Hai","Th\xe1ng Ba","Th\xe1ng T\u01b0","Th\xe1ng N\u0103m","Th\xe1ng S\xe1u","Th\xe1ng B\u1ea3y","Th\xe1ng T\xe1m","Th\xe1ng Ch\xedn","Th\xe1ng M\u01b0\u1eddi","Th\xe1ng M\u01b0\u1eddi M\u1ed9t","Th\xe1ng M\u01b0\u1eddi Hai"]},defaultWidth:"wide",formattingValues:{narrow:["01","02","03","04","05","06","07","08","09","10","11","12"],abbreviated:["thg 1","thg 2","thg 3","thg 4","thg 5","thg 6","thg 7","thg 8","thg 9","thg 10","thg 11","thg 12"],wide:["th\xe1ng 01","th\xe1ng 02","th\xe1ng 03","th\xe1ng 04","th\xe1ng 05","th\xe1ng 06","th\xe1ng 07","th\xe1ng 08","th\xe1ng 09","th\xe1ng 10","th\xe1ng 11","th\xe1ng 12"]},defaultFormattingWidth:"wide"}),day:(0,i.default)({values:{narrow:["CN","T2","T3","T4","T5","T6","T7"],short:["CN","Th 2","Th 3","Th 4","Th 5","Th 6","Th 7"],abbreviated:["CN","Th\u1ee9 2","Th\u1ee9 3","Th\u1ee9 4","Th\u1ee9 5","Th\u1ee9 6","Th\u1ee9 7"],wide:["Ch\u1ee7 Nh\u1eadt","Th\u1ee9 Hai","Th\u1ee9 Ba","Th\u1ee9 T\u01b0","Th\u1ee9 N\u0103m","Th\u1ee9 S\xe1u","Th\u1ee9 B\u1ea3y"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"am",pm:"pm",midnight:"n\u1eeda \u0111\xeam",noon:"tr",morning:"sg",afternoon:"ch",evening:"t\u1ed1i",night:"\u0111\xeam"},abbreviated:{am:"AM",pm:"PM",midnight:"n\u1eeda \u0111\xeam",noon:"tr\u01b0a",morning:"s\xe1ng",afternoon:"chi\u1ec1u",evening:"t\u1ed1i",night:"\u0111\xeam"},wide:{am:"SA",pm:"CH",midnight:"n\u1eeda \u0111\xeam",noon:"tr\u01b0a",morning:"s\xe1ng",afternoon:"chi\u1ec1u",evening:"t\u1ed1i",night:"\u0111\xeam"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"n\u1eeda \u0111\xeam",noon:"tr",morning:"sg",afternoon:"ch",evening:"t\u1ed1i",night:"\u0111\xeam"},abbreviated:{am:"AM",pm:"PM",midnight:"n\u1eeda \u0111\xeam",noon:"tr\u01b0a",morning:"s\xe1ng",afternoon:"chi\u1ec1u",evening:"t\u1ed1i",night:"\u0111\xeam"},wide:{am:"SA",pm:"CH",midnight:"n\u1eeda \u0111\xeam",noon:"gi\u1eefa tr\u01b0a",morning:"v\xe0o bu\u1ed5i s\xe1ng",afternoon:"v\xe0o bu\u1ed5i chi\u1ec1u",evening:"v\xe0o bu\u1ed5i t\u1ed1i",night:"v\xe0o ban \u0111\xeam"}},defaultFormattingWidth:"wide"})};n.default=h,t.exports=n.default}}]);