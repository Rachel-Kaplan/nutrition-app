<template>

     <div class="wrapper">     
      <div id = "background">
<div class="block-group">
<!--    <p v-if="errors.length">-->

    <h3>בואו נתחיל</h3>
        <h6>אנחנו מאמינים ששמירה על תזונה
          <br>
          בריאה ונכונה מתחילה מהאוכל
          <br>
          שאתה אוהב.</h6>
    <ul>
      <li v-for="error in errors">{{error}}</li>
    </ul>
    <p>
      <label for="email"></label>
      <input id="eamil"
             v-model="user.name"
             
             name="email"
             placeholder="דואר אלקטרוני או שם משתמש">
    </p>
    <input id="סיסמא"
           v-model="email"
           type="text"
           name="סיסמא"
           placeholder="סיסמא">
    <p>
      <label for="movie">אני מעוניין בהתאמת תפריט לפי</label>
      <select id="movie"
              v-model="movie"
              name="movie">
        <option>תפריט לפי המלצות משרד הבריאות</option>
        <option>תפריט מוגבל קלוריות</option>
        <option>תפריט מותאם מצב בריאותי</option>
      </select>
    </p>
    <p>
<button @click="openLunchPage">היכנס

           </button>
    <br>
      

    </p>
    </p>
      </div>
      </div>

  </div>
</template>
<script>

  export default {
    name: 'register',
    data() {
      return {
        errors: [],

        movie: null,
        user: {}
      }
    },
    mounted() {
    },
    methods: {
      openLunchPage() {
          this.$router.push(`/lunch/`)
        },
         
      },
     
   
  }
</script>
<style scoped>

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

  }
  .block-group{
   padding-top: 100px;
  }

   p {
    font-family:  heebo;

  }

  input {
    
    font-family: heebo;
    text-color:black;
    background-color: white;
    // border: 1px;
padding: 0px 10px;
    text-align: right;
    text-decoration: none;
    /*display: inline-block;*/
    font-size: 12px;
    margin: 0px 2px;
    /*cursor: pointer;*/

  }
  input, select {
    margin-top: 20px;
    width: 245px;
    padding: 8px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-family: heebo;
  }
  input {
   
    width: 100%;
    // color: white;
    // padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-bottom: 1px solid black;
    /*cursor: pointer;*/
    width: 250px;
  }

  /*input:hover {*/
  /*  background-color: #45a049;*/
  /*}*/
  h3{
    color: #ffc23d;
    font-family: "Heebo";
    font-size: 24pt;
  }
  h6{
    font-family: "Heebo Light";
    font-size: 12pt;
    direction: rtl;

  }
  button {
  background-color: #78cc29; /* Green */
  border: none;
  color: white;
  text-color: white;
  padding:2px 105px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: heebo;
  
}

</style>
