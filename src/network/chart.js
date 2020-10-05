import { request } from "./request";

export function getChartData() {
  return request({
    url: "/chart"
  });
}
