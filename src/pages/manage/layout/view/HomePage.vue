<template>
  <div class="home-box">
    <div class="header-bar">
      <el-button @click="toggleSideBar">toggle</el-button>
    </div>
    <div class="side-bar" :style="'width:' + model.page.sideWidth + 'px'">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse-transition="false" :router="true" :collapse="model.page.sideWidth === 65">
        <el-menu-item v-for="(item,index) in model.page.routers" :key="index" :index="item.path">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="tags-bar" :style="'margin-left:' + model.page.sideWidth + 'px'">

    </div>
    <div class="main-page" :style="'margin-left:' + model.page.sideWidth + 'px'">
        <img v-if="$route.path == '/'" :src="model.page.homeImg" alt="">
        <router-view/>
    </div>
    <page-loading :isLoading="$store.state.app.masking"></page-loading>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Service from '../service/HomeService';
import HomePage from '../model/HomePage';
import { CommonModel } from '@/pages/manage/common/CommonModel';
import { PageLoading } from '@/pages/manage/common/components';
@Component({
  components: {
    PageLoading,
  },
})
export default class Home extends Vue {
  private model: CommonModel<HomePage> = {
    $store: this.$store,
    $message: this.$message,
    page: {
        homeImg: require('@/assets/vue_mvc_designer.png'),
        sideWidth: 65,
        routers: [
          {
            icon: 'el-icon-s-home',
            title: '示例首页',
            path: '/hello',
          },
          {
            icon: 'el-icon-user',
            title: '示例人员',
            path: '/person_table',
          }],
    },
  };
  private service: Service = new Service(this.model);
  private toggleSideBar(): void {
    this.service.toggleSideBar();
  }

}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    min-width: 200px;
}
.home-box {
  width: 100%;
  .header-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 80px;
    width: 100%;
    background: gray;
  }
  .side-bar {
    position: fixed;
    margin-top: 80px; 
    top: 0;
    left: 0;
    bottom: 0;
    background:lightgray;
  }
  .tags-bar {
    position: fixed;
    margin-top: 80px;
    height: 50px;
    width: 100%;
    top: 0;
    left: 0;
    background: rgb(195, 223, 224);
  }
  .main-page {
    margin-top: 130px; 
    overflow: hidden;
    padding-right: 50px;
  }
  
}
</style>