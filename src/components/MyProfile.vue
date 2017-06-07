<template>
    <md-layout id="myProfile" md-column>
        <md-toolbar>
            <md-button class="md-icon-button" @click.native="goback">
                <md-icon>arrow_back</md-icon>
            </md-button>
            <h2 class="md-title">My Profile</h2>
        </md-toolbar>
        <md-list>
            <md-list-item @click.native="selectAvatar">
                <md-ink-ripple />
                <div class="md-list-text-container">
                    <div class="md-title">
                        Profile Photo
                    </div>
                </div>
                <md-avatar class="md-large">
                    <img :src="currentUser.avatar" alt="Avatar">
                </md-avatar>
                <md-divider></md-divider>
            </md-list-item>
            <md-list-item @click.native="openDialog('editName')">
                <md-ink-ripple />
                <div class="md-list-text-container">
                    <div class="md-title">
                        Name
                    </div>
                </div>
                <div class="md-list-text-container">
                    <div class="md-title value">
                        {{currentUser.name}}
                    </div>
                </div>
                <md-divider></md-divider>
            </md-list-item>
            <md-list-item>
                <md-ink-ripple />
                <div class="md-list-text-container">
                    <div class="md-title">
                        Gender
                    </div>
                </div>
                <div class="md-list-text-container">
                    <div class="md-title value">
                        {{currentUser.gender===0?'Male':'Female'}}
                    </div>
                </div>
                <md-divider></md-divider>
            </md-list-item>
            <md-list-item>
                <md-ink-ripple />
                <div class="md-list-text-container">
                    <div class="md-title">
                        ID
                    </div>
                </div>
                <div class="md-list-text-container">
                    <div class="md-title value">
                        {{currentUser.account}}
                    </div>
                </div>
                <md-divider></md-divider>
            </md-list-item>
        </md-list>
        <input ref="fileInput" v-show="false" @change="selectFile" type="file" accept="image/*" />
        <md-dialog-prompt v-model.lazy.trim()="name" md-title="Edit Name" md-input-maxlength="24" md-ok-text="Done" md-cancel-text="Cancel" @close="editNameOnClose" ref="editName">
        </md-dialog-prompt>
    
    </md-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'myProfile',
  data() {
    return {
      avatarFile: null,
      name: null,
    };
  },
  computed: mapState([
    'currentUser',
  ]),
  created() {
    this.name = this.currentUser.name;
  },
  methods: {
    ...mapActions([
      'updateAvatar',
      'updateNickname',
    ]),
    goback() {
      this.$router.go(-1);
    },
    selectFile(e) {
      this.avatarFile = e.target.files[0];
    },
    selectAvatar() {
      this.$refs.fileInput.click();
    },
    async uploadAvatar(avatarFile) {
      this.updateAvatar(avatarFile);
    },
    openDialog(ref) {
      this.$refs[ref].open();
    },
    editNameOnClose(e) {
      if (e === 'ok' && this.name && this.name.length > 0) {
        this.updateNickname({ name: this.name });
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
.value {
    text-align: right;
    color: #9e9e9e;
}
</style>
