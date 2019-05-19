<template>
  <div>
    <div class="nav_header bg_w">
      <img class="h_link" src="../assets/image/h-link-b.png">
      <span class="h_title">个人支付</span>
    </div>
    <div class="daojishi">请您在29分55秒内完成支付</div>
    <van-cell value="订单号:152679265412"/>
    <van-cell value="订单信息:单程 深圳-北京"/>
    <van-cell class="mar_b20">
      <template slot="title">
        <span class="custom-text">
          订单金额:
          <span class="color-f4">￥1000.00</span>
        </span>
      </template>
    </van-cell>
    <van-radio-group v-model="radio">
        <van-cell @click="radio = '1'">
          <template slot="title">
            <img class="wechaticon" src="../assets/image/wechat.png" alt srcset>
            <span class="mar_l32 vc-sub">微信支付</span>
            <van-radio  class="inb float-r" name="1"/>
          </template>
        </van-cell>
        <van-cell @click="radio = '2'">
          <template slot="title">
            <img class="wechaticon" src="../assets/image/zhifub.png" alt srcset>
            <span class="mar_l32 vc-sub">支付宝支付</span>
            <van-radio class="inb float-r" name="2"/>
          </template>
        </van-cell>
    </van-radio-group>
    <div class="btnrow2">
      <van-button round class="mar_t40" size="large" type="info">确认支付</van-button>
    </div>
  </div>
</template>

<script>
import "../public/js/rem.js";
import "../public/css/travel_commos.css";

export default {
  name: "",
  data() {
    return {
        radio:1
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.daojishi {
  padding: 0.22rem;
  background: #fdecec;
  color: #f4333c;
  text-align: center;
  font-size: 0.26rem;
}
.wechaticon {
  width: 0.6rem;
  float: left;
}
</style>

