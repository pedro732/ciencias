<template>
    <v-carousel ref="carousel" class="custom-carousel">
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <div class="image-container">
          <v-img :src="item.src" :lazy-src="item.src" class="full-width-image"></v-img>
        </div>
      </v-carousel-item>
    </v-carousel>
  </template>
  
  <script>
  export default {
    name:'CarruselCiencia',
    data() {
      return {
        items: [
          { src: 'https://img.freepik.com/vector-gratis/fondo-educacion-cientifica_23-2148486901.jpg?w=1800&t=st=1702154329~exp=1702154929~hmac=bfa28f82f63e43888b0ec2fe6d04deeed2417acd29d302d063b474c01052302f' },
          { src: 'https://img.freepik.com/vector-gratis/formulas-cientificas-dibujadas-mano-pizarra_23-2148495302.jpg?w=1800&t=st=1702154688~exp=1702155288~hmac=2d9fe7f1dd7fc3c9571c8e4ecb172f93ec2501ac3e52d9b1f5f8e2732d5a7e70' },
          { src: 'https://img.freepik.com/vector-gratis/bosquejo-concepto-educacion_1284-7335.jpg?w=1060&t=st=1702154725~exp=1702155325~hmac=d1df3046de4b3e4a410bc7a9447c690d23037cbfd34ffa3a5819243818516d77' },
          { src: 'https://img.freepik.com/vector-gratis/colorido-ciencia-objetos-iconos-vector-conjunto_1308-131978.jpg?w=1060&t=st=1702154750~exp=1702155350~hmac=9d08d2278745b81e87a7873b611d53432a035a38e3b2dc77ddfeff79d0103ee4' },
          { src: 'https://img.freepik.com/vector-gratis/objetos-laboratorio-ciencias_23-2148488312.jpg?w=1060&t=st=1702154779~exp=1702155379~hmac=713f4c8711623fe0bd724a2dddecef6ccf306c61610c6a0f5e8d6e2ead0e8aac' },
          { src: 'https://img.freepik.com/vector-gratis/fondo-ciencia-dibujada-mano_23-2148529525.jpg?w=1800&t=st=1702154807~exp=1702155407~hmac=845d77b5d72be48348131d09ed9d50c8a43f9fcd586393c49330ba1dff412f17' },
          // Agrega más objetos aquí para más imágenes
        ],
        timer: null
      }
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
  }
  }
  </script>