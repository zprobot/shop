import { onMounted, ref } from 'vue';
import { reqCheckInfo } from '@/apis/checkout'
import type { PayOrder, UserAddress } from '@/apis/type'

export default function useCheckout() {
    let checkInfo =  ref<PayOrder>()  // 订单对象
    let curAddress = ref<UserAddress>()  // 地址对象
    let activeAddress = ref<UserAddress>()
    const getCheckInfo = async () => {
        const res = await reqCheckInfo()
        checkInfo.value = res.result
        // 从地址列表中筛选出来 isDefault === 0 那一项
        const item = checkInfo.value.userAddresses.find(item => item.isDefault === 0)
        curAddress.value = item
    }
    const switchAddress = (item:UserAddress) => {
        activeAddress.value = item
    }
    const updateAddress = () => {
        curAddress.value = activeAddress.value
    }
    onMounted(() => getCheckInfo())
    return {
        checkInfo,
        curAddress,
        activeAddress,
        switchAddress,
        updateAddress
    }
}
