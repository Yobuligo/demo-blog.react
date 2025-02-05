"use client";

export const writeLocalStorage = <T>(key: string, data: T) => {
  const value = JSON.stringify(data);
  localStorage.setItem(key, value);
};
