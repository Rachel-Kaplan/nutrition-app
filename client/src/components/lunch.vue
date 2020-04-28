<template>
  <div class="wrapper">
    <div class="title">
      <h1>ארוחת צהריים</h1>
      <p>בחר מנה מתוך התפריט המוצע</p>
    </div>
    <div class="nav">
      <button v-for="category in categories" @click="chooseCategory(category.id)">{{category.name}}</button>
    </div>
    <div class="food_list">
      <ul>
        <li v-for="(product,idx) in activeFoodList">
          <input @click="chooseProduct(product.ID)" type="radio" :value="product.name" name="pr">
          <!--<label for="checkbox">{{product.name}}</label>-->
          <!--<input type="radio" v-model="product.name" value={{product.name}}>-->
          {{product.name}}
          {{product.Calories}}
        </li>
        <p> הבחירה שלי:</p>
        <!--<ul v-for="product in choosenProducts">
          <li>{{product}}</li>
        </ul>-->
        <div v-if="choosenProducts[0]!=''">חלבון:
          {{categories[0].list[choosenProducts[0]-1].name}}
          {{categories[0].list[choosenProducts[0]-1].Calories}}
        </div>
        <div v-if="choosenProducts[1]!=''">פחמימה:
          {{categories[1].list[choosenProducts[1]-1].name}}
          {{categories[1].list[choosenProducts[1]-1].Calories}}
        </div>
        <div v-if="choosenProducts[2]!=''">ירק:
          {{categories[2].list[choosenProducts[2]-1].name}}
          {{categories[2].list[choosenProducts[2]-1].Calories}}
        </div>

        <p> סה"כ:</p>
        <div>{{getCount()}}</div>

        <!--{{product.name.active}}-->
      </ul>
      <button @click="Recipes()">זהו, בחרתי ארוחה</button>
    </div>
    <!--<table v-if="list.length">-->
    <!--<tbody>-->
    <!--<th>מנת חלבון</th>-->
    <!--<th>קלוריות</th>-->
    <!--<tr v-for="(row, index) in list" :key="row.ID">-->
    <!--<td>{{ row }}</td>-->
    <!--<td>{{ row }}</td>-->
    <!--<input type="radio" :id="index" name="contact">-->
    <!--</tr>-->
    <!--<button @click="">המשך למנה הבאה</button>-->
    <!--</tbody>-->
    <!--</table>-->
  </div>
</template>
<script>
  export default {
    name: "lunch",
    data: function () {
      return {
        categories: [
          {id: 2, name: "תוספת ירק", isActive: true, list: []},
          {id: 1, name: "תוספת", isActive: false, list: []},
          {id: 0, name: "עיקרית", isActive: false, list: []},
        ],
        activeFoodList: [],
        activeIndex: 0,
        myProd: {name: ""},
        choosenProducts: ['', '', ''],
        userId: ''
      }

    },
    created() {
      this.getProtein();
      this.getCarbohydrate();
      this.getFruits();
      this.getVegetables();
    },
    mounted() {
      // this.userId = this.$route.params.id
    },
    methods: {
      chooseProduct(value) {
        this.choosenProducts[this.activeIndex] = value;
        this.$forceUpdate();
        debugger;
      },
      chooseCategory(id) {
        this.categories.forEach(category => {
          category.isActive = false;
        })
        this.categories[id].isActive = true;
        this.activeFoodList = this.categories[id].list;
        this.activeIndex = id;
      },
      getCount(){
        let count = 0;
        this.choosenProducts.forEach((p,index)=>{
          if(p != '')
          {
            count += this.categories[index].list[p].Calories;
          }
        });
        return count;
      },
      Recipes() {
        debugger;
        this.$http.post('http://localhost:3000/user_meals',
          {user_id: this.$route.params.id,
                meal_type: 2,
                carbohydrate_choosen: this.choosenProducts[1],
                fruits_choosen: null,
                protein_choosen: this.choosenProducts[0],
                vegtables_choosen: this.choosenProducts[2]
          }).then((res) =>{
          console.log(res);
        }).catch(()=>{
        })
      },
      getProtein() {
        const comp = this;
        this.$http.get('http://localhost:3000/protein')
          .then(function (response) {
            console.log(response);
            comp.categories[0].list = response.data;
          })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
      },
      getCarbohydrate() {
        const comp = this;
        this.$http.get('http://localhost:3000/carbohyrate')
          .then(function (response) {
            console.log(response);
            comp.categories[1].list = response.data;

          })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
      },
      getVegetables() {
        const comp = this;
        this.$http.get('http://localhost:3000/vegetables')
          .then(function (response) {
            console.log(response);
            comp.categories[2].list = response.data;
          })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
      },
      getFruits() {
        const comp = this;
        this.$http.get('http://localhost:3000/fruits')
          .then(function (response) {
            console.log(response);
            comp.list.push(response.data);
          })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
      },
      Recipes() {
        this.$router.push(`/chooseRecipe/`)
      },
    }
  }
  //         const self = this;
  // this.$http.post('http://localhost:1337/lunch',{userID:11,meals_code:56})
  //     .then(function (response) {
  //         console.log(response);
  //     })
  //     .catch(function (error) {
  //
  //         if (error.response) {
  //             console.log(error.response.data);
  //             console.log(error.response.status);
  //             console.log(error.response.headers);
  //         }
  //     })


</script>
<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 370px;
  }
</style>
