<template>
  <div class="layout-box">
    <div class="layout-page" :style="'background:url('+ model.page.loginImg +')'">
        <login-box></login-box>       
    </div>
    <page-loading :isLoading="$store.state.app.masking"></page-loading>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Service from './service/LayoutService';
import LoginPage from './model/LoginPage';
import { CommonModel } from '@/pages/login/common/CommonModel';
import { PageLoading } from '@/modules';
import LoginBox from '@/pages/login/login/LoginBox.vue';
@Component({
  components: {
    PageLoading,
    LoginBox,
  },
})
export default class Login extends Vue {
  private model: CommonModel<LoginPage> = new CommonModel<LoginPage>({
      page: {
          loginImg: require('@/assets/background.png'),
          loginWord: '',
      },
  });
  private service: Service = new Service(this.model);

}
</script>

<style lang="scss" scoped>
.layout-box {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    .layout-page {
        height: 100%;
        width: 100%;
    }
}
</style>