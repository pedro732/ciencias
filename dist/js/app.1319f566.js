(function(){"use strict";var e={5210:function(e,a,t){var o=t(144),s=function(){var e=this,a=e._self._c;return a("div",{attrs:{id:"app","data-app":""}},[a("BarraNavegacion",{on:{resetView:e.resetView}}),a("router-view",{key:e.routeKey})],1)},r=[],i=function(){var e=this,a=e._self._c;return a("div",{staticClass:"mi-contenedor"},[a("router-link",{staticClass:"navbar-button",attrs:{to:"/"},nativeOn:{click:function(a){return e.$emit("resetView")}}},[e._v("Inicio")]),a("router-link",{staticClass:"navbar-button",attrs:{to:"/login"}},[e._v("Iniciar sesion")]),a("router-link",{staticClass:"navbar-button",attrs:{to:"/registro"}},[e._v("Registrarse")]),a("div",{staticClass:"breadcrumb"},[a("router-link",{attrs:{to:"/"}},[e._v("Inicio")]),e._l(e.$route.matched,(function(t,o){return a("span",{key:o},[a("span",[e._v(" / ")]),a("router-link",{attrs:{to:t.path}},[e._v(e._s(t.name))])],1)}))],2)],1)},n=[],c={name:"NavBar"},l=c,d=t(1001),u=(0,d.Z)(l,i,n,!1,null,null,null),p=u.exports,m={name:"App",data(){return{routeKey:0}},components:{BarraNavegacion:p},methods:{resetView(){this.routeKey++}}},f=m,h=(0,d.Z)(f,s,r,!1,null,null,null),v=h.exports,b=t(8345),g=function(){var e=this,a=e._self._c;return a("div",[a("div",{staticClass:"content"},[a("CarruselWeb"),a("InfoFacebook"),a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"conec-nasa-wrapper"},[a("div",{staticStyle:{width:"100%",overflow:"auto"}},[a("ConecNasa")],1),a("PalabrasAleatorias",{staticClass:"fixed-size"})],1)]),a("PieDePagina")],1)])},_=[],w=t(4136),C=t(9690),y=t(1584),x=function(){var e=this,a=e._self._c;return a(w.Z,{ref:"carousel",staticClass:"custom-carousel",on:{input:e.resetTimer}},e._l(e.images,(function(e,t){return a(C.Z,{key:t},[a("div",{staticClass:"image-container"},[a(y.Z,{staticClass:"full-width-image",attrs:{src:e,"lazy-src":e}})],1)])})),1)},k=[],Z={name:"CarruselWeb",data(){return{images:["https://cdn.pixabay.com/photo/2023/08/24/17/34/squirrel-8211238_1280.jpg","https://cdn.pixabay.com/photo/2023/07/19/22/28/amur-tiger-8138017_1280.jpg","https://cdn.pixabay.com/photo/2023/09/04/06/59/dog-8232158_1280.jpg","https://cdn.pixabay.com/photo/2016/10/17/11/00/iceland-1747368_1280.jpg","https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png"],timer:null}},mounted(){this.startTimer()},methods:{startTimer(){this.timer=setInterval((()=>{this.moveToNextSlide()}),3e3)},resetTimer(){clearInterval(this.timer),this.startTimer()},moveToNextSlide(){const e=this.$refs.carousel;e&&e.next&&e.next()}},getImageStyle(e){return"https://cdn.pixabay.com/photo/2018/11/14/02/19/horse-3814350_1280.png"===e?"height: 50px":""}},I=Z,q=(0,d.Z)(I,x,k,!1,null,null,null),j=q.exports,E=t(941),P=t(5255),S=function(){var e=this,a=e._self._c;return a("div",{staticClass:"cards-container"},[a(E.Z,[a(P.EB,{staticClass:"custom-card-title"},[e._v(" MideUC")]),a(P.ZB,[a("div",{attrs:{id:"fb-root"}}),a("div",{staticClass:"fb-page",attrs:{"data-href":"https://www.facebook.com/MideUC","data-tabs":"timeline","data-width":"","data-height":"","data-small-header":"false","data-adapt-container-width":"true","data-hide-cover":"false","data-show-facepile":"true"}},[a("blockquote",{staticClass:"fb-xfbml-parse-ignore",attrs:{cite:"https://www.facebook.com/MideUC"}},[a("a",{attrs:{href:"https://www.facebook.com/MideUC"}},[e._v("MIDE UC")])])])])],1),a(E.Z,[a(P.EB,{staticClass:"custom-card-title"},[e._v("Aptus")]),a(P.ZB,[a("div",{staticClass:"fb-page",attrs:{"data-href":"https://www.facebook.com/aptusvideos2021","data-tabs":"timeline","data-width":"","data-height":"","data-small-header":"false","data-adapt-container-width":"true","data-hide-cover":"false","data-show-facepile":"true"}},[a("blockquote",{staticClass:"fb-xfbml-parse-ignore",attrs:{cite:"https://www.facebook.com/aptusvideos2021"}},[a("a",{attrs:{href:"https://www.facebook.com/aptusvideos2021"}},[e._v("Aptus Videos")])])])])],1),a(E.Z,[a(P.EB,{staticClass:"custom-card-title"},[e._v("Neurociencia")]),a(P.ZB,[a("div",{staticClass:"fb-page",attrs:{"data-href":"https://www.facebook.com/MITSloanExecEd","data-tabs":"timeline","data-width":"","data-height":"","data-small-header":"false","data-adapt-container-width":"true","data-hide-cover":"false","data-show-facepile":"true"}},[a("blockquote",{staticClass:"fb-xfbml-parse-ignore",attrs:{cite:"https://www.facebook.com/MITSloanExecEd"}},[a("a",{attrs:{href:"https://www.facebook.com/MITSloanExecEd"}},[e._v("MIT Sloan Executive Education")])])])])],1)],1)},B=[],T={name:"InfoFacebook",mounted(){this.loadFacebookScript(),this.$nextTick((()=>{this.reloadFacebookPlugins()}))},methods:{loadFacebookScript(){if(document.querySelector('script[src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v18.0&appId=6904286386297944&autoLogAppEvents=1"]'))return;const e=document.createElement("script");e.async=!0,e.defer=!0,e.crossorigin="anonymous",e.src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v18.0&appId=6904286386297944&autoLogAppEvents=1",e.nonce="YM3pSOI7",document.head.appendChild(e)},reloadFacebookPlugins(){"undefined"!==typeof FB&&FB.XFBML.parse()}}},F=T,A=(0,d.Z)(F,S,B,!1,null,null,null),D=A.exports,N=t(6530),z=t(9456),M=t(1500),O=function(){var e=this,a=e._self._c;return a("div",[a(w.Z,{staticStyle:{height:"90vh"},attrs:{cycle:!0,"hide-delimiter-background":!0,interval:15e3},model:{value:e.activeIndex,callback:function(a){e.activeIndex=a},expression:"activeIndex"}},e._l(e.images,(function(t,o){return a(C.Z,{key:o},[a(M.Z,{attrs:{height:"auto"}},[a(N.Z,{attrs:{"fill-height":"",fluid:""}},[a(z.Z,{attrs:{column:"","align-center":"","justify-center":""}},[a(y.Z,{key:o,staticClass:"contained-image",attrs:{src:t.url},on:{error:e.handleImageError}})],1),a("transition",{attrs:{name:"fade",mode:"out-in"}},[e.activeIndex===o?a(E.Z,{staticClass:"description-card"},[a(P.ZB,{staticClass:"description-title"},[e._v(e._s(t.title))]),a(P.ZB,{staticClass:"description-text"},[e._v(e._s(t.explanation))])],1):e._e()],1)],1)],1)],1)})),1)],1)},$=[],L=t(5121),R={data(){return{images:[],activeIndex:0,activeIndices:[]}},mounted(){this.fetchImages()},methods:{fetchImages(){const e="omgXpEYFw4JcUDdylXehNzH3TmL2eI7fFEBiXVsS",a=`https://api.nasa.gov/planetary/apod?api_key=${e}&count=5`;L.Z.get(a).then((e=>{console.log(e.data),this.images=e.data.map((e=>({url:e.url,title:e.title,explanation:e.explanation})))})).catch((e=>{console.error(e)}))},handleImageError(e){console.error("Image failed to load",e)},handleScroll(e){const a=this.$vuetify.breakpoint.width/2,t=this.images.map(((e,a)=>a)).filter((t=>{const o=this.$refs.carousel.$el.querySelector(`[data-index="${t}"]`);return o&&o.offsetLeft-a<e&&o.offsetLeft+a>e}));this.activeIndices=t}}},U=R,W=(0,d.Z)(U,O,$,!1,null,"ff1bc93c",null),K=W.exports,V=t(7024),X=t(1869),Q=t(7894),G=t(2515),Y=function(){var e=this,a=e._self._c;return a(X.Z,{staticClass:"footer",attrs:{color:"primary",dark:""}},[a(Q.Z,{attrs:{align:"center",justify:"center"}},[a(V.Z,{attrs:{cols:"12"}},[a(Q.Z,{attrs:{align:"center",justify:"center"}},[a(V.Z,{attrs:{cols:"auto"}},[a("i",{staticClass:"fab fa-facebook fa-lg mr-2"})]),a(V.Z,{attrs:{cols:"auto"}},[a("i",{staticClass:"fab fa-twitter fa-lg mr-2"})]),a(V.Z,{attrs:{cols:"auto"}},[a("i",{staticClass:"fab fa-instagram fa-lg mr-2"})]),a(V.Z,{attrs:{cols:"auto"}},[a("i",{staticClass:"fab fa-linkedin fa-lg mr-2"})])],1)],1),a(V.Z,{staticClass:"mt-4",attrs:{cols:"12"}},[a(Q.Z,{attrs:{justify:"center"}},[a(V.Z,{attrs:{cols:"12"}},[a("p",{staticClass:"text-center"},[e._v(" © "+e._s(e.currentYear)+" Todos los derechos reservados ")]),a("p",{staticClass:"text-center"},[e._v(" Bienvenido a nuestra web de ciencias. Nos dedicamos a educar y promover el conocimiento científico para todos. ")])]),a(V.Z,{staticClass:"text-center",attrs:{cols:"12"}},[a("img",{staticStyle:{height:"200px"},attrs:{src:t(6949),alt:"Logo"}})])],1)],1),a(G.Z)],1)],1)},H=[],J={name:"PieDePagina",data(){return{currentYear:(new Date).getFullYear()}}},ee=J,ae=(0,d.Z)(ee,Y,H,!1,null,"71fe1160",null),te=ae.exports,oe=function(){var e=this,a=e._self._c;return a("div",{staticClass:"palabras-aleatorias"},[a("div",{staticClass:"palabra",style:e.randomStyle},[e._v(e._s(e.currentWord))])])},se=[],re={name:"PalabrasAleatorias",data(){return{palabras:["ciencia","biología","química","física","método científico","hipótesis","energía","Newton","Darwin","Einstein"],currentWord:""}},computed:{randomStyle(){const e=this.getRandomColor();return{fontSize:"2.5em",fontWeight:"bold",textTransform:"uppercase",margin:"5px",padding:"10px",borderRadius:"5px",color:"white",backgroundColor:e,display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}}},mounted(){this.startRandomWord()},methods:{startRandomWord(){setInterval((()=>{this.currentWord=this.palabras[Math.floor(Math.random()*this.palabras.length)]}),2e3)},getRandomColor(){const e="0123456789ABCDEF";let a="#";for(let t=0;t<6;t++)a+=e[Math.floor(16*Math.random())];return a}}},ie=re,ne=(0,d.Z)(ie,oe,se,!1,null,"0dfa100d",null),ce=ne.exports,le={name:"PrincipalView",components:{CarruselWeb:j,InfoFacebook:D,ConecNasa:K,PieDePagina:te,PalabrasAleatorias:ce},beforeRouteEnter(e,a,t){const o=["CienciaActual"];o.includes(a.name)?t((e=>{e.$router.go()})):t()}},de=le,ue=(0,d.Z)(de,g,_,!1,null,"f1a03cf4",null),pe=ue.exports,me=t(3381),fe=t(6975),he=t(8741),ve=function(){var e=this,a=e._self._c;return a("div",[a(fe.Z,{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[a(E.Z,[a(P.EB,[a("span",{staticClass:"headline"},[e._v("Registrarse")])]),a(P.ZB,[a("form",{on:{submit:function(a){return a.preventDefault(),e.signUp.apply(null,arguments)}}},[a("div",[a("label",{attrs:{for:"name"}},[e._v("Nombre:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",id:"name",required:""},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}})]),a("div",[a("label",{attrs:{for:"email"}},[e._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email",required:""},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}})]),a("div",[a("label",{attrs:{for:"password"}},[e._v("Password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password",required:""},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})]),a(P.h7,[a(G.Z),a(me.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDialog}},[e._v("Cerrar")]),a(me.Z,{attrs:{color:"blue darken-1",text:"",type:"submit"}},[e._v("Enviar")])],1)],1)])],1)],1),a(he.Z,{attrs:{color:e.snackbarColor,timeout:5e3},model:{value:e.snackbar,callback:function(a){e.snackbar=a},expression:"snackbar"}},[e._v(" "+e._s(e.snackbarText)+" ")])],1)},be=[],ge=(t(560),t(3977)),_e=t(316);const we={apiKey:"AIzaSyCg_IjvdOeqk3JiAHtXGKWRsQ_5-RsGcMQ",authDomain:"ciencia-4d778.firebaseapp.com",projectId:"ciencia-4d778",storageBucket:"ciencia-4d778.appspot.com",messagingSenderId:"604858739211",appId:"1:604858739211:web:6fb5fc235c3add0bce350e",measurementId:"G-GFXDL692XD"},Ce=((0,ge.ZF)(we),(0,_e.v0)());var ye={name:"SignUp",data(){return{dialog:!0,name:"",email:"",password:"",snackbar:!1,snackbarText:"",snackbarColor:""}},beforeRouteEnter(e,a,t){"/registro"===e.path?t((e=>e.dialog=!0)):t()},beforeRouteUpdate(e,a,t){"/registro"===e.path&&(this.dialog=!0),t()},methods:{signUp(){(0,_e.Xb)(Ce,this.email,this.password).then((()=>{console.log("Usuario registrado correctamente"),this.snackbarText="Usuario registrado correctamente",this.snackbarColor="success",this.snackbar=!0,this.closeDialog()})).catch((e=>{console.error("Error al registrar al usuario:",e)}))},closeDialog(){this.dialog=!1,this.$router.push("/login")}}},xe=ye,ke=(0,d.Z)(xe,ve,be,!1,null,"0a9d241a",null),Ze=ke.exports,Ie=function(){var e=this,a=e._self._c;return a("div",[a(fe.Z,{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[a(E.Z,[a(P.EB,[a("span",{staticClass:"headline"},[e._v("Iniciar Sesión")])]),a(P.ZB,[a("form",{on:{submit:function(a){return a.preventDefault(),e.login.apply(null,arguments)}}},[a("div",[a("label",{attrs:{for:"email"}},[e._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email",required:""},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}})]),a("div",[a("label",{attrs:{for:"password"}},[e._v("Contraseña:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password",required:""},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})]),a(P.h7,[a(G.Z),a(me.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDialog}},[e._v("Cerrar")]),a(me.Z,{attrs:{color:"blue darken-1",text:"",type:"submit"}},[e._v("Iniciar Sesión")])],1)],1)])],1)],1)],1)},qe=[],je={name:"InicioSesion",data(){return{dialog:!0,email:"",password:""}},methods:{login(){(0,_e.e5)(Ce,this.email,this.password).then((()=>{this.$router.push("/ciencia"),console.log("Inicio de sesión exitoso"),this.dialog=!1})).catch((e=>{console.error("Error al iniciar sesión:",e)}))},closeDialog(){this.dialog=!1}}},Ee=je,Pe=(0,d.Z)(Ee,Ie,qe,!1,null,"18732c00",null),Se=Pe.exports,Be=function(){var e=this,a=e._self._c;return a("div",[a(me.Z,{staticClass:"button",on:{click:function(a){return e.handleClick("Biologia")}}},[e._v("Biologia")]),a(me.Z,{staticClass:"button",on:{click:function(a){return e.handleClick("Quimica")}}},[e._v("Quimica")]),a(me.Z,{staticClass:"button",on:{click:function(a){return e.handleClick("Fisica")}}},[e._v("Fisica")]),e.showContent?a("div",{key:e.contentKey},[a("CarruselCiencia"),a("p",{staticClass:"emerald-background"},[e._v(" Este sitioweb esta dando sus primeros pasos. Este proyecto nace con la intención de convertirse en un lugar de promoción de la ciencia para un contexto escolar. Está diseñado fundamentalmente para dar a conocer una ciencia escolar que brinde el apoyo requerido a todos quienes acudan a este para adquirir mayor claridad sobre concepciones científicas. Por ahora solamente te presento la estructura global , en las páginas dedicadas a Biología , Física y Química solamente encontrarás los títulos. Gradualmente información de interés y diversas opciones para que puedas entregar tu opinion, responder a encuestas, enviar material para publicar entre otras posibilidades. ")]),a("h2",[e._v("Ideas de la ciencia en el transcurso del tiempo")]),a("p",{staticClass:"double-border"},[e._v(" El intelecto humano, cuando se complace en una cosa, (ya porque sea generalmente admitida y creída, o porque cause deleite) obliga a todas las otras cosas a ser confirmadas y estar de acuerdo con ella; y por más grande que sea la fuerza y el número de pruebas en contrario, o bien no las observa, o las desprecia, o las quita de en medio y las rechaza valiéndose de un distingo cualquiera y ello no sin grande y pernicioso prejuicio con tal que sus primeras conclusiones permanezcan invioladas. Novum Organum I, 49. ")]),a("p",{staticClass:"double-border"},[e._v(" La comprensión humana una vez que ha adoptado una opinión, atrae a todas las demás cosas para apoyarla, y estar de acuerdo con ella… Si queremos lograr cosas nunca antes logradas, debemos emplear métodos que nunca antes se han intentado. ")]),a("p",{staticClass:"double-border"},[e._v(" Así pues, entiendo por método reglas ciertas y fáciles, mediante las cuales el que las observe exactamente, no tomará nunca nada falso por verdadero y, no empleando inútilmente ningún esfuerzo de la mente, sino aumentando siempre gradualmente su ciencia, llegará al conocimiento verdadero de todo aquello que es capaz… pues no determinándose nuestra voluntad a seguir o a evitar cosa alguna, sino porque nuestro entenidimiento se la representa, como cosa buena o mala, basta juzgar bien para obrar bien (Descartes, 1637, p. 55) ")]),a("p",{staticClass:"double-border"},[e._v(" Para Popper hay tres grandes acuerdos que la comunidad científica debe acordar para que haya ciencia: a) La ciencia es la búsqueda continua de explicaciones b) Se toman enunciados universales surgidos de la teoría y no de la experiencia y c) Para que un enunciado sea científico, debe ser posible tener una consecuencia deducible y predictiva (Popper, 1935). ")]),a("p",{staticClass:"double-border"},[e._v(" “El investigador se sirve libremente de la razón y del cálculo; no podría ir lejos de ellos. Pero vela porque las andanzas de esta índole teórica partan de objetos de una experiencia directa y terminen en ellos. La teoría puede intervenir en el curso de una larga serie de ideas, muchas de las cuales estén muy alejadas de toda experiencia directa. Pero el puente colgante de la teoría está sujeto por ambos extremos a los pilares de los objetos observados” (Dewey, 1925) ")]),a("p",{staticClass:"double-border"},[e._v(" Paul Dirac, al decir “la medida de una idea científica, es la medida en la que estímula el pensamiento y abre nuevas líneas de investigación” nos invita a comprometernos a solucionar problemas con las matemáticas ")]),a("p",{staticClass:"double-border"},[e._v(" . Bacon señala sobre el error, la verdad y las creencias: “La verdad surge más fácilmente del error que de la confusión”, “la verdad es hija del tiempo, no de la autoridad” y “el hombre prefiere creer lo que prefiere que sea verdad.” ")]),a("p",{staticClass:"double-border"},[e._v(" “En tanto el margen de observación no es suficientemente amplio como para incluir el contexto en el que dicho fenómeno tiene lugar. La imposibilidad de comprender las complejidades de las relaciones entre un hecho y el contexto en el que tiene lugar, entre organismos y su medio, o enfrenta al observador con algo “misterioso” o lo lleva atribuir a su objeto de estudio ciertas propiedades que quizá el objeto no posea, (Watzlawick et al., 1991). ")])],1):e._e(),a("router-view")],1)},Te=[],Fe=function(){var e=this,a=e._self._c;return a(w.Z,{ref:"carousel",staticClass:"custom-carousel"},e._l(e.items,(function(e,t){return a(C.Z,{key:t},[a("div",{staticClass:"image-container"},[a(y.Z,{staticClass:"full-width-image",attrs:{src:e.src,"lazy-src":e.src}})],1)])})),1)},Ae=[],De={name:"CarruselCiencia",data(){return{items:[{src:"https://img.freepik.com/vector-gratis/fondo-educacion-cientifica_23-2148486901.jpg?w=1800&t=st=1702154329~exp=1702154929~hmac=bfa28f82f63e43888b0ec2fe6d04deeed2417acd29d302d063b474c01052302f"},{src:"https://img.freepik.com/vector-gratis/formulas-cientificas-dibujadas-mano-pizarra_23-2148495302.jpg?w=1800&t=st=1702154688~exp=1702155288~hmac=2d9fe7f1dd7fc3c9571c8e4ecb172f93ec2501ac3e52d9b1f5f8e2732d5a7e70"},{src:"https://img.freepik.com/vector-gratis/bosquejo-concepto-educacion_1284-7335.jpg?w=1060&t=st=1702154725~exp=1702155325~hmac=d1df3046de4b3e4a410bc7a9447c690d23037cbfd34ffa3a5819243818516d77"},{src:"https://img.freepik.com/vector-gratis/colorido-ciencia-objetos-iconos-vector-conjunto_1308-131978.jpg?w=1060&t=st=1702154750~exp=1702155350~hmac=9d08d2278745b81e87a7873b611d53432a035a38e3b2dc77ddfeff79d0103ee4"},{src:"https://img.freepik.com/vector-gratis/objetos-laboratorio-ciencias_23-2148488312.jpg?w=1060&t=st=1702154779~exp=1702155379~hmac=713f4c8711623fe0bd724a2dddecef6ccf306c61610c6a0f5e8d6e2ead0e8aac"},{src:"https://img.freepik.com/vector-gratis/fondo-ciencia-dibujada-mano_23-2148529525.jpg?w=1800&t=st=1702154807~exp=1702155407~hmac=845d77b5d72be48348131d09ed9d50c8a43f9fcd586393c49330ba1dff412f17"}],timer:null}},mounted(){this.startTimer()},methods:{startTimer(){this.timer=setInterval((()=>{this.moveToNextSlide()}),3e3)},resetTimer(){clearInterval(this.timer),this.startTimer()},moveToNextSlide(){const e=this.$refs.carousel;e&&e.next&&e.next()}}},Ne=De,ze=(0,d.Z)(Ne,Fe,Ae,!1,null,null,null),Me=ze.exports,Oe={name:"CienciaActual",components:{CarruselCiencia:Me},data(){return{showContent:!0,contentKey:0,buttonClicked:!1}},methods:{handleClick(e){const a=`/ciencia/${e.toLowerCase()}`;this.$route.path!==a&&(this.showContent=!1,this.contentKey++,this.buttonClicked=!0,this.$router.push(a))}},beforeRouteLeave(e,a,t){t()},beforeRouteEnter(e,a,t){t((e=>{e.showContent=!0}))},beforeRouteUpdate(e,a,t){this.buttonClicked||(this.showContent=!0),this.buttonClicked=!1,t()}},$e=Oe,Le=(0,d.Z)($e,Be,Te,!1,null,"349a67dc",null),Re=Le.exports,Ue=function(){var e=this;e._self._c;return e._m(0)},We=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v("Bienvenidos al mundo de la Biología")])])}],Ke={name:"FisicaActual"},Ve=Ke,Xe=(0,d.Z)(Ve,Ue,We,!1,null,"22a42d8f",null),Qe=Xe.exports,Ge=function(){var e=this;e._self._c;return e._m(0)},Ye=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v("Bienvenidos al mundo de la Química")])])}],He={name:"FisicaActual"},Je=He,ea=(0,d.Z)(Je,Ge,Ye,!1,null,"2fa5beba",null),aa=ea.exports,ta=function(){var e=this;e._self._c;return e._m(0)},oa=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v("Bienvenidos al mundo de la Fisica")])])}],sa={name:"FisicaActual"},ra=sa,ia=(0,d.Z)(ra,ta,oa,!1,null,"2dae67ab",null),na=ia.exports;o.ZP.use(b.ZP);const ca=[{path:"/",name:"VistaPrincipal",component:pe},{path:"/registro",name:"SignUp",component:Ze},{path:"/login",name:"InicioSesion",component:Se},{path:"/ciencia",name:"CienciaActual",component:Re,children:[{path:"biologia",name:"BiologiaActual",component:Qe},{path:"quimica",name:"QuimicaActual",component:aa},{path:"fisica",name:"FisicaActual",component:na}]}],la=new b.ZP({mode:"history",base:"/production-sub-path/",routes:ca});var da=la,ua=t(629);o.ZP.use(ua.ZP);var pa=new ua.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),ma=t(154);o.ZP.use(ma.Z);var fa=new ma.Z({});o.ZP.config.productionTip=!1,new o.ZP({router:da,store:pa,vuetify:fa,render:e=>e(v)}).$mount("#app")},6949:function(e,a,t){e.exports=t.p+"img/logo.5e7b385d.png"}},a={};function t(o){var s=a[o];if(void 0!==s)return s.exports;var r=a[o]={exports:{}};return e[o].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(a,o,s,r){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],s=e[d][1],r=e[d][2];for(var n=!0,c=0;c<o.length;c++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(n=!1,r<i&&(i=r));if(n){e.splice(d--,1);var l=s();void 0!==l&&(a=l)}}return a}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,s,r]}}(),function(){t.d=function(e,a){for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/production-sub-path/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,o){var s,r,i=o[0],n=o[1],c=o[2],l=0;if(i.some((function(a){return 0!==e[a]}))){for(s in n)t.o(n,s)&&(t.m[s]=n[s]);if(c)var d=c(t)}for(a&&a(o);l<i.length;l++)r=i[l],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},o=self["webpackChunkciencias"]=self["webpackChunkciencias"]||[];o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(5210)}));o=t.O(o)})();
//# sourceMappingURL=app.1319f566.js.map