const getRandomNumber = function(min, max) {
  return Math.random() * (max - min + 1) + min;
}

getRandomNumber(1, 20);
//console.log(getRandomNumber(1, 20));


const getRandomInteger = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0 ||  max <= min) {
    return undefined;
  }

  return Math.floor(getRandomNumber(min, max));
}

getRandomInteger(0, 10);
//console.log(getRandomInteger(0, 10));

const getRandomFixed = function (min, max, fixedNumber) {
  const rand = getRandomNumber(min, max);

  return rand.toFixed(fixedNumber);
}

getRandomFixed(1, 20, 3);
//console.log(getRandom(1, 20, 3));
