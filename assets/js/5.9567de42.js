(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{103:function(t,a,e){},104:function(t,a,e){},122:function(t,a,e){},123:function(t,a,e){},161:function(t,a,e){"use strict";var s=e(88);e.n(s).a},162:function(t,a,e){"use strict";var s=e(89);e.n(s).a},166:function(t,a,e){"use strict";var s=e(90);e.n(s).a},167:function(t,a,e){"use strict";var s=e(103);e.n(s).a},168:function(t,a,e){"use strict";var s=e(104);e.n(s).a},232:function(t,a,e){"use strict";var s=e(122);e.n(s).a},233:function(t,a,e){"use strict";var s=e(123);e.n(s).a},342:function(t,a,e){"use strict";e.r(a);e(72);var s={components:{NavLink:e(129).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(e(161),e(0)),n=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"banner"},[e("main",{staticClass:"main-section",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"description"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action inline-block pr-8"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e(),t._v(" "),t._m(1)]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,s){return e("div",{key:s,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e()]),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer text-center pb-6"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",[this._v("\n        The\n        "),a("span",{staticClass:"tooltip",attrs:{"data-tooltip":"zen = simple, minimal, clean, powerful"}},[this._v("zen")]),this._v("\n        framework for data integration\n      ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"action inline-block transparent-button"},[a("a",{staticClass:"font-normal",attrs:{href:"/guide/"}},[this._v(" Get Started ")])])}],!1,null,null,null).exports,r={computed:{data:function(){return this.$page.frontmatter}}},o=(e(162),Object(i.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"page",attrs:{"aria-labelledby":"main-title"}},[e("div",{staticClass:"theme-default-content"},[e("header",{staticClass:"hero"},[e("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.title||"Product ..."))]),t._v(" "),t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),e("p",{staticClass:"description"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"}):t._e()]),t._v(" "),e("Content")],1)])}),[],!1,null,null,null).exports),l=(e(75),e(133),e(134),e(83),e(163),e(42),e(164),e(69),/#.*$/),c=/\.(md|html)$/,h=/\/$/,u=/^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/;function d(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function v(t){return decodeURI(t).replace(l,"").replace(c,"")}function f(t){return u.test(t)}function p(t){if(f(t))return t;var a=t.match(l),e=a?a[0]:"",s=v(t);return h.test(s)?t:s+".html"+e}function g(t,a,e){if(f(a))return{type:"external",path:a};e&&(a=function(t,a,e){var s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return a+t;var i=a.split("/");e&&i[i.length-1]||i.pop();for(var n=t.replace(/^\//,"").split("/"),r=0;r<n.length;r++){var o=n[r];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(a,e));for(var s=v(a),i=0;i<t.length;i++)if(v(t[i].regularPath)===s)return Object.assign({},t[i],{type:"page",path:p(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(a,'"')),{}}function m(t,a,e,s){var i=e.pages,n=e.themeConfig,r=s&&n.locales&&n.locales[s]||n;if("auto"===(t.frontmatter.sidebar||r.sidebar||n.sidebar))return function(t){var a=function(t){var a;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?a=t:a&&(a.children||(a.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:a.map((function(a){return{type:"auto",title:a.title,basePath:t.path,path:t.path+"#"+a.slug,children:a.children||[]}}))}]}(t);var o=r.sidebar||n.sidebar;if(o){var l=function(t,a){if(Array.isArray(a))return{base:"/",config:a};for(var e in a)if(0===(s=t,/(\.html|\/)$/.test(s)?s:s+"/").indexOf(encodeURI(e)))return{base:e,config:a[e]};var s;return{}}(a,o),c=l.base,h=l.config;return h?h.map((function(t){return function t(a,e,s){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof a)return g(e,a,s);if(Array.isArray(a))return Object.assign(g(e,a[0],s),{title:a[1]});i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var n=a.children||[];return 0===n.length&&a.path?Object.assign(g(e,a.path,s),{title:a.title}):{type:"group",path:a.path,title:a.title,sidebarDepth:a.sidebarDepth,children:n.map((function(a){return t(a,e,s,i+1)})),collapsable:!1!==a.collapsable}}(t,i,c)})):[]}return[]}var _=Object(i.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("img",{staticClass:"w-4 h-4 inline text-lg",attrs:{src:"https://image.flaticon.com/icons/png/512/94/94699.png"}}),t._v(" "),t._l(t.$page.frontmatter.tags,(function(a){return e("router-link",{key:a,staticClass:"pl-2",attrs:{to:{path:""}}},[t._v("\n    "+t._s(a)+"\n  ")])}))],2)}),[],!1,null,null,null).exports,b={components:{TagLinks:_},methods:{formatDate:d}},x=(e(166),Object(i.a)(b,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"blog-home",attrs:{"aria-labelledby":"main-title"}},[e("div",{staticClass:"container"},[e("h1",{staticClass:"pb-6"},[t._v("Frictionless Blog")]),t._v(" "),e("ul",{staticClass:"flex flex-col"},t._l(t.$pagination.pages,(function(a){return e("li",{},[e("div",{staticClass:"container shadow-md pl-6 flex flex-row py-4"},[e("div",{staticClass:"container flex flex-col w-2/3"},[e("router-link",{staticClass:"text-xl page-link pr-12",attrs:{to:a.path}},[t._v(t._s(a.title)+"\n          ")]),t._v(" "),e("p",{staticClass:"text-sm italic"},[t._v(" "+t._s(t.formatDate(a.frontmatter.date))+" by "+t._s(a.frontmatter.author||"Frictionless Data")+" ")]),t._v(" "),a.frontmatter.tags?e("div",{staticClass:"container flex flex-row"},[e("TagLinks"),t._v(" "),t._l(a.frontmatter.tags,(function(a){return e("router-link",{key:a,staticClass:"pl-2 inline font-normal",attrs:{to:{path:""}}},[t._v("\n              "+t._s(a)+"\n            ")])}))],2):t._e(),t._v(" "),a.frontmatter.description?e("p",{staticClass:"text-base mr-12"},[t._v(" "+t._s(a.frontmatter.description)+" ")]):a.frontmatter.description?t._e():e("p",{staticClass:"text-base mr-12",domProps:{innerHTML:t._s(a.excerpt)}})],1),t._v(" "),e("div",{staticClass:"flex items-stretch pl-6 w-1/3 py-2"},[e("img",{staticClass:"w-48 self-center",attrs:{src:a.frontmatter.image||a.frontmatter.heroImage||"https://i.ytimg.com/vi/lWHKVXxuci0/maxresdefault.jpg"}})])]),t._v(" "),e("hr")])})),0),t._v(" "),e("div",{attrs:{id:"pagination"}},[t.$pagination.hasPrev?e("router-link",{staticClass:"pl-6",attrs:{to:t.$pagination.prevLink}},[t._v("Prev")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{staticClass:"pl-6",attrs:{to:t.$pagination.nextLink}},[t._v("Next")]):t._e()],1),t._v(" "),e("br"),e("br")])])}),[],!1,null,"791a3fdd",null).exports),C={components:{TagLinks:_},methods:{formatDate:d}},w=Object(i.a)(C,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"page",attrs:{"aria-labelledby":"main-title"}},[e("div",{staticClass:"theme-default-content"},[e("header",[e("h1",{staticClass:"text-3xl pt-6"},[t._v(t._s(t.$page.frontmatter.title))]),t._v(" "),e("p",{staticClass:"text-xl pb-6"},[t._v(t._s(t.$page.frontmatter.summary)+" ")]),t._v(" "),e("time",{staticClass:"italic"},[t._v(" "+t._s(t.formatDate(t.$page.frontmatter.date))+" by "+t._s(t.$page.frontmatter.author||"Frictionless Data")+" ")]),t._v(" "),e("TagLinks",{staticClass:"pt-4 text-blue-500 pb-6"})],1),t._v(" "),e("Content"),t._v(" "),t._m(0)],1)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("footer",[a("a",{attrs:{href:"/blog/"}},[this._v(" < Go back")])])}],!1,null,null,null).exports,y=(e(76),e(77),e(93),e(95)),$=e(96),k=[["",void 0],["",void 0],["",void 0],["",void 0],["Document Dataset","/jobs/document-dataset/"],["",void 0],["Have a Data Hub","/jobs/have-a-data-hub/"],["",void 0],["Find Datasets","/jobs/find-datasets/"],["Pull Dataset","/jobs/pull-dataset/"],["Version Dataset","/jobs/version-dataset/"],["Validate Dataset","/jobs/validate-dataset/"],["Pipeline\nTransformations","/jobs/pipeline-transformations/"],["Publish Dataset","/jobs/publish-dataset/"],["Do Analysis &\nMachine Learning","/jobs/do-analysis-and-machine-learning/"],["Scale Scope","/jobs/scale-scope/"],["Data Audit","/jobs/data-audit/"],["Do Initial\nData Exploration","/jobs/do-initial-data-exploration/"],["Quickly\nEdit Dataset","/jobs/quickly-edit-dataset/"],["Store Dataset","/jobs/store-dataset/"],["Data API","/jobs/data-api/"],["Create\nVisualizations","/jobs/create-visualizations/"],["Orchestrate\nData Platform","/jobs/orchestrate-data-platform/"],["Scale Size","/jobs/scale-size/"],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0]],S=function(){function t(a){Object(y.a)(this,t),this.shape=[8,3],this.domNode=a}return Object($.a)(t,[{key:"configure",value:function(){var t=this,a=Honeycomb.extendHex({size:61,orientation:"flat",currentIndex:function(){var a=this.toPoint(),e=t.gridType.pointToHex([a.x,a.y]);return e.x+1+(e.y+1)*t.shape[0]},render:function(a){var e=this.toPoint(),s=e.x,i=e.y,n=this.toPoint(),r=this.center().add(n),o=(t.gridType.pointToHex([n.x,n.y]),this.corners()),l=this.currentIndex(),c={width:1,color:"#999"};""===k[l][0]&&(c={}),this.draw=a.polygon(o.map((function(t){var a=t.x,e=t.y;return"".concat(a,",").concat(e)}))).fill("none").stroke(c).translate(s,i);var h=k[l][0],u=h.includes("\n")?r.y-26:r.y-13;a.text(h).font({size:13,anchor:"middle",leading:1.4,fill:"#1A98FF"}).translate(r.x,u)},openAnchor:function(){var t=this.currentIndex();""!==k[t][0]&&window.open(k[t][1])},highlight:function(){var t=this.currentIndex();""!==k[t][0]&&this.draw.stop(!0,!0).fill({opacity:.2,color:"#6a8bad"}).animate(1e3).fill({opacity:0,color:"none"})}});this.gridType=Honeycomb.defineGrid(a)}},{key:"setup",value:function(){var t=this.shape;this.configure();var a=SVG(this.domNode);this.gridInstance=this.gridType.rectangle({width:t[0],height:t[1],onCreate:function(t){t.render(a)}})}},{key:"setupMouseOverEvent",value:function(){var t=this;this.domNode.addEventListener("mouseover",(function(a){var e=a.offsetX,s=a.offsetY,i=t.gridType.pointToHex([e,s]),n=t.gridInstance.get(i);n&&n.highlight()}))}},{key:"setupClickEvent",value:function(){var t=this;this.domNode.addEventListener("click",(function(a){var e=a.offsetX,s=a.offsetY,i=t.gridType.pointToHex([e,s]),n=t.gridInstance.get(i);n&&n.openAnchor()}))}}]),t}(),j={mounted:function(){var t=new S(this.$refs.diagram);t.setup(),t.setupMouseOverEvent(),t.setupClickEvent()}},P=(e(167),{components:{JobsDiagramSmall:Object(i.a)(j,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"diagram",staticClass:"jobs-diagram"})}),[],!1,null,"a5ca1272",null).exports},computed:{data:function(){return this.$page.frontmatter}}}),T=(e(168),Object(i.a)(P,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"page",attrs:{"aria-labelledby":"main-title"}},[e("div",{staticClass:"theme-default-content"},[e("header",{staticClass:"hero"},[e("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.title))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(t.data.tagline))])]),t._v(" "),e("JobsDiagramSmall",{staticClass:"pt-12"}),t._v(" "),e("p",[t._v(t._s(t.data.description))]),t._v(" "),e("h2",[t._v("Context")]),t._v(" "),e("p",[t._v(t._s(t.data.context))]),t._v(" "),e("p",[t._v(t._s(t.data.pain))]),t._v(" "),e("Content")],1)])}),[],!1,null,null,null).exports),D=e(339),E=e(338),I=e(340),O=(e(232),Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"banner footer-background py-16"},[e("div",{staticClass:"banner flex flex-row"},[e("div",{staticClass:"w-1/5 text-center pt-3 pl-10"},[e("img",{staticClass:"w-56",attrs:{src:"/img/home/logo-white-thicker.svg"}})]),t._v(" "),e("div",{staticClass:"container w-2/3 flex justify-center flex-row px-10"},[e("div",{staticClass:"w-1/5 text-left pr-20"},[e("h2",{staticClass:"text-xl font-normal text-white"},[t._v("Supported by")]),t._v(" "),e("div",[e("img",{staticClass:"w-32 mx-auto py-8",attrs:{src:"/img/home/alfred.svg"}})]),t._v(" "),e("div",[e("img",{staticClass:"w-32 mx-auto",attrs:{src:"/img/home/open-data-institute.svg"}})])]),t._v(" "),e("div",{staticClass:"w-1/5 text-left pr-20"},[e("h2",{staticClass:"text-xl text-white font-normal"},[t._v("About")]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"/about/"}},[t._v("About")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"/team/"}},[t._v("Contact")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"https://okfn.org/privacy-policy/"}},[t._v("Privacy Policy")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"https://okfn.org/terms-of-use/"}},[t._v("Terms of Use")])])]),t._v(" "),e("div",{staticClass:"w-1/5 text-left pr-20"},[e("h2",{staticClass:"text-xl text-white font-normal"},[t._v("Help")]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"/contribute/"}},[t._v("Support")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"/"}},[t._v("Get started")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"/team/"}},[t._v("Community")])])]),t._v(" "),e("div",{staticClass:"w-1/5 text-left pr-10"},[e("h2",{staticClass:"text-xl text-white font-normal"},[t._v("Social")]),t._v(" "),e("div",{staticClass:"pt-4"},[e("img",{staticClass:"w-8 inline-block align-middle",attrs:{src:"/img/home/github.svg"}}),t._v(" "),e("a",{staticClass:"text-white inline pl-2 font-light text-lg",attrs:{href:"https://github.com/frictionlessdata/"}},[t._v("GitHub")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("img",{staticClass:"w-8 inline-block align-middle",attrs:{src:"/img/home/twitter.svg"}}),t._v(" "),e("a",{staticClass:"text-white pl-2 inline font-light text-lg",attrs:{href:"https://twitter.com/hashtag/frictionlessdata"}},[t._v("Twitter")])]),t._v(" "),e("div",{staticClass:"pt-6 pr-10"},[e("img",{staticClass:"w-8 inline-block align-middle",attrs:{src:"/img/home/gitter.svg"}}),t._v(" "),e("a",{staticClass:"text-white pl-2 inline font-light text-lg",attrs:{href:"https://gitter.im/frictionlessdata/chat"}},[t._v("Gitter")])])])])])])}],!1,null,"c4e89ba6",null).exports),L=(e(233),Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"banner footer-sb py-10"},[e("div",{staticClass:"banner flex flex-row"},[e("div",{staticClass:"w-1/3 text-center"}),t._v(" "),e("div",{},[e("img",{staticClass:"w-48 pt-2 pr-20",attrs:{src:"/img/home/logo-white-thicker.svg"}})]),t._v(" "),e("div",{staticClass:"container w-2/3 flex justify-center flex-row px-10"},[e("div",{staticClass:"w-1/4 text-left pr-20"},[e("h2",{staticClass:"text-lg font-normal text-white"},[t._v("Supported by")]),t._v(" "),e("div",[e("img",{staticClass:"w-32 mx-auto py-8",attrs:{src:"/img/home/alfred.svg"}})]),t._v(" "),e("div",[e("img",{staticClass:"w-32 mx-auto",attrs:{src:"/img/home/open-data-institute.svg"}})])]),t._v(" "),e("div",{staticClass:"w-1/4 text-left pr-20"},[e("h2",{staticClass:"text-xl text-white font-normal"},[t._v("About")]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"/about/"}},[t._v("About")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"/team/"}},[t._v("Contact")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"https://okfn.org/privacy-policy/"}},[t._v("Privacy Policy")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"https://okfn.org/terms-of-use/"}},[t._v("Terms of Use")])])]),t._v(" "),e("div",{staticClass:"w-1/4 text-left pr-20"},[e("h2",{staticClass:"text-xl text-white font-normal"},[t._v("Help")]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"/contribute/"}},[t._v("Support")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"/"}},[t._v("Get started")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"/team/"}},[t._v("Community")])])]),t._v(" "),e("div",{staticClass:"w-1/4 text-left pr-20"},[e("h2",{staticClass:"text-xl text-white font-normal"},[t._v("Social")]),t._v(" "),e("div",{staticClass:"pt-4 flex flex-row"},[e("img",{staticClass:"w-8 align-middle",attrs:{src:"/img/home/github.svg"}}),t._v(" "),e("a",{staticClass:"text-white pl-2 pt-2 font-light text-lg",attrs:{href:"https://github.com/frictionlessdata/"}},[t._v("GitHub")])]),t._v(" "),e("div",{staticClass:"pt-6 flex flex-row"},[e("img",{staticClass:"w-8 align-middle",attrs:{src:"/img/home/twitter.svg"}}),t._v(" "),e("a",{staticClass:"text-white pl-2 pt-2 font-light text-lg",attrs:{href:"https://twitter.com/hashtag/frictionlessdata"}},[t._v("Twitter")])]),t._v(" "),e("div",{staticClass:"pt-6 pr-10 flex flex-row"},[e("img",{staticClass:"w-8 align-middle",attrs:{src:"/img/home/gitter.svg"}}),t._v(" "),e("a",{staticClass:"text-white pl-2 pt-2 font-light text-lg",attrs:{href:"https://gitter.im/frictionlessdata/chat"}},[t._v("Gitter")])])])])])])}],!1,null,"790bbb5e",null).exports),A={components:{Home:n,Product:o,BlogIndex:x,BlogPost:w,Job:T,Page:E.a,Sidebar:I.a,Navbar:D.a,Footer:O,FooterSidebar:L},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!("home"==t.layout)&&!this.isBlogIndexPage&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return m(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass,a=this.$page.frontmatter.layout;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},a,t]},isBlogIndexPage:function(){return!(!this.$page.frontmatter.title||!this.$page.frontmatter.title.match(/(?:Page \d+ \| )?Blog/))}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var a=t.changedTouches[0].clientX-this.touchStart.x,e=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(a)>Math.abs(e)&&Math.abs(a)>40&&(a>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},H=Object(i.a)(A,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"banner w-full bg-yellow"},[e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(a){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),"home"===t.$page.frontmatter.layout?e("Home"):"product"===t.$page.frontmatter.layout?e("Product"):t.isBlogIndexPage?e("BlogIndex"):"Post"===t.$page.frontmatter.layout?e("BlogPost"):"job"===t.$page.frontmatter.layout?e("Job"):e("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2),t._v(" "),"home"===t.$page.frontmatter.layout||this.isBlogIndexPage?t._e():e("FooterSidebar")],1),t._v(" "),"home"===t.$page.frontmatter.layout||this.isBlogIndexPage?e("Footer"):t._e()],1)}),[],!1,null,null,null);a.default=H.exports},88:function(t,a,e){},89:function(t,a,e){},90:function(t,a,e){}}]);