(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{34:function(e,t,a){e.exports=a(44)},39:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),n=a(16),c=a.n(n),s=(a(39),a(10)),r=a(11),o=a(13),m=a(12),u=(a(9),a(66)),d=a(62),h=a(67),p=a(64),v=a(65),E=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var C=function(e){var t=E();return l.a.createElement("div",null,l.a.createElement(h.a,{color:"secondary",position:"static"},l.a.createElement(p.a,null,l.a.createElement(v.a,{variant:"h6",className:t.title},"Manipur: ",l.a.createElement("small",null,l.a.createElement("em",null,"districts and cities")),e.stateName),l.a.createElement(u.a,{color:"inherit"},l.a.createElement("a",{className:"home",href:""},"Refresh")))))};var y=function(e){return console.log(e.imphalEastCities),l.a.createElement("div",{className:"cityList"},l.a.createElement("div",null,e.imphalEastCities[0]),l.a.createElement("div",null,e.imphalEastCities[1]),l.a.createElement("div",null,e.imphalEastCities[2]),l.a.createElement("div",null,e.imphalEastCities[3]),l.a.createElement("div",null,e.imphalEastCities[4]),l.a.createElement("div",null,e.imphalEastCities[5]),l.a.createElement("div",null,e.imphalEastCities[6]),l.a.createElement("div",null,e.imphalEastCities[7]),l.a.createElement("div",null,e.imphalEastCities[8]))};var f=function(e){return console.log(e.bishnupurCities),l.a.createElement("div",{className:"cityList"},l.a.createElement("div",null,e.bishnupurCities[0]),l.a.createElement("div",null,e.bishnupurCities[1]),l.a.createElement("div",null,e.bishnupurCities[2]),l.a.createElement("div",null,e.bishnupurCities[3]),l.a.createElement("div",null,e.bishnupurCities[4]),l.a.createElement("div",null,e.bishnupurCities[5]),l.a.createElement("div",null,e.bishnupurCities[6]),l.a.createElement("div",null,e.bishnupurCities[7]),l.a.createElement("div",null,e.bishnupurCities[8]))};var b=function(e){return console.log(e.thoubalCities),l.a.createElement("div",{className:"cityList"},l.a.createElement("div",null,e.thoubalCities[0]),l.a.createElement("div",null,e.thoubalCities[1]),l.a.createElement("div",null,e.thoubalCities[2]),l.a.createElement("div",null,e.thoubalCities[3]),l.a.createElement("div",null,e.thoubalCities[4]),l.a.createElement("div",null,e.thoubalCities[5]),l.a.createElement("div",null,e.thoubalCities[6]),l.a.createElement("div",null,e.thoubalCities[7]),l.a.createElement("div",null,e.thoubalCities[8]),l.a.createElement("div",null,e.thoubalCities[9]),l.a.createElement("div",null,e.thoubalCities[10]))};var g=function(e){return console.log(e.imphalWestCities),l.a.createElement("div",{className:"cityList"},l.a.createElement("div",null,e.imphalWestCities[0]),l.a.createElement("div",null,e.imphalWestCities[1]),l.a.createElement("div",null,e.imphalWestCities[2]),l.a.createElement("div",null,e.imphalWestCities[3]),l.a.createElement("div",null,e.imphalWestCities[4]),l.a.createElement("div",null,e.imphalWestCities[5]),l.a.createElement("div",null,e.imphalWestCities[6]),l.a.createElement("div",null,e.imphalWestCities[7]),l.a.createElement("div",null,e.imphalWestCities[8]),l.a.createElement("div",null,e.imphalWestCities[9]))};var D=function(e){return console.log(e.chandelCities),l.a.createElement("div",{className:"cityList"},l.a.createElement("div",null,e.chandelCities[0]),l.a.createElement("div",null,e.chandelCities[1]),l.a.createElement("div",null,e.chandelCities[2]),l.a.createElement("div",null,e.chandelCities[3]))},N={method:"GET",headers:{Accept:"application/json"}},k=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).handleIEClick=function(e){console.log("hello"),e.preventDefault(),document.querySelector(".IEDiv").classList.toggle("display")},i.handleBishClick=function(e){console.log("hello"),e.preventDefault(),document.querySelector(".bishDiv").classList.toggle("display")},i.handleThouClick=function(e){console.log("hello"),e.preventDefault(),document.querySelector(".thouDiv").classList.toggle("display")},i.handleIWClick=function(e){console.log("hello"),e.preventDefault(),document.querySelector(".IWDiv").classList.toggle("display")},i.handleChanClick=function(e){console.log("hello"),e.preventDefault(),document.querySelector(".chanDiv").classList.toggle("display")},i.state={stateName:"",imphalEastCities:[],bishnupurCities:[],thoubalCities:[],imphalWestCities:[],chandelCities:[]},i}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"districtBody"},l.a.createElement("div",null,l.a.createElement("button",{className:"dButton",onClick:this.handleIEClick},"Imphal East"),l.a.createElement("div",{className:"IEDiv"},l.a.createElement("p",{className:"citiesWord"},"Cities:"),l.a.createElement(y,{imphalEastCities:this.state.imphalEastCities}))),l.a.createElement("div",null,l.a.createElement("button",{className:"dButton",onClick:this.handleBishClick},"Bishnupur"),l.a.createElement("div",{className:"bishDiv"},l.a.createElement("p",{className:"citiesWord"},"Cities:"),l.a.createElement(f,{bishnupurCities:this.state.bishnupurCities}))),l.a.createElement("div",null,l.a.createElement("button",{className:"dButton",onClick:this.handleThouClick},"Thoubal"),l.a.createElement("div",{className:"thouDiv"},l.a.createElement("p",{className:"citiesWord"},"Cities:"),l.a.createElement(b,{thoubalCities:this.state.thoubalCities}))),l.a.createElement("div",null,l.a.createElement("button",{className:"dButton",onClick:this.handleIWClick},"Imphal West"),l.a.createElement("div",{className:"IWDiv"},l.a.createElement("p",{className:"citiesWord"},"Cities:"),l.a.createElement(g,{imphalWestCities:this.state.imphalWestCities}))),l.a.createElement("div",null,l.a.createElement("button",{className:"dButton",onClick:this.handleChanClick},"Chandel"),l.a.createElement("div",{className:"chanDiv"},l.a.createElement("p",{className:"citiesWord"},"Cities:"),l.a.createElement(D,{chandelCities:this.state.chandelCities}))))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://indian-cities-api.herokuapp.com/cities/search?District=Imphal%20East",N).then((function(e){return e.json()})).then((function(t){for(var a=[],i=0;i<t.length;i++)a.push(t[i].City);e.setState({imphalEastCities:a})})),fetch("https://indian-cities-api.herokuapp.com/cities/search?District=Bishnupur",N).then((function(e){return e.json()})).then((function(t){for(var a=[],i=0;i<t.length;i++)a.push(t[i].City);console.log(t),e.setState({bishnupurCities:a})})),fetch("https://indian-cities-api.herokuapp.com/cities/search?District=Thoubal",N).then((function(e){return e.json()})).then((function(t){for(var a=[],i=0;i<t.length;i++)a.push(t[i].City);e.setState({thoubalCities:a})})),fetch("https://indian-cities-api.herokuapp.com/cities/search?District=Imphal%20West",N).then((function(e){return e.json()})).then((function(t){for(var a=[],i=0;i<t.length;i++)a.push(t[i].City);e.setState({imphalWestCities:a})})),fetch("https://indian-cities-api.herokuapp.com/cities/search?District=Chandel",N).then((function(e){return e.json()})).then((function(t){for(var a=[],i=0;i<t.length;i++)a.push(t[i].City);e.setState({chandelCities:a})}))}}]),a}(i.Component),S=a(14),I=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(S.a)(e)),e}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("help im posting");var t=document.getElementById("city").value.charAt(0).toUpperCase()+document.getElementById("city").value.slice(1),a=document.getElementById("state").value.charAt(0).toUpperCase()+document.getElementById("state").value.slice(1),i=document.getElementById("district").value.charAt(0).toUpperCase()+document.getElementById("district").value.slice(1);console.log(t),fetch("https://indian-cities-api.herokuapp.com/cities",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({City:t,State:a,District:i})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"formLine"},l.a.createElement("label",{htmlFor:"City"},"Enter City"),l.a.createElement("input",{id:"city",name:"City",type:"text"})),l.a.createElement("div",{className:"formLine"},l.a.createElement("label",{htmlFor:"State"},"Enter State"),l.a.createElement("input",{id:"state",name:"State",type:"text"})),l.a.createElement("div",{className:"formLine"},l.a.createElement("label",{htmlFor:"District"},"Enter District"),l.a.createElement("input",{id:"district",name:"District",type:"text"})),l.a.createElement("button",{className:"dButton"},"Add City"))}}]),a}(i.Component),L=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(S.a)(e)),e}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("yikes im updating");var t=document.getElementById("idUpdateInput").value;JSON.stringify(t);var a=t;console.log(a);var i=document.getElementById("cityUpdate").value.charAt(0).toUpperCase()+document.getElementById("cityUpdate").value.slice(1),l=document.getElementById("stateUpdate").value.charAt(0).toUpperCase()+document.getElementById("stateUpdate").value.slice(1),n=document.getElementById("districtUpdate").value.charAt(0).toUpperCase()+document.getElementById("districtUpdate").value.slice(1),c="https://indian-cities-api.herokuapp.com/cities/".concat(a);fetch(c,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({City:i,State:l,District:n})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"formLine"},l.a.createElement("label",{htmlFor:"id"},"Enter City id"),l.a.createElement("input",{id:"idUpdateInput",name:"id",type:"text"})),l.a.createElement("div",{className:"formLine"},l.a.createElement("label",{htmlFor:"City"},"Enter City"),l.a.createElement("input",{id:"cityUpdate",name:"City",type:"text"})),l.a.createElement("div",{className:"formLine"},l.a.createElement("label",{htmlFor:"State"},"Enter State"),l.a.createElement("input",{id:"stateUpdate",name:"State",type:"text"})),l.a.createElement("div",{className:"formLine"},l.a.createElement("label",{htmlFor:"District"},"Enter District"),l.a.createElement("input",{id:"districtUpdate",name:"District",type:"text"})),l.a.createElement("button",{className:"dButton"},"Update City by ID"))}}]),a}(i.Component),j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(S.a)(e)),e}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("oh no I'm deleting");var t=document.getElementById("idInput").value;JSON.stringify(t);var a=t;console.log(a);var i="https://coders-cookout.herokuapp.com/recipes".concat(a);fetch(i,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"formLine"},l.a.createElement("label",{htmlFor:"idInput"},"Enter City ID"),l.a.createElement("input",{id:"idInput",name:"idInput",type:"text"})),l.a.createElement("button",{className:"dButton"},"Delete"))}}]),a}(i.Component),B=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).handleClick=function(e){console.log("hello"),e.preventDefault(),document.querySelector(".districtDiv").classList.toggle("display")},i.handleAddClick=function(e){console.log("add"),e.preventDefault(),document.querySelector(".addDiv").classList.toggle("display"),document.querySelector(".updateDiv").classList.remove("display"),document.querySelector(".deleteDiv").classList.remove("display")},i.handleUpdateClick=function(e){console.log("update"),e.preventDefault(),document.querySelector(".updateDiv").classList.toggle("display"),document.querySelector(".deleteDiv").classList.remove("display"),document.querySelector(".addDiv").classList.remove("display")},i.handleDeleteClick=function(e){console.log("delete"),e.preventDefault(),document.querySelector(".deleteDiv").classList.toggle("display"),document.querySelector(".addDiv").classList.remove("display"),document.querySelector(".updateDiv").classList.remove("display")},i.handleImphalClick=function(e){e.preventDefault(),document.querySelector(".imphalTopDiv").classList.toggle("display"),document.querySelector(".nambolTopDiv").classList.remove("display"),document.querySelector(".samurouTopDiv").classList.remove("display")},i.handleNambolClick=function(e){e.preventDefault(),document.querySelector(".imphalTopDiv").classList.remove("display"),document.querySelector(".nambolTopDiv").classList.toggle("display"),document.querySelector(".samurouTopDiv").classList.remove("display")},i.handleSamurouClick=function(e){e.preventDefault(),document.querySelector(".imphalTopDiv").classList.remove("display"),document.querySelector(".nambolTopDiv").classList.remove("display"),document.querySelector(".samurouTopDiv").classList.toggle("display")},i.state={stateName:"",allDistricts:[],allCites:[]},i}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"bodyDiv"},l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"top"},l.a.createElement(C,null)),l.a.createElement("div",{className:"majorCities"},l.a.createElement(u.a,{onClick:this.handleImphalClick,variant:"contained",color:"secondary"},"Imphal"),l.a.createElement(u.a,{onClick:this.handleNambolClick,variant:"contained",color:"secondary"},"Nambol"),l.a.createElement(u.a,{onClick:this.handleSamurouClick,variant:"contained",color:"secondary"},"Samurou")),l.a.createElement("div",{className:"imphalTopDiv"},l.a.createElement("div",{className:"imphalPic"}),l.a.createElement("div",{className:"imphalDes"},"Imphal is the capital city of Manipur. It spans both the Imphal East and West districts. It is most famous for it's metropolitan centre which contains the ruins of Kangla Palace, the royal seat of the former Kingdom of Manipur. It's population was 268,243 according to a 2011 census.")),l.a.createElement("div",{className:"nambolTopDiv"},l.a.createElement("div",{className:"nambolPic"}),l.a.createElement("div",{className:"nambolDes"},"The town of Nambol overlaps the Bishnupur and Imphal West districts. It is known as an educational hub and it's market called the Nambol Bazaar is one of the busiest markets in Manipur. In 2001 a census showed a population of 18,117.")),l.a.createElement("div",{className:"samurouTopDiv"},l.a.createElement("div",{className:"samurouPic"}),l.a.createElement("div",{className:"samurouDes"},"Samurou city limits reach into both the Thoubal and Imphal West districts. Notable spots include two temples for the diety of Ibudhou Pakhangba, Awang Leikai and Makha Leikai. It is also the birthplace of the Manipuri poet Hijam Angahal. As of 2001 it's population was 14,232.")),l.a.createElement("div",{className:"districtBtn"},l.a.createElement("button",{className:"actualDistrictBtn",onClick:this.handleClick},"Districts"),l.a.createElement("div",{className:"districtDiv"},l.a.createElement(k,{dlist:this.state.allDistricts}))),l.a.createElement("div",{className:"accessDiv"},l.a.createElement("p",null,"Access to Anthony Maddox's Indian City Database:")),l.a.createElement("div",{className:"crudDiv"},l.a.createElement("div",{className:"formDiv"},l.a.createElement("button",{className:"addBtn",onClick:this.handleAddClick},"Add City")),l.a.createElement("div",null,l.a.createElement("button",{className:"addBtn",onClick:this.handleUpdateClick},"Update City by ID")),l.a.createElement("div",null,l.a.createElement("button",{className:"addBtn",onClick:this.handleDeleteClick},"Delete City by ID"))),l.a.createElement("div",{className:"addDiv"},l.a.createElement(I,null)),l.a.createElement("div",{className:"updateDiv"},l.a.createElement(L,null)),l.a.createElement("div",{className:"deleteDiv"},l.a.createElement(j,null))))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){}},[[34,1,2]]]);
//# sourceMappingURL=main.634bf797.chunk.js.map