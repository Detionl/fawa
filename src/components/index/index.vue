<template>
  <div class="wrapper">
    <div class="nav-wrapper">
      <div class="box">
        <div class="img"></div>
        <span>未转办投诉</span>
        <span>20</span>
      </div>
      <div class="box">
        <div class="img"></div>
        <span>已转办投诉</span>
        <span>8</span>
      </div>
      <div class="box">
        <div class="img"></div>
        <span>已完成投诉</span>
        <span>20</span>
      </div>
    </div>
    <div class="business">
      <div class="business-top">
        <div class="title">业务概览</div>
        <div class="time">
          <div class="block">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="~"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
        </div>
      </div>
      <div class="business-main">
        <div class="business-box">
          <p class="name">订单货（笔）</p>
          <p class="num">1439</p>
        </div>
        <div class="business-box">
          <p class="name">订货金额（元）</p>
          <p class="num">1439</p>
        </div>
        <div class="business-box">
          <p class="name">收款量（笔）</p>
          <p class="num">1439</p>
        </div>
        <div class="business-box">
          <p class="name">收款金额（元）</p>
          <p class="num">1439</p>
        </div>
        <div class="business-box">
          <p class="name">发货量（笔）</p>
          <p class="num">1439</p>
        </div>
      </div>
    </div>
    <div class="colum">
      <div class="colum-top">
        <div class="title">业务概览</div>
        <div class="time">
          <div class="block">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="~"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
        </div>
      </div>
      <div class="colum-main">
        <colum></colum>
      </div>
    </div>
  </div>
</template>
<script>
import colum from '../colum/colum'
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    },
    created() {

    },
    methods: {

    },
    components:{
      colum,
    }
  };
</script>
<style scope lang="less">
.wrapper {
  width: 100%;
  .nav-wrapper {
    display: flex;
    .box {
      margin-top: 20px;
      margin-left: 20px;
      font-size: 18px;
      width: 240px;
      height: 79px;
      background: white;
      display: flex;
      justify-items: center;
      align-items: center;
      .img {
        margin-left: 20px;
        width: 34px;
        height: 34px;
        background: blueviolet;
      }
      span {
        &:nth-child(2) {
          margin-left: 15px;
        }
        &:nth-child(3) {
          margin-left: 28px;
          color: red;
        }
      }
    }
  }
  .business {
    margin-left: 20px;
    margin-top: 15px;
    width: 993px;
    height: 219px;
    background: white;
    .business-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 59px;
      width: 100%;
      border-bottom: 1px solid #aaa;
      .title {
        margin-left: 23px;
        font-size: 16px;
      }
      .time{
        margin-right: 15px;
        .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner {
          width: 214px;
          height: 39px;
          font-size: 12px;
        }
        .el-date-editor .el-range-input, .el-date-editor .el-range-separator{
          font-size: 12px;
        }
      }
    }
    .business-main{
      display: flex;
      .business-box{
        width: 20%;
        text-align: center;
        .name{
          font-size: 14px;
          color: #868686;
        }
        .num{
          font-size: 18px;
          color: #333333;
        }
      }
    }
  }
  .colum{
    margin-left:20px;
    margin-top: 15px;
    width: 977px;

    background: white;
    .colum-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 59px;
      width: 100%;
      border-bottom: 1px solid #aaa;
      .title {
        margin-left: 23px;
        font-size: 16px;
      }
      .time{
        margin-right: 15px;
        .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner {
          width: 214px;
          height: 39px;
          font-size: 12px;
        }
        .el-date-editor .el-range-input, .el-date-editor .el-range-separator{
          font-size: 12px;
        }
      }
    }
  }
}
</style>
