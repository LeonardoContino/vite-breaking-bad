<script>
import {store} from '../store';
import AppCardVue from './AppCard.vue';
export default{
    name: 'DataList',
    components:{AppCardVue},
   data(){
    return{
        store
    }
   },
  
}
</script>

<template>
<section>
    <select class="form-select w-50 container mb-4" aria-label="Pokemon Type">
  <option selected></option>
  <option value="1"></option>
</select>
</section>
<section class="container row row-cols-2 row-cols-md-3 row-cols-lg-4 overflow-auto py-4  pokedex">
    <AppCardVue 
    v-for="pokemon in store.ListPokemon" 
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
    
}


</style>