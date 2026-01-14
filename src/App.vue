<script setup lang="ts">
import { useAppStore } from './stores/app'

const appStore = useAppStore()
</script>

<template>
  <router-view />
</template>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100vh;
}
</style>
