import { authKey } from "@/contents/authKey";
import { decodedToken } from "@/hooks/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/hooks/local-storage";

export const storeUserInfo = (accessToken) => {
  if (!accessToken) {
    return; // or handle the absence of accessToken accordingly
  }
  return setToLocalStorage(authKey, accessToken);
};

export const getUserinfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return {
      ...decodedData,
      //   role: decodedData?.role.toLowerCase(),
    };
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};
