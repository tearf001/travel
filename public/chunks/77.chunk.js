webpackJsonp([77],{680:function(e,t,r){var a=r(681);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(9)("4dd0389a",a,!0,{})},681:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".ul-list[data-v-5f99121c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-moz-flex-direction:row;-moz-flex-wrap:wrap;-moz-justify-content:flex-start;-webkit-flex-wrap:wrap;-webkit-justify-content:flex-start}.ul-list>li[data-v-5f99121c]{padding:.6rem}.tags-module[data-v-5f99121c]{display:block}.tags[data-v-5f99121c]{margin:5px}",""])},682:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"categorycreate",data:function(){return{ruleForm:{name:"",desc:"",path:"",pid:null,options:[]},rules:{name:[{required:!0,message:"请输入类型名称",trigger:"blur,change"}],desc:[{required:!0,message:"请输入说明信息",trigger:"blur,change"}],pid:[{type:"number",required:!0,message:"请输入层级信息",trigger:"blur,change"}]}}},methods:{submitForm:function(e){var t=this,r=this.ruleForm;this.$refs[e].validate(function(e){e&&t.$http.post("/admin/category",r).then(function(e){var r=e.data;if(200===r.responData.status)return t.$message({type:"success",message:r.responData.messages}),t.$router.go(-1)})})},initData:function(){var e=this;this.$http.get("/admin/category/create").then(function(t){var r=t.data;200===r.responData.status&&(e.ruleForm.options=r.responData.categories)})}},mounted:function(){this.initData()}}},683:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("el-form",{ref:"ruleForm",staticClass:"signup",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{prop:"name",label:"类型名名:"}},[r("el-input",{attrs:{type:"text",placeholder:"类型名"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"pid",label:"类型层级:"}},[r("el-select",{attrs:{placeholder:"请选择分类"},model:{value:e.ruleForm.pid,callback:function(t){e.$set(e.ruleForm,"pid",e._n(t))},expression:"ruleForm.pid"}},[r("el-option",{attrs:{value:0,label:"顶层分类"}}),e._v(" "),e._l(e.ruleForm.options,function(e,t){return r("el-option",{key:t,attrs:{label:e.name+"(父级分类:pid:"+e.pid+")",value:e.id}})})],2)],1),e._v(" "),r("el-form-item",{attrs:{prop:"desc",label:"描述:"}},[r("el-input",{attrs:{type:"text",placeholder:"描述"},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"path",label:"路径"}},[r("el-input",{attrs:{type:"text",placeholder:"路径"},model:{value:e.ruleForm.path,callback:function(t){e.$set(e.ruleForm,"path",t)},expression:"ruleForm.path"}})],1),e._v(" "),r("el-form-item",[r("el-button",{staticClass:"btn-form-submit",on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("创建")])],1)],1)],1)},staticRenderFns:[]}},847:function(e,t,r){var a=r(1)(r(682),r(683),!1,function(e){r(680)},"data-v-5f99121c",null);e.exports=a.exports}});