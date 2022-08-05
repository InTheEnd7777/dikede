import Layout from "@/layout";
export default {
  path: "/Personnelmanagement",
  component: Layout,
  meta: { title: "人员管理", icon: "人员管理 (1)" },

  children: [
    {
      path: "/Personnelmanagement/permission",
      component: () => import("@/views/Personnelmanagement/permission"),
      meta: { title: "人员列表" },
    },
    {
      path: "/Personnelmanagement/permission1",
      component: () => import("@/views/Personnelmanagement/permission1"),
      meta: { title: "人效统计" },
    },
    {
      path: "/Personnelmanagement/permission2",
      component: () => import("@/views/Personnelmanagement/permission2"),
      meta: { title: "工作量列表" },
    },
  ],
};
