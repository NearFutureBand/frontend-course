
const {
  sum,
  copyArray,
  mutableFunction,
  login
} = require('../index');

describe('Sum function', () => {
  test('Should sum two variables', () => {
    expect(sum(5,6)).toBe(11);
    expect(sum(5.5,6.1)).toBeGreaterThan(11);
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    expect(sum(1,2)).toBeDefined();
    expect(sum(1,2)).toBeTruthy();
    expect(sum(1,2)).not.toBeFalsy();
  });
});

describe('Copy array function', () => {
  const arr = [1,2,3];
  test('Should have the same values', () => {
    expect(copyArray(arr)).toEqual(arr);
    
  });

  test('Should create brand new array', () => {
    expect(copyArray(arr)).not.toBe(arr);
  });
});

describe('Mutable function', () => {

  let A;

  beforeEach(() => {
    A = { checked: false, value: 'previousValue' };
  });

  test('Should set checked property to true', () => {
    expect(A.checked).toBe(false);
    mutableFunction(A);
    expect(A.checked).toBe(true);
  });

  test('Should set value property to `newValue`', () => {
    expect(A.checked).toBe(false);
    expect(A.value).toBe('previousValue');
    mutableFunction(A);
    expect(A.value).toBe('newValue');
  });
});

/*describe('Login function testing with mock', () => {
  jest.mock('../__mocks__/axios');
  const testUserPhoneNumber = '+18465683597';
  const testUserPassword = '123';
  const userUniqueId = '5e91ac983ed21bfcc3e35c68';

  it ('Should return user data', () => {
    login(testUserPhoneNumber, testUserPassword).then((response) => {
      expect(response._id).toBeDefined();
    });
  })

  it ('Work wih resolves', () => {
    expect(login(testUserPhoneNumber, testUserPassword)).resolves.toHaveProperty('_id', userUniqueId)
  })
  
});*/

describe('Async function: login', () => {

  let loginResponse;
  const testUserPhoneNumber = '+18465683597';
  const testUserPassword = '123';
  const userUniqueId = '5e91ac983ed21bfcc3e35c68';

  beforeEach(() => {
    return login(testUserPhoneNumber, testUserPassword).then((response) => {
      loginResponse = response;
      expect(loginResponse).toBeDefined();
      expect(loginResponse.data).toBeDefined();
    });
  });

  test('Should return correct user', async () => {
    expect(loginResponse.data.phone).toBe(testUserPhoneNumber);
    expect(loginResponse.data._id).toBe(userUniqueId);
  });

  test('Should return token', async () => {
    expect(loginResponse.data.token).toBeDefined();
  });
});
