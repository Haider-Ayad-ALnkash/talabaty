(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{35:function(e,t,s){},36:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(29),l=s.n(n),i=(s(35),s(7)),r=s(8),j=s(10),d=s(9),b=s(12),h=s(2),m=(s(36),s.p+"static/media/Delivery.1aabf8c6.svg"),o=s(0),x=function(){return Object(o.jsx)("section",{className:"delevery text-center",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-sm-6  display-6",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-header",children:"\u062e\u062f\u0645\u0629 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 \u0627\u0644\u0645\u062c\u0627\u0646\u064a"}),Object(o.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(o.jsx)("li",{className:"list-group-item",children:"0782 755 1909"}),Object(o.jsx)("li",{className:"list-group-item",children:"0772 266 1909"})]})]})}),Object(o.jsx)("div",{className:"col-sm-6 py-2",children:Object(o.jsx)("img",{className:"img-fluid",src:m,alt:""})})]})})})},O=function(){return Object(o.jsx)("footer",{className:"text-center",children:Object(o.jsx)("p",{className:"lead",children:"Design By:Haider \xa92021 "})})},u=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{id:"carouselExampleCaptions",className:"carousel slide","data-bs-ride":"carousel",children:[Object(o.jsxs)("div",{className:"carousel-indicators",children:[Object(o.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(o.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(o.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(o.jsxs)("div",{className:"carousel-inner",children:[Object(o.jsxs)("div",{className:"carousel-item active",children:[Object(o.jsx)("img",{src:"/images/01.jpg",className:"d-block w-100",alt:"..."}),Object(o.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(o.jsx)("h3",{children:"\u0647\u0628\u0631\u0643\u0631 \u0644\u062d\u0645 \u0639\u0631\u0627\u0642\u064a"}),Object(o.jsx)("p",{children:"\u062c\u0631\u0628\u0647\u0627 \u0647\u0633\u0629 \u0648\u0639\u064a\u0634 \u0645\u062a\u0639\u0629 \u0627\u0644\u0645\u0630\u0627\u0642 "})]})]}),Object(o.jsxs)("div",{className:"carousel-item",children:[Object(o.jsx)("img",{src:"/images/01.jpg",className:"d-block w-100",alt:"..."}),Object(o.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(o.jsx)("h5",{children:"Second slide label"}),Object(o.jsx)("p",{children:"Some representative placeholder content for the second slide."})]})]}),Object(o.jsxs)("div",{className:"carousel-item",children:[Object(o.jsx)("img",{src:"/images/01.jpg",className:"d-block w-100",alt:"..."}),Object(o.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(o.jsx)("h5",{children:"Third slide label"}),Object(o.jsx)("p",{children:"Some representative placeholder content for the third slide."})]})]})]}),Object(o.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev",children:[Object(o.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(o.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(o.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next",children:[Object(o.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(o.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})})},p=s(13),N=s.n(p),g=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(i.a)(this,s);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={services:[]},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;N.a.get("data.json").then((function(t){e.setState({services:t.data.service})}))}},{key:"render",value:function(){var e=this.state.services.map((function(e){return Object(o.jsx)("div",{className:"col-sm-6 col-md-4 ",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)(b.b,{to:e.link,children:Object(o.jsx)("img",{src:e.image,className:"card-img-top",alt:"..."})}),Object(o.jsx)("div",{className:"card-body",children:Object(o.jsx)("h3",{className:"card-text",children:e.body})})]})},e.id)}));return Object(o.jsx)("section",{className:"services py-4",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row text-center",children:[e,Object(o.jsx)("div",{className:"py-2"}),Object(o.jsxs)("div",{className:"col-sm-6 col-md-4 card",children:[Object(o.jsx)("img",{src:"/images/humbrger.jpg",className:"card-img-top",alt:"..."}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:"\u0633\u0646\u062f\u0648\u064a\u0634"}),Object(o.jsx)("h4",{className:"card-text",children:"\u0637\u0639\u0645 \u0627\u0644\u0647\u0645\u0628\u0631\u0643\u0631 \u0639\u062f\u0646\u0627 \u0639\u0627\u0644\u0645 \u062b\u0627\u0646\u064a  \u0645\u0630\u0627\u0642 \u0634\u064a \u062e\u064a\u0627\u0644\u064a \u0634\u0646\u0648 \u0645\u0646\u062a\u0638\u0631 \u0623\u0637\u0644\u0628 \u0647\u0633\u0629 "})]}),Object(o.jsxs)("ul",{className:"list-group list-group-flush ",children:[Object(o.jsxs)("h3",{className:"list-group-item",children:["  \u0628\u0631\u0643\u0631 \u0639\u0631\u0627\u0642\u064a ",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 3000"})]}),Object(o.jsxs)("h3",{className:"list-group-item",children:["  \u0628\u0631\u0643\u0631 \u0644\u062d\u0645 \u062f\u0628\u0644 ",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 4000"})]}),Object(o.jsxs)("h3",{className:"list-group-item",children:["  \u0628\u0631\u0643\u0631 \u0644\u062d\u0645 \u0644\u0627\u062c\u0628\u0646 ",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 3500"})]}),Object(o.jsxs)("h3",{className:"list-group-item",children:["  \u0628\u0631\u0643\u0631 \u062f\u062c\u0627\u062c ",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 2500"})]}),Object(o.jsxs)("h3",{className:"list-group-item",children:["  \u0633\u0643\u0627\u0644\u0648\u0628 \u062f\u062c\u0627\u062c ",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 2500"})]}),Object(o.jsxs)("h3",{className:"list-group-item",children:["  \u0633\u0643\u0627\u0644\u0648\u0628 \u062f\u062c\u0627\u062c \u0628\u0627\u0644\u062c\u0628\u0646 ",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 3500"})]})]})]}),Object(o.jsxs)("div",{className:"col-sm-6 col-md-4 card",children:[Object(o.jsx)("img",{src:"/images/sach.jpg",className:"card-img-top",alt:"..."}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h2",{className:"card-title",children:"\u0633\u0646\u062f\u0648\u064a\u0634"}),Object(o.jsxs)("h4",{className:"card-text",children:["\u0637\u0639\u0645 \u0627\u0644\u0635\u0627\u062c \u0639\u062f\u0646\u0627 \u064a\u0648\u062f\u064a\u0643 \u064a\u0627\u062e\u0630\u0643 \u0633\u0641\u0631\u0629 \u0628\u0627\u062c\u0648\u0627\u0621 \u0644\u0628\u0646\u0627\u0646 \u0634\u0646\u0648 \u0645\u0646\u062a\u0638\u0631 ",Object(o.jsx)("span",{children:"\u0623\u0637\u0644\u0628 \u0647\u0633\u0629"})," "]})]}),Object(o.jsxs)("ul",{className:"list-group list-group-flush ",children:[Object(o.jsxs)("h3",{className:"list-group-item",children:["  \u0635\u0627\u062c \u062f\u062c\u0627\u062c ",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 2000"})]}),Object(o.jsxs)("h3",{className:"list-group-item",children:["  \u0635\u0627\u062c  \u0641\u0627\u0647\u064a\u062a\u0627 \u0644\u062d\u0645 ",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 2000"})]}),Object(o.jsxs)("h3",{className:"list-group-item",children:[" \u0635\u0627\u062c  \u0641\u0627\u0647\u064a\u062a\u0627 \u062f\u062c\u0627\u062c",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 2000"})]}),Object(o.jsxs)("h3",{className:"list-group-item",children:["  \u0635\u0627\u062c \u0641\u0644\u0627\u0641\u0644 ",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 1000"})]}),Object(o.jsxs)("h3",{className:"list-group-item",children:["  \u0635\u0627\u062c \u0628\u0631\u0643\u0631 \u0644\u062d\u0645 ",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 3000"})]}),Object(o.jsxs)("h3",{className:"list-group-item",children:["  \u0635\u0627\u062c \u0628\u0631\u0643\u0631 \u062f\u062c\u0627\u062c  ",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 2500"})]})]})]}),Object(o.jsxs)("div",{className:"col-sm-6 col-md-4 card",children:[Object(o.jsx)("img",{src:"/images/mkabalat.jpg",className:"card-img-top",alt:"..."}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:"\u0627\u0644\u0645\u0642\u0628\u0644\u0627\u062a"}),Object(o.jsxs)("h4",{className:"card-text",children:["\u0637\u0639\u0645 \u0627\u0644\u0645\u0642\u0628\u0644\u0627\u062a \u0639\u062f\u0646\u0627 \u062c\u0646\u0627\u0627\u0627\u0627\u0627\u0627\u0627\u0627\u0646 \u0634\u064a \u062e\u064a\u0627\u0644\u064a \u0634\u0646\u0648 \u0645\u0646\u062a\u0638\u0631   ",Object(o.jsx)("span",{children:"\u0623\u0637\u0644\u0628 \u0647\u0633\u0629"})]})]}),Object(o.jsxs)("ul",{className:"list-group list-group-flush ",children:[Object(o.jsxs)("h3",{className:"list-group-item",children:["  \u0645\u0642\u0628\u0644\u0627\u062a \u0635\u063a\u064a\u0631 ",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 2000"})]}),Object(o.jsxs)("h3",{className:"list-group-item",children:["  \u0645\u0642\u0628\u0644\u0627\u062a \u0648\u0633\u0637  ",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 3000"})]}),Object(o.jsxs)("h3",{className:"list-group-item",children:[" \u0645\u0642\u0628\u0644\u0627\u062a \u0643\u0628\u064a\u0631",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 4000"})]}),Object(o.jsxs)("h3",{className:"list-group-item",children:["  \u0645\u0642\u0628\u0644\u0627\u062a \u0639\u0627\u0626\u0644\u064a  ",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 5000"})]}),Object(o.jsxs)("h3",{className:"list-group-item",children:[" \u0645\u0634\u0631\u0648\u0628\u0627\u062a \u063a\u0627\u0632\u064a\u0629 ",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 500"})]}),Object(o.jsxs)("h3",{className:"list-group-item",children:[" \u0645\u0627\u0621  ",Object(o.jsx)("span",{className:"bg-primary text-white",children:"IQ 250"})]})]})]})]})})})}}]),s}(c.Component),v=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{}),Object(o.jsx)(g,{})]})}}]),s}(c.Component),y=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(i.a)(this,s);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={menu:[]},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;N.a.get("data.json").then((function(t){e.setState({menu:t.data.pizaa})}))}},{key:"render",value:function(){var e=this.state.menu.map((function(e){return Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.small}),Object(o.jsx)("td",{children:e.midum}),Object(o.jsx)("td",{children:e.larg})]})},e.id)}));return Object(o.jsx)("section",{className:"menu",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row text-center",children:[Object(o.jsx)("h2",{children:"\u0634\u0648\u0641 \u0627\u0644\u0627\u0633\u0639\u0627\u0631  \u062d\u0627\u0631 \u0648\u0645\u0643\u0633\u0628 \u0648\u0631\u062e\u064a\u0635"}),Object(o.jsx)("h2",{className:"badge bg-danger",children:"\u0628\u064a\u062a\u0632\u0627"}),Object(o.jsxs)("table",{class:"table table-striped",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"\u0627\u0633\u0645 \u0627\u0644\u0648\u062c\u0628\u0629"}),Object(o.jsx)("th",{children:"\u0635\u063a\u064a\u0631"}),Object(o.jsx)("th",{children:"\u0648\u0633\u0637"}),Object(o.jsx)("th",{children:"\u0639\u0627\u0626\u0644\u064a"})]})}),e]})]})})})}}]),s}(c.Component),f=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(i.a)(this,s);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={menu:[]},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;N.a.get("data.json").then((function(t){e.setState({menu:t.data.mnakesh})}))}},{key:"render",value:function(){var e=this.state.menu.map((function(e){return Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.small}),Object(o.jsx)("td",{children:e.midum}),Object(o.jsx)("td",{children:e.larg})]})},e.id)}));return Object(o.jsx)("section",{className:"menu",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row text-center",children:[Object(o.jsx)("h2",{children:"\u0634\u0648\u0641 \u0627\u0644\u0627\u0633\u0639\u0627\u0631  \u062d\u0627\u0631 \u0648\u0645\u0643\u0633\u0628 \u0648\u0631\u062e\u064a\u0635"}),Object(o.jsx)("h2",{className:"badge bg-danger",children:"\u0645\u0646\u0627\u0642\u064a\u0634"}),Object(o.jsxs)("table",{className:"table table-striped",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"\u0627\u0633\u0645 \u0627\u0644\u0648\u062c\u0628\u0629"}),Object(o.jsx)("th",{children:"\u0635\u063a\u064a\u0631"}),Object(o.jsx)("th",{children:"\u0648\u0633\u0637"}),Object(o.jsx)("th",{children:"\u0639\u0627\u0626\u0644\u064a"})]})}),e]})]})})})}}]),s}(c.Component),w=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(i.a)(this,s);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={menu:[]},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;N.a.get("data.json").then((function(t){e.setState({menu:t.data.lzania})}))}},{key:"render",value:function(){var e=this.state.menu.map((function(e){return Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.small}),Object(o.jsx)("td",{children:e.midum}),Object(o.jsx)("td",{children:e.larg})]})},e.id)}));return Object(o.jsx)("section",{className:"menu",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row text-center",children:[Object(o.jsx)("h2",{children:"\u0634\u0648\u0641 \u0627\u0644\u0627\u0633\u0639\u0627\u0631  \u062d\u0627\u0631 \u0648\u0645\u0643\u0633\u0628 \u0648\u0631\u062e\u064a\u0635"}),Object(o.jsx)("h2",{className:"badge bg-danger",children:"\u0644\u0632\u0627\u0646\u064a\u0627"}),Object(o.jsxs)("table",{className:"table table-striped",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"\u0627\u0633\u0645 \u0627\u0644\u0648\u062c\u0628\u0629"}),Object(o.jsx)("th",{children:"\u0635\u063a\u064a\u0631"}),Object(o.jsx)("th",{children:"\u0648\u0633\u0637"}),Object(o.jsx)("th",{children:"\u0639\u0627\u0626\u0644\u064a"})]})}),e]})]})})})}}]),s}(c.Component),k=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(b.b,{className:"navbar-brand",to:"/",children:Object(o.jsx)("img",{src:"/images/logo.png"})}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse justify-content-center display-6",id:"navbarNavDropdown",children:Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/",children:"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(b.b,{className:"nav-link",to:"/pizaa",children:"\u0628\u064a\u062a\u0632\u0627"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(b.b,{className:"nav-link",to:"/mnakesh",children:"\u0645\u0646\u0627\u0642\u064a\u0634"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(b.b,{className:"nav-link",to:"/lzania",children:"\u0644\u0632\u0627\u0646\u064a\u0627"})})]})})]})})})},I=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(o.jsxs)(b.a,{children:[Object(o.jsx)(k,{}),Object(o.jsx)(h.a,{exact:!0,path:"/",component:v}),Object(o.jsx)(h.a,{exact:!0,path:"/pizaa",component:y}),Object(o.jsx)(h.a,{exact:!0,path:"/mnakesh",component:f}),Object(o.jsx)(h.a,{exact:!0,path:"/lzania",component:w}),Object(o.jsx)(x,{}),Object(o.jsx)(O,{})]})}}]),s}(c.Component),Q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,62)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,l=t.getTTFB;s(e),c(e),a(e),n(e),l(e)}))};l.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root")),Q()}},[[61,1,2]]]);
//# sourceMappingURL=main.b937b54c.chunk.js.map