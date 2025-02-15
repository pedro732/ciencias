<template>
  <div id="app" data-app>
    <BarraNavegacion @resetView="resetView"></BarraNavegacion>
    <router-view :key="routeKey"></router-view>
  </div>
</template>

<script>
import BarraNavegacion from './components/BarraNavegacion.vue';


export default {
  name: "App",
  data(){
    return{
      routeKey: 0,
    }
    
  },
  components: {
    BarraNavegacion,
    
  },
  methods:{
    resetView(){
      this.routeKey++;
    }
  }
  
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
