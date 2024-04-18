import http from "@/utils/http"
import type { LoginResponse } from "./type"

export type User = {
    account: string
    password: string
}
export function reqLogin(user:User) {
    return http.post<any,LoginResponse>('/login',user)
}