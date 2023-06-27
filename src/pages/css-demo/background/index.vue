<script lang="ts" setup>
</script>

<template>
  <div class="w-100vw p-16px pt-50px flex flex-wrap bg-black gap-10 box-border">
    <!-- demo1 -->
    <div>
      <p class="color-white">
        demo1：用渐变背景色作为透明过渡：
      </p>
      <div class="background-demo-1 px-18px w-300px rounded-10px">
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
    <!-- demo2 -->
    <div class="background-demo-2 p-30px">
      demo2：利用渐变叠加实现内切角图形
    </div>
    <!-- demo3 -->
    <div class="background-demo-3 w-100px h-100px" />
    <!-- demo4 -->
    <div
      class="background-demo-4 w-200px h-60px bg-rose rounded-l-10px"
    >
      demo4：利用径向渐变实现波浪
    </div>
    <div>
      <p class="background-demo-5 m-0 color-pink cursor-pointer">
        demo5：文字下划线波浪
      </p>
    </div>
    <div class="background-demo-6 color-pink">
      demo6：通过 background-position 模拟渐变动画
    </div>
    <div class="background-demo-7 color-pink">
      demo7：通过 transform 模拟渐变动画
    </div>
    <div class="background-demo-8 color-pink">
      demo8：通过 hue-rotate 模拟渐变动画
    </div>
    <div class="background-demo-9 color-pink">
      demo9：通过 CSS @property 模拟渐变动画
    </div>
    <div class="background-demo-10 color-pink w-200px h-100px">
      demo10：利用background叠加和clip的技巧
    </div>
    <div class="background-demo-11 color-pink w-200px h-100px">
      demo11：加上动画
    </div>
    <div class="background-demo-12 text-lg font-700">
      demo12：渐变文字
    </div>
    <div class="w-200px">
      <p class="background-demo-13 m-0 color-white">
        demo13：利用background在内联元素中的特性实现多行文本渐隐Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere suscipit voluptatum natus quasi hic optio, consequatur aspernatur. Ea nobis assumenda animi modi nemo et eum veritatis, asperiores sequi illo aut?
      </p>
    </div>
    <div class="w-200px">
      <p class="color-white  m-0 background-demo-14">
        demo14：Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>Sapiente corrupti odio, ratione minus, in fugiat dolorum sit saepe id quod aspernatur omnis possimus! </span> Saepe perspiciatis impedit ipsam iste sequi. Est.
      </p>
    </div>
    <div class="background-demo-15 w-200px h-200px overflow-y-scroll color-white">
      <p class="m-0">
        demo14：滚动时出现阴影遮罩Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea itaque eos, harum unde consequuntur perferendis doloremque voluptas dolore? Adipisci nulla, similique harum doloribus alias ipsam exercitationem placeat obcaecati laboriosam esse?
      </p>
    </div>
  </div>
</template>

<style scoped>
@import "./index.css";
</style>
