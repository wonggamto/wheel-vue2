<template>
    <div>
        <h2>标签页预览</h2>
        <g-tabs selected="true">111
            <g-tabs-head>222</g-tabs-head>
            <g-tabs-body>333
                <g-tabs-pane name="aaa">4444</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div>
</template>

<script>
    import Tabs from '../../../src/tabs'
    import TabsBody from '../../../src/tabs-body'
    import TabsHead from '../../../src/tabs-head'
    import TabsPane from '../../../src/tabs-pane'
    import TabsItem from '../../../src/tabs-item'
    import 'prismjs'
    import 'prismjs/themes/prism-okaidia.css'
    const Prism = window.Prism
    export default {
      components:{
        'g-tabs':Tabs,
        'g-tabs-head':TabsHead,
        'g-tabs-body':TabsBody,
        'g-tabs-pane':TabsPane,
        'g-tabs-item':TabsItem
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

        }
      }
    }

</script>