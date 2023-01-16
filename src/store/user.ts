import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    userinfo: {
      username: "",
      avatar: "",
    },
    token: null,
  }),
  getters: {},
  actions: {
    setToken(token: any) {
      this.token = token;
    },
  },
});
