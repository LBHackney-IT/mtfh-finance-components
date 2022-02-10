import { useCallback } from 'react';

export { default as useTabs } from './useTabs';
export { default as useSorts } from './useSorts';
type UseOnPressEnterCallback = () => void;

export const useOnPressEnter = (callback: UseOnPressEnterCallback) =>
  useCallback(
    ({ key }) => {
      if (key === 'Enter') callback();
    },
    [callback]
  );
export { default as useDateInput } from './useDateInput';
