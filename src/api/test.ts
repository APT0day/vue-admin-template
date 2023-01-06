import request from '@/plugins/request'

export const fetchUserInfo = (id: number) => {
    return request({
        url: 'api/sql/sql1',
        method: 'get',
        params: { id }
    })
}