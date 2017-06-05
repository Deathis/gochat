<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Home from '@/components/Home';
import { mapActions } from 'vuex';

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
  },
  methods: mapActions([
    'updateCurrentTheme',
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
