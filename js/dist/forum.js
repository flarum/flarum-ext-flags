module.exports=function(t){var n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=67)}([function(t,n){t.exports=flarum.core.compat.app},function(t,n,o){"use strict";o.d(n,"a",function(){return a});var e=o(25),r=o.n(e);function a(t,n){t.prototype=r()(n.prototype),t.prototype.constructor=t,t.__proto__=n}},function(t,n){t.exports=flarum.core.compat.extend},function(t,n){t.exports=flarum.core.compat.Model},function(t,n){var o=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=o)},function(t,n,o){t.exports=!o(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var o=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=o)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,o){var e=o(8);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n,o){t.exports=o(51)},function(t,n){t.exports=flarum.core.compat["components/Button"]},function(t,n,o){var e=o(42),r=o(15);t.exports=Object.keys||function(t){return e(t,r)}},function(t,n,o){var e=o(6),r=o(4),a=o(49),s=o(47),i=o(21),c=function(t,n,o){var u,l,f,p=t&c.F,m=t&c.G,d=t&c.S,g=t&c.P,h=t&c.B,v=t&c.W,y=m?r:r[n]||(r[n]={}),b=y.prototype,x=m?e:d?e[n]:(e[n]||{}).prototype;for(u in m&&(o=n),o)(l=!p&&x&&void 0!==x[u])&&i(y,u)||(f=l?x[u]:o[u],y[u]=m&&"function"!=typeof x[u]?o[u]:h&&l?a(f,e):v&&x[u]==f?function(t){var n=function(n,o,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,o)}return new t(n,o,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):g&&"function"==typeof f?a(Function.call,f):f,g&&((y.virtual||(y.virtual={}))[u]=f,t&c.R&&b&&!b[u]&&s(b,u,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){t.exports=flarum.core.compat["components/Post"]},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,o){var e=o(37)("keys"),r=o(35);t.exports=function(t){return e[t]||(e[t]=r(t))}},function(t,n){var o=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:o)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,o){var e=o(41);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n,o){var e=o(19),r=o(18);t.exports=function(t){return e(r(t))}},function(t,n){var o={}.hasOwnProperty;t.exports=function(t,n){return o.call(t,n)}},function(t,n,o){var e=o(8),r=o(6).document,a=e(r)&&e(r.createElement);t.exports=function(t){return a?r.createElement(t):{}}},function(t,n,o){var e=o(9),r=o(46),a=o(45),s=Object.defineProperty;n.f=o(5)?Object.defineProperty:function(t,n,o){if(e(t),n=a(n,!0),e(o),r)try{return s(t,n,o)}catch(t){}if("get"in o||"set"in o)throw TypeError("Accessors not supported!");return"value"in o&&(t[n]=o.value),t}},function(t,n){t.exports=flarum.core},function(t,n,o){t.exports=o(32)},function(t,n,o){var e=o(18);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=flarum.core.compat["utils/PostControls"]},function(t,n,o){var e=o(6).document;t.exports=e&&e.documentElement},function(t,n,o){var e=o(23),r=o(9),a=o(12);t.exports=o(5)?Object.defineProperties:function(t,n){r(t);for(var o,s=a(n),i=s.length,c=0;i>c;)e.f(t,o=s[c++],n[o]);return t}},function(t,n,o){var e=o(9),r=o(29),a=o(15),s=o(16)("IE_PROTO"),i=function(){},c=function(){var t,n=o(22)("iframe"),e=a.length;for(n.style.display="none",o(28).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;e--;)delete c.prototype[a[e]];return c()};t.exports=Object.create||function(t,n){var o;return null!==t?(i.prototype=e(t),o=new i,i.prototype=null,o[s]=t):o=c(),void 0===n?o:r(o,n)}},function(t,n,o){var e=o(13);e(e.S,"Object",{create:o(30)})},function(t,n,o){o(31);var e=o(4).Object;t.exports=function(t,n){return e.create(t,n)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){var o=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++o+e).toString(36))}},function(t,n){t.exports=!0},function(t,n,o){var e=o(4),r=o(6),a=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,n){return a[t]||(a[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:o(36)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n,o){var e=o(17),r=Math.max,a=Math.min;t.exports=function(t,n){return(t=e(t))<0?r(t+n,0):a(t,n)}},function(t,n,o){var e=o(17),r=Math.min;t.exports=function(t){return t>0?r(e(t),9007199254740991):0}},function(t,n,o){var e=o(20),r=o(39),a=o(38);t.exports=function(t){return function(n,o,s){var i,c=e(n),u=r(c.length),l=a(s,u);if(t&&o!=o){for(;u>l;)if((i=c[l++])!=i)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===o)return t||l||0;return!t&&-1}}},function(t,n){var o={}.toString;t.exports=function(t){return o.call(t).slice(8,-1)}},function(t,n,o){var e=o(21),r=o(20),a=o(40)(!1),s=o(16)("IE_PROTO");t.exports=function(t,n){var o,i=r(t),c=0,u=[];for(o in i)o!=s&&e(i,o)&&u.push(o);for(;n.length>c;)e(i,o=n[c++])&&(~a(u,o)||u.push(o));return u}},function(t,n,o){"use strict";var e=o(12),r=o(34),a=o(33),s=o(26),i=o(19),c=Object.assign;t.exports=!c||o(7)(function(){var t={},n={},o=Symbol(),e="abcdefghijklmnopqrst";return t[o]=7,e.split("").forEach(function(t){n[t]=t}),7!=c({},t)[o]||Object.keys(c({},n)).join("")!=e})?function(t,n){for(var o=s(t),c=arguments.length,u=1,l=r.f,f=a.f;c>u;)for(var p,m=i(arguments[u++]),d=l?e(m).concat(l(m)):e(m),g=d.length,h=0;g>h;)f.call(m,p=d[h++])&&(o[p]=m[p]);return o}:c},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,o){var e=o(8);t.exports=function(t,n){if(!e(t))return t;var o,r;if(n&&"function"==typeof(o=t.toString)&&!e(r=o.call(t)))return r;if("function"==typeof(o=t.valueOf)&&!e(r=o.call(t)))return r;if(!n&&"function"==typeof(o=t.toString)&&!e(r=o.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,n,o){t.exports=!o(5)&&!o(7)(function(){return 7!=Object.defineProperty(o(22)("div"),"a",{get:function(){return 7}}).a})},function(t,n,o){var e=o(23),r=o(44);t.exports=o(5)?function(t,n,o){return e.f(t,n,r(1,o))}:function(t,n,o){return t[n]=o,t}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,o){var e=o(48);t.exports=function(t,n,o){if(e(t),void 0===n)return t;switch(o){case 1:return function(o){return t.call(n,o)};case 2:return function(o,e){return t.call(n,o,e)};case 3:return function(o,e,r){return t.call(n,o,e,r)}}return function(){return t.apply(n,arguments)}}},function(t,n,o){var e=o(13);e(e.S+e.F,"Object",{assign:o(43)})},function(t,n,o){o(50),t.exports=o(4).Object.assign},,,function(t,n){t.exports=flarum.core.compat["utils/ItemList"]},function(t,n,o){t.exports=o(70)},function(t,n){t.exports=flarum.core.compat["components/NotificationsDropdown"]},function(t,n){t.exports=flarum.core.compat["components/HeaderSecondary"]},function(t,n){t.exports=flarum.core.compat["components/Modal"]},function(t,n){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,n){t.exports=flarum.core.compat["helpers/icon"]},function(t,n){t.exports=flarum.core.compat["helpers/username"]},function(t,n){t.exports=flarum.core.compat["helpers/avatar"]},function(t,n){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,n){t.exports=flarum.core.compat.Component},function(t,n){t.exports=flarum.core.compat["components/Page"]},,function(t,n,o){"use strict";o.r(n);var e=o(10),r=o.n(e),a=o(0),s=o.n(a),i=o(3),c=o.n(i),u=o(1),l=function(t){function n(){return t.apply(this,arguments)||this}return Object(u.a)(n,t),n}(c.a);r()(l.prototype,{type:c.a.attribute("type"),reason:c.a.attribute("reason"),reasonDetail:c.a.attribute("reasonDetail"),createdAt:c.a.attribute("createdAt",c.a.transformDate),post:c.a.hasOne("post"),user:c.a.hasOne("user")});var f=l,p=o(65),d=o.n(p),g=o(64),h=o.n(g),v=o(63),y=o.n(v),b=o(62),x=o.n(b),_=o(61),O=o.n(_),N=o(60),j=o.n(N),w=o(59),F=o.n(w),P=function(t){function n(){return t.apply(this,arguments)||this}Object(u.a)(n,t);var o=n.prototype;return o.init=function(){this.loading=!1},o.view=function(){var t=app.cache.flags||[];return m("div",{className:"NotificationList FlagList"},m("div",{className:"NotificationList-header"},m("h4",{className:"App-titleControl App-titleControl--text"},app.translator.trans("flarum-flags.forum.flagged_posts.title"))),m("div",{className:"NotificationList-content"},m("ul",{className:"NotificationGroup-content"},t.length?t.map(function(t){var n=t.post();return m("li",null,m("a",{href:app.route.post(n),className:"Notification Flag",config:function(t,o){m.route.apply(this,arguments),o||$(t).on("click",function(){return app.cache.flagIndex=n})}},x()(n.user()),j()("fas fa-flag",{className:"Notification-icon"}),m("span",{className:"Notification-content"},app.translator.trans("flarum-flags.forum.flagged_posts.item_text",{username:O()(n.user()),em:m("em",null),discussion:n.discussion().title()})),F()(t.createdAt()),m("div",{className:"Notification-excerpt"},n.contentPlain())))}):this.loading?y.a.component({className:"LoadingIndicator--block"}):m("div",{className:"NotificationList-empty"},app.translator.trans("flarum-flags.forum.flagged_posts.empty_text")))))},o.load=function(){var t=this;app.cache.flags&&!app.session.user.attribute("newFlagCount")||(this.loading=!0,m.redraw(),app.store.find("flags").then(function(t){app.session.user.pushAttributes({newFlagCount:0}),app.cache.flags=t.sort(function(t,n){return n.createdAt()-t.createdAt()})}).catch(function(){}).then(function(){t.loading=!1,m.redraw()}))},n}(h.a),k=function(t){function n(){return t.apply(this,arguments)||this}Object(u.a)(n,t);var o=n.prototype;return o.init=function(){t.prototype.init.call(this),app.history.push("flags"),this.list=new P,this.list.load(),this.bodyClass="App--flags"},o.view=function(){return m("div",{className:"FlagsPage"},this.list.render())},n}(d.a),M=o(2),S=o(27),A=o.n(S),C=o(11),E=o.n(C),D=o(58),T=function(t){function n(){return t.apply(this,arguments)||this}Object(u.a)(n,t);var o=n.prototype;return o.init=function(){t.prototype.init.call(this),this.success=!1,this.reason=m.prop(""),this.reasonDetail=m.prop("")},o.className=function(){return"FlagPostModal Modal--small"},o.title=function(){return app.translator.trans("flarum-flags.forum.flag_post.title")},o.content=function(){if(this.success)return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},app.translator.trans("flarum-flags.forum.flag_post.confirmation_message")),m("div",{className:"Form-group"},m(E.a,{className:"Button Button--primary Button--block",onclick:this.hide.bind(this)},app.translator.trans("flarum-flags.forum.flag_post.dismiss_button")))));var t=app.forum.attribute("guidelinesUrl");return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"off_topic"===this.reason(),value:"off_topic",onclick:m.withAttr("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_off_topic_label")),app.translator.trans("flarum-flags.forum.flag_post.reason_off_topic_text")),m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"inappropriate"===this.reason(),value:"inappropriate",onclick:m.withAttr("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_inappropriate_label")),app.translator.trans("flarum-flags.forum.flag_post.reason_inappropriate_text",{a:t?m("a",{href:t,target:"_blank"}):void 0})),m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"spam"===this.reason(),value:"spam",onclick:m.withAttr("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_spam_label")),app.translator.trans("flarum-flags.forum.flag_post.reason_spam_text")),m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"other"===this.reason(),value:"other",onclick:m.withAttr("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_other_label")),"other"===this.reason()?m("textarea",{className:"FormControl",value:this.reasonDetail(),oninput:m.withAttr("value",this.reasonDetail)}):""))),m("div",{className:"Form-group"},m(E.a,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading,disabled:!this.reason()},app.translator.trans("flarum-flags.forum.flag_post.submit_button")))))},o.onsubmit=function(t){var n=this;t.preventDefault(),this.loading=!0,app.store.createRecord("flags").save({reason:"other"===this.reason()?null:this.reason(),reasonDetail:this.reasonDetail(),relationships:{user:app.session.user,post:this.props.post}}).then(function(){return n.success=!0}).catch(function(){}).then(this.loaded.bind(this))},n}(o.n(D).a),I=function(){Object(M.extend)(A.a,"userControls",function(t,n){!n.isHidden()&&"comment"===n.contentType()&&n.canFlag()&&n.user()!==s.a.session.user&&t.add("flag",m(E.a,{icon:"fas fa-flag",onclick:function(){return s.a.modal.show(new T({post:n}))}},s.a.translator.trans("flarum-flags.forum.post_controls.flag_button")))})},B=o(57),L=o.n(B),R=o(56),G=function(t){function n(){return t.apply(this,arguments)||this}Object(u.a)(n,t),n.initProps=function(n){n.label=n.label||app.translator.trans("flarum-flags.forum.flagged_posts.tooltip"),n.icon=n.icon||"fas fa-flag",t.initProps.call(this,n)};var o=n.prototype;return o.init=function(){t.prototype.init.call(this),this.list=new P},o.goToRoute=function(){m.route(app.route("flags"))},o.getUnreadCount=function(){return app.cache.flags?app.cache.flags.length:app.forum.attribute("flagCount")},o.getNewCount=function(){return app.session.user.attribute("newFlagCount")},n}(o.n(R).a),U=function(){Object(M.extend)(L.a.prototype,"items",function(t){s.a.forum.attribute("canViewFlags")&&t.add("flags",m(G,null),15)})},z=o(55),H=o.n(z),W=o(14),q=o.n(W),V=o(54),J=o.n(V),K=function(){Object(M.extend)(q.a.prototype,"attrs",function(t){this.props.post.flags().length&&(t.className+=" Post--flagged")}),q.a.prototype.dismissFlag=function(t){var n=this.props.post;return delete n.data.relationships.flags,this.subtree.invalidate(),s.a.cache.flags&&s.a.cache.flags.some(function(t,o){if(t.post()===n){if(s.a.cache.flags.splice(o,1),s.a.cache.flagIndex===n){var e=s.a.cache.flags[o];if(e||(e=s.a.cache.flags[0]),e){var r=e.post();s.a.cache.flagIndex=r,m.route(s.a.route.post(r))}}return!0}}),s.a.request({url:s.a.forum.attribute("apiUrl")+n.apiEndpoint()+"/flags",method:"DELETE",data:t})},q.a.prototype.flagActionItems=function(){var t=this,n=new J.a,o=A.a.destructiveControls(this.props.post);return H()(o.items).forEach(function(n){var e=o.get(n).props;e.className="Button",Object(M.extend)(e,"onclick",function(){return t.dismissFlag()})}),n.add("controls",m("div",{className:"ButtonGroup"},o.toArray())),n.add("dismiss",m(E.a,{className:"Button",icon:"far fa-eye-slash",onclick:this.dismissFlag.bind(this)},s.a.translator.trans("flarum-flags.forum.post.dismiss_flag_button")),-100),n},Object(M.extend)(q.a.prototype,"content",function(t){var n=this,o=this.props.post,e=o.flags();e.length&&(o.isHidden()&&(this.revealContent=!0),t.unshift(m("div",{className:"Post-flagged"},m("div",{className:"Post-flagged-flags"},e.map(function(t){return m("div",{className:"Post-flagged-flag"},n.flagReason(t))})),m("div",{className:"Post-flagged-actions"},this.flagActionItems().toArray()))))}),q.a.prototype.flagReason=function(t){if("user"===t.type()){var n=t.user(),o=t.reason(),e=t.reasonDetail();return[s.a.translator.trans(o?"flarum-flags.forum.post.flagged_by_with_reason_text":"flarum-flags.forum.post.flagged_by_text",{user:n,reason:o}),e?m("span",{className:"Post-flagged-detail"},e):""]}}},Q={addFlagsToPosts:K,addFlagControl:I,addFlagsDropdown:U,"models/Flag":f,"components/FlagList":P,"components/FlagPostModal":T,"components/FlagsPage":k,"components/FlagsDropdown":G},X=o(24);s.a.initializers.add("flarum-flags",function(){s.a.store.models.posts.prototype.flags=c.a.hasMany("flags"),s.a.store.models.posts.prototype.canFlag=c.a.attribute("canFlag"),s.a.store.models.flags=f,s.a.routes.flags={path:"/flags",component:m(k,null)},I(),U(),K()}),r()(X.compat,Q)},function(t,n,o){var e=o(13),r=o(4),a=o(7);t.exports=function(t,n){var o=(r.Object||{})[t]||Object[t],s={};s[t]=n(o),e(e.S+e.F*a(function(){o(1)}),"Object",s)}},function(t,n,o){var e=o(26),r=o(12);o(68)("keys",function(){return function(t){return r(e(t))}})},function(t,n,o){o(69),t.exports=o(4).Object.keys}]);
//# sourceMappingURL=forum.js.map