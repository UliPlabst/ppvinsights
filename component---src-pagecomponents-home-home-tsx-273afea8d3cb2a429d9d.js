(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5tzQ":function(e,t,n){},TkXe:function(e,t,n){"use strict";n.r(t),n.d(t,"Home",(function(){return f})),n.d(t,"pageQuery",(function(){return p}));var a=n("dI71"),r=n("q1tI"),s=n.n(r),l=(n("5tzQ"),n("ma3e")),o=n("1wtQ"),i=n("Aq8R"),c=(n("vejA"),n("9eSz")),m=n.n(c),u=n("JuBv"),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"home-customerstory"},this.props.stories.map((function(e,t){return s.a.createElement("div",{key:t,className:"customerstory-container "+(t%2==0?"story-1":"story-2")},s.a.createElement("div",{className:"customerstory-icon"},s.a.createElement(u.a,{isOutbound:!0,eventLabel:"outbound",to:e.fields.story.url,className:"customerstory-company"},s.a.createElement(m.a,{title:e.fields.story.url,alt:"Firmenlogo von "+e.fields.story.company,fixed:e.childImageSharp.fixed,className:e.fields.story.className}))),s.a.createElement("div",{className:"customerstory-text"},s.a.createElement("span",null,s.a.createElement("h3",null,s.a.createElement(u.a,{isOutbound:!0,to:e.fields.story.url,className:"customerstory-company"},e.fields.story.company)),s.a.createElement("p",null,e.fields.story.text)),s.a.createElement("span",null,s.a.createElement("span",{className:"customerstory-author"},e.fields.story.author),s.a.createElement("span",{className:"customerstory-position"}," (",e.fields.story.position),null!=e.fields.story.country?s.a.createElement("span",{className:"customerstory-country"},", ",e.fields.story.country):"",s.a.createElement("span",{className:"customerstory-author"},")"))))}))),s.a.createElement("div",{className:"home-customerstory-button-container"},s.a.createElement(u.a,{to:"/kundenmeinungen"},s.a.createElement(l.n,null),"mehr Kundenmeinungen")))},t}(s.a.Component),f=function(e){function t(t){return e.call(this,t)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.stories,t={description:"Artikel, Tipps&Tricks, Online Kurse zu Excel Power Pivot, Power BI und Power Query | Trainings, Workshops und Implementierungsunterstützung",title:"Home | "+o.a.site.title,type:"website",url:"/"},n={festo:e.find((function(e){return e.fields.story.company.toLowerCase().indexOf("festo")>=0})),hypo:e.find((function(e){return e.fields.story.company.toLowerCase().indexOf("hypo")>=0})),endress:e.find((function(e){return e.fields.story.company.toLowerCase().indexOf("endress")>=0})),flexsec:e.find((function(e){return e.fields.story.company.toLowerCase().indexOf("flex")>=0})),ruebezahl:e.find((function(e){return e.fields.story.company.toLowerCase().indexOf("rübezahl")>=0})),kvvks:e.find((function(e){return e.fields.story.company.toLowerCase().indexOf("kasseler verkehrs")>=0}))};return s.a.createElement(i.a,{header:t},s.a.createElement("div",{className:"container-nosidebar"},s.a.createElement("div",{className:"section"},s.a.createElement("h1",null,"Durchblick durch Daten – der BI-Blog für Datenanalysen"),s.a.createElement("p",null,"Hier teile ich meine Leidenschaft für Datenauswertungen in vielen Artikeln zu Power BI, Excel Power Pivot und Power Query.")),s.a.createElement("div",{className:"section"},s.a.createElement(d,{stories:[n.endress,{childImageSharp:{fixed:n.festo.childImageSharp.fixed},fields:{story:Object.assign({},n.festo.fields.story,{text:"Beim Aufbau eines IoT-Systems haben uns Holger Gubbels und Andreas Moosbrugger über mehrere Monate in kleinen Sprints begleitet. Dabei haben sie die bestehenden Datenmodelle, die Datawarehouse-Lösung in Azure SQL [...]."})}}]})),s.a.createElement("div",{className:"section"},s.a.createElement("h1",null,"Artikel für Neueinsteiger"),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(u.a,{to:"/quickstart-eine-erste-auswertung-mit-power-pivot"},"Das Quickstart Tutorial")),s.a.createElement("li",null,s.a.createElement(u.a,{to:"/was-ist-power-pivot"},"Was ist Power Pivot?")),s.a.createElement("li",null,s.a.createElement(u.a,{to:"/was-ist-power-bi"},"Was ist Power BI?")),s.a.createElement("li",null,s.a.createElement(u.a,{to:"/was-ist-power-query"},"Was ist Power Query?")),s.a.createElement("li",null,s.a.createElement(u.a,{to:"/power-pivot-power-bi-oder-power-query"},"Power Pivot, Power BI oder Power Query?"))),s.a.createElement("p",null,"Viele weitere Artikel sind in meinen Blogposts zu den Themen",s.a.createElement("span",null," "),s.a.createElement(u.a,{noPrefetch:!0,to:"/category/power-bi"},"Power BI"),s.a.createElement("span",null,", "),s.a.createElement(u.a,{noPrefetch:!0,to:"/category/power-pivot"},"Power Pivot"),s.a.createElement("span",null,", "),s.a.createElement(u.a,{noPrefetch:!0,to:"/category/power-query"},"Power Query"),".")),s.a.createElement("div",{className:"section"},s.a.createElement(d,{stories:[n.kvvks,{childImageSharp:{fixed:n.hypo.childImageSharp.fixed},fields:{story:Object.assign({},n.hypo.fields.story,{text:"Excel Power Pivot ist für uns ein wichtiges Werkzeug in der Risikosteuerung, da wir große Datenmengen effizient analysieren müssen. In der kompetenten Schulung von Herrn Gubbels bekamen wir einen umfassenden Einblick [...]."})}}]})),s.a.createElement("div",{className:"section"},s.a.createElement("h1",null,"Mein Angebot"),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column homepage-offer"},s.a.createElement(u.a,{to:"/trainings"},s.a.createElement("div",null,s.a.createElement(l.c,null)),s.a.createElement("div",null,"Trainings"))),s.a.createElement("div",{className:"column"},s.a.createElement("div",{className:"column homepage-offer"},s.a.createElement(u.a,{to:"/trainings"},s.a.createElement("div",null,s.a.createElement(l.d,null)),s.a.createElement("div",null,"Umsetzung")))),s.a.createElement("div",{className:"column"},s.a.createElement("div",{className:"column homepage-offer"},s.a.createElement(u.a,{to:"/trainings"}," ",s.a.createElement("div",null,s.a.createElement(l.s,null)),s.a.createElement("div",null,"Schnelle Unterstützung")))))),s.a.createElement("div",{className:"section"},s.a.createElement("div",{style:{textAlign:"center",fontSize:"32pt"}},s.a.createElement("a",{href:"tel:+49 (0)7142 46 99 543"},s.a.createElement("span",{className:"text-primary"},s.a.createElement(l.o,null)),s.a.createElement("span",{className:"text-black",style:{fontWeight:"bold"}}," +49 (0) 7142 46 99 543 "))))))},t}(s.a.Component),p=(t.default=function(e){var t=e.data,n=(e.pageContext,e.location);return s.a.createElement(f,{stories:t.stories.edges.map((function(e){return e.node})),location:n})},"2805278427")}}]);
//# sourceMappingURL=component---src-pagecomponents-home-home-tsx-273afea8d3cb2a429d9d.js.map