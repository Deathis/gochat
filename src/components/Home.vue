<template>
    <div id="home">
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
  name: 'home',
  components: {
    TopBar,
    BottomBar,
  },
};
</script>

<style lang="scss" scoped>
#home {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
}

#container {
    flex: 1;
    overflow: auto;
}
</style>

