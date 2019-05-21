<template>
  <div>
    <div class="nav_header bg_b color-w">
      <img class="h_link" src="../assets/image/h-link.png">
      <span class="h_title">深圳-上海</span>
    </div>
    <div class="bg_b pd20">
      <div class="top-content pos-r" @click="showdetailfunc()">
        <div class="top-c-box">
          <div class="mar_b10 font26">
            <span class="or_tag mar_r10">去</span>
            <span>深圳-武汉 10月14号 周日 明天</span>
          </div>
          <div class="color-f4 pdl38 font26 mar_b30">8.4折/¥666</div>
          <div class="mar_b10 font26">
            <span class="or_tag mar_r10">去</span>
            <span>深圳-武汉 10月14号 周日 明天</span>
          </div>
          <div class="color-f4 pdl38 font26 mar_b20">8.4折/¥666</div>
          <div class="dashed_line mar_b20"></div>
          <div class="tc-r color-fc font24">退改签说明</div>
        </div>
        <img src="../assets/image/right-jiantou.png" class="top_jiantou" alt srcset>
      </div>
    </div>
    <div class="pd20">
      <div class="ormessagerow2 mar_b20">
        <span>行程单号</span>
        <img class="rjiant1 float-r" src="../assets/image/right-jiantou.png">
      </div>
      <div class="ormessage">
        <div class="cjren ormessagerow">
          <span>乘机人信息</span>
          <img class="cjricon float-r" src="../assets/image/lianxir.png">
        </div>
        <div class="cjren ormessagerow">
          <img class="rmicon" src="../assets/image/laji.png">
          <div class="inb">
            <div class="mar_b15">顺小丰 18818776242</div>
            <div class="color9e">身份证 420606199401254023</div>
          </div>
          <img class="rjiant float-r" src="../assets/image/right-jiantou.png">
        </div>
        <div class="cjren ormessagerow">
          <span class="lianxirensp">联系人</span>
          <span>顺小丰 18818776242</span>
          <img class="rjiant1 float-r" src="../assets/image/right-jiantou.png">
        </div>
      </div>
      <div class="ormessagerow2 mar_t20" @click="showcl()">
        <span>违背差旅政策原因</span>
        <img class="rjiant1 float-r" src="../assets/image/right-jiantou.png">
      </div>
      <div class="xuzhi mar_t20">
        <van-checkbox class="inb xuzhicheck" v-model="checked"></van-checkbox>我已确认乘客信息，已认真阅读并同意遵守
        <span class="color108">旅客订票需知</span>及
        <span class="color108">退改签规则</span>
      </div>
    </div>
    <div class="mingx" v-show="mingx">
      <div class="mar_b20">
        <span>成人票</span>
        <span class="float-r color-f4">￥990</span>
        <span class="mannum">x1人</span>
      </div>
      <div class="mar_b20">
        <span>机票</span>
        <span class="float-r color-f4">￥990</span>
      </div>
      <div class="mar_b20">
        <span>机建</span>
        <span class="float-r color-f4">￥99</span>
      </div>
      <div class="mar_b20">
        <span>燃油</span>
        <span class="float-r color-f4">￥99</span>
      </div>
      <div>
        <span>快递</span>
        <span class="float-r color-f4">￥99</span>
      </div>
    </div>
    <div class="ordersubmissionrow">
      <div class="color9e inb font28">
        订单合计:
        <span class="color-f4">￥2999</span>
      </div>
      <button class="odr_sub float-r">提交订单</button>
      <div class="color9e font24 inb float-r" @click="showmingxi()">
        明细
        <img class="moreicon" src="../assets/image/downicon.png" alt srcset>
      </div>
    </div>
    <div class="mask" v-show="mingx"></div>
    <van-dialog v-model="showzc" showCancelButton>
      <div class="zccontent">
        <div class="zctitle mar_b30 font_b">差旅政策</div>
        <div class="mar_b30 font24 font_b">根据公司差旅政策，因您未选择所选航班前后几小时内的最低价格航班，请您选择原因:</div>
        <van-radio-group v-model="radio">
          <van-radio class="mar_b10" name="11">起飞或到达时间不合适</van-radio>
          <van-radio class="mar_b10" name="22">陪同客户，要求更高舱位</van-radio>
          <van-radio class="mar_b10" name="33">有公司协议价格，但是没有座位</van-radio>
          <van-radio class="mar_b30" name="44">改签或退票因素</van-radio>
        </van-radio-group>
        <div class="mar_b30 font24 font_b">未按公司规定提前预定，请您选择原因:</div>
        <van-radio-group v-model="radio2">
          <van-radio class="mar_b10" name="1">临时出差</van-radio>
          <van-radio class="mar_b10" name="2">天气原因</van-radio>
          <van-radio class="mar_b10" name="3">出差行程无法提前确定</van-radio>
          <van-radio class="mar_b10" name="4">出行方式临时变更为飞机</van-radio>
          <van-radio class="mar_b10" name="5">原航班临时通知变动，重新订票</van-radio>
          <van-radio name="6">其它</van-radio>
        </van-radio-group>
      </div>
    </van-dialog>

    <van-dialog v-model="showdetail" :showConfirmButton="false" closeOnClickOverlay>
      <div class="top-content mar_b20 maskbox">
        <div class="top-c-box">
          <div class="messg-box">
            <div class="top-c-title">
              <span class="or_tag mar_r10">去</span>
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
            <div class="tc-c font24 mar_b30">
              <span class="color-61">
                机建/税费:
                <span class="color-f4">￥50/￥30</span>
              </span>
              <span class="mar_l20">午餐</span>
            </div>
          </div>
          <div class="dashedline"></div>
          <div class="messg-box">
            <div class="top-c-title">
              <span class="or_tag mar_r10">返</span>
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
            <div class="tc-c font24 mar_b10">
              <span class="color-61">
                机建/税费:
                <span class="color-f4">￥50/￥30</span>
              </span>
              <span class="mar_l20">午餐</span>
            </div>
          </div>
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import "../public/js/rem.js";
import "../public/css/travel_commos.css";

