<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        v-for="(section, index) in item.secciones"
        :key="index"
      >
        <v-img :src="item.imagenes[index].src" height="300px" contain></v-img>
        <p class="image-text">{{ item.imagenes[index].texto }}</p> <!-- Agrega esta línea -->
        <h2 class="mb-2 large-font">{{ section.subtitulo }}</h2>
        <p class="mb-2 justified-text large-font">
          <span v-for="(part, index) in splitParagraph(section.parrafo)" :key="index">
            <span v-if="part !== '10 o de 10 elevado a menos uno'">{{ part }}</span>
            <span v-else v-katex="'10 ~ o ~ de ~ 10^{-1}'"></span>
          </span>
        </p>
      </v-col >
    </v-row>
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" sm="8" md="6" class="centradoForm">
        <FormularioDeComentarios />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import FormularioDeComentarios from '@/components/Fisica/FormulariodeComentarios.vue'


export default {
 
  
  name: "UnidadesdeMedida",
  components:{
   FormularioDeComentarios
  },
  
  data() {
    return {
      item: {
        imagenes: [
          {
            src: "https://steemitimages.com/1280x0/https://i.ibb.co/BcFFKkT/unidadesbasicas.png",
            texto:
              "El sistema de unidades empleado por los científicos e ingenieros se denomina sistema métrico y desde 1960 se ha llamado Sistema Internacional de Unidades (SI)",
            height: "300px",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Pisa_-_Campo_Santo_-_Campanile_2_-_2005-08-08_10-23_2005.JPG/250px-Pisa_-_Campo_Santo_-_Campanile_2_-_2005-08-08_10-23_2005.JPG",
            texto:
              "Según la leyenda galileo estudió el movimiento de cuerpos en caida libre, soltándolos desde la torre inclinada de Pisa Italia...y estudió el movimiento de los pendulos, observando la oscilación del candelabro de la catedral ubicada a una lado de la torre.",
          },
          {
            src: "https://4.bp.blogspot.com/--F3bD8ZEKwk/Vk4PFFgEjmI/AAAAAAAADvc/92Pr0e1BTRU/s1600/1.png",
            texto:
              "Para simplificar el análisis de una pelota de beisbol lanzada al aire, usamos un modelo idealizado.",
          },
          {
            src: "https://vallyblog.files.wordpress.com/2013/07/tabla-de-prefijos.jpg?w=584",
            texto: "",
          },
          // Añade más imágenes según sea necesario
        ],
        titulo: "Unidades de medida y estandares",
        secciones: [
          {
            subtitulo: "Unidades de medida",
            parrafo:
              "Un número empleado para describir cuantitativamente un fenomeno físico es una cantidad física.Al medir una cantidad siempre la comparamos con un estándar de referencia.Dicho estándar define una unidad de la cantidad. Al describir una cantidad física  con un número siempre debemos especificar la unidad empleada",
          },
          {
            subtitulo: "La naturaleza de la Física",
            parrafo:
              "La Física es una ciencia experimental. Para desarrollar una teoría en su campo de estudio, el físico debe aprender a hacer las preguntas adecuadas, a diseñar experimentos para intentar contestarlas y a deducir conclusiones apropiadas de los resultados.Inherente en las teorías físicas, se encuentra el hecho de que podemos demostrar su falsedad encontrando comportamientos que no sean congruentes con ellas, pero nunca podremos comprobar que una teoría siempre es correcta.las teorías siempre tienen un intervalo de validez definido por ciertas condiciones.",
          },
          {
            subtitulo: "Modelos idealizados",
            parrafo:
              "La palabra modelo la usamos para designar una réplica en miniatura, por ejemplo de un ferrocarril, o bien, para referirnos a una persona que exhibe ropa. En Física, un modelo es na versión simplificada de un sistema físico demasiado complejo como para analizarse con todo detalle.Al usar un modelo para predecir el comportamiento de un sistema, la validez de la predicción está limitada por la validez del modelo.",
          },
          {
            subtitulo: "prefijos de unidades",
            parrafo:
              "Una vez definidas las unidades fundamentales, es fácil introducir unidades más grandes y más pequeñas para las mismas cantidades físicas.En el sistema métrico, estas otras unidades están relacionadas con las unidades fundamentales por multiplos de 10 o de 10 elevado a menos uno "
          },
          // Añade más secciones según sea necesario
        ],
      },
    };
  },
  methods: {
    splitParagraph(paragraph) {
      return paragraph.split(/(10 o de 10 elevado a menos uno)/gi);
    },
  },
 
};
</script>

<style scoped>
 .image-text {
    font-size: 1em; /* Ajusta este valor según tus necesidades */
  }
.large-font {
  font-size: 1.5em; /* Ajusta este valor según tus necesidades */
}
.justified-text {
  text-align: justify;
}
.centradoForm{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ajusta la altura al 100% de la altura de la ventana del navegador */
}
/* Añade aquí cualquier estilo personalizado que necesites */
@media (min-width: 960px) {
  .col-md-6 {
    /* flex: 0 0 50%; */
    /* max-width: 50%; */
    margin: auto;
  }
}
</style>
