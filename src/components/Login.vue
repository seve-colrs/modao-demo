<template>
  <div class="login-container">
    <!-- 登录框 -->
    <div class="login-box">
      <!-- logo -->
      <div class="logo">LOGO</div>
      <!-- 表单区域 -->
      <el-form label-width="0" class="login_form">
        <!-- 用户名 -->
        <el-form-item>
          <el-input
            prefix-icon="iconfont icon-yonghu"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item class="input_password">
          <el-input
            prefix-icon="iconfont icon-mima"
            placeholder="请输入密码"
            class="password"
          ></el-input>
        </el-form-item>
        <!-- 记住密码复选框 -->
        <el-form-item class="rem_key">
          <el-checkbox v-model="checked">记住密码</el-checkbox>
        </el-form-item>
        <!-- 登录按钮 编写跳转逻辑 -->
        <el-form-item class="login_btns">
          <el-button type="primary" @click="gotoHome">登 录</el-button>
        </el-form-item>
        <!-- 注册账号/忘记密码块 -->
        <el-form-item class="login_nav">
          <div class="forflex">
            <el-link type="primary" :underline="false">注册账号</el-link>
            <!-- <a href="">注册账号</a> -->
            <span>|</span>
            <!-- <a href="">忘记密码</a> -->
            <el-link type="primary" :underline="false">忘记密码</el-link>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  },
  methods: {
    //点击登录 跳转至主页
    gotoHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  position: relative;
  height: 100%;
  background-color: #2b4b6b;

  .login-box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 490px;
    height: 440px;
    background-color: rgba(255, 255, 255, 1);
    text-align: center;
    border-radius: 3px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
    font-family: Roboto;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;

    .logo {
      width: 75px;
      height: 75px;
      margin: 50px auto;
      background-color: rgba(58, 98, 215, 1);
      line-height: 75px;
      text-align: center;
      border-radius: 50%;
      font-size: 18px;
      color: rgba(255, 255, 255, 1);
      font-family: Roboto;
    }
    //表单样式
    .login_form {
      width: 340px;
      margin: 0 75px;
      .el-form-item {
        margin-bottom: 0;
        .el-input {
          border-radius: 3px 3px 0px 0px;
          color: rgba(190, 190, 190, 1);
        }
        .password {
          border-top: 0;
        }
      }
      ::v-deep .el-input__inner:focus {
        border-color: #dcdfe6 !important;
      }
      ::v-deep .input_password {
        .el-input__inner {
          border-top: 0;
        }
      }
      .rem_key {
        display: flex;
        justify-content: flex-start;
        margin: 10px 0;
      }
      .login_btns {
        margin-bottom: 10px;
        .el-button {
          width: 100%;
          background-color: rgba(58, 98, 215, 1);
        }
      }
      .login_nav {
        .forflex {
          display: flex;
          justify-content: space-between;
          width: 100%;
          color: #bbbbbb;
          // background-color: pink;
        }
        .el-link {
          color: rgba(58, 98, 215, 1);
        }
      }
    }
  }
}
</style>
