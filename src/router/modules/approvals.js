import Layout from "@/layout";
export default {
  path: "/Workordermanagement",
  component: Layout,
  meta: { title: "工单管理", icon: "Notepad-记事本-1" },

  children: [
    {
      path: "/Workordermanagement/approvals",
      component: () => import("@/views/Workordermanagement/approvals"),
      meta: { title: "运营工单" },
    },
    {
      path: "/Workordermanagement/approvals1",
      component: () => import("@/views/Workordermanagement/approvals1"),

      meta: { title: "运维工单"},
    },
  ],
};
