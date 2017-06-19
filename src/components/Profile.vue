<template>
    <div id="profile" v-if="currentProfile">
        <md-layout id="chatting" md-column>
            <md-toolbar>
                <md-button class="md-icon-button" @click.native="goback">
                    <md-icon>arrow_back</md-icon>
                </md-button>
                <h2 class="md-title">Profile</h2> 
            </md-toolbar>
            <md-list>
                <md-list-item>
                    <md-avatar class="md-large">
                        <img :src="currentProfile.avatar" alt="Avatar">
                    </md-avatar>
                    <div class="md-list-text-container">
                        <div class="md-title">
                            {{currentProfile.name}}
                            <md-icon :class="{'gender-boy':!!!currentProfile.gender,'gender-girl':!!currentProfile.gender}">person</md-icon>
                        </div>
                        <div>Account:{{currentProfile.account}}</div>
                    </div>
                </md-list-item>
            </md-list>
            <md-list>
                <md-list-item>
                    <md-ink-ripple />
                    <div>Set Remark and Tag</div>
                </md-list-item>
            </md-list>  
            <md-list class="buttonContainer">
                <md-button v-if="isContact" @click.native="gotoChatting" class="md-raised md-primary">Messages</md-button>
                <md-button v-else @click.native="addContact(currentProfile.avUser)" class="md-raised md-primary">Add</md-button>
            </md-list> 
        </md-layout>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'profile',
  created() {
    if (!this.currentProfile) {
      this.$router.push({ name: 'contact' });
    }
  },
  methods: {
    goback() {
      this.updateCurrentProfile(null);
      this.$router.go(-1);
    },
    gotoChatting() {
      this.updateCurrentContact(this.currentProfile);
      this.updateChatRecord();
      this.$router.push({ name: 'chatting' });
    },
    ...mapActions([
      'updateCurrentContact',
      'updateChatRecord',
      'addContact',
      'updateCurrentProfile',
    ]),
  },
  computed: {
    ...mapState([
      'currentProfile',
      'contactList',
    ]),
    isContact() {
      let cb = function cb(contact) {
        return contact.account === this.currentProfile.account;
      };
      cb = cb.bind(this);
      return this.contactList.findIndex(cb) >= 0;
    },
  },
};
</script>


<style lang="scss" scoped>
#profile {
    height: 100%;
    background-color: #eeeeee;

    h2 {
        flex: 1;
    }

    .md-list {
        margin-top: 18px;
        padding: 0;
        .md-list-item {
            .md-avatar {
                border-radius: 0;
            }
            .md-icon {
                font-size: 20px;
            }
        }
    }

    .gender {
        &#{'-boy'} {
            color: #1e88e5;
        }
        &#{'-girl'} {
            color: #ef5350;
        }
    }

    .buttonContainer {
        margin: {
            left: 8px;
            right: 8px;
        }
        ;
        .md-button {
            text-transform: none; 
            margin: 0;
        }
    }
}
</style>
