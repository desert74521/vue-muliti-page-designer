<template>
  <div class="login-box">
    <div class="login-sub-box">
      <el-form  status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="user">
        <el-input type="text"  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input type="password"  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button >重置</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Service from './service/LoginService';
import LoginBox from './model/LoginBox';
import { CommonModel } from '@/pages/login/common/CommonModel';
@Component
export default class Login extends Vue {
  private model: CommonModel<LoginBox> = new CommonModel<LoginBox>({
      page: {
          loginImg: require('@/assets/background.png'),
          loginWord: '',
      },
  });
  private service: Service = new Service(this.model);

  private submitForm(): void {
    this.service.login();
  }

}
</script>

<style lang="scss" scoped>
.login-box {
  height: 100%;
  min-width:300px; 
  max-width: 400px;
  margin:0 auto;
  padding: 10%;
  .login-sub-box{
    padding: 50px 30px;
    height: 500px;
    min-width:300px; 
    max-width: 400px;
    background: white;
  }
}
</style>