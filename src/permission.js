import router from "@/router/index";
import store from "@/store";
const whitelist = ["/login", "404"];

router.beforeEach((to, from, next) => {
  const token = store.state.user.token;

  if (token) {
    const id = store.state.user.userId;
    console.log(id)
    store.dispatch("user/getinfolist", id);
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    const iswhitelist = whitelist.includes(to.path);
    if (iswhitelist) {
      next();
    } else {
      next("/login");
    }
  }
});
