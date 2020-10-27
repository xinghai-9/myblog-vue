import { request } from "./request";

export function getAllTag() {
  return request({
    url: "/tags/"
  });
}

export function getBlogsByTagId(tag_id){
  return request({
    url: "tags/" + tag_id
  });
}