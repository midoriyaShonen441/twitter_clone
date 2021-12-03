import VueRouter from "vue-router";
import Login from "./views/Login";

const routes = [{ path: "/", component: Login }];

const router = new VueRouter({ mode: "history", routes });

export default router;
