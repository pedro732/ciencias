import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css';
import '@/input.css';

Vue.use(VueKatex);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

