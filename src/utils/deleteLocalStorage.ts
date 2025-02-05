"use client";

export const deleteLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
