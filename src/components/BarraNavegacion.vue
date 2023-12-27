<template>
  <div class="mi-contenedor" >
    <router-link to="/" class="navbar-button" @click.native="$emit('resetView')">Inicio</router-link>
    <router-link to="/login" class="navbar-button">Iniciar sesion</router-link>
    <router-link to="/registro" class="navbar-button">Registrarse</router-link>
    <router-link to="/ciencia" class="navbar-button">Invitado</router-link> <!-- Nuevo botón -->
    <div class="breadcrumb">
      <router-link to="/">Inicio</router-link>
      <span v-for="(route, i) in $route.matched" :key="i">
        <span> / </span>
        <router-link :to="route.path">{{ route.name }}</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
name: 'NavBar',
// Aquí puedes definir las propiedades, métodos, etc. de tu componente
};
</script>

<style>
.navbar {
display: flex;
justify-content: flex-end;
align-items: center;
padding:10px;
background-color: #f0f0f0;

}

.navbar-button {
margin-left: 10px;
padding: 5px 10px;
background-color: #007bff;
color: #ffffff !important; /* Color de texto más blanco */
border: none;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
}
.navbar-button:hover {
background-color: #0056b3;
}
.mi-contenedor {

margin-top: 30px; /* Ajusta este valor según tus necesidades */
}
.breadcrumb {
margin-left: 70px; /* Ajusta este valor según tus necesidades */
}

</style>