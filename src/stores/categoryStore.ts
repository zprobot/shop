import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import type { GoodCategory } from '@/apis/type';
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('categoryStore', () => {
  
  const categoryList = ref<GoodCategory[]>([])
  const getCategory = async () => {
      const res = await getCategoryAPI()
      categoryList.value = res.result
  }
  onMounted(() => {
      getCategory()
  })

  return { categoryList, getCategory}
})
