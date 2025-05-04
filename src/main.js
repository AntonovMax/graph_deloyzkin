import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import Graph from './components/Graph.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/graph', component: Graph },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')
