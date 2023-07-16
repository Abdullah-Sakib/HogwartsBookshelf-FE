export const saveToLocalStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key)!);
};

export const removeFromLocalStorage = (key: string) => {
  return localStorage.removeItem(key);
};
