import Vue from 'vue';
import Router from 'vue-router';
import TalkList from '@/components/TalkList';
import ContactList from '@/components/ContactList';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'talk',
          name: 'talk',
          component: TalkList,
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactList,
        },
      ],
    },
  ],
});
