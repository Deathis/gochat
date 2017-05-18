import Vue from 'vue';
import Router from 'vue-router';
import ChatList from '@/components/ChatList';
import ContactList from '@/components/ContactList';
import Explore from '@/components/Explore';
import Me from '@/components/Me';
import Home from '@/components/Home';
import Chat from '@/components/Chat';
import Profile from '@/components/Profile';

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
        {
          path: 'explore',
          name: 'explore',
          component: Explore,
        },
        {
          path: 'me',
          name: 'me',
          component: Me,
        },
      ],
    },
    {
      path: '/chatting',
      name: 'chatting',
      component: Chat,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
  ],
});
