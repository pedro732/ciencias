<template>
    <button class="custom-button" @click="onClick">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'CustomButton',
    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
  </script>
  
  <style scoped>
  .custom-button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .custom-button:hover {
    background-color: #45a049;
  }
  </style>