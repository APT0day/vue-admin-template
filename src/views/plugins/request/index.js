import axios from 'axios'
import Settings from '@/settings'

function errorCreate(msg) {
    const err = new Error(msg)
    errorLog(err)
    throw err
}

function errorLog(err) {

}

// 创建一个 axios 实例
const service = axios.create({
    // 在请求地址前面加上 baseURL
    baseURL: Settings.apiBaseURL,
    // 请求超时时间
    timeout: 60000,
    // 当发送跨域请求时允许携带 cookie
    withCredentials: true,
    // 对付ie缓存问题
    headers: { Pragma: 'no-cache' }
})

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // config.headers["X-Token"] = "my token"
        return config
    },
    (error) => {
        // 请求错误的统一处理
        console.log(error)
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        // res 是 axios 返回数据中的 data
        const res = response.data
        // 这个状态码是和后端约定的
        const { status,info,data } = res;
        if (status === undefined) {
            // 如果没有 status 代表这不是项目后端开发的接口
            errorCreate(`接口返回数据无法解析:${res}`);
        } else {
            // 有 status 代表这是一个后端接口 可以进行进一步的判断
            switch (status) {
                case -2:
                    Message.warning({
                        content: info,
                        duration: Settings.modalDuration
                    });
                    return Promise.reject(data);
                case -1:
                    Notice.warning({
                        title: '提示',
                        desc: info,
                        duration: Settings.modalDuration
                    });
                    return Promise.reject(data);
                case 0:
                    Modal.warning({
                        title:'提示',
                        content: info
                    });
                    return Promise.reject(data);
                case 1:
                    // [ 示例 ] status === 1 代表没有错误
                    return data;
                default:
                    // 不是正确的 code
                    errorCreate(`${res.info}: ${response.config.url}`);
                    break;
                }
            }
        console.log(res)
    },
    (error) => {
        // 请求错误的统一处理
        console.log(error)
        return Promise.reject(error)
    }
)

export default service