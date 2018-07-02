<template>
  <!-- vue要求每个组件中都有且只能有一个根元素 -->
  <div class="wrapper">
		child1
    aaa
        <router-link to="/">parent</router-link>
  </div>
</template>

<style lang='scss'>
/*  style标签之内会被作为css进行处理，所以需要使用css的注释形式   */
/*  加上scoped可以将css的作用效果限定在该组件之内 */
.wrapper{
      // border-top: 1px solid red;
    // @include border1pxbg(top, red);
    @include border1px(bottom, red, after);
    display: block;
}
</style>

<script>
export default {
  data: function() {
    return {
      msg: 'Welcome To Use Vue 2.0 Today!'
    }
  },
  mounted() {
     var str = {
        "pageNo": 1,
        "pageSize": 20
    };
    var appParam = {
       encode: function(str){
           var data =  JSON.stringify({
                "commonParamJson": {
                    "platform": "Android",
                    "deviceId": "a32376a27af2952e",
                    "appVersion": "1.0",
                    "imei": "865223037202316",
                    "appCode": 1,
                    "mac": "70:d9:23:7d:d8:42",
                    "channel": "UMENG_CHANNEL_VALUE"
                },
            }); 
            str = JSON.stringify(str).substr(1);
            str = str.substr(0, str.length-1);
            str = '"extraParamJson": {'+ str +'}';
            data = data.substr(1);
            data = data.substr(0, data.length-1);
            var dataStr = "{"+ str + "," + data +"}";
            return dataStr;
        },
    }
    var dataStr = appParam.encode(str)
    console.log(1)
    this.$http.post('/user/commisOrders',{data: dataStr}).then((res)=>{
      console.log(res);
    })
  },
  components: {
  }
}
</script>

