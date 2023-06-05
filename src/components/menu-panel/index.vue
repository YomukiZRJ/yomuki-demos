<script lang="ts" setup>
import { menuRouts } from '@/router'
const router = useRouter()

const toRoute = (name: RouteRecordName) => {
  router.push({ name })
}
</script>

<template>
  <div class="fixed max-hh-90 top-15 color-light">
    <div
      v-for="({ children, name }) in menuRouts"
      :key="name"
    >
      <!-- <span>{{ meta.title }}</span> -->
      <template
        v-for="menu in children"
        :key="menu.name"
      >
        <div
          v-if="menu.name"
          class="flex items-center cursor-pointer op-20 hover:op-80 transition-opacity"
          @click="toRoute(menu.name)"
        >
          <span>{{ menu.meta.title }}</span>
        </div>
      </template>
    </div>
  </div>
</template>
