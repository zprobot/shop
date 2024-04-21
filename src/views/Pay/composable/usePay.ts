import { getOrder } from '@/apis/pay'
import type { OrderDetail } from '@/apis/type';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import { useCountDown } from '@/utils/useCountDown'

export default () => {
    const { formatTime, start } = useCountDown()
    const route = useRoute()
    const payInfo = ref<OrderDetail>()
    const getPayInfo = async () => {
        const res = await getOrder(route.query.id as string)
        payInfo.value = res.result
        start(payInfo.value.countdown as number)
    }
    onMounted(() => getPayInfo())
    return {
        formatTime,
        payInfo
    }
}
