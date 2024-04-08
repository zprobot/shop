import http from "@/utils/http";
export function getCategoryAPI() {
    return http.get<any,any>('/home/category/head')
}