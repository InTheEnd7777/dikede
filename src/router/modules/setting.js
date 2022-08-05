import Layout from '@/layout'
export default {
  path: '/setting',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/setting'),
      meta: { title: '订单管理', icon: '订单' }
    }
  ]
}
