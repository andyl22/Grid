(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4348)}])},4348:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return et}});var a=n(5893),i=n(9008),r=n.n(i),o=n(797),l=n(2095),d=n.n(l),s=n(8079),c=n.n(s),u=n(7294),f=n(1041),p=n.n(f),g=n(5877),x=n(3284),_=n.n(x);function v(e){var t=e.text;return(0,a.jsx)("div",{className:_().tooltipContainer,children:(0,a.jsx)("p",{className:_().tooltipText,onClick:function(e){return e.stopPropagation()},children:t})})}var h=n(7801),m=n.n(h);function C(e){var t=e.gridEditElement,n=e.submitAction,i=e.cancelAction,r=e.textValue,o=(0,u.useState)(!0),l=o[0],d=o[1],s=(0,u.useState)(!1),c=s[0],f=s[1],p=function(e){e.stopPropagation(),n&&d(!1)},g=function(e){27===e.keyCode&&(d(!0),i&&i())},x=function(e){e.preventDefault(),d(!0),n()},_=function(e){var t=e.target;t.offsetHeight<t.scrollHeight&&f(!0),t.parentNode.addEventListener("mouseleave",function(){return f(!1)},{once:!0})},h=(0,a.jsxs)("div",{className:m().gridCellContainer,onClick:p,children:[(0,a.jsx)("p",{className:m().displayText,onMouseOver:_,children:r}),c&&(0,a.jsx)(v,{text:r})]}),C=function(e){x(e)},j=(0,a.jsx)("div",{className:"".concat(m().gridCellContainer," ").concat(m().gridEditMode),onClick:C,children:(0,a.jsx)("form",{onKeyDown:g,onSubmit:x,onClick:function(e){return e.stopPropagation()},children:t})});return l?h:j}function j(e){var t=e.fieldData,n=e.order,i=e.dragStart,r=e.dragEnter,o=e.dragDrop,l=e.dragEnd,d=e.isDragging,s=e.dragActive,c=e.sortByField,f=e.isSorting,x=e.updateActiveSort,_=(0,u.useState)(void 0),v=_[0],h=_[1],m=function(){c(t.name,v),h(!v),x(t.name)};(0,u.useEffect)(function(){f||h(void 0)},[f]),(0,u.useEffect)(function(){f&&m()},[]);var j=function(e){i(n),e.dataTransfer.effectAllowed="move"},D=function(e){o(e,n)},w=function(e){e.preventDefault(),r(n)},T=function(){l()};return(0,a.jsxs)("div",{className:p().headerCell,onDragStart:j,onDragOver:s?w:null,onDrop:s?D:null,onDragEnd:s?T:null,draggable:!0,children:[(0,a.jsx)(C,{textValue:t.label}),(0,a.jsx)("button",{className:"".concat(p().sortButton," ").concat(f&&p().highlightButton," ").concat(v&&p().flipButton),onClick:m,children:(0,a.jsx)(g.Z,{fontSize:"small"})}),d&&(0,a.jsx)("span",{className:p().isDragging}),s&&(0,a.jsx)("span",{className:p().dragTarget})]})}var D=n(6540),w=n(4898),T=n.n(w);function N(e){var t=e.children;return(0,a.jsx)("div",{className:T().dropdownContainer,children:t})}var y=n(8998),b=n.n(y);function E(e){var t=e.headerData,n=e.setHeaderData,i=(0,u.useRef)(),r=function(e){var a=t.findIndex(function(t){return t.name===e}),r=(0,o.Z)(t),l=r.splice(a,1)[0];l.display=!0,r.splice(a,0,l),n(r),setTimeout(function(){i.current.scrollIntoView({behavior:"smooth",block:"end",inline:"start"})},200)},l=t.filter(function(e){return!e.display}).map(function(e){return(0,a.jsx)("div",{className:b().option,onClick:function(){return r(e.name)},children:(0,a.jsx)("p",{children:e.label})},e.name)});return(0,a.jsx)(N,{children:(0,a.jsx)("div",{className:b().optionsContainer,ref:i,children:l.length>0?l:(0,a.jsx)("p",{children:"No options available"})})})}function F(e){var t=e.headerData,n=e.setHeaderData,i=e.sortByField,r=(0,u.useState)(t),l=r[0],d=r[1],s=(0,u.useState)(),f=s[0],p=s[1],g=(0,u.useState)(!1),x=g[0],_=g[1],v=(0,u.useState)(),h=v[0],m=v[1],C=(0,u.useState)(!1),w=C[0],T=C[1],N=function(e){p(e),_(!0)},y=function(e){if(f!==e){var a=(0,o.Z)(t),i=a.splice(f,1)[0];a.splice(e,0,i),p(e),n(a)}},b=function(){p(),d(t),_(!1)},F=function(){f&&(n(l),p())},S=function(e){m(e)},G=function(){T(!w)},R=function(e){n((0,o.Z)(t).splice(e,1))},H=t.filter(function(e){return e.display}).map(function(e,t){return(0,a.jsx)(j,{fieldData:e,order:t,dragStart:N,dragEnter:y,dragDrop:b,dragEnd:F,isDragging:f===t,dragActive:x,sortByField:i,isSorting:h===e.name,updateActiveSort:S,deleteColumn:R},e.name)});return(0,a.jsxs)("div",{className:c().headerRow,children:[H,(0,a.jsxs)("div",{className:c().dropdownWrapper,children:[(0,a.jsx)("button",{className:c().addColButton,onClick:G,children:(0,a.jsx)(D.Z,{})}),w?(0,a.jsx)(E,{headerData:t,setHeaderData:n}):null]})]})}var S=n(4924),G=n(6042),R=n(9396),H=n(6060),B=n.n(H),k=n(2610);function A(e){var t=e.gridCells,n=e.order,i=e.startDragController,r=e.dragOverController,o=e.dragDropController,l=e.dragEndController,d=e.isDragging,s=e.dragActive,c=function(e){var t=new Image;i(n),e.dataTransfer.setDragImage(t,0,0),e.dataTransfer.effectAllowed="move"},u=function(e){e.preventDefault(),r(n)},f=function(){o()},p=function(){l()};return(0,a.jsxs)("div",{className:"".concat(B().gridRow," ").concat(d&&B().isDragging),onDrop:s?f:null,onDragOver:s?u:null,children:[(0,a.jsx)("button",{className:"".concat(B().dragButton," ").concat(B().hideButton),onDragStart:c,onDragEnd:s?p:null,draggable:!0,children:(0,a.jsx)(k.Z,{})}),t,d&&(0,a.jsx)("span",{className:B().dragging})]})}var Z=n(5433),I=n.n(Z);function V(e){var t=e.initialGridValue,n=e.fieldData,i=e.updateGridData,r=e.options,o=(0,u.useState)(t),l=o[0],d=o[1],s=function(){i(n.objID,n.fieldName,l)},c=function(e){console.log(e.target.value),d(e.target.value),e.target.parentNode.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0}))},f=r.map(function(e){return(0,a.jsx)("option",{value:e,disabled:e===l,children:e},e)}),p=(0,a.jsx)("select",{onChange:c,autoFocus:!0,children:f});return(0,a.jsx)("div",{className:I().picklistCell,children:(0,a.jsx)(C,{gridEditElement:p,submitAction:s,textValue:l})})}var O=n(6392),W=n.n(O);function P(e){var t=e.initialGridValue,n=e.updateGridData,i=e.fieldData,r=(0,u.useState)("Test"),o=r[0],l=r[1],d=(0,u.useState)(t),s=d[0],c=d[1],f=function(){n(i.objID,i.fieldName,s),l(s)},p=function(e){c(e.target.value)};return(0,a.jsx)("div",{className:W().textCell,children:(0,a.jsx)(C,{gridEditElement:(0,a.jsx)("input",{value:s,onChange:p,autoFocus:!0}),cancelAction:function(){return c(o)},submitAction:f,textValue:s})})}var L=n(4903),Y=n.n(L);function M(e){var t=e.headerData,n=e.rowData,i=e.setRowData,r=(0,u.useState)(),l=r[0],d=r[1],s=(0,u.useState)((0,o.Z)(n)),c=s[0],f=s[1],p=(0,u.useState)(!1),g=p[0],x=p[1],_=function(e,t,a){var r=n.findIndex(function(t){return t.id===e});i((0,o.Z)(n.slice(0,r)).concat([(0,R.Z)((0,G.Z)({},n[r]),(0,S.Z)({},t,(0,R.Z)((0,G.Z)({},n[r][t]),{value:a})))],(0,o.Z)(n.slice(r+1))))},v=function(e){d(e),x(!0)},h=function(e){if(l!==e){var t=(0,o.Z)(n),a=t.splice(l,1)[0];t.splice(e,0,a),d(e),i(t)}},m=function(e){h(e)},j=function(){d(),f(n)},w=function(){x(!1),void 0!==d&&(d(),i(c))},T=n?n.map(function(e,n){var i=t.filter(function(e){return e.display}).map(function(t){if(t.display){if(!e[t.name])return(0,a.jsx)(C,{},"".concat(t.name,"_").concat(e.id));switch(!0){case"id"===t.name:return(0,a.jsx)(C,{textValue:e.id},"".concat(t.name,"_").concat(e.id));case"picklist"===t.dataType:return(0,a.jsx)(V,{initialGridValue:e[t.name].value,fieldData:{objID:e.id,fieldName:t.name},updateGridData:_,options:e[t.name].options},"".concat(t.name,"_").concat(e.id));case"text"===t.dataType:return(0,a.jsx)(P,{initialGridValue:e[t.name].value,fieldData:{objID:e.id,fieldName:t.name},updateGridData:_},"".concat(t.name,"_").concat(e.id));default:return(0,a.jsx)(C,{textValue:e[t.name].value})}}});return(0,a.jsx)(A,{gridCells:i,startDragController:v,dragOverController:m,dragDropController:j,dragEndController:w,moveRow:h,order:n,isDragging:n===l,dragActive:g},e.id)}):null,N=function(){alert("Add Row")};return(0,a.jsxs)("div",{className:Y().gridRowController,children:[T,(0,a.jsx)("button",{className:Y().addRowButton,onClick:N,children:(0,a.jsx)(D.Z,{})})]})}var z=n(940);function K(e){var t=e.colData,n=e.objData,i=(0,u.useState)(t),r=i[0],l=i[1],s=(0,u.useState)(n.slice(29)),c=s[0],f=s[1],p=(0,u.useState)(n.slice(0,29)),g=p[0],x=p[1],_=(0,u.useState)(!1),v=_[0],h=_[1],m=(0,u.useRef)(),C=(0,u.useRef)();(0,u.useEffect)(function(){if(c&&0!==c.length){var e=m.current.lastChild.children[[m.current.lastChild.children.length-4]],t=function(e){e[0].isIntersecting&&(h(!0),setTimeout(function(){c.length>29?(x((0,o.Z)(g).concat((0,o.Z)(c.slice(0,29)))),f(c.slice(29))):(x((0,o.Z)(g).concat((0,o.Z)(c))),f([])),h(!1)},2e3))},n=new IntersectionObserver(t,{root:null,rootMargin:"5px",threshold:.02});return n.observe(e),function(){return n.unobserve(e)}}},[g]),(0,u.useEffect)(function(){},[]);var j=function(e,t){x((0,o.Z)(g.sort(function(n,a){if(!n[e])return 1;if(!a[e])return -1;var i="id"===e?n.id:n[e].value,r="id"===e?a.id:a[e].value;return i===r?0:t?i<r?1:-1:i>r?1:-1})))};return(0,a.jsx)("div",{className:d().gridContainer,children:(0,a.jsxs)("div",{className:d().grid,children:[(0,a.jsx)(F,{headerData:r,setHeaderData:l,sortByField:j}),(0,a.jsx)("div",{ref:m,children:(0,a.jsx)(M,{rowData:g,setRowData:x,headerData:r})}),v&&(0,a.jsx)("div",{className:d().loadingBanner,ref:C,children:(0,a.jsx)(z.Z,{fontSize:"large"})})]})})}var U=n(5897),X=n.n(U);function Q(){var e=(0,u.useRef)(0),t=(0,u.useRef)();return(0,u.useEffect)(function(){var n,a=function(){0===window.scrollY&&(n=!1),n||(window.scrollY>e.current&&window.scrollY>0?t.current.classList.add(X().hide):window.scrollY<e.current&&t.current.classList.remove(X().hide),e.current=window.scrollY,n=!0,setTimeout(function(){return n=!1},300))};return setTimeout(function(){return document.addEventListener("scroll",a)},500),function(){document.removeEventListener("scroll",a)}},[]),(0,a.jsx)("header",{className:X().header,ref:t,children:(0,a.jsx)("h1",{children:"Grid"})})}var J=n(1673),q=n.n(J),$=[{label:"ID",name:"id",colWidth:"200px",display:!0},{label:"Test One",name:"testFieldOne",dataType:"text",colWidth:"200px",display:!0},{label:"Test Two",name:"testFieldTwo",dataType:"picklist",colWidth:"300px",display:!0},{label:"Test Three",name:"testFieldThree",dataType:"text",colWidth:"250px",display:!0},{label:"Test Four",name:"testFieldFour",dataType:"text",colWidth:"250px",display:!0},{label:"Test Five",name:"testFieldFive",dataType:"text",colWidth:"250px",display:!0},{label:"Test Six",name:"testFieldSix",dataType:"text",colWidth:"250px",display:!1},{label:"Test Seven",name:"testFieldSeven",dataType:"text",colWidth:"250px",display:!1},{label:"Test Eight",name:"testFieldEight",dataType:"text",colWidth:"250px",display:!1}],ee=function(e){for(var t=[],n=0;n<e;n++)t.push({id:n+1,testFieldOne:{value:"Field One ".concat(n),dataType:"text"},testFieldTwo:{value:"Field Two ".concat(n),dataType:"picklist",options:["Not a Test","Test 1-2","Picklist Stuff","Hello World"]},testFieldThree:{value:"Field Three ".concat(n),dataType:"text"},testFieldFour:{value:"Field Four ".concat(n),dataType:"text"},testFieldFive:{value:"Field Five ".concat(n),dataType:"text"},testFieldSix:{value:"Field Six ".concat(n),dataType:"text"},testFieldSeven:{value:"Field Seven ".concat(n),dataType:"text"},testFieldEight:{value:"Field Eight ".concat(n),dataType:"text"}});return t};function et(){return(0,a.jsxs)("div",{className:q().container,children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Grid"}),(0,a.jsx)("meta",{name:"description",content:"Grid App"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(Q,{}),(0,a.jsx)("main",{className:q().main,children:(0,a.jsx)(K,{colData:$,objData:ee(100)})}),(0,a.jsx)("footer",{className:q().footer,children:(0,a.jsx)("p",{children:"footer"})})]})}},4898:function(e){e.exports={dropdownContainer:"Dropdown_dropdownContainer__cL8Am"}},2095:function(e){e.exports={gridContainer:"Grid_gridContainer__6a3W6",grid:"Grid_grid__dSAVC",loadingBanner:"Grid_loadingBanner__xxG_c",hourglassAnimation:"Grid_hourglassAnimation__6J_9W"}},7801:function(e){e.exports={gridCellContainer:"GridCell_gridCellContainer__I7R3s",displayText:"GridCell_displayText__RIVmT",gridEditMode:"GridCell_gridEditMode__UPxNZ"}},8079:function(e){e.exports={headerRow:"GridHeader_headerRow__Hswbi",addColButton:"GridHeader_addColButton__EvgPy",dropdownWrapper:"GridHeader_dropdownWrapper__Y39Bz",dragActive:"GridHeader_dragActive__vESsm"}},8998:function(e){e.exports={optionsContainer:"GridHeaderAddColDropdown_optionsContainer__FDD_v",option:"GridHeaderAddColDropdown_option___K8Gr"}},6060:function(e){e.exports={gridRow:"GridRow_gridRow__ERzcx",dragButton:"GridRow_dragButton__1U3pe",dragging:"GridRow_dragging__G5LYt",isDragging:"GridRow_isDragging__HdKC7"}},4903:function(e){e.exports={gridRowController:"GridRowController_gridRowController__QKHAO",addRowButton:"GridRowController_addRowButton__5yFEP"}},1041:function(e){e.exports={headerCell:"HeaderCell_headerCell__9VVDj",sortButton:"HeaderCell_sortButton__hIX5s",flipButton:"HeaderCell_flipButton__4kHeM",highlightButton:"HeaderCell_highlightButton__VU3s7",isDragging:"HeaderCell_isDragging__ttCLA",dragTarget:"HeaderCell_dragTarget__veniN"}},5433:function(e){e.exports={picklistCell:"PicklistGridCell_picklistCell__2G7kX"}},6392:function(e){e.exports={textCell:"TextGridCell_textCell__Np7a6"}},5897:function(e){e.exports={header:"Header_header__Z8PUO",fadeIn:"Header_fadeIn__vQn66",hide:"Header_hide__syVsa",fadeOut:"Header_fadeOut__0lnIQ"}},3284:function(e){e.exports={tooltipContainer:"Tooltip_tooltipContainer__e05oa",tooltipText:"Tooltip_tooltipText__exuTC"}},1673:function(e){e.exports={container:"Home_container__97eC3",footer:"Home_footer__zed0_"}}},function(e){e.O(0,[418,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);