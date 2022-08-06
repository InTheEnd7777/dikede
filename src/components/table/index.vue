<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column type="index" label="序号"> </el-table-column>
    <el-table-column prop="taskCode" label="工单编号"> </el-table-column>
    <el-table-column prop="innerCode" label="设备编号"> </el-table-column>
    <el-table-column prop="taskType.typeName" label="工单类型">
    </el-table-column>
    <el-table-column prop="address" label="工单方式" :formatter="gzfs">
    </el-table-column>
    <el-table-column prop="taskStatusTypeEntity.statusName" label="工单状态">
    </el-table-column>
    <el-table-column prop="userName" label="运维人员"> </el-table-column>
    <el-table-column :formatter="times" prop="createTime" label="创建日期">
    </el-table-column>
    <el-table-column prop="address" label="操作"> </el-table-column>
  </el-table>
</template>

<script>
import * as moment from "moment";

export default {
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  computed: {},
  created() {},
  methods: {
    times(row) {
      return moment(row.createTime).format("yyyy-MM-DD hh:mm:ss");
    },
    gzfs(row){
     return row.createType==='1'?'自动':'手动'
    }
  },
};
</script>

<style scoped></style>
