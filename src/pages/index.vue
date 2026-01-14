<script setup lang="ts">
import { useFlowerStore } from '@/stores/flower'
import { useMusicStore } from '@/stores/music'

const flowerStore = useFlowerStore()
const musicStore = useMusicStore()
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-purple-100">
    <div class="text-6xl mb-8">
      {{ flowerStore.moodEmoji }}
    </div>

    <div class="flower-container relative">
      <!-- Flower stem -->
      <div class="w-2 h-32 bg-green-500 rounded-full" />

      <!-- Flower petals -->
      <div class="absolute -top-16 left-1/2 transform -translate-x-1/2 flex gap-1">
        <div
          v-for="i in flowerStore.petalCount"
          :key="i"
          class="w-8 h-16 rounded-full"
          :style="{
            backgroundColor: flowerStore.color,
            transform: `rotate(${(i - 1) * (360 / flowerStore.petalCount)}deg) translateY(-20px)`,
          }"
        />
      </div>

      <!-- Flower center -->
      <div class="absolute -top-16 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full" />
    </div>

    <div class="mt-8 text-center">
      <div class="text-lg font-semibold text-gray-700">
        Mood Flower
      </div>
      <div class="text-sm text-gray-500 mt-2">
        {{ musicStore.isPlaying ? 'Listening to music...' : 'Waiting for music...' }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.flower-container {
  animation: sway 2s ease-in-out infinite;
}

@keyframes sway {
  0%, 100% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
}
</style>
