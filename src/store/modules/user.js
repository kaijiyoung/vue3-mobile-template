import { store } from '../pinia'
import { defineStore } from 'pinia'

// 用户模块
export const userStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'my name is user'
  }),
  getters: {
    items: (state) => state.name
  },
  actions: {
    UPDATE_NAME(name) {
      this.name = name
    }
  },
})

// 导出当前模块
export function userStoreHook() {
  return userStore(store);
}