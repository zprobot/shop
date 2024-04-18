import http from "@/utils/http";
import type { DetailHotResponse, GoodDetailResponse } from "./type";

export function getDetail(id: string) {
    return http.get<any,GoodDetailResponse>('/goods',{params:{id}})
}
type ReqGoodsArgs = {
    id: string
    type: number
    limit?: number
}
export function getHotGoods({ id, type, limit = 5 }:ReqGoodsArgs) {
    return http.get<any,DetailHotResponse>('/goods/hot', {
        params: {
            id,
            type,
            limit
        }
    })
}