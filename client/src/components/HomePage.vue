<template>
<div class="wrapper">
  <div id = "background">
    <div class="btn">
        <H1>Health to the life</H1>
        <p>
       
     האפליקציה שתעזור לך לשמור
     </br>
         על אורח חיים בריא וגם לרדת במשקל</p>
        <input @click="openRegisterPage"
               value="אני חדש כאן ומעוניין להירשם">
        <br>
        <input @click="openLoginPage"
               value="אני רשום כבר"/>
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
        name: "page1",
        methods:
            {
                openRegisterPage() {
                    this.$router.push('/register_new')
                },
                openLoginPage() {
                    this.$router.push('/login')
                }
            },
    }
</script>
<style>
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
.btn {
        position: center;
        padding-top: 30px;
        width: 360px;
        height: 640px;
       padding-top: 120px;
        text-align: center;
        background-position: center;
    }
 #background {
    background: url("../assets/2header.png") ;
    background-size: 100% 100%;
    /*background-size: cover;*/
    width: 360px;
    height: 640px;
    /*align-content: center;*/
    /*justify-content: center;*/

    /*margin-top: ;*/
    /*background-position: top;*/
  }

    th {
        width: 30%;
    }

   

    H1 {
        font-family: Coneria Script Demo;
        padding-top: 50px;
    }

    p {
        font-family:  heebo;
    }

   input {
    width: 100%;
    
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-bottom: 1px solid black;
    width: 250px;
    font-family: heebo;
    color-text: black;
    direction: rtl;

    
  }
    input, select {
        width: 70%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
input:hover {
        background-color: #78cc29;
    }

  
</style>


