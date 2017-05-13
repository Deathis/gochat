<template>
  <div id="talk">
    <Top></Top>
    <TalkList class="talk-list"></TalkList>
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import Top from '@/components/TopBar';
import TalkList from '@/components/TalkList';
import BottomBar from '@/components/BottomBar';

export default {
  name: 'talkPanel',
  components: {
    Top,
    TalkList,
    BottomBar,
  },
};
</script>

<style lang="scss" scoped>
@import '~compass-mixins/compass/css3';

#talk {
  height: 100%;
  @include display-flex;
  @include flex-flow(column nowrap);
  .talk-list {
    flex: 1;
  }
}
</style>
