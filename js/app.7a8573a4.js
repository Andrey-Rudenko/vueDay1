(function(){"use strict";var t={4683:function(t,n,e){var i=e(9242),o=e(3396),l=e(7139);const s={class:"container",style:{width:"400px",margin:"auto"}},r=(0,o._)("h2",{class:"todo__caption"},"Список задач",-1),u={id:"tdlApp"},a={class:"tdlDiv"},d=(0,o._)("h3",null,"Актуальные",-1),c={class:"tdList list-unstyled"},f=["onClick"],v=(0,o._)("h3",null,"Решенные",-1),h={class:"tdList list-unstyled deleted"},p=["onClick"];function k(t,n,e,k,w,y){return(0,o.wg)(),(0,o.iD)("div",s,[r,(0,o._)("h3",null,(0,l.zw)(w.newTaskValue),1),(0,o._)("div",u,[(0,o.wy)((0,o._)("input",{onKeydown:n[0]||(n[0]=(0,i.D2)(((...t)=>y.add&&y.add(...t)),["enter"])),"onUpdate:modelValue":n[1]||(n[1]=t=>w.newTaskValue=t),type:"text",class:"form-control",placeholder:"Новая задача"},null,544),[[i.nr,w.newTaskValue]]),(0,o._)("div",a,[d,(0,o._)("ul",c,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(w.tasks,(t=>((0,o.wg)(),(0,o.iD)("li",{key:t.id},[(0,o.Uk)((0,l.zw)(t.value)+" ",1),(0,o._)("button",{onClick:n=>y.del(t)},"Удалить",8,f)])))),128))]),v,(0,o._)("ul",h,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(w.solTasks,(t=>((0,o.wg)(),(0,o.iD)("li",{key:t.id},[(0,o.Uk)((0,l.zw)(t.value)+" ",1),(0,o._)("button",{onClick:n=>y.delSol(t)},"Удалить",8,p)])))),128))])])])])}e(560);var w={name:"App",data(){return{newTaskValue:"Пу пу пууу",tasks:[{id:1,value:"Первая"},{id:2,value:"Вторая"},{id:3,value:"Третья"}],solTasks:[{id:1,value:"удаленная 1"},{id:2,value:"удаленная 2"},{id:3,value:"удаленная 3"}]}},methods:{add(){const t={id:1,value:this.newTaskValue};this.tasks.length>0&&(t.id=this.tasks.at(-1).id),this.tasks.push(t)},del(t){this.tasks=this.tasks.filter((n=>n!=t)),this.solTasks.push(t)},delSol(t){this.solTasks=this.solTasks.filter((n=>n!=t))}}},y=e(89);const b=(0,y.Z)(w,[["render",k]]);var g=b;(0,i.ri)(g).mount("#app")}},n={};function e(i){var o=n[i];if(void 0!==o)return o.exports;var l=n[i]={exports:{}};return t[i].call(l.exports,l,l.exports,e),l.exports}e.m=t,function(){var t=[];e.O=function(n,i,o,l){if(!i){var s=1/0;for(d=0;d<t.length;d++){i=t[d][0],o=t[d][1],l=t[d][2];for(var r=!0,u=0;u<i.length;u++)(!1&l||s>=l)&&Object.keys(e.O).every((function(t){return e.O[t](i[u])}))?i.splice(u--,1):(r=!1,l<s&&(s=l));if(r){t.splice(d--,1);var a=o();void 0!==a&&(n=a)}}return n}l=l||0;for(var d=t.length;d>0&&t[d-1][2]>l;d--)t[d]=t[d-1];t[d]=[i,o,l]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,i){var o,l,s=i[0],r=i[1],u=i[2],a=0;if(s.some((function(n){return 0!==t[n]}))){for(o in r)e.o(r,o)&&(e.m[o]=r[o]);if(u)var d=u(e)}for(n&&n(i);a<s.length;a++)l=s[a],e.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return e.O(d)},i=self["webpackChunktodo"]=self["webpackChunktodo"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(4683)}));i=e.O(i)})();
//# sourceMappingURL=app.7a8573a4.js.map