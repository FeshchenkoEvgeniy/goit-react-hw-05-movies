"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[806],{1687:function(n,t,e){e.d(t,{R8:function(){return p},dB:function(){return f},oV:function(){return s},tx:function(){return v},zv:function(){return l}});var r=e(5861),c=e(7757),a=e.n(c),u=e(1243),o="https://api.themoviedb.org/3",i="a9accf560553954898139d3fe730a4a1",s=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"/trending/movie/week?api_key=").concat(i,"&page=1"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()},1806:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r,c,a=e(9439),u=e(1687),o=e(168),i=e(6444),s=i.ZP.p(r||(r=(0,o.Z)(["\n  margin: 8px 0;\n"]))),p=i.ZP.li(c||(c=(0,o.Z)(["\n  padding: 6px;\n  margin: 8px 0;\n  border-radius: 5px;\n  background-color: whitesmoke;\n"]))),f=e(2791),l=e(7689),v=e(184),h=function(){var n=(0,f.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1],c=(0,l.UO)().movieId;return(0,f.useEffect)((function(){(0,u.tx)(c).then((function(n){return r(n.results)})).catch((function(n){return console.log(n)}))}),[c]),(0,v.jsx)("section",{children:e.length<=0?(0,v.jsx)("h2",{children:"We don't have any revies for the movie."}):(0,v.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,v.jsxs)(p,{children:[(0,v.jsxs)("h3",{children:["Author: ",e]}),(0,v.jsx)(s,{children:r})]},t)}))})})}}}]);
//# sourceMappingURL=806.86f006e0.chunk.js.map