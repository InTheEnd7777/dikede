import Layout from "@/layout";
export default {
  path: "/commoditymanagement",
  component: Layout,
  meta: { title: "商品管理", icon:"拼团" },

  children: [
    {
      path: "/commoditymanagement/attendances",
      component: () => import("@/views/commoditymanagement/attendances"),
      meta: { title: "商品类型" },
    },
    {
      path: "/commoditymanagement/attendances1",
      component: () => import("@/views/commoditymanagement/attendances"),
      meta: { title: "商品管理" },
    },
  ],
};
