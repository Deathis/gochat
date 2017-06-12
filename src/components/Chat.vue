<template>
    <md-layout v-if="currentContact" id="chatting" md-column>
        <md-toolbar>
            <md-button class="md-icon-button" @click.native="goback">
                <md-icon>arrow_back</md-icon>
            </md-button>
            <h2 class="md-title">{{currentContact.name}}</h2>
            <md-button class="md-icon-button">
                <md-icon>person</md-icon>
            </md-button>
        </md-toolbar>
        <div id="chat-box" ref="chatBox">
            <Bubble class="md-primary" v-for="record in currentChatRecords" :key="record.id" :avatar="record.from === currentUser.account?currentUser.avatar:currentContact.avatar" :alignRight="record.from === currentUser.account">
                 {{record.content}}
            </Bubble>
        </div>
        <div id="inputContainer">
            <md-button class="md-icon-button">
                <md-icon class="md-primary">keyboard_voice</md-icon>
            </md-button>
            <md-input-container>
                <md-textarea v-model="inputContent"></md-textarea>
            </md-input-container>
            <md-button class="md-icon-button">
                <md-icon class="md-primary">insert_emoticon</md-icon>
            </md-button>
            <md-button class="md-icon-button" :disabled="inputContent.length===0" @click.native="sendMessage">
                <md-icon :class="{'md-primary':inputContent.length>0}">send</md-icon>
            </md-button>
        </div>
    </md-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'chat',
  data() {
    return {
      inputContent: '',
    };
  },
  created() {
    if (!this.currentContact) {
      this.$router.push({ name: 'chat' });
    }
  },
  updated() {
    this.$refs.chatBox.scrollTop = this.$refs.chatBox.scrollHeight;
  },
  methods: {
    ...mapActions([
      'sendChatMessage',
    ]),
    goback() {
      this.$router.push({ name: 'chat' });
    },
    async sendMessage() {
      await this.sendChatMessage({ to: this.currentContact.account, content: this.inputContent });
      this.inputContent = '';
    //   this.$nextTick(() => {
    //     this.$refs.chatBox.scrollTop = this.$refs.chatBox.scrollHeight;
    //   });
    },
  },
  computed: { ...mapState([
    'currentContact',
    'currentUser',
    'chatRecords',
  ]),
    currentChatRecords() {
      const records = this.chatRecords.filter(record =>
      (record.from === this.currentContact.account &&
      record.to === this.currentUser.account) ||
          (record.to === this.currentContact.account &&
        record.from === this.currentUser.account));
      records.sort((a, b) => a.Timestamp - b.Timestamp);
      return records;
    },
    recordIndex() {
      return this.chatRecords.length + 1;
    },
  },
};
</script>


<style lang="scss" scoped>
#chatting {
    height: 100%;
}

h2 {
    flex: 1;
}

#chat-box {
    flex: 1;
    border: {
        bottom: 1px solid #eeeeee;
    }
    background-color: #eeeeee;
    overflow: auto;
    padding: 0 5px;
    &::-webkit-scrollbar {
        display: none;
    }
    display: flex;
    flex-flow: column nowrap;
}

.md-input-container {
    margin: 0;
    padding: {
        top: 8px;
    }
    min-height: 40px;
}

#inputContainer {
    display: flex;
    align-items: flex-end;
}

.md-button {
    margin: 0;
}
</style>
