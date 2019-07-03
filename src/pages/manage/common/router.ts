import Vue from 'vue';
import Router from 'vue-router';
import { PersonList } from '@/modules';
import { HomePage } from '../layout/router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: HomePage,
      children: [
        {
          path: 'person_table',
          name: '人员示例',
          component: PersonList,
        },
        {
          path: 'hello',
          name: '首页示例',
          component: HomePage,
          redirect: '/',
        },
      ],
    },
  ],
});


