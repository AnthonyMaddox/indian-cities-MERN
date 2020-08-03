(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{36:function(e,t,a){e.exports=a(46)},41:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(16),c=a.n(l),s=(a(41),a(10)),r=a(11),o=a(13),u=a(12),m=(a(9),a(69)),d=a(65),h=a(70),p=a(67),v=a(68),E=a(30),C=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var f=function(e){var t=C();return Object(E.a)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#ffc400",dark:"#ba000d",contrastText:"#000"}}}),n.a.createElement("div",null,n.a.createElement(h.a,{color:"secondary",position:"static"},n.a.createElement(p.a,null,n.a.createElement(v.a,{variant:"h6",className:t.title},"Manipur: ",n.a.createElement("small",null,n.a.createElement("em",null,"districts and cities")),e.stateName),n.a.createElement(m.a,{color:"inherit"},n.a.createElement("a",{className:"home",href:""},"Refresh")))))};var y=function(e){return console.log(e.imphalEastCities),n.a.createElement("div",{className:"cityList"},n.a.createElement("div",null,e.imphalEastCities[0]),n.a.createElement("div",null,e.imphalEastCities[1]),n.a.createElement("div",null,e.imphalEastCities[2]),n.a.createElement("div",null,e.imphalEastCities[3]),n.a.createElement("div",null,e.imphalEastCities[4]),n.a.createElement("div",null,e.imphalEastCities[5]),n.a.createElement("div",null,e.imphalEastCities[6]),n.a.createElement("div",null,e.imphalEastCities[7]),n.a.createElement("div",null,e.imphalEastCities[8]))};var b=function(e){return console.log(e.bishnupurCities),n.a.createElement("div",{className:"cityList"},n.a.createElement("div",null,e.bishnupurCities[0]),n.a.createElement("div",null,e.bishnupurCities[1]),n.a.createElement("div",null,e.bishnupurCities[2]),n.a.createElement("div",null,e.bishnupurCities[3]),n.a.createElement("div",null,e.bishnupurCities[4]),n.a.createElement("div",null,e.bishnupurCities[5]),n.a.createElement("div",null,e.bishnupurCities[6]),n.a.createElement("div",null,e.bishnupurCities[7]),n.a.createElement("div",null,e.bishnupurCities[8]))};var g=function(e){return console.log(e.thoubalCities),n.a.createElement("div",{className:"cityList"},n.a.createElement("div",null,e.thoubalCities[0]),n.a.createElement("div",null,e.thoubalCities[1]),n.a.createElement("div",null,e.thoubalCities[2]),n.a.createElement("div",null,e.thoubalCities[3]),n.a.createElement("div",null,e.thoubalCities[4]),n.a.createElement("div",null,e.thoubalCities[5]),n.a.createElement("div",null,e.thoubalCities[6]),n.a.createElement("div",null,e.thoubalCities[7]),n.a.createElement("div",null,e.thoubalCities[8]),n.a.createElement("div",null,e.thoubalCities[9]),n.a.createElement("div",null,e.thoubalCities[10]))};var D=function(e){return console.log(e.imphalWestCities),n.a.createElement("div",{className:"cityList"},n.a.createElement("div",null,e.imphalWestCities[0]),n.a.createElement("div",null,e.imphalWestCities[1]),n.a.createElement("div",null,e.imphalWestCities[2]),n.a.createElement("div",null,e.imphalWestCities[3]),n.a.createElement("div",null,e.imphalWestCities[4]),n.a.createElement("div",null,e.imphalWestCities[5]),n.a.createElement("div",null,e.imphalWestCities[6]),n.a.createElement("div",null,e.imphalWestCities[7]),n.a.createElement("div",null,e.imphalWestCities[8]),n.a.createElement("div",null,e.imphalWestCities[9]))};var N=function(e){return console.log(e.chandelCities),n.a.createElement("div",{className:"cityList"},n.a.createElement("div",null,e.chandelCities[0]),n.a.createElement("div",null,e.chandelCities[1]),n.a.createElement("div",null,e.chandelCities[2]),n.a.createElement("div",null,e.chandelCities[3]))},k={method:"GET",headers:{Accept:"application/json"}},S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).handleIEClick=function(e){console.log("hello"),e.preventDefault(),document.querySelector(".IEDiv").classList.toggle("display")},i.handleBishClick=function(e){console.log("hello"),e.preventDefault(),document.querySelector(".bishDiv").classList.toggle("display")},i.handleThouClick=function(e){console.log("hello"),e.preventDefault(),document.querySelector(".thouDiv").classList.toggle("display")},i.handleIWClick=function(e){console.log("hello"),e.preventDefault(),document.querySelector(".IWDiv").classList.toggle("display")},i.handleChanClick=function(e){console.log("hello"),e.preventDefault(),document.querySelector(".chanDiv").classList.toggle("display")},i.state={stateName:"",imphalEastCities:[],bishnupurCities:[],thoubalCities:[],imphalWestCities:[],chandelCities:[]},i}return Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"districtBody"},n.a.createElement("div",null,n.a.createElement("button",{className:"dButton",onClick:this.handleIEClick},"Imphal East"),n.a.createElement("div",{className:"IEDiv"},n.a.createElement("p",{className:"citiesWord"},"Cities:"),n.a.createElement(y,{imphalEastCities:this.state.imphalEastCities}))),n.a.createElement("div",null,n.a.createElement("button",{className:"dButton",onClick:this.handleBishClick},"Bishnupur"),n.a.createElement("div",{className:"bishDiv"},n.a.createElement("p",{className:"citiesWord"},"Cities:"),n.a.createElement(b,{bishnupurCities:this.state.bishnupurCities}))),n.a.createElement("div",null,n.a.createElement("button",{className:"dButton",onClick:this.handleThouClick},"Thoubal"),n.a.createElement("div",{className:"thouDiv"},n.a.createElement("p",{className:"citiesWord"},"Cities:"),n.a.createElement(g,{thoubalCities:this.state.thoubalCities}))),n.a.createElement("div",null,n.a.createElement("button",{className:"dButton",onClick:this.handleIWClick},"Imphal West"),n.a.createElement("div",{className:"IWDiv"},n.a.createElement("p",{className:"citiesWord"},"Cities:"),n.a.createElement(D,{imphalWestCities:this.state.imphalWestCities}))),n.a.createElement("div",null,n.a.createElement("button",{className:"dButton",onClick:this.handleChanClick},"Chandel"),n.a.createElement("div",{className:"chanDiv"},n.a.createElement("p",{className:"citiesWord"},"Cities:"),n.a.createElement(N,{chandelCities:this.state.chandelCities}))))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://indian-cities-api.herokuapp.com/cities/search?District=Imphal%20East",k).then((function(e){return e.json()})).then((function(t){for(var a=[],i=0;i<t.length;i++)a.push(t[i].City);e.setState({imphalEastCities:a})})),fetch("https://indian-cities-api.herokuapp.com/cities/search?District=Bishnupur",k).then((function(e){return e.json()})).then((function(t){for(var a=[],i=0;i<t.length;i++)a.push(t[i].City);console.log(t),e.setState({bishnupurCities:a})})),fetch("https://indian-cities-api.herokuapp.com/cities/search?District=Thoubal",k).then((function(e){return e.json()})).then((function(t){for(var a=[],i=0;i<t.length;i++)a.push(t[i].City);e.setState({thoubalCities:a})})),fetch("https://indian-cities-api.herokuapp.com/cities/search?District=Imphal%20West",k).then((function(e){return e.json()})).then((function(t){for(var a=[],i=0;i<t.length;i++)a.push(t[i].City);e.setState({imphalWestCities:a})})),fetch("https://indian-cities-api.herokuapp.com/cities/search?District=Chandel",k).then((function(e){return e.json()})).then((function(t){for(var a=[],i=0;i<t.length;i++)a.push(t[i].City);e.setState({chandelCities:a})}))}}]),a}(i.Component),I=a(14),j=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(I.a)(e)),e}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("help im posting");var t=document.getElementById("city").value.charAt(0).toUpperCase()+document.getElementById("city").value.slice(1),a=document.getElementById("state").value.charAt(0).toUpperCase()+document.getElementById("state").value.slice(1),i=document.getElementById("district").value.charAt(0).toUpperCase()+document.getElementById("district").value.slice(1);console.log(t),fetch("https://indian-cities-api.herokuapp.com/cities",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({City:t,State:a,District:i})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"formLine"},n.a.createElement("label",{htmlFor:"City"},"Enter City"),n.a.createElement("input",{id:"city",name:"City",type:"text"})),n.a.createElement("div",{className:"formLine"},n.a.createElement("label",{htmlFor:"State"},"Enter State"),n.a.createElement("input",{id:"state",name:"State",type:"text"})),n.a.createElement("div",{className:"formLine"},n.a.createElement("label",{htmlFor:"District"},"Enter District"),n.a.createElement("input",{id:"district",name:"District",type:"text"})),n.a.createElement("button",{className:"dButton"},"Add City"))}}]),a}(i.Component),B=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(I.a)(e)),e}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("yikes im updating");var t=document.getElementById("idUpdateInput").value;JSON.stringify(t);var a=t;console.log(a);var i=document.getElementById("cityUpdate").value.charAt(0).toUpperCase()+document.getElementById("cityUpdate").value.slice(1),n=document.getElementById("stateUpdate").value.charAt(0).toUpperCase()+document.getElementById("stateUpdate").value.slice(1),l=document.getElementById("districtUpdate").value.charAt(0).toUpperCase()+document.getElementById("districtUpdate").value.slice(1),c="https://indian-cities-api.herokuapp.com/cities/".concat(a);fetch(c,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({City:i,State:n,District:l})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"formLine"},n.a.createElement("label",{htmlFor:"id"},"Enter City id"),n.a.createElement("input",{id:"idUpdateInput",name:"id",type:"text"})),n.a.createElement("div",{className:"formLine"},n.a.createElement("label",{htmlFor:"City"},"Enter City"),n.a.createElement("input",{id:"cityUpdate",name:"City",type:"text"})),n.a.createElement("div",{className:"formLine"},n.a.createElement("label",{htmlFor:"State"},"Enter State"),n.a.createElement("input",{id:"stateUpdate",name:"State",type:"text"})),n.a.createElement("div",{className:"formLine"},n.a.createElement("label",{htmlFor:"District"},"Enter District"),n.a.createElement("input",{id:"districtUpdate",name:"District",type:"text"})),n.a.createElement("button",{className:"dButton"},"Update City by ID"))}}]),a}(i.Component),O=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(I.a)(e)),e}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("oh no I'm deleting");var t=document.getElementById("idInput").value;JSON.stringify(t);var a=t;console.log(a);var i="https://indian-cities-api.herokuapp.com/cities/".concat(a);fetch(i,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"formLine"},n.a.createElement("label",{htmlFor:"idInput"},"Enter City ID"),n.a.createElement("input",{id:"idInput",name:"idInput",type:"text"})),n.a.createElement("button",{className:"dButton"},"Delete"))}}]),a}(i.Component),L=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).handleClick=function(e){console.log("hello"),e.preventDefault(),document.querySelector(".districtDiv").classList.toggle("display")},i.handleAddClick=function(e){console.log("add"),e.preventDefault(),document.querySelector(".addDiv").classList.toggle("display"),document.querySelector(".updateDiv").classList.remove("display"),document.querySelector(".deleteDiv").classList.remove("display")},i.handleUpdateClick=function(e){console.log("update"),e.preventDefault(),document.querySelector(".updateDiv").classList.toggle("display"),document.querySelector(".deleteDiv").classList.remove("display"),document.querySelector(".addDiv").classList.remove("display")},i.handleDeleteClick=function(e){console.log("delete"),e.preventDefault(),document.querySelector(".deleteDiv").classList.toggle("display"),document.querySelector(".addDiv").classList.remove("display"),document.querySelector(".updateDiv").classList.remove("display")},i.state={stateName:"",allDistricts:[],allCites:[]},i}return Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"bodyDiv"},n.a.createElement("div",{className:"top"},n.a.createElement(f,null)),n.a.createElement("div",{className:"majorCities"},n.a.createElement(m.a,{variant:"contained",color:"secondary"},"Imphal"),n.a.createElement(m.a,{variant:"contained",color:"secondary"},"Nambol"),n.a.createElement(m.a,{variant:"contained",color:"secondary"},"Samurou")),n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"districtBtn"},n.a.createElement("button",{className:"actualDistrictBtn",onClick:this.handleClick},"Districts"),n.a.createElement("div",{className:"districtDiv"},n.a.createElement(S,{dlist:this.state.allDistricts}))),n.a.createElement("div",{className:"crudDiv"},n.a.createElement("div",{className:"formDiv"},n.a.createElement("button",{className:"addBtn",onClick:this.handleAddClick},"Add City")),n.a.createElement("div",null,n.a.createElement("button",{className:"addBtn",onClick:this.handleUpdateClick},"Update City by ID")),n.a.createElement("div",null,n.a.createElement("button",{className:"addBtn",onClick:this.handleDeleteClick},"Delete City by ID"))),n.a.createElement("div",{className:"addDiv"},n.a.createElement(j,null)),n.a.createElement("div",{className:"updateDiv"},n.a.createElement(B,null)),n.a.createElement("div",{className:"deleteDiv"},n.a.createElement(O,null))))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){}},[[36,1,2]]]);
//# sourceMappingURL=main.4bf1f0f7.chunk.js.map