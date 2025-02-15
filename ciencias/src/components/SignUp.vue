<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Registrarse</span>
        </v-card-title>
        <v-card-text>
          <form @submit.prevent="signUp">
            <div>
              <label for="name">Nombre:</label>
              <input type="text" id="name" v-model="name" required />
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="email" required />
            </div>
            <div>
              <label for="password">Password:</label>
              <input type="password" id="password" v-model="password" required />
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDialog">Cerrar</v-btn>
              <v-btn color="blue darken-1" text type="submit">Enviar</v-btn>
            </v-card-actions>
          </form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="5000">
      {{ snackbarText }}
    </v-snackbar>
  </div>
</template>

<script>
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: 'SignUp',
  data() {
    return {
      dialog: true,
      name: '',
      email: '',
      password: '',
      snackbar: false,
      snackbarText: '',
      snackbarColor: ''
    };
  },
  beforeRouteEnter(to, from, next) {
    if (to.path === '/registro') {
      next(vm => vm.dialog = true); // Muestra el diálogo
    } else {
      next();
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (to.path === '/registro') {
      this.dialog = true; // Muestra el diálogo
    }
    next();
  },
  methods: {
    signUp() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          console.log('Usuario registrado correctamente');
          this.snackbarText = 'Usuario registrado correctamente';
          this.snackbarColor = 'success';
          this.snackbar = true;
          this.closeDialog();
        })
        .catch(error => {
          console.error('Error al registrar al usuario:', error);
        });
    },
    closeDialog() {
      this.dialog = false;
      this.$router.push('/login'); // Asegúrate de que esta es la ruta correcta para el componente InicioSesion
    }
  }
}
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
  label {
    font-weight: bold;
    margin-top: 1em;
  }

  input {
    width: 80%;
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

    input {
      width: 100%; /* Asegura que los elementos ocupen todo el ancho de la pantalla en pantallas pequeñas */
      padding: 0.25em; /* Reduce el padding para pantallas pequeñas */
    }
  }
</style>
