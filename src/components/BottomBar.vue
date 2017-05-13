<template>
    <md-bottom-bar md-shift @change="pageJump">
        <md-bottom-bar-item md-icon="message" :md-active="path==='/talk'">Massage</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="contacts" :md-active="path==='/contact'">Contacts</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="explore" :md-active="path==='/explore'">Explore</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="person" :md-active="path==='/me'">Me</md-bottom-bar-item>
    </md-bottom-bar>
</template>

<script>
export default {
  name: 'bottomBar',
  methods: {
    pageJump(index) {
      let path = '/';
      switch (index) {
        case 0:
          path = '/talk';
          break;
        case 1:
          path = '/contact';
          break;
        case 2:
          path = '/explore';
          break;
        case 3:
          path = '/me';
          break;
        default:
          break;
      }
      this.$router.push(path);
    },
  },
  computed: {
    path() {
      return this.$route.path;
    },
  },
};
</script>
