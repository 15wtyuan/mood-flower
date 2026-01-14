import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export enum MusicState {
  IDLE = 'idle',
  PLAYING = 'playing',
  PAUSED = 'paused',
}

export const useMusicStore = defineStore('music', () => {
  const state = ref<MusicState>(MusicState.IDLE)
  const volume = ref(0)
  const bpm = ref(0)
  const frequency = ref(0)

  const isPlaying = computed(() => state.value === MusicState.PLAYING)
  const isPaused = computed(() => state.value === MusicState.PAUSED)

  function setState(newState: MusicState) {
    state.value = newState
  }

  function updateAudioData(data: { volume?: number; bpm?: number; frequency?: number }) {
    if (data.volume !== undefined)
      volume.value = data.volume
    if (data.bpm !== undefined)
      bpm.value = data.bpm
    if (data.frequency !== undefined)
      frequency.value = data.frequency
  }

  function reset() {
    state.value = MusicState.IDLE
    volume.value = 0
    bpm.value = 0
    frequency.value = 0
  }

  return {
    state,
    volume,
    bpm,
    frequency,
    isPlaying,
    isPaused,
    setState,
    updateAudioData,
    reset,
  }
})
