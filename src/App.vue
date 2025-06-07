<template>
  <div id="app">
    <AppHeader />
    <AppMainContent />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppMainContent from './components/MainContent.vue'
import AppFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMainContent,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
}

.main-content {
  flex: 1; /* Занимает всё доступное пространство */
}
</style>

<style>
body {
  margin: 0;
  padding-top: 60px; /* должно соответствовать высоте вашего header */
  min-width: 320px; /* минимальная ширина для мобильных */
}
</style>