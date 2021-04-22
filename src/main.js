import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import "bootstrap/dist/css/bootstrap.css";
import './assets/reset.scss'
import './assets/common.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Dialog
import VuejsDialog from 'vuejs-dialog'
import 'vuejs-dialog/dist/vuejs-dialog.min.css'

// Global Utlity on Template
import './components/common'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VuejsDialog)

Vue.config.productionTip = false

new Vue({
    render: (h) => h(App),
}).$mount('#app')
