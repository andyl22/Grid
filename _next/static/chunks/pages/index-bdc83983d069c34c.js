(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(522)}])},522:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var a=n(5893),i=n(9008),r=n.n(i),o=n(797),l=n(2095),d=n.n(l),s=n(8079),c=n.n(s),u=n(7294),f=n(1041),g=n.n(f),p=n(5877),x=n(3284),v=n.n(x);function _(e){var t=e.text;return(0,a.jsx)("div",{className:v().tooltipContainer,children:(0,a.jsx)("p",{className:v().tooltipText,onClick:function(e){return e.stopPropagation()},children:t})})}var h=n(7801),m=n.n(h);function C(e){var t=e.gridEditElement,n=e.submitAction,i=e.cancelAction,r=e.textValue,o=(0,u.useState)(!0),l=o[0],d=o[1],s=(0,u.useState)(!1),c=s[0],f=s[1],g=function(e){e.stopPropagation(),n&&d(!1)},p=function(e){27===e.keyCode&&(d(!0),i&&i())},x=function(e){e.preventDefault(),d(!0),n()},v=function(e){var t=e.target;t.offsetHeight<t.scrollHeight&&f(!0),t.parentNode.addEventListener("mouseleave",function(){return f(!1)},{once:!0})},h=(0,a.jsxs)("div",{className:m().gridCellContainer,onClick:g,children:[(0,a.jsx)("p",{className:m().displayText,onMouseOver:v,children:r}),c&&(0,a.jsx)(_,{text:r})]}),C=function(e){x(e)},j=(0,a.jsx)("div",{className:"".concat(m().gridCellContainer," ").concat(m().gridEditMode),onClick:C,children:(0,a.jsx)("form",{onKeyDown:p,onSubmit:x,onClick:function(e){return e.stopPropagation()},children:t})});return l?h:j}function j(e){var t=e.fieldData,n=e.order,i=e.dragStart,r=e.dragEnter,o=e.dragDrop,l=e.dragEnd,d=e.isDragging,s=e.dragActive,c=e.sortByField,f=e.isSorting,x=e.updateActiveSort,v=(0,u.useState)(void 0),_=v[0],h=v[1],m=function(){c(t.name,_),h(!_),x(t.name)};(0,u.useEffect)(function(){f||h(void 0)},[f]),(0,u.useEffect)(function(){f&&m()},[]);var j=function(e){i(n),e.dataTransfer.effectAllowed="move"},T=function(e){o(e,n)},D=function(e){e.preventDefault(),r(n)},w=function(){l()};return(0,a.jsxs)("div",{className:g().headerCell,onDragStart:j,onDragOver:s?D:null,onDrop:s?T:null,onDragEnd:s?w:null,draggable:!0,children:[(0,a.jsx)(C,{textValue:t.label}),(0,a.jsx)("button",{className:"".concat(g().sortButton," ").concat(f&&g().highlightButton," ").concat(_&&g().flipButton),onClick:m,children:(0,a.jsx)(p.Z,{fontSize:"small"})}),d&&(0,a.jsx)("span",{className:g().isDragging}),s&&(0,a.jsx)("span",{className:g().dragTarget})]})}var T=n(6540);function D(e){var t=e.headerData,n=e.setHeaderData,i=e.sortByField,r=(0,u.useState)(t),l=r[0],d=r[1],s=(0,u.useState)(),f=s[0],g=s[1],p=(0,u.useState)(!1),x=p[0],v=p[1],_=(0,u.useState)(),h=_[0],m=_[1],C=function(e){g(e),v(!0)},D=function(e){if(f!==e){var a=(0,o.Z)(t),i=a.splice(f,1)[0];a.splice(e,0,i),g(e),n(a)}},w=function(){g(),d(t),v(!1)},y=function(){f&&(n(l),g())},b=function(e){m(e)},E=function(){alert(t.filter(function(e){return!e.display})),n((0,o.Z)(t).concat([{label:"Test Six",name:"testFieldSix",dataType:"text",colWidth:"250px"}]))},N=function(e){n((0,o.Z)(t).splice(e,1))},S=t.filter(function(e){return e.display}).map(function(e,t){return(0,a.jsx)(j,{fieldData:e,order:t,dragStart:C,dragEnter:D,dragDrop:w,dragEnd:y,isDragging:f===t,dragActive:x,sortByField:i,isSorting:h===e.name,updateActiveSort:b,deleteColumn:N},e.name)});return(0,a.jsxs)("div",{className:c().headerRow,children:[S,(0,a.jsx)("button",{className:c().addColButton,onClick:E,children:(0,a.jsx)(T.Z,{})})]})}var w=n(4924),y=n(6042),b=n(9396),E=n(6060),N=n.n(E),S=n(2610);function F(e){var t=e.gridCells,n=e.order,i=e.startDragController,r=e.dragOverController,o=e.dragDropController,l=e.dragEndController,d=e.isDragging,s=e.dragActive,c=function(e){var t=new Image;i(n),e.dataTransfer.setDragImage(t,0,0),e.dataTransfer.effectAllowed="move"},u=function(e){e.preventDefault(),r(n)},f=function(){o()},g=function(){l()};return(0,a.jsxs)("div",{className:N().gridRow,onDrop:s?f:null,onDragOver:s?u:null,children:[(0,a.jsx)("button",{className:N().dragButton,onDragStart:c,onDragEnd:s?g:null,draggable:!0,children:(0,a.jsx)(S.Z,{})}),t,d&&(0,a.jsx)("span",{className:N().dragging})]})}var G=n(5433),R=n.n(G);function k(e){var t=e.initialGridValue,n=e.fieldData,i=e.updateGridData,r=e.options,o=(0,u.useState)(t),l=o[0],d=o[1],s=function(){i(n.objID,n.fieldName,l)},c=function(e){console.log(e.target.value),d(e.target.value),e.target.parentNode.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0}))},f=r.map(function(e){return(0,a.jsx)("option",{value:e,disabled:e===l,children:e},e)}),g=(0,a.jsx)("select",{onChange:c,autoFocus:!0,children:f});return(0,a.jsx)("div",{className:R().picklistCell,children:(0,a.jsx)(C,{gridEditElement:g,submitAction:s,textValue:l})})}var Z=n(6392),B=n.n(Z);function H(e){var t=e.initialGridValue,n=e.updateGridData,i=e.fieldData,r=(0,u.useState)("Test"),o=r[0],l=r[1],d=(0,u.useState)(t),s=d[0],c=d[1],f=function(){n(i.objID,i.fieldName,s),l(s)},g=function(e){c(e.target.value)};return(0,a.jsx)("div",{className:B().textCell,children:(0,a.jsx)(C,{gridEditElement:(0,a.jsx)("input",{value:s,onChange:g,autoFocus:!0}),cancelAction:function(){return c(o)},submitAction:f,textValue:s})})}var A=n(4903),V=n.n(A);function I(e){var t=e.headerData,n=e.rowData,i=e.setRowData,r=(0,u.useState)(),l=r[0],d=r[1],s=(0,u.useState)((0,o.Z)(n)),c=s[0],f=s[1],g=(0,u.useState)(!1),p=g[0],x=g[1],v=function(e,t,a){var r=n.findIndex(function(t){return t.id===e});i((0,o.Z)(n.slice(0,r)).concat([(0,b.Z)((0,y.Z)({},n[r]),(0,w.Z)({},t,(0,b.Z)((0,y.Z)({},n[r][t]),{value:a})))],(0,o.Z)(n.slice(r+1))))},_=function(e){d(e),x(!0)},h=function(e){if(l!==e){var t=(0,o.Z)(n),a=t.splice(l,1)[0];t.splice(e,0,a),d(e),i(t)}},m=function(e){h(e)},j=function(){d(),f(n)},D=function(){x(!1),void 0!==d&&(d(),i(c))},E=n?n.map(function(e,n){var i=t.filter(function(e){return e.display}).map(function(t){if(t.display){if(!e[t.name])return(0,a.jsx)(C,{},"".concat(t.name,"_").concat(e.id));switch(!0){case"id"===t.name:return(0,a.jsx)(C,{textValue:e.id},"".concat(t.name,"_").concat(e.id));case"picklist"===t.dataType:return(0,a.jsx)(k,{initialGridValue:e[t.name].value,fieldData:{objID:e.id,fieldName:t.name},updateGridData:v,options:e[t.name].options},"".concat(t.name,"_").concat(e.id));case"text"===t.dataType:return(0,a.jsx)(H,{initialGridValue:e[t.name].value,fieldData:{objID:e.id,fieldName:t.name},updateGridData:v},"".concat(t.name,"_").concat(e.id));default:return(0,a.jsx)(C,{textValue:e[t.name].value})}}});return(0,a.jsx)(F,{gridCells:i,startDragController:_,dragOverController:m,dragDropController:j,dragEndController:D,moveRow:h,order:n,isDragging:n===l,dragActive:p},e.id)}):null,N=function(){alert("Add Row")};return(0,a.jsxs)("div",{className:V().gridRowController,children:[E,(0,a.jsx)("button",{className:V().addRowButton,onClick:N,children:(0,a.jsx)(T.Z,{})})]})}function O(e){var t=e.colData,n=e.objData,i=(0,u.useState)(t),r=i[0],l=i[1],s=(0,u.useState)(n.slice(29)),c=s[0],f=s[1],g=(0,u.useState)(n.slice(0,29)),p=g[0],x=g[1],v=(0,u.useRef)();(0,u.useEffect)(function(){if(c&&0!==c.length){var e=v.current.lastChild.children[[v.current.lastChild.children.length-4]],t=function(e){e[0].isIntersecting&&(c.length>29?(x((0,o.Z)(p).concat((0,o.Z)(c.slice(0,29)))),f(c.slice(29))):(x((0,o.Z)(p).concat((0,o.Z)(c))),f([])))},n=new IntersectionObserver(t,{root:null,rootMargin:"5px",threshold:.02});return n.observe(e),function(){return n.unobserve(e)}}},[p]),(0,u.useEffect)(function(){},[]);var _=function(e,t){x((0,o.Z)(p.sort(function(n,a){if(!n[e])return 1;if(!a[e])return -1;var i="id"===e?n.id:n[e].value,r="id"===e?a.id:a[e].value;return i===r?0:t?i<r?1:-1:i>r?1:-1})))};return(0,a.jsx)("div",{className:d().gridContainer,children:(0,a.jsxs)("div",{className:d().grid,ref:v,children:[(0,a.jsx)(D,{headerData:r,setHeaderData:l,sortByField:_}),(0,a.jsx)(I,{rowData:p,setRowData:x,headerData:r})]})})}var W=n(5897),P=n.n(W);function L(){var e=(0,u.useRef)(0),t=(0,u.useRef)();return(0,u.useEffect)(function(){var n,a=function(){0===window.scrollY&&(n=!1),n||(window.scrollY>e.current&&window.scrollY>0?t.current.classList.add(P().hide):window.scrollY<e.current&&t.current.classList.remove(P().hide),e.current=window.scrollY,n=!0,setTimeout(function(){return n=!1},300))};return setTimeout(function(){return document.addEventListener("scroll",a)},2e3),function(){document.removeEventListener("scroll",a)}},[]),(0,a.jsx)("header",{className:P().header,ref:t,children:(0,a.jsx)("h1",{children:"Grid"})})}var M=n(1673),Y=n.n(M),U=[{label:"ID",name:"id",colWidth:"200px",display:!0},{label:"Test One",name:"testFieldOne",dataType:"text",colWidth:"200px",display:!0},{label:"Test Two",name:"testFieldTwo",dataType:"picklist",colWidth:"300px",display:!0},{label:"Test Three",name:"testFieldThree",dataType:"text",colWidth:"250px",display:!0},{label:"Test Four",name:"testFieldFour",dataType:"text",colWidth:"250px",display:!0},{label:"Test Five",name:"testFieldFive",dataType:"text",colWidth:"250px",display:!0},{label:"Test Six",name:"testFieldSix",dataType:"text",colWidth:"250px",display:!1},{label:"Test Seven",name:"testFieldSeven",dataType:"text",colWidth:"250px",display:!1},{label:"Test Eight",name:"testFieldEight",dataType:"text",colWidth:"250px",display:!1}],X=function(e){for(var t=[],n=0;n<e;n++)t.push({id:n+1,testFieldOne:{value:"Field One ".concat(n),dataType:"text"},testFieldTwo:{value:"Field Two ".concat(n),dataType:"picklist",options:["Not a Test","Test 1-2","Picklist Stuff","Hello World"]},testFieldThree:{value:"Field Three ".concat(n),dataType:"text"},testFieldFour:{value:"Field Four ".concat(n),dataType:"text"},testFieldFive:{value:"Field Five ".concat(n),dataType:"text"},testFieldSix:{value:"Field Six ".concat(n),dataType:"text"}});return t};function z(){return(0,a.jsxs)("div",{className:Y().container,children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Grid"}),(0,a.jsx)("meta",{name:"description",content:"Grid App"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(L,{}),(0,a.jsx)("main",{className:Y().main,children:(0,a.jsx)(O,{colData:U,objData:X(100)})}),(0,a.jsx)("footer",{children:(0,a.jsx)("p",{children:"footer"})})]})}},2095:function(e){e.exports={gridContainer:"Grid_gridContainer__6a3W6",grid:"Grid_grid__dSAVC"}},7801:function(e){e.exports={gridCellContainer:"GridCell_gridCellContainer__I7R3s",displayText:"GridCell_displayText__RIVmT",gridEditMode:"GridCell_gridEditMode__UPxNZ"}},8079:function(e){e.exports={headerRow:"GridHeader_headerRow__Hswbi",addColButton:"GridHeader_addColButton__EvgPy",dragActive:"GridHeader_dragActive__vESsm"}},6060:function(e){e.exports={gridRow:"GridRow_gridRow__ERzcx",dragButton:"GridRow_dragButton__1U3pe",dragging:"GridRow_dragging__G5LYt"}},4903:function(e){e.exports={gridRowController:"GridRowController_gridRowController__QKHAO",addRowButton:"GridRowController_addRowButton__5yFEP"}},1041:function(e){e.exports={headerCell:"HeaderCell_headerCell__9VVDj",sortButton:"HeaderCell_sortButton__hIX5s",flipButton:"HeaderCell_flipButton__4kHeM",highlightButton:"HeaderCell_highlightButton__VU3s7",isDragging:"HeaderCell_isDragging__ttCLA",dragTarget:"HeaderCell_dragTarget__veniN"}},5433:function(e){e.exports={picklistCell:"PicklistGridCell_picklistCell__2G7kX"}},6392:function(e){e.exports={textCell:"TextGridCell_textCell__Np7a6"}},5897:function(e){e.exports={header:"Header_header__Z8PUO",fadeIn:"Header_fadeIn__vQn66",hide:"Header_hide__syVsa"}},3284:function(e){e.exports={tooltipContainer:"Tooltip_tooltipContainer__e05oa",tooltipText:"Tooltip_tooltipText__exuTC"}},1673:function(e){e.exports={container:"Home_container__97eC3"}}},function(e){e.O(0,[641,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);