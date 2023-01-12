import { Random } from "mockjs";
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/getUserInfo",
    method: "post",
    response: () => {
      return {
        status: 1,
        info: "登录成功",
        data: {
          avatar: "../../src/assets/avatar.webp",
          name: "亚索",
        },
      };
    },
  },
] as MockMethod[];
