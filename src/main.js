import { createApp } from 'vue'
import App from './App.vue'
import smoothScroll from './directives/smoothScroll'

const app = createApp(App)
app.directive('smooth-scroll', smoothScroll)
app.mount('#app')