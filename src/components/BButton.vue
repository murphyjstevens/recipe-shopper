<template>
  <button
    type="button"
    class="disabled:opacity-30 disabled:cursor-not-allowed focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
    :class="{
      'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800':
        type === 'primary',
      'bg-gray-400 text-gray-900 px-3 py-1 hover:bg-gray-500 active:bg-gray-300':
        type === 'default',
      'bg-red-600 text-white px-3 py-1 hover:bg-red-500 active:bg-red-700':
        type === 'danger',
      'border-2 border-indigo-700 text-indigo-400 px-3 py-1 hover:bg-indigo-700 hover:text-white active:bg-indigo-800':
        type === 'primary-outline',
      'border-2 border-gray-400 px-3 py-1 hover:bg-gray-400 hover:text-gray-900 active:bg-gray-300 disabled:bg-transparent disabled:text-white':
        type === 'default-outline',
      'border-2 border-red-600 text-red-500 px-3 py-1 hover:bg-red-600 hover:text-white active:bg-red-800':
        type === 'danger-outline',
      'text-white hover:text-gray-200 active:text-gray-500':
        type === 'default-icon-only',
      'text-indigo-400 hover:text-indigo-300 active:text-indigo-500':
        type === 'primary-icon-only',
      'text-red-400 hover:text-red-300 active:text-red-500':
        type === 'danger-icon-only',
    }"
  >
    <i v-if="icon" class="bi" :class="[`bi-${icon}`, { 'mr-2': text }]"></i>
    <span v-if="text">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  icon?: string
  text?: string
  type: string
}>()
</script>