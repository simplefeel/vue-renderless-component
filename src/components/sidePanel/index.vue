<template>
  <div class="test">
    <div class="demo">
      {{msg}}
      <img src='../../assets/test.jpg' />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello vue ~'
    }
  }
}
</script>

<style lang="less">
@import url(./index.less);
</style>