(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Gpdm:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("dI71"),a=n("q1tI"),o=n.n(a),s=(n("VLio"),function(t){function e(e){return t.call(this,e)||this}return Object(r.a)(e,t),e.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"category-bar"},this.props.title))},e}(o.a.Component))},VLio:function(t,e,n){},WDww:function(t,e,n){"use strict";n.r(e),n.d(e,"Tag",(function(){return h})),n.d(e,"pageQuery",(function(){return f}));var r=n("dI71"),a=n("q1tI"),o=n.n(a),s=n("Aq8R"),i=n("+rwk"),c=n("OKhy"),p=n("xFIP"),u=n("9uds"),l=n("Gpdm"),m=n("cCPr"),d=n("1wtQ"),h=function(t){function e(e){return t.call(this,e)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this.props.data.posts.edges.map((function(t){return t.node})).sort((function(t,e){return t.fields.timestamp>e.fields.timestamp?-1:1})),e=Object(c.l)(this.props.data.categories.edges.map((function(t){return t.node}))),n=this.props.data.authors.edges.map((function(t){return t.node})),r={url:Object(c.p)("tag",this.props.context.tag.slug),description:"Posts über "+this.props.context.tag.name,type:"object",title:this.props.context.tag.name+" Archive | "+d.a.site.title,tags:[this.props.context.tag.name],noIndex:!0};return o.a.createElement(s.b,{header:r,sidebar:o.a.createElement(i.a,{isFixed:!0},o.a.createElement(p.a,null),o.a.createElement(u.a,null))},o.a.createElement(l.a,{title:"Tags / "+this.props.context.tag.name}),o.a.createElement(m.a,{posts:t,categories:e,authors:n}))},e}(o.a.Component);e.default=function(t){var e=t.pageContext,n=t.data,r=t.location;return o.a.createElement(h,{data:n,location:r,context:e})};var f="3622774033"},cCPr:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("dI71"),a=n("q1tI"),o=n.n(a),s=n("OKhy"),i=n("JuBv"),c=(n("j3n2"),n("Kxvw")),p=n("VOVi"),u=function(t){function e(e){return t.call(this,e)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this.props.post;return o.a.createElement("div",{className:"post-preview"},o.a.createElement("div",null,o.a.createElement(c.a,{frontmatter:t.frontmatter,commentCnt:t.fields.commentCnt,author:this.props.author,categories:this.props.categories})),o.a.createElement("div",{className:"post-content"},o.a.createElement(i.a,{to:"/"+t.frontmatter.slug},o.a.createElement(p.a,{content:this.props.post.fields.abstract?this.props.post.fields.abstract:this.props.post.excerpt}," "))))},e}(o.a.Component),l=(n("ewL5"),function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){return o.a.createElement("div",{className:"empty-content-container"},"Hier gibt es noch keine Inhalte")},e}(o.a.Component)),m=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this;return o.a.createElement("div",{className:"post-list"},this.props.posts.map((function(e,n){return o.a.createElement("div",{className:"post-list-element",key:n},o.a.createElement(u,{post:e,categories:e.frontmatter.categories.map((function(e){return Object(s.e)(e,t.props.categories)})),author:Object(s.d)(e.frontmatter.author,t.props.authors)}))})),0==this.props.posts.length?o.a.createElement(l,null):"")},e}(o.a.Component)}}]);
//# sourceMappingURL=component---src-pagecomponents-tag-page-tag-page-tsx-845c46556829bf63ff9e.js.map