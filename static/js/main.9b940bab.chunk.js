(this["webpackJsonpcurrency-conversion-test"]=this["webpackJsonpcurrency-conversion-test"]||[]).push([[0],{28:function(t,e,n){},29:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var c=n(3),r=n.n(c),o=n(23),a=n.n(o),u=(n(28),n(29),n(14)),i=n(4),s=n(11),p=n(5),b=n.n(p),f=n(12),j=n.n(f),l="c872c33bcc-eb0433fc41-r7f371";function O(){return(O=Object(s.a)(b.a.mark((function t(e){var n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("https://api.fastforex.io/fetch-all?from=".concat(e,"&api_key=").concat(l));case 3:return n=t.sent,c=n.data,t.abrupt("return",c);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function h(t){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(b.a.mark((function t(e){var n,c,r,o,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(i.a)(e,2),c=n[0],r=n[1],t.prev=1,t.next=4,j.a.get("https://api.fastforex.io/fetch-one?from=".concat(c,"&to=").concat(r,"&api_key=").concat(l));case 4:return o=t.sent,a=o.data,t.abrupt("return",a);case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function v(t,e,n){return d.apply(this,arguments)}function d(){return(d=Object(s.a)(b.a.mark((function t(e,n,c){var r,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("https://api.fastforex.io/convert?from=".concat(e,"&to=").concat(n,"&amount=").concat(c,"&api_key=").concat(l));case 3:return r=t.sent,o=r.data,t.abrupt("return",o);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}var x=n(7),g=n(0),y=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(c.useEffect)((function(){h(["USD","UAH"]).then((function(t){return r((function(e){return[].concat(Object(u.a)(e),[t])}))})),h(["EUR","UAH"]).then((function(t){return r((function(e){return[].concat(Object(u.a)(e),[t])}))}))}),[r]),Object(g.jsx)("div",{children:Object(g.jsx)("ul",{children:n.map((function(t){return Object(g.jsx)("li",{children:"".concat(t.base,": ").concat(t.result.UAH)},Object(x.a)())}))})})},F=n(1),k=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)({inputFrom:"",inputTo:"",optionFrom:"USD",optionTo:"UAH"}),a=Object(i.a)(o,2),u=a[0],s=a[1];Object(c.useEffect)((function(){(function(t){return O.apply(this,arguments)})(u.optionFrom).then((function(t){s((function(e){return Object(F.a)(Object(F.a)({},e),{},{optionFrom:t.base})})),r(Object.entries(t.results))}))}),[r,u.optionFrom]);var p=function(t,e,n,c){return"from"===c?v(t,e,n).then((function(t){return s((function(e){return Object(F.a)(Object(F.a)({},e),{},{inputTo:Object.values(t.result)[0]})}))})):"to"===c?v(t,e,n).then((function(t){return s((function(e){return Object(F.a)(Object(F.a)({},e),{},{inputFrom:Object.values(t.result)[0]})}))})):void 0},b=function(t,e){if(!(t.target.value<=0))switch(e){case"from":s((function(e){return Object(F.a)(Object(F.a)({},e),{},{inputFrom:t.target.value})})),p(u.optionFrom,u.optionTo,t.target.value,e);break;case"to":s((function(e){return Object(F.a)(Object(F.a)({},e),{},{inputTo:t.target.value})})),p(u.optionTo,u.optionFrom,t.target.value,e);break;case"fromSelect":s((function(e){return Object(F.a)(Object(F.a)({},e),{},{optionFrom:t.target.value})}));break;case"toSelect":s((function(e){return Object(F.a)(Object(F.a)({},e),{},{optionTo:t.target.value})}));break;default:return null}};return Object(g.jsxs)("form",{children:[Object(g.jsxs)("label",{children:["From",Object(g.jsx)("input",{name:"input-from",type:"number",value:u.inputFrom,onChange:function(t){b(t,"from")}})]}),Object(g.jsx)("select",{name:"from",value:u.optionFrom,onChange:function(t){b(t,"fromSelect")},children:n.map((function(t){var e=Object(i.a)(t,1)[0];return Object(g.jsx)("option",{value:e,children:e},Object(x.a)())}))}),Object(g.jsxs)("label",{children:["To",Object(g.jsx)("input",{name:"input-to",type:"number",value:u.inputTo,onChange:function(t){b(t,"to")}})]}),Object(g.jsx)("select",{name:"to",value:u.optionTo,onChange:function(t){b(t,"toSelect")},children:n.map((function(t){var e=Object(i.a)(t,1)[0];return Object(g.jsx)("option",{value:e,children:e},Object(x.a)())}))}),Object(g.jsx)("button",{type:"button",onClick:function(){s((function(t){return Object(F.a)(Object(F.a)({},t),{},{inputFrom:"",inputTo:""})}))},children:"reset"})]})};var T=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(y,{}),Object(g.jsx)(k,{})]})};a.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.9b940bab.chunk.js.map