import VueRouter from 'vue-router'
import Vue from 'vue'
import PokemonList from '@/components/PokemonList'
import PokemonView from '@/components/PokemonView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pokemon-list',
    component: PokemonList
  },
  {
    path: '/view/:id',
    name: 'pokemon-view',
    component: PokemonView
  }
]

const router = new VueRouter(
  {
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  }
)


export default router
