webpackJsonp([5],{247:function(t,n,i){function a(t){i(283)}var e=i(0)(i(265),i(295),a,"data-v-106fcaa0",null);t.exports=e.exports},259:function(t,n,i){"use strict";function a(){var t=A()({},r.b,{platform:"h5",uin:0,format:"jsonp",needNewCode:1});return i.i(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,r.c)}function e(t){var n=A()({},r.b,{platform:"h5",format:"jsonp",needNewCode:1,tpl:3,page:"detail",type:"top",topid:t});return i.i(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,r.c)}n.b=a,n.a=e;var o=i(22),A=i.n(o),s=i(72),r=i(13)},265:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=i(9),e=i.n(a),o=i(259),A=i(13),s=i(14),r=i.n(s),l=i(73),c=i.n(l),p=i(21),d=i(5);n.default={mixins:[p.c],props:{},data:function(){return{topList:[]}},computed:{},created:function(){this._getTopList()},methods:e()({_getTopList:function(){var t=this;i.i(o.b)().then(function(n){n.code===A.a&&(t.topList=n.data.topList)})},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)},handlePlaylist:function(t){var n=t.length>0?"60px":"";this.$refs.rank.style.bottom=n,this.$refs.toplist.refresh()}},i.i(d.b)({setTopList:"SET_TOP_LIST"})),mounted:function(){},components:{scroll:r.a,loading:c.a}}},273:function(t,n,i){n=t.exports=i(244)(!0),n.push([t.i,".rank[data-v-106fcaa0]{position:fixed;width:100%;top:88px;bottom:0}.rank .toplist[data-v-106fcaa0]{height:100%;overflow:hidden}.rank .toplist .item[data-v-106fcaa0]{display:-webkit-box;display:flex;margin:0 20px;padding-top:20px;height:100px}.rank .toplist .item[data-v-106fcaa0]:last-child{padding-bottom:20px}.rank .toplist .item .icon[data-v-106fcaa0]{-webkit-box-flex:0;flex:0 0 100px;width:100px;height:100px}.rank .toplist .item .songlist[data-v-106fcaa0]{-webkit-box-flex:1;flex:1;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;padding:0 20px;height:100px;overflow:hidden;background:#333;color:hsla(0,0%,100%,.3);font-size:12px}.rank .toplist .item .songlist .song[data-v-106fcaa0]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:26px}.rank .toplist .loading-container[data-v-106fcaa0]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["D:/vue-music/src/components/rank/rank.vue"],names:[],mappings:"AACA,uBACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,gCACE,YAAa,AACb,eAAiB,CAClB,AACD,sCACE,oBAAqB,AACrB,aAAc,AACd,cAAe,AACf,iBAAkB,AAClB,YAAc,CACf,AACD,iDACE,mBAAqB,CACtB,AACD,4CACE,mBAAoB,AACZ,eAAgB,AACxB,YAAa,AACb,YAAc,CACf,AACD,gDACE,mBAAoB,AACZ,OAAQ,AAChB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AACtB,sBAAuB,AAC/B,wBAAyB,AACjB,uBAAwB,AAChC,eAAgB,AAChB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,sDACE,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,gBAAkB,CACnB,AACD,mDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"rank.vue",sourcesContent:["\n.rank[data-v-106fcaa0] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-106fcaa0] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-106fcaa0] {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 20px;\n  padding-top: 20px;\n  height: 100px;\n}\n.rank .toplist .item[data-v-106fcaa0]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-106fcaa0] {\n  -webkit-box-flex: 0;\n          flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .songlist[data-v-106fcaa0] {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  background: #333;\n  color: rgba(255,255,255,0.3);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song[data-v-106fcaa0] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.rank .toplist .loading-container[data-v-106fcaa0] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},283:function(t,n,i){var a=i(273);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(245)("a7908200",a,!0)},295:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{ref:"rank",staticClass:"rank"},[i("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:t.topList}},[i("ul",t._l(t.topList,function(n){return i("li",{staticClass:"item",on:{click:function(i){t.selectItem(n)}}},[i("div",{staticClass:"icon"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),i("ul",{staticClass:"songlist"},t._l(n.songList,function(n,a){return i("li",{staticClass:"song"},[i("span",[t._v(t._s(a+1))]),t._v(" "),i("span",[t._v(t._s(n.songname)+"--"+t._s(n.singername))])])}))])})),t._v(" "),t.topList.length?t._e():i("div",{staticClass:"loading-container"},[i("loading")],1)]),t._v(" "),i("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.fd49ea48142a199ee782.js.map