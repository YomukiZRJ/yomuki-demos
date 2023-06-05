<script lang="ts" setup>
const isShowMenu = ref(false)
const handleState = () => {
  isShowMenu.value = !isShowMenu.value
}
</script>

<template>
  <Teleport to="body">
    <div class="fixed top-2 left-2 z-1">
      <div
        class="i-line-md-reddit-circle-loop color-light w-10 h-10 cursor-pointer hover:op-80 transition-opacity"
        :class="{
          'op-20': !isShowMenu
        }"
        @click="handleState"
      />
    </div>
    <Transition>
      <menu-panel v-if="isShowMenu" />
    </Transition>
  </Teleport>
</template>
