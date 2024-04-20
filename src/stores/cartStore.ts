import type { CartItem } from "@/apis/type"
import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { useUserStore } from "./userStore"
import { delCart, findNewCartList, insertCart, updateCartItem } from "@/apis/cart"


export const useCartStore = defineStore('cartStore', () => {

    const cartList = ref<CartItem[]>([])
    const allCount = computed(() => {
        let counts = cartList.value.reduce((a, b) => a + b.count, 0)
        return counts
    })
    const totalPrice = computed(() => {
        let total = cartList.value.reduce((a, b) => a + b.count * parseFloat(b.price), 0)
        return total
    })
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    const selectCount = computed(() => {
        return cartList.value.reduce((a, b)=>b.selected?a+b.count:a,0)
    })
    const selectPrice = computed(() => {
        return cartList.value.reduce((a, b)=>b.selected?a + b.count * parseFloat(b.price):a,0)
    })
    // 
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo?.token?true:false)
    const updateUserCartList = async () => {
        const res = await findNewCartList()
        cartList.value = res.result
    }
    const addGood = async (good: CartItem) => {
        if (isLogin.value) {
            await insertCart(good)
            await updateUserCartList()
        } else {
            let goodItem = cartList.value.find((item) => good.skuId === item.skuId)
            if (goodItem) {
                goodItem.count += good.count
            } else {
                cartList.value.push(good)
            }
        }
    }
    const delGood = async (skuId: string) => {
        if (isLogin.value) {
            await delCart([skuId])
            await updateUserCartList()
        } else {
            let index = cartList.value.findIndex((item) => item.skuId === skuId)     
            cartList.value.splice(index,1)
        }
    }
    const updateGood = async (good: CartItem) => {
        if (isLogin) {
            let {skuId,count,selected} = good
            await updateCartItem(skuId, { count, selected })
        }
    }
    const selectAll = (selected: boolean) => {
        cartList.value.forEach((item) => item.selected = selected)
    }
    const clearCartList = () => {
        cartList.value = []
    }
    return {
        cartList,
        allCount,
        totalPrice,
        isAll,
        selectCount,
        selectPrice,
        addGood,
        delGood,
        updateGood,
        selectAll,
        updateUserCartList,
        clearCartList
    }
}, { persist: true })