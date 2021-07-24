import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/views/Home.vue'
import AllJob from '../components/views/AllJob.vue'
import Contact from '../components/views/Contact.vue'
import StudentLogin from '../components/views/StudentLogin.vue'
// import JobDetail from '../components/views/JobDetail.vue'

//recruiter//
import Recruiter from '../components/views/Recruiter.vue'
import RecruiterRegister from '../components/views/RecruiterRegister.vue'
import RecruiterProfile from '../components/views/RecruiterProfile.vue'
import RecruiterLogin from '../components/views/RecruiterLogin.vue'

import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios);
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/all',
      component: AllJob
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/student-login',
      component: StudentLogin,
    },
    // {
    //   path: '/job-detail',
    //   component: JobDetail,
    // },
    {
      path: '/recruiter',
      component: Recruiter,
    },
    {
      path: '/recruiter-register',
      component: RecruiterRegister,
    },
    {
      path: '/recruiter-profile',
      component: RecruiterProfile,
    },
    {
      path: '/recruiter-login',
      component: RecruiterLogin
    }
  ]
})
export default router
