(this.webpackJsonpsjflix=this.webpackJsonpsjflix||[]).push([[0],{27:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var s=a(2),o=a.n(s),i=a(16),n=a.n(i),c=a(7),r=a.n(c),u=a(17),p=a(18),m=a(19),v=a(21),l=a(20),b=(a(27),a(5)),d=a.n(b),j=a(0);function g(e){return Object(j.jsxs)("div",{className:"home_section",children:[Object(j.jsx)(h,{title:e.category}),Object(j.jsx)(f,{movies:e.movies})]})}function h(e){return Object(j.jsx)("div",{className:"movies_category",children:e.title?e.title:"N/A"})}function f(e){return console.log(e.movies),Object(j.jsx)("div",{className:"movies",children:e.movies&&e.movies.map((function(e){return Object(j.jsx)("img",{className:"movies_poster",alt:e.title,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),height:"300px"},e.id)}))})}var x=function(e){Object(v.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(p.a)(this,a),(s=t.call(this,e)).getMovies=Object(u.a)(r.a.mark((function e(){var t,a,o,i,n,c,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,d.a.get("https://api.themoviedb.org/3/movie/popular?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=1");case 3:return a=e.sent,o=a.data.results,t.push(o),e.next=8,d.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=2");case 8:return i=e.sent,n=i.data.results,t.push(n),e.next=13,d.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=2");case 13:c=e.sent,u=c.data.results,t.push(u),s.setState({movies:t});case 17:case"end":return e.stop()}}),e)}))),s.state={movies:[],category:["Popular","Upcoming","Top Rated"]},s}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"home_wrapper",children:[Object(j.jsx)(g,{category:"Popular",movies:this.state.movies[0]}),Object(j.jsx)(g,{category:"Upcoming",movies:this.state.movies[1]}),Object(j.jsx)(g,{category:"Top Rated",movies:this.state.movies[2]})]})}}]),a}(o.a.Component);a(47);var O=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(x,{})})};n.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.048aa057.chunk.js.map