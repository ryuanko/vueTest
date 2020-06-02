<template>
  <a-layout-content class="layoutContent" :class="{on: currentName === 'Home'}">
    <div id="container" class="hasTab">
      <div class="contTop">
        <h2>{{currentMenuName}}</h2>
        <!-- page location --> 
        <a-breadcrumb class="breadCrumb" v-if="breadCrumb.length > 0">
          <a-breadcrumb-item><router-link :to="{ name: 'Home' }"><a-icon type="home" /></router-link></a-breadcrumb-item>
          <a-breadcrumb-item v-for="(i, index) in breadCrumb" :key="index">{{i}}
          </a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <router-view name="header" />
      <router-view name="body" />
    </div>
  </a-layout-content>
</template>

<script>
export default {
  name: 'workspace',
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
      if (_.isArray(e.meta.names)) {
        this.breadCrumb = e.meta.names
      } else if (_.isArray(e.matched[0].meta.names)) {
        this.breadCrumb =  e.matched[0].meta.names
      }
      this.currentName = e.name
      this.currentMenuName = e.meta.names[1]
    }
  },
  created () {
    this.onRouteChanged(this.$route)
  }
}
</script>
