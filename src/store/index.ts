import { mapValuesKey } from 'zustand-x';
import { appStore } from './app.store';
import { authStore } from './auth.store';

// global store
export const rootStore = {
  app: appStore,
  auth: authStore,
};

// Global hook selectors
export const useStore = () => mapValuesKey('use', rootStore);

// Global tracked hook selectors
export const useTrackedStore = () => mapValuesKey('useTracked', rootStore);

// Global getter selectors
export const storeGetter = mapValuesKey('get', rootStore);

// Global actions
export const storeActions = mapValuesKey('set', rootStore);
