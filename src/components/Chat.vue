<template>
  <div class="chat_container">
    <!-- 标题 -->
    <div class="title">
      <span>任务名</span>
      <i class="el-icon-caret-bottom"></i>
    </div>
    <!-- 交流区 -->
    <div class="chat_main">
      <!-- 对方 -->
      <div class="he">
        <div class="he_main">
          <i class="iconfont icon-yonghu"></i>
          <p>
            提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问
          </p>
        </div>
      </div>
      <!-- 我 -->
      <div class="me">
        <div class="me_main">
          <p>
            回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
          </p>
          <i class="iconfont icon-yonghu"></i>
        </div>
      </div>
    </div>
    <!-- 请输出内容input -->
    <div class="text_input">
      <input type="text" placeholder="请输入内容" />
      <i class="el-icon-position fj"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.chat_container {
  .title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid rgba(187, 187, 187, 1);
    span {
      //   font-weight: 700;
    }
  }
  .chat_main {
    height: 700px;
    .he_main,
    .me_main {
      display: flex;
      margin: 20px 50px 0;
      padding: 20px;
      font-size: 14px;
      //   background-color: pink;
      i {
        margin: 0 20px;
        font-size: 60px;
      }
    }
    .me {
      background-color: #efefef;
      p {
        margin-left: 20px;
      }
      i {
        color: #fcca00;
      }
    }
  }
  //输入内容区域
  .text_input {
    position: relative;
    width: 810px;
    height: 50px;
    margin: 0 auto;
    box-sizing: border-box;
    line-height: 50px;
    font-family: Microsoft Yahei;
    // border: 2px solid rgba(220, 224, 231, 1);
    border-radius: 5px;
    font-size: 14px;
    // background-color: pink;
    input {
      height: 100%;
      width: 100%;
      padding-left: 10px;
      border: 1px solid rgba(220, 224, 231, 1);
      box-shadow: 1px 2px 4px 1px #bbb;
      outline: none;
    }
    .fj {
      position: absolute;
      right: 5px;
      top: 15px;
      font-size: 24px;
      color: rgba(190, 190, 190, 1);
    }
  }
}
</style>