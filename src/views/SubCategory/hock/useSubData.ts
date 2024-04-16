import { getSubCategory } from '@/apis/category';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import type { ReqSubData, Good } from '@/apis/type'
export function useSubData() {
    const route = useRoute()
    const reqData = ref<ReqSubData>({
        categoryId: route.params.id as string,
        page: 1,
        pageSize: 20,
        sortField: 'publishTime'
    })
    const subData = ref<Good[]>([])
    const disabled = ref(false)
    const getSubData = async (data: ReqSubData) => {
        const res = await getSubCategory(data)
        subData.value = res.result.items
    }
    const tabChange = () => {
        Object.assign(reqData.value, {
            page: 1
        })
        getSubData(reqData.value)
    }
    const load = async () => {
        reqData.value.page++
        const res = await getSubCategory(reqData.value)
        subData.value = [...subData.value, ...res.result.items]
        if (res.result.items.length === 0) {
            disabled.value = true
        }
    } 
    onMounted(() => {
        getSubData(reqData.value)
    })
    return {
        subData,
        reqData,
        disabled,
        tabChange,
        load
    }
}