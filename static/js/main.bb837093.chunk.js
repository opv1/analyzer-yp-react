(this["webpackJsonpyp-graduate-work-react"]=this["webpackJsonpyp-graduate-work-react"]||[]).push([[0],{1:function(e,a,t){e.exports={Graphic:"Graphic_Graphic__2ecbm",Wrapper:"Graphic_Wrapper__2FHVC",Caption:"Graphic_Caption__2bBF2",Block:"Graphic_Block__3ZKGH",Head:"Graphic_Head__17NF-",Date:"Graphic_Date__2WaeZ",Count:"Graphic_Count__PAAs-",Rows:"Graphic_Rows__2WeT5",Cell:"Graphic_Cell__5ndxT",Columns:"Graphic_Columns__3j2tq",ColumnsY:"Graphic_ColumnsY__De6XM",ColumnY:"Graphic_ColumnY__2xDSY",ColumnsX:"Graphic_ColumnsX__gejaO",ColumnX:"Graphic_ColumnX__17OPG"}},14:function(e,a,t){e.exports={Header:"Header_Header__2dPcn",Wrapper:"Header_Wrapper__1QOlC",Caption:"Header_Caption__3RJtq",Navigation:"Header_Navigation__f3_XK",List:"Header_List__2UFvc",Item:"Header_Item__2ZOav",Link:"Header_Link__3lNUi"}},142:function(e,a,t){},143:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(32),o=t.n(c),s=(t(74),t(5)),l=t(6),i=t(8),m=t(7),u=t(36),p=t.n(u),_=t(14),d=t.n(_),h=t(37),E=t(9),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={color:null,boxShadow:null},e}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props!==e&&(null===this.props.type?this.setState({color:"#000000",boxShadow:"inset 0px -1px 0px #d1d2d6"}):this.setState({color:"#ffffff",boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.2)"}))}},{key:"componentDidMount",value:function(){"withBackground"===this.props.type?this.setState({color:"#ffffff",boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.2)"}):this.setState({color:"#000000",boxShadow:"inset 0px -1px 0px #d1d2d6"})}},{key:"render",value:function(){var e={NavLink:{":hover":{color:this.state.color}}};return r.a.createElement("header",{className:d.a.Header,style:{boxShadow:this.state.boxShadow}},r.a.createElement("div",{className:d.a.Wrapper},r.a.createElement(E.b,{className:d.a.Caption,style:{color:this.state.color},to:"/yp-graduate-work-react"},"NewsAnalyzer"),r.a.createElement("nav",{className:d.a.Navigation},r.a.createElement("ul",{className:d.a.List},r.a.createElement("li",{className:d.a.Item},r.a.createElement(E.c,Object.assign({exact:!0,className:d.a.Link},Object(h.css)(e.NavLink),{activeStyle:{color:this.state.color,borderBottom:"2px solid ".concat(this.state.color)},to:"/yp-graduate-work-react"}),"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),r.a.createElement("li",{className:d.a.Item},r.a.createElement(E.c,Object.assign({className:d.a.Link},Object(h.css)(e.NavLink),{activeStyle:{color:this.state.color,borderBottom:"2px solid ".concat(this.state.color)},to:"/yp-graduate-work-react/about"}),"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"))))))}}]),t}(n.Component),v=t(58),N=t.n(v),y=function(e){var a=e.children;return r.a.createElement("main",{className:N.a.Main},a)},C=t(4),g=t.n(C),k=t(59),b=t.n(k),w=t(60),S=t.n(w),x=function(){return r.a.createElement("footer",{className:g.a.Footer},r.a.createElement("div",{className:g.a.Wrapper},r.a.createElement("p",{className:g.a.Copyright},"\xa9 2020. \u041f\u0430\u0432\u0435\u043b \u041e\u0432\u0435\u0447\u043a\u0438\u043d"),r.a.createElement("nav",{className:g.a.Navigation},r.a.createElement("ul",{className:g.a.List},r.a.createElement("li",{className:g.a.Item},r.a.createElement(E.c,{className:g.a.Link,to:"/yp-graduate-work-react"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),r.a.createElement("li",{className:g.a.Item},r.a.createElement(E.c,{className:g.a.Link,to:"/yp-graduate-work-react/about"},"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435")),r.a.createElement("li",{className:g.a.Item},r.a.createElement("a",{className:g.a.Link,href:"https://praktikum.yandex.ru/",target:"_blank",rel:"noopener noreferrer"},"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c")))),r.a.createElement("div",{className:g.a.Social},r.a.createElement("a",{className:g.a.Reference,href:"https://github.com/opv1/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:g.a.Icon,src:b.a,alt:"GitHub"})),r.a.createElement("a",{className:g.a.Reference,href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:g.a.Icon,src:S.a,alt:"Facebook"})))))},L=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={type:null},e}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&("/yp-graduate-work-react"===this.props.location.pathname?this.setState({type:"withBackground"}):this.setState({type:null}))}},{key:"componentDidMount",value:function(){"/yp-graduate-work-react"===this.props.location.pathname&&this.setState({type:"withBackground"})}},{key:"render",value:function(){var e=[p.a.Layout,p.a[this.state.type]];return r.a.createElement("div",{className:e.join(" ")},r.a.createElement(f,{type:this.state.type}),r.a.createElement(y,null,this.props.children),r.a.createElement(x,null))}}]),t}(n.Component),W=function(e){return e.children},A=function(e,a){return e.setDate(e.getDate()-a)},j=function(e){return e.toISOString().slice(0,10)},O=function(e,a){return e.toLocaleString("ru",a)},I=function(e,a,t){var n=0;return e.articles.map((function(e){return O(new Date(e.publishedAt),{day:"numeric",month:"long",year:"numeric"})===O(t,{day:"numeric",month:"long",year:"numeric"})&&e.title.match(a)?n+=1:n+=0,!1})),n},B=function(e,a){localStorage.setItem("newsObject",JSON.stringify(e));var t=new RegExp("".concat(a),"gi"),n=function(e,a){return e.articles.map((function(e){return e.title.match(a)})).filter((function(e){return null!==e&&void 0!==e})).length}(e,t),r={amountKeyWord:n,keyWord:a,presentMonth:O(new Date,{month:"long"}),presentWeek:function(e,a,t,n){for(var r=[],c=0;c<7;c+=1){var o=t,s=O(o,{day:"numeric"}),l=["\u0432\u0441","\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431"][o.getDay()],i=I(e,a,o),m=Math.round(100*i/n);r.push({dayNumber:s,dayName:l,newsCount:i,widthPercent:m}),o=A(t,1)}return r}(e,t,new Date,n),totalResults:e.totalResults};localStorage.setItem("analyticsObject",JSON.stringify(r))},D=j(new Date),T=j(new Date(A(new Date,6))),R=function(e){return fetch("".concat("https://praktikum.tk/news/v2/everything?")+"q=".concat(e,"&")+"language=ru&"+"from=".concat(T,"&")+"to=".concat(D,"&")+"pageSize=100&sortBy=popularity&apiKey=60659df53b2641f4bc17059b6e641af7").then((function(e){return e.ok?e.json():Promise.reject(new Error("".concat(e.status)))})).then((function(e){if(0===e.totalResults)throw new Error("Failed to found");return e})).catch((function(e){if("Failed to fetch"===e.message)throw new Error("\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439!");if("Failed to found"===e.message)throw new Error("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u041d\u0443\u043b\u0435\u0432\u043e\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442!")}))},F=t(25),G=t.n(F),H=t(40),M=t.n(H),X=function(e){var a=e.onSubmit,t=e.type,n=e.name,c=e.children,o=[M.a.Form,M.a[t]];return r.a.createElement("form",{className:o.join(" "),onSubmit:a,name:n},c)},q=t(41),V=t.n(q),Y=function(e){var a=e.onChange,t=e.type,n=e.value,c=e.name,o=e.placeholder,s=e.title,l=e.pattern,i=e.minLength,m=e.maxLength,u=[V.a.Input,V.a[t]];return r.a.createElement("input",{className:u.join(" "),onChange:a,value:n,name:c,type:t,placeholder:o,title:s,pattern:l,minLength:i,maxLength:m,required:!0})},J=t(42),Z=t.n(J),U=function(e){var a=e.onClick,t=e.type,n=e.name,c=e.disabled,o=e.children,s=[Z.a.Button,Z.a[t]];return r.a.createElement("button",{className:s.join(" "),onClick:a,name:n,disabled:c},o)},P=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={keyWord:""},e.handleChange=function(a){var t=a.target;t.validity.valueMissing?t.setCustomValidity("\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"):t.validity.tooShort||t.validity.tooLong?t.setCustomValidity("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0442 2 \u0434\u043e 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):t.validity.patternMismatch?t.setCustomValidity("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u0435\u0439"):t.setCustomValidity(""),e.setState({keyWord:t.value})},e}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.keyWord!==e.keyWord)return this.setState({keyWord:this.props.keyWord})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:G.a.Search},r.a.createElement("div",{className:G.a.Wrapper},r.a.createElement("div",{className:G.a.Block},r.a.createElement("h1",{className:G.a.Caption},"\u0427\u0442\u043e \u0432 \u043c\u0438\u0440\u0435 \u0442\u0432\u043e\u0440\u0438\u0442\u0441\u044f?"),r.a.createElement("h2",{className:G.a.Description},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432 \u043f\u043e\u0438\u0441\u043a\u0435 \u043b\u044e\u0431\u0443\u044e \u0442\u0435\u043c\u0443 \u0438 \u0443\u0437\u043d\u0430\u0439\u0442\u0435, \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0439 \u043e\u043d\u0430 \u0431\u044b\u043b\u0430 \u0432 \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u0445 \u0437\u0430 \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0443\u044e \u043d\u0435\u0434\u0435\u043b\u044e.")),r.a.createElement(X,{onSubmit:function(a){return e.props.searchNews(a)}},r.a.createElement(Y,{onChange:function(a){return e.handleChange(a)},value:this.state.keyWord,name:"search",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",minLength:"2",maxLength:"15",pattern:"^([\u0410-\u042f\u0430-\u044f\u0401-\u0451]*)$"}),r.a.createElement(U,{type:"ButtonSearch",name:"button"},"\u0418\u0441\u043a\u0430\u0442\u044c"))))}}]),t}(n.Component),Q=t(16),K=t.n(Q),z=t(61),$=t.n(z),ee=function(e){var a=e.typeError;return r.a.createElement("section",{className:K.a.Error},"failedToFound"===a?r.a.createElement("div",{className:K.a.Block},r.a.createElement("img",{className:K.a.Icon,src:$.a,alt:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),r.a.createElement("h3",{className:K.a.Caption},"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"),r.a.createElement("p",{className:K.a.Text},"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e.")):null,"failedToFetch"===a?r.a.createElement("div",{className:K.a.Block},r.a.createElement("h3",{className:K.a.Caption},"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"),r.a.createElement("p",{className:K.a.Text},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")):null)},ae=t(21),te=t.n(ae),ne=t(17),re=t.n(ne),ce=function(e){var a=e.children,t=a.url,n=a.urlToImage,c=a.publishedAt,o=a.title,s=a.description,l=a.source,i=O(new Date(c),{day:"numeric",month:"long",year:"numeric"});return r.a.createElement("a",{className:re.a.Article,href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:re.a.Card},r.a.createElement("div",{className:re.a.Image,style:{backgroundImage:"url(".concat(n||"https://goo.su/1ige",")")}}),r.a.createElement("div",{className:re.a.Info},r.a.createElement("div",{className:re.a.Date},i),r.a.createElement("h3",{className:re.a.Title},o),r.a.createElement("p",{className:re.a.Description},s),r.a.createElement("span",{className:re.a.Source},l.name))))},oe=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={fromVisible:0,toVisible:3},e.moreNews=function(){e.setState((function(e){return{toVisible:e.toVisible+3}}))},e}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:te.a.Result},r.a.createElement("div",{className:te.a.Wrapper},r.a.createElement("div",{className:te.a.Block},r.a.createElement("h2",{className:te.a.Caption},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430"),r.a.createElement(E.c,{className:te.a.Link,to:{pathname:"/yp-graduate-work-react/analytics",analytics:this.props.analytics}},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0443\xa0",r.a.createElement("span",{className:te.a.Arrow},"\u203a"))),r.a.createElement("div",{className:te.a.Container},this.props.news.articles.slice(this.state.fromVisible,this.state.toVisible).map((function(e,a){return r.a.createElement(ce,{key:a+1},e)}))),r.a.createElement(U,{onClick:this.moreNews,type:"ButtonResult"},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435")))}}]),t}(n.Component),se=t(22),le=t.n(se),ie=function(){return r.a.createElement("section",{className:le.a.Author},r.a.createElement("div",{className:le.a.Wrapper},r.a.createElement("picture",{className:le.a.Photo}),r.a.createElement("div",{className:le.a.Info},r.a.createElement("h2",{className:le.a.Caption},"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"),r.a.createElement("p",{className:le.a.Text},"\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c. \u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u041f\u0430\u0432\u0435\u043b \u041e\u0432\u0435\u0447\u043a\u0438\u043d \u0438 \u044d\u0442\u043e \u043c\u043e\u044f \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u043c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438 \u0438 \u0437\u043d\u0430\u043d\u0438\u044f \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."),r.a.createElement("p",{className:le.a.Text},"\u041f\u043e\u0441\u043b\u0435 \u0441\u0435\u043c\u0438 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f, \u044f \u043d\u0430\u0443\u0447\u0438\u043b\u0441\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u044f\u0437\u044b\u043a\u043e\u043c \u0433\u0438\u043f\u0435\u0440\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0439 \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0438, \u044f\u0437\u044b\u043a\u043e\u043c \u0441\u0442\u0438\u043b\u0435\u0439 \u0438 \u044f\u0437\u044b\u043a\u043e\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f JavaScript. \u041f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0443 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u043b \u0438\u0437 \u0441\u0435\u0431\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0440\u0430\u0431\u043e\u0442: \u043e\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0442\u043a\u0438, \u0434\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0421 \u043d\u0438\u043c\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0432 \u043c\u043e\u0435\u043c \u043f\u0440\u043e\u0444\u0438\u043b\u0435 \u043d\u0430 GitHub."))))},me=t(33),ue=t.n(me),pe=function(){return r.a.createElement("div",{className:ue.a.Loader},r.a.createElement("div",{className:ue.a.Loading},r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("h3",{className:ue.a.Caption},"\u0418\u0434\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439..."))},_e=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={loading:!1,error:!1,typeError:null,result:!1,news:{},analytics:{},keyWord:null},e.searchNews=function(a){a.preventDefault();var t=a.target,n=t.elements.search,r=t.elements.button,c=n.value;new Promise((function(a){n.setAttribute("disabled",!0),r.setAttribute("disabled",!0),e.setState({loading:!0,error:!1,result:!1}),a(R(c).then((function(a){B(a,c),e.setState({loading:!1,error:!1,result:!0,news:a})})).catch((function(a){return"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439!"===a.message?e.setState({loading:!1,error:!0,typeError:"failedToFetch"}):"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u041d\u0443\u043b\u0435\u0432\u043e\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442!"===a.message?e.setState({loading:!1,error:!0,typeError:"failedToFound"}):void 0})).finally((function(){n.removeAttribute("disabled"),r.removeAttribute("disabled")})))}))},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){if(null!==localStorage.getItem("newsObject")){var e=JSON.parse(localStorage.getItem("newsObject")),a=JSON.parse(localStorage.getItem("analyticsObject")),t=a.keyWord;return this.setState({result:!0,news:e,analytics:a,keyWord:t})}}},{key:"render",value:function(){return r.a.createElement(W,null,r.a.createElement(P,{searchNews:this.searchNews,keyWord:this.state.keyWord}),this.state.loading?r.a.createElement(pe,null):null,this.state.error?r.a.createElement(ee,{typeError:this.state.typeError}):null,this.state.result?r.a.createElement(oe,{news:this.state.news,analytics:this.state.analytics}):null,r.a.createElement(ie,null))}}]),t}(n.Component),de=t(43),he=t.n(de),Ee=t(62),fe=t(63),ve=t.n(fe).a.create({baseURL:"https://api.github.com",headers:{"Content-Type":"application/json"}}),Ne=t(15),ye=t.n(Ne),Ce=function(){return r.a.createElement("section",{className:ye.a.Customer},r.a.createElement("div",{className:ye.a.Wrapper},r.a.createElement("h1",{className:ye.a.Caption},"\u041a\u043b\u0438\u0435\u043d\u0442\u0430\u043c"),r.a.createElement("div",{className:ye.a.Block},r.a.createElement("p",{className:ye.a.Text},"\u042d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u2014 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u042f\u043d\u0434\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430. \u0415\u0433\u043e \u0446\u0435\u043b\u044c \u2014 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0435\u043c\u0443 \u043d\u0430\u0443\u0447\u0438\u043b\u0441\u044f \u0441\u0442\u0443\u0434\u0435\u043d\u0442, \u0438 \u043a\u0430\u043a\u0438\u043c\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u043c\u0438 \u0432\u043b\u0430\u0434\u0435\u0435\u0442."),r.a.createElement("p",{className:ye.a.Text},"\u0412\u0451\u0440\u0442\u0441\u043a\u0430 \u0441\u0430\u0439\u0442\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u043f\u043e \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u0411\u042d\u041c. \u042d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0441\u0430\u0439\u0442 \u0433\u0438\u0431\u043a\u0438\u043c \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u044b\u043c. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0449\u0435 \u0438 \u0431\u044b\u0441\u0442\u0440\u0435\u0435, \u0447\u0435\u043c \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445, \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u043e \u0434\u0440\u0443\u0433\u0438\u043c \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f\u043c. \u0422\u0430\u043a\u0436\u0435 \u0441\u0430\u0439\u0442 \u043f\u0440\u043e\u0449\u0435 \u0438 \u0434\u0435\u0448\u0435\u0432\u043b\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c."),r.a.createElement("p",{className:ye.a.Text},"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0441 \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u043c \u043f\u0440\u0438\u0445\u043e\u0434\u044f\u0442 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0430\u0441\u0438\u0445\u0440\u043e\u043d\u043d\u043e. \u0422\u043e \u0435\u0441\u0442\u044c \u0441\u0430\u0439\u0442 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, \u043f\u043e\u043a\u0430 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442 \u043e\u0442\u0432\u0435\u0442. \u042d\u0442\u043e \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u0442 \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0435\u0440\u0432\u0438\u0441\u0430."),r.a.createElement("p",{className:ye.a.Text},"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0431\u044b\u043b\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u043d\u0430 \u0441\u0431\u043e\u0440\u043a\u0430 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0435\u0439 Webpack. \u042d\u0442\u043e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0441\u0430\u0439\u0442\u043e\u0432. \u041a\u043e\u0434 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f, \u0430 \u0437\u043d\u0430\u0447\u0438\u0442, \u0441\u0430\u0439\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u0435\u0435. \u0422\u0430\u043a\u0436\u0435 \u0441\u0430\u0439\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432 \u0441\u0442\u0430\u0440\u044b\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u0445. \u0414\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438 \u2014 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0441\u0442\u0430\u0440\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c \u0443 \u043d\u0438\u0445 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c. \u0410 \u0437\u043d\u0430\u0447\u0438\u0442 \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u0435\u0442."),r.a.createElement("p",{className:ye.a.Text},"\u041f\u0440\u043e\u0435\u043a\u0442 \u0431\u044b\u043b \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u0430\u043c\u0438 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430. \u0418 \u0435\u0441\u043b\u0438 \u0432\u0430\u0448\u0435\u043c\u0443 \u0431\u0438\u0437\u0435\u0441\u0443 \u043d\u0443\u0436\u0435\u043d \u0441\u0430\u0439\u0442, \u043c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a \u044d\u0442\u043e\u043c\u0443 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0443."))))},ge=t(18),ke=t.n(ge),be=t(64),we=t.n(be),Se=t(65),xe=t.n(Se),Le=t(66),We=t.n(Le),Ae=t(67),je=t.n(Ae),Oe=function(){return r.a.createElement("section",{className:ke.a.Stack},r.a.createElement("div",{className:ke.a.Wrapper},r.a.createElement("h2",{className:ke.a.Caption},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"),r.a.createElement("picture",{className:ke.a.Technology},r.a.createElement("img",{className:ke.a.Icon,src:we.a,alt:"HTML"}),r.a.createElement("img",{className:ke.a.Icon,src:xe.a,alt:"CSS"}),r.a.createElement("img",{className:ke.a.Icon,src:We.a,alt:"JavaScript"}),r.a.createElement("img",{className:ke.a.Icon,src:je.a,alt:"Webpack"}))))},Ie=t(23),Be=t.n(Ie),De=t(68),Te=t.n(De),Re=(t(140),t(141),t(142),t(19)),Fe=t.n(Re),Ge=function(e){var a=e.children,t=a.commit,n=t.author,c=t.message,o=a.committer.avatar_url,s=O(new Date(n.date),{day:"numeric",month:"long",year:"numeric"});return r.a.createElement("div",{className:Fe.a.Commit},r.a.createElement("p",{className:Fe.a.Date},s),r.a.createElement("div",{className:Fe.a.Author},r.a.createElement("div",{className:Fe.a.Avatar,style:{backgroundImage:"url(".concat(o,")")}}),r.a.createElement("div",{className:Fe.a.Info},r.a.createElement("p",{className:Fe.a.Name},n.name),r.a.createElement("p",{className:Fe.a.Email},n.email))),r.a.createElement("p",{className:Fe.a.Description},c))},He=function(e){var a=function(e){var a=e.className,t=e.onClick,n=[a,"slick-arrow","slick-next"];return r.a.createElement("div",{className:n.join(" "),onClick:t})},t=function(e){var a=e.className,t=e.onClick,n=[a,"slick-arrow","slick-prev"];return r.a.createElement("div",{className:n.join(" "),onClick:t})},n={initialSlide:0,slidesToShow:3,slidesToScroll:1,dots:!0,infinite:!1,speed:500,responsive:[{breakpoint:1023,settings:{slidesToShow:2}},{breakpoint:767,settings:{slidesToShow:1}}],nextArrow:r.a.createElement(a,null),prevArrow:r.a.createElement(t,null)};return r.a.createElement(Te.a,n,e.commits.map((function(e,a){return r.a.createElement(Ge,{key:a+1},e)})))},Me=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:Be.a.Commits},r.a.createElement("div",{className:Be.a.Wrapper},r.a.createElement("div",{className:Be.a.Block},r.a.createElement("h2",{className:Be.a.Caption},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043a\u043e\u043c\u043c\u0438\u0442\u043e\u0432 \u0438\u0437 GitHub"),r.a.createElement("a",{className:Be.a.Analytics,href:"https://github.com/opv1/yp-graduate-work-react/commits/master",target:"_blank",rel:"noopener noreferrer"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 GitHub ",r.a.createElement("span",{className:Be.a.Arrow},"\u203a"))),r.a.createElement("div",{className:Be.a.List},r.a.createElement(He,{commits:this.props.commits}))))}}]),t}(n.Component),Xe=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={user:"opv1",repository:"yp-graduate-work-react",commits:[]},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(Ee.a)(he.a.mark((function e(){var a;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ve.get("/repos/".concat(this.state.user,"/").concat(this.state.repository,"/commits?"));case 3:a=e.sent,this.setState({commits:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(W,null,r.a.createElement(Ce,null),r.a.createElement(Oe,null),r.a.createElement(ie,null),r.a.createElement(Me,{commits:this.state.commits}))}}]),t}(n.Component),qe=t(29),Ve=t.n(qe),Ye=function(){return r.a.createElement("nav",{className:Ve.a.Navigation},r.a.createElement("div",{className:Ve.a.Wrapper},r.a.createElement(E.b,{className:Ve.a.Link,to:"/yp-graduate-work-react"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f\xa0"),r.a.createElement("p",{className:Ve.a.Link},"/\xa0\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430")))},Je=t(20),Ze=t.n(Je),Ue=function(e){var a=e.analytics,t=a.amountKeyWord,n=a.totalResults,c=a.keyWord;return r.a.createElement("div",{className:Ze.a.Coincide},r.a.createElement("div",{className:Ze.a.Wrapper},r.a.createElement("h2",{className:Ze.a.Caption},'\u0412\u044b \u0441\u043f\u0440\u043e\u0441\u0438\u043b\u0438: "',c,'"'),r.a.createElement("ul",{className:Ze.a.List},r.a.createElement("li",{className:Ze.a.Item},"\u041d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 \u0437\u0430 \u043d\u0435\u0434\u0435\u043b\u044e:\xa0",r.a.createElement("span",{className:Ze.a.Count},n)),r.a.createElement("li",{className:Ze.a.Item},"\u0423\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0439 \u0432 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430\u0445:\xa0",r.a.createElement("span",{className:Ze.a.Count},t)))))},Pe=t(1),Qe=t.n(Pe),Ke=function(e){for(var a=e.analytics,t=a.presentMonth,n=a.presentWeek,c=[],o=[],s=0;s<n.length;s+=1)c.push(r.a.createElement("p",{className:Qe.a.ColumnY,key:s},n[s].dayNumber,",\xa0",n[s].dayName)),o.push(r.a.createElement("p",{className:Qe.a.ColumnX,key:s,style:{width:"".concat(n[s].widthPercent,"%")}},n[s].newsCount));return r.a.createElement("section",{className:Qe.a.Graphic},r.a.createElement("div",{className:Qe.a.Wrapper},r.a.createElement("h3",{className:Qe.a.Caption},"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430 \u043f\u043e \u0434\u043d\u044f\u043c"),r.a.createElement("div",{className:Qe.a.Block},r.a.createElement("div",{className:Qe.a.Head},r.a.createElement("p",{className:Qe.a.Date},"\u0414\u0430\u0442\u0430 (",t,")"),r.a.createElement("p",{className:Qe.a.Count},"\u041a\u043e\u043b-\u0432\u043e \u0443\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0439")),r.a.createElement("div",{className:Qe.a.Rows},r.a.createElement("p",{className:Qe.a.Cell},"0"),r.a.createElement("p",{className:Qe.a.Cell},"25"),r.a.createElement("p",{className:Qe.a.Cell},"50"),r.a.createElement("p",{className:Qe.a.Cell},"75"),r.a.createElement("p",{className:Qe.a.Cell},"100")),r.a.createElement("div",{className:Qe.a.Columns},r.a.createElement("div",{className:Qe.a.ColumnsY},c),r.a.createElement("div",{className:Qe.a.ColumnsX},o)),r.a.createElement("div",{className:Qe.a.Rows},r.a.createElement("p",{className:Qe.a.Cell},"0"),r.a.createElement("p",{className:Qe.a.Cell},"25"),r.a.createElement("p",{className:Qe.a.Cell},"50"),r.a.createElement("p",{className:Qe.a.Cell},"75"),r.a.createElement("p",{className:Qe.a.Cell},"100")))))},ze=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("analyticsObject"));return r.a.createElement(W,null,r.a.createElement(Ye,null),r.a.createElement(Ue,{analytics:e}),r.a.createElement(Ke,{analytics:e}))}}]),t}(n.Component),$e=t(2),ea=function(){return r.a.createElement($e.c,null,r.a.createElement(L,null,r.a.createElement($e.a,{exact:!0,path:"/yp-graduate-work-react",component:_e}),r.a.createElement($e.a,{path:"/yp-graduate-work-react/about",component:Xe}),r.a.createElement($e.a,{path:"/yp-graduate-work-react/analytics",component:ze})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var aa=r.a.createElement(E.a,null,r.a.createElement(ea,null));o.a.render(aa,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},15:function(e,a,t){e.exports={Customer:"Customer_Customer__2CH_n",Wrapper:"Customer_Wrapper__1Ak0r",Caption:"Customer_Caption__YQCiA",Block:"Customer_Block__3WZkY",Text:"Customer_Text__15Sir"}},16:function(e,a,t){e.exports={Error:"Error_Error__2ESSL",Block:"Error_Block__2WLk3",Icon:"Error_Icon__86iO8",Caption:"Error_Caption__3ZjXE",Text:"Error_Text__1yLW7"}},17:function(e,a,t){e.exports={Article:"Article_Article__3skc1",Card:"Article_Card__10dZe",Image:"Article_Image__jzupW",Info:"Article_Info__xlhpu",Date:"Article_Date__3-SCX",Title:"Article_Title__3rV2e",Description:"Article_Description__3Zg1e",Source:"Article_Source__3nseX"}},18:function(e,a,t){e.exports={Stack:"Stack_Stack__1A8vq",Wrapper:"Stack_Wrapper__2zauJ",Caption:"Stack_Caption__3xJ4Z",Technology:"Stack_Technology__2nRNL",Icon:"Stack_Icon__1o6-9"}},19:function(e,a,t){e.exports={Commit:"Commit_Commit__XSuAd",Date:"Commit_Date__m2rEl",Author:"Commit_Author__3FAzy",Avatar:"Commit_Avatar__1IhRZ",Info:"Commit_Info__2LOKg",Name:"Commit_Name__BG-V4",Email:"Commit_Email__2E8C2",Description:"Commit_Description__2aw1q"}},20:function(e,a,t){e.exports={Coincide:"Coincide_Coincide__1UqMw",Wrapper:"Coincide_Wrapper__3PeCA",Caption:"Coincide_Caption__28bn-",List:"Coincide_List__34a_8",Item:"Coincide_Item__3db_N",Count:"Coincide_Count__3msU_"}},21:function(e,a,t){e.exports={Result:"Result_Result__32En_",Wrapper:"Result_Wrapper__1G9V0",Block:"Result_Block__1BD3N",Caption:"Result_Caption__2OpQa",Link:"Result_Link__2CAv9",Arrow:"Result_Arrow__2XjET",Container:"Result_Container__2cYWQ"}},22:function(e,a,t){e.exports={Author:"Author_Author__3UNvI",Wrapper:"Author_Wrapper__3uYlu",Photo:"Author_Photo__SsBnn",Info:"Author_Info__1zqP9",Caption:"Author_Caption__yN7En",Text:"Author_Text__1Yt15"}},23:function(e,a,t){e.exports={Commits:"Commits_Commits__1nurZ",Wrapper:"Commits_Wrapper__1M1Lo",Block:"Commits_Block__2lXtf",Caption:"Commits_Caption__2vq3Q",Analytics:"Commits_Analytics__1qp_j",Arrow:"Commits_Arrow__1ASU5",List:"Commits_List__1s7tb"}},25:function(e,a,t){e.exports={Search:"Search_Search__32dWx",Wrapper:"Search_Wrapper__1GvHu",Block:"Search_Block__3QQLX",Caption:"Search_Caption__1uCMl",Description:"Search_Description__1VC-A"}},29:function(e,a,t){e.exports={Navigation:"Navigation_Navigation__Kd5RQ",Wrapper:"Navigation_Wrapper__2X3vr",Link:"Navigation_Link__3q25t"}},33:function(e,a,t){e.exports={Loader:"Loader_Loader__vi8x_",Caption:"Loader_Caption__o6Bdv",Loading:"Loader_Loading__32JbS"}},36:function(e,a,t){e.exports={Layout:"Layout_Layout__1EmY9",withBackground:"Layout_withBackground__17EQC"}},4:function(e,a,t){e.exports={Footer:"Footer_Footer__1ztE6",Wrapper:"Footer_Wrapper__2BHFZ",Copyright:"Footer_Copyright__1sgCd",Navigation:"Footer_Navigation__LB6UD",List:"Footer_List__3pkvU",Item:"Footer_Item__1ZUZG",Link:"Footer_Link__1-n-G",Reference:"Footer_Reference__3LZGw",Icon:"Footer_Icon__1GJtb",Social:"Footer_Social__f3qeR"}},40:function(e,a,t){e.exports={Form:"Form_Form__1qcQR"}},41:function(e,a,t){e.exports={Input:"Input_Input__qYpo6"}},42:function(e,a,t){e.exports={Button:"Button_Button__hq-vk",ButtonSearch:"Button_ButtonSearch__2OrK0",ButtonResult:"Button_ButtonResult__36Yca"}},58:function(e,a,t){e.exports={Main:"Main_Main__3TLa_"}},59:function(e,a,t){e.exports=t.p+"static/media/github.83610e3c.svg"},60:function(e,a,t){e.exports=t.p+"static/media/fb.a3502a5e.svg"},61:function(e,a,t){e.exports=t.p+"static/media/not-found.5af0def6.svg"},64:function(e,a,t){e.exports=t.p+"static/media/html.26561b73.svg"},65:function(e,a,t){e.exports=t.p+"static/media/css.ff5d45de.svg"},66:function(e,a,t){e.exports=t.p+"static/media/js.11a4c1c3.svg"},67:function(e,a,t){e.exports=t.p+"static/media/webpack.2f25192a.svg"},69:function(e,a,t){e.exports=t(143)},74:function(e,a,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.bb837093.chunk.js.map