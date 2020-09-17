<template>
    <div>
        <g-button>按钮1</g-button>

        <g-button icon="setting">按钮2</g-button>
        <g-button :loading="true">按钮3</g-button>
        <g-button disabled>按钮4</g-button>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    export default {
      components:{
        'g-button':Button
      }
    }
</script>