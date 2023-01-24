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
        axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=15&page=1')
        .then(res =>{
           this.ListPokemon = res.data.docs
        })
    }
}
</script>

<template>

<section class="container row row-cols-2 row-cols-md-3 row-cols-lg-4 overflow-auto  pokedex">
    <AppCardVue 
    v-for="pokemon in ListPokemon" 
    :key="pokemon._id" 
    class="mb-3"
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
    margin: 0 auto;
    height: 500px;
    width: 800px;
    justify-content: center;
    gap: 20px;
    border: 10px solid rgb(203, 203, 13);
}</style>