<template>
    <div>
        <g-button>按钮1</g-button>
        <g-button icon="setting">按钮2</g-button>
        <g-button :loading="true" icon-position="right">按钮3</g-button>
        <g-button disabled>按钮4</g-button>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>
<script>
  import Button from '../../../src/button'

  export default {
    components: {
      'g-button': Button
    },
    data() {
      return {
        content: `
        <g-button>按钮1</g-button>
        <g-button icon="setting">按钮2</g-button>
        <g-button :loading="true" icon-position="right">按钮3</g-button>
        <g-button disabled>按钮4</g-button>
        `
      }
    }
  }
</script>