import http from "@/utils/http";
import type { GoodCategoryResponse } from "./type";
export function getCategoryAPI(){
    return http.get<any,GoodCategoryResponse>('/home/category/head')
}