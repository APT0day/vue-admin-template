import { Random } from "mockjs";
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/login",
    method: "post",
    response: (params: any) => {
      if (params.body.username == "admin" && params.body.password == "admin") {
        return {
          status: 1,
          info: "登录成功",
          data: {
            token: Random.string(20),
          },
        };
      } else {
        return {
          status: 1,
          info: "登录失败",
          data: {
            params: params,
            info: "登录失败",
          },
        };
      }
    },
  },
] as MockMethod[];
