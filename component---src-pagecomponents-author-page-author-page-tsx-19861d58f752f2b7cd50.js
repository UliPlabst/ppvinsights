(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{205:function(t,e,r){"use strict";r.r(e),r.d(e,"AuthorPage",function(){return h}),r.d(e,"pageQuery",function(){return f});r(212),r(136);var o=r(0),n=r.n(o),a=r(242),s=r(217),p=r(213),i=r(227),c=r(218),u=r(214),l=r(230),m=r(216);var h=function(t){var e,r;function o(){return t.apply(this,arguments)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){var t=this.props.data.posts.edges.map(function(t){return t.node}).sort(function(t,e){return t.fields.timestamp>e.fields.timestamp?-1:1}),e=this.props.data.categories.edges.map(function(t){return t.node}),r={url:Object(m.h)("author",this.props.context.author.frontmatter.slug),description:"Posts von "+this.props.context.author.frontmatter.firstname+" "+this.props.context.author.frontmatter.lastname,type:"object",title:this.props.context.author.frontmatter.firstname+" "+this.props.context.author.frontmatter.lastname+", Autor bei Powerpivot Insights | Durchblick durch Daten",tags:["author",this.props.context.author.frontmatter.firstname,this.props.context.author.frontmatter.lastname],image:this.props.data.avatar.childImageSharp.fixed.src};return n.a.createElement(s.b,{header:r,sidebar:n.a.createElement(p.a,{isFixed:!1},n.a.createElement(i.a,null),n.a.createElement(c.a,null))},n.a.createElement(u.a,{title:"Author"}),n.a.createElement(a.a,{author:this.props.context.author,avatar:this.props.data.avatar}),n.a.createElement("hr",null),n.a.createElement(l.a,{posts:t,categories:Object(m.f)(e),authors:[this.props.context.author]}))},o}(n.a.Component);e.default=function(t){var e=t.data,r=t.pageContext,o=t.location;return n.a.createElement(h,{data:e,context:r,location:o})};var f="1678653738"},213:function(t,e,r){"use strict";r.d(e,"a",function(){return a});r(212);var o=r(0),n=r.n(o);var a=function(t){var e,r;function o(e){var r;return(r=t.call(this,e)||this).onScroll=function(t){var e=window.scrollY,o=document.getElementById("content-container");r.setState({fixed:e>o.offsetTop})},r.state={fixed:!1},r}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var a=o.prototype;return a.componentDidMount=function(){1==this.props.isFixed&&window.addEventListener("scroll",this.onScroll)},a.componentWillUnmount=function(){1==this.props.isFixed&&window.removeEventListener("scroll",this.onScroll)},a.render=function(){return n.a.createElement("div",{className:1==this.state.fixed?"sidebar-fixed":"sidebar-not-fixed"},this.props.children)},o}(n.a.Component)},214:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var o=r(0),n=r.n(o);r(224);var a=function(t){var e,r;function o(e){return t.call(this,e)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"category-bar"},this.props.title))},o}(n.a.Component)},219:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var o=r(0),n=r.n(o),a=r(96),s=(r(222),r(215)),p=r(221);var i=function(t){var e,r;function o(e){return t.call(this,e)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){var t=p(this.props.frontmatter.date),e=null;return null!=this.props.frontmatter.updatedate&&""!=this.props.frontmatter.updatedate&&(Math.abs(t.diff(e))<=864e5||1==e.isBefore(t)||(e=p(this.props.frontmatter.updatedate))),n.a.createElement("div",{className:"post-header"},n.a.createElement("div",{className:"post-meta"},n.a.createElement("div",{title:"Author"},n.a.createElement(s.r,null),n.a.createElement(a.Link,{className:"post-meta-content",to:"/author/"+this.props.author.frontmatter.slug},null!=this.props.author?this.props.author.frontmatter.firstname+" "+this.props.author.frontmatter.lastname:"")),null!=e?n.a.createElement("div",{title:"Bearbeitet",className:"post-meta-time"},n.a.createElement(s.g,null),n.a.createElement("span",{className:"post-meta-content"},e.format("DD MMM, 'YY"))):"",n.a.createElement("div",{title:"Angelegt",className:"post-meta-time"},n.a.createElement(s.f,null),n.a.createElement("span",{className:"post-meta-content"},t.format("DD MMM, 'YY")))),n.a.createElement("div",{className:"post-subtitle"},null!=this.props.frontmatter.subtitle?n.a.createElement(a.Link,{to:this.props.frontmatter.slug},this.props.frontmatter.subtitle):""),n.a.createElement("div",null,n.a.createElement("h1",null,n.a.createElement(a.Link,{to:this.props.frontmatter.slug},this.props.frontmatter.title))))},o}(n.a.Component)},230:function(t,e,r){"use strict";var o=r(0),n=r.n(o),a=r(216),s=r(96),p=(r(222),r(219)),i=r(220);var c=function(t){var e,r;function o(e){return t.call(this,e)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){var t=this.props.post;return n.a.createElement("div",{className:"post-preview"},n.a.createElement("div",null,n.a.createElement(p.a,{frontmatter:t.frontmatter,commentCnt:t.fields.commentCnt,author:this.props.author,categories:this.props.categories})),n.a.createElement("div",{className:"post-content"},n.a.createElement(s.Link,{to:t.frontmatter.slug},n.a.createElement(i.a,{content:this.props.post.fields.abstract?this.props.post.fields.abstract:this.props.post.excerpt}," "))))},o}(n.a.Component);r(229);var u=function(t){var e,r;function o(){return t.apply(this,arguments)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){return n.a.createElement("div",{className:"empty-content-container"},"Hier gibt es noch keine Inhalte")},o}(n.a.Component);r.d(e,"a",function(){return l});var l=function(t){var e,r;function o(){return t.apply(this,arguments)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){var t=this;return n.a.createElement("div",null,this.props.posts.map(function(e,r){return n.a.createElement("div",{key:r},n.a.createElement(c,{post:e,categories:e.frontmatter.categories.map(function(e){return Object(a.c)(e,t.props.categories)}),author:Object(a.b)(e.frontmatter.author,t.props.authors)}))}),0==this.props.posts.length?n.a.createElement(u,null):"")},o}(n.a.Component)}}]);
//# sourceMappingURL=component---src-pagecomponents-author-page-author-page-tsx-19861d58f752f2b7cd50.js.map