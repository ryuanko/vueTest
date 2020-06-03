import Builder from '../../builder'
const Pdm = {
  install(Vue, options) {
    let sides = Vue.prototype.$sides || []
    Builder.create('Crud', 'crud', '1')
      .add('Crud Create',
        [
          {
            id: '111',
            name: 'Create',
            body: () => import( './Create.vue')
          }
        ])
      .add('Crud List',
        [
          {
            id: '112',
            name: 'List',
            body: () => import( './List.vue')
          }
        ])
      .add('Crud Update',
        [
          {
            id: '114',
            name: 'Update',
            body: () => import( './Update.vue')
          }
        ])
      .add('Crud Delete',
        [
          {
            id: '115',
            name: 'Delete',
            body: () => import( './Delete.vue')
          }
        ])
      .install(sides, options.router)
    Vue.prototype.$sides = sides
  }
}
export default Pdm