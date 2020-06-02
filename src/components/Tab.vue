<template>
    <div>
      <a-tabs v-if="tabs.length > 0" @change="callback" size="small" :activeKey="activeKey">
          <a-tab-pane v-for="tab in tabs"
            :tab="tab.name"
            :key="tab.id">
          </a-tab-pane>
      </a-tabs>
    </div>
</template>

<script>
export default {
  name: 's-tab',
  data() {
    return {
      tabs: [],
      activeKey: this.$router.history.current.name
    }
  },
  computed: {},
  created() {
    this.onRouteChanged(this.$route)
  },

  watch: {
    $route: 'onRouteChanged'
  },

  methods: {
    onRouteChanged(data) {
      this.activeKey = data.name
      this.tabs =[]
      
      data.meta.tabs.forEach(t => {
        this.tabs.push(t)
      })
    },

    callback(key) {
      this.$router.push({name: key})
    }
  }
}
</script>
