(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,c,t){},37:function(e,c,t){},62:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),l=t(30),n=t.n(l),i=(t(36),t(9)),j=t(10),r=t(13),d=t(12),b=t(8),m=t(2),h=(t(37),t.p+"static/media/Delivery.1aabf8c6.svg"),O=t(0),o=function(){return Object(O.jsx)("section",{className:"delevery text-center",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-sm-6  display-6",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"card-header",children:"\u062e\u062f\u0645\u0629 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 \u0627\u0644\u0645\u062c\u0627\u0646\u064a"}),Object(O.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(O.jsx)("li",{className:"list-group-item",children:"0782 755 1909"}),Object(O.jsx)("li",{className:"list-group-item",children:"0772 266 1909"})]})]})}),Object(O.jsx)("div",{className:"col-sm-6 py-2",children:Object(O.jsx)("img",{className:"img-fluid",src:h,alt:""})})]})})})},x=function(){return Object(O.jsx)("footer",{className:"text-center",children:Object(O.jsx)("p",{className:"lead",children:"Design By:Haider \xa92021 "})})},p=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{id:"carouselExampleCaptions",className:"carousel slide","data-bs-ride":"carousel",children:[Object(O.jsxs)("div",{className:"carousel-indicators",children:[Object(O.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(O.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(O.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(O.jsxs)("div",{className:"carousel-inner",children:[Object(O.jsxs)("div",{className:"carousel-item active",children:[Object(O.jsx)("img",{src:"/images/01.jpg",className:"d-block w-100",alt:"..."}),Object(O.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(O.jsx)("h3",{children:"\u0647\u0628\u0631\u0643\u0631 \u0644\u062d\u0645 \u0639\u0631\u0627\u0642\u064a"}),Object(O.jsx)("p",{children:"\u062c\u0631\u0628\u0647\u0627 \u0647\u0633\u0629 \u0648\u0639\u064a\u0634 \u0645\u062a\u0639\u0629 \u0627\u0644\u0645\u0630\u0627\u0642 "})]})]}),Object(O.jsxs)("div",{className:"carousel-item",children:[Object(O.jsx)("img",{src:"/images/01.jpg",className:"d-block w-100",alt:"..."}),Object(O.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(O.jsx)("h5",{children:"Second slide label"}),Object(O.jsx)("p",{children:"Some representative placeholder content for the second slide."})]})]}),Object(O.jsxs)("div",{className:"carousel-item",children:[Object(O.jsx)("img",{src:"/images/01.jpg",className:"d-block w-100",alt:"..."}),Object(O.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(O.jsx)("h5",{children:"Third slide label"}),Object(O.jsx)("p",{children:"Some representative placeholder content for the third slide."})]})]})]}),Object(O.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev",children:[Object(O.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(O.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(O.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next",children:[Object(O.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(O.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})})},u=t(11),N=t.n(u),v=function(e){Object(r.a)(t,e);var c=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return(e=c.call.apply(c,[this].concat(a))).state={services:[]},e}return Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("js/data.json").then((function(c){e.setState({services:c.data.service})}))}},{key:"render",value:function(){var e=this.state.services.map((function(e){return Object(O.jsx)("div",{className:"col-sm-6 col-md-4 ",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)(b.b,{to:e.link,children:Object(O.jsx)("img",{src:e.image,className:"card-img-top",alt:"..."})}),Object(O.jsx)("div",{className:"card-body",children:Object(O.jsx)("h3",{className:"card-text",children:e.body})})]})},e.id)}));return Object(O.jsx)("section",{className:"services py-4",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row text-center",children:[e,Object(O.jsx)("div",{className:"py-2"}),Object(O.jsxs)("div",{className:"col-sm-6 col-md-4 card",children:[Object(O.jsx)("img",{src:"/Images/humbrger.jpg",className:"card-img-top",alt:"..."}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h5",{className:"card-title",children:"\u0633\u0646\u062f\u0648\u064a\u0634"}),Object(O.jsx)("h4",{className:"card-text",children:"\u0637\u0639\u0645 \u0627\u0644\u0647\u0645\u0628\u0631\u0643\u0631 \u0639\u062f\u0646\u0627 \u0639\u0627\u0644\u0645 \u062b\u0627\u0646\u064a  \u0645\u0630\u0627\u0642 \u0634\u064a \u062e\u064a\u0627\u0644\u064a \u0634\u0646\u0648 \u0645\u0646\u062a\u0638\u0631 \u0623\u0637\u0644\u0628 \u0647\u0633\u0629 "})]}),Object(O.jsxs)("ul",{className:"list-group list-group-flush ",children:[Object(O.jsxs)("h3",{className:"list-group-item",children:["  \u0628\u0631\u0643\u0631 \u0639\u0631\u0627\u0642\u064a ",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 3000"})]}),Object(O.jsxs)("h3",{className:"list-group-item",children:["  \u0628\u0631\u0643\u0631 \u0644\u062d\u0645 \u062f\u0628\u0644 ",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 4000"})]}),Object(O.jsxs)("h3",{className:"list-group-item",children:["  \u0628\u0631\u0643\u0631 \u0644\u062d\u0645 \u0644\u0627\u062c\u0628\u0646 ",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 3500"})]}),Object(O.jsxs)("h3",{className:"list-group-item",children:["  \u0628\u0631\u0643\u0631 \u062f\u062c\u0627\u062c ",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 2500"})]}),Object(O.jsxs)("h3",{className:"list-group-item",children:["  \u0633\u0643\u0627\u0644\u0648\u0628 \u062f\u062c\u0627\u062c ",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 2500"})]}),Object(O.jsxs)("h3",{className:"list-group-item",children:["  \u0633\u0643\u0627\u0644\u0648\u0628 \u062f\u062c\u0627\u062c \u0628\u0627\u0644\u062c\u0628\u0646 ",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 3500"})]})]})]}),Object(O.jsxs)("div",{className:"col-sm-6 col-md-4 card",children:[Object(O.jsx)("img",{src:"/Images/sach.jpg",className:"card-img-top",alt:"..."}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h2",{className:"card-title",children:"\u0635\u0627\u062c"}),Object(O.jsxs)("h4",{className:"card-text",children:["\u0637\u0639\u0645 \u0627\u0644\u0635\u0627\u062c \u0639\u062f\u0646\u0627 \u064a\u0648\u062f\u064a\u0643 \u064a\u0627\u062e\u0630\u0643 \u0633\u0641\u0631\u0629 \u0628\u0627\u062c\u0648\u0627\u0621 \u0644\u0628\u0646\u0627\u0646 \u0634\u0646\u0648 \u0645\u0646\u062a\u0638\u0631 ",Object(O.jsx)("span",{children:"\u0623\u0637\u0644\u0628 \u0647\u0633\u0629"})," "]})]}),Object(O.jsxs)("ul",{className:"list-group list-group-flush ",children:[Object(O.jsxs)("h3",{className:"list-group-item",children:["  \u0635\u0627\u062c \u062f\u062c\u0627\u062c ",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 2000"})]}),Object(O.jsxs)("h3",{className:"list-group-item",children:["  \u0635\u0627\u062c  \u0641\u0627\u0647\u064a\u062a\u0627 \u0644\u062d\u0645 ",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 2000"})]}),Object(O.jsxs)("h3",{className:"list-group-item",children:[" \u0635\u0627\u062c  \u0641\u0627\u0647\u064a\u062a\u0627 \u062f\u062c\u0627\u062c",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 2000"})]}),Object(O.jsxs)("h3",{className:"list-group-item",children:["  \u0635\u0627\u062c \u0641\u0644\u0627\u0641\u0644 ",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 1000"})]}),Object(O.jsxs)("h3",{className:"list-group-item",children:["  \u0635\u0627\u062c \u0628\u0631\u0643\u0631 \u0644\u062d\u0645 ",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 3000"})]}),Object(O.jsxs)("h3",{className:"list-group-item",children:["  \u0635\u0627\u062c \u0628\u0631\u0643\u0631 \u062f\u062c\u0627\u062c  ",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 2500"})]})]})]}),Object(O.jsxs)("div",{className:"col-sm-6 col-md-4 card",children:[Object(O.jsx)("img",{src:"/Images/mkabalat.jpg",className:"card-img-top",alt:"..."}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h5",{className:"card-title",children:"\u0627\u0644\u0645\u0642\u0628\u0644\u0627\u062a"}),Object(O.jsxs)("h4",{className:"card-text",children:["\u0637\u0639\u0645 \u0627\u0644\u0645\u0642\u0628\u0644\u0627\u062a \u0639\u062f\u0646\u0627 \u062c\u0646\u0627\u0627\u0627\u0627\u0627\u0627\u0627\u0627\u0646 \u0634\u064a \u062e\u064a\u0627\u0644\u064a \u0634\u0646\u0648 \u0645\u0646\u062a\u0638\u0631   ",Object(O.jsx)("span",{children:"\u0623\u0637\u0644\u0628 \u0647\u0633\u0629"})]})]}),Object(O.jsxs)("ul",{className:"list-group list-group-flush ",children:[Object(O.jsxs)("h3",{className:"list-group-item",children:["  \u0645\u0642\u0628\u0644\u0627\u062a \u0635\u063a\u064a\u0631 ",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 2000"})]}),Object(O.jsxs)("h3",{className:"list-group-item",children:["  \u0645\u0642\u0628\u0644\u0627\u062a \u0648\u0633\u0637  ",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 3000"})]}),Object(O.jsxs)("h3",{className:"list-group-item",children:[" \u0645\u0642\u0628\u0644\u0627\u062a \u0643\u0628\u064a\u0631",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 4000"})]}),Object(O.jsxs)("h3",{className:"list-group-item",children:["  \u0645\u0642\u0628\u0644\u0627\u062a \u0639\u0627\u0626\u0644\u064a  ",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 5000"})]}),Object(O.jsxs)("h3",{className:"list-group-item",children:[" \u0645\u0634\u0631\u0648\u0628\u0627\u062a \u063a\u0627\u0632\u064a\u0629 ",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 500"})]}),Object(O.jsxs)("h3",{className:"list-group-item",children:[" \u0645\u0627\u0621  ",Object(O.jsx)("span",{className:"bg-primary text-white",children:"IQ 250"})]})]})]})]})})})}}]),t}(s.Component),g=function(e){Object(r.a)(t,e);var c=Object(d.a)(t);function t(){return Object(i.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(p,{}),Object(O.jsx)(v,{})]})}}]),t}(s.Component),I=t(16);function A(){var e=Object(s.useState)([]),c=Object(I.a)(e,2),t=c[0],a=c[1];Object(s.useEffect)((function(){N.a.get("js/data.json").then((function(e){a(e.data.pizaa)}))}),[]);var l=t.map((function(e){return Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.small}),Object(O.jsx)("td",{children:e.midum}),Object(O.jsx)("td",{children:e.larg})]})},e.id)}));return Object(O.jsx)("div",{children:Object(O.jsx)("section",{className:"menu",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row text-center",children:[Object(O.jsx)("h2",{children:" \u0634\u0648\u0641 \u0627\u0644\u0627\u0633\u0639\u0627\u0631 \u062d\u0627\u0631 \u0648\u0645\u0643\u0633\u0628 \u0648\u0631\u062e\u064a\u0635 "}),Object(O.jsx)("h2",{className:"badge bg-danger",children:"\u0628\u064a\u062a\u0632\u0627"}),Object(O.jsxs)("table",{className:"table table-striped",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\u0627\u0633\u0645 \u0627\u0644\u0648\u062c\u0628\u0629"}),Object(O.jsx)("th",{children:"\u0635\u063a\u064a\u0631"}),Object(O.jsx)("th",{children:"\u0648\u0633\u0637"}),Object(O.jsx)("th",{children:"\u0639\u0627\u0626\u0644\u064a"})]})}),l]})]})})})})}var y=function(e){Object(r.a)(t,e);var c=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return(e=c.call.apply(c,[this].concat(a))).state={menu:[]},e}return Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("js/data.json").then((function(c){e.setState({menu:c.data.mnakesh})}))}},{key:"render",value:function(){var e=this.state.menu.map((function(e){return Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.small}),Object(O.jsx)("td",{children:e.midum}),Object(O.jsx)("td",{children:e.larg})]})},e.id)}));return Object(O.jsx)("section",{className:"menu",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row text-center",children:[Object(O.jsx)("h2",{children:"\u0634\u0648\u0641 \u0627\u0644\u0627\u0633\u0639\u0627\u0631  \u062d\u0627\u0631 \u0648\u0645\u0643\u0633\u0628 \u0648\u0631\u062e\u064a\u0635"}),Object(O.jsx)("h2",{className:"badge bg-danger",children:"\u0645\u0646\u0627\u0642\u064a\u0634"}),Object(O.jsxs)("table",{className:"table table-striped",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\u0627\u0633\u0645 \u0627\u0644\u0648\u062c\u0628\u0629"}),Object(O.jsx)("th",{children:"\u0635\u063a\u064a\u0631"}),Object(O.jsx)("th",{children:"\u0648\u0633\u0637"}),Object(O.jsx)("th",{children:"\u0639\u0627\u0626\u0644\u064a"})]})}),e]})]})})})}}]),t}(s.Component);function k(){var e=Object(s.useState)([]),c=Object(I.a)(e,2),t=c[0],a=c[1];Object(s.useEffect)((function(){N.a.get("js/data.json").then((function(e){a(e.data.lzania)}))}),[]);var l=t.map((function(e){return Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.small}),Object(O.jsx)("td",{children:e.midum}),Object(O.jsx)("td",{children:e.larg})]})},e.id)}));return Object(O.jsx)("div",{children:Object(O.jsx)("section",{className:"menu",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row text-center",children:[Object(O.jsx)("h2",{children:"\u0634\u0648\u0641 \u0627\u0644\u0627\u0633\u0639\u0627\u0631  \u062d\u0627\u0631 \u0648\u0645\u0643\u0633\u0628 \u0648\u0631\u062e\u064a\u0635"}),Object(O.jsx)("h2",{className:"badge bg-danger",children:"\u0644\u0632\u0627\u0646\u064a\u0627"}),Object(O.jsxs)("table",{className:"table table-striped",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\u0627\u0633\u0645 \u0627\u0644\u0648\u062c\u0628\u0629"}),Object(O.jsx)("th",{children:"\u0635\u063a\u064a\u0631"}),Object(O.jsx)("th",{children:"\u0648\u0633\u0637"}),Object(O.jsx)("th",{children:"\u0639\u0627\u0626\u0644\u064a"})]})}),l]})]})})})})}var Z=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",children:Object(O.jsxs)("div",{className:"container-fluid",children:[Object(O.jsx)(b.b,{className:"navbar-brand",to:"/",children:Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABMCAYAAAGE6aChAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHY2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyMjhmYTI3Yi00ZjA4LTY2NGUtOGNlNy0zZDM5NDM2YWVkYzMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZGNiZTM2ODItZmFmYy00YzRlLThlN2MtMmI2ZDg4NGYxODQzIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IkIwNDIyRTQxNERCNjc2M0VGMDA0MzQxRjVDMzlDQjY3IiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IiIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDgtMjhUMTQ6MjA6MTErMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA4LTI4VDE0OjMxOjE0KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA4LTI4VDE0OjMxOjE0KzAzOjAwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmI4NzU1NmItNGIzYy04MjQ1LWI2NzItMzNmMzdlOTlhNTI2IiBzdEV2dDp3aGVuPSIyMDIxLTA4LTI4VDE0OjMxOjE0KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmRjYmUzNjgyLWZhZmMtNGM0ZS04ZTdjLTJiNmQ4ODRmMTg0MyIgc3RFdnQ6d2hlbj0iMjAyMS0wOC0yOFQxNDozMToxNCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYjg3NTU2Yi00YjNjLTgyNDUtYjY3Mi0zM2YzN2U5OWE1MjYiIHN0UmVmOmRvY3VtZW50SUQ9IkIwNDIy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"})}),Object(O.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(O.jsx)("span",{className:"navbar-toggler-icon"})}),Object(O.jsx)("div",{className:"collapse navbar-collapse justify-content-center display-6",id:"navbarNavDropdown",children:Object(O.jsxs)("ul",{className:"navbar-nav",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/",children:"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(b.b,{className:"nav-link",to:"/pizaa",children:"\u0628\u064a\u062a\u0632\u0627"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(b.b,{className:"nav-link",to:"/mnakesh",children:"\u0645\u0646\u0627\u0642\u064a\u0634"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(b.b,{className:"nav-link",to:"/lzania",children:"\u0644\u0632\u0627\u0646\u064a\u0627"})})]})})]})})})},S=function(e){Object(r.a)(t,e);var c=Object(d.a)(t);function t(){return Object(i.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(O.jsxs)(b.a,{children:[Object(O.jsx)(Z,{}),Object(O.jsx)(m.a,{exact:!0,path:"/",component:g}),Object(O.jsx)(m.a,{exact:!0,path:"/pizaa",component:A}),Object(O.jsx)(m.a,{exact:!0,path:"/mnakesh",component:y}),Object(O.jsx)(m.a,{exact:!0,path:"/lzania",component:k}),Object(O.jsx)(o,{}),Object(O.jsx)(x,{})]})}}]),t}(s.Component),M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,l=c.getLCP,n=c.getTTFB;t(e),s(e),a(e),l(e),n(e)}))};n.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),M()}},[[62,1,2]]]);
//# sourceMappingURL=main.d1493709.chunk.js.map