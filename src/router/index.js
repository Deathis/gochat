import Vue from 'vue';
import Router from 'vue-router';
import TalkPanel from '@/components/TalkPanel';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/talk',
      name: 'talk',
      component: TalkPanel,
    },
  ],
});
