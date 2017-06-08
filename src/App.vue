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

    User.current().fetch().then((currentUser) => {
      const user = {
        account: currentUser.get('username'),
        name: currentUser.get('nickname'),
        gender: currentUser.get('gender') || 0,
        avatar: currentUser.get('avatar') ? currentUser.get('avatar').thumbnailURL(72, 72) : undefined,
      };
      this.updateCurrentUser(user);
    });
  },
  methods: mapActions([
    'updateCurrentTheme',
    'updateCurrentUser',
  ]),
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
