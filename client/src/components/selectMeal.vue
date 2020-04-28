<template>
  <div>
    <H1>תן לי הצעות ארוחה עבור:</H1>

    <input @click=""
           value="ארוחת בוקר">
    <br>
    <input @click="openLunchPage"
           value="ארוחת צהריים"/>
    <br>
    <input @click=""
           value="ארוחת ערב"/>
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
    name: "selectMeal",
    methods:
      {
        openLunchPage() {
          this.$router.push(`/lunch/${this.$route.params.id}`)
        },
        getUserID()
        {
          const comp = this;
          this.$http.get('http://localhost:3000/users')
            .then(function (response) {
              console.log(response);
              comp.this.userID = response.data;
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


  input:hover {
    background-color: #45a049;
  }

  div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
</style>
