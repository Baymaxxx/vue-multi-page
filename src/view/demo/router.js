/**
 * Created by yaoze on 2016/9/26.
 */
// 组件只有import之后才能使用
import base from './components/base.vue'
import child1 from './components/child1.vue'

const routes =
  [
    {
      path: '/',
      component: base
    }, {
      path: '/child1',
      component: child1
    }
  ]
export default routes
