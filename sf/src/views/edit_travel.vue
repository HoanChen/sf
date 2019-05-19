<template>
  <div>
    <div class="nav_header bg_w">
      <img class="h_link" src="../assets/image/h-link-b.png">
      <span class="h_title">修改常旅客</span>
    </div>
    <van-cell-group>
      <van-field v-model="username" clearable label="姓名" placeholder="请输入姓名"/>
      <van-field v-model="username" clearable label="手机号" placeholder="请输入手机号"/>
      <van-cell is-link>
        <template slot="title">
          <span class="custom-text">证件类型</span>
          <span class="mar_l75">身份证</span>
        </template>
      </van-cell>
      <van-field v-model="username" clearable label="证件号码" placeholder="请输入证件号码"/>
      <van-cell is-link>
        <template slot="title">
          <span class="custom-text">性别</span>
          <span class="mar_l120">
            <van-radio-group class="inb" v-model="radio">
              <van-radio class="inb tchebox mar_r40" name="1">男</van-radio>
              <van-radio class="inb tchebox" name="2">女</van-radio>
            </van-radio-group>
          </span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template slot="title">
          <span class="custom-text">出生日期</span>
          <span class="mar_l75">1992-01-24</span>
        </template>
      </van-cell>
      <van-field v-model="username" clearable label="职级" placeholder="请输入职级"/>
    </van-cell-group>
    <div class="btnrow2">
      <van-button round class="mar_t40" size="large" type="info">保存</van-button>
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
      username: "",
      radio: "1"
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tchebox {
  vertical-align: middle;
  margin-top: -9px;
}
</style>

