(this["webpackJsonpatalykov-github-search"]=this["webpackJsonpatalykov-github-search"]||[]).push([[0],{10:function(e,t,s){},12:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),r=s(3),a=s.n(r),i=(s(9),s(4)),u=(s(10),s(0));var l=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),s=t[0],n=t[1];return Object(c.useEffect)((function(){return document.getElementById("form").addEventListener("submit",(function(e){e.preventDefault(),function(e){fetch("https://api.github.com/search/users?q="+e+"+in:user&per_page=100").then((function(e){return e.json()})).then((function(e){return n(e.items)}))}(document.getElementById("username").value)})),function(){console.log("\u0443\u0431\u043e\u0440\u043a\u0430")}}),[]),console.log(s),s?Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)("h1",{className:"title",children:"User searcher"}),Object(u.jsxs)("form",{className:"search-form",id:"form",autoComplete:"off",children:[Object(u.jsx)("input",{type:"text",id:"username",className:"search-username",placeholder:"UserName"}),Object(u.jsx)("button",{className:"search-button-submit",children:"\u041f\u043e\u0438\u0441\u043a"})]}),Object(u.jsx)("div",{id:"result",children:s.map((function(e){return Object(u.jsxs)("div",{className:"user-block",children:[Object(u.jsx)("p",{children:e.login}),Object(u.jsx)("a",{href:e.html_url,children:Object(u.jsx)("img",{className:"result-image",src:e.avatar_url,alt:"imagze"})})]})}))})]}):Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)("h1",{className:"title",children:"User searcher"}),Object(u.jsxs)("form",{className:"search-form",id:"form",autoComplete:"off",children:[Object(u.jsx)("input",{type:"text",id:"username",className:"search-username",placeholder:"UserName"}),Object(u.jsx)("button",{className:"search-button-submit",children:"\u041f\u043e\u0438\u0441\u043a"})]}),Object(u.jsx)("div",{id:"result"})]})},o=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),o()},9:function(e,t,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.4dae4b69.chunk.js.map