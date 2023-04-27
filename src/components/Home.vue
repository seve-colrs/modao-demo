<template>
  <div class="home-container">
    <!-- <button @click="test">test</button> -->
    <el-container>
      <el-header>
        <!-- 导航顶栏 -->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <div class="headNav">
            <!-- 顶栏左侧区域 -->
            <div class="headNav_left">
              <!-- RDR LOGO -->
              <div class="rdr_logo">RDR</div>
              <!-- AI工作台 -->
              <el-submenu index="ai" class="ai_workplace">
                <template slot="title">AI工作台</template>
                <el-menu-item index="2-1">AI工作台</el-menu-item>
              </el-submenu>
            </div>
            <!-- 顶栏右侧区域 -->
            <div class="headNav_right">
              <!-- 模块名称 -->
              <el-submenu index="module" class="module_name">
                <template slot="title">模块名称</template>
                <el-menu-item>模块名称</el-menu-item>
                <el-menu-item>模块名称</el-menu-item>
                <el-menu-item>模块名称</el-menu-item>
              </el-submenu>
              <!-- 铃铛icon -->
              <span class="bell iconfont icon-tixing"></span>
              <!-- Name -->
              <span class="name_text">Name</span>
              <!-- 菜单ICON -->
              <span class="iconfont icon-caidan"></span>
            </div>
          </div>

          <!-- <el-menu-item index="1">处理中心</el-menu-item> -->
        </el-menu>
      </el-header>
      <!-- 整个中间区域 -->
      <el-container class="main_body">
        <!-- 左侧动态栏1_POC -->
        <div class="left_nav_dy1_poc" v-if="this.$store.state.pocShow">
          <!-- 头部 角色选择 -->
          <div class="left_navTitle">
            <span class="iconfont icon-gerenziliao">&nbsp;&nbsp;专业选择</span>
          </div>
          <!-- 选择项 -->
          <div class="left_navDetail">
            <el-menu default-active="2" class="el-menu-vertical-demo">
              <el-menu-item index="1" @click="showHis">
                <i class="iconfont icon-chanpinguanli"></i>
                <span slot="title">&nbsp;&nbsp;原型图</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="iconfont icon-wodechanpin"></i>
                <span slot="title">&nbsp;&nbsp;流程图</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="iconfont icon-flow-line"></i>
                <span slot="title">&nbsp;&nbsp;思维导图</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="iconfont icon-chanpincaijiguanli"></i>
                <span slot="title">&nbsp;&nbsp;设计图</span>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
        <!-- 左侧动态栏1_Tec -->
        <div class="left_nav_dy1_tec" v-if="this.$store.state.tecShow">
          <!-- 头部 角色选择 -->
          <div class="left_navTitle">
            <span class="iconfont icon-gerenziliao">&nbsp;&nbsp;专业选择</span>
          </div>
          <!-- 选择项 -->
          <div class="left_navDetail">
            <el-menu default-active="2" class="el-menu-vertical-demo">
              <el-menu-item index="1">
                <i class="iconfont icon-chanpinguanli"></i>
                <span slot="title">&nbsp;&nbsp;Java</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="iconfont icon-wodechanpin"></i>
                <span slot="title">&nbsp;&nbsp;HTML</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="iconfont icon-flow-line"></i>
                <span slot="title">&nbsp;&nbsp;Python</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="iconfont icon-chanpincaijiguanli"></i>
                <span slot="title">&nbsp;&nbsp;Mango</span>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
        <!-- 左侧动态栏2 -->
        <div class="left_nav_dy2" v-if="this.$store.state.hisShow">
          <!-- 头部 新建任务 -->
          <div class="left_navTitle" @click="moveDy2">
            <div class="left_newTask">
              <span class="iconfont icon-tianjia">&nbsp;&nbsp;新建任务</span>
            </div>
          </div>
          <!-- 选择项 -->
          <div class="left_navDetail">
            <el-menu default-active="2" class="el-menu-vertical-demo">
              <el-menu-item index="1">
                <i class="iconfont icon-lishijilu"></i>
                <span slot="title">&nbsp;&nbsp;历史任务1</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="iconfont icon-lishijilu"></i>
                <span slot="title">&nbsp;&nbsp;历史任务2</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="iconfont icon-lishijilu"></i>
                <span slot="title">&nbsp;&nbsp;历史任务3</span>
              </el-menu-item>
              <el-menu-item index="4" @click="changeToChat">
                <i class="iconfont icon-lishijilu"></i>
                <span slot="title">&nbsp;&nbsp;历史任务4</span>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
        <!-- 动画动态栏3 -->
        <div class="left_nav_dy3" v-if="this.$store.state.hisDyShow">
          <!-- 头部 新建任务 -->
          <div class="left_navTitle" @click="moveDy2">
            <div class="left_newTask">
              <span class="iconfont icon-tianjia">&nbsp;&nbsp;新建任务</span>
            </div>
          </div>
          <!-- 选择项 -->
          <div class="left_navDetail">
            <el-menu default-active="2" class="el-menu-vertical-demo">
              <el-menu-item index="1" @click="comName = 'Chat'">
                <i class="iconfont icon-yanshouqueren"></i>
                <span slot="title">&nbsp;&nbsp;历史任务1</span>
              </el-menu-item>
              <el-menu-item index="2" @click="comName = 'Main'">
                <i class="iconfont icon-yanshouqueren"></i>
                <span slot="title">&nbsp;&nbsp;历史任务2</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="iconfont icon-yanshouqueren"></i>
                <span slot="title">&nbsp;&nbsp;历史任务3</span>
              </el-menu-item>
              <el-menu-item index="4" @click="changeToChat">
                <i class="iconfont icon-yanshouqueren"></i>
                <span slot="title">&nbsp;&nbsp;历史任务4</span>
              </el-menu-item>
            </el-menu>
          </div>
          <!-- 返回上一页 -->
          <div class="return_his">
            <div class="return_btn" @click="changeToMain">
              <i class="iconfont icon-fanhui"></i>
              <span>回到上一页</span>
            </div>
          </div>
        </div>
        <!-- LeftAside左侧区域 -->
        <el-aside width="200px" class="left_Aside">
          <LeftAside></LeftAside>
        </el-aside>
        <!-- Main主体区域 动态组件实现 -->
        <el-main>
          <component :is="comName"></component>
          <!-- <Main></Main> -->
        </el-main>
        <!-- RightAside右侧区域 -->
        <el-aside width="200px">
          <RightAside></RightAside>
        </el-aside>
      </el-container>
      <!-- foot底部区域 -->
      <el-footer></el-footer>
    </el-container>
    <!-- 存放子组件：技术研发 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import LeftAside from "@/components/LeftAside.vue";
