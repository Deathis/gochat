<template>
  <div id="app">
    <router-view></router-view>
    <keep-alive>
      <router-view name="keepAlive"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Home from '@/components/Home';
import { mapActions } from 'vuex';
import { User } from 'leancloud-storage';

export default {
  name: 'app',
  components: {
    Home,
  },
  created() {
    const theme = localStorage.getItem('currentTheme');
    if (!theme) {
      this.updateCurrentTheme({ name: 'default' });
      this.$material.setCurrentTheme('default');
    } else {
      this.updateCurrentTheme({ name: theme });
      this.$material.setCurrentTheme(theme);
    }
    this.updateCurrentUser(User.current());
    this.updateContactList();
  },
  methods: mapActions([
    'updateCurrentTheme',
    'updateCurrentUser',
    'updateContactList',
  ]),
  watch: {
    $route: function hendler(val) {
      this.updateCurrentUser(User.current());
      if (val.name === 'contact') {
        this.updateContactList();
      }
    },
  },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

#app {
  height: 100%;
}
</style>
