import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Report from '../views/Report.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/report/m/:headId',
    name: 'report-head',
    props: true,
    component: Report
  },
  {
    path: '/report/:departmentId/:staffId',
    name: 'report-staff',
    props: true,
    component: Report
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
