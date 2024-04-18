<template>
    <div class="goods-hot">
        <h3>{{ title }}</h3>
        <!-- 商品区块 -->
        <RouterLink to="/" class="goods-item" v-for="item in goodList" :key="item.id">
            <img :src="item.picture" alt="" />
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="desc ellipsis">{{ item.desc }}</p>
            <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import { getHotGoods } from '@/apis/detail'
import type { Good } from '@/apis/type';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
const { hotType } = defineProps<{
    hotType: number
}>()
enum TYPEMAP {
    '二十四小时热榜',
    '周热榜'
}
const title = computed(() => {
    return TYPEMAP[hotType-1]
})

const goodList = ref<Good[]>([])
const route = useRoute()
const getHotList = async () => {
    const res = await getHotGoods({
        id: route.params.id as string,
        type: hotType
    })
    goodList.value = res.result
}
onMounted(() => getHotList())
</script>

<style scoped lang="scss">
.goods-hot {
    h3 {
        height: 70px;
        background: $helpColor;
        color: #fff;
        font-size: 18px;
        line-height: 70px;
        padding-left: 25px;
        margin-bottom: 10px;
        font-weight: normal;
    }

    .goods-item {
        display: block;
        padding: 20px 30px;
        text-align: center;
        background: #fff;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }
}
</style>