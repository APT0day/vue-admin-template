import Cookies from 'js-cookie'

// 写入 cookie
export const setToken = (name: string, value: string) => {
    Cookies.set(name, value)
}

// 获取 token
export const getToken = (name: string) => {
    Cookies.get(name)
}

// 获取所有 token
export const getAllToken = () => {
    Cookies.get()
}

// 删除 token
export const removeToken = (name: string) => {
    Cookies.remove(name)
}
