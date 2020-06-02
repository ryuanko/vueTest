<template>
    <div id="header">
      <div class="header_top" :class="{on: isOver}" @mouseleave="isOver = false"><!-- on toggle-->
        <h1><router-link :to="{ name: 'Home' }">ICIS</router-link></h1>
        <!-- menu hover -->
        <nav class="menu">
          <ul @mouseover="isOver = true">
            <template v-for="p in allMenu" >
              <li :key="p.id">
                <!-- :style="setStyle" -->
                <a :class="{on: p.title === largeCtgry}">{{p.title}}</a>
                <div class="menu_depth">
                  <ul>
                    <template v-for="c in p.children">
                      <li :key="c.id">
                        <router-link :class="{on: p.title === largeCtgry && c.title === midleCtgry}" :to="{ name: c.id }">{{c.title}}</router-link>
                      </li>
                    </template>
                  </ul>
                </div>
              </li>
            </template>
          </ul>
        </nav>
        <div class="gnb_top">
          <a class="my_info">123 양성수</a>
          <button class="btn_loginInOut mgr40" type="button">로그아웃</button>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: '',
  props: [],  
  components: {},
  data () {
    return {
      allMenu: [],
      isOver: false,
      largeCtgry: '', // 대분류 메뉴
      midleCtgry: '',
    }
  },
  computed: {},
  watch: {
    $route (val) {
      this.isOver = false
      if (!_.isEmpty(val.meta.names)) {
        this.largeCtgry = val.meta.names[0] // 대분류 메뉴
        this.midleCtgry = val.meta.names[1] // 중분류 메뉴
      } else {
        this.largeCtgry = 'Home'
        this.midleCtgry = 'Home'
      }
    },
  },
  methods: {},
  created () {
    // if (this.isLoggined) this.connect()
  },
  mounted () {
    console.log(this.$sides)
    this.allMenu = _.cloneDeep(this.$sides)
   },
  updated () {},
  beforeDestroy () {}
}
</script>
<style>
</style>
