import {
  setAccessToken,
  setAccessTokenExpiration,
  getAccessToken,
  getAccessTokenExpiration,
  deleteAccessToken,
  deleteAccessTokenExpiration,
} from '@src/services/localStorage';

export const logOut = () => async () => {
  await deleteAccessToken();
  await deleteAccessTokenExpiration();
};

export const initializeAuth = () => async (dispatch) => {
  let shouldLogOut = true;
  const accessToken = await getAccessToken();
  const accessTokenExpiration = await getAccessTokenExpiration();

  const currentTimestamp = new Date().getTime();

  if (accessToken && accessTokenExpiration) {
    const expirationTimestamp = Number(accessTokenExpiration);

    if (currentTimestamp < expirationTimestamp) {
      shouldLogOut = false;
    }
  }
  if (shouldLogOut) {
    // call logout
  }
};

export const authenticate = (result) => async () => {

  const { access_token: accessToken, expires_in: expiresIn } = result.params;
  const currentTimestamp = new Date().getTime();
  const expirationTimestamp = (currentTimestamp + Number(expiresIn) * 1000).toString();

  await setAccessToken(accessToken);
  await setAccessTokenExpiration(expirationTimestamp);
};

export default {logOut, initializeAuth, authenticate};
