(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3756)}])},3756:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Y}});var i=a(5893),l=a(9008),s=a.n(l),d=a(4924),T=a(6042),o=a(9396),n=a(797),u=a(2095),r=a.n(u),p=a(6060),c=a.n(p),v=a(2610);function x(e){var t=e.gridCells;return(0,i.jsxs)("div",{className:c().gridRow,children:[(0,i.jsx)("button",{className:c().dragButton,children:(0,i.jsx)(v.Z,{})}),t]})}var F=a(7294),y=a(3284),f=a.n(y);function h(e){var t=e.text;return(0,i.jsx)("div",{className:f().tooltipContainer,children:(0,i.jsx)("p",{className:f().tooltipText,onClick:function(e){return e.stopPropagation()},children:t})})}var S=a(7801),_=a.n(S);function g(e){var t=e.gridEditElement,a=e.submitAction,l=e.cancelAction,s=e.textValue,d=(0,F.useState)(!0),T=d[0],o=d[1],n=(0,F.useState)(!1),u=n[0],r=n[1],p=function(e){e.stopPropagation(),a&&o(!1)},c=function(e){27===e.keyCode&&(o(!0),l&&l())},v=function(e){e.preventDefault(),o(!0),a()},x=function(e){var t=e.target;t.offsetHeight<t.scrollHeight&&r(!0),t.parentNode.addEventListener("mouseleave",function(){return r(!1)},{once:!0})},y=(0,i.jsxs)("div",{className:_().gridCellContainer,onClick:p,children:[(0,i.jsx)("p",{className:_().displayText,onMouseOver:x,children:s}),u&&(0,i.jsx)(h,{text:s})]}),f=function(e){v(e)},S=(0,i.jsx)("div",{className:"".concat(_().gridCellContainer," ").concat(_().gridEditMode),onClick:f,children:(0,i.jsx)("form",{onKeyDown:c,onSubmit:v,onClick:function(e){return e.stopPropagation()},children:t})});return T?y:S}var k=a(5433),m=a.n(k);function N(e){var t=e.initialGridValue,a=e.fieldData,l=e.updateGridData,s=e.options,d=(0,F.useState)(t),T=d[0],o=d[1],n=function(){l(a.objID,a.fieldName,T)},u=function(e){console.log(e.target.value),o(e.target.value),e.target.parentNode.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0}))},r=s.map(function(e){return(0,i.jsx)("option",{value:e,disabled:e===T,children:e},e)}),p=(0,i.jsx)("select",{onChange:u,autoFocus:!0,children:r});return(0,i.jsx)("div",{className:m().picklistCell,children:(0,i.jsx)(g,{gridEditElement:p,submitAction:n,textValue:T})})}var w=a(6392),C=a.n(w);function j(e){var t=e.initialGridValue,a=e.updateGridData,l=e.fieldData,s=(0,F.useState)("Test"),d=s[0],T=s[1],o=(0,F.useState)(t),n=o[0],u=o[1],r=function(){a(l.objID,l.fieldName,n),T(n)},p=function(e){u(e.target.value)};return(0,i.jsx)("div",{className:C().textCell,children:(0,i.jsx)(g,{gridEditElement:(0,i.jsx)("input",{value:n,onChange:p,autoFocus:!0}),cancelAction:function(){return u(d)},submitAction:r,textValue:n})})}var H=a(8079),O=a.n(H),W=a(1041),P=a.n(W),D=a(5877);function b(e){var t=e.fieldData,a=e.order,l=e.initDragOver,s=e.dragOver,d=e.dragDrop,T=e.dragEnd,o=e.dragActive,n=e.setDragActive,u=e.sortByField,r=e.isSorting,p=e.updateActiveSort,c=(0,F.useState)(void 0),v=c[0],x=c[1],y=(0,F.useState)(!1),f=y[0],h=y[1],S=function(){u(t.name,v),x(!v),p(t.name)};(0,F.useEffect)(function(){r||x(void 0)},[r]),(0,F.useEffect)(function(){r&&S()},[]);var _=function(e){n(!0),h(!0),l(a),e.dataTransfer.setData("text/plain",a),e.dataTransfer.effectAllowed="move"},k=function(e){d(e,a)},m=function(e){e.preventDefault(),e.stopPropagation(),s(a)},N=function(){n(!1),h(!1),T()};return(0,i.jsxs)("div",{className:P().headerCell,onDragStart:_,onDragOver:m,onDrop:k,onDragEnd:N,draggable:!0,children:[(0,i.jsx)(g,{textValue:t.label}),(0,i.jsx)("button",{className:"".concat(P().sortButton," ").concat(r&&P().highlightButton," ").concat(v&&P().flipButton),onClick:S,children:(0,i.jsx)(D.Z,{fontSize:"small"})}),f&&(0,i.jsx)("span",{className:P().isDragging}),o&&(0,i.jsx)("span",{className:P().dragTarget})]})}var E=a(6540);function G(e){var t=e.headerData,a=e.setHeaderData,l=e.sortByField,s=(0,F.useState)(t),d=s[0],T=s[1],o=(0,F.useState)(),u=o[0],r=o[1],p=(0,F.useState)(!1),c=p[0],v=p[1],x=function(e){if(u!==e){var i=(0,n.Z)(t),l=i.splice(u,1)[0];i.splice(e,0,l),r(e),a(i)}},y=function(){r(),T(t)},f=function(){u&&(a(d),r())},h=(0,F.useState)(),S=h[0],_=h[1],g=function(e){_(e)},k=function(){alert(t.filter(function(e){return!e.display})),a((0,n.Z)(t).concat([{label:"Test Six",name:"testFieldSix",dataType:"text",colWidth:"250px"}]))},m=function(e){a((0,n.Z)(t).splice(e,1))},N=t.filter(function(e){return e.display}).map(function(e,t){return(0,i.jsx)(b,{fieldData:e,order:t,initDragOver:r,dragOver:x,dragDrop:y,dragEnd:f,dragActive:c,setDragActive:v,sortByField:l,isSorting:S===e.name,updateActiveSort:g,deleteColumn:m},e.name)});return(0,i.jsxs)("div",{className:O().headerRow,children:[N,(0,i.jsx)("button",{className:O().addColButton,onClick:k,children:(0,i.jsx)(E.Z,{})})]})}var B=[{label:"ID",name:"id",colWidth:"200px",display:!0},{label:"Test One",name:"testFieldOne",dataType:"text",colWidth:"200px",display:!0},{label:"Test Two",name:"testFieldTwo",dataType:"picklist",colWidth:"300px",display:!0},{label:"Test Three",name:"testFieldThree",dataType:"text",colWidth:"250px",display:!0},{label:"Test Four",name:"testFieldFour",dataType:"text",colWidth:"250px",display:!0},{label:"Test Five",name:"testFieldFive",dataType:"text",colWidth:"250px",display:!0},{label:"Test Six",name:"testFieldSix",dataType:"text",colWidth:"250px",display:!1},{label:"Test Seven",name:"testFieldSeven",dataType:"text",colWidth:"250px",display:!1},{label:"Test Eight",name:"testFieldEight",dataType:"text",colWidth:"250px",display:!1}],Z=[{id:4,testFieldOne:{value:"Test 1-1",dataType:"text"},testFieldTwo:{value:"Test 1-2",dataType:"picklist",options:["Not a Test","Test 1-2","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 1-3",dataType:"text"},testFieldFour:{value:"Test 1-3",dataType:"text"},testFieldFive:{value:"Test 1-3",dataType:"text"},testFieldSix:{value:"Test 1-3",dataType:"text"}},{id:2,testFieldOne:{value:"Test 2-1",dataType:"text"},testFieldTwo:{value:"Test 2-2",dataType:"picklist",options:["Test 2-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 2-3",dataType:"text"},testFieldFour:{value:"Test 2-4",dataType:"text"},testFieldFive:{value:"Test 2-5",dataType:"text"},testFieldSix:{value:"Test 2-6",dataType:"text"}},{id:3,testFieldOne:{value:"Test 3-1",dataType:"text"},testFieldTwo:{value:"Test 3-2",dataType:"picklist",options:["Test 3-2","Not a Test","Picklist Stuff","Hello World"]},testFieldFour:{value:"Test 3-3",dataType:"text"},testFieldFive:{value:"Test 3-4",dataType:"text"}},{id:5,testFieldOne:{value:"Test 5-1",dataType:"text"},testFieldTwo:{value:"Test 5-2",dataType:"picklist",options:["Test 5-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 5-3",dataType:"text"},testFieldFive:{value:"Test 5-5",dataType:"text"},testFieldSix:{value:"Test 5-6",dataType:"text"}},{id:6,testFieldOne:{value:"Test 6-1",dataType:"text"},testFieldTwo:{value:"Test 6-2",dataType:"picklist",options:["Test 6-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 6-3",dataType:"text"},testFieldFive:{value:"Test 6-5",dataType:"text"},testFieldSix:{value:"Test 6-6",dataType:"text"}},{id:7,testFieldOne:{value:"Test 7-1",dataType:"text"},testFieldTwo:{value:"Test 7-2",dataType:"picklist",options:["Test 7-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 7-3",dataType:"text"},testFieldFour:{value:"Test 7-4",dataType:"text"},testFieldFive:{value:"Test 7-5",dataType:"text"},testFieldSix:{value:"Test 7-6",dataType:"text"}},{id:8,testFieldOne:{value:"Test 8-1",dataType:"text"},testFieldTwo:{value:"Test 8-2",dataType:"picklist",options:["Test 8-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 8-3",dataType:"text"},testFieldFour:{value:"Test 8-4",dataType:"text"},testFieldFive:{value:"Test 8-5",dataType:"text"},testFieldSix:{value:"Test 8-6",dataType:"text"}},{id:9,testFieldOne:{value:"Test 9-1",dataType:"text"},testFieldTwo:{value:"Test 9-2",dataType:"picklist",options:["Test 9-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 9-3",dataType:"text"},testFieldFour:{value:"Test 9-4",dataType:"text"},testFieldFive:{value:"Test 9-5",dataType:"text"},testFieldSix:{value:"Test 9-6",dataType:"text"}},{id:10,testFieldOne:{value:"Test 10-1",dataType:"text"},testFieldTwo:{value:"Test 10-2",dataType:"picklist",options:["Test 10-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 10-3",dataType:"text"},testFieldFour:{value:"Test 10-4",dataType:"text"},testFieldFive:{value:"Test 10-5",dataType:"text"},testFieldSix:{value:"Test 10-6",dataType:"text"}},{id:11,testFieldOne:{value:"Test 11-1",dataType:"text"},testFieldTwo:{value:"Test 11-2",dataType:"picklist",options:["Test 11-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 11-3",dataType:"text"},testFieldFour:{value:"Test 11-4",dataType:"text"},testFieldFive:{value:"Test 11-5",dataType:"text"},testFieldSix:{value:"Test 11-6",dataType:"text"}},{id:12,testFieldOne:{value:"Test 12-1",dataType:"text"},testFieldTwo:{value:"Test 12-2",dataType:"picklist",options:["Test 12-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 12-3",dataType:"text"},testFieldFour:{value:"Test 12-4",dataType:"text"},testFieldFive:{value:"Test 12-5",dataType:"text"},testFieldSix:{value:"Test 12-6",dataType:"text"}},{id:13,testFieldOne:{value:"Test 13-1",dataType:"text"},testFieldTwo:{value:"Test 13-2",dataType:"picklist",options:["Test 13-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 13-3",dataType:"text"},testFieldFour:{value:"Test 13-4",dataType:"text"},testFieldFive:{value:"Test 13-5",dataType:"text"},testFieldSix:{value:"Test 13-6",dataType:"text"}},{id:14,testFieldOne:{value:"Test 14-1",dataType:"text"},testFieldTwo:{value:"Test 14-2",dataType:"picklist",options:["Test 14-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 14-3",dataType:"text"},testFieldFour:{value:"Test 14-4",dataType:"text"},testFieldFive:{value:"Test 14-5",dataType:"text"},testFieldSix:{value:"Test 14-6",dataType:"text"}},{id:15,testFieldOne:{value:"Test 15-1",dataType:"text"},testFieldTwo:{value:"Test 15-2",dataType:"picklist",options:["Test 15-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 15-3",dataType:"text"},testFieldFour:{value:"Test 15-4",dataType:"text"},testFieldFive:{value:"Test 15-5",dataType:"text"},testFieldSix:{value:"Test 15-6",dataType:"text"}},{id:16,testFieldOne:{value:"Test 16-1",dataType:"text"},testFieldTwo:{value:"Test 16-2",dataType:"picklist",options:["Test 16-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 16-3",dataType:"text"},testFieldFour:{value:"Test 16-4",dataType:"text"},testFieldFive:{value:"Test 16-5",dataType:"text"},testFieldSix:{value:"Test 16-6",dataType:"text"}},{id:17,testFieldOne:{value:"Test 17-1",dataType:"text"},testFieldTwo:{value:"Test 17-2",dataType:"picklist",options:["Test 17-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 17-3",dataType:"text"},testFieldFour:{value:"Test 17-4",dataType:"text"},testFieldFive:{value:"Test 17-5",dataType:"text"},testFieldSix:{value:"Test 17-6",dataType:"text"}},{id:18,testFieldOne:{value:"Test 18-1",dataType:"text"},testFieldTwo:{value:"Test 18-2",dataType:"picklist",options:["Test 18-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 18-3",dataType:"text"},testFieldFour:{value:"Test 18-4",dataType:"text"},testFieldFive:{value:"Test 18-5",dataType:"text"},testFieldSix:{value:"Test 18-6",dataType:"text"}},{id:19,testFieldOne:{value:"Test 19-1",dataType:"text"},testFieldTwo:{value:"Test 19-2",dataType:"picklist",options:["Test 19-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 19-3",dataType:"text"},testFieldFour:{value:"Test 19-4",dataType:"text"},testFieldFive:{value:"Test 19-5",dataType:"text"},testFieldSix:{value:"Test 19-6",dataType:"text"}},{id:20,testFieldOne:{value:"Test 20-1",dataType:"text"},testFieldTwo:{value:"Test 20-2",dataType:"picklist",options:["Test 20-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 20-3",dataType:"text"},testFieldFour:{value:"Test 20-4",dataType:"text"},testFieldFive:{value:"Test 20-5",dataType:"text"},testFieldSix:{value:"Test 20-6",dataType:"text"}},{id:21,testFieldOne:{value:"Test 21-1",dataType:"text"},testFieldTwo:{value:"Test 21-2",dataType:"picklist",options:["Test 21-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 21-3",dataType:"text"},testFieldFour:{value:"Test 21-4",dataType:"text"},testFieldFive:{value:"Test 21-5",dataType:"text"},testFieldSix:{value:"Test 21-6",dataType:"text"}},{id:22,testFieldOne:{value:"Test 22-1",dataType:"text"},testFieldTwo:{value:"Test 22-2",dataType:"picklist",options:["Test 22-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 22-3",dataType:"text"},testFieldFour:{value:"Test 22-4",dataType:"text"},testFieldFive:{value:"Test 22-5",dataType:"text"},testFieldSix:{value:"Test 22-6",dataType:"text"}},{id:23,testFieldOne:{value:"Test 23-1",dataType:"text"},testFieldTwo:{value:"Test 23-2",dataType:"picklist",options:["Test 23-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 23-3",dataType:"text"},testFieldFour:{value:"Test 23-4",dataType:"text"},testFieldFive:{value:"Test 23-5",dataType:"text"},testFieldSix:{value:"Test 23-6",dataType:"text"}},{id:24,testFieldOne:{value:"Test 24-1",dataType:"text"},testFieldTwo:{value:"Test 24-2",dataType:"picklist",options:["Test 24-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 24-3",dataType:"text"},testFieldFour:{value:"Test 24-4",dataType:"text"},testFieldFive:{value:"Test 24-5",dataType:"text"},testFieldSix:{value:"Test 24-6",dataType:"text"}},{id:25,testFieldOne:{value:"Test 25-1",dataType:"text"},testFieldTwo:{value:"Test 25-2",dataType:"picklist",options:["Test 25-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 25-3",dataType:"text"},testFieldFour:{value:"Test 25-4",dataType:"text"},testFieldFive:{value:"Test 25-5",dataType:"text"},testFieldSix:{value:"Test 25-6",dataType:"text"}},{id:26,testFieldOne:{value:"Test 26-1",dataType:"text"},testFieldTwo:{value:"Test 26-2",dataType:"picklist",options:["Test 26-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 26-3",dataType:"text"},testFieldFour:{value:"Test 26-4",dataType:"text"},testFieldFive:{value:"Test 26-5",dataType:"text"},testFieldSix:{value:"Test 26-6",dataType:"text"}},{id:27,testFieldOne:{value:"Test 27-1",dataType:"text"},testFieldTwo:{value:"Test 27-2",dataType:"picklist",options:["Test 27-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 27-3",dataType:"text"},testFieldFour:{value:"Test 27-4",dataType:"text"},testFieldFive:{value:"Test 27-5",dataType:"text"},testFieldSix:{value:"Test 27-6",dataType:"text"}},{id:28,testFieldOne:{value:"Test 28-1",dataType:"text"},testFieldTwo:{value:"Test 28-2",dataType:"picklist",options:["Test 28-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 28-3",dataType:"text"},testFieldFour:{value:"Test 28-4",dataType:"text"},testFieldFive:{value:"Test 28-5",dataType:"text"},testFieldSix:{value:"Test 28-6",dataType:"text"}},{id:29,testFieldOne:{value:"Test 29-1",dataType:"text"},testFieldTwo:{value:"Test 29-2",dataType:"picklist",options:["Test 29-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 29-3",dataType:"text"},testFieldFour:{value:"Test 29-4",dataType:"text"},testFieldFive:{value:"Test 29-5",dataType:"text"},testFieldSix:{value:"Test 29-6",dataType:"text"}},{id:30,testFieldOne:{value:"Test 30-1",dataType:"text"},testFieldTwo:{value:"Test 30-2",dataType:"picklist",options:["Test 30-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 30-3",dataType:"text"},testFieldFour:{value:"Test 30-4",dataType:"text"},testFieldFive:{value:"Test 30-5",dataType:"text"},testFieldSix:{value:"Test 30-6",dataType:"text"}},{id:31,testFieldOne:{value:"Test 31-1",dataType:"text"},testFieldTwo:{value:"Test 31-2",dataType:"picklist",options:["Test 31-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 31-3",dataType:"text"},testFieldFour:{value:"Test 31-4",dataType:"text"},testFieldFive:{value:"Test 31-5",dataType:"text"},testFieldSix:{value:"Test 31-6",dataType:"text"}},{id:32,testFieldOne:{value:"Test 32-1",dataType:"text"},testFieldTwo:{value:"Test 32-2",dataType:"picklist",options:["Test 32-2","Not a Test","Picklist Stuff","Hello World"]},testFieldThree:{value:"Test 32-3",dataType:"text"},testFieldFour:{value:"Test 32-4",dataType:"text"},testFieldFive:{value:"Test 32-5",dataType:"text"},testFieldSix:{value:"Test 32-6",dataType:"text"}}];function A(){var e=(0,F.useState)(B),t=e[0],a=e[1],l=(0,F.useState)(Z.slice(29)),s=l[0],u=l[1],p=(0,F.useState)(Z.slice(0,29)),c=p[0],v=p[1],y=(0,F.useRef)();(0,F.useEffect)(function(){if(s&&0!==s.length){var e=y.current.lastChild,t=function(e){e[0].isIntersecting&&(s.length>29?(v((0,n.Z)(c).concat([s.slice(0,29)])),u(s.slice(29))):(v((0,n.Z)(c).concat((0,n.Z)(s))),u([])))},a=new IntersectionObserver(t,{root:null,rootMargin:"5px",threshold:.02});return a.observe(e),function(){return a.unobserve(e)}}},[c]),(0,F.useEffect)(function(){},[]);var f=function(e,t){v((0,n.Z)(c.sort(function(a,i){if(!a[e])return 1;if(!i[e])return -1;var l="id"===e?a.id:a[e].value,s="id"===e?i.id:i[e].value;return l===s?0:t?l<s?1:-1:l>s?1:-1})))},h=function(e,t,a){var i=c.findIndex(function(t){return t.id===e});v((0,n.Z)(c.slice(0,i)).concat([(0,o.Z)((0,T.Z)({},c[i]),(0,d.Z)({},t,(0,o.Z)((0,T.Z)({},c[i][t]),{value:a})))],(0,n.Z)(c.slice(i+1))))},S=c?c.map(function(e){var a=t.filter(function(e){return e.display}).map(function(t){if(t.display){if(!e[t.name])return(0,i.jsx)(g,{},"".concat(t.name,"_").concat(e.id));switch(!0){case"id"===t.name:return(0,i.jsx)(g,{textValue:e.id},"".concat(t.name,"_").concat(e.id));case"picklist"===t.dataType:return(0,i.jsx)(N,{initialGridValue:e[t.name].value,fieldData:{objID:e.id,fieldName:t.name},updateGridData:h,options:e[t.name].options},"".concat(t.name,"_").concat(e.id));case"text"===t.dataType:return(0,i.jsx)(j,{initialGridValue:e[t.name].value,fieldData:{objID:e.id,fieldName:t.name},updateGridData:h},"".concat(t.name,"_").concat(e.id));default:return(0,i.jsx)(g,{textValue:e[t.name].value})}}});return(0,i.jsx)(x,{gridCells:a},e.id)}):null;return(0,i.jsx)("div",{className:r().gridContainer,children:(0,i.jsxs)("div",{className:r().grid,ref:y,children:[(0,i.jsx)(G,{headerData:t,setHeaderData:a,sortByField:f}),S]})})}var V=a(5897),R=a.n(V);function I(){var e=(0,F.useRef)(0),t=(0,F.useRef)();return(0,F.useEffect)(function(){var a,i=function(){0===window.scrollY&&(a=!1),a||(window.scrollY>e.current&&window.scrollY>0?t.current.classList.add(R().hide):window.scrollY<e.current&&t.current.classList.remove(R().hide),e.current=window.scrollY,a=!0,setTimeout(function(){return a=!1},300))};return setTimeout(function(){return document.addEventListener("scroll",i)},2e3),function(){document.removeEventListener("scroll",i)}},[]),(0,i.jsx)("header",{className:R().header,ref:t,children:(0,i.jsx)("h1",{children:"Grid"})})}var L=a(1673),M=a.n(L);function Y(){return(0,i.jsxs)("div",{className:M().container,children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:"Grid"}),(0,i.jsx)("meta",{name:"description",content:"Grid App"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(I,{}),(0,i.jsx)("main",{className:M().main,children:(0,i.jsx)(A,{})}),(0,i.jsx)("footer",{children:(0,i.jsx)("p",{children:"footer"})})]})}},2095:function(e){e.exports={gridContainer:"Grid_gridContainer__6a3W6",grid:"Grid_grid__dSAVC"}},7801:function(e){e.exports={gridCellContainer:"GridCell_gridCellContainer__I7R3s",displayText:"GridCell_displayText__RIVmT",gridEditMode:"GridCell_gridEditMode__UPxNZ"}},8079:function(e){e.exports={headerRow:"GridHeader_headerRow__Hswbi",addColButton:"GridHeader_addColButton__EvgPy",dragActive:"GridHeader_dragActive__vESsm"}},6060:function(e){e.exports={gridRow:"GridRow_gridRow__ERzcx",dragButton:"GridRow_dragButton__1U3pe"}},1041:function(e){e.exports={headerCell:"HeaderCell_headerCell__9VVDj",sortButton:"HeaderCell_sortButton__hIX5s",flipButton:"HeaderCell_flipButton__4kHeM",highlightButton:"HeaderCell_highlightButton__VU3s7",isDragging:"HeaderCell_isDragging__ttCLA",dragTarget:"HeaderCell_dragTarget__veniN"}},5433:function(e){e.exports={picklistCell:"PicklistGridCell_picklistCell__2G7kX"}},6392:function(e){e.exports={textCell:"TextGridCell_textCell__Np7a6"}},5897:function(e){e.exports={header:"Header_header__Z8PUO",fadeIn:"Header_fadeIn__vQn66",hide:"Header_hide__syVsa"}},3284:function(e){e.exports={tooltipContainer:"Tooltip_tooltipContainer__e05oa",tooltipText:"Tooltip_tooltipText__exuTC"}},1673:function(e){e.exports={container:"Home_container__97eC3"}}},function(e){e.O(0,[641,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);