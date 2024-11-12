import { createRouter, createWebHistory } from 'vue-router'
import About from './../components/About.vue'
import Contact from './../components/Contact.vue'
import Experience from './../components/Experience.vue'
// import Footer from './../components/Footer.vue'
// import Header from './../components/Header.vue'
// import Navbar from './../components/Navbar.vue'
import Projects from './../components/Projects.vue'
import HomePage from './../components/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/About', component: About },
  { path: '/Contact', component: Contact },
  { path: '/Experience', component: Experience },
  { path: '/Projects', component: Projects },
  //{ path: '/Footer', component: Footer },
  //{ path: '/Header', component: Header },
  //{ path: '/Navbar', component: Navbar },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
