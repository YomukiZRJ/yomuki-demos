const route: RouteRecordRaw = {
  path: '/animejs',
  name: 'Animejs',
  children: [
    {
      path: 'svg-path',
      name: 'AnimejsSvgPath',
      component: () => import('@/pages/animejs/svg-path/index.vue'),
      meta: {
        title: 'Animejs-svg路径动画'
      }
    }
  ]
}

export default route
