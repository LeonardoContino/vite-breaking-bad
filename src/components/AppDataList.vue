<script>
import axios from 'axios'
export default{
    name: 'DataList',
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

<section></section>
</template>

<style></style>