webpackJsonp([2],{395:function(e,r,n){"use strict";function t(e){n(430),n(432)}Object.defineProperty(r,"__esModule",{value:!0});var l=n(404),a=n(434),o=n(53),s=t,i=Object(o.a)(l.a,a.a,a.b,!1,s,"data-v-7ae0c612",null);r.default=i.exports},404:function(e,r,n){"use strict";r.a={name:"Form",data:function(){return{ruleForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}}},430:function(e,r,n){var t=n(431);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var l=n(388).default;l("4b823966",t,!0,{})},431:function(e,r,n){r=e.exports=n(387)(!1),r.push([e.i,"\n.container[data-v-7ae0c612]{\r\n    padding: 15px 10px;\n}",""])},432:function(e,r,n){var t=n(433);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var l=n(388).default;l("ceaed928",t,!0,{})},433:function(e,r,n){r=e.exports=n(387)(!1),r.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/***/\n",""])},434:function(e,r,n){"use strict";n.d(r,"a",function(){return t}),n.d(r,"b",function(){return l});var t=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticStyle:{margin:"0",padding:"0"},attrs:{id:"Form"}},[n("div",{staticClass:"container",staticStyle:{"margin-bottom":"0"}},[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[n("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[n("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(r){e.$set(e.ruleForm,"region",r)},expression:"ruleForm.region"}},[n("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),n("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"活动时间",required:""}},[n("el-col",{attrs:{span:11}},[n("el-form-item",{attrs:{prop:"date1"}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(r){e.$set(e.ruleForm,"date1",r)},expression:"ruleForm.date1"}})],1)],1),e._v(" "),n("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),n("el-col",{attrs:{span:11}},[n("el-form-item",{attrs:{prop:"date2"}},[n("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.ruleForm.date2,callback:function(r){e.$set(e.ruleForm,"date2",r)},expression:"ruleForm.date2"}})],1)],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[n("el-switch",{model:{value:e.ruleForm.delivery,callback:function(r){e.$set(e.ruleForm,"delivery",r)},expression:"ruleForm.delivery"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[n("el-checkbox-group",{model:{value:e.ruleForm.type,callback:function(r){e.$set(e.ruleForm,"type",r)},expression:"ruleForm.type"}},[n("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[n("el-radio-group",{model:{value:e.ruleForm.resource,callback:function(r){e.$set(e.ruleForm,"resource",r)},expression:"ruleForm.resource"}},[n("el-radio",{attrs:{label:"线上品牌商赞助"}}),e._v(" "),n("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"活动形式",prop:"desc"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(r){e.$set(e.ruleForm,"desc",r)},expression:"ruleForm.desc"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),n("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)])},l=[]}});