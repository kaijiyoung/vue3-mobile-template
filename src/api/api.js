import http from "@/axios";

// 请求示例
export function getDemo() {
  return http({ url: "/" });
}
