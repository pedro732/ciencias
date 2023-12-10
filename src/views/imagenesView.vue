<template>
  <div>
    <button @click="mostrarModalBusqueda">Buscar</button>

    <div v-for="imagen in imagenes" :key="imagen.titulo">
      <img v-if="imagen.loaded" :src="imagen.url" alt="Imagen" @click="abrirModal(imagen)">
      <h3 v-show="imagen.loaded">{{ imagen.titulo }}</h3>
      <p v-show="imagen.loaded">{{ imagen.descripcion }}</p>
    </div>

    <Modal :imagen="imagenModal" v-if="modalVisible" @cerrarModal="cerrarModal" />

    <!-- Ventana modal de búsqueda -->
    <div class="modal-busqueda" v-if="mostrarModalBusquedaFlag">
      <!-- Contenido de la ventana modal de búsqueda -->
      <h2>Buscar Imagen</h2>
      <input type="text" v-model="terminoBusqueda">
      <button @click="buscarImagen">Buscar</button>
      <!-- Mostrar resultados de búsqueda aquí -->
    </div>
  </div>
</template>

<script>
import Modal from '../archivosdevistamodalparaweb/modalVista.vue';

export default {
  data() {
    return {
      imagenes: [
        {
          titulo: 'Atomo',
          descripcion: 'Esta es la imagen 1',
          url: 'https://media.istockphoto.com/id/517500664/es/foto/modelo-de-%C3%A1tomo-con-sombra-en-whie-fondo-3d.jpg?s=612x612&w=0&k=20&c=mI93VV9jolVWxImwG-E7Te2ype6GErA5KNNtXW5HJ1Y=',
          loaded: false // Nueva propiedad para controlar si la imagen se ha cargado
        },


        {
          titulo: 'Fisica',
          descripcion: 'Esta es la imagen 1',
          url: 'https://media.istockphoto.com/id/450570631/es/foto/atom-modelo-en-fondo-blanco.jpg?s=612x612&w=0&k=20&c=wQwtb_mxshdm17hpBho6peJLbfq6rl8KWK28FXWVqaQ=',
          loaded: false // Nueva propiedad para controlar si la imagen se ha cargado
        },

        {
          titulo: 'Quimica',
          descripcion: 'Esta es la imagen 1',
          url: 'https://media.istockphoto.com/id/1269115662/es/vector/f%C3%B3rmulas-matem%C3%A1ticas-en-una-pizarra-texturizada-concepto-de-matem%C3%A1ticas-de-la-educaci%C3%B3n.jpg?s=612x612&w=0&k=20&c=9fhB3xxqbAQ1Lqttx4D7FHAraoDXM-lbuDrkDRWpgC8=',
          loaded: false // Nueva propiedad para controlar si la imagen se ha cargado
        },
        {
          titulo: 'biologia',
          descripcion: 'Esta es la imagen 2',
          url: 'https://media.istockphoto.com/id/804955144/es/foto/mol%C3%A9cula-icono-de.jpg?s=612x612&w=0&k=20&c=Juycmo4_wypPHYixebFJNKjzaoeyZo4JVSEBffGOI8s=',
          loaded: false 
        },
        // Agrega más imágenes aquí...
      ],
      modalVisible: false,
      imagenModal: null,
      terminoBusqueda: '',
      mostrarModalBusquedaFlag: false
    };
  },
  methods: {
    mostrarModalBusqueda() {
      this.mostrarModalBusquedaFlag = true;
    },
    buscarImagen() {
  const resultados = this.imagenes.filter(imagen =>
    imagen.titulo.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
  );

  if (resultados.length > 0) {
    resultados[0].loaded=true;
    this.abrirModal(resultados[0]);
  }
   // Mostrar resultados de búsqueda
      console.log(resultados);
  
},

     
    abrirModal(imagen) {
      this.imagenModal = imagen;
      this.modalVisible = true;
    },
    cerrarModal() {
      this.modalVisible = false;
    }
  },
  components: {
    Modal
  }
};
</script>