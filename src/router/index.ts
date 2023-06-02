import animejsRoutes from './routes/animejs'
// 路由匹配@see https://paths.esm.dev/?p=AAMeJSyAwR4UbFDAFxAcAGAIJXMAAA..&t=/
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/animejs/svg-path'
  },
  {
    path: '/:notFound*',
    name: 'NotFound',
    component: () => import('@/pages/not-found/index.vue')
  },
  animejsRoutes
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
