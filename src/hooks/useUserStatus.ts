import { useEffect, useState } from 'react';

export const useLocalStorage = () => {
  const [isLoggedIn, setIsLoggedn] = useState<string | boolean>('');

  useEffect(() => {
    const token = JSON.stringify(localStorage.getItem('token'));
    if (token) setIsLoggedn(token);
    setIsLoggedn(false);
  }, []);

  return [isLoggedIn, setIsLoggedn];
};
