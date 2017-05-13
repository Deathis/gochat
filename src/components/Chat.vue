<template>
    <md-layout id="chatting" md-column>
        <md-toolbar>
            <md-button class="md-icon-button" @click.native="goback">
                <md-icon>arrow_back</md-icon>
            </md-button>
            <h2 class="md-title">Julia</h2>
            <md-button class="md-icon-button">
                <md-icon>person</md-icon>
            </md-button>
        </md-toolbar>
        <div id="chat-box">
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
            <md-button class="md-icon-button" :disabled="inputContent.length===0">
                <md-icon :class="{'md-primary':inputContent.length>0}">send</md-icon>
            </md-button>
        </div>
    </md-layout>
</template>

<script>
export default {
  name: 'chat',
  data() {
    return {
      inputContent: '',
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
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
