import { request } from "./request";

export function getAllVideos() {
  return request({
    url: "/videos/"
  });
}

// export function getUrlByVideoId(id) {
//   return request({
//     url: "/videos/" + id
//   });
// }