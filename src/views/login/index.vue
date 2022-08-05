<template>
  <div class="main">
    <div class="login">
      <div>
        <img src="@/assets/logo.595745bd.png" alt="" class="imgtubiao" />
      </div>

      <div>
        <el-form
          ref="listfrom"
          class="demo-ruleForm"
          :model="listfrom"
          :rules="listfromrules"
        >
          <el-form-item prop="mobile">
            <el-input
              autocomplete="off"
              prefix-icon="el-icon-mobile-phone"
              v-model="listfrom.mobile"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              autocomplete="off"
              prefix-icon="el-icon-lock"
              v-model="listfrom.password"
            >
              <template #suffix>
                <span class="iconfont icon-biyanjing" /> </template
            ></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input autocomplete="off" v-model="listfrom.code">
              <template #prefix>
                <span class="iconfont icon-mn_dunpai" />
              </template>
              <template #suffix>
                <img :src="imgs" alt="" @click="upimgcomde" />
              </template>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="btnlogin">
        <el-row>
          <el-button class="q1" :loading="islogin" @click="loginbtn"
            >登录</el-button
          >
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
import { getcode } from "@/api/user";
export default {
  data() {
    return {
      islogin: false,

      imgs: "",
      listfrom: {
        clientToken: "",
        mobile: "admin",
        password: "admin",
        code: "",
        loginType: 0,
      },
      listfromrules: {
        mobile: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            pattern: /^admin$/,
            message: "账号格式不正确",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^admin$/,

            // pattern: /^admin{1,5}$/,
            message: "密码格式不正确",
            trigger: "blur",
          },
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, massage: "验证码格式错误", trigger: "blur" },
        ],
      },
    };
  },

  created() {
    this.getcode();
  },

  methods: {
    async getcode() {
      //生成4位随机数
      const num = Math.floor(Math.random() * 10000);
      const res = await getcode(num);
      this.listfrom.clientToken = num;

      // this.$refs.imgCode.src = res.request.responseURL;
      // console.log(res);
      const captchaimg = window.URL.createObjectURL(res.data);
      this.imgs = captchaimg;
    },
    async loginbtn() {
      this.islogin = true;
      try {
        await this.$refs.listfrom.validate();
        await this.$store.dispatch("user/gettoken", this.listfrom);
        // this.$router.push("/dashboard");
        this.$router.push("/");
        this.$message.success("登录成功");
      } finally {
        this.islogin = false;
      }
      // console.log(this.listfrom);
    },
    //点击切换验证码
    upimgcomde() {
      this.getcode();
    },
  },
};
</script>

<style scoped lang="less">
.main {
  background: url("../../assets/background.be4fae7d.png") no-repeat center;
  background-size: cover;
  height: 100%;
}
.login {
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
.btnlogin {
  height: 52px;
  background: linear-gradient(262deg, #2e50e1, #6878f0);
}
.q1 {
  width: 100%;
  height: 52px;
  color: #fff;
  background: linear-gradient(262deg, #2e50e1, #6878f0);
}
.imgtubiao {
  position: absolute;
  width: 96px;
  height: 96px;
  top: -46px;
  left: 50%;
  margin-left: -48px;
}
/deep/.el-input__inner {
  height: 50px;
}
</style>
