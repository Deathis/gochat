<template>
    <md-list class="md-double-line">
        <md-list-item v-for="chat in chatList" :key="chat.account" @click.native="showChatting(chat)">
            <md-ink-ripple />
            <md-avatar class="md-large">
                <img :src="chat.avatar" alt="Avatar">
            </md-avatar>
            <div class="md-list-text-container">
                <div class="title">
                    <span class="md-title">{{chat.name}}</span>
                    <span>Fri</span>
                </div>
                <span>Tody is a good day.</span>
            </div>
            <md-divider></md-divider>
        </md-list-item>
    </md-list>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'chatList',
  methods: {
    showChatting(contact) {
      this.updateCurrentContact(contact);
      this.$router.push({ name: 'chatting' });
    },

    updateCurrentContact(contact) {
      this.$store.dispatch('updateCurrentContact', contact);
    },
  },
  computed: mapState({
    chatList: 'chatList',
  }),
};
</script>

<style lang="scss" scoped>
.title {
    display: flex;
    justify-content: space-between;
}
</style>
