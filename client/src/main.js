// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
//import VueSimleAlert from "vue-simple-alert"
import Toasted from 'vue-toasted';
 

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Toasted)
//Vue.use(VueSimpleAlert);
Vue.prototype.$http =  axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
