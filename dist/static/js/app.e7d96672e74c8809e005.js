webpackJsonp([0,2],[,,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=a(r),i=n(19),o=a(i),u=n(12),d=a(u),l=n(13),c=a(l);s.default.use(o.default),t.default=new o.default({routes:[{path:"/",name:"Hello",component:d.default},{path:"/pad",name:"PadField",component:c.default}]})},function(e,t,n){n(8);var a=n(0)(n(4),n(15),null,null);e.exports=a.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Welcome to Language-Learning-Pad."}}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),s=a(r);t.default={name:"PadField",data:function(){return{headerMsg:"Click any word and ..."}},components:{FieldHeader:s.default}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"FieldHeader",data:function(){return{guideMsg:"Click any word and ..."}},props:["title"],mounted:function(){this.title&&(this.guideMsg=this.title)}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){n(11);var a=n(0)(n(5),n(18),"data-v-c8b2ea30",null);e.exports=a.exports},function(e,t,n){n(9);var a=n(0)(n(6),n(16),"data-v-5b5d7a01",null);e.exports=a.exports},function(e,t,n){n(10);var a=n(0)(n(7),n(17),"data-v-5e68f8f9",null);e.exports=a.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pad-field"},[n("field-header",{attrs:{title:e.headerMsg}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pad-header"},[n("p",{domProps:{textContent:e._s(e.guideMsg)}})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h3",[e._v(e._s(e.msg))]),e._v(" "),n("p",[e._v("this pad is under developing, and huge changes may happend each day.")]),e._v(" "),n("p",[e._v("THINK TWICE before you copy this project.")]),e._v(" "),n("div",{staticClass:"bottom"},[n("router-link",{staticClass:"link-to-pad",attrs:{to:"/pad"}},[e._v("Try Now!")]),e._v(" "),n("a",{staticClass:"github-fork",attrs:{href:"https://github.com/Jonham/language-learning-pad/tree/gh-pages"}},[n("svg",{staticClass:"octicon octicon-mark-github",attrs:{"aria-hidden":"true",height:"32",version:"1.1",viewBox:"0 0 16 16",width:"32"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})]),e._v(" "),n("span",[e._v("Fork me on Github")])])],1)])},staticRenderFns:[]}},,,,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(1),s=a(r),i=n(3),o=a(i),u=n(2),d=a(u);new s.default({el:"#app",router:d.default,template:"<App/>",components:{App:o.default}})}],[22]);
//# sourceMappingURL=app.e7d96672e74c8809e005.js.map