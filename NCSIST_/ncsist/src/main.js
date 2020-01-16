import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/header/index.vue'
import Footer from './components/layout/footer.vue'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import $ from 'jquery'
Vue.use($);
//home highchart
Vue.config.productionTip = false
Vue.component('Header', Header)
Vue.component('Footer', Footer)

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
