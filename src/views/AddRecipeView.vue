<script setup lang="ts">
import BInput from '@/components/BInput.vue';
import type { Item } from '@/models/item.model';
import { type Ref, ref } from 'vue';

const name: Ref<string> = ref('');
const items: Ref<Array<Item>> = ref([{ name: '', quantity: 1 }]);
</script>

<template>
  <header class="h-12 px-4 bg-gray-900 flex flex-row justify-between">
    <div class="w-14">
      <button class="h-7 w-7 bg-transparent flex flex-row items-center justify-center rounded-full transition ease-in-out hover:bg-gray-800 active:bg-gray-700">
        <i class="bi bi-arrow-left text-xl"></i>
      </button>
    </div>

    <h2 class="flex text-2xl my-2">Recipes</h2>

    <div class="w-14 flex justify-end items-center">
      <button class="h-7 w-7 bg-transparent flex flex-row items-center justify-center rounded-full transition ease-in-out hover:bg-gray-800 active:bg-gray-700">
        <i class="bi bi-plus-lg text-xl"></i>
      </button>
    </div>
  </header>

  <div class="flex flex-col items-center justify-center">
    <h2 class="text-2xl">New Recipe</h2>
    <div>
      <label for="name">Name:</label>
      <BInput v-model="name" required></BInput>
    </div>
    <h2 class="text-2xl">Items:</h2>
    <div v-for="(item, index) in items" v-bind:key="item.name" class="flex flex-row">
      <div>
        <label :for="`item-${index}-name`">Name:</label>
        <BInput v-model="item.name" required></BInput>
      </div>
      <div>
        <label :for="`item-${index}-quantity`">Quantity:</label>
        <BInput v-model="item.quantity" required></BInput>
      </div>
    </div>
  </div>
</template>
