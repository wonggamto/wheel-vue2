<template>
    <button class="g-button">
        <slot></slot>
        <svg class="icon">
            <use :xlink:href=`#icon-${icon}`></use>
        </svg>
    </button>
</template>
<script>
  export default {
    props:['icon']
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
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
    }
</style>