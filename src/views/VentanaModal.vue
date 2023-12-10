<template>
  <div class="modal">
    <div class="modal-content">
      <button class="close-button" @click="cerrarModal">X</button>
      <img :src="imagen.url" :alt="imagen.titulo">
      <h3>{{ imagen.titulo }}</h3>
      <p>{{ imagen.descripcion }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagen: {
      type: Object,
      required: true
    }
  },
  methods: {
    cerrarModal() {
      this.$emit('cerrar');
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  background-color: white;
  padding: 20px;
  text-align: center;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: black;
  font-size: 18px;
  cursor: pointer;
}
</style>