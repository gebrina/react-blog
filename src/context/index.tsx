import { createContext, useState, useEffect, useContext } from 'react';
import { TUser } from '../types/user';

const BlogContext = createContext<any>(null);

export const BlogContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<any>(false);
  const [loggedinUser, setLoggedInUser] = useState<Partial<TUser>>({});

  const handleLogOut = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setLoggedInUser({});
  };

  const handleLogin = (user: any) => {
    localStorage.setItem('user', JSON.stringify(user));
    setLoggedInUser(user);
    setIsLoggedIn(user.access_token);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user?.access_token) {
      setIsLoggedIn(user.access_token);
      setLoggedInUser(user);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <BlogContext.Provider
      value={{ isLoggedIn, handleLogin, handleLogOut, loggedinUser }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContext);
