<template>
    <div>
        <h2>网格预览</h2>
        <div class="g-grid-wrapper">
            <g-row class="row">
                <g-col class="item" span="24">24</g-col>
            </g-row>
            <g-row class="row">
                <g-col class="item" span="12">12</g-col>
                <g-col class="item" span="12">12</g-col>
            </g-row>
            <g-row class="row">
                <g-col class="item" span="8">8</g-col>
                <g-col class="item" span="8">8</g-col>
                <g-col class="item" span="8">8</g-col>
            </g-row>
            <g-row class="row">
                <g-col class="item" span="6">6</g-col>
                <g-col class="item" span="6">6</g-col>
                <g-col class="item" span="6">6</g-col>
                <g-col class="item" span="6">6</g-col>
            </g-row>
            <p>代码</p>
            <pre class="language-html" v-html=" Prism.highlight(grid_normal,Prism.languages.html,'html') "/>
        </div>
    </div>
</template>

<script>
  import GridRow from '../../../src/row'
  import GridCol from '../../../src/col'
  import 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'

  const Prism = window.Prism
  export default {
    components: {
      'g-col': GridCol,
      'g-row': GridRow

    },
    data() {
      return {
        Prism,
        grid_normal:
          `
        <template>
            <div class="g-grid-wrapper">
            <g-row class="row">
                <g-col class="item" span="24">24</g-col>
            </g-row>
            <g-row class="row">
                <g-col class="item" span="12">12</g-col>
                <g-col class="item" span="12">12</g-col>
            </g-row>
            <g-row class="row">
                <g-col class="item" span="8">8</g-col>
                <g-col class="item" span="8">8</g-col>
                <g-col class="item" span="8">8</g-col>
            </g-row>
            <g-row class="row">
                <g-col class="item" span="6">6</g-col>
                <g-col class="item" span="6">6</g-col>
                <g-col class="item" span="6">6</g-col>
                <g-col class="item" span="6">6</g-col>
            </g-row>
        </div>
        </template>
        <style lang="scss" scoped>
            $background: #3e8bde;
            $color: white;
            * {box-sizing: border-box;}
            .g-grid-wrapper {
                > .row {
                    padding: .3em;

                    > .item {
                        text-align: center;
                        color: $color;

                        &:nth-child(odd) {
                            background: $background;
                        }

                        &:nth-child(even) {
                            background: lighten($background, 20%);
                        }
                    }
                }
            }
        </style>`.replace(/\t| +/g," ").trim()

      }
    }
  }
</script>
<style lang="scss" scoped>
    $background: #3e8bde;
    $color: white;
    * {
        box-sizing: border-box;
    }

    .g-grid-wrapper {
        > .row {
            padding: .3em;

            > .item {
                text-align: center;
                color: $color;

                &:nth-child(odd) {
                    background: $background;
                }

                &:nth-child(even) {
                    background: lighten($background, 20%);
                }
            }
        }
    }
</style>