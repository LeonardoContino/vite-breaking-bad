<script>
import axios from 'axios'
import AppCardVue from './AppCard.vue'
export default{
    name: 'DataList',
    components:{AppCardVue},
    data(){
        return{
            ListPokemon:[]
        }
    },
    created(){
        axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10&page=1')
        .then(res =>{
           this.ListPokemon = res.data.docs
        })
    }
}
</script>

<template>

<section class="container row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 border pokedex">
    <AppCardVue 
    v-for="pokemon in ListPokemon" 
    :key="ListPokemon._id" 
    class="col border"
    :name="pokemon.name"
    :number="pokemon.number"
    :type="pokemon.type1"
    :color="pokemon.color"
    :image="pokemon.imageUrl"
    ></AppCardVue>

</section>
</template>

<style scoped lang="scss">
.pokedex{
    min-height: 600px;
    
    margin: 0 auto;
    .col{
        height: 300px;

        
    }
}</style>