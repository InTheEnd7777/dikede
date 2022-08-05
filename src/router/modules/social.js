import Layout from '@/layout'
export default {
  path: '/social',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/social'),
      meta: { title: '对账管理', icon: '对账工单' }
    }
  ]
}
