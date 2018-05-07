<template>
  <!-- vue要求每个组件中都有且只能有一个根元素 -->
  <div class="base">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>参考链接</h2>
      <ul>
        <li><a href="https://vuefe.cn/v2/guide/" target="_blank">Vue中文文档</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">Awesome-Vue</a></li>
      </ul>
      <h2>常用扩展</h2>
      <ul>
        <li><a href="http://element.eleme.io/#/zh-CN/component/layout" target="_blank">Element-UI组件</a></li>
        <li><a href="http://router.vuejs.org/zh-cn/" target="_blank">Vue-Router文档</a></li>
        <li><a href="https://github.com/pagekit/vue-resource/blob/develop/docs/http.md" target="_blank">Vue-Resource文档</a></li>
        <br/>
        <br/>
        <li><a class="project-description" href="https://github.com/YaoZeyuan/vue-multi-page/blob/master/Guide.md" target="_blank">项目文档</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  /*  style标签之内会被作为css进行处理，所以需要使用css的注释形式   */
  /*  加上scoped可以将css的作用效果限定在该组件之内 */
  .base {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  a.project-description {
    font-weight: normal;
    font-size: 1.5rem;
    color: #2196f3;
    text-decoration: none;
  }

  a.project-description:hover {
    font-weight: normal;
    font-size: 1.5rem;
    color: #3f51b5;
    text-decoration: none;
  }
</style>

<script>
  export default {
    data: function () {
      return {
        msg: 'Welcome To Use Vue 2.0 Today!'
      }
    }
  }
</script>
