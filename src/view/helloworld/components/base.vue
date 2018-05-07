<template>
  <!-- vue要求每个组件中都有且只能有一个根元素 -->
  <div>helloworld
    <img src="../../../assets/img/logo.png" alt="pic">
    <Button>
      <div class="imgBg">111</div>
    </Button>
  </div>

</template>

<style scoped>
/*  style标签之内会被作为css进行处理，所以需要使用css的注释形式   */
/*  加上scoped可以将css的作用效果限定在该组件之内 */
  .imgBg{
    width: 200px;
    background: url('../../../assets/img/logo.png');
  }
</style>

<script>
import Button from 'src/components/demo/button.vue'
export default {
  data: function() {
    return {
      msg: 'Welcome To Use Vue 2.0 Today!'
    }
  },
  components: {
    Button
  }
}
</script>
