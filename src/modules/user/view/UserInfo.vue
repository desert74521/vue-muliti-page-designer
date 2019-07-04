<template>
  <div class="userinfo-box">
    <div class="user-image">
        <el-avatar size="large"></el-avatar>
    </div>
    <div class="user-name">
        {{model.userName}}
        <el-button round size="mini" @click="loginOut">退出</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Service from '../service/UserInfoService';
import UserInfo from '../model/UserInfo';
@Component
export default class Login extends Vue {
  private model: UserInfo = {
      userName: '',
  };
  private service: Service = new Service(this.model);

  private created(): void {
      this.service.initUserInfo();
  }

  private loginOut(): void {
      this.service.loginOut();
  }

}
</script>

<style lang="scss" scoped>
.userinfo-box {
    height: 60px;
    width: 100px;
    margin-top: 5px;
    .user-image {
        float: left;
        width: 50px;
        margin-top: 6px; 
    }
    .user-name {
        width: 50px;
        float: right;
    }
}
</style>