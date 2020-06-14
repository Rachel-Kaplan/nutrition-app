<template>
<div class="wrapper"> 
<div id = "background">
  <div class="block-group">
    <p>הרשמה ושאלון היכרות</p>

    <p v-if="errors.length">
    </p>
    <ul>
      <li v-for="error in errors">{{error}}</li>
    </ul>
    <p>
      <label for="name">שם</label>
      <input id="name"
             v-model="user.name"
             type="text"
             name="name">
    </p>

    <p>
      <label for="age">גיל</label>
      <input id="age"
             v-model="user.age"
             type="number"
             name="age"
             min="0">
    </p>
    <input
      type="submit"
      value="גבר"
    >
    <input
      type="submit"
      value="אישה"
    >אני
    <br>
    המשקל שלי כיום <input
    id="Weight"
    v-model="Weight"
    type="number"
    name="Weight"
    min="0"
  >
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
   <button @click="checkForm()"> לשלב הבא</button>
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
      checkForm: function (e) {
this.user.email = 'aa@gmail.com'
        this.user.gender = 1
        this.user.weight = 55
        const self = this;
        this.$http.post('http://localhost:3000/user', this.user)
          .then(function (response) {
            debugger
            let id = 123
            self.$router.push(`select-meal/${id}`)
            console.log(response);
          })
          .catch(function (error) {

            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
      },
   // this.$alert("פרטיך נקלטו במערכת. אתה מוזמן להמשיך לבחירת המתכונים שהתאמרנו עבורך באופן אישי");

    }
  }
</script>
<style>
 #background {
    background: url("../assets/2header.png") ;
    background-size: 100% 100%;
   width: 360px;
    height: 640px;
   
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
   .block-group{
   padding-top: 100px;
   direction: rtl;
  }
  input[type=text], select {
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

  input[type=submit] {
    margin: 8px 0;
    border: none;
  /*cursor: pointer;*/
    width: 80px;
background-color: #78cc29; /* Green */
  text-align: center;
  display: inline-block;
  font-size: 16px;
  font-family: heebo;
  
  }
  input[id=Weight] {
    margin-top: 20px;
    width: 150px;
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
    color: black;
    // padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-bottom: 1px solid black;
    /*cursor: pointer;*/
    width: 250px;
  }


  input[type=submit]:hover {
    background-color: #45a049;
    font-family:Heebo;
  }

 
   button {
  background-color: #78cc29; /* Green */
  border: none;
  color: white;
  padding:2px 105px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: heebo;
  
}
  p{
    direction: rtl;
    font-family:Heebo;
  }
</style>