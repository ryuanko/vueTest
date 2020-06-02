import Builder from '../../builder'
const Pdm = {
  install(Vue, options) {
    let sides = Vue.prototype.$sides || []
    Builder.create('Crud', 'crud', '1')
      .add('Crud Test',
        [
          {
            id: '111',
            name: 'Create',
            body: () => import( './Create.vue')
          },
          {
            id: '112',
            name: 'List',
            body: () => import('./List.vue')
          },
          {
            id: '113',
            name: 'Detail',
            body: () => import( './Detail.vue')
          },          
          {
            id: '114',
            name: 'Update',
            body: () => import( './Update.vue')
          },
          {
            id: '115',
            name: 'Delete',
            body: () => import( './Delete.vue')
          },
        ])
        .install(sides, options.router)
    Vue.prototype.$sides = sides
  }
}
export default Pdm