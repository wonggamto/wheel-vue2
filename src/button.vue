<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true }">
        <g-icon  class="icon" v-if="g-icon" :name="icon"></g-icon>
        <g-icon name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>

</template>
<script>
  export default {
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(iconPosition) {
          return !(iconPosition !== 'left' && iconPosition !== 'right');
        }
      }
    }
  }
</script>
<style lang="scss">
    .g-button {
        height: var(--button-height);
        padding: 0 1em;
        font: inherit;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        > .icon {
            order: 1;
            margin-left: 0;
            margin-right: 0.1em;
        }

        > .content {
            order: 2;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: 0.1em;
            }

            > .content {
                order: 1;
            }
        }
    }
</style>