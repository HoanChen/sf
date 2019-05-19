<template>
  <div>
    <div class="nav_header bg_b color-w">
      <img class="h_link" src="../assets/image/h-link.png" alt srcset>
      <img class="h_close" src="../assets/image/h-close.png" alt srcset>
      <span class="h_title">机票查询</span>
      <img class="h_more" src="../assets/image/h-more.png" alt srcset>
    </div>
    <van-cell value-class="cell-swich" >
      <template slot="title">
        <img class="cell-image" src="../assets/image/gongwenb.png" alt srcset>
        <span class="custom-text">
          <span class="mar_r90">差旅类型</span>
          <span>因私</span>
        </span>
      </template>
      <template slot>
        <van-switch v-model="checked" size="20px"/>
      </template>
    </van-cell>
    <div class="cell-inp"  v-show="checked">
        <img class="cell-image" src="../assets/image/chalv.png" alt srcset>
        <span>差旅事项</span>
        <input type="text" placeholder="请输入差旅事项">
    </div>
    <div class="travelinformation">
      <div class="infbox">
        <van-tabs v-model="active" title-active-color="#108EE9" color="#108EE9" :line-width="31">
          <van-tab title="单程">
            <div class="city_row">
              <div>深圳</div>
              <div>武汉</div>
              <div class="jiantoubox">
                <img class="jiantou" src="../assets/image/jiantous.png" alt srcset>
              </div>
            </div>
            <div class="time_row">
              <div class="inb">
                <span>11月23日</span>
                <span>周五</span>
              </div>
              <div class="float-r">
                <span>11月23日</span>
                <span>周五</span>
              </div>
            </div>
            <div class="btnrow">
              <van-button round class="mar_t75" size="large" type="info">立即查询</van-button>
            </div>
          </van-tab>
          <van-tab title="往返"></van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import "../public/js/rem.js";
import "../public/css/travel_commos.css";

export default {
  name: "tab",
  data() {
    return {
      checked: true,
      active: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.travelinformation {
  padding: 0.2rem;
}
.infbox {
  background: #fff;
  padding: 0 0.2rem 0.96rem;
  box-shadow: 0px 0px 0.2rem 0px rgba(229, 229, 229, 1);
  border-radius: 0.1rem;
}
.city_row {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0.5rem 0.1rem 0.3rem;
  border-bottom: 1px solid #e0e0e0;
}
.time_row {
  padding: 0.38rem 0.1rem 0.3rem;
  border-bottom: 1px solid #e0e0e0;
}
.time_row div span:nth-child(1) {
  font-size: 0.38rem;
  font-weight: 400;
  margin-right: 0.18rem;
}
.time_row div span:nth-child(2) {
  font-size: 0.25rem;
}
.jiantoubox {
  position: absolute;
  left: 50%;
  margin-left: -0.24rem;
  top: 0.57rem;
  height: 55%;
  background: #fff;
}
.jiantou {
  width: 0.48rem;
}
</style>

