(this["webpackJsonpincome-tracker"]=this["webpackJsonpincome-tracker"]||[]).push([[0],{12:function(e,c,t){},14:function(e,c,t){"use strict";t.r(c);var n=t(1),r=t.n(n),a=t(6),s=t.n(a),i=(t(12),t(5)),o=t(0);var l=function(e){var c=e.totalIncome;return Object(o.jsxs)("header",{children:[Object(o.jsx)("h1",{children:"Income Tracker"}),Object(o.jsxs)("div",{className:"total-income",children:["\u20b9 ",c," "]})]})},u=t(7);var d=function(e){var c=e.income,t=e.setIncome,r=Object(n.useRef)(null),a=Object(n.useRef)(null),s=Object(n.useRef)(null);return Object(o.jsxs)("form",{className:"income-form",onSubmit:function(e){e.preventDefault();var n=a.current.value.split("-"),i=new Date(n[0],n[1],n[2]);t([].concat(Object(u.a)(c),[{desc:r.current.value,price:s.current.value,date:i.getTime()}])),r.current.value="",s.current.value=null,a.current.value=null},children:[Object(o.jsxs)("div",{className:"form-inner",children:[Object(o.jsx)("input",{type:"text",name:"desc",id:"desc",placeholder:"Income Description...",ref:r}),Object(o.jsxs)("div",{className:"price-date",children:[Object(o.jsx)("input",{type:"number",name:"price",id:"price",placeholder:"Price...",ref:s}),Object(o.jsx)("input",{type:"date",name:"date",id:"date",placeholder:"Income date...",ref:a})]})]}),Object(o.jsx)("input",{type:"submit",value:"Add Income",className:"add-income--btn"})]})};var j=function(e){var c=e.income,t=e.index,n=e.removeIncome,r=new Date(c.date),a=r.getDate(),s=[12,1,2,3,4,5,6,7,8,9,10,11],i=Number(s[r.getMonth()]),l=r.getFullYear();return console.log(i),console.log(s),Object(o.jsxs)("div",{className:"income-item",children:[Object(o.jsx)("button",{className:"remove-item",onClick:function(){n(t)},children:"x"}),Object(o.jsx)("div",{className:"desc",children:c.desc}),Object(o.jsxs)("div",{className:"price--date",children:[Object(o.jsxs)("div",{className:"price",children:["\u20b9 ",c.price]}),Object(o.jsx)("div",{className:"date",children:a+"/"+i+"/"+l})]})]})};var m=function(e){var c=e.income,t=e.setIncome,n=function(e){var n=c.filter((function(c,t){return t!==e}));t(n)};return Object(o.jsx)("div",{className:"income-list",children:c.sort((function(e,c){return c.date-e.date})).map((function(e,c){return Object(o.jsx)(j,{income:e,index:c,removeIncome:n},c)}))})};var b=function(){var e=Object(n.useState)([]),c=Object(i.a)(e,2),t=c[0],r=c[1],a=Object(n.useState)(0),s=Object(i.a)(a,2),u=s[0],j=s[1];return Object(n.useEffect)((function(){for(var e=0,c=0;c<t.length;c++)e+=parseInt(t[c].price);j(e)}),[t]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{totalIncome:u}),Object(o.jsx)(d,{income:t,setIncome:r}),Object(o.jsx)(m,{income:t,setIncome:r})]})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.10dd6c2e.chunk.js.map