import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/layout/Home.vue'
// 基底首頁

// import title from './components/title/index.vue'
// title連接

// import item from './components/form/index.vue'
// ---
// form連接

import chart from './components/chart/index.vue'
// chart連結




Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			redirect: '/System',
			component: Home,
			children: [
				{
					path:'System',
					name:'index',
					component: chart
				}
			]
		}
	]
})
