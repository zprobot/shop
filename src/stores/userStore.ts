import type { Account } from "@/apis/type";
import { reqLogin, type User } from "@/apis/user";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useCartStore } from "./cartStore";
import { mergeCart } from "@/apis/cart";

export const useUserStore = defineStore('userStore', () => {
    const userInfo = ref<Account>()
    const cartStore = useCartStore()
    const login = async (user:User) => {
        const res = await reqLogin(user) 
        userInfo.value = res.result
        // 合并购物车
        await mergeCart(cartStore.cartList.map((item) => {
            return {
                skuId: item.skuId,
                count: item.count,
                selected: item.selected
            }
        }))
        // 更新购物车
        await cartStore.updateUserCartList()
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