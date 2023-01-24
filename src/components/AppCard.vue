<script>
import { createDOMCompilerError } from '@vue/compiler-dom';

export default{
    name: 'card',
    props:{
        name: String,
        number: String,
        type: String,
        color: String,
        image: String
    }
}
</script>

<template>
    <div class="card-poke text-center rounded-4">
        <img class="img-fluid" :src="image" alt="name">
        <h4>{{ number }}</h4>
        <h3>{{ name }}</h3>
        <p>{{ type }}</p>
    </div>

</template>

<style scoped lang="scss">
.card-poke{
   background-color: #FBE2E1;
    width: 200px;
}
img {
    width: 120px;
    height: 120px;
    margin: 20px;
    background-color: white;
    border-radius: 50%;
    padding: 10px;
}
</style>