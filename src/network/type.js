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

export function setTypeData(type_name) {
  return request({
    url: "/types/post",
    method: "post",
    data: {
      type_name: type_name,
    }
  });
}

export function updateType(form) {
  return request({
    url: "/types/update",
    method: "post",
    data: {
      id: form.id,
      name: form.name
    }
  });
}

export function deleteType(row) {
  return request({
    url: "/types/delete",
    method: "post",
    data: {
      id: row.id,
      name: row.name
    }
  });
}