<template>
    <md-dialog ref="theme">
        <md-dialog-title>Theme</md-dialog-title>
    
        <md-dialog-actions> 
            <md-button-toggle md-single>
                <md-button md-theme="default" class="md-primary" :class="{'md-toggle':currentTheme==='default'}" @click.native="closeDialog('default')">Default</md-button>
                <md-button md-theme="green" class="md-primary" :class="{'md-toggle':currentTheme==='green'}" @click.native="closeDialog('green')">Green</md-button>
                <md-button md-theme="teal" class="md-primary" :class="{'md-toggle':currentTheme==='teal'}" @click.native="closeDialog('teal')">Teal</md-button> 
                <md-button md-theme="purple" class="md-primary" :class="{'md-toggle':currentTheme==='purple'}" @click.native="closeDialog('purple')">Purple</md-button> 
            </md-button-toggle>
        </md-dialog-actions>
    </md-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'theme',
  methods: {
    closeDialog(theme) {
      this.updateCurrentTheme({ name: theme });
      this.$material.setCurrentTheme(theme);
      this.$refs.theme.close();
    },
    ...mapActions([
      'updateCurrentTheme',
    ]),
  },
  computed: mapState([
    'currentTheme',
  ]),
};
</script>
