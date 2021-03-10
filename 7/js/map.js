/* global L:readonly */
import { enabledForm, enabledFilter } from './map-disable.js';
import { setAddress } from './user-form.js';
import { getSimilarObjects } from './data.js';

getSimilarObjects;   //Для проверки на гите

const Coordinates = {
  width: 35.68950,
  longitude: 139.69171,
};

setAddress(Coordinates.width, Coordinates.longitude);

const map = L.map('map-canvas');

const initMap = () => {
  map.on('load', () => {
    enabledForm();
    enabledFilter();
  })
  map.setView({
    lat: Coordinates.width,
    lng: Coordinates.longitude,
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
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

// const pinIcon = L.icon({
//   iconUrl: './img/pin.svg',
//   iconSize: [52, 52],
//   iconAnchor: [26, 52],
// });

const marker = L.marker(
  {
    lat: Coordinates.width,
    lng: Coordinates.longitude,
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


export { initMap };
