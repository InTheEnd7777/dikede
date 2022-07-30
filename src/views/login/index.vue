<template>
  <div class="main">

    <div class="login">
      <div> <img src="@/assets/logo.595745bd.png" alt="" class="imgtubiao"></div>

      <div>
        <el-form ref="ruleForm" status-icon class="demo-ruleForm">
          <el-form-item>
            <el-input autocomplete="off" prefix-icon="el-icon-mobile-phone" />
          </el-form-item>
          <el-form-item>
            <el-input autocomplete="off" prefix-icon="el-icon-lock"> <template #suffix>
              <span class="iconfont icon-biyanjing" />
            </template></el-input>
          </el-form-item>
          <el-form-item>
            <el-input autocomplete="off">
              <template #prefix>
                <span class="iconfont icon-mn_dunpai" />
              </template>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="btnlogin">
        <el-row>
          <el-button class="q1">登录</el-button>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
import '@/assets/iconfont/iconfont.css'

export default {
  data() {
    return {

    }
  },

  created() {

  },

  methods: {

  }
}
</script>

<style scoped>
.main{
  background: url('../../assets/background.be4fae7d.png') no-repeat center ;
  background-size: cover;
  height: 100%;}
  .login{
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
  }
  .btnlogin{
        height: 52px;
    background: linear-gradient(262deg,#2e50e1,#6878f0);

  }
    .q1{
      width: 100%;
              height: 52px;
color: #fff;
    background: linear-gradient(262deg,#2e50e1,#6878f0);

    }
    .imgtubiao{
      position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
    }
</style>
