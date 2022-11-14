import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import useMedia from './useMedia';

function useDarkMode() {
  
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');

  const prefersDarkMode = usePrefersDarkMode();
  
  const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

  useEffect(
    () => {
      const bgClassName = 'bg-black';
      const textWhite = 'text-white';
      const textBlack = 'text-black'
      const element = window.document.body;
      if (enabled) {
        element.classList.add(bgClassName,);
      } else {
        element.classList.remove(bgClassName);
        element.classList.remove(textWhite);
        element.classList.add(textBlack);
      }
    },
    [enabled]
  );

  return [enabled, setEnabledState];
}

function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}

export default useDarkMode;
