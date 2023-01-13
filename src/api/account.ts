import request from "@/utils/request";

interface loginData {
  username: string;
  password: string;
}

interface loginRes {
  token: string;
}

// 登陆返回 token
export const login = (data: loginData): Promise<loginRes> => {
  return request({
    url: "api/login",
    method: "post",
    data: data,
  });
};
