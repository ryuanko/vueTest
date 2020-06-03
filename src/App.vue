<template>
  <div id="app">
    <Header/>
    <work-space>
      <router-view />
    </work-space>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import WorkSpace from '@/components/WorkSpace'
import Footer from '@/components/Footer'

export default {
  components: { Header, Footer, WorkSpace},
  data() {
    return {}
  },
}
</script>
