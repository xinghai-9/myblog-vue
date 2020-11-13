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

export function setTagData(tag_name) {
  return request({
    url: "/tags/post",
    method: "post",
    data: {
      tag_name: tag_name,
    }
  });
}

export function updateTag(form) {
  return request({
    url: "/tags/update",
    method: "post",
    data: {
      id: form.id,
      name: form.name
    }
  });
}

export function deleteTag(row) {
  return request({
    url: "/tags/delete",
    method: "post",
    data: {
      id: row.id,
      name: row.name
    }
  });
}