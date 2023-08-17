export const getLgoggedInUserInfo = () => {
  const user = JSON.parse(localStorage.getItem('user') ?? '');
  return {
    access_token: user?.access_token,
    user,
  };
};
