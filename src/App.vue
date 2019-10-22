<template>
  <div id="app">
    <el-container>
    <el-aside width="200px">
      <div class="logo">logo</div>

      <router-link to="/index" class="index" tag="div">商品</router-link>
      <router-link to="/finish" class="not-finish" tag="div">待处理投诉列表</router-link>
      <router-link to="/ongoing" class="on-going" tag="div">处理中投诉列表</router-link>
      <router-link to="/notfinish" class="finish" tag="div">已处理投诉列表</router-link>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
    </el-container>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scope lang="less">
#app{
  color: #333333;
  margin-top: 0;
  padding-top: 0;
  display: flex;
  justify-content: center;
  .el-container{
    height: 400px;

    .logo{
      width: 200px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      border: 1px solid black;
      box-sizing: border-box;
    }
    .index,.finish,.not-finish,.on-going{
      box-sizing: border-box;
      width:200px;
      height: 45px;
      font-size: 12px;
      text-align: center;
      line-height: 45px;
      border: 1px solid white;
      background: rgb(229, 248, 255);

    }
  }
  .el-main{
    padding: 0;
    background: rgb(242,242,242);
    width: 100%;
    height: 1200px;
  }
}
.active{
  color: #0E86F8;
  border-right: #0E86F8 4px solid !important;
}
</style>
