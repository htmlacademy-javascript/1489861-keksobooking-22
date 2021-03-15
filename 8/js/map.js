/* global L:readonly */
import { activate } from './map-disable.js';
import { setAddress } from './user-form.js';
import { getSimilarObjects } from './data.js';
import { renderCard } from './card.js';

const Coordinates = {
  WIDTH: 35.68950,
  LONGITUDE: 139.69171,
};

const mainIconSize = {
  WIDTH: 52,
  HEIGHT: 52,
};

const iconSize = {
  WIDTH: 52,
  HEIGHT: 52,
};

setAddress(Coordinates.WIDTH, Coordinates.LONGITUDE);

const map = L.map('map-canvas');

const initMap = () => {
  map.on('load', () => {
    activate();
  })
  map.setView({
    lat: Coordinates.WIDTH,
    lng: Coordinates.LONGITUDE,
  }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [mainIconSize.WIDTH, mainIconSize.HEIGHT],
  iconAnchor: [mainIconSize.WIDTH/2, mainIconSize.HEIGHT],
});

const marker = L.marker(
  {
    lat: Coordinates.WIDTH,
    lng: Coordinates.LONGITUDE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

marker.on('moveend', (evt) => {
  setAddress(evt.target.getLatLng().lat.toFixed(5), evt.target.getLatLng().lng.toFixed(5));
});

const similarObjects = getSimilarObjects();

similarObjects.forEach((point) => {
  const {x:lat, y:lng} = point.location;

  const pinIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [iconSize.WIDTH, iconSize.HEIGHT],
    iconAnchor: [iconSize.WIDTH/2, iconSize.HEIGHT],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      pinIcon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      renderCard(point),
      {
        keepInView: true,
      },
    );
});

export { initMap };
