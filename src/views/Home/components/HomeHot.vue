<template>
    <div>
        <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
            <ul class="goods-list">
                <li v-for="item in hotGoodList" :key="item.id">
                    <RouterLink :to="`/detail/${item.id}`">
                        <img v-img-lazy="item.picture" alt="">
                        <p class="name">{{ item.title }}</p>
                        <p class="desc">{{ item.alt }}</p>
                    </RouterLink>
                </li>
            </ul>
        </HomePanel>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HomePanel from './HomePanel.vue';
import type { HotGood } from '@/apis/type';
import { getHot } from '@/apis/home';

const hotGoodList = ref<HotGood[]>([])
const getHotGood = async () => {
    let res = await getHot()
    hotGoodList.value = res.result
}
onMounted(() => {
    getHotGood()
})
</script>

<style scoped lang="scss">
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 426px;

    li {
        width: 306px;
        height: 406px;
        transition: all .5s;

        &:hover {
            transform: translate3d(0,-3px,0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }

        img {
            width: 306px;
            height: 306px;
        }

        p {
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
        }
        .desc {
            color: #999;
            font-size: 18px;
        }
    }
}
</style>