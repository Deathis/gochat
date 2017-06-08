<template>
    <md-layout id="add-contacts" md-column>
        <md-toolbar>
            <md-button class="md-icon-button" @click.native="goback">
                <md-icon>arrow_back</md-icon>
            </md-button>
            <h2 class="md-title">Add Contacts</h2>
        </md-toolbar>
        <md-input-container>
            <md-input v-model.lazy="searchText" v-focus placeholder="Search contact by gochat account"></md-input>
        </md-input-container>

        <md-list class="md-inset md-triple-line">
            <md-list-item v-if="contact" @click.native="gotoProfile">
                <md-ink-ripple />
                <md-avatar>
                    <img :src="contact.avatar" alt="Avatar">
                </md-avatar>
                <div class="md-list-text-container">
                    <span>{{contact.name}}</span>
                </div>
                <md-divider></md-divider>
            </md-list-item>
            
            <md-list-item class="not-found" v-else-if="searchText&&!contact">
                <div class="md-list-text-container">
                    <span>User not found</span>
                </div>
            </md-list-item>
        </md-list>
    </md-layout>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'addContats',
  data() {
    return {
      searchText: '',
      contact: null,
    };
  },
  methods: {
    ...mapActions([
      'searchContact',
      'updateCurrentProfile',
    ]),
    goback() {
      this.$router.go(-1);
    },
    gotoProfile() {
      this.updateCurrentProfile(this.contact);
      this.$router.push({ name: 'profile' });
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
  watch: {
    searchText: async function handler(val) {
      if (val) {
        const avUser = await this.searchContact({ account: val });
        if (avUser) {
          this.contact = {
            avUser,
            account: avUser.get('username'),
            name: avUser.get('nickname'),
            gender: avUser.get('gender'),
            avatar: avUser.get('avatar') ? avUser.get('avatar').thumbnailURL(72, 72) : undefined,
          };
        } else {
          this.contact = null;
        }
      }
    },
  },
};
</script>

<style lang="scss">
#add-contacts {
    .md-input-container {
        width: 80%;
        align-self: center;
    }

    .not-found {
        .md-list-text-container {
            align-items: center;
        }
    }
}
</style>
