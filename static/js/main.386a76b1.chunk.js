(this["webpackJsonpanalyzer-yp-react"]=this["webpackJsonpanalyzer-yp-react"]||[]).push([[0],{13:function(e,t,a){e.exports={Header:"Header_Header__3YzIQ",Wrapper:"Header_Wrapper__xrpMw",Caption:"Header_Caption__2Nroe",Navigation:"Header_Navigation__1WIIt",List:"Header_List__3VVaA",Item:"Header_Item__1LOep",Link:"Header_Link__1LVC5"}},14:function(e,t,a){e.exports={Customer:"Customer_Customer__1TJKH",Wrapper:"Customer_Wrapper__ocSkd",Caption:"Customer_Caption__2HcU8",Block:"Customer_Block__wIAN7",Text:"Customer_Text__1zPaO"}},146:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(1),n=a(33),s=a.n(n),o=a(8),i=a(5),l=a(20),j=a(60),u=a(4),m=(a(74),a(39)),p=a.n(m),d=a(2),_=a(40),h=a(13),b=a.n(h),O=function(){var e=Object(i.c)((function(e){return e.layout})),t=e.color,a=e.boxShadow,r={color:t,borderBottom:"2px solid ".concat(t),boxShadow:a,hover:{":hover":{color:t}}};return Object(c.jsx)("header",{className:b.a.Header,style:{boxShadow:r.boxShadow},children:Object(c.jsxs)("div",{className:b.a.Wrapper,children:[Object(c.jsx)(o.b,{className:b.a.Caption,style:{color:r.color},to:"/analyzer-app-yp-react/",children:"NewsAnalyzer"}),Object(c.jsx)("nav",{className:b.a.Navigation,children:Object(c.jsxs)("ul",{className:b.a.List,children:[Object(c.jsx)("li",{className:b.a.Item,children:Object(c.jsx)(o.c,Object(d.a)(Object(d.a)({exact:!0,className:b.a.Link},Object(_.css)(r.hover)),{},{activeStyle:{color:r.color,borderBottom:r.borderBottom},to:"/analyzer-app-yp-react/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}))}),Object(c.jsx)("li",{className:b.a.Item,children:Object(c.jsx)(o.c,Object(d.a)(Object(d.a)({className:b.a.Link},Object(_.css)(r.hover)),{},{activeStyle:{color:r.color,borderBottom:r.borderBottom},to:"/analyzer-app-yp-react/about",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}))})]})})]})})},x=a(61),f=a.n(x),N=function(e){var t=e.children;return Object(c.jsx)("main",{className:f.a.Main,children:t})},v=a(7),y=a.n(v),C=a.p+"static/media/github.a6cad5fd.svg",g=a.p+"static/media/fb.bdaf0940.svg",k=function(){return Object(c.jsx)("footer",{className:y.a.Footer,children:Object(c.jsxs)("div",{className:y.a.Wrapper,children:[Object(c.jsx)("p",{className:y.a.Copyright,children:"\xa9 2020. \u041f\u0430\u0432\u0435\u043b \u041e\u0432\u0435\u0447\u043a\u0438\u043d"}),Object(c.jsx)("nav",{className:y.a.Navigation,children:Object(c.jsxs)("ul",{className:y.a.List,children:[Object(c.jsx)("li",{className:y.a.Item,children:Object(c.jsx)(o.c,{className:y.a.Link,to:"/analyzer-app-yp-react/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(c.jsx)("li",{className:y.a.Item,children:Object(c.jsx)(o.c,{className:y.a.Link,to:"/analyzer-app-yp-react/about",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})}),Object(c.jsx)("li",{className:y.a.Item,children:Object(c.jsx)("a",{className:y.a.Link,href:"https://praktikum.yandex.ru/",target:"_blank",rel:"noopener noreferrer",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})})]})}),Object(c.jsxs)("div",{className:y.a.Social,children:[Object(c.jsx)("a",{className:y.a.Reference,href:"https://github.com/opv1/",target:"_blank",rel:"noopener noreferrer",children:Object(c.jsx)("img",{className:y.a.Icon,src:C,alt:"GitHub"})}),Object(c.jsx)("a",{className:y.a.Reference,href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer",children:Object(c.jsx)("img",{className:y.a.Icon,src:g,alt:"Facebook"})})]})]})})},S=a(43),w=a.n(S),I=a(62),L=function(e,t){return e.setDate(e.getDate()-t)},W=function(e){return e.toISOString().slice(0,10)},E=function(e,t){return e.toLocaleString("ru",t)},T=function(e,t,a){var c=0;return e.articles.map((function(e){return E(new Date(e.publishedAt),{day:"numeric",month:"long",year:"numeric"})===E(a,{day:"numeric",month:"long",year:"numeric"})&&e.title.match(t)?c+=1:c+=0,!1})),c},A=function(e,t){localStorage.setItem("newsObject",JSON.stringify(e));var a=new RegExp("".concat(t),"gi"),c=function(e,t){return e.articles.map((function(e){return e.title.match(t)})).filter((function(e){return null!==e&&void 0!==e})).length}(e,a),r={amountKeyWord:c,keyWord:t,presentMonth:E(new Date,{month:"long"}),presentWeek:function(e,t,a,c){for(var r=[],n=0;n<7;n+=1){var s=a,o=E(s,{day:"numeric"}),i=["\u0432\u0441","\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431"][s.getDay()],l=T(e,t,s),j=Math.round(100*l/c);r.push({dayNumber:o,dayName:i,newsCount:l,widthPercent:j}),s=L(a,1)}return r}(e,a,new Date,c),totalResults:e.totalResults};localStorage.setItem("analyticsObject",JSON.stringify(r))},B=W(new Date),R=W(new Date(L(new Date,6))),H=a(63),F=a.n(H).a.create({baseURL:"https://api.github.com",headers:{"Content-Type":"application/json"}}),D="STYLES_LAYOUT",M="INITIAL_NEWS",G="FETCH_NEWS_START",P="FETCH_NEWS_SUCCESS",z="FETCH_NEWS_ERROR",V="MORE_NEWS",X="FETCH_COMMITS_START",Y="FETCH_COMMITS_SUCCESS",J="FETCH_COMMITS_ERROR",U="INPUT_CHANGE";function K(e){return function(t){t("/analyzer-app-yp-react/"===e?ee("withBackground","#ffffff","inset 0px -1px 0px rgba(255, 255, 255, 0.2)"):ee(null,"#000000","inset 0px -1px 0px #d1d2d6"))}}function Q(){return function(e){var t=JSON.parse(localStorage.getItem("newsObject")),a=JSON.parse(localStorage.getItem("analyticsObject"));e(function(e,t,a){return{type:M,news:e,analytics:t,keyWord:a}}(t,a,a.keyWord))}}function q(e){return function(t){e.preventDefault();var a=e.target,c=a.elements.input,r=a.elements.button,n=c.value;t({type:G}),new Promise((function(e){c.setAttribute("disabled",!0),r.setAttribute("disabled",!0),e(function(e){return fetch("".concat("https://nomoreparties.co/news/v2/everything?")+"q=".concat(e,"&")+"language=ru&"+"from=".concat(R,"&")+"to=".concat(B,"&")+"pageSize=100&sortBy=popularity&apiKey=60659df53b2641f4bc17059b6e641af7").then((function(e){return e.ok?e.json():Promise.reject(new Error("".concat(e.status)))})).then((function(e){if(0===e.totalResults)throw new Error("Failed to found");return e})).catch((function(e){if("Failed to fetch"===e.message)throw new Error("\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439!");if("Failed to found"===e.message)throw new Error("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u041d\u0443\u043b\u0435\u0432\u043e\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442!")}))}(n).then((function(e){t({type:P,news:e}),A(e,n)})).catch((function(e){"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439!"===e.message&&t(te("failedToFetch")),"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u041d\u0443\u043b\u0435\u0432\u043e\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442!"===e.message&&t(te("failedToFound"))})).finally((function(){c.removeAttribute("disabled"),r.removeAttribute("disabled")})))}))}}function Z(){return function(e){e({type:V})}}function $(e){return function(t){var a;e.target.validity.valueMissing?e.target.setCustomValidity("\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"):e.target.validity.tooShort||e.target.validity.tooLong?e.target.setCustomValidity("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0442 2 \u0434\u043e 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):e.target.validity.patternMismatch?e.target.setCustomValidity("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u0435\u0439"):e.target.setCustomValidity(""),t((a=e.target.value,{type:U,keyWord:a}))}}function ee(e,t,a){return{type:D,typeLayout:e,color:t,boxShadow:a}}function te(e){return{type:z,typeError:e}}var ae=function(e){var t=Object(i.c)((function(e){return e.layout})).typeLayout,a=Object(i.b)(),n=e.location.pathname;Object(r.useEffect)((function(){a(K(n))}),[n]),Object(r.useEffect)((function(){a(K(n))}),[]);var s=[p.a.Layout,p.a[t]];return Object(c.jsxs)("div",{className:s.join(" "),children:[Object(c.jsx)(O,{}),Object(c.jsx)(N,{children:e.children}),Object(c.jsx)(k,{})]})},ce=function(e){return e.children},re=a(26),ne=a.n(re),se=a(44),oe=a.n(se),ie=function(e){var t=e.onSubmit,a=e.type,r=e.name,n=e.children,s=[oe.a.Form,oe.a[a]];return Object(c.jsx)("form",{className:s.join(" "),onSubmit:t,name:r,children:n})},le=a(45),je=a.n(le),ue=function(e){var t=e.onChange,a=e.type,r=e.value,n=e.name,s=e.placeholder,o=e.title,i=e.pattern,l=e.minLength,j=e.maxLength,u=[je.a.Input,je.a[a]];return Object(c.jsx)("input",{className:u.join(" "),onChange:t,value:r,name:n,type:a,placeholder:s,title:o,pattern:i,minLength:l,maxLength:j,required:!0})},me=a(46),pe=a.n(me),de=function(e){var t=e.onClick,a=e.type,r=e.name,n=e.disabled,s=e.children,o=[pe.a.Button,pe.a[a]];return Object(c.jsx)("button",{className:o.join(" "),onClick:t,name:r,disabled:n,children:s})},_e=function(){var e=Object(i.c)((function(e){return e.home})).keyWord,t=Object(i.b)();return Object(c.jsx)("section",{className:ne.a.Search,children:Object(c.jsxs)("div",{className:ne.a.Wrapper,children:[Object(c.jsxs)("div",{className:ne.a.Block,children:[Object(c.jsx)("h1",{className:ne.a.Caption,children:"\u0427\u0442\u043e \u0432 \u043c\u0438\u0440\u0435 \u0442\u0432\u043e\u0440\u0438\u0442\u0441\u044f?"}),Object(c.jsx)("h2",{className:ne.a.Description,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432 \u043f\u043e\u0438\u0441\u043a\u0435 \u043b\u044e\u0431\u0443\u044e \u0442\u0435\u043c\u0443 \u0438 \u0443\u0437\u043d\u0430\u0439\u0442\u0435, \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0439 \u043e\u043d\u0430 \u0431\u044b\u043b\u0430 \u0432 \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u0445 \u0437\u0430 \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0443\u044e \u043d\u0435\u0434\u0435\u043b\u044e."})]}),Object(c.jsxs)(ie,{onSubmit:function(e){return t(q(e))},children:[Object(c.jsx)(ue,{onChange:function(e){return t($(e))},value:e,name:"input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",minLength:"2",maxLength:"15",pattern:"^([\u0410-\u042f\u0430-\u044f\u0401-\u0451]*)$"}),Object(c.jsx)(de,{type:"ButtonSearch",name:"button",children:"\u0418\u0441\u043a\u0430\u0442\u044c"})]})]})})},he=a(15),be=a.n(he),Oe=a.p+"static/media/not-found.84ec3730.svg",xe=function(e){var t=e.typeError;return Object(c.jsxs)("section",{className:be.a.Error,children:["failedToFound"===t?Object(c.jsxs)("div",{className:be.a.Block,children:[Object(c.jsx)("img",{className:be.a.Icon,src:Oe,alt:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(c.jsx)("h3",{className:be.a.Caption,children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(c.jsx)("p",{className:be.a.Text,children:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e."})]}):null,"failedToFetch"===t?Object(c.jsxs)("div",{className:be.a.Block,children:[Object(c.jsx)("h3",{className:be.a.Caption,children:"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"}),Object(c.jsx)("p",{className:be.a.Text,children:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]}):null]})},fe=a(21),Ne=a.n(fe),ve=a(16),ye=a.n(ve),Ce=function(e){var t=e.children,a=E(new Date(t.publishedAt),{day:"numeric",month:"long",year:"numeric"});return Object(c.jsx)("a",{className:ye.a.Article,href:t.url,target:"_blank",rel:"noopener noreferrer",children:Object(c.jsxs)("div",{className:ye.a.Card,children:[Object(c.jsx)("div",{className:ye.a.Image,style:{backgroundImage:"url(".concat(t.urlToImage||"https://goo.su/1ige",")")}}),Object(c.jsxs)("div",{className:ye.a.Info,children:[Object(c.jsx)("div",{className:ye.a.Date,children:a}),Object(c.jsx)("h3",{className:ye.a.Title,children:t.title}),Object(c.jsx)("p",{className:ye.a.Description,children:t.description}),Object(c.jsx)("span",{className:ye.a.Source,children:t.source.name})]})]})})},ge=function(){var e=Object(i.c)((function(e){return e.home})),t=e.news,a=e.fromVisible,r=e.toVisible,n=e.analytics,s=Object(i.b)();return Object(c.jsx)("section",{className:Ne.a.Result,children:Object(c.jsxs)("div",{className:Ne.a.Wrapper,children:[Object(c.jsxs)("div",{className:Ne.a.Block,children:[Object(c.jsx)("h2",{className:Ne.a.Caption,children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430"}),Object(c.jsxs)(o.c,{className:Ne.a.Link,to:{pathname:"/analyzer-app-yp-react/analytics",analytics:n},children:["\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0443\xa0",Object(c.jsx)("span",{className:Ne.a.Arrow,children:"\u203a"})]})]}),Object(c.jsx)("div",{className:Ne.a.Container,children:t.articles.slice(a,r).map((function(e,t){return Object(c.jsx)(Ce,{children:e},t+1)}))}),Object(c.jsx)(de,{onClick:function(){return s(Z())},type:"ButtonResult",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"})]})})},ke=a(22),Se=a.n(ke),we=function(){return Object(c.jsx)("section",{className:Se.a.Author,children:Object(c.jsxs)("div",{className:Se.a.Wrapper,children:[Object(c.jsx)("picture",{className:Se.a.Photo}),Object(c.jsxs)("div",{className:Se.a.Info,children:[Object(c.jsx)("h2",{className:Se.a.Caption,children:"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"}),Object(c.jsx)("p",{className:Se.a.Text,children:"\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c. \u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u041f\u0430\u0432\u0435\u043b \u041e\u0432\u0435\u0447\u043a\u0438\u043d \u0438 \u044d\u0442\u043e \u043c\u043e\u044f \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u043c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438 \u0438 \u0437\u043d\u0430\u043d\u0438\u044f \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."}),Object(c.jsx)("p",{className:Se.a.Text,children:"\u041f\u043e\u0441\u043b\u0435 \u0441\u0435\u043c\u0438 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f, \u044f \u043d\u0430\u0443\u0447\u0438\u043b\u0441\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u044f\u0437\u044b\u043a\u043e\u043c \u0433\u0438\u043f\u0435\u0440\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0439 \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0438, \u044f\u0437\u044b\u043a\u043e\u043c \u0441\u0442\u0438\u043b\u0435\u0439 \u0438 \u044f\u0437\u044b\u043a\u043e\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f JavaScript. \u041f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0443 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u043b \u0438\u0437 \u0441\u0435\u0431\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0440\u0430\u0431\u043e\u0442: \u043e\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0442\u043a\u0438, \u0434\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0421 \u043d\u0438\u043c\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0432 \u043c\u043e\u0435\u043c \u043f\u0440\u043e\u0444\u0438\u043b\u0435 \u043d\u0430 GitHub."})]})]})})},Ie=a(36),Le=a.n(Ie),We=function(){return Object(c.jsxs)("div",{className:Le.a.Loader,children:[Object(c.jsxs)("div",{className:Le.a.Loading,children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]}),Object(c.jsx)("h3",{className:Le.a.Caption,children:"\u0418\u0434\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439..."})]})};var Ee=function(){var e=Object(i.c)((function(e){return e.home})),t=e.loading,a=e.error,n=e.typeError,s=e.result,o=Object(i.b)();return Object(r.useEffect)((function(){if(null!==JSON.parse(localStorage.getItem("newsObject"))&&null!==JSON.parse(localStorage.getItem("analyticsObject")))return o(Q())}),[]),Object(c.jsxs)(ce,{children:[Object(c.jsx)(_e,{}),t?Object(c.jsx)(We,{}):null,a?Object(c.jsx)(xe,{typeError:n}):null,s?Object(c.jsx)(ge,{}):null,Object(c.jsx)(we,{})]})},Te=a(14),Ae=a.n(Te),Be=function(){return Object(c.jsx)("section",{className:Ae.a.Customer,children:Object(c.jsxs)("div",{className:Ae.a.Wrapper,children:[Object(c.jsx)("h1",{className:Ae.a.Caption,children:"\u041a\u043b\u0438\u0435\u043d\u0442\u0430\u043c"}),Object(c.jsxs)("div",{className:Ae.a.Block,children:[Object(c.jsx)("p",{className:Ae.a.Text,children:"\u042d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u2014 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u042f\u043d\u0434\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430. \u0415\u0433\u043e \u0446\u0435\u043b\u044c \u2014 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0435\u043c\u0443 \u043d\u0430\u0443\u0447\u0438\u043b\u0441\u044f \u0441\u0442\u0443\u0434\u0435\u043d\u0442, \u0438 \u043a\u0430\u043a\u0438\u043c\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u043c\u0438 \u0432\u043b\u0430\u0434\u0435\u0435\u0442."}),Object(c.jsx)("p",{className:Ae.a.Text,children:"\u0412\u0451\u0440\u0442\u0441\u043a\u0430 \u0441\u0430\u0439\u0442\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u043f\u043e \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u0411\u042d\u041c. \u042d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0441\u0430\u0439\u0442 \u0433\u0438\u0431\u043a\u0438\u043c \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u044b\u043c. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0449\u0435 \u0438 \u0431\u044b\u0441\u0442\u0440\u0435\u0435, \u0447\u0435\u043c \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445, \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u043e \u0434\u0440\u0443\u0433\u0438\u043c \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f\u043c. \u0422\u0430\u043a\u0436\u0435 \u0441\u0430\u0439\u0442 \u043f\u0440\u043e\u0449\u0435 \u0438 \u0434\u0435\u0448\u0435\u0432\u043b\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c."}),Object(c.jsx)("p",{className:Ae.a.Text,children:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0441 \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u043c \u043f\u0440\u0438\u0445\u043e\u0434\u044f\u0442 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0430\u0441\u0438\u0445\u0440\u043e\u043d\u043d\u043e. \u0422\u043e \u0435\u0441\u0442\u044c \u0441\u0430\u0439\u0442 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, \u043f\u043e\u043a\u0430 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442 \u043e\u0442\u0432\u0435\u0442. \u042d\u0442\u043e \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u0442 \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0435\u0440\u0432\u0438\u0441\u0430."}),Object(c.jsx)("p",{className:Ae.a.Text,children:"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0431\u044b\u043b\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u043d\u0430 \u0441\u0431\u043e\u0440\u043a\u0430 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0435\u0439 Webpack. \u042d\u0442\u043e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0441\u0430\u0439\u0442\u043e\u0432. \u041a\u043e\u0434 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f, \u0430 \u0437\u043d\u0430\u0447\u0438\u0442, \u0441\u0430\u0439\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u0435\u0435. \u0422\u0430\u043a\u0436\u0435 \u0441\u0430\u0439\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432 \u0441\u0442\u0430\u0440\u044b\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u0445. \u0414\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438 \u2014 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0441\u0442\u0430\u0440\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c \u0443 \u043d\u0438\u0445 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c. \u0410 \u0437\u043d\u0430\u0447\u0438\u0442 \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u0435\u0442."}),Object(c.jsx)("p",{className:Ae.a.Text,children:"\u041f\u0440\u043e\u0435\u043a\u0442 \u0431\u044b\u043b \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u0430\u043c\u0438 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430. \u0418 \u0435\u0441\u043b\u0438 \u0432\u0430\u0448\u0435\u043c\u0443 \u0431\u0438\u0437\u0435\u0441\u0443 \u043d\u0443\u0436\u0435\u043d \u0441\u0430\u0439\u0442, \u043c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a \u044d\u0442\u043e\u043c\u0443 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0443."})]})]})})},Re=a(17),He=a.n(Re),Fe=a.p+"static/media/html.ca032841.svg",De=a.p+"static/media/css.3181d669.svg",Me=a.p+"static/media/js.fa6b94d2.svg",Ge=a.p+"static/media/webpack.1ba85ecd.svg",Pe=function(){return Object(c.jsx)("section",{className:He.a.Stack,children:Object(c.jsxs)("div",{className:He.a.Wrapper,children:[Object(c.jsx)("h2",{className:He.a.Caption,children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(c.jsxs)("picture",{className:He.a.Technology,children:[Object(c.jsx)("img",{className:He.a.Icon,src:Fe,alt:"HTML"}),Object(c.jsx)("img",{className:He.a.Icon,src:De,alt:"CSS"}),Object(c.jsx)("img",{className:He.a.Icon,src:Me,alt:"JavaScript"}),Object(c.jsx)("img",{className:He.a.Icon,src:Ge,alt:"Webpack"})]})]})})},ze=a(23),Ve=a.n(ze),Xe=a(64),Ye=a.n(Xe),Je=(a(144),a(145),a(146),a(18)),Ue=a.n(Je),Ke=function(e){var t=e.children,a=E(new Date(t.commit.author.date),{day:"numeric",month:"long",year:"numeric"});return Object(c.jsxs)("div",{className:Ue.a.Commit,children:[Object(c.jsx)("p",{className:Ue.a.Date,children:a}),Object(c.jsxs)("div",{className:Ue.a.Author,children:[Object(c.jsx)("div",{className:Ue.a.Avatar,style:{backgroundImage:"url(".concat(t.committer.avatar_url,")")}}),Object(c.jsxs)("div",{className:Ue.a.Info,children:[Object(c.jsx)("p",{className:Ue.a.Name,children:t.commit.author.name}),Object(c.jsx)("p",{className:Ue.a.Email,children:t.commit.author.email})]})]}),Object(c.jsx)("p",{className:Ue.a.Description,children:t.commit.message})]})},Qe=function(e){var t=e.commits,a=function(e){var t=e.className,a=e.onClick,r=[t,"slick-arrow","slick-next"];return Object(c.jsx)("div",{className:r.join(" "),onClick:a})},r=function(e){var t=e.className,a=e.onClick,r=[t,"slick-arrow","slick-prev"];return Object(c.jsx)("div",{className:r.join(" "),onClick:a})},n={initialSlide:0,slidesToShow:3,slidesToScroll:1,dots:!0,infinite:!1,speed:500,responsive:[{breakpoint:1023,settings:{slidesToShow:2}},{breakpoint:767,settings:{slidesToShow:1}}],nextArrow:Object(c.jsx)(a,{}),prevArrow:Object(c.jsx)(r,{})};return Object(c.jsx)(Ye.a,Object(d.a)(Object(d.a)({},n),{},{children:t.map((function(e,t){return Object(c.jsx)(Ke,{children:e},t+1)}))}))},qe=function(e){var t=e.commits;return Object(c.jsx)("section",{className:Ve.a.Commits,children:Object(c.jsxs)("div",{className:Ve.a.Wrapper,children:[Object(c.jsxs)("div",{className:Ve.a.Block,children:[Object(c.jsx)("h2",{className:Ve.a.Caption,children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043a\u043e\u043c\u043c\u0438\u0442\u043e\u0432 \u0438\u0437 GitHub"}),Object(c.jsxs)("a",{className:Ve.a.Analytics,href:"https://github.com/opv1/analyzer-app-yp-react/commits/master",target:"_blank",rel:"noopener noreferrer",children:["\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 GitHub ",Object(c.jsx)("span",{className:Ve.a.Arrow,children:"\u203a"})]})]}),Object(c.jsx)("div",{className:Ve.a.List,children:Object(c.jsx)(Qe,{commits:t})})]})})};var Ze=function(){var e=Object(i.c)((function(e){return e.about})).commits,t=Object(i.b)();return Object(r.useEffect)((function(){t(function(){var e=Object(I.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:X}),e.prev=1,e.next=4,F.get("/repos/opv1/analyzer-app-yp-react/commits?");case 4:a=e.sent,t((r=a.data,{type:Y,commits:r})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t((c=e.t0,{type:J,error:c}));case 11:case"end":return e.stop()}var c,r}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(c.jsxs)(ce,{children:[Object(c.jsx)(Be,{}),Object(c.jsx)(Pe,{}),Object(c.jsx)(we,{}),Object(c.jsx)(qe,{commits:e})]})},$e=a(30),et=a.n($e),tt=function(){return Object(c.jsx)("nav",{className:et.a.Navigation,children:Object(c.jsxs)("div",{className:et.a.Wrapper,children:[Object(c.jsx)(o.b,{className:et.a.Link,to:"/analyzer-app-yp-react/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f\xa0"}),Object(c.jsx)("p",{className:et.a.Link,children:"/\xa0\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430"})]})})},at=a(19),ct=a.n(at),rt=function(e){var t=e.analytics;return Object(c.jsx)("div",{className:ct.a.Coincide,children:Object(c.jsxs)("div",{className:ct.a.Wrapper,children:[Object(c.jsxs)("h2",{className:ct.a.Caption,children:['\u0412\u044b \u0441\u043f\u0440\u043e\u0441\u0438\u043b\u0438: "',t.keyWord,'"']}),Object(c.jsxs)("ul",{className:ct.a.List,children:[Object(c.jsxs)("li",{className:ct.a.Item,children:["\u041d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 \u0437\u0430 \u043d\u0435\u0434\u0435\u043b\u044e:\xa0",Object(c.jsx)("span",{className:ct.a.Count,children:t.totalResults})]}),Object(c.jsxs)("li",{className:ct.a.Item,children:["\u0423\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0439 \u0432 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430\u0445:\xa0",Object(c.jsx)("span",{className:ct.a.Count,children:t.amountKeyWord})]})]})]})})},nt=a(3),st=a.n(nt),ot=function(e){for(var t=e.analytics,a=[],r=[],n=0;n<t.presentWeek.length;n+=1)a.push(Object(c.jsxs)("p",{className:st.a.ColumnY,children:[t.presentWeek[n].dayNumber,",\xa0",t.presentWeek[n].dayName]},n)),r.push(Object(c.jsx)("p",{className:st.a.ColumnX,style:{width:"".concat(t.presentWeek[n].widthPercent,"%")},children:t.presentWeek[n].newsCount},n));return Object(c.jsx)("section",{className:st.a.Graphic,children:Object(c.jsxs)("div",{className:st.a.Wrapper,children:[Object(c.jsx)("h3",{className:st.a.Caption,children:"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430 \u043f\u043e \u0434\u043d\u044f\u043c"}),Object(c.jsxs)("div",{className:st.a.Block,children:[Object(c.jsxs)("div",{className:st.a.Head,children:[Object(c.jsxs)("p",{className:st.a.Date,children:["\u0414\u0430\u0442\u0430 (",t.presentMonth,")"]}),Object(c.jsx)("p",{className:st.a.Count,children:"\u041a\u043e\u043b-\u0432\u043e \u0443\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0439"})]}),Object(c.jsxs)("div",{className:st.a.Rows,children:[Object(c.jsx)("p",{className:st.a.Cell,children:"0"}),Object(c.jsx)("p",{className:st.a.Cell,children:"25"}),Object(c.jsx)("p",{className:st.a.Cell,children:"50"}),Object(c.jsx)("p",{className:st.a.Cell,children:"75"}),Object(c.jsx)("p",{className:st.a.Cell,children:"100"})]}),Object(c.jsxs)("div",{className:st.a.Columns,children:[Object(c.jsx)("div",{className:st.a.ColumnsY,children:a}),Object(c.jsx)("div",{className:st.a.ColumnsX,children:r})]}),Object(c.jsxs)("div",{className:st.a.Rows,children:[Object(c.jsx)("p",{className:st.a.Cell,children:"0"}),Object(c.jsx)("p",{className:st.a.Cell,children:"25"}),Object(c.jsx)("p",{className:st.a.Cell,children:"50"}),Object(c.jsx)("p",{className:st.a.Cell,children:"75"}),Object(c.jsx)("p",{className:st.a.Cell,children:"100"})]})]})]})})};var it=function(){var e=JSON.parse(localStorage.getItem("analyticsObject"));return Object(c.jsxs)(ce,{children:[Object(c.jsx)(tt,{}),Object(c.jsx)(rt,{analytics:e}),Object(c.jsx)(ot,{analytics:e})]})};var lt=function(){return Object(c.jsx)(u.c,{children:Object(c.jsxs)(ae,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/analyzer-app-yp-react/",component:Ee}),Object(c.jsx)(u.a,{path:"/analyzer-app-yp-react/about",component:Ze}),Object(c.jsx)(u.a,{path:"/analyzer-app-yp-react/analytics",component:it})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var jt={typeLayout:null,color:null,boxShadow:null,loading:!1,error:!1,typeError:null,result:!1,news:{},fromVisible:0,toVisible:3,plusVisible:3,analytics:{},keyWord:"",commits:[]};var ut=Object(l.c)({layout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(d.a)(Object(d.a)({},e),{},{typeLayout:t.typeLayout,color:t.color,boxShadow:t.boxShadow});default:return e}},home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(d.a)(Object(d.a)({},e),{},{result:!0,news:t.news,analytics:t.analytics,keyWord:t.keyWord});case G:return Object(d.a)(Object(d.a)({},e),{},{loading:!0,error:!1,result:!1});case P:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,error:!1,result:!0,news:t.news});case z:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,error:!0,typeError:t.typeError});case V:return Object(d.a)(Object(d.a)({},e),{},{toVisible:e.toVisible+e.plusVisible});case U:return Object(d.a)(Object(d.a)({},e),{},{keyWord:t.keyWord});default:return e}},about:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case Y:return Object(d.a)(Object(d.a)({},e),{},{commits:t.commits});case J:return Object(d.a)(Object(d.a)({},e),{},{error:t.error});default:return e}}}),mt="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):l.d,pt=Object(l.e)(ut,mt(Object(l.a)(j.a))),dt=Object(c.jsx)(i.a,{store:pt,children:Object(c.jsx)(o.a,{children:Object(c.jsx)(lt,{})})});s.a.render(dt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},15:function(e,t,a){e.exports={Error:"Error_Error__P3G4x",Block:"Error_Block__R0-n9",Icon:"Error_Icon__1zfu6",Caption:"Error_Caption__2eHvq",Text:"Error_Text__3Xw_M"}},16:function(e,t,a){e.exports={Article:"Article_Article__1nmUM",Card:"Article_Card__25bPg",Image:"Article_Image__1Pt-z",Info:"Article_Info__1mmgY",Date:"Article_Date__2NFLb",Title:"Article_Title__3Om3V",Description:"Article_Description__3Rahu",Source:"Article_Source__1TD2F"}},17:function(e,t,a){e.exports={Stack:"Stack_Stack__2prYH",Wrapper:"Stack_Wrapper__1sPOt",Caption:"Stack_Caption__3ZqR7",Technology:"Stack_Technology__2XWiY",Icon:"Stack_Icon__1PxQa"}},18:function(e,t,a){e.exports={Commit:"Commit_Commit__2p8eE",Date:"Commit_Date__3dSX_",Author:"Commit_Author__HS2w2",Avatar:"Commit_Avatar__3A_LC",Info:"Commit_Info__gfGVo",Name:"Commit_Name__22mV5",Email:"Commit_Email__3pgAf",Description:"Commit_Description__2KDq4"}},19:function(e,t,a){e.exports={Coincide:"Coincide_Coincide__2d393",Wrapper:"Coincide_Wrapper__iecFA",Caption:"Coincide_Caption__3BJ_E",List:"Coincide_List__2QGCo",Item:"Coincide_Item__21PaH",Count:"Coincide_Count__3bKMP"}},21:function(e,t,a){e.exports={Result:"Result_Result__-eWSg",Wrapper:"Result_Wrapper__jfnqI",Block:"Result_Block__3XH-T",Caption:"Result_Caption__12uwa",Link:"Result_Link__39MM9",Arrow:"Result_Arrow__2yb1w",Container:"Result_Container__vttge"}},22:function(e,t,a){e.exports={Author:"Author_Author__2Y6l4",Wrapper:"Author_Wrapper__36l-g",Photo:"Author_Photo__1ZfOC",Info:"Author_Info__RK8f3",Caption:"Author_Caption__2PH39",Text:"Author_Text__3G1RY"}},23:function(e,t,a){e.exports={Commits:"Commits_Commits__2fjXl",Wrapper:"Commits_Wrapper__30uxh",Block:"Commits_Block__V4MHj",Caption:"Commits_Caption__3I7Ss",Analytics:"Commits_Analytics__3i1q2",Arrow:"Commits_Arrow__2MSQ4",List:"Commits_List__2HrZg"}},26:function(e,t,a){e.exports={Search:"Search_Search__2PvBN",Wrapper:"Search_Wrapper__chnc4",Block:"Search_Block__2uPdx",Caption:"Search_Caption__HS0gu",Description:"Search_Description__12AMZ"}},3:function(e,t,a){e.exports={Graphic:"Graphic_Graphic__30a4i",Wrapper:"Graphic_Wrapper__1CWQE",Caption:"Graphic_Caption__uJHNE",Block:"Graphic_Block__34noo",Head:"Graphic_Head__rUYmS",Date:"Graphic_Date__1ltdJ",Count:"Graphic_Count__3U6Qe",Rows:"Graphic_Rows__2Nlrw",Cell:"Graphic_Cell__3kd-u",Columns:"Graphic_Columns__2l0dc",ColumnsY:"Graphic_ColumnsY__2jQwG",ColumnY:"Graphic_ColumnY__3EfFk",ColumnsX:"Graphic_ColumnsX__1EJOx",ColumnX:"Graphic_ColumnX__3LZhs"}},30:function(e,t,a){e.exports={Navigation:"Navigation_Navigation__1A4tF",Wrapper:"Navigation_Wrapper__2Is36",Link:"Navigation_Link__2f4bQ"}},36:function(e,t,a){e.exports={Loader:"Loader_Loader__ZoF8P",Caption:"Loader_Caption__MSj2X",Loading:"Loader_Loading__3XYeW"}},39:function(e,t,a){e.exports={Layout:"Layout_Layout__3HqLZ",withBackground:"Layout_withBackground__YTl34"}},44:function(e,t,a){e.exports={Form:"Form_Form__1SJEz"}},45:function(e,t,a){e.exports={Input:"Input_Input__6UCYM"}},46:function(e,t,a){e.exports={Button:"Button_Button__2HG9w",ButtonSearch:"Button_ButtonSearch__1G1ec",ButtonResult:"Button_ButtonResult__3hbgU"}},61:function(e,t,a){e.exports={Main:"Main_Main__PsCh5"}},7:function(e,t,a){e.exports={Footer:"Footer_Footer__2XTfa",Wrapper:"Footer_Wrapper__1fQBK",Copyright:"Footer_Copyright__3WKFs",Navigation:"Footer_Navigation__as1Ao",List:"Footer_List__2Pett",Item:"Footer_Item__5NuZl",Link:"Footer_Link__sUKWO",Reference:"Footer_Reference__2A33m",Icon:"Footer_Icon__368Tx",Social:"Footer_Social__1dc1R"}},74:function(e,t,a){}},[[147,1,2]]]);
//# sourceMappingURL=main.386a76b1.chunk.js.map