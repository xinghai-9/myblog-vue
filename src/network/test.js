import {request} from "./request";

export function getTestData() {
  return request({
    url: '/homedata'
  })
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
