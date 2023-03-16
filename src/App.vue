<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="bg-gray-800 text-white w-full h-full">
    <router-view v-slot="{ Component }">
      <transition
        :name="$route.meta.transition as string"
        mode="in-out"
      >
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </main>
</template>

<style>
  .transition {
    overflow: hidden;
  }
  .router-view-enter-active,
  .router-view-leave-active,
  .router-view-back-enter-active,
  .router-view-back-leave-active {
    position: fixed;
    width: 100%;
    background: white;
    min-height: 100vh;
    top: 0;
  }

  /* router view */
  .router-view-enter-active {
    transition: transform 0.5s ease-in-out;
    z-index: 2;
    transform: translateX(100%);
  }
  .router-view-enter-to {
    z-index: 2;
    transform: translateX(0%);
  }
  .router-view-leave-active {
    z-index: -1;
  }
  .router-view-leave-to {
    z-index: -1;
  }

  /* router view back */
  .router-view-back-leave-active {
    transition: transform 0.5s ease-in-out;
    z-index: 2;
    transform: translateX(0%);
  }
  .router-view-back-leave-to {
    z-index: 2;
    transform: translateX(100%);
  }
</style>