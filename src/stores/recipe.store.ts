import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { Recipe } from '@/models/recipe.model'

export const useRecipeStore = defineStore('recipe', () => {
  const all: Ref<Array<Recipe>> = ref([])

  function fetch() {
    const allStored = localStorage.getItem('recipes')
    if (allStored) {
      all.value = JSON.parse(allStored) as Array<Recipe>
    } else {
      all.value = []
    }
  }

  function save(recipe: Recipe) {
    all.value = all.value.filter(a => a.id !== recipe.id)
    all.value.unshift(recipe)
  }

  return { all, fetch, save }
})
