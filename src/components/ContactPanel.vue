<template>
    <div id="contact">
        <Top></Top>
        <ContactList class="contact-list"></ContactList>
        <BottomBar></BottomBar>
    </div>
</template>

<script>
import Top from '@/components/TopBar';
import ContactList from '@/components/ContactList';
import BottomBar from '@/components/BottomBar';

export default {
  name: 'contactPanel',
  components: {
    Top,
    ContactList,
    BottomBar,
  },
};
</script>

<style lang="scss" scoped>
@import '~compass-mixins/compass/css3';

#contact {
    height: 100%;
    @include display-flex;
    @include flex-flow(column nowrap);
    .contact-list {
        flex: 1;
    }
}
</style>
