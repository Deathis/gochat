import Vue from 'vue';
import Router from 'vue-router';
import TalkPanel from '@/components/TalkPanel';
import ContactPanel from '@/components/ContactPanel';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/talk',
      name: 'talk',
      component: TalkPanel,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPanel,
    },
  ],
});
