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
          <h1 class="subtitle">{{ section.subtitulo }}</h1>
          <!-- Título -->
          <v-img
            :src="item.imagenes[index].src"
            :height="index === 0 ? '400px' : item.imagenes[index].height"
            :width="index === 0 ? '400px' : item.imagenes[index].width"
            :class="{
              'my-custom-class': index === 0,
              componentevector: index === 1,
            }"
          >
          </v-img>

          <p class="justified-text" :class="{ bajoimagen: index === 1 }">
            {{ item.imagenes[index].texto }}
          </p>
          <p class="mb-2 justified-text large-font">
            <span
              v-for="(part, index) in splitParagraph(section.parrafo)"
              :key="index"
            >
              <span
                v-if="
                  part !== 'formula-matematica-1' &&
                  part !== 'vectorA' &&
                  part !== 'thetagriega' &&
                  part !== 'fi' &&
                  part !== 'vectorB' &&
                  part !== 'vectorC' && part !=='primera-formula'&& part!=='segunda-formula'&& part!=='tabla-vectores'&& part!=='formula-matematica-2'&& part!=='formula-matematica-3'&& part!=='imagen-vector'&& part!=='strategia-vector'
                "
                >{{ part }}</span
              >
              <katex-element
                v-else-if="part === 'formula-matematica-1'"
                :expression="'\\sqrt{1.00^2 + 2.00^2} = 2.24 \\text{ km} \\tan(\\phi) = \\frac{\\text{cateto opuesto}}{\\text{cateto adyacente}} = \\frac{2.00 \\text{ km}}{1.00 \\text{ km}} = 2.00 \\phi = \\arctan(2.00) = 63.4 \\text{ grados}'"
              ></katex-element>
              <katex-element
                v-else-if="part === 'fi'"
                :expression="'\\phi'"
              ></katex-element>
              <katex-element
                v-else-if="part === 'vectorA'"
                :expression="'\\vec{A}'"
              ></katex-element>
              <katex-element
                v-else-if="part === 'thetagriega'"
                :expression="'\\theta'"
              ></katex-element>
              <katex-element
                v-else-if="part === 'vectorB'"
                :expression="'\\vec{B}'"
              ></katex-element>
              <katex-element
                v-else-if="part === 'vectorC'"
                :expression="'\\vec{C}'"
              ></katex-element>
              <katex-element
                v-else-if="part === 'primera-formula'"
                :expression="'A_{x}=A\\times \\cos \\theta = \\left ( 172.4m\\times \\cos 58.0° \\right )= 38.37m'"
              ></katex-element>
              <katex-element
                v-else-if="part === 'segunda-formula'"
                :expression="'A_{y}=A\\times\\sin\\theta=\\left ( 72.4m \\right )\\times\\left ( sin58° \\right )=61.40m'"
              ></katex-element>
              <span
  v-else-if="part === 'tabla-vectores'"
><div style="overflow-x:auto;">
  <table>
    <tr>
      <th>Distancia</th>
      <th>Angulo</th>
      <th>Componente x</th>
      <th>Componente Y</th>
    </tr>
    <tr>
      <td>A=72.4m</td>
      <td>58.0°</td>
      <td>38.37m</td>
      <td>61.40m</td>
    </tr>
    <tr>
      <td>B=57.3m</td>
      <td>216°</td>
      <td>-46.36m</td>
      <td>-33.68m</td>
    </tr>
    <tr>
      <td>C=17.8m</td>
      <td>270°</td>
      <td>0.00m</td>
      <td>-17.80m</td>
    </tr>
  </table>
</div>
</span>
<katex-element
                v-else-if="part === 'formula-matematica-2'"
                :expression="'R=\\sqrt{\\left (-7.99m  \\right )^{2}+\\left ( 9.92m \\right )^{2}}=12.7m'"
              ></katex-element>
              <katex-element
                v-else-if="part === 'formula-matematica-3'"
                :expression="'\\theta =\\arctan \\frac{9.92m}{-7.99m}=-51^{\\circ}'"
              ></katex-element>
              <span>
                <v-img
                  v-if="part === 'imagen-vector'"
                  :src="require('@/assets/img/imagen-1.png')"
                 
                ></v-img>
              </span>
              <span>
                <v-img
                  v-if="part === 'estrategia-vector'"
                  :src="require('@/assets/img/estra_sum_vector.png')"
                 
                ></v-img>
              </span>
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
import FormulariodeComentarios2 from "@/components/Fisica/FormulariodeComentarios2.vue";

