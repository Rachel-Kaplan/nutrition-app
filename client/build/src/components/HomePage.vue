<template>
    <div>
        <H1>Health to the life</H1>
        <p>האפליקציה שתעזור לך לשמור על אורח חיים בריא וגם לרדת במשקל</p>
        <input @click="openLoginPage"
               value="אני חדש כאן ומעוניין להירשם">
        <br>
        <input @click="openRegisterPage"
               value="אני רשום כבר"/>
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
    th {
        width: 30%;
    }

    div {
        position: center;
        padding-top: 30px;
        width: 360px;
        height: 640px;
        background-color: #f1f1f1;
        text-align: center;
        background-position: center;
    }

    H1 {
        font-family: Coneria Script Demo;
    }

    p {
        font-family: 'assistant', heebo;
    }

    input {
        font-family: heebo;
        background-color: white;
        border: 1px;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;

    }

    input, select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    /*input {*/
    /*width: 100%;*/
    /*background-color: #4CAF50;*/
    /*color: white;*/
    /*padding: 14px 20px;*/
    /*margin: 8px 0;*/
    /*border: none;*/
    /*border-radius: 4px;*/
    /*cursor: pointer;*/
    /*}*/

    input:hover {
        background-color: #45a049;
    }

    div {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
    }
</style>


