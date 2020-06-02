
const home = () => import('./home')
const Page404 = () => import('./Page404')
const routes = [
  {
    path: '/',
    name: 'Home',
    components: {body: home },
    props: { body: true},
    meta: {
      name: null,
      names: []
    },
    beforeEnter: (to, from, next) => {next()}
  },
  {
    path: '*',
    name: '404',
    components: {body: Page404 },
    props: { body: true},
    meta: {
      name: null,
      names: []
    },
    beforeEnter: (to, from, next) => {next()}
  }
]
export default  {
  init (router)  {
    router.addRoutes(routes)
  }
}
