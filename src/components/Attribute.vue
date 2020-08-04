<template>
  <div>
    <h2>{{slotContent}}</h2>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">参数</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">说明</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">类型</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">可选值</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">默认值</div>
      </el-col>
    </el-row>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    slotContent: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
</style>