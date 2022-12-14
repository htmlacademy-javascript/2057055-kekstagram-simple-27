import {getRandomNumber, getArrayElement} from './utils.js';

const NUMBER_OF_OBJECTS = 25;

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

export {photos, descriptionPhoto};
