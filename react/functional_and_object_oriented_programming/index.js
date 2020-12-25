// замыкания closure
// пример 1
/*
let a1 = 4;

const f1 = (b1) => {
  console.log({ a1, b1 });
}

a1 = 2;
f1(1);
a1 = 3;
f1(1);
*/


















/*
// пример 2
let useState = (defaultValue) => {
  let a = defaultValue;

  const getter = () => {
    return a;
  }

  const setter = (newValue) => {
    if (newValue > 0) {
      a = newValue;
    }
  }

  return [getter, setter];
}

const [getParameter, setParamter] = useState(4);

console.log(getParameter());
setParamter(5);
console.log(getParameter());
*/

/*
// a здесь undefined
const update1 = f();
update1(4);
update1(2);

const update2 = f();
update2(3);
*/











// пример 3
/*
let a = 10;
const f = () => {
  let a = 4;
  return (newValueForA) => {
    a = newValueForA;
    console.log({ a });
  }
}

console.log(a); // 10
const update = f();
update(5); // 5
console.log(a); // 10
*/








// пример 4 - мемоизация
/*
const power3 = (x) => x ** 3; // возводит в куб
console.log(power3(2));


const memoized = () => {
  //  сохраненные результаты
  const cache = {};
  return (x) => {
    if (x in cache) {
      console.log('result is already cached', cache);
      return cache[x];
    } // else не надо потому что в if есть return
    const result = x ** 3;
    cache[x] = result;
    return result;
  }
}

const pw3 = memoizedPower3();
console.log(pw3(3));
console.log(pw3(4));
console.log(pw3(3));
*/


// пример 5 - debounce









// пример 6 - чистые функции
/*
let a = 4;
const closureF = (b) => {
  return a + b;
}
a = 5;


const pureF = (a, b) => {
  return a + b;
}

console.log(closureF(2)); // 7
console.log(pureF(1, 2)); // 3
*/









// пример 7 reducer
/*
const initialState = {
  a: 1,
}

const reducer = (state = initialState, action) => {
  if (action.type === 'SOME_ACTION') {
    return {
      ...state,
      a: action.payload,
    }
  }
  return state;
}
*/




// пример 8 иммутабельность

// пример с глобальной переменной и замыканиями (некрасиво)
/*let data = [1, 14, 6, 3, 2, 7, 9];

const multiplyBy3 = () => {
  data.forEach((item, i) => data[i] *= 3);
}
const getOnlyEven = () => {
  let even = [];
  data.forEach(item => {
    if (item % 2 === 0) {
      even.push(item);
    }
  });
  return even;
}
const sum = () => {
  let summ = 0;
  data.forEach(item => summ += item);
  return summ;
}

console.log(data);
multiplyBy3();
console.log(data);
data = getOnlyEven();
console.log(data);
console.log(sum());
*/

// пример с чистыми функциями и иммутабельностью
/*
const data2 = [1, 14, 6, 3, 2, 7, 9];

console.log(
  data2
    .map(item => item * 3)
    .filter(item => item % 2 === 0)
    .reduce((sum, item) => sum + item, 0)
); //  отображение, фильтрация, приведение

*/












// пример кастомная чистая функция с иммутабельностью
/*
const data = [1, 14, 6, 3, 2, 7, 9];


const transform = (data) => {
  const result = [...data];
  result.forEach((item, i) => {
    result[i] = parseFloat('0.' + item);
  });
  return result;
}

const dataModified = transform(data);
console.log({ data, dataModified });
*/

// пример 9 каррирование
/*const volume = (width, height, length) => width * height * length;

const volume2 = (width) => {
  return (height) => {
    return (length) => {
      return width * height * length;
    }
  }
}*/
/*
const volumeWithWidth5 = volume2(5);
console.log(volumeWithWidth5(3)(4));

const volumeWithWidth5AndHeight3 = volumeWithWidth5(3);

console.log(volumeWithWidth5AndHeight3(2));
console.log(volume2(5)(3)(2));

console.log(volumeWithWidth5AndHeight3(3));
*/

/*
const square2 = (width) => (height) => width * height;

console.log(square2(10)(5));
const squareForWidth10 = square2(10);
console.log(squareForWidth10(5));
*/







