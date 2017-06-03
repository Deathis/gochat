<template>
    <md-layout id="settings" md-column>
        <md-toolbar>
            <md-button class="md-icon-button" @click.native="goback">
                <md-icon>arrow_back</md-icon>
            </md-button>
            <h2 class="md-title">Settings</h2>
        </md-toolbar>
        <md-list>
            <md-list-item>
                <md-ink-ripple />
                <div class="md-list-text-container">
                    <div class="md-title">
                        Theme
                    </div>
                </div>
                <md-divider></md-divider>
            </md-list-item>
        </md-list>
        <md-list>
            <md-list-item>
                <md-ink-ripple />
                <div class="md-list-text-container">
                    <div class="md-title">
                        Exit
                    </div>
                </div>
                <md-divider></md-divider>
            </md-list-item>
        </md-list>
    </md-layout>
</template>

<script>
export default {
  name: 'settings',
};
</script>

<style lang="scss" scoped>
#settings {
    height: 100%;
    background-color: #eeeeee;

    .md-list {
        margin-bottom: 10px;
        padding: {
            top: 0;
            bottom: 0;
        }
    }
}
</style>

