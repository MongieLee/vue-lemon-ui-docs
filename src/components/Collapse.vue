<template>
  <div>
    <h2 class="title">Collapse 手风琴</h2>
    <h3>常用的手风琴</h3>
    <p>l-collapse需要传值和监听update:selected事件，值的类型为字符串数组，数组的值对应每个item的name属性</p>
    <p>l-collapse-item需要name和title两个属性值</p>
    <l-collapse :selected.sync="selectedTabs">
      <l-collapse-item name="1" title="体育频道">体育新闻内容</l-collapse-item>
      <l-collapse-item name="2" title="娱乐频道">娱乐新闻内容</l-collapse-item>
    </l-collapse>
    <code-wrapper class="top-margin" v-html="markdown(collapseContetn)"></code-wrapper>
    <hr />
    <p>l-collapse可传入single属性，设置是否只能同时打开一个item</p>
    <l-collapse :selected.sync="singleSelectedTabs" single>
      <l-collapse-item name="1" title="体育频道">体育新闻内容</l-collapse-item>
      <l-collapse-item name="2" title="娱乐频道">娱乐新闻内容</l-collapse-item>
    </l-collapse>
    <code-wrapper class="top-margin" v-html="markdown(singleCollapseContetn)"></code-wrapper>
    <hr />
    <l-attribute slotContent='Attributes'></l-attribute>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">selected.sync</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">l-collapse的必传项，值传入空数组</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">String[ ]</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">--</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">--</div>
      </el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">single</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">l-collapse设置是否同时只能打开一个item</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">Boolean</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">false，true</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">false</div>
      </el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">title</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">设置每个item的标题，必传项</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">String</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">--</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">--</div>
      </el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">name</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">设置每个item的name属性，必传项</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">String</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">--</div>
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
      selectedTabs: ["1", "2"],
      singleSelectedTabs: ["2"],
      inputMessage: "这是data里的值",
      singleCollapseContetn: `
      <l-collapse :selected.sync="singleSelectedTabs" single>
        <l-collapse-item name="1" title="体育频道">体育新闻内容</l-collapse-item>
        <l-collapse-item name="2" title="娱乐频道">娱乐新闻内容</l-collapse-item>
      </l-collapse>

      //vue实例的data
      data(){
        return {
          singleSelectedTabs: ["2"]
        }
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
</style>