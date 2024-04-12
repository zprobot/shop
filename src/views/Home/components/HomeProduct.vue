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

        .goods-item {
            display: block;
            width: 220px;
            padding: 20px 30px;
            text-align: center;
            transition: all .5s;

            &:hover {
                transform: translate3d(0, -3px, 0);
                box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
            }

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
}
</style>