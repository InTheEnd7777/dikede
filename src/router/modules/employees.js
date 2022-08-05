import Layout from "@/layout";
export default {
  path: "/Devicemanagement",
  component: Layout,
  meta: { title: "设备管理", icon: "充电桩" },

  children: [
    {
      path: "/Devicemanagement/employees",
      component: () => import("@/views/Devicemanagement/employees"),
      meta: { title: "设备管理" },
    },
    {
      path: "/Devicemanagement/employees1",
      component: () => import("@/views/Devicemanagement/employees1"),
      meta: { title: "设备状态" },
    },
    {
      path: "/Devicemanagement/employees2",
      component: () => import("@/views/Devicemanagement/employees2"),
      meta: { title: "设备类型管理" },
    },
  ],
};
