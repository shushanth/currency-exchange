import { isArrayEmpty } from '../utils';

describe('method: isArrayEmpty', () => {
  let emptyArr: any;
  let testArrStr: any;
  let testArrObj: any;
  beforeAll(() => {
    emptyArr = [];
    testArrStr = ['1', '2', '3'];
    testArrObj = [
      { name: 'sam', id: 1 },
      { name: 'maddy', id: 2 },
    ];
  });
  test('should return true if the passed array is empty', () => {
    const isArrEmpty = isArrayEmpty(emptyArr);
    expect(isArrEmpty).toBe(true);
  });

  test('should return false , if the passed array is not empty', () => {
    const isArrEmpty = isArrayEmpty(testArrStr);
    expect(isArrEmpty).toBe(false);
  });

  test('should return false , if the passed array is not empty', () => {
    const isArrEmpty = isArrayEmpty(testArrObj);
    expect(isArrEmpty).toBe(false);
  });
});
