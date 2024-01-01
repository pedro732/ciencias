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
          <p class="image-text">
            
  <span v-for="(part, index) in splitParagraph(item.imagenes[index].texto)" :key="index">
    <span v-if="part !== 'uno dividido por diez'">{{ part }}</span>
    <span v-else v-katex="'1/10'"></span>
  </span>
</p>
          <h2 class="mb-2 large-font">{{ section.subtitulo }}</h2>
          <p class="mb-2 justified-text large-font">
            
  <span v-for="(part, index) in splitParagraph(section.parrafo)" :key="index">
    <span v-if="part !== 'otra expresión matemática' && part !== 'Desarrollo matemático' && part!='mas menos'">{{ part }}</span>
    <span v-else-if="part === 'otra expresión matemática'" v-katex="'763.0 \\, \\text{mi/h} = (763.0 \\, \\text{mi/h}) \\cdot (1609 \\, \\text{km}/1 \\, \\text{mi}) \\cdot (1000\\,\\text{m}/1\\,\\text{km}) \\cdot (1 \\, \\text{h}/3600 \\, \\text{s}) = 341.0 \\, \\text{m/s}'"></span>
    <span v-else-if="part === 'Desarrollo matemático'" v-katex="'1.84 \\, \\text{in}^3 = (1.84 \\, \\text{in}^3) \\cdot (2.54 \\, \\text{cm}/1 \\, \\text{in})^3 = (1.84 \\cdot 2.54)^3 \\, \\text{in}^3 \\cdot \\text{cm}^3/\\text{in}^3 = 30.2 \\, \\text{cm}^3. \\, 30.2 \\, \\text{cm}^3 \\cdot (1 \\, \\text{m}/100 \\, \\text{cm})^3 = (30.2 \\cdot 1/100)^3 \\, \\text{cm}^3 \\cdot \\text{m}^3/\\text{cm}^3 = 30.2 \\times 10^{-6} \\, \\text{m}^3 = 3.02 \\times 10^{-5} \\, \\text{m}^3.'"></span>
    <span v-else-if=" part==='mas menos'" v-katex="'\\pm'"></span>
  </span>
  
