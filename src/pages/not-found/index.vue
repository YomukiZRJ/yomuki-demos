<script lang="ts" setup name="NotFound">
const showRouteInfo = () => {
  const route = useRoute()
  console.log(route.params)
}
onMounted(() => {
  showRouteInfo()
})
onBeforeUpdate(() => {
  showRouteInfo()
})
</script>

<template>
  <div>
    Not Found
  </div>
</template>
