// Генератор числа в диапазоне
const NUMBER_OF_OBJECTS = 25;
const getRandomNumber = (from, to) => {
  if (from < 0 || to < 0) {
    return NaN;
  }
  if (Number.isInteger(from) && Number.isInteger(to)) {
    if (from < to) {
      return Math.floor(Math.random() * (to - from + 1)) + from;
    } else {
      return NaN;
    }
  } else {
    return NaN;
  }
};

const descriptionPhoto = [
  'Пляж',
  'Море',
  'Кот-суши',
  'Девушка',
  'Крутая тачка',
  'Концерт',
  'Компотик',
  'Отпуск',
  'Полет'
];

//Создание индекса массива описаний фотографий.
const getArrayElement = () => getRandomNumber(0, descriptionPhoto.length - 1);

// создание массива случайных, неповторяющихся чисел фиксированной длинны.
const createArrayFixLength = () => {
  const arrayUnicNumbers = [];
  while (arrayUnicNumbers.length < NUMBER_OF_OBJECTS) {
    const randomNumber = getRandomNumber(1, NUMBER_OF_OBJECTS);
    if(arrayUnicNumbers.indexOf(randomNumber) === -1) {
      arrayUnicNumbers.push(randomNumber);
    }
  }
  return arrayUnicNumbers;
};

//Функция создающая один объект.
const createPhoto = function(unicNumberId, unicNumberOfPhoto) {
  return {
    id: unicNumberId,
    url: `photos/${unicNumberOfPhoto}.jpg`,
    description: descriptionPhoto[getArrayElement()],
    likes: getRandomNumber(15, 200),
    comments: getRandomNumber(0, 200)
  };
};

const photos = () => {
  const arrayOfObjects = [];
  const unicId = createArrayFixLength(NUMBER_OF_OBJECTS);
  const unicNumberOfPhoto = createArrayFixLength(NUMBER_OF_OBJECTS);
  for(let i = 0; i < NUMBER_OF_OBJECTS; i++) {
    arrayOfObjects.push(createPhoto(unicId[i],unicNumberOfPhoto[i]));
  }
  return arrayOfObjects;
};

photos();
