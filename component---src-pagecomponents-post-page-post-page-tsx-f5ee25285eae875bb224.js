(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"EFy+":function(e,t,a){"use strict";a.r(t),a.d(t,"PostPage",(function(){return I})),a.d(t,"pageQuery",(function(){return B}));var n=a("dI71"),r=a("q1tI"),s=a.n(r),i=a("Aq8R"),c=a("+rwk"),o=a("K3K0"),l=a("9uds"),u=a("Kxvw"),p=a("VOVi"),h=a("OKhy"),m=(a("JFhn"),function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"contentfooter-container"},s.a.createElement("hr",null),this.props.children))},t}(s.a.Component)),d=a("bafB"),f=a("PeiE"),b=a("z9ZU"),g=a("qFjn"),v=a("o0o1"),E=a.n(v),y=(a("ls82"),a("HaE+")),w=a("O9qp"),N=a("eG77"),k=(a("veir"),a("ma3e"));function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function O(e,t,a){return(O=C()?Reflect.construct:function(e,t,a){var n=[null];n.push.apply(n,t);var r=new(Function.bind.apply(e,n));return a&&x(r,a.prototype),r}).apply(null,arguments)}function P(e){var t="function"==typeof Map?new Map:void 0;return(P=function(e){if(null===e||(a=e,-1===Function.toString.call(a).indexOf("[native code]")))return e;var a;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return O(e,arguments,S(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),x(n,e)})(e)}var D=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t}(P(Error)),j=new(function(){function e(){this.baseUri="https://api.newsletter2go.com",this.formUri=""}var t=e.prototype;return t.getCaptcha=function(){var e=Object(y.a)(E.a.mark((function e(){var t,a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Object(h.p)(this.baseUri,"captcha"),{method:"post"});case 2:if(t=e.sent,Object(h.i)(t.status)){e.next=5;break}throw new Error("Could not fetch captcha, status: "+t.status);case 5:return e.next=7,t.json();case 7:if(a=e.sent,Object(h.i)(a.status)){e.next=10;break}throw new Error("Could not fetch captcha, status: "+a.status);case 10:return n=a.value[0][0],e.abrupt("return",{images:n.images,correctValue:n.info.correctValue,identifier:n.info.identifier,keyValue:n.info.keyValue});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.submitSubscription=function(){var e=Object(y.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Object(h.p)(this.baseUri,"/forms/submit/"+this.formUri),{method:"post",body:JSON.stringify(t)});case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,Object(h.i)(n.status)&&Object(h.i)(a.status)){e.next=10;break}if(!(n.errorMessage&&n.errorMessage.indexOf("Captcha validation failed")>=0)){e.next=9;break}throw new D;case 9:throw new Error("Could not fetch captcha, status: "+a.status);case 10:return e.abrupt("return",n.info.count);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),e}()),R=function(e){function t(t){var a;return(a=e.call(this,t)||this).dialog=r.createRef(),a.input=r.createRef(),a.subscriptionSuccessfull=!1,a.showUpdate=!1,a.onHide=function(){a.setState({captchaResponse:null,captchaSelection:null,emailValidationError:null,subscriptionError:null,acceptPrivacyError:null,subscribing:!1}),0==a.subscriptionSuccessfull&&null!=a.onDecline&&a.onDecline()},a.onSubscribeClicked=Object(y.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.setState({emailValidationError:null,subscriptionError:null,acceptPrivacyError:null,subscribing:!0}),e.prev=1,0!=a.validate()){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,j.submitSubscription({recipient:{email:a.state.email},captcha:{correctValue:a.state.captchaResponse.correctValue,keyValue:a.state.captchaResponse.keyValue,selected:a.state.captchaSelection,lists:[]}});case 6:t=e.sent,a.onSuccess(t),a.subscriptionSuccessfull=!0,a.hide(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof D?a.setState({subscriptionError:"Sie haben das falsche Captcha-Bild ausgewählt. Bitte versuchen Sie es erneut."}):(a.setState({subscriptionError:"Oops, beim Anmeldevorgang ist ein Fehler passiert. Bitte versuche es später erneut oder kontaktieren Sie uns damit wir das Problem beheben können."}),N.a.trackError("Error during newsletter subscription",e.t0),console.error(e.t0));case 15:return e.prev=15,a.setState({subscribing:!1}),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])}))),a.handleChange=function(){var e=Object(y.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},"checkbox"==t.target.type?n[t.target.name]=t.target.checked:n[t.target.name]=t.target.value,a.setState(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",subscribing:!1,acceptPrivacy:!1,captchaResponse:null,captchaSelection:null},a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.componentDidUpdate=function(){var e,t;1==this.showUpdate&&(null===(e=this.input)||void 0===e||null===(t=e.current)||void 0===t||t.focus(),this.showUpdate=!1)},a.show=function(){var e=Object(y.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.showUpdate=!0,this.dialog.current.show(),e.next=4,this.initCaptcha();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),a.initCaptcha=function(){var e=Object(y.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.getCaptcha();case 3:t=e.sent,this.setState({captchaResponse:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),a.hide=function(){this.dialog.current.hide()},a.validate=function(){return null==this.state.email||""==this.state.email?(this.setState({emailValidationError:"Bitte gib deine E-Mail Adresse ein."}),!1):(0==this.state.acceptPrivacy&&this.setState({acceptPrivacyError:"Bitte akzeptiere die Datenschutzbedingungen."}),!0)},a.render=function(){var e=this;return r.createElement(w.a,{ref:this.dialog,header:r.createElement("div",null,r.createElement(k.l,{style:{marginRight:"10px",verticalAlign:"middle"}})," Newsletteranmeldung"),onHide:this.onHide,closedbyX:!0},r.createElement("div",{className:"subscribe-dialog"},r.createElement("div",{className:"subscribe-dialog-text"},"Wenn Sie über die neuesten Blogbeiträge von Durchblick durch Daten auf dem laufenden bleiben wollen, melden Sie sich hier bei unserem Newsletter an."),r.createElement("div",{className:"field"},r.createElement("div",{className:"control has-icons-left has-icons-right"},r.createElement("input",{className:"input "+(null!=this.state.emailValidationError?"is-danger":"is-primary"),type:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange,name:"email"}),r.createElement("span",{className:"icon is-small is-left"},r.createElement("i",{className:"fas fa-envelope"})),r.createElement("span",{className:"icon is-small is-right"},null!=this.state.emailValidationError?r.createElement("i",{className:"fas fa-exclamation-triangle"}):"")),null!=this.state.emailValidationError?r.createElement("p",{className:"help is-danger"},this.state.emailValidationError):""),r.createElement("div",{className:"field"},r.createElement("div",{className:"control"},r.createElement("label",null,r.createElement("input",{ref:this.input,type:"checkbox",className:null!=this.state.acceptPrivacyError?"is-danger":"",checked:this.state.acceptPrivacy,onChange:this.handleChange,name:"acceptPrivacy"}),"Ich akzeptiere die ",r.createElement("a",{href:"/datenschutz"},"Datenschutzbedingungen")),null!=this.state.acceptPrivacyError?r.createElement("p",{className:"help is-danger"},this.state.acceptPrivacyError):"")),r.createElement("div",{className:"field captcha"},null!=this.state.captchaResponse?r.createElement(r.Fragment,null,r.createElement("div",{className:"captcha-message"},this.state.captchaResponse.identifier),r.createElement("div",{className:"captcha-images"},this.state.captchaResponse.images.map((function(t,a){return r.createElement("img",{key:a,className:"newsletter2go-captcha-image "+(t==e.state.captchaSelection?"selected":""),onClick:function(){return e.setState({captchaSelection:t})},src:j.baseUri+"/captcha/image/"+t+"/"+e.state.captchaResponse.keyValue,"data-hash":t})})))):r.createElement("i",{className:"fa fa-spinner fa-spin"})),r.createElement("div",{className:"field"},r.createElement("div",{className:"control"},r.createElement("button",{tabIndex:1,className:"button subscribe-button "+(1==this.state.subscribing?"is-loading":""),"aria-label":"Subscribe to newsletter",onClick:this.onSubscribeClicked,disabled:!this.state.acceptPrivacy||null==this.state.captchaSelection},"Anmelden"))),null!=this.state.subscriptionError?r.createElement("div",{className:"help is-danger"},this.state.subscriptionError):""))},t}(r.Component),V=a("JuBv"),U=function(e){function t(t){var a;return(a=e.call(this,t)||this).onDecline=function(){g.a.setCookie("subscribeDismissed",(new Date).toISOString())},a.onDismissClicked=function(){a.dialog.current.hide()},a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){var e=this;return s.a.createElement(w.a,{ref:this.dialog,header:s.a.createElement("div",null,s.a.createElement(k.q,{className:"far",style:{marginRight:"10px",fontSize:"35px",verticalAlign:"middle"}})," Lästiges Pop-Up?"),onHide:this.onHide,closedByScroll:1},s.a.createElement("div",{className:"subscribe-dialog"},s.a.createElement("div",{className:"subscribe-dialog-text"},"Wir versprechen unsere E-Mails lohnen sich! Abonniere unseren Newsletter und erhalte Informationen über neue Artikel. ",s.a.createElement("br",null),"Außerdem schenken wir dir unseren Udemy-Kurs ",s.a.createElement(V.a,{isOutbound:!0,to:"https://www.udemy.com/course/einfuehrung-in-power-pivot/"},s.a.createElement("b",null,"Einführung in Power Pivot"),"!")),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control has-icons-left has-icons-right"},s.a.createElement("input",{className:"input "+(null!=this.state.emailValidationError?"is-danger":"is-primary"),type:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange,name:"email"}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-envelope"})),s.a.createElement("span",{className:"icon is-small is-right"},null!=this.state.emailValidationError?s.a.createElement("i",{className:"fas fa-exclamation-triangle"}):"")),null!=this.state.emailValidationError?s.a.createElement("p",{className:"help is-danger"},this.state.emailValidationError):""),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control"},s.a.createElement("label",null,s.a.createElement("input",{ref:this.input,type:"checkbox",className:null!=this.state.acceptPrivacyError?"is-danger":"",checked:this.state.acceptPrivacy,onChange:this.handleChange,name:"acceptPrivacy"}),"Ich akzeptiere die ",s.a.createElement("a",{href:"/datenschutz"},"Datenschutzbedingungen")),null!=this.state.acceptPrivacyError?s.a.createElement("p",{className:"help is-danger"},this.state.acceptPrivacyError):"")),s.a.createElement("div",{className:"field captcha"},null!=this.state.captchaResponse?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"captcha-message"},this.state.captchaResponse.identifier),s.a.createElement("div",{className:"captcha-images"},this.state.captchaResponse.images.map((function(t,a){return s.a.createElement("img",{key:a,className:"newsletter2go-captcha-image "+(t==e.state.captchaSelection?"selected":""),onClick:function(){return e.setState({captchaSelection:t})},src:j.baseUri+"/captcha/image/"+t+"/"+e.state.captchaResponse.keyValue,"data-hash":t})})))):s.a.createElement("i",{className:"fa fa-spinner fa-spin"})),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control"},s.a.createElement("button",{tabIndex:1,className:"button subscribe-button "+(1==this.state.subscribing?"is-loading":""),"aria-label":"Subscribe to newsletter",onClick:this.onSubscribeClicked,disabled:!this.state.acceptPrivacy||null==this.state.captchaSelection},"Hört sich gut an!"),s.a.createElement("button",{style:{marginLeft:"15px"},tabIndex:1,className:"button action-button","aria-label":"Dismiss",onClick:this.onDismissClicked},"Nein danke.")),s.a.createElement("div",{className:"control"})),null!=this.state.subscriptionError?s.a.createElement("div",{className:"help is-danger"},this.state.subscriptionError):""))},t}(R),I=function(e){function t(t){var a;return(a=e.call(this,t)||this).currentScrollPerc=0,a.subDialog=s.a.createRef(),a.onScroll=Object(h.c)((function(e){var t=document.body.clientHeight,n=window.scrollY/t;a.shouldShowSubscriptionDialog()&&a.currentScrollPerc<.4&&n>.4&&a.subDialog.current.show(),a.currentScrollPerc=n}),100),a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;setTimeout((function(){window.addEventListener("scroll",e.onScroll)}),100)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll)},a.shouldShowSubscriptionDialog=function(){var e=(new Date).addDays(-30);return"true"!=g.a.cookies.subscribed&&null==g.a.cookies.subscribeDismissed||new Date(g.a.cookies.subscribeDismissed)<e},a.render=function(){var e,t,a,n=this.props.data.post,r=this.props.context,g=Object(h.l)(this.props.data.categories.edges.map((function(e){return e.node}))),v=n.frontmatter.categories.map((function(e){return Object(h.e)(e,g)})),E=this.props.data.tags.edges.map((function(e){return e.node})),y=this.props.data.post.frontmatter.tags.map((function(e){return E.find((function(t){return t.slug==e}))})),w={url:this.props.data.post.frontmatter.slug,description:n.frontmatter.description,type:"article",title:n.frontmatter.title,tags:y.map((function(e){return e.name})),image:null!=this.props.data.post.frontmatter.image?null===(e=this.props.data.image)||void 0===e||null===(t=e.childImageSharp)||void 0===t||null===(a=t.fluid)||void 0===a?void 0:a.src:null,updated_time:n.frontmatter.updatedate,publish_time:n.frontmatter.date,abstract:n.fields.abstract,author:this.props.context.author.frontmatter.firstname+" "+this.props.context.author.frontmatter.lastname,comments:r.comments,noIndex:this.props.data.post.frontmatter.noIndex};return s.a.createElement(i.b,{sidebar:s.a.createElement(c.a,{isFixed:!0},s.a.createElement(o.a,{tableOfContents:n.tableOfContents}),s.a.createElement(l.a,null)),header:w},s.a.createElement(U,{ref:this.subDialog}),s.a.createElement(u.a,{frontmatter:n.frontmatter,commentCnt:n.fields.commentCnt,author:r.author,categories:v,isPreview:!1}),s.a.createElement("div",{className:"post-content"},s.a.createElement(p.b,{html:n.htmlAst}),null==n.fields.subscriberContent||0==n.fields.subscriberContent.length?"":s.a.createElement(f.a,{content:n.fields.subscriberContent})),s.a.createElement(m,null,s.a.createElement(b.a,{author:this.props.context.author,authorBadge:this.props.data.authorBadge,avatar:this.props.data.avatar}),s.a.createElement(d.a,{slug:n.frontmatter.slug,comments:r.comments})))},t}(s.a.Component),B=(t.default=function(e){var t=e.data,a=e.pageContext,n=e.location;return s.a.createElement(I,{location:n,data:t,context:a})},"1059941305")}}]);
//# sourceMappingURL=component---src-pagecomponents-post-page-post-page-tsx-f5ee25285eae875bb224.js.map