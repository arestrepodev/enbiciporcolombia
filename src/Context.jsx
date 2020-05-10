import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(() => {
    return window.sessionStorage.getItem('language');
  });
  const value = {
    isEnglish,
    activeEnglish: (language) => {
      setIsEnglish(true);
      window.sessionStorage.setItem('token', language);
    },
    disableEnglish: () => {
      setIsEnglish(false);
      window.sessionStorage.removeItem('language');
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
