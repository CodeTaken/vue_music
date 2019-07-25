<template>
  <div id="app">
    <Header v-if="this.$route.meta.headerStatus" />
    <Tab v-if="this.$route.meta.tabStatus" />
    <router-view/>
    <SongPlay v-if="playShow" />
  </div>
</template>

<script>
  import Header from './components/Header/Header'
  import Tab from './components/Tab/Tab'
  import SongPlay  from './components/SongPlay/SongPlay'
  import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components:{
    Header,
    Tab,
    SongPlay
  },
  mounted(){

  },
  computed:{
    ...mapGetters(['playShow','currentPlayIndex'])
  }
}
</script>

<style>

</style>
