(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),o=n(7),c=n.n(o),i=(n(12),n(5)),l=n(3),r=(n(13),n(14),n(0)),d=function(e){var t=e.todos,n=e.taskDone;return Object(r.jsxs)("div",{className:"containerCounter",children:[Object(r.jsxs)("div",{className:"count",id:"todosCount",children:[Object(r.jsx)("p",{children:"Todos:"}),Object(r.jsx)("h1",{children:t.length})]}),Object(r.jsxs)("div",{className:"count",id:"todosComplete",children:[Object(r.jsx)("p",{children:"Completed: "}),Object(r.jsx)("h1",{children:n})]})]})},u=(n(16),function(e){var t=e.inputState,n=e.inputValueCategory,a=e.setinputValueCategory,s=e.setinputValue,o=e.clickInput;return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("h1",{className:"logo",children:"My Todo List"}),Object(r.jsxs)("div",{className:"inputContainer",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{className:"label",htmlFor:"category",children:"Category:"}),Object(r.jsx)("select",{value:n,onChange:function(e){a(e.target.value)},className:"input",type:"text",id:"inputCategory",children:[{label:"",value:""},{label:"Home",value:"Home"},{label:"School",value:"School"},{label:"Work",value:"Work"},{label:"Finance",value:"Finance"},{label:"Miscellaneous",value:"Miscellaneous"}].map((function(e,t){return Object(r.jsx)("option",{value:e.value,children:e.label},t)}))})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{className:"label",htmlFor:"todo",children:"Todo:"}),Object(r.jsx)("input",{className:"input",type:"text",id:"inputTodo",onChange:function(e){s(e.target.value)},value:t})]}),Object(r.jsx)("button",{className:"button",onClick:o,children:"Add"})]})]})}),j=(n(17),function(e){var t=e.todoState,n=e.setTodos,a=e.taskDone,s=e.setTaskDone;return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"todosTitle",children:Object(r.jsx)("h1",{children:"Todos:"})}),Object(r.jsx)("div",{className:"todosContainer",children:t.map((function(e,o){return Object(r.jsxs)("div",{className:"itemContainer",id:e.id,children:[Object(r.jsx)("div",{className:"categoryContainer",children:Object(r.jsxs)("h1",{children:["Category: ",e.category]})}),Object(r.jsxs)("div",{className:"taskContainer",children:[Object(r.jsxs)("h1",{children:["Task: ",e.task]}),Object(r.jsx)("button",{className:"buttonTask buttonTaskDone",id:e.id,onClick:function(e){return function(e){e.target.parentNode.parentNode.classList.toggle("taskDone"),e.target.parentNode.parentNode.classList.contains("taskDone")?(a++,s(a)):a?(a--,s(a)):e.stopPropagation()}(e)},children:"V"}),Object(r.jsx)("button",{className:"buttonTask buttonTaskDetele",id:e.id,onClick:function(e){return function(e){var o=t.filter((function(t){return t.id!==parseInt(e.target.id)}));console.log(e.target.parentNode),n(Object(i.a)(o)),0===a&&e.target.parentNode.parentNode.classList.contains("itemContainer")?e.stopPropagation():a>0&&!e.target.parentNode.parentNode.classList.contains("itemContainer")?(a--,s(a)):(e.target.parentNode.parentNode.classList.remove("taskDone"),a--,s(a))}(e)},children:"X"})]})]},o)}))})]})});var b=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(""),c=Object(l.a)(o,2),b=c[0],h=c[1],p=Object(a.useState)([]),O=Object(l.a)(p,2),x=O[0],m=O[1],v=Object(a.useState)(0),g=Object(l.a)(v,2),N=g[0],f=g[1],C=function(e){if(e.preventDefault(),b&&n){var t={id:Math.floor(1e3*Math.random()),category:b,task:n,complete:!1};m([].concat(Object(i.a)(x),[t])),s("")}else alert("Please fill all the inputs")};return Object(r.jsxs)("div",{className:"App",onKeyPress:function(e){13===e.charCode&&C(e)},children:[Object(r.jsx)(u,{inputState:n,setinputValue:s,inputValueCategory:b,setinputValueCategory:h,todoState:x,setTodos:m,clickInput:C}),Object(r.jsx)(d,{todos:x,taskDone:N}),Object(r.jsx)(j,{todoState:x,setTodos:m,taskDone:N,setTaskDone:f})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),o(e),c(e)}))};c.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),h()}],[[18,1,2]]]);
//# sourceMappingURL=main.a0bb693f.chunk.js.map