<template>
    <v-footer class="footer" color="primary" dark>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-col cols="auto">
              <i class="fab fa-facebook fa-lg mr-2"></i>
            </v-col>
            <v-col cols="auto">
              <i class="fab fa-twitter fa-lg mr-2"></i>
            </v-col>
            <v-col cols="auto">
              <i class="fab fa-instagram fa-lg mr-2"></i>
            </v-col>
            <v-col cols="auto">
              <i class="fab fa-linkedin fa-lg mr-2"></i>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="mt-4">
          
          <v-row justify="center">
          <v-col cols="12">
            <p class="text-center">
              © {{ currentYear }} Todos los derechos reservados
            </p>
            <p class="text-center">
              Bienvenido a nuestra web de ciencias. Nos dedicamos a educar y promover el conocimiento científico para todos.
            </p>
          </v-col>
          <v-col cols="12" class="text-center">
            <img src="../assets/logo.png" alt="Logo" style="height:200px;">
          </v-col>
        </v-row>
      </v-col>
      <v-spacer></v-spacer> <!-- Agregar un espacio de relleno -->
    </v-row>
  </v-footer>
</template>
  <script>
  export default {
    name: "PieDePagina",
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style scoped>
  .footer {
    padding-top: 10px;
    padding-bottom: 20px;
  }
  </style>