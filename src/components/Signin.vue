<template>
    <div>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Iniciar Sesión</span>
          </v-card-title>
          <v-card-text>
            <form @submit.prevent="login">
              <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required>
              </div>
              <div>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" v-model="password" required>
              </div>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDialog">Cerrar</v-btn>
                <v-btn color="blue darken-1" text type="submit">Iniciar Sesión</v-btn>
              </v-card-actions>
            </form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  import { auth } from '@/firebase';
  import { signInWithEmailAndPassword } from "firebase/auth";
  
  export default {
    name:'InicioSesion',
    data() {
      return {
        dialog: true,
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
            this.$router.push('/ciencia');
            console.log('Inicio de sesión exitoso');
            this.dialog = false;
          })
          .catch(error => {
            console.error('Error al iniciar sesión:', error);
          });
      },
      closeDialog() {
        this.dialog = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .headline {
    font-size: 2em;
    text-align: center;
    color: #3f51b5;
    margin-bottom: 1em;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }
  label {
    font-weight: bold;
    margin-top: 1em;
  }

  input {
    padding: 0.5em;
    margin-top: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .v-card-actions {
    justify-content: center;
  }

  .v-btn {
    margin-top: 1em;
  }
   /* Reglas de media query para pantallas pequeñas */
   @media (max-width: 600px) {
    .headline {
      font-size: 1.5em; /* Reduce el tamaño de la fuente para pantallas pequeñas */
    }

    div {
      width: 100%; /* Asegura que los elementos ocupen todo el ancho de la pantalla en pantallas pequeñas */
    }

    input {
      padding: 0.25em; /* Reduce el padding para pantallas pequeñas */
    }
  }
</style>



