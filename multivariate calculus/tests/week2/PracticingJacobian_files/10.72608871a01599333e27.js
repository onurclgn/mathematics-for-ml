(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/n4p":function(module,exports,e){"use strict";exports.getDeviceDimensions=function(){var e=void 0,t=void 0;if("undefined"!=typeof document&&"undefined"!=typeof window){var r,o=window.screen,i,n;if(void 0!==window.screen)e=o.height,t=o.width;else e=window.innerHeight,t=window.innerWidth}else e=0,t=0;return{deviceHeight:e,deviceWidth:t}},exports.isCompatibleWithMobile=function(e){var t=e.supportsTouch,r=e.minWidthPx,o=e.minHeightPx,i=exports.getDeviceDimensions(),n=i.deviceWidth,s=i.deviceHeight;if(!1===t)return!1;if(void 0!==r&&r>n)return!1;if(void 0!==o&&o>s)return!1;return!0}},"3lwQ":function(module,exports,e){"use strict";var t,r=_interopRequireDefault(e("J610")),o=e("vpeK"),i,n=_interopRequireDefault(e("IAOZ"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var s=function refreshProgress(e,t,r,i){r.setState(t,{refreshCourseProgress:!0}),e.executeAction(o.updateProgress,{courseProgress:i})};exports.markItemComplete=function(e,t){var o=t.itemId,i=t.courseId,a=t.userId,u=t.itemProgress,l=t.courseProgress,d=t.sessionId;return r.default.markComplete(o,i,a,d).then(s(e,n.default.progressCompleted,u,l))},exports.markItemStarted=function(e,t){var o=t.itemId,i=t.courseId,a=t.userId,u=t.itemProgress,l=t.courseProgress,d=t.sessionId;return r.default.markStarted(o,i,a,d).then(s(e,n.default.progressStarted,u,l))}},FwJf:function(module,exports,e){"use strict";var t,r=_interopRequireDefault(e("iCc5")),o,i=_interopRequireDefault(e("FYw3")),n,s=_interopRequireDefault(e("mRg0")),a,u,l,d=_interopRequireWildcard(e("sbe7")),c,p=_interopRequireDefault(e("w/1P")),m=e("MnCE"),f=e("Bgbc"),g,v=_interopRequireDefault(e("wiyT")),h,I=_interopRequireDefault(e("sQ/U")),C,D=_interopRequireDefault(e("y1LI")),R,b=_interopRequireDefault(e("dT9E")),w=e("lmGf"),P=e("ZmB8"),y=e("/n4p"),q=e("3lwQ"),M,S=_interopRequireDefault(e("rFDR")),x,W=_interopRequireDefault(e("h3JU")),E,k=_interopRequireDefault(e("Uyjj")),T,F=_interopRequireDefault(e("JK8X")),O,A=_interopRequireDefault(e("eBhw")),U,j=_interopRequireDefault(e("tODj")),N,J=_interopRequireDefault(e("gABk")),L,B=_interopRequireDefault(e("b+bd"));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}e("W9re");var z=[P.RPCActions.SET_COMPLETE],H=(u=a=function(e){function WidgetItem(){var t,o,n;(0,r.default)(this,WidgetItem);for(var s=arguments.length,a=Array(s),u=0;u<s;u++)a[u]=arguments[u];return t=o=(0,i.default)(this,e.call.apply(e,[this].concat(a))),o.state={iFrameMessages:[],widgetId:(0,w.generateId)(),itemProgressState:null,markCompleteDeferred:null},o.onReceiveMessage=function(e){var t=o.state.iFrameMessages;if(t.push(e),o.setState({iFrameMessages:t}),e.type===P.RPCActions.SET_COMPLETE){o.markComplete();var r=v.default.defer();return o.setState({markCompleteDeferred:r}),r.promise}return(0,v.default)()},o.markComplete=function(){var e=o.props,t=e.computedCourseProgress.courseProgress,r=e.computedItem,i=e.courseId,n=e.sessionId,s=t.getItemProgress(r.id),a=I.default.get().id,u=r.id;o.context.executeAction(q.markItemComplete,{itemId:u,courseId:i,userId:a,itemProgress:s,courseProgress:t,sessionId:n})},o.markStarted=function(){var e=o.props,t=e.computedCourseProgress.courseProgress,r=e.computedItem,i=e.courseId,n=e.sessionId,s=t.getItemProgress(r.id),a=I.default.get().id,u=r.id;o.context.executeAction(q.markItemStarted,{itemId:u,courseId:i,userId:a,itemProgress:s,courseProgress:t,sessionId:n})},o.isOnMobile=function(){var e,t=o.context.getStore("ApplicationStore").getUserAgent(),r=t&&t.isMobileBrowser;return b.default.get()||r},n=t,(0,i.default)(o,n)}return(0,s.default)(WidgetItem,e),WidgetItem.prototype.componentWillReceiveProps=function componentWillReceiveProps(e){var t=this.props,r=t.computedItem,o,i=t.computedCourseProgress.courseProgress.getItemProgress(r.id);i.getState()!==this.state.itemProgressState&&(this.setState({itemProgressState:i.getState()}),this.state.markCompleteDeferred&&(this.state.markCompleteDeferred.resolve(),this.setState({markCompleteDeferred:null})))},WidgetItem.prototype.render=function render(){var e=this,t=this.props,r=t.session,o=t.sessionId,i=t.computedItem;if(!r)return d.createElement("div",{className:"horizontal-box align-items-absolute-center widget-iframe"},d.createElement(D.default,{name:"spinner",size:"2x",spin:!0,className:"color-hint-text"}));if(this.isOnMobile()&&!(0,y.isCompatibleWithMobile)(i.contentSummary.definition))return d.createElement(k.default,{name:i.name});return d.createElement("div",{className:(0,p.default)("rc-WidgetItem",{mobile:this.isOnMobile()})},d.createElement(S.default,{inWidgetItem:!0,session:r,sessionId:o,widgetId:this.state.widgetId,parentRpcActions:z,isComplete:i.isCompleted,widgetContentTitle:i.name,markComplete:function markComplete(){e.markComplete()}}),d.createElement(f.Box,{justifyContent:"end",style:{marginTop:"50px",borderTop:"1px solid #ddd",paddingTop:"15px"}},d.createElement(W.default,{computedItem:i,itemFeedbackType:"widget"})))},WidgetItem}(d.Component),a.contextTypes={executeAction:d.PropTypes.func.isRequired,getStore:d.PropTypes.func},u),G=(0,F.default)(H,function(e,t){var r=e.computedItem,o=e.courseId,i=e.courseSlug,n;return new A.default({itemId:r.id,courseId:o,courseSlug:i}).getWithUserCourseItemId("onDemandWidgetSessions.v1",{fields:["session","sessionId"]}).then(function(e){var t=e.elements[0],r,o;return{session:t.session,sessionId:t.sessionId}})}),K=(0,m.compose)((0,j.default)(),(0,J.default)(),(0,B.default)(["CourseStore"],function(e){var t=e.CourseStore;return{courseId:t.getCourseId(),courseSlug:t.getCourseSlug()}}))(G);module.exports=K},G4vT:function(module,exports,e){var t=e("cHCS"),r;"string"==typeof t&&(t=[[module.i,t,""]]);var o={transform:void 0},i=e("aET+")(t,o);t.locals&&(module.exports=t.locals)},J610:function(module,exports,e){"use strict";var t,r=_interopRequireDefault(e("wiyT")),o,i;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=(0,_interopRequireDefault(e("CWYE")).default)("/api/onDemandWidgetProgress.v1",{type:"rest"}),s={markComplete:function markComplete(e,t,o,i){var s={data:{sessionId:i,progressState:"Completed"}},a=[o,t,e].join("~");return(0,r.default)(n.put(a,s))},markStarted:function markStarted(e,t,o,i){var s={data:{sessionId:i,progressState:"Started"}},a=[o,t,e].join("~");return(0,r.default)(n.put(a,s))}};module.exports=s},JK8X:function(module,exports,e){"use strict";var t,r=_interopRequireDefault(e("QbLZ")),o,i=_interopRequireDefault(e("iCc5")),n,s=_interopRequireDefault(e("FYw3")),a,u=_interopRequireDefault(e("mRg0"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var l=e("sbe7"),d=function componentDataFetcher(e,t){var o,n,a=e.displayName||e.name,d=(n=o=function(o){function DataFetcherComponent(){var e,t,r;(0,i.default)(this,DataFetcherComponent);for(var n=arguments.length,u=Array(n),l=0;l<n;l++)u[l]=arguments[l];return e=t=(0,s.default)(this,o.call.apply(o,[this].concat(u))),t.displayName=a+"DataFetcher",t.state={isComponentLoaded:!1},r=e,(0,s.default)(t,r)}return(0,u.default)(DataFetcherComponent,o),DataFetcherComponent.prototype.componentDidMount=function componentDidMount(){var e=this,o=this.props,i=this.context,n=i.router,s=t(o,n.params,i).then(function(t){e.setState((0,r.default)({isComponentLoaded:!0},t))});s.catch&&s.catch(function(e){throw e}),s.done&&s.done()},DataFetcherComponent.prototype.render=function render(){return l.createElement(e,(0,r.default)({},this.props,this.state))},DataFetcherComponent}(l.Component),o.contextTypes={executeAction:l.PropTypes.func,router:l.PropTypes.object},n);return d.BaseComp=e,d};module.exports=d},L18G:function(module,exports,e){},Uyjj:function(module,exports,e){"use strict";var t,r=_interopRequireDefault(e("iCc5")),o,i=_interopRequireDefault(e("FYw3")),n,s=_interopRequireDefault(e("mRg0")),a,u=_interopRequireWildcard(e("sbe7")),l=e("kvW3");e("G4vT");var d,c=_interopRequireDefault(e("gKW9"));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var p="https://s3.amazonaws.com/coursera_assets/widget/svgcomputer.svg",m=function(e){function UnavailableOnMobileMessage(){return(0,r.default)(this,UnavailableOnMobileMessage),(0,i.default)(this,e.apply(this,arguments))}return(0,s.default)(UnavailableOnMobileMessage,e),UnavailableOnMobileMessage.prototype.render=function render(){var e=this.props.name;return u.createElement("div",{className:"rc-UnavailableOnMobileMessage vertical-box align-items-absolute-center"},u.createElement("div",{className:"headline-5-text p-x-1"},e),u.createElement("div",{className:"body-1-text p-x-1 p-b-2"},u.createElement(l.FormattedMessage,{message:(0,c.default)("This item was not designed for use on a small screen.")})),u.createElement("div",{className:"align-horizontal-center p-b-2"},u.createElement("img",{className:"computer-icon",src:p,alt:(0,c.default)("Computer Icon"),height:"120",width:"220"})),u.createElement("div",{className:"body-1-text horizontal-box align-horizontal-center p-x-1"},u.createElement(l.FormattedMessage,{message:(0,c.default)("Please use a computer or laptop to complete this item.")})))},UnavailableOnMobileMessage}(u.Component);module.exports=m},W9re:function(module,exports,e){var t=e("L18G"),r;"string"==typeof t&&(t=[[module.i,t,""]]);var o={transform:void 0},i=e("aET+")(t,o);t.locals&&(module.exports=t.locals)},cHCS:function(module,exports,e){}}]);
//# sourceMappingURL=10.72608871a01599333e27.js.map