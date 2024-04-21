import http from '@/utils/http'
import type { OrderDetailResponse } from './type';

// 获取支付订单详情接口
export const getOrder = (id:string) => {
    return http.get<any,OrderDetailResponse>(`/member/order/${id}`);
}