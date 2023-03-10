import request from "@/utils/request";

interface loginData {
  username: string;
  password: string;
}

interface loginRes {
  token: string;
}

// η»ιθΏε token
export const login = (data: loginData): Promise<loginRes> => {
  return request({
    url: "api/login",
    method: "post",
    data: data,
  });
};
