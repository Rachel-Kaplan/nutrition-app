<template>
  <div>
    <p>הרשמה ושאלון היכרות</p>
    <!--<form id="app"-->
    <!--@submit="checkForm"-->
    <!--&gt;-->

    <p v-if="errors.length">
    <p>רק כמה שניות כדי שנדע מי אתה, וכך נוכל להתאים עבורך את התפריט המוצלח ביותר</p>
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
      <!--<input type="submit"-->
      <!--value="Submit"-->

      <!--&gt;-->
      <button @click="checkForm()">אישור</button>

    </p>
    <!--</form>-->
  </div>
</template>
<script>

  export default {
    name: 'register',
    data() {
      return {
        errors: [],
        // name: null,
        // age: null,
        movie: null,
        user: {}
      }
    },
    mounted() {
    },
    methods: {
      checkForm: function (e) {
        // if (this.name && this.age) {
        //     return true;
        // }
        // this.errors = [];
        //
        // if (!this.name) {
        //     this.errors.push('Name required.');
        // }
        // if (!this.age) {
        //     this.errors.push('Age required.');
        // }

        this.user.email = 'aa@gmail.com'
        this.user.gender = 1
        this.user.weight = 55
        const self = this;
        this.$http.post('http://localhost:3000/user', this.user)
          .then(function (response) {
            debugger
            // let id = response.userId;
            let id = 123
            localStorage.userId = id;
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
      }
    }
  }
</script>
<style>
  input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }

  div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
</style>
