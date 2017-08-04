import Vue from 'vue';
import Router from 'vue-router';
import customList from '../components/personalTsailor/customList';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/personalTsailor',
      name: 'personalTsailor',
      component: customList

    }
  ]
})
