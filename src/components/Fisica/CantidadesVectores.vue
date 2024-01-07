<template>
    <div>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          v-for="(section, index) in item.secciones"
          :key="index"
        >
          <div>
            <h1 class="subtitle">{{ section.subtitulo }}</h1> <!-- Título -->
            <v-img 
              :src="item.imagenes[index].src" 
              :height="index === 0 ? '400px' : item.imagenes[index].height" 
              :width="index === 0 ? '400px' : item.imagenes[index].width" 
              :class="{ 'my-custom-class': index === 0, 'componentevector': index === 1 }"
              
            >
            </v-img>
            
           
            <p class="justified-text" :class="{'bajoimagen':index===1}">{{ item.imagenes[index].texto}}</p> 
            <p class="mb-2 justified-text large-font">
  <span v-for="(part, index) in splitParagraph(section.parrafo)" :key="index">
    <span v-if="part !== 'formula-matematica-1' && part!=='(vectorA)'&& part!=='(thetagriega)'">{{ part }}</span>
    <katex-element v-else-if="part==='formula-matematica-1'" :expression="'\\sqrt{1.00^2 + 2.00^2} = 2.24 \\text{ km} \\tan(\\phi) = \\frac{\\text{cateto opuesto}}{\\text{cateto adyacente}} = \\frac{2.00 \\text{ km}}{1.00 \\text{ km}} = 2.00 \\phi = \\arctan(2.00) = 63.4 \\text{ grados}'"></katex-element>
    <katex-element v-else-if="part===('(vectorA)')" :expression="'\\vec{A}'"></katex-element>
    <katex-element v-else-if="part===('(thetagriega)')" :expression="'\\theta'"></katex-element>
  </span>
</p>
   
   
          </div>
        </v-col>
      </v-row>
      <div class="my-div">
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" sm="8" md="6" lg="8" class="centradoForm">
          
          
          <FormulariodeComentarios2 cols="12" sm="8" md="6" class="form" />
        </v-col>
      </v-row>
    </div>
    </div>
  </template>
  <script>
  
  import FormulariodeComentarios2 from '@/components/Fisica/FormulariodeComentarios2.vue'
  
  
  export default {
   
    
    name: "ConversionDeUnidades",
    components:{
     
      FormulariodeComentarios2,
     
    },
    
    data() {
      return {
        item: {
          imagenes: [
            {
              src: require('@/assets/img/suma_vectores.png'),
              texto:
              "Un esquiador de fondo viaja 1.00 km al norte y luego 2.00 km al este por un campo nevado horizontal. ¿A qué distancia y en qué dirección está con respecto al punto de partida?",
              
            },
            {
              src: require('@/assets/img/componentes_vector.png'),
              texto:
                "Las componentes no son vectores Las componentes Ax y Ay de un vector AS son tan sólo números: no son vectores. Por ello, las simbolizamos con letra cursiva normal sin flecha arriba, en vez de la letra cursiva negrita con flecha que está reservada para los vectores.",
            },
            {
              src: "",
              texto:
                "",
            },
            {
              src: "",
              texto: "¡Un tren ha salido por la ventana! (París, 1895)",
            },
            
            // Añade más imágenes según sea necesario
          ],
          titulo: "Incertidumbre y cifras significativas",
          secciones: [
            {
              subtitulo: "Cantidades vectoriales",
              parrafo:
                "Cuando una cantidad física se describe con un solo número, decimos que es una cantidad escalar. En cambio, una cantidad vectorial incluye tanto una magnitud (la cual indica “cuánto” o “qué tan grande”) como una dirección en el espacio.El problema implica combinar dos desplazamientos en ángulos rectos entre sí. En este caso, las cantidades vectoriales se suman resolviendo un triángulo rectángulo, lo cual podemos hacer usando el teorema de Pitágoras y trigonometría básica. Las incógnitas son la distancia en línea recta y la dirección del esquiador con respecto a su punto de partida. La figura  es un diagrama a escala de los dos desplazamientos del esquiador y el desplazamiento neto resultante. Describimos la dirección desde el punto de partida con el ángulo f (la letra griega fi). El desplazamiento parece ser un poco más de 2 km y la medición del ángulo con un transportador indica que f es aproximadamente igual a 63° formula-matematica-1"
            },
            {
              subtitulo: "Componentes de un vector",
              parrafo:
                "Podemos calcular las componentes del vector A (vectorA) si conocemos la magnitud A y su dirección. Describiremos la dirección de un vector por su ángulo en relación con una dirección de referencia. En la figura  esta dirección de referencia es el eje x positivo, y el ángulo entre el vector A (vectorA)y el eje x positivo es (thetagriega)(la letra griega theta). Imagine que, originalmente, el vector A (vectorA) está sobre el eje +x y que luego usted lo hace girar hasta su dirección correcta, como indica la flecha sobre el arco del ángulo (thetagriega) en la figura . Si la rotación es del eje +x hacia el eje +y, como indica la figura , entonces, (thetagriega) es positivo; si la rotación es del eje +x al eje -y, entonces (thetagriega) es negativo. Por lo tanto, el eje +y está a un ángulo de 90°, el eje -x está a 180° y el eje -y está a 270° (o - 90°). Si medimos (thetagriega) de esta manera, entonces, por la definición de las funciones trigonométricas",
            },
            {
              subtitulo: "",
              parrafo:
                "",
            },
            {
              subtitulo: "",
              parrafo:
                ""
    
            },
            // Añade más secciones según sea necesario
          ],
        },
      };
    },
    methods: {
        splitParagraph(paragraph) {
  return paragraph.split(/(formula-matematica-1|\(vectorA\)|\(thetagriega\))/gi);
},
    },
   
  };
  </script>
  
  <style scoped>
 
  
  .subtitle {
    margin-bottom: 0; /* Reduce el margen inferior del subtítulo */
  }
 
  .image-text {
    font-size: 1em; /* Ajusta este valor según tus necesidades */
  }
  .large-font {
    font-size: 1.5em; /* Ajusta este valor según tus necesidades */
  }
  .justified-text {
    text-align: justify;
  }
  
  /* Añade aquí cualquier estilo personalizado que necesites */
  @media (min-width: 960px) {
    .col-md-6 {
      /* flex: 0 0 50%; */
      /* max-width: 50%; */
      margin: auto;
    }
  }
  .my-custom-class .v-image__image {
  background-size: 100% 100% !important;
  width: 1000px !important; /* Ajusta este valor según tus necesidades */
  height: 1000px !important; /* Ajusta este valor según tus necesidades */
  margin-top: -500px;
}
.form{
    width: 2000px;
}
.my-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ajusta este valor según tus necesidades */
}

.justified-text {
  text-align: justify;
}
.v-image.v-responsive.theme--light.componentevector {
    margin-top: -200px;
}
p.justified-text.bajoimagen{
  margin-top: -200px;
}
</style>
 
  