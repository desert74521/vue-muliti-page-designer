<template>
  <div class="home-box">
    <div class="header-bar">
    </div>
    <div 
    class="toggle-menu" 
    @click="toggleSideBar"  
    :style="'width:' + model.page.sideWidth + 'px'"
    >
        <i class="el-icon-s-unfold"></i>
    </div>
    <div class="side-bar" :style="'width:' + model.page.sideWidth + 'px'">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse-transition="false" :router="true" :collapse="model.page.sideWidth === 65">
        <el-menu-item v-for="(item,index) in model.page.routers" :key="index" :index="item.path">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="tags-bar" :style="'margin-left:' + (model.page.sideWidth + 4) + 'px'">
      <el-tag size="medium" type="" effect="dark"> >
      {{$route.name}}
      </el-tag>
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
import { PageLoading } from '@/modules';
@Component({
  components: {
    PageLoading,
  },
})
export default class Home extends Vue {
  private model: CommonModel<HomePage> = new CommonModel<HomePage>({
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
          },
      ],
    },
  });
  private service: Service = new Service(this.model);
  private toggleSideBar(): void {
    this.service.toggleSideBar();
  }

}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    min-width: 198px;
}
.home-box {
  width: 100%;
  .toggle-menu {
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 80px; 
    height: 40px;
    padding: auto;
    text-align: center;
    line-height: 40px;
    border-right: 4px solid blue;
    background: rgb(224, 220, 220)
  }
  .toggle-menu:hover {
    cursor: pointer;
  }
  .header-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 76px;
    width: 100%;
    background: linear-gradient(white, rgb(198, 230, 241),white);
    border-bottom: 4px solid  blue;
  }
  .side-bar {
    position: fixed;
    margin-top: 120px; 
    top: 0;
    left: 0;
    bottom: 0;
    border-right: 4px solid blue;
  }
  .tags-bar {
    position: fixed;
    margin-top: 80px;
    height: 40px;
    width: 100%;
    top: 0;
    left: 0;
    line-height: 40px;
    padding: 0 5px;
    background: rgb(219, 237, 243);
    border-bottom: 1px solid lightblue;
    .tages-router {
      margin: 0 5px;
    }
  }
  .main-page {
    margin-top: 130px; 
    overflow: hidden;
    padding-right: 50px;
  }
  
}
</style>