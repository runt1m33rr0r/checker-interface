export const getItem = (itemName) => {
  try {
    return JSON.parse(localStorage.getItem(itemName));
  } catch (error) {
    return null;
  }
};

export const setItem = (itemName, data) => localStorage.setItem(itemName, JSON.stringify(data));

export const removeItem = itemName => localStorage.removeItem(itemName);
