<template>
  <!-- vue要求每个组件中都有且只能有一个根元素 -->
  <div class="wrapper">
		child1
        <router-link to="/">parent</router-link>
  </div>
</template>

<style lang='scss'>
/*  style标签之内会被作为css进行处理，所以需要使用css的注释形式   */
/*  加上scoped可以将css的作用效果限定在该组件之内 */
.make-money {
  background: #525df8;
  .banner {
    background:url('~img/make-money-banner.jpg') 0 0 no-repeat;
    $h: 500px;
    height: $h;
    background-size: cover;
    text-align: center;
    color: #fff;
    .title {
      padding: 85px 0px 65px;
      color: #fff;
      font-weight: bold;
      font-size: 53px;
    }
    .summary {
      font-size: 26px;
      line-height: 1.5;
    }
    img {
      vertical-align: top;
      max-width: 100%;
    }
  }
  &-main {
    padding: 0px 30px 40px;
    margin-top: -170px;
    .stars {
      background:url('~img/star.png');
      background-position: 87% 94%; // background-size: 720) auto;
    }
  }
  .money-box {
    background: #fff;
    border-radius: 10px;
    margin-bottom: 50px;
    padding-top: 30px;
    &-hd {
      text-align: center;
      .tit {
        margin: 0 auto;
        display: inline-block;
        width: 483px;
        height: 122px;
        line-height: 122px;
        background:url('~img/plan-spr.png') 0 0 no-repeat;
        background-size: cover;
        font-size: 32px;
        color: #fff;
      }
    }
    &-bd {
      &.money-box-bd1 {
        padding: 20px 40px 60px 75px;
      }
      &.money-box-bd2 {
        text-align: center;
        font-size: 28px;
      }
      line-height: 44px;
      .pic {
        margin: 50px 0px;
        width: 500px;
      }
      .footer {
        color: #525df8;
        text-align: center;
        font-weight: bold;
      }
      .tit-tip {
        margin-top: 20px;
        text-align: center;
      }
      li {
        position: relative;
        padding-left: 20px;
        margin: 40px 0px;
        font-size: 28px;
        color: #000;
        a {
          text-decoration: underline;
          color: #525df8;
        }
        .num {
          position: absolute;
          left: -33px;
          display: inline-block;
          width: 33px;
          height: 45px;
          &.num1 {
            background:url('~img/m-money-list1.png') 0 0 no-repeat;
            background-size: cover;
          }
          &.num2 {
            background:url('~img/m-money-list2.png') 0 0 no-repeat;
            background-size: cover;
          }
          &.num3 {
            background:url('~img/m-money-list3.png') 0 0 no-repeat;
            background-size: cover;
          }
        }
        .tip {
          color: #999;
          font-size: 24px;
        }
      }
    }
  }
}
</style>

<script>
export default {
  data: function() {
    return {
      msg: 'Welcome To Use Vue 2.0 Today!'
    }
  },
  components: {
  }
}
</script>

