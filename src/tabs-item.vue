<template>
    <div class="tabs-item" @click="onClick" :class="classes"
         :data-name="name">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'GuluTabsItem',
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
    created() {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name;
        })
      }
    },
    computed: {
      classes() {
        return {
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    methods: {
      onClick() {
        if (this.disabled) {return}
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
        this.$emit('click',this)
      }
    }
  }
</script>
<style lang="scss" scoped>
    $blue: blue;
    $disabled-text-color: grey;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        height: 100%;
        cursor: pointer;
        align-items: center;
        display: flex;

        &.disabled {
            color: $disabled-text-color;
            cursor: not-allowed;
        }

        &.active {
            color: $blue;
            font-weight: bold;
        }
    }
</style>