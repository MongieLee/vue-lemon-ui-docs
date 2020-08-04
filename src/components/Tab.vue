<template>
  <div>
    <h2 class="title">Tabs 标签页</h2>
    <h3>常用的标签页</h3>
    <p>l-tabs需要传值和监听update:selected事件，值的类型为字符串，字符串的值对应item的name属性</p>
    <p>如需在标题栏尾部添加内容，可在l-tabs-head标签内的具名插槽actions添加内容，可不添加</p>
    <p>l-tabs-item可传入disabled属性设置为禁用</p>
    <p>l-tabs-pane需要传入name属性，与l-tabs的值对应</p>
    <l-tabs :selected.sync="selectedTab">
      <l-tabs-head>
        <template slot="actions">
          <l-button>设置</l-button>
        </template>
        <l-tabs-item name="news" disabled>
          <l-icon name="setting"></l-icon>新闻
        </l-tabs-item>
        <l-tabs-item name="sports">娱乐</l-tabs-item>
        <l-tabs-item name="stock">股票</l-tabs-item>
      </l-tabs-head>
      <l-tabs-body>
        <l-tabs-pane name="news">新闻内容</l-tabs-pane>
        <l-tabs-pane name="sports">娱乐内容</l-tabs-pane>
        <l-tabs-pane name="stock">股票内容 </l-tabs-pane>
      </l-tabs-body>
    </l-tabs>

    <code-wrapper class="top-margin" v-html="markdown(singleCollapseContetn)"></code-wrapper>
    <hr />
    <l-attribute slotContent="Attributes"></l-attribute>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">selected.sync</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">l-tabs的必传项</div>
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
        <div class="grid-content bg-purple-light">l-tabs-item的必传项</div>
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
        <div class="grid-content bg-purple">disabled</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">设置l-tabs-item是否禁用</div>
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
      <l-tabs :selected.sync="selectedTab">
        <l-tabs-head>
          <template slot="actions">
            <l-button>设置</l-button>
          </template>
          <l-tabs-item name="news" disabled>
            <l-icon name="setting"></l-icon>新闻
          </l-tabs-item>
          <l-tabs-item name="sports">娱乐</l-tabs-item>
          <l-tabs-item name="stock">股票</l-tabs-item>
        </l-tabs-head>
        <l-tabs-body>
          <l-tabs-pane name="news">新闻内容</l-tabs-pane>
          <l-tabs-pane name="sports">娱乐内容</l-tabs-pane>
          <l-tabs-pane name="stock">股票内容 </l-tabs-pane>
        </l-tabs-body>
      </l-tabs>

      //vue实例的data
      data(){
        return {
          selectedTab: "sports"
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
</style>