const typePlace = document.querySelector('#type');
const price = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

typePlace.addEventListener('change', () => {
  if (typePlace.value === 'bungalow') {
    price.placeholder = '0';
    price.min = 0;
  }
  if (typePlace.value === 'flat') {
    price.placeholder = '1000';
    price.min = 1000;
  }
  if (typePlace.value === 'house') {
    price.placeholder = '5000';
    price.min = 5000;
  }
  if (typePlace.value === 'palace') {
    price.placeholder = '10000';
    price.min = 10000;
  }
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});
