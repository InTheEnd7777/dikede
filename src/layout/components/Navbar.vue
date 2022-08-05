<template>
  <div class="navbar">
    <div class="right-menu">
      <div class="avatar-container">
        <div class="avatar-wrapper">
          <img
            :src="$store.state.user.infolist.image+123"
            v-imgError="defaulimg"
            class="user-avatar"
          />
          <span> 欢迎您， {{ $store.state.user.infolist.userName }} </span>
          <div>
            <el-button type="text" @click="islogin"
              >退出<i class="el-icon-arrow-down el-icon--right"></i
            ></el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import store from "@/store";
import defaulimg from '@/assets/ji.jpg'
export default {
  data() {
    return {
      defaulimg
    }
  },
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    islogin() {
      store.dispatch("user/removeall");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 65px;
  overflow: hidden;
  position: relative;
  background: #5373e0;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        position: relative;
        margin-top: 5px;
        // 开启flex
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 15px;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        span {
          margin: 0 5px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
        .el-button.is-disabled {
          color: #fff;
          margin-left: 10px;
        }
        .el-button--text {
          color: #fff;
        }
      }
    }
  }
}
</style>
