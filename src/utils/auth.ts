import Cookies from 'js-cookie'

// 写入 cookie
export const setToken = (value: string) => {
    Cookies.set('token', value)
}

// 获取 token
export const getToken = () => {
    return Cookies.get('token')
}

// 获取所有 token
export const getAllToken = () => {
    Cookies.get()
}

// 删除 token
export const removeToken = () => {
    Cookies.remove('token')
}
