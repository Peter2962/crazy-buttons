import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Demo from './views/Demo';
import AboutUs from './views/AboutUs';
import Login from './views/auth/Login';
import Register from './views/auth/Register';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			name: 'home',
			path: '/',
			component: Home
		},
		{
			name: 'auth.login',
			path: '/login',
			component: Login
		},
		{
			name: 'auth.register',
			path: '/register',
			component: Register
		},
		{
			name: 'demo',
			path: '/demo',
			component: Demo
		},
		{
			name: 'about-us',
			path: '/about-us',
			component: AboutUs
		}
	]
});