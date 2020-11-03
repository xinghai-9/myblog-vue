import { request } from "./request";

export function getUserById(userId) {
  return request({
    url: "/users/" + userId
  });
}