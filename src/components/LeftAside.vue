<template>
  <div class="leftAside_container">
    <!-- 左侧静态栏 -->
    <div class="left_nav">
      <!-- 头部 角色选择 -->
      <div class="left_navTitle">
        <span class="iconfont icon-gerenziliao">&nbsp;&nbsp;角色选择</span>
      </div>
      <!-- 选择项 -->
      <div class="left_navDetail">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-menu-item index="1" @click="showPoc">
            <i class="iconfont icon-chanpinguanli"></i>
            <span slot="title">&nbsp;&nbsp;产品设计</span>
          </el-menu-item>
          <el-menu-item index="2" @click="showTec">
            <i class="iconfont icon-diannao"></i>
            <span slot="title">&nbsp;&nbsp;技术研发</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="iconfont icon-yanshouqueren"></i>
            <span slot="title">&nbsp;&nbsp;测试验收</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    //显示产品动态栏
    showPoc() {
      this.$store.state.pocShow = !this.$store.state.pocShow;
      if (!this.$store.state.pocShow) {
        this.$store.state.hisShow = false;
      } else {
        this.$store.state.tecShow = false;
      }
    },
    //显示技术动态栏
    showTec() {
      this.$store.state.tecShow = !this.$store.state.tecShow;
      if (this.$store.state.tecShow) {
        this.$store.state.pocShow = false;
        this.$store.state.hisShow = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.leftAside_container {
  position: relative;
  width: 200px;
  height: 877px;
  box-sizing: border-box;
  border-right: 1px solid rgba(187, 187, 187, 1);
  background-color: rgba(255, 255, 255, 1);
  // 左侧静态
  .left_nav {
    // 标题 角色选择
    .left_navTitle {
      height: 50px;
      padding-left: 28px;
      border-bottom: 1px solid rgba(187, 187, 187, 1);
      box-sizing: border-box;
      line-height: 50px;
      font-size: 18px;
    }
    //详细 选项
    .left_navDetail {
      .el-menu {
        .el-menu-item {
          padding-left: 28px !important;
        }
      }
    }
  }
  // // 左侧动态
  // .left_nav_dy {
  //   position: absolute;
  //   background-color: pink;
  //   left: 150px;
  //   top: 0;
  //   width: 200px;
  //   height: 877px;
  //   z-index: 10;
  //   // background-color: rgba(255, 255, 255, 1);
  // }
}
</style>
