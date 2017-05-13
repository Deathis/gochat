<template>
    <md-bottom-bar md-shift @change="pageJump">
        <md-bottom-bar-item md-icon="chat" :md-active="routeName==='chat'">Chats</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="contacts" :md-active="routeName==='contact'">Contacts</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="explore" :md-active="routeName==='explore'">Explore</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="person" :md-active="routeName==='me'">Me</md-bottom-bar-item>
    </md-bottom-bar>
</template>

<script>
export default {
  name: 'bottomBar',
  methods: {
    pageJump(index) {
      let routeName = 'home';
      switch (index) {
        case 0:
          routeName = 'chat';
          break;
        case 1:
          routeName = 'contact';
          break;
        case 2:
          routeName = 'explore';
          break;
        case 3:
          routeName = 'me';
          break;
        default:
          break;
      }
      this.$router.push({ name: routeName });
    },
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
  },
};
</script>
