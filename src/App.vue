<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Home from '@/components/Home';

export default {
  name: 'app',
  components: {
    Home,
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
