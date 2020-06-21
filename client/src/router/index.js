import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Register_new from '../components/register_new'
import HomePage from "../components/HomePage";
import selectMeal from "../components/selectMeal";
import lunch from "../components/lunch";
import Login from "../components/Login";
import registerNew from "../components/register_new";
import chooseRecipe from "../components/chooseRecipe";
import armonimSoup from "../components/armonimSoup";
import adashimSoup from "../components/adashimSoup";
import salmonfish from "../components/salmonfish";
import sheuit from "../components/sheuit";
import filaFish from "../components/filaFish";
import logoPage from "../components/logoPage";




export default new Router({
    routes: [
        {
            path: '/',
            component: logoPage
        },
        {
          path: '/home-page',
          component: HomePage
      },
        
        {
            path: '/register_new',
            component: registerNew
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/select-meal/:id',
            component: selectMeal
        },
      {
        path: '/lunch',
        component: lunch
      },
        {
            path: '/lunch/:id',
            component: lunch
        },
      {
        path: '/chooseRecipe',
        component: chooseRecipe
      },
      {
        path: '/armonimSoup',
        component: armonimSoup
      },
      {
        path: '/adashimSoup',
        component: adashimSoup
      },
      {
        path: '/salmonfish',
        component: salmonfish
      },
      {
        path: '/sheuit',
        component: sheuit
      },
      {
        path: '/filaFish',
        component: filaFish
      }

    ]
})
Vue.use(Router)
