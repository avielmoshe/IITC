// 1

const arr = [1, 2, 3];
let newArr = [...arr];
console.log(newArr);

// 2
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
newArr = [...array1, ...array2];
console.log(newArr);

// 3
newArr = [...array1, 4];
console.log(newArr);

// 4
newArr = [3, ...array2];
console.log(newArr);

// 5
newArr = [...array1, ...array2, ...array3];
console.log(newArr);

//6
newArr = [...array1, 4];
console.log(newArr);

// 7
const rotateArray = (array) => [...array.slice(1), array[0]];
console.log(rotateArray([1, 2, 3, 4]));

// 8
const combineWithPrefix = (array, string) => [string, ...array];
console.log(combineWithPrefix([2, 3, 4], "Hello"));

// 9
const mergeArrays = (...arrays) => [].concat(...arrays);
console.log(mergeArrays([1, 2], [3, 4], [5]));

// 10
const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);
console.log(shuffleArray([1, 2, 3, 4]));

// 11
const copyObject = (obj) => ({ ...obj });
console.log(copyObject({ a: 1, b: 2 }));

// 12
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects({ a: 1 }, { b: 2 }));

// 13
const updateProperty = (obj, key, value) => ({ ...obj, [key]: value });
console.log(updateProperty({ a: 1, b: 2 }, "a", 10));

// 14
const addProperty = (obj, key, value) => ({ ...obj, [key]: value });
console.log(addProperty({ a: 1 }, "b", 2));

// 15
const mergeThreeObjects = (obj1, obj2, obj3) => ({ ...obj1, ...obj2, ...obj3 });
console.log(mergeThreeObjects({ a: 1 }, { b: 2 }, { c: 3 }));

// 16
const shallowCopy = (obj) => ({ ...obj });
console.log(shallowCopy({ a: 1, b: 2 }));

// 17
const removeProperty = (obj, keyToRemove) => {
  const { [keyToRemove]: _, ...rest } = obj;
  return rest;
};
console.log(removeProperty({ a: 1, b: 2 }, "a"));

// 18
const swapProperties = (obj, key1, key2) => ({
  ...obj,
  [key1]: obj[key2],
  [key2]: obj[key1],
});
console.log(swapProperties({ a: 1, b: 2 }, "a", "b"));

// 19
const extractProperty = (obj, keyToExtract) => {
  const { [keyToExtract]: _, ...rest } = obj;
  return rest;
};
console.log(extractProperty({ a: 1, b: 2 }, "a"));

// 20
const updateNestedProperty = (obj, nestedKey, key, value) => ({
  ...obj,
  [nestedKey]: { ...obj[nestedKey], [key]: value },
});
console.log(updateNestedProperty({ a: { b: 1 } }, "a", "b", 2));

// 21
const mergeMultipleObjects = (...objects) => Object.assign({}, ...objects);
console.log(mergeMultipleObjects({ a: 1 }, { b: 2 }, { c: 3 }));

// 22
const combineWithPrecedence = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(combineWithPrecedence({ a: 1 }, { a: 10, b: 2 }));

// 23
const addNestedObject = (obj, nestedKey, nestedObj) => ({
  ...obj,
  [nestedKey]: nestedObj,
});
console.log(addNestedObject({ a: 1 }, "nested", { b: 2 }));

// 24
const extractAllButOne = (obj, keyToExclude) => {
  const { [keyToExclude]: _, ...rest } = obj;
  return rest;
};
console.log(extractAllButOne({ a: 1, b: 2 }, "a"));

// 25
const removeNullUndefined = (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([_, value]) => value != null));
console.log(removeNullUndefined({ a: 1, b: null, c: undefined }));

// 26
const mergeWithDefaults = (defaults, config) => ({ ...defaults, ...config });
console.log(mergeWithDefaults({ a: 1, b: 2 }, { b: 10, c: 3 }));

// 27
const mergeAndSkip = (obj1, obj2, keyToSkip) => {
  const { [keyToSkip]: _, ...rest } = { ...obj1, ...obj2 };
  return rest;
};
console.log(mergeAndSkip({ a: 1 }, { b: 2, c: 3 }, "b"));

// 28
const updateNested = (obj, nestedKey, key, value) => ({
  ...obj,
  [nestedKey]: { ...obj[nestedKey], [key]: value },
});
console.log(updateNested({ a: { b: 1 } }, "a", "b", 2));

// 29
const arrayToObject = (array) => Object.fromEntries(array);
console.log(
  arrayToObject([
    ["a", 1],
    ["b", 2],
  ])
);

// 30
const combineUserDetails = (user, preferences, overrides) => ({
  ...user,
  ...preferences,
  ...overrides,
});
console.log(
  combineUserDetails({ name: "John", age: 30 }, { theme: "dark" }, { age: 31 })
);
