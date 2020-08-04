<template>
  <div class="install">
    <h2 class="title">安装</h2>
    <h3>npm 安装</h3>
    <p>推荐使用 npm 的方式安装</p>
    <code-wrapper>npm i vue-lemon-ui -S</code-wrapper>
    <h2>引入 LemonUI</h2>
    <p>你可以引入整个 LemonUI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 LemonUI。</p>
    <p>以上代码便完成了 LemonUI 的引入。需要注意的是，样式文件需要单独引入。</p>
    <code-wrapper v-html="markdown(needString)"></code-wrapper>

    <h3>完整组件列表和引入方式，css样式需要单独引入</h3>
    <code-wrapper v-html="markdown(allString)"></code-wrapper>

    <h3>开始使用</h3>
    <p>至此，一个基于 Vue 和 LemonUI 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。</p>
  </div>
</template>

<script>
import marked from "marked";
export default {
  data() {
    return {
      needString: `
    import Vue from 'vue';
    import LemonUI from 'vue-lemon-ui';
    import 'vue-lemon-ui/dist/index.css'
    import App from './App.vue';

    Vue.use(LemonUI);

    new Vue({
      el: '#app',
      render: h => h(App)
    });
    `,
      allString: `
    import {
      Button,
      Input,
      Layout,
      Toast,
      Collapse,
      Popover,
      TabPane,
      Container
    } from 'vue-lemon-ui';

    Vue.use(Button)
    Vue.use(Input)
    Vue.use(Layout)
    Vue.use(Toast)
    Vue.use(Collapse)
    Vue.use(Popover)
    Vue.use(Tab)
    Vue.use(Container)
    `
    };
  },
  methods: {
    markdown(md) {
      return marked(md);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>