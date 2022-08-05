<template>
  <div>
    <div class="nav">
      工单编号：<el-input placeholder="请输入内容" class="inputtext"></el-input>
      工单状态：
      <el-select v-model="value" placeholder="请选择" class="inputtext">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <div class="main">
      <el-button type="primary" icon="el-icon-circle-plus">新建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "代办",
        },
        {
          value: "选项2",
          label: "进行",
        },
        {
          value: "选项3",
          label: "取消",
        },
        {
          value: "选项4",
          label: "完成",
        },
      ],
      value: "",
    };
  },

  created() {},

  methods: {},
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
}
</style>
