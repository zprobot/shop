import http from '@/utils/http'
import type { OrderResponse, PayOrderResponse } from './type';

type PayInfo = {
    deliveryTimeType: number
    payType: number
    payChannel: number
    buyerMessage: string
    goods: {
        skuId: string
        count: number
    }[]
    addressId: string
}

// 结算
export const reqCheckInfo = () => {
    return http.get<any,PayOrderResponse>('/member/order/pre');    
}

// 提交订单
export const createOrder = (data:PayInfo) => {
    return http.post<any,OrderResponse>('/member/order',data)
}
