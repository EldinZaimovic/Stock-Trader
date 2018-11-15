import Vue from 'vue'
import VueResource from 'vue-resource';
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.use(VueResource);

Vue.http.options.root = "https://stock-trader-eldin.firebaseio.com/";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
