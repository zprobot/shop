import type { Account } from "@/apis/type";
import { reqLogin, type User } from "@/apis/user";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('userStore', () => {
    const userInfo = ref<Account>()
    const login = async (user:User) => {
        const res = await reqLogin(user) 
        userInfo.value = res.result
    }
    const clearUserInfo = () => {
        userInfo.value = undefined
    }
    return {
        userInfo,
        login,
        clearUserInfo
    }
}, {
    // 数据持久化
    persist: true
})