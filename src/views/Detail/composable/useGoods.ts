import { getDetail } from '@/apis/detail'
import type { Good } from '@/apis/type';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'

export function useGoods() {

    const goods = ref<Good>()
    const route = useRoute()
    const getGoods = async () => {
        const res = await getDetail(route.params.id as string)
        goods.value = res.result
    }
    onMounted(() => getGoods())
    return {
        goods
    }
}