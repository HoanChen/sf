<template>
  <div>
    <div class="nav_header bg_b color-w">
      <img class="h_link" src="../assets/image/h-link.png">
      <span class="h_title">深圳-上海</span>
    </div>
    <div class="bg_b">
      <div class="r-nums">共49条</div>
      <div class="datarow">
        <span class="prevdate">前一天</span>
        <div class="datebox">
          <span>05月09日 05月09日</span>
          <img src="../assets/image/date.png">
        </div>
        <span>后一天</span>
      </div>
    </div>
    <div class="pd20">
      <div class="res_row">
        <div class="res_mes1">
          <div class="timeadr inb">
            <div>12:30</div>
            <div>宝安机场T3</div>
          </div>
          <div class="totaltime inb">
            <div>2小时15分钟</div>
            <img src="../assets/image/timejiantou.png">
          </div>
          <div class="timeadr inb">
            <div>12:30</div>
            <div>宝安机场T3</div>
          </div>
          <div class="pricenum inb">
            <div class="color-f4">
              ￥
              <span>800</span>
            </div>
            <div class="color-61 tc-r">剩4张</div>
          </div>
        </div>
        <div class="res_mes2">
          <img src="../assets/image/shizhong.png">
          <span>深航ZH9127</span>
          <span class="verticalline"></span>
          <span>机型330(大)</span>
          <img class="clock" src="../assets/image/shizhong.png">
          <span>准点率93.33%</span>
        </div>
      </div>
    </div>
    <div class="bottomselect dflex-sb">
      <div class="seletbox" v-on:click="selected(1)">
        <img v-if="atvice==1" src="../assets/image/price-atv.png">
        <img v-else src="../assets/image/price-nor.png">
        <div :class="{s_atvice : atvice == 1}">价格</div>
      </div>
      <div class="seletbox" v-on:click="selected(2)">
        <img v-if="atvice==2" src="../assets/image/time-atv.png">
        <img v-else src="../assets/image/time-nor.png">
        <div :class="{s_atvice : atvice == 2}">时间早-晚</div>
      </div>
      <div class="seletbox" v-on:click="selected(3)">
        <img v-if="atvice==3" src="../assets/image/zhundian-atv.png">
        <img v-else src="../assets/image/zhundian-nor.png">
        <div :class="{s_atvice : atvice ==3}">准点率</div>
      </div>
      <div class="seletbox" v-on:click="selected(4)">
        <img v-if="atvice==4" src="../assets/image/chose-atv.png">
        <img v-else src="../assets/image/chose-nor.png">
        <div :class="{s_atvice : atvice == 4}">筛选</div>
      </div>
    </div>
    <van-actionsheet v-model="showac">
      <div class="acstop">
        <div class="inb" @click="closeac()">取消</div>
        <div class="float-r">确定</div>
      </div>
      <div class="acsbox">
        <div class="leftac inb">
          <div :class="{a_atvice : ac_atvice == 1}" v-on:click="acselected(1)">航空公司</div>
          <div :class="{a_atvice : ac_atvice == 2}" v-on:click="acselected(2)">舱位</div>
          <div :class="{a_atvice : ac_atvice == 3}" v-on:click="acselected(3)">起飞机场</div>
          <div :class="{a_atvice : ac_atvice == 4}" v-on:click="acselected(4)">降落机场</div>
          <div :class="{a_atvice : ac_atvice == 5}" v-on:click="acselected(5)">机型</div>
        </div>
        <div class="rightac inb">
          <van-radio-group v-model="radio">
            <van-cell-group>
              <van-cell title="不限" clickable @click="radio = '1'">
                <van-radio name="1"/>
              </van-cell>
              <van-cell title="国航" clickable @click="radio = '2'">
                <van-radio name="2"/>
              </van-cell>
              <van-cell title="南航" clickable @click="radio = '3'">
                <van-radio name="3"/>
              </van-cell>
              <van-cell title="东航" clickable @click="radio = '4'">
                <van-radio name="4"/>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </div>
      </div>
    </van-actionsheet>
  </div>
</template>

<script>
import "../public/js/rem.js";
import "../public/css/travel_commos.css";

export default {
  name: "",
  data() {
    return {
      atvice: "1",
      showac: false,
      radio: "",
      ac_atvice:"1"
    };
  },
  methods: {
    selected(num) {
      console.log(num);
      this.atvice = num;
    },
    acselected(num) {
        console.log(1)
      this.ac_atvice = num;
    },
    closeac(){
      this.showac = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.r-nums {
  text-align: center;
  font-size: 0.2rem;
  color: #fff;
}
.datarow {
  padding: 0.2rem 0.49rem 0.11rem;
  font-size: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.datebox {
  width: 2.9rem;
  background: #fff;
  border-radius: 0.03rem;
  padding: 0.19rem 0.36rem;
  font-size: 0.24rem;
  display: inline-block;
  color: #000;
}
.datebox img {
  width: 0.32rem;
  float: right;
}

.res_row {
  padding: 0.3rem 0.4rem;
  background: #fff;
  box-shadow: 0px 0px 0.2rem 0px rgba(229, 229, 229, 1);
  border-radius: 0.1rem;
}
.res_mes1 {
  padding-bottom: 0.3rem;
  border-bottom: 1px dashed #eeeeee;
}
.timeadr div:nth-child(1) {
  padding-left: 0.05rem;
  font-size: 0.38rem;
  font-weight: 500;
  margin-bottom: 0.19rem;
}
.timeadr div:nth-child(2) {
  font-size: 0.2rem;
  color: #616161;
}
.totaltime {
  margin: 0 0.3rem;
  vertical-align: top;
  margin-top: 12px;
}
.totaltime div {
  font-size: 0.2rem;
  color: #9e9e9e;
}
.totaltime img {
  width: 1.46rem;
  float: left;
}
.pricenum span {
  font-size: 0.38rem;
  font-weight: 500;
}
.pricenum div:nth-child(1) {
  margin-bottom: 0.19rem;
}
.pricenum {
  font-size: 0.2rem;
  vertical-align: top;
  float: right;
}
.res_mes2 {
  padding-top: 0.22rem;
}
.res_mes2 img {
  width: 0.24rem;
  margin-right: 0.09rem;
  vertical-align: middle;
}
.res_mes2 span {
  font-size: 0.2rem;
}
.clock {
  margin-left: 0.4rem;
}
.bottomselect {
  background: #000;
  opacity: 0.7;
  padding: 0.19rem 0 0.17rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.bottomselect img {
  width: 0.43rem;
  margin-bottom: 0.03rem;
}
.seletbox {
  width: 2rem;
  text-align: center;
}
.seletbox div {
  color: #fff;
  font-size: 0.2rem;
}
.s_atvice {
  color: #ff9534 !important;
}

.acstop {
  padding: 0.3rem;
  background: #333333;
  font-size: 0.3rem;
}
.acstop div:nth-child(1) {
  color: #999999;
}
.acstop div:nth-child(2) {
  color: #fff;
}

.leftac {
  width: 1.8rem;
  background: #eeeeee;
}
.leftac div {
  padding: 0.29rem 0.4rem 0.27rem;
  font-size: 0.25rem;
  text-align: center;
}
.rightac {
  width: 5.7rem;
  vertical-align: top;
  font-size: 0.26rem;
}
.a_atvice{
    background: #FFFFFF;
    color: #108EE9
}
</style>

