import {defineStore} from 'pinia';
import {ref} from 'vue';

// 分开定义
const state = () => ({
  count: 0,
});

const getters = {
  doubleCount: (state) => state.count * 2,
};

const actions = {
  increment(num) {
    this.count = this.count + num;
  },
  resetCount() {
    this.count = 0;
  },
};

export const useUserStore = defineStore('counter', {
  state,
  getters,
  actions
})
