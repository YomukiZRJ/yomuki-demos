<script setup lang="ts">
import useDocTitle from '@/hooks/useDocTitle'

useDocTitle()
</script>

<template>
  <operation-panel />
  <router-view />
</template>
