const route: MenuRoute = {
  path: '/threejs',
  name: 'Threejs',
  meta: {
    title: 'Threejs'
  },
  children: [
    {
      path: 'rain',
      name: 'ThreejsRain',
      component: () => import('@/pages/threejs/rain/index.vue'),
      meta: {
        title: 'Threejs-下雨效果'
      }
    }
  ]
}

export default route
