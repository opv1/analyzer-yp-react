(this["webpackJsonpanalyzer-react"]=this["webpackJsonpanalyzer-react"]||[]).push([[0],{14:function(e,t,a){e.exports={Header:"Header_Header__anas9",Wrapper:"Header_Wrapper__QU3mp",Caption:"Header_Caption__356YZ",Navigation:"Header_Navigation__VBJ1I",List:"Header_List__2ZcsP",Item:"Header_Item__MFqCy",Link:"Header_Link__22Csf"}},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),r=a(34),s=a.n(r),o=a(8),i=a(6),l=a(21),j=a(60),u=a(5),m=a(2),d=a(38),_="/analyzer-react/",p=a(14),h=a.n(p),b=function(){var e=Object(i.c)((function(e){return e.layout})),t=e.color,a=e.boxShadow,n={color:t,borderBottom:"2px solid ".concat(t),boxShadow:a,hover:{":hover":{color:t}}};return Object(c.jsx)("header",{className:h.a.Header,style:{boxShadow:n.boxShadow},children:Object(c.jsxs)("div",{className:h.a.Wrapper,children:[Object(c.jsx)(o.b,{className:h.a.Caption,style:{color:n.color},to:"".concat(_),children:"NewsAnalyzer"}),Object(c.jsx)("nav",{className:h.a.Navigation,children:Object(c.jsxs)("ul",{className:h.a.List,children:[Object(c.jsx)("li",{className:h.a.Item,children:Object(c.jsx)(o.c,Object(m.a)(Object(m.a)({exact:!0,className:h.a.Link},Object(d.css)(n.hover)),{},{activeStyle:{color:n.color,borderBottom:n.borderBottom},to:"".concat(_),children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}))}),Object(c.jsx)("li",{className:h.a.Item,children:Object(c.jsx)(o.c,Object(m.a)(Object(m.a)({className:h.a.Link},Object(d.css)(n.hover)),{},{activeStyle:{color:n.color,borderBottom:n.borderBottom},to:"".concat(_,"about"),children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}))})]})})]})})},O=a(61),x=a.n(O),f=function(e){var t=e.children;return Object(c.jsx)("main",{className:x.a.Main,children:t})},N=a.p+"static/media/github.a6cad5fd.svg",v=a.p+"static/media/fb.bdaf0940.svg",C=a(7),g=a.n(C),y=function(){return Object(c.jsx)("footer",{className:g.a.Footer,children:Object(c.jsxs)("div",{className:g.a.Wrapper,children:[Object(c.jsx)("p",{className:g.a.Copyright,children:"\xa9 2020. \u041f\u0430\u0432\u0435\u043b \u041e\u0432\u0435\u0447\u043a\u0438\u043d"}),Object(c.jsx)("nav",{className:g.a.Navigation,children:Object(c.jsxs)("ul",{className:g.a.List,children:[Object(c.jsx)("li",{className:g.a.Item,children:Object(c.jsx)(o.c,{className:g.a.Link,to:"".concat(_),children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(c.jsx)("li",{className:g.a.Item,children:Object(c.jsx)(o.c,{className:g.a.Link,to:"".concat(_,"about"),children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})}),Object(c.jsx)("li",{className:g.a.Item,children:Object(c.jsx)("a",{className:g.a.Link,href:"https://praktikum.yandex.ru/",target:"_blank",rel:"noopener noreferrer",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})})]})}),Object(c.jsxs)("div",{className:g.a.Social,children:[Object(c.jsx)("a",{className:g.a.Reference,href:"https://github.com/opv1/",target:"_blank",rel:"noopener noreferrer",children:Object(c.jsx)("img",{className:g.a.Icon,src:N,alt:"GitHub"})}),Object(c.jsx)("a",{className:g.a.Reference,href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer",children:Object(c.jsx)("img",{className:g.a.Icon,src:v,alt:"Facebook"})})]})]})})},k=a(41),S=a.n(k),w=a(62),I=function(e,t){return e.setDate(e.getDate()-t)},L=function(e){return e.toISOString().slice(0,10)},W=function(e,t){return e.toLocaleString("ru",t)},E=function(e,t,a){var c=0;return e.articles.map((function(e){return W(new Date(e.publishedAt),{day:"numeric",month:"long",year:"numeric"})===W(a,{day:"numeric",month:"long",year:"numeric"})&&e.title.match(t)?c+=1:c+=0,!1})),c},A=function(e,t){localStorage.setItem("newsObject",JSON.stringify(e));var a=new RegExp("".concat(t),"gi"),c=function(e,t){return e.articles.map((function(e){return e.title.match(t)})).filter((function(e){return null!==e&&void 0!==e})).length}(e,a),n={amountKeyWord:c,keyWord:t,presentMonth:W(new Date,{month:"long"}),presentWeek:function(e,t,a,c){for(var n=[],r=0;r<7;r+=1){var s=a,o=W(s,{day:"numeric"}),i=["\u0432\u0441","\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431"][s.getDay()],l=E(e,t,s),j=Math.round(100*l/c);n.push({dayNumber:o,dayName:i,newsCount:l,widthPercent:j}),s=I(a,1)}return n}(e,a,new Date,c),totalResults:e.totalResults};localStorage.setItem("analyticsObject",JSON.stringify(n))},T=L(new Date),R=L(new Date(I(new Date,6))),B=a(63),D=a.n(B).a.create({baseURL:"https://api.github.com",headers:{"Content-Type":"application/json"}}),F="STYLES_LAYOUT",G="INITIAL_NEWS",M="FETCH_NEWS_START",H="FETCH_NEWS_SUCCESS",J="FETCH_NEWS_ERROR",V="MORE_NEWS",P="FETCH_COMMITS_START",X="FETCH_COMMITS_SUCCESS",U="FETCH_COMMITS_ERROR",Y="INPUT_CHANGE";function K(e){return function(t){e==="".concat(_)?t($("withBackground","#ffffff","inset 0px -1px 0px rgba(255, 255, 255, 0.2)")):t($(null,"#000000","inset 0px -1px 0px #d1d2d6"))}}function z(){return function(e){var t=JSON.parse(localStorage.getItem("newsObject")),a=JSON.parse(localStorage.getItem("analyticsObject"));e(function(e,t,a){return{type:G,news:e,analytics:t,keyWord:a}}(t,a,a.keyWord))}}function q(e){return function(t){e.preventDefault();var a=e.target,c=a.elements.input,n=a.elements.button,r=c.value;t({type:M}),new Promise((function(e){c.setAttribute("disabled",!0),n.setAttribute("disabled",!0),e(function(e){return fetch("".concat("https://nomoreparties.co/news/v2/everything?")+"q=".concat(e,"&")+"language=ru&"+"from=".concat(R,"&")+"to=".concat(T,"&")+"pageSize=100&sortBy=popularity&apiKey=60659df53b2641f4bc17059b6e641af7").then((function(e){return e.ok?e.json():Promise.reject(new Error("".concat(e.status)))})).then((function(e){if(0===e.totalResults)throw new Error("Failed to found");return e})).catch((function(e){if("Failed to fetch"===e.message)throw new Error("\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439!");if("Failed to found"===e.message)throw new Error("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u041d\u0443\u043b\u0435\u0432\u043e\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442!")}))}(r).then((function(e){t({type:H,news:e}),A(e,r)})).catch((function(e){"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439!"===e.message&&t(ee("failedToFetch")),"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u041d\u0443\u043b\u0435\u0432\u043e\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442!"===e.message&&t(ee("failedToFound"))})).finally((function(){c.removeAttribute("disabled"),n.removeAttribute("disabled")})))}))}}function Q(){return function(e){e({type:V})}}function Z(e){return function(t){var a;e.target.validity.valueMissing?e.target.setCustomValidity("\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"):e.target.validity.tooShort||e.target.validity.tooLong?e.target.setCustomValidity("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0442 2 \u0434\u043e 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):e.target.validity.patternMismatch?e.target.setCustomValidity("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u0435\u0439"):e.target.setCustomValidity(""),t((a=e.target.value,{type:Y,keyWord:a}))}}function $(e,t,a){return{type:F,typeLayout:e,color:t,boxShadow:a}}function ee(e){return{type:J,typeError:e}}var te=a(42),ae=a.n(te);var ce=function(e){var t=Object(i.c)((function(e){return e.layout})).typeLayout,a=Object(i.b)(),r=e.location.pathname;Object(n.useEffect)((function(){a(K(r))}),[r]),Object(n.useEffect)((function(){a(K(r))}),[]);var s=[ae.a.Layout,ae.a[t]];return Object(c.jsxs)("div",{className:s.join(" "),children:[Object(c.jsx)(b,{}),Object(c.jsx)(f,{children:e.children}),Object(c.jsx)(y,{})]})},ne=function(e){return e.children},re=a(43),se=a.n(re),oe=function(e){var t=e.onSubmit,a=e.type,n=e.name,r=e.children,s=[se.a.Form,se.a[a]];return Object(c.jsx)("form",{className:s.join(" "),onSubmit:t,name:n,children:r})},ie=a(44),le=a.n(ie),je=function(e){var t=e.onChange,a=e.type,n=e.value,r=e.name,s=e.placeholder,o=e.title,i=e.pattern,l=e.minLength,j=e.maxLength,u=[le.a.Input,le.a[a]];return Object(c.jsx)("input",{className:u.join(" "),onChange:t,value:n,name:r,type:a,placeholder:s,title:o,pattern:i,minLength:l,maxLength:j,required:!0})},ue=a(45),me=a.n(ue),de=function(e){var t=e.onClick,a=e.type,n=e.name,r=e.disabled,s=e.children,o=[me.a.Button,me.a[a]];return Object(c.jsx)("button",{className:o.join(" "),onClick:t,name:n,disabled:r,children:s})},_e=a(27),pe=a.n(_e),he=function(){var e=Object(i.c)((function(e){return e.home})).keyWord,t=Object(i.b)();return Object(c.jsx)("section",{className:pe.a.Search,children:Object(c.jsxs)("div",{className:pe.a.Wrapper,children:[Object(c.jsxs)("div",{className:pe.a.Block,children:[Object(c.jsx)("h1",{className:pe.a.Caption,children:"\u0427\u0442\u043e \u0432 \u043c\u0438\u0440\u0435 \u0442\u0432\u043e\u0440\u0438\u0442\u0441\u044f?"}),Object(c.jsx)("h2",{className:pe.a.Description,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432 \u043f\u043e\u0438\u0441\u043a\u0435 \u043b\u044e\u0431\u0443\u044e \u0442\u0435\u043c\u0443 \u0438 \u0443\u0437\u043d\u0430\u0439\u0442\u0435, \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0439 \u043e\u043d\u0430 \u0431\u044b\u043b\u0430 \u0432 \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u0445 \u0437\u0430 \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0443\u044e \u043d\u0435\u0434\u0435\u043b\u044e."})]}),Object(c.jsxs)(oe,{onSubmit:function(e){return t(q(e))},children:[Object(c.jsx)(je,{onChange:function(e){return t(Z(e))},value:e,name:"input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",minLength:"2",maxLength:"15",pattern:"^([\u0410-\u042f\u0430-\u044f\u0401-\u0451]*)$"}),Object(c.jsx)(de,{type:"ButtonSearch",name:"button",children:"\u0418\u0441\u043a\u0430\u0442\u044c"})]})]})})},be=a.p+"static/media/not-found.84ec3730.svg",Oe=a(16),xe=a.n(Oe),fe=function(e){var t=e.typeError;return Object(c.jsxs)("section",{className:xe.a.Error,children:["failedToFound"===t?Object(c.jsxs)("div",{className:xe.a.Block,children:[Object(c.jsx)("img",{className:xe.a.Icon,src:be,alt:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(c.jsx)("h3",{className:xe.a.Caption,children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(c.jsx)("p",{className:xe.a.Text,children:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e."})]}):null,"failedToFetch"===t?Object(c.jsxs)("div",{className:xe.a.Block,children:[Object(c.jsx)("h3",{className:xe.a.Caption,children:"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"}),Object(c.jsx)("p",{className:xe.a.Text,children:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]}):null]})},Ne=a(17),ve=a.n(Ne),Ce=function(e){var t=e.children,a=W(new Date(t.publishedAt),{day:"numeric",month:"long",year:"numeric"});return Object(c.jsx)("a",{className:ve.a.Article,href:t.url,target:"_blank",rel:"noopener noreferrer",children:Object(c.jsxs)("div",{className:ve.a.Card,children:[Object(c.jsx)("div",{className:ve.a.Image,style:{backgroundImage:"url(".concat(t.urlToImage||"https://goo.su/1ige",")")}}),Object(c.jsxs)("div",{className:ve.a.Info,children:[Object(c.jsx)("div",{className:ve.a.Date,children:a}),Object(c.jsx)("h3",{className:ve.a.Title,children:t.title}),Object(c.jsx)("p",{className:ve.a.Description,children:t.description}),Object(c.jsx)("span",{className:ve.a.Source,children:t.source.name})]})]})})},ge=a(22),ye=a.n(ge),ke=function(){var e=Object(i.c)((function(e){return e.home})),t=e.news,a=e.fromVisible,n=e.toVisible,r=e.analytics,s=Object(i.b)();return Object(c.jsx)("section",{className:ye.a.Result,children:Object(c.jsxs)("div",{className:ye.a.Wrapper,children:[Object(c.jsxs)("div",{className:ye.a.Block,children:[Object(c.jsx)("h2",{className:ye.a.Caption,children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430"}),Object(c.jsxs)(o.c,{className:ye.a.Link,to:{pathname:"".concat(_,"analytics"),analytics:r},children:["\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0443\xa0",Object(c.jsx)("span",{className:ye.a.Arrow,children:"\u203a"})]})]}),Object(c.jsx)("div",{className:ye.a.Container,children:t.articles.slice(a,n).map((function(e,t){return Object(c.jsx)(Ce,{children:e},t+1)}))}),Object(c.jsx)(de,{onClick:function(){return s(Q())},type:"ButtonResult",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"})]})})},Se=a(23),we=a.n(Se),Ie=function(){return Object(c.jsx)("section",{className:we.a.Author,children:Object(c.jsxs)("div",{className:we.a.Wrapper,children:[Object(c.jsx)("picture",{className:we.a.Photo}),Object(c.jsxs)("div",{className:we.a.Info,children:[Object(c.jsx)("h2",{className:we.a.Caption,children:"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"}),Object(c.jsx)("p",{className:we.a.Text,children:"\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c. \u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u041f\u0430\u0432\u0435\u043b \u041e\u0432\u0435\u0447\u043a\u0438\u043d \u0438 \u044d\u0442\u043e \u043c\u043e\u044f \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u043c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438 \u0438 \u0437\u043d\u0430\u043d\u0438\u044f \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."}),Object(c.jsx)("p",{className:we.a.Text,children:"\u041f\u043e\u0441\u043b\u0435 \u0441\u0435\u043c\u0438 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f, \u044f \u043d\u0430\u0443\u0447\u0438\u043b\u0441\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u044f\u0437\u044b\u043a\u043e\u043c \u0433\u0438\u043f\u0435\u0440\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0439 \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0438, \u044f\u0437\u044b\u043a\u043e\u043c \u0441\u0442\u0438\u043b\u0435\u0439 \u0438 \u044f\u0437\u044b\u043a\u043e\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f JavaScript. \u041f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0443 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u043b \u0438\u0437 \u0441\u0435\u0431\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0440\u0430\u0431\u043e\u0442: \u043e\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0442\u043a\u0438, \u0434\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0421 \u043d\u0438\u043c\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0432 \u043c\u043e\u0435\u043c \u043f\u0440\u043e\u0444\u0438\u043b\u0435 \u043d\u0430 GitHub."})]})]})})},Le=a(35),We=a.n(Le),Ee=function(){return Object(c.jsxs)("div",{className:We.a.Loader,children:[Object(c.jsxs)("div",{className:We.a.Loading,children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]}),Object(c.jsx)("h3",{className:We.a.Caption,children:"\u0418\u0434\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439..."})]})};var Ae=function(){var e=Object(i.c)((function(e){return e.home})),t=e.loading,a=e.error,r=e.typeError,s=e.result,o=Object(i.b)();return Object(n.useEffect)((function(){if(null!==JSON.parse(localStorage.getItem("newsObject"))&&null!==JSON.parse(localStorage.getItem("analyticsObject")))return o(z())}),[]),Object(c.jsxs)(ne,{children:[Object(c.jsx)(he,{}),t?Object(c.jsx)(Ee,{}):null,a?Object(c.jsx)(fe,{typeError:r}):null,s?Object(c.jsx)(ke,{}):null,Object(c.jsx)(Ie,{})]})},Te=a(15),Re=a.n(Te),Be=function(){return Object(c.jsx)("section",{className:Re.a.Customer,children:Object(c.jsxs)("div",{className:Re.a.Wrapper,children:[Object(c.jsx)("h1",{className:Re.a.Caption,children:"\u041a\u043b\u0438\u0435\u043d\u0442\u0430\u043c"}),Object(c.jsxs)("div",{className:Re.a.Block,children:[Object(c.jsx)("p",{className:Re.a.Text,children:"\u042d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u2014 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u042f\u043d\u0434\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430. \u0415\u0433\u043e \u0446\u0435\u043b\u044c \u2014 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0435\u043c\u0443 \u043d\u0430\u0443\u0447\u0438\u043b\u0441\u044f \u0441\u0442\u0443\u0434\u0435\u043d\u0442, \u0438 \u043a\u0430\u043a\u0438\u043c\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u043c\u0438 \u0432\u043b\u0430\u0434\u0435\u0435\u0442."}),Object(c.jsx)("p",{className:Re.a.Text,children:"\u0412\u0451\u0440\u0442\u0441\u043a\u0430 \u0441\u0430\u0439\u0442\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u043f\u043e \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u0411\u042d\u041c. \u042d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0441\u0430\u0439\u0442 \u0433\u0438\u0431\u043a\u0438\u043c \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u044b\u043c. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0449\u0435 \u0438 \u0431\u044b\u0441\u0442\u0440\u0435\u0435, \u0447\u0435\u043c \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445, \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u043e \u0434\u0440\u0443\u0433\u0438\u043c \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f\u043c. \u0422\u0430\u043a\u0436\u0435 \u0441\u0430\u0439\u0442 \u043f\u0440\u043e\u0449\u0435 \u0438 \u0434\u0435\u0448\u0435\u0432\u043b\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c."}),Object(c.jsx)("p",{className:Re.a.Text,children:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0441 \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u043c \u043f\u0440\u0438\u0445\u043e\u0434\u044f\u0442 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0430\u0441\u0438\u0445\u0440\u043e\u043d\u043d\u043e. \u0422\u043e \u0435\u0441\u0442\u044c \u0441\u0430\u0439\u0442 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, \u043f\u043e\u043a\u0430 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442 \u043e\u0442\u0432\u0435\u0442. \u042d\u0442\u043e \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u0442 \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0435\u0440\u0432\u0438\u0441\u0430."}),Object(c.jsx)("p",{className:Re.a.Text,children:"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0431\u044b\u043b\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u043d\u0430 \u0441\u0431\u043e\u0440\u043a\u0430 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0435\u0439 Webpack. \u042d\u0442\u043e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0441\u0430\u0439\u0442\u043e\u0432. \u041a\u043e\u0434 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f, \u0430 \u0437\u043d\u0430\u0447\u0438\u0442, \u0441\u0430\u0439\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u0435\u0435. \u0422\u0430\u043a\u0436\u0435 \u0441\u0430\u0439\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432 \u0441\u0442\u0430\u0440\u044b\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u0445. \u0414\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438 \u2014 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0441\u0442\u0430\u0440\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c \u0443 \u043d\u0438\u0445 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c. \u0410 \u0437\u043d\u0430\u0447\u0438\u0442 \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u0435\u0442."}),Object(c.jsx)("p",{className:Re.a.Text,children:"\u041f\u0440\u043e\u0435\u043a\u0442 \u0431\u044b\u043b \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u0430\u043c\u0438 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430. \u0418 \u0435\u0441\u043b\u0438 \u0432\u0430\u0448\u0435\u043c\u0443 \u0431\u0438\u0437\u0435\u0441\u0443 \u043d\u0443\u0436\u0435\u043d \u0441\u0430\u0439\u0442, \u043c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a \u044d\u0442\u043e\u043c\u0443 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0443."})]})]})})},De=a.p+"static/media/html.ca032841.svg",Fe=a.p+"static/media/css.3181d669.svg",Ge=a.p+"static/media/js.fa6b94d2.svg",Me=a.p+"static/media/webpack.1ba85ecd.svg",He=a(18),Je=a.n(He),Ve=function(){return Object(c.jsx)("section",{className:Je.a.Stack,children:Object(c.jsxs)("div",{className:Je.a.Wrapper,children:[Object(c.jsx)("h2",{className:Je.a.Caption,children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(c.jsxs)("picture",{className:Je.a.Technology,children:[Object(c.jsx)("img",{className:Je.a.Icon,src:De,alt:"HTML"}),Object(c.jsx)("img",{className:Je.a.Icon,src:Fe,alt:"CSS"}),Object(c.jsx)("img",{className:Je.a.Icon,src:Ge,alt:"JavaScript"}),Object(c.jsx)("img",{className:Je.a.Icon,src:Me,alt:"Webpack"})]})]})})},Pe=a(64),Xe=a.n(Pe),Ue=(a(141),a(142),a(143),a(19)),Ye=a.n(Ue),Ke=function(e){var t=e.children,a=W(new Date(t.commit.author.date),{day:"numeric",month:"long",year:"numeric"});return Object(c.jsxs)("div",{className:Ye.a.Commit,children:[Object(c.jsx)("p",{className:Ye.a.Date,children:a}),Object(c.jsxs)("div",{className:Ye.a.Author,children:[Object(c.jsx)("div",{className:Ye.a.Avatar,style:{backgroundImage:"url(".concat(t.committer.avatar_url,")")}}),Object(c.jsxs)("div",{className:Ye.a.Info,children:[Object(c.jsx)("p",{className:Ye.a.Name,children:t.commit.author.name}),Object(c.jsx)("p",{className:Ye.a.Email,children:t.commit.author.email})]})]}),Object(c.jsx)("p",{className:Ye.a.Description,children:t.commit.message})]})},ze=function(e){var t=e.commits,a=function(e){var t=e.className,a=e.onClick,n=[t,"slick-arrow","slick-next"];return Object(c.jsx)("div",{className:n.join(" "),onClick:a})},n=function(e){var t=e.className,a=e.onClick,n=[t,"slick-arrow","slick-prev"];return Object(c.jsx)("div",{className:n.join(" "),onClick:a})},r={initialSlide:0,slidesToShow:3,slidesToScroll:1,dots:!0,infinite:!1,speed:500,responsive:[{breakpoint:1023,settings:{slidesToShow:2}},{breakpoint:767,settings:{slidesToShow:1}}],nextArrow:Object(c.jsx)(a,{}),prevArrow:Object(c.jsx)(n,{})};return Object(c.jsx)(Xe.a,Object(m.a)(Object(m.a)({},r),{},{children:t.map((function(e,t){return Object(c.jsx)(Ke,{children:e},t+1)}))}))},qe=a(24),Qe=a.n(qe),Ze=function(e){var t=e.commits;return Object(c.jsx)("section",{className:Qe.a.Commits,children:Object(c.jsxs)("div",{className:Qe.a.Wrapper,children:[Object(c.jsxs)("div",{className:Qe.a.Block,children:[Object(c.jsx)("h2",{className:Qe.a.Caption,children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043a\u043e\u043c\u043c\u0438\u0442\u043e\u0432 \u0438\u0437 GitHub"}),Object(c.jsxs)("a",{className:Qe.a.Analytics,href:"https://github.com/opv1/analyzer-react/commits/master",target:"_blank",rel:"noopener noreferrer",children:["\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 GitHub ",Object(c.jsx)("span",{className:Qe.a.Arrow,children:"\u203a"})]})]}),Object(c.jsx)("div",{className:Qe.a.List,children:Object(c.jsx)(ze,{commits:t})})]})})};var $e=function(){var e=Object(i.c)((function(e){return e.about})).commits,t=Object(i.b)();return Object(n.useEffect)((function(){t(function(){var e=Object(w.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:P}),e.prev=1,e.next=4,D.get("/repos/opv1/analyzer-react/commits?");case 4:a=e.sent,t((n=a.data,{type:X,commits:n})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t((c=e.t0,{type:U,error:c}));case 11:case"end":return e.stop()}var c,n}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(c.jsxs)(ne,{children:[Object(c.jsx)(Be,{}),Object(c.jsx)(Ve,{}),Object(c.jsx)(Ie,{}),Object(c.jsx)(Ze,{commits:e})]})},et=a(31),tt=a.n(et),at=function(){return Object(c.jsx)("nav",{className:tt.a.Navigation,children:Object(c.jsxs)("div",{className:tt.a.Wrapper,children:[Object(c.jsx)(o.b,{className:tt.a.Link,to:"".concat(_),children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f\xa0"}),Object(c.jsx)("p",{className:tt.a.Link,children:"/\xa0\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430"})]})})},ct=a(20),nt=a.n(ct),rt=function(e){var t=e.analytics;return Object(c.jsx)("div",{className:nt.a.Coincide,children:Object(c.jsxs)("div",{className:nt.a.Wrapper,children:[Object(c.jsxs)("h2",{className:nt.a.Caption,children:['\u0412\u044b \u0441\u043f\u0440\u043e\u0441\u0438\u043b\u0438: "',t.keyWord,'"']}),Object(c.jsxs)("ul",{className:nt.a.List,children:[Object(c.jsxs)("li",{className:nt.a.Item,children:["\u041d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 \u0437\u0430 \u043d\u0435\u0434\u0435\u043b\u044e:\xa0",Object(c.jsx)("span",{className:nt.a.Count,children:t.totalResults})]}),Object(c.jsxs)("li",{className:nt.a.Item,children:["\u0423\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0439 \u0432 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430\u0445:\xa0",Object(c.jsx)("span",{className:nt.a.Count,children:t.amountKeyWord})]})]})]})})},st=a(4),ot=a.n(st),it=function(e){for(var t=e.analytics,a=[],n=[],r=0;r<t.presentWeek.length;r+=1)a.push(Object(c.jsxs)("p",{className:ot.a.ColumnY,children:[t.presentWeek[r].dayNumber,",\xa0",t.presentWeek[r].dayName]},r)),n.push(Object(c.jsx)("p",{className:ot.a.ColumnX,style:{width:"".concat(t.presentWeek[r].widthPercent,"%")},children:t.presentWeek[r].newsCount},r));return Object(c.jsx)("section",{className:ot.a.Graphic,children:Object(c.jsxs)("div",{className:ot.a.Wrapper,children:[Object(c.jsx)("h3",{className:ot.a.Caption,children:"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430 \u043f\u043e \u0434\u043d\u044f\u043c"}),Object(c.jsxs)("div",{className:ot.a.Block,children:[Object(c.jsxs)("div",{className:ot.a.Head,children:[Object(c.jsxs)("p",{className:ot.a.Date,children:["\u0414\u0430\u0442\u0430 (",t.presentMonth,")"]}),Object(c.jsx)("p",{className:ot.a.Count,children:"\u041a\u043e\u043b-\u0432\u043e \u0443\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0439"})]}),Object(c.jsxs)("div",{className:ot.a.Rows,children:[Object(c.jsx)("p",{className:ot.a.Cell,children:"0"}),Object(c.jsx)("p",{className:ot.a.Cell,children:"25"}),Object(c.jsx)("p",{className:ot.a.Cell,children:"50"}),Object(c.jsx)("p",{className:ot.a.Cell,children:"75"}),Object(c.jsx)("p",{className:ot.a.Cell,children:"100"})]}),Object(c.jsxs)("div",{className:ot.a.Columns,children:[Object(c.jsx)("div",{className:ot.a.ColumnsY,children:a}),Object(c.jsx)("div",{className:ot.a.ColumnsX,children:n})]}),Object(c.jsxs)("div",{className:ot.a.Rows,children:[Object(c.jsx)("p",{className:ot.a.Cell,children:"0"}),Object(c.jsx)("p",{className:ot.a.Cell,children:"25"}),Object(c.jsx)("p",{className:ot.a.Cell,children:"50"}),Object(c.jsx)("p",{className:ot.a.Cell,children:"75"}),Object(c.jsx)("p",{className:ot.a.Cell,children:"100"})]})]})]})})};var lt=function(){var e=JSON.parse(localStorage.getItem("analyticsObject"));return Object(c.jsxs)(ne,{children:[Object(c.jsx)(at,{}),Object(c.jsx)(rt,{analytics:e}),Object(c.jsx)(it,{analytics:e})]})};a(144);var jt=function(){return Object(c.jsx)(u.c,{children:Object(c.jsxs)(ce,{children:[Object(c.jsx)(u.a,{exact:!0,path:"".concat(_),component:Ae}),Object(c.jsx)(u.a,{path:"".concat(_,"about"),component:$e}),Object(c.jsx)(u.a,{path:"".concat(_,"analytics"),component:lt})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ut={typeLayout:null,color:null,boxShadow:null,loading:!1,error:!1,typeError:null,result:!1,news:{},fromVisible:0,toVisible:3,plusVisible:3,analytics:{},keyWord:"",commits:[]};var mt=Object(l.c)({layout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(m.a)(Object(m.a)({},e),{},{typeLayout:t.typeLayout,color:t.color,boxShadow:t.boxShadow});default:return e}},home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(m.a)(Object(m.a)({},e),{},{result:!0,news:t.news,analytics:t.analytics,keyWord:t.keyWord});case M:return Object(m.a)(Object(m.a)({},e),{},{loading:!0,error:!1,result:!1});case H:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:!1,result:!0,news:t.news});case J:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:!0,typeError:t.typeError});case V:return Object(m.a)(Object(m.a)({},e),{},{toVisible:e.toVisible+e.plusVisible});case Y:return Object(m.a)(Object(m.a)({},e),{},{keyWord:t.keyWord});default:return e}},about:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(m.a)(Object(m.a)({},e),{},{loading:!0});case X:return Object(m.a)(Object(m.a)({},e),{},{commits:t.commits});case U:return Object(m.a)(Object(m.a)({},e),{},{error:t.error});default:return e}}}),dt="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):l.d,_t=Object(l.e)(mt,dt(Object(l.a)(j.a))),pt=Object(c.jsx)(i.a,{store:_t,children:Object(c.jsx)(o.a,{children:Object(c.jsx)(jt,{})})});s.a.render(pt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},15:function(e,t,a){e.exports={Customer:"Customer_Customer__RPSrV",Wrapper:"Customer_Wrapper__1i7tz",Caption:"Customer_Caption__2iviR",Block:"Customer_Block__2XnYz",Text:"Customer_Text__2VRXr"}},16:function(e,t,a){e.exports={Error:"Error_Error__2JZch",Block:"Error_Block__1gvGl",Icon:"Error_Icon__3e62l",Caption:"Error_Caption__eVa42",Text:"Error_Text__3sFIP"}},17:function(e,t,a){e.exports={Article:"Article_Article__M868W",Card:"Article_Card__30I80",Image:"Article_Image__3Bh3o",Info:"Article_Info__UDAml",Date:"Article_Date__E_BtK",Title:"Article_Title__3gumk",Description:"Article_Description__3KBG1",Source:"Article_Source__2jJ1M"}},18:function(e,t,a){e.exports={Stack:"Stack_Stack__1XqLn",Wrapper:"Stack_Wrapper__2gdQi",Caption:"Stack_Caption__3mxy3",Technology:"Stack_Technology__EfnmJ",Icon:"Stack_Icon__A0JkM"}},19:function(e,t,a){e.exports={Commit:"Commit_Commit__n6c3C",Date:"Commit_Date___VoRS",Author:"Commit_Author__1nA3z",Avatar:"Commit_Avatar__3UoLg",Info:"Commit_Info__1M3g-",Name:"Commit_Name__gjsCX",Email:"Commit_Email__1ROqI",Description:"Commit_Description__RL_AK"}},20:function(e,t,a){e.exports={Coincide:"Coincide_Coincide__Ghbrb",Wrapper:"Coincide_Wrapper__fXqcv",Caption:"Coincide_Caption__2kaRp",List:"Coincide_List__3Ojf2",Item:"Coincide_Item__1yMFK",Count:"Coincide_Count__1VaBJ"}},22:function(e,t,a){e.exports={Result:"Result_Result__15YXi",Wrapper:"Result_Wrapper__3oDBA",Block:"Result_Block__3qvq6",Caption:"Result_Caption__1fyUJ",Link:"Result_Link__20BT2",Arrow:"Result_Arrow__1ESha",Container:"Result_Container__1MPLD"}},23:function(e,t,a){e.exports={Author:"Author_Author__9hT9R",Wrapper:"Author_Wrapper__x0-lA",Photo:"Author_Photo__1f2RN",Info:"Author_Info__13A2h",Caption:"Author_Caption__1jAfe",Text:"Author_Text__1FKy3"}},24:function(e,t,a){e.exports={Commits:"Commits_Commits__rW5Ks",Wrapper:"Commits_Wrapper__dbtfB",Block:"Commits_Block__3E7bd",Caption:"Commits_Caption__jm_Te",Analytics:"Commits_Analytics__31EnG",Arrow:"Commits_Arrow__1GRea",List:"Commits_List__1lqCF"}},27:function(e,t,a){e.exports={Search:"Search_Search__1vMA9",Wrapper:"Search_Wrapper__2-aon",Block:"Search_Block__8wM_i",Caption:"Search_Caption__3Tr4A",Description:"Search_Description__344Jp"}},31:function(e,t,a){e.exports={Navigation:"Navigation_Navigation__3tBfE",Wrapper:"Navigation_Wrapper__242j0",Link:"Navigation_Link__JrGe8"}},35:function(e,t,a){e.exports={Loader:"Loader_Loader__2tdvt",Caption:"Loader_Caption__1uP5Z",Loading:"Loader_Loading__27wah"}},4:function(e,t,a){e.exports={Graphic:"Graphic_Graphic__-Qu6O",Wrapper:"Graphic_Wrapper__1MspG",Caption:"Graphic_Caption__3HWJd",Block:"Graphic_Block__3XNgt",Head:"Graphic_Head__QG0qR",Date:"Graphic_Date__PUPjI",Count:"Graphic_Count__2RxNP",Rows:"Graphic_Rows__34oxV",Cell:"Graphic_Cell__FU4EK",Columns:"Graphic_Columns__28TNH",ColumnsY:"Graphic_ColumnsY__2bCyT",ColumnY:"Graphic_ColumnY__3Gbxc",ColumnsX:"Graphic_ColumnsX__2XIZ3",ColumnX:"Graphic_ColumnX__21Ztc"}},42:function(e,t,a){e.exports={Layout:"Layout_Layout__1c3J6",withBackground:"Layout_withBackground__inFQ0"}},43:function(e,t,a){e.exports={Form:"Form_Form__3tRf4"}},44:function(e,t,a){e.exports={Input:"Input_Input__1DS5c"}},45:function(e,t,a){e.exports={Button:"Button_Button__2JRre",ButtonSearch:"Button_ButtonSearch__silLA",ButtonResult:"Button_ButtonResult__3BQWK"}},61:function(e,t,a){e.exports={Main:"Main_Main__1F4Ul"}},7:function(e,t,a){e.exports={Footer:"Footer_Footer__3YeAD",Wrapper:"Footer_Wrapper__KziQp",Copyright:"Footer_Copyright__1T8Ps",Navigation:"Footer_Navigation__1kbDy",List:"Footer_List__RYN_g",Item:"Footer_Item__2VSWm",Link:"Footer_Link__1b1FM",Reference:"Footer_Reference__1116Y",Icon:"Footer_Icon__1c0jv",Social:"Footer_Social__hyuQM"}}},[[145,1,2]]]);
//# sourceMappingURL=main.deed60b7.chunk.js.map