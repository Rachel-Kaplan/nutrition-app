<template>
    <div>
        <input id="name"
               v-model="name"
               type="text"
               name="שם"
               placeholder="שם">
        <br>
        <input id="age"
               v-model="age"
               type="number"
               name="age"
               min="0"
               placeholder="גיל">
        <br>
        <input id="דואר אלקטרוני"
               v-model="email"
               type="text"
               name="דואר אלקטרוני"
               placeholder="דואר אלקטרוני">
        <br>
        אני<input
            type="submit"
            value="גבר"
    >
        <input
                type="submit"
                value="אישה"
        >
        <br>
        המשקל שלי כיום <input
            id="Weight"
            v-model="Weight"
            type="number"
            name="Weight"
            min="0"
    >
        <br>
        <input type="submit"
               value="שלב הבא ואחרון">
    </div>
</template>
<script>
    export default {
        name: 'Login'
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