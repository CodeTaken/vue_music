<template>
  <div id="app">
    <Header v-if="this.$route.meta.headerStatus" />
    <Tab v-if="this.$route.meta.tabStatus" />
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header/Header'
  import Tab from './components/Tab/Tab'
export default {
  name: 'App',
  components:{
    Header,
    Tab
  },
  mounted(){

  }
}
</script>

<style>

</style>
