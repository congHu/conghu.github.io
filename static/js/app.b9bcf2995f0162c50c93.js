webpackJsonp([1],{"09yM":function(t,s){},B8Dz:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("kV13"),i=(e("09yM"),e("UspY"),e("ZLEe")),a=e.n(i),r={name:"App",data:function(){return{loading:!0,videoList:[],seriesType:{},videoType:{},testSubject:[],testBrand:[],searching:!1,searchResult:[],searchResultPage:1}},mounted:function(){var t=this;this.$http({method:"get",url:"./static/testv.csv"}).then(function(s){var e=[],n=[],i={},r={},c={},l={};s.data.split("\n").forEach(function(t,s){if(""!==t)if(0===s)n=t.split(",");else{var a={};t.split(",").forEach(function(t,s){a[n[s].trim()]=t}),e.push(a);var o=a.series_type;i.hasOwnProperty(o)?i[o]+=1:(i[o]=1,r[o]={}),a.video_type.split("|").forEach(function(t){""===t&&(t="未分类"),r[o].hasOwnProperty(t)?r[o][t]+=1:r[o][t]=1}),a.test_subject.split("|").forEach(function(t){""!==t&&(c.hasOwnProperty(t)?c[t]+=1:c[t]=1)}),a.test_brand.split("|").forEach(function(t){""!==t&&(l.hasOwnProperty(t)?l[t]+=1:l[t]=1)})}}),t.videoList=e,t.seriesType=i;var o={},u=function(t){var s=r[t];o[t]=a()(s).map(function(t){return{n:t,c:s[t]}}),o[t].sort(function(t,s){return s.c-t.c})};for(var _ in r)u(_);var v=a()(c).map(function(t){return{n:t,c:c[t]}}),p=a()(l).map(function(t){return{n:t,c:l[t]}});t.videoType=o,t.testSubject=v.sort(function(t,s){return s.c-t.c}),t.testBrand=p.sort(function(t,s){return s.c-t.c}),t.loading=!1})},methods:{doSearchSt:function(t){this.searching=!0,this.searchResult=this.videoList.filter(function(s){return s.series_type===t}),window.scrollTo(0,0)},doSearchVt:function(t,s){this.searching=!0,this.searchResult=this.videoList.filter(function(e){return e.series_type===t&&e.video_type.indexOf(s)>=0}),window.scrollTo(0,0)},doSearchTs:function(t){this.searching=!0,this.searchResult=this.videoList.filter(function(s){return s.test_subject.indexOf(t)>=0}),window.scrollTo(0,0)},doSearchTb:function(t){this.searching=!0,this.searchResult=this.videoList.filter(function(s){return s.test_brand.indexOf(t)>=0}),window.scrollTo(0,0)},showDate:function(t){var s=new Date(1e3*parseInt(t)),e=s.getMonth()+1;e=e<10?"0"+e:e;var n=s.getDate();return n=n<10?"0"+n:n,s.getFullYear()+"-"+e+"-"+n}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("el-container",[e("el-header",[e("div",{attrs:{id:"headerLogo"},on:{click:function(s){t.searching=!1}}})]),t._v(" "),e("el-main",[e("el-row",{attrs:{type:"flex",justify:"center"}},[e("ul",{staticClass:"headTip"},[e("li",[t._v("TESTV铁丝站展示铁丝整理TESTV投稿视频。")]),t._v(" "),e("li",[t._v("目前只归纳"),e("a",{staticClass:"hl-a",attrs:{href:"https://space.bilibili.com/11336264/video",target:"_blank"}},[t._v("“TESTV官方频道”B站账号")]),t._v("的视频投稿。")])])]),t._v(" "),e("el-row",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticStyle:{height:"600px"},attrs:{type:"flex",justify:"center",align:"middle"}},[e("i",{staticClass:"el-icon-loading",staticStyle:{color:"#fefdfc","font-size":"36px"}})]),t._v(" "),e("el-row",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[e("el-col",{directives:[{name:"show",rawName:"v-show",value:t.searching,expression:"searching"}],attrs:{xs:24,sm:18}},[e("ul",t._l(t.searchResult,function(s){return e("li",{key:s.aid,staticClass:"video-item"},[e("a",{staticClass:"hl-a",attrs:{href:"https://www.bilibili.com/av"+s.aid,target:"_blank"}},[t._v("av"+t._s(s.aid)+" "+t._s(s.title))]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"video-subtext"},[t._v("\n                系列: "),e("span",{staticClass:"hl-a",on:{click:function(e){return t.doSearchSt(s.series_type)}}},[t._v(t._s(s.series_type))]),t._v(" "),""!=s.video_type?e("span",[t._v("\n                  | 类型:\n                  "),t._l(s.video_type.split("|"),function(n,i){return e("span",{key:i},[e("span",{staticClass:"hl-a",on:{click:function(e){return t.doSearchVt(s.series_type,n)}}},[t._v(t._s(n))]),t._v(" "),i!=s.video_type.split("|").length-1?e("span",[t._v("\n                      ,\n                    ")]):t._e()])})],2):t._e(),t._v(" "),""!=s.test_subject?e("span",[t._v("\n                  | 体验:\n                  "),t._l(s.test_subject.split("|"),function(n,i){return e("span",{key:i},[e("span",{staticClass:"hl-a",on:{click:function(s){return t.doSearchTs(n)}}},[t._v(t._s(n))]),t._v(" "),i!=s.test_subject.split("|").length-1?e("span",[t._v("\n                      ,\n                    ")]):t._e()])})],2):t._e(),t._v(" "),""!=s.test_brand?e("span",[t._v("\n                  | 相关品牌:\n                  "),t._l(s.test_brand.split("|"),function(n,i){return e("span",{key:i},[e("span",{staticClass:"hl-a",on:{click:function(s){return t.doSearchTb(n)}}},[t._v(t._s(n))]),t._v(" "),i!=s.test_brand.split("|").length-1?e("span",[t._v("\n                      ,\n                    ")]):t._e()])})],2):t._e(),t._v("\n                 | B站分区ID: "+t._s(s.bili_typeid)+"\n                 | "+t._s(t.showDate(s.publish_time)))])])}),0)]),t._v(" "),e("el-col",{attrs:{xs:24,sm:t.searching?6:24}},[e("el-row",{staticClass:"mainRow",attrs:{gutter:16}},[e("el-col",{staticClass:"mainCol",attrs:{xs:24,sm:t.searching?24:8}},[e("div",[e("span",{staticClass:"hl-a series-title",on:{click:function(s){return t.doSearchSt("正片")}}},[t._v("正片")]),e("span",{staticClass:"series-title-count subtext"},[t._v(t._s(t.seriesType.正片))])]),t._v(" "),e("div",t._l(t.videoType.正片,function(s){return e("div",{key:s.n,staticClass:"hl-tag"},[e("span",{staticClass:"hl-a",staticStyle:{"font-size":"16px"},on:{click:function(e){return t.doSearchVt("正片",s.n)}}},[t._v(t._s(s.n))]),t._v(" "),e("span",{staticClass:"subtext"},[t._v(t._s(s.c))])])}),0)]),t._v(" "),e("el-col",{staticClass:"mainCol",attrs:{xs:24,sm:t.searching?24:8}},[e("div",[e("span",{staticClass:"hl-a series-title",on:{click:function(s){return t.doSearchSt("BBT")}}},[t._v("BBT")]),e("span",{staticClass:"series-title-count subtext"},[t._v(t._s(t.seriesType.BBT))])]),t._v(" "),e("div",t._l(t.videoType.BBT,function(s){return e("div",{key:s.n,staticClass:"hl-tag"},[e("span",{staticClass:"hl-a",staticStyle:{"font-size":"16px"},on:{click:function(e){return t.doSearchVt("BBT",s.n)}}},[t._v(t._s(s.n))]),t._v(" "),e("span",{staticClass:"subtext"},[t._v(t._s(s.c))])])}),0)]),t._v(" "),e("el-col",{staticClass:"mainCol",attrs:{xs:24,sm:t.searching?24:8}},[e("div",[e("span",{staticClass:"hl-a series-title",on:{click:function(s){return t.doSearchSt("其它")}}},[t._v("其它")]),e("span",{staticClass:"series-title-count subtext"},[t._v(t._s(t.seriesType.其它))])]),t._v(" "),e("div",t._l(t.videoType.其它,function(s){return e("div",{key:s.n,staticClass:"hl-tag"},[e("span",{staticClass:"hl-a",staticStyle:{"font-size":"16px"},on:{click:function(e){return t.doSearchVt("其它",s.n)}}},[t._v(t._s(s.n))]),t._v(" "),e("span",{staticClass:"subtext"},[t._v(t._s(s.c))])])}),0)])],1),t._v(" "),e("el-row",{staticClass:"mainRow",attrs:{gutter:16}},[e("el-col",{staticClass:"mainCol",attrs:{xs:24,sm:t.searching?24:12}},[e("div",[e("span",{staticClass:"hl-a series-title"},[t._v("体验项目")]),e("span",{staticClass:"series-title-count subtext"},[t._v(t._s(Object.keys(t.testSubject).length))])]),t._v(" "),e("div",t._l(t.testSubject,function(s){return e("div",{key:s.n,staticClass:"hl-tag"},[e("span",{staticClass:"hl-a",staticStyle:{"font-size":"16px"},on:{click:function(e){return t.doSearchTs(s.n)}}},[t._v(t._s(s.n))]),t._v(" "),e("span",{staticClass:"subtext"},[t._v(t._s(s.c))])])}),0)]),t._v(" "),e("el-col",{staticClass:"mainCol",attrs:{xs:24,sm:t.searching?24:12}},[e("div",[e("span",{staticClass:"hl-a series-title"},[t._v("体验品牌")]),e("span",{staticClass:"series-title-count subtext"},[t._v(t._s(Object.keys(t.testBrand).length))])]),t._v(" "),e("div",t._l(t.testBrand,function(s){return e("div",{key:s.n,staticClass:"hl-tag"},[e("span",{staticClass:"hl-a",staticStyle:{"font-size":"16px"},on:{click:function(e){return t.doSearchTb(s.n)}}},[t._v(t._s(s.n))]),t._v(" "),e("span",{staticClass:"subtext"},[t._v(t._s(s.c))])])}),0)])],1)],1)],1)],1),t._v(" "),e("el-footer",[e("el-row",{attrs:{type:"flex",justify:"center"}},[e("ul",{staticClass:"headTip"},[e("li",[t._v("关于我：一位默默无为的小铁丝，正在往脱离白嫖的道路上努力着。")]),t._v(" "),e("li",[t._v("网站暂时部署在"),e("a",{attrs:{href:"https://github.com/congHu/conghu.github.io",target:"_blank"}},[t._v("Git仓库")])]),e("li",[e("a",{attrs:{href:"https://space.bilibili.com/11336264/video",target:"_blank"}},[t._v("前往“TESTV官方频道”的B站空间")])]),t._v(" "),e("li",[t._v("都看到这里了，要不给我"),e("a",{attrs:{href:"./static/quantum_coffee.html"}},[t._v("买杯咖啡")]),t._v("？")])])])],1)],1)],1)},staticRenderFns:[]};var l=e("C7Lr")(r,c,!1,function(t){e("B8Dz")},null,null).exports,o=e("p7sN"),u={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("asdf")])},staticRenderFns:[]};var _=e("C7Lr")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},u,!1,function(t){e("RsAe")},"data-v-4844f4a0",null).exports;n.default.use(o.a);var v=new o.a({routes:[{path:"/",name:"HelloWorld",component:_}]}),p=e("I29D"),h=e.n(p),d=e("TcQY"),f=e.n(d);n.default.prototype.$http=h.a,n.default.use(f.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:v,components:{App:l},template:"<App/>"})},RsAe:function(t,s){},UspY:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.b9bcf2995f0162c50c93.js.map