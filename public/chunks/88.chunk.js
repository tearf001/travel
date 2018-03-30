webpackJsonp([88],{714:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"feed",data:function(){return{listLoading:!0,showData:{},list:null,listQuery:{}}},methods:{handleSizeChange:function(e){this.$router.push({path:"/admin/manage/feed",query:{limit:e}})},handleCurrentChange:function(e){this.$router.push({path:"/admin/manage/feed",query:{page:e}})},handleDelete:function(e){var t=this;this.$http.delete("/admin/feed/"+e.id).then(function(e){204===e.status&&(t.$message({type:"success",message:"删除成功"}),t.fetchList())})},fetchList:function(){var e=this;this.listLoading=!0,this.$http.get("/admin/feed?page="+this.currentPage+"&limit="+this.currentLimit).then(function(t){var n=t.data;e.list=n.data,e.listQuery=n.meta.pagination,e.listLoading=!1})}},mounted:function(){this.fetchList()},watch:{currentPage:"fetchList",currentLimit:"fetchList"},computed:{currentPage:function(){return parseInt(this.$route.query.page,10)||1},currentLimit:function(){return parseInt(this.$route.query.limit,10)||10},dataList:function(){return this.list}}}},715:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"反馈内容"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.content))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"反馈者ip地址"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.ip))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"反馈者用户id"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.user_id))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.created_at))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"更新时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.updated_at))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return["deleted"!=t.row.status?n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){e.handleDelete(t.row,"deleted")}}},[e._v("删除\n          ")]):e._e()]}}])})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":e.listQuery.current_page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.per_page,layout:"total, sizes, prev, pager, next, jumper",total:e.listQuery.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]}},858:function(e,t,n){var a=n(1)(n(714),n(715),!1,null,null,null);e.exports=a.exports}});