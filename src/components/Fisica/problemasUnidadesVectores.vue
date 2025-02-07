<template>
    <div>
      <h2>Resolvamos ejercicios de Física</h2>
  
      <div class="table">
        <!-- Primera fila de celdas -->
        <div class="cell" @click="openModal('Plano Inclinado', planoInclinado)">Plano inclinado</div>
        <div class="cell" @click="openModal('Aplicando Trigonometría', trigon)">Trigonometría</div>
        <div class="cell" @click="openModal('ángulos en plano inclinado', angulo1)">Ángulos en plano inclinado</div>
        <div class="cell" @click="openModal('Demostración 2', angulo2)">Ángulos 2</div>
        <div class="cell" @click="openModal('Demostración 3', angulo3)">Ángulos 3</div>
      </div>

      <div class="table">
        <!-- Segunda fila de celdas -->
        <div class="cell" @click="openModal('Vectores en el techo', vectorTecho)">Vectores en el techo</div>
        <div class="cell" @click="openModal('Celda 2', '')">Celda 2</div>
        <div class="cell" @click="openModal('Celda 3', '')">Celda 3</div>
        <div class="cell" @click="openModal('Celda 4', '')">Celda 4</div>
        <div class="cell" @click="openModal('Celda 5', '')">Celda 5</div>
      </div>
  
      <v-dialog v-model="dialog" max-width="1400px" class="dialog-class">
        <v-card>
          <v-card-title class="headline">{{ activeTitle }}</v-card-title>
          <v-card-text>
            <img :src="activeImage">.
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
</template>
<script>
import trigon from '@/assets/img/trigon.jpg';
import planoInclinado from '@/assets/img/planoInclinado.jpeg';
import angulo1 from '@/assets/img/angulo1.jpg';
import angulo2 from '@/assets/img/angulo2.jpeg';
import angulo3 from '@/assets/img/angulo3.jpeg';
import vectorTecho from '@/assets/img/vectorTecho.jpeg';
//import ImgZoomer from 'vue-zoom-on-hover';

export default {
  name: 'ProblemasUnidadesVectores',
  components: {
   // 'img-zoomer': ImgZoomer
  },
  data() {
    return {
      dialog: false,
      activeTitle: '',
      activeImage: '',
      trigon,
      planoInclinado,
      angulo1,
      angulo2,
      angulo3,
      vectorTecho,
    };
  },
  methods: {
    openModal(title, image) {
      this.activeTitle = title;
      this.activeImage = image;
      this.dialog = true;
    },
  },
};
</script>
  
<style scoped>
.table {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cell {
    width: 200px; /* Ajusta el ancho de la celda */
  height: 100px; /* Ajusta la altura de la celda */
  margin: 10px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px; /* Añade bordes redondeados a la celda */
  
}
.dialog-class .v-dialog {
  max-height: 90vh;
  overflow-y: auto;
}
</style>