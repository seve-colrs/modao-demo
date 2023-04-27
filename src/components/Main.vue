<template>
  <div class="main_container">
    <p class="title_p">RDR&nbsp;问题预设</p>
    <!-- 内容盒子区域 -->
    <div class="text_box">
      <div>常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1</div>
      <div>常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1</div>
      <div>常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1</div>
      <div>常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1</div>
      <div>常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1</div>
      <div>常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1</div>
      <div>常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1</div>
      <div>常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1</div>
      <div>常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1</div>
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
.main_container {
  // width: 1119px;
  width: 100%;
  height: 747px;
  margin: 0;
  padding-top: 130px;
  background-color: rgba(239, 239, 239, 1);
  text-align: center;
  // 标题
  .title_p {
    font-size: 36px;
    font-family: SourceHanSansSC-regular;
  }
  // 内容盒子区域
  .text_box {
    margin: 90px 194px;
    display: flex;
    flex-wrap: wrap;
    div {
      // flex: 33%;
      box-sizing: border-box;
      width: 200px;
      height: 100px;
      padding: 15px;
      margin-bottom: 20px;
      background-color: rgba(255, 255, 255, 1);
      border: 1px solid rgba(187, 187, 187, 1);
      border-radius: 14px;
      text-align: center;
      font-size: 14px;
      font-family: Roboto;
    }
    div:nth-child(3n + 1),
    div:nth-child(3n + 2) {
      margin-right: 56px;
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
    border: 1px solid rgba(220, 224, 231, 1);
    font-size: 14px;
    // background-color: pink;
    input {
      height: 100%;
      width: 100%;
      padding-left: 10px;
      border: none;
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
