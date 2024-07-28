import { SetterWithOneParam } from '@types';
import { ActionBuilder, createStore } from 'zustand-x';

type AppStoreState = {
  isDark: boolean;
};

type AppStoreActions = {
  setIsDark: SetterWithOneParam<AppStoreState['isDark']>;
};

type AppStoreSelectors = {
  _theme: 'dark' | 'light';
};

export const appStore = createStore('app')<AppStoreState>({
  isDark: true,
})
  .extendActions((set, get, api) => ({
    toggleIsDark: () => {
      set.isDark(!get.isDark());
    },
  }))
  .extendSelectors((state, get, api) => ({
    _theme: () => (get.isDark() ? 'dark' : 'light'),
  }));
