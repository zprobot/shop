import http from "@/utils/http";
import type { AddCartResponse, CartListResponse } from "./type";
type SkuMsg = {
    skuId?: string
    count: number 
    selected?: boolean
}

export function findNewCartList(){
    return http.get<any,CartListResponse>('/member/cart');
}
export function insertCart(sku:SkuMsg){
    return http.post<any,AddCartResponse>('/member/cart',sku);
}
export function delCart(ids:string[]) {
    return http.delete<any,any>('/member/cart',{data:{ids}})
}
export function mergeCart(data:SkuMsg[]){
    return http.post('/member/cart/merge',data);
}
export function updateCartItem(skuId:string,data:SkuMsg){   
    return http.put(`/member/cart/${skuId}`,data);
}