<template>
  <div class="wrapper">
    <div id = "background">
      <!--
       <div1>-->
      <!-- -->
      <!-- <img src="../assets/choosefood.png" alt="choosefood">-->
      <!-- </div1>-->
      <!-- <button class="btn btn-sm">-->
      <!-- </button>-->
      <div class="btn-group">
        <button @click="armonimSoup()">
        </button>
        <br>
        <button @click="adashimSoup()">
        </button>
        <br>
        <button @click="filafish()">
        </button>
        <br/>
        <button @click="salmonfish()">
        </button>
        <br/>
        <button @click="sheuit()">
        </button>

      </div>
    </div>
  </div>

</template>
<body>

</body>
<script>
  export default {
    name: "chooseRecipe",
    data()
    {
      // return {
      // image: {backgroundImage: "url(.../src/assets/choosefood.jpg)"}
      // };
    },
    methods: {
      armonimSoup()
      {
        this.$router.push(`/armonimSoup/`)
      },
      adashimSoup()
      {
        this.$router.push(`/adashimSoup/`)
      },
      filafish()
      {
        this.$router.push(`/filafish/`)
      },
      salmonfish()
      {
        this.$router.push(`/salmonfish/`)
      },
      sheuit()
      {
        this.$router.push(`/sheuit/`)
      }
    }
  };


</script>
<style scoped>
  #background {
    background: url("../assets/choosefood.png");
    background-size: 100% 100%;
    /*background-size: cover;*/
    width: 360px;
    height: 640px;
  }
  .wrapper {
    /*display: grid;*/
    width: 360px;
    height: 640px;
    grid-template-columns: 100% ;
    align-items: center;
    justify-content: center;
    /*padding: 200px;*/
    margin: auto;
  }
  .btn-group{
    padding-top:150px;
  }
  .btn-group button{
    width: 330px;
    height: 80px;
    background-color: transparent;
    border: none;
    padding: 15px 20px;
    text-align: center;
    display: block;
    font-size: 20px;
  }
  .btn-group button:hover {
    background-color: lightgrey; opacity: 0;
    transparent:50%;
  }
  /*div {*/
  /* position: center;*/
  /* padding-top: 30px;*/
  /* width: 360px;*/
  /* height: 640px;*/
  /* background-color: #f1f1f1;*/
  /* text-align: center;*/
  /* background-position: center;*/
  /*}*/

  H1 {
    font-family: Coneria Script Demo;
  }

  p {
    font-family: 'assistant', heebo;
  }
 #21XQUnwrK{
    display: none;
  }
</style>
<!--<style >-->
<!--.image {-->
<!-- width: 360px;-->
<!-- height: 640px;-->



