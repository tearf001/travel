webpackJsonp([42],{281:function(t,s,a){var e=a(1)(a(282),a(283),!1,null,null,null);t.exports=e.exports},282:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(52);s.default={data:function(){return{trafficlist:e.f}}}},283:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content-right-blk"},[a("div",{staticClass:"right-nav-blk yellow"},[a("ul",{staticClass:"right-nav-list"},t._l(t.trafficlist,function(s,e){return a("li",{key:e,staticClass:"item"},[a("router-link",{staticClass:"link",attrs:{to:s.url,title:s.name}},[a("img",{staticClass:"thumb lazyloaded",attrs:{src:s.img,alt:s.name}}),t._v(" "),a("strong",{staticClass:"title"},[t._v(t._s(s.name))])])],1)}))])])},staticRenderFns:[]}},473:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(86),i=a.n(e),l=a(281),n=a.n(l);s.default={components:{Breadcrumb:i.a,"slide-bar":n.a},methods:{backPages:function(){return this.$router.go(-1)}}}},474:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"unit-title-blk bg-slash"},[a("Breadcrumb",{staticClass:"breadcrumb"}),t._v(" "),a("h2",{staticClass:"unit-title icon-unit-accommodation"},[t._v(t._s(t.$route.name))])],1),t._v(" "),a("div",{staticClass:"page-content-wrapper member-wrapper"},[a("div",{staticClass:"content-left-blk"},[t._m(0),t._v(" "),a("div",{staticClass:"page-func-blk"},[a("a",{staticClass:"btn-page-direction",attrs:{href:"javascript:void(0);",title:"回前页"},on:{click:t.backPages}},[t._v("回前页")])])]),t._v(" "),a("slide-bar")],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"news-detail-blk"},[s("div",{staticClass:"manual-script-blk static-script-blk"},[s("ol",[s("li",[s("h3",{staticClass:"static-title"},[this._v("汽车查询")]),this._v(" "),s("h5",[this._v("第一步:乘坐前往中源的汽车或者乘坐前往靖安的汽车")]),this._v(" "),s("p",{staticClass:"static-desc"},[s("a",{attrs:{title:"汽车换乘查询|弹出窗口",href:"http://www.jxlwsp.com/ ",target:"_blank"}},[this._v("汽车换乘查询")]),this._v(" "),s("span",[this._v('通过微信搜索关注"南昌长途汽车站"即可以查找到中源的汽车版班次')])])])])])])}]}},821:function(t,s,a){var e=a(1)(a(473),a(474),!1,null,null,null);t.exports=e.exports}});