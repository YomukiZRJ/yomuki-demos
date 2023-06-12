<script lang="ts" setup>
import threeRain from './three-rain'
const elRef = ref<HTMLCanvasElement | null>(null)
onMounted(() => {
  if (elRef.value)
    threeRain(elRef.value)
})
</script>

<template>
  <div class="center-full-page">
    <canvas ref="elRef" />
  </div>
</template>
