import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { getAuthenticatedUser } from "./util/utils";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

async function init() {
  await getAuthenticatedUser();
  router.beforeEach(async (to, from, next) => {
    if (to.path !== "/login" && !store.getters.getIsAuthenticated) {
      try {
        const statusCode = await refreshToken();
        if (statusCode !== 200) next("/login");
        else next();
      } catch (error) {
        next("/login");
      }
    } else {
      next();
    }
  });

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
}

init();
