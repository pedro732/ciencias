<template>
  <div class="ciencia-actual">
    <v-btn class="button" @click="handleClick('Biologia')">Biologia</v-btn>
    <v-btn class="button" @click="handleClick('Quimica')">Quimica</v-btn>
    <v-btn class="button" @click="handleClick('Fisica')">Fisica</v-btn>
    <div v-if="showContent" :key="contentKey">
      <CarruselCiencia/>
      <p class="emerald-background">
        Este sitioweb esta dando sus primeros pasos. Este proyecto nace con la intención 
        de convertirse en un lugar de promoción de la ciencia para un contexto escolar. Está diseñado
        fundamentalmente para dar a conocer una ciencia escolar que brinde el apoyo requerido a todos 
        quienes acudan a este para adquirir mayor claridad sobre concepciones científicas.
        Por ahora solamente te presento la estructura global , en las páginas dedicadas a Biología , Física y Química solamente encontrarás los títulos. Gradualmente información de interés y diversas opciones para que puedas entregar tu opinion, responder a encuestas, enviar material para publicar entre otras posibilidades.
      </p>
      <h2>Ideas de la ciencia en el transcurso del tiempo</h2>
      <p class="double-border">
        El intelecto humano, cuando se complace en una cosa, (ya porque sea generalmente admitida y creída,
o porque cause deleite) obliga a todas las otras cosas a ser confirmadas y estar de acuerdo con ella; y por
más grande que sea la fuerza y el número de pruebas en contrario, o bien no las observa, o las desprecia, o
las quita de en medio y las rechaza valiéndose de un distingo cualquiera y ello no sin grande y pernicioso
prejuicio con tal que sus primeras conclusiones permanezcan invioladas.
Novum Organum I, 49.
      </p>
      <p class="double-border">
        La comprensión humana una vez que ha adoptado una opinión, atrae a todas las demás cosas para
apoyarla, y estar de acuerdo con ella… Si queremos lograr cosas nunca antes logradas, debemos emplear
métodos que nunca antes se han intentado.
      </p>
      <p class="double-border">
        Así pues, entiendo por método reglas ciertas y fáciles, mediante las cuales el que las observe exactamente,
no tomará nunca nada falso por verdadero y, no empleando inútilmente ningún esfuerzo de la mente, sino
aumentando siempre gradualmente su ciencia, llegará al conocimiento verdadero de todo aquello que es
capaz… pues no determinándose nuestra voluntad a seguir o a evitar cosa alguna, sino porque nuestro
entenidimiento se la representa, como cosa buena o mala, basta juzgar bien para obrar bien (Descartes,
1637, p. 55)
      </p>
      <p class="double-border">
        Para Popper hay tres grandes acuerdos que la
comunidad científica debe acordar para que haya ciencia:
a) La ciencia es la búsqueda continua de explicaciones
b) Se toman enunciados universales surgidos de la teoría y no de la experiencia y
c) Para que un enunciado sea científico, debe ser posible tener una consecuencia deducible y predictiva (Popper,
1935).
      </p>
      <p class="double-border">
        “El investigador se sirve libremente de la razón y del cálculo; no podría ir lejos de ellos. Pero vela porque
las andanzas de esta índole teórica partan de objetos de una experiencia directa y terminen en ellos. La
teoría puede intervenir en el curso de una larga serie de ideas, muchas de las cuales estén muy alejadas de
toda experiencia directa. Pero el puente colgante de la teoría está sujeto por ambos extremos a los pilares
de los objetos observados” (Dewey, 1925)
      </p>
      <p class="double-border">
        Paul Dirac, al decir “la medida de una idea científica, es la medida en la que estímula el pensamiento y abre nuevas
líneas de investigación” nos invita a comprometernos a solucionar problemas con las matemáticas
      </p>
      <p class="double-border">
        . Bacon señala sobre el error, la verdad y las creencias: “La verdad surge más
fácilmente del error que de la confusión”, “la verdad es hija del tiempo, no de la autoridad” y “el hombre prefiere creer
lo que prefiere que sea verdad.” 
      </p>
      <p class="double-border">
        “En tanto el margen de observación no es suficientemente amplio como para incluir el contexto en el que dicho
fenómeno tiene lugar. La imposibilidad de comprender las complejidades de las relaciones entre un hecho y el
contexto en el que tiene lugar, entre organismos y su medio, o enfrenta al observador con algo “misterioso” o lo
lleva atribuir a su objeto de estudio ciertas propiedades que quizá el objeto no posea, (Watzlawick et al., 1991).
      </p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import CarruselCiencia from '../components/carruselCiencia.vue';

export default {
  name:'CienciaActual',
  components:{
    CarruselCiencia
  },
  data() {
    return {
      showContent: true,
      contentKey: 0,
      buttonClicked: false
    }
  },
  methods: {
    handleClick(subject) {
      const newRoute = `/ciencia/${subject.toLowerCase()}`;
      if (this.$route.path !== newRoute) {
        this.showContent = false;
        this.contentKey++;
        this.buttonClicked = true;
        this.$router.push(newRoute);
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.showContent = true;
    });
  },
  beforeRouteUpdate(to, from, next) {
    if (!this.buttonClicked) {
      this.showContent = true;
    }
    this.buttonClicked = false;
    next();
  }
}
</script>

<style scoped>
.button {
  background-color: #2196f3;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
}
.ciencia-actual {
  margin-top: 64px; /* Ajusta este valor según la altura de tu barra de navegación */
}

.button:hover {
  background-color: #1976d2;
}

p {
  color: red; 
  text-align: justify; 
  font-size: 1.5em; 
  padding-left: 5px; 
  padding-right: 5px;
}

.double-border {
  border: double 5px skyblue;
  padding: 5px 20px;
  outline: 15px solid transparent;
  outline-offset: 5px;
}

.emerald-background {
  background-color: #50C878; /* Color verde esmeralda */
  color: white; /* Letras blancas */
  padding: 0 20px; /* Padding de 20px a los lados */
}

/* Reglas de media query para pantallas pequeñas */
@media (max-width: 600px) {
  p {
    font-size: 1em; /* Reduce el tamaño de la fuente para pantallas pequeñas */
  }

  .double-border {
    padding: 5px 10px; /* Reduce el padding para pantallas pequeñas */
  }

  .emerald-background {
    padding: 0 10px; /* Reduce el padding para pantallas pequeñas */
  }
}
</style>