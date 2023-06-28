<script lang="ts" setup>
</script>

<template>
  <div class="w-100vw overflow-hidden flex gap-16px box-border flex-wrap p-16px bg-black items-center">
    <div class="mask-demo-1">
      demo1:基本使用
    </div>
    <div class="mask-demo-2 h-60px bg-gradient-to-r from-pink-700 to-pink-200">
      demo2:通过mask裁剪元素
    </div>
    <div>
      <p class="color-white">
        demo3：用mask实现渐变消失布局
      </p>
      <div class="mask-demo-3 px-18px w-300px rounded-10px">
        <div class="py-10px px-1px w-100% flex gap-10px box-border overflow-x-scroll">
          <div
            v-for="item in 8"
            :key="item"
            class="flex-none bg-white rounded-10px w-60px h-20px text-center cursor-pointer line-height-20px shadow-bluegray shadow-sm hover:bg-bluegray "
          >
            Button
          </div>
        </div>
      </div>
    </div>
    <div class="mask-demo-4 w-100vmin aspect-ratio-video">
      demo4：使用mask实现图片融合效果
    </div>
    <div class="mask-demo-5 flex gap-10px items-center color-red flex-wrap">
      <div>add</div>
      <div>subtract</div>
      <div>intersect</div>
      <div>exclude</div>
      <div>clear</div>
      <div>copy</div>
      <div>source-over</div>
      <div>source-in</div>
      <div>source-out</div>
      <div>source-atop</div>
      <div>destination-over</div>
      <div>destination-in</div>
      <div>destination-out</div>
      <div>destination-atop</div>
      <div>xor</div>
    </div>
  </div>
</template>

<style  scoped>
@import "./index.css";
</style>
