import { request } from "./request";

export function getTestData() {
  return request({
    url: "/chart"
  });
}

// export function getHomeGoods(type, page) {
//   return request({
//     url: '/home/data',
//     params: {
//       type,
//       page
//     }
//   })
// }
