import Vue from 'vue';
import App from './App';
import '../utils/vant-components'
import 'vant/lib/index.css';
import { router } from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
