import Vue from 'vue';
import Router from 'vue-router';
import { PersonView } from '@/modules';
import DescribePage from '../describe/DescribePage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: DescribePage,
    },
    {
      path: '/person_table',
      name: '人员示例',
      component: PersonView,
    },
    {
      path: '/hello',
      name: '首页示例',
      component: DescribePage,
    },
  ],
});


