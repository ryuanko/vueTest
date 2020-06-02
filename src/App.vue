<template>
  <div id="app">
      <a-layout style="minHeight: 92%; background: white;">
        <Header/>
        <work-space>
          <router-view />
        </work-space>
      </a-layout>
      <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import WorkSpace from '@/components/WorkSpace'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: { Header, Footer, WorkSpace},
  data() {
    return {}
  },
}
</script>

<style>
</style>
