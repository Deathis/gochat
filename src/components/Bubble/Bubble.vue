<template>
    <div class="bubble" :class="[themeClass, alignRight?'bubble-right':'' ]">
        <md-avatar v-if="!alignRight">
            <img :src="avatar" alt="Avatar">
        </md-avatar>
        <div :class="replyClassObj">
            <div class="content">
                <slot></slot>
            </div>
        </div>
        <md-avatar v-if="alignRight">
            <img :src="avatar" alt="Avatar">
        </md-avatar>
    </div>
</template>

<script>
import theme from 'vue-material/src/core/components/mdTheme/mixin';

export default {
  name: 'Bubble',
  props: {
    alignRight: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default: '',
    },
  },
  mixins: [theme],
  computed: {
    replyClassObj() {
      return {
        reply: true,
        'reply-left': !this.alignRight,
        'reply-right': this.alignRight,
      };
    },
  },
};
</script>


<style lang="scss">
.bubble {
    display: flex;
    margin-top: 10px;
    flex-shrink: 0;

    &#{'-right'} {
        justify-content: flex-end;
    }
}

.md-avatar {
    border-radius: 0;
    margin: 0;
}

.reply {
    display: flex;
    max-width: 75%;

    .content {
        max-width: 100%;
        background-color: #ffffff;
        border-radius: 10px;
        word-wrap: break-word;
        word-break: normal;
        padding: 10px;
    }

    &#{'-left'} {
        justify-content: flex-start;

        &::before {
            content: '';
            width: 0;
            height: 0;
            border: 5px solid;
            border-color: transparent transparent #ffffff #ffffff;
            position: relative;
            top: 14px;
            right: -5px;
            transform: rotate(45deg);
            font-size: 0;
        }
    }

    &#{'-right'} {
        justify-content: flex-end;

        &::after {
            content: '';
            width: 0;
            height: 0;
            border: 5px solid; 
            position: relative;
            top: 14px;
            left: -5px;
            transform: rotate(45deg);
            font-size: 0;
        } 
    }
}
</style>
