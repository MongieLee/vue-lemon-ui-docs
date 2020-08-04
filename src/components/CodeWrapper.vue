<template>
  <div class="code-wrapper">
    <code>
      <slot></slot>
    </code>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.code-wrapper {
  display: block;
  line-height: 1.8;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 12px;
  padding: 18px 24px;
  background-color: #fafafa;
  border: 1px solid #eaeefb;
  border-radius: 4px;
  margin-bottom: 25px;
}
</style>