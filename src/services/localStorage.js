// @nirakar, @abishek update this snippet to use localStorage

export const deleteAccessToken = () =>
  localStorage.deleteItemAsync("access-token");
export const deleteAccessTokenExpiration = () =>
  localStorage.deleteItemAsync("access-token-expiration");

export const getAccessToken = (key) => localStorage.getItem(key);
export const getAccessTokenExpiration = () =>
  localStorage.getItemAsync("access-token-expiration");

export const setAccessToken = (key, value) => localStorage.setItem(key, value);
export const setAccessTokenExpiration = (expiration) =>
  localStorage.setItemAsync("access-token-expiration", expiration);
