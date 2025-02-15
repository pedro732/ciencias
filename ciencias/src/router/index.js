import Vue from 'vue'
import VueRouter from 'vue-router'
import VistaPrincipal from '@/views/principal.vue'
import SignUp from '@/components/SignUp.vue'
import InicioSesion from '@/components/Signin.vue'
import CienciaActual from '@/views/ciencia.vue'
import BiologiaActual from '@/views/biologia.vue'
import QuimicaActual from '@/views/quimica.vue'
import FisicaActual from '@/views/fisica.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'VistaPrincipal',
    component: VistaPrincipal
  },
  {
    path: '/registro',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'InicioSesion',
    component: InicioSesion
  },
  {
    path: '/ciencia',
    name: 'CienciaActual',
    component: CienciaActual,
    children:[
      {
        path: 'biologia',
        name: 'BiologiaActual',
        component: BiologiaActual
      },
      {
        path: 'quimica',
        name: 'QuimicaActual',
        component: QuimicaActual
      },
      {
        path: 'fisica',
        name: 'FisicaActual',
        component: FisicaActual
      },
    ]
   }
  ]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
