"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[921],{9789:function(e,t,o){var n;o.d(t,{Z:function(){return d}});var r=new Uint8Array(16);function a(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var l=function(e){return"string"==typeof e&&i.test(e)},c=[],s=0;s<256;++s)c.push((s+256).toString(16).substr(1));var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!l(o))throw TypeError("Stringified UUID is invalid");return o};var d=function(e,t,o){var n=(e=e||{}).random||(e.rng||a)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){o=o||0;for(var r=0;r<16;++r)t[o+r]=n[r];return t}return p(n)}},9298:function(e,t,o){o.r(t);var n=o(7294),r=o(1597),a=o(7059),i=o(5414),l=o(6715),c=o(9789),s=o(5493),p=o(1159),d=l.default.div.withConfig({displayName:"proyectosDinamicos__Div",componentId:"sc-110h3i5-0"})(["display:flex;justify-content:flex-end;.contenedor{margin:80px 0;width:85%;@media (max-width:600px){&{width:100%;}}a{margin:20px;text-decoration:none;padding:5px 15px;transition:.2s text-shadow,.2s color,.5s box-shadow;.claro &{box-shadow:4px 4px 5px 0 #0002,-4px -4px 5px #fff;color:#000;}.oscuro &{box-shadow:4px 4px 6px 0 #040404,-4px -4px 6px #363636;color:#fff;}}a:active{.claro &{box-shadow:3px 3px 5px 0 #0002 inset,-2px -2px 5px #fff inset;}.oscuro &{box-shadow:3px 3px 5px 0 #040404 inset,-2px -2px 5px #363636 inset;}}a:hover{color:red;text-shadow:0px 0px 15px red;.claro &{color:red;text-shadow:0px 0px 15px red;}.oscuro &{color:#FF9797;text-shadow:0px 0px 15px red;}}h1{margin:20px;transition:.2s color;.claro &{color:#000;}.oscuro &{color:#fff;}}p{margin:20px;transition:.2s color;.claro &{color:#000;}.oscuro &{color:#fff;}}h3{margin:10px 20px;.claro &{color:#000;}.oscuro &{color:#fff;}}li{margin:5px 40px;.claro &{color:#000;}.oscuro &{color:#fff;}}.img{margin:20px;}}"]);t.default=function(e){var t=e.data.allDatoCmsProyecto.nodes[0],o=t.descripcion,l=t.imgproyecto,m=t.nombre,f=t.tecnologias.split(",");return n.createElement(n.Fragment,null,n.createElement(i.q,null,n.createElement("title",null,"Ronny Minda V."),n.createElement("meta",{charset:"UTF-8"}),n.createElement("meta",{name:"description",content:"Soy desrrolador de Software Frontend y Backend full rest, responsive design, diseño moderno, trabajo en equipo con git y por ultimo validaciones del lado del servidor."}),n.createElement("meta",{name:"author",content:"Ronny Minda V."}),n.createElement("meta",{name:"keywords",content:"website, development, software, design"}),n.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),n.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),n.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),n.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),n.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;1,900&display=swap",rel:"stylesheet"})),n.createElement(s.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1}},n.createElement(p.Z,null,n.createElement(d,null,n.createElement("div",{className:"contenedor"},n.createElement(r.Link,{to:"/"},"ATRAS"),n.createElement("h1",null,m),n.createElement("p",null,o),n.createElement("h3",null,"Tecnologias"),f.map((function(e){return n.createElement("li",{key:(0,c.Z)()},e)})),n.createElement(a.G,{className:"img",image:l.gatsbyImageData,alt:m}))))))}}}]);
//# sourceMappingURL=component---src-components-proyectos-dinamicos-js-21dd427f19cd7bd2db1b.js.map