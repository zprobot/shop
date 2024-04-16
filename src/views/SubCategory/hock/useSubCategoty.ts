import { getCategpryFilter } from '@/apis/category';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import type { FilterCategory} from '@/apis/type'

export function useSubCategory(){

    const filterMsg = ref<FilterCategory>()
    const route = useRoute()
    const getFilterMsg = async (id:string) => {
        const res = await getCategpryFilter(id)
        filterMsg.value = res.result
    }

    onMounted(() => {
        getFilterMsg(route.params.id as string)
    })
    return {
        filterMsg
    }
}