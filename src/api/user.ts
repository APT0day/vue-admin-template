import request from "@/utils/request";

// 获取用户名
export const getUserInfo = () => {
  return request({
    url: "api/getUserInfo",
    method: "post",
  });
};
