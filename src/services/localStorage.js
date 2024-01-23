// @nirakar, @abishek update this snippet to use localStorage

export const deleteAccessToken = () => localStorage.removeItem("access-token");
export const deleteAccessTokenExpiration = () =>
  localStorage.removeItem("access-token-expiration");

export const getAccessToken = () => localStorage.getItem("access-token");
export const getAccessTokenExpiration = () =>
  localStorage.getItem("access-token-expiration");

export const setAccessToken = (token) =>
  localStorage.setItem("access-token", token);
export const setAccessTokenExpiration = (expiration) =>
  localStorage.setItem("access-token-expiration", expiration);
