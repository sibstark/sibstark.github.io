(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[245],{288:function(n,e,u){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n,e,u){u=u||{};var o,r=t[n];o="object"===typeof r.other?"other":1===e?"one":e>1&&e<5||0===e?"few":"many";var a,i=!0===u.addSuffix,p=u.comparison;a=i&&-1===p?"past":i&&1===p?"future":"regular";return r[o][a].replace("{{count}}",e)};var t={lessThanXSeconds:{one:{regular:"m\xe9n\u011b ne\u017e vte\u0159ina",past:"p\u0159ed m\xe9n\u011b ne\u017e vte\u0159inou",future:"za m\xe9n\u011b ne\u017e vte\u0159inu"},few:{regular:"m\xe9n\u011b ne\u017e {{count}} vte\u0159iny",past:"p\u0159ed m\xe9n\u011b ne\u017e {{count}} vte\u0159inami",future:"za m\xe9n\u011b ne\u017e {{count}} vte\u0159iny"},many:{regular:"m\xe9n\u011b ne\u017e {{count}} vte\u0159in",past:"p\u0159ed m\xe9n\u011b ne\u017e {{count}} vte\u0159inami",future:"za m\xe9n\u011b ne\u017e {{count}} vte\u0159in"}},xSeconds:{one:{regular:"vte\u0159ina",past:"p\u0159ed vte\u0159inou",future:"za vte\u0159inu"},few:{regular:"{{count}} vte\u0159iny",past:"p\u0159ed {{count}} vte\u0159inami",future:"za {{count}} vte\u0159iny"},many:{regular:"{{count}} vte\u0159in",past:"p\u0159ed {{count}} vte\u0159inami",future:"za {{count}} vte\u0159in"}},halfAMinute:{other:{regular:"p\u016fl minuty",past:"p\u0159ed p\u016fl minutou",future:"za p\u016fl minuty"}},lessThanXMinutes:{one:{regular:"m\xe9n\u011b ne\u017e minuta",past:"p\u0159ed m\xe9n\u011b ne\u017e minutou",future:"za m\xe9n\u011b ne\u017e minutu"},few:{regular:"m\xe9n\u011b ne\u017e {{count}} minuty",past:"p\u0159ed m\xe9n\u011b ne\u017e {{count}} minutami",future:"za m\xe9n\u011b ne\u017e {{count}} minuty"},many:{regular:"m\xe9n\u011b ne\u017e {{count}} minut",past:"p\u0159ed m\xe9n\u011b ne\u017e {{count}} minutami",future:"za m\xe9n\u011b ne\u017e {{count}} minut"}},xMinutes:{one:{regular:"minuta",past:"p\u0159ed minutou",future:"za minutu"},few:{regular:"{{count}} minuty",past:"p\u0159ed {{count}} minutami",future:"za {{count}} minuty"},many:{regular:"{{count}} minut",past:"p\u0159ed {{count}} minutami",future:"za {{count}} minut"}},aboutXHours:{one:{regular:"p\u0159ibli\u017en\u011b hodina",past:"p\u0159ibli\u017en\u011b p\u0159ed hodinou",future:"p\u0159ibli\u017en\u011b za hodinu"},few:{regular:"p\u0159ibli\u017en\u011b {{count}} hodiny",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} hodinami",future:"p\u0159ibli\u017en\u011b za {{count}} hodiny"},many:{regular:"p\u0159ibli\u017en\u011b {{count}} hodin",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} hodinami",future:"p\u0159ibli\u017en\u011b za {{count}} hodin"}},xHours:{one:{regular:"hodina",past:"p\u0159ed hodinou",future:"za hodinu"},few:{regular:"{{count}} hodiny",past:"p\u0159ed {{count}} hodinami",future:"za {{count}} hodiny"},many:{regular:"{{count}} hodin",past:"p\u0159ed {{count}} hodinami",future:"za {{count}} hodin"}},xDays:{one:{regular:"den",past:"p\u0159ed dnem",future:"za den"},few:{regular:"{{count}} dny",past:"p\u0159ed {{count}} dny",future:"za {{count}} dny"},many:{regular:"{{count}} dn\xed",past:"p\u0159ed {{count}} dny",future:"za {{count}} dn\xed"}},aboutXWeeks:{one:{regular:"p\u0159ibli\u017en\u011b t\xfdden",past:"p\u0159ibli\u017en\u011b p\u0159ed t\xfddnem",future:"p\u0159ibli\u017en\u011b za t\xfdden"},few:{regular:"p\u0159ibli\u017en\u011b {{count}} t\xfddny",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} t\xfddny",future:"p\u0159ibli\u017en\u011b za {{count}} t\xfddny"},many:{regular:"p\u0159ibli\u017en\u011b {{count}} t\xfddn\u016f",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} t\xfddny",future:"p\u0159ibli\u017en\u011b za {{count}} t\xfddn\u016f"}},xWeeks:{one:{regular:"t\xfdden",past:"p\u0159ed t\xfddnem",future:"za t\xfdden"},few:{regular:"{{count}} t\xfddny",past:"p\u0159ed {{count}} t\xfddny",future:"za {{count}} t\xfddny"},many:{regular:"{{count}} t\xfddn\u016f",past:"p\u0159ed {{count}} t\xfddny",future:"za {{count}} t\xfddn\u016f"}},aboutXMonths:{one:{regular:"p\u0159ibli\u017en\u011b m\u011bs\xedc",past:"p\u0159ibli\u017en\u011b p\u0159ed m\u011bs\xedcem",future:"p\u0159ibli\u017en\u011b za m\u011bs\xedc"},few:{regular:"p\u0159ibli\u017en\u011b {{count}} m\u011bs\xedce",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} m\u011bs\xedci",future:"p\u0159ibli\u017en\u011b za {{count}} m\u011bs\xedce"},many:{regular:"p\u0159ibli\u017en\u011b {{count}} m\u011bs\xedc\u016f",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} m\u011bs\xedci",future:"p\u0159ibli\u017en\u011b za {{count}} m\u011bs\xedc\u016f"}},xMonths:{one:{regular:"m\u011bs\xedc",past:"p\u0159ed m\u011bs\xedcem",future:"za m\u011bs\xedc"},few:{regular:"{{count}} m\u011bs\xedce",past:"p\u0159ed {{count}} m\u011bs\xedci",future:"za {{count}} m\u011bs\xedce"},many:{regular:"{{count}} m\u011bs\xedc\u016f",past:"p\u0159ed {{count}} m\u011bs\xedci",future:"za {{count}} m\u011bs\xedc\u016f"}},aboutXYears:{one:{regular:"p\u0159ibli\u017en\u011b rok",past:"p\u0159ibli\u017en\u011b p\u0159ed rokem",future:"p\u0159ibli\u017en\u011b za rok"},few:{regular:"p\u0159ibli\u017en\u011b {{count}} roky",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} roky",future:"p\u0159ibli\u017en\u011b za {{count}} roky"},many:{regular:"p\u0159ibli\u017en\u011b {{count}} rok\u016f",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} roky",future:"p\u0159ibli\u017en\u011b za {{count}} rok\u016f"}},xYears:{one:{regular:"rok",past:"p\u0159ed rokem",future:"za rok"},few:{regular:"{{count}} roky",past:"p\u0159ed {{count}} roky",future:"za {{count}} roky"},many:{regular:"{{count}} rok\u016f",past:"p\u0159ed {{count}} roky",future:"za {{count}} rok\u016f"}},overXYears:{one:{regular:"v\xedce ne\u017e rok",past:"p\u0159ed v\xedce ne\u017e rokem",future:"za v\xedce ne\u017e rok"},few:{regular:"v\xedce ne\u017e {{count}} roky",past:"p\u0159ed v\xedce ne\u017e {{count}} roky",future:"za v\xedce ne\u017e {{count}} roky"},many:{regular:"v\xedce ne\u017e {{count}} rok\u016f",past:"p\u0159ed v\xedce ne\u017e {{count}} roky",future:"za v\xedce ne\u017e {{count}} rok\u016f"}},almostXYears:{one:{regular:"skoro rok",past:"skoro p\u0159ed rokem",future:"skoro za rok"},few:{regular:"skoro {{count}} roky",past:"skoro p\u0159ed {{count}} roky",future:"skoro za {{count}} roky"},many:{regular:"skoro {{count}} rok\u016f",past:"skoro p\u0159ed {{count}} roky",future:"skoro za {{count}} rok\u016f"}}};n.exports=e.default}}]);