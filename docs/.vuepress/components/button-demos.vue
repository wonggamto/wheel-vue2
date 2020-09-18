<template>
    <div>
        <h2>单个按钮预览</h2>
        <g-button>按钮</g-button>
        <p>代码</p>
        <pre class="language-html" v-html=" Prism.highlight(normal,Prism.languages.html,'html') "/>
        <g-button loading >按钮</g-button>
        <p>代码</p>
        <pre class="language-html" v-html=" Prism.highlight(loading,Prism.languages.html,'html')" />
        <g-button disabled >按钮</g-button>
        <p>代码</p>
        <pre class="language-html" v-html=" Prism.highlight(disabled_content,Prism.languages.html,'html')" />
        <g-button icon="setting">按钮</g-button>
        <p>代码</p>
        <pre class="language-html" v-html=" Prism.highlight(icon,Prism.languages.html,'html')" />
        <g-button icon="setting" icon-position="right">按钮</g-button>
        <p>代码</p>
        <pre class="language-html" v-html=" Prism.highlight(icon_position,Prism.languages.html,'html')" />
        <h2>按钮组预览</h2>
        <g-button-group>
            <g-button icon="left">左</g-button>
            <g-button>中</g-button>
            <g-button icon="right">右</g-button>
        </g-button-group>
        <p>代码</p>
        <pre class="language-html" v-html=" Prism.highlight(button_group,Prism.languages.html,'html')" />
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import ButtonGroup from '../../../src/button-group'
    import 'prismjs'
    import 'prismjs/themes/prism-okaidia.css'
    const Prism = window.Prism
    export default {
      components:{
        'g-button':Button,
        'g-button-group':ButtonGroup
      },
      data(){
        return{
          disabled:false,
          Prism,
          normal:`
            <g-button>按钮</g-button>
          `.replace(/\t| +/g, "").trim(),
          loading:`
            <g-button loading>按钮</g-button>
          `.replace(/\t| +/g, " ").trim(),
          disabled_content:`
            <g-button disabled>按钮</g-button>
          `.replace(/\t| +/g, " ").trim(),
          icon:`
            <g-button icon="setting">按钮</g-button>
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