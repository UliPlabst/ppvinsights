(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+rwk":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var r=a("dI71"),n=a("q1tI"),o=a.n(n),s=function(t){function e(e){var a;return(a=t.call(this,e)||this).onScroll=function(t){var e=window.scrollY,r=document.getElementById("content-container");a.setState({fixed:e>r.offsetTop})},a.state={fixed:!1},a}Object(r.a)(e,t);var a=e.prototype;return a.componentDidMount=function(){1==this.props.isFixed&&window.addEventListener("scroll",this.onScroll)},a.componentWillUnmount=function(){1==this.props.isFixed&&window.removeEventListener("scroll",this.onScroll)},a.render=function(){return o.a.createElement("div",{className:1==this.state.fixed?"sidebar-fixed":"sidebar-not-fixed"},this.props.children)},e}(o.a.Component)},"10Je":function(t,e,a){"use strict";a.r(e),a.d(e,"AuthorPage",(function(){return d})),a.d(e,"pageQuery",(function(){return f}));var r=a("dI71"),n=a("q1tI"),o=a.n(n),s=a("XMMh"),i=a("Aq8R"),c=a("+rwk"),p=a("xFIP"),l=a("9uds"),u=a("Gpdm"),m=a("cCPr"),h=a("OKhy"),d=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this.props.data.posts.edges.map((function(t){return t.node})).sort((function(t,e){return t.fields.timestamp>e.fields.timestamp?-1:1})),e=this.props.data.categories.edges.map((function(t){return t.node})),a={url:Object(h.m)("author",this.props.context.author.frontmatter.slug),description:"Posts von "+this.props.context.author.frontmatter.firstname+" "+this.props.context.author.frontmatter.lastname,type:"object",title:this.props.context.author.frontmatter.firstname+" "+this.props.context.author.frontmatter.lastname+", Autor bei Durchblick durch Daten",tags:["author",this.props.context.author.frontmatter.firstname,this.props.context.author.frontmatter.lastname],image:this.props.data.avatar.childImageSharp.fixed.src};return o.a.createElement(i.b,{header:a,sidebar:o.a.createElement(c.a,{isFixed:!1},o.a.createElement(p.a,null),o.a.createElement(l.a,null))},o.a.createElement(u.a,{title:"Author"}),o.a.createElement(s.a,{badge:this.props.data.authorBadge,author:this.props.context.author,avatar:this.props.data.avatar}),o.a.createElement("hr",null),o.a.createElement(m.a,{posts:t,categories:Object(h.j)(e),authors:[this.props.context.author]}))},e}(o.a.Component);e.default=function(t){var e=t.data,a=t.pageContext,r=t.location;return o.a.createElement(d,{data:e,context:a,location:r})};var f="468516735"},Gpdm:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var r=a("dI71"),n=a("q1tI"),o=a.n(n),s=(a("VLio"),function(t){function e(e){return t.call(this,e)||this}return Object(r.a)(e,t),e.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"category-bar"},this.props.title))},e}(o.a.Component))},Kxvw:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var r=a("dI71"),n=a("q1tI"),o=a.n(n),s=a("JuBv"),i=(a("j3n2"),a("ma3e")),c=a("wd/R"),p=function(t){function e(e){return t.call(this,e)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=c(this.props.frontmatter.date),e=null;return null!=this.props.frontmatter.updatedate&&""!=this.props.frontmatter.updatedate&&(e=c(this.props.frontmatter.updatedate),(Math.abs(t.diff(e))>=864e5||1==e.isAfter(t))&&(e=c(this.props.frontmatter.updatedate))),o.a.createElement("div",{className:"post-header"},o.a.createElement("div",{className:"post-meta"},o.a.createElement("div",{title:"Author"},o.a.createElement(s.a,{noPrefetch:!0,className:"action-link post-meta-data post-meta-content",to:"/author/"+this.props.author.frontmatter.slug},o.a.createElement(i.u,null),o.a.createElement("span",null,null!=this.props.author?this.props.author.frontmatter.firstname+" "+this.props.author.frontmatter.lastname:""))),null!=e?o.a.createElement("div",{title:"Bearbeitet",className:"post-meta-data post-meta-time"},o.a.createElement(i.h,null),o.a.createElement("span",{className:"post-meta-content"},e.format("DD. MMM YYYY"))):"",o.a.createElement("div",{title:"Angelegt",className:" post-meta-data post-meta-time"},o.a.createElement(i.e,null),o.a.createElement("span",{className:"post-meta-content"},t.format("DD. MMM YYYY")))),o.a.createElement("div",{className:"post-subtitle"},null!=this.props.frontmatter.subtitle?o.a.createElement(s.a,{to:"/"+this.props.frontmatter.slug},this.props.frontmatter.subtitle):""),o.a.createElement("div",null,o.a.createElement("h1",null,o.a.createElement(s.a,{to:"/"+this.props.frontmatter.slug},this.props.frontmatter.title))))},e}(o.a.Component)},VLio:function(t,e,a){},cCPr:function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));var r=a("dI71"),n=a("q1tI"),o=a.n(n),s=a("OKhy"),i=a("JuBv"),c=(a("j3n2"),a("Kxvw")),p=a("VOVi"),l=function(t){function e(e){return t.call(this,e)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this.props.post;return o.a.createElement("div",{className:"post-preview"},o.a.createElement("div",null,o.a.createElement(c.a,{frontmatter:t.frontmatter,commentCnt:t.fields.commentCnt,author:this.props.author,categories:this.props.categories})),o.a.createElement("div",{className:"post-content"},o.a.createElement(i.a,{to:"/"+t.frontmatter.slug},o.a.createElement(p.a,{content:this.props.post.fields.abstract?this.props.post.fields.abstract:this.props.post.excerpt}," "))))},e}(o.a.Component),u=(a("ewL5"),function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){return o.a.createElement("div",{className:"empty-content-container"},"Hier gibt es noch keine Inhalte")},e}(o.a.Component)),m=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this;return o.a.createElement("div",{className:"post-list"},this.props.posts.map((function(e,a){return o.a.createElement("div",{className:"post-list-element",key:a},o.a.createElement(l,{post:e,categories:e.frontmatter.categories.map((function(e){return Object(s.d)(e,t.props.categories)})),author:Object(s.c)(e.frontmatter.author,t.props.authors)}))})),0==this.props.posts.length?o.a.createElement(u,null):"")},e}(o.a.Component)},j3n2:function(t,e,a){}}]);
//# sourceMappingURL=component---src-pagecomponents-author-page-author-page-tsx-3dfdd0a24078eef5aa68.js.map