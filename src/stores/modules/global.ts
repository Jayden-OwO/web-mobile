import { defineStore } from 'pinia'
import type { GlobalState } from '@/stores/interface'
import piniaPersistConfig from '@/config/piniaPersist'

export const useGlobalStore = defineStore({
  id: 'global',
  // 修改默认值之后，需清除 localStorage 数据
  state: (): GlobalState => ({
    // element 组件大小
    assemblySize: 'default',
    // 当前系统语言
    language: null,
    // 主题颜色
    primary: '',
    // 页脚
    footer: true,
    history: {}
  }),
  getters: {},
  actions: {
    // Set GlobalState
    setGlobalState(...args: ObjToKeyValArray<GlobalState>) {
      this.$patch({ [args[0]]: args[1] })
    }
  },
  persist: piniaPersistConfig('global')
})
