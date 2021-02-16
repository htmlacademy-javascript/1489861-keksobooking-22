const OBJECT_COUNT = 10;

const TYPE = ['palace', 'flat', 'house', 'bungalow'];

const CHECKIN = ['12:00', '13:00', '14:00'];

const CHECKOUT = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const Avatar = {
  MIN: 1,
  MAX: 8,
};

const Price = {
  MIN: 1000,
  MAX: 50000,
};

const Rooms = {
  MIN: 1,
  MAX: 5,
};

const Guests = {
  MIN: 1,
  MAX: 20,
};

const getRandomNumber = function(min, max) {
  if (min < 0 || max <= min) {
    throw new Error('Неверные данные')
  }

  return Math.random() * (max - min + 1) + min;
}

//Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random


const getRandomInteger = function(min, max) {
  return Math.floor(getRandomNumber(min, max));
}

const getRandomFixed = function (min, max, fixedNumber) {
  const rand = +(getRandomNumber(min, max));

  return rand.toFixed(fixedNumber);
}

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const photoRandom = getRandomInteger(1, PHOTOS.length);
const featureRandom = getRandomInteger(1, FEATURES.length);


const getNewArray = (array, randomNumber) => {
  const someArray = [];
  for (let i = 0; i <= randomNumber; i++) {
    someArray.push(array[i]);
  }
  const newArray = new Set(someArray);
  return Array.from(newArray);
};

const createObject = () => {
  const pointX = getRandomFixed(35.65000, 35.70000, 5);
  const pointY = getRandomFixed(139.70000, 139.80000, 5);

  return {
    author: {
      name: 'img/avatars/user0' + getRandomInteger(Avatar.MIN, Avatar.MAX) + '.png',
    },
    offer: {
      title: 'Заголовок',
      address: pointX + ', ' + pointY,
      price: getRandomInteger(Price.MIN, Price.MAX),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInteger(Rooms.MIN, Rooms.MAX),
      guests: getRandomInteger(Guests.MIN, Guests.MAX),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getNewArray(FEATURES, featureRandom),
      description: 'Описание',
      photos: getNewArray(PHOTOS, photoRandom),
    },
    location: {
      x: pointX,
      y: pointY,
    },
  };
};

const similarObjects = new Array(OBJECT_COUNT).fill(null).map(() => createObject());

similarObjects;
