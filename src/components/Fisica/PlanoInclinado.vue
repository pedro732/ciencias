<template>
  <div>
    <div class="button-container top">
      <button class="custom-button" @click="openTextbox(1)">
        Fuerza normal
      </button>
      <button class="custom-button" @click="openTextbox(2)">Fuerza</button>
    </div>
    <img
      src="https://eluniversomatematicoblog.files.wordpress.com/2017/07/free_body-svg.png"
      alt="Imagen SVG"
      style="width: 25%; height: auto"
    />
    <div class="button-container bottom">
      <button class="custom-button" @click="openTextbox(3)">
        Fuerza de roce
      </button>
      <button class="custom-button" @click="openTextbox(4)">Fuerza peso</button>
    </div>
    <div v-for="n in activeTextbox" :key="n" class="textbox">
      <textarea v-model="text[n - 1]" rows="10" cols="50"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanoInclinado",
  data() {
    return {
      buttons: [
        { name: "Fuerza normal", id: 1 },
        { name: "Fuerza", id: 2 },
        { name: "Fuerza de roce", id: 3 },
        { name: "Fuerza peso", id: 4 },
      ],
      showTextbox: null,
      text: [
        "La fuerza normal es la fuerza ejercida por una superficie sobre un objeto que está en contacto con ella. Es perpendicular a la superficie y actúa en dirección opuesta a la fuerza aplicada por el objeto sobre la superficie. La fuerza normal equilibra la fuerza aplicada por el objeto y evita que este se hunda o atraviese la superficie. Por ejemplo, cuando te sientas en una silla, la fuerza normal es la que la silla ejerce sobre ti para contrarrestar tu peso.",
        "La fuerza es una magnitud física vectorial que puede causar cambios en el movimiento o en la forma de un objeto. Se representa mediante un vector con dirección, magnitud y sentido. La fuerza se mide en newtons (N) y puede ser producida por la interacción de dos objetos o por la acción de campos físicos, como el campo gravitatorio o electromagnético.",
        "La fuerza de roce es la fuerza resistiva que se opone al movimiento relativo o al intento de movimiento entre dos superficies en contacto. Hay dos tipos principales de fuerza de roce: el roce estático, que actúa cuando los objetos están en reposo relativo, y el roce cinético, que actúa cuando los objetos se deslizan uno sobre el otro. La fuerza de roce depende de las características de las superficies en contacto y de la fuerza normal entre ellas.",
        "La fuerza peso es la fuerza con la que un objeto es atraído hacia el centro de la Tierra o hacia cualquier otro objeto con masa. Es causada por la gravedad y depende de la masa del objeto. La fuerza peso actúa verticalmente hacia abajo y se puede calcular utilizando la fórmula F = m * g, donde F es la fuerza peso, m es la masa del objeto y g es la aceleración debido a la gravedad (aproximadamente 9.8 m/s² en la superficie de la Tierra).",
      ],
    };
  },
  computed: {
    activeTextbox() {
      return this.showTextbox ? [this.showTextbox] : [];
    },
  },
  methods: {
    openTextbox(n) {
      this.showTextbox = n;
    },
  },
};
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: space-around;
}
.button-container.top {
  margin-bottom: 20px;
}
.button-container.bottom {
  margin-top: 20px;
}
.textbox textarea {
  margin-top: 20px;
  background-color: #f0f8ff;
}
.custom-button {
  background-color: #add8e6; /* Color de fondo azul claro */
  font-weight: bold; /* Texto en negrita */
  padding: 10px 20px; /* Relleno alrededor del texto */
  border: none; /* Sin borde */
  cursor: pointer; /* Cursor de mano al pasar el ratón */
}
</style>
