const form = document.querySelector('.ad-form');
const formElements = document.querySelectorAll('fieldset');
const filter = document.querySelector('.map__filters');
const filterElements = document.querySelectorAll('select');

const disabledForm = () => {
  form.classList.add('ad-form--disabled');
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].setAttribute('disabled', 'disabled');
  }
}

const disabledFilter = () => {
  filter.classList.add('map__filters--disabled');
  for (let i = 0; i < filterElements.length; i++) {
    filterElements[i].setAttribute('disabled', 'disabled');
  }
}

const enabledForm = () => {
  form.classList.remove('ad-form--disabled');
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].removeAttribute('disabled', 'disabled');
  }
}

const enabledFilter = () => {
  filter.classList.remove('map__filters--disabled');
  for (let i = 0; i < filterElements.length; i++) {
    filterElements[i].removeAttribute('disabled', 'disabled');
  }
}

export { disabledForm, disabledFilter, enabledForm, enabledFilter };
