<template>
    <md-toolbar>
        <span class="md-title">gochat</span>
        <md-button class="md-icon-button">
            <md-icon>search</md-icon>
        </md-button>
    
        <md-menu  md-size="4" md-offset-x="0" md-offset-y="63"> 
            <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>add</md-icon>
            </md-button>

            <md-menu-content>
                <md-menu-item class="md-primary" disabled>
                    <md-icon>chat_bubble</md-icon>
                    <span>Group Chat</span>
                </md-menu-item>
    
                <md-menu-item class="md-primary" @click.native="routeToAddContacts">
                    <md-icon>person_add</md-icon>
                    <span>Add Contacts</span>
                </md-menu-item>
     
            </md-menu-content>
        </md-menu>
    </md-toolbar>
</template>

<script>
export default {
  name: 'topBar',
  methods: {
    routeToAddContacts() {
      this.$router.push({ name: 'addContacts' });
    },
  },
};
</script>

<style lang="scss" scoped>
span {
    flex: 1;
}
</style>

