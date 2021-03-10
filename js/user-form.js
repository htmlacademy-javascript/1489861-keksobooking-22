const typePlace = document.querySelector('#type');
const price = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const address = document.querySelector('#address');

const PlaceTypes = {
  BUNGALO: 'bungalow',
  FLAT: 'flat',
  HOUSE: 'house',
  PALACE: 'palace',
};

const placeTypeMap = {
  [PlaceTypes.BUNGALO]: {
    PLACEHOLDER: '0',
    PRICE_MIN: 0,
  },
  [PlaceTypes.FLAT]: {
    PLACEHOLDER: '1000',
    PRICE_MIN: 1000,
  },
  [PlaceTypes.HOUSE]: {
    PLACEHOLDER: '5000',
    PRICE_MIN: 5000,
  },
  [PlaceTypes.PALACE]: {
    PLACEHOLDER: '10000',
    PRICE_MIN: 10000,
  },
};

const setAddress = (x, y) => {
  address.value = `${x}, ${y}`;
};

typePlace.addEventListener('change', () => {
  price.placeholder = placeTypeMap[typePlace.value].PLACEHOLDER;
  price.min = placeTypeMap[typePlace.value].PRICE_MIN;
})

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

export { setAddress };
