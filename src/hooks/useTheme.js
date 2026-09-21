import { useState, useEffect } from 'react';

/**
 * Clean Light Theme Mode permanently enabled for Munna Dyeing Printing
 */
export const useTheme = () => {
  const [darkMode] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('mdp_theme', 'light');
    } catch (e) {}

    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {};

  return { darkMode: false, toggleTheme, setDarkMode: () => {} };
};

export default useTheme;
