import animejsRoutes from './routes/animejs'
import cssRoutes from './routes/css'
import threeRoutes from './routes/threejs'
// 路由匹配@see https://paths.esm.dev/?p=AAMeJSyAwR4UbFDAFxAcAGAIJXMAAA..&t=/
const menuRouts: MenuRoute[] = [animejsRoutes, cssRoutes, threeRoutes]
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
  ...menuRouts
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router

export {
  menuRouts
}
