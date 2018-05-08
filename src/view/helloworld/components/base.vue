<template>
  <!-- vue要求每个组件中都有且只能有一个根元素 -->
  <div class="wrapper">
		<div class="make-money">
			<div class="banner">
				<h1 class="title">如何用章鱼星球赚钱?
				</h1>
				<p class="summary">章鱼星球是一款基于区块链的高性能云盘
				</p>
				<p class="summary">只需插电联网，就能每天自动为您产生积分星
				</p>
			</div>
			<div class="make-money-main">
				<div class="stars">
					<div class="money-box">
						<div class="money-box-hd">
							<h1 class="tit">赚钱只需三步</h1>
						</div>
						<div class="money-box-bd money-box-bd1">
							<ul>
								<li>
									<div class="num num1"></div>
									<p>前往星球联盟官网
										<a href="http://m.2345.org#buyStar">2345.org</a>购买章鱼星球</p>
								</li>
								<li>
									<div class="num num2"></div>
									<p>
										确保章鱼星球插电联网并接入容量≥32G的硬盘或U盘
									</p>
									<img class="pic" src="../../../assets/img/m-money-pic1.jpg" alt="pic1">
									<p class="tip">
										* 章鱼星球指示灯为蓝色时，即为联网成功
									</p>
								</li>
								<li>
									<div class="num num3"></div>
									<p>打开APP进入“章鱼星球”页，点击绑定按钮并扫描章鱼星球背后二维码即可绑定
									</p>
									<img class="pic" src="../../../assets/img/m-money-pic2.jpg" alt="pci2">
									<div class="footer">
										<p>
											绑定成功后，
										</p>
										<p>
											章鱼星球就能为您自动产生积分星啦！
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="money-box">
						<div class="money-box-hd">
							<h1 class="tit">如何查看收益</h1>
						</div>
						<div class="money-box-bd money-box-bd2">
							<p class="tit-tip">在首页，点击“我的积分星”即可查看收益
							</p>
							<img class="pic" src="../../../assets/img/m-money-pic3.jpg" alt="pci3">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<style lang='scss' scoped>
/*  style标签之内会被作为css进行处理，所以需要使用css的注释形式   */
/*  加上scoped可以将css的作用效果限定在该组件之内 */
.make-money {
  background: #525df8;
  .banner {
    // background:url(#{$img}make-money-banner.jpg) 0 0 no-repeat;
    $h: 500px;
    height: $h;
    background-size: cover;
    text-align: center;
    color: #fff;
    .title {
      padding: 85 0 65px;
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
    padding: 0 30 40px;
    margin-top: -170px;
    .stars {
    //   background:url(#{$img}star.pngpx;
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
        // background:url(#{$img}plan-spr.png) 0 0 no-repeat;
        background-size: cover;
        font-size: 32px;
        color: #fff;
      }
    }
    &-bd {
      &.money-box-bd1 {
        padding: 20 40 60 75px;
      }
      &.money-box-bd2 {
        text-align: center;
        font-size: 28px;
      }
      line-height: 44px;
      .pic {
        margin: 50 0px;
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
        margin: 40 0px;
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
            // background:url(#{$img}m-money-list1.png) 0 0 no-repeat;
            background-size: cover;
          }
          &.num2 {
            // background:url(#{$img}m-money-list2.png) 0 0 no-repeat;
            background-size: cover;
          }
          &.num3 {
            // background:url(#{$img}m-money-list3.png) 0 0 no-repeat;
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
