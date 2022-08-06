<template>
  <div>
    <div class="nav">
      工单编号：<Input
        placeholder="请输入内容"
        class="inputtext"
        type="serch"
      ></Input>
      工单状态：<Select></Select>

      <Button type="serch"><i class="el-icon-search"></i> 搜索</Button>
    </div>
    <div class="main">
      <Button type="new">
        <i class="el-icon-circle-plus-outline"></i> 新建</Button
      >
      <Table :list="list"></Table>
    </div>
  </div>
</template>

<script>
import Button from "@/components/BUtton/index.vue";
import Input from "@/components/imput/index.vue";
import Select from "@/components/select";
import Table from "@/components/table";
import { gettastlist } from "@/api/table";
export default {
  data() {
    return {
      list: [],
    };
  },
  components: {
    Input,
    Button,
    Select,
    Table,
  },
  created() {
    this.gettastlist();
  },

  methods: {
    async gettastlist() {
      const res = await gettastlist();
      this.list = res.data.currentPageRecords;
    },
  },
};
</script>

<style scoped lang="less">
.nav {
  display: flex;
  height: 80px;
  background-color: #fff;
  align-items: center;
  padding-left: 25px;
  .inputtext {
    margin-right: 15px;
    width: 240px;
  }
}
.main {
  background-color: #fff;
  padding-left: 25px;
  margin-top: 25px;
}
</style>
