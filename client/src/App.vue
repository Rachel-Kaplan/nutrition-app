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

