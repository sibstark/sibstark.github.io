/*! For license information please see 720.chunk.js.LICENSE.txt */
(this["webpackJsonp@mzt/embedded-plugin"]=this["webpackJsonp@mzt/embedded-plugin"]||[]).push([[720],{1005:function(r,e,u){!function(r){"use strict";function e(r){return r%100===11||r%10!==1}function u(r,u,n,a){var s=r+" ";switch(n){case"s":return u||a?"nokkrar sek\xfandur":"nokkrum sek\xfandum";case"ss":return e(r)?s+(u||a?"sek\xfandur":"sek\xfandum"):s+"sek\xfanda";case"m":return u?"m\xedn\xfata":"m\xedn\xfatu";case"mm":return e(r)?s+(u||a?"m\xedn\xfatur":"m\xedn\xfatum"):u?s+"m\xedn\xfata":s+"m\xedn\xfatu";case"hh":return e(r)?s+(u||a?"klukkustundir":"klukkustundum"):s+"klukkustund";case"d":return u?"dagur":a?"dag":"degi";case"dd":return e(r)?u?s+"dagar":s+(a?"daga":"d\xf6gum"):u?s+"dagur":s+(a?"dag":"degi");case"M":return u?"m\xe1nu\xf0ur":a?"m\xe1nu\xf0":"m\xe1nu\xf0i";case"MM":return e(r)?u?s+"m\xe1nu\xf0ir":s+(a?"m\xe1nu\xf0i":"m\xe1nu\xf0um"):u?s+"m\xe1nu\xf0ur":s+(a?"m\xe1nu\xf0":"m\xe1nu\xf0i");case"y":return u||a?"\xe1r":"\xe1ri";case"yy":return e(r)?s+(u||a?"\xe1r":"\xe1rum"):s+(u||a?"\xe1r":"\xe1ri")}}r.defineLocale("is",{months:"jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"),monthsShort:"jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"),weekdays:"sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"),weekdaysShort:"sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"),weekdaysMin:"Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[\xed dag kl.] LT",nextDay:"[\xe1 morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[\xed g\xe6r kl.] LT",lastWeek:"[s\xed\xf0asta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s s\xed\xf0an",s:u,ss:u,m:u,mm:u,h:"klukkustund",hh:u,d:u,dd:u,M:u,MM:u,y:u,yy:u},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(u(13))}}]);