import Vue from 'vue';
import Router from 'vue-router';
import TalkList from '@/components/TalkList';
import ContactList from '@/components/ContactList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/talk',
      name: 'talk',
      component: TalkList,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactList,
    },
  ],
});
