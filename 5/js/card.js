const cardTemplate = document.querySelector('#card').content;
const popup = cardTemplate.querySelector('.popup');
const similarListFragment = document.createDocumentFragment();
const WIDTH = 45;
const HEIGHT = 40;

const getNewFeaturesList = (features) => {
  similarListFragment;
  for (let i = 0; i < features.length; i++) {
    const newFeature = document.createElement('li');
    newFeature.classList.add('popup__feature');
    const featureUniqueClass = `popup__feature--${features[i]}`;
    newFeature.classList.add(featureUniqueClass);
    similarListFragment.appendChild(newFeature);
  }
  return similarListFragment;
};

const getNewPhotosList = (photos) => {
  similarListFragment;
  for (let i = 0; i < photos.length; i++) {
    const newImage = new Image(WIDTH, HEIGHT);
    newImage.classList.add('popup__photo');
    newImage.alt = 'Фотография жилья';
    newImage.src = photos[i];
    similarListFragment.appendChild(newImage);
  }
  return similarListFragment;
};

const renderCard = ({ author, offer }) => {

  const offerTypesMap = {
    'flat': 'Квартира',
    'bungalow': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец',
  };

  const card = popup.cloneNode(true);

  const hideElement = (className) => {
    card.querySelector(className).classList.add('hidden');
  }

  if (author.name) {
    card.querySelector('.popup__avatar').src = author.name;
  } else {
    hideElement('.popup__avatar');
  }
  if (offer.title) {
    card.querySelector('.popup__title').textContent = offer.title;
  } else {
    hideElement('.popup__title');
  }
  if (offer.address) {
    card.querySelector('.popup__text--address').textContent = offer.address;
  } else {
    hideElement('.popup__text--address');
  }
  if (offer.price) {
    card.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  } else {
    hideElement('.popup__text--price');
  }
  card.querySelector('.popup__type').textContent = offerTypesMap[offer.type];
  if (offer.rooms && offer.guests) {
    card.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else {
    hideElement('.popup__text--capacity');
  }
  if (offer.checkin && offer.checkout) {
    card.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    hideElement('.popup__text--time');
  }
  if((offer.features).length > 0) {
    let featuresList = card.querySelector('.popup__features');
    featuresList.innerHTML = '';
    featuresList.appendChild(getNewFeaturesList(offer.features));
  } else {
    hideElement('.popup__features');
  }
  if (offer.description) {
    card.querySelector('.popup__description').textContent = offer.description;
  } else {
    hideElement('.popup__description');
  }
  if((offer.photos).length > 0) {
    let photosList = card.querySelector('.popup__photos');
    photosList.innerHTML = '';
    photosList.appendChild(getNewPhotosList(offer.photos));
  } else {
    hideElement('.popup__photos');
  }

  return card;
};

export { renderCard };
