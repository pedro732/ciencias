<template>
  <div>
    <div class="content">
      <CarruselWeb />
      <InfoFacebook />
      <div class="content-wrapper">
        <div class="conec-nasa-wrapper">
          <div style="width: 100%; overflow: auto;">
            <ConecNews />
          </div>
          <PalabrasAleatorias class="fixed-size" />
        </div>
      </div>
      <PieDePagina />
    </div>
  </div>
</template>

<script>
import CarruselWeb from "../components/carruselWeb.vue";
import InfoFacebook from "../components/InfoFacebooks.vue";
import ConecNews from "../components/ConecNews.vue";
import PieDePagina from "../components/PieDePagina.vue";
import PalabrasAleatorias from '../components/PalabrasAleatorias.vue';


export default {
  name: "PrincipalView",
  components: {
    CarruselWeb,
    InfoFacebook,
    ConecNews,
    PieDePagina,
    PalabrasAleatorias
  },
  beforeRouteEnter(to, from, next) {
    const vistasAnteriores = ["CienciaActual"];
    
    // Recarga la vista solo si vuelves a ella desde una de las vistas anteriores
    if (vistasAnteriores.includes(from.name)) {
      next(vm => {
        // Lógica para recargar la vista aquí
        vm.$router.go();
      });
    } else {
      next();
    }
  },

 
};
</script>
<style scoped>
.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px;
}

.conec-nasa-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.conec-nasa-wrapper > * {
  margin: 0;
  padding: 0;
}

.fixed-size {
  width: 100%; /* Ajusta este valor según tus necesidades */
  height:100%; /* Ajusta este valor según tus necesidades */
}

/* Reglas de media query para pantallas pequeñas */
@media (max-width: 600px) {
  .content-wrapper {
    flex-direction: column; /* Cambia la dirección de los elementos a columna para pantallas pequeñas */
  }

  .fixed-size {
    width: 100%; /* Asegura que los elementos ocupen todo el ancho de la pantalla en pantallas pequeñas */
    height: auto; /* Permite que los elementos cambien su altura según su contenido en pantallas pequeñas */
  }
}
</style>