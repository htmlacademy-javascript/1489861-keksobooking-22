import { getSimilarObjects } from './data.js';
import { renderCard } from './card.js';

const similarObjects = getSimilarObjects();

const [similarObjectFirstElement] = similarObjects;
renderCard(similarObjectFirstElement);
