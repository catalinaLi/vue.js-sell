// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import GOODS from './components/goods/goods.vue';
import RATINGS from './components/ratings/ratings.vue';
import SELLER from './components/seller/seller.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

let router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        { path: '/goods', name: 'goods', component: GOODS },
        { path: '/ratings', name: 'ratings', component: RATINGS },
        { path: '/seller', name: 'seller', component: SELLER },
        {path: '*', redirect: '/goods'}
    ]
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: c => c(App)
});
