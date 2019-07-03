import Vue from 'vue';
import App from './App.vue';
import store from './common/store';
Vue.config.productionTip = false;
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill';
import LoginPage from './layout/view/LoginPage.vue';

Vue.use(element);
Vue.component('login-layout', LoginPage);
new Vue({
store,
  render: (h) => h(App),
}).$mount('#app');
