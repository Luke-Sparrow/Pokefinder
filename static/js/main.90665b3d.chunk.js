(this.webpackJsonppokefinder=this.webpackJsonppokefinder||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(12),n(1)),l=n(2),s=n(4),u=n(3),m=(n(13),function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",className:"pa3 ba b--blue bg-light-green tc",placeholder:"Enter Pokemon Name!",onChange:t}))}),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={imgUrl:"",thisPokemonId:0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.url).then((function(e){return e.json()})).then((function(t){e.setState({thisPokemonId:t.id,imgUrl:t.sprites.front_default})}))}},{key:"render",value:function(){var e=this.state,t=e.imgUrl,n=e.thisPokemonId;return r.a.createElement("div",{className:"tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:t,alt:"pokemon"}),r.a.createElement("div",null,r.a.createElement("h1",null,this.props.name.charAt(0).toUpperCase()+this.props.name.slice(1)),r.a.createElement("p",null,"National Dex # ",n)))}}]),n}(r.a.Component),p=function(e){var t=e.pokemon;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(h,{key:e.name,name:e.name,url:e.url})})))},f=(n(14),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={pokemon:[],searchfield:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then((function(e){return e.json()})).then((function(t){e.setState({pokemon:t.results})}))}},{key:"render",value:function(){var e=this.state,t=e.pokemon,n=e.searchfield,a=t.filter((function(e){return e.name.includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1  tc",id:"title"},"PokeFinder!"),r.a.createElement(m,{searchChange:this.onSearchChange}),r.a.createElement(p,{pokemon:a})):r.a.createElement("h1",{className:"tc"},"Loading...")}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.90665b3d.chunk.js.map