<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'GuluToast'
  }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $line-height: 1.8;
    $toast-height: 40px;
    $toast-bg:rgba(0,0,0,0.75);
    .toast {
        font-size: $font-size;
        line-height: $line-height;
        height: $toast-height;
        background:$toast-bg ;
        border-radius: 4px;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5) ;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        color:white;
        padding:16px;
    }
</style>