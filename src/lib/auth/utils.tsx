import { getStorageItem, removeStorageItem, setStorageItem } from '../storage';

const TOKEN = 'token';

export type TokenType = {
  access: string;
  refresh: string;
};

export const getToken = () => getStorageItem<TokenType>(TOKEN);
export const removeToken = () => removeStorageItem(TOKEN);
export const setToken = (value: TokenType) =>
  setStorageItem<TokenType>(TOKEN, value);
