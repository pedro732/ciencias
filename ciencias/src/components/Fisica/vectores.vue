<template>
  <div>
    <div class="button-container top">
      <button class="custom-button" @click="openTextbox(1)">
        Cantidad Física
      </button>
      <button class="custom-button" @click="openTextbox(2)">Escalares</button>
    </div>
    <img
      src="https://openstax.org/apps/image-cdn/v1/f=webp/apps/archive/20230828.164620/resources/32567b78ee92b3cd94cc957945ff2431326dabca"
      alt="Imagen SVG"
      style="width: 70%; height: auto"
    />
    <div class="button-container bottom">
      <button class="custom-button" @click="openTextbox(3)">
        Vectores
      </button>
      <button class="custom-button" @click="openTextbox(4)">Sistema Internacional</button>
    </div>
    <div v-for="n in activeTextbox" :key="n" class="textbox">
      <textarea v-model="text[n - 1]" rows="10" cols="50"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "vectoresFisicos",
  data() {
    return {
      buttons: [
        { name: "Cantidad Fisica", id: 1 },
        { name: "Cantidad escalar", id: 2 },
        { name: "Cantidades vectoriales", id: 3 },
        { name: "Sistema Internacional de unidades", id: 4 },
      ],
      showTextbox: null,
      text: [
        "Una cantidad es una propiedad o atributo de un objeto o sistema que puede ser medido o calculado. Las cantidades se pueden clasificar como escalares o vectores.",
        "Escalar: Un escalar es una cantidad que puede ser completamente descrita por un solo número y sus unidades correspondientes. Ejemplos de escalares incluyen la temperatura, la masa y la distancia.",
        "Un vector es una cantidad que tiene tanto magnitud (tamaño) como dirección y sentido. Ejemplos de vectores incluyen el desplazamiento, la velocidad y la fuerza. Los vectores se representan gráficamente como flechas, con la longitud de la flecha representando la magnitud del vector y la dirección de la flecha representando la dirección del vector.",
        "El Sistema Internacional de Unidades (SI) es un sistema de unidades de medición utilizado en casi todos los países del mundo. Fue creado en 1960 por la 11ª Conferencia General de Pesas y Medidas, durante la cual se reconocieron inicialmente seis unidades físicas básicas. Posteriormente, se agregaron dos unidades físicas más, denominadas suplementarias, que se utilizan para la medición de ángulos",
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
