<template>
  <div class="b_body">
    <div class="nav_header bg_w">
      <img class="h_link" src="../assets/image/h-link-b.png">
      <span class="h_title">核对支付</span>
    </div>
    <div class="pd20 bg_b color-w font24" style="padding-bottom:.7rem">
      <div class="mar_b20">行程单号:18527643981265</div>
      <div class="mar_b20">
        订单编号:181012000141
        <span class="checktag">因私</span>
      </div>
      <div class="mar_b20">
        订单状态:
        <span>已定座待支付</span>
      </div>
      <div>预订时间:2018-10-12 11:18:25</div>
    </div>
    <div class="pd20">
      <div class="top-content mar_b20">
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
          <div class="tc-r font24 mar_t20">
            <span class="color108">退改签说明</span>
          </div>
        </div>
      </div>
      <div class="orderrow mar_b20 pdtop0">
        <div class="mar_b20">
          <div class="row_title pd20 mar_b20">乘机人信息</div>
          <span>顺小丰</span>
          <span class="orderrowtag">成人</span>
          <span>18818776254</span>
        </div>
        <div class="mar_b20">
          <span class="mar_r10 color9e">身份证</span>
          <span class="color9e">420606199401254023</span>
        </div>
        <div>
          <span class="mar_r10">票&nbsp;&nbsp;&nbsp;号</span>
          <span>420606199401254023</span>
        </div>
      </div>
      <div class="orderrow mar_b20">
        <div class="inb">联系人信息</div>
        <div class="float-r">顺小丰 18818776291</div>
      </div>
      <div class="orderrow mar_b20 pdtop0">
        <div class>
          <div class="row_title pd20 mar_b20">违背差旅政策原因</div>
          <span>起飞或到达时间不合适</span>
          <span class="mar_l40">临时出差</span>
        </div>
      </div>
    </div>
    <div class="ordersubmissionrow">
      <div class="color9e inb font28">
        订单合计:
        <span class="color-f4">￥2999</span>
        <img class="moreicon" src="../assets/image/downicon.png" alt srcset>
      </div>
      <van-button class="float-r order_btn mar_r20" round size="small" type="info">退票</van-button>
      <van-button class="float-r order_btn" round size="small" type="info">改签</van-button>
    </div>
    <van-dialog></van-dialog>
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
  methods: {
    payconfirm() {
      this.$dialog
        .confirm({
          title: "支付确认",
          message: "本次订单总金额760元，将从贵公司账户上扣减，是否确认支付"
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    }
  }
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
.checktag {
  font-size: 0.2rem;
  border-radius: 0.03rem;
  padding: 0.02rem 0.05rem;
  color: #108ee9;
  background: #fff;
}
.orderrow {
  padding: 0.32rem 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
  font-size: 0.26rem;
}
.pdtop0 {
  padding-top: 0;
}
.circlenum {
  border: 1px solid #108ee9;
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 50%;
  color: #108ee9;
  text-align: center;
  display: inline-block;
  margin-right: 0.18rem;
}
.orderrowtag {
  width: 0.5rem;
  height: 0.28rem;
  background: rgba(49, 200, 87, 1);
  border-radius: 0.03rem;
  color: #fff;
  font-size: 0.1rem;
  text-align: center;
  padding: 0 0.06rem;
  margin-left: 0.1rem;
  margin-right: 0.2rem;
}
.sfz {
  padding-left: 0.5rem;
}
.ordersubmissionrow {
  position: fixed;
  height: 1.1rem;
  line-height: 1.1rem;
  background: #fff;
  box-shadow: 0px 0px 0.2rem 0px rgba(229, 229, 229, 1);
  padding-left: 0.49rem;
  width: 100%;
  box-sizing: border-box;
  bottom: 0;
  z-index: 2;
}
.odr_sub {
  width: 2.2rem;
  height: 1.1rem;
  line-height: 1.1rem;
  background: #108ee9;
  outline: none;
  text-align: center;
  border: none;
  color: #fff;
  padding: 0;
  font-size: 0.3rem;
}
.top-content {
  margin-top: -0.7rem;
}
.row_title {
  border-bottom: 1px solid #eeeeee;
}
.row_title {
  padding-left: 0;
}
.order_btn{
  margin-top: .2rem;
  margin-right: .4rem;
}
</style>

