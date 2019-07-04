import Vue from 'vue';
import HomePage from './layout/HomePage.vue';
import store from './common/store';
Vue.config.productionTip = false;
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill';

Vue.use(element);
new Vue({
  store,
  render: (h) => h(HomePage),
}).$mount('#app');
