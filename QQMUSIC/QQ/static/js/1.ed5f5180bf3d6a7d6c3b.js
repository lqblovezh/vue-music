webpackJsonp([1],{251:function(t,i,e){function n(t){e(285)}var s=e(0)(e(269),e(297),n,null,null);t.exports=s.exports},261:function(t,i,e){"use strict";function n(){var t=r()({},l.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,platform:"yqq",needNewCode:0});return e.i(a.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.c)}function s(t){var i=r()({},l.b,{loginUin:0,hostUin:0,platform:"yqq",needNewCode:0,singermid:t,order:"listen",begin:0,num:30,songstatus:1});return e.i(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",i,l.c)}i.b=n,i.a=s;var o=e(22),r=e.n(o),a=e(72),l=e(13)},262:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(73),s=e.n(n),o=e(14),r=e.n(o),a=e(37);i.default={props:{data:{type:Array,default:[]}},data:function(){return{currentIndex:0,scrollY:-1,diff:-1}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},created:function(){this.touch={},this.probeType=3,this.listenScroll=!0,this.listHeight=[]},methods:{onShortcutTouchStart:function(t){var i=e.i(a.b)(t.target,"index");this.touch.y1=t.touches[0].pageY,this.touch.anchorIndex=i,this._scrollTo(i)},onShortcutTouchMove:function(t){this.touch.y2=t.touches[0].pageY;var i=(this.touch.y2-this.touch.y1)/18|0,e=parseInt(this.touch.anchorIndex)+i;this._scrollTo(e)},_scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.scrollY=-this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.listGroup[t],1e3))},scroll:function(t){this.scrollY=t.y},refresh:function(){this.$refs.listview.refresh()},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listGroup,i=0;this.listHeight.push(i);for(var e=0;e<t.length;e++){i+=t[e].clientHeight,this.listHeight.push(i)}},selcetItem:function(t){this.$emit("select",t)}},mounted:function(){},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var i=this.listHeight;if(t>0)return void(this.currentIndex=0);for(var e=0;e<i.length-1;e++){var n=i[e],s=i[e+1];if(-t>=n&&-t<s)return this.currentIndex=e,void(this.diff=s+t)}this.currentIndex=i.length-2},diff:function(t){var i=t>0&&t<30?t-30:0;this.fixedTop!==i&&(this.fixedTop=i,this.$refs.fixed.style.transform="translate3d(0,"+i+"px,0)")}},components:{Loading:s.a,Scroll:r.a}}},269:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(9),s=e.n(n),o=e(261),r=e(13),a=e(292),l=e.n(a),A=e(77),c=e(5),u=e(21);i.default={mixins:[u.c],props:{},data:function(){return{singers:[]}},computed:{},created:function(){this._getSingerList()},methods:s()({_getSingerList:function(){var t=this;e.i(o.b)().then(function(i){i.code===r.a&&(t.singers=t._normalizeSinger(i.data.list))})},_normalizeSinger:function(t){var i={hot:{title:"热门",items:[]}};t.forEach(function(t,e){e<10&&i.hot.items.push(new A.a({name:t.Fsinger_name,id:t.Fsinger_mid}));var n=t.Findex;i[n]||(i[n]={title:n,items:[]}),i[n].items.push(new A.a({name:t.Fsinger_name,id:t.Fsinger_mid}))});var e=[],n=[];for(var s in i){var o=i[s];o.title.match(/[a-zA-Z]/)?n.push(o):"热门"===o.title&&e.push(o)}return n.sort(function(t,i){return t.title.charCodeAt(0)-i.title.charCodeAt(i)}),e.concat(n)},selcetSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)}},e.i(c.b)({setSinger:"SET_SINGER"}),{handlePlaylist:function(t){var i=t.length>0?"60px":"";this.$refs.singer.style.bottom=i,this.$refs.scroll.refresh()}}),mounted:function(){},components:{ListView:l.a}}},274:function(t,i,e){i=t.exports=e(244)(!0),i.push([t.i,".listview[data-v-36e82cfb]{position:relative;width:100%;height:100%;overflow:hidden;background:#222}.listview .list-group[data-v-36e82cfb]{padding-bottom:30px}.listview .list-group .list-group-title[data-v-36e82cfb]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .list-group .list-group-item[data-v-36e82cfb]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:20px 0 0 30px}.listview .list-group .list-group-item .avatar[data-v-36e82cfb]{width:50px;height:50px;border-radius:50%}.listview .list-group .list-group-item .name[data-v-36e82cfb]{margin-left:20px;color:hsla(0,0%,100%,.5);font-size:14px}.listview .list-shortcut[data-v-36e82cfb]{position:absolute;z-index:30;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:20px;padding:20px 0;border-radius:10px;text-align:center;background:rgba(0,0,0,.3);font-family:Helvetica}.listview .list-shortcut .item[data-v-36e82cfb]{padding:3px;line-height:1;color:hsla(0,0%,100%,.5);font-size:12px}.listview .list-shortcut .item.current[data-v-36e82cfb]{color:#ffcd32}.listview .list-fixed[data-v-36e82cfb]{position:absolute;top:0;left:0;width:100%}.listview .list-fixed .fixed-title[data-v-36e82cfb]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .loading-container[data-v-36e82cfb]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["D:/vue-music/src/base/listview/listview.vue"],names:[],mappings:"AACA,2BACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,eAAiB,CAClB,AACD,uCACE,mBAAqB,CACtB,AACD,yDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,wDACE,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AAClB,mBAAoB,AAC5B,qBAAuB,CACxB,AACD,gEACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,8DACE,iBAAkB,AAClB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,0CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,QAAS,AACT,mCAAoC,AAC5B,2BAA4B,AACpC,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,kBAAmB,AACnB,0BAA4B,AAC5B,qBAAuB,CACxB,AACD,gDACE,YAAa,AACb,cAAe,AACf,yBAA6B,AAC7B,cAAgB,CACjB,AACD,wDACE,aAAe,CAChB,AACD,uCACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,UAAY,CACb,AACD,oDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,8CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"listview.vue",sourcesContent:["\n.listview[data-v-36e82cfb] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #222;\n}\n.listview .list-group[data-v-36e82cfb] {\n  padding-bottom: 30px;\n}\n.listview .list-group .list-group-title[data-v-36e82cfb] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .list-group .list-group-item[data-v-36e82cfb] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 20px 0 0 30px;\n}\n.listview .list-group .list-group-item .avatar[data-v-36e82cfb] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.listview .list-group .list-group-item .name[data-v-36e82cfb] {\n  margin-left: 20px;\n  color: rgba(255,255,255,0.5);\n  font-size: 14px;\n}\n.listview .list-shortcut[data-v-36e82cfb] {\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 20px;\n  padding: 20px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(0,0,0,0.3);\n  font-family: Helvetica;\n}\n.listview .list-shortcut .item[data-v-36e82cfb] {\n  padding: 3px;\n  line-height: 1;\n  color: rgba(255,255,255,0.5);\n  font-size: 12px;\n}\n.listview .list-shortcut .item.current[data-v-36e82cfb] {\n  color: #ffcd32;\n}\n.listview .list-fixed[data-v-36e82cfb] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.listview .list-fixed .fixed-title[data-v-36e82cfb] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .loading-container[data-v-36e82cfb] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},275:function(t,i,e){i=t.exports=e(244)(!0),i.push([t.i,".singer{position:fixed;top:88px;bottom:0;width:100%}","",{version:3,sources:["D:/vue-music/src/components/singer/singer.vue"],names:[],mappings:"AACA,QACE,eAAgB,AAChB,SAAU,AACV,SAAU,AACV,UAAY,CACb",file:"singer.vue",sourcesContent:["\n.singer {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}"],sourceRoot:""}])},284:function(t,i,e){var n=e(274);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(245)("7ade8c30",n,!0)},285:function(t,i,e){var n=e(275);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(245)("24f3ba6c",n,!0)},292:function(t,i,e){function n(t){e(284)}var s=e(0)(e(262),e(296),n,"data-v-36e82cfb",null);t.exports=s.exports},296:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("scroll",{ref:"listview",staticClass:"listview",attrs:{data:t.data,probeType:t.probeType,listenScroll:t.listenScroll},on:{scroll:t.scroll}},[e("ul",t._l(t.data,function(i){return e("li",{ref:"listGroup",refInFor:!0,staticClass:"list-group"},[e("h2",{staticClass:"list-group-title",domProps:{textContent:t._s(i.title)}}),t._v(" "),e("ul",t._l(i.items,function(i){return e("li",{staticClass:"list-group-item",on:{click:function(e){t.selcetItem(i)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),e("span",{staticClass:"name",domProps:{textContent:t._s(i.name)}})])}))])})),t._v(" "),e("div",{staticClass:"list-shortcut",on:{touchstart:function(i){i.stopPropagation(),i.preventDefault(),t.onShortcutTouchStart(i)},touchmove:function(i){i.stopPropagation(),i.preventDefault(),t.onShortcutTouchMove(i)},touchend:function(t){t.stopPropagation()}}},[e("ul",t._l(t.shortcutList,function(i,n){return e("li",{staticClass:"item",class:{current:t.currentIndex===n},attrs:{"data-index":n}},[t._v(t._s(i)+"\n            ")])}))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[e("div",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[e("loading")],1)])},staticRenderFns:[]}},297:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"singer",staticClass:"singer"},[e("list-view",{ref:"scroll",attrs:{data:t.singers},on:{select:t.selcetSinger}}),t._v(" "),e("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=1.ed5f5180bf3d6a7d6c3b.js.map