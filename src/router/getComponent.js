export const getComponent = (pathName) =>
  () => import('@/view' + pathName)