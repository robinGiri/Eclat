// @nirakar, @abishek update this snippet to use localStorage

export const deleteAccessToken = () => localStorage.deleteItemAsync('access-token');
export const deleteAccessTokenExpiration = () => localStorage.deleteItemAsync('access-token-expiration');

export const getAccessToken = () => localStorage.getItemAsync('access-token');
export const getAccessTokenExpiration = () => localStorage.getItemAsync('access-token-expiration');

export const setAccessToken = (token) => localStorage.setItemAsync('access-token', token);
export const setAccessTokenExpiration = (expiration) => localStorage.setItemAsync('access-token-expiration', expiration);