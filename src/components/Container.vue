<template>
  <div>
    <h2 class="title">Container 布局容器</h2>
    <h3>用于布局的容器组件，方便快速搭建页面的基本结构：</h3>
    <p>常见的几种布局</p>
    <p>l-layout默认为垂直上下排列，当l-layout组件下存在l-sider组件时，排列方式就会变成水平排列，可嵌套使用</p>
    <l-layout class="layout-height">
      <l-header class="header-color">这是header</l-header>
      <l-content class="content-color">这是content</l-content>
      <l-footer class="footer-color">这是footer</l-footer>
    </l-layout>
    <br />
    <l-layout class="layout-height">
      <l-header class="header-color">这是header</l-header>
      <l-layout>
        <l-sider class="sider-color">这是sider</l-sider>
        <l-content class="content-color">这是content</l-content>
      </l-layout>
      <l-footer class="footer-color">这是footer</l-footer>
    </l-layout>
    <code-wrapper class="top-margin" v-html="markdown(containerContent)"></code-wrapper>
  </div>
</template>

<script>
import marked from "marked";
export default {
  data() {
    return {
      containerContent: `
      <l-layout class="layout-height">
        <l-header class="header-color">这是header</l-header>
        <l-content class="content-color">这是content</l-content>
        <l-footer class="footer-color">这是footer</l-footer>
      </l-layout>
      <br />
      <l-layout class="layout-height">
        <l-header class="header-color">这是header</l-header>
        <l-layout>
          <l-sider class="sider-color">这是sider</l-sider>
          <l-content class="content-color">这是content</l-content>
        </l-layout>
        <l-footer class="footer-color">这是footer</l-footer>
      </l-layout>

      //style的样式
      .layout-height {
        height: 300px;
      }
      .header-color,
      .footer-color {
        height: 50px;
        background-color: #b3c0d1;
      }
      .content-color {
        background-color: #e9eef3;
      }
      .sider-color {
        background-color: #b1cee7;
        width: 100px;
      }
      `,
      collapseContetn: `
      <l-collapse :selected.sync="selectedTabs">
        <l-collapse-item name="1" title="体育频道">体育新闻内容</l-collapse-item>
        <l-collapse-item name="2" title="娱乐频道">娱乐新闻内容</l-collapse-item>
      </l-collapse>

      //vue实例的data
      data(){
        return {
          selectedTabs: ["1", "2"]
        }
      }
      `,
      selectedTab: "sports"
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
.top-margin {
  margin-top: 25px;
}
.layout-height {
  height: 300px;
}
.header-color,
.footer-color {
  height: 50px;
  background-color: #b3c0d1;
}
.content-color {
  background-color: #e9eef3;
}
.sider-color {
  background-color: #b1cee7;
  width: 100px;
}
</style>




