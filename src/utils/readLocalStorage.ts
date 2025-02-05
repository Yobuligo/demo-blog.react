export const readLocalStorage = <T>(key: string): T | undefined => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }

  return undefined;
};
