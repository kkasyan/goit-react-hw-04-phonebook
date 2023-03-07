import { useState, useEffect } from 'react';

const useLocalStorage = ({ key, initialValue }) => {
  const [state, setState] = useState(() => {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value || initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
