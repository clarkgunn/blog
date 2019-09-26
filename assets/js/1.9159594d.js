(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{126:function(t,e,r){},127:function(t,e,r){},128:function(t,e,r){"use strict";var s=r(18),i=r(39),n=r(130),a=r.n(n),o=r(37),l=r.n(o);var c=r(40);function d(t,e){return Object(i.a)(t)||function(t,e){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],s=!0,i=!1,n=void 0;try{for(var o,c=a()(t);!(s=(o=c.next()).done)&&(r.push(o.value),!e||r.length!==e);s=!0);}catch(t){i=!0,n=t}finally{try{s||null==c.return||c.return()}finally{if(i)throw n}}return r}}(t,e)||Object(c.a)()}var u={props:{colors:{default:function(){return["#FFBE0B","#FB5607","#FF006E","#8338EC","#3A86FF"]}},time:{default:"20s"},degree:{default:"120deg"},progress:{default:100}},computed:{animatedGradient:function(){var t=d(this.colors,2),e=t[0],r=t[1],i=[].concat(Object(s.a)(this.colors),[e,r]);return"\n                animation: movingGradient ".concat(this.time," linear infinite;\n                background-size: ").concat(100*i.length,"% 100%;\n                background-image: linear-gradient(").concat(this.degree,", ").concat(i.join(", "),");\n                width: ").concat(this.progress,"%;\n                transition: width .3s linear;\n            ")}}},h=(r(133),r(10)),f=Object(h.a)(u,(function(){var t=this.$createElement;return(this._self._c||t)("div",{style:this.animatedGradient})}),[],!1,null,null,null);e.a=f.exports},129:function(t,e,r){"use strict";var s={props:{article:Object,highlightEveryThird:Boolean},computed:{ribbonClass:function(){switch(this.article.frontmatter.ribbon){case"popular":return"ribbon river";case"new":return"ribbon topaz";default:return""}}}},i=(r(135),r(10)),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{staticClass:"article-card relative flex flex-col rounded-lg shadow-xl hover:shadow-2xl min-h-article-card border-0 z-article-card",class:{"highlight-every-third":t.highlightEveryThird},attrs:{to:t.article.path}},[r("figure",[r("div",{staticClass:"h-48 rounded-t-lg bg-no-repeat bg-cover bg-center",style:"background-image: url("+t.article.frontmatter.image+")"})]),t._v(" "),r("main",{staticClass:"flex flex-1 flex-col bg-white rounded-b-lg p-6"},[r("header",[r("div",{staticClass:"uppercase tracking-wide text-grey-dark text-sm font-semibold",domProps:{textContent:t._s(t.article.frontmatter.tags[0])}}),t._v(" "),r("div",{staticClass:"font-sans text-2xl mb-4 border-0 leading-tight text-black font-semibold",domProps:{textContent:t._s(t.article.title)}})]),t._v(" "),r("section",{staticClass:"font-content text-lg text-grey-darker",domProps:{textContent:t._s(t.article.frontmatter.description)}})]),t._v(" "),t.article.frontmatter.ribbon?r("div",{class:t.ribbonClass},[r("span",{domProps:{textContent:t._s(t.article.frontmatter.ribbon)}})]):t._e()])}),[],!1,null,null,null);e.a=n.exports},130:function(t,e,r){t.exports=r(131)},131:function(t,e,r){r(67),r(36),t.exports=r(132)},132:function(t,e,r){var s=r(11),i=r(66);t.exports=r(2).getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return s(e.call(t))}},133:function(t,e,r){"use strict";var s=r(126);r.n(s).a},134:function(t,e,r){},135:function(t,e,r){"use strict";var s=r(127);r.n(s).a},142:function(t,e,r){"use strict";var s=r(1),i=r(38)(3);s(s.P+s.F*!r(12)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},143:function(t,e,r){"use strict";var s=r(134);r.n(s).a},417:function(t,e,r){"use strict";r.r(e);r(68),r(69),r(142),r(22);var s=r(5),i={components:{GradientBar:r(128).a},data:function(){return{progressValue:0,progressMax:0}},computed:{progress:function(){if(0===this.progressMax)return 0;var t=Math.floor(this.progressValue/this.progressMax*1e3)/10;return Math.min(t,100)},isVisible:function(){return this.progressValue>=100},absoluteUrl:function(){return this.$themeConfig.domain+this.$page.path},encodedTitle:function(){return encodeURIComponent(this.$page.title)}},methods:{update:function(){var t=document.querySelector(".content"),e=window.scrollY,r=t.scrollHeight+t.offsetTop-window.innerHeight;this.progressMax=r,this.progressValue=e}},mounted:function(){this.update(),window.addEventListener("scroll",this.update,{passive:!0}),window.addEventListener("resize",this.update,!1)},beforeDestroy:function(){window.removeEventListener("scroll",this.update),window.removeEventListener("resize",this.update)}},n=(r(143),r(10)),a={},o={props:{placeholder:{default:"🤖 Updates for humans.."},submitButton:{default:"Subscribe"},submitEmojis:{default:function(){return["💌","🎁","🥳","😘","🙌","👋","👀","🐼","⛄️","🎂","🤖","🦄","🦋","🍺","🚀","💡","💎","🛎","🎉","📦","📚","📨","🥑","🍪"]}}},data:function(){return{submitHovered:!1}},computed:{submitText:function(){return this.submitHovered?Object(s.d)(this.submitEmojis):this.submitButton}}},l={components:{FloatingHeader:Object(n.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"floating-header fixed pin-x pin-t pt-2 pb-3 sm:pt-3 sm:pb-4 shadow z-floating-header",class:{active:t.isVisible}},[r("div",{staticClass:"container-lg"},[r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"flex-1 flex items-center"},[r("router-link",{staticClass:"block border-0",attrs:{to:"/"}},[r("icon",{staticClass:"w-5 h-5",attrs:{icon:"home"}})],1),t._v(" "),r("div",{staticClass:"flex-1 font-serif font-medium ml-3 mr-4 w-5 h-5 truncate",domProps:{textContent:t._s(t.$page.title)}})],1),t._v(" "),r("div",{staticClass:"hidden sm:flex items-center"},[r("div",{staticClass:"uppercase tracking-wide text-sm font-semibold text-grey-dark mr-3"},[t._v("\n                    share\n                ")]),t._v(" "),r("a",{staticClass:"block border-0 leading-tight text-grey-dark hover:text-blue-light mr-2",attrs:{href:"https://twitter.com/share?text="+t.encodedTitle+"&url="+t.absoluteUrl,onclick:"window.open(this.href, 'share-twitter', 'width=550,height=235');return false;"}},[r("svg",{staticClass:"w-4 h-4 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[r("path",{attrs:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])]),t._v(" "),r("a",{staticClass:"block border-0 leading-tight text-grey-dark hover:text-blue-dark",attrs:{href:"https://www.facebook.com/sharer/sharer.php?u="+t.absoluteUrl,onclick:"window.open(this.href, 'share-facebook','width=580,height=296');return false;"}},[r("svg",{staticClass:"w-4 h-4 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 264 512"}},[r("path",{attrs:{d:"M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z"}})])])])])]),t._v(" "),r("GradientBar",{staticClass:"absolute pin-x pin-b h-1",attrs:{progress:t.progress}})],1)}),[],!1,null,null,null).exports,ArticleMetaData:Object(n.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col sm:flex-row sm:items-center text-grey-darker font-semibold bg-grey-lightest border-t border-b border-grey px-4 py-2 overflow-hidden"},[r("div",{staticClass:"flex flex-no-shrink items-center mb-2 sm:mb-0 sm:mr-6"},[r("Icon",{staticClass:"w-5 h-5 flex-no-shrink",attrs:{icon:"calendar",primary:"text-grey",secondary:"text-grey-dark"}}),t._v(" "),r("div",{staticClass:"ml-2 flex-no-shrink",domProps:{textContent:t._s(new Date(t.$page.frontmatter.date).toLocaleDateString("en-GB"))}})],1),t._v(" "),r("div",{staticClass:"flex flex-no-shrink items-center"},[r("Icon",{staticClass:"w-5 h-5 flex-no-shrink",attrs:{icon:"tag",primary:"text-grey",secondary:"text-grey-lightest"}}),t._v(" "),t._l(t.$page.frontmatter.tags,(function(e){return r("div",{staticClass:"ml-2 flex-no-shrink",domProps:{textContent:t._s(""+e)}})}))],2)])}),[],!1,null,null,null).exports,SubscribeForm:Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{method:"post",action:"https://lorisleiva.us17.list-manage.com/subscribe/post?u=75fd667401723eb751037f151&id=544f57c6d7",name:"mc-embedded-subscribe-form",id:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[t._m(0),t._v(" "),r("div",{staticClass:"flex justify-center"},[r("div",{staticClass:"flex w-full max-w-sm rounded-lg shadow-md"},[r("input",{staticClass:"w-full p-3 rounded-l-lg rounded-r-none appearance-none border-2 border-white bg-white",attrs:{type:"email",name:"EMAIL",id:"mce-EMAIL",placeholder:t.placeholder,required:""}}),t._v(" "),r("button",{staticClass:"w-24 sm:w-28 rounded-r-lg border-2 border-l-0 border-white text-white tracking-wide uppercase flex-no-shrink",class:t.submitHovered?"text-2xl":"text-sm sm:text-base",attrs:{type:"submit",id:"mc-embedded-subscribe"},domProps:{textContent:t._s(t.submitText)},on:{mouseenter:function(e){t.submitHovered=!0},mouseleave:function(e){t.submitHovered=!1}}})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[e("input",{attrs:{type:"text",name:"b_75fd667401723eb751037f151_544f57c6d7",tabindex:"-1",value:""}})])}],!1,null,null,null).exports,ArticleCard:r(129).a},computed:{disqusIdentifier:function(){return this.$page.frontmatter.disqus||this.$page.path},disqusUrl:function(){return this.$themeConfig.domain+this.$page.path},relatedArticles:function(){var t=this.$page.frontmatter.tags||[],e=this.$articles.filter((function(e){return(e.frontmatter.tags||[]).some((function(e){return t.includes(e)}))}));return Object(s.e)(Object(s.a)(e,[this.$page]),2)}},data:function(){return{}}},c=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("FloatingHeader"),this._v(" "),e("div",{staticClass:"container mb-8"},[e("ArticleMetaData")],1),this._v(" "),e("Content",{staticClass:"content default"}),this._v(" "),e("div",{staticClass:"bg-grey-lighter mt-16"},[e("div",{staticClass:"container py-4 sm:py-8"},[e("h2",[this._v("Related articles")]),this._v(" "),e("div",{staticClass:"flex flex-wrap -mx-5"},this._l(this.relatedArticles,(function(t){return e("ArticleCard",{key:t.key,staticClass:"mx-5 mb-8",attrs:{article:t}})})),1)])])],1)}),[],!1,null,null,null);e.default=c.exports}}]);