<template>
  <div id="app">
    <Header />
    <Tab />
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
  }
}
</script>

<style>

</style>
