import http from "@/utils/http";
import type { OneCategoryResponse, ReqSubData, SecondCategoryResponse, SubDataResponse } from "./type";

export function getCategoryMsg(id:string) {
    return http.get<any, OneCategoryResponse>("/category", { params: { id } })
} 

// 二级分类
export function getCategpryFilter(id: string) {
    return http.get<any,SecondCategoryResponse>('/category/sub/filter', {
        params: { id }
    })
}

// 二级分类数据
export function getSubCategory(data: ReqSubData) {
    return http.post<any,SubDataResponse>('/category/goods/temporary',data)
}