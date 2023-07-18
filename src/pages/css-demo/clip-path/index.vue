<script lang="ts" setup>
const demo2Imgs = [
  '//assets.yomuki.com/imgs/xb2/2022051321161000-ECCAE210FD0AA1E799B6F807E179FB9A.jpg',
  '//assets.yomuki.com/imgs/xb2/2022042318321200-ECCAE210FD0AA1E799B6F807E179FB9A.jpg',
  '//assets.yomuki.com/imgs/xb2/2022051321022800-ECCAE210FD0AA1E799B6F807E179FB9A.jpg',
  '//assets.yomuki.com/imgs/xb2/2022051321143000-ECCAE210FD0AA1E799B6F807E179FB9A.jpg',
  '//assets.yomuki.com/imgs/xb2/2022051321144600-ECCAE210FD0AA1E799B6F807E179FB9A.jpg',
  '//assets.yomuki.com/imgs/xb2/2022051321150400-ECCAE210FD0AA1E799B6F807E179FB9A.jpg',
  '//assets.yomuki.com/imgs/xb2/2022051321150900-ECCAE210FD0AA1E799B6F807E179FB9A.jpg',
  '//assets.yomuki.com/imgs/xb2/2022051721585400-ECCAE210FD0AA1E799B6F807E179FB9A.jpg',
  '//assets.yomuki.com/imgs/xb2/2022051722304100-ECCAE210FD0AA1E799B6F807E179FB9A.jpg',
  '//assets.yomuki.com/imgs/xb2/2022051511493500-ECCAE210FD0AA1E799B6F807E179FB9A.jpg'
]
</script>

<template>
  <div class="w-100vw p-16px pt-50px flex flex-wrap bg-black gap-10 box-border clip-path-demo">
    <div class="demo-1 w-500px h-250px" />
    <div class="demo-4 w-500px h-250px" />
    <div class="demo-2">
      <div
        v-for="(imgSrc, index) in demo2Imgs"
        :key="index"
      >
        <img
          :src="imgSrc"
          alt=""
        >
      </div>
    </div>
    <div class="demo-3 w-500px h-250px">
      <img
        class="object-cover w-100% h-100%"
        :src="demo2Imgs[4]"
        alt=""
      >
    </div>
    <div class="demo-5 w-100px h-50px" />
    <div class="demo-6 w-100px h-50px">
      <div class="w-100% h-100% bg-amber relative" />
    </div>
    <div
      class="demo-7 "
      data-text="Text Clip Path"
    >
      <span>Text Clip Path </span>
    </div>
  </div>
</template>

<style scoped>
@import './index.css';
</style>
