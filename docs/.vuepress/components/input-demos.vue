<template>
    <div>
        <h2>常见输入框预览</h2>
        <g-input></g-input>
        <p>代码</p>
        <pre class="language-html" v-html=" Prism.highlight(normal,Prism.languages.html,'html') "/>
        <g-input disable></g-input>
        <p>代码</p>
        <pre class="language-html" v-html=" Prism.highlight(disabled_content,Prism.languages.html,'html') "/>
        <g-input error="信息不正确"></g-input>
        <p>代码</p>
        <pre class="language-html" v-html=" Prism.highlight(error,Prism.languages.html,'html') "/>
        <g-input readonly value="value"></g-input>
        <p>代码</p>
        <pre class="language-html" v-html=" Prism.highlight(readonly,Prism.languages.html,'html') "/>
        <h2>双向绑定输入框预览</h2>
        <g-input v-model="model_value"></g-input>
        <div>model_value:{{model_value}}</div>
    </div>
</template>

<script>
    import Input from '../../../src/input'
    import 'prismjs'
    import 'prismjs/themes/prism-okaidia.css'
    const Prism = window.Prism
    export default {
      components:{
        'g-input':Input,
      },
      data(){
        return{
          disabled:false,
          Prism,
          value:'readonly',
          model_value:'123',
          normal:`
            <g-input></g-input>
          `.replace(/\t| +/g, "").trim(),
          error:`
            <g-input error="信息不正确"></g-input>
          `.replace(/\t| +/g, " ").trim(),
          disabled_content:`
            <g-input disable></g-input>
          `.replace(/\t| +/g, " ").trim(),
          readonly:`
            <g-input readonly value="value"></g-input>
          `.replace(/\t| +/g, " ").trim(),
          icon_position:`
            <g-button icon="setting" icon-position="right">按钮</g-button>
          `.replace(/\t| +/g, " ").trim(),
          button_group:
            `
            <g-button-group>
                <g-button icon="left">左</g-button>
                <g-button>中</g-button>
                <g-button icon="right">右</g-button>
           </g-button-group>
          `.replace(/\t| +/g, " ").trim(),
        }
      }
    }

</script>