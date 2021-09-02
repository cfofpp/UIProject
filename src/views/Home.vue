<template>
<el-container class="home">
  <el-aside width="200">
    <el-menu background-color="#304156" text-color="#fff" active-text-color="#ffd04b" :router="true" default-active="/home/picsquare" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <!-- <el-submenu index="1">
        <template #title>
          <i class="el-icon-odometer"></i>
          <span>Dashboard</span>
        </template>
        <el-menu-item index="/home/booking">
          <i class="el-icon-user"></i>
          Booking
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template #title>
          <i class="el-icon-s-data"></i>
          <span>Internal Settings</span>
        </template>
        <el-menu-item index="1-1">
          <i class="el-icon-office-building"></i>
          Branch
        </el-menu-item>
        <el-menu-item index="1-2">
          <i class="el-icon-house"></i>
          Department
        </el-menu-item>
        <el-menu-item index="/home/about">
          <i class="el-icon-user"></i>
          关于
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template #title>
          <i class="el-icon-picture-outline"></i>
          <span>Contacts Settings</span>
        </template>
        <el-menu-item index="/home/about">
          <i class="el-icon-user"></i>
          关于
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template #title>
          <i class="el-icon-document"></i>
          <span>Business</span>
        </template>
        <el-menu-item index="/home/booking">
          <i class="el-icon-help"></i>
          Booking
        </el-menu-item>
        <el-menu-item index="/home/Editbooking">
          <i class="el-icon-phone"></i>
          Editbooking
        </el-menu-item>
      </el-submenu> -->
      <el-menu-item index="/home/picsquare">
        <i class="el-icon-user"></i>
        图片广场
      </el-menu-item>
      <el-menu-item index="/home/mePic">
        <i class="el-icon-user"></i>
        我的图片
      </el-menu-item>
      <el-menu-item index="/home/sendImg">
        <i class="el-icon-user"></i>
        发布图片
      </el-menu-item>
      <el-menu-item v-if="user.roleID==2" index="/home/waitComment">
        <i class="el-icon-user"></i>
        待评图片
      </el-menu-item>
    </el-menu>

  </el-aside>
  <el-container>
    <el-header height="70px">
      <div>
        <div id="front">
          <i style="font-size:28px" @click="gai()" v-show="isCollapse" class="el-icon-s-unfold"></i>
          <i style="font-size:28px" @click="gai()" v-show="! isCollapse" class="el-icon-s-fold"></i>

          <!-- 面包屑导航 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/home/getalluser'}">{{$route.name}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>

      <div class="block" @click="exit()">
        <el-tooltip class="item" effect="dark" content="退出系统" placement="left">
          <el-avatar :size="50" :src="require('@/assets/h1.png')"></el-avatar>
        </el-tooltip>
      </div>

    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  data() {
    return {
        user:{},
      isCollapse: false
    };
  },
  created(){
      this.user =JSON.parse(sessionStorage.getItem("user"))
      console.log(this.user.roleID);
  },    
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    gai() {
      this.isCollapse = !this.isCollapse;
    },
    exit() {
      this.$router.push("/login");
      window.sessionStorage.removeItem("token");
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

#app {
  cursor: pointer;
}

.home {
  //height: 98vh;
  height: 100%;
  text-align: left;
}

.home .el-aside {
  background-color: #304156;
  color: #333;
  line-height: 200px;
  border-radius: 0 5px 5px 0;
  text-align: left;
}

.el-avatar {
  cursor: pointer;
}

.el-menu {
  border: 0px;
}

.el-header {
  .block {
    padding-right: 10px;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-icon-s-unfold,
.el-icon-s-fold,
.el-breadcrumb {
  float: left;
  vertical-align: text-bottom;
}

.el-breadcrumb {
  padding-left: 50px;
  padding-top: 10px;
  font-weight: 700;
}
</style>
