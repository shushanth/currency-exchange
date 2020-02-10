/**
 * utils
 *
 */
export const POLLING_INTERVAL = 10000;
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
