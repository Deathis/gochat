<template>
    <md-layout id="myProfile" md-column>
        <md-toolbar>
            <md-button class="md-icon-button" @click.native="goback">
                <md-icon>arrow_back</md-icon>
            </md-button>
            <h2 class="md-title">My Profile</h2>
        </md-toolbar>
        <md-list>
            <md-list-item>
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
            <md-list-item>
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
    </md-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'myProfile',
  computed: mapState([
    'currentUser',
  ]),
  methods: {
    goback() {
      this.$router.go(-1);
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
