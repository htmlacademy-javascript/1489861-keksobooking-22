const list = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content;
const popup = cardTemplate.querySelector('.popup');

const renderCard = ({ author, offer }) => {
  // let type;
  // if (offer.type = 'palace') {
  //   type = 'Дворец';
  // }
  // if (offer.type = 'flat') {
  //   type = 'Квартира';
  // }
  // if (offer.type = 'house') {
  //   type = 'Дом';
  // }
  // if (offer.type = 'bungalow') {
  //   type = 'Бунгало';
  // }

  const getOfferType = (types) => {
    switch (types) {
      case 'flat':
        return 'Квартира';
      case 'bungalow':
        return 'Бунгало';
      case 'house':
        return 'Дом';
      case 'palace':
        return 'Дворец';
      default:
        return 'Любой тип жилья';
    }
  };

  const offerType = getOfferType(offer.types);

  const card = popup.cloneNode(true);
  if (author.name) {
    card.querySelector('.popup__avatar').src = author.name;
  } else {
    card.querySelector('.popup__avatar').classList.add('hidden');
  }
  if (offer.title) {
    card.querySelector('.popup__title').textContent = offer.title;
  } else {
    card.querySelector('.popup__title').classList.add('hidden');
  }
  if (offer.address) {
    card.querySelector('.popup__text--address').textContent = offer.address;
  } else {
    card.querySelector('.popup__text--address').classList.add('hidden');
  }
  if (offer.price) {
    card.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  } else {
    card.querySelector('.popup__text--price').classList.add('hidden');
  }
  card.querySelector('.popup__type').textContent = offerType;
  if (offer.rooms && offer.guests) {
    card.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else {
    card.querySelector('.popup__text--capacity').classList.add('hidden');
  }
  if (offer.checkin && offer.checkout) {
    card.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    card.querySelector('.popup__text--time').classList.add('hidden');
  }

  if((offer.features).length > 0) {
    let featuresList = card.querySelector('.popup__features');
    featuresList.textContent = '';
    offer.features.forEach((feature) => {
      const newFeature = document.createElement('li');
      newFeature.classList.add('popup__feature');
      const featureUniqueClass = `popup__feature--${feature}`;
      newFeature.classList.add(featureUniqueClass);
      featuresList.append(newFeature);
    });
  } else {
    card.querySelector('.popup__features').classList.add('hidden');
  }

  if (offer.description) {
    card.querySelector('.popup__description').textContent = offer.description;
  } else {
    card.querySelector('.popup__description').classList.add('hidden');
  }

  if((offer.photos).length > 0) {
    let photosList = card.querySelector('.popup__photos');
    photosList.textContent = '';
    offer.photos.forEach((photo) => {
      const newImage = new Image(45, 40);
      newImage.classList.add('popup__photo');
      newImage.alt = 'Фотография жилья';
      newImage.src = photo;
      photosList.appendChild(newImage);
    });
  } else {
    card.querySelector('.popup__photos').classList.add('hidden');
  }

  return list.appendChild(card);
}

export { renderCard };
