<script setup lang="ts"></script>

<template>
  <div class="container">
    <router-view />
    <van-tabbar route fixed placeholder>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/login" icon="search">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
}
</style>
