<template>
    <header class="app-header">
        <div class="container">
            <h1 class="logo">
                <a href="">旺旺商城</a>
            </h1>
            <ul class="app-header-nav">
                <li class="home"><a>首页</a></li>
                <li v-for="item in categoryList.categoryList" :key="item.id">
                    <RouterLink active-class="active" :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
                </li>
            </ul>
            <div class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜一搜">
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore';

const categoryList = useCategoryStore()
</script>

<style scoped lang="scss">
.app-header {
    background-color: #fff;

    .container {
        display: flex;
        align-items: center;
    }

    .logo {
        width: 200px;

        a {
            display: block;
            height: 132px;
            width: 100%;
            text-indent: -9999px;
            background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
        }
    }

    .app-header-nav {
        display: flex;
        width: 820px;
        padding-left: 40px;

        /*z-index: 999;*/
        li {
            margin-right: 40px;
            width: 38px;
            text-align: center;

            a {
                font-size: 16px;
                line-height: 32px;
                height: 32px;

                &:hover {
                    color: $xtxColor;
                    border-bottom: 1px solid $xtxColor;
                    cursor: pointer;
                }
            }

            .active {
                color: $xtxColor;
                border-bottom: 1px solid $xtxColor;
            }
        }
    }

    .search {
        width: 172px;
        height: 32px;
        border-bottom: 1px solid #e7e7e7;
        line-height: 32px;

        .icon-search {
            font-size: 18px;
            margin-left: 5px;
        }

        input {
            width: 140px;
            padding-left: 5px;
            color: #666;
        }
    }

    .cart {
        width: 50px;

        .curr {
            height: 32px;
            line-height: 32px;
            text-align: center;
            position: relative;
            display: block;

            .icon-cart {
                font-size: 22px;
            }

            em {
                font-style: normal;
                position: absolute;
                right: 0;
                top: 0;
                padding: 1px 6px;
                line-height: 1;
                background: $helpColor;
                color: #fff;
                font-size: 12px;
                border-radius: 10px;
                font-family: Arial;
            }
        }
    }
}
</style>