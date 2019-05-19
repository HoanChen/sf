<template>
  <div>
    <div class="nav_header bg_w">
      <img class="h_link" src="../assets/image/h-link-b.png" alt srcset>
      <span class="h_title">行程单号</span>
    </div>
    <div class="search_box">
      <input type="text" placeholder="请输入行程单号">
      <button>搜索</button>
      <img src="../assets/image/search.png" alt>
    </div>
    <div class="ltrow">
      <div class="lttitie">
        <img src="../assets/image/check.png" alt srcset>
        <span>杨志飞</span>
      </div>
      <div class="ltcontent">
        <div>于2019-05-15到北京出差</div>
        <div>出差事由:测试</div>
      </div>
    </div>
    <div class="ltrow">
      <div class="lttitie">
        <img src="../assets/image/check2.png" alt srcset>
        <span>杨志飞</span>
      </div>
      <div class="ltcontent">
        <div>于2019-05-15到北京出差</div>
        <div>出差事由:测试</div>
      </div>
    </div>
    <div class="nomore">没有更多了</div>
  </div>
</template>

<script>
import "../public/js/rem.js";
import "../public/css/travel_commos.css";

export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search_box {
  padding: 0.26rem 0.2rem;
  position: relative;
}
.search_box input {
  width: 6.1rem;
  height: 0.7rem;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(224, 224, 224, 1);
  border-radius: 0.1rem;
  box-sizing: border-box;
  padding-left: 0.64rem;
  font-size: 0.26rem;
}
.search_box input::placeholder {
  font-size: 0.26rem;
}
.search_box button {
  width: 0.9rem;
  height: 0.68rem;
  background: rgba(16, 142, 233, 1);
  border-radius: 0.1rem;
  font-size: 0.26rem;
  color: #fff;
  outline: none;
  border: none;
  margin-left: 0.1rem;
  vertical-align: top;
}
.search_box img {
  width: 0.24rem;
  position: absolute;
  left: 0.4rem;
  top: 0.49rem;
}
.ltrow {
  margin-bottom: 0.2rem;
  background: #fff;
  font-size: 0.13rem;
}
.ltrow img {
  width: 0.32rem;
  margin-right: 0.3rem;
  vertical-align: bottom;
}
.lttitie {
  padding: 0.29rem 0.2rem;
  border-bottom: 1px solid #e0e0e0;
}
.ltcontent {
  padding: 0.22rem 0.2rem 0.38rem;
}
.ltcontent div:nth-child(1) {
  margin-bottom: 0.19rem;
}
.nomore{
    text-align: center;
    margin-top: .4rem;
    color: #616161;
    font-size: .26rem
}
</style>

