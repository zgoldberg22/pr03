(function(){"use strict";var t={149:function(t,e,n){var r=n(963),o=n(252);function s(t,e,n,r,s,a){const i=(0,o.up)("PostComponent");return(0,o.wg)(),(0,o.j4)(i)}var a=n(577);const i=t=>((0,o.dD)("data-v-1c6e38d4"),t=t(),(0,o.Cn)(),t),c={class:"container"},u=i((()=>(0,o._)("h1",null,"Latest Posts",-1))),l={class:"create-post"},p=i((()=>(0,o._)("label",{for:"create-post"},"Say Something...",-1))),d=i((()=>(0,o._)("hr",null,null,-1))),f={key:0,class:"error"},v={class:"posts-container"},h=["item","index","onDblclick"],w={class:"text"};function g(t,e,n,s,i,g){return(0,o.wg)(),(0,o.iD)("div",c,[u,(0,o._)("div",l,[p,(0,o.wy)((0,o._)("input",{type:"text",id:"create-post","onUpdate:modelValue":e[0]||(e[0]=t=>i.text=t),placeholder:"Create a post"},null,512),[[r.nr,i.text]]),(0,o._)("button",{onClick:e[1]||(e[1]=(...t)=>g.createPost&&g.createPost(...t))},"Post!")]),d,i.error?((0,o.wg)(),(0,o.iD)("p",f,(0,a.zw)(i.error),1)):(0,o.kq)("",!0),(0,o._)("div",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.posts,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"post",item:t,index:e,key:t._id,onDblclick:e=>g.deletePost(t._id)},[(0,o.Uk)((0,a.zw)(`${t.createdAt.getDate()}/${t.createdAt.getMonth()}/${t.createdAt.getFullYear()}`)+" ",1),(0,o._)("p",w,(0,a.zw)(t.text),1)],40,h)))),128))])])}var P=n(594);const m="api/posts/";class b{static getPosts(){return new Promise(((t,e)=>{P.Z.get(m).then((e=>{const n=e.data;t(n.map((t=>({...t,createdAt:new Date(t.createdAt)}))))})).catch((t=>{e(t)}))}))}static insertPost(t){return P.Z.post(m,{text:t})}static deletePost(t){return P.Z["delete"](`${m}${t}`)}}var y=b,x={name:"PostComponent",data(){return{posts:[],error:"",text:""}},async created(){try{this.posts=await y.getPosts()}catch(t){this.error=t.message}},methods:{async createPost(){await y.insertPost(this.text),this.posts=await y.getPosts()},async deletePost(t){await y.deletePost(t),this.posts=await y.getPosts()}}},k=n(744);const _=(0,k.Z)(x,[["render",g],["__scopeId","data-v-1c6e38d4"]]);var O=_,D={name:"App",components:{PostComponent:O}};const C=(0,k.Z)(D,[["render",s]]);var j=C;(0,r.ri)(j).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,s){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],s=t[l][2];for(var i=!0,c=0;c<r.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(i=!1,s<a&&(a=s));if(i){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[r,o,s]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,s,a=r[0],i=r[1],c=r[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var l=c(n)}for(e&&e(r);u<a.length;u++)s=a[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(l)},r=self["webpackChunkclient"]=self["webpackChunkclient"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(149)}));r=n.O(r)})();
//# sourceMappingURL=app.d56035d6.js.map