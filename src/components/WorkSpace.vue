<template>
  <div id="container" class="hasTab">
    <div class="contTop">
      <h2>{{currentMenuName}}</h2>
    </div>
    <router-view name="header" />
    <router-view name="body" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      breadCrumb: [],
      currentMenuName: '',
      currentName: ''
    }
  },
  watch: {
    $route: 'onRouteChanged'
  },
  methods: {
    onRouteChanged(e) {
      if(_.isEmpty(e.matched)) return
      this.currentName = e.name
      this.currentMenuName = e.meta.names[1]
    }
  },
  created () {
    this.onRouteChanged(this.$route)
  }
}
</script>
