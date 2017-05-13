<template>
  <div id="app">
    <TopBar></TopBar>
    <div id="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar';
import BottomBar from '@/components/BottomBar';

export default {
  name: 'app',
  components: {
    TopBar,
    BottomBar,
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
  display: flex;
  flex-flow: column nowrap;
}

#container { 
    flex: 1; 
}
</style>
