(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3708)}])},3708:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return es}});var n=a(5893),r=a(9008),i=a.n(r),o=a(7294),l=a(6042),d=a(9396),s=a(797),c=(0,o.createContext)(),u=function(e){var t=e.children,a=e.initialColData,r=e.initialObjData,i=function(e,t){e.colData;var a=e.objData,n=e.rowData;switch(t.type){case"TEST":default:return(0,l.Z)({},e);case"LOADRECORDS":if(0===a.length)return(0,l.Z)({},e);if(a.length>29)return(0,d.Z)((0,l.Z)({},e),{rowData:(0,s.Z)(n).concat((0,s.Z)(a.slice(0,29))),objData:a.slice(29)});return(0,d.Z)((0,l.Z)({},e),{rowData:(0,s.Z)(n).concat((0,s.Z)(a)),objData:[]});case"UPDATEROW":return(0,d.Z)((0,l.Z)({},e),{rowData:t.payload.updatedRowData});case"UPDATECOL":return(0,d.Z)((0,l.Z)({},e),{colData:t.payload.updatedColData})}},u=(0,o.useReducer)(i,{colData:a,objData:r.slice(29),rowData:r.slice(0,29)}),p=u[0],f=u[1];return(0,n.jsx)(c.Provider,{value:{gridData:p,dispatch:f},children:t})},p=a(7568),f=a(655),g=a(8079),h=a.n(g),_=a(1041),x=a.n(_),v=a(5877),D=a(3284),m=a.n(D);function C(e){var t=e.text;return(0,n.jsx)("div",{className:m().tooltipContainer,children:(0,n.jsx)("p",{className:m().tooltipText,onClick:function(e){return e.stopPropagation()},children:t})})}var T=a(7801),j=a.n(T);function w(e){var t=e.gridEditElement,a=e.submitAction,r=e.cancelAction,i=e.readValue,l=e.cellColData,d=(0,o.useState)(!0),s=d[0],c=d[1],u=(0,o.useState)(!1),p=u[0],f=u[1],g=(0,o.useRef)(),h=(null==l?void 0:l.colWidth)?l.colWidth:150,_=function(e){e.stopPropagation(),a&&c(!1)},x=function(e){27===e.keyCode&&(c(!0),r&&r())},v=function(e){e.preventDefault(),c(!0),a()},D=function(e){var t=e.target;t.offsetHeight<t.scrollHeight&&(f(!0),t.parentNode.addEventListener("mouseleave",function(){return f(!1)},{once:!0}))},m={width:"".concat(h,"px")},T=function(e){v(e)},w=(0,n.jsxs)("div",{className:j().gridCellContainer,style:m,onClick:_,ref:g,children:[(0,n.jsx)("p",{className:j().displayText,onMouseOver:D,children:i}),p&&(0,n.jsx)(C,{text:i})]}),y=(0,n.jsx)("div",{className:"".concat(j().gridCellContainer," ").concat(j().gridEditMode),style:m,onClick:T,children:(0,n.jsx)("form",{onKeyDown:x,onSubmit:v,onClick:function(e){return e.stopPropagation()},children:t})});return s?w:y}function y(e){var t=e.cellColData,a=e.order,r=e.dragStart,i=e.dragEnter,u=e.dragDrop,p=e.dragEnd,f=e.isDragging,g=e.dragActive,h=e.sortByField,_=e.isSorting,D=e.updateActiveSort,m=e.tempDragPos,C=(0,o.useContext)(c),T=C.gridData,j=C.dispatch,y=(0,o.useRef)(),b=(0,o.useState)(void 0),E=b[0],S=b[1],F=function(){h(t.name,E),S(!E),D(t.name)};(0,o.useEffect)(function(){_||S(void 0)},[_]),(0,o.useEffect)(function(){_&&F()},[]);var R=function(e){r(a),e.dataTransfer.effectAllowed="move"},N=function(e){u(e,a)},Z=function(e){e.preventDefault(),i(a)},A=function(){p()};return(0,o.useEffect)(function(){if(y){var e=function(e){var a=e[0].borderBoxSize[0].inlineSize,n=(0,s.Z)(T.colData),r=n.findIndex(function(e){return e.name===t.name});T.colData[r].colWidth!==a&&(n.splice(r,1,(0,d.Z)((0,l.Z)({},t),{colWidth:a})),j({type:"UPDATECOL",payload:{updatedColData:n}}))},a=new ResizeObserver(e);return a.observe(y.current),function(){return a.disconnect()}}},[T]),(0,n.jsxs)("div",{className:x().headerCell,onDrop:g?N:null,children:[(0,n.jsxs)("div",{className:"".concat(x().cellContent," ").concat(f&&x().disableOverflow),onDragStart:R,onDragEnd:g?A:null,draggable:!0,ref:y,children:[(0,n.jsx)(w,{readValue:t.label,cellColData:t}),(0,n.jsx)("button",{className:"".concat(x().sortButton," ").concat(_&&x().highlightButton," ").concat(E&&x().flipButton),onClick:F,children:(0,n.jsx)(v.Z,{fontSize:"small"})}),f&&(0,n.jsx)("span",{onDragOver:Z,onDragEnd:function(){},className:x().isDragging})]}),g&&void 0!==m?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{onDragOver:Z,onDragEnd:function(){},className:m===a?x().currentDragTarget:m>a?x().leftDragTarget:x().rightDragTarget}),(0,n.jsx)("span",{onDragOver:function(e){e.preventDefault()},onDragEnd:function(){},className:m===a?x().currentDragTarget:m>a?x().leftDragPlaceholder:x().rightDragPlaceholder})]}):void 0]})}var b=a(6540),E=a(4898),S=a.n(E);function F(e){var t=e.children;return(0,n.jsx)("div",{className:S().dropdownContainer,children:t})}var R=a(8998),N=a.n(R);function Z(){var e=(0,o.useContext)(c),t=e.gridData,a=e.dispatch,r=t.colData,i=(0,o.useRef)(),l=function(e){var t=r.findIndex(function(t){return t.name===e}),n=(0,s.Z)(r),o=n.splice(t,1)[0];o.display=!0,n.splice(t,0,o),a({type:"UPDATECOL",payload:{updatedColData:n}}),setTimeout(function(){i.current.scrollIntoView({behavior:"smooth",block:"end",inline:"start"})},200)},d=r.filter(function(e){return!e.display}).map(function(e){return(0,n.jsx)("div",{className:N().option,onClick:function(){return l(e.name)},children:(0,n.jsx)("p",{children:e.label})},e.name)});return(0,o.useEffect)(function(){i.current.scrollIntoView({behavior:"smooth",block:"end",inline:"start"})},[]),(0,n.jsx)(F,{children:(0,n.jsx)("div",{className:N().optionsContainer,ref:i,children:d.length>0?d:(0,n.jsx)("p",{children:"No options available"})})})}function A(){var e,t=(0,o.useContext)(c),a=t.gridData,r=t.dispatch,i=a.rowData,l=a.colData,d=(0,o.useState)(l),u=d[0],g=d[1],_=(0,o.useState)(),x=_[0],v=_[1],D=(0,o.useState)(!1),m=D[0],C=D[1],T=(0,o.useState)(),j=T[0],w=T[1],E=(0,o.useState)(!1),S=E[0],F=E[1],R=function(e,t){r({type:"UPDATEROW",payload:{updatedRowData:(0,s.Z)(i.sort(function(a,n){if(!a[e])return 1;if(!n[e])return -1;var r="id"===e?a.id:a[e].value,i="id"===e?n.id:n[e].value;return r===i?0:t?r<i?1:-1:r>i?1:-1}))}})},N=function(e){v(e),C(!0)},A=(e=(0,p.Z)(function(e){var t,a;return(0,f.__generator)(this,function(n){return x===e||(a=(t=(0,s.Z)(l)).splice(x,1)[0],t.splice(e,0,a),v(e),r({type:"UPDATECOL",payload:{updatedColData:t}})),[2]})}),function(t){return e.apply(this,arguments)}),O=function(){v(),g(l),C(!1)},G=function(){x&&(v(void 0),r({type:"UPDATECOL",payload:{updatedColData:u}}))},H=function(e){w(e)},k=function(){F(!S)},P=function(e){r({type:"UPDATECOL",payload:{updatedColData:(0,s.Z)(l).splice(e,1)}})},W=l.filter(function(e){return e.display}).map(function(e,t){return(0,n.jsx)(y,{cellColData:e,order:t,dragStart:N,dragEnter:A,dragDrop:O,dragEnd:G,isDragging:x===t,dragActive:m,sortByField:R,isSorting:j===e.name,updateActiveSort:H,deleteColumn:P,tempDragPos:x},e.name)});return(0,n.jsxs)("div",{className:h().headerRow,children:[W,(0,n.jsxs)("div",{className:h().dropdownWrapper,children:[(0,n.jsx)("button",{className:h().addColButton,onClick:k,children:(0,n.jsx)(b.Z,{})}),S?(0,n.jsx)(Z,{}):null]})]})}var O=a(4924),G=a(6060),H=a.n(G),k=a(2610);function P(e){var t=e.gridCells,a=e.order,r=e.startDragController,i=e.dragOverController,o=e.dragDropController,l=e.dragEndController,d=e.isDragging,s=e.dragActive,c=function(e){var t=new Image;r(a),e.dataTransfer.setDragImage(t,0,0),e.dataTransfer.effectAllowed="move"},u=function(e){e.preventDefault(),i(a)},p=function(){o()},f=function(){l()};return(0,n.jsxs)("div",{className:"".concat(H().gridRow," ").concat(d&&H().isDragging),onDrop:s?p:null,onDragOver:s?u:null,children:[(0,n.jsx)("button",{className:"".concat(H().dragButton," ").concat(H().hideButton),onDragStart:c,onDragEnd:s?f:null,draggable:!0,children:(0,n.jsx)(k.Z,{})}),t,d&&(0,n.jsx)("span",{className:H().dragging})]})}var W=a(5433),B=a.n(W);function I(e){var t=e.initialGridValue,a=e.cellData,r=e.cellColData,i=e.updateGridData,l=e.options,d=(0,o.useState)(t),s=d[0],c=d[1],u=function(){i(a.id,a.name,s)},p=function(e){c(e.target.value),e.target.parentNode.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0}))},f=l.map(function(e){return(0,n.jsx)("option",{value:e,disabled:e===s,children:e},e)}),g=(0,n.jsx)("select",{onChange:p,autoFocus:!0,children:f});return(0,n.jsx)("div",{className:B().picklistCell,children:(0,n.jsx)(w,{gridEditElement:g,submitAction:u,readValue:s,cellColData:r})})}var V=a(6392),L=a.n(V);function U(e){var t=e.initialGridValue,a=e.updateGridData,r=e.cellData,i=e.cellColData,l=(0,o.useState)("Test"),d=l[0],s=l[1],c=(0,o.useState)(t),u=c[0],p=c[1],f=function(){a(r.id,r.name,u),s(u)},g=function(e){p(e.target.value)};return(0,n.jsx)("div",{className:L().textCell,children:(0,n.jsx)(w,{gridEditElement:(0,n.jsx)("input",{value:u,onChange:g,autoFocus:!0}),cancelAction:function(){return p(d)},submitAction:f,readValue:u,cellColData:i})})}var M=a(4903),z=a.n(M),Y=a(9653),K=a.n(Y);function X(e){var t=e.gridDataModel,a=(0,o.useState)({}),r=a[0],i=a[1],s=(0,o.useState)(!1),c=s[0],u=s[1],p=function(){u(!0)},f=function(){u(!1)},g=function(e){e.preventDefault(),console.log(r)},h=function(e){i((0,d.Z)((0,l.Z)({},r),(0,O.Z)({},e.target.id,e.target.value)))},_=t.map(function(e){return(0,n.jsxs)("div",{className:K().formInput,children:[(0,n.jsx)("label",{htmlFor:e.name,children:e.label}),(0,n.jsx)("input",{type:"text",id:e.name,value:r.field,onChange:h})]},e.name)});return(0,n.jsxs)("div",{className:K().gridAddRowContainer,children:[(0,n.jsx)("button",{className:K().addRowButton,onClick:p,children:(0,n.jsx)(b.Z,{})}),c&&(0,n.jsx)("div",{className:K().dialogContainer,onClick:f,children:(0,n.jsx)("div",{className:K().dialogContent,onClick:function(e){return e.stopPropagation()},children:(0,n.jsxs)("form",{className:K().formContainer,onSubmit:g,children:[_,(0,n.jsx)("button",{className:K().formSubmit,children:"Submit"})]})})})]})}var Q=[{label:"ID",name:"id",colWidth:"200px",display:!0},{label:"Test One",name:"testFieldOne",dataType:"text",colWidth:"200px",display:!0},{label:"Test Two",name:"testFieldTwo",dataType:"picklist",picklist:["option one","option two","option three","option four"],colWidth:"300px",display:!0},{label:"Test Three",name:"testFieldThree",dataType:"text",colWidth:"250px",display:!0},{label:"Test Four",name:"testFieldFour",dataType:"text",colWidth:"250px",display:!0},{label:"Test Five",name:"testFieldFive",dataType:"text",colWidth:"250px",display:!0},{label:"Test Six",name:"testFieldSix",dataType:"text",colWidth:"250px",display:!1},{label:"Test Seven",name:"testFieldSeven",dataType:"text",colWidth:"250px",display:!1},{label:"Test Eight",name:"testFieldEight",dataType:"text",colWidth:"250px",display:!1}],J=a(940);function q(){var e=(0,o.useContext)(c),t=e.gridData,a=e.dispatch,r=t.objData,i=t.rowData,u=t.colData,g=(0,o.useState)(),h=g[0],_=g[1],x=(0,o.useState)((0,s.Z)(i)),v=x[0],D=x[1],m=(0,o.useState)(!1),C=m[0],T=m[1],j=(0,o.useState)(!1),y=j[0],b=j[1],E=(0,o.useRef)(),S=(0,o.useRef)(),F=function(e,t,n){var r=i.findIndex(function(t){return t.id===e});console.log(t),a({type:"UPDATEROW",payload:{updatedRowData:(0,s.Z)(i.slice(0,r)).concat([(0,d.Z)((0,l.Z)({},i[r]),(0,O.Z)({},t,(0,d.Z)((0,l.Z)({},i[r][t]),{value:n})))],(0,s.Z)(i.slice(r+1)))}})},R=function(e){_(e),T(!0)},N=function(e){if(h!==e){var t=(0,s.Z)(i),n=t.splice(h,1)[0];t.splice(e,0,n),_(e),a({type:"UPDATEROW",payload:{updatedRowData:t}})}},Z=function(e){N(e)},A=function(){_(),D(i)},G=function(){T(!1),void 0!==_&&(_(),a({type:"UPDATEROW",payload:{updatedRowData:v}}))};(0,o.useEffect)(function(){if(0!==r.length){var e,t=E.current.lastChild,n=(e=(0,p.Z)(function(e){return(0,f.__generator)(this,function(t){switch(t.label){case 0:if(!e[0].isIntersecting)return[2];return b(!0),[4,new Promise(function(e){setTimeout(function(){return e("OK")},1500)})];case 1:return t.sent(),a({type:"LOADRECORDS"}),b(!1),[2]}})}),function(t){return e.apply(this,arguments)}),i=new IntersectionObserver(n,{root:null,rootMargin:"5px",threshold:.02});return i.observe(t),function(){return i.unobserve(t)}}},[i]);var H=i?i.map(function(e,t){var a=u.filter(function(e){return e.display}).map(function(t){if(t.display){if(!e[t.name])return(0,n.jsx)(w,{cellData:e,cellColData:t},"".concat(t.name,"_").concat(e.id));switch(!0){case"id"===t.name:return(0,n.jsx)(w,{readValue:e.id,cellData:e,cellColData:t},"".concat(t.name,"_").concat(e.id));case"picklist"===t.dataType:return(0,n.jsx)(I,{initialGridValue:e[t.name].value,cellData:e,cellColData:t,updateGridData:F,options:e[t.name].options},"".concat(t.name,"_").concat(e.id));case"text"===t.dataType:return(0,n.jsx)(U,{initialGridValue:e[t.name].value,cellData:e,cellColData:t,updateGridData:F},"".concat(t.name,"_").concat(e.id));default:return(0,n.jsx)(w,{textValue:e[t.name].value})}}});return(0,n.jsx)(P,{gridCells:a,startDragController:R,dragOverController:Z,dragDropController:A,dragEndController:G,moveRow:N,order:t,isDragging:t===h,dragActive:C},e.id)}):null;return(0,n.jsxs)("div",{className:z().gridRowController,children:[(0,n.jsx)("div",{className:z().gridRows,ref:E,children:H}),(0,n.jsx)(X,{gridDataModel:Q}),y&&(0,n.jsx)("div",{className:z().loadingBanner,ref:S,children:(0,n.jsx)(J.Z,{fontSize:"large"})})]})}var $=a(2095),ee=a.n($);function et(e){var t=e.colData,a=e.objData,r=(0,o.useState)(t),i=r[0],l=r[1];return(0,n.jsx)(u,{initialColData:t,initialObjData:a,children:(0,n.jsx)("div",{className:ee().gridContainer,children:(0,n.jsxs)("div",{className:ee().grid,children:[(0,n.jsx)(A,{headerData:i,setHeaderData:l}),(0,n.jsx)(q,{})]})})})}var ea=a(5897),en=a.n(ea);function er(){var e=(0,o.useRef)(0),t=(0,o.useRef)();return(0,o.useEffect)(function(){var a,n=function(){0===window.scrollY&&(a=!1),a||(window.scrollY>e.current&&window.scrollY>0?t.current.classList.add(en().hide):window.scrollY<e.current&&t.current.classList.remove(en().hide),e.current=window.scrollY,a=!0,setTimeout(function(){return a=!1},300))};return setTimeout(function(){return document.addEventListener("scroll",n)},500),function(){document.removeEventListener("scroll",n)}},[]),(0,n.jsx)("header",{className:en().header,ref:t,children:(0,n.jsx)("h1",{children:"Grid"})})}var ei=a(1673),eo=a.n(ei),el=[{label:"ID",name:"id",colWidth:100,display:!0},{label:"Test One",name:"testFieldOne",dataType:"text",colWidth:200,display:!0},{label:"Test Two",name:"testFieldTwo",dataType:"picklist",colWidth:200,display:!0},{label:"Test Three",name:"testFieldThree",dataType:"text",colWidth:200,display:!0},{label:"Test Four",name:"testFieldFour",dataType:"text",colWidth:200,display:!0},{label:"Test Five",name:"testFieldFive",dataType:"text",colWidth:200,display:!0},{label:"Test Six",name:"testFieldSix",dataType:"text",colWidth:200,display:!1},{label:"Test Seven",name:"testFieldSeven",dataType:"text",colWidth:200,display:!1},{label:"Test Eight",name:"testFieldEight",dataType:"text",colWidth:200,display:!1}],ed=function(e){for(var t=[],a=0;a<e;a++)t.push({id:a+1,testFieldOne:{value:"Field One ".concat(a),dataType:"text"},testFieldTwo:{value:"Field Two ".concat(a),dataType:"picklist",options:["Not a Test","Test 1-2","Picklist Stuff","Hello World"]},testFieldThree:{value:"Field Three ".concat(a),dataType:"text"},testFieldFour:{value:"Field Four ".concat(a),dataType:"text"},testFieldFive:{value:"Field Five ".concat(a),dataType:"text"},testFieldSix:{value:"Field Six ".concat(a),dataType:"text"},testFieldSeven:{value:"Field Seven ".concat(a),dataType:"text"},testFieldEight:{value:"Field Eight ".concat(a),dataType:"text"}});return t};function es(){return(0,n.jsxs)("div",{className:eo().container,children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"Grid"}),(0,n.jsx)("meta",{name:"description",content:"Grid App"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(er,{}),(0,n.jsx)("main",{className:eo().main,children:(0,n.jsx)(et,{colData:el,objData:ed(100)})}),(0,n.jsx)("footer",{className:eo().footer,children:(0,n.jsx)("p",{children:"Footer Stuff Here"})})]})}},4898:function(e){e.exports={dropdownContainer:"Dropdown_dropdownContainer__cL8Am"}},2095:function(e){e.exports={gridContainer:"Grid_gridContainer__6a3W6",grid:"Grid_grid__dSAVC"}},9653:function(e){e.exports={dialogContainer:"GridAddRowDialog_dialogContainer__rZuQT",dialogContent:"GridAddRowDialog_dialogContent__jX2Fx",formContainer:"GridAddRowDialog_formContainer__ybIMS",formInput:"GridAddRowDialog_formInput__aJoSL",formSubmit:"GridAddRowDialog_formSubmit__ZD_dr"}},7801:function(e){e.exports={gridCellContainer:"GridCell_gridCellContainer__I7R3s",displayText:"GridCell_displayText__RIVmT",gridEditMode:"GridCell_gridEditMode__UPxNZ"}},8079:function(e){e.exports={headerRow:"GridHeader_headerRow__Hswbi",addColButton:"GridHeader_addColButton__EvgPy",dropdownWrapper:"GridHeader_dropdownWrapper__Y39Bz",dragActive:"GridHeader_dragActive__vESsm"}},8998:function(e){e.exports={optionsContainer:"GridHeaderAddColDropdown_optionsContainer__FDD_v",option:"GridHeaderAddColDropdown_option___K8Gr"}},6060:function(e){e.exports={gridRow:"GridRow_gridRow__ERzcx",dragButton:"GridRow_dragButton__1U3pe",dragging:"GridRow_dragging__G5LYt",isDragging:"GridRow_isDragging__HdKC7"}},4903:function(e){e.exports={gridRowController:"GridRowController_gridRowController__QKHAO",loadingBanner:"GridRowController_loadingBanner__vOttv",hourglassAnimation:"GridRowController_hourglassAnimation__lfJ_7"}},1041:function(e){e.exports={headerCell:"HeaderCell_headerCell__9VVDj",disableOverflow:"HeaderCell_disableOverflow__5aZuv",cellContent:"HeaderCell_cellContent__iBlsr",sortButton:"HeaderCell_sortButton__hIX5s",flipButton:"HeaderCell_flipButton__4kHeM",highlightButton:"HeaderCell_highlightButton__VU3s7",isDragging:"HeaderCell_isDragging__ttCLA",currentDragTarget:"HeaderCell_currentDragTarget__SnSFV",leftDragTarget:"HeaderCell_leftDragTarget__0RKnk",rightDragTarget:"HeaderCell_rightDragTarget__1d3ip",leftDragPlaceholder:"HeaderCell_leftDragPlaceholder__1Igmk",rightDragPlaceholder:"HeaderCell_rightDragPlaceholder__Xqp96"}},5433:function(e){e.exports={picklistCell:"PicklistGridCell_picklistCell__2G7kX"}},6392:function(e){e.exports={textCell:"TextGridCell_textCell__Np7a6"}},5897:function(e){e.exports={header:"Header_header__Z8PUO",fadeIn:"Header_fadeIn__vQn66",hide:"Header_hide__syVsa",fadeOut:"Header_fadeOut__0lnIQ"}},3284:function(e){e.exports={tooltipContainer:"Tooltip_tooltipContainer__e05oa",tooltipText:"Tooltip_tooltipText__exuTC"}},1673:function(e){e.exports={container:"Home_container__97eC3",footer:"Home_footer__zed0_"}}},function(e){e.O(0,[91,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);