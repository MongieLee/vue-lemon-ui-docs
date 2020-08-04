<template>
  <div>
    <div class="asider">
      <el-menu
        ref="elMenu"
        router
        :default-openeds="[`/development`,`/component`]"
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        background-color="#fff"
        text-color="#333"
        active-text-color="#D9B300"
      >
        <el-submenu index="/development">
          <template slot="title">
            <span class="section-title">开发指南</span>
          </template>
          <el-menu-item index="/development/recommend">介绍</el-menu-item>
          <el-menu-item index="/development/quickstart">快速上手</el-menu-item>
        </el-submenu>

        <el-submenu index="/component">
          <template slot="title">
            <span class="section-title">组件</span>
          </template>
          <el-menu-item index="/component/button">Button 按钮</el-menu-item>
          <el-menu-item index="/component/input">Input 输入框</el-menu-item>
          <el-menu-item index="/component/layout">Layout 网格系统</el-menu-item>
          <el-menu-item index="/component/container">Container 布局容器</el-menu-item>
          <el-menu-item index="/component/popover">Popover 弹出框</el-menu-item>
          <el-menu-item index="/component/toast">Toast 消息提示</el-menu-item>
          <el-menu-item index="/component/accordion">Collapse 手风琴</el-menu-item>
          <el-menu-item index="/component/tab">Tabs 标签页</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="docs">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      defaultActive: "/development/recommend"
    };
  },
  watch: {
    "$route.path": {
      handler: function(currentPath) {
        this.$nextTick(() => {
          let defaultActivePath = this.$refs.elMenu.$props.defaultActive;
          if (defaultActivePath !== currentPath) {
            this.defaultActive = currentPath;
          }
        });
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
.asider {
  width: 200px;
  height: calc(100vh - 60px);
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 1;
  .el-menu {
    height: 100%;
    border-right: none;
  }
}
.docs {
  margin: 60px 0 0 200px;
  padding: 10px 20px;
  border-left: solid 1px #e6e6e6;
  min-height: calc(100vh - 60px);
}
</style>
