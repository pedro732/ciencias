<template>
  <div class="cards-container">
     
    <v-card >
      <v-card-title class="custom-card-title"> MideUC</v-card-title>
      <v-card-text>
        <!-- Plugin de Facebook en la primera tarjeta -->
        <div id="fb-root"></div>
        <div class="fb-page" data-href="https://www.facebook.com/MideUC" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/MideUC" class="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/MideUC">MIDE UC</a>
          </blockquote>
        </div>
      </v-card-text>
    </v-card>
 

    <!-- Las otras dos tarjetas -->
    
    <v-card>
      <v-card-title class="custom-card-title">Aptus</v-card-title>
      <v-card-text>
        <div class="fb-page" data-href="https://www.facebook.com/aptusvideos2021" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/aptusvideos2021" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/aptusvideos2021">Aptus Videos</a></blockquote></div>
      </v-card-text>
    </v-card>
   
    
    
    <v-card>
      <v-card-title class="custom-card-title">Neurociencia</v-card-title>
      <v-card-text>
        <div class="fb-page" data-href="https://www.facebook.com/MITSloanExecEd" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/MITSloanExecEd" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/MITSloanExecEd">MIT Sloan Executive Education</a></blockquote></div>
      </v-card-text>
    </v-card>
 
  </div>
</template>

<script>
/* global FB */
export default {
  name: 'InfoFacebook',
  mounted() {
    this.loadFacebookScript();
    this.$nextTick(() => {
      this.reloadFacebookPlugins();
    });
  },
  methods: {
    loadFacebookScript() {
      // Verificar si el script de Facebook ya está cargado
      if (document.querySelector('script[src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v18.0&appId=6904286386297944&autoLogAppEvents=1"]')) {
        return;
      }

      // Código del script de Facebook
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.crossorigin = 'anonymous';
      script.src = 'https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v18.0&appId=6904286386297944&autoLogAppEvents=1';
      script.nonce = 'YM3pSOI7';
      document.head.appendChild(script);
    },
    reloadFacebookPlugins() {
      if (typeof FB !== 'undefined') {
        FB.XFBML.parse();
      }
    }
  }
}
</script>
<style>
.cards-container {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
}
.v-card {
flex-basis: calc(33.33% - 10px);
margin-bottom: 20px;
}
/* Estilos personalizados para las tarjetas */
.custom-card-title {
  display: flex;
  justify-content: center;
}
</style>