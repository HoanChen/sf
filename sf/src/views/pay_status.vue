<template>
  <div>
    <div class="nav_header bg_w">
      <img class="h_link" src="../assets/image/h-link-b.png">
      <span class="h_title">支付成功</span>
    </div>
    <div class="payimg">
        <img src="../assets/image/payerror.png" alt="" srcset="">
        <!-- <img src="../assets/image/paysuses.png" alt="" srcset=""> -->
    </div>
    <div class="btnrow2">
      <van-button round  size="large" type="info">支付失败，重新支付</van-button>
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
       
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .payimg{
        margin: 1.13rem 0 .8rem;
        text-align: center;
    }
    .payimg img{
        width: 1.14rem
    }
</style>

