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
                    <span>{{new Date(getLastChatRecord(chat.account).Timestamp).toLocaleString()}}</span>
                </div>
                <span><template v-if="getNewMsgCount(chat.account) > 0">[{{getNewMsgCount(chat.account)}} message(s)]</template> {{getLastChatRecord(chat.account).content}}</span>
            </div>
            <md-divider></md-divider>
        </md-list-item>
    </md-list>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'chatList',
  methods: {
    showChatting(contact) {
      this.updateCurrentContact(contact);
      this.updateChatRecord(contact);
      this.$router.push({ name: 'chatting' });
    },

    updateCurrentContact(contact) {
      this.$store.dispatch('updateCurrentContact', contact);
    },
    getNewMsgCount(account) {
      return this.$store.state.chatRecords.filter(record =>
                                           record.from === account &&
                                            !record.read).length;
    },
    getLastChatRecord(account) {
      return this.$store.state.chatRecords.filter(record =>
                                           record.from === account || record.to === account)
                                    .sort((a, b) => b.Timestamp - a.Timestamp)[0];
    },
    ...mapActions([
      'updateChatRecord',
    ]),
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
