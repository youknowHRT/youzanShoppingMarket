webpackJsonp([2],{0:function(t,e,n){"use strict";var a={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in a)a.hasOwnProperty(s)&&(a[s]="http://rap2api.taobao.org/app/mock/164470"+a[s]);e.a=a},10:function(t,e){},108:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(77),s=(n.n(a),n(78)),i=(n.n(s),n(76)),o=(n.n(i),n(81)),r=(n.n(o),n(79)),c=(n.n(r),n(80)),u=(n.n(c),n(82)),d=(n.n(u),n(1)),l=n(0),f=n(3),h=n.n(f),p=n(7),m=n(12),v=n.n(m),g=n(21),w=n.n(g),b=v.a.parse(location.search.substr(1)),k=b.id,y=["商品详情","本店成交"];new d.default({el:"#app",data:{id:k,details:null,detailTab:y,tabIndex:0,dealLists:null,bannerLists:[],skuType:1,showSku:!1,skuNum:1,isAddCart:!1,showAddMessage:!1},created:function(){this.getDetails()},methods:{getDetails:function(){var t=this;h.a.post(l.a.details,{id:k}).then(function(e){t.details=e.data.data,t.details.img.forEach(function(e){t.bannerLists.push({clickUrl:"javascript:;",image:e.image})})})},changeTab:function(t){this.tabIndex=t,t&&this.getDeal()},getDeal:function(){var t=this;h.a.post(l.a.deal,{id:k}).then(function(e){t.dealLists=e.data.data.lists})},chooseSku:function(t){this.skuType=t,this.showSku=!0},changeSkuNum:function(t){t<0&&1===this.skuNum||(this.skuNum+=t)},addCart:function(){var t=this;h.a.post(l.a.addCart,{id:k,number:this.skuNum}).then(function(e){200===e.data.status&&(t.showSku=!1,t.isAddCart=!0,t.showAddMessage=!0,setTimeout(function(){t.showAddMessage=!1},1200))})}},components:{Swipe:w.a},watch:{showSku:function(t,e){document.body.style.overflow=t?"hidden":"auto",document.querySelector("html").style.overflow=t?"hidden":"auto",document.body.style.height=t?"100%":"auto",document.querySelector("html").style.height=t?"100%":"auto"}},mixins:[p.a]})},11:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.navConfig,function(e,a){return n("li",{class:{active:a==t.curIndex},on:{click:function(n){t.funClick(e,a)}}},[n("a",[n("i",{class:e.icon}),t._v(" "),n("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]}},21:function(t,e,n){function a(t){n(40)}var s=n(6)(n(29),n(41),a,null,null);t.exports=s.exports},29:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(67),s=n(39);n.n(s);e.default={name:"Swipe",props:{lists:{},name:{}},data:function(){return{}},mounted:function(){new a.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0}})}}},39:function(t,e){},40:function(t,e){},41:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(t){return n("div",{staticClass:"swp-page swiper-slide "},[n("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[n("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.image}})])])})),t._v(" "),n("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},7:function(t,e,n){"use strict";var a=n(8),s=n.n(a),i={filters:{currency:function(t){var e=""+t;if(e.indexOf(".")>-1){var n=e.split(".");return n[0]+"."+(n[1]+"0").substr(0,2)}return e+".00"}},components:{Foot:s.a}};e.a=i},76:function(t,e){},77:function(t,e){},78:function(t,e){},79:function(t,e){},8:function(t,e,n){function a(t){n(10)}var s=n(6)(n(9),n(11),a,null,null);t.exports=s.exports},80:function(t,e){},81:function(t,e){},82:function(t,e){},9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(12),s=n.n(a),i=s.a.parse(location.search.substr(1)),o=i.index,r=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];e.default={name:"Foot",data:function(){return{navConfig:r,curIndex:parseInt(o)||0}},methods:{funClick:function(t,e){location.href=t.href+"?index="+e}}}}},[108]);
//# sourceMappingURL=goods.578698f772fb1d979ae6.js.map