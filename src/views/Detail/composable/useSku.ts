import type { Sku,Good } from '@/apis/type';
import { useCartStore } from '@/stores/cartStore';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
export function useSku() {
    const cartStore = useCartStore()
    let skuObj: Sku = {
        price: '',
        oldPrice: '',
        inventory: 0
    }
    let count = ref(1)
    const skuChange = (sku: Sku) => {
        skuObj = sku
    }
    const addCart = (goods:Good) => {
        if (skuObj.skuId) {
            cartStore.addGood({
                id: goods.id,
                name: goods.name,
                picture: goods.mainPictures?.[0] as string,
                price: goods.price,
                count: count.value,
                skuId: skuObj.skuId,
                attrsText: skuObj.specsText as string,
                selected: true
            })
        } else {
            ElMessage.warning("请选择规格")
        }
    }
    return {
        count,
        skuChange,
        addCart
    }
}