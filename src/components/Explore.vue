<template>
    <md-list>
        <md-list-item>
            <md-ink-ripple></md-ink-ripple>
            <md-button class="md-icon-button">
                <md-icon>store</md-icon>
            </md-button>
            <span>Store</span>
        </md-list-item>
        <md-list-item>
            <md-ink-ripple></md-ink-ripple>
            <md-button class="md-icon-button">
                <md-icon>theaters</md-icon>
            </md-button>
            <span>Theaters</span>
            <md-divider class="md-inset"></md-divider>
        </md-list-item>
        <md-list-item>
            <md-ink-ripple></md-ink-ripple>
            <md-button class="md-icon-button">
                <md-icon>translate</md-icon>
            </md-button>
            <span>Translate</span>
        </md-list-item>
    </md-list>
</template>

<style lang="scss" scoped>
span {
    flex: 1;
}

ul.md-list {
    background-color: #eeeeee;
    padding-top: 0;
}

.md-list-item {
    background-color: #fff;
    &:nth-child(1) {
        margin-bottom: 8px;
    }
}
</style>
