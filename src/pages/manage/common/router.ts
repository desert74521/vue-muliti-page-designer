import Vue from 'vue';
import Router from 'vue-router';
import { PersonPage } from '../person/router';
import { HomePage } from '../layout/router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children: [
        {
          path: 'person_table',
          name: 'person_table',
          component: PersonPage,
        },
        {
          path: 'hello',
          name: 'hello',
          component: HomePage,
          redirect: '/',
        },
      ],
    },
  ],
});


