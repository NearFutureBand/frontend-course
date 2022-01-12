
const {
  sum,
  copyArray,
  mutableFunction,
  login
} = require('../index');

const user = {
   "_id": "5e91ac983ed21bfcc",
    "index": 2,
    "guid": "b4820655-1036-46e7-994c-929291a2ff6b",
    "isActive": true,
    "balance": "$2,312.43",
    "picture": "https://avatars.dicebear.com/api/human/c.svg",
    "age": 39,
    "eyeColor": "green",
    "name": {
      "first": "Barr",
      "last": "Copeland"
    },
    "company": "NIPAZ",
    "email": "barr.copeland@nipaz.me",
    "phone": "+18465683597",
    "address": "793 Anna Court, Wanamie, Virginia, 1398",
    "about": "Est quis nulla nostrud et. Laboris nulla non adipisicing occaecat dolore. Aute consequat cillum mollit ea cupidatat amet magna magna adipisicing est sint eiusmod fugiat non. Commodo ad fugiat culpa mollit Lorem ea Lorem magna id laborum deserunt adipisicing et. Ut culpa dolore est est nostrud magna id nisi ad elit ullamco. Nisi et sunt sint magna aute aliqua adipisicing fugiat. Quis elit veniam ad id id.",
    "registered": "Wednesday, November 20, 2019 11:45 PM",
    "latitude": "69.268872",
    "longitude": "152.537354",
    "tags": [
      "culpa",
      "est",
      "sunt",
      "sint",
      "proident"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [],
    "greeting": "Hello, Barr! You have 10 unread messages.",
    "favoriteFruit": "strawberry",
    "passwordHash": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
};

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

describe('Login function testing with mock', () => {

  const axios = jest.createMockFromModule('axios');
  axios.post = function(url, data) {
    return new Promise((resolve) => {
      process.nextTick(() => {
        resolve({ data: user });
      });
    });
  }

  const testUserPhoneNumber = '+18465683597';
  const testUserPassword = '123';
  const userUniqueId = '5e91ac983ed21bfcc3e35c68';

  it('Should return user data', () => {
    login(testUserPhoneNumber, testUserPassword).then((response) => {
      expect(response.data._id).toBeDefined();
      expect(response.data._id).toBe(userUniqueId);
    });
  });

  it('Work wih resolves', () => {
    expect(login(testUserPhoneNumber, testUserPassword)).resolves.toHaveProperty('data');
  });
});

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
