// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import App from './App';
import router from './router';
import store from './store';
import Bubble from './components/Bubble';

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(Bubble);

Vue.material.registerTheme({
  green: {
    primary: 'green',
    accent: 'yellow',
  },
  teal: {
    primary: 'blue',
    accent: 'pink',
  },
  purple: {
    primary: 'purple',
    accent: 'orange',
  },
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
