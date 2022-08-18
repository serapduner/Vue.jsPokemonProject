<template>
<div class="row">
   <input type="search" class="center" placeholder="Search" v-model="$store.state.search">
   <Pokemon v-for="pokemon in " :key="pokemon.id" />
</div>
</template>

<script>
   import Pokemon from './Pokemon'
   import { mapGetters } from 'vuex';


   export default{
    name:'pokemon-list',
    components:{
    Pokemon
},

      computed:{
        ...mapGetters({
            pokemons: 'pokemons',
            filters: 'filters'
        })
      }

   }
</script>

<style scoped>

</style>