<template>
    <md-list class="md-double-line">
        <md-list-item :class="{'small-dots':chat.conversation.unreadMessagesCount}" v-for="chat in chatList" :key="chat.account" @click.native="showChatting(chat)">
            <md-ink-ripple />
            <md-avatar class="md-large">
                <img :src="chat.avatar" alt="Avatar">
            </md-avatar>
            <div class="md-list-text-container">
                <div class="title">
                    <span class="md-title">{{chat.name}}</span>
                    <span>{{chat.conversation.lastMessageAt.toLocaleString()}}</span>
                </div>
                <span>
                    <template v-if="chat.conversation.unreadMessagesCount">[{{chat.conversation.unreadMessagesCount}} message(s)]</template> 
                    {{chat.conversation.lastMessage?chat.conversation.lastMessage._lctext:''}}
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
        content: '';
        border: 5px solid #f4511e;
        border-radius: 50% 50%;
        position: relative;
        float: left;
        top: 10px;
        left: 78px;
        z-index: 99;
        margin: -5px;
    }
}
</style>
