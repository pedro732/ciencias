(function(){"use strict";var e={8164:function(e,a,t){var s=t(144),o=function(){var e=this,a=e._self._c;return a("div",{attrs:{id:"app","data-app":""}},[a("BarraNavegacion",{on:{resetView:e.resetView}}),a("router-view",{key:e.routeKey})],1)},i=[],r=t(3381),n=function(){var e=this,a=e._self._c;return a("div",{staticClass:"mi-contenedor"},[a("router-link",{staticClass:"navbar-button",attrs:{to:"/"},nativeOn:{click:function(a){return e.$emit("resetView")}}},[e._v("Inicio")]),a("router-link",{staticClass:"navbar-button",attrs:{to:"/login"}},[e._v("Iniciar sesion")]),a("router-link",{staticClass:"navbar-button",attrs:{to:"/registro"}},[e._v("Registrarse")]),a("router-link",{staticClass:"navbar-button",attrs:{to:"/ciencia"}},[e._v("Invitado")]),a(r.Z,{staticClass:"navbar-button",on:{click:e.logout}},[e._v("Cerrar sesión")]),e._v(" "),a("div",{staticClass:"breadcrumb"},[a("router-link",{attrs:{to:"/"}},[e._v("Inicio")]),e._l(e.$route.matched,(function(t,s){return a("span",{key:s},[a("span",[e._v(" / ")]),a("router-link",{attrs:{to:t.path}},[e._v(e._s(t.name))])],1)}))],2)],1)},c=[],l=(t(560),t(3977)),d=t(316),u=t(6100);const m={apiKey:"AIzaSyCg_IjvdOeqk3JiAHtXGKWRsQ_5-RsGcMQ",authDomain:"ciencia-4d778.firebaseapp.com",projectId:"ciencia-4d778",storageBucket:"ciencia-4d778.appspot.com",messagingSenderId:"604858739211",appId:"1:604858739211:web:6fb5fc235c3add0bce350e",measurementId:"G-GFXDL692XD"},p=((0,l.ZF)(m),(0,d.v0)()),f=(0,u.ad)();var h={name:"NavBar",methods:{async logout(){try{await(0,d.w7)(p),"/"!==this.$route.path&&this.$router.push("/")}catch(e){console.error("Error al cerrar la sesión:",e)}}}},v=h,b=t(1001),g=(0,b.Z)(v,n,c,!1,null,null,null),_=g.exports,C={name:"App",data(){return{routeKey:0}},components:{BarraNavegacion:_},methods:{resetView(){this.routeKey++}}},x=C,w=(0,b.Z)(x,o,i,!1,null,null,null),y=w.exports,k=t(8345),Z=function(){var e=this,a=e._self._c;return a("div",[a("div",{staticClass:"content"},[a("CarruselWeb"),a("InfoFacebook"),a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"conec-nasa-wrapper"},[a("div",{staticStyle:{width:"100%",overflow:"auto"}},[a("ConecNasa")],1),a("PalabrasAleatorias",{staticClass:"fixed-size"})],1)]),a("PieDePagina")],1)])},j=[],q=t(6461),E=t(9690),I=t(1584),P=function(){var e=this,a=e._self._c;return a(q.Z,{ref:"carousel",staticClass:"custom-carousel",on:{input:e.resetTimer}},e._l(e.images,(function(e,t){return a(E.Z,{key:t},[a("div",{staticClass:"image-container"},[a(I.Z,{staticClass:"full-width-image",attrs:{src:e,"lazy-src":e}})],1)])})),1)},S=[],F={name:"CarruselWeb",data(){return{images:["https://cdn.pixabay.com/photo/2023/08/24/17/34/squirrel-8211238_1280.jpg","https://cdn.pixabay.com/photo/2023/07/19/22/28/amur-tiger-8138017_1280.jpg","https://cdn.pixabay.com/photo/2023/09/04/06/59/dog-8232158_1280.jpg","https://cdn.pixabay.com/photo/2016/10/17/11/00/iceland-1747368_1280.jpg","https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png"],timer:null}},mounted(){this.startTimer()},methods:{startTimer(){this.timer=setInterval((()=>{this.moveToNextSlide()}),3e3)},resetTimer(){clearInterval(this.timer),this.startTimer()},moveToNextSlide(){const e=this.$refs.carousel;e&&e.next&&e.next()}},getImageStyle(e){return"https://cdn.pixabay.com/photo/2018/11/14/02/19/horse-3814350_1280.png"===e?"height: 50px":""}},T=F,B=(0,b.Z)(T,P,S,!1,null,null,null),A=B.exports,z=t(3816),D=t(5255),M=function(){var e=this,a=e._self._c;return a("div",{staticClass:"cards-container"},[a(z.Z,[a(D.EB,{staticClass:"custom-card-title"},[e._v(" MideUC")]),a(D.ZB,[a("div",{attrs:{id:"fb-root"}}),a("div",{staticClass:"fb-page",attrs:{"data-href":"https://www.facebook.com/MideUC","data-tabs":"timeline","data-width":"","data-height":"","data-small-header":"false","data-adapt-container-width":"true","data-hide-cover":"false","data-show-facepile":"true"}},[a("blockquote",{staticClass:"fb-xfbml-parse-ignore",attrs:{cite:"https://www.facebook.com/MideUC"}},[a("a",{attrs:{href:"https://www.facebook.com/MideUC"}},[e._v("MIDE UC")])])])])],1),a(z.Z,[a(D.EB,{staticClass:"custom-card-title"},[e._v("Aptus")]),a(D.ZB,[a("div",{staticClass:"fb-page",attrs:{"data-href":"https://www.facebook.com/aptusvideos2021","data-tabs":"timeline","data-width":"","data-height":"","data-small-header":"false","data-adapt-container-width":"true","data-hide-cover":"false","data-show-facepile":"true"}},[a("blockquote",{staticClass:"fb-xfbml-parse-ignore",attrs:{cite:"https://www.facebook.com/aptusvideos2021"}},[a("a",{attrs:{href:"https://www.facebook.com/aptusvideos2021"}},[e._v("Aptus Videos")])])])])],1),a(z.Z,[a(D.EB,{staticClass:"custom-card-title"},[e._v("Neurociencia")]),a(D.ZB,[a("div",{staticClass:"fb-page",attrs:{"data-href":"https://www.facebook.com/MITSloanExecEd","data-tabs":"timeline","data-width":"","data-height":"","data-small-header":"false","data-adapt-container-width":"true","data-hide-cover":"false","data-show-facepile":"true"}},[a("blockquote",{staticClass:"fb-xfbml-parse-ignore",attrs:{cite:"https://www.facebook.com/MITSloanExecEd"}},[a("a",{attrs:{href:"https://www.facebook.com/MITSloanExecEd"}},[e._v("MIT Sloan Executive Education")])])])])],1)],1)},U=[],N={name:"InfoFacebook",mounted(){this.loadFacebookScript(),this.$nextTick((()=>{this.reloadFacebookPlugins()}))},methods:{loadFacebookScript(){if(document.querySelector('script[src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v18.0&appId=6904286386297944&autoLogAppEvents=1"]'))return;const e=document.createElement("script");e.async=!0,e.defer=!0,e.crossorigin="anonymous",e.src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v18.0&appId=6904286386297944&autoLogAppEvents=1",e.nonce="YM3pSOI7",document.head.appendChild(e)},reloadFacebookPlugins(){"undefined"!==typeof FB&&FB.XFBML.parse()}}},$=N,L=(0,b.Z)($,M,U,!1,null,null,null),O=L.exports,R=t(6530),W=t(9456),K=t(1500),V=function(){var e=this,a=e._self._c;return a("div",[a(q.Z,{staticStyle:{height:"90vh"},attrs:{cycle:!0,"hide-delimiter-background":!0,interval:15e3},model:{value:e.activeIndex,callback:function(a){e.activeIndex=a},expression:"activeIndex"}},e._l(e.images,(function(t,s){return a(E.Z,{key:s},[a(K.Z,{attrs:{height:"auto"}},[a(R.Z,{attrs:{"fill-height":"",fluid:""}},[a(W.Z,{attrs:{column:"","align-center":"","justify-center":""}},[a(I.Z,{key:s,staticClass:"contained-image",attrs:{src:t.url},on:{error:e.handleImageError}})],1),a("transition",{attrs:{name:"fade",mode:"out-in"}},[e.activeIndex===s?a(z.Z,{staticClass:"description-card"},[a(D.ZB,{staticClass:"description-title"},[e._v(e._s(t.title))]),a(D.ZB,{staticClass:"description-text"},[e._v(e._s(t.explanation))])],1):e._e()],1)],1)],1)],1)})),1)],1)},Q=[],X=t(5121),G={data(){return{images:[],activeIndex:0,activeIndices:[]}},mounted(){this.fetchImages()},methods:{fetchImages(){const e="omgXpEYFw4JcUDdylXehNzH3TmL2eI7fFEBiXVsS",a=`https://api.nasa.gov/planetary/apod?api_key=${e}&count=5`;X.Z.get(a).then((e=>{console.log(e.data),this.images=e.data.map((e=>({url:e.url,title:e.title,explanation:e.explanation})))})).catch((e=>{console.error(e)}))},handleImageError(e){console.error("Image failed to load",e)},handleScroll(e){const a=this.$vuetify.breakpoint.width/2,t=this.images.map(((e,a)=>a)).filter((t=>{const s=this.$refs.carousel.$el.querySelector(`[data-index="${t}"]`);return s&&s.offsetLeft-a<e&&s.offsetLeft+a>e}));this.activeIndices=t}}},J=G,Y=(0,b.Z)(J,V,Q,!1,null,"ff1bc93c",null),H=Y.exports,ee=t(7024),ae=t(1869),te=t(7894),se=t(2515),oe=function(){var e=this,a=e._self._c;return a(ae.Z,{staticClass:"footer",attrs:{color:"primary",dark:""}},[a(te.Z,{attrs:{align:"center",justify:"center"}},[a(ee.Z,{attrs:{cols:"12"}},[a(te.Z,{attrs:{align:"center",justify:"center"}},[a(ee.Z,{attrs:{cols:"auto"}},[a("i",{staticClass:"fab fa-facebook fa-lg mr-2"})]),a(ee.Z,{attrs:{cols:"auto"}},[a("i",{staticClass:"fab fa-twitter fa-lg mr-2"})]),a(ee.Z,{attrs:{cols:"auto"}},[a("i",{staticClass:"fab fa-instagram fa-lg mr-2"})]),a(ee.Z,{attrs:{cols:"auto"}},[a("i",{staticClass:"fab fa-linkedin fa-lg mr-2"})])],1)],1),a(ee.Z,{staticClass:"mt-4",attrs:{cols:"12"}},[a(te.Z,{attrs:{justify:"center"}},[a(ee.Z,{attrs:{cols:"12"}},[a("p",{staticClass:"text-center"},[e._v(" © "+e._s(e.currentYear)+" Todos los derechos reservados ")]),a("p",{staticClass:"text-center"},[e._v(" Bienvenido a nuestra web de ciencias. Nos dedicamos a educar y promover el conocimiento científico para todos. ")])]),a(ee.Z,{staticClass:"text-center",attrs:{cols:"12"}},[a("img",{staticStyle:{height:"200px"},attrs:{src:t(6949),alt:"Logo"}})])],1)],1),a(se.Z)],1)],1)},ie=[],re={name:"PieDePagina",data(){return{currentYear:(new Date).getFullYear()}}},ne=re,ce=(0,b.Z)(ne,oe,ie,!1,null,"71fe1160",null),le=ce.exports,de=function(){var e=this,a=e._self._c;return a("div",{staticClass:"palabras-aleatorias"},[a("div",{staticClass:"palabra",style:e.randomStyle},[e._v(e._s(e.currentWord))])])},ue=[],me={name:"PalabrasAleatorias",data(){return{palabras:["ciencia","biología","química","física","método científico","hipótesis","energía","Newton","Darwin","Einstein"],currentWord:""}},computed:{randomStyle(){const e=this.getRandomColor();return{fontSize:"2.5em",fontWeight:"bold",textTransform:"uppercase",margin:"5px",padding:"10px",borderRadius:"5px",color:"white",backgroundColor:e,display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}}},mounted(){this.startRandomWord()},methods:{startRandomWord(){setInterval((()=>{this.currentWord=this.palabras[Math.floor(Math.random()*this.palabras.length)]}),2e3)},getRandomColor(){const e="0123456789ABCDEF";let a="#";for(let t=0;t<6;t++)a+=e[Math.floor(16*Math.random())];return a}}},pe=me,fe=(0,b.Z)(pe,de,ue,!1,null,"0dfa100d",null),he=fe.exports,ve={name:"PrincipalView",components:{CarruselWeb:A,InfoFacebook:O,ConecNasa:H,PieDePagina:le,PalabrasAleatorias:he},beforeRouteEnter(e,a,t){const s=["CienciaActual"];s.includes(a.name)?t((e=>{e.$router.go()})):t()}},be=ve,ge=(0,b.Z)(be,Z,j,!1,null,"f1a03cf4",null),_e=ge.exports,Ce=t(9290),xe=t(8741),we=function(){var e=this,a=e._self._c;return a("div",[a(Ce.Z,{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[a(z.Z,[a(D.EB,[a("span",{staticClass:"headline"},[e._v("Registrarse")])]),a(D.ZB,[a("form",{on:{submit:function(a){return a.preventDefault(),e.signUp.apply(null,arguments)}}},[a("div",[a("label",{attrs:{for:"name"}},[e._v("Nombre:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",id:"name",required:""},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}})]),a("div",[a("label",{attrs:{for:"email"}},[e._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email",required:""},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}})]),a("div",[a("label",{attrs:{for:"password"}},[e._v("Password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password",required:""},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})]),a(D.h7,[a(se.Z),a(r.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDialog}},[e._v("Cerrar")]),a(r.Z,{attrs:{color:"blue darken-1",text:"",type:"submit"}},[e._v("Enviar")])],1)],1)])],1)],1),a(xe.Z,{attrs:{color:e.snackbarColor,timeout:5e3},model:{value:e.snackbar,callback:function(a){e.snackbar=a},expression:"snackbar"}},[e._v(" "+e._s(e.snackbarText)+" ")])],1)},ye=[],ke={name:"SignUp",data(){return{dialog:!0,name:"",email:"",password:"",snackbar:!1,snackbarText:"",snackbarColor:""}},beforeRouteEnter(e,a,t){"/registro"===e.path?t((e=>e.dialog=!0)):t()},beforeRouteUpdate(e,a,t){"/registro"===e.path&&(this.dialog=!0),t()},methods:{signUp(){(0,d.Xb)(p,this.email,this.password).then((()=>{console.log("Usuario registrado correctamente"),this.snackbarText="Usuario registrado correctamente",this.snackbarColor="success",this.snackbar=!0,this.closeDialog()})).catch((e=>{console.error("Error al registrar al usuario:",e)}))},closeDialog(){this.dialog=!1,this.$router.push("/login")}}},Ze=ke,je=(0,b.Z)(Ze,we,ye,!1,null,"0a9d241a",null),qe=je.exports,Ee=function(){var e=this,a=e._self._c;return a("div",[a(Ce.Z,{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[a(z.Z,[a(D.EB,[a("span",{staticClass:"headline"},[e._v("Iniciar Sesión")])]),a(D.ZB,[a("form",{on:{submit:function(a){return a.preventDefault(),e.login.apply(null,arguments)}}},[a("div",[a("label",{attrs:{for:"email"}},[e._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email",required:""},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}})]),a("div",[a("label",{attrs:{for:"password"}},[e._v("Contraseña:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password",required:""},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})]),a(D.h7,[a(se.Z),a(r.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDialog}},[e._v("Cerrar")]),a(r.Z,{attrs:{color:"blue darken-1",text:"",type:"submit"}},[e._v("Iniciar Sesión")])],1)],1)])],1)],1)],1)},Ie=[],Pe={name:"InicioSesion",data(){return{dialog:!0,email:"",password:""}},methods:{login(){(0,d.e5)(p,this.email,this.password).then((()=>{this.$router.push("/ciencia"),console.log("Inicio de sesión exitoso"),this.dialog=!1})).catch((e=>{console.error("Error al iniciar sesión:",e)}))},closeDialog(){this.dialog=!1}}},Se=Pe,Fe=(0,b.Z)(Se,Ee,Ie,!1,null,"18732c00",null),Te=Fe.exports,Be=function(){var e=this,a=e._self._c;return a("div",[a(r.Z,{staticClass:"button",on:{click:function(a){return e.handleClick("Biologia")}}},[e._v("Biologia")]),a(r.Z,{staticClass:"button",on:{click:function(a){return e.handleClick("Quimica")}}},[e._v("Quimica")]),a(r.Z,{staticClass:"button",on:{click:function(a){return e.handleClick("Fisica")}}},[e._v("Fisica")]),e.showContent?a("div",{key:e.contentKey},[a("CarruselCiencia"),a("p",{staticClass:"emerald-background"},[e._v(" Este sitioweb esta dando sus primeros pasos. Este proyecto nace con la intención de convertirse en un lugar de promoción de la ciencia para un contexto escolar. Está diseñado fundamentalmente para dar a conocer una ciencia escolar que brinde el apoyo requerido a todos quienes acudan a este para adquirir mayor claridad sobre concepciones científicas. Por ahora solamente te presento la estructura global , en las páginas dedicadas a Biología , Física y Química solamente encontrarás los títulos. Gradualmente información de interés y diversas opciones para que puedas entregar tu opinion, responder a encuestas, enviar material para publicar entre otras posibilidades. ")]),a("h2",[e._v("Ideas de la ciencia en el transcurso del tiempo")]),a("p",{staticClass:"double-border"},[e._v(" El intelecto humano, cuando se complace en una cosa, (ya porque sea generalmente admitida y creída, o porque cause deleite) obliga a todas las otras cosas a ser confirmadas y estar de acuerdo con ella; y por más grande que sea la fuerza y el número de pruebas en contrario, o bien no las observa, o las desprecia, o las quita de en medio y las rechaza valiéndose de un distingo cualquiera y ello no sin grande y pernicioso prejuicio con tal que sus primeras conclusiones permanezcan invioladas. Novum Organum I, 49. ")]),a("p",{staticClass:"double-border"},[e._v(" La comprensión humana una vez que ha adoptado una opinión, atrae a todas las demás cosas para apoyarla, y estar de acuerdo con ella… Si queremos lograr cosas nunca antes logradas, debemos emplear métodos que nunca antes se han intentado. ")]),a("p",{staticClass:"double-border"},[e._v(" Así pues, entiendo por método reglas ciertas y fáciles, mediante las cuales el que las observe exactamente, no tomará nunca nada falso por verdadero y, no empleando inútilmente ningún esfuerzo de la mente, sino aumentando siempre gradualmente su ciencia, llegará al conocimiento verdadero de todo aquello que es capaz… pues no determinándose nuestra voluntad a seguir o a evitar cosa alguna, sino porque nuestro entenidimiento se la representa, como cosa buena o mala, basta juzgar bien para obrar bien (Descartes, 1637, p. 55) ")]),a("p",{staticClass:"double-border"},[e._v(" Para Popper hay tres grandes acuerdos que la comunidad científica debe acordar para que haya ciencia: a) La ciencia es la búsqueda continua de explicaciones b) Se toman enunciados universales surgidos de la teoría y no de la experiencia y c) Para que un enunciado sea científico, debe ser posible tener una consecuencia deducible y predictiva (Popper, 1935). ")]),a("p",{staticClass:"double-border"},[e._v(" “El investigador se sirve libremente de la razón y del cálculo; no podría ir lejos de ellos. Pero vela porque las andanzas de esta índole teórica partan de objetos de una experiencia directa y terminen en ellos. La teoría puede intervenir en el curso de una larga serie de ideas, muchas de las cuales estén muy alejadas de toda experiencia directa. Pero el puente colgante de la teoría está sujeto por ambos extremos a los pilares de los objetos observados” (Dewey, 1925) ")]),a("p",{staticClass:"double-border"},[e._v(" Paul Dirac, al decir “la medida de una idea científica, es la medida en la que estímula el pensamiento y abre nuevas líneas de investigación” nos invita a comprometernos a solucionar problemas con las matemáticas ")]),a("p",{staticClass:"double-border"},[e._v(" . Bacon señala sobre el error, la verdad y las creencias: “La verdad surge más fácilmente del error que de la confusión”, “la verdad es hija del tiempo, no de la autoridad” y “el hombre prefiere creer lo que prefiere que sea verdad.” ")]),a("p",{staticClass:"double-border"},[e._v(" “En tanto el margen de observación no es suficientemente amplio como para incluir el contexto en el que dicho fenómeno tiene lugar. La imposibilidad de comprender las complejidades de las relaciones entre un hecho y el contexto en el que tiene lugar, entre organismos y su medio, o enfrenta al observador con algo “misterioso” o lo lleva atribuir a su objeto de estudio ciertas propiedades que quizá el objeto no posea, (Watzlawick et al., 1991). ")])],1):e._e(),a("router-view")],1)},Ae=[],ze=function(){var e=this,a=e._self._c;return a(q.Z,{ref:"carousel",staticClass:"custom-carousel"},e._l(e.items,(function(e,t){return a(E.Z,{key:t},[a("div",{staticClass:"image-container"},[a(I.Z,{staticClass:"full-width-image",attrs:{src:e.src,"lazy-src":e.src}})],1)])})),1)},De=[],Me={name:"CarruselCiencia",data(){return{items:[{src:"https://img.freepik.com/vector-gratis/fondo-educacion-cientifica_23-2148486901.jpg?w=1800&t=st=1702154329~exp=1702154929~hmac=bfa28f82f63e43888b0ec2fe6d04deeed2417acd29d302d063b474c01052302f"},{src:"https://img.freepik.com/vector-gratis/formulas-cientificas-dibujadas-mano-pizarra_23-2148495302.jpg?w=1800&t=st=1702154688~exp=1702155288~hmac=2d9fe7f1dd7fc3c9571c8e4ecb172f93ec2501ac3e52d9b1f5f8e2732d5a7e70"},{src:"https://img.freepik.com/vector-gratis/bosquejo-concepto-educacion_1284-7335.jpg?w=1060&t=st=1702154725~exp=1702155325~hmac=d1df3046de4b3e4a410bc7a9447c690d23037cbfd34ffa3a5819243818516d77"},{src:"https://img.freepik.com/vector-gratis/colorido-ciencia-objetos-iconos-vector-conjunto_1308-131978.jpg?w=1060&t=st=1702154750~exp=1702155350~hmac=9d08d2278745b81e87a7873b611d53432a035a38e3b2dc77ddfeff79d0103ee4"},{src:"https://img.freepik.com/vector-gratis/objetos-laboratorio-ciencias_23-2148488312.jpg?w=1060&t=st=1702154779~exp=1702155379~hmac=713f4c8711623fe0bd724a2dddecef6ccf306c61610c6a0f5e8d6e2ead0e8aac"},{src:"https://img.freepik.com/vector-gratis/fondo-ciencia-dibujada-mano_23-2148529525.jpg?w=1800&t=st=1702154807~exp=1702155407~hmac=845d77b5d72be48348131d09ed9d50c8a43f9fcd586393c49330ba1dff412f17"}],timer:null}},mounted(){this.startTimer()},methods:{startTimer(){this.timer=setInterval((()=>{this.moveToNextSlide()}),3e3)},resetTimer(){clearInterval(this.timer),this.startTimer()},moveToNextSlide(){const e=this.$refs.carousel;e&&e.next&&e.next()}}},Ue=Me,Ne=(0,b.Z)(Ue,ze,De,!1,null,null,null),$e=Ne.exports,Le={name:"CienciaActual",components:{CarruselCiencia:$e},data(){return{showContent:!0,contentKey:0,buttonClicked:!1}},methods:{handleClick(e){const a=`/ciencia/${e.toLowerCase()}`;this.$route.path!==a&&(this.showContent=!1,this.contentKey++,this.buttonClicked=!0,this.$router.push(a))}},beforeRouteLeave(e,a,t){t()},beforeRouteEnter(e,a,t){t((e=>{e.showContent=!0}))},beforeRouteUpdate(e,a,t){this.buttonClicked||(this.showContent=!0),this.buttonClicked=!1,t()}},Oe=Le,Re=(0,b.Z)(Oe,Be,Ae,!1,null,"349a67dc",null),We=Re.exports,Ke=function(){var e=this;e._self._c;return e._m(0)},Ve=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v("Bienvenidos al mundo de la Biología")])])}],Qe={name:"FisicaActual"},Xe=Qe,Ge=(0,b.Z)(Xe,Ke,Ve,!1,null,"22a42d8f",null),Je=Ge.exports,Ye=function(){var e=this;e._self._c;return e._m(0)},He=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v("Bienvenidos al mundo de la Química")])])}],ea={name:"FisicaActual"},aa=ea,ta=(0,b.Z)(aa,Ye,He,!1,null,"2fa5beba",null),sa=ta.exports,oa=function(){var e=this,a=e._self._c;return a("div",{staticClass:"container d-flex flex-column justify-space-between"},[a("h1",{staticClass:"title text-center"},[e._v("Bienvenidos al mundo de la Fisica")]),e.showCards?a(te.Z,{attrs:{justify:"center",align:"center"}},e._l(e.items,(function(t,s){return a(ee.Z,{key:s,attrs:{cols:"12",sm:"4"}},[a(z.Z,{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a(I.Z,{attrs:{height:"200px",src:t.imagen}}),a(D.EB,{staticClass:"black--text"},[e._v(e._s(t.titulo))]),a(D.Qq,{staticClass:"px-4 pt-4"},[e._v(" "+e._s(t.comentario)+" ")]),a(D.h7,[a(se.Z),a(r.Z,{attrs:{color:"primary darken-2"},on:{click:function(a){return e.goToComponent(t.id)}}},[e._v("Ver")])],1)],1)],1)})),1):e._e(),"unidadesMedida"===e.selectedComponent?a("UnidadesdeMedida"):e._e()],1)},ia=[],ra=function(){var e=this,a=e._self._c;return a("div",[a(te.Z,e._l(e.item.secciones,(function(t,s){return a(ee.Z,{key:s,attrs:{cols:"12",sm:"6"}},[a(I.Z,{attrs:{src:e.item.imagenes[s].src,height:"300px",contain:""}}),a("h2",{staticClass:"mb-2 large-font"},[e._v(e._s(t.subtitulo))]),a("p",{staticClass:"mb-2 justified-text large-font"},e._l(e.splitParagraph(t.parrafo),(function(t,s){return a("span",{key:s},[a("span","10 o de 10 elevado a menos uno"!==t?[e._v(e._s(t))]:{directives:[{name:"katex",rawName:"v-katex",value:"10 ~ o ~ de ~ 10^{-1}",expression:"'10 ~ o ~ de ~ 10^{-1}'"}]})])})),0)],1)})),1),a(te.Z,{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a(ee.Z,{staticClass:"centradoForm",attrs:{cols:"12",sm:"8",md:"6"}},[a("FormularioDeComentarios")],1)],1)],1)},na=[],ca=t(3467),la=t(2379),da=function(){var e=this,a=e._self._c;return a(R.Z,[a(te.Z,{attrs:{justify:"center",align:"center"}},[a(ee.Z,{attrs:{cols:"12",sm:"8",md:"6"}},[a("div",{staticClass:"form-container"},[a(ca.Z,{staticClass:"input-field tu-nombre",attrs:{counter:50,label:"Nombre",required:""},model:{value:e.nombre,callback:function(a){e.nombre=a},expression:"nombre"}}),a(la.Z,{staticClass:"textarea-field tu comentario",attrs:{counter:100,label:"Comentario",required:""},model:{value:e.comentario,callback:function(a){e.comentario=a},expression:"comentario"}}),a(r.Z,{staticClass:"submit-button",attrs:{dark:"",color:"primary"},on:{click:e.submitForm}},[e._v("Enviar")])],1)])],1),a(Ce.Z,{attrs:{"max-width":"400px"},model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[a(z.Z,[a(D.EB,{staticClass:"headline"},[e._v(e._s(e.dialogTitle))]),a(D.h7,[a(se.Z),a(r.Z,{attrs:{color:"green darken-1",text:""},on:{click:function(a){e.dialog=!1}}},[e._v("Cerrar")])],1)],1)],1)],1)},ua=[],ma={data(){return{nombre:"",comentario:"",user:null,dialog:!1,dialogTitle:""}},created(){(0,d.Aj)(p,(e=>{this.user=e}))},methods:{async submitForm(){if(this.user)try{await(0,u.ET)((0,u.hJ)(f,"comentarios"),{nombre:this.nombre,comentario:this.comentario}),this.dialogTitle="Comentario guardado!",this.dialog=!0,this.nombre="",this.comentario=""}catch(e){console.error("Error guardando el comentario:",e)}else this.dialogTitle="Debe iniciar sesión antes de enviar un comentario",this.dialog=!0},async logout(){try{await(0,d.w7)(p),this.user=null}catch(e){console.error("Error al cerrar la sesión:",e)}}}},pa=ma,fa=(0,b.Z)(pa,da,ua,!1,null,"5ab4a14b",null),ha=fa.exports,va={name:"UnidadesdeMedida",components:{FormularioDeComentarios:ha},data(){return{item:{imagenes:[{src:"https://steemitimages.com/1280x0/https://i.ibb.co/BcFFKkT/unidadesbasicas.png",texto:"El sistema de unidades empleado por los científicos e ingenieros se denomina sistema métrico y desde 1960 se ha llamado Sistema Internacional de Unidades (SI)",height:"300px"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Pisa_-_Campo_Santo_-_Campanile_2_-_2005-08-08_10-23_2005.JPG/250px-Pisa_-_Campo_Santo_-_Campanile_2_-_2005-08-08_10-23_2005.JPG",texto:"Según la leyenda galileo estudió el movimiento de cuerpos en caida libre, soltándolos desde la torre inclinada de Pisa Italia...y estudió el movimiento de los pendulos, observando la oscilación del candelabro de la catedral ubicada a una lado de la torre."},{src:"https://4.bp.blogspot.com/--F3bD8ZEKwk/Vk4PFFgEjmI/AAAAAAAADvc/92Pr0e1BTRU/s1600/1.png",texto:"Para simplificar el análisis de una pelota de beisbol lanzada al aire, usamos un modelo idealizado."},{src:"https://vallyblog.files.wordpress.com/2013/07/tabla-de-prefijos.jpg?w=584",texto:""}],titulo:"Unidades de medida y estandares",secciones:[{subtitulo:"Unidades de medida",parrafo:"Un número empleado para describir cuantitativamente un fenomeno físico es una cantidad física.Al medir una cantidad siempre la comparamos con un estándar de referencia.Dicho estándar define una unidad de la cantidad. Al describir una cantidad física  con un número siempre debemos especificar la unidad empleada"},{subtitulo:"La naturaleza de la Física",parrafo:"La Física es una ciencia experimental. Para desarrollar una teoría en su campo de estudio, el físico debe aprender a hacer las preguntas adecuadas, a diseñar experimentos para intentar contestarlas y a deducir conclusiones apropiadas de los resultados.Inherente en las teorías físicas, se encuentra el hecho de que podemos demostrar su falsedad encontrando comportamientos que no sean congruentes con ellas, pero nunca podremos comprobar que una teoría siempre es correcta.las teorías siempre tienen un intervalo de validez definido por ciertas condiciones."},{subtitulo:"Modelos idealizados",parrafo:"La palabra modelo la usamos para designar una réplica en miniatura, por ejemplo de un ferrocarril, o bien, para referirnos a una persona que exhibe ropa. En Física, un modelo es na versión simplificada de un sistema físico demasiado complejo como para analizarse con todo detalle.Al usar un modelo para predecir el comportamiento de un sistema, la validez de la predicción está limitada por la validez del modelo."},{subtitulo:"prefijos de unidades",parrafo:"Una vez definidas las unidades fundamentales, es fácil introducir unidades más grandes y más pequeñas para las mismas cantidades físicas.En el sistema métrico, estas otras unidades están relacionadas con las unidades fundamentales por multiplos de 10 o de 10 elevado a menos uno "}]}}},methods:{splitParagraph(e){return e.split(/(10 o de 10 elevado a menos uno)/gi)}}},ba=va,ga=(0,b.Z)(ba,ra,na,!1,null,"66ce7d42",null),_a=ga.exports,Ca={name:"FisicaActual",components:{UnidadesdeMedida:_a},data(){return{showCards:!0,items:[],selectedComponent:null}},created(){X.Z.get("/ciencias/fisica.json").then((e=>{this.items=e.data})).catch((e=>{console.error("Error loading fisica.json:",e)}))},methods:{goToComponent(e){this.showCards=!1,this.selectedComponent=e}}},xa=Ca,wa=(0,b.Z)(xa,oa,ia,!1,null,null,null),ya=wa.exports;s.ZP.use(k.ZP);const ka=[{path:"/",name:"VistaPrincipal",component:_e},{path:"/registro",name:"SignUp",component:qe},{path:"/login",name:"InicioSesion",component:Te},{path:"/ciencia",name:"CienciaActual",component:We,children:[{path:"biologia",name:"BiologiaActual",component:Je},{path:"quimica",name:"QuimicaActual",component:sa},{path:"fisica",name:"FisicaActual",component:ya,children:[{path:"unidadesdemedida",component:_a}]}]}],Za=new k.ZP({mode:"history",base:"/ciencias/",routes:ka});var ja=Za,qa=t(629);s.ZP.use(qa.ZP);var Ea=new qa.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),Ia=t(154);s.ZP.use(Ia.Z);var Pa=new Ia.Z({}),Sa=t(8921);s.ZP.use(Sa.Z),s.ZP.config.productionTip=!1,new s.ZP({router:ja,store:Ea,vuetify:Pa,render:e=>e(y)}).$mount("#app")},6949:function(e,a,t){e.exports=t.p+"img/logo.5e7b385d.png"}},a={};function t(s){var o=a[s];if(void 0!==o)return o.exports;var i=a[s]={exports:{}};return e[s].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(a,s,o,i){if(!s){var r=1/0;for(d=0;d<e.length;d++){s=e[d][0],o=e[d][1],i=e[d][2];for(var n=!0,c=0;c<s.length;c++)(!1&i||r>=i)&&Object.keys(t.O).every((function(e){return t.O[e](s[c])}))?s.splice(c--,1):(n=!1,i<r&&(r=i));if(n){e.splice(d--,1);var l=o();void 0!==l&&(a=l)}}return a}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[s,o,i]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/ciencias/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,s){var o,i,r=s[0],n=s[1],c=s[2],l=0;if(r.some((function(a){return 0!==e[a]}))){for(o in n)t.o(n,o)&&(t.m[o]=n[o]);if(c)var d=c(t)}for(a&&a(s);l<r.length;l++)i=r[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},s=self["webpackChunkciencias"]=self["webpackChunkciencias"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(8164)}));s=t.O(s)})();
//# sourceMappingURL=app.e01cd020.js.map