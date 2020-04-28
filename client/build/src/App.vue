<template>
    <div id="app">
        <!--<home-page></home-page>-->
        <router-view></router-view>
        <!--<select-meal></select-meal>-->
    </div>
</template>
<script>
    import HomePage from './components/HomePage'
export default {
        name: 'app',
        components: {
             HomePage
},
}
</script>

<!--<style>-->
    <!--#app {-->
        <!--font-family:'heebo', 'Avenir', Helvetica, Arial, sans-serif;-->
        <!-- -webkit-font-smoothing: antialiased;-->
        <!-- -moz-osx-font-smoothing: grayscale;-->
        <!--text-align: center;-->
        <!--color: #2c3e50;-->
        <!--margin-top: 60px;-->
    <!--}-->
<!--</style>-->
