(this.webpackJsonpsjflix=this.webpackJsonpsjflix||[]).push([[0],{32:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(22),r=a.n(c),o=a(8),i=a.n(o),p=a(13),d=a(23),u=a(24),b=a(26),l=a(25),g=(a(32),a(5)),h=a.n(g),j=a(2);function v(e){return Object(j.jsxs)("div",{className:"home_section",children:[Object(j.jsx)(f,{title:e.category}),Object(j.jsx)(m,{contents:e.contents})]})}function f(e){return Object(j.jsx)("div",{className:"contents_category",children:e.title?e.title:"N/A"})}function m(e){return Object(j.jsx)("div",{className:"contents",children:e.contents&&e.contents.map((function(e){return Object(j.jsx)("div",{className:"contents_poster",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w500".concat(e.poster_path,")")}},e.id)}))})}var x=function(e){Object(b.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).categoryMovie=["Popular","Upcoming","Top Rated"],n.categoryTV=["Popular","On Air","Top Rated"],n.getMovies=Object(p.a)(i.a.mark((function e(){var t,a,s,c,r,o,p,d,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getMovies!"),t=[],e.next=4,h.a.get("https://api.themoviedb.org/3/movie/popular?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=1");case 4:return a=e.sent,s=a.data.results,t.push(s),e.next=9,h.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=1");case 9:return c=e.sent,r=c.data.results,t.push(r),e.next=14,h.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=1");case 14:return o=e.sent,p=o.data.results,t.push(p),n.setState({contents:t}),e.next=20,h.a.get("https://api.themoviedb.org/3/movie/313369?api_key=219db60224db73e0c3bf1948f3e9a86a&language=en-US");case 20:d=e.sent,u=d.data,n.setState({fav:u});case 23:case"end":return e.stop()}}),e)}))),n.getTVs=Object(p.a)(i.a.mark((function e(){var t,a,s,c,r,o,p,d,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getTVs!"),t=[],e.next=4,h.a.get("https://api.themoviedb.org/3/tv/popular?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=1");case 4:return a=e.sent,s=a.data.results,t.push(s),e.next=9,h.a.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=2");case 9:return c=e.sent,r=c.data.results,t.push(r),e.next=14,h.a.get("https://api.themoviedb.org/3/tv/top_rated?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=2");case 14:return o=e.sent,p=o.data.results,t.push(p),n.setState({contents:t}),e.next=20,h.a.get("https://api.themoviedb.org/3/tv/66732?api_key=219db60224db73e0c3bf1948f3e9a86a&language=en-US");case 20:d=e.sent,u=d.data,n.setState({fav:u});case 23:case"end":return e.stop()}}),e)}))),n.state={contents:[],fav:{}},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.field;"movie"===e?this.getMovies():"TV"===e&&this.getTVs()}},{key:"render",value:function(){var e=this,t=this.props.field;return Object(j.jsxs)("div",{className:"home_wrapper",children:[Object(j.jsx)("div",{className:"fav",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(this.state.fav.backdrop_path,")")},children:Object(j.jsx)("h1",{children:"Welcome!"})}),"movie"===t?e.categoryMovie.map((function(t,a){return Object(j.jsx)(v,{category:t,contents:e.state.contents[a]},t)}),e):"TV"===t?e.categoryTV.map((function(t,a){return Object(j.jsx)(v,{category:t,contents:e.state.contents[a]},t)}),e):void 0]})}}]),a}(s.a.Component),O=a(7);a(52);var k=function(){return Object(j.jsxs)("header",{className:"main_header",children:[Object(j.jsx)("span",{id:"Logo",children:"SJ"}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{className:"header_links",children:[Object(j.jsx)(O.b,{to:"/",children:Object(j.jsx)("li",{children:"Movie"})}),Object(j.jsx)(O.b,{to:"/TV",children:Object(j.jsx)("li",{children:"TV"})})]})})]})},y=a(1);a(53);var _=function(){return Object(j.jsxs)(O.a,{children:[Object(j.jsx)(k,{}),Object(j.jsxs)(y.c,{children:[Object(j.jsx)(y.a,{path:"/",element:Object(j.jsx)(x,{field:"movie"},"movie")}),Object(j.jsx)(y.a,{path:"/TV",element:Object(j.jsx)(x,{field:"TV"},"TV")})]})]})};a(54);r.a.render(Object(j.jsx)(_,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.72666ab4.chunk.js.map