export default {
  name: "",
  data() {
    return {
      checked: true,
      mingx: false,
      showzc: false,
      radio: "11",
      radio2: "1",
      showdetail: false
    };
  },
  methods: {
    showmingxi() {
      this.mingx = !this.mingx;
    },
    showcl() {
      this.showzc = true;
    },
    showdetailfunc() {
      this.showdetail = true;
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
.maskbox {
  width: 7.1rem;
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
.van-cell {
  border-radius: 0.1rem;
}
.ormessage {
  box-shadow: 0px 1px 0.2rem 0px rgba(229, 229, 229, 1);
  border-radius: 0.1rem;
  background: #fff;
}
.ormessagerow {
  padding: 0.27rem 0.3rem;
  border-bottom: 1px solid #eeeeee;
  font-size: 0.26rem;
}
.cjricon {
  width: 0.41rem;
}
.rmicon {
  width: 0.4rem;
  margin-right: 0.2rem;
  vertical-align: super;
}
.rjiant {
  width: 0.14rem;
  margin-top: 16px;
}
.rjiant1 {
  width: 0.14rem;
  margin-top: 4px;
}
.ormessagerow2 {
  padding: 0.27rem 0.3rem;
  font-size: 0.26rem;
  background: #fff;
  border-radius: 0.1rem;
}
.lianxirensp {
  margin-right: 0.66rem;
}
.xuzhi {
  font-size: 0.24rem;
  padding-left: 0.5rem;
  position: relative;
}
.xuzhicheck {
  position: absolute;
  left: 0;
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
.mingx {
  position: fixed;
  bottom: 1.1rem;
  width: 100%;
  background: #fff;
  padding-left: 0.4rem;
  box-sizing: border-box;
  font-size: 0.24rem;
  padding-right: 1.27rem;
  padding: 0.25rem 1.27rem 0.25rem.4rem;
  z-index: 2;
}
.mannum {
  position: absolute;
  right: 0.4rem;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #000;
  opacity: 0.5;
}
.zccontent {
  padding: 0.5rem;
}
.zctitle {
  text-align: center;
  font-weight: 500;
  font-size: 0.34rem;
}
.pdl38 {
  padding-left: 0.38rem;
}
.top_jiantou {
  position: absolute;
  top: 0.91rem;
  right: 0.2rem;
  width: 0.18rem;
}
.dashedline {
  border-bottom: 1px dashed #eeeeee;
  margin-bottom: 0.34rem;
}
.van-dialog {
  width: 95%;
}
</style>

