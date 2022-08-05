import Layout from "@/layout";
export default {
  path: "/Pointmanagement",
  component: Layout,
  meta: { title: "点位管理", icon: "地址" },

  children: [
    {
      path: "/Pointmanagement/departments",
      component: () => import("@/views/Pointmanagement/departments"),
      meta: { title: "合作商管理" },
    },
    {
      path: "/Pointmanagement/departments1",
      component: () => import("@/views/Pointmanagement/departments1"),
      meta: { title: "点位管理" },
    },
    {
      path: "/Pointmanagement/departments2",
      component: () => import("@/views/Pointmanagement/departments2"),
      meta: { title: "合作商管理" },
    },
  ],
};
