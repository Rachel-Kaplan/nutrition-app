<template>
  <div id = "background">
  </div>


</template>
<script>
  export default {
    name: "adashimSoup"
  }
</script>
<style scoped>
  #background {
    background: url("../assets/adashimSoup.png") ;
    background-size: 100% 100%;
    /*background-size: cover;*/
    width: 360px;
    height: 640px;
  }
  .wrapper {
    display: grid;
    width: 360px;
    height: 640px;
    grid-template-columns: 100%;
    align-items: center;
    justify-content: center;
    /*padding: 200px;*/
    margin: auto;
#app{
     
     display: none;
  }
  
}
</style>
