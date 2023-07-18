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
    },
    {
      path: 'background',
      name: 'CssBackground',
      component: () => import('@/pages/css-demo/background/index.vue'),
      meta: {
        title: 'css-background'
      }
    },
    {
      path: 'background-attachment',
      name: 'CssBackgroundAttachment',
      component: () => import('@/pages/css-demo/background/background-attachment.vue'),
      meta: {
        title: 'css-background-attachment-视觉差'
      }
    },
    {
      path: 'mask',
      name: 'CssMask',
      component: () => import('@/pages/css-demo/mask/index.vue'),
      meta: {
        title: 'css-mask'
      }
    },
    {
      path: 'clip-path',
      name: 'CssClipPath',
      component: () => import('@/pages/css-demo/clip-path/index.vue'),
      meta: {
        title: 'clip-path'
      }
    }
  ]
}

export default route
