import { Themes } from '@types';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const isDarkModeAtom = atomWithStorage('isDark', false);
export const themeAtom = atom<Themes>(get =>
  get(isDarkModeAtom) ? Themes.dark : Themes.light
);
