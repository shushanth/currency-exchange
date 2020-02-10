/**
 * utils
 *
 */

/**
 * @param: array
 * @description: return boolean on whether passed array is empty or not
 * Array.isArray determines whether the passed value is Array and also check for the emptiness of array
 * Browser capability is chrome-5 , ie-9, FF -4.0
 *return true is array is empty , return false if array is not empty
 */
export const isArrayEmpty = (arr: Array<any> | []) =>
  !(Array.isArray(arr) && arr.length);

// TODO : instead of the below, npm package could also be used
export const uuid = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x1000)
      .toString(16)
      .substring(1);
  };
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
};
