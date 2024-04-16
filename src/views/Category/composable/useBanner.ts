import { onMounted, ref } from 'vue';
import type { Banner } from '@/apis/type';
import { getBanner } from '@/apis/home';
export function useBanner() {
    const bannerList = ref<Banner[]>([])
    const getBannerList = async () => {
        let res = await getBanner("2")
        bannerList.value = res.result
    }
    onMounted(() => {
        getBannerList()
    })
    return {
        bannerList
    }
}