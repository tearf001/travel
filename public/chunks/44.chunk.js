webpackJsonp([44],{281:function(t,s,a){var e=a(1)(a(282),a(283),!1,null,null,null);t.exports=e.exports},282:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(52);s.default={data:function(){return{trafficlist:e.f}}}},283:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content-right-blk"},[a("div",{staticClass:"right-nav-blk yellow"},[a("ul",{staticClass:"right-nav-list"},t._l(t.trafficlist,function(s,e){return a("li",{key:e,staticClass:"item"},[a("router-link",{staticClass:"link",attrs:{to:s.url,title:s.name}},[a("img",{staticClass:"thumb lazyloaded",attrs:{src:s.img,alt:s.name}}),t._v(" "),a("strong",{staticClass:"title"},[t._v(t._s(s.name))])])],1)}))])])},staticRenderFns:[]}},469:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(86),i=a.n(e),l=a(281),n=a.n(l);s.default={components:{Breadcrumb:i.a,"slide-bar":n.a},methods:{backPages:function(){return this.$router.go(-1)}}}},470:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"unit-title-blk bg-slash"},[a("Breadcrumb",{staticClass:"breadcrumb"}),t._v(" "),a("h2",{staticClass:"unit-title icon-unit-accommodation"},[t._v(t._s(t.$route.name))])],1),t._v(" "),a("div",{staticClass:"page-content-wrapper member-wrapper"},[a("div",{staticClass:"content-left-blk"},[t._m(0),t._v(" "),a("div",{staticClass:"page-func-blk"},[a("a",{staticClass:"btn-page-direction",attrs:{href:"javascript:void(0);",title:"回前页"},on:{click:t.backPages}},[t._v("回前页")])])]),t._v(" "),a("slide-bar")],1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"news-detail-blk"},[a("div",{staticClass:"manual-script-blk static-script-blk"},[a("ol",[a("li",[a("h3",{staticClass:"static-title"},[t._v("高铁信息")]),t._v(" "),a("h5",[t._v("第一步:乘坐高铁到南昌西站")]),t._v(" "),a("p",{staticClass:"static-desc"},[a("a",{attrs:{title:"高铁信息|弹出窗口",href:"https://kyfw.12306.cn/otn/czxx/init",target:"_blank"}},[t._v("高铁信息")]),t._v(" "),a("br")])]),t._v(" "),a("li",[a("h3",{staticClass:"static-title"},[t._v("公交车查询")]),t._v(" "),a("h5",[t._v("第二步:换乘公交车到汽车站")]),t._v(" "),a("p",{staticClass:"static-desc"},[a("a",{attrs:{title:"市区公交车换乘查询|弹出窗口",href:"http://www.ncgj.com.cn/mainpages/default.aspx",target:"_blank"}},[t._v("市区公交车换乘查询")])])]),t._v(" "),a("li",[a("h3",{staticClass:"static-title"},[t._v("汽车查询")]),t._v(" "),a("h5",[t._v("第三步:乘坐前往中源的汽车或者乘坐前往靖安的汽车")]),t._v(" "),a("p",{staticClass:"static-desc"},[a("a",{attrs:{title:"汽车换乘查询|弹出窗口",href:"http://www.jxlwsp.com/ ",target:"_blank"}},[t._v("汽车换乘查询")]),t._v(" "),a("span",[t._v('通过微信搜索关注"南昌长途汽车站"即可以查找到中源的汽车版班次')])])])])])])}]}},819:function(t,s,a){var e=a(1)(a(469),a(470),!1,null,null,null);t.exports=e.exports}});