<template>
  <div>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Ciencia y Educación</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <router-link to="/" class="navbar-button" @click.native="$emit('resetView')">Inicio</router-link>
        <router-link to="/login" class="navbar-button">Iniciar sesion</router-link>
        <router-link to="/registro" class="navbar-button">Registrarse</router-link>
        <router-link to="/ciencia" class="navbar-button">Invitada(o)</router-link> 
        <v-btn class="navbar-button" @click="logout">Cerrar sesión</v-btn>
        <v-btn class="navbar-button" @click="openBlog" target="_blank">Mi blog</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item @click.native="$emit('resetView')" :to="{ path: '/' }">
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/login' }">
          <v-list-item-title>Iniciar sesion</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/registro' }">
          <v-list-item-title>Registrarse</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/ciencia' }">
          <v-list-item-title>Invitado</v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-title>Cerrar sesión</v-list-item-title>
        </v-list-item>
        <v-list-item @click="openBlog">
          <v-list-item-title>Mi blog</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { auth, signOut } from '@/firebase'
export default {
  name: 'NavBar',
  data: () => ({
    drawer: false,
  }),
  methods: {
    async logout() {
      try {
        await signOut(auth);
        if (this.$route.path !== '/') {
          this.$router.push('/');
        }
      } catch (e) {
        console.error('Error al cerrar la sesión:', e);
      }
    },
    openBlog() {
      window.open('https://blogeducativo.netlify.app/', '_blank');
    }
  }
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
.v-btn:not(.v-btn--round).v-size--default{
  background-color: #007bff ;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  padding: 5px 10px;
  margin-left: 10px;
}
.logout-button:hover {
  background-color: #0056b3;
}

</style>