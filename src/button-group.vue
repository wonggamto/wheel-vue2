<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
      name:'GuluButtonGroup',
      mounted() {
        for(let node of this.$el.children){
          let name = node.nodeName.toLowerCase()
          if(name !== 'button'){
            console.warn(`g-button-group的子元素应该全是g-button，
            但是你写的是${name},如果你想要重新添加css，请无视这条警告`)
          }
        }
      }
    }
</script>
<style lang="scss" scoped>
    $button-height: 32px;
    $font-size: 14px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    .g-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .g-button {
            border-radius: 0;

            &:not(:first-child) {
                margin-left: -1px;
            }

            &:first-child {
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }

            &:last-child {
                border-top-right-radius: $border-radius;
                border-bottom-right-radius:$border-radius;
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
</style>