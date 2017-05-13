<template>
    <div id="me">
        <md-list>
            <md-list-item>
                <md-ink-ripple />
                <md-avatar class="md-large">
                    <img src="https://placeimg.com/40/40/people/1" alt="Avatar">
                </md-avatar>
                <div class="md-list-text-container">
                    <div class="md-title">Ali Connors</div>
                    <div>ID:206312</div>
                </div>
            </md-list-item>
        </md-list>
        <md-list>
            <md-list-item>
                <md-ink-ripple />
                <md-button class="md-icon-button">
                    <md-icon>photo</md-icon>
                </md-button>
                <span>My Posts</span>
                <md-divider></md-divider>
            </md-list-item>
            <md-list-item>
                <md-ink-ripple />
                <md-button class="md-icon-button">
                    <md-icon>bookmark</md-icon>
                </md-button>
                <span>Favorites</span>
            </md-list-item>
        </md-list>
        <md-list>
            <md-list-item>
                <md-ink-ripple />
                <md-button class="md-icon-button">
                    <md-icon>settings</md-icon>
                </md-button>
                <span>Settings</span>
                <md-divider></md-divider>
            </md-list-item>
        </md-list>
    </div>
</template>


<style lang="scss" scoped>
#me {
    height: 100%;
    background-color: #eeeeee;
}

.md-avatar {
    border-radius: 0;
}

.md-list {
    margin-bottom: 10px;
    padding: {
        top: 0;
        bottom: 0;
    }
}

span {
    flex: 1;
}
</style>
