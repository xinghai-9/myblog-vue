import { request } from "./request";

export function getAllType() {
  return request({
    url: "/types/"
  });
}

export function getBlogsByTypeName(type_name){
  return request({
    url: "/types/" + type_name
  });
}