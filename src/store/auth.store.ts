import { createStore } from 'zustand-x';

type AuthStoreState = {
  isAuth: boolean;
};

export const authStore = createStore('auth')<AuthStoreState>(
  {
    isAuth: false,
  },
  {
    persist: {
      enabled: true,
    },
  }
);
