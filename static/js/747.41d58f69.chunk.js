"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[747],{1687:function(n,t,e){e.d(t,{R8:function(){return s},dB:function(){return l},oV:function(){return p},tx:function(){return f},zv:function(){return d}});var r=e(5861),a=e(7757),o=e.n(a),i=e(1243),c="https://api.themoviedb.org/3",u="a9accf560553954898139d3fe730a4a1",p=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(c,"/trending/movie/week?api_key=").concat(u,"&page=1"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(c,"/search/movie?api_key=").concat(u,"&query=").concat(t));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(c,"/movie/").concat(t,"?api_key=").concat(u));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(u));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(u));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()},8866:function(n,t,e){e.d(t,{a:function(){return o}});var r=e(5243),a=e(184),o=function(){return(0,a.jsx)(r.CJ,{height:"150",width:"150",color:"black",ariaLabel:"triangle-loading",wrapperStyle:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},wrapperClassName:"",visible:!0})}},2049:function(n,t,e){e.d(t,{e:function(){return m}});var r,a,o,i,c=e(7689),u=e(2791),p=e(8866),s=e(168),l=e(1087),d=e(6444),f=d.ZP.ul(r||(r=(0,s.Z)(["\n  display: grid;\n  max-width: calc(100vw - 70px);\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=d.ZP.li(a||(a=(0,s.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),h=d.ZP.img(o||(o=(0,s.Z)(["\n  width: 100%;\n  height: 550px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  margin-bottom: 8px;\n  &:hover {\n    transform: scale(1.03);\n    cursor: pointer;\n  }\n"]))),g=(0,d.ZP)(l.rU)(i||(i=(0,s.Z)(["\n  text-decoration: none;\n  color: black;\n  &:hover {\n    color: darkorange;\n  }\n"]))),v=e(184),m=function(n){var t=n.movies,e=(0,c.TH)();return(0,v.jsxs)("div",{children:[(0,v.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,v.jsx)(x,{children:(0,v.jsxs)(g,{to:"/movies/".concat(t),state:{from:e},children:[(0,v.jsx)(h,{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://via.placeholder.com/250x375",alt:"movie"}),(0,v.jsx)("p",{children:r})]})},t)}))}),(0,v.jsx)(u.Suspense,{fallback:(0,v.jsx)(p.a,{}),children:(0,v.jsx)(c.j3,{})})]})}},5747:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,o,i,c,u=e(9439),p=e(1087),s=e(2791),l=e(168),d=e(6444),f=d.ZP.form(r||(r=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),x=d.ZP.input(a||(a=(0,l.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),h=d.ZP.span(o||(o=(0,l.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),g=d.ZP.button(i||(i=(0,l.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n"]))),v=d.ZP.div(c||(c=(0,l.Z)(["\ntop: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  margin-bottom: 20px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);"]))),m=e(184);function b(n){var t=n.onSubmit,e=(0,s.useState)(""),r=(0,u.Z)(e,2),a=r[0],o=r[1];return(0,m.jsx)(v,{children:(0,m.jsxs)(f,{onSubmit:function(n){n.preventDefault(),""!==a.trim()?(t(a),o("")):alert("enter value")},children:[(0,m.jsx)(g,{type:"submit",children:(0,m.jsx)(h,{children:"Search"})}),(0,m.jsx)(x,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:a,onChange:function(n){o(n.currentTarget.value.toLowerCase())}})]})})}var w=e(1687),Z=e(2049),k=e(8866),y=function(){var n,t=(0,p.lr)(),e=(0,u.Z)(t,2),r=e[0],a=e[1],o=null!==(n=r.get("query"))&&void 0!==n?n:"",i=(0,s.useState)([]),c=(0,u.Z)(i,2),l=c[0],d=c[1],f=(0,s.useState)(!1),x=(0,u.Z)(f,2),h=x[0],g=x[1],v=(0,s.useState)(null),y=(0,u.Z)(v,2),j=y[0],S=y[1];(0,s.useEffect)((function(){d([]),g(!0),(0,w.R8)(o).then((function(n){d(n.results)})).catch((function(n){return S(n)})).finally((function(){g(!1)}))}),[o]);return(0,m.jsxs)("main",{children:[j&&(0,m.jsx)("h2",{children:j.message}),(0,m.jsx)(b,{onSubmit:function(n){a(""!==n?{query:n}:{})}}),l.length>0&&(0,m.jsx)(Z.e,{movies:l}),h&&(0,m.jsx)(k.a,{})]})}}}]);
//# sourceMappingURL=747.41d58f69.chunk.js.map