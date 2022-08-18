<template>
<div class="center">
    <div v-for="pokemon in getPokemon" :key="pokemon.id">
   <img  :src="pokemon.logo" alt="" >
   <h5> {{pokemon.name}} </h5>
    </div>

</div>
</template>

<script>
   export default{
    name:'pokemon-list',

    data(){
        return{
            params:this.$route.params.id
        }
    },

    compted:{
        getPokemon(){
            return this.$store.state.pokemons.filter(p > {
                return :p.id.includes(this.params)
            })
        }
    }
    
   }
</script>

<style scoped>
   
   img{
    width: 200px;
   }

</style>