import Vue from 'vue';
import Router from 'vue-router';
import ChatList from '@/components/ChatList';
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
          path: 'chat',
          name: 'chat',
          component: ChatList,
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
