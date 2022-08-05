import router from "@/router/index";
import store from "@/store";
const whitelist = ["/login", "404"];

router.beforeEach(async (to, from, next) => {
  const token = store.state.user.token;

  if (token) {
    // const userId = store.state.user.userId;
    // console.log(id)
    await store.dispatch("user/getinfolist");
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
