(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e,a,t){e.exports=t.p+"static/media/carapilssmall.c755a222.png"},216:function(e,a,t){e.exports=t(495)},221:function(e,a,t){},223:function(e,a,t){},245:function(e,a){},247:function(e,a){},279:function(e,a){},280:function(e,a){},346:function(e,a){},492:function(e,a,t){},495:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),o=t(126),r=t.n(o);t(221),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(498),i=t(500),l=t(81),u=t(82),m=t(85),p=t(83),f=t(86),d=(t(223),t(499)),h=t(501),b=t(207),E=t(208),v=t.n(E),k=t(231),w=t(440),j=function(e){k.post("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/carapils-yvjvz/service/carapilsrequests/incoming_webhook/saveUser",{json:e},function(e,a,t){})},g=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).fillInFbDetails=function(e,a){if(a)j(a),this.state={name:a.name,userId:a.id};else{var t=O(e);this.state={name:t.fbname,userId:t.fbid}}},t.state={},t.fillInFbDetails(t.props.location,t.props.fb),t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"id-card-wrapper"},c.a.createElement("div",{className:"id-card"},c.a.createElement("p",{className:"marqueeText"},c.a.createElement("marquee",null,"WELCOME TO THE CARA PILS CLUB")),c.a.createElement("div",{className:"profile-row"},c.a.createElement("div",{className:"dp"},c.a.createElement("img",{src:"//graph.facebook.com/".concat(this.state.userId,"/picture?type=large")})),c.a.createElement("div",{className:"desc"},c.a.createElement("h1",null,this.state.name),c.a.createElement("p",null,"Official Cara Pils Club Member"),c.a.createElement("p",null,c.a.createElement(w,{value:"http://facebook.github.io/react/",logo:v.a,logoWidth:50})),c.a.createElement("p",null))),c.a.createElement("div",{className:"fbShareContainer"}," ",c.a.createElement(d.a,{url:"https://carapils.club/card?name=test&fbid=10215558188322336"}," ",c.a.createElement(h.a,{size:32,round:!0})," ",c.a.createElement("p",{className:"fbShareText"}," Sheir tis on Fajsboek to show your friends jou are THE SJIT ")))))}}]),a}(n.Component),O=function(e){return e?b.parse(e.search):void 0},N=(t(492),t(214)),I=t.n(N),C=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).state={facebookResponse:null},t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},this.state.facebookResponse&&"unknown"!==this.state.facebookResponse.status?c.a.createElement(g,{fb:this.state.facebookResponse}):c.a.createElement(I.a,{appId:"203252890569525",autoLoad:!0,size:"metro",fields:"name,email,picture",callback:function(a){e.setState({facebookResponse:a})}})))}}]),a}(n.Component),y=function(){return c.a.createElement(s.a,null,c.a.createElement("div",null,c.a.createElement(i.a,{path:"/card/",component:g}),c.a.createElement(i.a,{path:"/",component:C})))};r.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[216,2,1]]]);
//# sourceMappingURL=main.ec495a84.chunk.js.map