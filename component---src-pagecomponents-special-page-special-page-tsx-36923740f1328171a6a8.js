(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{OUIz:function(t,e,r){"use strict";r.r(e),r.d(e,"SpecialPageTemplate",(function(){return f})),r.d(e,"pageQuery",(function(){return l}));var a=r("dI71"),n=r("q1tI"),o=r.n(n),i=r("Aq8R"),s=r("+rwk"),c=r("Kxvw"),m=r("VOVi"),p=r("OKhy"),u=r("PeiE"),d=r("bafB"),f=function(t){function e(e){return t.call(this,e)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this,e=this.props.data.page,r=Object(p.j)(this.props.data.categories.edges.map((function(t){return t.node}))),a=this.props.data.stories.edges.map((function(t){return t.node})),n=e.frontmatter.categories.map((function(t){return Object(p.d)(t,r)})),f=null;if(e.frontmatter.tags){var l=this.props.data.tags.edges.map((function(t){return t.node}));f=e.frontmatter.tags.map((function(t){return l.find((function(e){return e.slug==t}))}))}var g={url:e.frontmatter.slug,description:e.frontmatter.description,type:"article",title:e.frontmatter.title,tags:f.map((function(t){return t.name})),image:e.frontmatter.image,updated_time:e.frontmatter.updatedate,publish_time:e.frontmatter.date};return o.a.createElement(i.b,{sidebar:o.a.createElement(s.a,{isFixed:this.props.data.page.frontmatter.sidebarFixed},e.frontmatter.sidebar.map((function(t,r){return o.a.createElement("div",{key:r},Object(p.i)(t,e))}))),categoryBar:null,header:g},!0===e.frontmatter.postheader?o.a.createElement(c.a,{frontmatter:e.frontmatter,commentCnt:e.fields.commentCnt,author:this.props.context.author,categories:n}):"",o.a.createElement("div",{className:"post-content"},o.a.createElement(m.b,{html:e.htmlAst}),null==e.fields.subscriberContent||0==e.fields.subscriberContent.length?"":o.a.createElement(u.a,{content:e.fields.subscriberContent})),1==e.frontmatter.comments?o.a.createElement(d.a,{slug:e.frontmatter.slug,comments:this.props.context.comments}):"",e.frontmatter.footer.map((function(r,i){return o.a.createElement("div",{key:i},Object(p.h)(r,e,n,t.props.context.author,a,t.props.data.avatar,t.props.data.tags.edges.map((function(t){return t.node})),t.props.location,t.props.data.authorBadge))})))},e}(o.a.Component);e.default=function(t){var e=t.data,r=t.pageContext,a=t.location;return o.a.createElement(f,{location:a,data:e,context:r})};var l="616589417"}}]);
//# sourceMappingURL=component---src-pagecomponents-special-page-special-page-tsx-36923740f1328171a6a8.js.map