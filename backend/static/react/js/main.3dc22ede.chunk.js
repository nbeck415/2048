(window.webpackJsonp2048=window.webpackJsonp2048||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),o=n(3),u=n.n(o),l="up",i="down",s="left",f="right",m=n(4),v=function(e){return c.a.createElement("button",{className:"tile",onClick:e.onClick},e.value)},d=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),o=n[0],u=n[1],l=Object(a.useState)({hours:0,minutes:0,seconds:0}),i=Object(r.a)(l,2),s=i[0],f=i[1],m=function(){if(!o){var e=s.hours,t=s.minutes,n=s.seconds+1;60===n&&(f({hours:s.hours,minutes:s.minutes+1,seconds:0}),n=0,t+=1),60===t&&(t=0,e+=1),f({hours:e,minutes:t,seconds:n})}},v=function(e){return e.toString().padStart(2,"0")};Object(a.useEffect)(function(){var e=setInterval(m,1e3);return function(){clearInterval(e)}});return c.a.createElement("div",null,c.a.createElement("p",null,"Time "),c.a.createElement("div",null,c.a.createElement("p",null,function(){var t=v(s.hours),n=v(s.minutes),r=v(s.seconds),a="".concat(t,": ").concat(n,": ").concat(r);return e.setGameTime(a),a}()),c.a.createElement("button",{onClick:function(){return u(!o)}},o?"Resume":"Pause")))},b=function(e){return c.a.createElement("form",{method:"POST",action:"/"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Enter name"}),c.a.createElement("input",{type:"text",name:"scoreValue",value:e.score}),c.a.createElement("input",{type:"submit",value:"Submit"}))},E=function e(t){e.defaultProps={keyPressed:l};var n=Object(a.useState)([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]),o=Object(r.a)(n,2),u=o[0],i=o[1],s=Object(a.useState)(!1),f=Object(r.a)(s,2),m=f[0],E=f[1],p=t.keyPressed,w=Object(a.useState)("00:00:00"),h=Object(r.a)(w,2),j=h[0],O=h[1],y=null,g=function(e,t){return c.a.createElement(v,{value:u[e][t]})},S=function(e){return c.a.createElement("div",{className:"board-row"},g(e,0),g(e,1),g(e,2),g(e,3))};return Object(a.useEffect)(function(){!function(){var e=p.direction;if(null!=e){var t=P(u,e);i(t),E(k(u))}}()},[p]),c.a.createElement("div",null,m?(y=j,c.a.createElement("div",null,c.a.createElement("p",null," You won! Your time is ",y," "),c.a.createElement(b,{score:y}),c.a.createElement("p",null,"Token is: ",window.token))):c.a.createElement(d,{setGameTime:function(e){O(e)}}),m?c.a.createElement("div",null,c.a.createElement("p",null,"Whoo!")):c.a.createElement("div",null,S(0),S(1),S(2),S(3)))},k=function(e){for(var t=0;t<4;t++)for(var n=0;n<4;n++)if(16===e[t][n])return!0;return!1},p=function(e,t,n,r,a){var c=e[t][n],o=e[r][a];e[t][n]=c+o,e[r][a]=0},w=function(e,t){for(var n=0;n<3;n++)if(0===e[n][t]){for(var r=n+1;r<3&&0===e[r][t];)r+=1;p(e,n,t,r,t)}return e},h=function(e,t){for(var n=0;n<3;n++)if(0===e[t][n]){for(var r=n+1;r<3&&0===e[t][r];)r+=1;p(e,t,n,t,r)}return e},j=function(e,t){for(var n=3;n>0;n--)if(0===e[n][t]){for(var r=n-1;r>0&&0===e[r][t];)r-=1;p(e,n,t,r,t)}return e},O=function(e,t){for(var n=3;n>0;n--)if(0===e[t][n]){for(var r=n-1;r>0&&0===e[t][r];)r-=1;p(e,t,n,t,r)}return e},y=function(e,t){for(var n=0;n<4;n++)switch(t){case l:w(e,n);break;case i:j(e,n);break;case s:h(e,n);break;case f:O(e,n);break;default:console.log("not a direction")}},g=function(e,t){switch(t){case l:!function(e){for(var t=0;t<3;t++)for(var n=0;n<4;n++){var r=t+1;e[t][n]===e[r][n]&&p(e,t,n,r,n)}}(e);break;case i:!function(e){for(var t=3;t>0;t--)for(var n=3;n>0;n--){var r=t-1;e[t][n]===e[r][n]&&p(e,t,n,r,n)}}(e);break;case s:!function(e){for(var t=0;t<4;t++)for(var n=0;n<3;n++){var r=n+1;e[t][n]===e[t][r]&&p(e,t,n,t,r)}}(e);break;case f:!function(e){for(var t=0;t<4;t++)for(var n=3;n>0;n--){var r=n-1;e[t][n]===e[t][r]&&p(e,t,n,t,r)}}(e);break;default:console.log("not a direction")}},S=function(){return Math.floor(4*Math.random())},P=function(e,t){var n=Object(m.a)(e);return function(e,t){y(e,t),g(e,t),y(e,t)}(n,t),function e(t){var n=S(),r=S();0===t[n][r]?t[n][r]=2:e(t)}(n),n},T=function(){var e=Object(a.useState)({direction:null}),t=Object(r.a)(e,2),n=t[0],c=t[1],o=function(e){var t=null;switch(e.key){case"k":t=l;break;case"j":t=i;break;case"h":t=s;break;case"l":t=f;break;default:t=null}c({direction:t})};return Object(a.useEffect)(function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}},[]),n};u.a.render(c.a.createElement(function(){console.log("hallo");var e=window.token;console.log(e),console.log("bye");return c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(E,{keyPressed:T()})),c.a.createElement("h2",null,"High Scores"),c.a.createElement("div",null,e.map(function(e){return c.a.createElement("div",{key:e.name},c.a.createElement("p",null,e.name,": ",e.scoreValue," "))})))},null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.3dc22ede.chunk.js.map