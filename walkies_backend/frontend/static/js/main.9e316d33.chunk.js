(this.webpackJsonpwalkies_backend=this.webpackJsonpwalkies_backend||[]).push([[0],{25:function(e,t,a){e.exports=a(38)},30:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),s=a.n(r),l=(a(30),a(31),a(7)),i=a(8),c=a(10),u=a(9),m=a(2),h=a(11),d=a(16),b=a(5),p=a.n(b),g={showLogout:1,showAllDogs:2,showNewDog:3,showUpdateDog:4,allButtons:5},f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleShowAllDogsButton=function(){var t,a;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("handle show dogs button"),n.next=3,p.a.awrap(fetch("/dog/show_all",{credentials:"same-origin"}));case 3:return t=n.sent,n.next=6,p.a.awrap(t.json());case 6:a=n.sent,console.log(a),e.setState({showDogList:a});case 9:case"end":return n.stop()}}))},e.handleSpecificDogButton=function(){var t,a;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("specific dog button"),n.next=3,p.a.awrap(fetch("http://localhost:4000/dog/showOne/:".concat(e._id)));case 3:return t=n.sent,n.next=6,p.a.awrap(t.json());case 6:a=n.sent,console.log(a),e.setState({showDogList:a});case 9:case"end":return n.stop()}}))},e.state={buttonState:g.noButtons,showDogList:[]},e.handleShowAllDogsButton=e.handleShowAllDogsButton.bind(Object(m.a)(e)),e.handleSpecificDogButton=e.handleSpecificDogButton.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;if(0===this.state.showDogList.length)return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:this.handleShowAllDogsButton},"Go To Your Dogs"));var t=this.state.showDogList.map((function(t){return o.a.createElement("li",{key:t._id},o.a.createElement("button",{onClick:e.handleSpecificDogButton},t.name))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Your Dog List"),o.a.createElement("ul",null,t))}}]),t}(o.a.Component),w=a(12),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSubmitButton=function(){var e,t,n;return p.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:console.log("handle login form button clicked"),(e=new Headers).append("Content-Type","application/json"),t=JSON.stringify({username:a.state.username,password:a.state.password}),n=fetch("/auth/login",{method:"POST",headers:e,body:t,redirect:"follow",credentials:"same-origin"}).then((function(e){if(200===+e.status)return e;Promise.reject()})).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({goToDogButtons:!0})})).catch((function(e){return console.log("error",e)})),console.log("API login "+JSON.stringify(n));case 7:case"end":return o.stop()}}))},a.state={username:"",password:"",submitDisabled:!0,goToDogButtons:!1},a.handleKeyStrike=a.handleKeyStrike.bind(Object(m.a)(a)),a.handleSubmitButton=a.handleSubmitButton.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleKeyStrike",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(d.a)({},t,a)),this.state.username&&this.state.password?this.setState({submitDisabled:!1}):this.setState({submitDisabled:!0})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.state.goToDogButtons&&o.a.createElement(w.a,{to:"/DogButtons"}),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Username:",o.a.createElement("input",{type:"text",name:"username",value:this.state.username,className:"form-control",onChange:this.handleKeyStrike}))),o.a.createElement("label",null,"Password:",o.a.createElement("input",{type:"password",name:"password",value:this.state.password,className:"form-control",onChange:this.handleKeyStrike})),o.a.createElement("button",{onClick:this.handleSubmitButton,disabled:this.state.submitDisabled},"Submit"))}}]),t}(o.a.Component),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSubmitButton=function(){var e,t,n;return p.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:console.log("handle registration form submit button"),(e=new Headers).append("Content-Type","application/json"),t=JSON.stringify({username:a.state.username,password:a.state.password,preferredName:a.state.preferredName,email:a.state.email,phoneNumber:a.state.phoneNumber}),n=fetch("http://localhost:4000/user/newHuman",{method:"POST",headers:e,body:t,redirect:"follow"}).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){return console.log("error",e)})),console.log("New user created "+JSON.stringify(n));case 7:case"end":return o.stop()}}))},a.state={username:"",password:"",preferredName:"",email:"",phoneNumber:"",submitDisabled:!0},a.handleKeyStrike=a.handleKeyStrike.bind(Object(m.a)(a)),a.handleSubmitButton=a.handleSubmitButton.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleKeyStrike",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(d.a)({},t,a)),this.state.username&&this.state.password&&this.state.preferredName&&this.state.email&&this.state.phoneNumber?this.setState({submitDisabled:!1}):this.setState({submitDisabled:!0})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Username:",o.a.createElement("input",{type:"text",name:"username",value:this.state.username,className:"form-control",onChange:this.handleKeyStrike}))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Preferred Name:",o.a.createElement("input",{type:"text",name:"preferredName",value:this.state.preferredName,className:"form-control",onChange:this.handleKeyStrike}))),o.a.createElement("label",null,"Password:",o.a.createElement("input",{type:"text",name:"password",value:this.state.password,className:"form-control",onChange:this.handleKeyStrike})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Email:",o.a.createElement("input",{type:"text",name:"email",value:this.state.email,className:"form-control",onChange:this.handleKeyStrike})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Phone Number:",o.a.createElement("input",{type:"number",name:"phoneNumber",value:this.state.phoneNumber,className:"form-control",onChange:this.handleKeyStrike}))),o.a.createElement("p",null,"Please indicate if you are a dog owner or a dog walker."),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Dog Parent:",o.a.createElement("input",{type:"radio",checked:!0,name:"userRole",value:"owner",onChange:this.handleKeyStrike}))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Dog Walker:",o.a.createElement("input",{type:"radio",name:"userRole",value:"walker",onChange:this.handleKeyStrike})))),o.a.createElement("button",{onClick:this.handleSubmitButton,disabled:this.state.submitDisabled},"Submit"))}}]),t}(o.a.Component),v=1,k=2,y=4,O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={message:"",buttonState:y},e.handleButtonClick=e.handleButtonClick.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleButtonClick",value:function(e){"login"===e?(console.log("login"),this.setState({buttonState:v})):this.setState({buttonState:k})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,this.state.buttonState===y&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){return e.handleButtonClick("login")}},"Login"),o.a.createElement("button",{onClick:function(){return e.handleButtonClick()}},"Register")),this.state.buttonState===v&&o.a.createElement(S,null),this.state.buttonState===k&&o.a.createElement(E,null))}}]),t}(o.a.Component);var j=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Walkies"),o.a.createElement(w.d,null,o.a.createElement(w.b,{exact:!0,path:"/",component:O}),o.a.createElement(w.b,{exact:!0,path:"/DogButtons",component:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(15);s.a.render(o.a.createElement(N.a,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.9e316d33.chunk.js.map