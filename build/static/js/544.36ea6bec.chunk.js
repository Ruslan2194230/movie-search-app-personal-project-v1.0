"use strict";(self.webpackChunkmovie_search_app_personal_project_v1_0=self.webpackChunkmovie_search_app_personal_project_v1_0||[]).push([[544],{7107:function(n,e,t){t.d(e,{Z:function(){return F}});var r,a,o,i,c,s,u,p=t(7689),d=t(168),l=t(225),f=l.Z.ul(r||(r=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  padding: 16px 0;\n  list-style: none;\n  margin: 0 auto;\n  max-width: calc(100vw - 32px); /* \u0423\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u043c \u043e\u0442\u0441\u0442\u0443\u043f\u044b */\n\n  @media (max-width: 1440px) {\n    /* \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u043e 4 \u0444\u0438\u043b\u044c\u043c\u0430 \u0432 \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u0430 \u043a\u043e\u043c\u043f\u0430\u0445 */\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  // @media (max-width: 992px) {\n  //   /* \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u043e 2 \u0444\u0438\u043b\u044c\u043c\u0430 \u0432 \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445 */\n  //   grid-template-columns: repeat(2, 1fr);\n  // }\n\n  @media (max-width: 1000px) {\n    /* \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u043e 2 \u0444\u0438\u043b\u044c\u043c\u0430 \u0432 \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u0430 \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u0430\u0445 */\n    grid-template-columns: repeat(2, minmax(0, 350px));\n  }\n  @media (max-width: 425px) {\n    /* \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u043e 2 \u0444\u0438\u043b\u044c\u043c\u0430 \u0432 \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u0430 \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u0430\u0445 */\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]))),v=t(2791),h=t(1087),m=l.Z.li(a||(a=(0,d.Z)(["\n  position: relative;\n  overflow: hidden;\n  max-width: 100%; /* \u0417\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0443\u044e \u0448\u0438\u0440\u0438\u043d\u0443 */\n\n  height: auto; /* \u0412\u044b\u0441\u043e\u0442\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0434 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 */\n\n  padding: 12px;\n  border-radius: 12px;\n  border: 1px solid #ddd;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n"]))),x=l.Z.img(o||(o=(0,d.Z)(["\n  width: 100%; /* \u0417\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u0432\u0441\u044e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0443\u044e \u0448\u0438\u0440\u0438\u043d\u0443 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 */\n  height: auto; /* \u041f\u043e\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0434 \u0441\u043e\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u0440\u043e\u043d \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f */\n  object-fit: cover; /* \u0417\u0430\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440, \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044f \u0441\u043e\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u0440\u043e\u043d */\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n"]))),g=l.Z.h3(i||(i=(0,d.Z)(["\n  font-size: 16px;\n  margin-top: 8px;\n"]))),Z=t(3585),w=t(5118),b=l.Z.div(c||(c=(0,d.Z)(["\n  position: relative;\n"]))),_=l.Z.button(s||(s=(0,d.Z)(["\n  position: absolute;\n  bottom: -30px;\n  right: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin-top: 10px;\n\n  &.favorite svg path {\n    fill: #ffc700;\n    stroke: #ffc700;\n  }\n\n  &:not(.favorite) svg path {\n    fill: green;\n    stroke: green;\n  }\n"]))),k=l.Z.span(u||(u=(0,d.Z)(["\n  width: 24px;\n  height: 24px;\n\n  svg {\n    width: 24px;\n    height: 24px;\n  }\n"]))),j=t(9439),y=t(184),E=function(n){var e=n.id,t=(0,w.r)(),r=t.isFavorite,a=t.addToFavoritesAndUpdate,o=t.removeFromFavoritesAndUpdate,i=(0,v.useState)(r(e)),c=(0,j.Z)(i,2),s=c[0],u=c[1];(0,v.useEffect)((function(){u(r(e))}),[e,r]);return(0,y.jsx)(_,{onClick:function(n){n.stopPropagation(),n.preventDefault(),s?o(e):a(e),u(!s)},className:s?"favorite":"",children:(0,y.jsx)(k,{children:(0,y.jsx)("svg",{viewBox:"0 0 32 32",children:(0,y.jsx)("path",{d:"M26,2H6A1,1,0,0,0,5,3V28a1,1,0,0,0,1.51.86L16,23.17l9.49,5.69A1,1,0,0,0,26,29a1,1,0,0,0,.49-.13A1,1,0,0,0,27,28V3A1,1,0,0,0,26,2ZM25,4V8H7V4ZM16.51,21.14a1,1,0,0,0-1,0L7,26.23V10H25V26.23Z",className:"cls-1"})})})})},U=function(n){var e=n.movie,t=n.location,r=e.id,a=e.original_title,o=e.poster_path;return(0,y.jsxs)(m,{children:[(0,y.jsx)(h.rU,{state:{from:t},to:"/movies/".concat(r),children:(0,y.jsxs)(b,{children:[(0,y.jsx)(x,{src:o?Z.f+o:Z.l+"?text="+a,alt:a}),(0,y.jsx)(E,{id:r})]})}),(0,y.jsx)(g,{children:a})]},r)},F=function(n){var e=n.movies,t=n.onRemoveFavorite,r=(0,p.TH)();return(0,y.jsx)(f,{children:e.map((function(n){return(0,y.jsx)(U,{movie:n,location:r,onRemoveFavorite:t},n.id)}))})}},9544:function(n,e,t){t.r(e);var r=t(9439),a=t(2791),o=t(9323),i=t(7107),c=t(184);e.default=function(){var n=(0,a.useState)([]),e=(0,r.Z)(n,2),t=e[0],s=e[1];return(0,a.useEffect)((function(){(0,o.Df)("").then(s)}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:"Trending today"}),(0,c.jsx)(i.Z,{movies:t})]})}},9323:function(n,e,t){t.d(e,{Df:function(){return s},Eb:function(){return d},Hu:function(){return l},Pg:function(){return p},Ph:function(){return u}});var r=t(5861),a=t(4687),o=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="3373af60a4ee1fe7510a1a61c11380e1",s=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("trending/movie/week?api_key=".concat(c));case 3:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 8:n.prev=8,n.t0=n.catch(0),console.error("Error fetching trending movies:",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("search/movie?api_key=".concat(c,"&query=").concat(e,"&language=en-US&page=").concat(t,"&include_adult=false"));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0),console.error("Error fetching movie by query:",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error("Error fetching movie by id:",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 8:n.prev=8,n.t0=n.catch(0),console.error("Error fetching cast movies:",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 8:n.prev=8,n.t0=n.catch(0),console.error("Error fetching reviews movie:",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},3585:function(n,e,t){t.d(e,{f:function(){return r},l:function(){return a}});var r="https://image.tmdb.org/t/p/w500/",a="https://via.placeholder.com/182x273"}}]);
//# sourceMappingURL=544.36ea6bec.chunk.js.map