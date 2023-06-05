declare type MenuRouteWithTitle = RouteRecordRaw & {
  meta: {
    title: string
  }
}
declare type MenuRoute = MenuRouteWithTitle & {
  children: MenuRouteWithTitle[]
}
