// 更好用的状态管理方案
// https://pinia.vuejs.org/
import { createPinia } from "pinia";
const store = createPinia();

export function setupStore(app) {
  app.use(store);
}

export { store };