import RightAside from "@/components/RightAside.vue";
import Chat from "@/components/Chat.vue";
export default {
  components: {
    Main,
    LeftAside,
    RightAside,
    Chat
  },
  data() {
    return {
      activeIndex: "2",
      // 动态渲染的main组件
      comName: "Main"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // test() {
    //   console.log(this.$store);
    // },
    // 显示历史任务 动态栏2
    showHis() {
      this.$store.state.hisShow = !this.$store.state.hisShow;
    },
    // 显示dy3,隐藏dy1,dy2
    moveDy2() {
      // console.log(this.$style);
      this.$store.state.hisShow = false;
      this.$store.state.pocShow = false;
      this.$store.state.tecShow = false;
      this.$store.state.hisDyShow = true;
    },
    //隐藏 dy3,显示dy1,dy2
    hideDy3() {
      this.$store.state.hisShow = true;
      this.$store.state.pocShow = true;
      this.$store.state.tecShow = true;
      this.$store.state.hisDyShow = false;
    },
    //动态改变main
    changeToChat() {
      this.comName = "Chat";
      this.moveDy2();
    },
    //动态改变为change，并隐藏dy3，显示dy1,dy2
    changeToMain() {
      (this.comName = "Main"), this.hideDy3();
    }
  },
  computed: {
    // pocShow() {
    //   return this.$store.state.pocShow;
    // },
  }
};
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
  width: 100%;
  // .el-menu-item:hover {
  //   outline: 0 !important;
  //   color: #409eff !important;
  // }
}

