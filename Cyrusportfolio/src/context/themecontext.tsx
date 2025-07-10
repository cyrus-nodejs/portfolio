// src/ThemeContext.js
import { createContext, useContext, useState } from 'react';
import { themeType } from '../utils/@types';

const ThemeContext = createContext<themeType>(null!);

export const ThemeProvider = ({ children}:{ children: React.ReactNode }) => {
//   const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'Light');
  const [darkMode, setDarkMode] = useState(false);
//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', theme);
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
