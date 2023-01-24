<script>
import AppMain from './components/AppMain.vue';

export default{
  components:{AppMain}
}
</script>

<template>
  <body class="bg-danger">
    <header class="d-flex justify-content-center p-4 ">
    <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon">
  </header>
  <AppMain></AppMain>
  </body>
 
</template>

<style scoped lang="scss">
@use './assets/scss/style.scss' as *;

header img{
  width: 200px;
  text-align: center;
}
</style>
