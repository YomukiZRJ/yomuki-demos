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
    },
    {
      path: 'switch-btn',
      name: 'CssSwitchBtn',
      component: () => import('@/pages/css-demo/switch-btn/index.vue'),
      meta: {
        title: 'css-switch-btn'
      }
    }
  ]
}

export default route
