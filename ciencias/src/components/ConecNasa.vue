<template>
  <div>
    <v-carousel :cycle="true" :hide-delimiter-background="true" style="height: 90vh" v-model="activeIndex" :interval="15000">
      <v-carousel-item v-for="(image, index) in images" :key="index">
        <v-sheet height="auto">
          <v-container fill-height fluid>
            <v-layout column align-center justify-center>
              <v-img :src="image.url" :key="index" class="contained-image" @error="handleImageError"></v-img>
            </v-layout>
            <transition name="fade" mode="out-in">
              <v-card v-if="activeIndex === index" class="description-card">
                <v-card-text class="description-title">{{ image.title }}</v-card-text>
                <v-card-text class="description-text">{{ image.explanation }}</v-card-text>
              </v-card>
            </transition>
          </v-container>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      images: [],
      activeIndex: 0,
      activeIndices:[]
    };
  },
  mounted() {
    this.fetchImages();
  },
  methods: {
    fetchImages() {
      const API_KEY = 'omgXpEYFw4JcUDdylXehNzH3TmL2eI7fFEBiXVsS';
      const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`;

      axios
        .get(API_URL)
        .then(response => {
          console.log(response.data);
          this.images = response.data.map(item => ({
            url: item.url,
            title: item.title,
            explanation: item.explanation
          }));
        })
        .catch(error => {
          console.error(error);
        });
    },
    handleImageError(error) {
      console.error('Image failed to load', error);
    },
    handleScroll(scrollPosition) {
         const halfWay = this.$vuetify.breakpoint.width / 2;
         const newActiveIndices = this.images.map((_, index) => index).filter(index => {
           const element = this.$refs.carousel.$el.querySelector(`[data-index="${index}"]`);
           return element && element.offsetLeft - halfWay < scrollPosition && element.offsetLeft + halfWay > scrollPosition;
         });
         this.activeIndices = newActiveIndices;
       }
  }
};
</script>

<style scoped>
.contained-image {
  object-fit: contain;
}

.description-card {
  width: 100%; 
  max-width: 600px; 
  margin-top: 20px;
  font-size: 18px;
  color:white;
  overflow-y: auto;
  max-height: 200px;
}



.description-title {
  padding: 20px;
  font-weight: bold;
}

.description-text {
  padding: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
.description-card {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
</style>
