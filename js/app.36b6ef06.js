(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,u=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"09ad":function(t,e,n){"use strict";var a=n("1e4b"),s=n.n(a);s.a},"1e4b":function(t,e,n){},"52ae":function(t,e,n){"use strict";var a=n("eb28"),s=n.n(a);s.a},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),s=n.n(a);s.a},6374:function(t,e,n){"use strict";var a=n("b93e"),s=n.n(a);s.a},"67ae":function(t,e,n){"use strict";var a=n("d5dc"),s=n.n(a);s.a},"9c0c":function(t,e,n){},b93e:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-link"),n("DesktopNavBar"),n("Landing")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"landing-page"},[n("DesktopLandingSearch"),n("Banner",{attrs:{students:5e3,employers:500,vacancies:1e4}})],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("h1",{staticClass:"banner__current-stats"},[t._v(" We are currently hosting "),n("span",[t._v(t._s(t.students))]),t._v(" students, "),n("span",[t._v(t._s(t.employers))]),t._v(" employers and "),n("span",[t._v(t._s(t.vacancies))]),t._v(" vacancies ")])])},l=[],p={name:"Banner",props:["students","employers","vacancies"],components:{}},d=p,u=(n("09ad"),n("2877")),_=Object(u["a"])(d,c,l,!1,null,null,null),f=_.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"desktop-landing-search"},[n("h1",{staticClass:"desktop-landing-search__header"},[t._v("Make your first career search")]),n("div",{staticClass:"desktop-landing-search__search-wrapper"},[n("div",{staticClass:"desktop-landing-search__input-box"},[n("div",{staticClass:"desktop-landing-search__job-type-radio"},[n("div",{ref:"jobTypeSelector",staticClass:"desktop-landing-search__job-type-radio__selector graduate-selector"}),n("div",{ref:"option1",staticClass:"desktop-landing-search__job-type-radio__option desktop-landing-search__job-type-radio__option__1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.jobType,expression:"jobType"}],staticClass:"desktop-landing-search__job-type-radio__option__radio-btn",attrs:{type:"radio",name:"job-type",id:"grad-type",value:"graduate",checked:""},domProps:{checked:t._q(t.jobType,"graduate")},on:{change:[function(e){t.jobType="graduate"},t.updateJobSelector]}}),n("p",{ref:"pGraduate"},[t._v("Graduate")])]),n("div",{ref:"option2",staticClass:"desktop-landing-search__job-type-radio__option desktop-landing-search__job-type-radio__option__2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.jobType,expression:"jobType"}],staticClass:"desktop-landing-search__job-type-radio__option__radio-btn",attrs:{type:"radio",name:"job-type",id:"intern-type",value:"intern"},domProps:{checked:t._q(t.jobType,"intern")},on:{change:[function(e){t.jobType="intern"},t.updateJobSelector]}}),n("p",{ref:"pIntern",staticClass:"p-blue"},[t._v("Intern")])])])]),n("div",{staticClass:"desktop-landing-search__input-box"},[n("label",{ref:"industryLabel",attrs:{for:"inputIndustry"}},[t._v("e.g. Job title, Industry, Company")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputIndustry,expression:"inputIndustry"}],ref:"inputIndustry",staticClass:"desktop-landing-search__input-box__input-search",attrs:{type:"text",id:"inputIndustry",placeholder:"What are you looking for?"},domProps:{value:t.inputIndustry},on:{input:[function(e){e.target.composing||(t.inputIndustry=e.target.value)},function(e){return t.showLabel("industry")}]}})]),n("div",{staticClass:"desktop-landing-search__input-box"},[n("label",{ref:"locationLabel",attrs:{for:"inputLocation"}},[t._v("e.g. London, North West England")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputLocation,expression:"inputLocation"}],ref:"inputLocation",staticClass:"desktop-landing-search__input-box__input-search",attrs:{type:"text",id:"inputLocation",placeholder:"Location"},domProps:{value:t.inputLocation},on:{input:[function(e){e.target.composing||(t.inputLocation=e.target.value)},function(e){return t.showLabel("location")}]}}),n("i",{staticClass:"fa fa-map-pin fa-3x compass-icon"})]),t._m(0)]),n("h1",{staticClass:"desktop-landing-search__header"},[t._v("Or choose from our recent popular keywords")]),t._m(1)])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"desktop-landing-search__input-box"},[n("button",{staticClass:"desktop-landing-search__btn-search"},[n("p",[t._v("Search")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"desktop-landing-search__one-click-wrapper"},[n("div",{staticClass:"grid-container"},[n("div",{staticClass:"grid-container__grid-item"},[n("p",[t._v("Engineering")])]),n("div",{staticClass:"grid-container__grid-item"},[n("p",[t._v("Accountancy")])]),n("div",{staticClass:"grid-container__grid-item"},[n("p",[t._v("Project Management")])]),n("div",{staticClass:"grid-container__grid-item"},[n("p",[t._v("Copywriting")])]),n("div",{staticClass:"grid-container__grid-item"},[n("p",[t._v("Teacher")])]),n("div",{staticClass:"grid-container__grid-item"},[n("p",[t._v("North West")])]),n("div",{staticClass:"grid-container__grid-item"},[n("p",[t._v("London")])]),n("div",{staticClass:"grid-container__grid-item"},[n("p",[t._v("England")])]),n("div",{staticClass:"grid-container__grid-item"},[n("p",[t._v("Scotland")])])])])}],y={name:"DesktopLandingSearch",data:function(){return{jobType:"graduate",inputIndustry:"",inputLocation:""}},methods:{showLabel:function(t){"industry"===t&&""!==this.inputIndustry?(this.$refs.industryLabel.style.opacity="1",this.$refs.industryLabel.style.top="-80%",this.$refs.inputIndustry.style.borderTopLeftRadius="0",this.$refs.inputIndustry.style.borderTopRightRadius="0"):"industry"===t&&""===this.inputIndustry?(this.$refs.industryLabel.style.top="0",this.$refs.industryLabel.style.opacity="0",this.$refs.inputIndustry.style.borderTopLeftRadius="2.5rem",this.$refs.inputIndustry.style.borderTopRightRadius="2.5rem"):"location"===t&&""!==this.inputLocation?(this.$refs.locationLabel.style.opacity="1",this.$refs.locationLabel.style.top="-80%",this.$refs.inputLocation.style.borderTopLeftRadius="0",this.$refs.inputLocation.style.borderTopRightRadius="0"):"location"===t&&""===this.inputLocation&&(this.$refs.locationLabel.style.top="0",this.$refs.locationLabel.style.opacity="0",this.$refs.inputLocation.style.borderTopLeftRadius="2.5rem",this.$refs.inputLocation.style.borderTopRightRadius="2.5rem")},updateJobSelector:function(){this.$refs.option1.getBoundingClientRect().left,this.$refs.option2.getBoundingClientRect().left;"graduate"===this.jobType?(this.$refs.jobTypeSelector.style.left="0",this.$refs.pGraduate.style.color="#FFFFFFff",this.$refs.pIntern.classList.add("p-blue")):"intern"===this.jobType&&(this.$refs.jobTypeSelector.style.left="50%",this.$refs.pIntern.classList.remove("p-blue"),this.$refs.pIntern.style.color="#FFFFFFff",this.$refs.pGraduate.style.color="#6734e9")}}},b=y,g=(n("6374"),Object(u["a"])(b,v,h,!1,null,null,null)),m=g.exports,k={name:"Landing",components:{Banner:f,DesktopLandingSearch:m}},C=k,L=(n("67ae"),Object(u["a"])(C,r,o,!1,null,null,null)),j=L.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"desktop-navbar"},[n("div",{staticClass:"desktop-navbar__logo"},[t._v("STU")]),n("nav",{staticClass:"desktop-navbar__nav"},[n("ul",{staticClass:"desktop-navbar__nav__ul"},[n("li",{staticClass:"desktop-navbar__nav__ul__li"},[n("p",[t._v("I'm an Employer")])]),n("li",{staticClass:"desktop-navbar__nav__ul__li"},[n("p",[t._v("Log In")])]),n("li",{staticClass:"desktop-navbar__nav__ul__li"},[n("p",[t._v("Sign Up")])])])])])}],x={name:"DesktopNavBar",components:{}},w=x,I=(n("52ae"),Object(u["a"])(w,$,T,!1,null,null,null)),S=I.exports,O={components:{DesktopNavBar:S,Landing:j}},R=O,E=(n("5c0b"),Object(u["a"])(R,s,i,!1,null,null,null)),F=E.exports,P=n("8c4f");a["a"].use(P["a"]);var N=[{path:"/",name:"landing",component:j},{path:"/index.html",redirect:"/"}],B=new P["a"]({routes:N}),D=B;a["a"].config.productionTip=!1,new a["a"]({router:D,render:function(t){return t(F)}}).$mount("#app")},d5dc:function(t,e,n){},eb28:function(t,e,n){}});
//# sourceMappingURL=app.36b6ef06.js.map