import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return initialValue;
      const { value, expiry } = JSON.parse(item);
      if (new Date().getTime() > expiry) {
        localStorage.removeItem(key);
        return initialValue;
      }
      return value;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    const expiry = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
    localStorage.setItem(key, JSON.stringify({ value: storedValue, expiry }));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
