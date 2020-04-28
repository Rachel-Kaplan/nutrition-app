<template>
    <div class="wrapper">
        <img src="logoPage.jpg" alt="logoPage">
    </div>
    </template>
<script>
    window.setTimeout(function(){
        window.location.href = "HomePage.html";
    }, 4000);
// created() {
    // setTimeout(() => this.$router.push({path: 'HomePage.html'}), 3000);
    // }
</script>
<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 360px;
        height: 640px;
        padding: 200px;
        margin: auto;
    }
</style>