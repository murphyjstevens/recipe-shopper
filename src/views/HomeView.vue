<script setup lang="ts">
import type { Recipe } from '@/models/recipe.model';
import { useRecipeStore } from '@/stores/recipe.store';
import { computed, type ComputedRef } from 'vue';

const recipeStore = useRecipeStore()

const recipes: ComputedRef<Array<Recipe>> = computed(
  () => recipeStore.all
)

recipeStore.fetch()
</script>

<template>
  <header class="h-12 px-4 bg-gray-900 flex flex-row justify-between">
    <div class="w-14"></div>

    <h2 class="flex text-2xl my-2">Recipes</h2>

    <div class="w-14 flex justify-end items-center">
      <router-link
        class="h-7 w-7 bg-transparent flex flex-row items-center justify-center rounded-full transition ease-in-out hover:bg-gray-800 active:bg-gray-700"
        to="/new"
      >
        <i class="bi bi-plus-lg text-xl"></i>
      </router-link>
    </div>
  </header>

  <div v-if="!recipes?.length" class="flex flex-col items-center justify-center">
    <div class="flex flex-row justify-end">
      
    </div>
    <h2 class="flex text-xl my-2">You have no recipes!</h2>
  </div>

  <div v-for="recipe in recipes" v-bind:key="recipe.id">

  </div>
</template>
