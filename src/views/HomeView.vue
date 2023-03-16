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
  <div class="w-full h-full bg-gray-800">
    <header class="navbar bg-gray-900">
      <div class="navbar-start">
      </div>

      <div class="navbar-center">
        <h2 class="flex text-2xl">Recipes</h2>
      </div>

      <div class="navbar-end">
        <router-link
          to="/new"
          class="btn btn-ghost btn-circle"
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
  </div>
</template>
