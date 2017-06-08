import Vue from 'vue';
import Router from 'vue-router';
import ChatList from '@/components/ChatList';
import ContactList from '@/components/ContactList';
import Explore from '@/components/Explore';
import Me from '@/components/Me';
import Home from '@/components/Home';
import Chat from '@/components/Chat';
import Profile from '@/components/Profile';
import MyProfile from '@/components/MyProfile';
import Settings from '@/components/Settings';
import Login from '@/components/Login';
import UserAvatar from '@/components/UserAvatar';
import AddContacts from '@/components/AddContacts';
import { User } from 'leancloud-storage';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      components: { keepAlive: Home },
      meta: { requiresAuth: true },
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
      components: { keepAlive: Chat },
      meta: { requiresAuth: true },
    },
    {
      path: '/profile',
      name: 'profile',
      components: { keepAlive: Profile },
      meta: { requiresAuth: true },
    },
    {
      path: '/myprofile',
      name: 'myProfile',
      component: MyProfile,
      meta: { requiresAuth: true },
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/user-avatar',
      name: 'userAvatar',
      component: UserAvatar,
      meta: { requiresAuth: true },
    },
    {
      path: '/add-contacts',
      name: 'addContacts',
      component: AddContacts,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({ name: 'chat' });
  }

  if (to.name === 'root' || to.name === 'login') {
    const currentUser = User.current();
    if (currentUser) {
      next({ name: 'chat' });
    } else {
      next();
    }
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    const currentUser = User.current();
    if (!currentUser) {
      next({ name: 'root' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
