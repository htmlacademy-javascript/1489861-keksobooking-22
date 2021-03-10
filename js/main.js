import { getSimilarObjects } from './data.js';
import { renderCard } from './card.js';
import './user-form.js';
import { disabledForm, disabledFilter } from './map-disable.js';
import { initMap } from './map.js';

const similarObjects = getSimilarObjects();
const [similarObjectFirstElement] = similarObjects;
const list = document.querySelector('.map__canvas');

const createCard = () => {
  list.appendChild(renderCard(similarObjectFirstElement));
};

disabledForm();
disabledFilter();
initMap();
