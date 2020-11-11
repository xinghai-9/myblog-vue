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

export function setBlogData(newBlog) {
  return request({
    url: "/blogs/post",
    method: "post",
    data: {
      content: newBlog.content,
      description: newBlog.description,
      firstPicture: newBlog.first_picture,
      published: newBlog.published,
      tagsId: newBlog.tags_id,
      title: newBlog.title,
      typeId: newBlog.type_id
    }
  });
}

export function deleteBlogById(id) {
  return request({
    url: "/blogs/delete/" + id,
    method: "delete",
  });
}