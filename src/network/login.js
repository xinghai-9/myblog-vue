import { request } from "./request";

export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data: {
      username: data.username,
      password: data.password
    }
  });
}

export function register(data) {
  return request({
    url: "/register",
    method: "post",
    data: {
      username: data.username,
      password: data.password,
      avatar: data.avatar
    }
  });
}

export class User {
  constructor(userInfo) {
    this.id = userInfo.id;
    this.username = userInfo.username;
    this.password = userInfo.password;
    this.avatar = userInfo.avatar;
  }
}