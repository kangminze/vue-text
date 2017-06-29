// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import Routers from './router.js';
import VueResource from 'vue-resource';
import App from './App';
import ApiServer from '@/plugin/url/url';
import 'iview/dist/styles/iview.css';

// vue plugin config
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ApiServer);
// plugin end

const RouterConfig = {
  routes: Routers
};

const router = new VueRouter(RouterConfig);
/* eslint-disable no-new */
const vue = new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
}).$mount('#app');

vue.$router.replace('containers');
