<template>
    <md-list>
        <md-list-item v-for="contact in contactList" :key="contact.account" @click.native="gotoProfile(contact)">
            <md-ink-ripple />
            <md-avatar class="md-large">
                <img :src="contact.avatar" alt="Avatar">
            </md-avatar>
            <div class="md-list-text-container">
                <span class="md-title">{{contact.name}}</span>
                <md-divider></md-divider>
            </div>
        </md-list-item>
    </md-list>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'contactList',
  computed: mapState({
    contactList: 'contactList',
  }),
  methods: {
    gotoProfile(profile) {
      this.updateCurrentProfile(profile);
      this.$router.push({ name: 'profile' });
    },
    ...mapActions([
      'updateCurrentProfile',
    ]),
  },
};
</script>
