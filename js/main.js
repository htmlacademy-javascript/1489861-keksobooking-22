const getRandomNumber = function(min, max) {
  if (min < 0 || max <= min) {
    console.error('Неверные значения')
    return null;
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
