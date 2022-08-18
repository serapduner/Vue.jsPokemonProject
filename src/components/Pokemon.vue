<template>
<div class="card-panel teal" :class="pokemon.type"
  @mouseover ="hover true"
  @mouseleave ="hover false"
>
    <div class="col s12 m4" >
        <div class="row">
            <h4> {{pokemon.name}} </h4>
        </div>

        <div class="row">
            <img role="pokemon" :src="pokemon.logo" alt="logo">

        </div>

        <div class="row">
           <h5>Pv: {{pokemon.pv}}</h5>
        </div>

        <div class="row">
           <img role= "type" :src="type" alt=""  >
        </div>

        <router-link :to "{name: 'pokemon-view', params:{id: pokemon.id }}" ><button v-if="hover"  class="btn blue">SELECT</button></router-link>

    </div>

    
   
</div>

</template>

<script>
export default{
    name: 'pokemon-1',
    props: ['pokemon-1'],

    data(){
        return{
          type: null,
          hover: false,
        }},

        mounted(){
            if(this.pokemon.type ='electric'){
                this.type = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pinpng.com%2Fpngs%2Fm%2F56-569105_electric-logo-png-electricity-transparent-png.png&imgrefurl=https%3A%2F%2Fwww.pinpng.com%2Fpicture%2FTbxJow_electric-logo-png-electricity-transparent-png%2F&tbnid=v6D_fxtwJTp_lM&vet=12ahUKEwjs0qTO_c35AhU4kf0HHdfaDv4QMyhkegUIARDaAQ..i&docid=2XEhccs2pV6XaM&w=840&h=877&q=electric%20logo&ved=2ahUKEwjs0qTO_c35AhU4kf0HHdfaDv4QMyhkegUIARDaAQ'
            }else if(this.pokemon.type ='grass'){
                this.type = 'https://pokemonenglish.fandom.com/wiki/Grass_Type'
            }else if(this.pokemon.type ='fire'){
                this.type = 'https://commons.wikimedia.org/wiki/File:Pok%C3%A9mon_Fire_Type_Icon.svg'
            }
        }
        
    }

</script>

<style scoped>

img[role="type"]{
    width: 80px;
}

.electric{
    background-color: yellow;
}

.grass{
    background-color: green;
}

.fire{
    background-color: red;
}


button{

    animation: buttonshow 0.4s;
}

button:hover{
    transform: scale(1.1);
    transition: 0.4s;
}

@keyframes buttonshow{
    from{
         
         opacity: 0;

    }to{
        opacity: 1;

    }
}


</style>