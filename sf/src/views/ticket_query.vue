<template>
  <div>
    <div class="nav_header bg_b color-w">
      <img class="h_link" src="../assets/image/h-link.png" alt srcset>
      <img class="h_close" src="../assets/image/h-close.png" alt srcset>
      <span class="h_title">机票查询</span>
      <img class="h_more" src="../assets/image/h-more.png" alt srcset>
    </div>
    <van-cell value-class="cell-swich">
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
    <div class="cell-inp" v-show="checked">
      <img class="cell-image" src="../assets/image/chalv.png" alt srcset>
      <span>差旅事项</span>
      <input type="text" placeholder="请输入差旅事项">
    </div>
    <div class="travelinformation">
      <div class="infbox">
        <van-tabs v-model="active" title-active-color="#108EE9" color="#108EE9" :line-width="31">
          <van-tab title="单程">
            <div class="city_row">
              <div>
                <router-link
                  class="color-000"
                  :to="{name: 'city_select', params: {'stype':1}}"
                >{{startaddress}}</router-link>
              </div>
              <div>
                <router-link
                  class="color-000"
                  :to="{name: 'city_select', params: {'stype':2}}"
                >{{endaddress}}</router-link>
              </div>
              <div class="jiantoubox" @click="changeaddress()">
                <img class="jiantou" src="../assets/image/jiantous.png" alt srcset>
              </div>
            </div>
            <div class="time_row">
              <div class="inb" @click="chosetime('start')">
                <span>{{starttime}}</span>
                <span>{{sday}}</span>
              </div>
              <div class="float-r" @click="chosetime('end')">
                <span>{{endtime}}</span>
                <span>{{eday}}</span>
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
    <van-datetime-picker
      class="datepick"
      v-show="showdate"
      v-model="currentDate"
      title="请选择时间"
      @confirm="confirmtime()"
      type="date"
    />
    <div class="mask" v-show="showdate"></div>
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
      active: 0,
      showdate: false,
      currentDate: new Date(),
      starttime: "2019-05-01",
      endtime: "2019-05-02",
      selecttype: "",
      sday: "星期一",
      eday: "星期二",
      startaddress: "深圳",
      endaddress: "武汉"
    };
  },
  mounted() {
    console.log();
    var stype = this.$route.params.stype;
    if (stype == 1) {
      this.startaddress = this.$route.params.address;
    } else if (stype == 2) {
      this.endaddress = this.$route.params.address;
    }
    console.log(this.selecttype);
  },
  methods: {
    confirmtime(e) {
      var myDate = this.currentDate;
      var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
      var month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
      var date = myDate.getDate(); //获取当前日(1-31)
      var str = "星期" + "日一二三四五六".charAt(myDate.getDay());
      this.showdate = false;
      if (this.selecttype === "start") {
        this.starttime = year + "-" + month + "-" + date;
        this.sday = str;
      } else {
        this.endtime = year + "-" + month + "-" + date;
        this.eday = str;
      }
    },
    chosetime(type) {
      this.showdate = true;
      this.selecttype = type;
    },
    changeaddress() {
      let a = this.startaddress;
      let b = this.endaddress;
      [a, b] = [b, a];
      this.startaddress = a;
      this.endaddress = b;
    }
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

.mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #000;
  opacity: 0.5;
  z-index: 999;
}
.datepick {
  z-index: 1000;
}
</style>

