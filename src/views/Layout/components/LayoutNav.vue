<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <template v-if="userStore.userInfo?.token">
                    <li><a><i class="iconfont icon-user"></i>{{ userStore.userInfo.account }}</a></li>
                    <li>
                        <el-popconfirm title="确认退出吗？" @confirm="confirm" confirm-button-text="确认" cancel-button-text="取消">
                            <template #reference>
                                <a>退出登录</a>
                            </template>
                        </el-popconfirm>
                    </li>
                    <li><a>我的订单</a></li>
                    <li><a>会员中心</a></li>
                </template>
                <template v-else>
                    <li><a @click="$router.push('/login')">请先登录</a></li>
                    <li><a>帮助中心</a></li>
                    <li><a>关于我们</a></li>
                </template>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
import router from '@/router';
import { useCartStore } from '@/stores/cartStore';
import { useUserStore } from '@/stores/userStore';
const userStore = useUserStore()
const cartStore = useCartStore()
const confirm = () => {
    userStore.clearUserInfo()
    cartStore.clearCartList()
    router.replace('/login')
}
</script>

<style scoped lang="scss">
.app-topnav {
    background: #333;
    ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 53px;
        li {
            a {
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                i {
                    font-size: 14px;
                    margin-right: 2px;
                }
                &:hover {
                    color: $xtxColor;
                    cursor: pointer;
                }
            }
            ~li {
                a {
                    border-left: 2px solid #666;
                }
            }
        }
    }
}
</style>