import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const app = new Vue({
	render: (h) => h(App),
	router
});

app.$mount("#app");
