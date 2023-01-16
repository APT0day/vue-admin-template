import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        username: '',
        avatar: '',
        token: '',
    }),
    getters: {},
    actions: {}
})