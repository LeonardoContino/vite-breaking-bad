<script>
import AppDataList from './AppDataList.vue';
export default{
    name: AppMain,
    components:{AppDataList}
}
</script>
<template>
<section>
    <h3 class="text-center p-2 text-warning">POKEDEX</h3>
</section>
<section class=" row row-cols-4 g-4 border pokedex">
    <div class="col border">
        <AppDataList></AppDataList>
    </div>
   

    

</section>

</template>
<style scoped lang="scss">
.pokedex{
    min-height: 600px;
    width: 1200px;
    margin: 0 auto;
    .col{
        height: 300px;

        
    }
}
</style>