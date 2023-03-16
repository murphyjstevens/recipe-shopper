<script setup lang="ts">
import type { Item } from '@/models/item.model';
import { type Ref, ref } from 'vue';

const name: Ref<string> = ref('');
const items: Ref<Array<Item>> = ref([]);
const newItemName: Ref<string> = ref('');
const newItemQuantity: Ref<number> = ref(1);

function addItem() {
  const newItem = {
    name: newItemName.value,
    quantity: newItemQuantity.value
  } as Item;

  items.value.push(newItem);

  newItemName.value = '';
  newItemQuantity.value = 1;
}

function save() {

}
</script>

<template>
  <div class="w-full h-full bg-gray-800">
    <header class="navbar bg-gray-900">
      <div class="navbar-start">
        <router-link
          to="/"
          class="btn btn-ghost btn-circle"
        >
          <i class="bi bi-arrow-left text-xl"></i>
        </router-link>
      </div>

      <div class="navbar-center">
        <h2 class="flex text-2xl my-2">New Recipe</h2>
      </div>

      <div class="navbar-end">
        <button
          @click="save()"
          class="btn btn-ghost btn-circle"
          title="Save"
          :disabled="!name"
        >
          <i class="bi bi-save text-xl"></i>
        </button>
      </div>
    </header>

    <div class="flex flex-col p-3 items-center justify-center">
      <input v-model="name" class="input w-full" placeholder="New Recipe" title="Recipe Name">

      <h2 class="text-2xl mt-4 mb-2">Ingredients</h2>

      <div v-for="(item) in items" v-bind:key="item.name" class="flex flex-row justify-start w-full">
        <span class="mr-2">{{ item.name }}</span>
        <span class="text-sm text-slate-400">{{ item.quantity }}</span>
      </div>

      <div class="flex flex-row">
        <input v-model="newItemName" required class="input input-sm w-2/3 mr-1" placeholder="Ingredient" title="Ingredient">
        
        <input v-model="newItemQuantity" required class="input input-sm w-1/3 mr-1" placeholder="Quantity" title="Quantity">

        <button 
          class="btn btn-sm w-auto"
          @click="addItem()"
          :disabled="!newItemName || !newItemQuantity"
          title="Ingredient name and quantity are required"
        >
          <i class="bi bi-plus-lg"></i>
        </button>
      </div>
    </div>
  </div>
</template>
