import http from "@/utils/http"
import type { BannerResponse, HotGoodResponse, NewGoodResponse } from "./type"
export function getBanner() {
    return http.get<any,BannerResponse>("/home/banner")
}
export function getNew() {
    return http.get<any,NewGoodResponse>('/home/new')
}
export function getHot() {
    return http.get<any,HotGoodResponse>('/home/hot')
}