import Vue from 'vue';
import Router from './Router';
import {Store} from './Store';
import VueCookie from 'vue-cookie';
import Loader from '@/components/Loader';
import Header from '@/components/Header';
import {AuthClient} from '@/api-clients/AuthClient';
import {beforeRoute} from './middlewares/AuthMiddleware';

Vue.use(VueCookie);

window.jQuery = window.$ = require('jquery');

new Vue({
	el: '.app-zcirfeu52g',
	store: Store,
	router: Router,
	components: {
		Loader,
		'v-header': Header
	},
	mounted() {

		/* Let's just set our authenticated status to true since we're not */
		/* dealing with authentication 									*/
		Store.dispatch('auth/updateAuthenticatedStatus', true);
		Store.dispatch('auth/updateHandshakeStatus', true);

		// AuthClient.getToken().then((response) => {
		// 	Store.dispatch('auth/updateAuthenticatedStatus', true);
		// 	Store.dispatch('auth/updateHandshakeStatus', true);
		// }).catch((err) => {
		// 	console.log(err);
	}
});