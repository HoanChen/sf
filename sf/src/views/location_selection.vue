<template>
  <div>
    <div class="nav_header bg_b color-w">
      <img class="h_link" src="../assets/image/h-link.png">
      <span class="h_title">深圳-上海</span>
    </div>
    <div class="bg_b pd20">
      <div class="top-content">
        <div class="top-c-box">
          <div class="top-c-title">
            <span>
              <img class="top-c-img" src="../assets/image/hkicon.png">
              深航ZH9127
            </span>
            <span class="vertical_line"></span>
            <span>机型(330大)</span>
            <span class="vertical_line"></span>
            <span>准点率93.33%</span>
            <span class="float-r">2019年</span>
          </div>
          <div class="top-c-content">
            <div class="addressbox inb">
              <div class="timesize">12:30</div>
              <div class="color-61">宝安机场T3</div>
              <div>10月14日 周日 后天</div>
            </div>
            <div class="addressbox inb">
              <div class="timesize">15:30</div>
              <div class="color-61">天河机场T3</div>
              <div>10月14日 周日 后天</div>
            </div>
            <div class="addresstime">
              <span>2小时15分钟</span>
              <img src="../assets/image/timejiantou.png" alt srcset>
            </div>
          </div>
          <div class="tc-c font24 mar_t20">
            <span class="color-61">
              机建/税费:
              <span class="color-f4">￥50/￥30</span>
            </span>
            <span class="mar_l20">午餐</span>
          </div>
        </div>
      </div>
    </div>
    <div class="select_content pd20">
      <div class="select_box mar_b10">
        <div class="select_row">
          <div class="select_type inb">
            <img src="../assets/image/downicon.png" alt srcset>
            <span>经济</span>
          </div>
          <div class="inb disc">
            <div class="font28">M/3.5折</div>
            <div class="font24 color9e">退票10%-20%</div>
          </div>
          <div class="inb float-r yuding">
            <div>订</div>
            <div class="bg_w">充足</div>
          </div>
          <div class="inb float-r pricebox">
            <div class="color-f4">
              ￥
              <span class="font30">800</span>
            </div>
            <div class="gwtag">官网</div>
          </div>
        </div>
      </div>
      <div class="select_box mar_b10">
        <div class="select_row">
          <div class="select_type inb">
            <img src="../assets/image/downicon.png" alt srcset>
            <span>经济</span>
          </div>
          <div class="inb disc">
            <div class="font28">M/3.5折</div>
            <div class="font24 color9e">退票10%-20%</div>
          </div>
          <div class="inb float-r yuding">
            <div>订</div>
            <div class="bg_w">充足</div>
          </div>
          <div class="inb float-r pricebox">
            <div class="color-f4">
              ￥
              <span class="font30">800</span>
            </div>
            <div class="gwtag">官网</div>
          </div>
        </div>
        <div class="select_row bor-top">
          <div class="select_type inb">
            <span class="mar_l32">经济</span>
          </div>
          <div class="inb disc">
            <div class="font28">M/3.5折</div>
            <div class="font24 color9e">退票10%-20%</div>
          </div>
          <div class="inb float-r yuding">
            <div>订</div>
            <div class="bg_w">充足</div>
          </div>
          <div class="inb float-r pricebox">
            <div class="color-f4">
              ￥
              <span class="font30">800</span>
            </div>
            <div class="gwtag">官网</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../public/js/rem.js";
import "../public/css/travel_commos.css";

export default {
  name: "",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-c-box {
  padding: 0.2rem;
  border-radius: 0.1rem;
  background: #fff;
}

.top-c-img {
  width: 0.25rem;
  height: 0.25rem;
  margin-right: 0.1rem;
  display: inline-block;
}

.top-c-title {
  color: #666;
  margin-bottom: 0.22rem;
  font-size: 0.24rem;
}

.vertical_line {
  height: 0.18rem;
  margin: 0 0.1rem;
  width: 1px;
  display: inline-block;
  background: #999999;
}
.addressbox div:nth-child(2) {
  font-size: 0.19rem;
}
.addressbox div:nth-child(3) {
  font-size: 0.24rem;
}
.addressbox .timesize {
  font-weight: 500;
  font-size: 0.38rem;
  margin-bottom: 0.2rem;
}

.addressbox {
  width: 49.5%;
  text-align: center;
}

.top-c-content {
  position: relative;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #e0e0e0;
}

.addresstime {
  position: absolute;
  top: 0px;
  left: 50%;
  width: 1.46rem;
  margin-left: -0.73rem;
  text-align: center;
  font-size: 0.2rem;
  color: #9e9e9e;
}
.addresstime img {
  width: 100%;
  float: left;
}
.select_box {
  box-shadow: 0px 1px 0.1rem 0px rgba(238, 238, 238, 1);
  border-radius: 0.1rem;
  overflow: hidden;
  background: #fff;
  padding: 0 0.2rem;
}

.select_row {
  padding: 0.34rem 0;
}
.select_type {
  font-size: 0.32rem;
  margin-right: 0.4rem;
  vertical-align: middle;
  margin-top: -21px;
}
.select_type img {
  width: 0.22rem;
  margin-right: 0.08rem;
  vertical-align: middle;
}
.gwtag {
  width: 0.6rem;
  height: 0.3rem;
  border: 1px solid #108ee9;
  color: #108ee9;
  font-size: 0.2rem;
  text-align: center;
}

.pricesize {
  font-size: 0.3rem;
  color: #fff4333c;
}
.yuding {
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 0.1rem;
  text-align: center;
  font-size: 0.2rem;
  color: rgba(16, 142, 233, 1);
  overflow: hidden;
  border: 1px solid rgba(16, 142, 233, 1);
  margin-top: -5px;
}

.yuding div:nth-child(1) {
  background: rgba(16, 142, 233, 1);
  font-size: 0.38rem;
  color: #fff;
  height: 0.6rem;
  line-height: 0.6rem;
}
.yuding div:nth-child(2) {
  height: 0.3rem;
  line-height: 0.3rem;
}
.pricebox {
  margin-right: 0.4rem;
  margin-top: -5px;
}
</style>

