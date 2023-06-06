<script lang="ts" setup>
</script>

<template>
  <div class="center-full-page ">
    <div
      id="animatingGrid"
      class="h-45vw grid gap-5"
    >
      <div class="left border-rounded-3 h-45vw">
        <div class="i-line-md:emoji-smile-twotone color-rose-700 w-auto h-auto" />
        <div class="h-auto overflow-hidden box-border flex flex-col justify-center op-0">
          <p class="m-0 indent-2em">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quae sint et laudantium maxime repudiandae dolore nesciunt, aliquid facere magnam veniam corrupti vel consequuntur culpa quidem, id sequi esse assumenda?
          </p>
          <p class="m-0 indent-2em">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quae sint et laudantium maxime repudiandae dolore nesciunt, aliquid facere magnam veniam corrupti vel consequuntur culpa quidem, id sequi esse assumenda?
          </p>
        </div>
      </div>
      <div class="center border-rounded-3 h-45vw">
        <div class="i-line-md:emoji-grin-twotone color-rose-700 w-auto h-auto" />
        <div class="h-auto overflow-hidden box-border flex flex-col justify-center op-0">
          <p class="m-0 indent-2em">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quae sint et laudantium maxime repudiandae dolore nesciunt, aliquid facere magnam veniam corrupti vel consequuntur culpa quidem, id sequi esse assumenda?
          </p>
          <p class="m-0 indent-2em">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quae sint et laudantium maxime repudiandae dolore nesciunt, aliquid facere magnam veniam corrupti vel consequuntur culpa quidem, id sequi esse assumenda?
          </p>
        </div>
      </div>
      <div class="right border-rounded-3 h-45vw">
        <div class="i-line-md:emoji-smile-wink-twotone color-rose-700 w-auto h-auto" />
        <div class="h-auto overflow-hidden box-border flex flex-col justify-center op-0">
          <p class="m-0 indent-2em">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quae sint et laudantium maxime repudiandae dolore nesciunt, aliquid facere magnam veniam corrupti vel consequuntur culpa quidem, id sequi esse assumenda?
          </p>
          <p class="m-0 indent-2em">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quae sint et laudantium maxime repudiandae dolore nesciunt, aliquid facere magnam veniam corrupti vel consequuntur culpa quidem, id sequi esse assumenda?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

:where(.left, .center, .right) {
  --fixedWidth: var(--columnsWidth);
  background-color: #fff;
  transition: 500ms;
  display: grid;
  grid-template-columns: var(--fixedWidth) 0fr;
}
#animatingGrid {
  --columnsWidth:30vw;
  --columnsActiveWidth:60vw;
  --columnsHiddenWidth:15vw;
  /* tip：用repeat()函数会导致动画失效 */
  grid-template-columns: var(--columnsWidth)  var(--columnsWidth)  var(--columnsWidth);
  transition: 500ms;
}
#animatingGrid:has(.left:hover){
  grid-template-columns: var(--columnsActiveWidth) var(--columnsHiddenWidth) var(--columnsHiddenWidth);
}
#animatingGrid:has(.left:hover) :where(.center, .right) {
  --fixedWidth: var(--columnsHiddenWidth);
}
#animatingGrid:has(.center:hover){
  grid-template-columns: var(--columnsHiddenWidth) var(--columnsActiveWidth) var(--columnsHiddenWidth);
}
#animatingGrid:has(.center:hover) :where(.left, .right) {
  --fixedWidth: var(--columnsHiddenWidth);
}
#animatingGrid:has(.right:hover){
  grid-template-columns: var(--columnsHiddenWidth) var(--columnsHiddenWidth) var(--columnsActiveWidth);
}
#animatingGrid:has(.right:hover) :where(.left, .center) {
  --fixedWidth: var(--columnsHiddenWidth);
}
:where(.left, .center, .right) {
  grid-template-columns: var(--fixedWidth) auto;
}
:where(.left, .center, .right):hover .op-0 {
  transition-duration: 300ms;
  transition-delay: 500ms;
  opacity: 1;
}
</style>
