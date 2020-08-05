<template>
  <div>
    <h2 class="title">Popover 弹出框</h2>
    <h3>常用的弹出框，有点击弹出和触碰弹出两种方式，页面中只会同时存在一个弹出框</h3>
    <p>点击触发区域弹出四个方位弹出框，点击触发区域或页面空白处可关闭</p>
    <l-popover position="top">
      <template slot="content">
        <div>这是弹出内容</div>
      </template>
      <l-button>点我</l-button>
    </l-popover>

    <l-popover position="left">
      <template slot="content">
        <div>这是弹出内容</div>
      </template>
      <l-button>点我</l-button>
    </l-popover>

    <l-popover position="right">
      <template slot="content">
        <div>这是弹出内容</div>
      </template>
      <l-button>点我</l-button>
    </l-popover>

    <l-popover position="bottom">
      <template slot="content">
        <div>这是弹出内容</div>
      </template>
      <l-button>点我</l-button>
    </l-popover>
    <code-wrapper v-html="markdown(clickPopoverContent)"></code-wrapper>
    <hr />
    <p>hover触发区域弹出四个方位弹出框，离开触发区域时弹出框关闭</p>
    <l-popover trigger="hover" position="top">
      <template slot="content">
        <div>这是弹出内容</div>
      </template>
      <l-button>碰我</l-button>
    </l-popover>

    <l-popover trigger="hover" position="left">
      <template slot="content">
        <div>这是弹出内容</div>
      </template>
      <l-button>碰我</l-button>
    </l-popover>

    <l-popover trigger="hover" position="right">
      <template slot="content">
        <div>这是弹出内容</div>
      </template>
      <l-button>碰我</l-button>
    </l-popover>

    <l-popover trigger="hover" position="bottom">
      <template slot="content">
        <div>这是弹出内容</div>
      </template>
      <l-button>碰我</l-button>
    </l-popover>
    <code-wrapper v-html="markdown(hoverPopoverContent)"></code-wrapper>
    <hr />

    <p>可通过插槽属性slot-scope获取关闭弹出框的回调函数</p>
    <l-popover>
      <template slot="content" slot-scope="{close}">
        <div>这是弹出内容</div>
        <l-button @click="close">关闭</l-button>
      </template>
      <l-button>点我</l-button>
    </l-popover>
    <code-wrapper v-html="markdown(callbackPopoverContent)"></code-wrapper>
    <l-attribute slotContent="Attributes"></l-attribute>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">trigger</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">设置触发模式</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">String</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">click，hover</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">click</div>
      </el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">position</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">设置弹出框相对触发区域的位置</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">String</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">top，right，bottom，left</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">top</div>
      </el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">slot-scope</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">插槽的可选属性，获取关闭回调函数</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">Object</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">{close}</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">--</div>
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
      callbackPopoverContent: `
      <l-popover>
        <template slot="content" slot-scope="{close}">
          <div>这是弹出内容</div>
          <l-button @click="close">关闭</l-button>
        </template>
        <l-button>点我</l-button>
      </l-popover>
      `,
      clickPopoverContent: `
      <l-popover position="top">
        <template slot="content">
          <div>这是弹出内容</div>
        </template>
        <l-button>点我</l-button>
      </l-popover>

      <l-popover position="left">
        <template slot="content">
          <div>这是弹出内容</div>
        </template>
        <l-button>点我</l-button>
      </l-popover>

      <l-popover position="right">
        <template slot="content">
          <div>这是弹出内容</div>
        </template>
        <l-button>点我</l-button>
      </l-popover>

      <l-popover position="bottom">
        <template slot="content">
          <div>这是弹出内容</div>
        </template>
        <l-button>点我</l-button>
      </l-popover>
      `,
      hoverPopoverContent: `
      <l-popover trigger="hover" position="top">
        <template slot="content">
          <div>这是弹出内容</div>
        </template>
        <l-button>碰我</l-button>
      </l-popover>

      <l-popover trigger="hover" position="left">
        <template slot="content">
          <div>这是弹出内容</div>
        </template>
        <l-button>碰我</l-button>
      </l-popover>

      <l-popover trigger="hover" position="right">
        <template slot="content">
          <div>这是弹出内容</div>
        </template>
        <l-button>碰我</l-button>
      </l-popover>

      <l-popover trigger="hover" position="bottom">
        <template slot="content">
          <div>这是弹出内容</div>
        </template>
        <l-button>碰我</l-button>
      </l-popover>
      `,
      vmodelInputContent: `
      <l-input v-model="inputMessage"></l-input>

      //vue实例的data
      data(){
        return {
          inputMessage:"这是data里的值"
        }
      }
      `,
      readonlyInputContent: `
      <l-input value="只读状态" readonly></l-input>
      `,
      disabledInputContent: `
      <l-input value="禁用状态" disabled></l-input>
      `,
      errorInputContent: `
      <l-input error="输入框不能为空"></l-input>
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
.top-margin {
  margin-top: 25px;
}
.popover {
  margin: 20px 80px;
}
</style>