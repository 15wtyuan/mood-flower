import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'

export interface AppSettings {
  language: string
  theme: 'light' | 'dark' | 'auto'
  autoStart: boolean
  alwaysOnTop: boolean
  showTrayIcon: boolean
}

export const useAppStore = defineStore('app', () => {
  const settings: Ref<AppSettings> = ref({
    language: 'en',
    theme: 'auto',
    autoStart: false,
    alwaysOnTop: true,
    showTrayIcon: true,
  })

  const isInitialized = ref(false)

  function updateSettings<K extends keyof AppSettings>(key: K, value: AppSettings[K]) {
    settings.value[key] = value
  }

  function loadSettings(savedSettings: Partial<AppSettings>) {
    settings.value = { ...settings.value, ...savedSettings }
    isInitialized.value = true
  }

  function resetSettings() {
    settings.value = {
      language: 'en',
      theme: 'auto',
      autoStart: false,
      alwaysOnTop: true,
      showTrayIcon: true,
    }
  }

  return {
    settings,
    isInitialized,
    updateSettings,
    loadSettings,
    resetSettings,
  }
})