export default {
  name: "ConversionDeUnidades",
  components: {
    FormulariodeComentarios2,
  },

  data() {
    return {
      item: {
        imagenes: [
          {
            src: require("@/assets/img/suma_vectores.png"),
            texto:
              "Un esquiador de fondo viaja 1.00 km al norte y luego 2.00 km al este por un campo nevado horizontal. ¿A qué distancia y en qué dirección está con respecto al punto de partida?",
          },
          {
            src: require("@/assets/img/componentes_vector.png"),
            texto:
              "Las componentes no son vectores Las componentes Ax y Ay de un vector AS son tan sólo números: no son vectores. Por ello, las simbolizamos con letra cursiva normal sin flecha arriba, en vez de la letra cursiva negrita con flecha que está reservada para los vectores.",
          },
          {
            src: require("@/assets/img/sum_comp_vector.png"),
            texto: `Tres participantes en un concurso de TV están colocados en el centro
de un campo plano grande. A cada uno se le proporciona una
regla graduada de un metro, un compás, una calculadora, una pala
y (en diferente orden para cada concursante) los siguientes tres desplazamientos:`,
          },
          {
            src: require("@/assets/img/vector_unitario.png"),
            texto: "",
          },

          // Añade más imágenes según sea necesario
        ],
        titulo: "Incertidumbre y cifras significativas",
        secciones: [
          {
            subtitulo: "Cantidades vectoriales",
            parrafo:
              "Cuando una cantidad física se describe con un solo número, decimos que es una cantidad escalar. En cambio, una cantidad vectorial incluye tanto una magnitud (la cual indica “cuánto” o “qué tan grande”) como una dirección en el espacio.El problema implica combinar dos desplazamientos en ángulos rectos entre sí. En este caso, las cantidades vectoriales se suman resolviendo un triángulo rectángulo, lo cual podemos hacer usando el teorema de Pitágoras y trigonometría básica. Las incógnitas son la distancia en línea recta y la dirección del esquiador con respecto a su punto de partida. La figura  es un diagrama a escala de los dos desplazamientos del esquiador y el desplazamiento neto resultante. Describimos la dirección desde el punto de partida con el ángulo fi (la letra griega phi). El desplazamiento parece ser un poco más de 2 km y la medición del ángulo con un transportador indica que fi es aproximadamente igual a 63° formula-matematica-1",
          },
          {
            subtitulo: "Componentes de un vector",
            parrafo:
              "Podemos calcular las componentes del vector vectorA si conocemos la magnitud A y su dirección. Describiremos la dirección de un vector por su ángulo en relación con una dirección de referencia. En la figura  esta dirección de referencia es el eje x positivo, y el ángulo entre el vector A vectorA y el eje x positivo es thetagriega (la letra griega theta). Imagine que, originalmente, el vector A vectorA está sobre el eje +x y que luego usted lo hace girar hasta su dirección correcta, como indica la flecha sobre el arco del ángulo thetagriega en la figura. Si la rotación es del eje +x hacia el eje +y, como indica la figura , entonces, thetagriega es positivo; si la rotación es del eje +x al eje -y, entonces thetagriega es negativo. Por lo tanto, el eje +y está a un ángulo de 90°, el eje -x está a 180° y el eje -y está a 270° (o - 90°). Si medimos u de esta manera, entonces, por la definición de las funciones trigonométricas",
          },
          {
            subtitulo: "Suma de vectores usando sus componentes",
            parrafo:
              `vectorA : 72m , 32.0° al este del norte vectorB : 57.3 m , 36° al sur del oeste y vectorC : 17,8m al sur"
              Los tres desplazamientos llevan al punto donde están enterradas las
llaves de un Porsche nuevo. Dos concursantes comienzan a medir de
inmediato; sin embargo, el ganador calcula primero a dónde debe ir.
¿Qué calculó?
EJECUTAR: Los ángulos de los vectores medidos del eje +x al eje +y
son (90.0° - 32.0°) = 58.0°, (180.0° + 36.0°) = 216.0°, y 270°, respectivamente.
Ahora podemos usar las ecuaciones (1.5), para obtener
las componentes de vectorA
:primera-formula\n
segunda-formula
tabla-vectores
sumamos algebraicamente el componente x e y y estos resultados los ocupamos
para utilizar el teorema de Pitagoras y calcular la magnitud del vector
resultante así como su dirección usando una función trigonométrica inversa
según la siguiente expresión:
formula-matematica-2
formula-matematica-3
estrategia-vector`,
          },
          {
            subtitulo: "vectores unitarios, producto punto y producto vectorial",
            parrafo: `Descripción global de producto  punto y producto cruz entre vectores
            imagen-vector`,
          },
          // Añade más secciones según sea necesario
        ],
      },
    };
  },

  methods: {
    splitParagraph(paragraph) {
      return paragraph.split(
        /(formula-matematica-1|fi|vectorA|thetagriega|vectorB|vectorC|primera-formula|segunda-formula|tabla-vectores|formula-matematica-2|formula-matematica-3|imagen-vector|estrategia-vector)/gi
      );
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
.form {
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
p.justified-text.bajoimagen {
  margin-top: -200px;
}
table {
  border-collapse: separate;
  border-spacing: 10px;
}
table th, table td {
  padding: 10px;
}
</style>
