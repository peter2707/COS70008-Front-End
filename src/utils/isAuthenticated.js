export const isAuthenticated = () => {
  // Check if the token is present in local storage
  return !!localStorage.getItem("token");
};
