(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[216,227],{191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,r=i.width?String(i.width):d;a=e.formattingValues[r]||e.formattingValues[d]}else{var o=e.defaultWidth,u=i.width?String(i.width):e.defaultWidth;a=e.values[u]||e.values[o]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},501:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(191))&&a.__esModule?a:{default:a};var d={ordinalNumber:function(e,t){return Number(e)},era:(0,i.default)({values:{narrow:["\u0b95\u0bbf.\u0bae\u0bc1.","\u0b95\u0bbf.\u0baa\u0bbf."],abbreviated:["\u0b95\u0bbf.\u0bae\u0bc1.","\u0b95\u0bbf.\u0baa\u0bbf."],wide:["\u0b95\u0bbf\u0bb1\u0bbf\u0bb8\u0bcd\u0ba4\u0bc1\u0bb5\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd","\u0b85\u0ba9\u0bcd\u0ba9\u0bcb \u0b9f\u0bcb\u0bae\u0bbf\u0ba9\u0bbf"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["\u0b95\u0bbe\u0bb2\u0bbe.1","\u0b95\u0bbe\u0bb2\u0bbe.2","\u0b95\u0bbe\u0bb2\u0bbe.3","\u0b95\u0bbe\u0bb2\u0bbe.4"],wide:["\u0b92\u0ba9\u0bcd\u0bb1\u0bbe\u0bae\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1","\u0b87\u0bb0\u0ba3\u0bcd\u0b9f\u0bbe\u0bae\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1","\u0bae\u0bc2\u0ba9\u0bcd\u0bb1\u0bbe\u0bae\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1","\u0ba8\u0bbe\u0ba9\u0bcd\u0b95\u0bbe\u0bae\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["\u0b9c","\u0baa\u0bbf","\u0bae\u0bbe","\u0b8f","\u0bae\u0bc7","\u0b9c\u0bc2","\u0b9c\u0bc2","\u0b86","\u0b9a\u0bc6","\u0b85","\u0ba8","\u0b9f\u0bbf"],abbreviated:["\u0b9c\u0ba9.","\u0baa\u0bbf\u0baa\u0bcd.","\u0bae\u0bbe\u0bb0\u0bcd.","\u0b8f\u0baa\u0bcd.","\u0bae\u0bc7","\u0b9c\u0bc2\u0ba9\u0bcd","\u0b9c\u0bc2\u0bb2\u0bc8","\u0b86\u0b95.","\u0b9a\u0bc6\u0baa\u0bcd.","\u0b85\u0b95\u0bcd.","\u0ba8\u0bb5.","\u0b9f\u0bbf\u0b9a."],wide:["\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf","\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf","\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd","\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd","\u0bae\u0bc7","\u0b9c\u0bc2\u0ba9\u0bcd","\u0b9c\u0bc2\u0bb2\u0bc8","\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd","\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bae\u0bcd\u0baa\u0bb0\u0bcd","\u0b85\u0b95\u0bcd\u0b9f\u0bcb\u0baa\u0bb0\u0bcd","\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd","\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["\u0b9e\u0bbe","\u0ba4\u0bbf","\u0b9a\u0bc6","\u0baa\u0bc1","\u0bb5\u0bbf","\u0bb5\u0bc6","\u0b9a"],short:["\u0b9e\u0bbe","\u0ba4\u0bbf","\u0b9a\u0bc6","\u0baa\u0bc1","\u0bb5\u0bbf","\u0bb5\u0bc6","\u0b9a"],abbreviated:["\u0b9e\u0bbe\u0baf\u0bbf.","\u0ba4\u0bbf\u0b99\u0bcd.","\u0b9a\u0bc6\u0bb5\u0bcd.","\u0baa\u0bc1\u0ba4.","\u0bb5\u0bbf\u0baf\u0bbe.","\u0bb5\u0bc6\u0bb3\u0bcd.","\u0b9a\u0ba9\u0bbf"],wide:["\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1","\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd","\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd","\u0baa\u0bc1\u0ba4\u0ba9\u0bcd","\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd","\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf","\u0b9a\u0ba9\u0bbf"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"\u0bae\u0bc1.\u0baa",pm:"\u0baa\u0bbf.\u0baa",midnight:"\u0ba8\u0bb3\u0bcd.",noon:"\u0ba8\u0ba3\u0bcd.",morning:"\u0b95\u0bbe.",afternoon:"\u0bae\u0ba4\u0bbf.",evening:"\u0bae\u0bbe.",night:"\u0b87\u0bb0."},abbreviated:{am:"\u0bae\u0bc1\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd",pm:"\u0baa\u0bbf\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd",midnight:"\u0ba8\u0bb3\u0bcd\u0bb3\u0bbf\u0bb0\u0bb5\u0bc1",noon:"\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd",morning:"\u0b95\u0bbe\u0bb2\u0bc8",afternoon:"\u0bae\u0ba4\u0bbf\u0baf\u0bae\u0bcd",evening:"\u0bae\u0bbe\u0bb2\u0bc8",night:"\u0b87\u0bb0\u0bb5\u0bc1"},wide:{am:"\u0bae\u0bc1\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd",pm:"\u0baa\u0bbf\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd",midnight:"\u0ba8\u0bb3\u0bcd\u0bb3\u0bbf\u0bb0\u0bb5\u0bc1",noon:"\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd",morning:"\u0b95\u0bbe\u0bb2\u0bc8",afternoon:"\u0bae\u0ba4\u0bbf\u0baf\u0bae\u0bcd",evening:"\u0bae\u0bbe\u0bb2\u0bc8",night:"\u0b87\u0bb0\u0bb5\u0bc1"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u0bae\u0bc1.\u0baa",pm:"\u0baa\u0bbf.\u0baa",midnight:"\u0ba8\u0bb3\u0bcd.",noon:"\u0ba8\u0ba3\u0bcd.",morning:"\u0b95\u0bbe.",afternoon:"\u0bae\u0ba4\u0bbf.",evening:"\u0bae\u0bbe.",night:"\u0b87\u0bb0."},abbreviated:{am:"\u0bae\u0bc1\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd",pm:"\u0baa\u0bbf\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd",midnight:"\u0ba8\u0bb3\u0bcd\u0bb3\u0bbf\u0bb0\u0bb5\u0bc1",noon:"\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd",morning:"\u0b95\u0bbe\u0bb2\u0bc8",afternoon:"\u0bae\u0ba4\u0bbf\u0baf\u0bae\u0bcd",evening:"\u0bae\u0bbe\u0bb2\u0bc8",night:"\u0b87\u0bb0\u0bb5\u0bc1"},wide:{am:"\u0bae\u0bc1\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd",pm:"\u0baa\u0bbf\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd",midnight:"\u0ba8\u0bb3\u0bcd\u0bb3\u0bbf\u0bb0\u0bb5\u0bc1",noon:"\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd",morning:"\u0b95\u0bbe\u0bb2\u0bc8",afternoon:"\u0bae\u0ba4\u0bbf\u0baf\u0bae\u0bcd",evening:"\u0bae\u0bbe\u0bb2\u0bc8",night:"\u0b87\u0bb0\u0bb5\u0bc1"}},defaultFormattingWidth:"wide"})};t.default=d,e.exports=t.default}}]);