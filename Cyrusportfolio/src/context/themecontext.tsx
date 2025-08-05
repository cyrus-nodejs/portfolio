// src/ThemeContext.js
import { createContext,useEffect, useContext, useState } from 'react';
import { themeType } from '../utils/@types';

const ThemeContext = createContext<themeType>(null!);


export const ThemeProvider = ({ children}:{ children: React.ReactNode }) => {
 const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light';
};

 
 const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);


  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(`${theme}-mode`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
