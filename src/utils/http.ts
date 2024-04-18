import { useUserStore } from "@/stores/userStore";
import axios from "axios";
import { ElMessage } from 'element-plus';
import 'element-plus/theme-chalk/el-message.css'
import { useRouter } from "vue-router";

const http = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    //timeout: 5000
})

http.interceptors.request.use(config => {
    const userStore = useUserStore()
    const token = userStore.userInfo?.token
    if (token) {
        // 请求携带token
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

http.interceptors.response.use(res => res.data, e => {
    // 拦截错误并且统一处理
    ElMessage.error(e.response.data.message)
    // 处理token失效
    const userStore = useUserStore()
    const router = useRouter()
    if (e.response.status === 401) {
        userStore.clearUserInfo()
        router.replace('/login')
    }
    return Promise.reject(e)
})
export default http