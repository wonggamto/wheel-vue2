<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true }"
            @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
  import Icon from './icon.vue'
  export default {
    name:'GuluButton',
    components:{
      'g-icon': Icon
    },
    data(){
        return{
          disabled:{
            type:Boolean,
            default:false
          }
        }
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(iconPosition) {
          return !(iconPosition !== 'left' && iconPosition !== 'right');
        }
      },

    }
  }
</script>
<style lang="scss" scoped>
    $font-size:14px;
    $button-height:32px;
    $button-bg:white;
    $button-active-bg:#eee;
    $border-radius:4px;
    $color:#333;
    $border-color:#999;
    $border-color-hover:#666;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg)
        }
    }

    .g-button {
        height: $button-height;
        padding: 0 1em;
        font: $font-size;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: $border-color-hover;
        }

        &:active {
            background-color: $button-active-bg;
        }

        &:focus {
            outline: none;
        }

        &:disabled{
            cursor: not-allowed;
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

        > .loading {
            animation: spin 1s infinite linear;
        }
    }
</style>