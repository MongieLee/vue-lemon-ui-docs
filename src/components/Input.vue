<template>
  <div>
    <h2 class="title">Input 输入框</h2>
    <h3>常用的输入框</h3>
    <p>带默认值的输入框</p>
    <l-input value="默认值"></l-input>
    <code-wrapper class="top-margin" v-html="markdown(defaultInputContetn)"></code-wrapper>
    <hr />
    <p>输入框支持v-model</p>
    <l-input v-model="inputMessage"></l-input>
    <code-wrapper class="top-margin" v-html="markdown(vmodelInputContent)"></code-wrapper>
    <hr />
    <p>带有错误状态的输入框</p>
    <l-input error="输入框不能为空"></l-input>
    <code-wrapper class="top-margin" v-html="markdown(errorInputContent)"></code-wrapper>
    <hr />
    <p>只读状态的输入框</p>
    <l-input value="只读状态" readonly></l-input>
    <code-wrapper class="top-margin" v-html="markdown(readonlyInputContent)"></code-wrapper>
    <hr>
    <p>禁用状态的输入框</p>
    <l-input value="禁用状态" disabled></l-input>
    <code-wrapper class="top-margin" v-html="markdown(disabledInputContent)"></code-wrapper>
    <hr />
    <l-attribute></l-attribute>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">value</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">设置默认值</div>
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
        <div class="grid-content bg-purple">error</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">开启错误状态</div>
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
        <div class="grid-content bg-purple">readonly</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">是否只读状态</div>
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
        <div class="grid-content bg-purple">disabled</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">是否禁用状态</div>
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
      inputMessage: "这是data里的值",
      defaultInputContetn: `
      <l-input value="默认值"></l-input>
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
      errorInputContent:`
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
</style>