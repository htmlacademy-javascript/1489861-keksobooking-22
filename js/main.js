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

getRandomInteger(2, 9);
getRandomFixed(2, 3, 4);

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const getNewArray = (array) => {
  return array.slice(0, getRandomInteger(1, array.length - 1));
};

const OBJECT_COUNT = 10;

const AVATAR = {
  min: 1,
  max: 8,
};

const PRICE = {
  min: 1000,
  max: 50000,
};

const ROOMS = {
  min: 1,
  max: 5,
};

const GUESTS = {
  min: 1,
  max: 20,
};

const TYPE = ['palace', 'flat', 'house', 'bungalow'];

const CHECKIN = ['12:00', '13:00', '14:00'];

const CHECKOUT = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const createObject = () => {
  const pointX = getRandomFixed(35.65000, 35.70000, 5);
  const pointY = getRandomFixed(139.70000, 139.80000, 5);

  return {
    author: {
      name: 'img/avatars/user' + getRandomInteger(AVATAR.min, AVATAR.max) + '.png',
    },
    offer: {
      title: 'Заголовок',
      address: pointX + ', ' + pointY,
      price: getRandomInteger(PRICE.min, PRICE.max),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInteger(ROOMS.min, ROOMS.max),
      guests: getRandomInteger(GUESTS.min, GUESTS.max),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getNewArray(FEATURES),
      description: 'Описание',
      photos: getNewArray(PHOTOS),
    },
    location: {
      x: pointX,
      y: pointY,
    },
  };
};

const similarObjects = new Array(OBJECT_COUNT).fill(null).map(() => createObject());

similarObjects;
