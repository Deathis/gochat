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
    if (User.current()) {
      this.updateCurrentUser(User.current());
      this.updateContactList();
      this.listenToMessage();
    }
  },
  methods: mapActions([
    'updateCurrentTheme',
    'updateCurrentUser',
    'updateContactList',
    'updateConversations',
    'listenToMessage',
  ]),
  watch: {
    $route: function hendler(val) {
      if (val.name === 'me') {
        User.current().fetch();
      }
      this.updateCurrentUser(User.current());
      if (val.name === 'contact') {
        this.updateContactList();
      }
      if (val.name === 'chat') {
        this.updateConversations({ account: User.current().get('username') });
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
