<template>
<div class="wrapper">
  <div id = "background">

    <div class="block-group">
      <H1>תן לי הצעות ארוחה עבור:</H1>
      <div class="wrapp-icon">
        <router-link class="icon1" to="/breafast">      
        </router-link>
      </div>

      <div class="wrapp-icon">
        <router-link class="icon2" to="/lunch">      
        </router-link>
      </div>

      <div class="wrapp-icon">
        <router-link class="icon3" to="/dinner">      
        </router-link>
      </div>
       
    </div>
  </div>
</div>
</template>
<script>
// export default new Router({
  //     routes: [
  //         {
  //             path: "/register_new",
  //             redirect: {
  //                 name: "register_new"
  //             }
  //         }]
  export default {
    name: "selectMeal",
    //  data(){
    //    return{
    //      img:
    //    (src/assets/lunch.png)
    //    }
    //  }

methods:
      {
        openLunchPage() {
          this.$router.push(`/lunch/${this.$route.params.id}`)
        },
        getUserID()
        {
          const comp = this;
          this.$http.get('http://localhost:3000/users')
            .then(function (response) {
              console.log(response);
              comp.this.userID = response.data;
            })
            .catch(function (error) {
              if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              }
            });
        }
      }
  }
</script>
<style>
      
.wrapp-icon{
  width: 100%;
    display: flex;
    justify-content: center;
}
#background {
    background: url("../assets/2header.png") ;
    background-size: 100% 100%;
   width: 360px;
    height: 640px;
}
.icon1 {
  background-image: url("../assets/breakfast.png")  ;
    background-repeat:no-repeat;
    height:130px;
    width:50%;
    
}
.icon2 {
  background-image: url("../assets/lunch.png")  ;
    background-repeat:no-repeat;
    height:140px;
    height:140px;
    width:50%;
    }
    .icon3 {
  background-image: url("../assets/dinner.png")  ;
    background-repeat:no-repeat;
    height:100px;
      height:100px;
    width:50%;
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
    text-align: center;
    font-family: heebo;
}


/*div {
    width: 360px;
    height: 640px;
    text-align: center;
    border-radius: 5px;
    }*/
    h1{
      font-family: heebo;
    direction: rtl;
     font-size:22px;
    }
p {
    font-family: heebo;
    direction: rtl;
  }
input {
    font-family: heebo;
    background-color: white;
    border: 1px;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    // display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    
}
input, select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    // display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .block-group{
   padding-top: 100px;
   
  }
#mI6Liw7d6{
    display: none;
   }
  #RV1sp5-V2{
    display: none;
  }
  #app{
     align-items: center;
  }
  </style>
