<template>
    <div class="home-product">
        <HomePanel v-for="cate in categoryStore.categoryList" :title="cate.name" :key="cate.id">
            <div class="box">
                <ul class="goods-list">
                    <li v-for="good in cate.goods" :key="good.id">
                        <GoodItem :good="good"></GoodItem>
                    </li>
                </ul>
            </div>

        </HomePanel>
    </div>
</template>

<script setup lang="ts">
import HomePanel from './HomePanel.vue';
import GoodItem from '@/components/GoodItem.vue'
import { useCategoryStore } from '@/stores/categoryStore';


const categoryStore = useCategoryStore()
</script>

<style scoped lang='scss'>
.home-product {
    background: #fff;
    margin-top: 20px;
    .box {
        display: flex;
        .goods-list {
            display: flex;
            flex-wrap: wrap;

            li {
                width: 240px;
                height: 300px;
                margin-right: 10px;
                margin-bottom: 10px;

                &:nth-last-child(-n + 4) {
                    margin-bottom: 0;
                }

                &:nth-child(4n) {
                    margin-right: 0;
                }
            }
        }
    }
}
</style>