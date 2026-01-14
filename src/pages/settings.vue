<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
  <div class="w-full h-full p-8 bg-white/90 backdrop-blur">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-2xl font-bold mb-6 text-gray-800">
        Settings
      </h1>

      <div class="space-y-6">
        <!-- Language -->
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-700">
              Language
            </div>
            <div class="text-sm text-gray-500">
              Select your preferred language
            </div>
          </div>
          <select
            v-model="appStore.settings.language"
            class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="en">
              English
            </option>
            <option value="zh">
              简体中文
            </option>
          </select>
        </div>

        <!-- Theme -->
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-700">
              Theme
            </div>
            <div class="text-sm text-gray-500">
              Choose app theme
            </div>
          </div>
          <select
            v-model="appStore.settings.theme"
            class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="light">
              Light
            </option>
            <option value="dark">
              Dark
            </option>
            <option value="auto">
              Auto
            </option>
          </select>
        </div>

        <!-- Always on Top -->
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-700">
              Always on Top
            </div>
            <div class="text-sm text-gray-500">
              Keep window always visible
            </div>
          </div>
          <input
            v-model="appStore.settings.alwaysOnTop"
            type="checkbox"
            class="w-5 h-5 text-pink-500 rounded focus:ring-pink-500"
          >
        </div>

        <!-- Auto Start -->
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-700">
              Auto Start
            </div>
            <div class="text-sm text-gray-500">
              Launch app on system startup
            </div>
          </div>
          <input
            v-model="appStore.settings.autoStart"
            type="checkbox"
            class="w-5 h-5 text-pink-500 rounded focus:ring-pink-500"
          >
        </div>

        <!-- Show Tray Icon -->
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-700">
              Show Tray Icon
            </div>
            <div class="text-sm text-gray-500">
              Show icon in system tray
            </div>
          </div>
          <input
            v-model="appStore.settings.showTrayIcon"
            type="checkbox"
            class="w-5 h-5 text-pink-500 rounded focus:ring-pink-500"
          >
        </div>
      </div>
    </div>
  </div>
</template>
