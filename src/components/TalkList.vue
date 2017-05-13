<template>
    <md-list class="md-double-line">
        <md-list-item>
            <md-ink-ripple />
            <md-avatar class="md-large">
                <img src="https://placeimg.com/40/40/people/1" alt="People">
            </md-avatar>
            <div class="md-list-text-container">
                <div class="title">
                    <span class="md-title">Ali Connors</span>
                    <span>Fri</span>
                </div>
                <span>Tody is a good day.</span>
            </div>
            <md-divider></md-divider>
        </md-list-item>
    </md-list>
</template>

<script>
export default {
  name: 'talkList',
};
</script>

<style lang="scss" scoped>
@import '~compass-mixins/compass/css3';

.title {
    @include display-flex;
    @include justify-content(space-between);
}
</style>