//顶栏导航区域
::v-deep .headNav {
  display: flex;
  width: 100%;
  background-color: rgba(102, 102, 102, 1);
  // justify-content: space-around;
  // 顶栏左侧区域
  .headNav_left {
    display: flex;
    color: rgba(255, 255, 255, 1);

    // .ai_workplace,
    // li,
    // li:hover,
    // .el-submenu {
    //   background-color: transparent !important;
    //   background: none;
    // }
    .el-submenu__title {
      color: #fff;
      i {
        margin-left: 40px;
      }
    }
    .rdr_logo {
      margin: 15px 34px;
      font-size: 17px;
      font-family: Roboto-regular;
      &::after {
        content: "|";
        margin-left: 34px;
      }
    }
    .ai_workplace {
      width: 120px;
    }
  }
  // 顶部右侧区域
  .headNav_right {
    display: flex;
    margin-left: 980px;
    .el-submenu__title {
      width: 150px;
      color: #fff;
    }
    .bell {
      margin-left: 10px;
      margin-right: 30px;
    }
    .name_text {
      font-size: 12px;
    }
    span {
      display: inline-block;
      height: 56px;
      line-height: 56px;
      color: #fff;
    }
  }
}
//leftAside区域
.left_Aside {
}
// main区域
.el-main {
  padding: 0;
}
//整个中心区域
.main_body {
  position: relative;
  // 左侧动态1
  .left_nav_dy1_poc,
  .left_nav_dy1_tec {
    position: absolute;
    // background-color: pink;
    left: 150px;
    top: 0;
    width: 200px;
    height: 877px;
    border-left: 1px solid rgba(187, 187, 187, 1);
    z-index: 10;
    background-color: rgba(255, 255, 255, 1);
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
  // 左侧动态2
  .left_nav_dy2 {
    position: absolute;
    // background-color: blue;
    left: 300px;
    top: 0;
    width: 200px;
    height: 877px;
    z-index: 11;
    border-left: 1px solid rgba(187, 187, 187, 1);
    border-right: 1px solid rgba(187, 187, 187, 1);
    background-color: rgba(255, 255, 255, 1);
    // 标题 角色选择
    .left_navTitle {
      height: 50px;
      padding: 10px 18px;
      // border: 1px solid rgba(187, 187, 187, 1);
      // border-radius: 20px;
      box-sizing: border-box;
      line-height: 50px;
      font-size: 16px;
      cursor: pointer;

      .left_newTask {
        height: 30px;
        padding-left: 10px;
        line-height: 30px;
        border: 1px solid rgba(187, 187, 187, 1);
        border-radius: 20px;
      }
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
  //左侧动画动态3
  .left_nav_dy3 {
    position: absolute;
    // background-color: blue;
    left: 0;
    top: 0;
    width: 200px;
    height: 877px;
    z-index: 11;
    border-left: 1px solid rgba(187, 187, 187, 1);
    border-right: 1px solid rgba(187, 187, 187, 1);
    background-color: rgba(255, 255, 255, 1);
    // 标题 角色选择
    .left_navTitle {
      height: 50px;
      padding: 10px 18px;
      // border: 1px solid rgba(187, 187, 187, 1);
      // border-radius: 20px;
      box-sizing: border-box;
      line-height: 50px;
      font-size: 16px;
      cursor: pointer;

      .left_newTask {
        height: 30px;
        padding-left: 10px;
        line-height: 30px;
        border: 1px solid rgba(187, 187, 187, 1);
        border-radius: 20px;
      }
    }
    //详细 选项
    .left_navDetail {
      height: 500px;
      // background-color: pink;
      .el-menu {
        .el-menu-item {
          padding-left: 28px !important;
        }
      }
    }
    //返回上一页
    .return_his {
      margin: 0 5px;
      border-top: 3px solid #bbb;
      height: 327px;
      text-align: center;
      .return_btn {
        margin: 20px 0;
        cursor: pointer;
        i {
          font-weight: 700;
          margin-right: 30px;
        }
        span {
          margin-right: 10px;
        }
      }
    }
  }
}
//foot底部区域
.el-footer {
  width: 100%;
  height: 92px;
  background-color: #efefef;
  border: 1px solid rgba(187, 187, 187, 1);
}
</style>
