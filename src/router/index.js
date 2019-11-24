import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Assessment from '../components/Assessment'
import Results from '../components/Results'
import ShowResult from '../components/ShowResult'
import Customize from '../components/Customize'
import ThankYou from '../components/ThankYou'


Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    name: 'login', 
    component: Login
  },
  {
    path: '/login', name: 'login2', component: Login
  },
  {
    path: '/home', name: 'home', component: Home
  },
  {
    path: '/register', name: 'register', component: Register
  },
  {
    path: '/assessment', name: 'asssessment', component: Assessment
  },
  {
    path: '/thankyou', name: 'thankyou', component: ThankYou
  },
  {
    path: '/results', name: 'results', component: Results
  },
  {
    path: '/results/show', name: 'show-result', component: ShowResult
  },
  {
    path: '/customize', name: 'customize', component: Customize
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
