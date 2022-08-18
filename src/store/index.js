import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemons,
    search: null
  },
  getters: {
    pokemons(state){
      return state.pokemons
    },

    filters(state){
      return state.pokemons.filter(a => {
        return a.name.toLowerCase().includes(state.search.toLowerCase())
      })
    }


  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