</p>
<div v-if="index === item.secciones.length - 1">
          <v-img :src="item.imagenes[item.imagenes.length - 1].src" height="300px" contain></v-img>
          <p class="image-text">{{ item.imagenes[item.imagenes.length - 1].texto }}</p>
        </div>

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
   
    
    name: "ConversionDeUnidades",
    components:{
     FormularioDeComentarios
    },
    
    data() {
      return {
        item: {
          imagenes: [
            {
              src: "https://i0.wp.com/www3.gobiernodecanarias.org/medusa/ecoblog/dharnav/files/2014/03/escalera.jpg?w=610&ssl=1",
              texto:
                "Una vez definidas las unidades fundamentales , es fácil introducir unidades más grandes y más pequeñas para las mismas cantidades físicas.En el sistema métrico, estas unidades están relacionadas por medio de múltiplos de 10 o uno dividido por diez",
              height: "300px",
            },
            {
              src: "https://cdn0.unprofesor.com/es/posts/2/4/8/que_son_los_factores_de_conversion_y_ejemplos_5842_600.webp",
              texto:
                "Los factores de conversión son una operación matemática que se utiliza para realizar cambios de unidades de la misma magnitud. También se usa para calcular equivalencias entre los múltiplos y submúltiplos de una determinada unidad de medida.",
            },
            {
              src: "https://fotografias.larazon.es/clipping/cmsimages01/2023/05/05/756797F6-3F15-47D7-AFE9-56E897D284D1/cetro-real-monarquia-britanica-diamante-estrella-africa-centro_97.jpg?crop=880,495,x4,y0&width=1600&height=900&optimize=low&format=webply",
              texto:
                "Una pieza de 530 quilates (100 gramos de peso), que fue encontrada en 1905 en Sudáfrica, un país que se convirtió en república en 1961. Esta piedra preciosa se convirtió en una parte clave de la ceremonia de coronación del Rey carlos III",
            },
            {
              src: "https://brucknerite.net/wp-content/uploads/2012/10/Train_wreck_at_Montparnasse_1895.jpg",
              texto: "¡Un tren ha salido por la ventana! (París, 1895)",
            },
            {
              src:"https://www.geogebra.org/resource/eknuuqnb/YGUxVWcz0JAdjkY2/material-eknuuqnb.png"

            },
            // Añade más imágenes según sea necesario
          ],
          titulo: "Incertidumbre y cifras significativas",
          secciones: [
            {
              subtitulo: "Sistema métrico decimal",
              parrafo:
                "El Sistema Métrico Decimal es un sistema de unidades en el cual los múltiplos y submúltiplos de cada unidad de medida están relacionadas entre sí por múltiplos o submúltiplos de 10.La versión actual del Sistema Métrico Decimal se denomina Sistema Internacional (SI) de medidas,que tiene 7 magnitudes fundamentales; todas las demás se consideran derivadas.",
            },
            {
              subtitulo: "Multiplicadores unitarios",
              parrafo:
                "El récord mundial de rapidez terrestre es de 763.0 mi/h, establecido por Andy Green el 15 de octubre de 1997 en el automóvil con motor a reacción Thrust SSC. Exprese esta rapidez en metros/segundo.para resolver este problema debemos encontrar multiplicadores unitarios o factores de conversión que relacionen millas con metros y horas con segundos.sabemos que 1 mi= 1609 km y 1 km= 1000m . Por otro lado 1h=3600 s. Entonces utilizando los factores multiplicativos realizaremos las conversiones solicitadas.otra expresión matemática",
            },
            {
              subtitulo: "Diamante tallado",
              parrafo:
                "Uno de los diamantes tallados más grandes del mundo es la Primera Estrella de África (montado en el cetro real británico y resguardado en la Torre de Londres). Su volumen es de 1.84 pulgadas cúbicas. ¿Cuál es su volumen en centímetros cúbicos? ¿Y en metros cúbicos? Desarrollo matemático. Las mediciones siempre implican incertidumbre.La incertidumbre también se llama error, porque indica la máxima diferencia probable entre el valor medido y el real.La incertidumbre o el error de un valor medido depende de la técnica de medición empleada.el número, el símbolo mas menos y un segundo número que indica la incertidumbre de la medición. Si el diámetro de una varilla de acero se expresa como 56.47 mas menos 0.02 mm, esto implica que es poco probable que el valor real sea menor que 56.45 mm o mayor que 56.49 mm. En una notación abreviada de uso común, el número 1.6454(21) significa 1.6454 mas menos 0.0021. Los números entre paréntesis indican la incertidumbre de los dígitos finales del número principal.También podemos expresar la exactitud en términos del error relativo o error porcentual (también llamado incertidumbre relativa o incertidumbre porcentual). Un resistor rotulado como de “47 ohms mas menos 10%” probablemente tiene una resistencia real que difiere de 47 ohms en menos del 10% de 47 ohms, esto es, unos 5 ohms. Es probable que la resistencia esté entre 42 y 52 ohms.",
            },
            {
              subtitulo: "Cifras significativas",
              parrafo:
                "En muchos casos, no se da explícitamente la incertidumbre de un número, sino que se indica con el número de dígitos significativos, o cifras significativas, en el valor medido. Nosotros dimos el espesor de la portada del libro como 2.91 mm, que tiene tres cifras significativas. Con ello queremos decir que los dos primeros dígitos son correctos, pero el tercero es incierto. El último dígito está en la posición de las centésimas, así que la incertidumbre sería de 0.01 mm. Dos valores con el mismo número de cifras significativas pueden tener diferente incertidumbre; una distancia expresada como 137 km también tiene tres cifras significativas, pero la incertidumbre es aproximadamente de 1 km. Una distancia dada como 0.25 km tiene dos cifras significativas (no se considera el cero a la izquierda del punto decimal); si lo dan como 0.250 km, éste tiene tres cifras significativas."
    
            },
            // Añade más secciones según sea necesario
          ],
        },
      };
    },
    methods: {
        splitParagraph(paragraph) {
  return paragraph.split(/(uno dividido por diez|otra expresión matemática|Desarrollo matemático|mas menos)/gi);
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
  