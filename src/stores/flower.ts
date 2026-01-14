import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export enum FlowerMood {
  HAPPY = 'happy',
  CALM = 'calm',
  EXCITED = 'excited',
  SAD = 'sad',
  SLEEPY = 'sleepy',
}

export enum FlowerAnimation {
  IDLE = 'idle',
  SWAYING = 'swaying',
  DANCING = 'dancing',
  BLOOMING = 'blooming',
  WITHERING = 'withering',
}

export const useFlowerStore = defineStore('flower', () => {
  const currentMood = ref<FlowerMood>(FlowerMood.CALM)
  const currentAnimation = ref<FlowerAnimation>(FlowerAnimation.IDLE)
  const petalCount = ref(5)
  const color = ref('#ff69b4')

  const moodEmoji = computed(() => {
    const emojiMap: Record<FlowerMood, string> = {
      [FlowerMood.HAPPY]: '😊',
      [FlowerMood.CALM]: '😌',
      [FlowerMood.EXCITED]: '🤩',
      [FlowerMood.SAD]: '😢',
      [FlowerMood.SLEEPY]: '😴',
    }
    return emojiMap[currentMood.value]
  })

  function setMood(mood: FlowerMood) {
    currentMood.value = mood
  }

  function setAnimation(animation: FlowerAnimation) {
    currentAnimation.value = animation
  }

  function setColor(hex: string) {
    color.value = hex
  }

  function setPetalCount(count: number) {
    petalCount.value = Math.max(3, Math.min(12, count))
  }

  function updateMoodBasedOnMusic(bpm: number, volume: number) {
    if (volume < 0.2) {
      setMood(FlowerMood.SLEEPY)
      setAnimation(FlowerAnimation.IDLE)
    }
    else if (bpm < 60) {
      setMood(FlowerMood.CALM)
      setAnimation(FlowerAnimation.SWAYING)
    }
    else if (bpm < 120) {
      setMood(FlowerMood.HAPPY)
      setAnimation(FlowerAnimation.SWAYING)
    }
    else {
      setMood(FlowerMood.EXCITED)
      setAnimation(FlowerAnimation.DANCING)
    }
  }

  return {
    currentMood,
    currentAnimation,
    petalCount,
    color,
    moodEmoji,
    setMood,
    setAnimation,
    setColor,
    setPetalCount,
    updateMoodBasedOnMusic,
  }
})
