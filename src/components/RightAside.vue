<template>
  <div class="rightAside_container">
    <el-collapse
      v-model="activeNames"
      class="collapse_area"
      :popper-append-to-body="false"
    >
      <el-collapse-item title="问题预设" name="1">
        <div class="collapse_subitem1">预设问题自定义</div>
        <div class="collapse_subitem1" @click="boxIsShow = true">
          提问记录管理
        </div>
      </el-collapse-item>
      <el-collapse-item title="常用网站" name="2">
        <div class="collapse_subitem1">常用链接管理</div>
      </el-collapse-item>
      <el-collapse-item title="常用工具" name="3">
        <div class="collapse_subitem1">语言翻译</div>
        <div class="collapse_subitem1">语言切换</div>
        <div class="collapse_subitem1">常用工具编辑</div>
      </el-collapse-item>
    </el-collapse>

    <!-- 对话框模块 -->
    <el-dialog :visible.sync="boxIsShow" width="30%">
      <!-- dialog_title -->
      <div class="dialog_title">预设问题编辑</div>
      <!-- dialog_nav -->
      <div class="dialog_nav">
        <ul class="classify">
          <li class="active">
            分类1
            <span class="iconfont icon-chevron-down"></span>
          </li>
          <li>分类2</li>
          <li>分类3</li>
          <li>分类4</li>
          <li>分类5</li>
        </ul>
      </div>
      <!-- dialog_main -->
      <div class="dialog_main">
        <ul class="qes_list">
          <li><span>预设问题1：</span> <input type="text" /></li>

          <li><span>预设问题1：</span> <input type="text" /></li>

          <li><span>预设问题1：</span> <input type="text" /></li>

          <li><span>预设问题1：</span> <input type="text" /></li>

          <li><span>预设问题1：</span> <input type="text" /></li>

          <li><span>预设问题1：</span> <input type="text" /></li>

          <li><span>预设问题1：</span> <input type="text" /></li>

          <li><span>预设问题1：</span> <input type="text" /></li>

          <li><span>预设问题1：</span> <input type="text" /></li>
        </ul>
      </div>
      <!-- dialog-footer -->
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="boxIsShow = false" class="confirm1"
          >确 定</el-button
        >
        <el-button @click="boxIsShow = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["0"],
      boxIsShow: false
    };
  },
  methods: {
    // // 显示/关闭弹框
    // showMessageBox(){
    // }
    // handleClose(done) {
    //     this.$confirm('确认关闭？')
    //       .then(_ => {
    //         done();
    //       })
    //       .catch(_ => {});
    //   }
  }
};
</script>

<style lang="less" scoped>
@red_color: red;
.rightAside_container {
  width: 199px;
  height: 877px;
  background-color: rgba(255, 255, 255, 1);
  border-left: 1px solid rgba(187, 187, 187, 1);
  // 折叠面板
  ::v-deep .el-collapse {
    // 重写内置样式
    .el-collapse-item__header {
      position: relative;
      padding-left: 70px;
      background-color: #f7f7f7;
      font-size: 16px;
      .el-collapse-item__arrow {
        position: absolute;
        left: 10px;
        margin: 0;
      }
    }
    .el-collapse-item__content {
      padding: 0;
    }
    .el-collapse-item {
      text-align: center;
      // padding-left: 70px;
      // border-bottom: 1px solid rgba(232, 232, 232, 1);
      // 折叠栏子选项样式
      .collapse_subitem1 {
        border-bottom: 1px solid rgba(232, 232, 232, 1);
        font-size: 16px;
        padding-left: 10px;
      }
    }
  }
  //对话框
  ::v-deep .el-dialog {
    width: 715px !important;
    .dialog_title {
      width: 100%;
      height: 47px;
      background-color: #78909c;
      line-height: 47px;
      text-align: center;
      color: rgba(255, 255, 255, 1);
      font-size: 14px;
      font-family: SourceHanSansSC-regular;
    }
    .dialog_nav {
      .classify {
        display: flex;
        box-shadow: 0px 1px 0 0 #e8e8e8;
      }
      .active {
        color: @red_color;
      }
      li {
        width: 135px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: rgba(179, 179, 179, 1);
      }
    }
    .dialog_main {
      width: 665px;
      height: 500px;
      margin-top: 10px;
      box-sizing: border-box;
      border: 1px solid rgba(187, 187, 187, 1);
      .qes_list {
        padding-top: 45px;
        li {
          display: flex;
          width: 100%;
          height: 30px;
          margin-bottom: 15px;
          span {
            // width: 130px;
            width: 15%;
            margin: 0 30px;
            font-size: 12px;
            color: #7a797a;
            font-family: SourceHanSansSC-regular;
          }
          input {
            width: 85%;
            margin-right: 30px;
            line-height: 30px;
            border: 1px solid rgba(187, 187, 187, 1);
            border-radius: 3px;
          }
        }
      }
    }
    .dialog-footer {
      .el-button {
        width: 86px;
        height: 30px;
        line-height: 6px;
        font-size: 12px;
        color: rgba(122, 121, 122, 1);
      }
      .confirm1 {
        background-color: rgba(120, 144, 156, 1);
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>
