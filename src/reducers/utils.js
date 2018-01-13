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

const compareObj = (first, second) => {
  if (Object.keys(first).length !== Object.keys(second).length) {
    return false;
  }

  let result = true;
  Object.keys(first).forEach((key) => {
    if (first[key] !== second[key]) {
      result = false;
    }
  });
  return result;
};

const findObj = (array, object) => array.find(arrEl => compareObj(object, arrEl));

export const addObjToArray = (array, element) => {
  if (findObj(array, element)) {
    return array;
  }

  return [...array, element];
};

export const removeObjFromArray = (array, element) =>
  array.filter(arrEl => !compareObj(element, arrEl));
