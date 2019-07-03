import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill';

Vue.use(element);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
