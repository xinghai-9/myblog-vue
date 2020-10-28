import { request } from "./request";

export function getCommentData(blogId) {
  return request({
    url: "/comments",
    params: {
      id: blogId
    }
  });
}

// export function setCommentData(blogComment) {
//   return request({
//     url: "/comment1",
//     method: "post",
//     data: {
//       comment: blogComment
//     }
//   });
// }

// export function updateCommentData(blogComment) {
//   return request({
//     url: "/comment2",
//     method: "put",
//     data: {
//       comment: blogComment
//     }
//   });
// }
