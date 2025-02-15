<template>
    <div v-if="show" class="modal">
      <div class="modal-content">
        <slot></slot>
        <button @click="close">Cerrar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['show'],
    methods: {
      close() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 80%;
    max-width: 500px;
  }
  </style>