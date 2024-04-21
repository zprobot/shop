import http from "@/utils/http"
import type { LikeGoodResponse, LoginResponse } from "./type"

export type User = {
    account: string
    password: string
}
export function reqLogin(user:User) {
    return http.post<any,LoginResponse>('/login',user)
}
export const reqLikeList = (limit = 4) => {
    return http.get<any,LikeGoodResponse>('/goods/relevant',{params:{limit}});
}