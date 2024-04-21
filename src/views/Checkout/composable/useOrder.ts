import { createOrder } from "@/apis/checkout"
import type { CartItem } from "@/apis/type"
import router from "@/router"

export default function useOrder() {
    const getOrderId = async (goods: CartItem[],addressId: string) => {
        let reqData = {
            deliveryTimeType: 1,
            payType: 1,
            payChannel: 1,
            buyerMessage: '',
            goods: goods.map((item) => {
                return {
                    skuId: item.skuId,
                    count: item.count
                }
            }),
            addressId: addressId
        }
        const res = await createOrder(reqData)
        router.push({
          path: '/pay',
          query: {
            id: res.result.id
          }
        })
    }
    return {
        getOrderId
    }
}