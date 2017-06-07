<template>
  <div id="user-avatar">
    <md-toolbar>
      <h2 class="md-title">Avatar</h2>
    </md-toolbar>
  
    <md-progress v-show="uploadStatus === 'uploading'" md-indeterminate></md-progress>
    <div class="avatar">
      <span class="md-subheading">Set your avatar</span>
      <img :src="currentUser.avatar?currentUser.avatar:'https://placeimg.com/40/40/people/1'" @click="selectAvatar" alt="Avatar">
    </div>
    <div class="buttoncontainer">
      <md-button class="md-raised md-primary" :disabled="uploadStatus === 'uploading'">next</md-button>
    </div>
    <input ref="fileInput" v-show="false" @change="selectFile" type="file" accept="image/*" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'userAvatar',
  data() {
    return {
      avatarFile: null,
      uploadStatus: 'finished',
    };
  },
  computed: mapState([
    'currentUser',
  ]),
  methods: {
    ...mapActions([
      'updateAvatar',
    ]),
    selectFile(e) {
      this.avatarFile = e.target.files[0];
    },
    selectAvatar() {
      this.$refs.fileInput.click();
    },
    async uploadAvatar(avatarFile) {
      this.uploadStatus = 'uploading';
      try {
        await this.updateAvatar(avatarFile);
        this.uploadStatus = 'finished';
      } catch (e) {
        this.uploadStatus = 'failed';
      }
    },
  },
  watch: {
    avatarFile: function update(val) {
      if (val) {
        this.uploadAvatar(val);
      }
    },
  },
};
</script>

<style lang="scss">
#user-avatar {
  height: 100%;
  display: flex;
  flex-flow: column nowrap;

  .avatar {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    flex: 1;
    .md-subheading {
      text-align: center;
      margin: 12px 0;
    }
    img {
      height: 8em;
      max-width: 8em;
      max-height: 8em;
      cursor: pointer;
    }
  }

  .buttoncontainer {
    flex-basis: 20%;
    text-align: center;
  }
}
</style>
