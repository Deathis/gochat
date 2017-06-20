<template>
    <md-list class="md-double-line">
        <md-list-item :class="{'small-dots':chat.conversation.unreadMessagesCount}" :unreadcount="chat.conversation.unreadMessagesCount" v-for="chat in chatList" :key="chat.account" @click.native="showChatting(chat)">
            <md-ink-ripple />
            <md-avatar class="md-large">
                <img :src="chat.avatar" alt="Avatar">
            </md-avatar>
            <div class="md-list-text-container">
                <div class="title">
                    <span class="md-title">{{chat.name}}</span>
                    <span>{{chat.conversation.lastMessageAt?chat.conversation.lastMessageAt.toLocaleString():''}}</span>
                </div>
                <span>
                    {{chat.conversation.lastMessage?chat.conversation.lastMessage.text:''}}
                </span>
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
      this.updateChatRecord();
      this.markRead(this.currentContact);
      this.$router.push({ name: 'chatting' });
    },
        // getNewMsgCount(account) {
        //   return this.$store.state.chatRecords.filter(record =>
        //             record.from === account &&
        //             !record.read).length;
        // },
    ...mapActions([
      'updateChatRecord',
      'updateCurrentContact',
      'getChatRecords',
      'markRead',
    ]),
  },
  computed: mapState([
    'chatList',
    'currentUser',
    'currentContact',
  ]),
};
</script>

<style lang="scss" scoped>
.title {
    display: flex;
    justify-content: space-between;
}

.md-list-item {
    .md-avatar {
        border-radius: 0;
    }
}

.small-dots {
    &::before {
        content: attr(unreadcount);
        border-radius: 50% 50%;
        position: relative;
        float: left;
        top: 2px;
        left: 89px;
        z-index: 99;
        margin: -5px 0px -5px -18px;
        width: 18px;
        height: 18px;
        background-color: #f4511e;
        text-align: center;
        font-size: xx-small;
    }
}
</style>
