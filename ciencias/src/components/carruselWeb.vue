<template>
    <v-carousel ref="carousel" @input="resetTimer" class="custom-carousel">
      <v-carousel-item v-for="(image, index) in images" :key="index">
        <div class="image-container">
        <v-img :src="image" :lazy-src="image"  class="full-width-image"
        ></v-img>
      </div>
      </v-carousel-item>
    </v-carousel>
  </template>
  
  <script>
  export default {
    name: 'CarruselWeb',
    data() {
      return {
        images: [
          'https://cdn.pixabay.com/photo/2023/08/24/17/34/squirrel-8211238_1280.jpg',
          'https://cdn.pixabay.com/photo/2023/07/19/22/28/amur-tiger-8138017_1280.jpg',
          'https://cdn.pixabay.com/photo/2023/09/04/06/59/dog-8232158_1280.jpg',
          'https://cdn.pixabay.com/photo/2016/10/17/11/00/iceland-1747368_1280.jpg', 
          'https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png'
        ],
        timer: null
    };
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.moveToNextSlide();
      }, 3000); // Intervalo de 3 segundos
    },
    resetTimer() {
      clearInterval(this.timer);
      this.startTimer();
    },
    moveToNextSlide() {
      const carousel = this.$refs.carousel;

      if (carousel && carousel.next) {
        carousel.next();
      }
    }
      },
      getImageStyle(image) {
      if (image === 'https://cdn.pixabay.com/photo/2018/11/14/02/19/horse-3814350_1280.png') {
        return 'height: 50px'; // Estilo personalizado para la imagen del caballo
      } else {
        return ''; // Estilo vacío para las demás imágenes
      }
    }
  }
    

  
  </script>
  <style>
  .custom-carousel {
    background-color: #D3F3D9; /* Color de fondo verde claro */
  }
  .custom-carousel {
  width: 100%;
}

.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-width-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

  </style>