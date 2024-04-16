import { getCategoryMsg } from "@/apis/category"
import type { GoodCategory } from "@/apis/type"
import { onMounted, ref } from "vue"
import { onBeforeRouteUpdate, useRoute } from "vue-router"

export function useCategory() {
    const route = useRoute()
    const categoryMsg = ref<GoodCategory>()
    const getSecondCategoryMsg = async (id: string) => {
        let res = await getCategoryMsg(id)
        categoryMsg.value = res.result
    }
    onMounted(() => {
        getSecondCategoryMsg(route.params.id as string)
    })
    onBeforeRouteUpdate((to) => {
        // 解决路由缓存问题 (路由id的改变导致的组件复用)
        getSecondCategoryMsg(to.params.id as string)
    })
    return {
        categoryMsg
    }
}