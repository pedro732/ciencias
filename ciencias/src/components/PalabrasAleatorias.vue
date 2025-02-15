<template>
    <div class="palabras-aleatorias">
      <div class="palabra" :style="randomStyle">{{ currentWord }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PalabrasAleatorias",
    data() {
      return {
        palabras: [
          "ciencia",
          "biología",
          "química",
          "física",
          "método científico",
          "hipótesis",
          "energía",
          "Newton",
          "Darwin",
          "Einstein"
        ],
        currentWord: ""
      };
    },
    computed: {
      randomStyle() {
        const randomColor = this.getRandomColor();
  
        return {
          fontSize: "2.5em",
          fontWeight: "bold",
          textTransform: "uppercase",
          margin: "5px",
          padding: "10px",
          borderRadius: "5px",
          color: "white",
          backgroundColor: randomColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        };
      }
    },
    mounted() {
      this.startRandomWord();
    },
    methods: {
      startRandomWord() {
        setInterval(() => {
          this.currentWord = this.palabras[Math.floor(Math.random() * this.palabras.length)];
        }, 2000); // Cambiar la duración en milisegundos según tus preferencias
      },
      getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    }
  };
  </script>
  
  <style scoped>
  .palabras-aleatorias {
    display: flex;
    height: 4cm;
    width: 100%;
    flex-wrap: wrap;
  }
  
  .palabra {
    display: none;
  }
  </style>