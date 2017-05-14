<template>
    <div :class="bubbleClassObj">
        <md-avatar v-if="!right">
            <img src="https://placeimg.com/40/40/people/1" alt="Avatar">
        </md-avatar>
        <div :class="replyClassObj">
            <div class="content">
                <slot></slot>
            </div>
        </div>
        <md-avatar v-if="right">
            <img src="https://placeimg.com/40/40/people/1" alt="Avatar">
        </md-avatar>
    </div>
</template>

<script>
export default {
  name: 'chatBubble',
  props: {
    right: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    bubbleClassObj() {
      return {
        bubble: true,
        'bubble-right': this.right,
      };
    },
    replyClassObj() {
      return {
        reply: true,
        'reply-left': !this.right,
        'reply-right': this.right,
      };
    },
  },
};
</script>


<style lang="scss" scoped>
.bubble {
    display: flex;
    margin-top: 10px;

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
            border-color: #4caf50 #4caf50 transparent transparent;
            position: relative;
            top: 14px;
            left: -5px;
            transform: rotate(45deg);
            font-size: 0;
        }

        .content {
            background-color: #4caf50;
        }
    }
}
</style>
