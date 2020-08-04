<template>
  <div>
    <h2 class="title">Button 按钮</h2>
    <h3>常用的操作按钮。</h3>

    <div class="button-wrapper">
      <p>普通按钮</p>
      <l-button>确认</l-button>
      <code-wrapper class="top-margin" v-html="markdown(defaultButtonContent)"></code-wrapper>
      <hr />

      <p>带icon的按钮，可控制icon的位置</p>
      <l-button icon="setting">确认</l-button>
      <l-button icon="down">确认</l-button>
      <l-button icon="loading">确认</l-button>
      <l-button icon="download">确认</l-button>
      <l-button icon="info" icon-position="right">确认</l-button>
      <code-wrapper class="top-margin" v-html="markdown(iconButtonContent)"></code-wrapper>
      <hr />

      <p>带loading动画的按钮，loading状态时会改变已有的icon</p>
      <l-button icon="thumbs-up" icon-position="left">确认</l-button>
      <l-button icon="download" loading icon-position="left">确认</l-button>
      <code-wrapper class="top-margin" v-html="markdown(loadingButtonContent)"></code-wrapper>
    </div>
    <hr />

    <p>组合按钮</p>
    <l-button-group>
      <l-button icon="left" icon-position="left">收到</l-button>
      <l-button icon="right" icon-position="right">收到</l-button>
    </l-button-group>
    <code-wrapper class="top-margin" v-html="markdown(twoButtonContent)"></code-wrapper>
    <hr />

    <l-attribute slotContent="Attributes"></l-attribute>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">icon</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">设置内置的icon</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">String</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">setting，info，left，right，download，loading，thumbs-up，down</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">--</div>
      </el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">loading</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">是否开启loading动画</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">Boolean</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">false，true</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">--</div>
      </el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">icon-position</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">如果设置了icon，可控制icon的位置</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">String</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">left，right</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">left</div>
      </el-col>
    </el-row>
    <hr />
    <div style="height:50px;"></div>
  </div>
</template>

<script>
import marked from "marked";

export default {
  data() {
    return {
      defaultButtonContent: `
      <l-button>确认</l-button>
      `,
      iconButtonContent:`
      <l-button icon="setting">确认</l-button>
      <l-button icon="down">确认</l-button>
      <l-button icon="loading">确认</l-button>
      <l-button icon="download">确认</l-button>
      <l-button icon="info" icon-position="right">确认</l-button>
      `,
      loadingButtonContent:`
      <l-button icon="download" icon-position="left">确认</l-button>
      <l-button icon="download" loading icon-position="left">确认</l-button>
      `,
      twoButtonContent:`
      <l-button-group>
        <l-button icon="left" icon-position="left">收到</l-button>
        <l-button icon="right" icon-position="right">收到</l-button>
      </l-button-group>
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
.button-wrapper {
  .l-button {
    margin-right: 20px;
  }
}
.top-margin {
  margin-top: 25px;
}
</style>