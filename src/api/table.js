import request from "@/utils/request";

export function getList(params) {
  return request({
    url: "/vue-admin-template/table/list",
    method: "get",
    params,
  });
}
/**
 * 获取所有工单类型
 * @returns pormise
 */
export function gettastlisttype() {
  return request({
    url: "/task-service/taskType/list",
    method: "get",
  });
}
export function gettastlist() {
  return request({
    url: "/task-service/task/search",
    method: "GET",
  });
}
