<template>
  <div class="container d-flex flex-column justify-space-between">
    <h1 class="title text-center">Bienvenidos al mundo de la Fisica</h1>

    <v-row justify="center" align="center" v-if="showCards">
      <v-col cols="12" sm="4" v-for="(item, index) in items" :key="index">
        <v-card class="mx-auto" max-width="400">
          <v-img height="200px" :src="item.imagen"></v-img>

          <v-card-title class="black--text">{{ item.titulo }}</v-card-title>

          <v-card-subtitle class="px-4 pt-4">
            {{ item.comentario }}
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary darken-2" @click="goToComponent(item.id)">Ver</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <UnidadesdeMedida v-if="selectedComponent === 'unidadesMedida'" />
    <ConversionDeUnidades v-if="selectedComponent === 'conversion'"/>
    <CantidadesVectores v-if="selectedComponent === 'vectores'"/>
    <ProblemasUnidadesVectores v-if="selectedComponent === 'problemas1'"/>
    <!-- Agrega aquí otros componentes con v-if="selectedComponent === 'id_del_componente'" -->
  </div>
</template>


<script>
import UnidadesdeMedida from '@/components/Fisica/unidadesMedida.vue'
import ConversionDeUnidades from '@/components/Fisica/conversion.vue'
import CantidadesVectores from '@/components/Fisica/CantidadesVectores.vue'
import ProblemasUnidadesVectores from '@/components/Fisica/problemasUnidadesVectores.vue'
// importa aquí otros componentes
import axios from 'axios'


export default {
  name: 'FisicaActual',
  components: {
    UnidadesdeMedida,
    ConversionDeUnidades,
    CantidadesVectores,
    ProblemasUnidadesVectores,
    // agrega aquí otros componentes
  },
  data() {
    return {
      showCards:true,
      items: [],
      selectedComponent: null
      
    }
  },
  created() {
    axios.get(process.env.NODE_ENV === 'production' ? '/ciencias/fisica.json' : '/fisica.json')
  .then(response => {
    this.items = response.data
  })
  .catch(error => {
    console.error('Error loading fisica.json:', error)
  });
},
methods: {
  goToComponent(id) {
    console.log('ID:',id);
      this.showCards = false;
      this.selectedComponent = id;
      
    },
  },
}
</script>


<style >

.container {
  
  height: 100vh;
 
}

.title {
  

margin-bottom: auto;
}

::v-deep .v-btn:not(.v-btn--outlined).primary,
::v-deep .v-btn:not(.v-btn--outlined).secondary,
::v-deep .v-btn:not(.v-btn--outlined).accent,
::v-deep .v-btn:not(.v-btn--outlined).success,
::v-deep .v-btn:not(.v-btn--outlined).error,
::v-deep .v-btn:not(.v-btn--outlined).warning,
::v-deep .v-btn:not(.v-btn--outlined).info {
  color: #333 !important; /* Cambia esto al color que prefieras */
}
.dialog-open {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>