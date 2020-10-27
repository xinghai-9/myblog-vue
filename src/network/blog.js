import { request } from "./request";

export function getAllBlog() {
  return request({
    url: "/blogs/"
  });
}

export function getBlogById(id) {
  return request({
    url: "/blogs/" + id
  });
}