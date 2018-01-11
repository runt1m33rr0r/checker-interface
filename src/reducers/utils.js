export const addToArray = (array, element) => {
  if (array.includes(element)) {
    return array;
  }

  return [...array, element];
};

export const removeFromArray = (array, element) => array.filter(el => el !== element);

export const addToArrayInObj = (object, arrayName, element) => ({
  ...object,
  [arrayName]: addToArray(object[arrayName], element),
});

export const removeFromArrayInObj = (object, arrayName, element) => ({
  ...object,
  [arrayName]: removeFromArray(object[arrayName], element),
});
