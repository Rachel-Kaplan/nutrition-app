<template>
    <div class="wrapper">
    <div id = "background">
      
    </div>
    </div>
    </template>
<script>
export default {
        name: "logoPage",
        created() {
            setTimeout(() => this.$router.push( 'home-page'), 5000);
            }
        // methods:
        //     {
        //         openRegisterPage() {
        //             this.$router.push('/register_new')
        //         },
        //         openLoginPage() {
        //             this.$router.push('/login')
        //         }
        //     },
    }

</script>
<style scoped>
 #background {
    background: url("../assets/LogoPage.png") ;
    background-size: 100% 100%;
  
    width: 360px;
    height: 640px;
    
  }
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 360px;
        height: 640px;
        
        margin: auto;
    }
</style>