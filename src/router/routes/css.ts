const route: MenuRoute = {
  path: '/css',
  name: 'Css',
  meta: {
    title: 'Css'
  },
  children: [
    {
      path: 'animating-grid',
      name: 'CssAnimatingGrid',
      component: () => import('@/pages/css-demo/animating-grid/index.vue'),
      meta: {
        title: 'css-animating-grid'
      }
    }
  ]
}

export default route
