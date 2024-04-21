import http from "@/utils/http";
import type { AllOrderResponse } from "./type";

type Params = {
    orderState: number
    page: number
    pageSize: number
}
export const reqUserOrder = (params:Params) => {
     return http.get<any,AllOrderResponse>('/member/order', {params:params});
}