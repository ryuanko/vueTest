import _ from 'lodash'
// import Tab from './components/Tab'
/*
 Menu Item
*/
class Item {
  constructor(name, views) {
    this.name = name
    this.views = views
  }
  
}


class Menu {

  /*
     title: 메뉴명
     pathPrefix: /path명 앞에 붙는 접두어
   */
  constructor(title, pathPrefix = '', path) {
    this.title = title
    this.pathPrefix = pathPrefix
    this.items = []
    this.largeId = path
  }

 /*
  name: 서브메뉴명
 */
  add(name, views){
    this.items.push( new Item(name, views))
    return this
  }


  install(sides, router) {   
    sides.push({
      title: this.title,
      path: this.largeId,
      children: this.items.map((i) => {
        return {
          title: i.name,
          id: i.views.length>0? i.views[0].id:null,
          section: i.views
        }
      })
    })


    let routes = this.items.map(item  => {
      return item.views.map(view => {
        const { id, name, path, header=true, body } = view

        return {
          path: `/${this.pathPrefix ? this.pathPrefix: ''}/${this.path ? path: id}`,
          name: id,
          components: Object.assign(header? {header: null}: {}, {body: body}),
          meta: {
            name: name,
            names: [this.title, item.name,  name],
            tabs: item.views.map(v => {
              return {id:  v.id, name: v.name}
            })
          }
        }
      })
      
    })

    routes.map(i => router.addRoutes(i))
  }
}

export default {
  create: (title, pathPrefix = '', path) => {
    return new Menu(title, pathPrefix, path)
  }
}

