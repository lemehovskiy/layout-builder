(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports={toolPanel:"ToolPanel_toolPanel__1Jn6W","tool-panel-block":"ToolPanel_tool-panel-block__19uCp","tool-panel-block__name":"ToolPanel_tool-panel-block__name__34ZxT","input-group-item":"ToolPanel_input-group-item__1OBU_","input-group":"ToolPanel_input-group__3zCxg"}},122:function(e,t,n){e.exports=n(313)},20:function(e,t,n){e.exports={swatch:"colorPicker_swatch__HUpOg",color:"colorPicker_color__3caBW",colorNone:"colorPicker_colorNone__3YwZs",colorPicker:"colorPicker_colorPicker__3l6wo","reset-btn":"colorPicker_reset-btn__3NTuq"}},311:function(e,t,n){},313:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(30),i=n.n(c),r=n(10),s=n(8),l=n(77),u=n(118),d=n(119),h=n.n(d),b=n(121),p=n(38),j=n(9);function f(e,t,n){var o=Object(j.a)({},e.objectsByHash);return t.forEach(function(e){o[e]=Object(j.a)({},o[e],n)}),Object(j.a)({},e,{objectsByHash:o})}function m(e,t,n,o){var a=Object(j.a)({},e.objectsByHash);return t.forEach(function(e){a[e]=Object(j.a)({},a[e],Object(p.a)({},o,Object(j.a)({},a[e][o],n)))}),Object(j.a)({},e,{objectsByHash:a})}var v={},g={},O=Object(s.c)({svgRender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n={};switch(t.type){case"svgRender/SELECT_OBJECTS":return Object(j.a)({},e,{selectedObjectsId:e.selectedObjectsId.concat(t.payload.ids)});case"svgRender/DESELECT_ALL_OBJECTS":return Object(j.a)({},e,{selectedObjectsId:[]});case"svgRender/DESELECT_ALL_OBJECTS_EXEPT":return Object(j.a)({},e,{selectedObjectsId:[t.payload]});case"svgRender/MOVE_OBJECT":return f(e,t.ids,t.payload);case"svgRender/SET_SELECTED_OBJECTS_EDIT_START_POSITION":return n=Object(j.a)({},e.objectsByHash),e.selectedObjectsId.forEach(function(e){n[e]=Object(j.a)({},n[e],{editStartPositionOffset:{x:t.payload.x-n[e].x,y:t.payload.y-n[e].y}})}),Object(j.a)({},e,{objectsByHash:n});case"svgRender/RESIZE_OBJECTS":return f(e,t.ids,t.payload);case"svgRender/ROTATE_OBJECT":return f(e,[t.id],t.payload);case"textTool/SET_VERTICAL_ALIGN":case"textTool/SET_TEXT_ALIGN":return m(e,e.selectedObjectsId,t.payload,"textProps");case"textTool/SET_FILL_COLOR":case"textTool/SET_STROKE_COLOR":case"textTool/SET_STROKE_WIDTH":return f(e,e.selectedObjectsId,t.payload);case"svgRender/ADD_NEW_OBJECT":return Object(j.a)({},e,{objectsById:[].concat(Object(b.a)(e.objectsById),[t.id]),objectsByHash:Object(j.a)({},e.objectsByHash,Object(p.a)({},t.id,t.payload.object))});case"svgRender/UPDATE_OBJECT_TEXT":return f(e,[t.id],t.payload);default:return e}},layoutBuilder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"layoutBuilder/SET_MOUSE_START_POSITION":return Object(j.a)({},e,{mouseStartPosition:{x:t.x,y:t.y}});case"laoutBuilder/SET_NEW_FIGURE_DRAG_DATA":return Object(j.a)({},e,{newFigureDragData:t.data});default:return e}}}),y=h()(),E=[u.a,Object(l.routerMiddleware)(y)],x=s.d.apply(void 0,[s.a.apply(void 0,E)].concat([])),S=Object(s.e)(Object(l.connectRouter)(y)(O),{layoutBuilder:{newFigureDragData:null,mouseStartPosition:{x:null,y:null}},svgRender:{editMode:null,mousePosition:{x:null,y:null},selectedObjectsId:[],objectsById:["1","2"],objectsByHash:{1:{id:"1",width:163,height:84,rotate:0,strokeWidth:3,stroke:"rgba(135, 38, 86, 1)",fill:"rgba(0, 123, 255, 1)",radius:"0",type:"rectangle",x:17,y:15,text:"Lorem ipsum \n dolor",textProps:{textAlign:"center",verticalAlign:"top"}},2:{id:"2",width:200,height:300,rotate:0,stroke:"rgba(0, 255, 57, 1)",strokeWidth:5,fill:"rgba(0, 123, 255, 1)",radius:"0",type:"rectangle",x:200,y:50,text:"Lorem ipsum \n dolor",textProps:{textAlign:"right",verticalAlign:"bottom"}}}}},x),T=n(3),C=n(4),k=n(6),_=n(5),w=n(7),P=function(e){return function(t){t({type:"svgRender/UPDATE_EDIT_MODE",mode:e})}},D=function(e,t){return function(n){n({type:"layoutBuilder/SET_MOUSE_START_POSITION",x:e,y:t})}},M=function(e){return function(t){t({type:"svgRender/SELECT_OBJECTS",payload:{ids:e}})}},I=function(){return function(e){e({type:"svgRender/DESELECT_ALL_OBJECTS"})}},R=function(e){return function(t){t({type:"svgRender/DESELECT_ALL_OBJECTS_EXEPT",payload:e})}},B=function(e){var t=e.ids,n=e.payload;return function(e){e({type:"svgRender/MOVE_OBJECT",ids:t,payload:n})}},N=function(e,t){return function(n){n({type:"svgRender/SET_SELECTED_OBJECTS_EDIT_START_POSITION",payload:{x:e,y:t}})}},A=function(e){var t=e.ids,n=e.payload;return function(e){e({type:"svgRender/RESIZE_OBJECTS",ids:t,payload:n})}},L=function(e){var t=e.id,n=e.rotate;return function(e){e({type:"svgRender/ROTATE_OBJECT",id:t,payload:{rotate:n}})}},z=function(e){return function(t){t({type:"textTool/SET_TEXT_ALIGN",payload:{textAlign:e}})}},H=function(e){return function(t){t({type:"textTool/SET_VERTICAL_ALIGN",payload:{verticalAlign:e}})}},U=function(e){return function(t){t({type:"textTool/SET_FILL_COLOR",payload:{fill:null===e?"none":"rgba(".concat(e.r,", ").concat(e.g,", ").concat(e.b,", ").concat(e.a,")")}})}},F=function(e){return function(t){t({type:"textTool/SET_STROKE_COLOR",payload:{stroke:null===e?"none":"rgba(".concat(e.r,", ").concat(e.g,", ").concat(e.b,", ").concat(e.a,")")}})}},W=function(e){return function(t){t({type:"textTool/SET_STROKE_WIDTH",payload:{strokeWidth:e}})}},X=function(e){return function(t){t({type:"svgRender/ADD_NEW_OBJECT",id:e.id,payload:{object:e}})}},J=function(e){var t=e.id,n=e.text;return function(e){e({type:"svgRender/UPDATE_OBJECT_TEXT",id:t,payload:{text:n}})}},Y=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(k.a)(this,Object(_.a)(t).call(this,e))).onDoubleClick=function(e){n.setState({mode:"editText"})},n.onMouseUp=function(e){var t=n.props,o=t.object,a=t.mouseStartPosition,c=t.deselectAllObjectsExept,i=a.x!==e.clientX||a.y!==e.clientY;e.shiftKey||i||(console.log("Vector onMouseUp"),c(o.id))},n.onMouseDown=function(e){console.log("Vector onMouseDown");var t=n.props,o=t.object,a=t.selectObjects,c=t.selectedObjectsId,i=t.deselectAllObjects,r=t.setSelectedObjectsEditStartPosition,s=c.includes(o.id);n.setState({mode:"default"}),e.shiftKey||s||i(),s||a([o.id]),r(e.clientX,e.clientY),n.props.onMouseDown(e)},n.state={mode:"default"},n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"resetMode",value:function(){this.setState({mode:"default"})}},{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.object,o=e.selectedObjectsId,c=this.state.mode;return a.a.cloneElement(t,{onMouseUp:this.onMouseUp,onMouseDown:this.onMouseDown,onDoubleClick:this.onDoubleClick,object:n,selectedObjectsId:o,mode:c})}}]),t}(a.a.Component),V=Object(r.connect)(function(e){return{mouseStartPosition:e.layoutBuilder.mouseStartPosition}},function(e){return Object(s.b)({updateEditMode:P,setMouseStartPosition:D,selectObjects:M,deselectAllObjects:I,setSelectedObjectsEditStartPosition:N,deselectAllObjectsExept:R},e)})(Y),G=function(e){var t=e.mousePosition,n=e.mouseStartPosition,o=e.object;return-1*(180*Math.atan2(n.x+(o.width||0)/2-t.x,n.y+(o.height||0)/2-t.y)/Math.PI-45)},K=function(e){var t=e.rotate,n=e.x,o=e.y,a=e.width,c=e.height;if(t){var i=a/2+n,r=c/2+o;return"rotate(".concat(t," ").concat(i," ").concat(r,")")}},Z=function(e){return{transform:K(e)}},q=function(e){var t=e.object,n=e.onMouseDown,o=t.x+t.width/2-6,c=t.y-20;return a.a.createElement("g",Z(t),a.a.createElement("path",{cursor:"pointer",onMouseDown:n,transform:"translate("+o+" "+c+")",stroke:"rgb(0, 0, 0, 0)",strokeWidth:"5",d:"M5.1,0.2L4.4,0.8c-0.1,0.1-0.1,0.2,0,0.3l1.1,1.1C4.2,2.1,2.8,2.5,1.7,3.5c-2,1.8-2.1,4.9-0.3,6.8 c1.8,2,4.8,2.1,6.8,0.3c0.9-0.8,1.4-1.9,1.5-3.1c0-0.1-0.1-0.3-0.2-0.3l-0.9,0c-0.1,0-0.2,0.1-0.2,0.2C8.3,8.2,7.9,9,7.2,9.6 c-1.4,1.3-3.6,1.2-4.8-0.2C1.1,8,1.2,5.8,2.6,4.5c0.9-0.8,2-1.1,3.1-0.8L4.2,5c-0.1,0.1-0.1,0.2,0,0.3L4.8,6c0.1,0.1,0.2,0.1,0.3,0 L8,3.4c0.1-0.1,0.1-0.2,0-0.3L5.4,0.2C5.3,0.1,5.2,0.1,5.1,0.2z"}))},Q=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(k.a)(this,Object(_.a)(t).call(this,e))).onMouseMove=function(e){var t=n.props,o=t.object,a=t.rotateObject,c=n.state.mouseStartPosition,i={x:e.clientX,y:e.clientY};a({id:o.id,rotate:G({mousePosition:i,mouseStartPosition:c,object:o})})},n.onMouseUp=function(){n.setState({isRotate:!1,mouseStartPosition:{x:null,y:null}})},n.onMouseDown=function(e){n.setState({isRotate:!0,mouseStartPosition:{x:e.clientX,y:e.clientY}})},n.state={isRotate:!1,mouseStartPosition:{x:null,y:null}},n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"componentDidUpdate",value:function(){this.state.isRotate?(document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp)):(document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp))}},{key:"render",value:function(){var e=this.props.object;return a.a.createElement(q,{object:e,onMouseDown:this.onMouseDown})}}]),t}(a.a.PureComponent),$=Object(r.connect)(null,function(e){return Object(s.b)({rotateObject:L},e)})(Q),ee=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},te=function(e){var t=Object(j.a)({},e.object),n=e.mouse.y-e.mouseStartPosition.y,o=e.objectInitState.height+n;return t.y=o>0?e.objectInitState.y:e.objectInitState.y-Math.abs(o),t.height=Math.abs(o),Object(j.a)({},e,{object:t})},ne=function(e){var t=Object(j.a)({},e.object),n=e.mouse.y-e.mouseStartPosition.y,o=e.objectInitState.height-n;return t.y=o>0?e.objectInitState.y-(o-e.objectInitState.height):e.objectInitState.y+e.objectInitState.height,t.height=Math.abs(o),Object(j.a)({},e,{object:t})},oe=function(e){var t=Object(j.a)({},e.object),n=e.mouse.x-e.mouseStartPosition.x,o=e.objectInitState.width+n;return t.x=o<0?e.objectInitState.x+o:e.objectInitState.x,t.width=Math.abs(o),Object(j.a)({},e,{object:t})},ae=function(e){var t=Object(j.a)({},e.object),n=e.mouse.x-e.mouseStartPosition.x,o=e.objectInitState.width-n;return t.x=o>0?e.objectInitState.x+n:e.objectInitState.x+e.objectInitState.width,t.width=Math.abs(o),Object(j.a)({},e,{object:t})},ce=ee(ne,oe),ie=ee(te,oe),re=ee(te,ae),se=ee(ne,ae),le=function(e,t,n,o,a){var c=Object(j.a)({},a);switch(t){case"s":c=te({mouse:e,objectInitState:n,mouseStartPosition:o,object:a}).object;break;case"n":c=ne({mouse:e,objectInitState:n,mouseStartPosition:o,object:a}).object;break;case"e":c=oe({mouse:e,objectInitState:n,mouseStartPosition:o,object:a}).object;break;case"w":c=ae({mouse:e,objectInitState:n,mouseStartPosition:o,object:a}).object;break;case"ne":c=ce({mouse:e,objectInitState:n,mouseStartPosition:o,object:a}).object;break;case"se":c=ie({mouse:e,objectInitState:n,mouseStartPosition:o,object:a}).object;break;case"sw":c=re({mouse:e,objectInitState:n,mouseStartPosition:o,object:a}).object;break;case"nw":c=se({mouse:e,objectInitState:n,mouseStartPosition:o,object:a}).object}return c},ue=function(e){var t=e.object,n=e.onMouseDown,o=function(e){return[{name:"nw",x:e.x,y:e.y},{name:"n",x:e.x+e.width/2,y:e.y},{name:"ne",x:e.x+e.width,y:e.y},{name:"w",x:e.x,y:e.y+e.height/2},{name:"e",x:e.x+e.width,y:e.y+e.height/2},{name:"sw",x:e.x,y:e.y+e.height},{name:"s",x:e.x+e.width/2,y:e.y+e.height},{name:"se",x:e.x+e.width,y:e.y+e.height}]}(t);return a.a.createElement("g",Z(t),a.a.createElement("rect",{width:t.width,height:t.height,x:t.x,y:t.y,fill:"none",stroke:"#00a8ff",strokeDasharray:"3 3",pointerEvents:"none"}),o.map(function(e){return a.a.createElement("circle",{key:e.name,name:e.name,cx:e.x,cy:e.y,fill:"#34B7EF",r:"5",style:{cursor:e.name+"-resize"},onMouseDown:n})}))},de=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(k.a)(this,Object(_.a)(t).call(this,e))).onMouseMove=function(e){var t=n.props,o=t.object,a=t.resizeObjects,c=n.state,i=c.mouseStartPosition,r=c.resizeDirection,s=c.objectInitState,l={x:e.clientX,y:e.clientY},u=le(l,r,s,i,{x:o.x,y:o.y,width:o.width,height:o.height});a({ids:[o.id],payload:Object(j.a)({},u)})},n.onMouseUp=function(){n.setState({isResizing:!1,mouseStartPosition:{x:null,y:null}})},n.onMouseDown=function(e){var t=n.props.object;n.setState({isResizing:!0,objectInitState:Object(j.a)({},t),resizeDirection:e.target.getAttribute("name"),mouseStartPosition:{x:e.clientX,y:e.clientY}})},n.render=function(){return a.a.createElement(ue,{object:n.props.object,onMouseDown:n.onMouseDown})},n.state={isResizing:!1,mouseStartPosition:{x:null,y:null},resizeDirection:null,objectInitState:null},n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"componentDidUpdate",value:function(){this.state.isResizing?(document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp)):(document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp))}}]),t}(a.a.PureComponent),he=Object(r.connect)(null,function(e){return Object(s.b)({resizeObjects:A},e)})(de),be=function(e,t){var n=0;switch(e.textProps.verticalAlign){case"top":n=e.y;break;case"middle":n=e.y+e.height/2-t.height/2;break;case"bottom":n=e.y+e.height-t.height;break;default:n=e.y+e.height/2-t.height/2}return{width:e.width,height:t.height,overflow:"visible",x:e.x,y:n}},pe=function(e){var t=e.object,n=e.textSize,o=e.setRef;return a.a.createElement("g",null,a.a.createElement("foreignObject",Object.assign({pointerEvents:"none"},Z(t),be(t,n)),a.a.createElement("div",Object.assign({},function(e){return{style:{textAlign:e.textProps.textAlign}}}(t),{ref:o}),a.a.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block"}},t.text.split("\n").map(function(e,t){return a.a.createElement("div",{key:t},""===e?"\xa0":e)})))))},je=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(k.a)(this,Object(_.a)(t).call(this,e))).divTextWrapRef=a.a.createRef(),n.state={height:0,width:0},n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"onResize",value:function(){var e=this.divTextWrapRef.current.getBoundingClientRect(),t=e.height,n=e.width;this.setState({height:t,width:n})}},{key:"componentDidUpdate",value:function(e){e.object.width===this.props.object.width&&e.object.height===this.props.object.height||this.onResize()}},{key:"componentDidMount",value:function(){this.onResize()}},{key:"render",value:function(){var e=this.props.object;return a.a.createElement(pe,{object:e,textSize:this.state,setRef:this.divTextWrapRef})}}]),t}(a.a.Component),fe=n(120),me=function(e){var t=e.object,n=e.textSize,o=e.setRef,c=e.onInputChange,i=e.onHeightChange;return a.a.createElement("g",null,a.a.createElement("foreignObject",Object.assign({},Z(t),be(t,n)),a.a.createElement("div",{ref:o},a.a.createElement(fe.a,Object.assign({onHeightChange:i},function(e){return{style:{textAlign:e.textProps.textAlign,width:"100%",background:"transparent",border:"none",outline:"none",padding:0,margin:0}}}(t),{defaultValue:t.text,onChange:c})))))},ve=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(k.a)(this,Object(_.a)(t).call(this,e))).onHeightChange=function(){n.onResize()},n.onInputChange=function(e){n.props.updateObjectText({id:n.props.object.id,text:e.target.value}),n.onResize()},n.divTextWrapRef=a.a.createRef(),n.state={height:0,width:0},n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"onResize",value:function(){var e=this.divTextWrapRef.current.getBoundingClientRect(),t=e.height,n=e.width;this.setState({height:t,width:n})}},{key:"componentDidUpdate",value:function(e){e.object.width===this.props.object.width&&e.object.height===this.props.object.height||this.onResize()}},{key:"componentDidMount",value:function(){this.onResize()}},{key:"render",value:function(){var e=this.props.object;return a.a.createElement(me,{object:e,textSize:this.state,setRef:this.divTextWrapRef,onInputChange:this.onInputChange,onHeightChange:this.onHeightChange})}}]),t}(a.a.Component),ge=Object(r.connect)(null,function(e){return Object(s.b)({updateObjectText:J},e)})(ve),Oe=function(e){var t=e.object,n=e.onMouseDown,o=e.onMouseUp,c=e.onDoubleClick,i=e.selectedObjectsId,r=e.mode;return a.a.createElement("g",null,a.a.createElement("rect",Object.assign({},Z(t),{width:t.width,height:t.height,x:t.x,y:t.y,pointerEvents:"visible",cursor:"move",fill:t.fill,strokeWidth:t.strokeWidth,stroke:t.stroke,onMouseDown:n,onMouseUp:o,onDoubleClick:c})),t.text&&"editText"!==r?a.a.createElement(je,{object:t}):null,"editText"===r?a.a.createElement(ge,{object:t}):null,i.includes(t.id)?a.a.createElement("g",null,a.a.createElement(he,{object:t})," ",a.a.createElement($,{object:t})):null)},ye=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(k.a)(this,Object(_.a)(t).call(this,e))).onMouseMove=function(e){var t=n.state.isDrag,o=n.props,a=o.selectedObjects,c=o.moveObject;t&&a.forEach(function(t){c({ids:[t.id],payload:{x:e.clientX-t.editStartPositionOffset.x,y:e.clientY-t.editStartPositionOffset.y}})})},n.onMouseUp=function(e){n.setState({isDrag:!1})},n.onChildMouseDown=function(e){n.setState({isDrag:!0,mouseStartPosition:{x:e.clientX,y:e.clientY}})},n.state={isDrag:!1,mouseStartPosition:{x:null,y:null}},n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"componentDidUpdate",value:function(){this.state.isDrag?(document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp)):(document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp))}},{key:"render",value:function(){var e=this;return a.a.Children.map(this.props.children,function(t){return a.a.cloneElement(t,{onMouseDown:e.onChildMouseDown})})}}]),t}(a.a.PureComponent),Ee=Object(r.connect)(function(e){var t=e.svgRender;return{selectedObjects:t.selectedObjectsId.map(function(e){return t.objectsByHash[e]}),selectedObjectsId:t.selectedObjectsId}},function(e){return Object(s.b)({moveObject:B},e)})(ye),xe=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(k.a)(this,Object(_.a)(t).call(this,e))).onMouseDown=function(e){"svg-render"===e.target.id&&n.objectChild.resetMode()},n.objectChild=a.a.createRef(),n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.objectsById,o=t.objectsByHash,c=t.selectedObjectsId;return a.a.createElement("svg",{id:"svg-render",width:"800",height:"500",onMouseDown:this.onMouseDown.bind(this)},a.a.createElement(Ee,null,n.map(function(t,n){var i=null;switch(o[t].type){case"rectangle":i=a.a.createElement(Oe,null);break;case"text":i=a.a.createElement(pe,null)}return a.a.createElement(V,{onRef:function(t){return e.objectChild=t},key:n,object:o[t],selectedObjectsId:c},i)})))}}]),t}(a.a.Component),Se=Object(r.connect)(function(e){var t=e.svgRender;e.resizeTool,e.layoutBuilder;return{selectedObjectsId:t.selectedObjectsId,objectsById:t.objectsById,objectsByHash:t.objectsByHash}},null)(function(e){var t=e.selectedObjectsId,n=e.objectsById,o=e.objectsByHash;return a.a.createElement(xe,{selectedObjectsId:t,objectsById:n,objectsByHash:o})}),Te=n(53),Ce=n.n(Te),ke=[{value:"top",label:"Top"},{value:"middle",label:"Middle"},{value:"bottom",label:"Bottom"}],_e=function(e){function t(){return Object(T.a)(this,t),Object(k.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(C.a)(t,[{key:"onClick",value:function(e){this.props.setVerticalAlign(e.target.value)}},{key:"render",value:function(){var e=this,t=this;return a.a.createElement("div",null,"Vertical Align",a.a.createElement("div",{className:"vertical-align-btn-group"},ke.map(function(n){return a.a.createElement("button",{className:t.props.activeValue===n.value?"".concat(Ce.a["vertical-align-btn-group__btn_active"]):null,key:n.value,value:n.value,onClick:t.onClick.bind(e)},n.label)})))}}]),t}(a.a.Component),we=[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}],Pe=function(e){function t(){return Object(T.a)(this,t),Object(k.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(C.a)(t,[{key:"onClick",value:function(e){this.props.setTextAlign(e.target.value)}},{key:"render",value:function(){var e=this,t=this;return a.a.createElement("div",null,"Text Align",a.a.createElement("div",{className:"text-align-btn-group"},we.map(function(n){return a.a.createElement("button",{className:t.props.activeValue===n.value?"".concat(Ce.a["text-align-btn-group__btn_active"]):null,key:n.value,value:n.value,onClick:t.onClick.bind(e)},n.label)})))}}]),t}(a.a.Component);Object.byString=function(e,t){for(var n=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),o=0,a=n.length;o<a;++o){var c=n[o];if(!(c in e))return;e=e[c]}return e};var De=function(e,t){var n=[];return e.length>0&&e.forEach(function(e){n.push(Object.byString(e,t))}),n.every(function(e,t,n){return e===n[0]}),!!n.every(function(e,t,n){return e===n[0]})&&n[0]},Me=function(){return"_"+Math.random().toString(36).substr(2,9)},Ie=function(e,t){var n=e.getBoundingClientRect(),o=n.left,a=n.right,c=n.top,i=n.bottom;return t.x>o&&t.x<a&&t.y>c&&t.y<i},Re=function(e){function t(){return Object(T.a)(this,t),Object(k.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedObjectsByHash,n=e.setVerticalAlign,o=e.setTextAlign;return a.a.createElement("div",null,a.a.createElement(_e,{setVerticalAlign:n.bind(this),activeValue:De(t,"textProps.verticalAlign")}),a.a.createElement(Pe,{setTextAlign:o.bind(this),activeValue:De(t,"textProps.textAlign")}))}}]),t}(a.a.Component),Be=Object(r.connect)(function(e){var t=e.svgRender;return{selectedObjectsByHash:t.selectedObjectsId.map(function(e){return t.objectsByHash[e]}),selectedObjects:t.selectedObjectsId}},function(e){return Object(s.b)({setTextAlign:z,setVerticalAlign:H},e)})(Re),Ne=n(27),Ae=n.n(Ne),Le=n(11),ze=n.n(Le),He=function(e){function t(){return Object(T.a)(this,t),Object(k.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(C.a)(t,[{key:"onChange",value:function(e,t){var n="width"===e?{width:t}:{height:t};this.props.resizeObjects({ids:this.props.selectedObjectsId,payload:n})}},{key:"render",value:function(){return a.a.createElement("div",{className:"".concat(ze.a["tool-panel-block"]," ").concat(ze.a["tool-panel-block-size"])},a.a.createElement("div",{className:ze.a["tool-panel-block__name"]},"Size"),a.a.createElement("div",{className:ze.a["input-group"]},a.a.createElement("div",{className:ze.a["input-group-item"]},a.a.createElement(Ae.a,{value:De(this.props.selectedObjects,"width"),name:"width",onChange:this.onChange.bind(this,"width")}),"Width"),a.a.createElement("div",{className:ze.a["input-group-item"]},a.a.createElement(Ae.a,{value:De(this.props.selectedObjects,"height"),name:"height",onChange:this.onChange.bind(this,"height")}),"Height")))}}]),t}(a.a.Component),Ue=Object(r.connect)(function(e){var t=e.svgRender;e.resizeTool;return{selectedObjects:t.selectedObjectsId.map(function(e){return t.objectsByHash[e]}),selectedObjectsId:t.selectedObjectsId}},function(e){return Object(s.b)({resizeObjects:A},e)})(He),Fe=function(e){function t(){return Object(T.a)(this,t),Object(k.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(C.a)(t,[{key:"onChange",value:function(e,t){var n="x"===e?{x:t}:{y:t};this.props.moveObject({ids:this.props.selectedObjectsId,payload:n})}},{key:"render",value:function(){return a.a.createElement("div",{className:"".concat(ze.a["tool-panel-block"]," ").concat(ze.a["tool-panel-block-position"])},a.a.createElement("div",{className:ze.a["tool-panel-block__name"]},"Position"),a.a.createElement("div",{className:ze.a["input-group"]},a.a.createElement("div",{className:ze.a["input-group-item"]},a.a.createElement(Ae.a,{value:De(this.props.selectedObjects,"x"),name:"x",onChange:this.onChange.bind(this,"x")}),"Left"),a.a.createElement("div",{className:ze.a["input-group-item"]},a.a.createElement(Ae.a,{value:De(this.props.selectedObjects,"y"),name:"y",onChange:this.onChange.bind(this,"y")}),"Top")))}}]),t}(a.a.Component),We=Object(r.connect)(function(e){var t=e.svgRender;e.resizeTool;return{selectedObjects:t.selectedObjectsId.map(function(e){return t.objectsByHash[e]}),selectedObjectsId:t.selectedObjectsId}},function(e){return Object(s.b)({moveObject:B},e)})(Fe),Xe=n(54),Je=n(20),Ye=n.n(Je),Ve=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(k.a)(this,Object(_.a)(t).call(this,e))).state={displayColorPicker:!1},n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"handleReset",value:function(){this.props.setFillColor(null)}},{key:"handleClickSwatch",value:function(){this.setState({displayColorPicker:!this.state.displayColorPicker})}},{key:"handleChangeComplete",value:function(e){this.setState({color:e}),this.props.setFillColor(e.rgb)}},{key:"render",value:function(){var e=De(this.props.selectedObjects,"fill");return a.a.createElement("div",{className:"".concat(ze.a["tool-panel-block"]," ").concat(ze.a["tool-panel-block-fill"])},a.a.createElement("div",{className:ze.a["tool-panel-block__name"]},"Fill"),a.a.createElement("div",null,a.a.createElement("div",{className:Ye.a.swatch,onClick:this.handleClickSwatch.bind(this)},"none"===e||!1===e?a.a.createElement("div",{className:Ye.a.colorNone}):a.a.createElement("div",{style:{background:e},className:Ye.a.color})),a.a.createElement("button",{className:Ye.a["reset-btn"],onClick:this.handleReset.bind(this)},"Reset"),this.state.displayColorPicker?a.a.createElement(Xe.ChromePicker,{className:Ye.a.colorPicker,color:De(this.props.selectedObjects,"fill"),onChangeComplete:this.handleChangeComplete.bind(this)}):null))}}]),t}(a.a.Component),Ge=Object(r.connect)(function(e){var t=e.svgRender;return{selectedObjects:t.selectedObjectsId.map(function(e){return t.objectsByHash[e]}),selectedObjectsId:t.selectedObjectsId}},function(e){return Object(s.b)({setFillColor:U},e)})(Ve),Ke=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(k.a)(this,Object(_.a)(t).call(this,e))).state={displayColorPicker:!1},n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"handleReset",value:function(){this.props.setStrokeColor(null)}},{key:"handleClickSwatch",value:function(){this.setState({displayColorPicker:!this.state.displayColorPicker})}},{key:"handleChangeComplete",value:function(e){this.setState({color:e}),this.props.setStrokeColor(e.rgb)}},{key:"onChangeStrokeWidth",value:function(e,t){this.props.setStrokeWidth(t)}},{key:"render",value:function(){var e=De(this.props.selectedObjects,"stroke");return a.a.createElement("div",{className:"".concat(ze.a["tool-panel-block"])},a.a.createElement("div",{className:ze.a["tool-panel-block__name"]},"Line"),a.a.createElement("div",null,a.a.createElement("div",{className:Ye.a.swatch,onClick:this.handleClickSwatch.bind(this)},"none"===e||!1===e?a.a.createElement("div",{className:Ye.a.colorNone}):a.a.createElement("div",{style:{background:e},className:Ye.a.color})),a.a.createElement("button",{className:Ye.a["reset-btn"],onClick:this.handleReset.bind(this)},"Reset"),this.state.displayColorPicker?a.a.createElement(Xe.ChromePicker,{className:Ye.a.colorPicker,color:De(this.props.selectedObjects,"stroke"),onChangeComplete:this.handleChangeComplete.bind(this)}):null,a.a.createElement("div",{className:ze.a["input-group"]},a.a.createElement("div",{className:ze.a["input-group-item"]},a.a.createElement(Ae.a,{value:De(this.props.selectedObjects,"strokeWidth"),onChange:this.onChangeStrokeWidth.bind(this)})))))}}]),t}(a.a.Component),Ze=Object(r.connect)(function(e){var t=e.svgRender;return{selectedObjects:t.selectedObjectsId.map(function(e){return t.objectsByHash[e]}),selectedObjectsId:t.selectedObjectsId}},function(e){return Object(s.b)({setStrokeColor:F,setStrokeWidth:W},e)})(Ke),qe=n(39),Qe=n.n(qe),$e=function(e){return function(t){t({type:"laoutBuilder/SET_NEW_FIGURE_DRAG_DATA",data:e})}},et=function(e){function t(){return Object(T.a)(this,t),Object(k.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(C.a)(t,[{key:"handleFigureClick",value:function(e,t){var n=i.a.findDOMNode(this.refs[e]).getBoundingClientRect();this.props.setNewFigureDragData({figureType:e,figureOffset:{x:n.left-t.clientX,y:n.top-t.clientY}})}},{key:"render",value:function(){return a.a.createElement("div",{className:"".concat(ze.a["tool-panel-block"]," ").concat(ze.a["tool-panel-block-figures"])},a.a.createElement("div",{className:ze.a["tool-panel-block__name"]},"Figures"),a.a.createElement("div",null,a.a.createElement("input",{className:"".concat(Qe.a.rectangle),type:"button",onMouseDown:this.handleFigureClick.bind(this,"rectangle"),ref:"rectangle"})))}}]),t}(a.a.Component),tt=Object(r.connect)(null,function(e){return Object(s.b)({setNewFigureDragData:$e},e)})(et),nt=function(e){function t(){return Object(T.a)(this,t),Object(k.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:ze.a.toolPanel},a.a.createElement(tt,null),a.a.createElement(Be,null),a.a.createElement(We,null),a.a.createElement(Ue,null),a.a.createElement(Ge,null),a.a.createElement(Ze,null))}}]),t}(a.a.Component),ot=function(e){var t=e.objectPosition,n={left:t.x,top:t.y};return a.a.createElement("div",{className:"".concat(Qe.a["new-figure"]," ").concat(Qe.a.rectangle),style:n})},at=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(k.a)(this,Object(_.a)(t).call(this,e))).onMouseUp=function(e){if(null!==n.props.newFigureDragData){var t=i.a.findDOMNode(n.refs.SvgRenderContainer),o={x:e.clientX,y:e.clientY};Ie(t,o)&&n.props.addNewObject({id:Me(),width:30,height:20,stroke:"rgba(0, 0, 0, 1)",fill:"none",radius:"0",type:"rectangle",x:n.state.objectPosition.x,y:n.state.objectPosition.y}),n.resetData()}},n.getOffset=function(){var e=i.a.findDOMNode(n.refs.SvgRenderContainer).getBoundingClientRect();return{offsetX:e.x,offsetY:e.y}},n.onMouseMove=function(e){if(null!==n.props.newFigureDragData){var t=n.getOffset(),o=t.offsetX,a=t.offsetY;null!==n.props.newFigureDragData&&n.setState({objectPosition:{x:e.clientX-o+n.props.newFigureDragData.figureOffset.x,y:e.clientY-a+n.props.newFigureDragData.figureOffset.y}})}},n.recursiveCloneChildren=function(e){return a.a.Children.map(e,function(e){var t={};return a.a.isValidElement(e)&&(t={ref:e.ref}),t.children=n.recursiveCloneChildren(e.props.children),a.a.cloneElement(e,t)})},n.state={objectPosition:{x:null,y:null}},n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"resetData",value:function(){this.props.setNewFigureDragData(null),this.setState({mousePosition:{x:null,y:null}})}},{key:"render",value:function(){var e=this.state.objectPosition,t=this.props,n=t.newFigureDragData,o=t.children;return a.a.createElement("div",{className:"new-figure-drag-helper",onMouseMove:this.onMouseMove,onMouseUp:this.onMouseUp},this.recursiveCloneChildren(o),null!==n?a.a.createElement(ot,{objectPosition:e}):null)}}]),t}(a.a.PureComponent),ct=Object(r.connect)(function(e){return{newFigureDragData:e.layoutBuilder.newFigureDragData}},function(e){return Object(s.b)({setNewFigureDragData:$e,addNewObject:X},e)})(at),it=function(e){var t=e.selectToolPosition,n=e.selectToolSize,o={position:"absolute",top:t.y+"px",left:t.x+"px",width:n.width+"px",height:n.height+"px",border:"1px solid #6298F9",backgroundColor:"rgba(98, 152, 249, 0.3)"};return a.a.createElement("div",{style:o})},rt=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(k.a)(this,Object(_.a)(t).call(this,e))).getSvgOffset=function(){var e=n.selectToolContainerRef.current.getBoundingClientRect();return{offsetX:e.x,offsetY:e.y}},n.onMouseMove=function(e){return n.updateSelectToolData({x:e.clientX,y:e.clientY})},n.onMouseUp=function(){n.state.selectToolActive&&n.endSelect()},n.onMouseDown=function(e){"svg-render"===e.target.id&&(n.setState({selectToolActive:!0}),n.startSelect({mouseX:e.clientX,mouseY:e.clientY}))},n.selectToolContainerRef=a.a.createRef(),n.state={selectToolActive:!1,selectToolStartPoint:{x:null,y:null},selectToolSize:{width:null,height:null},selectToolPosition:{x:null,y:null}},n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"setSelectStartPosition",value:function(e){var t=this.getSvgOffset(),n=t.offsetX,o=t.offsetY;this.setState({selectToolStartPoint:{x:e.x-n,y:e.y-o}})}},{key:"startSelect",value:function(e){var t=e.mouseX,n=e.mouseY;this.setSelectStartPosition({x:t,y:n}),this.updateSelectToolData({x:t,y:n})}},{key:"endSelect",value:function(){this.handleSelectTool(),this.resetSelectToolData()}},{key:"handleSelectTool",value:function(){var e=this.state,t=e.selectToolPosition,n=e.selectToolSize,o=this.props,a=o.deselectAllObjects,c=o.selectObjects,i=o.objectsById,r=o.objectsByHash;if(a(),null!==n.width&&null!==n.height){var s=[];i.forEach(function(e){var o,a,c=r[e];o={x:c.x,y:c.y,width:c.width,height:c.height},a={x:t.x,y:t.y,width:n.width,height:n.height},o.x+o.width>=a.x&&o.x<=a.x+a.width&&o.y+o.height>=a.y&&o.y<=a.y+a.height&&s.push(c.id)}),s.length&&c(s)}}},{key:"resetSelectToolData",value:function(){this.setState({selectToolActive:!1,selectToolStartPoint:{x:null,y:null},selectToolSize:{width:null,height:null},selectToolPosition:{x:null,y:null}})}},{key:"updateSelectToolData",value:function(e){var t=this.getSvgOffset(),n={x:t.offsetX,y:t.offsetY},o=this.state.selectToolStartPoint;if(null!==o.x){var a=function(e,t,n){return{width:Math.abs(t.x-n.x-e.x),height:Math.abs(t.y-n.y-e.y)}}(o,e,n),c=function(e,t,n,o){return{x:t.x-n.x>e.x?e.x:e.x-o.width,y:t.y-n.y>e.y?e.y:e.y-o.height}}(o,e,n,a);this.setState({selectToolPosition:c,selectToolSize:a})}}},{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.selectToolActive,o=t.selectToolPosition,c=t.selectToolSize;return a.a.createElement("div",{onMouseDown:this.onMouseDown,onMouseMove:this.onMouseMove,onMouseUp:this.onMouseUp,ref:this.selectToolContainerRef,className:"select-tool-wrap"},e,n?a.a.createElement(it,{selectToolPosition:o,selectToolSize:c}):null)}}]),t}(a.a.Component),st=Object(r.connect)(function(e){var t=e.svgRender;return{objectsByHash:t.objectsByHash,objectsById:t.objectsById}},function(e){return Object(s.b)({deselectAllObjects:I,selectObjects:M},e)})(rt),lt=function(e){function t(){return Object(T.a)(this,t),Object(k.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"layout-builder"},a.a.createElement(ct,null,a.a.createElement(st,{ref:"SelectToolContainer"},a.a.createElement(Se,{ref:"SvgRenderContainer"})),a.a.createElement(nt,null)))}}]),t}(a.a.Component),ut=function(){return a.a.createElement("div",{className:"container"},a.a.createElement(lt,null))},dt=(n(309),n(311),document.querySelector("#root"));Object(c.render)(a.a.createElement(r.Provider,{store:S},a.a.createElement(ut,null)),dt)},39:function(e,t,n){e.exports={"new-figure":"Figures_new-figure__3cfVH",rectangle:"Figures_rectangle__2Q-nz"}},53:function(e,t,n){e.exports={"text-align-btn-group__btn_active":"TextPanel_text-align-btn-group__btn_active__Z4POU","vertical-align-btn-group__btn_active":"TextPanel_vertical-align-btn-group__btn_active__8HAZv"}}},[[122,2,1]]]);
//# sourceMappingURL=main.f1a2a65d.chunk.js.map