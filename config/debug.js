/**
 * 本地开发时的debug配置, 通过该配置可以修改监听端口, st服务器地址
 * 使用时将后缀从js_改成js即可
 * @type {{devPort: number, localServer: {filter: tool.localServer.filter, host: {target: string, changeOrigin: boolean, ws: boolean}}}}
 */
let tool = {
    devPort:8081,
    localServer:{
        filter: function (pathname, req) {
            // 本地调试vue的时候会有跨域问题，所以这里自定义一个过滤器进行检测，命中规则就自动转发到接口地址上去
            // 检测是否有接口标志关键字，有的话就转发过去
            return pathname.indexOf('async') !== -1
        },
        host: {
            target: 'http://www.2345shengqian.com/', // 本地mock服务器地址
            changeOrigin: true, // needed for virtual hosted sites
            ws: true // proxy websockets
        }
    },
    project:{
        // 只编译project.js里指定的项目, 以加快本地编译速度
        demo: './src/view/demo', // 示例项目 => 编译时间:3s
        blog: './src/view/blog', // 示例项目，利用个人blog提供公共api进行测试
    }
}
module.exports = tool
