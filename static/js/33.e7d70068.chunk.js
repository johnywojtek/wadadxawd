(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{720:function(e,n,t){"use strict";var r=t(694),a=t(0),i=t.n(a),c=t(693),o=t(719),s=t(16),d=t(192),l=t(718),u=t.n(l);function f(){var e=Object(r.a)(["\n            animation: "," 0.5s cubic-bezier(0.895, 0.03, 0.685, 0.22)\n                forwards;\n            svg {\n                opacity: 1;\n                transform: scale(0);\n                fill: white;\n                -webkit-text-stroke: 0;\n                animation: "," 0.3s cubic-bezier(1, 0.008, 0.565, 1.65) 0.1s\n                    1 forwards;\n                stroke: white;\n                stroke-width: 0;\n            }\n        "]);return f=function(){return e},e}function b(){var e=Object(r.a)(["\n    display: inline-block;\n    border-radius: 50%;\n    border: 2px solid rgba(0, 0, 0, 0.1);\n    background: white;\n    vertical-align: middle;\n    margin-right: 20px;\n    width: 2.3rem;\n    height: 2.3rem;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: border 0.3s ease;\n\n    svg {\n        opacity: 0.2;\n        font-size: 1.3rem;\n        fill: transparent;\n        transition: opacity 0.3s 0.1s ease;\n        stroke: rgba(0, 0, 0, 0.5);\n        stroke-width: 20px;\n        transition: all 0.3s ease;\n    }\n\n    &:hover {\n        border: 3px solid rgba(0, 0, 0, 0.2);\n    }\n    ","\n"]);return b=function(){return e},e}function m(){var e=Object(r.a)(["\n    width: 2.3rem;\n    height: 2.3rem;\n"]);return m=function(){return e},e}function g(){var e=Object(r.a)(["\n 0% {\n      width: 2rem;\n      height: 2rem;\n      border-width: 5px;\n    }\n    10% {\n      width: 2rem;\n      height: 2rem;\n      opacity: 0.1;\n      background: rgba(0,0,0,0.2);\n      border-width: 15px;\n    }\n    12% {\n      width: 2rem;\n      height: 2rem;\n      opacity: 0.4;\n      background: rgba(0,0,0,0.1);\n      border-width: 0;\n    }\n    50% {\n      width: 2.3rem;\n      height: 2.3rem;\n      background: #00d478;\n      border: 0;\n      opacity: 0.6;\n    }\n    100% {\n      width: 2.3rem;\n      height: 2.3rem;\n      background: #00d478;\n      border: 0;\n      opacity: 1;\n    }\n"]);return g=function(){return e},e}function p(){var e=Object(r.a)(["\n from {\n      opacity: 0;\n      transform: scale(0.3);\n    }\n    to {\n      opacity: 1;\n      transform: scale(1)\n    }\n"]);return p=function(){return e},e}var k=Object(c.c)(p()),h=Object(c.c)(g()),v=c.b.div(m()),y=c.b.span(b(),function(e){return e.checked&&Object(c.a)(f(),h,k)}),w=Object(d.b)(null,{toggleTask:s.v})(function(e){var n=e.taskId,t=e.currentTaskId,r=e.isDone,a=e.toggleTask;return i.a.createElement(v,{onClick:function(){t?a(n,t,!r):u.a.fire({icon:"error",title:"Ups co\u015b posz\u0142o nie tak",toast:!0,position:"top-end",showConfirmButton:!1,timer:1e3,timerProgressBar:!0})}},i.a.createElement(y,{checked:r},i.a.createElement(o.b,{checked:r})))});function j(){var e=Object(r.a)(["\n    margin-right: 1rem;\n    font-size: 1.3rem;\n"]);return j=function(){return e},e}var O=c.b.span(j());n.a=function(e){var n=e.currentTaskId,t=e.taskId,r=e.value,a=e.number,c=e.isDone,o=e.refe;return i.a.createElement("div",Object.assign({ref:o},e,{className:"media friendlist-box align-items-center justify-content-center m-b-20"}),i.a.createElement(O,null,a),i.a.createElement("div",{className:"m-r-10 photo-table"},i.a.createElement(w,{currentTaskId:n,taskId:t,isDone:c})),i.a.createElement("div",{className:"media-body"},i.a.createElement("h6",{className:"m-0 d-inline"},r),i.a.createElement("span",{className:"float-right d-flex  align-items-center"},i.a.createElement("i",{className:"fa fa-caret-up f-22 m-r-10 text-c-green"}),"3784")))}},825:function(e,n,t){"use strict";t.r(n);var r=t(115),a=t(8),i=t(700),c=t(0),o=t.n(c),s=(t(186),t(720),t(16)),d=t(192),l=t(54),u=t(26),f=t(755),b=t(55),m=t.n(b),g=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},function(e,n){return n}).map(function(e){return{id:"item-".concat(e+n,"-").concat((new Date).getTime()),content:"item ".concat(e+n)}})},p=function(e,n,t){var r=Array.from(e),a=r.splice(n,1),c=Object(i.a)(a,1)[0];return r.splice(t,0,c),r},k=function(e,n,t,r){var a=Array.from(e),c=Array.from(n),o=a.splice(t.index,1),s=Object(i.a)(o,1)[0];c.splice(r.index,0,s);var d={};return d[t.droppableId]=a,d[r.droppableId]=c,d},h=function(e,n){return Object(a.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),background:e?"lightgreen":"grey"},n)},v=function(e){return{background:e?"lightblue":"lightgrey",padding:8,width:250}};n.default=Object(u.d)(Object(d.b)(function(e){return{auth:e.firebase.auth,tasks:e.firestore.ordered.weeklyTasks}},{addWeeklyTasks:s.n}),Object(l.firestoreConnect)(function(e){return e.auth.uid?[{collection:"weeklyTasks",where:[["uid","==",e.auth.uid]]}]:[]}))(function(e){var n=Object(c.useState)([g(10),g(5,10)]),t=Object(i.a)(n,2),a=t[0],s=t[1];return Object(c.useEffect)(function(){e.tasks&&s([e.tasks[0].addionalTasks,e.tasks[0].importantTasks,e.tasks[0].secondaryTasks,e.tasks[0].completedTasks])},[e.tasks]),o.a.createElement("div",null,console.log(a),o.a.createElement("button",{type:"button",onClick:function(){s([].concat(Object(r.a)(a),[[]]))}},"Add new group"),o.a.createElement("button",{type:"button",onClick:function(){!function(n){console.log(e.data);var t={id:Date.now()+Math.random()+"",value:"test 2",done:!1,createdAt:m()().format()};e.addWeeklyTasks([t],"addionalTasks","IntkmyHyJ7LEklR63Xkr")}()}},"Add new item"),o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(f.a,{onDragEnd:function(e){var n=e.source,t=e.destination;if(t){var i=+n.droppableId,c=+t.droppableId;if(i===c){var o=p(a[i],n.index,t.index),d=Object(r.a)(a);d[i]=o,s(d)}else{var l=k(a[i],a[c],n,t),u=Object(r.a)(a);u[i]=l[i],u[c]=l[c],s(u.filter(function(e){return e.length}))}}}},a.map(function(e,n){return o.a.createElement(f.c,{key:n,droppableId:"".concat(n)},function(t,i){return o.a.createElement("div",Object.assign({ref:t.innerRef,style:v(i.isDraggingOver)},t.droppableProps),e.map(function(e,t){return o.a.createElement(f.b,{key:e.id,draggableId:e.id,index:t},function(i,c){return o.a.createElement("div",Object.assign({ref:i.innerRef},i.draggableProps,i.dragHandleProps,{style:h(c.isDragging,i.draggableProps.style)}),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},e.content,o.a.createElement("button",{type:"button",onClick:function(){var e=Object(r.a)(a);e[n].splice(t,1),s(e.filter(function(e){return e.length}))}},"delete")))})}),t.placeholder)})}))))})}}]);
//# sourceMappingURL=33.e7d70068.chunk.js.map