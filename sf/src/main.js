import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
// vant ui
import 'vant/lib/index.css';
import { Cell, CellGroup } from 'vant';
import { Switch } from 'vant';
import { Tab, Tabs } from 'vant';
import { Button } from 'vant';
import { Actionsheet } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Field } from 'vant';
import { Dialog } from 'vant';

Vue.use(Dialog);
Vue.use(Field);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Actionsheet);
Vue.use(Button);
Vue.use(Tab).use(Tabs);
Vue.use(Switch);
Vue.use(Cell).use(CellGroup);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router 
}).$mount('#app')