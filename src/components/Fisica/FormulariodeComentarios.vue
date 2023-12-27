<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div class="form-container">
          <v-text-field
            v-model="nombre"
            :counter="50"
            label="Nombre"
            required
            class="input-field tu-nombre"
          ></v-text-field>
          <v-textarea
            v-model="comentario"
            :counter="100"
            label="Comentario"
            required
            class="textarea-field tu comentario"
          ></v-textarea>
          <v-btn class="submit-button" dark color="primary" @click="submitForm">Enviar</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
  <script>
  import { db, auth, onAuthStateChanged } from '@/firebase'
  import { collection, addDoc } from "firebase/firestore";
  
  export default {
    data() {
      return {
        nombre: '',
        comentario: '',
        user: null,  // aquí guardaremos el estado del usuario
        dialog: false,
      dialogTitle: ''
      }
    },
    created() {
      onAuthStateChanged(auth, (user) => {
        this.user = user;
      });
    },
    methods: {
    async submitForm() {
      if (this.user) {  // solo permitimos enviar el formulario si el usuario está autenticado
        try {
          await addDoc(collection(db, "comentarios"), {
            nombre: this.nombre,
            comentario: this.comentario,
            // puedes agregar aquí más campos si los necesitas
          });
          this.dialogTitle = 'Comentario guardado!';
          this.dialog = true;
          // puedes hacer aquí algo más después de guardar el comentario, como limpiar el formulario
          this.nombre = '';
          this.comentario = '';
        } catch (e) {
          console.error('Error guardando el comentario:', e);
        }
      } else {
        this.dialogTitle = 'Debe iniciar sesión antes de enviar un comentario';
        this.dialog = true;
      }
    }
  }
}
</script>
  
<style scoped>
.v-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ajusta la altura al 100% de la altura de la ventana del navegador */
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;  /* reducir el ancho del formulario */
  max-width: 600px; /* Ajusta este valor según tus necesidades */
  height: auto; /* Ajusta este valor según tus necesidades */
  background-color: #fff;
}
.form-container input,
.form-container textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; /* Asegura que el padding y el borde estén incluidos en el ancho total */
}

.submit-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: #fff;  /* hacer que el texto del botón sea visible */
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
  transform: scale(1.1);  /* agregar un efecto hover al botón */
}
.v-text-field fieldset,
.v-text-field ,
.v-input__control{
  border: dotted;
}

</style>
